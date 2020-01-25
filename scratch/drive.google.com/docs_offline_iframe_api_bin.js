(function() {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function m() {
    return function() {}
  }

  function n(a) {
    return function() {
      return this[a]
    }
  }

  function aa(a) {
    return function() {
      return a
    }
  }
  var q;

  function ba(a) {
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
  var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    da = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

  function ea() {
    ea = m();
    da.Symbol || (da.Symbol = fa)
  }

  function ha(a, b) {
    this.g = a;
    ca(this, "description", {
      configurable: !0,
      writable: !0,
      value: b
    })
  }
  ha.prototype.toString = n("g");
  var fa = function() {
    function a(c) {
      if (this instanceof a) throw new TypeError("Symbol is not a constructor");
      return new ha("jscomp_symbol_" + (c || "") + "_" + b++, c)
    }
    var b = 0;
    return a
  }();

  function ia() {
    ea();
    var a = da.Symbol.iterator;
    a || (a = da.Symbol.iterator = da.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && ca(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function() {
        return ja(ba(this))
      }
    });
    ia = m()
  }

  function ja(a) {
    ia();
    a = {
      next: a
    };
    a[da.Symbol.iterator] = function() {
      return this
    };
    return a
  }

  function ka(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: ba(a)
    }
  }

  function la(a) {
    if (!(a instanceof Array)) {
      a = ka(a);
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      a = c
    }
    return a
  }
  var ma = "function" == typeof Object.create ? Object.create : function(a) {
      function b() {}
      b.prototype = a;
      return new b
    },
    na;
  if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
  else {
    var oa;
    a: {
      var pa = {
          a: !0
        },
        qa = {};
      try {
        qa.__proto__ = pa;
        oa = qa.a;
        break a
      } catch (a) {}
      oa = !1
    }
    na = oa ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ra = na;

  function r(a, b) {
    a.prototype = ma(b.prototype);
    a.prototype.constructor = a;
    if (ra) ra(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c];
    a.ha = b.prototype
  }

  function sa(a, b) {
    if (b) {
      var c = da;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e]
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && ca(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      })
    }
  }

  function ta(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
  }
  sa("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
      var c = ta(this, null, "repeat");
      if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b;)
        if (b & 1 && (d += c), b >>>= 1) c += c;
      return d
    }
  });
  sa("Object.is", function(a) {
    return a ? a : function(b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
  });

  function ua(a, b) {
    ia();
    a instanceof String && (a += "");
    var c = 0,
      d = {
        next: function() {
          if (c < a.length) {
            var e = c++;
            return {
              value: b(e, a[e]),
              done: !1
            }
          }
          d.next = function() {
            return {
              done: !0,
              value: void 0
            }
          };
          return d.next()
        }
      };
    d[Symbol.iterator] = function() {
      return d
    };
    return d
  }
  sa("Array.prototype.values", function(a) {
    return a ? a : function() {
      return ua(this, function(b, c) {
        return c
      })
    }
  });

  function va(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  sa("WeakMap", function(a) {
    function b(k) {
      this.g = (h += Math.random() + 1).toString();
      if (k) {
        k = ka(k);
        for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
      }
    }

    function c() {}

    function d(k) {
      var l = typeof k;
      return "object" === l && null !== k || "function" === l
    }

    function e(k) {
      if (!va(k, g)) {
        var l = new c;
        ca(k, g, {
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
        } catch (u) {
          return !1
        }
      }()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function(k, l) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!va(k, g)) throw Error("WeakMap key fail: " + k);
      k[g][this.g] = l;
      return this
    };
    b.prototype.get = function(k) {
      return d(k) && va(k, g) ? k[g][this.g] : void 0
    };
    b.prototype.has = function(k) {
      return d(k) && va(k, g) && va(k[g],
        this.g)
    };
    b.prototype.delete = function(k) {
      return d(k) && va(k, g) && va(k[g], this.g) ? delete k[g][this.g] : !1
    };
    return b
  });
  sa("Map", function(a) {
    function b() {
      var h = {};
      return h.pa = h.next = h.head = h
    }

    function c(h, k) {
      var l = h.g;
      return ja(function() {
        if (l) {
          for (; l.head != h.g;) l = l.pa;
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

    function d(h, k) {
      var l = k && typeof k;
      "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
      var p = h.j[l];
      if (p && va(h.j, l))
        for (h = 0; h < p.length; h++) {
          var u = p[h];
          if (k !== k && u.key !== u.key || k === u.key) return {
            id: l,
            list: p,
            index: h,
            ea: u
          }
        }
      return {
        id: l,
        list: p,
        index: -1,
        ea: void 0
      }
    }

    function e(h) {
      this.j = {};
      this.g = b();
      this.size = 0;
      if (h) {
        h = ka(h);
        for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
      }
    }
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var h = Object.seal({
              x: 4
            }),
            k = new a(ka([
              [h, "s"]
            ]));
          if ("s" != k.get(h) || 1 != k.size || k.get({
              x: 4
            }) || k.set({
              x: 4
            }, "t") != k || 2 != k.size) return !1;
          var l = k.entries(),
            p = l.next();
          if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
          p = l.next();
          return p.done || 4 != p.value[0].x ||
            "t" != p.value[1] || !l.next().done ? !1 : !0
        } catch (u) {
          return !1
        }
      }()) return a;
    ia();
    var f = new WeakMap;
    e.prototype.set = function(h, k) {
      h = 0 === h ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this.j[l.id] = []);
      l.ea ? l.ea.value = k : (l.ea = {
        next: this.g,
        pa: this.g.pa,
        head: this.g,
        key: h,
        value: k
      }, l.list.push(l.ea), this.g.pa.next = l.ea, this.g.pa = l.ea, this.size++);
      return this
    };
    e.prototype.delete = function(h) {
      h = d(this, h);
      return h.ea && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.j[h.id], h.ea.pa.next = h.ea.next, h.ea.next.pa = h.ea.pa,
        h.ea.head = null, this.size--, !0) : !1
    };
    e.prototype.clear = function() {
      this.j = {};
      this.g = this.g.pa = b();
      this.size = 0
    };
    e.prototype.has = function(h) {
      return !!d(this, h).ea
    };
    e.prototype.get = function(h) {
      return (h = d(this, h).ea) && h.value
    };
    e.prototype.entries = function() {
      return c(this, function(h) {
        return [h.key, h.value]
      })
    };
    e.prototype.keys = function() {
      return c(this, function(h) {
        return h.key
      })
    };
    e.prototype.values = function() {
      return c(this, function(h) {
        return h.value
      })
    };
    e.prototype.forEach = function(h, k) {
      for (var l = this.entries(),
          p; !(p = l.next()).done;) p = p.value, h.call(k, p[1], p[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
  });
  sa("Array.prototype.keys", function(a) {
    return a ? a : function() {
      return ua(this, function(b) {
        return b
      })
    }
  });
  var wa = function() {
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
      e = ma(e.prototype || Object.prototype);
      return Function.prototype.apply.call(c, e, d) || e
    }
  }();
  sa("Reflect.construct", function() {
    return wa
  });
  sa("Promise", function(a) {
    function b(g) {
      this.j = 0;
      this.o = void 0;
      this.g = [];
      var h = this.v();
      try {
        g(h.resolve, h.reject)
      } catch (k) {
        h.reject(k)
      }
    }

    function c() {
      this.g = null
    }

    function d(g) {
      return g instanceof b ? g : new b(function(h) {
        h(g)
      })
    }
    if (a) return a;
    c.prototype.j = function(g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.o(function() {
          h.A()
        })
      }
      this.g.push(g)
    };
    var e = da.setTimeout;
    c.prototype.o = function(g) {
      e(g, 0)
    };
    c.prototype.A = function() {
      for (; this.g && this.g.length;) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k =
            g[h];
          g[h] = null;
          try {
            k()
          } catch (l) {
            this.v(l)
          }
        }
      }
      this.g = null
    };
    c.prototype.v = function(g) {
      this.o(function() {
        throw g;
      })
    };
    b.prototype.v = function() {
      function g(l) {
        return function(p) {
          k || (k = !0, l.call(h, p))
        }
      }
      var h = this,
        k = !1;
      return {
        resolve: g(this.C),
        reject: g(this.A)
      }
    };
    b.prototype.C = function(g) {
      if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b) this.G(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1
        }
        h ? this.L(g) : this.w(g)
      }
    };
    b.prototype.L = function(g) {
      var h = void 0;
      try {
        h = g.then
      } catch (k) {
        this.A(k);
        return
      }
      "function" == typeof h ? this.I(h, g) : this.w(g)
    };
    b.prototype.A = function(g) {
      this.D(2, g)
    };
    b.prototype.w = function(g) {
      this.D(1, g)
    };
    b.prototype.D = function(g, h) {
      if (0 != this.j) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
      this.j = g;
      this.o = h;
      this.B()
    };
    b.prototype.B = function() {
      if (null != this.g) {
        for (var g = 0; g < this.g.length; ++g) f.j(this.g[g]);
        this.g = null
      }
    };
    var f = new c;
    b.prototype.G = function(g) {
      var h = this.v();
      g.Sa(h.resolve, h.reject)
    };
    b.prototype.I = function(g, h) {
      var k = this.v();
      try {
        g.call(h, k.resolve, k.reject)
      } catch (l) {
        k.reject(l)
      }
    };
    b.prototype.then = function(g, h) {
      function k(z, v) {
        return "function" == typeof z ? function(K) {
          try {
            l(z(K))
          } catch (N) {
            p(N)
          }
        } : v
      }
      var l, p, u = new b(function(z, v) {
        l = z;
        p = v
      });
      this.Sa(k(g, l), k(h, p));
      return u
    };
    b.prototype.catch = function(g) {
      return this.then(void 0, g)
    };
    b.prototype.Sa = function(g, h) {
      function k() {
        switch (l.j) {
          case 1:
            g(l.o);
            break;
          case 2:
            h(l.o);
            break;
          default:
            throw Error("Unexpected state: " +
              l.j);
        }
      }
      var l = this;
      null == this.g ? f.j(k) : this.g.push(k)
    };
    b.resolve = d;
    b.reject = function(g) {
      return new b(function(h, k) {
        k(g)
      })
    };
    b.race = function(g) {
      return new b(function(h, k) {
        for (var l = ka(g), p = l.next(); !p.done; p = l.next()) d(p.value).Sa(h, k)
      })
    };
    b.all = function(g) {
      var h = ka(g),
        k = h.next();
      return k.done ? d([]) : new b(function(l, p) {
        function u(K) {
          return function(N) {
            z[K] = N;
            v--;
            0 == v && l(z)
          }
        }
        var z = [],
          v = 0;
        do z.push(void 0), v++, d(k.value).Sa(u(z.length - 1), p), k = h.next(); while (!k.done)
      })
    };
    return b
  });
  sa("Set", function(a) {
    function b(c) {
      this.g = new Map;
      if (c) {
        c = ka(c);
        for (var d; !(d = c.next()).done;) this.add(d.value)
      }
      this.size = this.g.size
    }
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var c = Object.seal({
              x: 4
            }),
            d = new a(ka([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
              x: 4
            }) != d || 2 != d.size) return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x ||
            f.value[1] != f.value[0] ? !1 : e.next().done
        } catch (g) {
          return !1
        }
      }()) return a;
    ia();
    b.prototype.add = function(c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this
    };
    b.prototype.delete = function(c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c
    };
    b.prototype.clear = function() {
      this.g.clear();
      this.size = 0
    };
    b.prototype.has = function(c) {
      return this.g.has(c)
    };
    b.prototype.entries = function() {
      return this.g.entries()
    };
    b.prototype.values = function() {
      return this.g.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
      var e = this;
      this.g.forEach(function(f) {
        return c.call(d, f, f, e)
      })
    };
    return b
  });
  sa("Object.values", function(a) {
    return a ? a : function(b) {
      var c = [],
        d;
      for (d in b) va(b, d) && c.push(b[d]);
      return c
    }
  });
  sa("Array.prototype.includes", function(a) {
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
  sa("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      return -1 !== ta(this, b, "includes").indexOf(b, c || 0)
    }
  });
  sa("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
      return this.then(function(c) {
        return Promise.resolve(b()).then(function() {
          return c
        })
      }, function(c) {
        return Promise.resolve(b()).then(function() {
          throw c;
        })
      })
    }
  });
  var xa = xa || {},
    t = this || self,
    ya = /^[\w+/_-]+[=]{0,2}$/,
    za = null;

  function Aa(a) {
    a = a.split(".");
    for (var b = t, c = 0; c < a.length; c++)
      if (b = b[a[c]], null == b) return null;
    return b
  }

  function Ba() {}

  function Ca(a) {
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

  function Da(a) {
    return "array" == Ca(a)
  }

  function Ea(a) {
    var b = Ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  }

  function Fa(a) {
    return "function" == Ca(a)
  }

  function Ga(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  }
  var Ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Ia = 0;

  function Ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function Ka(a, b, c) {
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

  function w(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = Ja : w = Ka;
    return w.apply(null, arguments)
  }

  function La(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d)
    }
  }
  var x = Date.now || function() {
    return +new Date
  };

  function Ma(a) {
    if (t.execScript) t.execScript(a, "JavaScript");
    else if (t.eval) {
      if (null == Na) {
        try {
          t.eval("var _evalTest_ = 1;")
        } catch (d) {}
        if ("undefined" != typeof t._evalTest_) {
          try {
            delete t._evalTest_
          } catch (d) {}
          Na = !0
        } else Na = !1
      }
      if (Na) t.eval(a);
      else {
        var b = t.document,
          c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.head.appendChild(c);
        b.head.removeChild(c)
      }
    } else throw Error("goog.globalEval not available");
  }
  var Na = null;

  function y(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ha = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
  };

  function A(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, A);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  }
  y(A, Error);
  A.prototype.name = "CustomError";
  var Oa;

  function Pa(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0)
  }

  function Ra(a, b, c) {
    Array.prototype.forEach.call(a, b, c)
  }

  function Sa(a, b) {
    return Array.prototype.some.call(a, b, void 0)
  }

  function Ua(a) {
    a: {
      var b = Va;
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a
        } b = -1
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
  }

  function Wa(a, b) {
    b = Pa(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c
  }

  function Xa(a) {
    return Array.prototype.concat.apply([], arguments)
  }

  function Ya(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  }

  function Za(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ea(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g]
      } else a.push(d)
    }
  }

  function $a(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
  }

  function ab(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
      var e = a[d++];
      var f = e;
      f = Ga(f) ? "o" + (f[Ha] || (f[Ha] = ++Ia)) : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
    }
    a.length = c
  };

  function bb(a) {
    var b = b || 0;
    return function() {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
  };

  function cb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }

  function db(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }

  function eb(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  }

  function fb(a, b) {
    return null !== a && b in a
  }

  function gb(a) {
    var b = hb,
      c;
    for (c in b)
      if (a.call(void 0, b[c], c, b)) return c
  }

  function ib(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  }
  var jb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function kb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < jb.length; f++) c = jb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }

  function lb(a) {
    var b = arguments.length;
    if (1 == b && Da(arguments[0])) return lb.apply(null, arguments[0]);
    if (b % 2) throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
    return c
  };

  function mb(a, b) {
    this.g = a === nb && b || "";
    this.j = ob
  }
  mb.prototype.mb = !0;
  mb.prototype.kb = n("g");
  var ob = {},
    nb = {},
    pb = new mb(nb, "");

  function qb(a, b) {
    this.g = a === rb && b || "";
    this.j = sb
  }
  qb.prototype.mb = !0;
  qb.prototype.kb = function() {
    return this.g.toString()
  };

  function tb(a) {
    if (a instanceof qb && a.constructor === qb && a.j === sb) return a.g;
    Ca(a);
    return "type_error:TrustedResourceUrl"
  }
  var sb = {},
    rb = {};

  function ub(a, b) {
    return 0 == a.lastIndexOf(b, 0)
  }
  var vb = String.prototype.trim ? function(a) {
    return a.trim()
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
  };

  function wb(a) {
    var b = 0,
      c = vb(String(xb)).split(".");
    a = vb(String(a)).split(".");
    for (var d = Math.max(c.length, a.length), e = 0; 0 == b && e < d; e++) {
      var f = c[e] || "",
        g = a[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        b = yb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || yb(0 == f[2].length, 0 == g[2].length) || yb(f[2], g[2]);
        f = f[3];
        g = g[3]
      } while (0 == b)
    }
    return b
  }

  function yb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  };
  var zb;
  a: {
    var Ab = t.navigator;
    if (Ab) {
      var Bb = Ab.userAgent;
      if (Bb) {
        zb = Bb;
        break a
      }
    }
    zb = ""
  }

  function B(a) {
    return -1 != zb.indexOf(a)
  };

  function Cb() {
    return B("Firefox") || B("FxiOS")
  }

  function Db() {
    return (B("Chrome") || B("CriOS")) && !B("Edge")
  };

  function Eb() {
    this.g = "";
    this.j = Fb
  }
  Eb.prototype.mb = !0;
  Eb.prototype.kb = function() {
    return this.g.toString()
  };

  function Gb() {
    var a = Hb;
    if (a instanceof Eb && a.constructor === Eb && a.j === Fb) return a.g;
    Ca(a);
    return "type_error:SafeHtml"
  }
  var Fb = {},
    Ib = new Eb;
  Ib.g = "";
  var Hb = Ib;

  function Jb(a, b) {
    a.src = tb(b);
    if (null === za) b: {
      b = t.document;
      if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ya.test(b)) {
        za = b;
        break b
      }
      za = ""
    }
    b = za;
    b && a.setAttribute("nonce", b)
  };

  function Kb(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
  }

  function Lb(a) {
    return encodeURIComponent(String(a))
  }

  function Mb(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
  }
  var Ob = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
  } : function(a, b) {
    return Array(b + 1).join(a)
  };

  function Pb(a) {
    return Array.prototype.join.call(arguments, "")
  };

  function Qb() {
    return B("iPhone") && !B("iPod") && !B("iPad")
  }

  function Rb() {
    return Qb() || B("iPad") || B("iPod")
  };

  function Sb(a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
  };
  var Tb = B("Macintosh"),
    Ub = B("Windows");
  var Vb = Cb(),
    Wb = Qb() || B("iPod"),
    Xb = B("iPad"),
    Yb = B("Android") && !(Db() || Cb() || B("Opera") || B("Silk")),
    Zb = Db(),
    $b = B("Safari") && !(Db() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || Cb() || B("Silk") || B("Android")) && !Rb();
  var ac = {},
    bc = null;

  function cc(a, b, c, d) {
    this.j = a;
    this.Cb = b;
    this.g = c;
    this.rb = d;
    this.Ic = 0
  }

  function C() {}
  var dc = "function" == typeof Uint8Array;

  function D(a, b, c, d, e) {
    a.g = null;
    b || (b = c ? [c] : []);
    a.B = c ? String(c) : void 0;
    a.v = 0 === c ? -1 : 0;
    a.o = b;
    a: {
      c = a.o.length;b = -1;
      if (c && (b = c - 1, c = a.o[b], !(null === c || "object" != typeof c || Da(c) || dc && c instanceof Uint8Array))) {
        a.A = b - a.v;
        a.j = c;
        break a
      } - 1 < d ? (a.A = Math.max(d, b + 1 - a.v), a.j = null) : a.A = Number.MAX_VALUE
    }
    a.D = {};
    if (e)
      for (d = 0; d < e.length; d++) b = e[d], b < a.A ? (b += a.v, a.o[b] = a.o[b] || ec) : (fc(a), a.j[b] = a.j[b] || ec)
  }
  var ec = [];

  function fc(a) {
    var b = a.A + a.v;
    a.o[b] || (a.j = a.o[b] = {})
  }

  function gc(a, b, c) {
    for (var d = [], e = 0; e < a.length; e++) d[e] = b.call(a[e], c, a[e]);
    return d
  }

  function E(a, b) {
    if (b < a.A) {
      b += a.v;
      var c = a.o[b];
      return c === ec ? a.o[b] = [] : c
    }
    if (a.j) return c = a.j[b], c === ec ? a.j[b] = [] : c
  }

  function hc(a, b) {
    a = E(a, b);
    return null == a ? a : !!a
  }

  function ic(a, b, c) {
    a = E(a, b);
    return null == a ? c : a
  }

  function F(a, b, c) {
    b < a.A ? a.o[b + a.v] = c : (fc(a), a.j[b] = c);
    return a
  }

  function G(a, b, c) {
    a.g || (a.g = {});
    if (!a.g[c]) {
      var d = E(a, c);
      d && (a.g[c] = new b(d))
    }
    return a.g[c]
  }

  function jc(a, b, c) {
    a.g || (a.g = {});
    if (!a.g[c]) {
      for (var d = E(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
      a.g[c] = e
    }
    b = a.g[c];
    b == ec && (b = a.g[c] = []);
    return b
  }

  function H(a, b, c) {
    a.g || (a.g = {});
    var d = c ? c.ia() : c;
    a.g[b] = c;
    return F(a, b, d)
  }

  function kc(a, b, c) {
    a.g || (a.g = {});
    c = c || [];
    for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].ia();
    a.g[b] = c;
    return F(a, b, d)
  }

  function lc(a) {
    if (a.g)
      for (var b in a.g) {
        var c = a.g[b];
        if (Da(c))
          for (var d = 0; d < c.length; d++) c[d] && c[d].ia();
        else c && c.ia()
      }
  }
  C.prototype.ia = function() {
    lc(this);
    return this.o
  };
  C.prototype.R = dc ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
      var b;
      Ea(this);
      void 0 === b && (b = 0);
      if (!bc) {
        bc = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
          var f = c.concat(d[e].split(""));
          ac[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            void 0 === bc[h] && (bc[h] = g)
          }
        }
      }
      b = ac[b];
      c = [];
      for (d = 0; d < this.length; d += 3) {
        var k = this[d],
          l = (e = d + 1 < this.length) ? this[d + 1] : 0;
        h = (f = d + 2 < this.length) ? this[d +
          2] : 0;
        g = k >> 2;
        k = (k & 3) << 4 | l >> 4;
        l = (l & 15) << 2 | h >> 6;
        h &= 63;
        f || (h = 64, e || (l = 64));
        c.push(b[g], b[k], b[l] || "", b[h] || "")
      }
      return c.join("")
    };
    try {
      return JSON.stringify(this.o && this.ia(), mc)
    } finally {
      Uint8Array.prototype.toJSON = a
    }
  } : function() {
    return JSON.stringify(this.o && this.ia(), mc)
  };

  function mc(a, b) {
    return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
  }

  function nc(a, b) {
    return new a(b ? JSON.parse(b) : null)
  }
  C.prototype.toString = function() {
    lc(this);
    return this.o.toString()
  };
  C.prototype.w = function(a) {
    if (this.j) {
      this.g || (this.g = {});
      var b = a.j;
      return a.g ? (!this.g[b] && this.j[b] && (this.g[b] = new a.g(this.j[b])), this.g[b]) : this.j[b]
    }
  };

  function oc(a, b, c) {
    a.g || (a.g = {});
    fc(a);
    var d = b.j;
    b.g ? (a.g[d] = c, a.j[d] = c ? c.ia() : c) : a.j[d] = c
  }

  function pc(a) {
    return new a.constructor(qc(a.ia()))
  }

  function qc(a) {
    if (Da(a)) {
      for (var b = Array(a.length), c = 0; c < a.length; c++) {
        var d = a[c];
        null != d && (b[c] = "object" == typeof d ? qc(d) : d)
      }
      return b
    }
    if (dc && a instanceof Uint8Array) return new Uint8Array(a);
    b = {};
    for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? qc(d) : d);
    return b
  };

  function I() {
    this.D = this.D;
    this.A = this.A
  }
  I.prototype.D = !1;
  I.prototype.L = n("D");
  I.prototype.dispose = function() {
    this.D || (this.D = !0, this.F())
  };

  function J(a, b) {
    tc(a, La(uc, b))
  }

  function tc(a, b, c) {
    a.D ? void 0 !== c ? b.call(c) : b() : (a.A || (a.A = []), a.A.push(void 0 !== c ? w(b, c) : b))
  }
  I.prototype.F = function() {
    if (this.A)
      for (; this.A.length;) this.A.shift()()
  };

  function uc(a) {
    a && "function" == typeof a.dispose && a.dispose()
  }

  function vc(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      Ea(d) ? vc.apply(null, d) : uc(d)
    }
  };

  function wc(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.j = !1;
    this.Pb = !0
  }
  wc.prototype.stopPropagation = function() {
    this.j = !0
  };
  wc.prototype.o = function() {
    this.Pb = !1
  };

  function xc(a, b, c, d) {
    wc.call(this, "broadcast-message", a);
    this.data = d
  }
  r(xc, wc);

  function yc(a) {
    D(this, a, 0, 1, null)
  }
  y(yc, C);
  var zc = {};

  function Ac(a) {
    D(this, a, 0, 1, null)
  }
  y(Ac, C);
  var Bc = {};

  function Cc(a, b) {
    var c = {},
      d = Ac.prototype.w,
      e;
    for (e in Bc) {
      var f = Bc[e],
        g = d.call(b, f);
      if (null != g) {
        for (var h in f.Cb)
          if (f.Cb.hasOwnProperty(h)) break;
        c[h] = f.rb ? f.Ic ? gc(g, f.rb, a) : f.rb(a, g) : g
      }
    }
    a && (c.ma = b);
    return c
  };

  function Dc(a) {
    D(this, a, 0, -1, Ec)
  }
  y(Dc, C);
  var Ec = [1],
    Fc = new cc(113007630, {
      Zc: 0
    }, Dc, function(a, b) {
      var c = {
        Yc: gc(jc(b, Ac, 1), Cc, a)
      };
      a && (c.ma = b);
      return c
    });
  zc[113007630] = Fc;

  function Gc(a) {
    D(this, a, 0, -1, null)
  }
  y(Gc, C);
  zc[100922934] = new cc(100922934, {
    ad: 0
  }, Gc, function(a, b) {
    var c, d = {
      Ab: null == (c = E(b, 1)) ? void 0 : c
    };
    a && (d.ma = b);
    return d
  });

  function Hc(a) {
    D(this, a, 0, -1, Ic)
  }
  y(Hc, C);
  var Ic = [3],
    Jc = new cc(112987886, {
      bd: 0
    }, Hc, function(a, b) {
      var c, d = {
        $c: null == (c = E(b, 1)) ? void 0 : c,
        changeType: null == (c = E(b, 2)) ? void 0 : c,
        hd: null == (c = E(b, 3)) ? void 0 : c
      };
      a && (d.ma = b);
      return d
    });
  Bc[112987886] = Jc;

  function Kc(a) {
    D(this, a, 0, -1, null)
  }
  y(Kc, C);
  Kc.prototype.getType = function() {
    return E(this, 1)
  };

  function Lc(a) {
    var b = new Kc;
    return F(b, 1, a)
  };

  function Mc(a) {
    D(this, a, 0, -1, null)
  }
  y(Mc, C);
  zc[100413133] = new cc(100413133, {
    fd: 0
  }, Mc, function(a, b) {
    var c, d = {
      Ab: null == (c = E(b, 1)) ? void 0 : c
    };
    a && (d.ma = b);
    return d
  });

  function Nc(a) {
    D(this, a, 0, -1, null)
  }
  y(Nc, C);
  zc[101605819] = new cc(101605819, {
    gd: 0
  }, Nc, function(a, b) {
    var c, d = {
      Ab: null == (c = E(b, 1)) ? void 0 : c
    };
    a && (d.ma = b);
    return d
  });

  function Oc(a) {
    D(this, a, 0, -1, null)
  }
  y(Oc, C);
  var Pc = new cc(102041228, {
    jd: 0
  }, Oc, function(a, b) {
    var c = {};
    a && (c.ma = b);
    return c
  });
  zc[102041228] = Pc;

  function Qc(a) {
    D(this, a, 0, -1, null)
  }
  y(Qc, C);
  var Rc = new cc(108529910, {
    kd: 0
  }, Qc, function(a, b) {
    var c = {};
    a && (c.ma = b);
    return c
  });
  zc[108529910] = Rc;

  function Sc(a) {
    D(this, a, 0, -1, null)
  }
  y(Sc, C);
  zc[140441684] = new cc(140441684, {
    ld: 0
  }, Sc, function(a, b) {
    var c = {};
    a && (c.ma = b);
    return c
  });

  function Tc(a) {
    D(this, a, 0, -1, null)
  }
  y(Tc, C);
  zc[122453513] = new cc(122453513, {
    nd: 0
  }, Tc, function(a, b) {
    var c, d = {
      od: null == (c = E(b, 1)) ? void 0 : c,
      dd: null == (c = E(b, 2)) ? void 0 : c
    };
    a && (d.ma = b);
    return d
  });

  function Uc(a) {
    var b = Aa("window.location.href");
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
      var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (f) {
      e = "Not available", c = !0
    }
    return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : (b = a.message, null == b && (b =
      a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : Vc(a.constructor)) + '"' : "Unknown Error of unknown type"), {
      message: b,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: a.stack || "Not available"
    })
  }

  function Wc(a, b) {
    a instanceof Error || (a = Error(a), Error.captureStackTrace && Error.captureStackTrace(a, Wc));
    a.stack || (a.stack = Xc(Wc));
    if (b) {
      for (var c = 0; a["message" + c];) ++c;
      a["message" + c] = String(b)
    }
    return a
  }

  function Yc(a, b) {
    a = Wc(a);
    if (b)
      for (var c in b) {
        var d = a,
          e = c,
          f = b[c];
        d.__closure__error__context__984382 || (d.__closure__error__context__984382 = {});
        d.__closure__error__context__984382[e] = f
      }
    return a
  }

  function Xc(a) {
    var b = Error();
    if (Error.captureStackTrace) Error.captureStackTrace(b, a || Xc), b = String(b.stack);
    else {
      try {
        throw b;
      } catch (c) {
        b = c
      }
      b = (b = b.stack) ? String(b) : null
    }
    b || (b = Zc(a || arguments.callee.caller, []));
    return b
  }

  function Zc(a, b) {
    var c = [];
    if (0 <= Pa(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
      c.push(Vc(a) + "(");
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
            f = (f = Vc(f)) ? f : "[fn]";
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
        c.push(Zc(a.caller, b))
      } catch (g) {
        c.push("[exception trying to get caller]\n")
      }
    } else a ?
      c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
  }

  function Vc(a) {
    if ($c[a]) return $c[a];
    a = String(a);
    if (!$c[a]) {
      var b = /function\s+([^\(]+)/m.exec(a);
      $c[a] = b ? b[1] : "[Anonymous]"
    }
    return $c[a]
  }
  var $c = {};
  var ad = function() {
    if (!t.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        }
      });
    try {
      t.addEventListener("test", Ba, b), t.removeEventListener("test", Ba, b)
    } catch (c) {}
    return a
  }();

  function bd(a, b) {
    wc.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.oa = null;
    a && this.init(a, b)
  }
  y(bd, wc);
  var cd = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  bd.prototype.init = function(a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    b = a.relatedTarget;
    b || ("mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement));
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !==
      a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : cd[a.pointerType] || "";
    this.state = a.state;
    this.oa = a;
    a.defaultPrevented && this.o()
  };
  bd.prototype.stopPropagation = function() {
    bd.ha.stopPropagation.call(this);
    this.oa.stopPropagation ? this.oa.stopPropagation() : this.oa.cancelBubble = !0
  };
  bd.prototype.o = function() {
    bd.ha.o.call(this);
    var a = this.oa;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  };
  var dd = [],
    ed = [],
    fd = !1;

  function gd(a) {
    dd[dd.length] = a;
    if (fd)
      for (var b = 0; b < ed.length; b++) a(w(ed[b].g, ed[b]))
  };
  var hd = "closure_listenable_" + (1E6 * Math.random() | 0);

  function id(a) {
    return !(!a || !a[hd])
  }
  var jd = 0;

  function kd(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Wa = e;
    this.key = ++jd;
    this.Ka = this.ya = !1
  }

  function md(a) {
    a.Ka = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.Wa = null
  };

  function nd(a) {
    this.src = a;
    this.g = {};
    this.j = 0
  }
  nd.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.j++);
    var g = od(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ya = !1)) : (b = new kd(b, this.src, f, !!d, e), b.ya = c, a.push(b));
    return b
  };

  function pd(a, b) {
    var c = b.type;
    c in a.g && Wa(a.g[c], b) && (md(b), 0 == a.g[c].length && (delete a.g[c], a.j--))
  }

  function qd(a, b, c, d, e) {
    a = a.g[b.toString()];
    b = -1;
    a && (b = od(a, c, d, e));
    return -1 < b ? a[b] : null
  }

  function od(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ka && f.listener == b && f.capture == !!c && f.Wa == d) return e
    }
    return -1
  };
  var rd = "closure_lm_" + (1E6 * Math.random() | 0),
    sd = {},
    td = 0;

  function ud(a, b, c, d, e) {
    if (d && d.once) return vd(a, b, c, d, e);
    if (Da(b)) {
      for (var f = 0; f < b.length; f++) ud(a, b[f], c, d, e);
      return null
    }
    c = wd(c);
    return id(a) ? a.o.add(String(b), c, !1, Ga(d) ? !!d.capture : !!d, e) : xd(a, b, c, !1, d, e)
  }

  function xd(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Ga(e) ? !!e.capture : !!e,
      h = yd(a);
    h || (a[rd] = h = new nd(a));
    c = h.add(b, c, d, g, f);
    if (c.g) return c;
    d = zd();
    c.g = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) ad || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Ad(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    td++;
    return c
  }

  function zd() {
    function a(c) {
      return b.call(a.src, a.listener, c)
    }
    var b = Bd;
    return a
  }

  function vd(a, b, c, d, e) {
    if (Da(b)) {
      for (var f = 0; f < b.length; f++) vd(a, b[f], c, d, e);
      return null
    }
    c = wd(c);
    return id(a) ? a.o.add(String(b), c, !0, Ga(d) ? !!d.capture : !!d, e) : xd(a, b, c, !0, d, e)
  }

  function Cd(a, b, c, d, e) {
    if (Da(b))
      for (var f = 0; f < b.length; f++) Cd(a, b[f], c, d, e);
    else d = Ga(d) ? !!d.capture : !!d, c = wd(c), id(a) ? (a = a.o, b = String(b).toString(), b in a.g && (f = a.g[b], c = od(f, c, d, e), -1 < c && (md(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.j--)))) : a && (a = yd(a)) && (c = qd(a, b, c, d, e)) && Dd(c)
  }

  function Dd(a) {
    if ("number" !== typeof a && a && !a.Ka) {
      var b = a.src;
      if (id(b)) pd(b.o, a);
      else {
        var c = a.type,
          d = a.g;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ad(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        td--;
        (c = yd(b)) ? (pd(c, a), 0 == c.j && (c.src = null, b[rd] = null)) : md(a)
      }
    }
  }

  function Ad(a) {
    return a in sd ? sd[a] : sd[a] = "on" + a
  }

  function Bd(a, b) {
    if (a.Ka) a = !0;
    else {
      b = new bd(b, this);
      var c = a.listener,
        d = a.Wa || a.src;
      a.ya && Dd(a);
      a = c.call(d, b)
    }
    return a
  }

  function yd(a) {
    a = a[rd];
    return a instanceof nd ? a : null
  }
  var Ed = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function wd(a) {
    if (Fa(a)) return a;
    a[Ed] || (a[Ed] = function(b) {
      return a.handleEvent(b)
    });
    return a[Ed]
  }
  gd(function(a) {
    Bd = a(Bd)
  });

  function Fd(a) {
    I.call(this);
    this.j = a;
    this.g = {}
  }
  y(Fd, I);
  var Gd = [];

  function Hd(a, b, c, d) {
    Da(c) || (c && (Gd[0] = c.toString()), c = Gd);
    for (var e = 0; e < c.length; e++) {
      var f = ud(b, c[e], d || a.handleEvent, !1, a.j || a);
      if (!f) break;
      a.g[f.key] = f
    }
  }

  function Id(a, b, c, d) {
    Jd(a, b, c, d, void 0)
  }

  function Jd(a, b, c, d, e, f) {
    if (Da(c))
      for (var g = 0; g < c.length; g++) Jd(a, b, c[g], d, e, f);
    else(b = vd(b, c, d || a.handleEvent, e, f || a.j || a)) && (a.g[b.key] = b)
  }

  function Kd(a, b, c, d, e, f) {
    if (Da(c))
      for (var g = 0; g < c.length; g++) Kd(a, b, c[g], d, e, f);
    else d = d || a.handleEvent, e = Ga(e) ? !!e.capture : !!e, f = f || a.j || a, d = wd(d), e = !!e, c = id(b) ? qd(b.o, String(c), d, e, f) : b ? (b = yd(b)) ? qd(b, c, d, e, f) : null : null, c && (Dd(c), delete a.g[c.key])
  }

  function Ld(a) {
    cb(a.g, function(b, c) {
      this.g.hasOwnProperty(c) && Dd(b)
    }, a);
    a.g = {}
  }
  Fd.prototype.F = function() {
    Fd.ha.F.call(this);
    Ld(this)
  };
  Fd.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };

  function Md() {
    I.call(this);
    this.o = new nd(this);
    this.qa = this;
    this.U = null
  }
  y(Md, I);
  Md.prototype[hd] = !0;
  Md.prototype.removeEventListener = function(a, b, c, d) {
    Cd(this, a, b, c, d)
  };

  function Nd(a, b) {
    var c = a.U;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.U) d.push(c), ++e
    }
    a = a.qa;
    c = b.type || b;
    "string" === typeof b ? b = new wc(b, a) : b instanceof wc ? b.target = b.target || a : (e = b, b = new wc(c, a), kb(b, e));
    e = !0;
    if (d)
      for (var f = d.length - 1; !b.j && 0 <= f; f--) {
        var g = b.g = d[f];
        e = Od(g, c, !0, b) && e
      }
    b.j || (g = b.g = a, e = Od(g, c, !0, b) && e, b.j || (e = Od(g, c, !1, b) && e));
    if (d)
      for (f = 0; !b.j && f < d.length; f++) g = b.g = d[f], e = Od(g, c, !1, b) && e
  }
  Md.prototype.F = function() {
    Md.ha.F.call(this);
    if (this.o) {
      var a = this.o,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, md(d[e]);
        delete a.g[c];
        a.j--
      }
    }
    this.U = null
  };

  function Od(a, b, c, d) {
    b = a.o.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Ka && g.capture == c) {
        var h = g.listener,
          k = g.Wa || g.src;
        g.ya && pd(a.o, g);
        e = !1 !== h.call(k, d) && e
      }
    }
    return e && 0 != d.Pb
  };

  function Pd(a, b) {
    Md.call(this);
    this.j = !1;
    this.g = null;
    this.w = new Fd(this);
    J(this, this.w);
    this.B = a;
    this.v = b
  }
  r(Pd, Md);
  Pd.prototype.connect = function() {
    this.j || (this.j = !0, this.g = Qd(this.B), Hd(this.w, this.g, "message", this.C.bind(this)), this.g.start())
  };

  function Rd(a, b) {
    if (!a.j) throw Error("Trying to publish without connecting first.");
    var c = Lc(1);
    b = H(c, 2, b);
    F(b, 3, a.v);
    a.g.postMessage(b.ia())
  }
  Pd.prototype.C = function(a) {
    var b = a.oa;
    null != b.data[1] ? (b = new Kc(b.data), b.getType(), a = E(b, 3), b = G(b, yc, 2)) : (a = this.v, b = new yc(b.data));
    a: {
      var c = b;
      for (e in zc) {
        var d = zc[Number(e)];
        if (c.w(d)) {
          var e = d;
          break a
        }
      }
      e = null
    }
    e && (b = b.w(e), Nd(this, new xc(this, a, e, b)))
  };
  Pd.prototype.F = function() {
    if (this.g) {
      var a = Lc(0);
      this.g.postMessage(a.ia());
      this.g.close()
    }
    Md.prototype.F.call(this)
  };

  function Sd(a) {
    D(this, a, 0, -1, null)
  }
  y(Sd, C);
  Sd.prototype.H = function() {
    return E(this, 1)
  };
  Sd.prototype.na = function() {
    return E(this, 3)
  };
  Sd.prototype.La = function(a) {
    F(this, 7, a)
  };

  function Td(a) {
    D(this, a, 0, -1, Ud)
  }
  y(Td, C);
  var Ud = [1];

  function Vd(a) {
    D(this, a, 0, -1, Wd)
  }
  y(Vd, C);
  var Wd = [1];

  function Xd(a, b) {
    kc(a, 1, b)
  };

  function Yd(a) {
    D(this, a, 0, -1, null)
  }
  y(Yd, C);

  function Zd(a) {
    D(this, a, 0, -1, null)
  }
  y(Zd, C);

  function $d(a, b) {
    return F(a, 1, b)
  }
  Zd.prototype.Ua = function() {
    return E(this, 2)
  };

  function ae(a) {
    D(this, a, 0, -1, null)
  }
  y(ae, C);

  function be(a) {
    D(this, a, 0, -1, null)
  }
  y(be, C);
  be.prototype.getType = function() {
    return E(this, 1)
  };
  be.prototype.Fb = function() {
    return E(this, 2)
  };

  function ce(a) {
    D(this, a, 0, -1, null)
  }
  y(ce, C);

  function de(a) {
    D(this, a, 0, -1, null)
  }
  y(de, C);
  de.prototype.H = function() {
    return E(this, 1)
  };
  de.prototype.getType = function() {
    return E(this, 2)
  };

  function ee(a) {
    D(this, a, 0, -1, fe)
  }
  y(ee, C);
  var fe = [1];
  ee.prototype.La = function(a) {
    F(this, 2, a)
  };

  function ge(a) {
    D(this, a, 0, -1, he)
  }
  y(ge, C);
  var he = [1];

  function ie(a) {
    D(this, a, 0, -1, null)
  }
  y(ie, C);
  ie.prototype.getType = function() {
    return E(this, 1)
  };

  function je(a) {
    D(this, a, 0, -1, null)
  }
  y(je, C);

  function ke(a) {
    D(this, a, 0, -1, null)
  }
  y(ke, C);

  function le(a) {
    D(this, a, 0, -1, null)
  }
  y(le, C);
  le.prototype.Eb = function() {
    return E(this, 4)
  };

  function me(a, b) {
    F(a, 4, b)
  }
  le.prototype.Ua = function() {
    return E(this, 2)
  };

  function ne(a, b) {
    F(a, 2, b)
  };

  function oe(a) {
    D(this, a, 0, -1, null)
  }
  y(oe, C);

  function pe(a) {
    D(this, a, 0, -1, null)
  }
  y(pe, C);

  function qe(a) {
    D(this, a, 0, -1, null)
  }
  y(qe, C);

  function re(a) {
    D(this, a, 0, -1, null)
  }
  y(re, C);
  re.prototype.getType = function() {
    return E(this, 1)
  };

  function se(a, b) {
    return F(a, 1, b)
  }
  re.prototype.Ga = function() {
    return G(this, be, 2)
  };

  function te(a) {
    D(this, a, 0, -1, null)
  }
  y(te, C);

  function ue(a) {
    D(this, a, 0, -1, ve)
  }
  y(ue, C);
  var ve = [1];

  function we(a, b) {
    this.o = a;
    this.v = b;
    this.j = 0;
    this.g = null
  }
  we.prototype.get = function() {
    if (0 < this.j) {
      this.j--;
      var a = this.g;
      this.g = a.next;
      a.next = null
    } else a = this.o();
    return a
  };

  function xe(a, b) {
    a.v(b);
    100 > a.j && (a.j++, b.next = a.g, a.g = b)
  };

  function ye(a, b) {
    return a + Math.random() * (b - a)
  };

  function ze(a, b) {
    cb(b, function(c, d) {
      c && "object" == typeof c && c.mb && (c = c.kb());
      "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ae.hasOwnProperty(d) ? a.setAttribute(Ae[d], c) : ub(d, "aria-") || ub(d, "data-") ? a.setAttribute(d, c) : a[d] = c
    })
  }
  var Ae = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  function Be(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b)
  }

  function Ce(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  }

  function De() {
    this.g = t.document || document
  }
  De.prototype.j = Ce;
  De.prototype.contains = function(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  };

  function Ee(a) {
    t.setTimeout(function() {
      throw a;
    }, 0)
  }
  var Fe;

  function Ge() {
    var a = t.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
      var e = Be(document, "IFRAME");
      e.style.display = "none";
      e.src = tb(new qb(rb, pb instanceof mb && pb.constructor === mb && pb.j === ob ? pb.g : "type_error:Const")).toString();
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(Gb());
      e.close();
      var g = "callImmediate" + Math.random(),
        h = "file:" == f.location.protocol ? "*" : f.location.protocol +
        "//" + f.location.host;
      e = w(function(k) {
        if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function() {
          f.postMessage(g, h)
        }
      }
    });
    if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
      var b = new a,
        c = {},
        d = c;
      b.port1.onmessage = function() {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.vb;
          c.vb = null;
          e()
        }
      };
      return function(e) {
        d.next = {
          vb: e
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof document && "onreadystatechange" in Be(document,
      "SCRIPT") ? function(e) {
      var f = Be(document, "SCRIPT");
      f.onreadystatechange = function() {
        f.onreadystatechange = null;
        f.parentNode.removeChild(f);
        f = null;
        e();
        e = null
      };
      document.documentElement.appendChild(f)
    } : function(e) {
      t.setTimeout(e, 0)
    }
  }

  function He(a) {
    return a
  }
  gd(function(a) {
    He = a
  });

  function Ie() {
    this.j = this.g = null
  }
  var Ke = new we(function() {
    return new Je
  }, function(a) {
    a.reset()
  });
  Ie.prototype.add = function(a, b) {
    var c = Ke.get();
    c.set(a, b);
    this.j ? this.j.next = c : this.g = c;
    this.j = c
  };

  function Le() {
    var a = Me,
      b = null;
    a.g && (b = a.g, a.g = a.g.next, a.g || (a.j = null), b.next = null);
    return b
  }

  function Je() {
    this.next = this.scope = this.g = null
  }
  Je.prototype.set = function(a, b) {
    this.g = a;
    this.scope = b;
    this.next = null
  };
  Je.prototype.reset = function() {
    this.next = this.scope = this.g = null
  };

  function Ne(a, b) {
    Oe || Re();
    Se || (Oe(), Se = !0);
    Me.add(a, b)
  }
  var Oe;

  function Re() {
    if (t.Promise && t.Promise.resolve) {
      var a = t.Promise.resolve(void 0);
      Oe = function() {
        a.then(Te)
      }
    } else Oe = function() {
      var b = Te;
      b = He(b);
      !Fa(t.setImmediate) || t.Window && t.Window.prototype && !B("Edge") && t.Window.prototype.setImmediate == t.setImmediate ? (Fe || (Fe = Ge()), Fe(b)) : t.setImmediate(b)
    }
  }
  var Se = !1,
    Me = new Ie;

  function Te() {
    for (var a; a = Le();) {
      try {
        a.g.call(a.scope)
      } catch (b) {
        Ee(b)
      }
      xe(Ke, a)
    }
    Se = !1
  };

  function Ue(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };

  function L(a, b) {
    this.g = 0;
    this.D = void 0;
    this.v = this.j = this.o = null;
    this.A = this.w = !1;
    if (a != Ba) try {
      var c = this;
      a.call(b, function(d) {
        Ve(c, 2, d)
      }, function(d) {
        Ve(c, 3, d)
      })
    } catch (d) {
      Ve(this, 3, d)
    }
  }

  function We() {
    this.next = this.v = this.j = this.A = this.g = null;
    this.o = !1
  }
  We.prototype.reset = function() {
    this.v = this.j = this.A = this.g = null;
    this.o = !1
  };
  var Xe = new we(function() {
    return new We
  }, function(a) {
    a.reset()
  });

  function Ye(a, b, c) {
    var d = Xe.get();
    d.A = a;
    d.j = b;
    d.v = c;
    return d
  }

  function M(a) {
    if (a instanceof L) return a;
    var b = new L(Ba);
    Ve(b, 2, a);
    return b
  }

  function Ze(a) {
    return new L(function(b, c) {
      c(a)
    })
  }

  function $e(a, b, c) {
    af(a, b, c, null) || Ne(La(b, a))
  }

  function bf(a) {
    return new L(function(b, c) {
      a.length || b(void 0);
      for (var d = 0, e; d < a.length; d++) e = a[d], $e(e, b, c)
    })
  }

  function cf(a) {
    return new L(function(b, c) {
      var d = a.length,
        e = [];
      if (d)
        for (var f = function(l, p) {
            d--;
            e[l] = p;
            0 == d && b(e)
          }, g = function(l) {
            c(l)
          }, h = 0, k; h < a.length; h++) k = a[h], $e(k, La(f, h), g);
      else b(e)
    })
  }

  function df(a) {
    return new L(function(b) {
      var c = a.length,
        d = [];
      if (c)
        for (var e = function(h, k, l) {
            c--;
            d[h] = k ? {
              gc: !0,
              value: l
            } : {
              gc: !1,
              reason: l
            };
            0 == c && b(d)
          }, f = 0, g; f < a.length; f++) g = a[f], $e(g, La(e, f, !0), La(e, f, !1));
      else b(d)
    })
  }

  function ef() {
    var a, b, c = new L(function(d, e) {
      a = d;
      b = e
    });
    return new ff(c, a, b)
  }
  L.prototype.then = function(a, b, c) {
    return gf(this, Fa(a) ? a : null, Fa(b) ? b : null, c)
  };
  L.prototype.$goog_Thenable = !0;

  function hf(a, b) {
    b = Ye(b, b, void 0);
    b.o = !0;
    jf(a, b);
    return a
  }

  function kf(a, b, c) {
    return gf(a, null, b, c)
  }
  L.prototype.cancel = function(a) {
    if (0 == this.g) {
      var b = new lf(a);
      Ne(function() {
        mf(this, b)
      }, this)
    }
  };

  function mf(a, b) {
    if (0 == a.g)
      if (a.o) {
        var c = a.o;
        if (c.j) {
          for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.g && 1 == d ? mf(c, b) : (f ? (d = f, d.next == c.v && (c.v = d), d.next = d.next.next) : nf(c), of (c, e, 3, b)))
        }
        a.o = null
      } else Ve(a, 3, b)
  }

  function jf(a, b) {
    a.j || 2 != a.g && 3 != a.g || pf(a);
    a.v ? a.v.next = b : a.j = b;
    a.v = b
  }

  function gf(a, b, c, d) {
    var e = Ye(null, null, null);
    e.g = new L(function(f, g) {
      e.A = b ? function(h) {
        try {
          var k = b.call(d, h);
          f(k)
        } catch (l) {
          g(l)
        }
      } : f;
      e.j = c ? function(h) {
        try {
          var k = c.call(d, h);
          void 0 === k && h instanceof lf ? g(h) : f(k)
        } catch (l) {
          g(l)
        }
      } : g
    });
    e.g.o = a;
    jf(a, e);
    return e.g
  }
  L.prototype.L = function(a) {
    this.g = 0;
    Ve(this, 2, a)
  };
  L.prototype.C = function(a) {
    this.g = 0;
    Ve(this, 3, a)
  };

  function Ve(a, b, c) {
    0 == a.g && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, af(c, a.L, a.C, a) || (a.D = c, a.g = b, a.o = null, pf(a), 3 != b || c instanceof lf || qf(a, c)))
  }

  function af(a, b, c, d) {
    if (a instanceof L) return jf(a, Ye(b || Ba, c || null, d)), !0;
    if (Ue(a)) return a.then(b, c, d), !0;
    if (Ga(a)) try {
      var e = a.then;
      if (Fa(e)) return rf(a, e, b, c, d), !0
    } catch (f) {
      return c.call(d, f), !0
    }
    return !1
  }

  function rf(a, b, c, d, e) {
    function f(k) {
      h || (h = !0, d.call(e, k))
    }

    function g(k) {
      h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
      b.call(a, g, f)
    } catch (k) {
      f(k)
    }
  }

  function pf(a) {
    a.w || (a.w = !0, Ne(a.B, a))
  }

  function nf(a) {
    var b = null;
    a.j && (b = a.j, a.j = b.next, b.next = null);
    a.j || (a.v = null);
    return b
  }
  L.prototype.B = function() {
    for (var a; a = nf(this);) of (this, a, this.g, this.D);
    this.w = !1
  };

  function of (a, b, c, d) {
    if (3 == c && b.j && !b.o)
      for (; a && a.A; a = a.o) a.A = !1;
    if (b.g) b.g.o = null, sf(b, c, d);
    else try {
      b.o ? b.A.call(b.v) : sf(b, c, d)
    } catch (e) {
      tf.call(null, e)
    }
    xe(Xe, b)
  }

  function sf(a, b, c) {
    2 == b ? a.A.call(a.v, c) : a.j && a.j.call(a.v, c)
  }

  function qf(a, b) {
    a.A = !0;
    Ne(function() {
      a.A && tf.call(null, b)
    })
  }
  var tf = Ee;

  function lf(a) {
    A.call(this, a)
  }
  y(lf, A);
  lf.prototype.name = "cancel";

  function ff(a, b, c) {
    this.g = a;
    this.resolve = b;
    this.reject = c
  };

  function uf(a) {
    return Sb(a.prototype, "$$generatedClassName", function() {
      return "Class$obf_" + {
        valueOf: function() {
          return ++vf
        }
      }
    })
  }
  var vf = 1E3;

  function O() {}
  O.prototype.ga = function(a) {
    return wf(this, a)
  };
  O.prototype.Ia = function() {
    return xf(this)
  };
  O.prototype.toString = function() {
    return P(yf(zf(this.constructor))) + "@" + P(Af(this.Ia()))
  };

  function Bf() {}
  r(Bf, O);

  function Cf(a, b) {
    Df(a);
    a.A = b;
    Ef(a)
  }
  Bf.prototype.j = function(a) {
    this.g = a;
    Ff(this, a)
  };

  function Ef(a) {
    a.g instanceof Error && (Error.captureStackTrace ? Error.captureStackTrace(a.g) : a.g.stack = Error().stack)
  }
  Bf.prototype.w = n("A");
  Bf.prototype.toString = function() {
    var a = yf(zf(this.constructor)),
      b = this.w();
    return null == b ? a : P(a) + ": " + P(b)
  };

  function Gf(a) {
    if (null != a) {
      var b = a.Xb;
      if (null != b) return b
    }
    a instanceof TypeError ? (b = new Hf, Cf(b, P(a)), If(b), b.o = a, b.j(new TypeError(b)), a = b) : (b = new Jf, Cf(b, P(a)), If(b), b.o = a, b.j(Error(b)), a = b);
    return a
  }

  function Df(a) {
    a.D = Kf([0], Bf, Lf, Bf.g)
  }

  function Lf(a) {
    return a instanceof Bf
  }

  function Ff(a, b) {
    if (b instanceof Object) try {
      b.Xb = a, Object.defineProperties(b, {
        cb: {
          get: function() {
            return a.v && a.v.g
          }
        }
      })
    } catch (c) {}
  };

  function Mf() {}
  r(Mf, Bf);

  function Nf() {}
  r(Nf, Mf);

  function Q(a) {
    var b = new Nf;
    Cf(b, a);
    b.j(Error(b));
    return b
  };

  function wf(a, b) {
    return Object.is(a, b) || null == a && null == b
  };

  function Of(a, b) {
    this.j = a;
    this.g = b
  }
  r(Of, O);

  function yf(a) {
    var b = uf(a.j);
    0 != a.g && (b = "L" + P(b) + ";");
    return P(Pf("[", a.g)) + P(b)
  }
  Of.prototype.toString = function() {
    return "class " + P(yf(this))
  };

  function Pf(a, b) {
    for (var c = "", d = 0; d < b; d++) c = P(c) + P(a);
    return c
  }

  function zf(a, b) {
    var c = b || 0;
    return Sb(a.prototype, "$$class/" + c, function() {
      return new Of(a, c)
    })
  };

  function xf(a) {
    return a.tb || (Object.defineProperties(a, {
      tb: {
        value: ++Qf,
        enumerable: !1
      }
    }), a.tb)
  }
  var Qf = 0;

  function Rf() {}
  r(Rf, Bf);

  function Sf(a, b) {
    this.j = a | 0;
    this.g = b | 0
  }

  function Tf(a) {
    return 4294967296 * a.g + (a.j >>> 0)
  }
  q = Sf.prototype;
  q.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    var b = this.g >> 21;
    if (0 == b || -1 == b && (0 != this.j || -2097152 != this.g)) return b = Tf(this), 10 == a ? "" + b : b.toString(a);
    b = 14 - (a >> 2);
    var c = Math.pow(a, b),
      d = Uf(c, c / 4294967296);
    c = Vf(this, d);
    d = Math.abs(Tf(this.add(Wf(Xf(c, d)))));
    var e = 10 == a ? "" + d : d.toString(a);
    e.length < b && (e = "0000000000000".substr(e.length - b) + e);
    d = Tf(c);
    return (10 == a ? d : d.toString(a)) + e
  };

  function Yf(a) {
    return 0 == a.j && 0 == a.g
  }
  q.ga = function(a) {
    return this.j == a.j && this.g == a.g
  };

  function Zf(a, b) {
    return a.g == b.g ? a.j == b.j ? 0 : a.j >>> 0 > b.j >>> 0 ? 1 : -1 : a.g > b.g ? 1 : -1
  }

  function Wf(a) {
    var b = ~a.j + 1 | 0;
    return Uf(b, ~a.g + !b | 0)
  }
  q.add = function(a) {
    var b = this.g >>> 16,
      c = this.g & 65535,
      d = this.j >>> 16,
      e = a.g >>> 16,
      f = a.g & 65535,
      g = a.j >>> 16;
    a = (this.j & 65535) + (a.j & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    b = (d >>> 16) + (b + e) & 65535;
    return Uf((g & 65535) << 16 | a & 65535, b << 16 | d & 65535)
  };

  function Xf(a, b) {
    if (Yf(a)) return a;
    if (Yf(b)) return b;
    var c = a.g >>> 16,
      d = a.g & 65535,
      e = a.j >>> 16;
    a = a.j & 65535;
    var f = b.g >>> 16,
      g = b.g & 65535,
      h = b.j >>> 16;
    b = b.j & 65535;
    var k = a * b;
    var l = (k >>> 16) + e * b;
    var p = l >>> 16;
    l = (l & 65535) + a * h;
    p += l >>> 16;
    p += d * b;
    var u = p >>> 16;
    p = (p & 65535) + e * h;
    u += p >>> 16;
    p = (p & 65535) + a * g;
    u = u + (p >>> 16) + (c * b + d * h + e * g + a * f) & 65535;
    return Uf((l & 65535) << 16 | k & 65535, u << 16 | p & 65535)
  }

  function Vf(a, b) {
    if (Yf(b)) throw Error("division by zero");
    if (0 > a.g) {
      if (a.ga($f)) {
        if (b.ga(ag) || b.ga(bg)) return $f;
        if (b.ga($f)) return ag;
        var c = 1;
        if (0 == c) c = a;
        else {
          var d = a.g;
          c = 32 > c ? Uf(a.j >>> c | d << 32 - c, d >> c) : Uf(d >> c - 32, 0 <= d ? 0 : -1)
        }
        c = Vf(c, b);
        d = 1;
        if (0 != d) {
          var e = c.j;
          c = 32 > d ? Uf(e << d, c.g << d | e >>> 32 - d) : Uf(0, e << d - 32)
        }
        if (c.ga(cg)) return 0 > b.g ? ag : bg;
        a = a.add(Wf(Xf(b, c)));
        return c.add(Vf(a, b))
      }
      return 0 > b.g ? Vf(Wf(a), Wf(b)) : Wf(Vf(Wf(a), b))
    }
    if (Yf(a)) return cg;
    if (0 > b.g) return b.ga($f) ? cg : Wf(Vf(a, Wf(b)));
    for (d = cg; 0 <= Zf(a,
        b);) {
      c = Math.max(1, Math.floor(Tf(a) / Tf(b)));
      e = Math.ceil(Math.log(c) / Math.LN2);
      e = 48 >= e ? 1 : Math.pow(2, e - 48);
      for (var f = dg(c), g = Xf(f, b); 0 > g.g || 0 < Zf(g, a);) c -= e, f = dg(c), g = Xf(f, b);
      Yf(f) && (f = ag);
      d = d.add(f);
      a = a.add(Wf(g))
    }
    return d
  }
  q.and = function(a) {
    return Uf(this.j & a.j, this.g & a.g)
  };
  q.or = function(a) {
    return Uf(this.j | a.j, this.g | a.g)
  };
  q.xor = function(a) {
    return Uf(this.j ^ a.j, this.g ^ a.g)
  };

  function dg(a) {
    return 0 < a ? 0x7fffffffffffffff <= a ? eg : new Sf(a, a / 4294967296) : 0 > a ? -9223372036854775808 >= a ? $f : Wf(new Sf(-a, -a / 4294967296)) : cg
  }

  function Uf(a, b) {
    return new Sf(a, b)
  }
  var cg = Uf(0, 0),
    ag = Uf(1, 0),
    bg = Uf(-1, -1),
    eg = Uf(4294967295, 2147483647),
    $f = Uf(0, 2147483648);

  function fg() {}
  r(fg, Rf);

  function gg() {}
  r(gg, Nf);

  function hg(a) {
    var b = new gg;
    Cf(b, a);
    b.j(Error(b));
    return b
  };

  function ig() {}
  r(ig, Nf);

  function jg(a) {
    var b = new ig;
    Cf(b, a);
    b.j(Error(b));
    return b
  };

  function Jf() {}
  r(Jf, Nf);
  Jf.prototype.j = function(a) {
    Nf.prototype.j.call(this, "__noinit__" === this.o ? a : this.o)
  };

  function If(a) {
    a.o = "__noinit__"
  };

  function Hf() {}
  r(Hf, Jf);

  function kg(a) {
    return Math.max(Math.min(a, 2147483647), -2147483648) | 0
  };

  function lg() {}
  var mg;
  r(lg, O);

  function ng() {}
  r(ng, lg);

  function og(a, b) {
    return "string" == typeof a ? a.charCodeAt(b) : a.Z.charCodeAt(b)
  };

  function pg() {}
  r(pg, O);
  pg.prototype.toString = n("Z");

  function qg() {}
  r(qg, pg);

  function rg() {}
  r(rg, O);

  function sg() {};

  function tg() {}
  r(tg, O);

  function ug(a, b) {
    return a.ga ? a.ga(b) : Object.is(a, b)
  }

  function vg(a) {
    var b;
    Array.isArray(a) ? b = yf(wg(a)) + "@" + Af(xf(a)) : b = a.toString();
    return b
  }

  function xg(a) {
    var b = typeof a;
    if ("number" == b) return zf(ng);
    if ("boolean" == b) return zf(rg);
    if ("string" == b) return zf(yg);
    if (Array.isArray(a)) return wg(a);
    if (a instanceof O) return zf(a.constructor);
    if (a) return zf("function" == b ? sg : tg);
    throw new TypeError("null.getClass");
  };

  function Kf(a, b, c, d) {
    return zg(a, d, {
      nb: b,
      Jb: c,
      fb: a.length
    })
  }

  function zg(a, b, c) {
    var d = a[0];
    if (null == d) return null;
    var e = [];
    c && (e.Sb = c);
    if (1 < a.length) {
      a = a.slice(1);
      c = c && {
        nb: c.nb,
        Jb: c.Jb,
        fb: c.fb - 1
      };
      for (var f = 0; f < d; f++) e[f] = zg(a, b, c)
    } else if (void 0 !== b)
      for (a = 0; a < d; a++) e[a] = b;
    else e.length = d;
    return e
  }

  function wg(a) {
    return (a = a.Sb) ? zf(a.nb, a.fb) : zf(O, 1)
  };

  function Ag(a) {
    return 56320 <= a && 57343 >= a
  };

  function Bg() {}
  r(Bg, gg);
  var Cg;

  function Dg() {
    Dg = m();
    Cg = Kf([256], Eg, Fg, Eg.g)
  };

  function Eg() {
    this.g = 0
  }
  r(Eg, lg);

  function Af(a) {
    return (a >>> 0).toString(16)
  }

  function Gg(a) {
    if (-129 < a && 128 > a) {
      var b = a + 128,
        c = (Dg(), Cg)[b];
      c || (c = Cg[b] = Hg(a));
      return c
    }
    return Hg(a)
  }

  function Hg(a) {
    var b = new Eg;
    b.g = a;
    return b
  }
  Eg.prototype.ga = function(a) {
    return Fg(a) && a.g == this.g
  };
  Eg.prototype.Ia = n("g");
  Eg.prototype.toString = function() {
    return "" + this.g
  };

  function Fg(a) {
    return a instanceof Eg
  };
  var Ig, Jg;

  function Kg(a) {
    Lg();
    var b = ":" + P(a),
      c = Ig[b];
    if (null != c) return kg(c);
    c = Jg[b];
    if (null == c) {
      var d = 0;
      c = a.length;
      for (var e = c - 4, f = 0; f < e;) d = a.charCodeAt(f + 3) + 31 * (a.charCodeAt(f + 2) + 31 * (a.charCodeAt(f + 1) + 31 * (a.charCodeAt(f) + 31 * d))), d |= 0, f += 4;
      for (; f < c;) d *= 31, e = f++, d += a.charCodeAt(e);
      a = d | 0
    } else a = kg(c);
    256 == Mg && (Jg = Ig, Ig = new O, Mg = 0);
    ++Mg;
    return Ig[b] = a
  }

  function Lg() {
    Lg = m();
    Jg = new O;
    Mg = 0;
    Ig = new O
  }
  var Mg = 0;

  function Ng(a) {
    switch (typeof a) {
      case "string":
        return Kg(a);
      case "number":
        return kg(a);
      case "boolean":
        return a ? 1231 : 1237;
      default:
        return null == a ? 0 : xf(a)
    }
  };

  function yg() {}
  r(yg, O);

  function P(a) {
    return null == a ? "null" : vg(a)
  }

  function Og(a, b) {
    var c = a.length,
      d = og(a, b++),
      e, f;
    55296 <= d && 56319 >= d && b < c && Ag(e = og(a, b)) ? f = 65536 + ((d & 1023) << 10) + (e & 1023) : f = d;
    return f
  }

  function Pg(a, b) {
    return wf(a, b)
  };

  function Qg() {
    return dg(Date.now())
  };

  function Ug(a, b) {
    if (!a) throw jg(P(b)).g;
  };

  function Vg(a, b) {
    a = P(a);
    if (b)
      for (var c = 0; c < b.length; c++) {
        var d = b,
          e = c;
        var f = b[c];
        try {
          var g = P(f)
        } catch (l) {
          if (l = Gf(l), l instanceof Mf) g = l, f = P(yf(xg(f))) + String.fromCharCode(64) + P(Af(Ng(f))), P(f), g = "<" + P(f) + " threw " + P(yf(xg(g))) + ">";
          else throw l.g;
        }
        d[e] = g
      } else b = ["(Object[])null"];
    c = new qg;
    c.Z = "";
    for (d = g = 0; d < b.length;) {
      e = a.indexOf("%s", g);
      if (-1 == e) break;
      f = a;
      var h = g,
        k = e;
      g = P(c.Z);
      f = P(f).substr(h, k - h);
      c.Z = g + P(f);
      f = b[d++];
      c.Z = P(c.Z) + P(f);
      g = e + 2
    }
    e = a;
    f = g;
    g = a.length;
    a = P(c.Z);
    e = P(e).substr(f, g - f);
    c.Z = a + P(e);
    if (d < b.length) {
      c.Z = P(c.Z) + " [";
      a = b[d++];
      for (c.Z = P(c.Z) + P(a); d < b.length;) c.Z = P(c.Z) + ", ", a = b[d++], c.Z = P(c.Z) + P(a);
      c.Z = P(c.Z) + String.fromCharCode(93)
    }
    return c.toString()
  };

  function Wg(a, b) {
    if (null == b)
      for (b = 0; b < a.length; b++) {
        if (null == a[b]) return b
      } else
        for (var c = 0; c < a.length; c++)
          if (ug(b, a[c])) return c;
    return -1
  };

  function Xg(a, b) {
    a.push(b)
  }

  function Yg(a, b) {
    for (var c = 0, d = b.length; c < d; c++) a.push(b[c])
  };

  function Zg(a) {
    if (null == a) return "null";
    var b = typeof a;
    return "object" === b ? a instanceof Array ? "array" : b : b
  };

  function $g(a, b, c) {
    a[b] = void 0 !== c ? c : null
  }

  function ah(a) {
    for (var b in a) return !1;
    return !0
  }

  function bh(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  };

  function ch(a, b, c) {
    Fg(c) ? a[b] = c.g : $g(a, b, c)
  };

  function dh(a, b) {
    if (wf(a, b)) return !0;
    if (!a || !b) return !1;
    var c = a.length;
    if (c != b.length) return !1;
    for (var d = 0; d < c; d++)
      if (!eh(a, b, d)) return !1;
    return !0
  }

  function eh(a, b, c) {
    var d = Zg(a[c]);
    if (!wf(d, Zg(b[c]))) return !1;
    switch (d) {
      case "null":
        return !0;
      case "boolean":
        return a[c] == b[c];
      case "number":
        return a[c] == b[c];
      case "string":
        return wf(a[c], b[c]);
      case "array":
        return dh(a[c], b[c]);
      case "object":
        return fh(a[c], b[c]);
      default:
        throw Q("Unsupported type " + P(d)).g;
    }
  };

  function gh(a, b, c) {
    var d = Zg(a[c]);
    if (!wf(d, Zg(b[c]))) return !1;
    switch (d) {
      case "null":
        return !0;
      case "boolean":
        return a[c] == b[c];
      case "number":
        return a[c] == b[c];
      case "string":
        return wf(a[c], b[c]);
      case "object":
        return fh(a[c], b[c]);
      case "array":
        return dh(a[c], b[c]);
      default:
        throw Q("Unsupported type " + P(d) + " for key " + P(c)).g;
    }
  }

  function fh(a, b) {
    if (wf(a, b)) return !0;
    if (!a || !b) return !1;
    var c = Object.keys(a).length,
      d = Object.keys(b).length;
    if (c != d) return !1;
    for (d = 0; d < c; d++) {
      var e = Object.keys(a)[d];
      if (!gh(a, b, e)) return !1
    }
    return !0
  };
  var hh;

  function ih() {
    ih = m();
    hh = new jh(null)
  };

  function jh(a) {
    this.g = new kh;
    if (a)
      for (var b in a) {
        var c = b,
          d = a[b];
        ch(this.g.get(), c, d)
      }
  }
  r(jh, O);

  function R() {
    return ih(), hh
  }
  jh.prototype.get = function(a) {
    return this.g.get()[a]
  };

  function lh(a, b) {
    a = a.g.get();
    return b in a
  }

  function S(a, b) {
    a = a.get(b);
    return "string" == typeof a ? "true" == a || "1" == a : !!a
  }

  function mh(a, b) {
    if (!lh(a, b) || null == a.get(b)) return NaN;
    try {
      var c = P(a.get(b));
      mg || (mg = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
      if (!mg.test(c)) {
        var d = 'For input string: "' + P(c) + '"',
          e = new Bg;
        Cf(e, d);
        e.j(Error(e));
        throw e.g;
      }
      return parseFloat(c)
    } catch (f) {
      f = Gf(f);
      if (f instanceof Bg) return NaN;
      throw f.g;
    }
  }

  function T(a, b) {
    if (!lh(a, b)) return "";
    a = a.get(b);
    return null == a ? "" : "number" === typeof a && kg(a) == kg(a) ? "" + kg(a) : P(a)
  };

  function kh() {}
  r(kh, O);
  kh.prototype.get = function() {
    if (!this.g) {
      var a = t._docs_flag_initialData;
      this.g = a ? a : {}
    }
    return this.g
  };
  t.Symbol && t.Symbol.iterator && (ea(), ia());
  ea();
  ia();
  ea();
  ia();

  function nh(a, b) {
    Df(this);
    this.v = b;
    this.A = a;
    Ef(this);
    this.j(Error(this))
  }
  r(nh, Nf);
  nh.prototype.w = function() {
    return Nf.prototype.w.call(this)
  };
  da.Object.defineProperties(nh.prototype, {
    error: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var a = Error(),
          b = this.g;
        a.fileName = b.fileName;
        a.lineNumber = b.lineNumber;
        a.columnNumber = b.columnNumber;
        a.message = b.message;
        a.name = b.name;
        a.stack = b.stack;
        a.toSource = b.toSource;
        a.cause = b.cb;
        for (var c in b) 0 != c.indexOf("__java$") && (a[c] = b[c]);
        return a
      }
    }
  });

  function oh(a, b) {
    return ph().g(b) in a
  };

  function qh() {}
  r(qh, O);
  qh.prototype.g = function(a) {
    if (null == a) throw a = new Hf, Cf(a, "can't identity hash null"), If(a), a.j(new TypeError(a)), a.g;
    return ":" + Ng(a)
  };
  var rh;

  function ph() {
    sh();
    return rh
  }

  function sh() {
    sh = m();
    rh = new qh
  };

  function th(a) {
    this.g = a
  }
  r(th, O);
  th.prototype.getType = n("g");

  function uh(a) {
    this.g = a
  }
  r(uh, O);
  uh.prototype.log = function(a, b, c) {
    b && null != c ? this.g.log(a.g, b, c) : b ? this.g.log(a.g, b) : this.g.log(a.g)
  };

  function vh() {
    this.g = !1
  }
  r(vh, O);
  vh.prototype.dispose = function() {
    if (!this.g) {
      this.g = !0;
      this.F();
      var a = zf(this.constructor);
      P(uf(a.j));
      P(Pf("[]", a.g))
    }
  };
  vh.prototype.L = n("g");

  function wh(a, b) {
    b && !b.L() && (a.L() ? b.dispose() : (a.D || (a.D = []), a.D.push(b)))
  }
  vh.prototype.F = function() {
    if (this.D) {
      for (var a = 0; a < this.D.length; a++) this.D[a].dispose();
      this.D.length = 0
    }
  };

  function xh() {
    this.g = !1;
    this.j = 1;
    this.A = !1;
    this.o = [];
    this.v = []
  }
  r(xh, vh);

  function yh(a, b) {
    Ug(4 != a.j, "Cannot fire a disposed XDeferred");
    Ug(1 == a.j, "Cannot fire a XDeferred more than once");
    a.B = b;
    zh(a, !0)
  }

  function Ah(a, b) {
    Ug(4 != a.j, "Cannot fire a disposed XDeferred");
    Ug(1 == a.j, "Cannot fire a XDeferred more than once");
    a.w = b;
    zh(a, !1)
  }

  function Bh(a, b, c) {
    Ug(4 != a.j, "Cannot add callback to disposed XDeferred");
    Ug(!a.A, "Cannot add callback to XDeferred that is firing its callback/errback queue");
    Ch(a, b, c) || (b && Xg(a.o, function(d) {
      b(d)
    }), c && Xg(a.v, function(d) {
      c(d)
    }))
  }
  xh.prototype.transform = function(a) {
    function b(e) {
      Ah(d, e)
    }

    function c(e) {
      var f = null;
      try {
        f = a(e)
      } catch (g) {
        g = Gf(g);
        if (g instanceof Mf) {
          Ah(d, g);
          return
        }
        throw g.g;
      }
      yh(d, f)
    }
    Ug(0 == this.A, "Cannot add callback to XDeferred that is firing its callback/errback queue");
    var d = new xh;
    if (Ch(this, c, b)) return d;
    this.o.push(c);
    this.v.push(b);
    return d
  };
  xh.prototype.F = function() {
    this.j = 4;
    this.o.length = 0;
    this.v.length = 0;
    vh.prototype.F.call(this)
  };

  function zh(a, b) {
    a.A = !0;
    if (b)
      for (a.j = 2, b = 0; b < a.o.length; b++)(0, a.o[b])(a.B);
    else
      for (a.j = 3, b = 0; b < a.v.length; b++)(0, a.v[b])(a.w);
    a.A = !1;
    a.o.length = 0;
    a.v.length = 0
  }

  function Ch(a, b, c) {
    return 1 != a.j ? (a.A = !0, 2 == a.j && b ? b(a.B) : 3 == a.j && c && c(a.w), a.A = !1, !0) : !1
  };

  function Dh() {}
  r(Dh, O);
  Dh.prototype.init = m();
  Dh.prototype.log = m();
  var Eh, Fh;

  function Gh() {
    Gh = m();
    Fh = Eh = new Hh(null)
  };

  function Hh(a) {
    this.v = a ? a : new Ih;
    this.g = {};
    this.o = new Dh;
    this.j = {}
  }
  r(Hh, O);
  Hh.prototype.w = function(a, b) {
    a = this.j = b;
    b = [];
    for (var c in a) b.push([c, a[c]])
  };
  Hh.prototype.A = function() {
    return JSON.stringify(this.j)
  };

  function Jh(a, b, c) {
    Kh();
    var d = "goog_" + Lh++;
    var e = a.g,
      f = a.v,
      g = Tf(Qg()),
      h = new Mh;
    h.g = !1;
    h.A = a;
    h.D = f;
    h.w = g;
    h.v = b;
    h.j = !0 === c;
    h.o = void 0;
    $g(e, d, h);
    return d
  }

  function Nh(a, b) {
    var c = a.g[b];
    if (c) {
      if (c.g) throw Q("Timing events should only be completed once").g;
      c.g = !0;
      c.A.o.log(c.v, Tf(Qg()) - c.w, c.j, c.o);
      delete a.g[b]
    }
  }

  function Oh(a, b) {
    b in a.g && delete a.g[b]
  };
  Hh.prototype.saveInitialLoadStats = Hh.prototype.w;
  Hh.prototype.getInitialLoadStats = Hh.prototype.A;

  function Ih() {}
  r(Ih, O);

  function Mh() {
    this.g = this.j = !1
  }
  r(Mh, O);

  function Kh() {
    Kh = m();
    Lh = Math.floor(-2147483648 * Math.random())
  }
  var Lh = 0;
  var Ph;

  function Qh() {
    Qh = m();
    Ph = new Rh
  };

  function Rh() {}
  r(Rh, O);
  Rh.prototype.g = m();

  function Sh() {}
  r(Sh, O);
  Sh.prototype.g = function(a) {
    performance.mark(a)
  };
  var Th;

  function Uh() {
    Uh = m();
    Th = null
  };

  function Vh() {
    this.v = void 0 !== t.performance && void 0 !== t.performance.mark ? new Sh : (Qh(), Ph);
    this.g = {}
  }
  r(Vh, O);

  function Wh(a) {
    (Uh(), Th) || (a = new Vh(a), Uh(), Th = a);
    return Uh(), Th
  }
  Vh.prototype.j = function(a) {
    Xh(this, a, Tf(Qg()));
    this.v.g(a)
  };
  Vh.prototype.getTime = function(a) {
    a = this.g[a];
    return null != a ? a : null
  };
  Vh.prototype.o = function(a, b) {
    a in this.g || $g(this.g, a, 0);
    $g(this.g, a, this.g[a] + b)
  };

  function Xh(a, b, c) {
    if (b in a.g) throw Q("Field " + P(b) + " is already set.").g;
    $g(a.g, b, c)
  }
  Vh.prototype.A = function(a) {
    if (!S(R(), "icso")) {
      if (a)
        for (var b in a) Xh(this, b, a[b]);
      Xh(this, "sldummy", 0)
    }
  };
  Vh.prototype.setTime = Vh.prototype.j;
  Vh.prototype.incrementTime = Vh.prototype.o;
  Vh.prototype.setServerValues = Vh.prototype.A;
  t._getTimingInstance = Wh;
  t._docsTiming = Vh;

  function Yh(a) {
    D(this, a, "docs.security.access_capabilities", -1, null)
  }
  y(Yh, C);

  function Zh() {
    this.g = !1;
    this.j = {};
    this.o = null
  }
  r(Zh, vh);
  Zh.prototype.F = function() {
    vh.prototype.F.call(this);
    var a = this.j,
      b;
    for (b in a) delete a[b];
    this.o = null
  };

  function $h(a, b) {
    if (!a.o) {
      var c = a.j,
        d = [],
        e;
      for (e in c) d.push(c[e]);
      a.o = d
    }
    a = a.o;
    for (c = 0; c < a.length; c++)(0, a[c])(b)
  };

  function ai() {}
  r(ai, O);

  function bi() {
    this.g = !1;
    this.j = []
  }
  r(bi, vh);

  function ci(a, b, c) {
    a = a.j;
    if (null == c) throw b = new Hf, Df(b), Ef(b), If(b), b.j(new TypeError(b)), b.g;
    if (oh(b.j, c)) throw jg(Vg("Observer %s previously registered.", [c])).g;
    $g(b.j, ph().g(c), c);
    b.o = null;
    var d = new ai;
    d.g = b;
    d.j = c;
    a.push(d)
  }
  bi.prototype.F = function() {
    for (var a = this.j.pop(); a;) {
      if (oh(a.g.j, a.j)) {
        var b = a.g,
          c = a = a.j;
        if (!oh(b.j, c)) throw hg(Vg("Trying to remove inexistant Observer %s.", [a])).g;
        a = c;
        a = ph().g(a);
        delete b.j[a];
        b.o = null
      }
      a = this.j.pop()
    }
    vh.prototype.F.call(this)
  };

  function U() {
    this.g = !1
  }
  r(U, vh);
  q = U.prototype;
  q.yb = function(a) {
    if (!(0 <= Wg(this.X(), a.o))) throw Q("Cannot create operations for an unsupported record type " + P(a.o)).g;
    return this.Da(a)
  };
  q.ka = function(a, b) {
    var c = this.aa(a),
      d = [];
    a = new di(c, a, b, null);
    d.push(a);
    return d
  };
  q.Da = function(a) {
    return this.ka(a, null)
  };
  q.aa = function(a) {
    throw Q("Key cannot be obtained for record of type " + P(a.o)).g;
  };
  q.T = function(a) {
    return ei(a) ? 0 <= Wg(this.X(), a.A) : !1
  };

  function fi(a) {
    this.o = a
  }
  r(fi, O);
  fi.prototype.getType = n("o");

  function ei(a) {
    a = a.getType();
    return "update-record" === a || "delete-record" === a
  };

  function gi(a, b, c) {
    this.o = a;
    this.D = b;
    this.A = c
  }
  r(gi, fi);

  function V(a) {
    if (null == a.D) throw Q("Cannot getKey of operation for singleton record.").g;
    return a.D
  };

  function hi(a, b) {
    this.g = a;
    this.j = b
  }
  r(hi, O);

  function ii(a, b) {
    this.o = a;
    this.g = {};
    this.j = {};
    this.w = !0 === b;
    this.v = !this.w
  }
  r(ii, O);
  ii.prototype.Ja = function() {
    return this.w || !ah(this.j)
  };

  function ji(a, b) {
    a = ki(a, b);
    return null == a ? null : a instanceof Array ? a.concat() : bh(a)
  }

  function li(a, b) {
    a = mi(a, b);
    return null == a || 0 == a ? null : a
  }

  function mi(a, b) {
    a = ki(a, b);
    return null == a ? null : a
  }

  function ni(a, b) {
    a = ki(a, b);
    return null == a ? null : a
  }

  function oi(a, b) {
    return null == ki(a, b) ? null : 0 != a.g[b].length
  }

  function pi(a, b, c) {
    W(a, b, c ? "true" : "")
  }

  function qi(a) {
    a = ki(a, "docosKeyData");
    return null == a ? null : a.concat()
  }

  function ki(a, b) {
    a = a.g[b];
    return null != a ? a : null
  }

  function W(a, b, c) {
    if ((Fg(c) || "string" === typeof c || "number" === typeof c || "boolean" === typeof c ? 0 : Ga(c)) && !Da(c)) ri(c, []), null != a.g[b] && fh(a.g[b], c) || (c = bh(c), $g(a.g, b, c), a.v || $g(a.j, b, c));
    else if (Da(c)) S(R(), "docs-anlpfdo") || si(c, []), ri(c, []), null != a.g[b] && dh(a.g[b], c) || (c = c.concat(), $g(a.g, b, c), a.v || $g(a.j, b, c));
    else {
      var d = a.g[b];
      (null == d ? null == c : Fg(c) ? ug(d, c.g) : ug(d, c)) || (ch(a.g, b, c), a.v || ch(a.j, b, c))
    }
  }

  function ti(a, b, c, d) {
    ui(a.g, b, c, d);
    a.v || ui(a.j, b, c, d)
  }

  function vi(a, b, c) {
    return (a = ki(a, b)) ? c in a ? a[c] : null : null
  }

  function ui(a, b, c, d) {
    var e = a[b];
    if (!e) {
      var f = e = {};
      $g(a, b, f)
    }
    null == d ? $g(e, c, null) : ch(e, c, d)
  }
  ii.prototype.B = function() {
    this.j = {};
    this.w = !1
  };
  ii.prototype.jb = aa(null);

  function si(a, b) {
    b.push(a);
    for (var c = 0; c < a.length; c++)
      if (a[c] instanceof Array) {
        if (S(R(), "docs-anlpfdo")) Wg(b, a[c]);
        else if (0 <= Wg(b, a[c])) throw Q("Circular reference detected").g;
        si(a[c], b)
      } b.pop()
  };

  function ri(a, b) {
    var c = S(R(), "docs-anlpfdo");
    b.push(a);
    if (a instanceof Array)
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (null != e) {
          if (c) Wg(b, e);
          else if (0 <= Wg(b, e)) throw Q("Circular reference detected").g;
          ri(e, b)
        }
      } else if (a instanceof Object)
        for (d = Object.keys(a), e = 0; e < d.length; e++) {
          var f = d[e];
          if (null != a[f]) {
            if (c) Wg(b, a[f]);
            else if (0 <= Wg(b, a[f])) throw Q("Circular reference detected").g;
            ri(a[f], b)
          }
        }
    b.pop()
  };

  function di(a, b, c, d) {
    gi.call(this, d ? d : "update-record", a, b.o);
    a = c;
    this.j = b.w;
    this.g = {};
    c = b.j;
    a = a ? a : [];
    for (var e in c) ch(this.g, e, 0 <= Wg(a, e) ? ki(b, e) : b.g[e])
  }
  r(di, gi);

  function wi(a) {
    var b = new Yh(null);
    a = xi.indexOf(a);
    var c = a >= xi.indexOf(5),
      d = a >= xi.indexOf(4),
      e = a >= xi.indexOf(2),
      f = a >= xi.indexOf(3);
    F(b, 1, a >= xi.indexOf(1));
    F(b, 2, c);
    F(b, 3, d);
    F(b, 4, e);
    F(b, 8, e);
    F(b, 5, f);
    F(b, 7, f);
    F(b, 6, f);
    F(b, 9, e);
    F(b, 10, e);
    F(b, 11, e);
    F(b, 12, e);
    F(b, 13, e);
    F(b, 14, f);
    F(b, 15, f);
    F(b, 16, !1);
    return b
  }

  function yi(a) {
    return 1 == hc(a, 6) && 1 == hc(a, 4) ? 3 : 1 == hc(a, 4) ? 2 : 1 == hc(a, 3) ? 4 : 1 == hc(a, 2) ? 5 : 1 == hc(a, 1) ? 1 : 0
  };

  function zi() {
    this.g = !1;
    this.j = Wh(null)
  }
  r(zi, vh);
  zi.prototype.qb = function(a, b) {
    for (var c = Tf(Qg()), d = [], e = 0; e < a.length; e++) d.push(new Ai(a[e]));
    !0 === b && this.j.o("md", Tf(Qg()) - c);
    return d
  };

  function Bi() {
    this.j = !1;
    this.g = []
  }
  r(Bi, O);

  function Ci(a) {
    var b = a.g;
    a.g = [];
    a.j = !1;
    return b
  };

  function Di(a, b, c) {
    ii.call(this, "document", c);
    this.A = new Bi;
    this.D = new Ei;
    W(this, "id", a);
    W(this, "documentType", b)
  }
  var xi = [0, 1, 5, 4, 2, 3];
  r(Di, ii);
  q = Di.prototype;
  q.H = function() {
    return this.g.id
  };
  q.getType = function() {
    return this.g.documentType
  };
  q.jb = function() {
    var a = 0 == this.A.g.length;
    if (a) return ii.prototype.jb.call(this);
    a = a ? 1 : 2;
    return new hi(this.H(), a)
  };

  function Fi(a) {
    var b = a.getType();
    return new Gi(b, ni(a, "jobset"), null == ki(a, "isFastTrack") ? !1 : 0 != a.g.isFastTrack.length)
  }
  q.La = function(a) {
    pi(this, "ip", a)
  };
  q.Ja = function() {
    return ii.prototype.Ja.call(this) || 0 != this.A.g.length
  };

  function Hi(a, b, c) {
    this.o = a;
    this.v = b;
    this.w = c
  }
  r(Hi, fi);

  function Ii(a, b, c, d) {
    Hi.call(this, "append-commands", a, b);
    this.A = c;
    this.D = d
  }
  r(Ii, Hi);

  function Ji(a, b) {
    this.g = !1;
    this.ec = a;
    this.Ta = b;
    this.cc = new zi(this.Ta);
    new Ki("mr")
  }
  r(Ji, vh);
  Ji.prototype.na = n("ec");
  Ji.prototype.qb = function(a, b) {
    return this.cc.qb(a, b)
  };
  Ji.prototype.eb = function(a) {
    var b = new Bi,
      c = a.A;
    for (var d = 0; d < c.g.length; d++) {
      var e = b,
        f = c.g[d];
      !0 === c.j && (e.g = [], e.j = !0);
      e.g.push(f);
      c.j = !1
    }
    c.g = [];
    if (0 == b.g.length) return [];
    c = b.j;
    return [new Ii(a.H(), a.getType(), Ci(b), c)]
  };

  function Li(a, b, c) {
    nh.call(this, "Local storage error: " + P(b), null);
    this.type = 0;
    this.type = a;
    this.cb = c;
    this.j(Error(this))
  }
  r(Li, nh);

  function Ki() {
    this.g = !1;
    Wh(null)
  }
  r(Ki, vh);

  function Gi(a, b, c) {
    this.o = a;
    this.j = b;
    this.g = c
  }
  r(Gi, O);
  Gi.prototype.getType = n("o");

  function Mi(a) {
    this.g = a
  }
  r(Mi, O);

  function Ei() {}
  r(Ei, O);
  Ei.prototype.R = function(a) {
    return a ? [a.g] : null
  };

  function Ni(a, b, c, d) {
    this.o = "append-template-commands";
    this.v = a;
    this.w = b;
    this.A = c;
    this.D = d
  }
  r(Ni, fi);
  Ni.prototype.na = n("w");

  function Oi(a, b) {
    ii.call(this, "applicationMetadata", b);
    this.A = !1;
    W(this, "dt", a);
    this.D = []
  }
  r(Oi, ii);
  Oi.prototype.na = function() {
    return this.g.dt
  };
  Oi.prototype.B = function() {
    ii.prototype.B.call(this);
    this.A = !1
  };
  Oi.prototype.Ja = function() {
    return this.A || ii.prototype.Ja.call(this)
  };
  var Pi = ["c", "oc", "ou", "u"];

  function Qi() {
    this.g = !1
  }
  r(Qi, U);
  q = Qi.prototype;
  q.X = function() {
    return []
  };
  q.ka = function() {
    throw Q("No operation is supported.").g;
  };
  q.Da = function(a) {
    return this.ka(a, null)
  };
  q.aa = function() {
    throw Q("No record is supported.").g;
  };
  q.T = aa(!1);

  function Ri() {
    this.g = !1
  }
  r(Ri, U);
  Ri.prototype.X = function() {
    return ["comment"]
  };
  Ri.prototype.aa = function(a) {
    return [a.g.di, a.H()]
  };

  function Si(a) {
    this.g = !1;
    this.hb = a
  }
  r(Si, U);
  q = Si.prototype;
  q.X = function() {
    return ["document"]
  };
  q.sa = function(a) {
    var b = this.hb[a];
    if (!b) throw Q("No adapter found for this type: " + P(a)).g;
    return b
  };
  q.createDocument = function(a, b, c) {
    a = new Di(a, b, !0, this.hb[b]);
    null == c || null == mi(a, "initialSyncReason") && W(a, "initialSyncReason", c);
    return a
  };
  q.T = function(a) {
    var b = a.getType();
    return "append-commands" === b || "write-trix" === b ? !0 : U.prototype.T.call(this, a)
  };
  q.ka = function(a) {
    var b = U.prototype.ka.call(this, a, "lastModifiedClientTimestamp lastWarmStartedTimestamp ic odocid relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber fileLockedReason mimeType".split(" "));
    a = this.sa(a.getType()).eb(a);
    return b.concat(a)
  };
  q.aa = function(a) {
    return a.H()
  };

  function Ti(a) {
    this.g = !1;
    this.dc = a
  }
  r(Ti, U);
  q = Ti.prototype;
  q.X = function() {
    return ["applicationMetadata"]
  };
  q.aa = function(a) {
    return a.na()
  };
  q.T = function(a) {
    return Pg(a.getType(), "update-application-metadata")
  };
  q.ka = function(a) {
    var b = this.aa(a);
    return [new Ui(b, a, a.A ? a.D.slice(0) : null)]
  };
  q.sa = function(a) {
    var b = this.dc[a];
    if (!b) throw Q("No adapter found for this type: " + P(a)).g;
    return b
  };

  function Ui(a, b, c) {
    di.call(this, a, b, null, "update-application-metadata");
    this.v = c
  }
  r(Ui, di);

  function Vi() {
    this.g = !1
  }
  r(Vi, U);
  Vi.prototype.X = function() {
    return ["documentEntity"]
  };
  Vi.prototype.aa = function(a) {
    return [a.g.documentId, a.getType(), a.H()]
  };

  function Wi() {
    this.g = !1
  }
  r(Wi, U);
  Wi.prototype.X = function() {
    return []
  };

  function Xi(a, b) {
    this.o = "document-lock";
    this.v = a;
    this.A = b
  }
  r(Xi, fi);

  function Yi(a, b, c, d, e) {
    ii.call(this, "impressionBatch", e);
    W(this, "di", a);
    W(this, "dt", b);
    W(this, "ibt", c);
    W(this, "iba", d)
  }
  r(Yi, ii);

  function Zi() {
    this.g = !1
  }
  r(Zi, U);
  Zi.prototype.X = function() {
    return ["impressionBatch"]
  };
  Zi.prototype.aa = function(a) {
    var b = [];
    b.push(ni(a, "di"));
    b.push(a.g.ibt);
    return b
  };
  Zi.prototype.T = function(a) {
    return U.prototype.T.call(this, a) && (Pg(a.getType(), "update-record") && a.j || Pg(a.getType(), "delete-record"))
  };

  function $i() {
    this.g = !1
  }
  r($i, U);
  $i.prototype.X = function() {
    return []
  };

  function aj(a, b, c) {
    this.g = a;
    this.changeType = b;
    this.j = c
  }
  r(aj, O);

  function bj(a) {
    this.g = a
  }
  r(bj, O);

  function cj(a) {
    this.o = this.g = !1;
    this.j = a;
    this.v = new Zh
  }
  r(cj, vh);

  function dj(a) {
    if (a.o) throw Q("Called setWritable on an already writable localstore.").g;
    a.o = !0
  }
  cj.prototype.write = function(a, b, c) {
    var d = this;
    if (!this.o) throw Q("Cannot write to read-only local store.").g;
    var e = ej(a);
    a = fj(this, a);
    0 == a.length ? b() : gj(this.j, a, function() {
      $h(d.v, e);
      b()
    }, c)
  };

  function ej(a) {
    var b = [];
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      b.push(new aj(d, d.w ? "new" : "update", d.j))
    }
    return new bj(b, null)
  }

  function fj(a, b) {
    var c = [],
      d = null;
    for (var e = 0; e < b.length; e++) {
      var f = b[e];
      if (f.Ja()) {
        var g = a.j;
        var h = f.o;
        if (g = h in g.B ? g.B[h] : null) {
          g = g.yb(f);
          Yg(c, g);
          if ((g = f.jb()) && d) {
            if (!wf(d.g, g.g)) throw Q("Cannot compare two requirements with different doc id.").g;
            d = d.j > g.j ? d : g
          } else d = d ? d : g;
          f.B()
        } else throw Q("No Capability for record :" + P(f.o)).g;
      }
    }
    d && c.unshift(new Xi(d.g, d.j));
    return c
  };

  function hj() {
    this.g = !1
  }
  r(hj, U);
  hj.prototype.X = function() {
    return []
  };

  function ij() {
    this.g = !1
  }
  r(ij, U);
  ij.prototype.X = function() {
    return ["blobMetadata"]
  };
  ij.prototype.ka = function(a) {
    return U.prototype.ka.call(this, a, Pi)
  };
  ij.prototype.Da = function(a) {
    return this.ka(a, null)
  };
  ij.prototype.aa = function(a) {
    return [a.g.d, a.g.p]
  };
  var jj = ["revisionAccessInfo", "unsentBundleMetadata", "selection", "sentBundlesSavedRevision", "snapshotBundleIndex"];

  function kj(a) {
    return a.g.docId
  }

  function lj(a, b) {
    W(a, "unsentBundleMetadata", b)
  };

  function mj(a, b, c) {
    this.g = a;
    this.j = b;
    this.o = c
  }
  r(mj, O);
  mj.prototype.R = function() {
    var a = {};
    a.rid = this.g;
    $g(a, "sid", this.j);
    a.lei = this.o;
    return a
  };

  function nj(a, b) {
    this.j = a;
    this.g = b
  }
  r(nj, O);
  nj.prototype.X = function() {
    return ["pendingQueue"]
  };
  nj.prototype.aa = function(a) {
    return kj(a)
  };
  nj.prototype.yb = function(a) {
    var b = a.getType();
    var c = this.j[b];
    if (!c) throw Q("No document adapter available for type " + P(b)).g;
    var d = a.G;
    b = [];
    switch (d) {
      case 7:
        d = c;
        b = kj(a);
        var e = a.D,
          f = a.L;
        c = [];
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          e++;
          h = oj(this, h.o(), d, kj(a), e, !0);
          if (!h) throw Q("Unexpected null operation").g;
          c.push(h)
        }
        f = a.D + c.length;
        g = a.C ? a.C : [];
        h = [];
        e = [];
        for (var k = 0; k < g.length; k++) {
          var l = g[k];
          var p = l.o();
          if (p = oj(this, p, d, b, f + 1, null)) e.push(p), l = new mj(l.g(), l.j(), f + 1), h.push(l), f++
        }
        lj(a, pj(h));
        d =
          new qj(a);
        c.push(d);
        Yg(c, e);
        0 <= a.D && c.push(new rj(b, a.D));
        b = c;
        break;
      case 1:
        d = a.D + 1;
        e = kj(a);
        b = [];
        f = a.I;
        g = a.A ? Gg(a.A.g) : null;
        h = a.A ? a.A.j : null;
        if (k = ji(a, "unsentBundleMetadata")) {
          l = [];
          for (p = 0; p < k.length; p++) l.push(new mj(k[p].rid, k[p].sid, k[p].lei));
          k = l
        } else k = [];
        if (g && null != h) k.push(new mj(g.g, h, d));
        else {
          if (0 == k.length) throw Q("Bundles and metadata do not match!").g;
          g = k[k.length - 1];
          k[k.length - 1] = new mj(g.g, g.j, d)
        }
        f && lj(a, pj(k));
        ah(a.j) || (a = new di(e, a, jj, null), b.push(a));
        (a = oj(this, f, c, e, d, null)) && b.push(a);
        break;
      case 5:
        lj(a, null);
        a = new qj(a);
        b.push(a);
        break;
      case 2:
        lj(a, null);
        a = new sj(a);
        b.push(a);
        break;
      case 3:
        a = new tj(a);
        b.push(a);
        break;
      case 4:
        a = new uj(a);
        b.push(a);
        break;
      case 6:
        a = new di(kj(a), a, jj, null);
        b.push(a);
        break;
      default:
        throw Q("Unknown Pending Queue operation type: " + d).g;
    }
    return b
  };

  function oj(a, b, c, d, e, f) {
    if (!(!0 === f || b && 0 != b.length)) return null;
    f = [];
    if (b) {
      var g = [];
      for (var h = 0; h < b.length; h++) {
        var k = c.Ta.R(b[h]);
        f.push(k);
        k = JSON.stringify(k);
        for (var l = [], p = 0; p < k.length; p++) {
          var u = Og(k, p),
            z = !1,
            v = k.charCodeAt(p),
            K = Ag(k.charCodeAt(p));
          55296 <= v && 56319 >= v ? z = !(65536 <= u && 1114111 >= u) : K && (0 < p ? (z = Og(k, p - 1), z = !(65536 <= z && 1114111 >= z)) : z = !0);
          z && (u = "\\u" + P(Af(u)), z = vj(k, p - 1), v = vj(k, p + 1), l.push(new wj(u, p, k.length, z, v)))
        }
        Yg(g, l)
      }
      0 < g.length && (b = {}, c = "{" + P(g.join("; ")) + "}", $g(b, "command_malformedCharacterContext",
        c), a = a.g, c = new Mf, Cf(c, "Serializing commands containing malformed surrogate characters."), c.j(Error(c)), b ? X(a.g, c.g, b) : X(a.g, c.g))
    }
    return new xj(d, f, e)
  }

  function pj(a) {
    if (0 == a.length) return null;
    var b = [];
    for (var c = 0; c < a.length; c++) b.push(a[c].R());
    return b
  };

  function sj(a) {
    di.call(this, kj(a), a, jj, "pq-clear")
  }
  r(sj, di);

  function uj(a) {
    di.call(this, kj(a), a, jj, "pq-clear-sent-bundle")
  }
  r(uj, di);

  function tj(a) {
    di.call(this, kj(a), a, jj, "pq-clear-sent")
  }
  r(tj, di);

  function rj(a, b) {
    this.o = "pq-delete-commands";
    this.v = a;
    this.A = b
  }
  r(rj, fi);

  function yj(a, b, c) {
    this.o = a;
    this.j = b;
    this.g = c
  }
  r(yj, O);

  function qj(a) {
    di.call(this, kj(a), a, jj, "pq-mark-sent");
    this.w = !1;
    this.v = [];
    var b = a.D;
    if (7 == a.G) {
      this.w = !0;
      a = a.L;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        b++;
        d = new yj(d.j(), d.g(), b);
        this.v.push(d)
      }
    } else this.w = !1, b = new yj(a.A ? a.A.j : null, (a.A ? Gg(a.A.g) : null).g, b), this.v.push(b)
  }
  r(qj, di);

  function xj(a, b, c) {
    this.o = "pq-write-commands";
    this.w = a;
    this.A = b;
    this.v = c
  }
  r(xj, fi);

  function wj(a, b, c, d, e) {
    this.A = a;
    this.o = b;
    this.v = c;
    this.j = d;
    this.g = e
  }
  r(wj, O);
  wj.prototype.toString = function() {
    var a = "MalformedCharacterContext(unicodeChar: " + P(this.A) + ", index: " + this.o + ", textLength: " + this.v;
    null != this.j && (a = P(a) + String(", prev: " + P(this.j)));
    null != this.g && (a = P(a) + String(", next: " + P(this.g)));
    return P(a) + ")"
  };
  wj.prototype.ga = function(a) {
    return a instanceof wj && Pg(this.toString(), vg(a))
  };
  wj.prototype.Ia = function() {
    for (var a = [this.A, Gg(this.o), Gg(this.v), this.j, this.g], b = 1, c = 0; c < a.length; c++) {
      b *= 31;
      var d = a[c];
      if (null != d) {
        var e = void 0;
        if (d.Ia) e = d.Ia();
        else {
          var f = typeof d;
          "number" == f ? e = kg(d) : "boolean" == f ? e = d ? 1231 : 1237 : "string" == f ? e = Kg(d) : e = xf(d)
        }
      } else e = 0;
      b += e;
      b |= 0
    }
    return b
  };

  function vj(a, b) {
    return 0 > b || b >= a.length ? null : "\\u" + P(Af(Og(a, b)))
  };

  function zj(a) {
    this.newVersion = 0;
    this.newVersion = a
  }
  r(zj, O);

  function Aj() {
    this.g = !1;
    this.N = new Zh;
    this.B = {}
  }
  r(Aj, vh);

  function Bj(a, b) {
    var c = b.X();
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (a.B[e]) throw Q("Record type " + P(e) + "already handled by another capability.").g;
      $g(a.B, e, b)
    }
  }
  Aj.prototype.ob = aa(null);
  Aj.prototype.Lb = aa(null);
  Aj.prototype.qa = aa(null);
  Aj.prototype.Kb = aa(null);

  function Cj(a, b, c) {
    ii.call(this, a, c);
    W(this, "dataType", b)
  }
  r(Cj, ii);

  function Dj(a, b) {
    Cj.call(this, "syncHints", ["synchints", "" + b], a);
    W(this, "docIds", []);
    a = Gg(b);
    W(this, "sourceApp", a)
  }
  r(Dj, Cj);

  function Ej(a, b) {
    var c = [];
    for (var d = 0; d < b.length; d++) {
      var e = c,
        f = b[d];
      Fg(f) ? e.push(f.g) : e.push(f)
    }
    W(a, "docIds", c)
  };

  function Fj() {
    this.g = !1
  }
  r(Fj, U);
  Fj.prototype.X = function() {
    return ["syncHints"]
  };
  Fj.prototype.aa = function(a) {
    a = mi(a, "sourceApp");
    return ["synchints", "" + (null == a ? 0 : kg(a))]
  };
  Fj.prototype.T = function(a) {
    return U.prototype.T.call(this, a) && Pg(a.getType(), "update-record")
  };

  function Gj() {
    this.g = !1
  }
  r(Gj, U);
  Gj.prototype.X = function() {
    return ["syncObject"]
  };
  Gj.prototype.aa = function(a) {
    a = a.g.keyPath.concat();
    for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
    return b
  };
  Gj.prototype.T = function(a) {
    return U.prototype.T.call(this, a) && Pg(a.getType(), "update-record") && a.j
  };

  function Hj() {
    this.g = !1
  }
  r(Hj, U);
  Hj.prototype.X = function() {
    return ["syncStats"]
  };
  Hj.prototype.aa = aa(null);
  Hj.prototype.T = function(a) {
    return U.prototype.T.call(this, a) && !Pg(a.getType(), "delete-record")
  };

  function Ij(a, b) {
    this.g = !1;
    this.j = a;
    this.o = b
  }
  r(Ij, vh);
  Ij.prototype.eb = function(a) {
    var b = Ci(a.A);
    return 0 == b.length ? [] : [new Ni(a.H(), a.na(), b, !0)]
  };
  Ij.prototype.na = n("j");

  function Jj(a) {
    this.g = !1;
    this.fc = a
  }
  r(Jj, U);
  q = Jj.prototype;
  q.X = function() {
    return ["templateCreationMetadata", "templateMetadata"]
  };
  q.aa = function(a) {
    return "templateCreationMetadata" === a.o ? [a.H()] : [a.H()]
  };
  q.Da = function(a) {
    var b = U.prototype.Da.call(this, a);
    "templateCreationMetadata" === a.o && (a = this.sa(a.na()).eb(a), Yg(b, a));
    return b
  };
  q.sa = function(a) {
    var b = this.fc[a];
    if (!b) throw Q("No adapter found for this type: " + P(a)).g;
    return b
  };
  q.T = function(a) {
    return "append-template-commands" === a.getType() ? !0 : U.prototype.T.call(this, a)
  };

  function Kj(a, b) {
    ii.call(this, "user", b);
    W(this, "id", a);
    pi(this, "fastTrack", !0)
  }
  r(Kj, ii);
  Kj.prototype.H = function() {
    return this.g.id
  };

  function Lj(a, b) {
    W(a, "emailAddress", b)
  }

  function Mj(a, b) {
    W(a, "locale", b)
  }

  function Nj(a, b) {
    pi(a, "fastTrack", b)
  }

  function Oj(a, b) {
    pi(a, "internal", b)
  };

  function Pj() {
    this.g = !1
  }
  r(Pj, U);
  q = Pj.prototype;
  q.X = function() {
    return ["user"]
  };

  function Qj(a) {
    var b = new xh;
    Rj(a, function(c) {
      yh(b, c)
    }, function(c) {
      Ah(b, c)
    });
    return b.transform(function(c) {
      if (1 > c.length) throw c = new nh("Expected an offline user in localstore", null), c.j(Error(c)), c.g;
      return c[0]
    })
  }
  q.ka = function(a, b) {
    return U.prototype.ka.call(this, a, b)
  };
  q.Da = function(a) {
    return this.ka(a, null)
  };
  q.aa = function(a) {
    return a.H()
  };
  q.T = function(a) {
    return U.prototype.T.call(this, a) && !Pg(a.getType(), "delete-record")
  };
  var Sj = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
  } : function(a, b) {
    return Array(b + 1).join(a)
  };

  function Tj() {
    this.g = !1
  }
  r(Tj, U);
  Tj.prototype.X = function() {
    return ["fontMetadata"]
  };
  Tj.prototype.aa = function(a) {
    return a.g.fontFamily
  };
  Tj.prototype.T = function(a) {
    return U.prototype.T.call(this, a) ? Pg(a.getType(), "update-record") ? a.j : !0 : !1
  };

  function Uj(a, b) {
    nh.call(this, a, null);
    this.o = b;
    this.j(Error(this))
  }
  r(Uj, nh);
  da.Object.defineProperties(Uj.prototype, {
    type: {
      configurable: !0,
      enumerable: !0,
      get: n("o")
    }
  });

  function Vj() {
    this.g = !1
  }
  r(Vj, vh);
  S(R(), "docs-eesl");

  function Wj(a) {
    return a instanceof nh ? (Yc(a.g, void 0), a) : Yc(a, void 0)
  };

  function Xj(a) {
    D(this, a, 0, -1, null)
  }
  y(Xj, C);

  function Yj(a) {
    D(this, a, 0, -1, Zj)
  }
  y(Yj, C);
  var Zj = [1];

  function ak(a, b) {
    return F(a, 1, b || [])
  };

  function bk(a) {
    D(this, a, 0, -1, null)
  }
  y(bk, C);
  bk.prototype.getType = function() {
    return E(this, 1)
  };

  function ck(a) {
    var b = new bk;
    return F(b, 1, a)
  };

  function dk(a) {
    D(this, a, 0, -1, null)
  }
  y(dk, C);

  function ek(a) {
    D(this, a, 0, -1, null)
  }
  y(ek, C);
  ek.prototype.getType = function() {
    return E(this, 1)
  };

  function fk(a) {
    var b = new ek;
    return F(b, 1, a)
  };

  function gk(a) {
    D(this, a, 0, -1, null)
  }
  y(gk, C);

  function hk(a) {
    D(this, a, 0, -1, null)
  }
  y(hk, C);
  hk.prototype.getType = function() {
    return E(this, 1)
  };

  function ik(a) {
    D(this, a, 0, -1, null)
  }
  y(ik, C);

  function jk(a) {
    D(this, a, 0, -1, null)
  }
  y(jk, C);
  jk.prototype.getType = function() {
    return E(this, 1)
  };
  jk.prototype.Ga = function() {
    return G(this, Xj, 5)
  };

  function kk() {}
  kk.prototype.R = function(a) {
    var b = [];
    lk(this, a, b);
    return b.join("")
  };

  function lk(a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (Da(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++) c.push(e), lk(a, d[f], c), e = ",";
          c.push("]");
          return
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), mk(d, c), c.push(":"), lk(a, f, c), e = ","));
          c.push("}");
          return
        }
      }
      switch (typeof b) {
        case "string":
          mk(b, c);
          break;
        case "number":
          c.push(isFinite(b) &&
            !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }
  var nk = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    ok = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

  function mk(a, b) {
    b.push('"', a.replace(ok, function(c) {
      var d = nk[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), nk[c] = d);
      return d
    }), '"')
  };

  function qk(a) {
    return (a = a.exec(zb)) ? a[1] : ""
  }
  var xb = function() {
    if (Vb) return qk(/Firefox\/([0-9.]+)/);
    if (Zb) return Rb() ? qk(/CriOS\/([0-9.]+)/) : qk(/Chrome\/([0-9.]+)/);
    if ($b && !Rb()) return qk(/Version\/([0-9.]+)/);
    if (Wb || Xb) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(zb);
      if (a) return a[1] + "." + a[2]
    } else if (Yb) return (a = qk(/Android\s+([0-9.]+)/)) ? a : qk(/Version\/([0-9.]+)/);
    return ""
  }();

  function rk() {
    return !!t._docs_chrome_extension_exists
  }

  function sk() {
    return t._docs_chrome_extension_features_version || 0
  };
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  function tk(a, b) {
    this.A = [];
    this.N = a;
    this.I = b || null;
    this.v = this.g = !1;
    this.o = void 0;
    this.G = this.U = this.D = !1;
    this.w = 0;
    this.j = null;
    this.B = 0
  }
  q = tk.prototype;
  q.cancel = function(a) {
    if (this.g) this.o instanceof tk && this.o.cancel();
    else {
      if (this.j) {
        var b = this.j;
        delete this.j;
        a ? b.cancel(a) : (b.B--, 0 >= b.B && b.cancel())
      }
      this.N ? this.N.call(this.I, this) : this.G = !0;
      this.g || this.ba(new uk(this))
    }
  };
  q.xb = function(a, b) {
    this.D = !1;
    vk(this, a, b)
  };

  function vk(a, b, c) {
    a.g = !0;
    a.o = c;
    a.v = !b;
    wk(a)
  }

  function xk(a) {
    if (a.g) {
      if (!a.G) throw new yk(a);
      a.G = !1
    }
  }
  q.S = function(a) {
    xk(this);
    vk(this, !0, a)
  };
  q.ba = function(a) {
    xk(this);
    vk(this, !1, a)
  };

  function zk(a, b, c) {
    return Ak(a, b, null, c)
  }

  function Bk(a, b, c) {
    return Ak(a, null, b, c)
  }

  function Ck(a, b) {
    return Ak(a, b, b, void 0)
  }

  function Dk(a, b, c) {
    Ak(a, b, function(d) {
      var e = b.call(this, d);
      if (void 0 === e) throw d;
      return e
    }, c)
  }

  function Ak(a, b, c, d) {
    a.A.push([b, c, d]);
    a.g && wk(a);
    return a
  }
  q.then = function(a, b, c) {
    var d, e, f = new L(function(g, h) {
      d = g;
      e = h
    });
    Ak(this, d, function(g) {
      g instanceof uk ? f.cancel() : e(g)
    });
    return f.then(a, b, c)
  };
  tk.prototype.$goog_Thenable = !0;

  function Ek(a) {
    return Sa(a.A, function(b) {
      return Fa(b[1])
    })
  }

  function wk(a) {
    if (a.w && a.g && Ek(a)) {
      var b = a.w,
        c = Fk[b];
      c && (t.clearTimeout(c.g), delete Fk[b]);
      a.w = 0
    }
    a.j && (a.j.B--, delete a.j);
    b = a.o;
    for (var d = c = !1; a.A.length && !a.D;) {
      var e = a.A.shift(),
        f = e[0],
        g = e[1];
      e = e[2];
      if (f = a.v ? g : f) try {
        var h = f.call(e || a.I, b);
        void 0 !== h && (a.v = a.v && (h == b || h instanceof Error), a.o = b = h);
        if (Ue(b) || "function" === typeof t.Promise && b instanceof t.Promise) d = !0, a.D = !0
      } catch (k) {
        b = k, a.v = !0, Ek(a) || (c = !0)
      }
    }
    a.o = b;
    d && (h = w(a.xb, a, !0), d = w(a.xb, a, !1), b instanceof tk ? (Ak(b, h, d), b.U = !0) : b.then(h, d));
    c &&
      (b = new Gk(b), Fk[b.g] = b, a.w = b.g)
  }

  function Hk(a) {
    var b = new tk;
    b.S(a);
    return b
  }

  function Ik(a) {
    var b = new tk;
    a.then(function(c) {
      b.S(c)
    }, function(c) {
      b.ba(c)
    });
    return b
  }

  function Jk(a) {
    var b = new tk;
    b.ba(a);
    return b
  }

  function yk() {
    A.call(this)
  }
  y(yk, A);
  yk.prototype.message = "Deferred has already fired";
  yk.prototype.name = "AlreadyCalledError";

  function uk() {
    A.call(this)
  }
  y(uk, A);
  uk.prototype.message = "Deferred was canceled";
  uk.prototype.name = "CanceledError";

  function Gk(a) {
    this.g = t.setTimeout(w(this.o, this), 0);
    this.j = a
  }
  Gk.prototype.o = function() {
    delete Fk[this.g];
    throw this.j;
  };
  var Fk = {};

  function Kk(a) {
    var b = {
        Zb: !0
      },
      c = b.document || document,
      d = tb(a).toString(),
      e = Be(document, "SCRIPT"),
      f = {
        Qb: e,
        Ma: void 0
      },
      g = new tk(Lk, f),
      h = null,
      k = null != b.timeout ? b.timeout : 5E3;
    0 < k && (h = window.setTimeout(function() {
      Mk(e, !0);
      g.ba(new Nk(1, "Timeout reached for loading script " + d))
    }, k), f.Ma = h);
    e.onload = e.onreadystatechange = function() {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Mk(e, b.Zb || !1, h), g.S(null))
    };
    e.onerror = function() {
      Mk(e, !0, h);
      g.ba(new Nk(0, "Error while loading script " + d))
    };
    f = b.attributes || {};
    kb(f, {
      type: "text/javascript",
      charset: "UTF-8"
    });
    ze(e, f);
    Jb(e, a);
    Ok(c).appendChild(e);
    return g
  }

  function Ok(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
  }

  function Lk() {
    if (this && this.Qb) {
      var a = this.Qb;
      a && "SCRIPT" == a.tagName && Mk(a, !0, this.Ma)
    }
  }

  function Mk(a, b, c) {
    null != c && t.clearTimeout(c);
    a.onload = Ba;
    a.onerror = Ba;
    a.onreadystatechange = Ba;
    b && window.setTimeout(function() {
      Ce(a)
    }, 0)
  }

  function Nk(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    A.call(this, c);
    this.code = a
  }
  y(Nk, A);

  function Pk(a, b) {
    Md.call(this);
    this.j = a || 1;
    this.g = b || t;
    this.v = w(this.Vc, this);
    this.w = x()
  }
  y(Pk, Md);
  q = Pk.prototype;
  q.ta = !1;
  q.la = null;
  q.setInterval = function(a) {
    this.j = a;
    this.la && this.ta ? (this.stop(), this.start()) : this.la && this.stop()
  };
  q.Vc = function() {
    if (this.ta) {
      var a = x() - this.w;
      0 < a && a < .8 * this.j ? this.la = this.g.setTimeout(this.v, this.j - a) : (this.la && (this.g.clearTimeout(this.la), this.la = null), Nd(this, "tick"), this.ta && (this.stop(), this.start()))
    }
  };
  q.start = function() {
    this.ta = !0;
    this.la || (this.la = this.g.setTimeout(this.v, this.j), this.w = x())
  };
  q.stop = function() {
    this.ta = !1;
    this.la && (this.g.clearTimeout(this.la), this.la = null)
  };
  q.F = function() {
    Pk.ha.F.call(this);
    this.stop();
    delete this.g
  };

  function Qk(a, b, c) {
    if (Fa(a)) c && (a = w(a, c));
    else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : t.setTimeout(a, b || 0)
  }

  function Rk(a, b) {
    var c = null;
    return kf(new L(function(d, e) {
      c = Qk(function() {
        d(b)
      }, a); - 1 == c && e(Error("Failed to schedule timer."))
    }), function(d) {
      t.clearTimeout(c);
      throw d;
    })
  };

  function Sk() {
    this.j = T(R(), "docs-extension-id");
    this.g = null
  }

  function Tk(a) {
    if (!rk()) return Ze(Error("Docs extension cannot be found."));
    var b = fk(2);
    return Uk(a, b).then(m())
  }

  function Vk(a) {
    if (!rk()) return Ze(Error("Docs extension cannot be found."));
    var b = fk(4),
      c = ck(3);
    H(b, 4, c);
    return Uk(a, b).then(m())
  }

  function Wk(a) {
    if (rk()) {
      var b = fk(3);
      Uk(a, b).then(m())
    } else M()
  }

  function Xk(a, b) {
    if (!rk()) return Ze(Error("Docs extension cannot be found."));
    var c = fk(4),
      d = ck(2);
    b = ak(new Yj, b);
    H(d, 3, b);
    H(c, 4, d);
    return Uk(a, c, !0).then(function(e) {
      return (e = G(G(e, hk, 3), gk, 2)) && G(e, pe, 1) || null
    })
  }

  function Yk(a, b) {
    return rk() && 1 <= sk() ? Zk(a, b).then(function(c) {
      return hc(c, 1)
    }) : M(!1)
  }

  function $k(a, b) {
    return rk() && 1 <= sk() ? Zk(a, b, !0, 1E4).then(function(c) {
      return hc(c, 2)
    }) : M(!1)
  }

  function Zk(a, b, c, d) {
    var e = fk(5),
      f = new dk;
    H(e, 5, f);
    F(f, 1, b);
    return Uk(a, e, c, d).then(function(g) {
      return G(g, ik, 4)
    })
  }

  function al(a) {
    return kf(bl(a), function() {
      t._docs_chrome_extension_exists = !1
    })
  }

  function bl(a) {
    return new L(function(b, c) {
      Ak(Kk(new qb(rb, "chrome-extension://" + a.j + "/page_embed_script.js")), b, c)
    })
  }

  function Uk(a, b, c, d) {
    var e = ef(),
      f = cl(a);
    if (!f) return c && e.reject(Error("Could not send extension request due to missing Chrome Runtime.")), e.g;
    if (!f.sendMessage) return Ze(Error("Could not send extension request due to missing chrome.runtime.sendMessage"));
    if (d) {
      var g = x();
      Rk(d).then(function() {
        e.reject(Error("Request to the extension timed out after " + (x() - g) + "ms."))
      })
    }
    f.sendMessage(a.j, b.ia(), void 0, function(h) {
      void 0 !== h ? (h = new jk(h), h.Ga() ? e.reject(Error("Error from Docs extension: " + E(h.Ga(), 1))) :
        e.resolve(h)) : e.reject(Error("No response from Docs extension: " + (a.g.lastError ? a.g.lastError.message : "without lastError")))
    });
    return e.g
  }

  function cl(a) {
    if (a.g) return a.g;
    var b = window;
    a.g = dl(b);
    if (a.g) return a.g;
    for (; b != b.parent && (b = b.parent, a.g = dl(b), !a.g););
    return a.g
  }

  function dl(a) {
    try {
      if (a.chrome && a.chrome.runtime) return a.chrome.runtime
    } catch (b) {}
    return null
  };

  function fl(a, b) {
    this.g = a;
    this.j = b
  };

  function gl(a) {
    var b = a.target.error,
      c = b && b.name;
    b = b && b.message || a.target.webkitErrorMessage;
    a.target.docs_internalAbort && (b = "Internal abort: " + b);
    return c + " (" + b + ")"
  }

  function hl(a) {
    for (var b = [], c = 0; c < a.length; c++) b.push(a.item(c));
    return b.toString()
  };

  function il() {
    this.g = {};
    this.v = this.o = this.j = 0
  };

  function jl(a, b, c, d) {
    I.call(this);
    this.G = a;
    this.B = b;
    this.v = c;
    this.w = d || x;
    this.o = this.j = 0;
    this.g = []
  }
  r(jl, I);
  jl.prototype.start = function() {
    if (this.o) throw Error("Idle delay has already been started");
    this.o = this.w() + this.B;
    this.j = Qk(this.C, this.B, this)
  };
  jl.prototype.C = function() {
    this.j = 0;
    var a = this.w() - this.o;
    this.g.push(a);
    var b = this.v.hidden || this.v.webkitHidden || this.v.mozHidden || this.v.msHidden ? 1020 : 20;
    10 > this.g.length && a > b ? (this.o = this.w() + 1E3, this.j = Qk(this.C, 1E3, this)) : this.G(this)
  };
  jl.prototype.F = function() {
    this.j && t.clearTimeout(this.j)
  };

  function kl(a, b, c, d, e, f, g, h, k) {
    this.K = a;
    this.o = b;
    this.C = c;
    this.I = d;
    this.O = e;
    a = e.v++;
    e.g[a] = c;
    this.N = a;
    this.A = this.B = null;
    this.D = f || null;
    this.w = (Gh(), Fh);
    this.j = k ? Jh(this.w, k) : null;
    this.G = h || 0;
    this.g = null;
    0 < this.G && (this.D || g) && (this.g = new jl(w(this.U, this), this.G, document), this.g.start());
    this.K.onsuccess = ll(this.o, this.ca, this, !0);
    this.K.onerror = ll(this.o, this.V, this, !0)
  }

  function ml(a, b) {
    if (a.B) throw Error("Success callback already set");
    a.B = b
  }
  kl.prototype.ca = function(a) {
    uc(this.g);
    this.j && Nh(this.w, this.j);
    var b = this.O,
      c = this.N;
    b.o++;
    delete b.g[c];
    this.I.g || this.B && this.B(a)
  };

  function nl(a, b) {
    if (a.A) throw Error("Error callback already set");
    a.A = b
  }
  kl.prototype.V = function(a) {
    uc(this.g);
    this.j && Oh(this.w, this.j);
    var b = this.O,
      c = this.N;
    b.j++;
    delete b.g[c];
    a.target.docs_requestContext = this.C;
    this.I.g || (b = a.target.error) && "AbortError" == b.name || this.A && this.A(a)
  };
  kl.prototype.J = function(a) {
    a.onsuccess = Ba;
    a.onerror = Ba
  };
  kl.prototype.U = function() {
    this.j && Oh(this.w, this.j);
    X(this.o, Error("A request was running for a long time"), {
      documentHidden: document.hidden || document.webkitHidden,
      request: this.C,
      requestTimeoutMs: this.G,
      timeoutCallbackSet: !!this.D,
      timeoutDelays: this.g.g.concat().toString()
    });
    uc(this.g);
    !this.I.g && this.D && (this.J(this.K), this.D())
  };

  function ol(a, b, c, d) {
    this.g = a;
    this.v = b;
    this.o = c;
    this.j = d
  }
  ol.prototype.get = function(a) {
    return new kl(this.g.get(a), this.j, this.g.name + ".get(" + a + ")", this.v, this.o)
  };

  function pl(a, b, c, d) {
    this.g = a;
    this.v = b;
    this.o = c;
    this.j = d
  }
  pl.prototype.get = function(a) {
    return new kl(this.g.get(a), this.j, this.g.name + ".get(" + a + ")", this.v, this.o)
  };

  function ql(a, b) {
    b = a.g.put(b);
    return new kl(b, a.j, a.g.name + ".put(undefined)", a.v, a.o)
  }
  pl.prototype.add = function(a, b) {
    a = void 0 !== b ? this.g.add(a, b) : this.g.add(a);
    return new kl(a, this.j, this.g.name + ".add(" + b + ")", this.v, this.o)
  };

  function rl(a, b) {
    return new kl(a.g["delete"](b), a.j, a.g.name + ".delete(" + b + ")", a.v, a.o)
  }
  pl.prototype.count = function(a) {
    var b = void 0 !== a ? this.g.count(a) : this.g.count();
    return new kl(b, this.j, this.g.name + ".count(" + a + ")", this.v, this.o)
  };

  function sl(a, b) {
    return new ol(a.g.index(b), a.v, a.o, a.j)
  };

  function tl() {
    this.j = this.o = this.g = !1
  };

  function ul(a, b, c, d, e, f, g) {
    var h = void 0,
      k = void 0,
      l = this;
    k = void 0 === k ? null : k;
    this.C = a;
    this.W = b;
    this.I = c;
    this.v = d;
    this.K = e;
    this.L = !1;
    this.o = void 0 === g ? !1 : g;
    this.B = this.w = null;
    this.j = new tl;
    this.N = new il;
    this.V = 6E4;
    this.A = new jl(function() {
      if (!l.j.j) {
        var p = vl(l);
        p.transactionTimeout = l.V;
        p.timeoutDelays = l.A.g.concat().toString();
        p.documentHidden = document.hidden || document.webkitHidden;
        X(l.v, Error("A transaction was running for a long time (" + l.I + ")"), p);
        l.A.dispose();
        l.U && (wl(l, !0), l.U(), l.B.oncomplete =
          null)
      }
    }, this.V, document);
    this.U = void 0 === h ? null : h;
    this.G = (Gh(), Fh);
    this.g = null;
    this.O = xl++;
    this.D = f;
    this.J = this.o ? "idbrwt" : "idbrot";
    this.ca = k
  }

  function yl(a) {
    a.j.j = !0;
    a.A.dispose();
    a.g && (Oh(a.G, a.g), a.g = null);
    zl(a.D, a)
  }
  q = ul.prototype;
  q.abort = function(a) {
    wl(this, !1, a)
  };

  function wl(a, b, c) {
    var d = a.j;
    if (!d.o && !d.g) {
      Al(a);
      d.g = !0;
      try {
        a.B.abort()
      } catch (e) {
        "InvalidStateError" == e.name && b || (d = vl(a), d.abortFromTimeout = b, X(a.v, e, d))
      }
      c && !a.L && (a.K(c), a.L = !0);
      a.A.dispose();
      zl(a.D, a)
    }
  }

  function Y(a, b) {
    Al(a);
    return new pl(a.B.objectStore(b), a.j, a.N, a.v)
  }

  function Bl(a, b) {
    if (a.w) throw Error("Completion callback already set");
    a.w = b
  }
  q.va = n("j");

  function Al(a) {
    if (!a.B) throw Error("Transaction does not exist");
  }
  q.Oc = function(a) {
    this.j.j || (this.j.o = !0, this.g && (Oh(this.G, this.g), this.g = null), zl(this.D, this), this.A.dispose(), this.j.g || (a.target.docs_internalAbort = !0, !this.o && a.target.error && "QuotaExceededError" == a.target.error.name ? this.w && this.w() : Cl(this, "LocalStore IndexedDB transaction abort", vl(this), a)))
  };
  q.Pc = function() {
    this.j.j || (zl(this.D, this), this.g && (Nh(this.G, this.g), this.g = null), this.A.dispose(), this.w && this.w())
  };
  q.Mc = function(a) {
    a.stopPropagation();
    var b = this.j;
    if (!(b.j || b.o || b.g || (b = a.target.error, b && "AbortError" == b.name)) && (b = vl(this), b.request = a.target.docs_requestContext, Cl(this, "LocalStore IndexedDB error", b, a), a = this.D, S(R(), "docs-ewtaoe") && this.o)) {
      delete a.g[this.H()];
      b = 0;
      for (var c in a.g) {
        var d = Number(c),
          e = a.g[d];
        e.o && (e.abort(), delete a.g[d], b++)
      }
      a.j = !0;
      X(a.o, Error("Handled fatal error of transaction: " + this.H() + " and aborted " + b + " transactions "))
    }
  };

  function Cl(a, b, c, d) {
    b = b + " (" + a.I + "): " + gl(d);
    X(a.v, Error(b), c);
    c = new Li(1, b, d, a.ca);
    a.L || (a.K(c), a.L = !0)
  }
  q.H = n("O");

  function vl(a) {
    var b = hl(a.C.objectStoreNames);
    b = {
      databaseName: a.C.name,
      databaseObjectStores: b,
      databaseVersion: a.C.version,
      transactionAllowWrite: a.o,
      transactionContext: a.I,
      transactionId: a.O,
      transactionObjectStores: a.W.toString()
    };
    a = a.N;
    var c = db(a.g);
    b.pendingRequestCount = c.length;
    b.pendingRequests = c.toString();
    b.requestErrorCount = a.j;
    b.requestSuccessCount = a.o;
    return b
  }

  function Dl(a) {
    this.o = a;
    this.g = {};
    this.j = !1
  }
  Dl.prototype.add = function(a) {
    if (a.o || !this.j) this.g[a.H()] = a
  };

  function zl(a, b) {
    delete a.g[b.H()]
  }
  var xl = 0;

  function El() {}

  function Fl(a, b, c, d, e, f) {
    e = void 0 === e ? !1 : e;
    f = void 0 === f ? !1 : f;
    b = void 0 !== b ? Gl(b, c) : null;
    e = e ? "prev" : "next";
    if (d) return a = sl(a, d), f ? (f = (f = void 0 !== b) && void 0 !== e ? a.g.openKeyCursor(b, e) : f ? a.g.openKeyCursor(b) : a.g.openKeyCursor(), b = new kl(f, a.j, a.g.name + ".openKeyCursor(" + (b ? b.lower + ", " + b.upper : b) + ", " + e + ")", a.v, a.o)) : (f = (f = void 0 !== b) && void 0 !== e ? a.g.openCursor(b, e) : f ? a.g.openCursor(b) : a.g.openCursor(), b = new kl(f, a.j, a.g.name + ".openCursor(" + (b ? b.lower + ", " + b.upper : b) + ", " + e + ")", a.v, a.o)), b;
    f = (f = void 0 !==
      b) && void 0 !== e ? a.g.openCursor(b, e) : f ? a.g.openCursor(b) : a.g.openCursor();
    return new kl(f, a.j, a.g.name + ".openCursor(" + (b ? b.lower + ", " + b.upper : b) + ", " + e + ")", a.v, a.o)
  }

  function Hl(a, b, c, d) {
    b = Gl(b, c);
    a = rl(a, b);
    d && ml(a, d)
  }

  function Il(a, b, c, d, e, f, g, h, k, l) {
    h = void 0 === h ? !1 : h;
    k = void 0 === k ? !1 : k;
    l = void 0 === l ? !1 : l;
    b = Y(a, b);
    var p = [];
    ml(Fl(b, e, f, g, h, k), function(u) {
      if (u = u.target.result) {
        var z = void 0 !== u.value ? u.value : u.key;
        (z = c(z)) && p.push(z);
        u["continue"]()
      } else l && yl(a), d && d(p)
    })
  }

  function Jl(a, b) {
    return function(c) {
      c.stopPropagation();
      b(new Li(1, a + " (" + gl(c) + ")", c))
    }
  }

  function Gl(a, b) {
    return void 0 === b || a == b ? Kl.only(a) : Kl.bound(a, b)
  }
  var Kl = t.IDBKeyRange || t.webkitIDBKeyRange;
  var docos = {};

  function Ll(a) {
    D(this, a, 0, -1, Ml)
  }
  y(Ll, C);

  function Nl(a) {
    D(this, a, 0, -1, null)
  }
  y(Nl, C);
  var Ml = [3, 42];

  function Ol(a) {
    D(this, a, 0, -1, Pl)
  }
  y(Ol, C);

  function Ql(a) {
    D(this, a, 0, -1, null)
  }
  y(Ql, C);
  var Pl = [2];

  function Rl(a) {
    D(this, a, 0, -1, Sl)
  }
  y(Rl, C);

  function Tl(a) {
    D(this, a, 0, -1, null)
  }
  y(Tl, C);
  var Sl = [2, 27];

  function Ul(a) {
    D(this, a, 0, -1, Vl)
  }
  y(Ul, C);
  var Vl = [1];

  function Wl(a) {
    D(this, a, 0, -1, null)
  }
  y(Wl, C);

  function Xl(a) {
    I.call(this);
    this.g = a
  }
  r(Xl, I);

  function Yl(a, b, c, d, e, f) {
    var g = {};
    g.dcKey = [a, b, c, d];
    g.t = e;
    f && (g.c = f);
    return new Xl(g)
  }
  Xl.prototype.F = function() {
    delete this.g;
    I.prototype.F.call(this)
  };

  function Zl(a) {
    try {
      var b = t.localStorage.getItem("docs-ucb")
    } catch (c) {
      return X(a, Error("Error reading unsaved changes bit: " + c.message)), "e"
    }
    switch (b) {
      case "1":
        return "t";
      case "0":
        return "f";
      default:
        return "u"
    }
  };

  function Ai(a) {
    this.g = "offline-oc";
    this.j = a
  }
  r(Ai, th);

  function $l() {}
  r($l, O);
  $l.prototype.R = function(a) {
    if (!Pg(a.getType(), "offline-oc")) throw Q("Invalid Type").g;
    return a.j
  };

  function am(a) {
    return new L(function(b, c) {
      Bh(a, function(d) {
        b(d)
      }, function(d) {
        c(d)
      })
    })
  };
  var bm = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

  function cm(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1)
        } else f = a[c];
        b(f, e ? Mb(e) : "")
      }
    }
  }

  function dm(a, b) {
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

  function em(a, b, c) {
    if (Da(b))
      for (var d = 0; d < b.length; d++) em(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + Lb(b)))
  }

  function fm(a, b) {
    var c = [];
    for (b = b || 0; b < a.length; b += 2) em(a[b], a[b + 1], c);
    return c.join("&")
  }

  function gm(a) {
    var b = [],
      c;
    for (c in a) em(c, a[c], b);
    return b.join("&")
  }

  function hm(a, b) {
    var c = 2 == arguments.length ? fm(arguments[1], 0) : fm(arguments, 1);
    return dm(a, c)
  }

  function im(a, b) {
    b = gm(b);
    return dm(a, b)
  }

  function jm(a, b, c) {
    c = null != c ? "=" + Lb(c) : "";
    return dm(a, b + c)
  }

  function km(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
      var f = a.charCodeAt(b - 1);
      if (38 == f || 63 == f)
        if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
      b += e + 1
    }
    return -1
  }
  var lm = /#|$/;

  function mm(a, b) {
    var c = a.search(lm),
      d = km(a, 0, b, c);
    if (0 > d) return null;
    var e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return Mb(a.substr(d, e - d))
  }
  var nm = /[?&]($|#)/;

  function om(a, b) {
    var c = a.length - 1;
    0 <= c && a.indexOf("/", c) == c && (a = a.substr(0, a.length - 1));
    ub(b, "/") && (b = b.substr(1));
    return Pb(a, "/", b)
  };
  var pm = "StopIteration" in t ? t.StopIteration : {
    message: "StopIteration",
    stack: ""
  };

  function qm() {}
  qm.prototype.next = function() {
    throw pm;
  };
  qm.prototype.Ea = function() {
    return this
  };

  function rm(a) {
    if (a instanceof qm) return a;
    if ("function" == typeof a.Ea) return a.Ea(!1);
    if (Ea(a)) {
      var b = 0,
        c = new qm;
      c.next = function() {
        for (;;) {
          if (b >= a.length) throw pm;
          if (b in a) return a[b++];
          b++
        }
      };
      return c
    }
    throw Error("Not implemented");
  }

  function sm(a, b, c) {
    if (Ea(a)) try {
      Ra(a, b, c)
    } catch (d) {
      if (d !== pm) throw d;
    } else {
      a = rm(a);
      try {
        for (;;) b.call(c, a.next(), void 0, a)
      } catch (d) {
        if (d !== pm) throw d;
      }
    }
  };

  function tm(a, b) {
    this.j = {};
    this.g = [];
    this.v = this.o = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
      if (a instanceof tm)
        for (c = a.ja(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else
        for (d in a) this.set(d, a[d])
  }
  q = tm.prototype;
  q.P = n("o");
  q.fa = function() {
    um(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
    return a
  };
  q.ja = function() {
    um(this);
    return this.g.concat()
  };
  q.za = function(a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (vm(this.j, c) && this.j[c] == a) return !0
    }
    return !1
  };
  q.ga = function(a, b) {
    if (this === a) return !0;
    if (this.o != a.P()) return !1;
    b = b || wm;
    um(this);
    for (var c, d = 0; c = this.g[d]; d++)
      if (!b(this.get(c), a.get(c))) return !1;
    return !0
  };

  function wm(a, b) {
    return a === b
  }

  function xm(a) {
    a.j = {};
    a.g.length = 0;
    a.o = 0;
    a.v = 0
  }

  function ym(a, b) {
    vm(a.j, b) && (delete a.j[b], a.o--, a.v++, a.g.length > 2 * a.o && um(a))
  }

  function um(a) {
    if (a.o != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length;) {
        var d = a.g[b];
        vm(a.j, d) && (a.g[c++] = d);
        b++
      }
      a.g.length = c
    }
    if (a.o != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length;) d = a.g[b], vm(e, d) || (a.g[c++] = d, e[d] = 1), b++;
      a.g.length = c
    }
  }
  q.get = function(a, b) {
    return vm(this.j, a) ? this.j[a] : b
  };
  q.set = function(a, b) {
    vm(this.j, a) || (this.o++, this.g.push(a), this.v++);
    this.j[a] = b
  };
  q.forEach = function(a, b) {
    for (var c = this.ja(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  q.Ea = function(a) {
    um(this);
    var b = 0,
      c = this.v,
      d = this,
      e = new qm;
    e.next = function() {
      if (c != d.v) throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) throw pm;
      var f = d.g[b++];
      return a ? f : d.j[f]
    };
    return e
  };

  function vm(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };

  function zm(a) {
    if (a.P && "function" == typeof a.P) a = a.P();
    else if (Ea(a) || "string" === typeof a) a = a.length;
    else {
      var b = 0,
        c;
      for (c in a) b++;
      a = b
    }
    return a
  }

  function Am(a) {
    if (a.fa && "function" == typeof a.fa) return a.fa();
    if ("string" === typeof a) return a.split("");
    if (Ea(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b
    }
    return db(a)
  }

  function Bm(a) {
    if (a.ja && "function" == typeof a.ja) return a.ja();
    if (!a.fa || "function" != typeof a.fa) {
      if (Ea(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b
      }
      return eb(a)
    }
  }

  function Cm(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
    else if (Ea(a) || "string" === typeof a) Ra(a, b, void 0);
    else
      for (var c = Bm(a), d = Am(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
  }

  function Dm(a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (Ea(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
    for (var c = Bm(a), d = Am(a), e = d.length, f = 0; f < e; f++)
      if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0
  };

  function Em(a) {
    this.o = this.B = this.j = "";
    this.v = null;
    this.w = this.A = "";
    this.D = !1;
    var b;
    a instanceof Em ? (this.D = a.D, Fm(this, a.j), this.B = a.B, Gm(this, a.o), Hm(this, a.v), Im(this, a.A), Jm(this, Km(a.g)), this.w = a.w) : a && (b = String(a).match(bm)) ? (this.D = !1, Fm(this, b[1] || "", !0), this.B = Lm(b[2] || ""), Gm(this, b[3] || "", !0), Hm(this, b[4]), Im(this, b[5] || "", !0), Jm(this, b[6] || "", !0), this.w = Lm(b[7] || "")) : (this.D = !1, this.g = new Mm(null, this.D))
  }
  Em.prototype.toString = function() {
    var a = [],
      b = this.j;
    b && a.push(Nm(b, Om, !0), ":");
    var c = this.o;
    if (c || "file" == b) a.push("//"), (b = this.B) && a.push(Nm(b, Om, !0), "@"), a.push(Lb(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.v, null != c && a.push(":", String(c));
    if (c = this.A) this.o && "/" != c.charAt(0) && a.push("/"), a.push(Nm(c, "/" == c.charAt(0) ? Pm : Qm, !0));
    (c = this.g.toString()) && a.push("?", c);
    (c = this.w) && a.push("#", Nm(c, Rm));
    return a.join("")
  };
  Em.prototype.resolve = function(a) {
    var b = new Em(this),
      c = !!a.j;
    c ? Fm(b, a.j) : c = !!a.B;
    c ? b.B = a.B : c = !!a.o;
    c ? Gm(b, a.o) : c = null != a.v;
    var d = a.A;
    if (c) Hm(b, a.v);
    else if (c = !!a.A) {
      if ("/" != d.charAt(0))
        if (this.o && !this.A) d = "/" + d;
        else {
          var e = b.A.lastIndexOf("/"); - 1 != e && (d = b.A.substr(0, e + 1) + d)
        } e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = ub(e, "/");
        e = e.split("/");
        for (var f = [], g = 0; g < e.length;) {
          var h = e[g++];
          "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) &&
            f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
        }
        d = f.join("/")
      } else d = e
    }
    c ? Im(b, d) : c = "" !== a.g.toString();
    c ? Jm(b, Km(a.g)) : c = !!a.w;
    c && (b.w = a.w);
    return b
  };

  function Fm(a, b, c) {
    a.j = c ? Lm(b, !0) : b;
    a.j && (a.j = a.j.replace(/:$/, ""));
    return a
  }

  function Gm(a, b, c) {
    a.o = c ? Lm(b, !0) : b;
    return a
  }

  function Hm(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.v = b
    } else a.v = null;
    return a
  }

  function Im(a, b, c) {
    a.A = c ? Lm(b, !0) : b;
    return a
  }

  function Jm(a, b, c) {
    b instanceof Mm ? (a.g = b, Sm(a.g, a.D)) : (c || (b = Nm(b, Tm)), a.g = new Mm(b, a.D))
  }

  function Um(a, b, c) {
    a.g.set(b, c);
    return a
  }

  function Vm(a, b, c) {
    Da(c) || (c = [String(c)]);
    Wm(a.g, b, c)
  }

  function Lm(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
  }

  function Nm(a, b, c) {
    return "string" === typeof a ? (a = encodeURI(a).replace(b, Xm), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
  }

  function Xm(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var Om = /[#\/\?@]/g,
    Qm = /[#\?:]/g,
    Pm = /[#\?]/g,
    Tm = /[#\?@]/g,
    Rm = /#/g;

  function Mm(a, b) {
    this.j = this.g = null;
    this.o = a || null;
    this.v = !!b
  }

  function Ym(a) {
    a.g || (a.g = new tm, a.j = 0, a.o && cm(a.o, function(b, c) {
      a.add(Mb(b), c)
    }))
  }
  q = Mm.prototype;
  q.P = function() {
    Ym(this);
    return this.j
  };
  q.add = function(a, b) {
    Ym(this);
    this.o = null;
    a = Zm(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.j = this.j + 1;
    return this
  };

  function $m(a, b) {
    Ym(a);
    b = Zm(a, b);
    vm(a.g.j, b) && (a.o = null, a.j = a.j - a.g.get(b).length, ym(a.g, b))
  }

  function an(a, b) {
    Ym(a);
    b = Zm(a, b);
    return vm(a.g.j, b)
  }
  q.za = function(a) {
    var b = this.fa();
    return 0 <= Pa(b, a)
  };
  q.forEach = function(a, b) {
    Ym(this);
    this.g.forEach(function(c, d) {
      Ra(c, function(e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  q.ja = function() {
    Ym(this);
    for (var a = this.g.fa(), b = this.g.ja(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  q.fa = function(a) {
    Ym(this);
    var b = [];
    if ("string" === typeof a) an(this, a) && (b = Xa(b, this.g.get(Zm(this, a))));
    else {
      a = this.g.fa();
      for (var c = 0; c < a.length; c++) b = Xa(b, a[c])
    }
    return b
  };
  q.set = function(a, b) {
    Ym(this);
    this.o = null;
    a = Zm(this, a);
    an(this, a) && (this.j = this.j - this.g.get(a).length);
    this.g.set(a, [b]);
    this.j = this.j + 1;
    return this
  };
  q.get = function(a, b) {
    if (!a) return b;
    a = this.fa(a);
    return 0 < a.length ? String(a[0]) : b
  };

  function Wm(a, b, c) {
    $m(a, b);
    0 < c.length && (a.o = null, a.g.set(Zm(a, b), Ya(c)), a.j = a.j + c.length)
  }
  q.toString = function() {
    if (this.o) return this.o;
    if (!this.g) return "";
    for (var a = [], b = this.g.ja(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = Lb(d);
      d = this.fa(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + Lb(d[f]));
        a.push(g)
      }
    }
    return this.o = a.join("&")
  };

  function Km(a) {
    var b = new Mm;
    b.o = a.o;
    a.g && (b.g = new tm(a.g), b.j = a.j);
    return b
  }

  function Zm(a, b) {
    b = String(b);
    a.v && (b = b.toLowerCase());
    return b
  }

  function Sm(a, b) {
    b && !a.v && (Ym(a), a.o = null, a.g.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && ($m(this, d), Wm(this, e, c))
    }, a));
    a.v = b
  };

  function bn() {
    return cn("/synctaskworker.js")
  }

  function dn() {
    return cn("/taskiframe")
  }

  function en(a) {
    var b = T(R(), "drive-host");
    return fn(b, a, !0)
  }

  function gn() {
    var a = new Em(t.location.href);
    return null != a.v ? a.o + ":" + a.v : a.o
  }

  function cn(a, b) {
    var c = gn();
    return fn(c, "/offline" + a, void 0, b)
  }

  function fn(a, b, c, d) {
    a = new Em("//" + a);
    Fm(a, t.location.href.match(bm)[1] || null);
    Im(a, b);
    b = T(R(), "docs-offline-lsuid");
    Vm(a, "ouid", b);
    !d && hn() && (c ? Vm(a, "jsmode", "DU") : Vm(a, "Debug", "true"));
    return a.toString()
  }

  function hn() {
    var a = new Em(t.location.href);
    return "true" == a.g.get("Debug") || "true" == a.g.get("debug") || "pretty" == a.g.get("debug") || "DU" == a.g.get("jsmode")
  };

  function jn(a) {
    this.g = a || {
      cookie: ""
    }
  }
  q = jn.prototype;
  q.set = function(a, b, c, d, e, f) {
    if ("object" === typeof c) {
      var g = c.o;
      f = c.v;
      e = c.domain;
      d = c.g;
      c = c.j
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === c && (c = -1);
    this.g.cookie = a + "=" + b + (e ? ";domain=" + e : "") + (d ? ";path=" + d : "") + (0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(x() + 1E3 * c)).toUTCString()) + (f ? ";secure" : "") + (null != g ? ";samesite=" + g : "")
  };
  q.get = function(a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
      f = vb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return ""
    }
    return b
  };

  function kn(a) {
    var b = ln;
    b.get(a);
    b.set(a, "", 0, "/", void 0)
  }
  q.ja = function() {
    return mn(this).keys
  };
  q.fa = function() {
    return mn(this).values
  };
  q.P = function() {
    return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
  };
  q.za = function(a) {
    for (var b = mn(this).values, c = 0; c < b.length; c++)
      if (b[c] == a) return !0;
    return !1
  };

  function mn(a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = vb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
      keys: b,
      values: c
    }
  }
  var ln = new jn("undefined" == typeof document ? null : document);

  function nn() {
    var a = t.localStorage;
    a.removeItem("docs-offline-ic");
    a.removeItem("docs-offline-icp");
    a.removeItem("docs-offline-lsc");
    a.removeItem("docs-offline-lfch");
    a.removeItem("docs-offline-ci");
    a.removeItem("docs-offline-sacsd")
  };

  function on(a) {
    t.localStorage.setItem("docs-oiouid", a)
  }

  function pn(a) {
    if (!qn()) {
      X(a, Error("Local Storage ouid is missing for currently opted-in user."));
      var b = T(R(), "docs-offline-lsuid");
      if (!b) throw Error("Cannot ensure Local Storage ouid exists without a current user.");
      try {
        on(b)
      } catch (c) {
        X(a, c)
      }
    }
  }

  function rn(a) {
    a ? t.localStorage.setItem("docs-uoo", "true") : t.localStorage.removeItem("docs-uoo")
  }

  function qn() {
    try {
      var a = t.localStorage.getItem("docs-oiouid") || null
    } catch (b) {
      a = null
    }
    return T(R(), "docs-offline-lsuid") == a
  };

  function sn(a, b, c, d, e, f) {
    kl.call(this, a, b, c, new tl, new il, d, !0, e, f);
    this.L = this.v = null;
    a.onblocked = ll(b, this.W, this, !0);
    a.onupgradeneeded = ll(b, this.qa, this, !0)
  }
  r(sn, kl);
  sn.prototype.W = function(a) {
    uc(this.g);
    this.v && this.v(a)
  };
  sn.prototype.qa = function(a) {
    uc(this.g);
    if (a.dataLoss && "none" != a.dataLoss) {
      var b = {};
      b.dataLoss = a.dataLoss;
      b.dataLossMessage = a.dataLossMessage;
      b.optinBackup = qn();
      b.requestContext = this.C;
      b.unsavedChanges = Zl(this.o);
      X(this.o, Error("upgradeNeeded after dataLoss"), b)
    }
    this.L && this.L(a)
  };
  sn.prototype.J = function(a) {
    kl.prototype.J.call(this, a);
    a.onblocked = Ba;
    a.onupgradeneeded = Ba
  };

  function tn(a, b) {
    if (a.v) throw Error("Blocked callback already set");
    a.v = b
  }

  function un(a, b) {
    if (a.L) throw Error("Upgrade needed callback already set");
    a.L = b
  };

  function vn(a, b) {
    wc.call(this, "d", b);
    this.newVersion = a
  }
  r(vn, wc);

  function wn(a, b) {
    I.call(this);
    this.w = a;
    this.B = b;
    this.g = null;
    this.j = !1;
    this.C = new Dl(b);
    this.v = new Zh;
    J(this, this.v);
    this.o = new Zh;
    J(this, this.o);
    this.G = t.indexedDB || t.webkitIndexedDB
  }
  r(wn, I);
  wn.prototype.I = function(a) {
    this.j = !0;
    this.close();
    $h(this.o, new vn(Number(a.version) || a.newVersion || 0))
  };
  wn.prototype.close = function() {
    this.g && (this.g.onversionchange = null, this.g.close(), this.g = null)
  };

  function xn(a, b) {
    if (a.g) throw Error("IdbDocsDatabase already managing a database.");
    if (null != b.onversionchange) throw Error("This database is being managed by another class.");
    b.onclose = function() {
      var c = {};
      c.optinBackup = qn();
      X(a.B, Error("The database connection was closed."), c);
      $h(a.v, null)
    };
    b.onerror = Jl("Database error.", a.w);
    b.onversionchange = w(a.I, a);
    a.g = b
  }

  function yn(a) {
    if (!a.g) return -1;
    a = parseInt(a.g.version, 10);
    return 0 <= a ? a : -1
  }

  function zn(a, b, c, d, e) {
    if (!a.g) throw Error("Cannot open transaction on uninitialized IdbDocsDatabase");
    if (e && a.C.j) throw Error("Cannot open read-write transactions because of a previous fatal error in a read-write transaction.");
    a = new ul(a.g, b, c, a.B, d || a.w, a.C, e);
    null != a.J && (a.g = Jh(a.G, a.J, !0));
    b = a.o ? "readwrite" : "readonly";
    a.A.start();
    try {
      var f = a.C.transaction(a.W, b)
    } catch (g) {
      throw f = vl(a), Yc(g, f);
    }
    f.onabort = ll(a.v, a.Oc, a);
    f.oncomplete = ll(a.v, a.Pc, a);
    f.onerror = ll(a.v, a.Mc, a, !0);
    a.B = f;
    a.D.add(a);
    return a
  }

  function An(a, b, c, d, e) {
    if (yn(a) >= b) throw Error("Upgrading to a version (" + b + ") less than or equal to current version (" + yn(a) + ")");
    var f = a.g.name;
    a.close();
    var g = a.B;
    b = new sn(a.G.open(f, b), g, "setVersion database.open");
    un(b, function(h) {
      h = h.target.transaction;
      h.onabort = h.onerror = ll(g, d, {}, !0);
      c(h)
    });
    nl(b, d);
    tn(b, function(h) {
      X(g, Error("Onblocked handler called when upgrading database."), {
        "Old version": h.oldVersion,
        "New version": h.newVersion
      })
    });
    ml(b, function(h) {
      xn(a, h.target.result);
      e(h)
    })
  }
  wn.prototype.F = function() {
    this.close();
    I.prototype.F.call(this)
  };

  function Bn(a, b, c, d) {
    Ji.call(this, a, d);
    this.Jc = b;
    this.Lc = c
  }
  r(Bn, Ji);
  Bn.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "append-commands":
        Cn(this, a, b);
        break;
      default:
        throw Error("Unsupported operation type " + a.getType());
    }
  };

  function Cn(a, b, c) {
    if (b.D) {
      var d = Y(c, "DocumentCommands");
      Dn(b.v, d, function() {
        return En(a, b, c)
      })
    } else En(a, b, c)
  }

  function Dn(a, b, c) {
    Hl(b, [a], [a, []], c)
  }

  function En(a, b, c) {
    c = Y(c, "DocumentCommands");
    for (var d = b.A, e = 0; e < d.length; ++e) {
      for (var f = a, g = b.v, h = d[e], k = h.j(), l = [], p = 0; p < k.length; ++p) l.push(f.Ta.R(k[p]));
      f = Yl(g, h.o(), h.v(), h.g(), h.A(), l);
      ql(c, f.g)
    }
  };

  function Fn(a, b, c, d) {
    this.j = a;
    this.v = b;
    this.g = c;
    this.o = d
  }
  Fn.prototype.R = function() {
    var a = {};
    a.e = this.j;
    a.dlKey = [this.v];
    a.sId = this.g;
    a.cId = this.o;
    return a
  };

  function Gn(a, b, c, d) {
    I.call(this);
    var e = this;
    this.j = a;
    this.o = b;
    this.v = 0;
    this.G = d;
    this.B = new bi;
    J(this, this.B);
    ci(this.B, c.o, function() {
      e.w()
    });
    this.I = new Fd(this);
    this.C = new Zh;
    J(this, this.C);
    this.J = !1;
    this.g = this.K = null
  }
  r(Gn, I);

  function Hn(a, b, c) {
    In(a, b, c, function(d, e) {
      "unavailable" == d && (Jn(a, e, "ensureDocumentLockAvailable"), c.abort(new Li(2, "Lock not available")))
    })
  }

  function Kn(a, b, c) {
    if (t.navigator.locks) Ln(a, b, c);
    else {
      a.g && a.g.stop();
      var d = function() {
        uc(a.g);
        a.g = null;
        c.abort(new Li(2, "Lock could not be refreshed"))
      };
      Mn(a, b, c, function(e) {
        e && e.g == a.j ? Nn(a, b, c, e, function() {
          a.g && a.g.start()
        }, d) : (Jn(a, e, "refreshDocumentLock"), d())
      }, d)
    }
  }

  function Ln(a, b, c) {
    Mn(a, b, c, function(d) {
      d && d.g == a.j || (Jn(a, d, "ensureDocumentLockOwner"), c.abort(new Li(2, "Lock not available: session is not the current lock-holder")))
    }, function(d) {
      c.abort(d)
    })
  }

  function Mn(a, b, c, d, e) {
    b = Y(c, "DocumentLocks").get([b]);
    ml(b, function(f) {
      a.L() || (f = f.target.result, d(f ? new Fn(f.e, f.dlKey[0], f.sId, f.cId || null) : null))
    });
    e && nl(b, bb(e))
  }

  function In(a, b, c, d) {
    Mn(a, b, c, function(e) {
      if (e) {
        var f = 0 == a.o;
        var g = x();
        if (e.g == a.j) f = "available";
        else {
          var h = window.localStorage;
          f = h && h.getItem("dcl_" + e.g) ? "available" : e.j + (f ? 6E4 : 0) <= g || e.j > g + 36E4 ? "expiredOtherSid" : "unavailable"
        }
      } else f = "available";
      d(f, e)
    }, void 0)
  }

  function Jn(a, b, c) {
    if (!(0 >= a.o)) {
      var d = x(),
        e = {};
      e.lockReadReason = c;
      e.lockDuration = a.o;
      a.v && (e.lastWrittenValidUntil = a.v - d);
      var f = "IndexedDB document lock not available";
      if (b) {
        if (e.lockHoldingSessionId = b.g, e.validUntil = b.j - d, t.navigator.locks)
          if ("acquireDocumentLock" == c) f = "IndexedDB document lock not available after Web Locks API fallback";
          else if ("ensureDocumentLockOwner" == c || "refreshDocumentLock" == c) b = (c = window.localStorage) && c.getItem("dcl_" + b.g), e.lockReleased = !!b, e.webLockHasBeenAcquired = a.J,
          e.webLockReleaseReason = a.K
      } else f = "IndexedDB document lock not available because the lock does not exist";
      X(a.G, Error(f), e)
    }
  }

  function Nn(a, b, c, d, e, f) {
    var g = x(),
      h = 0;
    d && a.j == d.g && (h = d.j);
    d = Math.min(Math.max(g + a.o, h), g + 6E4);
    a.v = d;
    a = ql(Y(c, "DocumentLocks"), (new Fn(d, b, a.j, null)).R());
    ml(a, bb(e));
    f && nl(a, bb(f))
  }
  Gn.prototype.w = function() {
    if (!t.navigator.locks) {
      uc(this.g);
      this.g = null;
      var a = window.localStorage;
      if (a) try {
        a.setItem("dcl_" + this.j, String(x()))
      } catch (d) {
        for (var b = 0, c = 0; c < a.length; c++) ub(a.key(c), "dcl_") && b++;
        throw Yc(d, {
          keysTotal: String(a.length),
          locksTotal: String(b)
        });
      }
    }
    Promise.resolve()
  };
  Gn.prototype.F = function() {
    this.I.dispose();
    uc(this.g);
    this.g = null;
    I.prototype.F.call(this)
  };

  function On(a) {
    this.g = !1;
    this.j = a
  }
  r(On, Wi);
  On.prototype.w = function() {
    this.j.w()
  };
  On.prototype.$ = function() {
    return ["DocumentLocks"]
  };
  On.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "document-lock":
        switch (a.A) {
          case 2:
            Kn(this.j, a.v, b);
            break;
          case 1:
            Hn(this.j, a.v, b)
        }
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };
  On.prototype.F = function() {
    Wi.prototype.F.call(this);
    this.j.dispose()
  };

  function Pn() {};

  function Qn(a, b, c, d, e, f) {
    e = e ? function() {
      d(new Li(6, "Timeout opening database."))
    } : void 0;
    var g = Wh();
    f && (g.j("odbs"), Qk(w(g.j, g, "odbjy")));
    e = new sn((t.indexedDB || t.webkitIndexedDB).open("GoogleDocs"), c, "database.open", e, mh(R(), "docs-localstore-iort"), "idbodb");
    ml(e, function(h) {
      f && g.j("odbc");
      var k = new wn(b, c);
      xn(k, h.target.result);
      a(k)
    });
    nl(e, Jl("Error opening database.", d))
  }

  function Rn(a, b) {
    var c = (t.indexedDB || t.webkitIndexedDB).deleteDatabase("GoogleDocs");
    c.onsuccess = a;
    c.onerror = Jl("Error deleting database.", b)
  };
  var Sn = {
    Tb: "l",
    Vb: "s",
    Ub: "r"
  };

  function Tn() {
    var a = a ? a : function(c) {
      return kg(Math.floor(Math.random() * c))
    };
    var b = Af(a(2147483647));
    b = P(Sj("0", Math.max(0, 8 - b.length))) + P(b);
    a = Af(a(2147483647));
    return P(a) + P(b)
  };

  function Un(a, b, c, d) {
    nj.call(this, c, new uh(d))
  }
  r(Un, nj);
  Un.prototype.$ = function() {
    return ["PendingQueueCommands", "PendingQueues"]
  };
  Un.prototype.Y = function(a, b) {
    var c = this;
    a instanceof di && !a.j ? ml(Y(b, "PendingQueues").get(V(a)), function(d) {
      d = d.target.result;
      if (!d) throw Error("Tried to update a non-existent pending queue.");
      Vn(c, a, b, d)
    }) : Vn(this, a, b)
  };

  function Vn(a, b, c, d) {
    if (d) {
      var e = b.g,
        f = e.revision,
        g = e.revisionAccessInfo;
      null != f && (d.r = f);
      void 0 !== g && (d.ra = g);
      f = e.selection;
      null != f && (d.s = f);
      f = e.accessLevel;
      null != f && (d.a = f);
      f = e.undeliverable;
      void 0 !== f && (d.u = !!f);
      f = e.unsavedChanges;
      void 0 !== f && (d.uc = !!f);
      g = e.sentBundlesSavedRevision;
      void 0 !== g && (d.sbsr = g);
      g = e.unsentBundleMetadata;
      void 0 !== g && (d.ubm = g);
      e = e.snapshotBundleIndex;
      void 0 !== e && (d.sbi = e);
      if (f) {
        a = a.g.g;
        try {
          t.localStorage.setItem("docs-ucb", "1")
        } catch (h) {
          X(a, Error("Error setting unsaved changes bit in Local Storage: " +
            h.message))
        }
      }
    }
    switch (b.getType()) {
      case "pq-clear":
        d = d || Wn(b);
        b = V(b);
        a = Y(c, "PendingQueueCommands");
        Hl(a, [b], [b, []]);
        d.b = [];
        Xn(d, c);
        break;
      case "pq-clear-sent":
        d = d || Wn(b);
        a = d.b;
        0 < a.length && (a = a[a.length - 1].l, e = Y(c, "PendingQueueCommands"), b = V(b), Hl(e, [b], [b, a]), d.b = []);
        Xn(d, c);
        break;
      case "pq-clear-sent-bundle":
        d = d || Wn(b);
        a = d.b.shift().l;
        e = Y(c, "PendingQueueCommands");
        b = V(b);
        Hl(e, [b], [b, a]);
        Xn(d, c);
        break;
      case "pq-mark-sent":
        d = d || Wn(b);
        a = b.v;
        b.w && (d.b = []);
        for (b = 0; b < a.length; b++) e = a[b], f = Sn, g = {}, g[f.Tb] =
          e.g, g[f.Vb] = e.o, g[f.Ub] = e.j, d.b.push(g);
        Xn(d, c);
        break;
      case "update-record":
        b = d || Wn(b);
        Xn(b, c);
        break;
      case "pq-write-commands":
        d = b.A;
        a = {};
        a.pqcKey = [b.w, b.v];
        a.c = d;
        ql(Y(c, "PendingQueueCommands"), a);
        break;
      case "pq-delete-commands":
        c = Y(c, "PendingQueueCommands");
        d = b.v;
        Hl(c, [d], [d, b.A]);
        break;
      default:
        throw Error("Unsupported operation type: " + b.getType());
    }
  }

  function Xn(a, b) {
    ql(Y(b, "PendingQueues"), a)
  }

  function Wn(a) {
    var b = a.g;
    a = {};
    var c = b.accessLevel;
    void 0 !== c && (a.a = c);
    a.docId = b.docId;
    a.r = b.revision;
    a.ra = b.revisionAccessInfo;
    a.ubm = b.unsentBundleMetadata;
    a.s = b.selection;
    a.b = [];
    a.t = b.documentType;
    a.u = !!b.undeliverable;
    a.uc = !!b.unsavedChanges;
    c = b.sentBundlesSavedRevision;
    null != c && (a.sbsr = c);
    b = b.snapshotBundleIndex;
    void 0 !== b && (a.sbi = b);
    return a
  };

  function Yn(a) {
    this.g = !1;
    this.j = a
  }
  r(Yn, Qi);

  function Zn(a, b, c) {
    Rn(function() {
      a.j.j = !0;
      b()
    }, c || a.j.w)
  }
  Yn.prototype.$ = function() {
    throw Error("No object store available.");
  };
  Yn.prototype.Y = function(a) {
    throw Error("Operation type " + a.getType() + " not supported.");
  };

  function $n() {}

  function ao(a, b, c, d, e) {
    c && (e = e || [], ml(d.get(b), w(a.g, a, d, c, e)))
  }
  $n.prototype.g = function(a, b, c, d) {
    d = d.target.result;
    if (void 0 !== d) {
      for (var e in b) {
        var f = b[e];
        0 <= Pa(c, e) ? d[e] = null != f ? f : null : d[e] = f
      }
      ql(a, d)
    } else throw Error("Could not find object to update.");
  };

  function bo(a, b, c) {
    var d = zn(a, ["ProfileData"], "Error removing document ids", void 0, !0);
    co(b, function(e) {
      for (var f = 0; f < c.length; f++) Wa(e, c[f]);
      f = {};
      f.dataType = b;
      f.documentIds = e;
      ql(Y(d, "ProfileData"), f);
      Bl(d, Ba)
    }, d)
  }

  function co(a, b, c) {
    ml(Y(c, "ProfileData").get(a), function(d) {
      d = d.target.result;
      b(d && d.documentIds ? d.documentIds : [])
    })
  };

  function eo(a, b, c) {
    this.g = !1;
    this.j = c
  }
  r(eo, Ri);
  eo.prototype.$ = function() {
    return ["Comments"]
  };
  eo.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = Y(b, "Comments");
        V(a);
        if (a.j) {
          var c = a.g,
            d = {};
          d.cmtKey = V(a);
          d.stateIndex = [c.s, c.di];
          d.da = c.da;
          ql(b, d)
        } else {
          d = a.g;
          a = V(a);
          var e = {};
          "s" in d && (e.stateIndex = [d.s, a[0]], delete d.s);
          for (c in d) e[c] = d[c];
          ao(this.j, a, e, b)
        }
        break;
      case "delete-record":
        b = Y(b, "Comments");
        a = V(a);
        rl(b, a);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function fo() {
    this.g = !1
  }
  r(fo, hj);

  function go(a, b, c, d) {
    Si.call(this, d);
    this.j = a;
    this.v = c
  }
  r(go, Si);

  function ho(a, b, c) {
    if (a.j.j) Qk(function() {
      return b([])
    });
    else {
      var d = zn(a.j, ["Documents"], "Error reading documents.", c);
      io(a, function(e) {
        yl(d);
        b(e)
      }, d)
    }
  }

  function jo(a, b, c) {
    if (a.j.j) Qk(function() {
      return b([])
    });
    else {
      var d = zn(a.j, ["Documents", "PendingQueueCommands"], "Error reading documents with pending changes.", c);
      Il(d, "PendingQueueCommands", function(e) {
        var f = e.c;
        return f && 0 != f.length ? e.pqcKey[0] : null
      }, function(e) {
        return ko(a, d, b, e)
      })
    }
  }

  function lo(a, b, c) {
    ho(a, b, c)
  }

  function mo(a, b, c, d) {
    d = zn(a.j, ["Documents"], "Error reading documents.", d);
    ko(a, d, c, b)
  }

  function ko(a, b, c, d) {
    if (0 >= d.length) c([]);
    else {
      ab(d);
      for (var e = [], f = 0; f < d.length; f++) Il(b, "Documents", function(g) {
        return no(a, g)
      }, function(g) {
        0 < g.length && e.push(g[0])
      }, d[f]);
      Bl(b, function() {
        c(e)
      })
    }
  }

  function io(a, b, c) {
    Il(c, "Documents", function(d) {
      return no(a, d)
    }, b, void 0)
  }

  function no(a, b) {
    var c = new Di(b.id, b.documentType, !1);
    W(c, "title", b.title);
    W(c, "lastSyncedTimestamp", b.lastSyncedTimestamp);
    W(c, "jobset", b.jobset);
    pi(c, "isFastTrack", !!b.isFastTrack);
    W(c, "lastModifiedServerTimestamp", b.lastModifiedServerTimestamp);
    W(c, "lastColdStartedTimestamp", b.lastColdStartedTimestamp);
    W(c, "lastWarmStartedTimestamp", b.lastWarmStartedTimestamp);
    var d = b.acl;
    for (g in d) ti(c, "acl", g, Gg(d[g]));
    d = b.acjf;
    for (var e in d) {
      var f = nc(Yh, d[e]);
      var g = e;
      f = f.R();
      ti(c, "acjf", g, f)
    }
    W(c, "docosKeyData",
      b.docosKeyData || null);
    pi(c, "inc", !!b.inc);
    e = b.lastModifiedClientTimestamp;
    null != e && W(c, "lastModifiedClientTimestamp", e);
    if (e = b.startupHints)
      for (var h in e) ti(c, "startupHints", h, e[h]);
    (h = b.ic) && W(c, "ic", h);
    pi(c, "hpmdo", !!b.hpmdo);
    pi(c, "ips", !!b.ips);
    c.La(!!b.ip);
    pi(c, "pendingCreation", !!b.pendingCreation);
    h = b.fact;
    null != h && W(c, "fact", h);
    pi(c, "modelNeedsResync", !!b.modelNeedsResync);
    pi(c, "ind", !!b.ind);
    pi(c, "isd", !!b.isd);
    h = b.mimeType;
    null != h && W(c, "mimeType", h);
    pi(c, "ibup", !!b.ibup);
    h = b.modelVersion;
    null != h && W(c, "modelVersion", h);
    h = b.featureVersion;
    null != h && W(c, "featureVersion", h);
    h = b.rev;
    null != h && (e = b.rai, null != e ? e = e ? new Mi(e[0]) : null : e = null, W(c, "rev", h), h = c.D.R(e), W(c, "rai", h));
    h = b.lsst;
    null != h && W(c, "lsst", h);
    h = b.lss;
    null != h && pi(c, "lss", !!h);
    h = b.lsft;
    null != h && W(c, "lsft", h);
    h = b.odocid;
    null != h && W(c, "odocid", h);
    h = b.relevancyRank;
    null != h && W(c, "relevancyRank", h);
    h = b.lastServerSnapshotTimestamp;
    null != h && W(c, "lastServerSnapshotTimestamp", h);
    h = b.snapshotState;
    null != h && (h = Gg(h), W(c, "snapshotState",
      h));
    h = b.snapshotProtocolNumber;
    void 0 !== h && (Ug(null == h || 0 <= h, "Cannot set snapshotProtocolNumber to a negative number."), W(c, "snapshotProtocolNumber", h));
    h = b.snapshotVersionNumber;
    void 0 !== h && (Ug(null == h || 0 <= h, "Cannot set snapshotVersionNumber to a negative number."), W(c, "snapshotVersionNumber", h));
    h = b.pendingQueueState;
    null != h && (h = Gg(h), W(c, "pendingQueueState", h));
    h = b.fileLockedReason;
    null != h && W(c, "fileLockedReason", h);
    b = b.initialSyncReason;
    null == b || null == mi(c, "initialSyncReason") && W(c, "initialSyncReason",
      b);
    if (!c || "trix" == c.getType() || "syncstats" == c.getType()) return null;
    if (!a.hb[c.getType()]) throw a = Error("No document adapter found for type: " + c.getType()), Yc(a, {
      localStoreDoc_hasTitle: !!ni(c, "title"),
      localStoreDoc_id: c.H(),
      localStoreDoc_isCreated: (!0 !== oi(c, "inc")).toString(),
      localStoreDoc_lastModifiedClientTimestamp: li(c, "lastModifiedClientTimestamp").toString(),
      localStoreDoc_lastModifiedServerTimestamp: li(c, "lastModifiedServerTimestamp").toString(),
      localStoreDoc_lastSyncedTimestamp: li(c, "lastSyncedTimestamp").toString(),
      localStoreDoc_revision: mi(c, "rev").toString()
    });
    c.v = !1;
    return c
  }

  function oo(a, b, c) {
    var d = zn(a.j, ["Comments", "Documents"], "Error reading comments.", c);
    Il(d, "Comments", function(e) {
      return e[1]
    }, function(e) {
      return ko(a, d, b, e)
    }, [2], [2, []], "StateIndex", !1, !0)
  }
  go.prototype.$ = function(a) {
    if (!this.T(a)) throw Error("Cannot get object store names for operation type " + a.getType());
    var b = ["DocumentCommands", "Documents"];
    "delete-record" == a.getType() && (b = b.concat(["Comments", "DocumentEntities", "PendingQueueCommands", "PendingQueues"]));
    return b
  };
  go.prototype.Y = function(a, b) {
    var c = Y(b, "Documents");
    switch (a.getType()) {
      case "update-record":
        a.j ? c.add(a.g) : ao(this.v, V(a), a.g, c, po);
        break;
      case "delete-record":
        qo(this, a, b);
        break;
      default:
        this.sa(a.w).Y(a, b)
    }
  };

  function qo(a, b, c) {
    b.v ? a.o(b, c) : ro(V(b), c, function(d) {
      d ? c.abort(new Li(5, "Pending changes found")) : a.o(b, c)
    })
  }

  function ro(a, b, c) {
    ml(Fl(Y(b, "PendingQueueCommands"), [a], [a, []]), function(d) {
      d.target.result ? c(!0) : so(a, b, c)
    })
  }

  function so(a, b, c) {
    ml(sl(Y(b, "Comments"), "StateIndex").get([2, a]), function(d) {
      c(!!d.target.result)
    })
  }
  go.prototype.o = function(a, b) {
    a = V(a);
    var c = Y(b, "DocumentCommands");
    Hl(c, [a], [a, []]);
    c = Y(b, "PendingQueueCommands");
    Hl(c, [a], [a, []]);
    c = Y(b, "PendingQueues");
    Hl(c, a);
    c = Y(b, "Documents");
    Hl(c, a);
    c = Y(b, "DocumentLocks");
    Hl(c, [a]);
    c = Y(b, "Comments");
    Hl(c, [a], [a, []]);
    bo(this.j, "nonsnapshottedocumentids", [a]);
    bo(this.j, "missingdocosdocumentids", [a]);
    b = Y(b, "DocumentEntities");
    Hl(b, [a], [a, []])
  };
  var po = "lastModifiedClientTimestamp lastWarmStartedTimestamp relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber odocid".split(" ");

  function to() {}
  to.prototype.g = function(a, b, c, d, e) {
    return new go(a, b, c, d, e)
  };

  function uo(a, b, c, d) {
    this.g = !1;
    this.j = a;
    this.v = c;
    this.o = d
  }
  r(uo, Pj);

  function Rj(a, b, c) {
    if (a.j.j) Qk(La(b, []));
    else if (0 <= Pa(a.j.g.objectStoreNames, "Users")) {
      a = zn(a.j, ["Users"], "Error reading users.", c);
      var d = [];
      ml(Y(a, "Users").get(Kl.lowerBound(-Infinity)), function(e) {
        if (e = e.target.result) {
          var f = new Kj(e.id, !1);
          Lj(f, e.emailAddress);
          Mj(f, e.locale);
          null != e.fastTrack && Nj(f, !!e.fastTrack);
          null != e.internal && Oj(f, !!e.internal);
          null != e.optInReasons && W(f, "optInReasons", e.optInReasons);
          f.v = !1;
          d = [f]
        }
      });
      Bl(a, function() {
        return b(d)
      })
    } else a.o.log(Error("Reading from uninitialized IDB database.")),
      Qk(La(b, []))
  }
  uo.prototype.$ = function(a) {
    if (!this.T(a)) throw Error("Cannot get object store names for operation type " + a.getType());
    return ["Users"]
  };
  uo.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = Y(b, "Users");
        a.j ? b.add(a.g) : ao(this.v, V(a), a.g, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function vo(a, b, c, d, e, f) {
    Aj.call(this);
    var g = this;
    this.W = d;
    this.ab = new Fd(this);
    this.A = new El;
    this.o = new $n;
    this.ca = new bi;
    wh(this, this.ca);
    this.j = a;
    ci(this.ca, this.j.o, function(h) {
      $h(g.N, new zj(h.newVersion))
    });
    this.V = b;
    this.G = new Un(this.j, this.A, this.V, this.W);
    Bj(this, this.G);
    this.v = wo(this, this.V, f);
    Bj(this, this.v);
    this.O = new On(c);
    this.w = new uo(a, this.A, this.o, d);
    Bj(this, this.w);
    this.I = new Yn(a)
  }
  r(vo, Aj);
  vo.prototype.qa = n("I");

  function wo(a, b, c) {
    c = void 0 === c ? new to : c;
    return c.g(a.j, a.A, a.o, b, a.W)
  }

  function gj(a, b, c, d) {
    if (a.j.j) Qk(c);
    else {
      for (var e = {}, f = 0; f < b.length; f++) {
        var g = b[f];
        g = xo(a, g).$(g);
        for (var h = 0; h < g.length; h++) e[g[h]] = !0
      }
      d = zn(a.j, eb(e), "Error writing records.", d, !0);
      Bl(d, c);
      for (c = 0; c < b.length; c++) e = b[c], xo(a, e).Y(e, d)
    }
  }

  function xo(a, b) {
    if (ei(b)) {
      b = b.A;
      a = b in a.B ? a.B[b] : null;
      if (!a) throw Error("No capability registered for record type " + b);
      return a
    }
    b = b.getType();
    if ("pq-clear" == b || "pq-clear-sent" == b || "pq-clear-sent-bundle" == b || "pq-delete-commands" == b || "pq-mark-sent" == b || "pq-write-commands" == b) return a.G;
    if ("document-lock" == b) return a.O;
    if ("append-commands" == b || "write-trix" == b) return a.v;
    if ("update-application-metadata" == b) {
      if (a = a.ob()) return a
    } else if ("append-template-commands" == b && (a = a.Lb())) return a;
    throw Error("No capability registered for operation type " +
      b);
  }

  function yo(a, b, c) {
    var d = a.Ha();
    if (yn(a.j) >= d) throw Error("Database already at expected version.");
    An(a.j, d, function(e) {
      return zo(a, c, e)
    }, Jl("Error initializing the database.", c), b)
  }

  function zo(a, b, c) {
    try {
      a.Fa(c)
    } catch (d) {
      Qk(function() {
        return b(new Li(1, "Failed to initialize database.", d))
      })
    }
  }

  function Ao(a, b, c) {
    An(a.j, a.Ha(), function(d) {
      return Bo(a, c, d)
    }, Jl("Error upgrading the database.", c), b)
  }

  function Bo(a, b, c) {
    try {
      a.gb(c)
    } catch (d) {
      Qk(function() {
        return b(new Li(1, "Failed to upgrade database.", d))
      })
    }
  }
  vo.prototype.F = function() {
    vc(this.ab, this.O, this.G, this.v, this.w, this.I);
    Aj.prototype.F.call(this)
  };

  function Co(a, b, c, d) {
    Ti.call(this, c);
    this.j = a;
    this.o = d
  }
  r(Co, Ti);

  function Do(a, b, c) {
    c = zn(a.j, ["ApplicationMetadata"], "Error reading application metadata.", c);
    Il(c, "ApplicationMetadata", function(d) {
      var e = d.dt;
      if (null == e) throw Error("Document type expected to be defined.");
      var f = new Oi(e, !1);
      e = a.sa(e);
      var g = d.jobset;
      null != g && W(f, "jobset", g);
      g = d.ic;
      null != g && (e = e.qb(g), f.D = e.slice(0), f.A = !0);
      (e = d.docosKeyData) && W(f, "docosKeyData", e);
      d = d.version;
      d = Gg(void 0 !== d ? d : 0);
      W(f, "version", d);
      f.v = !1;
      return f
    }, b, void 0, void 0, void 0, void 0, void 0, !0)
  }
  Co.prototype.$ = function(a) {
    if (!this.T(a)) throw Error("Cannot get object store names for operation type " + a.getType());
    return ["ApplicationMetadata"]
  };
  Co.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-application-metadata":
        var c = this.sa(V(a)),
          d = a.g;
        if (a.v) {
          if (a.v) var e = a.v;
          else throw Q("No new initial commands are available.").g;
          for (var f = [], g = 0; g < e.length; g++) f.push(c.Ta.R(e[g]));
          d.ic = f
        }
        b = Y(b, "ApplicationMetadata");
        a.j ? ql(b, d) : ao(this.o, V(a), d, b);
        break;
      default:
        throw Error("Cannot perform operation of type " + a.getType());
    }
  };

  function Eo(a, b, c) {
    this.g = !1;
    this.j = c
  }
  r(Eo, Vi);
  Eo.prototype.$ = function() {
    return ["DocumentEntities"]
  };
  Eo.prototype.Y = function(a, b) {
    b = Y(b, "DocumentEntities");
    switch (a.getType()) {
      case "update-record":
        if (a.j) {
          var c = {};
          c.deKey = V(a);
          c.data = a.g.data;
          ql(b, c)
        } else c = {}, c.data = a.g.data, a = V(a), ao(this.j, a, c, b);
        break;
      case "delete-record":
        Hl(b, V(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Fo() {
    this.g = !1
  }
  r(Fo, Zi);
  Fo.prototype.$ = function() {
    return ["Impressions"]
  };
  Fo.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        if (a.j) {
          b = Y(b, "Impressions");
          a = a.g;
          var c = {};
          c.iKey = [a.di || "", a.ibt];
          c.dt = a.dt;
          c.iba = a.iba;
          ql(b, c)
        } else throw Error("Impressions may not be updated.");
        break;
      case "delete-record":
        Hl(Y(b, "Impressions"), V(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Go() {
    this.g = !1
  }
  r(Go, $i);

  function Ho(a, b, c) {
    this.g = !1;
    this.j = a;
    this.o = c
  }
  r(Ho, Fj);

  function Io(a, b, c, d) {
    b = ["synchints", "" + b];
    var e = zn(a.j, ["ProfileData"], "Error reading syncHints.", d);
    ml(Y(e, "ProfileData").get(b), function(f) {
      yl(e);
      var g = f.target.result;
      if (g) {
        f = g.sourceApp;
        a: {
          var h = g.dataType;
          var k = ["synchints", "" + f];
          if (Ea(h) && Ea(k) && h.length == k.length) {
            for (var l = h.length, p = 0; p < l; p++)
              if (h[p] !== k[p]) {
                h = !1;
                break a
              } h = !0
          } else h = !1
        }
        if (!h) throw Error("Invalid data type.");
        h = g.docIds;
        g = g.lastUpdatedTimestamp;
        f = new Dj(!1, f);
        Ej(f, h);
        W(f, "lastUpdatedTimestamp", g);
        f.v = !1;
        c(f)
      } else c(null)
    })
  }
  Ho.prototype.$ = function() {
    return ["ProfileData"]
  };
  Ho.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = Y(b, "ProfileData");
        a.j ? ql(b, a.g) : ao(this.o, V(a), a.g, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Jo() {
    this.g = !1
  }
  r(Jo, Gj);
  Jo.prototype.$ = function() {
    return ["SyncObjects"]
  };
  Jo.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = Y(b, "SyncObjects");
        if (a.j) ql(b, a.g);
        else throw Error("SyncObject update is not implemented.");
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Ko(a, b) {
    this.g = !1;
    this.j = b
  }
  r(Ko, Hj);
  Ko.prototype.$ = function() {
    return ["ProfileData"]
  };
  Ko.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = Y(b, "ProfileData");
        a.j ? ql(b, a.g) : ao(this.j, "syncstats", a.g, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Lo() {
    this.g = !1
  }
  r(Lo, Tj);
  Lo.prototype.$ = function() {
    return ["FontMetadata"]
  };
  Lo.prototype.Y = function(a, b) {
    b = Y(b, "FontMetadata");
    switch (a.getType()) {
      case "update-record":
        if (a.j) ql(b, a.g);
        else throw Error("FontMetadata update is not implemented.");
        break;
      case "delete-record":
        Hl(b, V(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Mo(a, b, c, d, e, f, g, h) {
    vo.call(this, a, b, c, d, e, f, g, h);
    a = this.j;
    c = this.A;
    this.K = new Eo(a, c, this.o);
    Bj(this, this.K);
    this.Ra = new Lo(a, c);
    Bj(this, this.Ra);
    this.Oa = new Jo(a, c);
    Bj(this, this.Oa);
    this.$a = new Go(a);
    this.Wb = new fo(a, this.o);
    this.Pa = new Ko(a, this.o);
    Bj(this, this.Pa);
    this.Na = new Ho(a, c, this.o);
    Bj(this, this.Na);
    this.J = new eo(this.j, this.A, this.o);
    Bj(this, this.J);
    this.C = new Co(a, c, b, this.o);
    Bj(this, this.C);
    this.U = new Fo(a, c);
    Bj(this, this.U)
  }
  r(Mo, vo);
  q = Mo.prototype;
  q.Ha = aa(6);
  q.ob = n("C");
  q.Kb = n("Na");
  q.bb = aa(!1);
  q.gb = m();
  q.Fa = function(a) {
    a = a.db;
    a.createObjectStore("FontMetadata", {
      keyPath: "fontFamily"
    });
    a.createObjectStore("DocumentEntities", {
      keyPath: "deKey"
    });
    a.createObjectStore("SyncObjects", {
      keyPath: "keyPath"
    });
    a.createObjectStore("ProfileData", {
      keyPath: "dataType"
    });
    a.createObjectStore("ApplicationMetadata", {
      keyPath: "dt"
    });
    a.createObjectStore("NewDocumentIds", {
      keyPath: "dtKey"
    });
    a.createObjectStore("Comments", {
      keyPath: "cmtKey"
    }).createIndex("StateIndex", "stateIndex");
    a.createObjectStore("Users", {
      keyPath: "id"
    });
    a.createObjectStore("Documents", {
      keyPath: "id"
    });
    a.createObjectStore("DocumentCommands", {
      keyPath: "dcKey"
    });
    a.createObjectStore("DocumentCommandsStaging", {
      keyPath: "dcKey"
    });
    a.createObjectStore("DocumentCommandsMetadata", {
      keyPath: "dcmKey"
    });
    a.createObjectStore("DocumentCommandsMetadataStaging", {
      keyPath: "dcmKey"
    });
    a.createObjectStore("DocumentLocks", {
      keyPath: "dlKey"
    });
    a.createObjectStore("Impressions", {
      keyPath: "iKey"
    });
    a.createObjectStore("PendingQueues", {
      keyPath: "docId"
    });
    a.createObjectStore("PendingQueueCommands", {
      keyPath: "pqcKey"
    });
    a.createObjectStore("FileEntities", {
      keyPath: "id"
    }).createIndex("DocIdEntityTypeIndex", "docIdEntityTypeIndex")
  };
  q.F = function() {
    vc(this.K, this.Ra, this.Oa, this.$a, this.Wb, this.Pa, this.J, this.C, this.U);
    vo.prototype.F.call(this)
  };
  "ApplicationMetadata Comments DocumentCommandsMetadataStaging DocumentCommandsMetadata DocumentCommandsStaging DocumentCommands DocumentEntities DocumentLocks Documents FileEntities FontMetadata Impressions NewDocumentIds PendingQueueCommands PendingQueues ProfileData SyncObjects Users".split(" ").sort(function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  });

  function No(a, b, c, d, e) {
    go.call(this, a, b, c, d, e)
  }
  r(No, go);
  No.prototype.$ = function(a) {
    var b = go.prototype.$.call(this, a);
    "delete-record" == a.getType() && b.push("BlobMetadata");
    return b
  };
  No.prototype.o = function(a, b) {
    go.prototype.o.call(this, a, b);
    a = V(a);
    Hl(Y(b, "BlobMetadata"), [a], [a, []])
  };

  function Oo() {}
  r(Oo, to);
  Oo.prototype.g = function(a, b, c, d, e) {
    return new No(a, b, c, d, e)
  };

  function Po(a, b, c) {
    this.g = !1;
    this.j = c
  }
  r(Po, ij);
  Po.prototype.$ = function() {
    return ["BlobMetadata"]
  };
  Po.prototype.Y = function(a, b) {
    b = Y(b, "BlobMetadata");
    switch (a.getType()) {
      case "update-record":
        a.j ? b.add(a.g) : ao(this.j, V(a), a.g, b);
        break;
      case "delete-record":
        Hl(b, V(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Qo(a, b, c, d, e, f, g, h) {
    f = void 0 === f ? new Oo : f;
    Mo.call(this, a, b, c, d, e, f, g, h);
    this.Rb = new Po(this.j, this.A, this.o);
    Bj(this, this.Rb)
  }
  r(Qo, Mo);
  Qo.prototype.Ha = aa(7);
  Qo.prototype.bb = aa(!0);
  Qo.prototype.Fa = function(a) {
    Mo.prototype.Fa.call(this, a);
    Ro(a)
  };
  Qo.prototype.gb = function(a) {
    Ro(a)
  };

  function Ro(a) {
    a.db.createObjectStore("BlobMetadata", {
      keyPath: ["d", "p"]
    })
  };

  function So(a, b) {
    Ij.call(this, a, b);
    new zi(b)
  }
  r(So, Ij);
  So.prototype.Y = function(a, b) {
    switch (a.getType()) {
      case "append-template-commands":
        b = Y(b, "TemplateCommands");
        a.D && Hl(b, [a.v], [a.v, []]);
        for (var c = a.A, d = 0; d < c.length; ++d) {
          for (var e = a.v, f = c[d], g = f.j(), h = [], k = 0; k < g.length; ++k) h.push(this.o.R(g[k]));
          e = Yl(e, f.o(), f.v(), f.g(), f.A(), h);
          ql(b, e.g)
        }
        break;
      default:
        throw Error("Unsupported operation type " + a.getType());
    }
  };

  function To(a, b, c) {
    Jj.call(this, c);
    this.j = new $n
  }
  r(To, Jj);
  To.prototype.$ = function() {
    return ["TemplateCommands", "TemplateCreationMetadata", "TemplateMetadata"]
  };
  To.prototype.Y = function(a, b) {
    var c = a.A;
    switch (c) {
      case "templateMetadata":
        c = "TemplateMetadata";
        break;
      case "templateCreationMetadata":
        c = "TemplateCreationMetadata";
        break;
      default:
        throw Error("Record type " + c + " not supported.");
    }
    c = Y(b, c);
    switch (a.getType()) {
      case "update-record":
        a.j ? ql(c, a.g) : ao(this.j, V(a), a.g, c);
        break;
      case "delete-record":
        Hl(c, V(a));
        break;
      case "append-template-commands":
        this.sa(a.na()).Y(a, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Uo(a, b, c, d, e, f, g, h) {
    Qo.call(this, a, b, d, e, f, void 0, g, h);
    a = ["kix", "punch", "ritz"];
    b = this.j;
    if (!c)
      for (c = {}, d = new $l, e = 0; e < a.length; e++) c[a[e]] = new So(a[e], d, b);
    this.Qa = new To(b, this.A, c);
    Bj(this, this.Qa)
  }
  r(Uo, Qo);
  q = Uo.prototype;
  q.Ha = aa(8);
  q.Lb = n("Qa");
  q.bb = aa(!0);
  q.Fa = function(a) {
    Qo.prototype.Fa.call(this, a);
    Vo(a)
  };
  q.gb = function(a) {
    var b = a.db;
    0 <= Pa(b.objectStoreNames, "DocumentCommandsStaging") && b.deleteObjectStore("DocumentCommandsStaging");
    0 <= Pa(b.objectStoreNames, "DocumentCommandsMetadata") && b.deleteObjectStore("DocumentCommandsMetadata");
    0 <= Pa(b.objectStoreNames, "DocumentCommandsMetadataStaging") && b.deleteObjectStore("DocumentCommandsMetadataStaging");
    Vo(a)
  };

  function Vo(a) {
    a = a.db;
    a.createObjectStore("TemplateMetadata", {
      keyPath: ["id"]
    });
    a.createObjectStore("TemplateCreationMetadata", {
      keyPath: ["id"]
    });
    a.createObjectStore("TemplateCommands", {
      keyPath: "dcKey"
    })
  };

  function Wo(a, b, c, d, e, f, g, h, k, l, p, u, z) {
    p = void 0 === p ? !1 : p;
    u = void 0 === u ? null : u;
    I.call(this);
    this.v = a;
    this.V = b;
    this.ca = c;
    this.K = d;
    this.N = e;
    this.O = f;
    this.U = p;
    this.j = u;
    this.g = {};
    this.o = {};
    this.B = -1;
    this.w = new tk;
    this.J = !1;
    this.C = g;
    this.qa = h;
    this.I = k;
    this.G = l;
    this.W = z
  }
  r(Wo, I);

  function Xo(a, b) {
    var c = b.Ha();
    a.B = Math.max(a.B, c);
    a.g[c] = b
  }
  q = Wo.prototype;
  q.create = function(a, b) {
    if (this.J) throw Error("The create method can be called only once.");
    this.J = !0;
    if (isNaN(this.N)) throw Error("Cannot have the target schema version be NaN.");
    if (this.j) this.Ob(this.j);
    else {
      if (!Zb) throw Error("Cannot create storage adapters for unsupported browser");
      Qn(w(this.Ob, this), a, this.v, w(this.lc, this), this.U, b)
    }
    return this.w
  };
  q.lc = function(a) {
    Yc(a.g, {
      databaseOpenFailure: "true"
    });
    this.w.ba(a);
    Yo(this)
  };
  q.Ob = function(a) {
    this.j = a;
    if (this.K)
      for (var b = this.K(a), c = 0; c < b.length; c++)
        for (var d = b[c], e = d.Jc, f = d.Lc, g = d.na(); e <= f; ++e) {
          var h = this.o[e];
          h || (h = this.o[e] = {});
          h[g] = d
        }
    b = new Gn(this.V, this.ca, a, this.v, void 0, this.W); - 1 == this.B && (Xo(this, new Mo(a, this.o[6] || {}, b, this.v, this.C, void 0, this.I, this.G)), Xo(this, new Qo(a, this.o[7] || {}, b, this.v, this.C, this.qa, this.I, this.G)), Xo(this, new Uo(a, this.o[8] || {}, null, b, this.v, this.C, this.I, this.G)));
    a = Math.min(this.N, this.B);
    b = Zo(this);
    if (!this.O && 0 >= b) this.Gb(new Li(4,
      "Schema initialization cannot be performed when schema updates are prevented."));
    else if (!this.O || b >= a) this.ib();
    else {
      a: {
        for (c = b + 1; c <= a; ++c)
          if (null == this.g[c] || !this.g[c].bb()) {
            c = !1;
            break a
          } c = !0
      }
      c ? (b += 1, c = w(this.ib, this, null), d = w(this.Gc, this), Ao(this.g[b], w(this.wb, this, b, a, c, d), d)) : yo(this.g[a], w(this.ib, this), w(this.Gb, this))
    }
  };
  q.Gc = function(a) {
    this.w.ba(a);
    Yo(this)
  };
  q.Gb = function(a) {
    this.w.ba(a);
    Yo(this)
  };
  q.wb = function(a, b, c, d) {
    a = Zo(this);
    a == b ? c() : (a += 1, Ao(this.g[a], w(this.wb, this, a, b, c, d), d))
  };
  q.ib = function() {
    var a = Zo(this);
    if (a = this.g[a]) {
      a = new cj(a);
      this.j && wh(a, this.j);
      for (var b in this.g) wh(a, this.g[b]);
      for (var c in this.o) {
        b = this.o[c];
        for (var d in b) wh(a, b[d])
      }
      this.w.S(a)
    } else X(this.v, Error("Local Storage: No schema adapter for current schema version " + (this.j ? yn(this.j) : -1))), this.w.S(null)
  };

  function Zo(a) {
    var b = a.j ? yn(a.j) : -1;
    1 < b && 6 > b && X(a.v, Error("IDB version less than the minimum. version: " + b));
    return 6 > b ? -1 : b
  }

  function Yo(a) {
    for (var b in a.g) a.g[b].dispose();
    for (var c in a.o) {
      b = a.o[c];
      for (var d in b) b[d].dispose()
    }
    uc(a.j)
  };

  function $o(a, b) {
    I.call(this);
    var c = this;
    this.j = b;
    this.g = new bi;
    J(this, this.g);
    ci(this.g, a.v, function(d) {
      var e = [];
      d = d.g;
      for (var f = 0; f < d.length; f++) {
        var g = d[f];
        switch (g.g.o) {
          case "document":
            var h = new Hc;
            var k = g.g.H();
            F(h, 1, k);
            a: switch (k = g.changeType, k) {
              case "new":
                k = 1;
                break a;
              case "update":
                k = 2;
                break a;
              case "delete":
                k = 3;
                break a;
              default:
                throw Error("Could not handle change type " + k);
            }
            F(h, 2, k);
            k = [];
            g = g.j;
            fb(g, "ip") && k.push(1);
            fb(g, "pendingQueueState") && k.push(6);
            fb(g, "lastModifiedClientTimestamp") && k.push(2);
            (fb(g, "lsst") || fb(g, "lsft") || fb(g, "lss")) && k.push(3);
            fb(g, "pendingCreation") && k.push(4);
            fb(g, "title") && k.push(5);
            F(h, 3, k || []);
            if (2 != E(h, 2) || E(h, 3).length) g = new Ac, oc(g, Jc, h), e.push(g)
        }
      }
      e.length && (d = new Dc, kc(d, 1, e), e = new yc, oc(e, Fc, d), Rd(c.j, e))
    })
  }
  r($o, I);

  function ap(a, b, c, d, e) {
    I.call(this);
    this.C = a;
    this.w = b;
    this.G = c ? c : "DefaultLocalStoreSessionId";
    this.B = d || new $l;
    this.v = !!e;
    this.j = null;
    this.o = new bi;
    J(this, this.o);
    this.g = bp(this)
  }
  r(ap, I);

  function bp(a) {
    a.g && uc(a.g);
    var b = mh(R(), "lssv");
    return new Wo(a.C, a.G, 0, a.ac.bind(a), b, !0, new Pn)
  }

  function cp(a) {
    if (a.j) return a.j;
    a.j = dp(a);
    return kf(a.j, function(b) {
      a.Ya();
      throw b;
    })
  }

  function ep(a) {
    return cp(a).then(function(b) {
      return (new L(function(c, d) {
        Rj(b.j.w, c, d)
      })).then(function(c) {
        return fp(a, c) ? new fl(b, c[0]) : null
      })
    })
  }

  function gp(a) {
    return cp(a).then(function(b) {
      return (new L(function(c, d) {
        Rj(b.j.w, c, d)
      })).then(function(c) {
        if (!fp(a, c)) throw c = {
          usersLength: c.length,
          allowNonOfflineEnabledUser: a.v,
          storedUserMatchesFlag: 0 == c.length ? "no users" : c[0].H() == T(R(), "docs-offline-lsuid")
        }, Yc(Error("Failed to read LocalStore due to invalid user"), c);
        return new fl(b, c[0])
      })
    })
  }

  function fp(a, b) {
    return 1 == b.length && (a.v || b[0].H() == T(R(), "docs-offline-lsuid"))
  }
  q = ap.prototype;
  q.get = function() {
    return gp(this).then(function(a) {
      return a.g
    })
  };

  function dp(a) {
    return (new L(function(b, c) {
      Ak(a.g.create(a.Ya.bind(a)), b, c)
    })).then(a.Ac.bind(a))
  }
  q.Ac = function(a) {
    var b = this;
    if (!a) throw Error("Got null localstore from the idb localstore factory.");
    if (this.w) {
      var c = new $o(a, this.w);
      J(this, c)
    }
    dj(a);
    ci(this.o, a.j.j.v, function() {
      b.Ya()
    });
    ci(this.o, a.j.N, function() {
      b.Ya()
    });
    return a
  };
  q.Ya = function() {
    uc(this.g);
    this.g = bp(this);
    this.j = null
  };
  q.ac = function(a) {
    var b = this.B,
      c = new Bn("kix", 6, 8, b, a),
      d = new Bn("punch", 6, 8, b, a),
      e = new Bn("ritz", 6, 8, b, a);
    a = new Bn("drawing", 6, 8, b, a);
    return [e, c, d, a]
  };
  q.F = function() {
    uc(this.g);
    I.prototype.F.call(this)
  };

  function hp(a, b) {
    I.call(this);
    this.o = null;
    this.v = b;
    this.g = [];
    if (a > this.v) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (b = 0; b < a; b++) this.g.push(this.j())
  }
  y(hp, I);

  function ip(a, b) {
    a.o = b
  }

  function jp(a, b) {
    a.g.length < a.v ? a.g.push(b) : kp(b)
  }
  hp.prototype.j = function() {
    return this.o ? this.o() : {}
  };

  function kp(a) {
    if (Ga(a))
      if (Fa(a.dispose)) a.dispose();
      else
        for (var b in a) delete a[b]
  }
  hp.prototype.F = function() {
    hp.ha.F.call(this);
    for (var a = this.g; a.length;) kp(a.pop());
    delete this.g
  };

  function lp() {
    this.g = [];
    this.j = new tm;
    this.G = this.I = this.J = this.D = 0;
    this.o = new tm;
    this.A = this.C = 0;
    this.K = 1;
    this.v = new hp(0, 4E3);
    this.v.j = function() {
      return new mp
    };
    this.B = new hp(0, 50);
    this.B.j = function() {
      return new np
    };
    var a = this;
    this.w = new hp(0, 2E3);
    ip(this.w, function() {
      return a.K++
    });
    this.L = {}
  }

  function np() {
    this.sb = this.time = this.count = 0
  }
  np.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.sb && a.push(" [VarAlloc = ", this.sb, "]");
    return a.join("")
  };

  function mp() {}

  function op(a, b, c, d) {
    var e = []; - 1 == c ? e.push("    ") : e.push(qp(a.j - c));
    e.push(" ", rp(a.j - b));
    0 == a.g ? e.push(" Start        ") : 1 == a.g ? (e.push(" Done "), e.push(qp(a.A - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.v && e.push("[VarAlloc ", a.v, "] ");
    return e.join("")
  }
  mp.prototype.toString = function() {
    return null == this.type ? this.o : "[" + this.type + "] " + this.o
  };
  var sp = {
    pd: !0
  };

  function tp(a) {
    a.L.stop && sm(a.j, function(b) {
      this.L.stop(b.id, sp)
    }, a);
    xm(a.j)
  }
  lp.prototype.reset = function() {
    tp(this);
    for (var a = 0; a < this.g.length; a++) {
      var b = this.g[a];
      b.id ? vm(this.j.j, b.id) || (jp(this.w, b.id), jp(this.v, b)) : jp(this.v, b)
    }
    this.g.length = 0;
    this.D = x();
    this.A = this.C = this.G = this.I = this.J = 0;
    a = this.o.ja();
    for (b = 0; b < a.length; b++) {
      var c = this.o.get(a[b]);
      c.count = 0;
      c.time = 0;
      c.sb = 0;
      jp(this.B, c)
    }
    xm(this.o)
  };
  lp.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.g.length; d++) {
      var e = this.g[d];
      1 == e.g && c.pop();
      a.push(" ", op(e, this.D, b, c.join("")));
      b = e.j;
      a.push("\n");
      0 == e.g && c.push("|  ")
    }
    if (0 != this.j.P()) {
      var f = x();
      a.push(" Unstopped timers:\n");
      sm(this.j, function(g) {
        a.push("  ", g, " (", f - g.startTime, " ms, started at ", rp(g.startTime), ")\n")
      })
    }
    b = this.o.ja();
    for (d = 0; d < b.length; d++) c = this.o.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.C, "\n", "Total comments created ",
      this.A, "\n", "Overhead start: ", this.J, " ms\n", "Overhead end: ", this.I, " ms\n", "Overhead comment: ", this.G, " ms\n");
    return a.join("")
  };

  function qp(a) {
    a = Math.round(a);
    var b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
  }

  function rp(a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
  }
  new lp;

  function up(a) {
    I.call(this);
    this.j = a
  }
  y(up, I);
  up.prototype.g = function(a) {
    return vp(this, a)
  };

  function wp(a, b) {
    return (b ? "__wrapper_" : "__protected_") + (a[Ha] || (a[Ha] = ++Ia)) + "__"
  }

  function vp(a, b) {
    var c = wp(a, !0);
    b[c] || ((b[c] = xp(a, b))[wp(a, !1)] = b);
    return b[c]
  }

  function xp(a, b) {
    function c() {
      if (a.L()) return b.apply(this, arguments);
      try {
        return b.apply(this, arguments)
      } catch (e) {
        var d = e;
        if (!(d && "object" === typeof d && "string" === typeof d.message && 0 == d.message.indexOf("Error in protected function: ") || "string" === typeof d && 0 == d.indexOf("Error in protected function: "))) throw a.j(d), new yp(d);
      } finally {}
    }
    c[wp(a, !1)] = b;
    return c
  }

  function zp(a, b) {
    var c = Aa("window"),
      d = c[b];
    c[b] = function(e, f) {
      "string" === typeof e && (e = La(Ma, e));
      arguments[0] = e = vp(a, e);
      if (d.apply) return d.apply(this, arguments);
      var g = e;
      if (2 < arguments.length) {
        var h = Array.prototype.slice.call(arguments, 2);
        g = function() {
          e.apply(this, h)
        }
      }
      return d(g, f)
    };
    c[b][wp(a, !1)] = d
  }
  up.prototype.F = function() {
    var a = Aa("window");
    var b = a.setTimeout;
    b = b[wp(this, !1)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[wp(this, !1)] || b;
    a.setInterval = b;
    up.ha.F.call(this)
  };

  function yp(a) {
    A.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
    (a = (this.cb = a) && a.stack) && "string" === typeof a && (this.stack = a)
  }
  y(yp, A);

  function Ap() {}
  Ap.prototype.g = null;

  function Bp(a) {
    var b;
    (b = a.g) || (b = {}, Cp(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
    return b
  };
  var Dp;

  function Ep() {}
  y(Ep, Ap);

  function Fp(a) {
    return (a = Cp(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  }

  function Cp(a) {
    if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d), a.j = d
        } catch (e) {}
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.j
  }
  Dp = new Ep;

  function Gp(a) {
    Md.call(this);
    this.headers = new tm;
    this.I = a || null;
    this.g = !1;
    this.G = this.M = null;
    this.B = this.ca = this.N = "";
    this.j = this.O = this.w = this.J = !1;
    this.v = 0;
    this.C = null;
    this.W = "";
    this.V = this.K = !1
  }
  y(Gp, Md);
  var Hp = /^https?$/i,
    Ip = ["POST", "PUT"],
    Jp = [];

  function Kp(a, b, c, d, e, f, g) {
    var h = new Gp;
    Jp.push(h);
    b && h.o.add("complete", b, !1, void 0, void 0);
    h.o.add("ready", h.Yb, !0, void 0, void 0);
    f && (h.v = Math.max(0, f));
    g && (h.K = g);
    Lp(h, a, c, d, e)
  }
  q = Gp.prototype;
  q.Yb = function() {
    this.dispose();
    Wa(Jp, this)
  };

  function Lp(a, b, c, d, e) {
    if (a.M) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.N + "; newUri=" + b);
    c = c ? c.toUpperCase() : "GET";
    a.N = b;
    a.B = "";
    a.ca = c;
    a.J = !1;
    a.g = !0;
    a.M = a.I ? Fp(a.I) : Fp(Dp);
    a.G = a.I ? Bp(a.I) : Bp(Dp);
    a.M.onreadystatechange = w(a.Mb, a);
    try {
      a.O = !0, a.M.open(c, String(b), !0), a.O = !1
    } catch (g) {
      Mp(a, g);
      return
    }
    b = d || "";
    var f = new tm(a.headers);
    e && Cm(e, function(g, h) {
      f.set(h, g)
    });
    e = Ua(f.ja());
    d = t.FormData && b instanceof t.FormData;
    !(0 <= Pa(Ip, c)) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(g, h) {
      this.M.setRequestHeader(h, g)
    }, a);
    a.W && (a.M.responseType = a.W);
    "withCredentials" in a.M && a.M.withCredentials !== a.K && (a.M.withCredentials = a.K);
    try {
      Np(a), 0 < a.v && (a.V = !1, a.V ? (a.M.timeout = a.v, a.M.ontimeout = w(a.Ma, a)) : a.C = Qk(a.Ma, a.v, a)), a.w = !0, a.M.send(b), a.w = !1
    } catch (g) {
      Mp(a, g)
    }
  }

  function Va(a) {
    return "content-type" == a.toLowerCase()
  }
  q.Ma = function() {
    "undefined" != typeof xa && this.M && (this.B = "Timed out after " + this.v + "ms, aborting", Nd(this, "timeout"), this.abort(8))
  };

  function Mp(a, b) {
    a.g = !1;
    a.M && (a.j = !0, a.M.abort(), a.j = !1);
    a.B = b;
    Op(a);
    Pp(a)
  }

  function Op(a) {
    a.J || (a.J = !0, Nd(a, "complete"), Nd(a, "error"))
  }
  q.abort = function() {
    this.M && this.g && (this.g = !1, this.j = !0, this.M.abort(), this.j = !1, Nd(this, "complete"), Nd(this, "abort"), Pp(this))
  };
  q.F = function() {
    this.M && (this.g && (this.g = !1, this.j = !0, this.M.abort(), this.j = !1), Pp(this, !0));
    Gp.ha.F.call(this)
  };
  q.Mb = function() {
    this.L() || (this.O || this.w || this.j ? Qp(this) : this.pb())
  };
  q.pb = function() {
    Qp(this)
  };

  function Qp(a) {
    if (a.g && "undefined" != typeof xa && (!a.G[1] || 4 != Rp(a) || 2 != a.va()))
      if (a.w && 4 == Rp(a)) Qk(a.Mb, 0, a);
      else if (Nd(a, "readystatechange"), 4 == Rp(a)) {
      a.g = !1;
      try {
        if (Sp(a)) Nd(a, "complete"), Nd(a, "success");
        else {
          try {
            var b = 2 < Rp(a) ? a.M.statusText : ""
          } catch (c) {
            b = ""
          }
          a.B = b + " [" + a.va() + "]";
          Op(a)
        }
      } finally {
        Pp(a)
      }
    }
  }

  function Pp(a, b) {
    if (a.M) {
      Np(a);
      var c = a.M,
        d = a.G[0] ? Ba : null;
      a.M = null;
      a.G = null;
      b || Nd(a, "ready");
      try {
        c.onreadystatechange = d
      } catch (e) {}
    }
  }

  function Np(a) {
    a.M && a.V && (a.M.ontimeout = null);
    a.C && (t.clearTimeout(a.C), a.C = null)
  }

  function Sp(a) {
    var b = a.va();
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
      if (b = 0 === b) a = String(a.N).match(bm)[1] || null, !a && t.self && t.self.location && (a = t.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Hp.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  }

  function Rp(a) {
    return a.M ? a.M.readyState : 0
  }
  q.va = function() {
    try {
      return 2 < Rp(this) ? this.M.status : -1
    } catch (a) {
      return -1
    }
  };
  gd(function(a) {
    Gp.prototype.pb = a(Gp.prototype.pb)
  });

  function Tp(a, b, c) {
    Md.call(this);
    this.w = b || null;
    this.v = {};
    this.B = Up;
    this.G = a;
    if (!c) {
      this.g = null;
      this.g = new up(w(this.j, this));
      zp(this.g, "setTimeout");
      zp(this.g, "setInterval");
      a = this.g;
      b = Aa("window");
      c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        c[d] in b && zp(a, e)
      }
      a = this.g;
      fd = !0;
      b = w(a.g, a);
      for (c = 0; c < dd.length; c++) dd[c](b);
      ed.push(a)
    }
  }
  y(Tp, Md);

  function Vp(a, b) {
    wc.call(this, "e");
    this.error = a;
    this.v = b
  }
  y(Vp, wc);

  function Up(a, b, c, d) {
    Kp(a, null, b, c, d)
  }
  Tp.prototype.j = function(a, b) {
    a = a.error || a;
    b = b ? ib(b) : {};
    a instanceof Error && kb(b, a.__closure__error__context__984382 || {});
    a = Uc(a);
    if (this.w) try {
      this.w(a, b)
    } catch (l) {}
    var c = a.message.substring(0, 1900),
      d = a.stack;
    try {
      var e = hm(this.G, "script", a.fileName, "error", c, "line", a.lineNumber);
      a: {
        for (var f in this.v) {
          var g = !1;
          break a
        }
        g = !0
      }
      g || (e = im(e, this.v));
      g = {};
      g.trace = d;
      if (b)
        for (var h in b) g["context." + h] = b[h];
      var k = gm(g);
      this.B(e, "POST", k, this.C)
    } catch (l) {}
    try {
      Nd(this, new Vp(a, b))
    } catch (l) {}
  };
  Tp.prototype.F = function() {
    uc(this.g);
    Tp.ha.F.call(this)
  };

  function Wp(a, b) {
    this.j = b;
    for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
      var f = a[e] | 0;
      d && f == b || (c[e] = f, d = !1)
    }
    this.g = c
  }
  var Xp = {};

  function Yp(a) {
    return -128 <= a && 128 > a ? Sb(Xp, a, function(b) {
      return new Wp([b | 0], 0 > b ? -1 : 0)
    }) : new Wp([a | 0], 0 > a ? -1 : 0)
  }

  function Zp(a) {
    if (isNaN(a) || !isFinite(a)) return $p;
    if (0 > a) return aq(Zp(-a));
    for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
    return new Wp(b, 0)
  }
  var $p = Yp(0),
    bq = Yp(1),
    cq = Yp(16777216);

  function dq(a) {
    if (-1 == a.j) return -dq(aq(a));
    for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
      var e = Z(a, d);
      b += (0 <= e ? e : 4294967296 + e) * c;
      c *= 4294967296
    }
    return b
  }
  q = Wp.prototype;
  q.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    if (eq(this)) return "0";
    if (-1 == this.j) return "-" + aq(this).toString(a);
    for (var b = Zp(Math.pow(a, 6)), c = this, d = "";;) {
      var e = fq(c, b).g;
      c = gq(c, hq(e, b));
      var f = ((0 < c.g.length ? c.g[0] : c.j) >>> 0).toString(a);
      c = e;
      if (eq(c)) return f + d;
      for (; 6 > f.length;) f = "0" + f;
      d = f + d
    }
  };

  function Z(a, b) {
    return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.j
  }

  function eq(a) {
    if (0 != a.j) return !1;
    for (var b = 0; b < a.g.length; b++)
      if (0 != a.g[b]) return !1;
    return !0
  }
  q.ga = function(a) {
    if (this.j != a.j) return !1;
    for (var b = Math.max(this.g.length, a.g.length), c = 0; c < b; c++)
      if (Z(this, c) != Z(a, c)) return !1;
    return !0
  };

  function iq(a, b) {
    a = gq(a, b);
    return -1 == a.j ? -1 : eq(a) ? 0 : 1
  }

  function aq(a) {
    for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
    return (new Wp(c, ~a.j)).add(bq)
  }
  q.abs = function() {
    return -1 == this.j ? aq(this) : this
  };
  q.add = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
      var f = d + (Z(this, e) & 65535) + (Z(a, e) & 65535),
        g = (f >>> 16) + (Z(this, e) >>> 16) + (Z(a, e) >>> 16);
      d = g >>> 16;
      f &= 65535;
      g &= 65535;
      c[e] = g << 16 | f
    }
    return new Wp(c, c[c.length - 1] & -2147483648 ? -1 : 0)
  };

  function gq(a, b) {
    return a.add(aq(b))
  }

  function hq(a, b) {
    if (eq(a) || eq(b)) return $p;
    if (-1 == a.j) return -1 == b.j ? hq(aq(a), aq(b)) : aq(hq(aq(a), b));
    if (-1 == b.j) return aq(hq(a, aq(b)));
    if (0 > iq(a, cq) && 0 > iq(b, cq)) return Zp(dq(a) * dq(b));
    for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
    for (e = 0; e < a.g.length; e++)
      for (var f = 0; f < b.g.length; f++) {
        var g = Z(a, e) >>> 16,
          h = Z(a, e) & 65535,
          k = Z(b, f) >>> 16,
          l = Z(b, f) & 65535;
        d[2 * e + 2 * f] += h * l;
        jq(d, 2 * e + 2 * f);
        d[2 * e + 2 * f + 1] += g * l;
        jq(d, 2 * e + 2 * f + 1);
        d[2 * e + 2 * f + 1] += h * k;
        jq(d, 2 * e + 2 * f + 1);
        d[2 * e + 2 * f + 2] += g * k;
        jq(d, 2 * e + 2 * f + 2)
      }
    for (e = 0; e < c; e++) d[e] =
      d[2 * e + 1] << 16 | d[2 * e];
    for (e = c; e < 2 * c; e++) d[e] = 0;
    return new Wp(d, 0)
  }

  function jq(a, b) {
    for (;
      (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
  }

  function kq(a, b) {
    this.g = a;
    this.j = b
  }

  function fq(a, b) {
    if (eq(b)) throw Error("division by zero");
    if (eq(a)) return new kq($p, $p);
    if (-1 == a.j) return b = fq(aq(a), b), new kq(aq(b.g), aq(b.j));
    if (-1 == b.j) return b = fq(a, aq(b)), new kq(aq(b.g), b.j);
    if (30 < a.g.length) {
      if (-1 == a.j || -1 == b.j) throw Error("slowDivide_ only works with positive integers.");
      for (var c = bq, d = b; 0 >= iq(d, a);) c = lq(c, 1), d = lq(d, 1);
      var e = mq(c, 1),
        f = mq(d, 1);
      d = mq(d, 2);
      for (c = mq(c, 2); !eq(d);) {
        var g = f.add(d);
        0 >= iq(g, a) && (e = e.add(c), f = g);
        d = mq(d, 1);
        c = mq(c, 1)
      }
      b = gq(a, hq(e, b));
      return new kq(e, b)
    }
    for (e =
      $p; 0 <= iq(a, b);) {
      c = Math.max(1, Math.floor(dq(a) / dq(b)));
      d = Math.ceil(Math.log(c) / Math.LN2);
      d = 48 >= d ? 1 : Math.pow(2, d - 48);
      f = Zp(c);
      for (g = hq(f, b); - 1 == g.j || 0 < iq(g, a);) c -= d, f = Zp(c), g = hq(f, b);
      eq(f) && (f = bq);
      e = e.add(f);
      a = gq(a, g)
    }
    return new kq(e, a)
  }
  q.and = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Z(this, d) & Z(a, d);
    return new Wp(c, this.j & a.j)
  };
  q.or = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Z(this, d) | Z(a, d);
    return new Wp(c, this.j | a.j)
  };
  q.xor = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Z(this, d) ^ Z(a, d);
    return new Wp(c, this.j ^ a.j)
  };

  function lq(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.g.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? Z(a, f - c) << b | Z(a, f - c - 1) >>> 32 - b : Z(a, f - c);
    return new Wp(e, a.j)
  }

  function mq(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Z(a, f + c) >>> b | Z(a, f + c + 1) << 32 - b : Z(a, f + c);
    return new Wp(e, a.j)
  };
  gq(lq(bq, 32), bq);
  gq(lq(bq, 128), bq);

  function nq() {
    this.g = function() {
      var a = t.window;
      a.onbeforeunload = Ba;
      a.location.reload()
    }
  };

  function oq(a) {
    A.call(this, a)
  }
  r(oq, A);

  function pq(a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, l, p, u) {
      if ("%" == l) return "%";
      var z = c.shift();
      if ("undefined" == typeof z) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = z;
      return qq[l].apply(null, arguments)
    })
  }
  var qq = {
    s: function(a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Ob(" ", Number(c) - a.length) : Ob(" ", Number(c) - a.length) + a
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
        f + d + Ob(" ", a) : f + Ob(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
    },
    d: function(a, b, c, d, e, f, g, h) {
      return qq.f(parseInt(a, 10), b, c, d, 0, f, g, h)
    }
  };
  qq.i = qq.d;
  qq.u = qq.d;

  function rq() {
    this.j = 0;
    this.g = []
  }
  q = rq.prototype;
  q.add = function(a) {
    var b = this.g[this.j];
    this.g[this.j] = a;
    this.j = (this.j + 1) % 50;
    return b
  };
  q.get = function(a) {
    a = sq(this, a);
    return this.g[a]
  };
  q.set = function(a, b) {
    a = sq(this, a);
    this.g[a] = b
  };
  q.P = function() {
    return this.g.length
  };
  q.fa = function() {
    var a = this.P(),
      b = this.P(),
      c = [];
    for (a = this.P() - a; a < b; a++) c.push(this.get(a));
    return c
  };
  q.ja = function() {
    for (var a = [], b = this.P(), c = 0; c < b; c++) a[c] = c;
    return a
  };
  q.za = function(a) {
    for (var b = this.P(), c = 0; c < b; c++)
      if (this.get(c) == a) return !0;
    return !1
  };

  function tq(a) {
    return 0 == a.P() ? null : a.get(a.P() - 1)
  }

  function sq(a, b) {
    if (b >= a.g.length) throw Error("Out of bounds exception");
    return 50 > a.g.length ? b : (a.j + Number(b)) % 50
  };

  function uq(a) {
    this.o = a;
    this.j = Math.floor(a / 50);
    this.g = new rq
  }
  uq.prototype.get = function(a) {
    return vq(this, a, function(b, c) {
      return b + c.count
    })
  };

  function vq(a, b, c) {
    b = b || x();
    wq(a, b);
    var d = 0;
    b = a.j * (Math.floor(b / a.j) + 1) - a.o;
    for (var e = a.g.P() - 1; 0 <= e; --e) {
      var f = a.g.get(e);
      if (f.g <= b) break;
      d = c(d, f)
    }
    return d
  }

  function wq(a, b) {
    var c = tq(a.g);
    c && (c = c.g - a.j, b < c && (pq("Went backwards in time: now=%d, slotStart=%d.  Resetting state.", b, c), a = a.g, a.g.length = 0, a.j = 0))
  }

  function xq(a) {
    this.g = a
  }
  xq.prototype.count = 0;
  xq.prototype.min = Number.MAX_VALUE;
  xq.prototype.max = Number.MIN_VALUE;

  function yq(a, b, c) {
    I.call(this);
    this.o = a;
    this.j = b;
    this.g = new uq(1E3 * c)
  }
  r(yq, I);

  function zq(a, b, c) {
    I.call(this);
    this.g = a;
    this.v = b || 0;
    this.j = c;
    this.o = w(this.hc, this)
  }
  y(zq, I);
  q = zq.prototype;
  q.wa = 0;
  q.F = function() {
    zq.ha.F.call(this);
    this.stop();
    delete this.g;
    delete this.j
  };
  q.start = function(a) {
    this.stop();
    this.wa = Qk(this.o, void 0 !== a ? a : this.v)
  };
  q.stop = function() {
    0 != this.wa && t.clearTimeout(this.wa);
    this.wa = 0
  };
  q.hc = function() {
    this.wa = 0;
    this.g && this.g.call(this.j)
  };

  function Aq(a, b) {
    I.call(this);
    this.o = a;
    this.G = new zq(this.B, 3E4, this);
    this.U = new yq("errorsender", 1, 8);
    J(this, this.U);
    this.O = !1;
    this.I = null;
    this.K = new Set;
    this.J = new Fd(this);
    this.W = b || 10;
    Hd(this.J, this.o, "complete", this.V);
    Hd(this.J, this.o, "ready", this.B)
  }
  r(Aq, I);

  function Bq(a, b, c, d, e) {
    var f = zk(zk(a.Ba(), function(g) {
      if (!(g >= this.W)) return g = {}, g.u = b, g.m = c, g.c = d, g.h = e, this.Xa(g)
    }, a), a.B, a);
    Dk(f, function() {
      this.K.delete(f)
    }, a);
    a.K.add(f)
  }
  Aq.prototype.B = function() {
    return 0 != this.G.wa || this.o.M || this.O ? Hk() : Cq(this)
  };

  function Cq(a) {
    return zk(a.Aa(), function(b) {
      if (!this.o.M && 0 == this.G.wa && !this.O && b) {
        if (4E3 < b.u.length) return this.ua();
        try {
          var c = this.U;
          if (!((c.g.get() + 1) / (c.g.o / 1E3) <= c.j)) throw new oq(Pb("Query would cause ", c.o, " to exceed ", c.j, " qps."));
          var d = c.g,
            e = x();
          wq(d, e);
          var f = tq(d.g);
          if (!f || e >= f.g) f = new xq(d.j * (Math.floor(e / d.j) + 1)), d.g.add(f);
          f.count += 1;
          f.min = Math.min(1, f.min);
          f.max = Math.max(1, f.max);
          this.I = new tk;
          Lp(this.o, b.u, b.m, b.c, b.h);
          return this.I
        } catch (g) {
          if (g instanceof oq) this.O = !0;
          else throw g;
        }
      }
    }, a)
  }
  Aq.prototype.V = function() {
    var a = this.o.va(),
      b = this.I;
    Sp(this.o) || 400 <= a && 500 >= a ? zk(this.ua(), function() {
      b.S()
    }) : (this.G.start(), b.S())
  };
  Aq.prototype.F = function() {
    vc(this.J, this.G, this.o);
    this.K.clear();
    I.prototype.F.call(this)
  };

  function Dq(a, b) {
    Aq.call(this, a, b);
    this.g = []
  }
  r(Dq, Aq);
  q = Dq.prototype;
  q.Xa = function(a) {
    this.g.push(a);
    return Hk()
  };
  q.ua = function() {
    this.g.shift();
    return Hk()
  };
  q.Aa = function() {
    return Hk(void 0 !== this.g[0] ? this.g[0] : null)
  };
  q.Ba = function() {
    return Hk(this.g.length)
  };
  q.F = function() {
    delete this.g;
    Aq.prototype.F.call(this)
  };

  function Eq() {
    for (var a in Array.prototype) return !1;
    return !0
  };

  function Fq(a, b) {
    this.o = a;
    this.g = b;
    this.constructor.ub || (this.constructor.ub = {});
    this.constructor.ub[this.toString()] = this
  }
  Fq.prototype.R = function() {
    return this.toString()
  };
  Fq.prototype.toString = function() {
    this.j || (this.j = this.o.g + ":" + this.g);
    return this.j
  };
  Fq.prototype.getType = n("g");

  function Gq(a, b) {
    Fq.call(this, a, b)
  }
  y(Gq, Fq);

  function Hq(a) {
    Iq.hasOwnProperty(a);
    this.g = a;
    Iq[a] = this
  }
  var Iq;
  Iq = {};
  new Hq("lib");
  var Jq = new Hq("fva");
  new Gq(Jq, 1);

  function Kq(a) {
    a = void 0 === a ? new Lq : a;
    Md.call(this);
    this.I = {};
    this.g = null;
    this.j = {};
    this.J = new Fd(this);
    this.N = a.o;
    this.O = new nq;
    var b = a.g ? a.g.create(this, void 0) : null,
      c = new Gp;
    this.B = b || new Dq(c, void 0);
    J(this, this.B);
    b = T(R(), "docs-sup") + T(R(), "docs-jepp") + "/jserror";
    (c = T(R(), "jobset")) && (b = hm(b, "jobset", c));
    if (Mq) throw Error("ErrorReporter already installed.");
    Mq = !0;
    c = w(this.Rc, this);
    this.g = new Tp(b, c, void 0);
    this.g.C = {};
    b = w(this.Uc, this);
    this.g.B = b;
    Hd(this.J, this.g, "e", this.kc);
    this.G = a.j;
    this.w = !1;
    this.C = !0;
    this.v = !1;
    this.K = T(R(), "docs-jern")
  }
  r(Kq, Md);

  function Nq(a, b, c) {
    a.v = !1;
    a.g && a.g.j(b, Oq("warning", c))
  }

  function X(a, b, c, d) {
    a.v = void 0 === d ? !1 : d;
    a.g && a.g.j(b, Oq("incident", c))
  }
  q = Kq.prototype;
  q.log = function(a, b, c) {
    this.v = void 0 === c ? !1 : c;
    if (!this.g) {
      if (a instanceof nh) throw a.g;
      throw a;
    }
    this.g.j(a, Oq("incident", b))
  };

  function ll(a, b, c, d) {
    return function(e) {
      for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
      a: if (g = !!d, a.g) {
        try {
          var h = b.apply(c, f);
          break a
        } catch (k) {
          f = k;
          a.v = !1;
          if (!a.g) {
            if (f instanceof nh) throw f.g;
            throw f;
          }
          a.g.j(f, Oq("fatal", void 0));
          if (g) throw k;
        }
        h = void 0
      } else h = b.apply(c, f);
      return h
    }
  }

  function Oq(a, b) {
    b = b ? ib(b) : {};
    b.severity = a;
    return b
  }
  q.kc = function(a) {
    var b = a.v.severity;
    if ((b = "fatal" == b || "postmortem" == b) && !this.N) {
      var c = this.O;
      window.confirm("This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.") && c.g()
    }
    Nd(this, new Pq(b ? "h" : "i", a.error, a.v))
  };
  q.Rc = function(a, b) {
    var c = this.w;
    try {
      this.Nb(a, b)
    } catch (d) {
      throw c && !this.G && (this.C = !1), this.w = !0, b.provideLogDataError = d.message, b.severity || (b.severity = "fatal"), d;
    }
  };
  q.Nb = function(a, b) {
    for (var c in this.I) try {
      b[c] = this.I[c](a)
    } catch (e) {}
    kb(b, this.j);
    c = b.severity || "fatal";
    this.K && (b.reportName = this.K + "_" + c);
    b.isArrayPrototypeIntact = Eq().toString();
    var d = a.stack || "";
    if (0 == d.trim().length || "Not available" == d) b["stacklessError-reportingStack"] = Xc(Kq.prototype.Nb), [a.message].concat(la(Object.keys(b)), la(Object.values(b))).some(function(e) {
      return e.includes("<eye3")
    }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
    this.w && !this.G ? (this.C =
      this.v, "fatal" == c ? c = "postmortem" : "incident" == c && (c = "warningafterdeath")) : "fatal" == c && (this.w = !0);
    this.v = !1;
    b.severity = c
  };
  q.Uc = function(a, b, c, d) {
    this.C && Bq(this.B, a, b, c, d)
  };
  q.F = function() {
    Mq = !1;
    vc(this.J, this.g, this.B);
    Md.prototype.F.call(this)
  };
  var Mq = !1;

  function Pq(a, b) {
    wc.call(this, a);
    this.error = b
  }
  r(Pq, wc);

  function Lq() {
    this.o = this.v = !1;
    this.g = void 0;
    this.j = !1
  };

  function Qq(a, b, c, d, e, f) {
    tk.call(this, e, f);
    this.C = a;
    this.L = [];
    this.J = !!b;
    this.W = !!c;
    this.V = !!d;
    for (b = this.O = 0; b < a.length; b++) Ak(a[b], w(this.K, this, b, !0), w(this.K, this, b, !1));
    0 != a.length || this.J || this.S(this.L)
  }
  y(Qq, tk);
  Qq.prototype.K = function(a, b, c) {
    this.O++;
    this.L[a] = [b, c];
    this.g || (this.J && b ? this.S([a, c]) : this.W && !b ? this.ba(c) : this.O == this.C.length && this.S(this.L));
    this.V && !b && (c = null);
    return c
  };
  Qq.prototype.ba = function(a) {
    Qq.ha.ba.call(this, a);
    for (a = 0; a < this.C.length; a++) this.C[a].cancel()
  };

  function Rq(a, b, c, d, e, f) {
    Aq.call(this, d, f);
    this.C = b;
    this.v = b + "-f";
    this.j = b + "-n";
    this.w = c;
    this.ca = a;
    this.g = null;
    this.N = e || t.indexedDB || t.webkitIndexedDB;
    a = this.N.open("DocsErrors", 1);
    a.onsuccess = w(this.mc, this);
    a.onupgradeneeded = w(this.Hc, this);
    a.onerror = w(this.Hb, this);
    a.onblocked = w(this.Hb, this)
  }
  r(Rq, Aq);
  q = Rq.prototype;
  q.mc = function(a) {
    var b = a.target.result,
      c = Sq(b, "readwrite");
    zk(new Qq([Tq(this.v, c), Tq(this.j, c)]), function(d) {
      null == d[0][1] || null == d[1][1] ? (d = c.objectStore("Errors"), d.put({
        key: this.v,
        value: "1"
      }), d.put({
        key: this.j,
        value: "1"
      }), c.oncomplete = w(this.zb, this, b)) : this.zb(b)
    }, this)
  };
  q.zb = function(a) {
    this.g = a;
    this.B()
  };
  q.Hc = function(a) {
    a.target.transaction.db.createObjectStore("Errors", {
      keyPath: "key"
    })
  };
  q.Hb = function(a) {
    this.g && (this.g.close(), this.g = null);
    Nq(this.ca, Error("IdbErrorSender: " + gl(a)))
  };
  q.Xa = function(a) {
    if (!this.g) return this.w.Xa(a);
    var b = Sq(this.g, "readwrite"),
      c = new tk;
    zk(Tq(this.j, b), function(d) {
      if (d) {
        var e = b.objectStore("Errors");
        e.put({
          key: this.j,
          value: String(d + 1)
        });
        e.put({
          key: this.C + "-e-" + d,
          value: (new kk).R(a)
        });
        b.oncomplete = w(c.S, c)
      } else c.S()
    }, this);
    return c
  };
  q.ua = function() {
    if (!this.g) return this.w.ua();
    var a = Sq(this.g, "readwrite"),
      b = new tk;
    zk(new Qq([Tq(this.v, a), Tq(this.j, a)]), function(c) {
      var d = c[0][1];
      c = c[1][1];
      if (!d || c <= d) b.S();
      else {
        var e = a.objectStore("Errors");
        e["delete"](this.C + "-e-" + d);
        d++;
        e.put({
          key: this.v,
          value: String(d)
        });
        zk(Uq(this, a), function(f) {
          0 == f && (e.put({
            key: this.v,
            value: "1"
          }), e.put({
            key: this.j,
            value: "1"
          }));
          a.oncomplete = w(b.S, b)
        }, this)
      }
    }, this);
    return b
  };
  q.Aa = function() {
    if (!this.g) return this.w.Aa();
    var a = Sq(this.g, "readonly");
    return zk(new Qq([Tq(this.v, a), Tq(this.j, a)]), function(b) {
      var c = b[0][1];
      return !c || 1 > b[1][1] - c ? null : zk(Vq(this.C + "-e-" + c, a), function(d) {
        return d && (d = JSON.parse(d)) ? d : zk(this.ua(), this.Aa, this)
      }, this)
    }, this)
  };
  q.Ba = function() {
    if (!this.g) return this.w.Ba();
    var a = Sq(this.g, "readonly");
    return Uq(this, a)
  };

  function Uq(a, b) {
    return zk(new Qq([Tq(a.v, b), Tq(a.j, b)]), function(c) {
      return c[1][1] - c[0][1]
    })
  }

  function Tq(a, b) {
    return zk(Vq(a, b), function(c) {
      c = parseInt(c, 10);
      return 0 > c || isNaN(c) ? null : c
    })
  }

  function Vq(a, b) {
    b = b.objectStore("Errors");
    var c = new tk;
    b.get(a).onsuccess = function(d) {
      d.target.result ? c.S(d.target.result.value) : c.S(null)
    };
    return c
  }

  function Sq(a, b) {
    var c = ["Errors"];
    try {
      return a.transaction(c, b)
    } catch (d) {
      throw b = hl(a.objectStoreNames), Yc(d, {
        databaseName: a.name,
        databaseObjectStores: b,
        databaseVersion: a.version.toString(),
        transactionObjectStores: c.toString()
      });
    }
  }
  q.F = function() {
    this.g && (this.g.close(), this.g = null);
    Aq.prototype.F.call(this)
  };

  function Wq() {
    try {
      var a = t.localStorage;
      if (a && (Zb || $b) && (a.setItem("test", "test"), "test" == a.getItem("test") && (a.removeItem("test"), null == a.getItem("test")))) return !0
    } catch (b) {}
    return !1
  };

  function Xq() {
    I.call(this);
    this.g = {}
  }
  r(Xq, I);
  Xq.prototype.ya = function(a, b, c) {
    var d = this;
    if (Fa(a)) c && (a = w(a, c));
    else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    var e = new Yq;
    b = Qk(function() {
      var f = a,
        g = e.H();
      null !== g && delete d.g[g];
      f()
    }, b);
    this.g[b] = !0;
    return e.g = b
  };
  Xq.prototype.F = function() {
    for (var a in this.g) {
      var b = Number(a);
      null !== b && delete this.g[b];
      t.clearTimeout(b)
    }
    I.prototype.F.call(this)
  };

  function Yq() {
    this.g = null
  }
  Yq.prototype.H = n("g");

  function Zq(a, b, c) {
    Aq.call(this, a, c);
    this.C = b;
    this.w = b + "-v";
    this.v = b + "-f";
    this.j = b + "-n";
    this.g = t.localStorage;
    Wq();
    a = $q(this, this.w);
    if (!a || 1 > a) this.g.setItem(this.w, "1"), this.g.setItem(this.v, "1"), this.g.setItem(this.j, "1");
    this.B();
    this.N = new Xq;
    J(this, this.N);
    this.N.ya(this.$b, 3E4, this)
  }
  r(Zq, Aq);
  q = Zq.prototype;
  q.Xa = function(a) {
    var b = $q(this, this.j);
    if (!b || 1 != $q(this, this.w)) return Hk();
    try {
      this.g.setItem(this.j, String(b + 1)), this.g.setItem(this.C + "-e-" + b, (new kk).R(a))
    } catch (c) {}
    return Hk()
  };
  q.ua = function() {
    var a = $q(this, this.v);
    if (!a || 1 != $q(this, this.w)) return Hk();
    this.g.removeItem(this.C + "-e-" + a);
    a++;
    this.g.setItem(this.v, String(a));
    return zk(this.Ba(), function(b) {
      0 == b && (this.g.setItem(this.v, "1"), this.g.setItem(this.j, "1"))
    }, this)
  };
  q.Aa = function() {
    var a = $q(this, this.v);
    return a && 1 == $q(this, this.w) ? zk(this.Ba(), function(b) {
      if (1 > b) return null;
      try {
        var c = this.g.getItem(this.C + "-e-" + a);
        if (c) {
          var d = JSON.parse(c);
          if (d) return d
        }
      } catch (e) {}
      return zk(this.ua(), this.Aa, this)
    }, this) : Hk(null)
  };
  q.Ba = function() {
    return Hk($q(this, this.j) - $q(this, this.v))
  };

  function $q(a, b) {
    return (a = a.g.getItem(b)) ? ar(a) : null
  }

  function ar(a) {
    a = parseInt(a, 10);
    return 0 > a || isNaN(a) ? null : a
  }
  q.$b = function() {
    if ($q(this, this.j) && 1 == $q(this, this.w))
      for (var a = this.C + "-e-", b = 0, c = this.g.length; b < c; ++b) {
        var d = this.g.key(b);
        if (d && ub(d, a)) {
          var e = ar(d.substring(a.length)),
            f = $q(this, this.j);
          f && e && e >= f && this.g.removeItem(d)
        }
      }
  };
  q.F = function() {
    Aq.prototype.F.call(this)
  };

  function br() {}
  br.prototype.create = function(a, b) {
    return Wq() ? new Zq(new Gp, "docsOfflineIframeApi", b) : null
  };

  function cr() {}
  cr.prototype.create = function(a, b) {
    var c = (new br).create(a, b) || new Dq(new Gp, b);
    return Zb && (t.indexedDB || t.webkitIndexedDB) ? new Rq(a, "docsOfflineIframeApi", c, new Gp, void 0, b) : c
  };

  function dr() {
    return "user_" + T(R(), "docs-offline-lsuid")
  };

  function er() {
    return Zb && 0 <= wb(54) && !!t.BroadcastChannel
  };

  function fr() {
    I.call(this);
    this.g = new Fd(this);
    J(this, this.g)
  }
  r(fr, I);

  function Qd(a) {
    var b = [],
      c;
    if (er()) var d = c = new BroadcastChannel("DocsEventBus");
    else if (t.SharedWorker) {
      var e = new SharedWorker(cn("/eventbusworker.js", !0));
      d || (d = e.port);
      b.push(e.port)
    } else throw Error("Event bus is not supported via BroadcastChannel or SharedWorker.");
    var f = new MessageChannel;
    tc(a, function() {
      f.port1.close();
      b.forEach(function(g) {
        g.close()
      });
      c && c.close()
    });
    Hd(a.g, f.port1, "message", function(g) {
      var h = g.oa.data;
      b.forEach(function(k) {
        k.postMessage(h)
      });
      if (c) switch (g = new Kc(h), g.getType()) {
        case 1:
          c.postMessage(h);
          break;
        case 0:
          break;
        default:
          throw Error("Could not handle event bus message type " + g.getType());
      }
    });
    Hd(a.g, d, "message", function(g) {
      f.port1.postMessage(g.oa.data)
    });
    f.port1.start();
    b.forEach(function(g) {
      g.start()
    });
    return f.port2
  };

  function gr(a) {
    D(this, a, 0, -1, null)
  }
  y(gr, C);

  function hr(a) {
    D(this, a, 0, -1, null)
  }
  y(hr, C);

  function ir() {
    this.g = new gr;
    S(R(), "docs-offline-iunos") ? F(this.g, 3, 2) : F(this.g, 3, 1)
  };

  function jr(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
      var e =
        b.substring(d + 1);
      b = b.substring(0, d);
      if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
  };

  function kr() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      p = l = 0
    }

    function b(u) {
      for (var z = g, v = 0; 64 > v; v += 4) z[v / 4] = u[v] << 24 | u[v + 1] << 16 | u[v + 2] << 8 | u[v + 3];
      for (v = 16; 80 > v; v++) u = z[v - 3] ^ z[v - 8] ^ z[v - 14] ^ z[v - 16], z[v] = (u << 1 | u >>> 31) & 4294967295;
      u = e[0];
      var K = e[1],
        N = e[2],
        Qa = e[3],
        Nb = e[4];
      for (v = 0; 80 > v; v++) {
        if (40 > v)
          if (20 > v) {
            var Ta = Qa ^ K & (N ^ Qa);
            var rc = 1518500249
          } else Ta = K ^ N ^ Qa, rc = 1859775393;
        else 60 > v ? (Ta = K & N | Qa & (K | N), rc = 2400959708) : (Ta = K ^ N ^ Qa, rc = 3395469782);
        Ta = ((u << 5 | u >>> 27) &
          4294967295) + Ta + Nb + rc + z[v] & 4294967295;
        Nb = Qa;
        Qa = N;
        N = (K << 30 | K >>> 2) & 4294967295;
        K = u;
        u = Ta
      }
      e[0] = e[0] + u & 4294967295;
      e[1] = e[1] + K & 4294967295;
      e[2] = e[2] + N & 4294967295;
      e[3] = e[3] + Qa & 4294967295;
      e[4] = e[4] + Nb & 4294967295
    }

    function c(u, z) {
      if ("string" === typeof u) {
        u = unescape(encodeURIComponent(u));
        for (var v = [], K = 0, N = u.length; K < N; ++K) v.push(u.charCodeAt(K));
        u = v
      }
      z || (z = u.length);
      v = 0;
      if (0 == l)
        for (; v + 64 < z;) b(u.slice(v, v + 64)), v += 64, p += 64;
      for (; v < z;)
        if (f[l++] = u[v++], p++, 64 == l)
          for (l = 0, b(f); v + 64 < z;) b(u.slice(v, v + 64)), v += 64, p += 64
    }

    function d() {
      var u = [],
        z = 8 * p;
      56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
      for (var v = 63; 56 <= v; v--) f[v] = z & 255, z >>>= 8;
      b(f);
      for (v = z = 0; 5 > v; v++)
        for (var K = 24; 0 <= K; K -= 8) u[z++] = e[v] >> K & 255;
      return u
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, p;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      bc: function() {
        for (var u = d(), z = "", v = 0; v < u.length; v++) z += "0123456789ABCDEF".charAt(Math.floor(u[v] / 16)) + "0123456789ABCDEF".charAt(u[v] % 16);
        return z
      }
    }
  };

  function lr(a, b, c) {
    var d = [],
      e = [];
    if (1 == (Da(c) ? 2 : 1)) return e = [b, a], Ra(d, function(h) {
      e.push(h)
    }), mr(e.join(" "));
    var f = [],
      g = [];
    Ra(c, function(h) {
      g.push(h.key);
      f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    Ra(d, function(h) {
      e.push(h)
    });
    a = mr(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
  }

  function mr(a) {
    var b = kr();
    b.update(a);
    return b.bc().toLowerCase()
  };

  function nr(a) {
    var b = jr(String(t.location.href)),
      c;
    (c = t.__SAPISID || t.__APISID || t.__OVERRIDE_SID) ? c = !0: (c = new jn(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
    if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? t.__SAPISID : t.__APISID, c || (c = new jn(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
      b = b ? "SAPISIDHASH" : "APISIDHASH";
      var d = String(t.location.href);
      return d && c && b ? [b, lr(jr(d), c, a || null)].join(" ") : null
    }
    return null
  };

  function or(a) {
    D(this, a, 0, -1, null)
  }
  y(or, C);

  function pr(a) {
    D(this, a, 0, -1, null)
  }
  y(pr, C);

  function xr(a) {
    D(this, a, 0, -1, null)
  }
  y(xr, C);

  function yr(a) {
    D(this, a, 0, -1, null)
  }
  y(yr, C);

  function zr(a) {
    D(this, a, 0, -1, null)
  }
  y(zr, C);

  function Ar(a) {
    D(this, a, 0, -1, null)
  }
  y(Ar, C);

  function Br(a) {
    D(this, a, 0, -1, null)
  }
  y(Br, C);

  function Cr(a) {
    D(this, a, 0, -1, null)
  }
  y(Cr, C);

  function Dr(a) {
    D(this, a, 0, -1, null)
  }
  y(Dr, C);

  function Er(a) {
    D(this, a, 0, -1, null)
  }
  y(Er, C);

  function Fr(a) {
    D(this, a, 0, -1, null)
  }
  y(Fr, C);

  function Gr(a) {
    D(this, a, 0, -1, Hr)
  }
  y(Gr, C);
  var Hr = [1];

  function Ir(a) {
    this.j = this.g = this.o = a
  }
  Ir.prototype.reset = function() {
    this.j = this.g = this.o
  };

  function Jr(a, b, c) {
    Kp(a.url, function(d) {
      d = d.target;
      if (Sp(d)) {
        try {
          var e = d.M ? d.M.responseText : ""
        } catch (f) {
          e = ""
        }
        b(e)
      } else c(d.va())
    }, a.Tc, a.body, a.Sc, a.Wc, a.withCredentials)
  };

  function Kr(a) {
    D(this, a, 0, -1, null)
  }
  y(Kr, C);

  function Lr(a) {
    D(this, a, 0, -1, null)
  }
  y(Lr, C);

  function Mr(a) {
    D(this, a, 0, 30, Nr)
  }
  y(Mr, C);
  var Nr = [3, 20, 27];

  function Or(a, b) {
    return F(a, 8, b)
  };

  function Pr(a) {
    D(this, a, 0, 17, Qr)
  }
  y(Pr, C);
  var Qr = [3, 5];

  function Rr(a, b) {
    return kc(a, 3, b)
  }

  function Sr(a, b) {
    return F(a, 14, b)
  };

  function Tr(a) {
    D(this, a, 0, 6, Ur)
  }
  y(Tr, C);
  var Ur = [5];

  function Vr(a) {
    D(this, a, 0, -1, null)
  }
  y(Vr, C);
  var Wr = new cc(175237375, {
    ed: 0
  }, Vr, function(a, b) {
    var c = {
      md: ic(b, 1, -1)
    };
    a && (c.ma = b);
    return c
  });

  function Xr(a, b, c, d, e, f, g, h, k, l, p) {
    Md.call(this);
    this.Pa = a;
    this.Na = b || Ba;
    this.C = new Pr;
    this.Qa = d;
    this.W = p;
    this.j = [];
    this.V = "";
    this.ab = La(ye, 0, 1);
    this.G = e || null;
    this.O = c || null;
    this.I = g || !1;
    this.K = k || null;
    this.ca = this.N = -1;
    this.Ra = !h;
    this.J = 0;
    this.$a = 1;
    this.Oa = f || !1;
    a = new Lr;
    a = F(a, 1, 1);
    f || (f = new Kr, b = document.documentElement.getAttribute("lang"), f = F(f, 5, b), H(a, 11, f));
    H(this.C, 1, a);
    F(this.C, 2, this.Pa);
    this.v = new Ir(1E4);
    this.g = new Pk(this.v.g);
    J(this, this.g);
    ud(this.g, "tick", bb(Yr(this, l)), !1, this);
    this.B = new Pk(6E5);
    J(this, this.B);
    ud(this.B, "tick", bb(Yr(this, l)), !1, this);
    this.I || this.B.start();
    this.Oa || (ud(window, "beforeunload", this.w, !1, this), ud(window, "unload", this.w, !1, this), ud(document, "pagehide", this.w, !1, this))
  }
  y(Xr, Md);

  function Yr(a, b) {
    return b ? function() {
      b().then(a.flush.bind(a))
    } : a.flush
  }
  Xr.prototype.F = function() {
    this.w();
    Xr.ha.F.call(this)
  };
  Xr.prototype.log = function(a) {
    a = pc(a);
    var b = this.$a++;
    F(a, 21, b);
    for (E(a, 1) || F(a, 1, x().toString()); 1E3 <= this.j.length;) this.j.shift(), ++this.J;
    this.j.push(a);
    Nd(this, new Zr(a));
    this.I || this.g.ta || this.g.start()
  };
  Xr.prototype.flush = function(a, b) {
    if (0 == this.j.length) a && a();
    else {
      var c = x();
      if (this.ca > c && this.N < c) b && b("throttled");
      else {
        var d = Sr(Rr(F(pc(this.C), 4, x().toString()), this.j), this.J);
        c = {};
        var e = this.Na();
        e && (c.Authorization = e);
        this.G || (this.G = .01 > this.ab() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
        var f = this.G;
        this.O && (c["X-Goog-AuthUser"] = this.O, f = jm(f, "authuser", this.O));
        this.K && (c["X-Goog-PageId"] = this.K, f = jm(f, "pageId", this.K));
        if (e && this.V == e) b && b("stale-auth-token");
        else {
          this.j = [];
          this.g.ta && this.g.stop();
          this.J = 0;
          var g = d.R();
          c = {
            url: f,
            body: g,
            Xc: 1,
            Sc: c,
            Tc: "POST",
            withCredentials: this.Ra,
            Wc: 0
          };
          f = w(function(h) {
            this.v.reset();
            this.g.setInterval(this.v.g);
            if (h) {
              try {
                var k = JSON.parse(h.replace(")]}'\n", ""));
                var l = new Tr(k)
              } catch (p) {}
              l && (h = ic(l, 1, "-1"), h = Number(h), 0 < h && (this.N = x(), this.ca = this.N + h), l = l.w(Wr)) && (l = ic(l, 1, -1), -1 != l && (this.v = new Ir(1 > l ? 1 : l), this.g.setInterval(this.v.g)))
            }
            a && a()
          }, this);
          g = w(function(h) {
            var k = jc(d, Mr,
                3),
              l = this.v;
            l.j = Math.min(3E5, 2 * l.j);
            l.g = Math.min(3E5, l.j + Math.round(.2 * (Math.random() - .5) * l.j));
            this.g.setInterval(this.v.g);
            401 == h && e && (this.V = e);
            if (500 <= h && 600 > h || 401 == h || 0 == h) this.j = k.concat(this.j), this.I || this.g.ta || this.g.start();
            b && b("net-send-failed", h)
          }, this);
          this.W ? this.W.g(c, f, g) : this.Qa(c, f, g)
        }
      }
    }
  };
  Xr.prototype.w = function() {
    this.flush()
  };

  function Zr() {
    this.type = "event-logged"
  }
  y(Zr, wc);

  function $r(a) {
    this.g = a
  }

  function as(a, b) {
    b = Or(new Mr, b.R());
    a.g.log(b);
    return new L(function(c, d) {
      a.g.flush(c, d)
    })
  };

  function bs() {
    var a = R(),
      b = S(a, "docs-offline-ecpl") ? "https://jmt17.google.com/log" : void 0,
      c = !(Ga(t) && t.window == t) || !t.document || !t.document.documentElement,
      d = T(a, "docs-offline-ue");
    if (S(a, "docs-eea")) return new Xr(306, function() {
      return d ? nr([{
        key: "e",
        value: d
      }]) : null
    }, null, Jr, b, c, !0);
    a = T(a, "gaia_session_id");
    return new Xr(306, nr, a || null, Jr, b, c, !0)
  };

  function cs() {}
  cs.prototype.H = aa("offline_infra_invariants");

  function ds(a) {
    this.j = a
  }
  ds.prototype.g = function(a) {
    E(a, 15);
    H(a, 15, this.j.g)
  };
  var es = new cs;

  function fs(a, b) {
    this.j = a;
    this.g = b
  }
  var gs = null;

  function hs(a, b) {
    I.call(this);
    this.o = a;
    this.j = "number" === typeof b ? b : null;
    a = R();
    var c = a.get("ilcm");
    if (null == c) a = null;
    else {
      b = c.je;
      if (!gs) {
        var d = R(),
          e = d.get("ilcm");
        null != e && (gs = S(d, "icso") ? Tn() : e.si)
      }
      c = c.ei;
      a.get("buildLabel");
      a = new fs(b, c)
    }
    this.w = a ? a.j : 0;
    this.v = a ? a.g : [];
    this.g = null
  }
  r(hs, I);
  hs.prototype.get = function() {
    if (this.g) return this.g;
    var a = new pr;
    a = F(a, 1, "en");
    a = F(a, 2, zb);
    "number" === typeof this.j && F(a, 11, this.j);
    var b = R();
    var c = new or;
    c = F(c, 2, this.o);
    b = S(b, "icso");
    b = F(c, 1, b);
    H(a, 5, b);
    F(a, 9, this.w);
    b = new Ul;
    b = F(b, 1, this.v || []);
    H(a, 10, b);
    return this.g = a
  };

  function is(a) {
    this.g = a
  }
  is.prototype.j = function(a) {
    a = Or(new Mr, a.R());
    this.g.log(a);
    this.g.w()
  };

  function js(a, b) {
    this.o = a;
    this.g = b
  }
  js.prototype.j = function(a) {
    return kf(as(this.o, a), function() {
      var b = jc(a, Br, 1);
      b = ka(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        if (null == E(c, 5)) {
          var d = new Wl;
          H(c, 5, d)
        }
        if (null == E(G(c, Wl, 5), 34)) {
          d = G(c, Wl, 5);
          var e = new Rl;
          H(d, 34, e)
        }
        F(G(G(c, Wl, 5), Rl, 34), 26, !0)
      }
      return ks(this, a)
    }, this)
  };

  function ks(a, b) {
    return new L(function(c, d) {
      a.g.g(b, c, d)
    })
  };

  function ls() {}
  ls.prototype.g = function(a, b) {
    b()
  };

  function ms(a) {
    this.j = a
  }
  ms.prototype.g = function(a, b, c) {
    a = new Yi(null, "offline", x(), a.ia(), !0);
    this.j.write([a], b, c)
  };

  function ns(a) {
    this.j = a
  }
  ns.prototype.g = function(a, b, c) {
    ep(this.j).then(function(d) {
      d ? (new ms(d.g)).g(a, b, c) : b()
    })
  };

  function os() {
    this.g = []
  }
  os.prototype.add = function(a) {
    this.g.push(a)
  };
  os.prototype.P = function() {
    return this.g.length
  };

  function ps(a) {
    this.g = a
  }
  ps.prototype.H = n("g");

  function qs() {
    this.j = this.g = null
  }

  function rs(a) {
    var b = G(a.g, Wl, 5);
    null == b && (b = new Wl, H(a.g, 5, b));
    return b
  }

  function ss(a) {
    E(a.g, 10);
    null != E(a.g, 6) || E(a.g, 10);
    2 == E(G(a.g, yr, 8), 3) && null != E(a.g, 13) && E(G(G(a.g, yr, 8), Ar, 2), 2);
    var b = G(a.g, Wl, 5);
    null != b && (b = pc(b), H(a.g, 5, b));
    return a.g
  };

  function ts() {
    qs.call(this)
  }
  y(ts, qs);
  var us = new ps("high_frequency_builder");

  function vs(a, b, c) {
    a = new Pk(a);
    J(c, a);
    var d = new Fd(c);
    J(c, d);
    Hd(d, a, "tick", b);
    a.start()
  };

  function ws() {
    qs.call(this)
  }
  y(ws, qs);
  var xs = new ps("system_builder");

  function ys(a, b) {
    var c = 1E3 * x(),
      d = new yr;
    var e = new zr;
    e = F(e, 1, c);
    H(d, 1, e);
    F(d, 3, 1);
    H(a.g, 8, d);
    F(a.g, 12, b);
    F(a.g, 13, b);
    F(a.g, 4, c);
    F(a.g, 3, b);
    return a
  };

  function zs(a, b) {
    this.j = a;
    this.g = b
  }
  zs.prototype.v = function(a) {
    var b = this.j;
    F(a.g, 6, b.o);
    a = ss(a);
    b.g.add(a);
    b.v = !0;
    b = this.g;
    3 <= b.g.g.P() && b.j.Va()
  };
  zs.prototype.o = function(a) {
    return ys(As(this.j, a), this.j.w++)
  };
  zs.prototype.B = function() {
    var a = this.j,
      b = Bs(a, 716);
    Cs(a, b);
    b = ss(b);
    a.g.add(b);
    a.C = !0;
    a.L = !0;
    a = this.g;
    vs(a.C, a.j.Va, a.j);
    vs(36E5, a.w, a);
    this.g.j.Va()
  };
  zs.prototype.w = function() {
    this.g.v();
    return df(Am(this.g.o)).then()
  };

  function Ds() {}
  Ds.prototype.Db = function() {
    return new ts
  };

  function Es(a, b, c) {
    I.call(this);
    this.v = null != c ? w(a, c) : a;
    this.o = b;
    this.j = w(this.Qc, this);
    this.g = []
  }
  y(Es, I);
  q = Es.prototype;
  q.Za = !1;
  q.Ca = null;
  q.Va = function(a) {
    this.g = arguments;
    this.Ca ? this.Za = !0 : Fs(this)
  };
  q.stop = function() {
    this.Ca && (t.clearTimeout(this.Ca), this.Ca = null, this.Za = !1, this.g = [])
  };
  q.F = function() {
    Es.ha.F.call(this);
    this.stop()
  };
  q.Qc = function() {
    this.Ca = null;
    this.Za && (this.Za = !1, Fs(this))
  };

  function Fs(a) {
    a.Ca = Qk(a.j, a.o);
    a.v.apply(null, a.g)
  };

  function Gs(a) {
    this.g = new tm;
    if (a) {
      a = Am(a);
      for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    }
  }

  function Hs(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + (a[Ha] || (a[Ha] = ++Ia)) : b.charAt(0) + a
  }
  q = Gs.prototype;
  q.P = function() {
    return this.g.P()
  };
  q.add = function(a) {
    this.g.set(Hs(a), a)
  };
  q.contains = function(a) {
    a = Hs(a);
    return vm(this.g.j, a)
  };
  q.fa = function() {
    return this.g.fa()
  };
  q.ga = function(a) {
    return this.P() == zm(a) && Is(this, a)
  };

  function Is(a, b) {
    var c = zm(b);
    if (a.P() > c) return !1;
    !(b instanceof Gs) && 5 < c && (b = new Gs(b));
    return Dm(a, function(d) {
      var e = b;
      if (e.contains && "function" == typeof e.contains) d = e.contains(d);
      else if (e.za && "function" == typeof e.za) d = e.za(d);
      else if (Ea(e) || "string" === typeof e) d = 0 <= Pa(e, d);
      else a: {
        for (var f in e)
          if (e[f] == d) {
            d = !0;
            break a
          } d = !1
      }
      return d
    })
  }
  q.Ea = function() {
    return this.g.Ea(!1)
  };

  function Js(a, b, c, d, e) {
    this.g = a;
    this.G = b;
    this.j = new Es(this.v, 3E3, this);
    this.o = new Gs;
    this.B = d;
    this.C = e || 6E4
  }
  y(Js, I);
  Js.prototype.v = function() {
    if (0 != this.g.g.P() && (!this.B || this.g.v)) {
      var a = Ks(this.g),
        b = this.G.j(a);
      b && (hf(b, w(function() {
        ym(this.o.g, Hs(b))
      }, this)), this.o.add(b))
    }
  };
  Js.prototype.w = function() {
    var a = this.g,
      b = Bs(a, 1153);
    b = ss(b);
    a.g.add(b);
    this.j.Va()
  };

  function Ls() {
    this.g = {}
  }
  Ls.prototype.add = function(a) {
    E(G(a.g, yr, 8), 3);
    var b = E(a.g, 12);
    this.g[b] = a
  };

  function Ms() {
    this.j = {};
    this.o = {};
    this.g = null
  };

  function Ns(a, b) {
    this.j = a;
    this.B = b;
    this.w = 1;
    this.A = this.o = null;
    this.D = new Ls;
    this.g = new os;
    this.L = this.C = this.v = !1
  }

  function As(a, b) {
    var c = new qs,
      d = new Br;
    a = a.B;
    c.g = d;
    c.j = a;
    d = c.j.j[xs.H()];
    xs.H();
    d = d.Db();
    a = c.j;
    d.g = c.g;
    d.j = a;
    F(d.g, 10, b);
    return d
  }

  function Ks(a) {
    var b = a.g,
      c = b.g;
    b.g = [];
    b = new Gr;
    var d = pc(a.j.g);
    b = H(b, 2, d);
    d = a.j;
    Os(d);
    (d = d.j ? pc(d.j) : null) && H(b, 5, d);
    var e;
    d = a.j;
    for (var f, g = c.length - 1; 0 <= g; g--) {
      var h = G(c[g], Wl, 5);
      if (h && G(h, Ll, 1)) {
        h = G(h, Ll, 1);
        null != E(h, 12) && void 0 === e && (e = hc(h, 12));
        h = G(h, Nl, 20);
        if (void 0 !== h && void 0 === f) {
          f = new xr;
          var k = hc(h, 2);
          void 0 !== k && F(f, 2, k);
          h = hc(h, 1);
          void 0 !== h && F(f, 1, h)
        }
        if (void 0 !== e && void 0 !== f) break
      }
    }
    d = d.o ? pc(d.o) : null;
    if (void 0 !== e || void 0 !== f) d || (d = new pr), void 0 !== e && F(d, 6, e), void 0 !== f && H(d, 13, f);
    (e =
      d) && H(b, 3, e);
    a = pc(a.j.v);
    H(b, 4, a);
    kc(b, 1, c);
    return b
  }

  function Bs(a, b) {
    var c = ys(As(a, b), a.w++);
    var d = a.D;
    var e = Object.keys(d.g);
    if (0 == e.length) d = null;
    else {
      for (var f = [], g = 0; g < e.length; g++) {
        var h = Number(e[g]),
          k = d.g[h],
          l = new Ql;
        h = F(l, 1, h);
        k = E(k.g, 10);
        k = F(h, 2, k);
        f.push(k)
      }
      d = f
    }
    716 != b && (b = a.A, F(c.g, 6, a.o), e = new Ol, b = F(e, 1, b), d && kc(b, 2, d), d = rs(c), H(d, 3, b));
    Cs(a, c);
    return c
  }

  function Cs(a, b) {
    a.o = E(b.g, 12);
    a.A = E(G(G(b.g, yr, 8), zr, 1), 1)
  };

  function Ps() {}
  Ps.prototype.Db = function() {
    return new ws
  };

  function Qs() {
    this.g = this.j = null
  };

  function Rs() {
    this.g = new Dr;
    this.j = null;
    this.v = new Cr;
    F(this.v, 1, 6);
    this.o = null
  }

  function Ss(a) {
    null == a.j && (a.j = new Fr);
    return a.j
  }

  function Os(a) {
    null != E(a.g, 1) && null != E(a.g, 6) && E(a.g, 6)
  };

  function Ts() {
    this.v = this.A = null;
    this.g = new Rs;
    this.j = null;
    this.o = !1
  };

  function Us() {
    this.j = this.g = null
  }

  function Vs(a) {
    switch (a) {
      case "scary":
        return 3;
      case "canary":
        return 2;
      case "prod":
        return 1;
      default:
        return 0
    }
  };

  function Ws() {
    var a = Xs();
    if (!a) throw Error("Missing user info for enabling offline in flags.");
    return a
  }

  function Xs() {
    var a = T(R(), "docs-offline-uifeo");
    return a ? nc(te, a) : null
  };

  function Ys(a) {
    this.g = a
  }

  function Zs(a, b, c) {
    if ($s()) b(!0);
    else {
      var d = Xs();
      (d = d && E(d, 7)) ? Yk(a.g, d).then(b, c): b(!1)
    }
  }

  function $s() {
    var a = Xs();
    return a ? !!hc(a, 5) : !1
  };

  function at(a) {
    D(this, a, 0, -1, null)
  }
  y(at, C);

  function bt() {
    A.apply(this, arguments)
  }
  r(bt, A);

  function ct(a) {
    D(this, a, 0, -1, null)
  }
  y(ct, C);

  function et(a) {
    D(this, a, 0, -1, ft)
  }
  y(et, C);
  var ft = [1];

  function gt(a) {
    D(this, a, 0, -1, null)
  }
  y(gt, C);
  gt.prototype.getEmail = function() {
    return E(this, 1)
  };

  function ht(a, b) {
    return F(a, 1, b)
  }

  function it(a, b) {
    return F(a, 2, b)
  };

  function jt(a) {
    D(this, a, 0, -1, null)
  }
  y(jt, C);
  jt.prototype.getType = function() {
    return ic(this, 1, "applications_for_file")
  };
  jt.prototype.getData = function() {
    return G(this, et, 3)
  };
  jt.prototype.Ib = function() {
    return null != E(this, 3)
  };

  function kt(a) {
    for (var b in a.g) Ya(a.g[b]).sort(lt)
  }

  function mt(a) {
    this.g = a
  }

  function lt(a, b) {
    return a.g - b.g
  }

  function nt() {
    this.g = {}
  };

  function ot(a) {
    pt(a.mimeTypeScores || []);
    pt(a.fileExtensionScores || [])
  }

  function pt(a) {
    Ra(a, m())
  };

  function qt(a) {
    this.j = a.id;
    this.o = a.type || "WEB_ONLY";
    this.g = a.installed || !1;
    rt(a.icons);
    new ot(a.rankingInfo || {})
  }

  function rt(a) {
    var b = new nt;
    null != a && Ra(a, function(c) {
      var d = c.iconUrl;
      if (null != d && 0 < d.length) {
        d = c.category;
        c = c.size;
        var e = b.g[d];
        e || (e = [], b.g[d] = e);
        e.push(new mt(c))
      }
    });
    new kt(b)
  }
  qt.prototype.H = n("j");
  qt.prototype.getType = n("o");
  qt.prototype.isInstalled = n("g");

  function st(a, b) {
    var c = {};
    c.id = a;
    c.name = b;
    qt.call(this, c)
  }
  r(st, qt);

  function tt() {
    A.apply(this, arguments)
  }
  r(tt, A);

  function ut() {
    A.apply(this, arguments)
  }
  r(ut, A);

  function vt() {
    A.apply(this, arguments)
  }
  r(vt, A);

  function wt(a) {
    this.g = a;
    a = this.g.o;
    this.v = ic(a, 9, "") || "";
    this.o = ic(a, 8, 0) || 0
  }
  wt.prototype.j = function(a) {
    return xt(this.g, a + ",applications_for_file", "native_opener/list_apps/" + this.v + "/" + a, this.o).then(function(b) {
      return yt(b)
    })
  };

  function yt(a) {
    if (!a) throw new bt("No response from Sync Client");
    if (!a.success) throw Error("Response from Sync Client failed");
    var b = a.data;
    if (!b) throw Error("Invalid response from Sync Client: data field missing");
    if (0 == a.reason_code) throw new ut("Sync Client not enabled");
    a = b.applications;
    if (!a || 0 == a.length) throw new bt;
    var c = [],
      d = [];
    a.forEach(function(e) {
      e["default"] ? c.push(e) : d.push(e)
    });
    a = zt(c);
    return {
      j: zt(d),
      g: 0 < a.length ? a[0] : void 0
    }
  }

  function zt(a) {
    var b = [];
    a.forEach(function(c) {
      var d = c.application_id;
      if (d) {
        var e = c.icon;
        b.push(new st(d, c.name, /^[\s\xa0]*$/.test(null == e ? "" : String(e)) ? void 0 : "data:image/png;base64," + c.icon))
      }
    });
    return b
  };

  function At(a) {
    this.g = a;
    a = this.g.o;
    this.v = ic(a, 9, "");
    this.o = ic(a, 8, 0) || 0
  }
  At.prototype.j = function(a) {
    var b = it(ht(new gt, this.v), a);
    return Bt(this, "2/" + a, b, this.o).then(function(c) {
      return Ct(c)
    })
  };

  function Bt(a, b, c, d) {
    null != E(c, 1) && c.getEmail() || Promise.reject(Error("Invalid request: missing required email field"));
    c = "native_opener/v2/2/" + btoa(c.R());
    return xt(a.g, b, c, d).then(function(e) {
      if (!e) throw new tt("No response from Sync Client fetch");
      e = new jt(e);
      if (!e) throw new tt("Unable to parse response from Sync Client fetch");
      if (!hc(e, 2)) throw new tt("Sync Client fetch was unsuccessful");
      if (e.Ib() && 0 == E(e.getData(), 3)) throw new ut("Unspecified error: Sync Client not enabled");
      if (!e.Ib()) throw new tt("Expected data field missing");
      e = e.getData();
      if (!e) throw new tt("The data field was unexpectedly empty");
      return e
    })
  }

  function Ct(a) {
    a = jc(a, ct, 1);
    if (!a || 0 == a.length) throw new bt;
    var b = [],
      c = [];
    a.forEach(function(d) {
      var e = E(d, 1);
      e && (e = new st(e, E(d, 2), E(d, 3) ? "data:image/png;base64," + E(d, 3) : void 0), hc(d, 4) ? b.push(e) : c.push(e))
    });
    return {
      j: c,
      g: 0 < b.length ? b[0] : void 0
    }
  };

  function Dt(a) {
    this.o = a;
    this.g = new Map;
    this.j = null
  }

  function Et(a) {
    if (a.j) return Promise.resolve(a.j);
    var b = ic(a.o, 8, 0) || 0;
    return xt(a, "version", "native_opener/version", b).then(function(c) {
      if (!c) throw new ut("Invalid response from Sync Client");
      var d = c.data;
      if (!d) throw Error("Invalid response from Sync Client");
      d = d.full;
      var e;
      (e = !d) || (d = String(d).toLowerCase(), e = 0 > ("1.18" > d ? -1 : "1.18" == d ? 0 : 1));
      if (e) throw Error("Upgrade Sync Client. Version must be at least: 1.18");
      c = c.protocol_versions;
      Array.isArray(c) && 0 < c.length ? a.j = new At(a) : a.j = new wt(a);
      return a.j
    })
  }

  function xt(a, b, c, d) {
    if (a.g.get(b)) return a.g.get(b);
    try {
      if (chrome && chrome.runtime) var e = chrome.runtime.connect(ic(a.o, 5, "lmjegmlicamnimmfhcmpkclmigmmcbeh"), {
        name: ic(a.o, 4, "com.google.drive.nativeproxy")
      });
      else return Promise.reject(Error("Browser unable to access extensions"))
    } catch (g) {
      return Promise.reject(new ut(g))
    }
    if (!e) return d = new ut("Unable to get Application Launcher for Drive (by Google) extension"), Promise.reject(d);
    var f = (new Promise(function(g, h) {
      var k = e;
      k.onDisconnect.addListener(function() {
        h(new vt("Drive Client unexpectedly disappeared"))
      });
      k.onMessage.addListener(function(l) {
        g(l)
      });
      k.postMessage(c)
    })).finally(function() {
      var g = e;
      try {
        g.postMessage("quit"), g.disconnect()
      } catch (h) {}
      a.g.get(b) && a.g.delete(b)
    });
    a.g.set(b, f);
    return d ? Promise.race([Rk(d, null), f]) : f
  };

  function Ft(a) {
    var b = void 0 === b ? null : b;
    this.v = Zb && 0 <= wb(35) && (Tb || Ub) ? Et(new Dt(a)) : Promise.reject(Error("App launching disallowed"));
    this.g = b;
    this.j = new tk;
    this.g && (this.o(), this.g.g(w(this.o, this), this))
  }
  Ft.prototype.o = function() {
    if (this.g)
      if (this.g.get()) this.j = new tk;
      else {
        var a = Gt(this),
          b = this.j;
        Ak(a, b.S, b.ba, b)
      }
  };

  function Gt(a) {
    return Bk(Ht(a), function(b) {
      return b instanceof bt ? Hk() : Jk(b)
    })
  }

  function Ht(a) {
    return Zb && 0 <= wb(35) && (Tb || Ub) ? Ik(a.v.then(function(b) {
      return b.j("undefined")
    })) : Jk(Error("App Launching not allowed."))
  };

  function It() {
    var a = R();
    var b = new at;
    b = F(b, 8, 5E3);
    a = T(a, "docs-offline-sceid");
    a = F(b, 5, a);
    b = E(Ws(), 2);
    a = F(a, 9, b);
    this.g = new Ft(a)
  }

  function Jt() {
    var a = new It;
    return new L(function(b) {
      Bk(Ht(this.g), function(c) {
        b(c instanceof bt)
      }, this)
    }, a)
  };

  function Kt(a) {
    this.g = a
  }
  Kt.prototype.get = function() {
    var a = this,
      b = Ws(),
      c = E(b, 7),
      d = R();
    return M().then(function() {
      return c ? $k(a.g, c) : !1
    }).then(function(e) {
      return e ? 9 : $s() ? S(d, "docs-offline-eoaoico") ? M(5) : !c && S(d, "docs-offline-eoaoipu") ? M(3) : Lt(b) : null
    })
  };

  function Lt(a) {
    return E(a, 7) || !S(R(), "docs-offline-eoaoisc") ? M(null) : kf(Jt().then(function(b) {
      return b ? 4 : null
    }), aa(null))
  };

  function Mt(a) {
    this.g = a || Oa || (Oa = new De)
  }

  function Nt(a) {
    var b = [Ot(a), Pt(a, String(Im(new Em, "/document/offline/optout")))];
    return df(b).then(function() {
      return cf(b)
    }).then(m())
  }

  function Ot(a) {
    var b = en("/drive/offline/optout");
    return Pt(a, b)
  }

  function Pt(a, b) {
    var c = [];
    return hf(new L(function(d) {
      var e = Be(a.g.g, "IFRAME");
      e.addEventListener("load", function() {
        return c.push(setTimeout(function() {
          return d()
        }, 1E3))
      });
      e.style.display = "none";
      e.src = b;
      a.g.g.body.appendChild(e);
      c.push(setTimeout(function() {
        return d()
      }, 22E3))
    }), function() {
      c.map(function(d) {
        return clearTimeout(d)
      })
    })
  };

  function Qt(a, b, c, d) {
    this.Bb = a;
    this.j = b || null;
    this.g = c || null;
    this.Nc = !!d
  }
  Qt.prototype.Eb = n("j");
  Qt.prototype.Ua = n("g");

  function Rt() {};

  function St(a, b, c) {
    this.g = a;
    this.j = c
  }
  St.prototype.H = n("g");

  function Tt(a) {
    D(this, a, 0, -1, null)
  }
  y(Tt, C);
  Tt.prototype.H = function() {
    return E(this, 1)
  };

  function Ut(a) {
    this.j = a;
    a = t.localStorage.getItem("docs-tasksStats_default") || "[]";
    try {
      var b = JSON.parse(a)
    } catch (e) {
      b = [], t.localStorage.removeItem("docs-tasksStats_default"), Nq(this.j, Wc(e, "Detected task stats corruption, resetting"))
    }
    a = {};
    for (var c = 0; c < b.length; c++) {
      var d = new Tt(b[c]);
      a[d.H()] = d
    }
    this.g = a
  }

  function Vt(a) {
    t.localStorage.removeItem("docs-tasksStats_default");
    a = a.g;
    for (var b in a) delete a[b]
  };

  function Wt(a, b) {
    this.g = a;
    this.j = b
  }
  Wt.prototype.get = function() {
    var a = this;
    return ep(this.g).then(function(b) {
      return b ? new Qt(1, b.j.H(), ni(b.j, "emailAddress"), Xt(a)) : cp(a.g).then(function(c) {
        return (new L(function(d, e) {
          Rj(c.j.w, d, e)
        })).then(function(d) {
          if (d.length)
            if (1 == d.length) d = d[0], d = new Qt(4, d.H(), ni(d, "emailAddress"));
            else throw Error("More than one user in store: " + d.length);
          else {
            try {
              var e = !!t.localStorage.getItem("docs-uoo")
            } catch (f) {
              e = !0
            }
            d = e ? new Qt(2) : qn() ? new Qt(5) : new Qt(3)
          }
          return d
        })
      })
    })
  };

  function Xt(a) {
    a = new Ut(a.j);
    var b = R(),
      c = [];
    S(b, "docs-offline-esmst") && c.push(new St("metadata-sync", 0, !0, new Rt(bn())));
    S(b, "docs-offline-esbst") && c.push(new St("service-worker-update", 0, !0, new Rt(dn())), new St("binary-sync", 0, !0, new Rt(dn())));
    S(b, "docs-offline-edswut") && c.push(new St("drive-service-worker", 0, !0, new Rt(en("/drive/serviceworker/update"))));
    S(b, "docs-offline-eshcst") && c.push(new St("homescreen-cello-sync", mh(R(), "docs-offline-scstpim"), !0, new Rt(fn(gn(), "/document/backgroundsync"))));
    S(b, "docs-offline-esdcst") && c.push(new St("drive-cello-sync", mh(R(), "docs-offline-scstpim"), !0, new Rt(en("/drive/_/dataservice/backgroundsync"))));
    S(b, "docs-offline-eslcst") && c.push(new St("local-changes-sync", 0, !1, new Rt(bn())));
    S(b, "docs-offline-esast") && 0 < mh(b, "docs-offline-sastpim") && c.push(new St("auto-sync", mh(R(), "docs-offline-sastpim"), !1, new Rt(bn())));
    S(b, "docs-offline-eswst") && c.push(new St("webfonts-sync", 0, !0, new Rt(bn())));
    S(b, "docs-offline-esist") && c.push(new St("impression-sync", 0,
      !1, new Rt(bn())));
    S(b, "docs-offline-esddt") && c.push(new St("document-deletion", 0, !1, new Rt(bn())));
    S(b, "docs-offline-esuuct") && c.push(new St("update-unsaved-changes", 0, !1, new Rt(dn())));
    S(b, "docs-offline-esct") && c.push(new St("cleanup-task", 0, !1, new Rt(dn())));
    S(b, "docs-offline-esrt") && c.push(new St("report-task", 0, !1, new Rt(dn())));
    if (S(b, "docs-offline-eskst")) {
      var d = b.get("docs-offline-rte");
      if (lh(b, "docs-offline-rte") && null != d) {
        if (!(d instanceof Array)) throw hg("Invalid key for array: docs-offline-rte").g;
        for (var e = [], f = 0; f < d.length; f++) {
          var g = d[f];
          g = "object" === Zg(g) ? "[object Object]" : P(g);
          e.push(g)
        }
        ch(b.g.get(), "docs-offline-rte", e);
        d = e
      } else d = [];
      0 <= Pa(d, "kix") && c.push(new St("kix-snapshot", 0, !1, new Rt(fn(gn(), "/document/snapshot.js"))))
    }
    S(b, "docs-offline-esost") && c.push(new St("sync-objects-sync", 0, !0, new Rt(bn())));
    b = [];
    for (d = 0; d < c.length; d++) e = c[d], e.j && b.push(e);
    for (c = 0; c < b.length; c++)
      if (d = b[c].H(), d = (d = a.g[d]) ? pc(d) : null, (e = !d) || (d = hc(d, 5), e = !(null == d ? 0 : d)), e) return !1;
    return !0
  };

  function Yt(a) {
    this.g = a
  };

  function Zt() {
    return $t() && S(R(), "docs-offline-usea") ? au() : new L(function(a, b) {
      bu(function(c, d) {
        a(new Yt(d))
      }, b)
    })
  }

  function $t() {
    return !!Aa("navigator.storage.estimate")
  }

  function au() {
    return $t() ? M(t.navigator.storage.estimate().then(function(a) {
      return new Yt(a.quota)
    })) : Ze(Error("navigator.storage.estimate is undefined"))
  }

  function cu(a, b, c) {
    var d = "persistent" == a ? t.navigator ? t.navigator.webkitPersistentStorage || null : null : t.navigator ? t.navigator.webkitTemporaryStorage || null : null;
    d ? d.queryUsageAndQuota(b, function(e) {
      c("queryUsageAndQuota failed: " + e.code)
    }) : t.webkitStorageInfo ? (d = t.webkitStorageInfo, d.queryUsageAndQuota("persistent" == a ? d.PERSISTENT : d.TEMPORARY, b, function(e) {
      c("queryUsageAndQuota failed: " + e.code)
    })) : c("webkitStorageInfo not available in this browser.")
  }

  function bu(a, b) {
    cu("temporary", function(c, d) {
      cu("persistent", function(e, f) {
        e = c + e;
        a(e, Math.max(d, f) - e)
      }, b)
    }, b)
  };

  function du(a, b) {
    this.w = a;
    this.A = b
  }

  function eu(a) {
    return fu(a).then(a.g.bind(a)).then(a.j.bind(a)).then(a.o.bind(a)).then(function() {
      return $d(new Zd, 1)
    }, a.v.bind(a))
  }
  du.prototype.v = function(a) {
    if (a instanceof Zd) return a;
    if (a instanceof Error) throw a;
    throw Error(a);
  };

  function fu(a) {
    var b = new Zd;
    return a.w.get().then(function(c) {
      var d = c.Bb;
      switch (d) {
        case 3:
        case 2:
          return M();
        case 4:
          return $d(b, 3), c = c.Ua(), F(b, 2, c), Ze(b);
        case 1:
          return $d(b, 2), Ze(b);
        case 5:
          return $d(b, 4), Ze(b);
        default:
          throw Error("Unexpected enabled state: " + d);
      }
    })
  }
  du.prototype.j = function() {
    var a = this;
    return (new L(function(b, c) {
      Zs(a.A, b, c)
    })).then(function(b) {
      if (b) return M();
      b = $d(new Zd, 5);
      return Ze(b)
    })
  };
  du.prototype.g = function() {
    if (rk()) return M();
    var a = $d(new Zd, 6);
    return Ze(a)
  };
  du.prototype.o = function() {
    var a = mh(R(), "docs-offline-mrs");
    if (!a) throw Error("missing minRequiredSpace information");
    return new L(function(b, c) {
      Zt().then(function(d) {
        d = d.g;
        if (d > a) b();
        else {
          var e = $d(new Zd, 7);
          e = F(e, 3, a);
          d = F(e, 4, d);
          c(d)
        }
      }, c)
    })
  };

  function gu(a, b) {
    void 0 !== a.name ? (this.name = a.name, this.code = hb[a.name]) : (this.code = a = a.code, this.name = hu(a));
    A.call(this, Kb("%s %s", this.name, b))
  }
  y(gu, A);

  function hu(a) {
    var b = gb(function(c) {
      return a == c
    });
    if (void 0 === b) throw Error("Invalid code: " + a);
    return b
  }
  var hb = {
    AbortError: 3,
    EncodingError: 5,
    InvalidModificationError: 9,
    InvalidStateError: 7,
    NotFoundError: 1,
    NotReadableError: 4,
    NoModificationAllowedError: 6,
    PathExistsError: 12,
    QuotaExceededError: 10,
    SecurityError: 2,
    SyntaxError: 8,
    TypeMismatchError: 11
  };

  function iu(a, b) {
    this.o = a;
    this.g = b
  }

  function ju(a, b) {
    iu.call(this, a, b);
    this.j = b
  }
  y(ju, iu);

  function ku(a) {
    var b = new tk;
    a.j.getFile("__initcheck", {
      create: !0
    }, w(function(c) {
      b.S(new lu(this.o, c))
    }, a), w(function(c) {
      b.ba(new gu(c, "loading file __initcheck from " + this.g.fullPath))
    }, a));
    return b
  }

  function mu(a, b) {
    var c = new tk;
    a.j.getDirectory(b, {
      create: !0
    }, w(function(d) {
      c.S(new ju(this.o, d))
    }, a), w(function(d) {
      c.ba(new gu(d, "loading directory " + b + " from " + this.g.fullPath))
    }, a));
    return c
  }

  function nu(a) {
    var b = new tk;
    a.j.removeRecursively(w(b.S, b, !0), w(function(c) {
      b.ba(new gu(c, "removing " + this.g.fullPath + " recursively"))
    }, a));
    return b
  }

  function lu(a, b) {
    iu.call(this, a, b)
  }
  y(lu, iu);

  function ou(a) {
    this.g = a
  };

  function pu(a) {
    var b = t.requestFileSystem || t.webkitRequestFileSystem;
    if (!Fa(b)) return Jk(Error("File API unsupported"));
    var c = new tk;
    b(a, 10485760, function(d) {
      c.S(new ou(d))
    }, function(d) {
      c.ba(new gu(d, "requesting filesystem"))
    });
    return c
  };

  function qu(a, b, c, d) {
    d = void 0 === d ? t.PERSISTENT : d;
    this.g = !1;
    this.v = void 0 === b ? null : b;
    this.w = void 0 === c ? "docs" : c;
    this.A = d;
    this.o = a;
    this.j = null
  }
  r(qu, Vj);

  function ru(a, b, c) {
    var d = new jl(w(a.Ec, a, "initialize"), 3E4, document);
    d.start();
    Ak(Ck(su(a), function() {
      d.dispose()
    }), w(a.qc, a, b, c), w(a.lb, a, c, "initialize"))
  }

  function su(a) {
    switch (a.A) {
      case t.PERSISTENT:
        return pu(1);
      case t.TEMPORARY:
        return pu(0);
      default:
        throw Error("Cannot handle Filesystem type: " + a.A);
    }
  }
  q = qu.prototype;
  q.lb = function(a, b, c) {
    b = tu(b, c);
    X(this.o, b);
    a(b)
  };
  q.Kc = function(a, b, c, d) {
    a = tu(a, d);
    c && 0 <= Pa(c, d.name) || X(this.o, a);
    this.v && this.v(a);
    b(a)
  };
  q.Ec = function(a, b) {
    var c = {
      requestTimeout: 3E4
    };
    c.timeoutDelays = b.g.concat().toString();
    X(this.o, Error("Filesystem slowness, took 30000ms during " + a), c)
  };

  function tu(a, b) {
    return new Uj("Filesystem error (" + b.name + ") during " + a + ": " + b.message, "QuotaExceededError" == b.name ? "QuotaExceeded" : "Other")
  }
  q.qc = function(a, b, c) {
    Ak(mu(new ju(c, c.g.root), this.w), La(this.nc, a, b), La(this.lb, b, "handleFileSystemAvailable_"), this)
  };
  q.nc = function(a, b, c) {
    this.j = c;
    Ak(ku(c), a, w(this.lb, this, b, "handleDirectoryEntryAvailable_"))
  };

  function uu(a, b) {
    Ak(nu(a.j), b, w(a.Kc, a, "clearStorage", function() {
      b()
    }, null))
  }
  q.F = function() {
    Vj.prototype.F.call(this);
    delete this.j
  };

  function vu(a, b, c) {
    a = void 0 === a ? Oa || (Oa = new De) : a;
    b = void 0 === b ? T(R(), "olbu") : b;
    c = void 0 === c ? T(R(), "docs-offline-lsuid") : c;
    I.call(this);
    this.v = a;
    this.o = b;
    this.B = c;
    this.j = this.g = null;
    this.C = new Fd(this);
    J(this, this.C);
    Hd(this.C, t, "message", this.G)
  }
  r(vu, I);
  vu.prototype.w = function() {
    ln.set("delete_cache", "1", 120, "/");
    return this.update()
  };
  vu.prototype.update = function(a) {
    return hf(wu(this, a), function() {
      kn("delete_cache");
      kn("install_cache")
    }.bind(this))
  };

  function wu(a, b) {
    return a.o ? a.g && !b ? M() : M().then(function() {
      return xu(a)
    }).then(function() {
      if (a.g)
        if (b) yu(a);
        else return M();
      a.g = Be(a.v.g, "IFRAME");
      var c = ef();
      a.g.style.display = "none";
      a.g.src = zu(a);
      a.v.g.body.appendChild(a.g);
      Rk(3E5).then(function() {
        c.reject("App cache updater timed out")
      });
      a.j = c;
      return a.j.g
    }) : Ze(Error("No base url provided."))
  }

  function zu(a) {
    var b = om(a.o, "cacheupdate"),
      c = {
        al: "1"
      };
    a.B && (c.ouid = a.B);
    return im(b, c)
  }

  function xu(a) {
    var b = ef(),
      c = new Gp;
    ud(c, "complete", function(d) {
      d = d.target.va();
      200 == d ? b.resolve() : b.reject(Error("Failed to invalidate appcache manifest, received " + d + " from POST request."));
      uc(c)
    });
    c.v = 1E4;
    Lp(c, Au(a), "POST");
    return b.g
  }

  function Au(a) {
    var b = om(a.o, "common/manifest"),
      c = {};
    c.ouid = a.B;
    return im(b, c)
  }
  vu.prototype.G = function(a) {
    a = a.oa;
    new Em(this.o);
    var b = t.location.protocol + "//" + t.location.hostname;
    if (a && a.origin == b && this.g && a.source == this.g.contentWindow && (a = a.data, this.j)) switch (a) {
      case "appcache-update-succeeded":
        this.j.resolve();
        break;
      case "appcache-update-failed":
        this.j.reject("At least one app cache failed.");
        break;
      default:
        throw Error("Received unexpected data: " + a);
    }
  };

  function yu(a) {
    a.g && (a.v.j(a.g), a.g = null, a.j.reject("Removing updater frame"), a.j = null)
  }
  vu.prototype.F = function() {
    yu(this);
    I.prototype.F.call(this)
  };

  function Bu(a, b) {
    this.message = a;
    this.ports = b
  }
  Bu.prototype.toString = function() {
    return "{message: " + this.message + ", ports: " + this.ports + "}"
  };

  function Cu(a) {
    var b = Du;
    this.g = a;
    this.j = b
  }

  function Eu(a, b) {
    return Fu(a.g, b.ia()).then(function(c) {
      return new Bu(new a.j(c.message), c.ports)
    })
  };

  function Gu(a) {
    a = void 0 === a ? 12E4 : a;
    I.call(this);
    this.o = a;
    this.g = {};
    this.v = 0
  }
  r(Gu, I);

  function Fu(a, b) {
    var c = void 0,
      d = void 0;
    c = void 0 === c ? [] : c;
    d = void 0 === d ? a.o : d;
    var e = ef(),
      f = ++a.v;
    a.g[f] = e;
    var g = Qk(function() {
      e.reject(Error("Request to transport timed out."))
    }, d);
    Hu(a, e, b, c);
    return hf(e.g, function() {
      t.clearTimeout(g);
      delete a.g[f]
    })
  }
  Gu.prototype.F = function() {
    for (var a = ka(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) b.value.reject("Sender was disposed");
    I.prototype.F.call(this)
  };

  function Iu(a) {
    Gu.call(this, a);
    this.j = new Fd(this);
    J(this, this.j)
  }
  r(Iu, Gu);

  function Hu(a, b, c, d) {
    var e = new MessageChannel;
    Id(a.j, e.port1, "message", function(f) {
      f = f.oa;
      b.resolve(new Bu(f.data, f.ports))
    }.bind(a));
    e.port1.start();
    a.postMessage(c, [e.port2].concat(d));
    hf(b.g, function() {
      e.port1.close()
    })
  };

  function Ju(a, b) {
    Iu.call(this, b);
    this.w = a
  }
  r(Ju, Iu);
  Ju.prototype.postMessage = function(a, b) {
    this.w.postMessage(a, b)
  };

  function Ku() {
    this.g = [];
    this.j = [];
    this.o = [];
    this.v = []
  }

  function Lu(a, b, c) {
    a.g.push(new Mu(b, c))
  }

  function Nu(a) {
    var b = ["/"];
    b.every(function(c) {
      return ub(c, "/")
    });
    Za(a.o, b)
  }

  function Ou(a) {
    var b = Pu;
    b.every(function(c) {
      return ub(c, "/")
    });
    Za(a.j, b)
  }

  function Qu(a) {
    var b = ["/offline/blank"];
    b.every(function(c) {
      return ub(c, "/")
    });
    Za(a.v, b)
  }

  function Mu(a, b) {
    this.j = a;
    this.g = b
  };

  function Ru(a) {
    this.g = a
  };

  function Su(a, b) {
    this.g = Lb(a) + (b ? ",i" : "")
  };

  function Tu(a, b, c, d, e, f) {
    this.A = a;
    this.g = e ? om("//" + e, b) : b;
    this.v = c;
    this.o = d;
    this.j = f
  }
  Tu.prototype.getType = n("A");

  function Uu(a) {
    return (new Em(om(a.g, "/"))).toString()
  };
  var Pu = ["/create"];

  function Vu(a, b) {
    a = void 0 === a ? R() : a;
    var c = new Ku;
    Lu(c, "/offline/edit", 2);
    Lu(c, "/offline/view", 1);
    Lu(c, "/offline/comment", 4);
    Lu(c, "/offline/viewcomments", 5);
    Nu(c);
    Ou(c);
    c = new Ru(c);
    return new Tu("kix", T(a, "kixOfflineUrl"), c, S(a, "udurls"), b)
  }

  function Wu(a, b) {
    a = void 0 === a ? R() : a;
    var c = new Ku;
    Lu(c, "/offline/edit", 2);
    Lu(c, "/offline/view", 1);
    Lu(c, "/offline/comment", 4);
    Lu(c, "/offline/viewcomments", 5);
    Ou(c);
    c = new Ru(c);
    return new Tu("drawing", T(a, "drawingsOfflineUrl"), c, S(a, "udurls"), b)
  }

  function Xu(a, b) {
    a = void 0 === a ? R() : a;
    var c = new Ku;
    Lu(c, "/offline/edit", 2);
    Lu(c, "/offline/view", 1);
    Lu(c, "/offline/comment", 4);
    Lu(c, "/offline/viewcomments", 5);
    Ou(c);
    Nu(c);
    Lu(new Ku, "/offline/localpresent", 1);
    c = new Ru(c);
    return new Tu("punch", T(a, "punchOfflineUrl"), c, S(a, "udurls"), b)
  }

  function Yu(a, b) {
    a = void 0 === a ? R() : a;
    var c = new Ku;
    Lu(c, "/offline/edit", 2);
    Lu(c, "/offline/view", 1);
    Lu(c, "/offline/comment", 4);
    Lu(c, "/offline/viewcomments", 5);
    Ou(c);
    Nu(c);
    Qu(c);
    c = new Ru(c);
    return new Tu("ritz", T(a, "ritzOfflineUrl"), c, S(a, "udurls"), b, function(d) {
      return {
        dl: d.docLocale
      }
    })
  };

  function Zu(a) {
    D(this, a, 0, -1, null)
  }
  y(Zu, C);
  Zu.prototype.Fb = function() {
    return E(this, 1)
  };

  function $u(a) {
    D(this, a, 0, -1, null)
  }
  y($u, C);
  $u.prototype.getType = function() {
    return E(this, 1)
  };

  function Du(a) {
    D(this, a, 0, -1, null)
  }
  y(Du, C);
  Du.prototype.Ga = function() {
    return G(this, Zu, 3)
  };

  function av(a) {
    var b = R();
    switch (a) {
      case "kix":
        return S(b, "docs-sw-eksw");
      case "ritz":
        return S(b, "docs-sw-ersw");
      case "punch":
      case "drawing":
        return S(b, "docs-sw-epsw");
      default:
        return !1
    }
  };

  function bv(a, b) {
    I.call(this);
    this.o = a;
    this.g = b;
    this.j = t.navigator.serviceWorker;
    this.v = new Fd(this);
    J(this, this.v)
  }
  r(bv, I);

  function cv(a) {
    var b = [];
    av("kix") && b.push(Uu(Vu()));
    av("ritz") && b.push(Uu(Yu()));
    av("punch") && b.push(Uu(Xu()));
    av("drawing") && b.push(Uu(Wu()));
    return b.map(function(c) {
      return new bv(a, c)
    })
  }

  function dv(a) {
    return M().then(function() {
      return a.j.getRegistration(a.g)
    })
  }

  function ev(a) {
    return dv(a).then(function(b) {
      return b ? b.unregister() : !1
    })
  }
  bv.prototype.register = function(a) {
    var b = this;
    return kf(M(this.j.register(a, {
      scope: this.g,
      updateViaCache: "all"
    })), function(c) {
      X(b.o, Wc(c));
      throw c;
    })
  };

  function fv(a) {
    return dv(a).then(function(b) {
      return b ? (b = b.active || b.waiting || b.installing) ? kf(gv(b, hv(2), 15E3).then(aa(!0)), function(c) {
        X(a.o, Error("Failed to reach service worker"), {
          originalErrorMessage: c.message
        });
        return !1
      }) : !1 : !1
    })
  }

  function iv(a, b, c) {
    return jv(a, b, c).then(m())
  }

  function jv(a, b, c) {
    return dv(a).then(function(d) {
      if (!d) throw Error("Cannot send message to service worker without registration");
      (new kk).R(b);
      d = d.active || d.waiting || d.installing;
      if (!d) throw Error("No active, waiting or installing service worker, cannot send message of type " + b.getType());
      return gv(d, b, c)
    })
  }

  function gv(a, b, c) {
    return Eu(new Cu(new Ju(a, c)), b).then(function(d) {
      return d.message
    }).then(function(d) {
      var e = d.Ga();
      if (e) throw d = {}, Yc(Error(e.Fb()), (d.serviceworker_errorFromSWMessage = "true", d));
      return d
    })
  }

  function hv(a) {
    var b = new $u;
    return F(b, 1, a)
  };
  var kv = ["installing", "installed", "activating", "activated"];

  function lv(a, b) {
    if ("redundant" == b) throw Error("REDUNDANT state does not have an order, cannot check that a service worker is at least REDUNDANT");
    a = kv.indexOf(a.state);
    return 0 <= a && a >= kv.indexOf(b)
  };

  function mv(a, b) {
    I.call(this);
    this.j = a;
    this.o = b;
    this.g = new Fd(this);
    J(this, this.g)
  }
  r(mv, I);

  function nv(a, b) {
    return hf(ov(a, b).then(function(c) {
      return c ? pv(a, c).then(aa(!0)) : !1
    }), function() {
      return a.g.dispose()
    })
  }

  function ov(a, b) {
    return a.j.register(b).then(function(c) {
      var d = c.installing;
      return d ? d : qv(a, c)
    })
  }

  function qv(a, b) {
    return bf([Rk(15E3, null), new L(function(c, d) {
      Id(a.g, b, "updatefound", function() {
        var e = b.installing;
        e ? c(e) : d(Error("Update found but there was no installing service worker."))
      });
      b.update()
    })])
  }

  function pv(a, b) {
    return rv(a, b, "installed", 27E4).then(function(c) {
      if (!c) throw Error("Service worker did not finish installing before timeout.");
    }).then(function() {
      return rv(a, b, "activated", 5E3)
    }).then(function(c) {
      c || X(a.o, Error("Service worker did not activate within specified timeout."), {
        serviceworker_scope: a.j.g
      })
    })
  }

  function rv(a, b, c, d) {
    var e;
    return bf([Rk(d), new L(function(f, g) {
      e = function() {
        lv(b, "installing") ? lv(b, c) && f() : g(Yc(Error("Update failed or service worker replaced by newer version while updating."), {
          serviceworker_state_expected: c,
          serviceworker_state_current: b.state
        }))
      };
      e();
      Hd(a.g, b, "statechange", e)
    })]).then(function() {
      Kd(a.g, b, "statechange", e);
      return lv(b, c)
    })
  };

  function sv(a) {
    this.o = a;
    this.g = {};
    this.j = Zb
  }

  function tv(a) {
    var b = R();
    a = new Su(ni(a, "locale"), !0 === oi(a, "internal"));
    a = new sv(a, T(b, "drive-host"), T(b, "drcuap"));
    var c = b;
    c = void 0 === c ? R() : c;
    b = [];
    b.push(Vu(c, void 0));
    b.push(Wu(c, void 0));
    b.push(Xu(c, void 0));
    b.push(Yu(c, void 0));
    for (c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.getType();
      if (a.g[e]) throw Error("Already have an adapter installed for type " + e);
      a.g[e] = d
    }
    return a
  }

  function uv(a, b) {
    a = a.g[b];
    if (!a) throw Error("No offline URL adapter for documents of type " + b);
    return a
  };

  function vv(a, b) {
    this.g = a;
    this.o = b;
    this.j = t.caches
  }
  vv.prototype.update = function() {
    var a = this;
    return kf(wv(this).then(function(b) {
      for (var c = [], d = {}, e = 0; e < b.length; d = {
          xa: d.xa
        }, e++) {
        d.xa = b[e];
        var f = d.xa.o ? xv(a, d.xa) : yv(a, d.xa);
        f = kf(f, function(g) {
          return function(h) {
            throw Yc(h, {
              serviceworker_scope: g.xa.g
            });
          }
        }(d));
        c.push(f)
      }
      return df(c).then(function() {
        return cf(c)
      })
    }).then(m()), function(b) {
      throw Yc(b, {
        serviceworker_updater_method: "update"
      });
    })
  };
  vv.prototype.w = function() {
    var a = this;
    return kf(wv(this).then(function(b) {
      b = b.map(function(c) {
        return yv(a, c)
      });
      return cf(b)
    }).then(function() {
      return zv(a)
    }).then(m()), function(b) {
      throw Yc(b, {
        serviceworker_updater_method: "deleteAll"
      });
    })
  };

  function zv(a) {
    return M(a.j.keys()).then(function(b) {
      return cf(b.map(function(c) {
        return a.j.delete(c)
      }))
    })
  }

  function wv(a) {
    var b = new L(function(d, e) {
        Do(a.o.j.ob(), d, e)
      }),
      c = am(Qj(a.o.j.w));
    return cf([b, c]).then(function(d) {
      var e = d[0],
        f = d[1],
        g = tv(f);
      return e.map(function(h) {
        var k = h.na();
        h = av(k);
        var l = S(R(), "docs-sw-eswrfi");
        var p = f.H();
        var u = uv(g, k);
        u = new Em(om(u.g, "/offline/serviceworker.js"));
        Um(u, "ouid", Lb(p));
        hn() && Um(u, "Debug", "true");
        p = u.toString();
        if (l) {
          l = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36);
          u = p.search(lm);
          for (var z = 0, v, K = []; 0 <= (v = km(p, z, "zx", u));) K.push(p.substring(z, v)), z = Math.min(p.indexOf("&", v) + 1 || u, u);
          K.push(p.substr(z));
          p = K.join("").replace(nm, "$1");
          p = jm(p, "zx", l)
        }
        k = Uu(uv(g, k));
        return new Av(a.g, p, k, h, !0)
      }).concat(Bv(a, f))
    })
  }

  function Bv(a, b) {
    var c = R(),
      d = [];
    d.push(Cv(a, b, S(c, "docs-sw-eocsw")));
    return d
  }

  function Cv(a, b, c) {
    b = Um(new Em("/offline/serviceworker.js"), "ouid", b.H()).toString();
    return new Av(a.g, b, "/offline/", c, !1)
  }

  function xv(a, b) {
    var c = new bv(b.j, b.g);
    return nv(new mv(c, a.g), b.A).then(function() {
      if (S(R(), "docs-sw-eswrfi") || !b.v) return iv(c, hv(7), 5E3);
      var d = x();
      return fv(c).then(function(e) {
        var f = x() - d;
        15E3 < f && X(a.g, Error("Heartbeat to service worker exceeded timeout"), {
          scopeUrl: b.g,
          elapsedTime: f,
          reachable: e
        });
        if (e) return iv(c, hv(0), 3E5)
      })
    }).then(function() {
      c.dispose()
    })
  }

  function yv(a, b) {
    var c = new bv(b.j, b.g);
    return kf(fv(c).then(function(d) {
      if (d) return iv(c, hv(1), 18E4).then(m())
    }), function(d) {
      X(a.g, Wc(d))
    }).then(function() {
      return ev(c)
    }).then(function() {
      return c.dispose()
    })
  }

  function Av(a, b, c, d, e) {
    this.j = a;
    this.A = b;
    this.g = c;
    this.o = d;
    this.v = e
  };

  function Dv(a, b, c, d, e, f, g) {
    this.B = a;
    this.g = b;
    this.v = c;
    this.A = d;
    this.o = e;
    this.L = g;
    this.j = f
  }

  function Ev(a) {
    Wk(a.v);
    Vt(new Ut(a.g));
    t.localStorage.removeItem("docs-lspa");
    nn();
    t.localStorage.removeItem("docs-ldb");
    var b = new vu,
      c = [kf(b.w(), function(d) {
        Nq(a.g, Error("Failed to completely delete appcache when disabling offline: " + d))
      }), Nt(a.A), Fv(a), a.L.w()];
    return kf(hf(df(c).then(function() {
      return cf(c)
    }).then(a.w.bind(a)).then(a.D.bind(a)), function() {
      uc(b)
    }), function(d) {
      Nq(a.g, Error("Failed to completely disable offline: " + d));
      throw d;
    })
  }
  Dv.prototype.D = function() {
    var a = this;
    if (this.o) {
      var b = new yc,
        c = new Oc;
      oc(b, Pc, c);
      Rd(this.o, b)
    }
    b = this.j.o(81001);
    this.j.v(b);
    return this.j.w().then(function() {
      Wk(a.v)
    })
  };

  function Fv(a) {
    var b = new qu(a.g);
    return hf((new L(function(c, d) {
      ru(b, c, d)
    })).then(function() {
      return new L(function(c) {
        uu(b, c)
      })
    }, m()), function() {
      uc(b)
    })
  }
  Dv.prototype.w = function() {
    var a = this;
    on("");
    return new L(function(b, c) {
      Zn(a.B.j.qa(), b, c)
    })
  };

  function Gv(a) {
    this.g = a
  }

  function Hv(a, b) {
    var c = (c = a.g.getItem("optInLog")) ? JSON.parse(c) : [];
    c.push({
      email: b,
      timestamp: x()
    });
    a.g.setItem("optInLog", (new kk).R(c))
  }

  function Iv() {
    var a = t.localStorage;
    if (!a) throw Error("Local storage not available");
    return new Gv(a)
  };

  function Jv(a) {
    switch (a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      case 5:
        return 5;
      case 6:
        return 6;
      case 7:
        return 8;
      case 8:
        return 7;
      case 9:
        return 9;
      case 10:
        return 10;
      default:
        return 0
    }
  };

  function Kv(a, b, c, d) {
    this.v = a;
    this.g = b;
    this.o = c;
    this.j = d
  }

  function Lv(a) {
    return cp(a.v).then(function(b) {
      return Mv(b).then(function() {
        var c = Ws();
        return Nv(a, b, c)
      })
    }).then(function(b) {
      return Ov(a, b)
    })
  }

  function Mv(a) {
    return (new L(function(b, c) {
      Rj(a.j.w, b, c)
    })).then(function(b) {
      if (b && b.length) throw Error("Aborting opt-in because there is another user in LocalStorage.");
    })
  }

  function Nv(a, b, c) {
    var d = new Kj(E(c, 1), !0);
    Lj(d, E(c, 2));
    Mj(d, E(c, 3));
    Nj(d, !!hc(c, 4));
    Oj(d, !!hc(c, 6));
    W(d, "optInReasons", a.g);
    return (new L(function(e, f) {
      b.write([d], e, f)
    })).then(function() {
      return d
    })
  }

  function Ov(a, b) {
    Hv(Iv(), ni(b, "emailAddress") || "");
    t.localStorage && (rn(!1), on(b.H()));
    b = new yc;
    var c = new Qc;
    oc(b, Rc, c);
    Rd(a.o, b);
    b = new Sk;
    var d = new Ys(b);
    return Tk(b).then(function() {
      return new L(function(e, f) {
        Zs(d, e, f)
      })
    }).then(function(e) {
      var f = $s(),
        g = new Rl;
      a.g[0] && F(g, 1, Jv(a.g[0]));
      F(g, 10, e);
      F(g, 11, f);
      e = a.j.o(81E3);
      f = rs(e);
      H(f, 34, g);
      a.j.v(e)
    })
  };

  function Pv(a, b, c, d, e, f, g, h, k, l) {
    I.call(this);
    this.g = f;
    var p = new MessageChannel;
    p.port1.onmessage = ll(this.g, this.Cc, this);
    tc(this, p.port1.close, p.port1);
    this.G = l || Oa || (Oa = new De);
    this.N = h;
    this.K = k;
    h = this.G.g;
    (h.parentWindow || h.defaultView).parent.postMessage(void 0, g, [p.port2]);
    this.U = b;
    this.I = a;
    a.connect();
    this.o = c;
    this.j = new Sk;
    this.J = new Wt(this.o, f);
    a = new Ys(this.j);
    this.O = new Kt(this.j);
    this.B = new du(this.J, a);
    this.w = {};
    this.C = {};
    Qv(this, 1, this.tc.bind(this), [1, 2, 3]);
    Qv(this, 5, this.Dc.bind(this),
      [1, 2]);
    Qv(this, 2, this.sc.bind(this), [1, 2, 3]);
    Qv(this, 3, this.rc.bind(this), [1, 2, 3]);
    Qv(this, 4, this.xc.bind(this), [1, 2, 3]);
    Qv(this, 6, this.oc.bind(this), [1, 2]);
    Qv(this, 8, this.yc.bind(this), [1, 2]);
    Qv(this, 7, this.jc.bind(this), [1, 2]);
    Qv(this, 9, this.Bc.bind(this), [1, 2, 3]);
    Qv(this, 10, this.wc.bind(this), [1, 2, 3]);
    Qv(this, 11, this.pc.bind(this), [1, 2, 3]);
    Qv(this, 12, this.zc.bind(this), [1, 2]);
    Qv(this, 13, this.vc.bind(this), [1, 2, 3]);
    Qv(this, 14, this.Fc.bind(this), [3]);
    this.v = d;
    k && (null == E(e.g, 2) && (d = e.g, a = new hr,
      H(d, 2, a)), e = G(e.g, hr, 2), E(e, 1), F(e, 1, k))
  }
  r(Pv, I);
  q = Pv.prototype;
  q.Cc = function(a) {
    var b = this;
    if (a.data && a.ports && a.ports.length && a.ports[0]) {
      var c = a.ports[0];
      try {
        var d = new ie(a.data)
      } catch (f) {
        d = Error("Failed to parse iframe request.");
        Nq(this.g, d, {
          requestData: a.data
        });
        c.postMessage(Rv(5, d.message).data);
        return
      }
      var e = {
        iframeRequestType: String(d.getType())
      };
      this.w[d.getType()].includes(this.N) ? (0, this.C[d.getType()])(d).then(function(f) {
        c.postMessage(f.data, f.ports)
      }, function(f) {
        f instanceof Sv || (f instanceof Error ? (Nq(b.g, f, e), f = Rv(3, f.message)) : (f = Wj(f), Nq(b.g,
          f, e), f = Rv(3, f.message)));
        c.postMessage(f.data)
      }) : (a = Error("Message type " + d.getType() + " is not supported"), Nq(this.g, a), c.postMessage(Rv(5, a.message).data))
    }
  };

  function Tv(a) {
    return new L(function(b, c) {
      ep(a.o).then(function(d) {
        d || c(Rv(1, "User not found in the database."));
        b(d)
      }, function(d) {
        d = Wj(d);
        Nq(a.g, d);
        c(Rv(3, d.message))
      })
    })
  }

  function Rv(a, b) {
    var c = new re,
      d = new be;
    a = F(d, 1, a);
    b = F(a, 2, b);
    H(c, 2, b);
    return new Sv(c)
  }
  q.tc = function() {
    return M(new Sv(null, Qd(this.U)))
  };
  q.sc = function(a) {
    var b = E(G(a, Td, 2), 1),
      c = se(new re, a.getType()),
      d = new Vd;
    H(c, 3, d);
    return ep(this.o).then(function(e) {
      return new L(function(f, g) {
        e ? mo(e.g.j.v, b, function(h) {
          var k = tv(e.j);
          h = Uv(h, k, e.j);
          Xd(d, h);
          f(new Sv(c))
        }, g) : (Xd(d, []), f(new Sv(c)))
      })
    })
  };
  q.rc = function(a) {
    var b = se(new re, a.getType()),
      c = new Vd;
    H(b, 3, c);
    return ep(this.o).then(function(d) {
      return new L(function(e, f) {
        d ? lo(d.g.j.v, function(g) {
          var h = tv(d.j);
          g = Uv(g, h, d.j);
          Xd(c, g);
          e(new Sv(b))
        }, f) : (Xd(c, []), e(new Sv(b)))
      })
    })
  };
  q.xc = function(a) {
    var b = this;
    a = se(new re, a.getType());
    var c = new oe;
    H(a, 4, c);
    var d = new Sv(a),
      e = {},
      f = Qk(function() {
        X(b.g, Error("Reporting context due to timeout of offline status request."), e)
      }, 3E4);
    return hf(al(this.j).then(function() {
      e.getOfflineStatus_discoveredExtension = "true";
      return b.J.get()
    }).then(function(g) {
      e.getOfflineStatus_obtainedOfflineStatus = "true";
      var h = new le;
      H(c, 1, h);
      var k = g.Bb;
      F(h, 1, k);
      me(h, g.Eb());
      ne(h, g.Ua());
      F(h, 5, g.Nc);
      1 == k && pn(b.g);
      if (!(g = 3 != k)) try {
        g = !!t.localStorage.getItem("docs-urop")
      } catch (l) {
        g = !0
      }
      return g ? (e.getOfflineStatus_autoEnableReasonNotRequired = "true", d) : b.O.get().then(function(l) {
        e.getOfflineStatus_obtainedAutoEnableReason = "true";
        l && F(h, 3, l);
        return d
      }, function(l) {
        X(b.g, Error("Failed to obtain auto-enable reason: " + l.message));
        return d
      })
    }), function() {
      t.clearTimeout(f)
    })
  };
  q.wc = function(a) {
    var b = this;
    a = se(new re, a.getType());
    var c = new ke;
    H(a, 7, c);
    var d = new Sv(a);
    return al(this.j).then(function() {
      return eu(b.B)
    }).then(function(e) {
      H(c, 1, e);
      return d
    })
  };
  q.zc = function(a) {
    var b = cv(this.g);
    return df(b.map(function(c) {
      return iv(c, hv(2), 15E3)
    })).then(function() {
      var c = se(new re, a.getType());
      return new Sv(c)
    })
  };
  q.oc = function(a) {
    var b = this,
      c = E(G(a, Yd, 4), 1);
    if (2 == c) {
      var d = {};
      d.unsavedChanges = Zl(this.g);
      X(this.g, Error("IDB corruption detected, running opt-in flow."), d);
      on("")
    }
    a = se(new re, a.getType());
    var e = new ae;
    H(a, 5, e);
    var f = new Sv(a);
    return al(this.j).then(function() {
      return eu(b.B)
    }).then(function(g) {
      H(e, 1, g);
      if (1 == E(g, 1)) return Lv(new Kv(b.o, [c], b.I, b.v))
    }).then(function() {
      if (2 == c) {
        a: {
          try {
            var g;
            var h = (g = t.localStorage.getItem("docs-ldb")) ? nc(ue, g) : null
          } catch (k) {
            X(b.g, Error("Failed to read backup information from local storage: " +
              k.message));
            h = M();
            break a
          }
          h = h ? Vv(b, jc(h, de, 1), !0).then() : M()
        }
        return h
      }
    }).then(function() {
      return f
    })
  };
  q.vc = function(a) {
    a = se(new re, a.getType());
    var b = new ce;
    H(a, 9, b);
    var c = dr();
    F(b, 1, c);
    return M(new Sv(a))
  };
  q.Fc = function(a) {
    var b = this;
    if (null == this.K) return Ze(Rv(3, "Iframe cannot handle request if source app is not available."));
    var c = G(a, ge, 5),
      d = this.K,
      e = E(c, 1),
      f;
    return Tv(this).then(function(g) {
      f = g.g;
      Wv(b, e.length);
      return new L(function(h, k) {
        Io(f.j.Kb(), d, h, k)
      })
    }).then(function(g) {
      g || (g = new Dj(!0, d));
      Ej(g, $a(e, 0, 500));
      W(g, "lastUpdatedTimestamp", x());
      return new L(function(h, k) {
        f.write([g], h, k)
      })
    }).then(function() {
      var g = se(new re, a.getType());
      return new Sv(g)
    })
  };
  q.Dc = function(a) {
    var b = this,
      c = G(a, ee, 3),
      d = jc(c, de, 1),
      e = hc(c, 2),
      f = hc(c, 3) || !1;
    return al(this.j).then(function() {
      if (!rk()) return Ze(Rv(4, "Extension missing when trying to pin document."))
    }).then(function() {
      return Vv(b, d, e)
    }).then(function(g) {
      if (!g.length) return null;
      g = Xk(b.j, g);
      return f ? g : null
    }).then(function(g) {
      var h = se(new re, a.getType()),
        k = new qe;
      g && H(k, 1, g);
      H(h, 8, k);
      return new Sv(h)
    })
  };

  function Vv(a, b, c) {
    var d = b.map(function(g) {
        return g.H()
      }),
      e = [],
      f;
    return Tv(a).then(function(g) {
      f = g.g;
      return new L(function(h, k) {
        mo(f.j.v, d, h, k)
      })
    }).then(function(g) {
      var h = {};
      g.forEach(function(z) {
        h[z.H()] = z
      });
      var k = [];
      for (g = 0; g < b.length; g++) {
        var l = b[g],
          p = l.H(),
          u = l.getType();
        if ((l = h[l.H()]) || c) c && (l ? !0 === oi(l, "hpmdo") && e.push(p) : (l = f.j.v.createDocument(p, u, 2), pi(l, "hpmdo", !0), e.push(p))), l.getType(), l.La(c), k.push(l)
      }
      return new L(function(z, v) {
        f.write(k, z, v)
      })
    }).then(function() {
      return e
    })
  }
  q.yc = function(a) {
    a = se(new re, a.getType());
    var b = new je;
    H(a, 6, b);
    var c = new Sv(a);
    return this.o.get().then(function(d) {
      var e = d.j.v;
      return (new L(function(f, g) {
        jo(e, f, g)
      })).then(function(f) {
        if (f.length) F(b, 1, !0);
        else return (new L(function(g, h) {
          oo(e, g, h)
        })).then(function(g) {
          F(b, 1, !!g.length)
        })
      })
    }).then(function() {
      return c
    })
  };
  q.jc = function(a) {
    var b = this;
    a = se(new re, a.getType());
    var c = new Sv(a);
    return al(this.j).then(function() {
      return cp(b.o)
    }).then(function(d) {
      var e = new Mt(b.G);
      d = new Dv(d, b.g, b.j, e, b.I, b.v, new vv(b.g, d));
      rn(!0);
      return Ev(d)
    }).then(function() {
      return c
    })
  };
  q.Bc = function(a) {
    var b = this;
    a = se(new re, a.getType());
    var c = new Sv(a);
    return al(this.j).then(function() {
      if (rk()) return Tk(b.j)
    }).then(function() {
      return c
    })
  };
  q.pc = function(a) {
    var b = this;
    a = se(new re, a.getType());
    var c = new Sv(a);
    return al(this.j).then(function() {
      if (rk()) return Vk(b.j)
    }).then(function() {
      return c
    })
  };

  function Uv(a, b, c) {
    for (var d = [], e = 0; e < a.length; e++) {
      var f = a[e];
      "trix" == f.getType() || "syncstats" == f.getType() || !0 !== oi(f, "pendingCreation") && d.push(Xv(f, b, c))
    }
    return d
  }

  function Xv(a, b, c) {
    var d = new Sd;
    var e = a.H();
    d = F(d, 1, e);
    d = F(d, 2, ni(a, "title"));
    e = a.getType();
    d = F(d, 3, e);
    d = F(d, 4, li(a, "lastModifiedServerTimestamp"));
    d = F(d, 5, li(a, "lastModifiedClientTimestamp"));
    a: if (e = ki(a, "acjf"), !e || ah(e)) {
      var f = ki(a, "acl"),
        g = e = 0;
      if (null != f)
        for (h in f) e = f[h], g++;
      var h = wi(1 == g ? e : 0)
    } else if (1 < Object.keys(e).length) h = new Yh(null);
    else {
      for (f in e) {
        h = nc(Yh, e[f]);
        break a
      }
      a = new fg;
      var k = Lf("Code should never reach here based on the code above.") ? "Code should never reach here based on the code above." :
        null;
      Df(a);
      a.v = k;
      a.A = "Code should never reach here based on the code above.";
      Ef(a);
      a.j(Error(a));
      throw a.g;
    }
    h = yi(h);
    if (f = 0 != h) {
      e = c.H();
      g = vi(a, "acjf", e);
      null != g ? e = nc(Yh, g) : (e = vi(a, "acl", e), e = wi(null != e ? kg(e) : 0));
      g = yi(e);
      b.j || (g = 1);
      e = Fi(a);
      var l = uv(b, e.getType()),
        p = a.H(),
        u = l.g.match(bm),
        z = u[5];
      p && l.o && (z += "/d/" + p);
      z += "/edit";
      if (p && !l.o) {
        var v = lb("id", p);
        v = gm(v)
      }
      l = u[1];
      p = u[2];
      var K = u[3];
      u = u[4];
      var N = "";
      l && (N += l + ":");
      K && (N += "//", p && (N += p + "@"), N += K, u && (N += ":" + u));
      z && (N += z);
      v && (N += "?" + v);
      v = N;
      e = uv(b, e.getType());
      b = b.o;
      c = c.H();
      c: {
        z = e.v.g;g = Pa(xi, g);
        if (-1 == g) throw Error("Requested access level is invalid");
        for (; 0 <= g; g--)
          for (u = 0; u < z.g.length; u++)
            if (z.g[u].g == xi[g]) {
              g = z.g[u];
              break c
            } g = null
      }
      if (!g) throw Error("No offline action for given access level or less.");
      l = g.j;
      u = Fi(a);
      g = qi(a);
      z = u.j;
      u = u.g;
      l = om(e.g, l);
      p = [];
      c && p.push("ouid=" + Lb(c));
      p.push("uc=" + b.g);
      z && p.push("jobset=" + z);
      u && p.push("ftrack=1");
      g && (c = g[28]) && p.push("docosJobset=" + c);
      c = l += "?" + p.join("&");
      b = {};
      g = window;
      "true" != mm(g.location.href, "Debug") && "true" !=
        mm(g.location.href, "debug") || (b.Debug = "true");
      b.id = a.H();
      (g = (g = qi(a)) ? 0 == g.length ? "c" : "d" : null) && (b.cm = g);
      b["new"] = String(!0 === oi(a, "inc"));
      b.ouri = v;
      (v = ji(a, "startupHints")) && e.j && kb(b, e.j(v));
      v = "";
      for (k in b) 0 < v.length && (v += "&"), v += Lb(k) + "=" + Lb(b[k]);
      k = Lb(v);
      b = c.indexOf("#");
      F(d, 6, (0 > b ? c : c.substr(0, b)) + (k ? "#" + k : ""))
    }
    d.La(!0 === oi(a, "ip"));
    F(d, 8, f && !0 !== oi(a, "hpmdo") && null != ni(a, "title"));
    F(d, 9, h);
    F(d, 10, !0 !== oi(a, "inc") || null != li(a, "lastWarmStartedTimestamp"));
    F(d, 11, li(a, "lsst"));
    F(d, 12, li(a, "lsft"));
    F(d, 13, oi(a, "lss"));
    F(d, 14, 0 == mi(a, "pendingQueueState"));
    return d
  }

  function Qv(a, b, c, d) {
    a.C[b] = c;
    a.w[b] = d
  }

  function Wv(a, b) {
    var c = T(R(), "docs-offline-lsuid");
    if (c) {
      for (var d = 0, e = 0; e < c.length; ++e) d = 31 * d + c.charCodeAt(e) >>> 0;
      c = 5 >= d % 100 + 1
    } else c = !1;
    c && (c = new Tl, b = F(c, 1, b), c = new Rl, b = H(c, 25, b), c = a.v.o(81010), d = rs(c), H(d, 34, b), a.v.v(c))
  }

  function Sv(a, b) {
    this.data = a ? a.ia() : void 0;
    this.ports = b ? [b] : void 0
  }

  function Yv() {
    var a = new Lq;
    a.v = !1;
    a.o = !0;
    a.g = new cr;
    a.j = void 0 === b ? !1 : b;
    var b = new Kq(a);
    a = T(R(), "buildLabel");
    /^[\s\xa0]*$/.test(a) || (b.j["build-label"] = a);
    b.j.locale = "en";
    a = R();
    b.j.sessionTypeName = "offline-iframe-api";
    b.j.sessionType = (117).toString();
    var c = t.applicationCache;
    c && (b.j.appCacheStatusOnLoad = c.status);
    lh(a, "docs-offline-ecasq") && (a = S(a, "docs-offline-ecasq"), b.j.enableCelloAutoSync = a.toString());
    b.j.serviceWorkerControlled = Aa("navigator.serviceWorker.controller") ? "true" : "false";
    b.j.docsExtensionUsed =
      String(rk());
    b.j.docsExtensionFeaturesVersion = String(sk());
    b.j.docsOfflineIframeApi = "true";
    a = new fr;
    c = new Pd(a, dr());
    var d = new ap(b, c),
      e = new ir,
      f = new Us;
    f.g = d;
    f.j = e;
    if (f.g) var g = new ns(f.g);
    else throw Error("Must set either a LocalStore or LocalStoreSupplier");
    var h = new Ms;
    f.j && (f = new ds(f.j), es.H(), h.o[es.H()] = f, h.g && f.g(h.g));
    f = Tn();
    var k = g;
    g = bs();
    var l = void 0 == window.isSecureContext ? !0 : window.isSecureContext;
    k = new js(new $r(g), Zb && (t.indexedDB || t.webkitIndexedDB) && (er() || t.SharedWorker) && l ? k : new ls);
    l = new is(g);
    g = new Ts;
    g.A = k;
    g.v = l;
    g.o = !0;
    k = g.g;
    E(k.g, 1);
    F(k.g, 1, f);
    f = g.g;
    E(f.g, 6);
    F(f.g, 6, 117);
    g.j = h;
    Os(g.g);
    h = new Qs;
    h.j = g.g;
    null != g.j && (h.g = g.j);
    null == h.g && (h.g = new Ms);
    f = h.g;
    k = new Ps;
    xs.H();
    f.j[xs.H()] = k;
    f = h.g;
    k = new Ds;
    us.H();
    f.j[us.H()] = k;
    f = h.g;
    k = h.j;
    if (null == E(Ss(k), 1)) {
      l = Ss(k);
      var p = new Er;
      H(l, 1, p)
    }
    k = G(Ss(k), Er, 1);
    f.g = k;
    k = db(f.o);
    for (l = 0; l < k.length; l++) k[l].g(f.g);
    h = new Ns(h.j, h.g);
    g = new Js(h, g.A, g.v, g.o, null);
    g = new zs(h, g);
    h = (new hs(!1)).get();
    f = T(R(), "jobset");
    F(h, 9, Vs(f));
    f = g.j.j;
    k = 1E3 * x();
    E(f.g, 2);
    F(f.g, 2, k);
    f.o = h;
    g.B();
    try {
      var u = (new Em(t.location.href)).g.get("sa");
      if (u = u ? u : null) try {
        var z = parseInt(u, 10);
        var v = isNaN(z) ? null : z
      } catch (Rg) {
        v = null
      } else v = null;
      var K = v ? v : null;
      if (null != K) {
        b: switch (K) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            var N = 1;
            break b;
          case 9:
            N = 2;
            break b;
          case 10:
            N = 3;
            break b;
          default:
            throw Error("No mapped client domain for source app " + K + ".");
        }
        var Qa = N
      }
      else {
        var Nb = Error("Missing source app.");
        var Ta = void 0 === Ta ? {} : Ta;
        5 >= Math.floor(100 * Math.random()) + 1 &&
          (Ta.sampling_samplePercentage = "5", Ta.sampling_sampledBy = "random", X(b, Nb, Ta, !1));
        var rc, pk, qr = t.location.href,
          rr = qr.indexOf("#");
        if (rc = (pk = 0 > rr ? null : qr.substr(rr + 1)) ? decodeURIComponent(pk) : pk) {
          var sr = rc.split("&");
          N = {};
          for (Nb = 0; Nb < sr.length; ++Nb) {
            var Pe = sr[Nb].split("=");
            2 == Pe.length && 0 < Pe[0].length && 0 < Pe[1].length && (N[Mb(Pe[0])] = Mb(Pe[1]))
          }
          var tr = N
        } else tr = {};
        var ur = tr.cd;
        if (ur) {
          var vr = parseInt(ur, 10);
          var ld = isNaN(vr) ? null : vr
        } else ld = null;
        if (null == ld) {
          try {
            var wr = t.parent.location;
            ld = Gm(Fm(new Em,
              wr.protocol), wr.origin).toString() ? 1 : 2
          } catch (Rg) {
            ld = 2
          }
          Nq(b, Error("Client domain set without source app or client domain parameters."), {
            clientDomain: ld
          })
        }
        Qa = ld
      }
      a: {
        var Qe = new Em(t.location.href);
        switch (Qa) {
          case 1:
            var Sg = Hm(Gm(Fm(new Em, Qe.j), Qe.o), Qe.v).toString();
            break a;
          case 2:
            var bw = T(R(), "drive-host");
            Sg = Fm(new Em("//" + bw), Qe.j).toString();
            break a;
          case 3:
            Sg = Gm(Fm(new Em, Qe.j), "mail.google.com").toString();
            break a;
          default:
            throw Error("Unknown client domain " + Qa);
        }
      }
      b.j.parentOrigin = Sg;
      b.j.sourceApp =
        K ? K.toString() : "null";
      var Tg = new Pv(c, a, d, g, e, b, Sg, Qa, K);
      J(Tg, b);
      J(Tg, c);
      J(Tg, a);
      J(Tg, d)
    } catch (Rg) {
      throw Nq(b, Wj(Rg)), Rg;
    }
  }
  var Zv = ["_loadDocsOfflineApiFrame"],
    $v = t;
  Zv[0] in $v || "undefined" == typeof $v.execScript || $v.execScript("var " + Zv[0]);
  for (var aw; Zv.length && (aw = Zv.shift());) Zv.length || void 0 === Yv ? $v[aw] && $v[aw] !== Object.prototype[aw] ? $v = $v[aw] : $v = $v[aw] = {} : $v[aw] = Yv;
}).call(this);