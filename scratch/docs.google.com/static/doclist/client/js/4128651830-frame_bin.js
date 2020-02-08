(function() {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function aa() {
    return function(a) {
      return a
    }
  }

  function h() {
    return function() {}
  }

  function ba(a) {
    return function(b) {
      this[a] = b
    }
  }

  function l(a) {
    return function() {
      return this[a]
    }
  }

  function ca(a) {
    return function() {
      return a
    }
  }
  var m;

  function da(a) {
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
  var ea = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
  };

  function ha(a) {
    a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c
    }
    return globalThis
  }
  var ia = ha(this);

  function ja() {
    ja = h();
    ia.Symbol || (ia.Symbol = ka)
  }

  function la(a, b) {
    this.g = a;
    ea(this, "description", {
      configurable: !0,
      writable: !0,
      value: b
    })
  }
  la.prototype.toString = l("g");
  var ka = function() {
    function a(c) {
      if (this instanceof a) throw new TypeError("Symbol is not a constructor");
      return new la("jscomp_symbol_" + (c || "") + "_" + b++, c)
    }
    var b = 0;
    return a
  }();

  function ma() {
    ja();
    var a = ia.Symbol.iterator;
    a || (a = ia.Symbol.iterator = ia.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && ea(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function() {
        return na(da(this))
      }
    });
    ma = h()
  }

  function na(a) {
    ma();
    a = {
      next: a
    };
    a[ia.Symbol.iterator] = function() {
      return this
    };
    return a
  }

  function q(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: da(a)
    }
  }

  function oa(a) {
    if (!(a instanceof Array)) {
      a = q(a);
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      a = c
    }
    return a
  }
  var pa = "function" == typeof Object.create ? Object.create : function(a) {
      function b() {}
      b.prototype = a;
      return new b
    },
    qa;
  if ("function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
  else {
    var ra;
    a: {
      var sa = {
          a: !0
        },
        ta = {};
      try {
        ta.__proto__ = sa;
        ra = ta.a;
        break a
      } catch (a) {}
      ra = !1
    }
    qa = ra ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ua = qa;

  function r(a, b) {
    a.prototype = pa(b.prototype);
    a.prototype.constructor = a;
    if (ua) ua(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c];
    a.na = b.prototype
  }

  function va(a, b) {
    if (b) {
      var c = ia;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e]
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && ea(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      })
    }
  }
  va("globalThis", function(a) {
    return a || ia
  });
  va("Number.MAX_SAFE_INTEGER", ca(9007199254740991));

  function wa(a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (b.call(c, f, e, a)) return {
        mi: e,
        Fj: f
      }
    }
    return {
      mi: -1,
      Fj: void 0
    }
  }
  va("Array.prototype.findIndex", function(a) {
    return a ? a : function(b, c) {
      return wa(this, b, c).mi
    }
  });

  function xa(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
  }
  va("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
      var d = xa(this, b, "endsWith");
      void 0 === c && (c = d.length);
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var e = b.length; 0 < e && 0 < c;)
        if (d[--c] != b[--e]) return !1;
      return 0 >= e
    }
  });
  va("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
      return wa(this, b, c).Fj
    }
  });
  va("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
      var d = xa(this, b, "startsWith"),
        e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e;)
        if (d[c++] != b[g++]) return !1;
      return g >= f
    }
  });
  va("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
      var c = xa(this, null, "repeat");
      if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b;)
        if (b & 1 && (d += c), b >>>= 1) c += c;
      return d
    }
  });

  function ya(a, b) {
    ma();
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
  va("Array.prototype.keys", function(a) {
    return a ? a : function() {
      return ya(this, aa())
    }
  });

  function za(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  var Aa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (d)
        for (var e in d) za(d, e) && (a[e] = d[e])
    }
    return a
  };
  va("Object.assign", function(a) {
    return a || Aa
  });
  va("Object.is", function(a) {
    return a ? a : function(b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
  });
  va("Array.prototype.values", function(a) {
    return a ? a : function() {
      return ya(this, function(b, c) {
        return c
      })
    }
  });
  va("WeakMap", function(a) {
    function b(n) {
      this.g = (k += Math.random() + 1).toString();
      if (n) {
        n = q(n);
        for (var p; !(p = n.next()).done;) p = p.value, this.set(p[0], p[1])
      }
    }

    function c() {}

    function d(n) {
      var p = typeof n;
      return "object" === p && null !== n || "function" === p
    }

    function e(n) {
      if (!za(n, g)) {
        var p = new c;
        ea(n, g, {
          value: p
        })
      }
    }

    function f(n) {
      var p = Object[n];
      p && (Object[n] = function(x) {
        if (x instanceof c) return x;
        e(x);
        return p(x)
      })
    }
    if (function() {
        if (!a || !Object.seal) return !1;
        try {
          var n = Object.seal({}),
            p = Object.seal({}),
            x = new a([
              [n, 2],
              [p, 3]
            ]);
          if (2 != x.get(n) || 3 != x.get(p)) return !1;
          x.delete(n);
          x.set(p, 4);
          return !x.has(n) && 4 == x.get(p)
        } catch (A) {
          return !1
        }
      }()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var k = 0;
    b.prototype.set = function(n, p) {
      if (!d(n)) throw Error("Invalid WeakMap key");
      e(n);
      if (!za(n, g)) throw Error("WeakMap key fail: " + n);
      n[g][this.g] = p;
      return this
    };
    b.prototype.get = function(n) {
      return d(n) && za(n, g) ? n[g][this.g] : void 0
    };
    b.prototype.has = function(n) {
      return d(n) && za(n, g) && za(n[g],
        this.g)
    };
    b.prototype.delete = function(n) {
      return d(n) && za(n, g) && za(n[g], this.g) ? delete n[g][this.g] : !1
    };
    return b
  });
  va("Map", function(a) {
    function b() {
      var k = {};
      return k.$b = k.next = k.head = k
    }

    function c(k, n) {
      var p = k.g;
      return na(function() {
        if (p) {
          for (; p.head != k.g;) p = p.$b;
          for (; p.next != p.head;) return p = p.next, {
            done: !1,
            value: n(p)
          };
          p = null
        }
        return {
          done: !0,
          value: void 0
        }
      })
    }

    function d(k, n) {
      var p = n && typeof n;
      "object" == p || "function" == p ? f.has(n) ? p = f.get(n) : (p = "" + ++g, f.set(n, p)) : p = "p_" + n;
      var x = k.j[p];
      if (x && za(k.j, p))
        for (k = 0; k < x.length; k++) {
          var A = x[k];
          if (n !== n && A.key !== A.key || n === A.key) return {
            id: p,
            list: x,
            index: k,
            Ta: A
          }
        }
      return {
        id: p,
        list: x,
        index: -1,
        Ta: void 0
      }
    }

    function e(k) {
      this.j = {};
      this.g = b();
      this.size = 0;
      if (k) {
        k = q(k);
        for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1])
      }
    }
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var k = Object.seal({
              x: 4
            }),
            n = new a(q([
              [k, "s"]
            ]));
          if ("s" != n.get(k) || 1 != n.size || n.get({
              x: 4
            }) || n.set({
              x: 4
            }, "t") != n || 2 != n.size) return !1;
          var p = n.entries(),
            x = p.next();
          if (x.done || x.value[0] != k || "s" != x.value[1]) return !1;
          x = p.next();
          return x.done || 4 != x.value[0].x ||
            "t" != x.value[1] || !p.next().done ? !1 : !0
        } catch (A) {
          return !1
        }
      }()) return a;
    ma();
    var f = new WeakMap;
    e.prototype.set = function(k, n) {
      k = 0 === k ? 0 : k;
      var p = d(this, k);
      p.list || (p.list = this.j[p.id] = []);
      p.Ta ? p.Ta.value = n : (p.Ta = {
        next: this.g,
        $b: this.g.$b,
        head: this.g,
        key: k,
        value: n
      }, p.list.push(p.Ta), this.g.$b.next = p.Ta, this.g.$b = p.Ta, this.size++);
      return this
    };
    e.prototype.delete = function(k) {
      k = d(this, k);
      return k.Ta && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.j[k.id], k.Ta.$b.next = k.Ta.next, k.Ta.next.$b = k.Ta.$b,
        k.Ta.head = null, this.size--, !0) : !1
    };
    e.prototype.clear = function() {
      this.j = {};
      this.g = this.g.$b = b();
      this.size = 0
    };
    e.prototype.has = function(k) {
      return !!d(this, k).Ta
    };
    e.prototype.get = function(k) {
      return (k = d(this, k).Ta) && k.value
    };
    e.prototype.entries = function() {
      return c(this, function(k) {
        return [k.key, k.value]
      })
    };
    e.prototype.keys = function() {
      return c(this, function(k) {
        return k.key
      })
    };
    e.prototype.values = function() {
      return c(this, function(k) {
        return k.value
      })
    };
    e.prototype.forEach = function(k, n) {
      for (var p = this.entries(),
          x; !(x = p.next()).done;) x = x.value, k.call(n, x[1], x[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
  });
  var Ba = function() {
    function a() {
      function c() {}
      new c;
      Reflect.construct(c, [], h());
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
      e = pa(e.prototype || Object.prototype);
      return Function.prototype.apply.call(c, e, d) || e
    }
  }();
  va("Reflect.construct", function() {
    return Ba
  });
  va("Array.from", function(a) {
    return a ? a : function(b, c, d) {
      c = null != c ? c : aa();
      var e = [],
        f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
      if ("function" == typeof f) {
        b = f.call(b);
        for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
      } else
        for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
      return e
    }
  });
  va("Set", function(a) {
    function b(c) {
      this.g = new Map;
      if (c) {
        c = q(c);
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
            d = new a(q([c]));
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
    ma();
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
  va("Object.values", function(a) {
    return a ? a : function(b) {
      var c = [],
        d;
      for (d in b) za(b, d) && c.push(b[d]);
      return c
    }
  });
  va("Array.prototype.includes", function(a) {
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
  va("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      return -1 !== xa(this, b, "includes").indexOf(b, c || 0)
    }
  });
  va("Promise", function(a) {
    function b(g) {
      this.j = 0;
      this.o = void 0;
      this.g = [];
      var k = this.w();
      try {
        g(k.resolve, k.reject)
      } catch (n) {
        k.reject(n)
      }
    }

    function c() {
      this.g = null
    }

    function d(g) {
      return g instanceof b ? g : new b(function(k) {
        k(g)
      })
    }
    if (a) return a;
    c.prototype.j = function(g) {
      if (null == this.g) {
        this.g = [];
        var k = this;
        this.o(function() {
          k.A()
        })
      }
      this.g.push(g)
    };
    var e = ia.setTimeout;
    c.prototype.o = function(g) {
      e(g, 0)
    };
    c.prototype.A = function() {
      for (; this.g && this.g.length;) {
        var g = this.g;
        this.g = [];
        for (var k = 0; k < g.length; ++k) {
          var n =
            g[k];
          g[k] = null;
          try {
            n()
          } catch (p) {
            this.w(p)
          }
        }
      }
      this.g = null
    };
    c.prototype.w = function(g) {
      this.o(function() {
        throw g;
      })
    };
    b.prototype.w = function() {
      function g(p) {
        return function(x) {
          n || (n = !0, p.call(k, x))
        }
      }
      var k = this,
        n = !1;
      return {
        resolve: g(this.H),
        reject: g(this.A)
      }
    };
    b.prototype.H = function(g) {
      if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b) this.I(g);
      else {
        a: switch (typeof g) {
          case "object":
            var k = null != g;
            break a;
          case "function":
            k = !0;
            break a;
          default:
            k = !1
        }
        k ? this.G(g) : this.B(g)
      }
    };
    b.prototype.G = function(g) {
      var k = void 0;
      try {
        k = g.then
      } catch (n) {
        this.A(n);
        return
      }
      "function" == typeof k ? this.L(k, g) : this.B(g)
    };
    b.prototype.A = function(g) {
      this.C(2, g)
    };
    b.prototype.B = function(g) {
      this.C(1, g)
    };
    b.prototype.C = function(g, k) {
      if (0 != this.j) throw Error("Cannot settle(" + g + ", " + k + "): Promise already settled in state" + this.j);
      this.j = g;
      this.o = k;
      this.D()
    };
    b.prototype.D = function() {
      if (null != this.g) {
        for (var g = 0; g < this.g.length; ++g) f.j(this.g[g]);
        this.g = null
      }
    };
    var f = new c;
    b.prototype.I = function(g) {
      var k = this.w();
      g.Be(k.resolve, k.reject)
    };
    b.prototype.L = function(g, k) {
      var n = this.w();
      try {
        g.call(k, n.resolve, n.reject)
      } catch (p) {
        n.reject(p)
      }
    };
    b.prototype.then = function(g, k) {
      function n(G, K) {
        return "function" == typeof G ? function(fa) {
          try {
            p(G(fa))
          } catch (Ua) {
            x(Ua)
          }
        } : K
      }
      var p, x, A = new b(function(G, K) {
        p = G;
        x = K
      });
      this.Be(n(g, p), n(k, x));
      return A
    };
    b.prototype.catch = function(g) {
      return this.then(void 0, g)
    };
    b.prototype.Be = function(g, k) {
      function n() {
        switch (p.j) {
          case 1:
            g(p.o);
            break;
          case 2:
            k(p.o);
            break;
          default:
            throw Error("Unexpected state: " +
              p.j);
        }
      }
      var p = this;
      null == this.g ? f.j(n) : this.g.push(n)
    };
    b.resolve = d;
    b.reject = function(g) {
      return new b(function(k, n) {
        n(g)
      })
    };
    b.race = function(g) {
      return new b(function(k, n) {
        for (var p = q(g), x = p.next(); !x.done; x = p.next()) d(x.value).Be(k, n)
      })
    };
    b.all = function(g) {
      var k = q(g),
        n = k.next();
      return n.done ? d([]) : new b(function(p, x) {
        function A(fa) {
          return function(Ua) {
            G[fa] = Ua;
            K--;
            0 == K && p(G)
          }
        }
        var G = [],
          K = 0;
        do G.push(void 0), K++, d(n.value).Be(A(G.length - 1), x), n = k.next(); while (!n.done)
      })
    };
    return b
  });
  va("Object.entries", function(a) {
    return a ? a : function(b) {
      var c = [],
        d;
      for (d in b) za(b, d) && c.push([d, b[d]]);
      return c
    }
  });
  va("Array.prototype.flat", function(a) {
    return a ? a : function(b) {
      b = void 0 === b ? 1 : b;
      for (var c = [], d = 0; d < this.length; d++) {
        var e = this[d];
        Array.isArray(e) && 0 < b ? (e = Array.prototype.flat.call(e, b - 1), c.push.apply(c, e)) : c.push(e)
      }
      return c
    }
  });
  var Ca = Ca || {},
    t = this || self;

  function Da(a, b, c) {
    a = a.split(".");
    c = c || t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
  }

  function Ea(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
      if (b = b[a[c]], null == b) return null;
    return b
  }

  function Fa() {}

  function Ga(a) {
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

  function Ha(a) {
    return "array" == Ga(a)
  }

  function Ia(a) {
    var b = Ga(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  }

  function Ja(a) {
    return "function" == Ga(a)
  }

  function Ka(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  }

  function La(a) {
    return Object.prototype.hasOwnProperty.call(a, Ma) && a[Ma] || (a[Ma] = ++Na)
  }

  function Oa(a) {
    null !== a && "removeAttribute" in a && a.removeAttribute(Ma);
    try {
      delete a[Ma]
    } catch (b) {}
  }
  var Ma = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Na = 0;

  function Pa(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function Qa(a, b, c) {
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

  function u(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? u = Pa : u = Qa;
    return u.apply(null, arguments)
  }

  function Ra(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d)
    }
  }
  var v = Date.now || function() {
    return +new Date
  };

  function Sa(a) {
    if (t.execScript) t.execScript(a, "JavaScript");
    else if (t.eval) {
      if (null == Ta) {
        try {
          t.eval("var _evalTest_ = 1;")
        } catch (d) {}
        if ("undefined" != typeof t._evalTest_) {
          try {
            delete t._evalTest_
          } catch (d) {}
          Ta = !0
        } else Ta = !1
      }
      if (Ta) t.eval(a);
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
  var Ta = null;

  function Va(a, b) {
    Da(a, b, void 0)
  }

  function w(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.na = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
  };

  function Wa(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Wa);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a));
    this.g = !0
  }
  w(Wa, Error);
  Wa.prototype.name = "CustomError";
  var Xa;

  function Ya(a) {
    Ya[" "](a);
    return a
  }
  Ya[" "] = Fa;

  function Za(a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
  };

  function $a(a, b) {
    this.j = a | 0;
    this.g = b | 0
  }

  function ab(a) {
    return 4294967296 * a.g + (a.j >>> 0)
  }
  m = $a.prototype;
  m.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    var b = this.g >> 21;
    if (0 == b || -1 == b && (0 != this.j || -2097152 != this.g)) return b = ab(this), 10 == a ? "" + b : b.toString(a);
    b = 14 - (a >> 2);
    var c = Math.pow(a, b),
      d = bb(c, c / 4294967296);
    c = cb(this, d);
    d = Math.abs(ab(this.add(db(eb(c, d)))));
    var e = 10 == a ? "" + d : d.toString(a);
    e.length < b && (e = "0000000000000".substr(e.length - b) + e);
    d = ab(c);
    return (10 == a ? d : d.toString(a)) + e
  };

  function gb(a) {
    return 0 == a.j && 0 == a.g
  }
  m.oa = function(a) {
    return this.j == a.j && this.g == a.g
  };

  function hb(a, b) {
    return a.g == b.g ? a.j == b.j ? 0 : a.j >>> 0 > b.j >>> 0 ? 1 : -1 : a.g > b.g ? 1 : -1
  }

  function db(a) {
    var b = ~a.j + 1 | 0;
    return bb(b, ~a.g + !b | 0)
  }
  m.add = function(a) {
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
    return bb((g & 65535) << 16 | a & 65535, b << 16 | d & 65535)
  };

  function eb(a, b) {
    if (gb(a)) return a;
    if (gb(b)) return b;
    var c = a.g >>> 16,
      d = a.g & 65535,
      e = a.j >>> 16;
    a = a.j & 65535;
    var f = b.g >>> 16,
      g = b.g & 65535,
      k = b.j >>> 16;
    b = b.j & 65535;
    var n = a * b;
    var p = (n >>> 16) + e * b;
    var x = p >>> 16;
    p = (p & 65535) + a * k;
    x += p >>> 16;
    x += d * b;
    var A = x >>> 16;
    x = (x & 65535) + e * k;
    A += x >>> 16;
    x = (x & 65535) + a * g;
    A = A + (x >>> 16) + (c * b + d * k + e * g + a * f) & 65535;
    return bb((p & 65535) << 16 | n & 65535, A << 16 | x & 65535)
  }

  function cb(a, b) {
    if (gb(b)) throw Error("division by zero");
    if (0 > a.g) {
      if (a.oa(ib)) {
        if (b.oa(jb) || b.oa(kb)) return ib;
        if (b.oa(ib)) return jb;
        var c = 1;
        if (0 == c) c = a;
        else {
          var d = a.g;
          c = 32 > c ? bb(a.j >>> c | d << 32 - c, d >> c) : bb(d >> c - 32, 0 <= d ? 0 : -1)
        }
        c = cb(c, b);
        d = 1;
        if (0 != d) {
          var e = c.j;
          c = 32 > d ? bb(e << d, c.g << d | e >>> 32 - d) : bb(0, e << d - 32)
        }
        if (c.oa(lb)) return 0 > b.g ? jb : kb;
        a = a.add(db(eb(b, c)));
        return c.add(cb(a, b))
      }
      return 0 > b.g ? cb(db(a), db(b)) : db(cb(db(a), b))
    }
    if (gb(a)) return lb;
    if (0 > b.g) return b.oa(ib) ? lb : db(cb(a, db(b)));
    for (d = lb; 0 <= hb(a,
        b);) {
      c = Math.max(1, Math.floor(ab(a) / ab(b)));
      e = Math.ceil(Math.log(c) / Math.LN2);
      e = 48 >= e ? 1 : Math.pow(2, e - 48);
      for (var f = mb(c), g = eb(f, b); 0 > g.g || 0 < hb(g, a);) c -= e, f = mb(c), g = eb(f, b);
      gb(f) && (f = jb);
      d = d.add(f);
      a = a.add(db(g))
    }
    return d
  }
  m.and = function(a) {
    return bb(this.j & a.j, this.g & a.g)
  };
  m.or = function(a) {
    return bb(this.j | a.j, this.g | a.g)
  };
  m.xor = function(a) {
    return bb(this.j ^ a.j, this.g ^ a.g)
  };

  function mb(a) {
    return 0 < a ? 0x7fffffffffffffff <= a ? nb : new $a(a, a / 4294967296) : 0 > a ? -9223372036854775808 >= a ? ib : db(new $a(-a, -a / 4294967296)) : lb
  }

  function bb(a, b) {
    return new $a(a, b)
  }

  function ob(a, b) {
    if ("-" == a.charAt(0)) return db(ob(a.substring(1), b));
    var c = parseInt(a, b || 10);
    if (9007199254740991 >= c) return new $a(c % 4294967296 | 0, c / 4294967296 | 0);
    if (0 == a.length) throw Error("number format error: empty string");
    if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character: ' + a);
    b = b || 10;
    if (2 > b || 36 < b) throw Error("radix out of range: " + b);
    c = mb(Math.pow(b, 8));
    for (var d = lb, e = 0; e < a.length; e += 8) {
      var f = Math.min(8, a.length - e),
        g = parseInt(a.substring(e, e + f), b);
      8 > f ? d = eb(d, mb(Math.pow(b,
        f))).add(mb(g)) : (d = eb(d, c), d = d.add(mb(g)))
    }
    return d
  }
  var lb = bb(0, 0),
    jb = bb(1, 0),
    kb = bb(-1, -1),
    nb = bb(4294967295, 2147483647),
    ib = bb(0, 2147483648);

  function pb() {
    return null
  }

  function qb(a) {
    var b = b || 0;
    return function() {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
  }

  function rb(a, b) {
    function c() {
      e = t.setTimeout(d, 1E4);
      a.apply(b, g)
    }

    function d() {
      e = 0;
      f && (f = !1, c())
    }
    var e = 0,
      f = !1,
      g = [];
    return function(k) {
      g = arguments;
      e ? f = !0 : c()
    }
  };

  function sb(a) {
    return a[a.length - 1]
  }
  var tb = Array.prototype.indexOf ? function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    ub = Array.prototype.lastIndexOf ? function(a, b) {
      return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    } : function(a, b) {
      var c = a.length - 1;
      0 > c && (c = Math.max(0, a.length + c));
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
      for (; 0 <= c; c--)
        if (c in a && a[c] === b) return c;
      return -1
    },
    vb = Array.prototype.forEach ? function(a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };

  function wb(a, b) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
  }
  var xb = Array.prototype.filter ? function(a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
      for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
        if (g in f) {
          var k = f[g];
          b.call(void 0, k, g, a) && (d[e++] = k)
        } return d
    },
    yb = Array.prototype.map ? function(a, b, c) {
      return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    },
    zb = Array.prototype.some ? function(a, b) {
      return Array.prototype.some.call(a,
        b, void 0)
    } : function(a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1
    },
    Ab = Array.prototype.every ? function(a, b, c) {
      return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && !b.call(c, e[f], f, a)) return !1;
      return !0
    };

  function Bb(a, b) {
    b = Cb(a, b, void 0);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
  }

  function Cb(a, b, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1
  }

  function Db(a, b) {
    return 0 <= tb(a, b)
  }

  function Eb(a) {
    if (!Ha(a))
      for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
  }

  function Fb(a, b) {
    b = tb(a, b);
    var c;
    (c = 0 <= b) && Gb(a, b);
    return c
  }

  function Gb(a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length
  }

  function Hb(a, b) {
    b = Cb(a, b, void 0);
    return 0 <= b ? (Gb(a, b), !0) : !1
  }

  function Ib(a, b) {
    var c = 0;
    wb(a, function(d, e) {
      b.call(void 0, d, e, a) && Gb(a, e) && c++
    })
  }

  function Kb(a) {
    return Array.prototype.concat.apply([], arguments)
  }

  function Lb(a) {
    return Array.prototype.concat.apply([], arguments)
  }

  function Mb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  }

  function Nb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ia(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g]
      } else a.push(d)
    }
  }

  function Ob(a, b, c, d) {
    return Array.prototype.splice.apply(a, Pb(arguments, 1))
  }

  function Pb(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
  }

  function Qb(a, b, c) {
    function d(p) {
      return Ka(p) ? "o" + La(p) : (typeof p).charAt(0) + p
    }
    b = b || a;
    c = c || d;
    for (var e = {}, f = 0, g = 0; g < a.length;) {
      var k = a[g++],
        n = c(k);
      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = !0, b[f++] = k)
    }
    b.length = f
  }

  function Rb(a, b, c) {
    for (var d = 0, e = a.length, f; d < e;) {
      var g = d + (e - d >>> 1);
      var k = b(c, a[g]);
      0 < k ? d = g + 1 : (e = g, f = !k)
    }
    return f ? d : -d - 1
  }

  function Sb(a, b) {
    a.sort(b || Tb)
  }

  function Ub(a, b) {
    var c = Vb || Tb;
    Sb(a, function(d, e) {
      return c(b(d), b(e))
    })
  }

  function Vb(a, b, c) {
    c = c || Tb;
    for (var d = Math.min(a.length, b.length), e = 0; e < d; e++) {
      var f = c(a[e], b[e]);
      if (0 != f) return f
    }
    return Tb(a.length, b.length)
  }

  function Tb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }

  function Wb(a, b, c) {
    c = Rb(a, c || Tb, b);
    return 0 > c ? (Ob(a, -(c + 1), 0, b), !0) : !1
  }

  function Xb(a, b) {
    for (var c = [], d = 0; d < b; d++) c[d] = a;
    return c
  }

  function Yb(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ha(d))
        for (var e = 0; e < d.length; e += 8192)
          for (var f = Yb.apply(null, Pb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
      else b.push(d)
    }
    return b
  };

  function Zb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }

  function $b(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c
  }

  function ac(a, b, c) {
    var d = {},
      e;
    for (e in a) d[e] = b.call(c, a[e], e, a);
    return d
  }

  function bc(a, b) {
    for (var c in a)
      if (b.call(void 0, a[c], c, a)) return !0;
    return !1
  }

  function cc(a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b
  }

  function dc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }

  function gc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  }

  function hc(a, b) {
    return null !== a && b in a
  }

  function ic(a, b, c) {
    for (var d in a)
      if (b.call(c, a[d], d, a)) return d
  }

  function jc(a, b) {
    return (b = ic(a, b, void 0)) && a[b]
  }

  function kc(a) {
    for (var b in a) return !1;
    return !0
  }

  function lc(a) {
    for (var b in a) delete a[b]
  }

  function mc(a, b) {
    var c;
    (c = b in a) && delete a[b];
    return c
  }

  function nc(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  }

  function oc(a) {
    var b = {},
      c;
    for (c in a) b[a[c]] = c;
    return b
  }
  var pc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function qc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < pc.length; f++) c = pc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }

  function rc(a) {
    var b = arguments.length;
    if (1 == b && Ha(arguments[0])) return rc.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
  };

  function tc(a, b) {
    this.g = a === uc && b || "";
    this.j = vc
  }
  tc.prototype.Nc = !0;
  tc.prototype.qc = l("g");

  function wc(a) {
    return a instanceof tc && a.constructor === tc && a.j === vc ? a.g : "type_error:Const"
  }
  var vc = {},
    uc = {},
    xc = new tc(uc, "");

  function yc(a, b) {
    this.g = a === Ac && b || "";
    this.j = Bc
  }
  yc.prototype.Nc = !0;
  yc.prototype.qc = function() {
    return this.g.toString()
  };
  var Bc = {},
    Ac = {};

  function Cc(a, b) {
    return 0 == a.lastIndexOf(b, 0)
  }

  function Dc(a) {
    return /^[\s\xa0]*$/.test(a)
  }
  var Ec = String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    Fc = /&/g,
    Gc = /</g,
    Hc = />/g,
    Jc = /"/g,
    Lc = /'/g,
    Mc = /\x00/g,
    Nc = /[\x00&<>"']/;

  function Oc(a, b) {
    var c = 0;
    a = Ec(String(a)).split(".");
    b = Ec(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c = Pc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Pc(0 == f[2].length, 0 == g[2].length) || Pc(f[2], g[2]);
        f = f[3];
        g = g[3]
      } while (0 == c)
    }
    return c
  }

  function Pc(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  };

  function Qc(a, b) {
    this.g = a === Rc && b || "";
    this.j = Sc
  }
  Qc.prototype.Nc = !0;
  Qc.prototype.qc = function() {
    return this.g.toString()
  };

  function Tc(a) {
    if (a instanceof Qc && a.constructor === Qc && a.j === Sc) return a.g;
    Ga(a);
    return "type_error:SafeUrl"
  }
  var Uc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
    Vc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
    Wc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Sc = {},
    Rc = {};

  function Xc() {
    this.g = "";
    this.j = Yc
  }
  Xc.prototype.Nc = !0;
  var Yc = {};
  Xc.prototype.qc = l("g");

  function Zc(a) {
    var b = new Xc;
    b.g = a;
    return b
  }
  var $c = Zc("");
  var ad;
  a: {
    var bd = t.navigator;
    if (bd) {
      var cd = bd.userAgent;
      if (cd) {
        ad = cd;
        break a
      }
    }
    ad = ""
  }

  function dd(a) {
    return -1 != ad.indexOf(a)
  }

  function ed(a) {
    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
    return c
  };

  function hd() {
    return dd("Trident") || dd("MSIE")
  }

  function id() {
    return dd("Firefox") || dd("FxiOS")
  }

  function jd() {
    return (dd("Chrome") || dd("CriOS")) && !dd("Edge")
  }

  function kd() {
    function a(e) {
      e = Bb(e, d);
      return c[e] || ""
    }
    var b = ad;
    if (hd()) return ld(b);
    b = ed(b);
    var c = {};
    vb(b, function(e) {
      c[e[0]] = e[1]
    });
    var d = Ra(hc, c);
    return dd("Opera") ? a(["Version", "Opera"]) : dd("Edge") ? a(["Edge"]) : dd("Edg/") ? a(["Edg"]) : jd() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
  }

  function ld(a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
      if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
        if (a && a[1]) switch (a[1]) {
          case "4.0":
            b = "8.0";
            break;
          case "5.0":
            b = "9.0";
            break;
          case "6.0":
            b = "10.0";
            break;
          case "7.0":
            b = "11.0"
        } else b = "7.0";
        else b = c[1];
    return b
  };

  function md() {
    this.g = "";
    this.j = nd
  }
  md.prototype.Nc = !0;
  md.prototype.qc = function() {
    return this.g.toString()
  };

  function od(a) {
    if (a instanceof md && a.constructor === md && a.j === nd) return a.g;
    Ga(a);
    return "type_error:SafeHtml"
  }
  var nd = {};

  function pd(a) {
    var b = new md;
    b.g = a;
    return b
  }
  var qd = pd("");
  var rd = function(a) {
    var b = !1,
      c;
    return function() {
      b || (c = a(), b = !0);
      return c
    }
  }(function() {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = od(qd);
    return !b.parentElement
  });

  function sd(a, b) {
    if (b instanceof Qc) var c = b;
    else a: if (c = b, b = /^data:image\//i.test(b), !(c instanceof Qc)) {
      c = "object" == typeof c && c.Nc ? c.qc() : String(c);
      if (b && /^data:/i.test(c)) {
        b = c.replace(/(%0A|%0D)/g, "");
        var d = b.match(Vc);
        d = d && Uc.test(d[1]);
        b = new Qc(Rc, d ? b : "about:invalid#zClosurez");
        if (b.qc() == c) {
          c = b;
          break a
        }
      }
      Wc.test(c) || (c = "about:invalid#zClosurez");
      c = new Qc(Rc, c)
    } a.src = Tc(c)
  }

  function td(a, b) {
    b instanceof yc && b.constructor === yc && b.j === Bc ? b = b.g : (Ga(b), b = "type_error:TrustedResourceUrl");
    a.src = b.toString()
  };

  function ud(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
  }

  function vd(a) {
    return a.replace(/^[\s\xa0]+/, "")
  }

  function wd(a) {
    Nc.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Fc, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Gc, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Hc, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Jc, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Lc, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Mc, "&#0;")));
    return a
  }

  function xd(a) {
    20 < a.length && (a = a.substring(0, 17) + "...");
    return a
  }
  var yd = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C"
    },
    zd = {
      "'": "\\'"
    };

  function Ad(a) {
    a = String(a);
    for (var b = ['"'], c = 0; c < a.length; c++) {
      var d = a.charAt(c),
        e = d.charCodeAt(0);
      b[c + 1] = yd[d] || (31 < e && 127 > e ? d : Bd(d))
    }
    b.push('"');
    return b.join("")
  }

  function Bd(a) {
    if (a in zd) return zd[a];
    if (a in yd) return zd[a] = yd[a];
    var b = a.charCodeAt(0);
    if (31 < b && 127 > b) var c = a;
    else {
      if (256 > b) {
        if (c = "\\x", 16 > b || 256 < b) c += "0"
      } else c = "\\u", 4096 > b && (c += "0");
      c += b.toString(16).toUpperCase()
    }
    return zd[a] = c
  }
  var Cd = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
  } : function(a, b) {
    return Array(b + 1).join(a)
  };

  function Dd(a) {
    a = String(a);
    var b = a.indexOf("."); - 1 == b && (b = a.length);
    return Cd("0", Math.max(0, 2 - b)) + a
  }

  function Ed(a) {
    return null == a ? "" : String(a)
  }

  function Fd(a) {
    return Array.prototype.join.call(arguments, "")
  }

  function Gd() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ v()).toString(36)
  }
  var Hd = 2147483648 * Math.random() | 0;

  function Id(a) {
    var b = Number(a);
    return 0 == b && Dc(a) ? NaN : b
  }

  function Jd(a) {
    return String(a).replace(/\-([a-z])/g, function(b, c) {
      return c.toUpperCase()
    })
  }

  function Kd(a) {
    isFinite(a) && (a = String(a));
    return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
  }

  function Ld(a, b) {
    var c = 1;
    a = a.split(b);
    for (var d = []; 0 < c && a.length;) d.push(a.shift()), c--;
    a.length && d.push(a.join(b));
    return d
  };

  function Md() {
    return dd("iPhone") && !dd("iPod") && !dd("iPad")
  }

  function Nd() {
    return Md() || dd("iPad") || dd("iPod")
  };
  var Od = dd("Opera"),
    Pd = hd(),
    Qd = dd("Edge"),
    Rd = dd("Gecko") && !(-1 != ad.toLowerCase().indexOf("webkit") && !dd("Edge")) && !(dd("Trident") || dd("MSIE")) && !dd("Edge"),
    Sd = -1 != ad.toLowerCase().indexOf("webkit") && !dd("Edge"),
    Td = dd("Macintosh"),
    Ud = dd("Windows"),
    Vd = dd("Android"),
    Wd = Md(),
    Xd = dd("iPad"),
    Yd = dd("iPod");

  function Zd() {
    var a = t.document;
    return a ? a.documentMode : void 0
  }
  var $d;
  a: {
    var ae = "",
      be = function() {
        var a = ad;
        if (Rd) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Qd) return /Edge\/([\d\.]+)/.exec(a);
        if (Pd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Sd) return /WebKit\/(\S+)/.exec(a);
        if (Od) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();be && (ae = be ? be[1] : "");
    if (Pd) {
      var ce = Zd();
      if (null != ce && ce > parseFloat(ae)) {
        $d = String(ce);
        break a
      }
    }
    $d = ae
  }
  var de = $d,
    ee = {};

  function fe(a) {
    return Za(ee, a, function() {
      return 0 <= Oc(de, a)
    })
  }

  function ge(a) {
    return Number(he) >= a
  }
  var ie;
  ie = t.document && Pd ? Zd() : void 0;
  var he = ie;
  var je = id(),
    le = Md() || dd("iPod"),
    me = dd("iPad"),
    ne = dd("Android") && !(jd() || id() || dd("Opera") || dd("Silk")),
    oe = jd(),
    pe = dd("Safari") && !(jd() || dd("Coast") || dd("Opera") || dd("Edge") || dd("Edg/") || dd("OPR") || id() || dd("Silk") || dd("Android")) && !Nd();

  function qe(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      255 < e && (b[c++] = e & 255, e >>= 8);
      b[c++] = e
    }
    return b
  }

  function re(a) {
    if (8192 >= a.length) return String.fromCharCode.apply(null, a);
    for (var b = "", c = 0; c < a.length; c += 8192) b += String.fromCharCode.apply(null, Pb(a, c, c + 8192));
    return b
  }

  function se(a) {
    return yb(a, function(b) {
      b = b.toString(16);
      return 1 < b.length ? b : "0" + b
    }).join("")
  }

  function te(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
    }
    return b
  };
  var ue = {},
    ve = null,
    we = Rd || Sd && !pe || Od,
    xe = we || "function" == typeof t.btoa,
    ye = we || !pe && !Pd && "function" == typeof t.atob;

  function ze(a, b) {
    Ia(a);
    void 0 === b && (b = 0);
    Ae();
    b = ue[b];
    for (var c = [], d = 0; d < a.length; d += 3) {
      var e = a[d],
        f = d + 1 < a.length,
        g = f ? a[d + 1] : 0,
        k = d + 2 < a.length,
        n = k ? a[d + 2] : 0,
        p = e >> 2;
      e = (e & 3) << 4 | g >> 4;
      g = (g & 15) << 2 | n >> 6;
      n &= 63;
      k || (n = 64, f || (g = 64));
      c.push(b[p], b[e], b[g] || "", b[n] || "")
    }
    return c.join("")
  }

  function Be(a, b) {
    return xe && !b ? t.btoa(a) : ze(qe(a), b)
  }

  function Ce(a) {
    if (ye) return t.atob(a);
    var b = "";
    De(a, function(c) {
      b += String.fromCharCode(c)
    });
    return b
  }

  function De(a, b) {
    function c(n) {
      for (; d < a.length;) {
        var p = a.charAt(d++),
          x = ve[p];
        if (null != x) return x;
        if (!Dc(p)) throw Error("Unknown base64 encoding at char: " + p);
      }
      return n
    }
    Ae();
    for (var d = 0;;) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        k = c(64);
      if (64 === k && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
    }
  }

  function Ae() {
    if (!ve) {
      ve = {};
      for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
        var d = a.concat(b[c].split(""));
        ue[c] = d;
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === ve[f] && (ve[f] = e)
        }
      }
    }
  };
  t.Symbol && t.Symbol.iterator && (ja(), ma());
  ja();
  ma();
  ja();
  ma();

  function Ee(a) {
    return String.fromCharCode(10 > a ? 48 + a : 87 + a)
  };

  function Fe() {
    this.g = []
  }
  Fe.prototype.length = function() {
    return this.g.length
  };
  Fe.prototype.end = function() {
    var a = this.g;
    this.g = [];
    return a
  };

  function Ge(a, b) {
    for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
    a.g.push(b)
  }

  function He(a, b) {
    a.g.push(b >>> 0 & 255);
    a.g.push(b >>> 8 & 255);
    a.g.push(b >>> 16 & 255);
    a.g.push(b >>> 24 & 255)
  };

  function Ie() {
    this.j = [];
    this.o = 0;
    this.g = new Fe
  }
  Ie.prototype.reset = function() {
    this.j = [];
    this.g.end();
    this.o = 0
  };

  function Je(a, b, c, d) {
    this.j = a;
    this.Mh = b;
    this.g = c;
    this.kh = d;
    this.gb = 0
  }

  function y() {}
  var Ke = "function" == typeof Uint8Array;

  function z(a, b, c, d, e) {
    a.g = null;
    b || (b = []);
    a.D = void 0;
    a.A = -1;
    a.w = b;
    a: {
      var f = a.w.length;b = -1;
      if (f && (b = f - 1, f = a.w[b], !(null === f || "object" != typeof f || Ha(f) || Ke && f instanceof Uint8Array))) {
        a.B = b - a.A;
        a.o = f;
        break a
      } - 1 < c ? (a.B = Math.max(c, b + 1 - a.A), a.o = null) : a.B = Number.MAX_VALUE
    }
    a.C = {};
    if (d)
      for (c = 0; c < d.length; c++) b = d[c], b < a.B ? (b += a.A, a.w[b] = a.w[b] || Le) : (Me(a), a.o[b] = a.o[b] || Le);
    if (e && e.length)
      for (c = 0; c < e.length; c++) Ne(a, e[c])
  }
  var Le = [];

  function Me(a) {
    var b = a.B + a.A;
    a.w[b] || (a.o = a.w[b] = {})
  }

  function Oe(a, b, c) {
    for (var d = [], e = 0; e < a.length; e++) d[e] = b.call(a[e], c, a[e]);
    return d
  }

  function B(a, b) {
    if (b < a.B) {
      b += a.A;
      var c = a.w[b];
      return c === Le ? a.w[b] = [] : c
    }
    if (a.o) return c = a.o[b], c === Le ? a.o[b] = [] : c
  }

  function Pe(a, b) {
    return B(a, b)
  }

  function C(a, b) {
    a = B(a, b);
    return null == a ? a : !!a
  }

  function D(a, b, c) {
    a = B(a, b);
    return null == a ? c : a
  }

  function E(a, b, c) {
    a = C(a, b);
    return null == a ? c : a
  }

  function F(a, b, c) {
    b < a.B ? a.w[b + a.A] = c : (Me(a), a.o[b] = c);
    return a
  }

  function Qe(a, b, c, d) {
    c !== d ? F(a, b, c) : a.w[b + a.A] = null
  }

  function Ne(a, b) {
    for (var c, d, e = 0; e < b.length; e++) {
      var f = b[e],
        g = B(a, f);
      null != g && (c = f, d = g, F(a, f, void 0))
    }
    return c ? (F(a, c, d), c) : 0
  }

  function H(a, b, c, d) {
    a.g || (a.g = {});
    if (!a.g[c]) {
      var e = B(a, c);
      if (d || e) a.g[c] = new b(e)
    }
    return a.g[c]
  }

  function I(a, b, c) {
    Re(a, b, c);
    b = a.g[c];
    b == Le && (b = a.g[c] = []);
    return b
  }

  function Re(a, b, c) {
    a.g || (a.g = {});
    if (!a.g[c]) {
      for (var d = B(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
      a.g[c] = e
    }
  }

  function J(a, b, c) {
    a.g || (a.g = {});
    var d = c ? c.ga() : c;
    a.g[b] = c;
    return F(a, b, d)
  }

  function L(a, b, c, d) {
    a.g || (a.g = {});
    var e = d ? d.ga() : d;
    a.g[b] = d;
    (c = Ne(a, c)) && c !== b && void 0 !== e && (a.g && c in a.g && (a.g[c] = void 0), F(a, c, void 0));
    return F(a, b, e)
  }

  function M(a, b, c) {
    a.g || (a.g = {});
    c = c || [];
    for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].ga();
    a.g[b] = c;
    return F(a, b, d)
  }

  function Se(a, b, c, d, e) {
    Re(a, d, b);
    var f = a.g[b];
    f || (f = a.g[b] = []);
    c = c ? c : new d;
    a = B(a, b);
    void 0 != e ? (f.splice(e, 0, c), a.splice(e, 0, c.ga())) : (f.push(c), a.push(c.ga()));
    return c
  }

  function Te(a) {
    if (a.g)
      for (var b in a.g) {
        var c = a.g[b];
        if (Ha(c))
          for (var d = 0; d < c.length; d++) c[d] && c[d].ga();
        else c && c.ga()
      }
  }
  m = y.prototype;
  m.ga = function() {
    Te(this);
    return this.w
  };
  m.Ga = Ke ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
      return ze(this)
    };
    try {
      return JSON.stringify(this.w && this.ga(), Ue)
    } finally {
      Uint8Array.prototype.toJSON = a
    }
  } : function() {
    return JSON.stringify(this.w && this.ga(), Ue)
  };

  function Ue(a, b) {
    return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
  }

  function Ve(a, b) {
    return new a(b ? JSON.parse(b) : null)
  }
  m.toString = function() {
    Te(this);
    return this.w.toString()
  };
  m.$e = function(a) {
    if (this.o) {
      this.g || (this.g = {});
      var b = a.j;
      if (a.gb) {
        if (a.g) return this.g[b] || (this.g[b] = yb(this.o[b] || [], function(c) {
          return new a.g(c)
        })), this.g[b]
      } else if (a.g) return !this.g[b] && this.o[b] && (this.g[b] = new a.g(this.o[b])), this.g[b];
      return this.o[b]
    }
  };

  function We(a, b, c) {
    a.g || (a.g = {});
    Me(a);
    var d = b.j;
    b.gb ? (c = c || [], b.g ? (a.g[d] = c, a.o[d] = yb(c, function(e) {
      return e.ga()
    })) : a.o[d] = c) : b.g ? (a.g[d] = c, a.o[d] = c ? c.ga() : c) : a.o[d] = c
  }

  function Xe(a, b) {
    if (!(a instanceof b.constructor)) throw Error("Messages have different types.");
    var c = a.ga();
    b = b.ga();
    var d = [],
      e = 0,
      f = c.length > b.length ? c.length : b.length;
    a.D && (d[0] = a.D, e = 1);
    for (; e < f; e++) Ye(c[e], b[e]) || (d[e] = b[e]);
    return new a.constructor(d)
  }

  function Ze(a, b) {
    return a == b || !(!a || !b) && a instanceof b.constructor && Ye(a.ga(), b.ga())
  }

  function $e(a, b) {
    a = a || {};
    b = b || {};
    var c = {},
      d;
    for (d in a) c[d] = 0;
    for (d in b) c[d] = 0;
    for (d in c)
      if (!Ye(a[d], b[d])) return !1;
    return !0
  }

  function Ye(a, b) {
    if (a == b) return !0;
    if (!Ka(a) || !Ka(b)) return "number" === typeof a && isNaN(a) || "number" === typeof b && isNaN(b) ? String(a) == String(b) : !1;
    if (a.constructor != b.constructor) return !1;
    if (Ke && a.constructor === Uint8Array) {
      if (a.length != b.length) return !1;
      for (var c = 0; c < a.length; c++)
        if (a[c] != b[c]) return !1;
      return !0
    }
    if (a.constructor === Array) {
      var d = void 0,
        e = void 0,
        f = Math.max(a.length, b.length);
      for (c = 0; c < f; c++) {
        var g = a[c],
          k = b[c];
        g && g.constructor == Object && (d = g, g = void 0);
        k && k.constructor == Object && (e = k, k = void 0);
        if (!Ye(g, k)) return !1
      }
      return d || e ? (d = d || {}, e = e || {}, $e(d, e)) : !0
    }
    if (a.constructor === Object) return $e(a, b);
    throw Error("Invalid type in JSPB array");
  }
  m.clone = function() {
    return N(this)
  };

  function N(a) {
    return new a.constructor(af(a.ga()))
  }

  function af(a) {
    if (Ha(a)) {
      for (var b = Array(a.length), c = 0; c < a.length; c++) {
        var d = a[c];
        null != d && (b[c] = "object" == typeof d ? af(d) : d)
      }
      return b
    }
    if (Ke && a instanceof Uint8Array) return new Uint8Array(a);
    b = {};
    for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? af(d) : d);
    return b
  };

  function bf(a) {
    return Za(a.prototype, "$$generatedClassName", function() {
      return "Class$obf_" + {
        valueOf: function() {
          return ++cf
        }
      }
    })
  }
  var cf = 1E3;

  function df() {}
  df.prototype.oa = function(a) {
    return ef(this, a)
  };
  df.prototype.td = function() {
    return ff(this)
  };
  df.prototype.toString = function() {
    return O(gf(hf(this.constructor))) + "@" + O(jf(this.td()))
  };

  function kf() {}
  r(kf, df);

  function lf(a, b) {
    mf(a);
    a.B = b;
    nf(a)
  }
  kf.prototype.j = function(a) {
    this.g = a; of (this, a)
  };

  function nf(a) {
    a.g instanceof Error && (Error.captureStackTrace ? Error.captureStackTrace(a.g) : a.g.stack = Error().stack)
  }
  kf.prototype.w = l("B");
  kf.prototype.toString = function() {
    var a = gf(hf(this.constructor)),
      b = this.w();
    return null == b ? a : O(a) + ": " + O(b)
  };

  function pf(a) {
    if (null != a) {
      var b = a.nk;
      if (null != b) return b
    }
    a instanceof TypeError ? (b = new qf, lf(b, O(a)), rf(b), b.o = a, b.j(new TypeError(b)), a = b) : (b = new sf, lf(b, O(a)), rf(b), b.o = a, b.j(Error(b)), a = b);
    return a
  }

  function mf(a) {
    a.C = tf([0], kf, uf, kf.g)
  }

  function uf(a) {
    return a instanceof kf
  }

  function of (a, b) {
    if (b instanceof Object) try {
      b.nk = a, Object.defineProperties(b, {
        Mf: {
          get: function() {
            return a.A && a.A.g
          }
        }
      })
    } catch (c) {}
  };

  function vf() {}
  r(vf, kf);

  function wf() {}
  r(wf, vf);

  function xf(a) {
    var b = new wf;
    lf(b, a);
    b.j(Error(b));
    return b
  };

  function ef(a, b) {
    return Object.is(a, b) || null == a && null == b
  };

  function yf(a, b) {
    this.j = a;
    this.g = b
  }
  r(yf, df);

  function gf(a) {
    var b = bf(a.j);
    0 != a.g && (b = "L" + O(b) + ";");
    return O(zf("[", a.g)) + O(b)
  }
  yf.prototype.toString = function() {
    return "class " + O(gf(this))
  };

  function zf(a, b) {
    for (var c = "", d = 0; d < b; d++) c = O(c) + O(a);
    return c
  }

  function hf(a, b) {
    var c = b || 0;
    return Za(a.prototype, "$$class/" + c, function() {
      return new yf(a, c)
    })
  };

  function ff(a) {
    return a.qh || (Object.defineProperties(a, {
      qh: {
        value: ++Af,
        enumerable: !1
      }
    }), a.qh)
  }
  var Af = 0;

  function Bf() {}
  r(Bf, wf);

  function Cf(a) {
    var b = new Bf;
    lf(b, a);
    b.j(Error(b));
    return b
  };

  function Df() {}
  r(Df, wf);

  function Ef(a) {
    var b = new Df;
    lf(b, a);
    b.j(Error(b));
    return b
  };

  function sf() {}
  r(sf, wf);
  sf.prototype.j = function(a) {
    wf.prototype.j.call(this, "__noinit__" === this.o ? a : this.o)
  };

  function rf(a) {
    a.o = "__noinit__"
  };

  function qf() {}
  r(qf, sf);

  function Ff() {
    var a = Gf();
    return ab(a)
  };

  function Hf(a) {
    return Math.max(Math.min(a, 2147483647), -2147483648) | 0
  };

  function If() {}
  var Jf;
  r(If, df);

  function Kf() {}
  r(Kf, If);

  function Lf(a, b) {
    return "string" == typeof a ? a.charCodeAt(b) : a.Ca.charCodeAt(b)
  };

  function Mf() {}
  r(Mf, df);
  Mf.prototype.toString = l("Ca");

  function Nf() {}
  r(Nf, Mf);

  function Of() {}
  r(Of, df);

  function Pf() {};

  function Qf() {}
  r(Qf, df);

  function Rf(a, b) {
    return a.oa ? a.oa(b) : Object.is(a, b)
  }

  function Sf(a) {
    var b;
    Array.isArray(a) ? b = gf(Tf(a)) + "@" + jf(ff(a)) : b = a.toString();
    return b
  }

  function Uf(a) {
    var b = typeof a;
    if ("number" == b) return hf(Kf);
    if ("boolean" == b) return hf(Of);
    if ("string" == b) return hf(Vf);
    if (Array.isArray(a)) return Tf(a);
    if (a instanceof df) return hf(a.constructor);
    if (a) return hf("function" == b ? Pf : Qf);
    throw new TypeError("null.getClass");
  };

  function tf(a, b, c, d) {
    return Wf(a, d, {
      Fg: b,
      wi: c,
      Pf: a.length
    })
  }

  function Wf(a, b, c) {
    var d = a[0];
    if (null == d) return null;
    var e = [];
    c && (e.Lj = c);
    if (1 < a.length) {
      a = a.slice(1);
      c = c && {
        Fg: c.Fg,
        wi: c.wi,
        Pf: c.Pf - 1
      };
      for (var f = 0; f < d; f++) e[f] = Wf(a, b, c)
    } else if (void 0 !== b)
      for (a = 0; a < d; a++) e[a] = b;
    else e.length = d;
    return e
  }

  function Tf(a) {
    return (a = a.Lj) ? hf(a.Fg, a.Pf) : hf(df, 1)
  };

  function Xf(a) {
    return 56320 <= a && 57343 >= a
  };

  function Yf() {}
  r(Yf, Bf);
  var Zf;

  function $f() {
    $f = h();
    Zf = tf([256], ag, bg, ag.g)
  };

  function ag() {
    this.g = 0
  }
  r(ag, If);

  function jf(a) {
    return (a >>> 0).toString(16)
  }

  function cg(a) {
    if (-129 < a && 128 > a) {
      var b = a + 128,
        c = ($f(), Zf)[b];
      c || (c = Zf[b] = dg(a));
      return c
    }
    return dg(a)
  }

  function dg(a) {
    var b = new ag;
    b.g = a;
    return b
  }
  ag.prototype.oa = function(a) {
    return bg(a) && a.g == this.g
  };
  ag.prototype.td = l("g");
  ag.prototype.toString = function() {
    return "" + this.g
  };

  function bg(a) {
    return a instanceof ag
  };
  var eg, fg;

  function gg(a) {
    hg();
    var b = ":" + O(a),
      c = eg[b];
    if (null != c) return Hf(c);
    c = fg[b];
    if (null == c) {
      var d = 0;
      c = a.length;
      for (var e = c - 4, f = 0; f < e;) d = a.charCodeAt(f + 3) + 31 * (a.charCodeAt(f + 2) + 31 * (a.charCodeAt(f + 1) + 31 * (a.charCodeAt(f) + 31 * d))), d |= 0, f += 4;
      for (; f < c;) d *= 31, e = f++, d += a.charCodeAt(e);
      a = d | 0
    } else a = Hf(c);
    256 == ig && (fg = eg, eg = new df, ig = 0);
    ++ig;
    return eg[b] = a
  }

  function hg() {
    hg = h();
    fg = new df;
    ig = 0;
    eg = new df
  }
  var ig = 0;

  function jg(a) {
    switch (typeof a) {
      case "string":
        return gg(a);
      case "number":
        return Hf(a);
      case "boolean":
        return a ? 1231 : 1237;
      default:
        return null == a ? 0 : ff(a)
    }
  };

  function Vf() {}
  r(Vf, df);

  function O(a) {
    return null == a ? "null" : Sf(a)
  }

  function kg(a, b) {
    var c = a.length,
      d = Lf(a, b++),
      e, f;
    55296 <= d && 56319 >= d && b < c && Xf(e = Lf(a, b)) ? f = 65536 + ((d & 1023) << 10) + (e & 1023) : f = d;
    return f
  }

  function lg(a, b) {
    return ef(a, b)
  };

  function Gf() {
    var a = Date.now();
    return mb(a)
  };

  function mg(a, b) {
    if (!a) throw Ef(O(b)).g;
  };

  function ng(a, b) {
    a = O(a);
    if (b)
      for (var c = 0; c < b.length; c++) {
        var d = b,
          e = c;
        var f = b[c];
        try {
          var g = O(f)
        } catch (p) {
          if (p = pf(p), p instanceof vf) g = p, f = O(gf(Uf(f))) + String.fromCharCode(64) + O(jf(jg(f))), O(f), g = "<" + O(f) + " threw " + O(gf(Uf(g))) + ">";
          else throw p.g;
        }
        d[e] = g
      } else b = ["(Object[])null"];
    c = new Nf;
    c.Ca = "";
    for (d = g = 0; d < b.length;) {
      e = a.indexOf("%s", g);
      if (-1 == e) break;
      f = a;
      var k = g,
        n = e;
      g = O(c.Ca);
      f = O(f).substr(k, n - k);
      c.Ca = g + O(f);
      f = b[d++];
      c.Ca = O(c.Ca) + O(f);
      g = e + 2
    }
    e = a;
    f = g;
    g = a.length;
    a = O(c.Ca);
    e = O(e).substr(f, g - f);
    c.Ca =
      a + O(e);
    if (d < b.length) {
      c.Ca = O(c.Ca) + " [";
      a = b[d++];
      for (c.Ca = O(c.Ca) + O(a); d < b.length;) c.Ca = O(c.Ca) + ", ", a = b[d++], c.Ca = O(c.Ca) + O(a);
      c.Ca = O(c.Ca) + String.fromCharCode(93)
    }
    return c.toString()
  };

  function og(a, b) {
    if (null == b)
      for (b = 0; b < a.length; b++) {
        if (null == a[b]) return b
      } else
        for (var c = 0; c < a.length; c++)
          if (Rf(b, a[c])) return c;
    return -1
  };

  function pg(a, b) {
    a.push(b)
  }

  function qg(a, b) {
    for (var c = 0, d = b.length; c < d; c++) a.push(b[c])
  };

  function rg(a) {
    if (null == a) return "null";
    var b = typeof a;
    return "object" === b ? a instanceof Array ? "array" : b : b
  };

  function sg(a, b, c) {
    a[b] = void 0 !== c ? c : null
  }

  function tg(a) {
    for (var b in a) return !1;
    return !0
  }

  function ug(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  };

  function vg(a, b, c) {
    bg(c) ? a[b] = c.g : sg(a, b, c)
  };
  var wg = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
  } : function(a, b) {
    return Array(b + 1).join(a)
  };

  function xg() {
    this.G = !1
  }
  r(xg, df);
  xg.prototype.dispose = function() {
    if (!this.G) {
      this.G = !0;
      this.N();
      var a = hf(this.constructor);
      O(bf(a.j));
      O(zf("[]", a.g))
    }
  };
  xg.prototype.ua = l("G");

  function yg(a, b) {
    b && !b.ua() && (a.ua() ? b.dispose() : (a.A || (a.A = []), a.A.push(b)))
  }
  xg.prototype.N = function() {
    if (this.A) {
      for (var a = 0; a < this.A.length; a++) this.A[a].dispose();
      this.A.length = 0
    }
  };
  var zg = !Pd || ge(9),
    Ag = !Rd && !Pd || Pd && ge(9) || Rd && fe("1.9.1");

  function Bg(a, b) {
    return a + Math.random() * (b - a)
  };

  function Cg(a) {
    return a ? new Dg(9 == a.nodeType ? a : a.ownerDocument || a.document) : Xa || (Xa = new Dg)
  }

  function Eg(a, b) {
    return "string" === typeof b ? a.getElementById(b) : b
  }

  function Fg(a, b) {
    Zb(b, function(c, d) {
      c && "object" == typeof c && c.Nc && (c = c.qc());
      "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Gg.hasOwnProperty(d) ? a.setAttribute(Gg[d], c) : Cc(d, "aria-") || Cc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
    })
  }
  var Gg = {
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

  function Hg(a) {
    return a.parentWindow || a.defaultView
  }

  function Ig(a, b, c) {
    return Jg(document, arguments)
  }

  function Jg(a, b) {
    var c = String(b[0]),
      d = b[1];
    if (!zg && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', wd(d.name), '"');
      if (d.type) {
        c.push(' type="', wd(d.type), '"');
        var e = {};
        qc(e, d);
        delete e.type;
        d = e
      }
      c.push(">");
      c = c.join("")
    }
    c = Kg(a, c);
    d && ("string" === typeof d ? c.className = d : Ha(d) ? c.className = d.join(" ") : Fg(c, d));
    2 < b.length && Lg(a, c, b);
    return c
  }

  function Lg(a, b, c) {
    function d(g) {
      g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !Ia(f) || Ka(f) && 0 < f.nodeType ? d(f) : vb(Mg(f) ? Mb(f) : f, d)
    }
  }

  function Kg(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b)
  }

  function Ng(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  }

  function Og(a) {
    return Ag && void 0 != a.children ? a.children : xb(a.childNodes, function(b) {
      return 1 == b.nodeType
    })
  }

  function Mg(a) {
    if (a && "number" == typeof a.length) {
      if (Ka(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (Ja(a)) return "function" == typeof a.item
    }
    return !1
  }

  function Dg(a) {
    this.g = a || t.document || document
  }
  m = Dg.prototype;
  m.yk = function(a, b, c) {
    return Jg(this.g, arguments)
  };
  m.createElement = function(a) {
    return Kg(this.g, a)
  };
  m.appendChild = function(a, b) {
    a.appendChild(b)
  };
  m.Yh = Ng;
  m.contains = function(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  };

  function Pg(a, b, c) {
    var d = rg(a[c]);
    if (!ef(d, rg(b[c]))) return !1;
    switch (d) {
      case "null":
        return !0;
      case "boolean":
        return a[c] == b[c];
      case "number":
        return a[c] == b[c];
      case "string":
        return ef(a[c], b[c]);
      case "object":
        return Qg(a[c], b[c]);
      case "array":
        return Rg(a[c], b[c]);
      default:
        throw xf("Unsupported type " + O(d) + " for key " + O(c)).g;
    }
  }

  function Qg(a, b) {
    if (ef(a, b)) return !0;
    if (!a || !b) return !1;
    var c = Object.keys(a).length,
      d = Object.keys(b).length;
    if (c != d) return !1;
    for (d = 0; d < c; d++) {
      var e = Object.keys(a)[d];
      if (!Pg(a, b, e)) return !1
    }
    return !0
  };

  function Rg(a, b) {
    if (ef(a, b)) return !0;
    if (!a || !b) return !1;
    var c = a.length;
    if (c != b.length) return !1;
    for (var d = 0; d < c; d++)
      if (!Sg(a, b, d)) return !1;
    return !0
  }

  function Sg(a, b, c) {
    var d = rg(a[c]);
    if (!ef(d, rg(b[c]))) return !1;
    switch (d) {
      case "null":
        return !0;
      case "boolean":
        return a[c] == b[c];
      case "number":
        return a[c] == b[c];
      case "string":
        return ef(a[c], b[c]);
      case "array":
        return Rg(a[c], b[c]);
      case "object":
        return Qg(a[c], b[c]);
      default:
        throw xf("Unsupported type " + O(d)).g;
    }
  };
  var Tg;

  function Ug() {
    Ug = h();
    Tg = new Vg(null)
  };

  function Wg() {}
  r(Wg, df);
  Wg.prototype.get = function() {
    if (!this.g) {
      var a = t._docs_flag_initialData;
      this.g = a ? a : {}
    }
    return this.g
  };

  function Vg(a) {
    this.g = new Wg;
    if (a)
      for (var b in a) {
        var c = b,
          d = a[b];
        vg(this.g.get(), c, d)
      }
  }
  r(Vg, df);

  function Xg() {
    return Ug(), Tg
  }
  Vg.prototype.clear = function() {
    this.g = new Wg
  };
  Vg.prototype.get = function(a) {
    return this.g.get()[a]
  };

  function Yg(a, b) {
    a = a.g.get();
    return b in a
  }

  function Zg(a, b) {
    a = a.get(b);
    return "string" == typeof a ? "true" == a || "1" == a : !!a
  }

  function $g(a, b) {
    if (!Yg(a, b) || null == a.get(b)) return NaN;
    try {
      var c = O(a.get(b));
      Jf || (Jf = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
      if (!Jf.test(c)) {
        var d = 'For input string: "' + O(c) + '"',
          e = new Yf;
        lf(e, d);
        e.j(Error(e));
        throw e.g;
      }
      return parseFloat(c)
    } catch (f) {
      f = pf(f);
      if (f instanceof Yf) return NaN;
      throw f.g;
    }
  }

  function ah(a, b) {
    if (!Yg(a, b)) return "";
    a = a.get(b);
    return null == a ? "" : "number" === typeof a && Hf(a) == Hf(a) ? "" + Hf(a) : O(a)
  }

  function bh(a, b) {
    var c = a.get(b);
    if (!Yg(a, b) || null == c) return [];
    if (!(c instanceof Array)) throw Cf("Invalid key for array: " + O(b)).g;
    for (var d = [], e = 0; e < c.length; e++) {
      var f = c[e];
      f = "object" === rg(f) ? "[object Object]" : O(f);
      d.push(f)
    }
    vg(a.g.get(), b, d);
    return d
  };

  function ch(a, b) {
    mf(this);
    this.A = b;
    this.B = a;
    nf(this);
    this.j(Error(this))
  }
  r(ch, wf);
  ch.prototype.getError = l("g");
  ch.prototype.Ra = function() {
    return wf.prototype.w.call(this)
  };
  ch.prototype.w = function() {
    return this.Ra()
  };
  ia.Object.defineProperties(ch.prototype, {
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
        a.cause = b.Mf;
        for (var c in b) 0 != c.indexOf("__java$") && (a[c] = b[c]);
        return a
      }
    }
  });

  function dh(a, b) {
    return eh().g(b) in a
  };

  function fh() {}
  r(fh, df);
  fh.prototype.g = function(a) {
    if (null == a) throw a = new qf, lf(a, "can't identity hash null"), rf(a), a.j(new TypeError(a)), a.g;
    return ":" + jg(a)
  };
  var gh;

  function eh() {
    hh();
    return gh
  }

  function hh() {
    hh = h();
    gh = new fh
  };

  function ih() {
    xg.call(this);
    this.g = {};
    this.j = null
  }
  r(ih, xg);
  ih.prototype.N = function() {
    xg.prototype.N.call(this);
    var a = this.g,
      b;
    for (b in a) delete a[b];
    this.j = null
  };
  ih.prototype.dispatchEvent = function(a) {
    if (!this.j) {
      var b = this.g;
      var c = [],
        d;
      for (d in b) c.push(b[d]);
      this.j = c
    }
    b = this.j;
    for (c = 0; c < b.length; c++)(0, b[c])(a)
  };

  function jh() {
    var a = a ? a : function(c) {
      return Hf(Math.floor(Math.random() * c))
    };
    var b = jf(a(2147483647));
    b = O(wg("0", Math.max(0, 8 - b.length))) + O(b);
    a = jf(a(2147483647));
    return O(a) + O(b)
  };

  function kh() {}
  r(kh, df);

  function lh() {}
  r(lh, df);

  function mh() {
    xg.call(this);
    this.g = []
  }
  r(mh, xg);

  function nh(a, b, c) {
    a = a.g;
    if (null == c) throw b = new qf, mf(b), nf(b), rf(b), b.j(new TypeError(b)), b.g;
    if (dh(b.g, c)) throw Ef(ng("Observer %s previously registered.", [c])).g;
    sg(b.g, eh().g(c), c);
    b.j = null;
    var d = new lh;
    d.g = b;
    d.j = c;
    a.push(d)
  }
  mh.prototype.N = function() {
    for (var a = this.g.pop(); a;) {
      if (dh(a.g.g, a.j)) {
        var b = a.g,
          c = a = a.j;
        if (!dh(b.g, c)) throw Cf(ng("Trying to remove inexistant Observer %s.", [a])).g;
        a = c;
        a = eh().g(a);
        delete b.g[a];
        b.j = null
      }
      a = this.g.pop()
    }
    xg.prototype.N.call(this)
  };

  function oh(a) {
    this.g = a
  }
  r(oh, df);
  oh.prototype.getType = l("g");

  function ph(a) {
    this.g = a
  }
  r(ph, df);
  ph.prototype.log = function(a, b, c) {
    b && null != c ? this.g.log(a.g, b, c) : b ? this.g.log(a.g, b) : this.g.log(a.g)
  };
  var qh = "closure_listenable_" + (1E6 * Math.random() | 0);

  function rh(a) {
    return !(!a || !a[qh])
  }
  var sh = 0;

  function th() {
    xg.call(this);
    this.g = 1;
    this.w = !1;
    this.j = [];
    this.o = []
  }
  r(th, xg);
  m = th.prototype;
  m.P = function() {
    mg(2 == this.g, "XDeferred does not have an value");
    return this.C
  };
  m.getError = function() {
    mg(this.Zd(), "XDeferred does not have an error");
    return this.B
  };
  m.Zd = function() {
    return 3 == this.g
  };
  m.callback = function(a) {
    mg(4 != this.g, "Cannot fire a disposed XDeferred");
    mg(1 == this.g, "Cannot fire a XDeferred more than once");
    this.C = a;
    uh(this, !0)
  };
  m.V = function(a) {
    mg(4 != this.g, "Cannot fire a disposed XDeferred");
    mg(1 == this.g, "Cannot fire a XDeferred more than once");
    this.B = a;
    uh(this, !1)
  };

  function vh(a, b, c) {
    mg(4 != a.g, "Cannot add callback to disposed XDeferred");
    mg(!a.w, "Cannot add callback to XDeferred that is firing its callback/errback queue");
    wh(a, b, c) || (b && pg(a.j, function(d) {
      b(d)
    }), c && pg(a.o, function(d) {
      c(d)
    }))
  }
  m.transform = function(a) {
    function b(e) {
      d.V(e)
    }

    function c(e) {
      var f = null;
      try {
        f = a(e)
      } catch (g) {
        g = pf(g);
        if (g instanceof vf) {
          d.V(g);
          return
        }
        throw g.g;
      }
      d.callback(f)
    }
    mg(0 == this.w, "Cannot add callback to XDeferred that is firing its callback/errback queue");
    var d = new th;
    if (wh(this, c, b)) return d;
    this.j.push(c);
    this.o.push(b);
    return d
  };
  m.fa = function(a) {
    function b(e) {
      d.callback(e)
    }

    function c(e) {
      var f = null;
      try {
        f = a(e)
      } catch (g) {
        g = pf(g);
        if (g instanceof vf) {
          d.V(g);
          return
        }
        throw g.g;
      }
      d.callback(f)
    }
    var d = new th;
    if (wh(this, b, c)) return d;
    this.j.push(b);
    this.o.push(c);
    return d
  };
  m.N = function() {
    this.g = 4;
    this.j.length = 0;
    this.o.length = 0;
    xg.prototype.N.call(this)
  };

  function uh(a, b) {
    a.w = !0;
    if (b)
      for (a.g = 2, b = 0; b < a.j.length; b++)(0, a.j[b])(a.C);
    else
      for (a.g = 3, b = 0; b < a.o.length; b++)(0, a.o[b])(a.B);
    a.w = !1;
    a.j.length = 0;
    a.o.length = 0
  }

  function wh(a, b, c) {
    return 1 != a.g ? (a.w = !0, 2 == a.g && b ? b(a.C) : a.Zd() && c && c(a.B), a.w = !1, !0) : !1
  };

  function xh(a, b) {
    this.o = a;
    this.w = b;
    this.j = 0;
    this.g = null
  }
  xh.prototype.get = function() {
    if (0 < this.j) {
      this.j--;
      var a = this.g;
      this.g = a.next;
      a.next = null
    } else a = this.o();
    return a
  };

  function yh(a, b) {
    a.w(b);
    100 > a.j && (a.j++, b.next = a.g, a.g = b)
  };
  var zh = [],
    Ah = [],
    Bh = !1;

  function Ch(a) {
    zh[zh.length] = a;
    if (Bh)
      for (var b = 0; b < Ah.length; b++) a(u(Ah[b].g, Ah[b]))
  };

  function Dh(a) {
    t.setTimeout(function() {
      throw a;
    }, 0)
  }
  var Eh;

  function Fh() {
    var a = t.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !dd("Presto") && (a = function() {
      var e = Kg(document, "IFRAME");
      e.style.display = "none";
      td(e, new yc(Ac, wc(xc)));
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(od(qd));
      e.close();
      var g = "callImmediate" + Math.random(),
        k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = u(function(n) {
        if (("*" == k || n.origin == k) &&
          n.data == g) this.port1.onmessage()
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function() {
          f.postMessage(g, k)
        }
      }
    });
    if ("undefined" !== typeof a && !hd()) {
      var b = new a,
        c = {},
        d = c;
      b.port1.onmessage = function() {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.uh;
          c.uh = null;
          e()
        }
      };
      return function(e) {
        d.next = {
          uh: e
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof document && "onreadystatechange" in Kg(document, "SCRIPT") ? function(e) {
      var f = Kg(document, "SCRIPT");
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
      t.setTimeout(e, 0)
    }
  }

  function Gh(a) {
    return a
  }
  Ch(function(a) {
    Gh = a
  });

  function Hh() {
    this.j = this.g = null
  }
  var Jh = new xh(function() {
    return new Ih
  }, function(a) {
    a.reset()
  });
  Hh.prototype.add = function(a, b) {
    var c = Jh.get();
    c.set(a, b);
    this.j ? this.j.next = c : this.g = c;
    this.j = c
  };
  Hh.prototype.remove = function() {
    var a = null;
    this.g && (a = this.g, this.g = this.g.next, this.g || (this.j = null), a.next = null);
    return a
  };

  function Ih() {
    this.next = this.scope = this.g = null
  }
  Ih.prototype.set = function(a, b) {
    this.g = a;
    this.scope = b;
    this.next = null
  };
  Ih.prototype.reset = function() {
    this.next = this.scope = this.g = null
  };

  function Kh(a, b) {
    Lh || Mh();
    Nh || (Lh(), Nh = !0);
    Oh.add(a, b)
  }
  var Lh;

  function Mh() {
    if (t.Promise && t.Promise.resolve) {
      var a = t.Promise.resolve(void 0);
      Lh = function() {
        a.then(Ph)
      }
    } else Lh = function() {
      var b = Ph;
      b = Gh(b);
      !Ja(t.setImmediate) || t.Window && t.Window.prototype && !dd("Edge") && t.Window.prototype.setImmediate == t.setImmediate ? (Eh || (Eh = Fh()), Eh(b)) : t.setImmediate(b)
    }
  }
  var Nh = !1,
    Oh = new Hh;

  function Ph() {
    for (var a; a = Oh.remove();) {
      try {
        a.g.call(a.scope)
      } catch (b) {
        Dh(b)
      }
      yh(Jh, a)
    }
    Nh = !1
  };

  function Qh(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };

  function Rh(a) {
    this.g = 0;
    this.C = void 0;
    this.w = this.j = this.o = null;
    this.A = this.B = !1;
    if (a != Fa) try {
      var b = this;
      a.call(void 0, function(c) {
        Sh(b, 2, c)
      }, function(c) {
        Sh(b, 3, c)
      })
    } catch (c) {
      Sh(this, 3, c)
    }
  }

  function Th() {
    this.next = this.context = this.j = this.w = this.g = null;
    this.o = !1
  }
  Th.prototype.reset = function() {
    this.context = this.j = this.w = this.g = null;
    this.o = !1
  };
  var Uh = new xh(function() {
    return new Th
  }, function(a) {
    a.reset()
  });

  function Vh(a, b, c) {
    var d = Uh.get();
    d.w = a;
    d.j = b;
    d.context = c;
    return d
  }

  function Wh(a) {
    if (a instanceof Rh) return a;
    var b = new Rh(Fa);
    Sh(b, 2, a);
    return b
  }

  function P(a) {
    return new Rh(function(b, c) {
      c(a)
    })
  }

  function Xh(a, b, c) {
    Yh(a, b, c, null) || Kh(Ra(b, a))
  }

  function Zh(a) {
    return new Rh(function(b, c) {
      a.length || b(void 0);
      for (var d = 0, e; d < a.length; d++) e = a[d], Xh(e, b, c)
    })
  }

  function $h(a) {
    return new Rh(function(b, c) {
      var d = a.length,
        e = [];
      if (d)
        for (var f = function(p, x) {
            d--;
            e[p] = x;
            0 == d && b(e)
          }, g = function(p) {
            c(p)
          }, k = 0, n; k < a.length; k++) n = a[k], Xh(n, Ra(f, k), g);
      else b(e)
    })
  }

  function ai(a) {
    return new Rh(function(b) {
      var c = a.length,
        d = [];
      if (c)
        for (var e = function(k, n, p) {
            c--;
            d[k] = n ? {
              Wk: !0,
              value: p
            } : {
              Wk: !1,
              reason: p
            };
            0 == c && b(d)
          }, f = 0, g; f < a.length; f++) g = a[f], Xh(g, Ra(e, f, !0), Ra(e, f, !1));
      else b(d)
    })
  }

  function bi() {
    var a, b, c = new Rh(function(d, e) {
      a = d;
      b = e
    });
    return new ci(c, a, b)
  }
  Rh.prototype.then = function(a, b, c) {
    return di(this, Ja(a) ? a : null, Ja(b) ? b : null, c)
  };
  Rh.prototype.$goog_Thenable = !0;

  function ei(a, b, c) {
    b = Vh(b, b, c);
    b.o = !0;
    fi(a, b);
    return a
  }
  m = Rh.prototype;
  m.fa = function(a, b) {
    return di(this, null, a, b)
  };
  m.cancel = function(a) {
    if (0 == this.g) {
      var b = new gi(a);
      Kh(function() {
        hi(this, b)
      }, this)
    }
  };

  function hi(a, b) {
    if (0 == a.g)
      if (a.o) {
        var c = a.o;
        if (c.j) {
          for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.g && 1 == d ? hi(c, b) : (f ? (d = f, d.next == c.w && (c.w = d), d.next = d.next.next) : ii(c), ji(c, e, 3, b)))
        }
        a.o = null
      } else Sh(a, 3, b)
  }

  function fi(a, b) {
    a.j || 2 != a.g && 3 != a.g || ki(a);
    a.w ? a.w.next = b : a.j = b;
    a.w = b
  }

  function di(a, b, c, d) {
    var e = Vh(null, null, null);
    e.g = new Rh(function(f, g) {
      e.w = b ? function(k) {
        try {
          var n = b.call(d, k);
          f(n)
        } catch (p) {
          g(p)
        }
      } : f;
      e.j = c ? function(k) {
        try {
          var n = c.call(d, k);
          void 0 === n && k instanceof gi ? g(k) : f(n)
        } catch (p) {
          g(p)
        }
      } : g
    });
    e.g.o = a;
    fi(a, e);
    return e.g
  }
  m.Sm = function(a) {
    this.g = 0;
    Sh(this, 2, a)
  };
  m.Tm = function(a) {
    this.g = 0;
    Sh(this, 3, a)
  };

  function Sh(a, b, c) {
    0 == a.g && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, Yh(c, a.Sm, a.Tm, a) || (a.C = c, a.g = b, a.o = null, ki(a), 3 != b || c instanceof gi || li(a, c)))
  }

  function Yh(a, b, c, d) {
    if (a instanceof Rh) return fi(a, Vh(b || Fa, c || null, d)), !0;
    if (Qh(a)) return a.then(b, c, d), !0;
    if (Ka(a)) try {
      var e = a.then;
      if (Ja(e)) return mi(a, e, b, c, d), !0
    } catch (f) {
      return c.call(d, f), !0
    }
    return !1
  }

  function mi(a, b, c, d, e) {
    function f(n) {
      k || (k = !0, d.call(e, n))
    }

    function g(n) {
      k || (k = !0, c.call(e, n))
    }
    var k = !1;
    try {
      b.call(a, g, f)
    } catch (n) {
      f(n)
    }
  }

  function ki(a) {
    a.B || (a.B = !0, Kh(a.Qk, a))
  }

  function ii(a) {
    var b = null;
    a.j && (b = a.j, a.j = b.next, b.next = null);
    a.j || (a.w = null);
    return b
  }
  m.Qk = function() {
    for (var a; a = ii(this);) ji(this, a, this.g, this.C);
    this.B = !1
  };

  function ji(a, b, c, d) {
    if (3 == c && b.j && !b.o)
      for (; a && a.A; a = a.o) a.A = !1;
    if (b.g) b.g.o = null, ni(b, c, d);
    else try {
      b.o ? b.w.call(b.context) : ni(b, c, d)
    } catch (e) {
      oi.call(null, e)
    }
    yh(Uh, b)
  }

  function ni(a, b, c) {
    2 == b ? a.w.call(a.context, c) : a.j && a.j.call(a.context, c)
  }

  function li(a, b) {
    a.A = !0;
    Kh(function() {
      a.A && oi.call(null, b)
    })
  }
  var oi = Dh;

  function gi(a) {
    Wa.call(this, a)
  }
  w(gi, Wa);
  gi.prototype.name = "cancel";

  function ci(a, b, c) {
    this.g = a;
    this.resolve = b;
    this.reject = c
  };
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  function pi(a, b) {
    this.B = [];
    this.W = a;
    this.L = b || null;
    this.w = this.g = !1;
    this.o = void 0;
    this.I = this.aa = this.D = !1;
    this.C = 0;
    this.j = null;
    this.A = 0
  }
  m = pi.prototype;
  m.cancel = function(a) {
    if (this.g) this.o instanceof pi && this.o.cancel();
    else {
      if (this.j) {
        var b = this.j;
        delete this.j;
        a ? b.cancel(a) : (b.A--, 0 >= b.A && b.cancel())
      }
      this.W ? this.W.call(this.L, this) : this.I = !0;
      this.g || this.V(new qi(this))
    }
  };
  m.zh = function(a, b) {
    this.D = !1;
    ri(this, a, b)
  };

  function ri(a, b, c) {
    a.g = !0;
    a.o = c;
    a.w = !b;
    si(a)
  }

  function ti(a) {
    if (a.g) {
      if (!a.I) throw new ui(a);
      a.I = !1
    }
  }
  m.callback = function(a) {
    ti(this);
    ri(this, !0, a)
  };
  m.V = function(a) {
    ti(this);
    ri(this, !1, a)
  };

  function vi(a, b, c) {
    return wi(a, b, null, c)
  }

  function xi(a, b, c) {
    return wi(a, null, b, c)
  }

  function yi(a, b) {
    return wi(a, b, b, void 0)
  }

  function zi(a, b, c) {
    wi(a, b, function(d) {
      var e = b.call(this, d);
      if (void 0 === e) throw d;
      return e
    }, c)
  }

  function wi(a, b, c, d) {
    a.B.push([b, c, d]);
    a.g && si(a);
    return a
  }
  m.then = function(a, b, c) {
    var d, e, f = new Rh(function(g, k) {
      d = g;
      e = k
    });
    wi(this, d, function(g) {
      g instanceof qi ? f.cancel() : e(g)
    });
    return f.then(a, b, c)
  };
  pi.prototype.$goog_Thenable = !0;

  function Ai(a, b) {
    wi(a, b.callback, b.V, b)
  }

  function Bi(a, b) {
    b instanceof pi ? vi(a, u(b.Jd, b)) : vi(a, function() {
      return b
    })
  }
  pi.prototype.Jd = function(a) {
    var b = new pi;
    Ai(this, b);
    a && (b.j = this, this.A++);
    return b
  };

  function Ci(a) {
    return zb(a.B, function(b) {
      return Ja(b[1])
    })
  }

  function si(a) {
    if (a.C && a.g && Ci(a)) {
      var b = a.C,
        c = Di[b];
      c && (t.clearTimeout(c.g), delete Di[b]);
      a.C = 0
    }
    a.j && (a.j.A--, delete a.j);
    b = a.o;
    for (var d = c = !1; a.B.length && !a.D;) {
      var e = a.B.shift(),
        f = e[0],
        g = e[1];
      e = e[2];
      if (f = a.w ? g : f) try {
        var k = f.call(e || a.L, b);
        void 0 !== k && (a.w = a.w && (k == b || k instanceof Error), a.o = b = k);
        if (Qh(b) || "function" === typeof t.Promise && b instanceof t.Promise) d = !0, a.D = !0
      } catch (n) {
        b = n, a.w = !0, Ci(a) || (c = !0)
      }
    }
    a.o = b;
    d && (k = u(a.zh, a, !0), d = u(a.zh, a, !1), b instanceof pi ? (wi(b, k, d), b.aa = !0) : b.then(k, d));
    c &&
      (b = new Ei(b), Di[b.g] = b, a.C = b.g)
  }

  function Fi(a) {
    var b = new pi;
    b.callback(a);
    return b
  }

  function Gi(a) {
    var b = new pi;
    a.then(function(c) {
      b.callback(c)
    }, function(c) {
      b.V(c)
    });
    return b
  }

  function Hi(a) {
    var b = new pi;
    b.V(a);
    return b
  }

  function ui(a) {
    Wa.call(this);
    this.Gc = a
  }
  w(ui, Wa);
  ui.prototype.message = "Deferred has already fired";
  ui.prototype.name = "AlreadyCalledError";

  function qi(a) {
    Wa.call(this);
    this.Gc = a
  }
  w(qi, Wa);
  qi.prototype.message = "Deferred was canceled";
  qi.prototype.name = "CanceledError";

  function Ei(a) {
    this.g = t.setTimeout(u(this.o, this), 0);
    this.j = a
  }
  Ei.prototype.o = function() {
    delete Di[this.g];
    throw this.j;
  };
  var Di = {};

  function Ii(a) {
    return new Rh(function(b, c) {
      vh(a, function(d) {
        b(d)
      }, function(d) {
        c(d)
      })
    })
  };

  function Ji(a) {
    if (null == a) return a = new kf, mf(a), nf(a), a.j(Error(a)), a;
    if (uf(a)) return a;
    if (a instanceof Error) return pf(a);
    throw Cf("Unsupported type cannot be used to create a Throwable.").g;
  };

  function Ki(a) {
    var b = t.onerror,
      c = !1;
    Sd && !fe("535.3") && (c = !c);
    t.onerror = function(d, e, f, g, k) {
      b && b(d, e, f, g, k);
      a({
        message: d,
        fileName: e,
        line: f,
        lineNumber: f,
        $r: g,
        error: k
      });
      return c
    }
  }

  function Li(a) {
    function b(f, g) {
      var k = g + "  ";
      try {
        if (void 0 === f) c.push("undefined");
        else if (null === f) c.push("NULL");
        else if ("string" === typeof f) c.push('"' + f.replace(/\n/g, "\n" + g) + '"');
        else if (Ja(f)) c.push(String(f).replace(/\n/g, "\n" + g));
        else if (Ka(f)) {
          f[Ma] || d.push(f);
          var n = La(f);
          if (e[n]) c.push("*** reference loop detected (id=" + n + ") ***");
          else {
            e[n] = !0;
            c.push("{");
            for (var p in f) Ja(f[p]) || (c.push("\n"), c.push(k), c.push(p + " = "), b(f[p], k));
            c.push("\n" + g + "}");
            delete e[n]
          }
        } else c.push(f)
      } catch (x) {
        c.push("*** " +
          x + " ***")
      }
    }
    var c = [],
      d = [],
      e = {};
    b(a, "");
    for (a = 0; a < d.length; a++) Oa(d[a]);
    return c.join("")
  }

  function Mi(a) {
    var b = Ea("window.location.href");
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
      a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : Ni(a.constructor)) + '"' : "Unknown Error of unknown type"), {
      message: b,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: a.stack || "Not available"
    })
  }

  function Oi(a, b) {
    a instanceof Error || (a = Error(a), Error.captureStackTrace && Error.captureStackTrace(a, Oi));
    a.stack || (a.stack = Pi(Oi));
    if (b) {
      for (var c = 0; a["message" + c];) ++c;
      a["message" + c] = String(b)
    }
    return a
  }

  function Qi(a, b) {
    a = Oi(a);
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

  function Pi(a) {
    var b = Error();
    if (Error.captureStackTrace) Error.captureStackTrace(b, a || Pi), b = String(b.stack);
    else {
      try {
        throw b;
      } catch (c) {
        b = c
      }
      b = (b = b.stack) ? String(b) : null
    }
    b || (b = Ri(a || arguments.callee.caller, []));
    return b
  }

  function Ri(a, b) {
    var c = [];
    if (Db(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
      c.push(Ni(a) + "(");
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
            f = (f = Ni(f)) ? f : "[fn]";
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
        c.push(Ri(a.caller, b))
      } catch (g) {
        c.push("[exception trying to get caller]\n")
      }
    } else a ?
      c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
  }

  function Ni(a) {
    if (Si[a]) return Si[a];
    a = String(a);
    if (!Si[a]) {
      var b = /function\s+([^\(]+)/m.exec(a);
      Si[a] = b ? b[1] : "[Anonymous]"
    }
    return Si[a]
  }
  var Si = {};

  function Ti() {}

  function Ui(a, b) {
    this.name = a;
    this.value = b
  }
  Ui.prototype.toString = l("name");
  var Vi = new Ui("SEVERE", 1E3),
    Wi = new Ui("WARNING", 900),
    Xi = new Ui("CONFIG", 700),
    Yi = [new Ui("OFF", Infinity), new Ui("SHOUT", 1200), Vi, Wi, new Ui("INFO", 800), Xi, new Ui("FINE", 500), new Ui("FINER", 400), new Ui("FINEST", 300), new Ui("ALL", 0)],
    Zi = null;
  Ti.prototype.log = h();
  Ti.prototype.config = h();
  var $i = null;
  var aj = "StopIteration" in t ? t.StopIteration : {
    message: "StopIteration",
    stack: ""
  };

  function bj() {}
  bj.prototype.next = function() {
    throw aj;
  };
  bj.prototype.Fd = function() {
    return this
  };

  function cj(a) {
    if (a instanceof bj) return a;
    if ("function" == typeof a.Fd) return a.Fd(!1);
    if (Ia(a)) {
      var b = 0,
        c = new bj;
      c.next = function() {
        for (;;) {
          if (b >= a.length) throw aj;
          if (b in a) return a[b++];
          b++
        }
      };
      return c
    }
    throw Error("Not implemented");
  }

  function dj(a, b, c) {
    if (Ia(a)) try {
      vb(a, b, c)
    } catch (d) {
      if (d !== aj) throw d;
    } else {
      a = cj(a);
      try {
        for (;;) b.call(c, a.next(), void 0, a)
      } catch (d) {
        if (d !== aj) throw d;
      }
    }
  };

  function ej(a, b) {
    this.j = {};
    this.g = [];
    this.w = this.o = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
      if (a instanceof ej)
        for (c = a.fb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else
        for (d in a) this.set(d, a[d])
  }
  m = ej.prototype;
  m.ia = l("o");
  m.sa = function() {
    fj(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
    return a
  };
  m.fb = function() {
    fj(this);
    return this.g.concat()
  };
  m.ad = function(a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (gj(this.j, c) && this.j[c] == a) return !0
    }
    return !1
  };
  m.oa = function(a, b) {
    if (this === a) return !0;
    if (this.o != a.ia()) return !1;
    b = b || hj;
    fj(this);
    for (var c, d = 0; c = this.g[d]; d++)
      if (!b(this.get(c), a.get(c))) return !1;
    return !0
  };

  function hj(a, b) {
    return a === b
  }
  m.clear = function() {
    this.j = {};
    this.w = this.o = this.g.length = 0
  };
  m.remove = function(a) {
    return gj(this.j, a) ? (delete this.j[a], this.o--, this.w++, this.g.length > 2 * this.o && fj(this), !0) : !1
  };

  function fj(a) {
    if (a.o != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length;) {
        var d = a.g[b];
        gj(a.j, d) && (a.g[c++] = d);
        b++
      }
      a.g.length = c
    }
    if (a.o != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length;) d = a.g[b], gj(e, d) || (a.g[c++] = d, e[d] = 1), b++;
      a.g.length = c
    }
  }
  m.get = function(a, b) {
    return gj(this.j, a) ? this.j[a] : b
  };
  m.set = function(a, b) {
    gj(this.j, a) || (this.o++, this.g.push(a), this.w++);
    this.j[a] = b
  };
  m.forEach = function(a, b) {
    for (var c = this.fb(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  m.clone = function() {
    return new ej(this)
  };
  m.Fd = function(a) {
    fj(this);
    var b = 0,
      c = this.w,
      d = this,
      e = new bj;
    e.next = function() {
      if (c != d.w) throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) throw aj;
      var f = d.g[b++];
      return a ? f : d.j[f]
    };
    return e
  };

  function gj(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };

  function Q() {
    this.jb = this.jb;
    this.Ha = this.Ha
  }
  Q.prototype.jb = !1;
  Q.prototype.ua = l("jb");
  Q.prototype.dispose = function() {
    this.jb || (this.jb = !0, this.N())
  };

  function R(a, b) {
    ij(a, Ra(jj, b))
  }

  function ij(a, b, c) {
    a.jb ? void 0 !== c ? b.call(c) : b() : (a.Ha || (a.Ha = []), a.Ha.push(void 0 !== c ? u(b, c) : b))
  }
  Q.prototype.N = function() {
    if (this.Ha)
      for (; this.Ha.length;) this.Ha.shift()()
  };

  function jj(a) {
    a && "function" == typeof a.dispose && a.dispose()
  }

  function kj(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      Ia(d) ? kj.apply(null, d) : jj(d)
    }
  };

  function lj(a, b) {
    Q.call(this);
    this.o = null;
    this.w = b;
    this.g = [];
    if (a > this.w) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (b = 0; b < a; b++) this.g.push(this.j())
  }
  w(lj, Q);

  function mj(a, b) {
    a.o = b
  }

  function nj(a, b) {
    a.g.length < a.w ? a.g.push(b) : oj(b)
  }
  lj.prototype.j = function() {
    return this.o ? this.o() : {}
  };

  function oj(a) {
    if (Ka(a))
      if (Ja(a.dispose)) a.dispose();
      else
        for (var b in a) delete a[b]
  }
  lj.prototype.N = function() {
    lj.na.N.call(this);
    for (var a = this.g; a.length;) oj(a.pop());
    delete this.g
  };

  function pj() {
    this.g = [];
    this.j = new ej;
    this.I = this.L = this.O = this.B = 0;
    this.o = new ej;
    this.A = this.H = 0;
    this.X = 1;
    this.w = new lj(0, 4E3);
    this.w.j = function() {
      return new qj
    };
    this.D = new lj(0, 50);
    this.D.j = function() {
      return new rj
    };
    var a = this;
    this.C = new lj(0, 2E3);
    mj(this.C, function() {
      return a.X++
    });
    this.G = {}
  }

  function rj() {
    this.nh = this.time = this.count = 0
  }
  rj.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.nh && a.push(" [VarAlloc = ", this.nh, "]");
    return a.join("")
  };

  function qj() {}

  function sj(a, b, c, d) {
    var e = []; - 1 == c ? e.push("    ") : e.push(tj(a.j - c));
    e.push(" ", uj(a.j - b));
    0 == a.g ? e.push(" Start        ") : 1 == a.g ? (e.push(" Done "), e.push(tj(a.A - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.w && e.push("[VarAlloc ", a.w, "] ");
    return e.join("")
  }
  qj.prototype.toString = function() {
    return null == this.type ? this.o : "[" + this.type + "] " + this.o
  };
  var vj = {
    Cs: !0
  };

  function wj(a) {
    a.G.stop && dj(a.j, function(b) {
      this.G.stop(b.id, vj)
    }, a);
    a.j.clear()
  }
  pj.prototype.reset = function() {
    wj(this);
    for (var a = 0; a < this.g.length; a++) {
      var b = this.g[a];
      b.id ? gj(this.j.j, b.id) || (nj(this.C, b.id), nj(this.w, b)) : nj(this.w, b)
    }
    this.g.length = 0;
    this.B = v();
    this.A = this.H = this.I = this.L = this.O = 0;
    a = this.o.fb();
    for (b = 0; b < a.length; b++) {
      var c = this.o.get(a[b]);
      c.count = 0;
      c.time = 0;
      c.nh = 0;
      nj(this.D, c)
    }
    this.o.clear()
  };
  pj.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.g.length; d++) {
      var e = this.g[d];
      1 == e.g && c.pop();
      a.push(" ", sj(e, this.B, b, c.join("")));
      b = e.j;
      a.push("\n");
      0 == e.g && c.push("|  ")
    }
    if (0 != this.j.ia()) {
      var f = v();
      a.push(" Unstopped timers:\n");
      dj(this.j, function(g) {
        a.push("  ", g, " (", f - g.startTime, " ms, started at ", uj(g.startTime), ")\n")
      })
    }
    b = this.o.fb();
    for (d = 0; d < b.length; d++) c = this.o.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.H, "\n", "Total comments created ",
      this.A, "\n", "Overhead start: ", this.O, " ms\n", "Overhead end: ", this.L, " ms\n", "Overhead comment: ", this.I, " ms\n");
    return a.join("")
  };

  function tj(a) {
    a = Math.round(a);
    var b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
  }

  function uj(a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
  }
  new pj;

  function xj(a) {
    Q.call(this);
    this.j = a
  }
  w(xj, Q);
  xj.prototype.g = function(a) {
    return yj(this, a)
  };

  function zj(a, b) {
    return (b ? "__wrapper_" : "__protected_") + La(a) + "__"
  }

  function yj(a, b) {
    var c = zj(a, !0);
    b[c] || ((b[c] = Aj(a, b))[zj(a, !1)] = b);
    return b[c]
  }

  function Aj(a, b) {
    function c() {
      if (a.ua()) return b.apply(this, arguments);
      try {
        return b.apply(this, arguments)
      } catch (e) {
        var d = e;
        if (!(d && "object" === typeof d && "string" === typeof d.message && 0 == d.message.indexOf("Error in protected function: ") || "string" === typeof d && 0 == d.indexOf("Error in protected function: "))) throw a.j(d), new Bj(d);
      } finally {}
    }
    c[zj(a, !1)] = b;
    return c
  }

  function Cj(a, b) {
    var c = Ea("window"),
      d = c[b];
    c[b] = function(e, f) {
      "string" === typeof e && (e = Ra(Sa, e));
      arguments[0] = e = yj(a, e);
      if (d.apply) return d.apply(this, arguments);
      var g = e;
      if (2 < arguments.length) {
        var k = Array.prototype.slice.call(arguments, 2);
        g = function() {
          e.apply(this, k)
        }
      }
      return d(g, f)
    };
    c[b][zj(a, !1)] = d
  }
  xj.prototype.N = function() {
    var a = Ea("window");
    var b = a.setTimeout;
    b = b[zj(this, !1)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[zj(this, !1)] || b;
    a.setInterval = b;
    xj.na.N.call(this)
  };

  function Bj(a) {
    Wa.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
    (a = (this.Mf = a) && a.stack) && "string" === typeof a && (this.stack = a)
  }
  w(Bj, Wa);

  function S(a, b) {
    this.type = a;
    this.j = this.target = b;
    this.defaultPrevented = this.o = !1
  }
  S.prototype.stopPropagation = function() {
    this.o = !0
  };
  S.prototype.w = function() {
    this.defaultPrevented = !0
  };
  var Dj = !Pd || ge(9),
    Ej = Pd && !fe("9"),
    Fj = !Sd || fe("528"),
    Gj = Rd && fe("1.9b") || Pd && fe("8") || Od && fe("9.5") || Sd && fe("528"),
    Hj = Rd && !fe("8") || Pd && !fe("9"),
    Ij = function() {
      if (!t.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function() {
            a = !0
          }
        });
      try {
        t.addEventListener("test", Fa, b), t.removeEventListener("test", Fa, b)
      } catch (c) {}
      return a
    }();

  function Jj(a, b) {
    S.call(this, a ? a.type : "");
    this.relatedTarget = this.j = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.Da = null;
    a && this.init(a, b)
  }
  w(Jj, S);
  var Kj = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  Jj.prototype.init = function(a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.j = b;
    if (b = a.relatedTarget) {
      if (Rd) {
        a: {
          try {
            Ya(b.nodeName);
            var e = !0;
            break a
          } catch (f) {}
          e = !1
        }
        e || (b = null)
      }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
      0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Kj[a.pointerType] || "";
    this.state = a.state;
    this.Da = a;
    a.defaultPrevented && this.w()
  };
  Jj.prototype.stopPropagation = function() {
    Jj.na.stopPropagation.call(this);
    this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = !0
  };
  Jj.prototype.w = function() {
    Jj.na.w.call(this);
    var a = this.Da;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Ej) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };

  function Lj(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Y = e;
    this.key = ++sh;
    this.zd = this.Gb = !1
  }

  function Mj(a) {
    a.zd = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.Y = null
  };

  function Nj(a) {
    this.src = a;
    this.g = {};
    this.j = 0
  }
  Nj.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.j++);
    var g = Oj(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Gb = !1)) : (b = new Lj(b, this.src, f, !!d, e), b.Gb = c, a.push(b));
    return b
  };
  Nj.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = Oj(e, b, c, d);
    return -1 < b ? (Mj(e[b]), Gb(e, b), 0 == e.length && (delete this.g[a], this.j--), !0) : !1
  };

  function Pj(a, b) {
    var c = b.type;
    c in a.g && Fb(a.g[c], b) && (Mj(b), 0 == a.g[c].length && (delete a.g[c], a.j--))
  }
  Nj.prototype.Td = function(a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = Oj(a, b, c, d));
    return -1 < e ? a[e] : null
  };
  Nj.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return bc(this.g, function(f) {
      for (var g = 0; g < f.length; ++g)
        if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
      return !1
    })
  };

  function Oj(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.zd && f.listener == b && f.capture == !!c && f.Y == d) return e
    }
    return -1
  };
  var Qj = "closure_lm_" + (1E6 * Math.random() | 0),
    Rj = {},
    Sj = 0;

  function Tj(a, b, c, d, e) {
    if (d && d.once) return Uj(a, b, c, d, e);
    if (Ha(b)) {
      for (var f = 0; f < b.length; f++) Tj(a, b[f], c, d, e);
      return null
    }
    c = Vj(c);
    return rh(a) ? a.R(b, c, Ka(d) ? !!d.capture : !!d, e) : Wj(a, b, c, !1, d, e)
  }

  function Wj(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Ka(e) ? !!e.capture : !!e,
      k = Xj(a);
    k || (a[Qj] = k = new Nj(a));
    c = k.add(b, c, d, g, f);
    if (c.g) return c;
    d = Yj();
    c.g = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) Ij || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Zj(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Sj++;
    return c
  }

  function Yj() {
    var a = ak,
      b = Dj ? function(c) {
        return a.call(b.src, b.listener, c)
      } : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c
      };
    return b
  }

  function Uj(a, b, c, d, e) {
    if (Ha(b)) {
      for (var f = 0; f < b.length; f++) Uj(a, b[f], c, d, e);
      return null
    }
    c = Vj(c);
    return rh(a) ? a.Oc(b, c, Ka(d) ? !!d.capture : !!d, e) : Wj(a, b, c, !0, d, e)
  }

  function fk(a, b, c, d, e) {
    if (Ha(b))
      for (var f = 0; f < b.length; f++) fk(a, b[f], c, d, e);
    else d = Ka(d) ? !!d.capture : !!d, c = Vj(c), rh(a) ? a.hb(b, c, d, e) : a && (a = Xj(a)) && (b = a.Td(b, c, d, e)) && gk(b)
  }

  function gk(a) {
    if ("number" !== typeof a && a && !a.zd) {
      var b = a.src;
      if (rh(b)) Pj(b.X, a);
      else {
        var c = a.type,
          d = a.g;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Zj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Sj--;
        (c = Xj(b)) ? (Pj(c, a), 0 == c.j && (c.src = null, b[Qj] = null)) : Mj(a)
      }
    }
  }

  function hk(a, b, c, d, e) {
    c = Vj(c);
    d = !!d;
    return rh(a) ? a.Td(b, c, d, e) : a ? (a = Xj(a)) ? a.Td(b, c, d, e) : null : null
  }

  function Zj(a) {
    return a in Rj ? Rj[a] : Rj[a] = "on" + a
  }

  function ik(a, b, c, d) {
    var e = !0;
    if (a = Xj(a))
      if (b = a.g[b.toString()])
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.capture == c && !f.zd && (f = jk(f, d), e = e && !1 !== f)
        }
    return e
  }

  function jk(a, b) {
    var c = a.listener,
      d = a.Y || a.src;
    a.Gb && gk(a);
    return c.call(d, b)
  }

  function ak(a, b) {
    if (a.zd) return !0;
    if (!Dj) {
      var c = b || Ea("window.event");
      b = new Jj(c, this);
      var d = !0;
      if (!(0 > c.keyCode || void 0 != c.returnValue)) {
        a: {
          var e = !1;
          if (0 == c.keyCode) try {
            c.keyCode = -1;
            break a
          } catch (g) {
            e = !0
          }
          if (e || void 0 == c.returnValue) c.returnValue = !0
        }
        c = [];
        for (e = b.j; e; e = e.parentNode) c.push(e);a = a.type;
        for (e = c.length - 1; !b.o && 0 <= e; e--) {
          b.j = c[e];
          var f = ik(c[e], a, !0, b);
          d = d && f
        }
        for (e = 0; !b.o && e < c.length; e++) b.j = c[e],
        f = ik(c[e], a, !1, b),
        d = d && f
      }
      return d
    }
    return jk(a, new Jj(b, this))
  }

  function Xj(a) {
    a = a[Qj];
    return a instanceof Nj ? a : null
  }
  var kk = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function Vj(a) {
    if (Ja(a)) return a;
    a[kk] || (a[kk] = function(b) {
      return a.handleEvent(b)
    });
    return a[kk]
  }
  Ch(function(a) {
    ak = a(ak)
  });

  function T() {
    Q.call(this);
    this.X = new Nj(this);
    this.Xm = this;
    this.Dg = null
  }
  w(T, Q);
  T.prototype[qh] = !0;
  m = T.prototype;
  m.addEventListener = function(a, b, c, d) {
    Tj(this, a, b, c, d)
  };
  m.removeEventListener = function(a, b, c, d) {
    fk(this, a, b, c, d)
  };
  m.dispatchEvent = function(a) {
    var b = this.Dg;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.Dg) c.push(b), ++d
    }
    b = this.Xm;
    d = a.type || a;
    if ("string" === typeof a) a = new S(a, b);
    else if (a instanceof S) a.target = a.target || b;
    else {
      var e = a;
      a = new S(d, b);
      qc(a, e)
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.o && 0 <= f; f--) {
        var g = a.j = c[f];
        e = lk(g, d, !0, a) && e
      }
    a.o || (g = a.j = b, e = lk(g, d, !0, a) && e, a.o || (e = lk(g, d, !1, a) && e));
    if (c)
      for (f = 0; !a.o && f < c.length; f++) g = a.j = c[f], e = lk(g, d, !1, a) && e;
    return e
  };
  m.N = function() {
    T.na.N.call(this);
    if (this.X) {
      var a = this.X,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Mj(d[e]);
        delete a.g[c];
        a.j--
      }
    }
    this.Dg = null
  };
  m.R = function(a, b, c, d) {
    return this.X.add(String(a), b, !1, c, d)
  };
  m.Oc = function(a, b, c, d) {
    return this.X.add(String(a), b, !0, c, d)
  };
  m.hb = function(a, b, c, d) {
    this.X.remove(String(a), b, c, d)
  };

  function lk(a, b, c, d) {
    b = a.X.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.zd && g.capture == c) {
        var k = g.listener,
          n = g.Y || g.src;
        g.Gb && Pj(a.X, g);
        e = !1 !== k.call(n, d) && e
      }
    }
    return e && !d.defaultPrevented
  }
  m.Td = function(a, b, c, d) {
    return this.X.Td(String(a), b, c, d)
  };
  m.hasListener = function(a, b) {
    return this.X.hasListener(void 0 !== a ? String(a) : void 0, b)
  };

  function mk() {}
  mk.prototype.g = null;

  function nk(a) {
    var b;
    (b = a.g) || (b = {}, ok(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
    return b
  };
  var pk;

  function qk() {}
  w(qk, mk);

  function rk(a) {
    return (a = ok(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  }

  function ok(a) {
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
  pk = new qk;

  function sk(a) {
    return a.ia && "function" == typeof a.ia ? a.ia() : Ia(a) || "string" === typeof a ? a.length : cc(a)
  }

  function tk(a) {
    if (a.sa && "function" == typeof a.sa) return a.sa();
    if ("string" === typeof a) return a.split("");
    if (Ia(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b
    }
    return dc(a)
  }

  function uk(a) {
    if (a.fb && "function" == typeof a.fb) return a.fb();
    if (!a.sa || "function" != typeof a.sa) {
      if (Ia(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b
      }
      return gc(a)
    }
  }

  function vk(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
    else if (Ia(a) || "string" === typeof a) vb(a, b, void 0);
    else
      for (var c = uk(a), d = tk(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
  }

  function wk(a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (Ia(a) || "string" === typeof a) return Ab(a, b, void 0);
    for (var c = uk(a), d = tk(a), e = d.length, f = 0; f < e; f++)
      if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0
  };
  var xk = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

  function yk(a) {
    var b = a.match(xk);
    a = b[1];
    var c = b[2],
      d = b[3];
    b = b[4];
    var e = "";
    a && (e += a + ":");
    d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
    return e
  }

  function zk(a) {
    var b = window.location.href.match(xk);
    a = a.match(xk);
    return b[3] == a[3] && b[1] == a[1] && b[4] == a[4]
  }

  function Ak(a, b) {
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

  function Bk(a, b) {
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

  function Ck(a, b, c) {
    if (Ha(b))
      for (var d = 0; d < b.length; d++) Ck(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
  }

  function Dk(a, b) {
    var c = [];
    for (b = b || 0; b < a.length; b += 2) Ck(a[b], a[b + 1], c);
    return c.join("&")
  }

  function Ek(a) {
    var b = [],
      c;
    for (c in a) Ck(c, a[c], b);
    return b.join("&")
  }

  function Fk(a, b) {
    var c = 2 == arguments.length ? Dk(arguments[1], 0) : Dk(arguments, 1);
    return Bk(a, c)
  }

  function Gk(a, b) {
    b = Ek(b);
    return Bk(a, b)
  }

  function Hk(a, b, c) {
    c = null != c ? "=" + encodeURIComponent(String(c)) : "";
    return Bk(a, b + c)
  }

  function Ik(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
      var f = a.charCodeAt(b - 1);
      if (38 == f || 63 == f)
        if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
      b += e + 1
    }
    return -1
  }
  var Jk = /#|$/,
    Kk = /[?&]($|#)/;

  function Lk(a, b) {
    for (var c = a.search(Jk), d = 0, e, f = []; 0 <= (e = Ik(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
    f.push(a.substr(d));
    return f.join("").replace(Kk, "$1")
  }

  function Mk(a) {
    var b = Gd();
    return Hk(Lk(a, "zx"), "zx", b)
  }

  function Nk(a, b) {
    var c = a.length - 1;
    0 <= c && a.indexOf("/", c) == c && (a = a.substr(0, a.length - 1));
    Cc(b, "/") && (b = b.substr(1));
    return Fd(a, "/", b)
  };

  function Ok(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
      return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }

  function Pk(a) {
    var b = [];
    Qk(new Rk, a, b);
    return b.join("")
  }

  function Rk() {}

  function Qk(a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (Ha(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++) c.push(e), Qk(a, d[f], c), e = ",";
          c.push("]");
          return
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Sk(d, c), c.push(":"), Qk(a, f, c), e = ","));
          c.push("}");
          return
        }
      }
      switch (typeof b) {
        case "string":
          Sk(b, c);
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
  var Tk = {
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
    Uk = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

  function Sk(a, b) {
    b.push('"', a.replace(Uk, function(c) {
      var d = Tk[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Tk[c] = d);
      return d
    }), '"')
  };

  function Vk(a, b) {
    T.call(this);
    this.j = a || 1;
    this.g = b || t;
    this.o = u(this.Qm, this);
    this.w = v()
  }
  w(Vk, T);
  m = Vk.prototype;
  m.enabled = !1;
  m.wb = null;
  m.setInterval = function(a) {
    this.j = a;
    this.wb && this.enabled ? (this.stop(), this.start()) : this.wb && this.stop()
  };
  m.Qm = function() {
    if (this.enabled) {
      var a = v() - this.w;
      0 < a && a < .8 * this.j ? this.wb = this.g.setTimeout(this.o, this.j - a) : (this.wb && (this.g.clearTimeout(this.wb), this.wb = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
  };
  m.start = function() {
    this.enabled = !0;
    this.wb || (this.wb = this.g.setTimeout(this.o, this.j), this.w = v())
  };
  m.stop = function() {
    this.enabled = !1;
    this.wb && (this.g.clearTimeout(this.wb), this.wb = null)
  };
  m.N = function() {
    Vk.na.N.call(this);
    this.stop();
    delete this.g
  };

  function Wk(a, b, c) {
    if (Ja(a)) c && (a = u(a, c));
    else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : t.setTimeout(a, b || 0)
  }

  function Xk(a) {
    t.clearTimeout(a)
  }

  function Yk(a, b) {
    var c = null;
    return (new Rh(function(d, e) {
      c = Wk(function() {
        d(b)
      }, a); - 1 == c && e(Error("Failed to schedule timer."))
    })).fa(function(d) {
      Xk(c);
      throw d;
    })
  };

  function Zk(a) {
    T.call(this);
    this.headers = new ej;
    this.L = a || null;
    this.o = !1;
    this.I = this.g = null;
    this.G = "";
    this.j = 0;
    this.w = "";
    this.A = this.W = this.D = this.O = !1;
    this.B = 0;
    this.H = null;
    this.U = "";
    this.aa = this.ea = this.C = !1
  }
  w(Zk, T);
  var $k = /^https?$/i,
    al = ["POST", "PUT"],
    bl = [];

  function cl(a, b, c, d, e, f, g) {
    var k = new Zk;
    bl.push(k);
    b && k.R("complete", b);
    k.Oc("ready", k.uk);
    f && (k.B = Math.max(0, f));
    g && (k.C = g);
    k.send(a, c, d, e)
  }
  m = Zk.prototype;
  m.uk = function() {
    this.dispose();
    Fb(bl, this)
  };
  m.send = function(a, b, c, d) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.G + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.G = a;
    this.w = "";
    this.j = 0;
    this.O = !1;
    this.o = !0;
    this.g = this.L ? rk(this.L) : rk(pk);
    this.I = this.L ? nk(this.L) : nk(pk);
    this.g.onreadystatechange = u(this.aj, this);
    this.ea && "onprogress" in this.g && (this.g.onprogress = u(function(f) {
      this.$i(f, !0)
    }, this), this.g.upload && (this.g.upload.onprogress = u(this.$i, this)));
    try {
      this.S(), this.W = !0, this.g.open(b, String(a), !0),
        this.W = !1
    } catch (f) {
      this.S();
      dl(this, f);
      return
    }
    a = c || "";
    var e = this.headers.clone();
    d && vk(d, function(f, g) {
      e.set(g, f)
    });
    d = Bb(e.fb(), fl);
    c = t.FormData && a instanceof t.FormData;
    !Db(al, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
      this.g.setRequestHeader(g, f)
    }, this);
    this.U && (this.g.responseType = this.U);
    "withCredentials" in this.g && this.g.withCredentials !== this.C && (this.g.withCredentials = this.C);
    try {
      gl(this), 0 < this.B && (this.aa = hl(this.g), this.S(),
        this.aa ? (this.g.timeout = this.B, this.g.ontimeout = u(this.$h, this)) : this.H = Wk(this.$h, this.B, this)), this.S(), this.D = !0, this.g.send(a), this.D = !1
    } catch (f) {
      this.S(), dl(this, f)
    }
  };

  function hl(a) {
    return Pd && fe(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
  }

  function fl(a) {
    return "content-type" == a.toLowerCase()
  }
  m.$h = function() {
    "undefined" != typeof Ca && this.g && (this.w = "Timed out after " + this.B + "ms, aborting", this.j = 8, this.S(), this.dispatchEvent("timeout"), this.abort(8))
  };

  function dl(a, b) {
    a.o = !1;
    a.g && (a.A = !0, a.g.abort(), a.A = !1);
    a.w = b;
    a.j = 5;
    il(a);
    jl(a)
  }

  function il(a) {
    a.O || (a.O = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
  }
  m.abort = function(a) {
    this.g && this.o && (this.S(), this.o = !1, this.A = !0, this.g.abort(), this.A = !1, this.j = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), jl(this))
  };
  m.N = function() {
    this.g && (this.o && (this.o = !1, this.A = !0, this.g.abort(), this.A = !1), jl(this, !0));
    Zk.na.N.call(this)
  };
  m.aj = function() {
    this.ua() || (this.W || this.D || this.A ? kl(this) : this.ah())
  };
  m.ah = function() {
    kl(this)
  };

  function kl(a) {
    if (a.o && "undefined" != typeof Ca)
      if (a.I[1] && 4 == ll(a) && 2 == a.S()) a.S();
      else if (a.D && 4 == ll(a)) Wk(a.aj, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == ll(a)) {
      a.S();
      a.o = !1;
      try {
        ml(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.j = 6, a.w = nl(a) + " [" + a.S() + "]", il(a))
      } finally {
        jl(a)
      }
    }
  }
  m.$i = function(a, b) {
    this.dispatchEvent(ol(a, "progress"));
    this.dispatchEvent(ol(a, b ? "downloadprogress" : "uploadprogress"))
  };

  function ol(a, b) {
    return {
      type: b,
      lengthComputable: a.lengthComputable,
      loaded: a.loaded,
      total: a.total
    }
  }

  function jl(a, b) {
    if (a.g) {
      gl(a);
      var c = a.g,
        d = a.I[0] ? Fa : null;
      a.g = null;
      a.I = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d
      } catch (e) {}
    }
  }

  function gl(a) {
    a.g && a.aa && (a.g.ontimeout = null);
    a.H && (Xk(a.H), a.H = null)
  }

  function ml(a) {
    var b = a.S();
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
      if (b = 0 === b) a = String(a.G).match(xk)[1] || null, !a && t.self && t.self.location && (a = t.self.location.protocol, a = a.substr(0, a.length - 1)), b = !$k.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  }

  function ll(a) {
    return a.g ? a.g.readyState : 0
  }
  m.S = function() {
    try {
      return 2 < ll(this) ? this.g.status : -1
    } catch (a) {
      return -1
    }
  };

  function nl(a) {
    try {
      return 2 < ll(a) ? a.g.statusText : ""
    } catch (b) {
      return ""
    }
  }

  function pl(a) {
    try {
      return a.g ? a.g.responseText : ""
    } catch (b) {
      return ""
    }
  }
  m.Kc = function() {
    try {
      if (!this.g) return null;
      if ("response" in this.g) return this.g.response;
      switch (this.U) {
        case "":
        case "text":
          return this.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.g) return this.g.mozResponseArrayBuffer
      }
      return null
    } catch (a) {
      return null
    }
  };
  m.qg = function() {
    return this.g && 4 == ll(this) ? this.g.getAllResponseHeaders() || "" : ""
  };

  function ql(a) {
    var b = {};
    a = a.qg().split("\r\n");
    for (var c = 0; c < a.length; c++)
      if (!Dc(a[c])) {
        var d = Ld(a[c], ":"),
          e = d[0];
        d = d[1];
        if ("string" === typeof d) {
          d = d.trim();
          var f = b[e] || [];
          b[e] = f;
          f.push(d)
        }
      } return ac(b, function(g) {
      return g.join(", ")
    })
  }

  function rl(a) {
    return "string" === typeof a.w ? a.w : String(a.w)
  }
  Ch(function(a) {
    Zk.prototype.ah = a(Zk.prototype.ah)
  });

  function sl(a, b, c) {
    T.call(this);
    this.w = b || null;
    this.o = {};
    this.A = tl;
    this.C = a;
    if (!c)
      if (this.g = null, Pd && !fe("10")) Ki(u(this.j, this));
      else {
        this.g = new xj(u(this.j, this));
        Cj(this.g, "setTimeout");
        Cj(this.g, "setInterval");
        a = this.g;
        b = Ea("window");
        c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
        for (var d = 0; d < c.length; d++) {
          var e = c[d];
          c[d] in b && Cj(a, e)
        }
        a = this.g;
        Bh = !0;
        b = u(a.g, a);
        for (c = 0; c < zh.length; c++) zh[c](b);
        Ah.push(a)
      }
  }
  w(sl, T);

  function ul(a, b) {
    S.call(this, "a");
    this.error = a;
    this.context = b
  }
  w(ul, S);

  function tl(a, b, c, d) {
    cl(a, null, b, c, d)
  }
  sl.prototype.j = function(a, b) {
    a = a.error || a;
    b = b ? nc(b) : {};
    a instanceof Error && qc(b, a.__closure__error__context__984382 || {});
    var c = Mi(a);
    if (this.w) try {
      this.w(c, b)
    } catch (k) {}
    var d = c.message.substring(0, 1900);
    if (!(a instanceof Wa) || a.g) {
      a = c.stack;
      try {
        var e = Fk(this.C, "script", c.fileName, "error", d, "line", c.lineNumber);
        kc(this.o) || (e = Gk(e, this.o));
        d = {};
        d.trace = a;
        if (b)
          for (var f in b) d["context." + f] = b[f];
        var g = Ek(d);
        this.A(e, "POST", g, this.B)
      } catch (k) {}
    }
    try {
      this.dispatchEvent(new ul(c, b))
    } catch (k) {}
  };
  sl.prototype.N = function() {
    jj(this.g);
    sl.na.N.call(this)
  };

  function vl(a, b) {
    b.push(a);
    for (var c = 0; c < a.length; c++)
      if (a[c] instanceof Array) {
        if (Zg(Xg(), "docs-anlpfdo")) og(b, a[c]);
        else if (0 <= og(b, a[c])) throw xf("Circular reference detected").g;
        vl(a[c], b)
      } b.pop()
  };

  function wl(a, b) {
    this.g = this.B = this.w = "";
    this.j = null;
    this.C = this.A = "";
    this.D = !1;
    var c;
    a instanceof wl ? (this.D = void 0 !== b ? b : a.D, xl(this, a.w), this.B = a.B, yl(this, a.g), zl(this, a.j), Al(this, a.A), Bl(this, a.o.clone()), this.C = a.C) : a && (c = String(a).match(xk)) ? (this.D = !!b, xl(this, c[1] || "", !0), this.B = Cl(c[2] || ""), yl(this, c[3] || "", !0), zl(this, c[4]), Al(this, c[5] || "", !0), Bl(this, c[6] || "", !0), this.C = Cl(c[7] || "")) : (this.D = !!b, this.o = new Dl(null, this.D))
  }
  wl.prototype.toString = function() {
    var a = [],
      b = this.w;
    b && a.push(El(b, Fl, !0), ":");
    var c = this.g;
    if (c || "file" == b) a.push("//"), (b = this.B) && a.push(El(b, Fl, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.j, null != c && a.push(":", String(c));
    if (c = this.A) this.g && "/" != c.charAt(0) && a.push("/"), a.push(El(c, "/" == c.charAt(0) ? Gl : Hl, !0));
    (c = this.o.toString()) && a.push("?", c);
    (c = this.C) && a.push("#", El(c, Il));
    return a.join("")
  };
  wl.prototype.resolve = function(a) {
    var b = this.clone(),
      c = !!a.w;
    c ? xl(b, a.w) : c = !!a.B;
    c ? b.B = a.B : c = !!a.g;
    c ? yl(b, a.g) : c = null != a.j;
    var d = a.A;
    if (c) zl(b, a.j);
    else if (c = !!a.A) {
      if ("/" != d.charAt(0))
        if (this.g && !this.A) d = "/" + d;
        else {
          var e = b.A.lastIndexOf("/"); - 1 != e && (d = b.A.substr(0, e + 1) + d)
        } e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = Cc(e, "/");
        e = e.split("/");
        for (var f = [], g = 0; g < e.length;) {
          var k = e[g++];
          "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) &&
            f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
        }
        d = f.join("/")
      } else d = e
    }
    c ? Al(b, d) : c = a.G();
    c ? Bl(b, a.o.clone()) : c = !!a.C;
    c && (b.C = a.C);
    return b
  };
  wl.prototype.clone = function() {
    return new wl(this)
  };

  function xl(a, b, c) {
    a.w = c ? Cl(b, !0) : b;
    a.w && (a.w = a.w.replace(/:$/, ""))
  }

  function yl(a, b, c) {
    a.g = c ? Cl(b, !0) : b
  }

  function zl(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.j = b
    } else a.j = null
  }

  function Al(a, b, c) {
    a.A = c ? Cl(b, !0) : b;
    return a
  }
  wl.prototype.G = function() {
    return "" !== this.o.toString()
  };

  function Bl(a, b, c) {
    b instanceof Dl ? (a.o = b, Jl(a.o, a.D)) : (c || (b = El(b, Kl)), a.o = new Dl(b, a.D));
    return a
  }

  function U(a, b, c) {
    a.o.set(b, c);
    return a
  }

  function Ll(a, b, c) {
    Ha(c) || (c = [String(c)]);
    Ml(a.o, b, c)
  }

  function Nl(a) {
    U(a, "zx", Gd());
    return a
  }

  function Ol(a) {
    return a instanceof wl ? a.clone() : new wl(a, void 0)
  }

  function Pl(a, b, c, d, e) {
    var f = new wl(null, void 0);
    a && xl(f, a);
    b && (f.B = b);
    c && yl(f, c);
    d && zl(f, d);
    e && Al(f, e);
    return f
  }

  function Cl(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
  }

  function El(a, b, c) {
    return "string" === typeof a ? (a = encodeURI(a).replace(b, Ql), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
  }

  function Ql(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var Fl = /[#\/\?@]/g,
    Hl = /[#\?:]/g,
    Gl = /[#\?]/g,
    Kl = /[#\?@]/g,
    Il = /#/g;

  function Dl(a, b) {
    this.j = this.g = null;
    this.o = a || null;
    this.w = !!b
  }

  function Rl(a) {
    a.g || (a.g = new ej, a.j = 0, a.o && Ak(a.o, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
    }))
  }
  m = Dl.prototype;
  m.ia = function() {
    Rl(this);
    return this.j
  };
  m.add = function(a, b) {
    Rl(this);
    this.o = null;
    a = Sl(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.j = this.j + 1;
    return this
  };
  m.remove = function(a) {
    Rl(this);
    a = Sl(this, a);
    return gj(this.g.j, a) ? (this.o = null, this.j = this.j - this.g.get(a).length, this.g.remove(a)) : !1
  };
  m.clear = function() {
    this.g = this.o = null;
    this.j = 0
  };

  function Tl(a, b) {
    Rl(a);
    b = Sl(a, b);
    return gj(a.g.j, b)
  }
  m.ad = function(a) {
    var b = this.sa();
    return Db(b, a)
  };
  m.forEach = function(a, b) {
    Rl(this);
    this.g.forEach(function(c, d) {
      vb(c, function(e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  m.fb = function() {
    Rl(this);
    for (var a = this.g.sa(), b = this.g.fb(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  m.sa = function(a) {
    Rl(this);
    var b = [];
    if ("string" === typeof a) Tl(this, a) && (b = Kb(b, this.g.get(Sl(this, a))));
    else {
      a = this.g.sa();
      for (var c = 0; c < a.length; c++) b = Kb(b, a[c])
    }
    return b
  };
  m.set = function(a, b) {
    Rl(this);
    this.o = null;
    a = Sl(this, a);
    Tl(this, a) && (this.j = this.j - this.g.get(a).length);
    this.g.set(a, [b]);
    this.j = this.j + 1;
    return this
  };
  m.get = function(a, b) {
    if (!a) return b;
    a = this.sa(a);
    return 0 < a.length ? String(a[0]) : b
  };

  function Ml(a, b, c) {
    a.remove(b);
    0 < c.length && (a.o = null, a.g.set(Sl(a, b), Mb(c)), a.j = a.j + c.length)
  }
  m.toString = function() {
    if (this.o) return this.o;
    if (!this.g) return "";
    for (var a = [], b = this.g.fb(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.sa(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    }
    return this.o = a.join("&")
  };
  m.clone = function() {
    var a = new Dl;
    a.o = this.o;
    this.g && (a.g = this.g.clone(), a.j = this.j);
    return a
  };

  function Sl(a, b) {
    b = String(b);
    a.w && (b = b.toLowerCase());
    return b
  }

  function Jl(a, b) {
    b && !a.w && (Rl(a), a.o = null, a.g.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && (this.remove(d), Ml(this, e, c))
    }, a));
    a.w = b
  };

  function Ul() {
    Ul = h();
    Vl = Math.floor(-2147483648 * Math.random())
  }
  var Vl = 0;

  function Wl(a, b) {
    this.j = b;
    for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
      var f = a[e] | 0;
      d && f == b || (c[e] = f, d = !1)
    }
    this.g = c
  }
  var Xl = {};

  function Yl(a) {
    return -128 <= a && 128 > a ? Za(Xl, a, function(b) {
      return new Wl([b | 0], 0 > b ? -1 : 0)
    }) : new Wl([a | 0], 0 > a ? -1 : 0)
  }

  function Zl(a) {
    if (isNaN(a) || !isFinite(a)) return $l;
    if (0 > a) return am(Zl(-a));
    for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
    return new Wl(b, 0)
  }
  var $l = Yl(0),
    bm = Yl(1),
    cm = Yl(16777216);

  function dm(a) {
    if (-1 == a.j) return -dm(am(a));
    for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
      var e = em(a, d);
      b += (0 <= e ? e : 4294967296 + e) * c;
      c *= 4294967296
    }
    return b
  }
  m = Wl.prototype;
  m.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    if (fm(this)) return "0";
    if (-1 == this.j) return "-" + am(this).toString(a);
    for (var b = Zl(Math.pow(a, 6)), c = this, d = "";;) {
      var e = gm(c, b).g;
      c = hm(c, im(e, b));
      var f = ((0 < c.g.length ? c.g[0] : c.j) >>> 0).toString(a);
      c = e;
      if (fm(c)) return f + d;
      for (; 6 > f.length;) f = "0" + f;
      d = f + d
    }
  };

  function em(a, b) {
    return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.j
  }

  function fm(a) {
    if (0 != a.j) return !1;
    for (var b = 0; b < a.g.length; b++)
      if (0 != a.g[b]) return !1;
    return !0
  }
  m.oa = function(a) {
    if (this.j != a.j) return !1;
    for (var b = Math.max(this.g.length, a.g.length), c = 0; c < b; c++)
      if (em(this, c) != em(a, c)) return !1;
    return !0
  };

  function jm(a, b) {
    a = hm(a, b);
    return -1 == a.j ? -1 : fm(a) ? 0 : 1
  }

  function am(a) {
    for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
    return (new Wl(c, ~a.j)).add(bm)
  }
  m.abs = function() {
    return -1 == this.j ? am(this) : this
  };
  m.add = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
      var f = d + (em(this, e) & 65535) + (em(a, e) & 65535),
        g = (f >>> 16) + (em(this, e) >>> 16) + (em(a, e) >>> 16);
      d = g >>> 16;
      f &= 65535;
      g &= 65535;
      c[e] = g << 16 | f
    }
    return new Wl(c, c[c.length - 1] & -2147483648 ? -1 : 0)
  };

  function hm(a, b) {
    return a.add(am(b))
  }

  function im(a, b) {
    if (fm(a) || fm(b)) return $l;
    if (-1 == a.j) return -1 == b.j ? im(am(a), am(b)) : am(im(am(a), b));
    if (-1 == b.j) return am(im(a, am(b)));
    if (0 > jm(a, cm) && 0 > jm(b, cm)) return Zl(dm(a) * dm(b));
    for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
    for (e = 0; e < a.g.length; e++)
      for (var f = 0; f < b.g.length; f++) {
        var g = em(a, e) >>> 16,
          k = em(a, e) & 65535,
          n = em(b, f) >>> 16,
          p = em(b, f) & 65535;
        d[2 * e + 2 * f] += k * p;
        km(d, 2 * e + 2 * f);
        d[2 * e + 2 * f + 1] += g * p;
        km(d, 2 * e + 2 * f + 1);
        d[2 * e + 2 * f + 1] += k * n;
        km(d, 2 * e + 2 * f + 1);
        d[2 * e + 2 * f + 2] += g * n;
        km(d, 2 * e + 2 * f + 2)
      }
    for (e = 0; e <
      c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
    for (e = c; e < 2 * c; e++) d[e] = 0;
    return new Wl(d, 0)
  }

  function km(a, b) {
    for (;
      (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
  }

  function lm(a, b) {
    this.g = a;
    this.j = b
  }

  function gm(a, b) {
    if (fm(b)) throw Error("division by zero");
    if (fm(a)) return new lm($l, $l);
    if (-1 == a.j) return b = gm(am(a), b), new lm(am(b.g), am(b.j));
    if (-1 == b.j) return b = gm(a, am(b)), new lm(am(b.g), b.j);
    if (30 < a.g.length) {
      if (-1 == a.j || -1 == b.j) throw Error("slowDivide_ only works with positive integers.");
      for (var c = bm, d = b; 0 >= jm(d, a);) c = mm(c, 1), d = mm(d, 1);
      var e = nm(c, 1),
        f = nm(d, 1);
      d = nm(d, 2);
      for (c = nm(c, 2); !fm(d);) {
        var g = f.add(d);
        0 >= jm(g, a) && (e = e.add(c), f = g);
        d = nm(d, 1);
        c = nm(c, 1)
      }
      b = hm(a, im(e, b));
      return new lm(e, b)
    }
    for (e =
      $l; 0 <= jm(a, b);) {
      c = Math.max(1, Math.floor(dm(a) / dm(b)));
      d = Math.ceil(Math.log(c) / Math.LN2);
      d = 48 >= d ? 1 : Math.pow(2, d - 48);
      f = Zl(c);
      for (g = im(f, b); - 1 == g.j || 0 < jm(g, a);) c -= d, f = Zl(c), g = im(f, b);
      fm(f) && (f = bm);
      e = e.add(f);
      a = hm(a, g)
    }
    return new lm(e, a)
  }
  m.and = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = em(this, d) & em(a, d);
    return new Wl(c, this.j & a.j)
  };
  m.or = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = em(this, d) | em(a, d);
    return new Wl(c, this.j | a.j)
  };
  m.xor = function(a) {
    for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = em(this, d) ^ em(a, d);
    return new Wl(c, this.j ^ a.j)
  };

  function mm(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.g.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? em(a, f - c) << b | em(a, f - c - 1) >>> 32 - b : em(a, f - c);
    return new Wl(e, a.j)
  }

  function nm(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? em(a, f + c) >>> b | em(a, f + c + 1) << 32 - b : em(a, f + c);
    return new Wl(e, a.j)
  };
  hm(mm(bm, 32), bm);
  hm(mm(bm, 128), bm);

  function om() {
    this.g = -1
  };

  function pm() {
    this.g = 64;
    this.j = Array(4);
    this.A = Array(this.g);
    this.w = this.o = 0;
    this.reset()
  }
  w(pm, om);
  pm.prototype.reset = function() {
    this.j[0] = 1732584193;
    this.j[1] = 4023233417;
    this.j[2] = 2562383102;
    this.j[3] = 271733878;
    this.w = this.o = 0
  };

  function qm(a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if ("string" === typeof b)
      for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else
      for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    b = a.j[0];
    c = a.j[1];
    e = a.j[2];
    var f = a.j[3];
    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    f = b + (g << 12 & 4294967295 |
      g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b = c + (g <<
      5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
    c =
      e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    f = b + (g << 11 & 4294967295 |
      g >>> 21);
    g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[12] +
      3873151461 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
      4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
      4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
    a.j[0] = a.j[0] + b & 4294967295;
    a.j[1] = a.j[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
    a.j[2] = a.j[2] + e & 4294967295;
    a.j[3] = a.j[3] + f & 4294967295
  }
  pm.prototype.update = function(a, b) {
    void 0 === b && (b = a.length);
    for (var c = b - this.g, d = this.A, e = this.o, f = 0; f < b;) {
      if (0 == e)
        for (; f <= c;) qm(this, a, f), f += this.g;
      if ("string" === typeof a)
        for (; f < b;) {
          if (d[e++] = a.charCodeAt(f++), e == this.g) {
            qm(this, d);
            e = 0;
            break
          }
        } else
          for (; f < b;)
            if (d[e++] = a[f++], e == this.g) {
              qm(this, d);
              e = 0;
              break
            }
    }
    this.o = e;
    this.w += b
  };
  pm.prototype.digest = function() {
    var a = Array((56 > this.o ? this.g : 2 * this.g) - this.o);
    a[0] = 128;
    for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
    var c = 8 * this.w;
    for (b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
    this.update(a);
    a = Array(16);
    for (b = c = 0; 4 > b; ++b)
      for (var d = 0; 32 > d; d += 8) a[c++] = this.j[b] >>> d & 255;
    return a
  };

  function rm(a, b) {
    var c = Zg(Xg(), "docs-anlpfdo");
    b.push(a);
    if (a instanceof Array)
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (null != e) {
          if (c) og(b, e);
          else if (0 <= og(b, e)) throw xf("Circular reference detected").g;
          rm(e, b)
        }
      } else if (a instanceof Object)
        for (d = Object.keys(a), e = 0; e < d.length; e++) {
          var f = d[e];
          if (null != a[f]) {
            if (c) og(b, a[f]);
            else if (0 <= og(b, a[f])) throw xf("Circular reference detected").g;
            rm(a[f], b)
          }
        }
    b.pop()
  };

  function sm() {
    return tm("/synctaskworker.js")
  }

  function um() {
    return tm("/taskiframe")
  }

  function vm(a) {
    var b = ah(Xg(), "drive-host");
    return wm(b, a, !0)
  }

  function xm() {
    var a = new wl(t.location.href);
    return null != a.j ? a.g + ":" + a.j : a.g
  }

  function tm(a, b) {
    var c = xm();
    return wm(c, "/offline" + a, void 0, b)
  }

  function wm(a, b, c, d) {
    a = new wl("//" + a);
    xl(a, t.location.href.match(xk)[1] || null);
    Al(a, b);
    b = ah(Xg(), "docs-offline-lsuid");
    Ll(a, "ouid", b);
    !d && ym() && (c ? Ll(a, "jsmode", "DU") : Ll(a, "Debug", "true"));
    return a.toString()
  }

  function ym() {
    var a = new wl(t.location.href);
    return "true" == a.o.get("Debug") || "true" == a.o.get("debug") || "pretty" == a.o.get("debug") || "DU" == a.o.get("jsmode")
  };

  function zm() {
    this.g = function() {
      var a = t.window;
      a.onbeforeunload = Fa;
      a.location.reload()
    }
  };

  function Am(a) {
    Wa.call(this, a)
  }
  r(Am, Wa);

  function Bm(a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, k, n, p, x, A) {
      if ("%" == p) return "%";
      var G = c.shift();
      if ("undefined" == typeof G) throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = G;
      return Cm[p].apply(null, arguments)
    })
  }
  var Cm = {
    s: function(a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Cd(" ", Number(c) - a.length) : Cd(" ", Number(c) - a.length) + a
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
        f + d + Cd(" ", a) : f + Cd(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
    },
    d: function(a, b, c, d, e, f, g, k) {
      return Cm.f(parseInt(a, 10), b, c, d, 0, f, g, k)
    }
  };
  Cm.i = Cm.d;
  Cm.u = Cm.d;

  function Dm(a) {
    this.j = 0;
    this.o = a || 100;
    this.g = []
  }
  m = Dm.prototype;
  m.add = function(a) {
    var b = this.g[this.j];
    this.g[this.j] = a;
    this.j = (this.j + 1) % this.o;
    return b
  };
  m.get = function(a) {
    a = Em(this, a);
    return this.g[a]
  };
  m.set = function(a, b) {
    a = Em(this, a);
    this.g[a] = b
  };
  m.ia = function() {
    return this.g.length
  };
  m.clear = function() {
    this.j = this.g.length = 0
  };
  m.sa = function() {
    var a = this.ia(),
      b = this.ia(),
      c = [];
    for (a = this.ia() - a; a < b; a++) c.push(this.get(a));
    return c
  };
  m.fb = function() {
    for (var a = [], b = this.ia(), c = 0; c < b; c++) a[c] = c;
    return a
  };
  m.ad = function(a) {
    for (var b = this.ia(), c = 0; c < b; c++)
      if (this.get(c) == a) return !0;
    return !1
  };

  function Fm(a) {
    return 0 == a.ia() ? null : a.get(a.ia() - 1)
  }

  function Em(a, b) {
    if (b >= a.g.length) throw Error("Out of bounds exception");
    return a.g.length < a.o ? b : (a.j + Number(b)) % a.o
  };

  function Gm(a) {
    this.o = a;
    this.j = Math.floor(a / 50);
    this.g = new Dm(50)
  }
  Gm.prototype.get = function(a) {
    return Hm(this, a, function(b, c) {
      return b + c.count
    })
  };

  function Hm(a, b, c) {
    b = b || v();
    Im(a, b);
    var d = 0;
    b = a.j * (Math.floor(b / a.j) + 1) - a.o;
    for (var e = a.g.ia() - 1; 0 <= e; --e) {
      var f = a.g.get(e);
      if (f.end <= b) break;
      d = c(d, f)
    }
    return d
  }

  function Im(a, b) {
    var c = Fm(a.g);
    c && (c = c.end - a.j, b < c && (Bm("Went backwards in time: now=%d, slotStart=%d.  Resetting state.", b, c), a.g.clear()))
  }

  function Jm(a) {
    this.end = a
  }
  Jm.prototype.count = 0;
  Jm.prototype.min = Number.MAX_VALUE;
  Jm.prototype.max = Number.MIN_VALUE;

  function Km(a, b, c) {
    Q.call(this);
    this.o = a;
    this.j = b;
    this.g = new Gm(1E3 * c)
  }
  r(Km, Q);

  function Lm(a, b, c) {
    Q.call(this);
    this.g = a;
    this.w = b || 0;
    this.j = c;
    this.o = u(this.cl, this)
  }
  w(Lm, Q);
  m = Lm.prototype;
  m.rc = 0;
  m.N = function() {
    Lm.na.N.call(this);
    this.stop();
    delete this.g;
    delete this.j
  };
  m.start = function(a) {
    this.stop();
    this.rc = Wk(this.o, void 0 !== a ? a : this.w)
  };
  m.stop = function() {
    0 != this.rc && Xk(this.rc);
    this.rc = 0
  };
  m.cl = function() {
    this.rc = 0;
    this.g && this.g.call(this.j)
  };

  function Mm(a) {
    Q.call(this);
    this.j = a;
    this.g = {}
  }
  w(Mm, Q);
  var Nm = [];
  m = Mm.prototype;
  m.R = function(a, b, c, d) {
    Ha(b) || (b && (Nm[0] = b.toString()), b = Nm);
    for (var e = 0; e < b.length; e++) {
      var f = Tj(a, b[e], c || this.handleEvent, d || !1, this.j || this);
      if (!f) break;
      this.g[f.key] = f
    }
    return this
  };
  m.Oc = function(a, b, c, d) {
    return Om(this, a, b, c, d)
  };

  function Om(a, b, c, d, e, f) {
    if (Ha(c))
      for (var g = 0; g < c.length; g++) Om(a, b, c[g], d, e, f);
    else {
      b = Uj(b, c, d || a.handleEvent, e, f || a.j || a);
      if (!b) return a;
      a.g[b.key] = b
    }
    return a
  }
  m.hb = function(a, b, c, d, e) {
    if (Ha(b))
      for (var f = 0; f < b.length; f++) this.hb(a, b[f], c, d, e);
    else if (a = hk(a, b, c || this.handleEvent, Ka(d) ? !!d.capture : !!d, e || this.j || this)) gk(a), delete this.g[a.key]
  };

  function Pm(a) {
    Zb(a.g, function(b, c) {
      this.g.hasOwnProperty(c) && gk(b)
    }, a);
    a.g = {}
  }
  m.N = function() {
    Mm.na.N.call(this);
    Pm(this)
  };
  m.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };

  function Qm(a, b) {
    Q.call(this);
    this.o = a;
    this.G = new Lm(this.B, 3E4, this);
    this.O = new Km("errorsender", 1, 8);
    R(this, this.O);
    this.L = !1;
    this.H = null;
    this.D = new Set;
    this.I = new Mm(this);
    this.W = b || 10;
    this.I.R(this.o, "complete", this.U);
    this.I.R(this.o, "ready", this.B)
  }
  r(Qm, Q);
  Qm.prototype.send = function(a, b, c, d) {
    var e = vi(vi(this.nd(), function(f) {
      if (!(f >= this.W)) return f = {}, f.u = a, f.m = b, f.c = c, f.h = d, this.bf(f)
    }, this), this.B, this);
    zi(e, function() {
      this.D.delete(e)
    }, this);
    this.D.add(e)
  };

  function Rm(a) {
    return ai(Array.from(a.D.values())).then(h())
  }
  Qm.prototype.B = function() {
    return 0 != this.G.rc || this.o.g || this.L ? Fi() : Sm(this)
  };

  function Sm(a) {
    return vi(a.md(), function(b) {
      if (!this.o.g && 0 == this.G.rc && !this.L && b) {
        if (4E3 < b.u.length) return this.Hc();
        try {
          var c = this.O;
          if (!((c.g.get() + 1) / (c.g.o / 1E3) <= c.j)) throw new Am(Fd("Query would cause ", c.o, " to exceed ", c.j, " qps."));
          var d = c.g,
            e = v();
          Im(d, e);
          var f = Fm(d.g);
          if (!f || e >= f.end) f = new Jm(d.j * (Math.floor(e / d.j) + 1)), d.g.add(f);
          f.count += 1;
          f.min = Math.min(1, f.min);
          f.max = Math.max(1, f.max);
          this.H = new pi;
          this.o.send(b.u, b.m, b.c, b.h);
          return this.H
        } catch (g) {
          if (g instanceof Am) this.L = !0;
          else throw g;
        }
      }
    }, a)
  }
  Qm.prototype.U = function() {
    var a = this.o.S(),
      b = this.H;
    ml(this.o) || 400 <= a && 500 >= a ? vi(this.Hc(), function() {
      b.callback()
    }) : (this.G.start(), b.callback())
  };
  Qm.prototype.N = function() {
    kj(this.I, this.G, this.o);
    this.D.clear();
    Q.prototype.N.call(this)
  };

  function Tm(a, b) {
    Qm.call(this, a, b);
    this.g = []
  }
  r(Tm, Qm);
  m = Tm.prototype;
  m.bf = function(a) {
    this.g.push(a);
    return Fi()
  };
  m.Hc = function() {
    this.g.shift();
    return Fi()
  };
  m.md = function() {
    return Fi(void 0 !== this.g[0] ? this.g[0] : null)
  };
  m.nd = function() {
    return Fi(this.g.length)
  };
  m.N = function() {
    delete this.g;
    Qm.prototype.N.call(this)
  };

  function Um() {}
  Um.prototype.toString = ca("fJuxOc");
  var Vm = new Um;

  function Wm() {
    for (var a in Array.prototype) return !1;
    return !0
  };

  function Xm(a, b) {
    this.o = a;
    this.g = b;
    this.constructor.rh || (this.constructor.rh = {});
    this.constructor.rh[this.toString()] = this
  }
  Xm.prototype.toString = function() {
    this.j || (this.j = this.o.g + ":" + this.g);
    return this.j
  };
  Xm.prototype.getType = l("g");

  function Ym(a, b) {
    Xm.call(this, a, b)
  }
  w(Ym, Xm);

  function Zm(a) {
    $m.hasOwnProperty(a);
    this.g = a;
    $m[a] = this
  }
  var $m;
  $m = {};
  new Zm("lib");
  var an = new Zm("fva");
  new Ym(an, 1);

  function bn() {
    this.g = v()
  }
  var cn = null;
  bn.prototype.set = ba("g");
  bn.prototype.reset = function() {
    this.set(v())
  };
  bn.prototype.get = l("g");

  function dn(a) {
    this.w = a || "";
    cn || (cn = new bn);
    this.A = cn
  }
  dn.prototype.g = !0;
  dn.prototype.j = !0;
  dn.prototype.o = !1;

  function en(a) {
    a = new Date(a.o());
    return fn(a.getFullYear() - 2E3) + fn(a.getMonth() + 1) + fn(a.getDate()) + " " + fn(a.getHours()) + ":" + fn(a.getMinutes()) + ":" + fn(a.getSeconds()) + "." + fn(Math.floor(a.getMilliseconds() / 10))
  }

  function fn(a) {
    return 10 > a ? "0" + a : String(a)
  }

  function gn(a, b) {
    a = (a.o() - b) / 1E3;
    b = a.toFixed(3);
    var c = 0;
    if (1 > a) c = 2;
    else
      for (; 100 > a;) c++, a *= 10;
    for (; 0 < c--;) b = " " + b;
    return b
  }

  function hn(a) {
    dn.call(this, a)
  }
  w(hn, dn);

  function jn(a, b) {
    var c = [];
    c.push(a.w, " ");
    a.j && c.push("[", en(b), "] ");
    c.push("[", gn(b, a.A.get()), "s] ");
    c.push("[", b.j(), "] ");
    c.push(b.Ra());
    a.o && (b = b.g()) && c.push("\n", b instanceof Error ? b.message : b.toString());
    a.g && c.push("\n");
    return c.join("")
  };

  function kn(a) {
    a = void 0 === a ? new ln : a;
    T.call(this);
    this.D = {};
    this.g = null;
    this.j = {};
    this.G = new Mm(this);
    this.L = a.o;
    this.I = new zm;
    var b = a.g ? a.g.create(this, void 0) : null,
      c = new Zk;
    this.w = b || new Tm(c, void 0);
    R(this, this.w);
    b = ah(Xg(), "docs-sup") + ah(Xg(), "docs-jepp") + "/jserror";
    (c = ah(Xg(), "jobset")) && (b = Fk(b, "jobset", c));
    if (mn) throw Error("ErrorReporter already installed.");
    mn = !0;
    c = u(this.Gm, this);
    this.g = new sl(b, c, void 0);
    this.g.B = {};
    b = u(this.Lm, this);
    this.g.A = b;
    this.G.R(this.g, "a", this.kl);
    this.C = a.j;
    this.A = !1;
    this.B = !0;
    this.o = !1;
    this.H = ah(Xg(), "docs-jern")
  }
  r(kn, T);

  function nn(a, b) {
    a.o = !1;
    on(b);
    if (!a.g) {
      if (b instanceof ch) throw b.getError();
      throw b;
    }
    a.g.j(b, pn("fatal", void 0))
  }

  function qn(a, b, c) {
    a.o = !1;
    on(b);
    a.g && a.g.j(b, pn("warning", c))
  }

  function rn(a, b, c, d) {
    a.o = void 0 === d ? !1 : d;
    on(b);
    a.g && a.g.j(b, pn("incident", c))
  }
  m = kn.prototype;
  m.log = function(a, b, c) {
    this.o = void 0 === c ? !1 : c;
    on(a);
    if (!this.g) {
      if (a instanceof ch) throw a.getError();
      throw a;
    }
    this.g.j(a, pn("incident", b))
  };

  function sn(a, b, c, d) {
    return function(e) {
      for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
      a: if (g = !!d, a.g) {
        try {
          var k = b.apply(c, f);
          break a
        } catch (n) {
          if (nn(a, n), g) throw n;
        }
        k = void 0
      } else k = b.apply(c, f);
      return k
    }
  }

  function tn(a, b) {
    a.g && b.then(void 0, function(c) {
      nn(a, c instanceof Error ? c : Error(c))
    });
    return b
  }

  function pn(a, b) {
    b = b ? nc(b) : {};
    b.severity = a;
    return b
  }
  m.kl = function(a) {
    var b = a.context.severity;
    if ((b = "fatal" == b || "postmortem" == b) && !this.L) {
      var c = this.I;
      window.confirm("This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.") && c.g()
    }
    this.dispatchEvent(new un(b ? "d" : "e", a.error, a.context))
  };
  m.Gm = function(a, b) {
    var c = this.A;
    try {
      this.jj(a, b)
    } catch (d) {
      throw c && !this.C && (this.B = !1), this.A = !0, b.provideLogDataError = d.message, b.severity || (b.severity = "fatal"), d;
    }
  };
  m.jj = function(a, b) {
    for (var c in this.D) try {
      b[c] = this.D[c](a)
    } catch (e) {}
    qc(b, this.j);
    c = b.severity || "fatal";
    this.H && (b.reportName = this.H + "_" + c);
    b.isArrayPrototypeIntact = Wm().toString();
    var d = a.stack || "";
    if (0 == d.trim().length || "Not available" == d) b["stacklessError-reportingStack"] = Pi(kn.prototype.jj), [a.message].concat(oa(Object.keys(b)), oa(Object.values(b))).some(function(e) {
      return e.includes("<eye3")
    }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
    this.A && !this.C ? (this.B =
      this.o, "fatal" == c ? c = "postmortem" : "incident" == c && (c = "warningafterdeath")) : "fatal" == c && (this.A = !0);
    this.o = !1;
    b.severity = c
  };
  m.Lm = function(a, b, c, d) {
    this.B && this.w.send(a, b, c, d)
  };

  function on(a) {
    a instanceof ch && a.getError()
  }
  m.N = function() {
    mn = !1;
    kj(this.G, this.g, this.w);
    T.prototype.N.call(this)
  };
  var mn = !1;

  function un(a, b, c) {
    S.call(this, a);
    this.error = b;
    this.context = c
  }
  r(un, S);

  function ln() {
    this.o = this.w = !1;
    this.g = void 0;
    this.j = !1
  };

  function vn(a) {
    z(this, a, -1, null, null)
  }
  w(vn, y);

  function wn(a) {
    z(this, a, -1, null, null)
  }
  w(wn, y);
  wn.prototype.Ra = function() {
    return B(this, 1)
  };

  function xn(a) {
    z(this, a, -1, yn, null)
  }
  w(xn, y);
  var yn = [1];

  function zn(a) {
    z(this, a, -1, null, null)
  }
  w(zn, y);
  zn.prototype.getType = function() {
    return B(this, 1)
  };

  function An(a) {
    z(this, a, -1, null, null)
  }
  w(An, y);

  function Bn(a) {
    z(this, a, -1, null, null)
  }
  w(Bn, y);

  function Cn(a) {
    z(this, a, -1, null, null)
  }
  w(Cn, y);
  Cn.prototype.getType = function() {
    return B(this, 1)
  };

  function Fn(a) {
    var b = new Cn;
    return F(b, 1, a)
  };

  function Gn(a) {
    z(this, a, -1, null, null)
  }
  w(Gn, y);

  function Hn(a) {
    z(this, a, -1, null, null)
  }
  w(Hn, y);

  function In(a) {
    z(this, a, -1, null, null)
  }
  w(In, y);
  In.prototype.getType = function() {
    return B(this, 1)
  };

  function Jn(a, b) {
    return F(a, 1, b)
  };

  function Kn(a) {
    z(this, a, -1, null, null)
  }
  w(Kn, y);

  function Ln(a) {
    z(this, a, -1, null, null)
  }
  w(Ln, y);
  Ln.prototype.getType = function() {
    return B(this, 1)
  };
  Ln.prototype.Oe = function() {
    return H(this, wn, 5)
  };

  function Mn(a) {
    return (a = a.exec(ad)) ? a[1] : ""
  }
  var Nn = function() {
    if (je) return Mn(/Firefox\/([0-9.]+)/);
    if (Pd || Qd || Od) return de;
    if (oe) return Nd() ? Mn(/CriOS\/([0-9.]+)/) : Mn(/Chrome\/([0-9.]+)/);
    if (pe && !Nd()) return Mn(/Version\/([0-9.]+)/);
    if (le || me) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ad);
      if (a) return a[1] + "." + a[2]
    } else if (ne) return (a = Mn(/Android\s+([0-9.]+)/)) ? a : Mn(/Version\/([0-9.]+)/);
    return ""
  }();

  function On() {
    return !!t._docs_chrome_extension_exists
  }

  function Pn() {
    return t._docs_chrome_extension_features_version || 0
  };

  function Qn(a) {
    Rn();
    return new yc(Ac, a)
  }
  var Rn = Fa;

  function Sn() {
    this.j = ah(Xg(), "docs-extension-id");
    this.g = null
  }

  function Tn(a) {
    if (On()) {
      var b = Fn(3);
      Un(a, b).then(h())
    } else Wh()
  }

  function Vn(a, b) {
    return On() && 1 <= Pn() ? Wn(a, b).then(function(c) {
      return C(c, 1)
    }) : Wh(!1)
  }

  function Wn(a, b) {
    var c = Fn(5),
      d = new Bn;
    J(c, 5, d);
    F(d, 1, b);
    return Un(a, c, void 0, void 0).then(function(e) {
      return H(e, Kn, 4)
    })
  }

  function Un(a, b, c, d) {
    var e = bi(),
      f = Xn(a);
    if (!f) return c && e.reject(Error("Could not send extension request due to missing Chrome Runtime.")), e.g;
    if (!f.sendMessage) return P(Error("Could not send extension request due to missing chrome.runtime.sendMessage"));
    if (d) {
      var g = v();
      Yk(d).then(function() {
        var k = v() - g;
        e.reject(Error("Request to the extension timed out after " + k + "ms."))
      })
    }
    f.sendMessage(a.j, b.ga(), void 0, function(k) {
      void 0 !== k ? (k = new Ln(k), k.Oe() ? e.reject(Error("Error from Docs extension: " + k.Oe().Ra())) :
        e.resolve(k)) : e.reject(Error("No response from Docs extension: " + (a.g.lastError ? a.g.lastError.message : "without lastError")))
    });
    return e.g
  }

  function Xn(a) {
    if (a.g) return a.g;
    var b = window;
    a.g = Yn(b);
    if (a.g) return a.g;
    for (; b != b.parent && (b = b.parent, a.g = Yn(b), !a.g););
    return a.g
  }

  function Yn(a) {
    try {
      if (a.chrome && a.chrome.runtime) return a.chrome.runtime
    } catch (b) {}
    return null
  };

  function Zn(a) {
    var b = a.target.error,
      c = b && b.name;
    b = b && b.message || a.target.webkitErrorMessage;
    a.target.docs_internalAbort && (b = "Internal abort: " + b);
    return c + " (" + b + ")"
  }

  function $n(a) {
    for (var b = [], c = 0; c < a.length; c++) b.push(a.item(c));
    return b.toString()
  };

  function ao() {
    this.g = {};
    this.w = this.o = this.j = 0
  };

  function bo() {}
  r(bo, df);
  bo.prototype.init = h();
  bo.prototype.clear = h();
  bo.prototype.log = h();
  var co, eo;

  function fo() {
    fo = h();
    eo = co = new go(null)
  };

  function go(a) {
    this.w = a ? a : new kh;
    this.g = {};
    this.o = new bo;
    this.j = {}
  }
  r(go, df);
  go.prototype.B = function(a, b) {
    a = this.j = b;
    b = [];
    for (var c in a) b.push([c, a[c]])
  };
  go.prototype.A = function() {
    return JSON.stringify(this.j)
  };

  function ho(a, b, c) {
    Ul();
    var d = "goog_" + Vl++;
    var e = a.g,
      f = a.w,
      g = ab(Gf()),
      k = new io;
    k.g = !1;
    k.A = a;
    k.C = f;
    k.B = g;
    k.w = b;
    k.o = !0 === c;
    k.j = void 0;
    sg(e, d, k);
    return d
  }

  function jo(a, b) {
    var c = a.g[b];
    c && (c.complete(void 0), delete a.g[b])
  }

  function ko(a, b) {
    b in a.g && delete a.g[b]
  };
  go.prototype.saveInitialLoadStats = go.prototype.B;
  go.prototype.getInitialLoadStats = go.prototype.A;

  function io() {
    this.g = this.o = !1
  }
  r(io, df);
  io.prototype.complete = function(a) {
    if (this.g) throw xf("Timing events should only be completed once").g;
    this.g = !0;
    null != a && null != this.j || this.A.o.log(this.w, Ff() - this.B, this.o, null != a ? a : this.j)
  };
  var lo;

  function mo() {
    mo = h();
    lo = new no
  };

  function no() {}
  r(no, df);
  no.prototype.g = h();

  function oo() {}
  r(oo, df);
  oo.prototype.g = function(a) {
    performance.mark(a)
  };

  function po(a, b, c, d) {
    Q.call(this);
    this.D = a;
    this.C = b;
    this.w = c;
    this.A = d || v;
    this.o = this.j = 0;
    this.g = []
  }
  r(po, Q);
  po.prototype.start = function() {
    if (this.o) throw Error("Idle delay has already been started");
    this.o = this.A() + this.C;
    this.j = Wk(this.B, this.C, this)
  };
  po.prototype.B = function() {
    this.j = 0;
    var a = this.A() - this.o;
    this.g.push(a);
    var b = this.w.hidden || this.w.webkitHidden || this.w.mozHidden || this.w.msHidden ? 1020 : 20;
    10 > this.g.length && a > b ? (this.o = this.A() + 1E3, this.j = Wk(this.B, 1E3, this)) : this.D(this)
  };
  po.prototype.N = function() {
    this.j && Xk(this.j)
  };

  function qo(a, b, c, d, e, f, g, k, n) {
    this.M = a;
    this.o = b;
    this.H = c;
    this.L = d;
    this.X = e;
    a = e.w++;
    e.g[a] = c;
    this.O = a;
    this.A = this.D = null;
    this.C = f || null;
    this.B = (fo(), eo);
    this.j = n ? ho(this.B, n) : null;
    this.I = k || 0;
    this.g = null;
    0 < this.I && (this.C || g) && (this.g = new po(u(this.gm, this), this.I, document), this.g.start());
    this.M.onsuccess = sn(this.o, this.im, this, !0);
    this.M.onerror = sn(this.o, this.hm, this, !0)
  }
  m = qo.prototype;
  m.Uh = function() {
    return this.M.result
  };

  function ro(a, b) {
    if (a.D) throw Error("Success callback already set");
    a.D = b
  }
  m.im = function(a) {
    jj(this.g);
    this.j && jo(this.B, this.j);
    var b = this.X,
      c = this.O;
    b.o++;
    delete b.g[c];
    this.L.g || this.D && this.D(a)
  };

  function so(a, b) {
    if (a.A) throw Error("Error callback already set");
    a.A = b
  }
  m.hm = function(a) {
    jj(this.g);
    this.j && ko(this.B, this.j);
    var b = this.X,
      c = this.O;
    b.j++;
    delete b.g[c];
    a.target.docs_requestContext = this.H;
    this.L.g || (b = a.target.error) && "AbortError" == b.name || this.A && this.A(a)
  };
  m.Yg = function(a) {
    a.onsuccess = Fa;
    a.onerror = Fa
  };
  m.gm = function() {
    this.j && ko(this.B, this.j);
    rn(this.o, Error("A request was running for a long time"), {
      documentHidden: document.hidden || document.webkitHidden,
      request: this.H,
      requestTimeoutMs: this.I,
      timeoutCallbackSet: !!this.C,
      timeoutDelays: this.g.g.concat().toString()
    });
    jj(this.g);
    !this.L.g && this.C && (this.Yg(this.M), this.C())
  };

  function to(a, b, c, d) {
    this.g = a;
    this.w = b;
    this.o = c;
    this.j = d
  }
  to.prototype.get = function(a) {
    return new qo(this.g.get(a), this.j, this.g.name + ".get(" + a + ")", this.w, this.o)
  };

  function uo(a, b, c, d) {
    this.g = a;
    this.w = b;
    this.o = c;
    this.j = d
  }
  uo.prototype.get = function(a) {
    return new qo(this.g.get(a), this.j, this.g.name + ".get(" + a + ")", this.w, this.o)
  };

  function vo(a, b) {
    b = a.g.put(b);
    return new qo(b, a.j, a.g.name + ".put(undefined)", a.w, a.o)
  }
  uo.prototype.add = function(a, b) {
    a = void 0 !== b ? this.g.add(a, b) : this.g.add(a);
    return new qo(a, this.j, this.g.name + ".add(" + b + ")", this.w, this.o)
  };

  function wo(a, b) {
    return new qo(a.g["delete"](b), a.j, a.g.name + ".delete(" + b + ")", a.w, a.o)
  }
  uo.prototype.clear = function() {
    return new qo(this.g.clear(), this.j, this.g.name + ".clear()", this.w, this.o)
  };
  uo.prototype.count = function(a) {
    var b = void 0 !== a ? this.g.count(a) : this.g.count();
    return new qo(b, this.j, this.g.name + ".count(" + a + ")", this.w, this.o)
  };

  function xo(a, b) {
    return new to(a.g.index(b), a.w, a.o, a.j)
  };

  function yo() {
    this.j = this.o = this.g = !1
  };
  var zo;

  function Ao() {
    Ao = h();
    zo = null
  };

  function Bo() {
    this.o = void 0 !== t.performance && void 0 !== t.performance.mark ? new oo : (mo(), lo);
    this.g = {}
  }
  r(Bo, df);

  function Co(a) {
    (Ao(), zo) || (a = new Bo(a), Ao(), zo = a);
    return Ao(), zo
  }
  Bo.prototype.setTime = function(a) {
    Do(this, a, Ff());
    this.o.g(a)
  };
  Bo.prototype.getTime = function(a) {
    a = this.g[a];
    return null != a ? a : null
  };
  Bo.prototype.j = function(a, b) {
    a in this.g || sg(this.g, a, 0);
    sg(this.g, a, this.g[a] + b)
  };

  function Do(a, b, c) {
    if (b in a.g) throw xf("Field " + O(b) + " is already set.").g;
    sg(a.g, b, c)
  }
  Bo.prototype.w = function(a) {
    if (!Zg(Xg(), "icso")) {
      if (a)
        for (var b in a) Do(this, b, a[b]);
      Do(this, "sldummy", 0)
    }
  };
  Bo.prototype.setTime = Bo.prototype.setTime;
  Bo.prototype.incrementTime = Bo.prototype.j;
  Bo.prototype.setServerValues = Bo.prototype.w;
  t._getTimingInstance = Co;
  t._docsTiming = Bo;

  function Eo() {
    xg.call(this)
  }
  r(Eo, xg);
  m = Eo.prototype;
  m.Ah = function(a) {
    if (!(0 <= og(this.za(), a.j))) throw xf("Cannot create operations for an unsupported record type " + O(a.j)).g;
    return this.ud(a)
  };
  m.lb = function(a, b) {
    var c = this.Qa(a),
      d = [];
    a = new Fo(c, a, b, null);
    d.push(a);
    return d
  };
  m.ud = function(a) {
    return this.lb(a, null)
  };
  m.Qa = function(a) {
    throw xf("Key cannot be obtained for record of type " + O(a.j)).g;
  };
  m.wa = function(a) {
    return Go(a) ? 0 <= og(this.za(), a.w) : !1
  };

  function Ho(a) {
    this.j = a
  }
  r(Ho, df);
  Ho.prototype.getType = l("j");

  function Go(a) {
    a = a.getType();
    return "update-record" === a || "delete-record" === a
  };

  function Io(a, b, c) {
    this.j = a;
    this.C = b;
    this.w = c
  }
  r(Io, Ho);

  function Jo(a) {
    if (null == a.C) throw xf("Cannot getKey of operation for singleton record.").g;
    return a.C
  };

  function Ko(a, b) {
    this.g = a;
    this.j = b
  }
  r(Ko, df);

  function Lo(a, b) {
    this.j = a;
    this.g = {};
    this.o = {};
    this.C = !0 === b;
    this.A = !this.C
  }
  r(Lo, df);
  Lo.prototype.$d = function() {
    return this.C || !tg(this.o)
  };
  Lo.prototype.ka = l("C");

  function Mo(a, b) {
    a = No(a, b);
    return null == a ? null : a
  }

  function Oo(a, b) {
    a = No(a, b);
    return null == a ? null : a
  }

  function No(a, b) {
    a = a.g[b];
    return null != a ? a : null
  }

  function Po(a, b, c) {
    if ((bg(c) || "string" === typeof c || "number" === typeof c || "boolean" === typeof c ? 0 : Ka(c)) && !Ha(c)) rm(c, []), null != a.g[b] && Qg(a.g[b], c) || (c = ug(c), sg(a.g, b, c), a.A || sg(a.o, b, c));
    else if (Ha(c)) Zg(Xg(), "docs-anlpfdo") || vl(c, []), rm(c, []), null != a.g[b] && Rg(a.g[b], c) || (c = c.concat(), sg(a.g, b, c), a.A || sg(a.o, b, c));
    else {
      var d = a.g[b];
      (null == d ? null == c : bg(c) ? Rf(d, c.g) : Rf(d, c)) || (vg(a.g, b, c), a.A || vg(a.o, b, c))
    }
  }
  Lo.prototype.D = function() {
    this.o = {};
    this.C = !1
  };
  Lo.prototype.gg = ca(null);

  function Fo(a, b, c, d) {
    Io.call(this, d ? d : "update-record", a, b.j);
    this.B = !1;
    a = c;
    this.B = b.ka();
    this.g = {};
    c = b.o;
    a = a ? a : [];
    for (var e in c) vg(this.g, e, 0 <= og(a, e) ? No(b, e) : b.g[e])
  }
  r(Fo, Io);
  Fo.prototype.ka = l("B");

  function Qo() {
    xg.call(this);
    this.g = Co(null)
  }
  r(Qo, xg);
  Qo.prototype.dh = function(a, b) {
    for (var c = Ff(), d = [], e = 0; e < a.length; e++) d.push(new Ro(a[e]));
    !0 === b && this.g.j("md", Ff() - c);
    return d
  };

  function So() {
    this.j = !1;
    this.g = []
  }
  r(So, df);

  function To(a) {
    var b = a.g;
    a.g = [];
    a.j = !1;
    return b
  };

  function Uo(a, b, c) {
    Lo.call(this, "document", c);
    this.w = new So;
    Po(this, "id", a);
    Po(this, "documentType", b)
  }
  r(Uo, Lo);
  m = Uo.prototype;
  m.F = function() {
    return this.g.id
  };
  m.getType = function() {
    return this.g.documentType
  };
  m.gg = function() {
    var a = 0 == this.w.g.length;
    if (a) return Lo.prototype.gg.call(this);
    a = a ? 1 : 2;
    return new Ko(this.F(), a)
  };
  m.ma = function() {
    return Oo(this, "mimeType")
  };
  m.$d = function() {
    return Lo.prototype.$d.call(this) || 0 != this.w.g.length
  };

  function Vo(a, b, c) {
    this.j = a;
    this.o = b;
    this.A = c
  }
  r(Vo, Ho);

  function Wo(a, b, c, d) {
    Vo.call(this, "append-commands", a, b);
    this.w = c;
    this.B = d
  }
  r(Wo, Vo);

  function Xo(a, b) {
    xg.call(this);
    this.Tk = a;
    this.Uk = b;
    this.Rk = new Qo(this.Uk);
    new Yo("mr")
  }
  r(Xo, xg);
  Xo.prototype.Lb = l("Tk");
  Xo.prototype.dh = function(a, b) {
    return this.Rk.dh(a, b)
  };
  Xo.prototype.Of = function(a) {
    var b = new So,
      c = a.w;
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
    return [new Wo(a.F(), a.getType(), To(b), c)]
  };

  function Zo(a, b, c) {
    ch.call(this, "Local storage error: " + O(b), null);
    this.type = 0;
    this.type = a;
    this.Mf = c;
    this.j(Error(this))
  }
  r(Zo, ch);

  function Yo() {
    xg.call(this);
    Co(null)
  }
  r(Yo, xg);

  function $o(a, b, c, d) {
    this.j = "append-template-commands";
    this.o = a;
    this.A = b;
    this.w = c;
    this.B = d
  }
  r($o, Ho);
  $o.prototype.Lb = l("A");

  function ap(a, b) {
    Lo.call(this, "applicationMetadata", b);
    this.w = !1;
    Po(this, "dt", a);
    this.B = []
  }
  r(ap, Lo);
  ap.prototype.Lb = function() {
    return this.g.dt
  };
  ap.prototype.D = function() {
    Lo.prototype.D.call(this);
    this.w = !1
  };
  ap.prototype.$d = function() {
    return this.w || Lo.prototype.$d.call(this)
  };
  var bp = ["c", "oc", "ou", "u"];

  function cp() {
    xg.call(this)
  }
  r(cp, Eo);
  m = cp.prototype;
  m.za = function() {
    return []
  };
  m.lb = function() {
    throw xf("No operation is supported.").g;
  };
  m.ud = function(a) {
    return this.lb(a, null)
  };
  m.Qa = function() {
    throw xf("No record is supported.").g;
  };
  m.wa = ca(!1);

  function dp() {
    xg.call(this)
  }
  r(dp, Eo);
  dp.prototype.za = function() {
    return ["comment"]
  };
  dp.prototype.Qa = function(a) {
    return [a.g.di, a.F()]
  };

  function ep(a) {
    xg.call(this);
    this.Lh = a
  }
  r(ep, Eo);
  m = ep.prototype;
  m.za = function() {
    return ["document"]
  };
  m.pc = function(a) {
    var b = this.Lh[a];
    if (!b) throw xf("No adapter found for this type: " + O(a)).g;
    return b
  };
  m.createDocument = function(a, b, c) {
    a = new Uo(a, b, !0, this.Lh[b]);
    null == c || null == Mo(a, "initialSyncReason") && Po(a, "initialSyncReason", c);
    return a
  };
  m.wa = function(a) {
    var b = a.getType();
    return "append-commands" === b || "write-trix" === b ? !0 : Eo.prototype.wa.call(this, a)
  };
  m.lb = function(a) {
    var b = Eo.prototype.lb.call(this, a, "lastModifiedClientTimestamp lastWarmStartedTimestamp ic odocid relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber fileLockedReason mimeType".split(" "));
    a = this.pc(a.getType()).Of(a);
    return b.concat(a)
  };
  m.Qa = function(a) {
    return a.F()
  };

  function fp(a) {
    xg.call(this);
    this.Sk = a
  }
  r(fp, Eo);
  m = fp.prototype;
  m.za = function() {
    return ["applicationMetadata"]
  };
  m.Qa = function(a) {
    return a.Lb()
  };
  m.wa = function(a) {
    return lg(a.getType(), "update-application-metadata")
  };
  m.lb = function(a) {
    var b = this.Qa(a);
    return [new gp(b, a, a.w ? a.B.slice(0) : null)]
  };
  m.pc = function(a) {
    var b = this.Sk[a];
    if (!b) throw xf("No adapter found for this type: " + O(a)).g;
    return b
  };

  function gp(a, b, c) {
    Fo.call(this, a, b, null, "update-application-metadata");
    this.o = c
  }
  r(gp, Fo);

  function hp() {
    xg.call(this)
  }
  r(hp, Eo);
  hp.prototype.za = function() {
    return ["documentEntity"]
  };
  hp.prototype.Qa = function(a) {
    return [a.g.documentId, a.getType(), a.F()]
  };

  function ip() {
    xg.call(this)
  }
  r(ip, Eo);
  ip.prototype.za = function() {
    return []
  };

  function jp(a, b) {
    this.j = "document-lock";
    this.o = a;
    this.w = b
  }
  r(jp, Ho);

  function kp(a, b, c, d, e) {
    Lo.call(this, "impressionBatch", e);
    Po(this, "di", a);
    Po(this, "dt", b);
    Po(this, "ibt", c);
    Po(this, "iba", d)
  }
  r(kp, Lo);

  function lp() {
    xg.call(this)
  }
  r(lp, Eo);
  lp.prototype.za = function() {
    return ["impressionBatch"]
  };
  lp.prototype.Qa = function(a) {
    var b = [];
    b.push(Oo(a, "di"));
    b.push(a.g.ibt);
    return b
  };
  lp.prototype.wa = function(a) {
    return Eo.prototype.wa.call(this, a) && (lg(a.getType(), "update-record") && a.ka() || lg(a.getType(), "delete-record"))
  };

  function mp() {
    xg.call(this)
  }
  r(mp, Eo);
  mp.prototype.za = function() {
    return []
  };

  function np(a, b, c) {
    this.g = a;
    this.changeType = b;
    this.j = c
  }
  r(np, df);

  function op(a) {
    this.g = a
  }
  r(op, df);

  function qp(a) {
    xg.call(this);
    this.j = !1;
    this.g = a;
    this.o = new ih
  }
  r(qp, xg);

  function rp(a) {
    if (a.j) throw xf("Called setWritable on an already writable localstore.").g;
    a.j = !0
  }
  qp.prototype.write = function(a, b, c) {
    var d = this;
    if (!this.j) throw xf("Cannot write to read-only local store.").g;
    var e = sp(a);
    a = tp(this, a);
    0 == a.length ? b() : up(this.g, a, function() {
      d.o.dispatchEvent(e);
      b()
    }, c)
  };

  function sp(a) {
    var b = [];
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = d.ka() ? "new" : "update";
      b.push(new np(d, e, d.o))
    }
    return new op(b, null)
  }

  function tp(a, b) {
    var c = [],
      d = null;
    for (var e = 0; e < b.length; e++) {
      var f = b[e];
      if (f.$d()) {
        var g = a.g;
        var k = f.j;
        if (g = k in g.w ? g.w[k] : null) {
          g = g.Ah(f);
          qg(c, g);
          if ((g = f.gg()) && d) {
            if (!ef(d.g, g.g)) throw xf("Cannot compare two requirements with different doc id.").g;
            d = d.j > g.j ? d : g
          } else d = d ? d : g;
          f.D()
        } else throw xf("No Capability for record :" + O(f.j)).g;
      }
    }
    d && c.unshift(new jp(d.g, d.j));
    return c
  };

  function vp() {
    xg.call(this)
  }
  r(vp, Eo);
  vp.prototype.za = function() {
    return []
  };

  function wp() {
    xg.call(this)
  }
  r(wp, Eo);
  wp.prototype.za = function() {
    return ["blobMetadata"]
  };
  wp.prototype.lb = function(a) {
    return Eo.prototype.lb.call(this, a, bp)
  };
  wp.prototype.ud = function(a) {
    return this.lb(a, null)
  };
  wp.prototype.Qa = function(a) {
    return [a.g.d, a.g.p]
  };
  var xp = ["revisionAccessInfo", "unsentBundleMetadata", "selection", "sentBundlesSavedRevision", "snapshotBundleIndex"];

  function yp(a) {
    return a.g.docId
  }

  function zp(a, b) {
    Po(a, "unsentBundleMetadata", b)
  };

  function Ap(a, b, c) {
    this.g = this.requestId = 0;
    this.requestId = a;
    this.sessionId = b;
    this.g = c
  }
  r(Ap, df);

  function Bp(a) {
    var b = {};
    b.rid = a.requestId;
    sg(b, "sid", a.sessionId);
    b.lei = a.g;
    return b
  };

  function Cp(a, b) {
    this.j = a;
    this.g = b
  }
  r(Cp, df);
  Cp.prototype.za = function() {
    return ["pendingQueue"]
  };
  Cp.prototype.Qa = function(a) {
    return yp(a)
  };
  Cp.prototype.Ah = function(a) {
    var b = a.getType();
    if (!this.j[b]) throw xf("No document adapter available for type " + O(b)).g;
    var c = a.I;
    b = [];
    switch (c) {
      case 7:
        b = yp(a);
        var d = a.B,
          e = a.G;
        c = [];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          d++;
          g = Dp(this, g.j(), yp(a), d, !0);
          if (!g) throw xf("Unexpected null operation").g;
          c.push(g)
        }
        e = a.B + c.length;
        f = a.H ? a.H : [];
        g = [];
        d = [];
        for (var k = 0; k < f.length; k++) {
          var n = f[k];
          var p = n.j();
          if (p = Dp(this, p, b, e + 1, null)) d.push(p), n = new Ap(n.o(), n.g(), e + 1), g.push(n), e++
        }
        zp(a, Ep(g));
        e = new Fp(a);
        c.push(e);
        qg(c, d);
        0 <= a.B && c.push(new Gp(b, a.B));
        b = c;
        break;
      case 1:
        c = a.B + 1;
        d = yp(a);
        b = [];
        e = a.L;
        f = a.w ? cg(a.w.requestId) : null;
        g = a.w ? a.w.sessionId : null;
        k = No(a, "unsentBundleMetadata");
        if (k = null == k ? null : k instanceof Array ? k.concat() : ug(k)) {
          n = [];
          for (p = 0; p < k.length; p++) n.push(new Ap(k[p].rid, k[p].sid, k[p].lei));
          k = n
        } else k = [];
        if (f && null != g) k.push(new Ap(f.g, g, c));
        else {
          if (0 == k.length) throw xf("Bundles and metadata do not match!").g;
          f = k[k.length - 1];
          k[k.length - 1] = new Ap(f.requestId, f.sessionId, c)
        }
        e && zp(a, Ep(k));
        tg(a.o) ||
          (a = new Fo(d, a, xp, null), b.push(a));
        (a = Dp(this, e, d, c, null)) && b.push(a);
        break;
      case 5:
        zp(a, null);
        a = new Fp(a);
        b.push(a);
        break;
      case 2:
        zp(a, null);
        a = new Hp(a);
        b.push(a);
        break;
      case 3:
        a = new Ip(a);
        b.push(a);
        break;
      case 4:
        a = new Jp(a);
        b.push(a);
        break;
      case 6:
        a = new Fo(yp(a), a, xp, null);
        b.push(a);
        break;
      default:
        throw xf("Unknown Pending Queue operation type: " + c).g;
    }
    return b
  };

  function Dp(a, b, c, d, e) {
    if (!(!0 === e || b && 0 != b.length)) return null;
    e = [];
    if (b) {
      var f = [];
      for (var g = 0; g < b.length; g++) {
        var k = Kp(b[g]);
        e.push(k);
        k = JSON.stringify(k);
        for (var n = [], p = 0; p < k.length; p++) {
          var x = kg(k, p),
            A = !1,
            G = k.charCodeAt(p),
            K = Xf(k.charCodeAt(p));
          55296 <= G && 56319 >= G ? A = !(65536 <= x && 1114111 >= x) : K && (0 < p ? (A = kg(k, p - 1), A = !(65536 <= A && 1114111 >= A)) : A = !0);
          A && (x = "\\u" + O(jf(x)), A = Lp(k, p - 1), G = Lp(k, p + 1), n.push(new Mp(x, p, k.length, A, G)))
        }
        qg(f, n)
      }
      0 < f.length && (b = {}, f = "{" + O(f.join("; ")) + "}", sg(b, "command_malformedCharacterContext",
        f), a = a.g, f = new vf, lf(f, "Serializing commands containing malformed surrogate characters."), f.j(Error(f)), b ? rn(a.g, f.g, b) : rn(a.g, f.g))
    }
    return new Np(c, e, d)
  }

  function Ep(a) {
    if (0 == a.length) return null;
    var b = [];
    for (var c = 0; c < a.length; c++) b.push(Bp(a[c]));
    return b
  };

  function Hp(a) {
    Fo.call(this, yp(a), a, xp, "pq-clear")
  }
  r(Hp, Fo);

  function Jp(a) {
    Fo.call(this, yp(a), a, xp, "pq-clear-sent-bundle")
  }
  r(Jp, Fo);

  function Ip(a) {
    Fo.call(this, yp(a), a, xp, "pq-clear-sent")
  }
  r(Ip, Fo);

  function Gp(a, b) {
    this.j = "pq-delete-commands";
    this.o = a;
    this.w = b
  }
  r(Gp, Ho);

  function Op(a, b, c) {
    this.g = this.requestId = 0;
    this.sessionId = a;
    this.requestId = b;
    this.g = c
  }
  r(Op, df);

  function Fp(a) {
    Fo.call(this, yp(a), a, xp, "pq-mark-sent");
    this.A = !1;
    this.o = [];
    var b = a.B;
    if (7 == a.I) {
      this.A = !0;
      a = a.G;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        b++;
        d = new Op(d.g(), d.o(), b);
        this.o.push(d)
      }
    } else this.A = !1, b = new Op(a.w ? a.w.sessionId : null, (a.w ? cg(a.w.requestId) : null).g, b), this.o.push(b)
  }
  r(Fp, Fo);

  function Np(a, b, c) {
    this.j = "pq-write-commands";
    this.A = a;
    this.w = b;
    this.o = c
  }
  r(Np, Ho);

  function Mp(a, b, c, d, e) {
    this.A = a;
    this.o = b;
    this.w = c;
    this.j = d;
    this.g = e
  }
  r(Mp, df);
  Mp.prototype.toString = function() {
    var a = "MalformedCharacterContext(unicodeChar: " + O(this.A) + ", index: " + this.o + ", textLength: " + this.w;
    null != this.j && (a = O(a) + String(", prev: " + O(this.j)));
    null != this.g && (a = O(a) + String(", next: " + O(this.g)));
    return O(a) + ")"
  };
  Mp.prototype.oa = function(a) {
    return a instanceof Mp && lg(this.toString(), Sf(a))
  };
  Mp.prototype.td = function() {
    for (var a = [this.A, cg(this.o), cg(this.w), this.j, this.g], b = 1, c = 0; c < a.length; c++) {
      b *= 31;
      var d = a[c];
      if (null != d) {
        var e = void 0;
        if (d.td) e = d.td();
        else {
          var f = typeof d;
          "number" == f ? e = Hf(d) : "boolean" == f ? e = d ? 1231 : 1237 : "string" == f ? e = gg(d) : e = ff(d)
        }
      } else e = 0;
      b += e;
      b |= 0
    }
    return b
  };

  function Lp(a, b) {
    return 0 > b || b >= a.length ? null : "\\u" + O(jf(kg(a, b)))
  };

  function Pp(a) {
    this.newVersion = 0;
    this.newVersion = a
  }
  r(Pp, df);

  function Qp() {
    xg.call(this);
    this.U = new ih;
    this.w = {}
  }
  r(Qp, xg);

  function Rp(a, b) {
    var c = b.za();
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (a.w[e]) throw xf("Record type " + O(e) + "already handled by another capability.").g;
      sg(a.w, e, b)
    }
  }
  Qp.prototype.Vg = ca(null);
  Qp.prototype.Ri = ca(null);
  Qp.prototype.Ha = ca(null);

  function Sp() {
    xg.call(this)
  }
  r(Sp, Eo);
  Sp.prototype.za = function() {
    return ["syncHints"]
  };
  Sp.prototype.Qa = function(a) {
    a = Mo(a, "sourceApp");
    return ["synchints", "" + (null == a ? 0 : Hf(a))]
  };
  Sp.prototype.wa = function(a) {
    return Eo.prototype.wa.call(this, a) && lg(a.getType(), "update-record")
  };

  function Tp() {
    xg.call(this)
  }
  r(Tp, Eo);
  Tp.prototype.za = function() {
    return ["syncObject"]
  };
  Tp.prototype.Qa = function(a) {
    a = a.g.keyPath.concat();
    for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
    return b
  };
  Tp.prototype.wa = function(a) {
    return Eo.prototype.wa.call(this, a) && lg(a.getType(), "update-record") && a.ka()
  };

  function Up() {
    xg.call(this)
  }
  r(Up, Eo);
  Up.prototype.za = function() {
    return ["syncStats"]
  };
  Up.prototype.Qa = ca(null);
  Up.prototype.wa = function(a) {
    return Eo.prototype.wa.call(this, a) && !lg(a.getType(), "delete-record")
  };

  function Vp(a) {
    xg.call(this);
    this.g = a
  }
  r(Vp, xg);
  Vp.prototype.Of = function(a) {
    var b = To(a.w);
    return 0 == b.length ? [] : [new $o(a.F(), a.Lb(), b, !0)]
  };
  Vp.prototype.Lb = l("g");

  function Wp(a) {
    xg.call(this);
    this.Vk = a
  }
  r(Wp, Eo);
  m = Wp.prototype;
  m.za = function() {
    return ["templateCreationMetadata", "templateMetadata"]
  };
  m.Qa = function(a) {
    return "templateCreationMetadata" === a.j ? [a.F()] : [a.F()]
  };
  m.ud = function(a) {
    var b = Eo.prototype.ud.call(this, a);
    "templateCreationMetadata" === a.j && (a = this.pc(a.Lb()).Of(a), qg(b, a));
    return b
  };
  m.pc = function(a) {
    var b = this.Vk[a];
    if (!b) throw xf("No adapter found for this type: " + O(a)).g;
    return b
  };
  m.wa = function(a) {
    return "append-template-commands" === a.getType() ? !0 : Eo.prototype.wa.call(this, a)
  };

  function Xp(a, b) {
    Lo.call(this, "user", b);
    Po(this, "id", a);
    Po(this, "fastTrack", "true")
  }
  r(Xp, Lo);
  Xp.prototype.F = function() {
    return this.g.id
  };

  function Yp() {
    xg.call(this)
  }
  r(Yp, Eo);
  m = Yp.prototype;
  m.za = function() {
    return ["user"]
  };

  function Zp(a) {
    var b = new th;
    $p(a, function(c) {
      b.callback(c)
    }, function(c) {
      b.V(c)
    });
    return b.transform(function(c) {
      if (1 > c.length) throw c = new ch("Expected an offline user in localstore", null), c.j(Error(c)), c.g;
      return c[0]
    })
  }
  m.lb = function(a, b) {
    return Eo.prototype.lb.call(this, a, b)
  };
  m.ud = function(a) {
    return this.lb(a, null)
  };
  m.Qa = function(a) {
    return a.F()
  };
  m.wa = function(a) {
    return Eo.prototype.wa.call(this, a) && !lg(a.getType(), "delete-record")
  };

  function aq() {
    xg.call(this)
  }
  r(aq, Eo);
  aq.prototype.za = function() {
    return ["fontMetadata"]
  };
  aq.prototype.Qa = function(a) {
    return a.g.fontFamily
  };
  aq.prototype.wa = function(a) {
    return Eo.prototype.wa.call(this, a) ? lg(a.getType(), "update-record") ? a.ka() : !0 : !1
  };

  function bq(a, b) {
    ch.call(this, a, null);
    this.o = b;
    this.j(Error(this))
  }
  r(bq, ch);
  ia.Object.defineProperties(bq.prototype, {
    type: {
      configurable: !0,
      enumerable: !0,
      get: l("o")
    }
  });

  function cq() {
    xg.call(this)
  }
  r(cq, xg);

  function dq(a, b, c, d, e, f, g) {
    var k = void 0,
      n = void 0,
      p = this;
    n = void 0 === n ? null : n;
    this.H = a;
    this.la = b;
    this.L = c;
    this.w = d;
    this.X = e;
    this.G = !1;
    this.o = void 0 === g ? !1 : g;
    this.D = this.B = null;
    this.j = new yo;
    this.W = new ao;
    this.ea = 6E4;
    this.A = new po(function() {
      if (!p.j.j) {
        var x = eq(p);
        x.transactionTimeout = p.ea;
        x.timeoutDelays = p.A.g.concat().toString();
        x.documentHidden = document.hidden || document.webkitHidden;
        rn(p.w, Error("A transaction was running for a long time (" + p.L + ")"), x);
        p.A.dispose();
        p.aa && (fq(p, !0), p.aa(), p.D.oncomplete =
          null)
      }
    }, this.ea, document);
    this.aa = void 0 === k ? null : k;
    this.I = (fo(), eo);
    this.g = null;
    this.U = gq++;
    this.C = f;
    this.O = this.o ? "idbrwt" : "idbrot";
    this.Ha = n
  }
  m = dq.prototype;
  m.open = function() {
    null != this.O && (this.g = ho(this.I, this.O, !0));
    var a = this.o ? "readwrite" : "readonly";
    this.A.start();
    try {
      var b = this.H.transaction(this.la, a)
    } catch (c) {
      throw a = eq(this), Qi(c, a);
    }
    b.onabort = sn(this.w, this.qm, this);
    b.oncomplete = sn(this.w, this.sm, this);
    b.onerror = sn(this.w, this.jm, this, !0);
    this.D = b;
    this.C.add(this)
  };
  m.abort = function(a) {
    fq(this, !1, a)
  };

  function fq(a, b, c) {
    var d = a.j;
    if (!d.o && !d.g) {
      hq(a);
      d.g = !0;
      try {
        a.D.abort()
      } catch (e) {
        "InvalidStateError" == e.name && b || (d = eq(a), d.abortFromTimeout = b, rn(a.w, e, d))
      }
      c && !a.G && (a.X(c), a.G = !0);
      a.A.dispose();
      a.C.remove(a)
    }
  }

  function iq(a, b) {
    hq(a);
    return new uo(a.D.objectStore(b), a.j, a.W, a.w)
  }

  function jq(a, b) {
    if (a.B) throw Error("Completion callback already set");
    a.B = b
  }
  m.S = l("j");

  function hq(a) {
    if (!a.D) throw Error("Transaction does not exist");
  }
  m.qm = function(a) {
    this.j.j || (this.j.o = !0, this.g && (ko(this.I, this.g), this.g = null), this.C.remove(this), this.A.dispose(), this.j.g || (a.target.docs_internalAbort = !0, !this.o && a.target.error && "QuotaExceededError" == a.target.error.name ? this.B && this.B() : kq(this, "LocalStore IndexedDB transaction abort", eq(this), a)))
  };
  m.sm = function() {
    this.j.j || (this.C.remove(this), this.g && (jo(this.I, this.g), this.g = null), this.A.dispose(), this.B && this.B())
  };
  m.jm = function(a) {
    a.stopPropagation();
    var b = this.j;
    if (!(b.j || b.o || b.g || (b = a.target.error, b && "AbortError" == b.name)) && (b = eq(this), b.request = a.target.docs_requestContext, kq(this, "LocalStore IndexedDB error", b, a), a = this.C, Zg(Xg(), "docs-ewtaoe") && this.o)) {
      delete a.g[this.F()];
      b = 0;
      for (var c in a.g) {
        var d = Number(c),
          e = a.g[d];
        e.o && (e.abort(), delete a.g[d], b++)
      }
      a.j = !0;
      rn(a.o, Error("Handled fatal error of transaction: " + this.F() + " and aborted " + b + " transactions "))
    }
  };

  function kq(a, b, c, d) {
    b = b + " (" + a.L + "): " + Zn(d);
    rn(a.w, Error(b), c);
    c = new Zo(1, b, d, a.Ha);
    a.G || (a.X(c), a.G = !0)
  }
  m.F = l("U");

  function eq(a) {
    var b = $n(a.H.objectStoreNames);
    b = {
      databaseName: a.H.name,
      databaseObjectStores: b,
      databaseVersion: a.H.version,
      transactionAllowWrite: a.o,
      transactionContext: a.L,
      transactionId: a.U,
      transactionObjectStores: a.la.toString()
    };
    a = a.W;
    var c = dc(a.g);
    b.pendingRequestCount = c.length;
    b.pendingRequests = c.toString();
    b.requestErrorCount = a.j;
    b.requestSuccessCount = a.o;
    return b
  }

  function lq(a) {
    this.o = a;
    this.g = {};
    this.j = !1
  }
  lq.prototype.add = function(a) {
    if (a.o || !this.j) this.g[a.F()] = a
  };
  lq.prototype.remove = function(a) {
    delete this.g[a.F()]
  };
  var gq = 0;

  function mq() {}

  function nq(a, b, c, d, e, f) {
    e = void 0 === e ? !1 : e;
    f = void 0 === f ? !1 : f;
    b = void 0 !== b ? oq(b, c) : null;
    e = e ? "prev" : "next";
    if (d) return a = xo(a, d), f ? (f = (f = void 0 !== b) && void 0 !== e ? a.g.openKeyCursor(b, e) : f ? a.g.openKeyCursor(b) : a.g.openKeyCursor(), b = new qo(f, a.j, a.g.name + ".openKeyCursor(" + (b ? b.lower + ", " + b.upper : b) + ", " + e + ")", a.w, a.o)) : (f = (f = void 0 !== b) && void 0 !== e ? a.g.openCursor(b, e) : f ? a.g.openCursor(b) : a.g.openCursor(), b = new qo(f, a.j, a.g.name + ".openCursor(" + (b ? b.lower + ", " + b.upper : b) + ", " + e + ")", a.w, a.o)), b;
    f = (f = void 0 !==
      b) && void 0 !== e ? a.g.openCursor(b, e) : f ? a.g.openCursor(b) : a.g.openCursor();
    return new qo(f, a.j, a.g.name + ".openCursor(" + (b ? b.lower + ", " + b.upper : b) + ", " + e + ")", a.w, a.o)
  }

  function pq(a, b, c, d) {
    b = oq(b, c);
    a = wo(a, b);
    d && ro(a, d)
  }

  function qq(a, b, c) {
    var d = void 0,
      e = void 0,
      f = !0;
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    f = void 0 === f ? !1 : f;
    var g = iq(a, "ApplicationMetadata"),
      k = [];
    ro(nq(g, void 0, void 0, void 0, d, e), function(n) {
      if (n = n.target.result) {
        var p = void 0 !== n.value ? n.value : n.key;
        (p = b(p)) && k.push(p);
        n["continue"]()
      } else f && (a.j.j = !0, a.A.dispose(), a.g && (ko(a.I, a.g), a.g = null), a.C.remove(a)), c && c(k)
    })
  }

  function rq(a, b) {
    return function(c) {
      c.stopPropagation();
      b(new Zo(1, a + " (" + Zn(c) + ")", c))
    }
  }

  function oq(a, b) {
    return void 0 === b || a == b ? sq.only(a) : sq.bound(a, b)
  }
  var sq = t.IDBKeyRange || t.webkitIDBKeyRange;
  var docos = {};

  function tq(a) {
    z(this, a, -1, uq, null)
  }
  w(tq, y);

  function vq(a) {
    z(this, a, -1, null, null)
  }
  w(vq, y);
  var uq = [3, 42];
  tq.prototype.ma = function() {
    return B(this, 27)
  };

  function wq(a) {
    z(this, a, -1, null, null)
  }
  w(wq, y);

  function xq(a) {
    z(this, a, -1, null, null)
  }
  w(xq, y);

  function yq(a) {
    z(this, a, -1, null, null)
  }
  w(yq, y);

  function zq(a) {
    z(this, a, -1, null, null)
  }
  w(zq, y);

  function Aq(a) {
    z(this, a, -1, Bq, null)
  }
  w(Aq, y);

  function Cq(a) {
    z(this, a, -1, null, null)
  }
  w(Cq, y);

  function Dq(a) {
    z(this, a, -1, null, null)
  }
  w(Dq, y);
  yq.prototype.S = function() {
    return B(this, 4)
  };
  var Bq = [1, 3, 5];

  function Eq(a, b) {
    F(a, 2, b)
  }

  function Fq(a, b) {
    B(a, 5).push(b)
  }

  function Gq(a, b) {
    F(a, 6, b)
  }

  function Hq(a, b) {
    F(a, 7, b)
  }
  xq.prototype.T = function() {
    return H(this, yq, 1)
  };

  function Iq(a) {
    z(this, a, -1, Jq, null)
  }
  w(Iq, y);

  function Kq(a) {
    z(this, a, -1, null, null)
  }
  w(Kq, y);
  var Jq = [2];

  function Lq(a) {
    z(this, a, -1, Mq, null)
  }
  w(Lq, y);

  function Nq(a) {
    z(this, a, -1, null, null)
  }
  w(Nq, y);

  function Oq(a) {
    z(this, a, -1, null, null)
  }
  w(Oq, y);
  var Mq = [2, 27];

  function Pq(a, b) {
    return F(a, 1, b)
  }

  function Qq(a, b) {
    return F(a, 2, b)
  }

  function Rq(a, b) {
    F(a, 4, b)
  };

  function Sq(a) {
    z(this, a, -1, Tq, null)
  }
  w(Sq, y);
  var Tq = [1];

  function Uq(a) {
    z(this, a, -1, null, null)
  }
  w(Uq, y);

  function Vq(a) {
    Q.call(this);
    this.g = a
  }
  r(Vq, Q);

  function Wq(a, b, c, d, e, f) {
    var g = {};
    g.dcKey = [a, b, c, d];
    g.t = e;
    f && (g.c = f);
    return new Vq(g)
  }
  Vq.prototype.N = function() {
    delete this.g;
    Q.prototype.N.call(this)
  };

  function Xq(a) {
    try {
      var b = t.localStorage.getItem("docs-ucb")
    } catch (c) {
      return rn(a, Error("Error reading unsaved changes bit: " + c.message)), "e"
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

  function Ro(a) {
    this.g = "offline-oc";
    this.j = a
  }
  r(Ro, oh);

  function Yq() {}
  r(Yq, df);

  function Kp(a) {
    if (!lg(a.getType(), "offline-oc")) throw xf("Invalid Type").g;
    return a.j
  };

  function Zq(a, b) {
    this.g = 64;
    this.w = t.Uint8Array ? new Uint8Array(this.g) : Array(this.g);
    this.A = this.o = 0;
    this.j = [];
    this.C = a;
    this.B = b;
    this.D = t.Int32Array ? new Int32Array(64) : Array(64);
    void 0 === $q && (t.Int32Array ? $q = new Int32Array(ar) : $q = ar);
    this.reset()
  }
  var $q;
  w(Zq, om);
  var br = Kb(128, Xb(0, 63));
  Zq.prototype.reset = function() {
    this.A = this.o = 0;
    this.j = t.Int32Array ? new Int32Array(this.B) : Mb(this.B)
  };

  function cr(a) {
    for (var b = a.w, c = a.D, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
        g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b] = f + g | 0
    }
    d = a.j[0] | 0;
    e = a.j[1] | 0;
    var k = a.j[2] | 0,
      n = a.j[3] | 0,
      p = a.j[4] | 0,
      x = a.j[5] | 0,
      A = a.j[6] | 0;
    f = a.j[7] | 0;
    for (b = 0; 64 > b; b++) {
      var G = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0;
      g = p & x ^ ~p & A;
      f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p <<
        7)) | 0;
      g = g + ($q[b] | 0) | 0;
      g = f + (g + (c[b] | 0) | 0) | 0;
      f = A;
      A = x;
      x = p;
      p = n + g | 0;
      n = k;
      k = e;
      e = d;
      d = g + G | 0
    }
    a.j[0] = a.j[0] + d | 0;
    a.j[1] = a.j[1] + e | 0;
    a.j[2] = a.j[2] + k | 0;
    a.j[3] = a.j[3] + n | 0;
    a.j[4] = a.j[4] + p | 0;
    a.j[5] = a.j[5] + x | 0;
    a.j[6] = a.j[6] + A | 0;
    a.j[7] = a.j[7] + f | 0
  }
  Zq.prototype.update = function(a, b) {
    void 0 === b && (b = a.length);
    var c = 0,
      d = this.o;
    if ("string" === typeof a)
      for (; c < b;) this.w[d++] = a.charCodeAt(c++), d == this.g && (cr(this), d = 0);
    else if (Ia(a))
      for (; c < b;) {
        var e = a[c++];
        if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");
        this.w[d++] = e;
        d == this.g && (cr(this), d = 0)
      } else throw Error("message must be string or array");
    this.o = d;
    this.A += b
  };
  Zq.prototype.digest = function() {
    var a = [],
      b = 8 * this.A;
    56 > this.o ? this.update(br, 56 - this.o) : this.update(br, this.g - (this.o - 56));
    for (var c = 63; 56 <= c; c--) this.w[c] = b & 255, b /= 256;
    cr(this);
    for (c = b = 0; c < this.C; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b++] = this.j[c] >> d & 255;
    return a
  };
  var ar = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
    4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
  ];

  function dr() {
    Zq.call(this, 8, er)
  }
  w(dr, Zq);
  var er = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  Zg(Xg(), "docs-eesl");

  function fr(a, b, c) {
    c = void 0 === c ? {} : c;
    5 >= Math.floor(100 * Math.random()) + 1 && (c.sampling_samplePercentage = "5", c.sampling_sampledBy = "random", rn(a, b, c, !1))
  };

  function gr(a) {
    z(this, a, -1, null, null)
  }
  w(gr, y);

  function hr(a) {
    this.g = a || {
      cookie: ""
    }
  }
  m = hr.prototype;
  m.set = function(a, b, c, d, e, f) {
    if ("object" === typeof c) {
      var g = c.ts;
      f = c.us;
      e = c.domain;
      d = c.path;
      c = c.yi
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === c && (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(v() + 1E3 * c)).toUTCString();
    this.g.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
  };
  m.get = function(a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
      f = Ec(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return ""
    }
    return b
  };
  m.remove = function(a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", {
      yi: 0,
      path: b,
      domain: c
    });
    return d
  };
  m.fb = function() {
    return ir(this).keys
  };
  m.sa = function() {
    return ir(this).values
  };
  m.ia = function() {
    return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
  };
  m.ad = function(a) {
    for (var b = ir(this).values, c = 0; c < b.length; c++)
      if (b[c] == a) return !0;
    return !1
  };
  m.clear = function() {
    for (var a = ir(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
  };

  function ir(a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ec(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
      keys: b,
      values: c
    }
  }
  var jr = new hr("undefined" == typeof document ? null : document);

  function kr(a, b) {
    T.call(this);
    var c = this;
    this.B = a;
    this.j = b;
    this.w = new Vk(6E4);
    R(this, this.w);
    this.A = new Mm(this);
    R(this, this.A);
    this.A.R(this.w, "tick", function() {
      return lr(c)
    });
    this.C = this.o = !1;
    this.g = null
  }
  r(kr, T);
  kr.prototype.start = function() {
    var a = this;
    if (this.C) throw Error("The tracker was already started.");
    this.C = !0;
    return Ii(this.B.o).then(function() {
      return lr(a)
    }).then(function() {
      a.w.start();
      a.o = !0
    })
  };
  kr.prototype.yb = function() {
    if (!this.o) throw Error("Cannot check for authentication before initialization");
    return mr(this)
  };

  function mr(a) {
    a = nr(a);
    return !(!a || !C(a, 3))
  }

  function lr(a, b) {
    if (a.g) return b ? a.g.then(function() {
      return lr(a, b)
    }) : a.g;
    var c = mr(a);
    a.g = ei(or(a, b).then(function() {
      var d = mr(a);
      c != d && a.o && a.dispatchEvent(d ? "f" : "g")
    }), function() {
      a.g = null
    });
    return a.g
  }

  function or(a, b) {
    var c = pr();
    if (!c) return t.localStorage.removeItem("docs-offline-ci"), Wh();
    var d = nr(a),
      e = d && B(d, 1) != c;
    if (!(!d || e || 864E5 <= v() - B(d, 2) || b) || !a.B.g() || qr()) return Wh();
    t.localStorage.setItem("docs-offline-sacsd", String(v()));
    b = Wh().then(function() {
      return rr(a, c)
    }).fa(h());
    a.o && a.dispatchEvent(new sr(b));
    return b
  }

  function rr(a, b) {
    var c = tm("/authcheck");
    return Zh([t.fetch(c, {
      credentials: "include"
    }), Yk(15E3).then(function() {
      throw Error("Authentication check timed out.");
    })]).then(function(d) {
      if (200 == d.status) var e = !0;
      else if (401 == d.status || 403 == d.status) e = !1;
      else {
        fr(a.j, Error("Could not determine authentication from status: " + d.status));
        return
      }
      t.localStorage.removeItem("docs-offline-sacsd");
      var f = e,
        g = v();
      var k = new gr;
      k = F(k, 1, b);
      g = F(k, 2, g);
      f = F(g, 3, f);
      try {
        t.localStorage.setItem("docs-offline-ci", f.Ga())
      } catch (n) {
        tr()
      }
      if (e) return ur(a,
        d)
    }).fa(function(d) {
      fr(a.j, Oi(d), {
        authCheckError: "true"
      })
    })
  }

  function ur(a, b) {
    return Wh(b.blob()).then(function(c) {
      7 != c.size || "application/json" != c.type ? rn(a.j, Error("AuthCheck returned 200 with unexpected body."), {
        bodySize: String(c.size),
        responseType: c.type,
        redirected: b.redirected
      }) : b.redirected && rn(a.j, Error("AuthCheck passed after following a redirect."))
    }).fa(function(c) {
      qn(a.j, Oi(c, "Failed to inspect authcheck response body."))
    })
  }

  function pr() {
    var a = jr.get("SAPISID");
    a || (a = jr.get("__Secure-3PAPISID"));
    if (a) {
      var b = new dr;
      b.update(a);
      a = ze(b.digest())
    } else a = null;
    return a
  }

  function vr() {
    var a = t.localStorage.getItem("docs-offline-ci");
    return a ? Ve(gr, a) : null
  }

  function nr(a) {
    try {
      return vr()
    } catch (b) {
      return t.localStorage.removeItem("docs-offline-ci"), qn(a.j, Oi(b, "Detected cookie info corruption, resetting")), null
    }
  }

  function qr() {
    var a = t.localStorage.getItem("docs-offline-sacsd");
    if (!a) return !1;
    a = Number(a);
    return isNaN(a) || 0 > a || a > v() ? !1 : 36E5 > v() - a
  }

  function tr() {
    var a = t.localStorage;
    a.removeItem("docs-offline-ic");
    a.removeItem("docs-offline-icp");
    a.removeItem("docs-offline-lsc");
    a.removeItem("docs-offline-lfch");
    a.removeItem("docs-offline-ci");
    a.removeItem("docs-offline-sacsd")
  }

  function sr(a) {
    S.call(this, "h");
    this.Vm = a
  }
  r(sr, S);

  function wr(a) {
    if (!xr()) {
      rn(a, Error("Local Storage ouid is missing for currently opted-in user."));
      var b = ah(Xg(), "docs-offline-lsuid");
      if (!b) throw Error("Cannot ensure Local Storage ouid exists without a current user.");
      try {
        t.localStorage.setItem("docs-oiouid", b)
      } catch (c) {
        rn(a, c)
      }
    }
  }

  function xr() {
    try {
      var a = t.localStorage.getItem("docs-oiouid") || null
    } catch (b) {
      a = null
    }
    return ah(Xg(), "docs-offline-lsuid") == a
  }

  function yr(a) {
    null === a ? t.localStorage.removeItem("docs-lspa") : t.localStorage.setItem("docs-lspa", String(a))
  };

  function zr(a, b, c, d, e, f) {
    qo.call(this, a, b, c, new yo, new ao, d, !0, e, f);
    this.G = this.w = null;
    a.onblocked = sn(b, this.W, this, !0);
    a.onupgradeneeded = sn(b, this.U, this, !0)
  }
  r(zr, qo);
  zr.prototype.W = function(a) {
    jj(this.g);
    this.w && this.w(a)
  };
  zr.prototype.U = function(a) {
    jj(this.g);
    if (a.dataLoss && "none" != a.dataLoss) {
      var b = {};
      b.dataLoss = a.dataLoss;
      b.dataLossMessage = a.dataLossMessage;
      b.optinBackup = xr();
      b.requestContext = this.H;
      b.unsavedChanges = Xq(this.o);
      rn(this.o, Error("upgradeNeeded after dataLoss"), b)
    }
    this.G && this.G(a)
  };
  zr.prototype.Yg = function(a) {
    qo.prototype.Yg.call(this, a);
    a.onblocked = Fa;
    a.onupgradeneeded = Fa
  };

  function Ar(a, b) {
    if (a.w) throw Error("Blocked callback already set");
    a.w = b
  }

  function Br(a, b) {
    if (a.G) throw Error("Upgrade needed callback already set");
    a.G = b
  };

  function Cr(a, b) {
    S.call(this, "i", b);
    this.newVersion = a
  }
  r(Cr, S);

  function Dr(a, b) {
    Q.call(this);
    this.A = a;
    this.B = b;
    this.g = null;
    this.o = !1;
    this.C = new lq(b);
    this.w = new ih;
    R(this, this.w);
    this.j = new ih;
    R(this, this.j);
    this.D = t.indexedDB || t.webkitIndexedDB
  }
  r(Dr, Q);
  Dr.prototype.G = function(a) {
    this.o = !0;
    this.close();
    this.j.dispatchEvent(new Cr(Number(a.version) || a.newVersion || 0))
  };
  Dr.prototype.close = function() {
    this.g && (this.g.onversionchange = null, this.g.close(), this.g = null)
  };

  function Er(a, b) {
    if (a.g) throw Error("IdbDocsDatabase already managing a database.");
    if (null != b.onversionchange) throw Error("This database is being managed by another class.");
    b.onclose = function() {
      var c = {};
      c.optinBackup = xr();
      rn(a.B, Error("The database connection was closed."), c);
      a.w.dispatchEvent(null)
    };
    b.onerror = rq("Database error.", a.A);
    b.onversionchange = u(a.G, a);
    a.g = b
  }

  function Fr(a) {
    if (!a.g) return -1;
    a = parseInt(a.g.version, 10);
    return 0 <= a ? a : -1
  }

  function Gr(a, b, c, d, e) {
    if (!a.g) throw Error("Cannot open transaction on uninitialized IdbDocsDatabase");
    if (e && a.C.j) throw Error("Cannot open read-write transactions because of a previous fatal error in a read-write transaction.");
    a = new dq(a.g, b, c, a.B, d || a.A, a.C, e);
    a.open();
    return a
  }

  function Hr(a, b, c, d, e) {
    if (Fr(a) >= b) throw Error("Upgrading to a version (" + b + ") less than or equal to current version (" + Fr(a) + ")");
    var f = a.g.name;
    a.close();
    var g = a.B;
    b = new zr(a.D.open(f, b), g, "setVersion database.open");
    Br(b, function(k) {
      k = k.target.transaction;
      k.onabort = k.onerror = sn(g, d, {}, !0);
      c(k)
    });
    so(b, d);
    Ar(b, function(k) {
      rn(g, Error("Onblocked handler called when upgrading database."), {
        "Old version": k.oldVersion,
        "New version": k.newVersion
      })
    });
    ro(b, function(k) {
      Er(a, k.target.result);
      e(k)
    })
  }
  Dr.prototype.N = function() {
    this.close();
    Q.prototype.N.call(this)
  };

  function Ir(a, b, c, d) {
    Xo.call(this, a, d);
    this.cm = b;
    this.fm = c
  }
  r(Ir, Xo);
  Ir.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "append-commands":
        Jr(a, b);
        break;
      default:
        throw Error("Unsupported operation type " + a.getType());
    }
  };

  function Jr(a, b) {
    if (a.B) {
      var c = iq(b, "DocumentCommands");
      Kr(a.o, c, function() {
        return Lr(a, b)
      })
    } else Lr(a, b)
  }

  function Kr(a, b, c) {
    pq(b, [a], [a, []], c)
  }

  function Lr(a, b) {
    b = iq(b, "DocumentCommands");
    for (var c = a.w, d = 0; d < c.length; ++d) {
      for (var e = a.o, f = c[d], g = f.j(), k = [], n = 0; n < g.length; ++n) k.push(Kp(g[n]));
      e = Wq(e, f.o(), f.w(), f.g(), f.A(), k);
      vo(b, e.g)
    }
  };

  function Mr(a, b, c, d) {
    this.j = a;
    this.w = b;
    this.g = c;
    this.o = d
  }
  Mr.prototype.Kb = l("o");

  function Nr(a, b, c, d) {
    Q.call(this);
    var e = this;
    this.j = a;
    this.o = b;
    this.w = 0;
    this.D = d;
    this.A = new mh;
    R(this, this.A);
    nh(this.A, c.j, function() {
      e.B()
    });
    this.G = new Mm(this);
    this.C = new ih;
    R(this, this.C);
    this.H = !1;
    this.g = this.I = null
  }
  r(Nr, Q);

  function Or(a, b, c) {
    Pr(a, b, c, function(d, e) {
      "unavailable" == d && (Qr(a, e, "ensureDocumentLockAvailable"), c.abort(new Zo(2, "Lock not available")))
    })
  }

  function Rr(a, b, c) {
    if (t.navigator.locks) Sr(a, b, c);
    else {
      a.g && a.g.stop();
      var d = function() {
        jj(a.g);
        a.g = null;
        c.abort(new Zo(2, "Lock could not be refreshed"))
      };
      Tr(a, b, c, function(e) {
        e && e.g == a.j ? Ur(a, b, c, e, function() {
          a.g && a.g.start()
        }, d) : (Qr(a, e, "refreshDocumentLock"), d())
      }, d)
    }
  }

  function Sr(a, b, c) {
    Tr(a, b, c, function(d) {
      d && d.g == a.j || (Qr(a, d, "ensureDocumentLockOwner"), c.abort(new Zo(2, "Lock not available: session is not the current lock-holder")))
    }, function(d) {
      c.abort(d)
    })
  }

  function Tr(a, b, c, d, e) {
    b = iq(c, "DocumentLocks").get([b]);
    ro(b, function(f) {
      a.ua() || (f = f.target.result, d(f ? new Mr(f.e, f.dlKey[0], f.sId, f.cId || null) : null))
    });
    e && so(b, qb(e))
  }

  function Pr(a, b, c, d) {
    Tr(a, b, c, function(e) {
      if (e) {
        var f = a.j;
        var g = 0 == a.o;
        var k = v();
        g = e.g == f ? "available" : (f = window.localStorage) && f.getItem("dcl_" + e.g) ? "available" : e.j + (g ? 6E4 : 0) <= k || e.j > k + 36E4 ? "expiredOtherSid" : "unavailable"
      } else g = "available";
      d(g, e)
    }, void 0)
  }

  function Qr(a, b, c) {
    if (!(0 >= a.o)) {
      var d = v(),
        e = {};
      e.lockReadReason = c;
      e.lockDuration = a.o;
      a.w && (e.lastWrittenValidUntil = a.w - d);
      var f = "IndexedDB document lock not available";
      if (b) {
        if (e.lockHoldingSessionId = b.g, e.validUntil = b.j - d, t.navigator.locks)
          if ("acquireDocumentLock" == c) f = "IndexedDB document lock not available after Web Locks API fallback";
          else if ("ensureDocumentLockOwner" == c || "refreshDocumentLock" == c) b = (c = window.localStorage) && c.getItem("dcl_" + b.g), e.lockReleased = !!b, e.webLockHasBeenAcquired = a.H,
          e.webLockReleaseReason = a.I
      } else f = "IndexedDB document lock not available because the lock does not exist";
      rn(a.D, Error(f), e)
    }
  }

  function Ur(a, b, c, d, e, f) {
    var g = v(),
      k = 0;
    d && a.j == d.g && (k = d.j);
    d = Math.min(Math.max(g + a.o, k), g + 6E4);
    a.w = d;
    c = iq(c, "DocumentLocks");
    a = new Mr(d, b, a.j, null);
    b = {};
    b.e = a.j;
    b.dlKey = [a.w];
    b.sId = a.g;
    b.cId = a.o;
    a = vo(c, b);
    ro(a, qb(e));
    f && so(a, qb(f))
  }
  Nr.prototype.B = function() {
    if (!t.navigator.locks) {
      jj(this.g);
      this.g = null;
      var a = window.localStorage;
      if (a) try {
        a.setItem("dcl_" + this.j, String(v()))
      } catch (d) {
        for (var b = 0, c = 0; c < a.length; c++) Cc(a.key(c), "dcl_") && b++;
        throw Qi(d, {
          keysTotal: String(a.length),
          locksTotal: String(b)
        });
      }
    }
    Promise.resolve()
  };
  Nr.prototype.N = function() {
    this.G.dispose();
    jj(this.g);
    this.g = null;
    Q.prototype.N.call(this)
  };

  function Vr(a) {
    xg.call(this);
    this.g = a
  }
  r(Vr, ip);
  Vr.prototype.B = function() {
    this.g.B()
  };
  Vr.prototype.Ja = function() {
    return ["DocumentLocks"]
  };
  Vr.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "document-lock":
        switch (a.w) {
          case 2:
            Rr(this.g, a.o, b);
            break;
          case 1:
            Or(this.g, a.o, b)
        }
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };
  Vr.prototype.N = function() {
    ip.prototype.N.call(this);
    this.g.dispose()
  };

  function Wr() {};

  function Xr(a, b, c, d, e, f) {
    e = e ? function() {
      d(new Zo(6, "Timeout opening database."))
    } : void 0;
    var g = Co();
    f && (g.setTime("odbs"), Wk(u(g.setTime, g, "odbjy")));
    e = new zr((t.indexedDB || t.webkitIndexedDB).open("GoogleDocs"), c, "database.open", e, $g(Xg(), "docs-localstore-iort"), "idbodb");
    ro(e, function(k) {
      f && g.setTime("odbc");
      var n = new Dr(b, c);
      Er(n, k.target.result);
      a(n)
    });
    so(e, rq("Error opening database.", d))
  }

  function Yr(a, b) {
    var c = (t.indexedDB || t.webkitIndexedDB).deleteDatabase("GoogleDocs");
    c.onsuccess = a;
    c.onerror = rq("Error deleting database.", b)
  };
  var Zr = {
    Xj: "l",
    ck: "s",
    bk: "r"
  };

  function $r(a, b, c, d) {
    Cp.call(this, c, new ph(d))
  }
  r($r, Cp);
  $r.prototype.Ja = function() {
    return ["PendingQueueCommands", "PendingQueues"]
  };
  $r.prototype.Aa = function(a, b) {
    var c = this;
    a instanceof Fo && !a.ka() ? ro(iq(b, "PendingQueues").get(Jo(a)), function(d) {
      d = d.target.result;
      if (!d) throw Error("Tried to update a non-existent pending queue.");
      as(c, a, b, d)
    }) : as(this, a, b)
  };

  function as(a, b, c, d) {
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
        } catch (k) {
          rn(a, Error("Error setting unsaved changes bit in Local Storage: " +
            k.message))
        }
      }
    }
    switch (b.getType()) {
      case "pq-clear":
        d || b.ka();
        d = d || bs(b);
        b = Jo(b);
        a = iq(c, "PendingQueueCommands");
        pq(a, [b], [b, []]);
        d.b = [];
        cs(d, c);
        break;
      case "pq-clear-sent":
        d || b.ka();
        d = d || bs(b);
        a = d.b;
        0 < a.length && (a = a[a.length - 1].l, e = iq(c, "PendingQueueCommands"), b = Jo(b), pq(e, [b], [b, a]), d.b = []);
        cs(d, c);
        break;
      case "pq-clear-sent-bundle":
        d || b.ka();
        d = d || bs(b);
        a = d.b.shift().l;
        e = iq(c, "PendingQueueCommands");
        b = Jo(b);
        pq(e, [b], [b, a]);
        cs(d, c);
        break;
      case "pq-mark-sent":
        d || b.ka();
        d = d || bs(b);
        a = b.o;
        b.A && (d.b = []);
        for (b =
          0; b < a.length; b++) e = a[b], f = Zr, g = {}, g[f.Xj] = e.g, g[f.ck] = e.sessionId, g[f.bk] = e.requestId, d.b.push(g);
        cs(d, c);
        break;
      case "update-record":
        d || b.ka();
        d = d || bs(b);
        cs(d, c);
        break;
      case "pq-write-commands":
        d = b.w;
        a = {};
        a.pqcKey = [b.A, b.o];
        a.c = d;
        vo(iq(c, "PendingQueueCommands"), a);
        break;
      case "pq-delete-commands":
        c = iq(c, "PendingQueueCommands");
        d = b.o;
        pq(c, [d], [d, b.w]);
        break;
      default:
        throw Error("Unsupported operation type: " + b.getType());
    }
  }

  function cs(a, b) {
    vo(iq(b, "PendingQueues"), a)
  }

  function bs(a) {
    a.ka();
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

  function ds(a) {
    xg.call(this);
    this.g = a
  }
  r(ds, cp);

  function es(a, b, c) {
    Yr(function() {
      a.g.o = !0;
      b()
    }, c || a.g.A)
  }
  ds.prototype.Ja = function() {
    throw Error("No object store available.");
  };
  ds.prototype.Aa = function(a) {
    throw Error("Operation type " + a.getType() + " not supported.");
  };

  function fs() {}

  function gs(a, b, c, d, e) {
    c && (e = e || [], ro(d.get(b), u(a.g, a, d, c, e)))
  }
  fs.prototype.g = function(a, b, c, d) {
    d = d.target.result;
    if (void 0 !== d) {
      for (var e in b) {
        var f = b[e];
        Db(c, e) ? d[e] = null != f ? f : null : d[e] = f
      }
      vo(a, d)
    } else throw Error("Could not find object to update.");
  };

  function hs(a, b, c) {
    var d = Gr(a, ["ProfileData"], "Error removing document ids", void 0, !0);
    is(b, function(e) {
      for (var f = 0; f < c.length; f++) Fb(e, c[f]);
      f = {};
      f.dataType = b;
      f.documentIds = e;
      vo(iq(d, "ProfileData"), f);
      jq(d, Fa)
    }, d)
  }

  function is(a, b, c) {
    ro(iq(c, "ProfileData").get(a), function(d) {
      d = d.target.result;
      b(d && d.documentIds ? d.documentIds : [])
    })
  };

  function js(a, b, c) {
    xg.call(this);
    this.g = c
  }
  r(js, dp);
  js.prototype.Ja = function() {
    return ["Comments"]
  };
  js.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = iq(b, "Comments");
        Jo(a);
        if (a.ka()) {
          var c = a.g,
            d = {};
          d.cmtKey = Jo(a);
          d.stateIndex = [c.s, c.di];
          d.da = c.da;
          vo(b, d)
        } else {
          d = a.g;
          a = Jo(a);
          var e = {};
          "s" in d && (e.stateIndex = [d.s, a[0]], delete d.s);
          for (c in d) e[c] = d[c];
          gs(this.g, a, e, b)
        }
        break;
      case "delete-record":
        b = iq(b, "Comments");
        a = Jo(a);
        wo(b, a);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function ks() {
    xg.call(this)
  }
  r(ks, vp);

  function ls(a, b, c, d) {
    ep.call(this, d);
    this.j = a;
    this.o = c
  }
  r(ls, ep);
  ls.prototype.Ja = function(a) {
    if (!this.wa(a)) throw Error("Cannot get object store names for operation type " + a.getType());
    var b = ["DocumentCommands", "Documents"];
    "delete-record" == a.getType() && (b = b.concat(["Comments", "DocumentEntities", "PendingQueueCommands", "PendingQueues"]));
    return b
  };
  ls.prototype.Aa = function(a, b) {
    var c = iq(b, "Documents");
    switch (a.getType()) {
      case "update-record":
        a.ka() ? c.add(a.g) : gs(this.o, Jo(a), a.g, c, ms);
        break;
      case "delete-record":
        ns(this, a, b);
        break;
      default:
        this.pc(a.A).Aa(a, b)
    }
  };

  function ns(a, b, c) {
    b.o ? a.g(b, c) : a.Ve(Jo(b), c, function(d) {
      d ? c.abort(new Zo(5, "Pending changes found")) : a.g(b, c)
    })
  }
  ls.prototype.Ve = function(a, b, c) {
    ro(nq(iq(b, "PendingQueueCommands"), [a], [a, []]), function(d) {
      d.target.result ? c(!0) : os(a, b, c)
    })
  };

  function os(a, b, c) {
    ro(xo(iq(b, "Comments"), "StateIndex").get([2, a]), function(d) {
      c(!!d.target.result)
    })
  }
  ls.prototype.g = function(a, b) {
    a = Jo(a);
    var c = iq(b, "DocumentCommands");
    pq(c, [a], [a, []]);
    c = iq(b, "PendingQueueCommands");
    pq(c, [a], [a, []]);
    c = iq(b, "PendingQueues");
    pq(c, a);
    c = iq(b, "Documents");
    pq(c, a);
    c = iq(b, "DocumentLocks");
    pq(c, [a]);
    c = iq(b, "Comments");
    pq(c, [a], [a, []]);
    hs(this.j, "nonsnapshottedocumentids", [a]);
    hs(this.j, "missingdocosdocumentids", [a]);
    b = iq(b, "DocumentEntities");
    pq(b, [a], [a, []])
  };
  var ms = "lastModifiedClientTimestamp lastWarmStartedTimestamp relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber odocid".split(" ");

  function ps() {}
  ps.prototype.g = function(a, b, c, d, e) {
    return new ls(a, b, c, d, e)
  };

  function qs(a, b, c, d) {
    xg.call(this);
    this.g = a;
    this.o = c;
    this.j = d
  }
  r(qs, Yp);

  function $p(a, b, c) {
    if (a.g.o) Wk(Ra(b, []));
    else if (Db(a.g.g.objectStoreNames, "Users")) {
      a = Gr(a.g, ["Users"], "Error reading users.", c);
      var d = [];
      ro(iq(a, "Users").get(sq.lowerBound(-Infinity)), function(e) {
        if (e = e.target.result) {
          var f = new Xp(e.id, !1);
          Po(f, "emailAddress", e.emailAddress);
          Po(f, "locale", e.locale);
          null != e.fastTrack && Po(f, "fastTrack", e.fastTrack ? "true" : "");
          null != e.internal && Po(f, "internal", e.internal ? "true" : "");
          null != e.optInReasons && Po(f, "optInReasons", e.optInReasons);
          f.A = !1;
          d = [f]
        }
      });
      jq(a, function() {
        return b(d)
      })
    } else a.j.log(Error("Reading from uninitialized IDB database.")),
      Wk(Ra(b, []))
  }
  qs.prototype.Ja = function(a) {
    if (!this.wa(a)) throw Error("Cannot get object store names for operation type " + a.getType());
    return ["Users"]
  };
  qs.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = iq(b, "Users");
        a.ka() ? b.add(a.g) : gs(this.o, Jo(a), a.g, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function rs(a, b, c, d, e, f) {
    Qp.call(this);
    var g = this;
    this.ea = d;
    this.tb = new Mm(this);
    this.o = new mq;
    this.j = new fs;
    this.la = new mh;
    yg(this, this.la);
    this.g = a;
    nh(this.la, this.g.j, function(k) {
      g.U.dispatchEvent(new Pp(k.newVersion))
    });
    this.aa = b;
    this.H = new $r(this.g, this.o, this.aa, this.ea);
    Rp(this, this.H);
    this.C = ss(this, this.aa, f);
    Rp(this, this.C);
    this.X = new Vr(c);
    this.B = new qs(a, this.o, this.j, d);
    Rp(this, this.B);
    this.I = new ds(a)
  }
  r(rs, Qp);
  rs.prototype.Ha = l("I");

  function ss(a, b, c) {
    c = void 0 === c ? new ps : c;
    return c.g(a.g, a.o, a.j, b, a.ea)
  }

  function up(a, b, c, d) {
    if (a.g.o) Wk(c);
    else {
      for (var e = {}, f = 0; f < b.length; f++) {
        var g = b[f];
        g = ts(a, g).Ja(g);
        for (var k = 0; k < g.length; k++) e[g[k]] = !0
      }
      d = Gr(a.g, gc(e), "Error writing records.", d, !0);
      jq(d, c);
      for (c = 0; c < b.length; c++) e = b[c], ts(a, e).Aa(e, d)
    }
  }

  function ts(a, b) {
    if (Go(b)) {
      b = b.w;
      a = b in a.w ? a.w[b] : null;
      if (!a) throw Error("No capability registered for record type " + b);
      return a
    }
    b = b.getType();
    if ("pq-clear" == b || "pq-clear-sent" == b || "pq-clear-sent-bundle" == b || "pq-delete-commands" == b || "pq-mark-sent" == b || "pq-write-commands" == b) return a.H;
    if ("document-lock" == b) return a.X;
    if ("append-commands" == b || "write-trix" == b) return a.C;
    if ("update-application-metadata" == b) {
      if (a = a.Vg()) return a
    } else if ("append-template-commands" == b && (a = a.Ri())) return a;
    throw Error("No capability registered for operation type " +
      b);
  }

  function us(a, b, c) {
    var d = a.be();
    if (Fr(a.g) >= d) throw Error("Database already at expected version.");
    Hr(a.g, d, function(e) {
      return ys(a, c, e)
    }, rq("Error initializing the database.", c), b)
  }

  function ys(a, b, c) {
    try {
      a.Md(c)
    } catch (d) {
      Wk(function() {
        return b(new Zo(1, "Failed to initialize database.", d))
      })
    }
  }

  function zs(a, b, c) {
    Hr(a.g, a.be(), function(d) {
      return As(a, c, d)
    }, rq("Error upgrading the database.", c), b)
  }

  function As(a, b, c) {
    try {
      a.Qf(c)
    } catch (d) {
      Wk(function() {
        return b(new Zo(1, "Failed to upgrade database.", d))
      })
    }
  }
  rs.prototype.N = function() {
    kj(this.tb, this.X, this.H, this.C, this.B, this.I);
    Qp.prototype.N.call(this)
  };

  function Bs(a, b, c, d) {
    fp.call(this, c);
    this.g = a;
    this.j = d
  }
  r(Bs, fp);

  function Cs(a, b, c) {
    c = Gr(a.g, ["ApplicationMetadata"], "Error reading application metadata.", c);
    qq(c, function(d) {
      var e = d.dt;
      if (null == e) throw Error("Document type expected to be defined.");
      var f = new ap(e, !1);
      e = a.pc(e);
      var g = d.jobset;
      null != g && Po(f, "jobset", g);
      g = d.ic;
      null != g && (e = e.dh(g), f.B = e.slice(0), f.w = !0);
      (e = d.docosKeyData) && Po(f, "docosKeyData", e);
      d = d.version;
      d = cg(void 0 !== d ? d : 0);
      Po(f, "version", d);
      f.A = !1;
      return f
    }, b)
  }
  Bs.prototype.Ja = function(a) {
    if (!this.wa(a)) throw Error("Cannot get object store names for operation type " + a.getType());
    return ["ApplicationMetadata"]
  };
  Bs.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-application-metadata":
        this.pc(Jo(a));
        var c = a.g;
        if (a.o) {
          if (a.o) var d = a.o;
          else throw xf("No new initial commands are available.").g;
          for (var e = [], f = 0; f < d.length; f++) e.push(Kp(d[f]));
          c.ic = e
        }
        b = iq(b, "ApplicationMetadata");
        a.ka() ? vo(b, c) : gs(this.j, Jo(a), c, b);
        break;
      default:
        throw Error("Cannot perform operation of type " + a.getType());
    }
  };

  function Ds(a, b, c) {
    xg.call(this);
    this.g = c
  }
  r(Ds, hp);
  Ds.prototype.Ja = function() {
    return ["DocumentEntities"]
  };
  Ds.prototype.Aa = function(a, b) {
    b = iq(b, "DocumentEntities");
    switch (a.getType()) {
      case "update-record":
        if (a.ka()) {
          var c = {};
          c.deKey = Jo(a);
          c.data = a.g.data;
          vo(b, c)
        } else c = {}, c.data = a.g.data, a = Jo(a), gs(this.g, a, c, b);
        break;
      case "delete-record":
        pq(b, Jo(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Es() {
    xg.call(this)
  }
  r(Es, lp);
  Es.prototype.Ja = function() {
    return ["Impressions"]
  };
  Es.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        if (a.ka()) {
          b = iq(b, "Impressions");
          a = a.g;
          var c = {};
          c.iKey = [a.di || "", a.ibt];
          c.dt = a.dt;
          c.iba = a.iba;
          vo(b, c)
        } else throw Error("Impressions may not be updated.");
        break;
      case "delete-record":
        pq(iq(b, "Impressions"), Jo(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Fs() {
    xg.call(this)
  }
  r(Fs, mp);

  function Gs(a, b, c) {
    xg.call(this);
    this.g = c
  }
  r(Gs, Sp);
  Gs.prototype.Ja = function() {
    return ["ProfileData"]
  };
  Gs.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = iq(b, "ProfileData");
        a.ka() ? vo(b, a.g) : gs(this.g, Jo(a), a.g, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Hs() {
    xg.call(this)
  }
  r(Hs, Tp);
  Hs.prototype.Ja = function() {
    return ["SyncObjects"]
  };
  Hs.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = iq(b, "SyncObjects");
        if (a.ka()) vo(b, a.g);
        else throw Error("SyncObject update is not implemented.");
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Is(a, b) {
    xg.call(this);
    this.g = b
  }
  r(Is, Up);
  Is.prototype.Ja = function() {
    return ["ProfileData"]
  };
  Is.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "update-record":
        b = iq(b, "ProfileData");
        a.ka() ? vo(b, a.g) : gs(this.g, "syncstats", a.g, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Js() {
    xg.call(this)
  }
  r(Js, aq);
  Js.prototype.Ja = function() {
    return ["FontMetadata"]
  };
  Js.prototype.Aa = function(a, b) {
    b = iq(b, "FontMetadata");
    switch (a.getType()) {
      case "update-record":
        if (a.ka()) vo(b, a.g);
        else throw Error("FontMetadata update is not implemented.");
        break;
      case "delete-record":
        pq(b, Jo(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Ks(a, b, c, d, e, f, g, k) {
    rs.call(this, a, b, c, d, e, f, g, k);
    a = this.g;
    c = this.o;
    this.O = new Ds(a, c, this.j);
    Rp(this, this.O);
    this.Ia = new Js(a, c);
    Rp(this, this.Ia);
    this.va = new Hs(a, c);
    Rp(this, this.va);
    this.sb = new Fs(a);
    this.Sb = new ks(a, this.j);
    this.xa = new Is(a, this.j);
    Rp(this, this.xa);
    this.Tc = new Gs(a, c, this.j);
    Rp(this, this.Tc);
    this.L = new js(this.g, this.o, this.j);
    Rp(this, this.L);
    this.D = new Bs(a, c, b, this.j);
    Rp(this, this.D);
    this.W = new Es(a, c);
    Rp(this, this.W)
  }
  r(Ks, rs);
  m = Ks.prototype;
  m.be = ca(6);
  m.Vg = l("D");
  m.Lf = ca(!1);
  m.Qf = h();
  m.Md = function(a) {
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
  m.N = function() {
    kj(this.O, this.Ia, this.va, this.sb, this.Sb, this.xa, this.L, this.D, this.W);
    rs.prototype.N.call(this)
  };
  Sb("ApplicationMetadata Comments DocumentCommandsMetadataStaging DocumentCommandsMetadata DocumentCommandsStaging DocumentCommands DocumentEntities DocumentLocks Documents FileEntities FontMetadata Impressions NewDocumentIds PendingQueueCommands PendingQueues ProfileData SyncObjects Users".split(" "));

  function Ls(a, b, c, d, e) {
    ls.call(this, a, b, c, d, e)
  }
  r(Ls, ls);
  Ls.prototype.Ja = function(a) {
    var b = ls.prototype.Ja.call(this, a);
    "delete-record" == a.getType() && b.push("BlobMetadata");
    return b
  };
  Ls.prototype.g = function(a, b) {
    ls.prototype.g.call(this, a, b);
    a = Jo(a);
    pq(iq(b, "BlobMetadata"), [a], [a, []])
  };

  function Ms() {}
  r(Ms, ps);
  Ms.prototype.g = function(a, b, c, d, e) {
    return new Ls(a, b, c, d, e)
  };

  function Ns(a, b, c) {
    xg.call(this);
    this.g = c
  }
  r(Ns, wp);
  Ns.prototype.Ja = function() {
    return ["BlobMetadata"]
  };
  Ns.prototype.Aa = function(a, b) {
    b = iq(b, "BlobMetadata");
    switch (a.getType()) {
      case "update-record":
        a.ka() ? b.add(a.g) : gs(this.g, Jo(a), a.g, b);
        break;
      case "delete-record":
        pq(b, Jo(a));
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Os(a, b, c, d, e, f, g, k) {
    f = void 0 === f ? new Ms : f;
    Ks.call(this, a, b, c, d, e, f, g, k);
    this.Bc = new Ns(this.g, this.o, this.j);
    Rp(this, this.Bc)
  }
  r(Os, Ks);
  Os.prototype.be = ca(7);
  Os.prototype.Lf = ca(!0);
  Os.prototype.Md = function(a) {
    Ks.prototype.Md.call(this, a);
    Ps(a)
  };
  Os.prototype.Qf = function(a) {
    Ps(a)
  };

  function Ps(a) {
    a.db.createObjectStore("BlobMetadata", {
      keyPath: ["d", "p"]
    })
  };

  function Qs(a, b) {
    Vp.call(this, a, b);
    new Qo(b)
  }
  r(Qs, Vp);
  Qs.prototype.Aa = function(a, b) {
    switch (a.getType()) {
      case "append-template-commands":
        b = iq(b, "TemplateCommands");
        a.B && pq(b, [a.o], [a.o, []]);
        for (var c = a.w, d = 0; d < c.length; ++d) {
          for (var e = a.o, f = c[d], g = f.j(), k = [], n = 0; n < g.length; ++n) k.push(Kp(g[n]));
          e = Wq(e, f.o(), f.w(), f.g(), f.A(), k);
          vo(b, e.g)
        }
        break;
      default:
        throw Error("Unsupported operation type " + a.getType());
    }
  };

  function Rs(a, b, c) {
    Wp.call(this, c);
    this.g = new fs
  }
  r(Rs, Wp);
  Rs.prototype.Ja = function() {
    return ["TemplateCommands", "TemplateCreationMetadata", "TemplateMetadata"]
  };
  Rs.prototype.Aa = function(a, b) {
    var c = a.w;
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
    c = iq(b, c);
    switch (a.getType()) {
      case "update-record":
        a.ka() ? vo(c, a.g) : gs(this.g, Jo(a), a.g, c);
        break;
      case "delete-record":
        pq(c, Jo(a));
        break;
      case "append-template-commands":
        this.pc(a.Lb()).Aa(a, b);
        break;
      default:
        throw Error("Operation type " + a.getType() + " not supported.");
    }
  };

  function Ss(a, b, c, d, e, f, g, k) {
    Os.call(this, a, b, d, e, f, void 0, g, k);
    a = ["kix", "punch", "ritz"];
    b = this.g;
    if (!c)
      for (c = {}, d = new Yq, e = 0; e < a.length; e++) c[a[e]] = new Qs(a[e], d, b);
    this.jb = new Rs(b, this.o, c);
    Rp(this, this.jb)
  }
  r(Ss, Os);
  m = Ss.prototype;
  m.be = ca(8);
  m.Ri = l("jb");
  m.Lf = ca(!0);
  m.Md = function(a) {
    Os.prototype.Md.call(this, a);
    Ts(a)
  };
  m.Qf = function(a) {
    var b = a.db;
    Db(b.objectStoreNames, "DocumentCommandsStaging") && b.deleteObjectStore("DocumentCommandsStaging");
    Db(b.objectStoreNames, "DocumentCommandsMetadata") && b.deleteObjectStore("DocumentCommandsMetadata");
    Db(b.objectStoreNames, "DocumentCommandsMetadataStaging") && b.deleteObjectStore("DocumentCommandsMetadataStaging");
    Ts(a)
  };

  function Ts(a) {
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

  function Us(a, b, c, d, e, f, g, k, n, p, x, A, G) {
    x = void 0 === x ? !1 : x;
    A = void 0 === A ? null : A;
    Q.call(this);
    this.w = a;
    this.U = b;
    this.aa = c;
    this.I = d;
    this.O = e;
    this.L = f;
    this.X = x;
    this.j = A;
    this.g = {};
    this.o = {};
    this.B = -1;
    this.A = new pi;
    this.H = !1;
    this.C = g;
    this.ea = k;
    this.G = n;
    this.D = p;
    this.W = G
  }
  r(Us, Q);

  function Vs(a, b) {
    var c = b.be();
    a.B = Math.max(a.B, c);
    a.g[c] = b
  }
  m = Us.prototype;
  m.create = function(a, b) {
    if (this.H) throw Error("The create method can be called only once.");
    this.H = !0;
    if (isNaN(this.O)) throw Error("Cannot have the target schema version be NaN.");
    if (this.j) this.lj(this.j);
    else {
      if (!oe) throw Error("Cannot create storage adapters for unsupported browser");
      Xr(u(this.lj, this), a, this.w, u(this.nl, this), this.X, b)
    }
    return this.A
  };
  m.nl = function(a) {
    Qi(a.getError(), {
      databaseOpenFailure: "true"
    });
    this.A.V(a);
    Ws(this)
  };
  m.lj = function(a) {
    this.j = a;
    if (this.I)
      for (var b = this.I(a), c = 0; c < b.length; c++)
        for (var d = b[c], e = d.cm, f = d.fm, g = d.Lb(); e <= f; ++e) {
          var k = this.o[e];
          k || (k = this.o[e] = {});
          k[g] = d
        }
    b = new Nr(this.U, this.aa, a, this.w, void 0, this.W); - 1 == this.B && (Vs(this, new Ks(a, this.o[6] || {}, b, this.w, this.C, void 0, this.G, this.D)), Vs(this, new Os(a, this.o[7] || {}, b, this.w, this.C, this.ea, this.G, this.D)), Vs(this, new Ss(a, this.o[8] || {}, null, b, this.w, this.C, this.G, this.D)));
    a = Math.min(this.O, this.B);
    b = Xs(this);
    if (!this.L && 0 >= b) this.fi(new Zo(4,
      "Schema initialization cannot be performed when schema updates are prevented."));
    else if (!this.L || b >= a) this.bg();
    else {
      a: {
        for (c = b + 1; c <= a; ++c)
          if (null == this.g[c] || !this.g[c].Lf()) {
            c = !1;
            break a
          } c = !0
      }
      c ? (b += 1, c = u(this.bg, this, null), d = u(this.Nl, this), zs(this.g[b], u(this.yh, this, b, a, c, d), d)) : us(this.g[a], u(this.bg, this), u(this.fi, this))
    }
  };
  m.Nl = function(a) {
    this.A.V(a);
    Ws(this)
  };
  m.fi = function(a) {
    this.A.V(a);
    Ws(this)
  };
  m.yh = function(a, b, c, d) {
    a = Xs(this);
    a == b ? c() : (a += 1, zs(this.g[a], u(this.yh, this, a, b, c, d), d))
  };
  m.bg = function() {
    var a = Xs(this);
    if (a = this.g[a]) {
      a = new qp(a);
      this.j && yg(a, this.j);
      for (var b in this.g) yg(a, this.g[b]);
      for (var c in this.o) {
        b = this.o[c];
        for (var d in b) yg(a, b[d])
      }
      this.A.callback(a)
    } else rn(this.w, Error("Local Storage: No schema adapter for current schema version " + (this.j ? Fr(this.j) : -1))), this.A.callback(null)
  };

  function Xs(a) {
    var b = a.j ? Fr(a.j) : -1;
    1 < b && 6 > b && rn(a.w, Error("IDB version less than the minimum. version: " + b));
    return 6 > b ? -1 : b
  }

  function Ws(a) {
    for (var b in a.g) a.g[b].dispose();
    for (var c in a.o) {
      b = a.o[c];
      for (var d in b) b[d].dispose()
    }
    jj(a.j)
  };

  function Ys(a, b, c, d) {
    S.call(this, "broadcast-message", a);
    this.channel = b;
    this.data = d
  }
  r(Ys, S);

  function Zs(a) {
    z(this, a, 1, null, null)
  }
  w(Zs, y);
  var $s = {};

  function at(a) {
    z(this, a, 1, null, null)
  }
  w(at, y);
  var bt = {};

  function ct(a, b) {
    var c = {},
      d = at.prototype.$e,
      e;
    for (e in bt) {
      var f = bt[e],
        g = d.call(b, f);
      if (null != g) {
        for (var k in f.Mh)
          if (f.Mh.hasOwnProperty(k)) break;
        c[k] = f.kh ? f.gb ? Oe(g, f.kh, a) : f.kh(a, g) : g
      }
    }
    a && (c.Fb = b);
    return c
  };

  function et(a) {
    z(this, a, -1, ft, null)
  }
  w(et, y);
  var ft = [1],
    gt = new Je(113007630, {
      cs: 0
    }, et, function(a, b) {
      var c = {
        bs: Oe(I(b, at, 1), ct, a)
      };
      a && (c.Fb = b);
      return c
    });
  $s[113007630] = gt;

  function ht(a) {
    z(this, a, -1, null, null)
  }
  w(ht, y);
  $s[100922934] = new Je(100922934, {
    es: 0
  }, ht, function(a, b) {
    var c, d = {
      Dh: null == (c = B(b, 1)) ? void 0 : c
    };
    a && (d.Fb = b);
    return d
  });

  function it(a) {
    z(this, a, -1, jt, null)
  }
  w(it, y);
  var jt = [3],
    kt = new Je(112987886, {
      fs: 0
    }, it, function(a, b) {
      var c, d = {
        ds: null == (c = B(b, 1)) ? void 0 : c,
        changeType: null == (c = B(b, 2)) ? void 0 : c,
        ms: null == (c = B(b, 3)) ? void 0 : c
      };
      a && (d.Fb = b);
      return d
    });
  bt[112987886] = kt;

  function lt(a) {
    z(this, a, -1, null, null)
  }
  w(lt, y);
  lt.prototype.getType = function() {
    return B(this, 1)
  };

  function mt(a) {
    var b = new lt;
    return F(b, 1, a)
  }
  lt.prototype.Ra = function() {
    return H(this, Zs, 2)
  };

  function nt(a) {
    z(this, a, -1, null, null)
  }
  w(nt, y);
  $s[100413133] = new Je(100413133, {
    ks: 0
  }, nt, function(a, b) {
    var c, d = {
      Dh: null == (c = B(b, 1)) ? void 0 : c
    };
    a && (d.Fb = b);
    return d
  });

  function ot(a) {
    z(this, a, -1, null, null)
  }
  w(ot, y);
  $s[101605819] = new Je(101605819, {
    ls: 0
  }, ot, function(a, b) {
    var c, d = {
      Dh: null == (c = B(b, 1)) ? void 0 : c
    };
    a && (d.Fb = b);
    return d
  });

  function pt(a) {
    z(this, a, -1, null, null)
  }
  w(pt, y);
  $s[102041228] = new Je(102041228, {
    ns: 0
  }, pt, function(a, b) {
    var c = {};
    a && (c.Fb = b);
    return c
  });

  function qt(a) {
    z(this, a, -1, null, null)
  }
  w(qt, y);
  $s[108529910] = new Je(108529910, {
    ps: 0
  }, qt, function(a, b) {
    var c = {};
    a && (c.Fb = b);
    return c
  });

  function rt(a) {
    z(this, a, -1, null, null)
  }
  w(rt, y);
  $s[140441684] = new Je(140441684, {
    qs: 0
  }, rt, function(a, b) {
    var c = {};
    a && (c.Fb = b);
    return c
  });

  function st(a) {
    z(this, a, -1, null, null)
  }
  w(st, y);
  var tt = new Je(122453513, {
    ws: 0
  }, st, function(a, b) {
    var c, d = {
      xs: null == (c = B(b, 1)) ? void 0 : c,
      gs: null == (c = B(b, 2)) ? void 0 : c
    };
    a && (d.Fb = b);
    return d
  });
  $s[122453513] = tt;

  function ut(a, b) {
    T.call(this);
    this.j = !1;
    this.g = null;
    this.w = new Mm(this);
    R(this, this.w);
    this.A = a;
    this.o = b
  }
  r(ut, T);
  ut.prototype.connect = function() {
    this.j || (this.j = !0, this.g = vt(this.A), this.w.R(this.g, "message", this.B.bind(this)), this.g.start())
  };

  function wt(a, b) {
    if (!a.j) throw Error("Trying to publish without connecting first.");
    var c = mt(1);
    b = J(c, 2, b);
    F(b, 3, a.o);
    a.g.postMessage(b.ga())
  }
  ut.prototype.B = function(a) {
    var b = a.Da;
    null != b.data[1] ? (b = new lt(b.data), b.getType(), a = B(b, 3), b = b.Ra()) : (a = this.o, b = new Zs(b.data));
    a: {
      var c = b;
      for (e in $s) {
        var d = $s[Number(e)];
        if (c.$e(d)) {
          var e = d;
          break a
        }
      }
      e = null
    }
    e && (b = b.$e(e), this.dispatchEvent(new Ys(this, a, e, b)))
  };
  ut.prototype.N = function() {
    if (this.g) {
      var a = mt(0);
      this.g.postMessage(a.ga());
      this.g.close()
    }
    T.prototype.N.call(this)
  };

  function xt(a, b) {
    Q.call(this);
    var c = this;
    this.j = b;
    this.g = new mh;
    R(this, this.g);
    nh(this.g, a.o, function(d) {
      var e = [];
      d = d.g;
      for (var f = 0; f < d.length; f++) {
        var g = d[f];
        switch (g.g.j) {
          case "document":
            var k = new it;
            var n = g.g.F();
            F(k, 1, n);
            a: switch (n = g.changeType, n) {
              case "new":
                n = 1;
                break a;
              case "update":
                n = 2;
                break a;
              case "delete":
                n = 3;
                break a;
              default:
                throw Error("Could not handle change type " + n);
            }
            F(k, 2, n);
            n = [];
            g = g.j;
            hc(g, "ip") && n.push(1);
            hc(g, "pendingQueueState") && n.push(6);
            hc(g, "lastModifiedClientTimestamp") && n.push(2);
            (hc(g, "lsst") || hc(g, "lsft") || hc(g, "lss")) && n.push(3);
            hc(g, "pendingCreation") && n.push(4);
            hc(g, "title") && n.push(5);
            F(k, 3, n || []);
            if (2 != B(k, 2) || B(k, 3).length) g = new at, We(g, kt, k), e.push(g)
        }
      }
      e.length && (d = new et, M(d, 1, e), e = new Zs, We(e, gt, d), wt(c.j, e))
    })
  }
  r(xt, Q);

  function yt(a, b) {
    this.g = a;
    this.j = b
  };

  function zt(a, b, c, d, e) {
    Q.call(this);
    this.C = a;
    this.A = b;
    this.D = c ? c : "DefaultLocalStoreSessionId";
    this.B = d || new Yq;
    this.w = !!e;
    this.j = null;
    this.o = new mh;
    R(this, this.o);
    this.g = At(this)
  }
  r(zt, Q);

  function At(a) {
    a.g && jj(a.g);
    var b = $g(Xg(), "lssv");
    return new Us(a.C, a.D, 0, a.xk.bind(a), b, !0, new Wr)
  }

  function Bt(a) {
    if (a.j) return a.j;
    a.j = Ct(a);
    return a.j.fa(function(b) {
      a.rf();
      throw b;
    })
  }

  function Dt(a) {
    return Bt(a).then(function(b) {
      return (new Rh(function(c, d) {
        $p(b.g.B, c, d)
      })).then(function(c) {
        return Et(a, c) ? new yt(b, c[0]) : null
      })
    })
  }

  function Ft(a) {
    return Bt(a).then(function(b) {
      return (new Rh(function(c, d) {
        $p(b.g.B, c, d)
      })).then(function(c) {
        if (!Et(a, c)) throw c = {
          usersLength: c.length,
          allowNonOfflineEnabledUser: a.w,
          storedUserMatchesFlag: 0 == c.length ? "no users" : c[0].F() == ah(Xg(), "docs-offline-lsuid")
        }, Qi(Error("Failed to read LocalStore due to invalid user"), c);
        return new yt(b, c[0])
      })
    })
  }

  function Et(a, b) {
    return 1 == b.length && (a.w || b[0].F() == ah(Xg(), "docs-offline-lsuid"))
  }
  m = zt.prototype;
  m.get = function() {
    return Ft(this).then(function(a) {
      return a.g
    })
  };

  function Ct(a) {
    return (new Rh(function(b, c) {
      wi(a.g.create(a.rf.bind(a)), b, c)
    })).then(a.yl.bind(a))
  }
  m.yl = function(a) {
    var b = this;
    if (!a) throw Error("Got null localstore from the idb localstore factory.");
    if (this.A) {
      var c = new xt(a, this.A);
      R(this, c)
    }
    rp(a);
    nh(this.o, a.g.g.w, function() {
      b.rf()
    });
    nh(this.o, a.g.U, function() {
      b.rf()
    });
    return a
  };
  m.rf = function() {
    jj(this.g);
    this.g = At(this);
    this.j = null
  };
  m.xk = function(a) {
    var b = this.B,
      c = new Ir("kix", 6, 8, b, a),
      d = new Ir("punch", 6, 8, b, a),
      e = new Ir("ritz", 6, 8, b, a);
    a = new Ir("drawing", 6, 8, b, a);
    return [e, c, d, a]
  };
  m.N = function() {
    jj(this.g);
    Q.prototype.N.call(this)
  };

  function Gt(a) {
    z(this, a, -1, null, null)
  }
  w(Gt, y);
  Gt.prototype.ba = function() {
    return B(this, 1)
  };

  function Ht(a) {
    z(this, a, -1, null, null)
  }
  w(Ht, y);
  Ht.prototype.getType = function() {
    return B(this, 1)
  };

  function It(a) {
    var b = new Ht;
    return F(b, 1, a)
  }
  Ht.prototype.F = function() {
    return B(this, 2)
  };

  function Jt(a, b) {
    return F(a, 2, b)
  }

  function Kt(a, b) {
    return F(a, 5, b)
  }

  function Lt(a, b) {
    return F(a, 8, b)
  }
  Ht.prototype.Vb = function() {
    return C(this, 10)
  };

  function Mt(a) {
    z(this, a, -1, Nt, null)
  }
  w(Mt, y);

  function Ot(a) {
    z(this, a, -1, null, null)
  }
  w(Ot, y);

  function Pt(a) {
    z(this, a, -1, Qt, null)
  }
  w(Pt, y);

  function Rt(a) {
    z(this, a, -1, St, null)
  }
  w(Rt, y);
  var Nt = [4, 5, 6, 7],
    Qt = [5],
    St = [2];

  function Tt(a) {
    z(this, a, -1, null, null)
  }
  w(Tt, y);

  function Ut(a) {
    z(this, a, -1, null, null)
  }
  w(Ut, y);
  var Vt = {
    Qo: 1,
    Zo: 3,
    Io: 4,
    Ho: 2,
    qq: 5,
    Xq: 6,
    Jo: 7,
    So: 8
  };
  Tt.prototype.P = function() {
    return B(this, 2)
  };

  function Wt(a) {
    z(this, a, -1, Xt, null)
  }
  w(Wt, y);
  var Xt = [2];

  function Yt(a) {
    z(this, a, -1, null, null)
  }
  w(Yt, y);
  Yt.prototype.F = function() {
    return B(this, 1)
  };
  Yt.prototype.getType = function() {
    return B(this, 2)
  };

  function Zt(a) {
    z(this, a, -1, null, null)
  }
  w(Zt, y);
  Zt.prototype.P = function() {
    return B(this, 1)
  };

  function $t(a) {
    z(this, a, -1, null, null)
  }
  w($t, y);
  $t.prototype.F = function() {
    return B(this, 1)
  };

  function au(a) {
    z(this, a, -1, null, null)
  }
  w(au, y);
  au.prototype.P = function() {
    return B(this, 1)
  };

  function bu(a) {
    z(this, a, -1, null, null)
  }
  w(bu, y);

  function cu(a) {
    z(this, a, -1, null, null)
  }
  w(cu, y);
  cu.prototype.getType = function() {
    return B(this, 1)
  };

  function du(a) {
    z(this, a, -1, eu, null)
  }
  w(du, y);
  var eu = [2, 3];

  function fu(a) {
    z(this, a, -1, gu, null)
  }
  w(fu, y);
  var gu = [4, 5, 6, 17, 18, 24];
  fu.prototype.F = function() {
    return B(this, 1)
  };

  function hu(a, b) {
    return F(a, 4, b || [])
  }

  function iu(a, b) {
    return F(a, 5, b || [])
  }
  fu.prototype.getType = function() {
    return B(this, 23)
  };

  function ju(a) {
    z(this, a, -1, null, null)
  }
  w(ju, y);

  function ku(a, b) {
    return F(a, 1, b)
  };

  function lu(a) {
    z(this, a, -1, mu, null)
  }
  w(lu, y);
  var mu = [5, 7, 9];
  m = lu.prototype;
  m.Ua = function(a) {
    F(this, 2, a)
  };
  m.gh = function(a) {
    return F(this, 3, a)
  };
  m.jh = function(a) {
    return F(this, 4, a)
  };
  m.yf = function(a) {
    return F(this, 5, a || [])
  };
  m.ih = function(a) {
    return F(this, 6, a)
  };
  m.xf = function(a) {
    return F(this, 7, a || [])
  };
  m.hh = function(a) {
    return F(this, 8, a)
  };
  m.vf = function(a) {
    return F(this, 9, a || [])
  };

  function nu(a) {
    z(this, a, -1, ou, null)
  }
  w(nu, y);
  var ou = [7, 10, 12, 16, 13, 3];
  m = nu.prototype;
  m.Ua = function(a) {
    F(this, 4, a)
  };
  m.gh = function(a) {
    return F(this, 5, a)
  };
  m.jh = function(a) {
    return F(this, 6, a)
  };
  m.yf = function(a) {
    return F(this, 7, a || [])
  };

  function pu(a, b) {
    return F(a, 8, b)
  }
  m.ih = function(a) {
    return F(this, 9, a)
  };
  m.xf = function(a) {
    return F(this, 10, a || [])
  };
  m.hh = function(a) {
    return F(this, 11, a)
  };
  m.vf = function(a) {
    return F(this, 12, a || [])
  };

  function qu(a, b) {
    return J(a, 15, b)
  }

  function ru(a, b) {
    M(a, 16, b)
  }
  m.Yr = function(a, b) {
    return Se(this, 16, a, Ht, b)
  };

  function su(a, b) {
    return F(a, 17, b)
  }

  function tu(a, b) {
    M(a, 13, b)
  }
  m.F = function() {
    return B(this, 14)
  };

  function uu(a, b) {
    return F(a, 14, b)
  };

  function vu(a) {
    z(this, a, -1, null, null)
  }
  w(vu, y);
  vu.prototype.P = function() {
    return B(this, 1)
  };

  function wu(a) {
    z(this, a, -1, null, null)
  }
  w(wu, y);
  wu.prototype.F = function() {
    return B(this, 1)
  };
  wu.prototype.S = function() {
    return B(this, 2)
  };

  function xu(a) {
    z(this, a, -1, yu, null)
  }
  w(xu, y);

  function zu(a) {
    z(this, a, -1, null, null)
  }
  w(zu, y);

  function Au(a) {
    z(this, a, -1, null, null)
  }
  w(Au, y);
  var yu = [1];

  function Bu(a, b) {
    return M(a, 1, b)
  };

  function Cu(a) {
    z(this, a, -1, Du, null)
  }
  w(Cu, y);
  var Du = [1];

  function Eu(a) {
    var b = new Cu;
    return M(b, 1, a)
  };

  function Fu(a) {
    z(this, a, -1, Gu, Hu)
  }
  w(Fu, y);
  var Gu = [2],
    Hu = [
      [3, 4]
    ];

  function Iu(a, b) {
    return J(a, 1, b)
  }

  function Ju(a, b) {
    M(a, 2, b)
  }

  function Ku(a, b) {
    J(a, 6, b)
  };

  function Lu(a) {
    z(this, a, -1, null, Mu)
  }
  w(Lu, y);

  function Nu(a) {
    z(this, a, -1, null, null)
  }
  w(Nu, y);

  function Ou(a) {
    z(this, a, -1, null, null)
  }
  w(Ou, y);

  function Pu(a) {
    z(this, a, -1, null, null)
  }
  w(Pu, y);

  function Qu(a) {
    z(this, a, -1, null, null)
  }
  w(Qu, y);

  function Ru(a) {
    z(this, a, -1, null, null)
  }
  w(Ru, y);

  function Su(a) {
    z(this, a, -1, null, null)
  }
  w(Su, y);

  function Tu(a) {
    z(this, a, -1, null, null)
  }
  w(Tu, y);

  function Uu(a) {
    z(this, a, -1, null, null)
  }
  w(Uu, y);

  function Vu(a) {
    z(this, a, -1, null, null)
  }
  w(Vu, y);

  function Wu(a) {
    z(this, a, -1, null, null)
  }
  w(Wu, y);

  function Xu(a) {
    z(this, a, -1, null, null)
  }
  w(Xu, y);

  function Yu(a) {
    z(this, a, -1, null, null)
  }
  w(Yu, y);

  function Zu(a) {
    z(this, a, -1, null, null)
  }
  w(Zu, y);

  function $u(a) {
    z(this, a, -1, null, null)
  }
  w($u, y);

  function av(a) {
    z(this, a, -1, null, null)
  }
  w(av, y);

  function bv(a) {
    z(this, a, -1, null, null)
  }
  w(bv, y);

  function cv(a) {
    z(this, a, -1, dv, null)
  }
  w(cv, y);

  function ev(a) {
    z(this, a, -1, null, fv)
  }
  w(ev, y);

  function gv(a) {
    z(this, a, -1, hv, null)
  }
  w(gv, y);

  function iv(a) {
    z(this, a, -1, null, jv)
  }
  w(iv, y);

  function kv(a) {
    z(this, a, -1, lv, null)
  }
  w(kv, y);

  function mv(a) {
    z(this, a, -1, null, nv)
  }
  w(mv, y);

  function ov(a) {
    z(this, a, -1, pv, null)
  }
  w(ov, y);

  function qv(a) {
    z(this, a, -1, null, rv)
  }
  w(qv, y);

  function sv(a) {
    z(this, a, -1, tv, null)
  }
  w(sv, y);

  function uv(a) {
    z(this, a, -1, null, vv)
  }
  w(uv, y);

  function wv(a) {
    z(this, a, -1, xv, null)
  }
  w(wv, y);

  function yv(a) {
    z(this, a, -1, null, zv)
  }
  w(yv, y);

  function Av(a) {
    z(this, a, -1, Bv, null)
  }
  w(Av, y);

  function Cv(a) {
    z(this, a, -1, null, Dv)
  }
  w(Cv, y);

  function Ev(a) {
    z(this, a, -1, Fv, null)
  }
  w(Ev, y);

  function Gv(a) {
    z(this, a, -1, null, Hv)
  }
  w(Gv, y);

  function Iv(a) {
    z(this, a, -1, Jv, null)
  }
  w(Iv, y);

  function Kv(a) {
    z(this, a, -1, null, Lv)
  }
  w(Kv, y);

  function Mv(a) {
    z(this, a, -1, Nv, null)
  }
  w(Mv, y);

  function Ov(a) {
    z(this, a, -1, null, Pv)
  }
  w(Ov, y);
  var Mu = [
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  ];

  function Qv(a, b) {
    return L(a, 3, Mu[0], b)
  }
  var dv = [1],
    fv = [
      [1, 2, 3, 4]
    ];

  function Rv(a, b) {
    M(a, 1, b)
  }

  function Sv(a, b) {
    return F(a, 2, b)
  }

  function Tv(a, b) {
    return J(a, 3, b)
  }

  function Uv(a, b) {
    return F(a, 4, b)
  }
  var hv = [1],
    jv = [
      [1]
    ];

  function Vv(a, b) {
    M(a, 1, b)
  }

  function Wv(a, b) {
    return J(a, 2, b)
  }
  var lv = [1],
    nv = [
      [1, 2, 3, 4, 5, 6]
    ];

  function Xv(a, b) {
    M(a, 1, b)
  }

  function Yv(a, b) {
    return J(a, 4, b)
  }

  function Zv(a, b) {
    J(a, 5, b)
  }
  var pv = [2, 4],
    rv = [
      [1, 2]
    ];

  function $v(a, b) {
    M(a, 2, b)
  }

  function aw(a, b) {
    M(a, 4, b)
  }

  function bw(a, b) {
    return J(a, 5, b)
  }
  var tv = [1],
    vv = [
      [1]
    ];

  function cw(a, b) {
    M(a, 1, b)
  }

  function dw(a, b) {
    return J(a, 2, b)
  }
  var xv = [2, 3],
    zv = [
      [1, 2]
    ];

  function ew(a, b) {
    M(a, 2, b)
  }

  function fw(a) {
    var b = new wv;
    return M(b, 3, a)
  }
  var Bv = [1],
    Dv = [
      [1]
    ];

  function gw(a, b) {
    M(a, 1, b)
  }

  function hw(a, b) {
    return F(a, 2, b)
  }

  function iw(a, b) {
    return J(a, 3, b)
  }
  var Fv = [2],
    Hv = [
      [1]
    ];

  function jw(a, b) {
    M(a, 2, b)
  }

  function kw(a, b) {
    return J(a, 3, b)
  }
  var Jv = [1, 2],
    Lv = [
      [1, 2]
    ];

  function lw(a, b) {
    M(a, 1, b)
  }

  function mw(a, b) {
    return M(a, 2, b)
  }
  var Nv = [1],
    Pv = [
      [1]
    ];

  function nw(a, b) {
    M(a, 1, b)
  }

  function ow(a, b) {
    return J(a, 2, b)
  };

  function pw(a) {
    z(this, a, -1, qw, null)
  }
  w(pw, y);
  var qw = [2, 4];
  pw.prototype.S = function() {
    return B(this, 1)
  };
  pw.prototype.Oa = function() {
    return B(this, 3)
  };

  function rw(a) {
    z(this, a, -1, null, null)
  }
  w(rw, y);
  rw.prototype.getMonth = function() {
    return B(this, 2)
  };
  rw.prototype.setMonth = function(a) {
    return F(this, 2, a)
  };
  rw.prototype.getDay = function() {
    return B(this, 3)
  };

  function sw(a) {
    z(this, a, -1, null, null)
  }
  w(sw, y);

  function tw(a) {
    z(this, a, -1, null, uw)
  }
  w(tw, y);

  function vw(a) {
    z(this, a, -1, null, null)
  }
  w(vw, y);

  function ww(a) {
    z(this, a, -1, null, null)
  }
  w(ww, y);

  function xw(a) {
    z(this, a, -1, yw, null)
  }
  w(xw, y);

  function zw(a) {
    z(this, a, -1, null, null)
  }
  w(zw, y);

  function Aw(a) {
    z(this, a, -1, null, null)
  }
  w(Aw, y);

  function Bw(a) {
    z(this, a, -1, null, null)
  }
  w(Bw, y);

  function Cw(a) {
    z(this, a, -1, null, null)
  }
  w(Cw, y);

  function Dw(a) {
    z(this, a, -1, null, null)
  }
  w(Dw, y);

  function Ew(a) {
    z(this, a, -1, null, null)
  }
  w(Ew, y);

  function Fw(a) {
    z(this, a, -1, null, null)
  }
  w(Fw, y);

  function Gw(a) {
    z(this, a, -1, null, null)
  }
  w(Gw, y);

  function Hw(a) {
    z(this, a, -1, null, Iw)
  }
  w(Hw, y);

  function Jw(a) {
    z(this, a, -1, null, null)
  }
  w(Jw, y);

  function Kw(a) {
    z(this, a, -1, null, null)
  }
  w(Kw, y);

  function Lw(a) {
    z(this, a, -1, null, null)
  }
  w(Lw, y);
  var uw = [
      [13, 19, 12, 11, 10, 15, 14, 9, 8, 18, 17, 16]
    ],
    yw = [1];
  zw.prototype.P = function() {
    return B(this, 2)
  };

  function Mw(a, b) {
    M(a, 1, b)
  }
  var Iw = [
    [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ];
  m = Hw.prototype;
  m.xj = function(a) {
    return L(this, 3, Iw[0], a)
  };
  m.wj = function(a) {
    return L(this, 4, Iw[0], a)
  };
  m.sj = function(a) {
    return L(this, 5, Iw[0], a)
  };
  m.rj = function(a) {
    return L(this, 6, Iw[0], a)
  };
  m.pj = function(a) {
    return L(this, 7, Iw[0], a)
  };
  m.vj = function(a) {
    return L(this, 8, Iw[0], a)
  };
  m.uj = function(a) {
    return L(this, 9, Iw[0], a)
  };
  m.zj = function(a) {
    return L(this, 10, Iw[0], a)
  };
  m.yj = function(a) {
    return L(this, 11, Iw[0], a)
  };
  m.qj = function(a) {
    return L(this, 12, Iw[0], a)
  };
  m = tw.prototype;
  m.F = function() {
    return B(this, 1)
  };
  m.pj = function(a) {
    return L(this, 13, uw[0], a)
  };
  m.qj = function(a) {
    return L(this, 19, uw[0], a)
  };
  m.rj = function(a) {
    return L(this, 12, uw[0], a)
  };
  m.sj = function(a) {
    return L(this, 11, uw[0], a)
  };
  m.uj = function(a) {
    return L(this, 15, uw[0], a)
  };
  m.vj = function(a) {
    return L(this, 14, uw[0], a)
  };
  m.wj = function(a) {
    return L(this, 9, uw[0], a)
  };
  m.xj = function(a) {
    return L(this, 8, uw[0], a)
  };
  m.yj = function(a) {
    return L(this, 18, uw[0], a)
  };
  m.zj = function(a) {
    return L(this, 17, uw[0], a)
  };

  function Nw(a) {
    z(this, a, -1, Ow, null)
  }
  w(Nw, y);
  var Ow = [3];
  Nw.prototype.j = function() {
    var a = B(this, 3);
    this.C || (this.C = {});
    if (!this.C[3]) {
      for (var b = 0; b < a.length; b++) a[b] = !!a[b];
      this.C[3] = !0
    }
    return a
  };

  function Pw(a) {
    z(this, a, -1, Qw, null)
  }
  w(Pw, y);
  var Qw = [3];
  Pw.prototype.j = function() {
    return I(this, rw, 3)
  };

  function Rw(a) {
    z(this, a, -1, Sw, null)
  }
  w(Rw, y);
  var Sw = [3];
  Rw.prototype.j = function() {
    return B(this, 3)
  };

  function Tw(a) {
    z(this, a, -1, Uw, null)
  }
  w(Tw, y);
  var Uw = [3];
  Tw.prototype.j = function() {
    return B(this, 3)
  };

  function Vw(a) {
    z(this, a, -1, Ww, null)
  }
  w(Vw, y);
  var Ww = [3];
  Vw.prototype.j = function() {
    return B(this, 3)
  };

  function Xw(a) {
    z(this, a, -1, Yw, null)
  }
  w(Xw, y);
  var Yw = [3];
  Xw.prototype.j = function() {
    return B(this, 3)
  };

  function Zw(a) {
    z(this, a, -1, null, null)
  }
  w(Zw, y);

  function $w(a) {
    z(this, a, -1, ax, null)
  }
  w($w, y);
  var ax = [3];
  $w.prototype.j = function() {
    return B(this, 3)
  };

  function bx(a) {
    z(this, a, -1, cx, null)
  }
  w(bx, y);
  var cx = [3];
  bx.prototype.j = function() {
    return B(this, 3)
  };

  function dx(a) {
    z(this, a, -1, ex, null)
  }
  w(dx, y);
  var ex = [3];
  dx.prototype.j = function() {
    return B(this, 3)
  };

  function fx(a) {
    z(this, a, -1, gx, null)
  }
  w(fx, y);
  var gx = [3];
  fx.prototype.j = function() {
    return B(this, 3)
  };

  function hx(a) {
    z(this, a, -1, null, ix)
  }
  w(hx, y);
  var ix = [
    [3, 14, 11, 12, 9, 8, 7, 6, 5, 4, 10]
  ];

  function jx(a) {
    z(this, a, -1, null, null)
  }
  w(jx, y);
  jx.prototype.ba = function() {
    return B(this, 2)
  };

  function kx(a) {
    z(this, a, -1, null, null)
  }
  w(kx, y);

  function lx(a, b) {
    return F(a, 1, b)
  }

  function mx(a, b) {
    return F(a, 7, b)
  }

  function nx(a, b) {
    return F(a, 8, b)
  }

  function ox(a, b) {
    return F(a, 9, b)
  }

  function px(a, b) {
    return F(a, 11, b)
  }

  function qx(a, b) {
    return F(a, 12, b)
  }

  function rx(a, b) {
    return F(a, 16, b)
  }

  function sx(a, b) {
    return F(a, 17, b)
  }

  function tx(a, b) {
    return F(a, 20, b)
  }

  function ux(a, b) {
    return F(a, 21, b)
  }

  function vx(a, b) {
    return F(a, 31, b)
  }

  function wx(a, b) {
    return F(a, 32, b)
  }

  function xx(a, b) {
    return F(a, 33, b)
  }

  function yx(a, b) {
    return F(a, 42, b)
  }

  function zx(a, b) {
    return F(a, 43, b)
  };

  function Ax(a) {
    z(this, a, -1, null, null)
  }
  w(Ax, y);

  function Bx(a) {
    z(this, a, -1, null, null)
  }
  w(Bx, y);

  function Cx(a) {
    z(this, a, -1, null, null)
  }
  w(Cx, y);

  function Dx(a, b) {
    return F(a, 1, b)
  }

  function Ex(a, b) {
    return F(a, 2, b)
  };

  function Fx(a) {
    z(this, a, -1, null, null)
  }
  w(Fx, y);
  Fx.prototype.ma = function() {
    return B(this, 1)
  };

  function Gx(a) {
    z(this, a, -1, null, null)
  }
  w(Gx, y);

  function Hx(a) {
    z(this, a, -1, null, null)
  }
  w(Hx, y);
  Hx.prototype.j = function() {
    return C(this, 1)
  };

  function Ix(a, b) {
    F(a, 1, b)
  };

  function Jx(a) {
    z(this, a, -1, null, null)
  }
  w(Jx, y);

  function Kx(a, b) {
    return J(a, 1, b)
  }

  function Lx(a, b) {
    return F(a, 2, b)
  }

  function Mx(a, b) {
    return F(a, 3, b)
  };

  function Nx(a) {
    z(this, a, -1, Ox, null)
  }
  w(Nx, y);
  var Ox = [2, 3];

  function Px(a, b) {
    return M(a, 2, b)
  }

  function Qx(a, b) {
    return M(a, 3, b)
  };

  function Rx(a) {
    z(this, a, -1, null, null)
  }
  w(Rx, y);

  function Sx(a) {
    z(this, a, -1, null, null)
  }
  w(Sx, y);

  function Tx(a) {
    z(this, a, -1, null, null)
  }
  w(Tx, y);

  function Ux(a) {
    z(this, a, -1, null, null)
  }
  w(Ux, y);
  Ux.prototype.Wa = function() {
    return B(this, 1)
  };

  function Vx(a) {
    z(this, a, -1, Wx, null)
  }
  w(Vx, y);
  var Wx = [8];

  function Xx(a, b) {
    M(a, 8, b)
  };

  function Yx(a) {
    z(this, a, -1, Zx, null)
  }
  w(Yx, y);
  var Zx = [2];

  function $x(a) {
    z(this, a, -1, null, null)
  }
  w($x, y);

  function ay(a) {
    z(this, a, -1, by, null)
  }
  w(ay, y);

  function cy(a) {
    z(this, a, -1, null, null)
  }
  w(cy, y);
  var by = [2, 15, 37, 38, 50, 55, 56, 58, 60, 83, 89, 104, 105, 106, 107, 117, 120, 121, 123, 125, 127, 128, 135];
  ay.prototype.F = function() {
    return B(this, 1)
  };

  function dy(a, b) {
    return F(a, 1, b)
  }

  function ey(a, b) {
    return F(a, 2, b || [])
  }

  function fy(a, b) {
    return F(a, 3, b)
  }
  ay.prototype.ma = function() {
    return B(this, 4)
  };

  function gy(a, b) {
    return F(a, 4, b)
  }

  function hy(a, b) {
    F(a, 5, b)
  }

  function iy(a, b) {
    F(a, 7, b)
  }

  function jy(a, b) {
    F(a, 8, b)
  }

  function ky(a, b) {
    F(a, 11, b)
  }

  function ly(a, b) {
    return F(a, 19, b)
  }

  function my(a, b) {
    F(a, 24, b)
  }

  function ny(a, b) {
    F(a, 25, b)
  }

  function oy(a, b) {
    F(a, 26, b)
  }

  function py(a, b) {
    F(a, 31, b)
  }

  function qy(a, b) {
    F(a, 34, b)
  }
  ay.prototype.j = function() {
    return C(this, 49)
  };

  function ry(a) {
    return D(a, 52, 1)
  }

  function sy(a, b) {
    return F(a, 52, b)
  }

  function ty(a, b) {
    M(a, 58, b)
  }
  ay.prototype.Z = function() {
    return B(this, 72)
  };

  function uy(a, b) {
    return F(a, 72, b)
  }

  function vy(a) {
    return H(a, Vx, 73)
  }

  function wy(a, b) {
    return J(a, 73, b)
  }

  function xy(a) {
    return H(a, Hx, 81)
  }

  function yy(a) {
    return H(a, kx, 84)
  }

  function zy(a, b) {
    J(a, 85, b)
  }

  function Ay(a, b) {
    return F(a, 92, b)
  }

  function By(a, b) {
    return F(a, 93, b)
  }

  function Cy(a, b) {
    J(a, 109, b)
  }

  function Dy(a, b) {
    return M(a, 117, b)
  }

  function Ey(a) {
    return H(a, cy, 132)
  };

  function Fy(a) {
    z(this, a, -1, null, null)
  }
  w(Fy, y);
  Fy.prototype.F = function() {
    return B(this, 1)
  };

  function Gy(a) {
    z(this, a, -1, Hy, null)
  }
  w(Gy, y);
  var Hy = [5, 6, 9, 10, 12, 13, 15, 16];
  Gy.prototype.F = function() {
    return B(this, 1)
  };
  Gy.prototype.Xb = function() {
    return B(this, 2)
  };

  function Iy(a) {
    z(this, a, -1, Jy, null)
  }
  w(Iy, y);
  var Jy = [2];

  function Ky(a, b) {
    return F(a, 1, b)
  }

  function Ly(a, b) {
    M(a, 2, b)
  }
  Iy.prototype.ba = function() {
    return B(this, 3)
  };

  function My(a, b) {
    return F(a, 3, b)
  };

  function Ny(a) {
    z(this, a, -1, Oy, null)
  }
  w(Ny, y);
  var Oy = [2, 4];
  Ny.prototype.Wa = function() {
    return B(this, 1)
  };

  function Py(a) {
    z(this, a, -1, null, null)
  }
  w(Py, y);
  Py.prototype.ba = function() {
    return B(this, 1)
  };

  function Qy(a, b) {
    return F(a, 1, b)
  }
  Py.prototype.ca = function() {
    return B(this, 2)
  };

  function Ry(a) {
    z(this, a, -1, Sy, null)
  }
  w(Ry, y);
  var Sy = [2];
  Ry.prototype.S = function() {
    return B(this, 1)
  };

  function Ty(a, b) {
    return F(a, 1, b)
  }

  function Uy(a, b) {
    return M(a, 2, b)
  }
  Ry.prototype.Oa = function() {
    return B(this, 3)
  };

  function Vy(a) {
    z(this, a, -1, Wy, null)
  }
  w(Vy, y);
  var Wy = [2];
  Vy.prototype.Wa = function() {
    return B(this, 1)
  };

  function Xy(a) {
    z(this, a, -1, Yy, null)
  }
  w(Xy, y);
  var Yy = [1];

  function Zy(a) {
    z(this, a, -1, $y, null)
  }
  w(Zy, y);
  var $y = [2, 3];
  Zy.prototype.Z = function() {
    return B(this, 1)
  };

  function az(a) {
    z(this, a, -1, null, null)
  }
  w(az, y);
  az.prototype.S = function() {
    return B(this, 1)
  };

  function bz(a, b) {
    return J(a, 2, b)
  };

  function cz(a) {
    z(this, a, -1, dz, null)
  }
  w(cz, y);
  var dz = [3, 7];
  cz.prototype.F = function() {
    return B(this, 1)
  };

  function ez(a) {
    z(this, a, -1, null, null)
  }
  w(ez, y);

  function fz(a) {
    z(this, a, -1, gz, null)
  }
  w(fz, y);
  var gz = [3, 4, 10, 18, 19];
  fz.prototype.ma = function() {
    return B(this, 1)
  };
  fz.prototype.Z = function() {
    return B(this, 14)
  };
  fz.prototype.ba = function() {
    return B(this, 23)
  };

  function hz(a) {
    z(this, a, -1, null, null)
  }
  w(hz, y);

  function iz(a) {
    z(this, a, -1, null, null)
  }
  w(iz, y);

  function Fz(a) {
    z(this, a, -1, null, null)
  }
  w(Fz, y);
  Fz.prototype.F = function() {
    return B(this, 1)
  };

  function Gz(a) {
    z(this, a, -1, null, null)
  }
  w(Gz, y);
  Gz.prototype.ba = function() {
    return B(this, 1)
  };

  function Hz(a) {
    z(this, a, -1, null, null)
  }
  w(Hz, y);
  Hz.prototype.F = function() {
    return B(this, 1)
  };

  function Iz(a) {
    z(this, a, -1, null, null)
  }
  w(Iz, y);
  Iz.prototype.F = function() {
    return B(this, 1)
  };

  function Jz(a) {
    z(this, a, -1, null, null)
  }
  w(Jz, y);
  Jz.prototype.getType = function() {
    return B(this, 1)
  };

  function Kz(a) {
    var b = new Jz;
    return F(b, 1, a)
  }

  function Lz(a, b) {
    return J(a, 2, b)
  };

  function Mz(a) {
    z(this, a, -1, Nz, null)
  }
  w(Mz, y);
  var Nz = [3];

  function Oz(a, b) {
    return F(a, 1, b)
  }

  function Pz(a, b) {
    return F(a, 2, b)
  }
  Mz.prototype.ta = function() {
    return I(this, ay, 3)
  };

  function Qz(a, b) {
    return M(a, 3, b)
  }

  function Rz(a, b) {
    return F(a, 4, b)
  }

  function Sz(a, b) {
    return J(a, 5, b)
  };

  function Tz(a) {
    z(this, a, -1, null, null)
  }
  w(Tz, y);
  Tz.prototype.F = function() {
    return B(this, 1)
  };

  function Uz(a) {
    z(this, a, -1, null, null)
  }
  w(Uz, y);

  function Vz(a) {
    z(this, a, -1, null, null)
  }
  w(Vz, y);

  function Wz(a) {
    z(this, a, -1, null, null)
  }
  w(Wz, y);
  m = Wz.prototype;
  m.getType = function() {
    return B(this, 1)
  };

  function Xz(a, b) {
    return F(a, 1, b)
  }
  m.Lk = function() {
    return null != B(this, 1)
  };
  m.lc = function() {
    return B(this, 2)
  };

  function Yz(a, b) {
    return F(a, 2, b)
  }
  m.Ek = function() {
    return null != B(this, 2)
  };
  m.Ra = function() {
    return B(this, 3)
  };

  function Zz(a, b) {
    return F(a, 3, b)
  }
  m.Ik = function() {
    return null != B(this, 3)
  };

  function $z(a, b) {
    return F(a, 4, b)
  }
  m.Xk = function() {
    return B(this, 5)
  };
  m.Sl = function() {
    return null != B(this, 5)
  };
  m.Yk = function() {
    return E(this, 6, !1)
  };

  function aA(a) {
    return F(a, 6, !0)
  }
  m.Ul = function() {
    return null != B(this, 6)
  };
  m.Vh = function() {
    return B(this, 7)
  };
  m.wf = function(a) {
    return F(this, 7, a)
  };
  m.Kk = function() {
    return null != B(this, 7)
  };
  m.Ck = function() {
    return E(this, 8, !1)
  };
  m.Hk = function() {
    return null != B(this, 8)
  };
  m.Eh = function() {
    return B(this, 9)
  };
  m.Jk = function() {
    return null != B(this, 9)
  };
  m.eb = function() {
    return B(this, 10)
  };
  m.Ql = function() {
    return null != B(this, 10)
  };
  m.Dk = function() {
    return B(this, 11)
  };
  m.Mk = function() {
    return null != B(this, 11)
  };
  m.Zk = function() {
    return B(this, 12)
  };
  m.Vl = function() {
    return null != B(this, 12)
  };
  m.ld = function() {
    return B(this, 14)
  };

  function bA(a, b) {
    return F(a, 14, b)
  }
  m.Rl = function() {
    return null != B(this, 14)
  };
  m.De = function() {
    return B(this, 15)
  };
  m.Gk = function() {
    return null != B(this, 15)
  };
  m.Qh = function() {
    return B(this, 16)
  };
  m.uf = function(a) {
    return F(this, 16, a)
  };
  m.Fk = function() {
    return null != B(this, 16)
  };
  m.Th = function() {
    return E(this, 17, !1)
  };
  m.Tl = function() {
    return null != B(this, 17)
  };
  m.$k = function() {
    return B(this, 19)
  };
  m.Wl = function() {
    return null != B(this, 19)
  };

  function cA(a) {
    z(this, a, -1, null, null)
  }
  w(cA, y);

  function dA(a, b) {
    return F(a, 1, b)
  }

  function eA(a, b) {
    return F(a, 2, b)
  }

  function fA(a, b) {
    return F(a, 3, b)
  };
  var gA = {
    aq: 1,
    zr: 2,
    Gp: 3,
    fr: 4,
    jp: 5,
    Cr: 6,
    Dq: 7,
    Rr: 8,
    qo: 9,
    Ip: 10,
    Hp: 11,
    yp: 12,
    Uo: 13,
    Vp: 14,
    Yp: 164,
    Wp: 165,
    Zp: 166,
    Xp: 167,
    sp: 16,
    wp: 168,
    up: 169,
    xp: 170,
    vp: 179,
    Sp: 18,
    sr: 19,
    kp: 20,
    lp: 21,
    Lq: 24,
    Mq: 25,
    Co: 26,
    Mr: 27,
    Po: 28,
    np: 29,
    qp: 30,
    op: 31,
    vq: 32,
    Kq: 33,
    po: 34,
    jr: 35,
    Wo: 38,
    cp: 39,
    Sr: 40,
    Fo: 41,
    Go: 42,
    so: 43,
    To: 44,
    kq: 45,
    Nq: 46,
    Qq: 171,
    Oq: 172,
    Rq: 173,
    Pq: 174,
    Dp: 47,
    Vo: 48,
    Yo: 49,
    OFFLINE: 50,
    $o: 51,
    Yq: 52,
    Oo: 53,
    Ro: 54,
    $q: 55,
    Zq: 56,
    kr: 57,
    Up: 58,
    Lo: 59,
    rn: 61,
    gp: 62,
    USER: 63,
    Ar: 64,
    lo: 65,
    Hq: 66,
    xq: 67,
    yq: 68,
    Yn: 69,
    VERSION: 70,
    Aq: 71,
    ip: 72,
    zq: 73,
    Zm: 74,
    eq: 75,
    fq: 162,
    gq: 163,
    on: 76,
    tn: 77,
    Ln: 78,
    Pn: 79,
    Un: 80,
    xn: 81,
    yn: 82,
    pr: 83,
    rr: 84,
    Nn: 85,
    Xo: 86,
    fp: 87,
    an: 188,
    Hn: 88,
    wn: 89,
    Kn: 90,
    ro: 91,
    vo: 180,
    to: 181,
    wo: 182,
    uo: 183,
    pp: 92,
    Gn: 93,
    jq: 94,
    Tp: 95,
    bq: 96,
    Er: 97,
    Hr: 175,
    Fr: 176,
    Ir: 177,
    Gr: 178,
    Dr: 98,
    Qn: 99,
    hp: 100,
    Dn: 101,
    Wn: 102,
    $p: 103,
    bp: 104,
    Qr: 105,
    Pr: 106,
    Or: 107,
    Do: 108,
    kn: 109,
    Tr: 110,
    ar: 111,
    lr: 112,
    Cq: 113,
    An: 114,
    no: 115,
    oo: 116,
    wq: 117,
    Bq: 118,
    Bo: 119,
    $m: 120,
    ep: 121,
    Tn: 123,
    rq: 124,
    sq: 125,
    Wr: 126,
    nq: 127,
    zp: 128,
    zn: 129,
    Fn: 130,
    En: 131,
    Cn: 132,
    Bn: 133,
    un: 134,
    Vn: 135,
    mo: 136,
    On: 137,
    fn: 138,
    Jn: 146,
    vn: 147,
    qn: 156,
    Bp: 157,
    Jp: 139,
    ho: 140,
    jn: 141,
    Xn: 142,
    Fq: 143,
    Jr: 144,
    Ep: 145,
    en: 148,
    dn: 149,
    tr: 150,
    mr: 151,
    Kr: 152,
    ap: 153,
    Uq: 154,
    Wq: 155,
    Vq: 158,
    Tq: 159,
    Sq: 192,
    iq: 160,
    hq: 161,
    hn: 184,
    pn: 185,
    Mn: 186,
    xo: 187,
    Rn: 189,
    Sn: 190,
    In: 191,
    $n: 193,
    Zn: 194,
    uq: 1002,
    cq: 1003,
    ko: 1004,
    Ko: 1005,
    Eq: 122
  };

  function hA(a) {
    z(this, a, -1, iA, null)
  }
  w(hA, y);
  var iA = [1, 2, 6];
  hA.prototype.ja = function() {
    return B(this, 1)
  };

  function jA(a, b) {
    F(a, 1, b || [])
  }
  hA.prototype.qa = function() {
    return B(this, 2)
  };

  function kA(a, b) {
    return F(a, 2, b || [])
  };

  function lA(a) {
    z(this, a, -1, null, null)
  }
  w(lA, y);
  lA.prototype.P = function() {
    return B(this, 1)
  };

  function mA(a) {
    z(this, a, -1, null, null)
  }
  w(mA, y);
  mA.prototype.P = function() {
    return B(this, 1)
  };

  function nA(a) {
    z(this, a, -1, null, null)
  }
  w(nA, y);
  nA.prototype.ca = function() {
    return B(this, 1)
  };

  function oA() {
    var a = new nA;
    a = F(a, 1, 1E3);
    var b = ku(new ju, 304);
    return J(a, 2, b)
  }
  nA.prototype.getType = function() {
    return D(this, 3, 1)
  };

  function pA(a) {
    z(this, a, -1, qA, null)
  }
  w(pA, y);
  var qA = [1];
  pA.prototype.qa = function() {
    return B(this, 1)
  };
  pA.prototype.S = function() {
    return B(this, 2)
  };

  function rA(a) {
    z(this, a, -1, null, null)
  }
  w(rA, y);
  rA.prototype.F = function() {
    return B(this, 1)
  };

  function sA(a) {
    var b = new rA;
    return F(b, 1, a)
  }
  rA.prototype.ma = function() {
    return B(this, 2)
  };

  function tA(a) {
    z(this, a, -1, uA, null)
  }
  w(tA, y);
  var uA = [8];
  tA.prototype.Jc = function() {
    return B(this, 1)
  };
  tA.prototype.ba = function() {
    return B(this, 2)
  };

  function vA(a, b) {
    return F(a, 2, b)
  }
  tA.prototype.Vb = function() {
    return E(this, 3, !1)
  };

  function wA(a) {
    return H(a, ay, 4)
  }

  function xA(a, b) {
    return J(a, 4, b)
  }
  tA.prototype.Z = function() {
    return B(this, 7)
  };

  function yA(a, b) {
    return F(a, 7, b)
  };

  function zA(a) {
    z(this, a, -1, null, null)
  }
  w(zA, y);

  function AA(a) {
    z(this, a, -1, null, null)
  }
  w(AA, y);
  AA.prototype.getType = function() {
    return B(this, 1)
  };

  function BA(a) {
    z(this, a, -1, CA, null)
  }
  w(BA, y);
  var CA = [1];

  function DA(a) {
    z(this, a, -1, null, null)
  }
  w(DA, y);
  DA.prototype.S = function() {
    return B(this, 2)
  };

  function EA(a) {
    z(this, a, -1, FA, null)
  }
  w(EA, y);
  var FA = [1];

  function GA(a) {
    z(this, a, -1, HA, null)
  }
  w(GA, y);
  var HA = [1];

  function IA(a) {
    z(this, a, -1, null, null)
  }
  w(IA, y);

  function JA(a) {
    z(this, a, -1, KA, null)
  }
  w(JA, y);
  var KA = [1];

  function LA(a, b) {
    return F(a, 1, b || [])
  };

  function MA(a) {
    z(this, a, -1, NA, null)
  }
  w(MA, y);
  var NA = [2, 14, 16];
  m = MA.prototype;
  m.S = function() {
    return B(this, 1)
  };
  m.Nd = function(a) {
    return F(this, 1, a)
  };
  m.ta = function() {
    return I(this, ay, 2)
  };
  m.ub = function(a) {
    return M(this, 2, a)
  };
  m.Oa = function() {
    return B(this, 3)
  };
  m.Sh = function() {
    return E(this, 5, !0)
  };
  m.Fe = function() {
    return H(this, zA, 10)
  };
  m.cd = function(a) {
    return J(this, 10, a)
  };
  m.Ge = function() {
    return H(this, JA, 11)
  };
  m.dd = function(a) {
    return J(this, 11, a)
  };
  m.Ee = function() {
    return B(this, 12)
  };
  m.He = function(a) {
    return F(this, 12, a)
  };
  m.Xa = function() {
    return B(this, 15)
  };

  function OA(a, b) {
    return M(a, 16, b)
  };

  function PA(a) {
    z(this, a, -1, null, null)
  }
  w(PA, y);
  PA.prototype.P = function() {
    return B(this, 1)
  };

  function QA(a) {
    z(this, a, -1, null, null)
  }
  w(QA, y);
  QA.prototype.P = function() {
    return B(this, 1)
  };

  function RA(a) {
    z(this, a, -1, null, null)
  }
  w(RA, y);
  RA.prototype.getType = function() {
    return D(this, 1, 4)
  };

  function SA(a) {
    z(this, a, -1, null, null)
  }
  w(SA, y);
  SA.prototype.P = function() {
    return B(this, 1)
  };

  function TA(a) {
    z(this, a, -1, null, null)
  }
  w(TA, y);
  TA.prototype.P = function() {
    return B(this, 2)
  };

  function UA(a) {
    z(this, a, -1, null, null)
  }
  w(UA, y);
  UA.prototype.P = function() {
    return B(this, 1)
  };

  function VA(a) {
    z(this, a, -1, WA, null)
  }
  w(VA, y);
  var WA = [1, 4, 5, 6, 7, 8, 12, 13, 14, 15, 24, 25, 26, 27, 33, 35, 37, 38, 39, 40, 44, 53, 56, 57];
  m = VA.prototype;
  m.ja = function() {
    return B(this, 1)
  };

  function XA(a, b) {
    return F(a, 1, b || [])
  }

  function YA(a) {
    return H(a, RA, 2)
  }
  m.F = function() {
    return B(this, 3)
  };

  function ZA(a, b) {
    return M(a, 6, b)
  }

  function $A(a, b) {
    return F(a, 9, b)
  }

  function aB(a) {
    return I(a, QA, 12)
  }
  m.Qb = function(a) {
    return F(this, 19, a)
  };
  m.bd = function() {
    return H(this, ju, 30)
  };
  m.ca = function() {
    return D(this, 32, 50)
  };

  function bB(a, b) {
    F(a, 32, b)
  }

  function cB(a) {
    return B(a, 33)
  }

  function dB(a, b) {
    return F(a, 33, b || [])
  }

  function eB(a) {
    return D(a, 45, 1)
  }

  function fB(a) {
    return E(a, 47, !1)
  }

  function gB(a) {
    return E(a, 49, !1)
  }

  function hB(a) {
    return E(a, 52, !1)
  };

  function iB(a) {
    z(this, a, -1, null, null)
  }
  w(iB, y);
  iB.prototype.Kc = function() {
    return H(this, MA, 1)
  };

  function jB(a, b) {
    return J(a, 1, b)
  }
  iB.prototype.Xa = function() {
    return B(this, 3)
  };

  function kB(a) {
    z(this, a, -1, null, null)
  }
  w(kB, y);

  function lB(a, b) {
    return F(a, 1, b)
  };

  function mB(a) {
    z(this, a, -1, null, null)
  }
  w(mB, y);

  function nB(a, b) {
    return J(a, 1, b)
  }
  mB.prototype.Xa = function() {
    return B(this, 2)
  };

  function oB(a, b) {
    return F(a, 2, b)
  }
  mB.prototype.T = function() {
    return H(this, VA, 3)
  };

  function pB(a, b) {
    return J(a, 3, b)
  };

  function qB(a) {
    z(this, a, -1, rB, null)
  }
  w(qB, y);
  var rB = [3, 4];
  qB.prototype.getType = function() {
    return B(this, 1)
  };

  function sB(a, b) {
    J(a, 2, b)
  };

  function tB(a) {
    z(this, a, -1, uB, null)
  }
  w(tB, y);
  var uB = [5];
  tB.prototype.ja = function() {
    return B(this, 5)
  };
  tB.prototype.Z = function() {
    return B(this, 8)
  };

  function vB(a) {
    z(this, a, -1, wB, null)
  }
  w(vB, y);
  var wB = [4, 9];
  vB.prototype.S = function() {
    return B(this, 1)
  };

  function xB(a) {
    z(this, a, -1, null, null)
  }
  w(xB, y);
  xB.prototype.F = function() {
    return B(this, 1)
  };

  function yB(a) {
    z(this, a, -1, zB, null)
  }
  w(yB, y);
  var zB = [2];
  yB.prototype.S = function() {
    return B(this, 1)
  };
  yB.prototype.Oa = function() {
    return B(this, 3)
  };

  function AB(a) {
    z(this, a, -1, null, null)
  }
  w(AB, y);
  AB.prototype.Kc = function() {
    return H(this, yB, 1)
  };
  AB.prototype.Xa = function() {
    return B(this, 2)
  };

  function BB(a) {
    z(this, a, -1, null, null)
  }
  w(BB, y);
  BB.prototype.Xa = function() {
    return B(this, 2)
  };
  BB.prototype.T = function() {
    return H(this, xB, 3)
  };

  function CB(a) {
    z(this, a, -1, null, null)
  }
  w(CB, y);

  function DB(a) {
    z(this, a, -1, EB, null)
  }
  w(DB, y);
  var EB = [1];
  DB.prototype.Wb = function() {
    return I(this, Tt, 1)
  };

  function FB(a) {
    z(this, a, -1, GB, null)
  }
  w(FB, y);
  var GB = [3];
  FB.prototype.S = function() {
    return B(this, 1)
  };
  FB.prototype.Oa = function() {
    return B(this, 2)
  };
  FB.prototype.Wb = function() {
    return I(this, Tt, 3)
  };

  function HB(a) {
    z(this, a, -1, null, null)
  }
  w(HB, y);
  m = HB.prototype;
  m.S = function() {
    return B(this, 1)
  };

  function IB(a, b) {
    return F(a, 1, b)
  }

  function JB(a, b) {
    return J(a, 2, b)
  }
  m.Oa = function() {
    return B(this, 3)
  };
  m.ba = function() {
    return B(this, 5)
  };

  function KB(a, b) {
    return F(a, 5, b)
  }
  m.Vh = function() {
    return B(this, 7)
  };
  m.wf = function(a) {
    return F(this, 7, a)
  };
  m.Qh = function() {
    return B(this, 16)
  };
  m.uf = function(a) {
    return F(this, 16, a)
  };

  function LB(a) {
    z(this, a, -1, null, null)
  }
  w(LB, y);
  LB.prototype.S = function() {
    return B(this, 1)
  };

  function MB(a) {
    z(this, a, -1, NB, null)
  }
  w(MB, y);
  var NB = [2, 6];
  m = MB.prototype;
  m.S = function() {
    return B(this, 1)
  };
  m.Nd = function(a) {
    return F(this, 1, a)
  };
  m.ta = function() {
    return I(this, ay, 2)
  };
  m.ub = function(a) {
    return M(this, 2, a)
  };
  m.Oa = function() {
    return B(this, 3)
  };
  m.Sh = function() {
    return E(this, 4, !0)
  };

  function OB(a, b) {
    return M(a, 6, b)
  }
  m.Fe = function() {
    return H(this, zA, 7)
  };
  m.cd = function(a) {
    return J(this, 7, a)
  };
  m.Ge = function() {
    return H(this, JA, 8)
  };
  m.dd = function(a) {
    return J(this, 8, a)
  };
  m.Ee = function() {
    return B(this, 9)
  };
  m.He = function(a) {
    return F(this, 9, a)
  };

  function PB(a) {
    z(this, a, -1, null, null)
  }
  w(PB, y);

  function QB(a) {
    z(this, a, -1, null, null)
  }
  w(QB, y);

  function RB(a) {
    z(this, a, -1, null, null)
  }
  w(RB, y);
  RB.prototype.ca = function() {
    return B(this, 1)
  };
  RB.prototype.bd = function() {
    return H(this, ju, 2)
  };

  function SB(a) {
    z(this, a, -1, null, null)
  }
  w(SB, y);
  SB.prototype.getType = function() {
    return B(this, 1)
  };

  function TB(a) {
    z(this, a, -1, null, null)
  }
  w(TB, y);
  TB.prototype.ca = function() {
    return B(this, 2)
  };

  function UB(a) {
    z(this, a, -1, VB, null)
  }
  w(UB, y);
  var VB = [2];
  UB.prototype.S = function() {
    return B(this, 1)
  };

  function WB(a, b) {
    return M(a, 2, b)
  }
  UB.prototype.Oa = function() {
    return B(this, 3)
  };

  function XB(a) {
    z(this, a, -1, null, YB)
  }
  w(XB, y);

  function ZB(a) {
    z(this, a, -1, $B, null)
  }
  w(ZB, y);
  var YB = [
      [2, 4, 6, 10],
      [3, 5, 7, 8, 9]
    ],
    $B = [1];

  function aC(a) {
    z(this, a, -1, bC, null)
  }
  w(aC, y);

  function cC(a) {
    z(this, a, -1, null, null)
  }
  w(cC, y);
  var bC = [5];

  function dC(a, b) {
    return F(a, 1, b)
  }
  aC.prototype.Wa = function() {
    return B(this, 2)
  };

  function eC(a, b) {
    return F(a, 2, b)
  }

  function fC(a, b) {
    return F(a, 14, b)
  }

  function gC(a, b) {
    return F(a, 3, b)
  }

  function hC(a, b) {
    return F(a, 4, b)
  }

  function iC(a, b) {
    M(a, 5, b)
  }

  function jC(a, b) {
    J(a, 6, b)
  }

  function kC(a, b) {
    J(a, 7, b)
  }

  function lC(a, b) {
    J(a, 8, b)
  }

  function mC(a, b) {
    J(a, 12, b)
  }

  function nC(a, b) {
    J(a, 13, b)
  };

  function oC(a) {
    z(this, a, -1, pC, null)
  }
  w(oC, y);
  var pC = [2];
  oC.prototype.S = function() {
    return B(this, 1)
  };

  function qC(a, b) {
    M(a, 2, b)
  }
  oC.prototype.Oa = function() {
    return B(this, 3)
  };

  function rC(a) {
    z(this, a, -1, null, null)
  }
  w(rC, y);

  function sC(a) {
    z(this, a, -1, null, null)
  }
  w(sC, y);
  sC.prototype.S = function() {
    return B(this, 1)
  };
  sC.prototype.Oa = function() {
    return B(this, 3)
  };

  function tC(a) {
    z(this, a, -1, null, null)
  }
  w(tC, y);
  tC.prototype.Z = function() {
    return B(this, 3)
  };

  function uC(a) {
    z(this, a, -1, null, null)
  }
  w(uC, y);

  function vC(a) {
    z(this, a, -1, null, null)
  }
  w(vC, y);
  vC.prototype.F = function() {
    return B(this, 1)
  };

  function wC(a) {
    z(this, a, -1, null, null)
  }
  w(wC, y);
  wC.prototype.F = function() {
    return B(this, 1)
  };

  function xC(a) {
    z(this, a, -1, yC, null)
  }
  w(xC, y);
  var yC = [2];
  xC.prototype.S = function() {
    return B(this, 1)
  };

  function zC(a, b) {
    return M(a, 2, b)
  }

  function AC(a, b) {
    return J(a, 3, b)
  };

  function BC(a) {
    z(this, a, -1, CC, null)
  }
  w(BC, y);
  var CC = [1, 2];
  BC.prototype.ja = function() {
    return B(this, 1)
  };
  BC.prototype.qa = function() {
    return B(this, 2)
  };

  function DC(a) {
    z(this, a, -1, EC, null)
  }
  w(DC, y);
  var EC = [1];
  DC.prototype.ja = function() {
    return B(this, 1)
  };
  DC.prototype.ca = function() {
    return D(this, 3, 20)
  };

  function FC(a) {
    z(this, a, -1, null, null)
  }
  w(FC, y);
  FC.prototype.Xa = function() {
    return B(this, 2)
  };

  function GC(a, b) {
    return F(a, 2, b)
  }
  FC.prototype.T = function() {
    return H(this, DC, 3)
  };

  function HC(a, b) {
    return J(a, 3, b)
  };

  function IC(a) {
    z(this, a, -1, null, null)
  }
  w(IC, y);
  IC.prototype.Z = function() {
    return B(this, 1)
  };

  function JC(a) {
    z(this, a, -1, KC, null)
  }
  w(JC, y);
  var KC = [2];
  JC.prototype.ba = function() {
    return B(this, 1)
  };

  function LC(a) {
    z(this, a, -1, null, null)
  }
  w(LC, y);
  LC.prototype.S = function() {
    return B(this, 1)
  };

  function MC() {
    var a = new LC;
    return F(a, 1, 1)
  }
  LC.prototype.Oa = function() {
    return B(this, 3)
  };

  function NC(a) {
    z(this, a, -1, OC, null)
  }
  w(NC, y);
  var OC = [8, 9, 10, 13, 14, 27, 28, 29, 31, 32, 33, 34];
  NC.prototype.F = function() {
    return B(this, 1)
  };
  NC.prototype.ma = function() {
    return B(this, 6)
  };

  function PC(a, b) {
    return F(a, 16, b)
  }
  NC.prototype.j = function() {
    return C(this, 18)
  };
  NC.prototype.Z = function() {
    return B(this, 21)
  };

  function QC(a) {
    z(this, a, -1, null, null)
  }
  w(QC, y);
  QC.prototype.ba = function() {
    return B(this, 1)
  };

  function RC(a) {
    z(this, a, -1, SC, null)
  }
  w(RC, y);
  var SC = [7, 8];
  RC.prototype.F = function() {
    return B(this, 1)
  };

  function TC(a) {
    z(this, a, -1, null, null)
  }
  w(TC, y);
  TC.prototype.F = function() {
    return B(this, 1)
  };

  function UC(a) {
    z(this, a, -1, null, null)
  }
  w(UC, y);

  function VC(a) {
    z(this, a, -1, null, null)
  }
  w(VC, y);
  VC.prototype.S = function() {
    return B(this, 1)
  };
  VC.prototype.Oa = function() {
    return B(this, 3)
  };

  function WC(a) {
    z(this, a, -1, XC, null)
  }
  w(WC, y);
  var XC = [30, 31];
  var YC = {
    ik: 0,
    tq: 1,
    mq: 2
  };

  function ZC(a) {
    z(this, a, -1, null, null)
  }
  w(ZC, y);

  function $C(a) {
    z(this, a, -1, null, null)
  }
  w($C, y);
  $C.prototype.F = function() {
    return B(this, 1)
  };

  function aD(a) {
    z(this, a, -1, bD, null)
  }
  w(aD, y);
  var bD = [6];

  function cD(a) {
    z(this, a, -1, null, null)
  }
  w(cD, y);

  function dD(a) {
    z(this, a, -1, eD, null)
  }
  w(dD, y);

  function fD(a) {
    z(this, a, -1, null, null)
  }
  w(fD, y);
  var eD = [11];

  function gD(a, b) {
    F(a, 9, b)
  };

  function hD(a) {
    z(this, a, -1, null, null)
  }
  w(hD, y);

  function iD(a) {
    return D(a, 1, 0)
  }

  function jD(a) {
    return D(a, 2, "")
  }

  function kD(a) {
    return D(a, 4, "en")
  }

  function lD(a) {
    return E(a, 5, !1)
  };

  function mD(a) {
    z(this, a, -1, nD, null)
  }
  w(mD, y);
  var nD = [28, 41, 44];

  function oD(a) {
    return H(a, WC, 33, 1)
  }

  function pD(a) {
    return H(a, dD, 34, 1)
  }

  function qD(a) {
    return H(a, hD, 36, 1)
  }

  function rD(a) {
    return D(a, 39, 0)
  }

  function sD(a) {
    return E(a, 40, !1)
  }

  function tD(a, b) {
    return M(a, 44, b)
  }

  function uD(a) {
    return E(a, 49, !1)
  }

  function vD(a) {
    return E(a, 84, !1)
  };

  function wD(a) {
    z(this, a, -1, null, null)
  }
  w(wD, y);
  wD.prototype.P = function() {
    return B(this, 2)
  };
  wD.prototype.getType = function() {
    return B(this, 4)
  };

  function xD(a) {
    z(this, a, -1, null, yD)
  }
  w(xD, y);
  var yD = [
    [3, 4, 5, 6, 7, 8, 9, 10]
  ];

  function zD(a) {
    z(this, a, -1, null, null)
  }
  w(zD, y);

  function AD(a) {
    return H(a, VA, 1, 1)
  }

  function BD(a, b) {
    return J(a, 1, b)
  }
  zD.prototype.G = function() {
    return null != B(this, 1)
  };
  zD.prototype.Xa = function() {
    return B(this, 4)
  };

  function CD(a, b) {
    return J(a, 5, b)
  };

  function DD(a) {
    z(this, a, -1, ED, null)
  }
  w(DD, y);
  var ED = [1, 2, 5, 7, 9, 10, 12],
    FD = {
      nn: 0,
      mn: 1,
      Cp: 2,
      nr: 3,
      qr: 4
    };
  m = DD.prototype;
  m.ta = function() {
    return I(this, ay, 1)
  };

  function GD(a, b) {
    return M(a, 1, b)
  }

  function HD(a, b) {
    M(a, 2, b)
  }
  m.Jc = function() {
    return B(this, 3)
  };

  function ID(a, b) {
    return F(a, 3, b)
  }
  m.nb = function() {
    return B(this, 4)
  };

  function JD(a, b) {
    return F(a, 4, b)
  }

  function KD(a, b) {
    return M(a, 5, b)
  }
  m.Wb = function() {
    return I(this, Tt, 9)
  };
  m.ja = function() {
    return B(this, 12)
  };

  function LD(a, b) {
    return F(a, 12, b || [])
  }

  function MD(a, b) {
    return F(a, 13, b)
  };

  function ND(a) {
    z(this, a, -1, OD, null)
  }
  w(ND, y);
  var OD = [1];

  function PD(a, b) {
    return F(a, 1, b || [])
  };

  function QD(a) {
    z(this, a, -1, RD, null)
  }
  w(QD, y);
  var RD = [1];

  function SD(a, b) {
    F(a, 1, b || [])
  };

  function TD() {
    this.o = 2;
    this.L = 0;
    this.g = this.O = this.I = this.jb = null;
    this.C = this.D = this.H = !1;
    this.Ia = [];
    this.W = this.xa = this.va = this.A = this.w = this.la = "";
    this.U = this.X = 1;
    this.Ha = 0;
    this.j = null;
    this.ea = !1;
    this.B = null;
    this.G = !1;
    this.aa = null
  }

  function UD(a, b) {
    a.o = b;
    return a
  }

  function VD(a) {
    a.L = -1;
    return a
  }

  function WD(a, b) {
    a.jb = b;
    return a
  }

  function XD(a, b) {
    a.I = b;
    return a
  }

  function YD(a, b) {
    a.O = b;
    return a
  }

  function ZD(a, b) {
    a.H = b;
    return a
  }

  function $D(a, b) {
    a.la = b;
    return a
  }

  function aE(a, b) {
    a.w = b;
    return a
  }

  function bE(a, b) {
    a.A = b;
    return a
  }

  function cE(a, b) {
    a.va = b;
    return a
  }

  function dE(a, b) {
    a.xa = b;
    return a
  }

  function eE(a, b) {
    a.W = b;
    return a
  }

  function fE(a) {
    a.X = 3;
    return a
  }

  function gE(a) {
    a.U = 3;
    return a
  }

  function hE(a, b) {
    a.Ha = b;
    return a
  }

  function iE(a, b) {
    a.j = b;
    return a
  }

  function jE(a) {
    a.ea = !0;
    return a
  }

  function kE(a, b) {
    a.D = b;
    return a
  }

  function lE(a, b) {
    a.C = b;
    return a
  }

  function mE(a) {
    a.B = 3;
    return a
  }

  function nE(a) {
    a.G = !0;
    return a
  }

  function oE(a, b) {
    a.aa = b;
    return a
  }

  function pE(a) {
    var b = new mD,
      c = new WC;
    F(c, 37, a.O);
    F(c, 57, a.w);
    F(c, 17, a.X);
    F(c, 18, a.U);
    F(c, 9, a.o);
    F(c, 40, a.va);
    F(c, 41, a.xa);
    F(c, 25, "");
    F(c, 8, qE(a.la, a.o));
    F(c, 19, 3);
    J(b, 33, c);
    c = new aD;
    F(c, 1, !1);
    J(b, 58, c);
    c = new hD;
    F(c, 1, a.L);
    F(c, 3, a.jb);
    F(c, 2, a.I);
    J(b, 36, c);
    c = new dD;
    F(c, 10, a.Ha);
    "number" === typeof a.j && F(c, 8, a.j);
    a.g && Ha(a.g) && 0 < a.g.length && (M(c, 11, a.g), gD(c, !0));
    J(b, 34, c);
    c = new ZC;
    c = F(c, 1, !1);
    c = F(c, 2, !1);
    J(b, 2, c);
    F(b, 62, a.W);
    F(b, 16, a.A);
    F(b, 39, a.B);
    F(b, 45, a.G);
    F(b, 28, a.Ia || []);
    F(b, 10, a.ea);
    F(b, 59, a.D);
    F(b, 68, !0);
    F(b, 12, a.C);
    F(b, 49, a.H);
    tD(b, a.aa);
    return b
  }

  function qE(a, b) {
    if (0 == b) return 4;
    switch (a) {
      case "test":
        return 4;
      case "scary":
        return 2;
      case "canary":
        return 1;
      default:
        return 0
    }
  };
  var rE = [74, 90, 79, 80, 41, 59, 44, 104, 87, 21, 12, 11, 10, 3, 50, 18, 95, 14, 103, 1, 94, 67, 68, 7, 33, 24, 25, 4, 83, 84, 19, 2, 6, 27];

  function sE(a) {
    z(this, a, -1, null, null)
  }
  w(sE, y);
  sE.prototype.F = function() {
    return B(this, 1)
  };
  sE.prototype.Lb = function() {
    return B(this, 2)
  };
  var tE = {
      punch: ["application/vnd.google-apps.presentation"],
      powerpoint: "application/vnd.mspowerpoint application/vnd.ms-powerpoint application/vnd.ms-powerpoint.presentation.macroenabled.12 application/mspowerpoint application/vnd.ms-powerpoint.document.12 application/vnd.openxmlformats-officedocument.presentationml.presentation".split(" "),
      kix: ["application/vnd.google-apps.document"],
      encrypted_kix: ['application/vnd.google-gsuite.encrypted; content="application/vnd.google-apps.document"'],
      word: "application/vnd.msword application/vnd.ms-word application/vnd.ms-word.document.macroenabled.12 application/msword application/vnd.ms-word.document.12 application/vnd.openxmlformats-officedocument.wordprocessingml.document".split(" "),
      ritz: ["application/vnd.google-apps.spreadsheet"],
      excel: "application/vnd.msexcel application/vnd.ms-excel application/vnd.ms-excel.sheet.macroenabled.12 application/msexcel application/vnd.ms-excel.document.12 application/vnd.openxmlformats-officedocument.spreadsheetml.sheet".split(" "),
      freebird: ["application/vnd.google-apps.form", "application/vnd.google-apps.freebird"],
      atari: ["application/vnd.google-apps.site"]
    },
    uE = {
      "application/vnd.google-apps.document": 1,
      "application/vnd.google-apps.spreadsheet": 2,
      "application/vnd.google-apps.presentation": 3,
      "application/vnd.google-apps.drawing": 4,
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": 1,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": 2,
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": 3,
      "application/msword": 1,
      "application/vnd.ms-excel": 2,
      "application/vnd.ms-excel.sheet.macroenabled.12": 2,
      "application/vnd.ms-powerpoint": 3
    },
    vE = ["kix", "word"];
  Zg(Xg(), "docs-cse-edit") && vE.push("encrypted_kix");
  var wE = {
      Docs: vE,
      Sheets: ["ritz", "excel"],
      Slides: ["punch", "powerpoint"],
      Forms: ["freebird"],
      Sites: ["atari"]
    },
    xE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet application/vnd.openxmlformats-officedocument.wordprocessingml.document application/vnd.openxmlformats-officedocument.presentationml.presentation application/msword application/vnd.ms-excel application/vnd.ms-excel.sheet.macroenabled.12 application/vnd.ms-powerpoint".split(" ");

  function yE(a) {
    var b = new VA;
    XA(b, rE);
    $A(b, !1);
    bB(b, 1E3);
    var c = [];
    vb(a, function(d) {
      vb(tE[d], function(e) {
        var f = new PA;
        F(f, 1, e);
        c.push(f)
      })
    });
    ZA(b, c);
    a = new RA;
    F(a, 2, 2);
    F(a, 1, 1);
    J(b, 2, a);
    return b
  }

  function zE(a, b, c, d) {
    a = Lb(a, b);
    Sb(a, function(e, f) {
      e = Math.max(B(e, 23) || 0, B(e, 13) || 0);
      return Math.max(B(f, 23) || 0, B(f, 13) || 0) - e
    });
    Qb(a, void 0, function(e) {
      return e.toString()
    });
    return Lb(Pb(c, 0, d), Pb(a, 0, d))
  }

  function AE(a) {
    var b = a.ma(),
      c = uE[b],
      d = new sE,
      e = a.F();
    F(d, 1, e);
    F(d, 2, c);
    F(d, 5, b);
    a = B(a, 11);
    F(d, 4, a);
    return d
  }

  function BE() {
    var a = [];
    Object.values(wE).forEach(function(b) {
      a.push(yE(b))
    });
    return a
  };
  var CE = [21, 12, 3, 10, 67, 68, 25, 2, 6],
    DE = ["application/vnd.google-apps.document", "application/vnd.google-apps.spreadsheet", "application/vnd.google-apps.presentation", "application/vnd.google-apps.drawing"];

  function EE() {
    var a = new RA;
    F(a, 1, 11);
    F(a, 2, 2);
    var b = FE();
    bB(b, 1E4);
    F(b, 48, !0);
    J(b, 2, a);
    return b
  }

  function GE() {
    var a = FE(930);
    HE(a);
    return a
  }

  function IE() {
    var a = FE(931);
    JE(a);
    return a
  }

  function KE() {
    var a = FE(932);
    LE(a);
    return a
  }

  function ME() {
    var a = NE(933);
    HE(a);
    return a
  }

  function OE() {
    var a = NE(934);
    JE(a);
    return a
  }

  function PE() {
    var a = NE(935);
    LE(a);
    return a
  }

  function HE(a) {
    var b = new iz;
    F(b, 2, 0);
    F(b, 1, 4);
    M(a, 8, [b]);
    b = new UA;
    F(b, 1, "me");
    F(b, 2, !0);
    M(a, 13, [b]);
    b = new RA;
    F(b, 1, 6);
    F(b, 2, 2);
    J(a, 2, b)
  }

  function JE(a) {
    var b = new UA;
    F(b, 1, "me");
    F(b, 2, !0);
    M(a, 13, [b]);
    b = new RA;
    F(b, 1, 7);
    F(b, 2, 2);
    J(a, 2, b);
    F(a, 16, !0)
  }

  function LE(a) {
    var b = new UA;
    F(b, 1, "me");
    M(a, 13, [b]);
    b = new RA;
    F(b, 1, 6);
    F(b, 2, 2);
    J(a, 2, b)
  }

  function QE(a, b) {
    var c = new ju;
    ku(c, a);
    a = new hA;
    kA(a, b);
    jA(a, CE);
    F(a, 7, !0);
    J(a, 3, c);
    return a
  }

  function RE(a, b) {
    var c = new VA;
    XA(c, CE);
    a = yb(a, function(d) {
      var e = new PA;
      F(e, 1, d);
      return e
    });
    ZA(c, a);
    $A(c, !1);
    b && (a = new ju, ku(a, b), J(c, 30, a));
    return c
  }

  function FE(a) {
    a = RE(DE, a);
    bB(a, 500);
    return a
  }

  function NE(a) {
    a = RE(xE, a);
    bB(a, 100);
    var b = ah(Xg(), "customer_type");
    b && "nd" != b || F(a, 50, !0);
    return a
  };
  var SE = Error;

  function V(a, b, c) {
    a = TE(a, b, c);
    Wa.call(this, UE(a));
    this.ab = a;
    this.j = c || null;
    this.name = "ReportableError";
    (c = B(this.ab, 20)) ? this.stack = c: F(this.ab, 20, this.stack);
    this.ab.Th() && (this.g = !1)
  }
  r(V, Wa);

  function TE(a, b, c) {
    var d = b ? N(b) : new Wz;
    a && null == B(d, 21) && F(d, 21, a);
    b || (aA(d), c && (c.message && Zz(d, c.message), c.stack && F(d, 20, c.stack), $z(d, "Original error: " + c + (c.stack ? "\nOriginal error stack: " + c.stack.replace(/\n/g, "\n>") : ""))));
    if (a = B(d, 4)) a = a.replace(/\\n\\tat/g, "\n  at"), a = a.replace(/\\n/g, "\n"), $z(d, a);
    return d
  }

  function UE(a) {
    var b = B(a, 21) || "";
    if (a = VE(a)) b.length && (b += "\n"), b += a;
    return b
  }

  function VE(a) {
    var b = [];
    Zb(WE, function(c, d) {
      c = c.Sa.call(a) ? c.Pa.call(a) : void 0;
      if (void 0 !== c) {
        if (XE[d]) {
          var e = XE[d][c];
          c = void 0 === e ? "<unknown value: " + String(c) + ">" : e
        }
        b.push(d + ": " + String(c))
      }
    });
    B(a, 4) && b.push("\n" + B(a, 4));
    return b.join("\n")
  }
  var YE = Wz.prototype,
    WE = {
      Type: {
        Sa: YE.Lk,
        Pa: YE.getType
      },
      Cause: {
        Sa: YE.Ek,
        Pa: YE.lc
      },
      Message: {
        Sa: YE.Ik,
        Pa: YE.Ra
      },
      DataType: {
        Sa: YE.Sl,
        Pa: YE.Xk
      },
      HideFromUser: {
        Sa: YE.Ul,
        Pa: YE.Yk
      },
      UploadId: {
        Sa: YE.Kk,
        Pa: YE.Vh
      },
      IsExternal: {
        Sa: YE.Hk,
        Pa: YE.Ck
      },
      NumRetries: {
        Sa: YE.Jk,
        Pa: YE.Eh
      },
      ServerErrorReason: {
        Sa: YE.Ql,
        Pa: YE.eb
      },
      UploadType: {
        Sa: YE.Mk,
        Pa: YE.Dk
      },
      PrefetchedItemId: {
        Sa: YE.Vl,
        Pa: YE.Zk
      },
      ClientErrorReason: {
        Sa: YE.Rl,
        Pa: YE.ld
      },
      HttpResponseCode: {
        Sa: YE.Gk,
        Pa: YE.De
      },
      DapperTraceUrl: {
        Sa: YE.Fk,
        Pa: YE.Qh
      },
      HideFromServer: {
        Sa: YE.Tl,
        Pa: YE.Th
      },
      ResourceUrl: {
        Sa: YE.Wl,
        Pa: YE.$k
      }
    },
    XE = {
      Type: {
        1: "LOAD",
        2: "RUNTIME",
        3: "LOAD_FATAL"
      },
      Cause: {
        1: "UNAVAILABLE_OFFLINE",
        2: "AUTHORIZATION",
        3: "UNSUPPORTED",
        4: "PERMISSION",
        5: "NONEXISTENT",
        6: "UNKNOWN",
        7: "BAD_REQUEST",
        8: "SERVER_ERROR",
        9: "CONFLICT",
        10: "RESPONSE_TOO_LARGE",
        11: "RESPONSE_PARSE_ERROR",
        12: "REQUEST_BUILD_ERROR",
        13: "USER_QUOTA_EXCEEDED",
        14: "USER_RATE_LIMIT_EXCEEDED"
      },
      DataType: {
        1: "ACCOUNT",
        2: "APPS",
        6: "APPS_HAS_APP_DATA",
        3: "APPS_HAS_APP_DATA_AND_QUOTA",
        4: "USER_PREFS",
        5: "ITEMS"
      },
      ServerErrorReason: {
        15: "SERVER_AUTH_ERROR",
        9: "BACKEND_ERROR",
        14: "BAD_CONTENT",
        11: "BAD_REQUEST",
        45: "CANNOT_MOVE_TRASHED_ITEM_INTO_TEAM_DRIVE",
        8: "CONFLICT",
        16: "CONVERSION_INPUT_CORRUPT",
        18: "CONVERSION_INPUT_TOO_LARGE",
        30: "CONVERSION_INPUT_TYPE_UNSUPPORTED",
        20: "CONVERSION_INVALID_LANGUAGE",
        19: "CONVERSION_INVALID_REQUEST",
        29: "CONVERSION_LANGUAGE_UNSUPPORTED",
        17: "CONVERSION_MIMETYPE_MISMATCH",
        22: "CONVERSION_OUTPUT_TOO_LARGE",
        28: "CONVERSION_OUTPUT_TYPE_UNSUPPORTED",
        21: "CONVERSION_PASSWORD_PROTECTED",
        24: "CONVERSION_TIMEOUT",
        25: "CONVERSION_TOO_MANY_CHARTS",
        26: "CONVERSION_TOO_MANY_DRAWINGS",
        27: "CONVERSION_TOO_MANY_IMAGES",
        23: "CONVERSION_USER_RATE_QUOTA_EXCEEDED",
        31: "DEADLINE_EXCEEDED",
        0: "DEFAULT_REASON",
        42: "FILE_OWNER_NOT_MEMBER_OF_TEAM_DRIVE",
        43: "FILE_OWNER_NOT_MEMBER_OF_TEAM_DRIVE_DOMAIN",
        47: "FILE_OWNER_NOT_MEMBER_OF_WRITER_DOMAIN",
        46: "FILE_WRITER_TEAM_DRIVE_MOVE_IN_DISABLED",
        10: "FORBIDDEN",
        3: "INTERNAL_SERVER_ERROR",
        12: "INVALID",
        32: "LOGIN_REQUIRED",
        33: "MISSING_AUTH_COOKIE",
        1: "MISSING_REASON",
        4: "RESOURCE_NOT_FOUND",
        34: "RESPONSE_PREPARATION_FAILURE",
        5: "RESPONSE_TOO_LARGE",
        35: "UPLOAD_BROKEN_CONNECTION",
        50: "SHARING_DLP_NO_SHARE_OUTSIDE_DOMAIN",
        52: "TEAM_DRIVE_CROSS_DOMAIN_MOVE_RESTRICTED",
        40: "TEAM_DRIVE_FILE_LIMIT_EXCEEDED",
        49: "TEAM_DRIVE_HIERARCHY_TOO_DEEP",
        48: "TEAM_DRIVE_MEMBERSHIP_REQUIRED",
        44: "TEAM_DRIVE_NAME_TOO_LONG",
        39: "TEAM_DRIVES_FILE_TYPE_NOT_SUPPORTED",
        36: "TEAM_DRIVES_FOLDER_MOVE_IN_NOT_SUPPORTED",
        37: "TEAM_DRIVES_FOLDER_MOVE_OUT_NOT_SUPPORTED",
        41: "TEAM_DRIVES_PARENT_LIMIT",
        38: "TEAM_DRIVES_SHORTCUT_FILE_NOT_SUPPORTED",
        53: "TOO_MANY_FILES",
        54: "TOO_MANY_UNMOVABLE_FILES",
        13: "TRANSIENT",
        2: "UNRECOGNIZED_REASON",
        51: "USER_CANNOT_CREATE_FILE_FOR_MIME_TYPE",
        6: "USER_QUOTA_EXCEEDED",
        7: "USER_RATE_LIMIT_EXCEEDED",
        55: "RICH_CONTENT_LIMIT_EXCEEDED",
        56: "NUM_CHILDREN_LIMIT_EXCEEDED",
        57: "SHORTCUT_LIMIT_EXCEEDED",
        58: "SHORTCUT_PER_CREATOR_LIMIT_EXCEEDED"
      },
      UploadType: {
        0: "DEFAULT_UPLOAD_TYPE",
        1: "NO_CONTENT_BATCH",
        2: "MULTIPART_BATCH",
        3: "RESUMABLE"
      },
      ClientErrorReason: {
        0: "DEFAULT_CLIENT_REASON",
        1: "UNKNOWN_CLIENT_REASON",
        2: "NETWORK",
        3: "INVALID_REQUEST",
        4: "BUILDING_REQUEST",
        5: "READING_FILE",
        6: "PARSING_RESPONSE",
        7: "XHR_EXCEPTION",
        8: "PARSING_RESPONSE_NOT_OBJECT",
        9: "PARSING_RESPONSE_WRONG_KIND",
        10: "PARSING_RESPONSE_NO_UPLOAD_URI",
        11: "PARSING_RESPONSE_NOT_VALID_JSON",
        12: "FILE_CHANGED",
        13: "FILE_SIZE_CHANGED",
        14: "BATCH_NO_BOUNDARY_SPECIFIED",
        15: "BATCH_NO_BOUNDARY_USED",
        16: "BATCH_NO_STATUS",
        17: "BATCH_TOO_FEW_PARTS",
        18: "NO_QUEUE_FOR_REQUEST",
        20: "WORKER_FILE_FAILED_TRANSFER",
        21: "PARSING_RESPONSE_NO_KIND",
        22: "FORBIDDEN_REQUEST",
        23: "DUMPSTORAGE_LENGTH_ERROR"
      }
    };

  function ZE(a) {
    S.call(this, "j");
    this.error = a
  }
  r(ZE, S);

  function $E(a) {
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

  function aF() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      x = p = 0
    }

    function b(A) {
      for (var G = g, K = 0; 64 > K; K += 4) G[K / 4] = A[K] << 24 | A[K + 1] << 16 | A[K + 2] << 8 | A[K + 3];
      for (K = 16; 80 > K; K++) A = G[K - 3] ^ G[K - 8] ^ G[K - 14] ^ G[K - 16], G[K] = (A << 1 | A >>> 31) & 4294967295;
      A = e[0];
      var fa = e[1],
        Ua = e[2],
        Jb = e[3],
        ke = e[4];
      for (K = 0; 80 > K; K++) {
        if (40 > K)
          if (20 > K) {
            var fb = Jb ^ fa & (Ua ^ Jb);
            var Ic = 1518500249
          } else fb = fa ^ Ua ^ Jb, Ic = 1859775393;
        else 60 > K ? (fb = fa & Ua | Jb & (fa | Ua), Ic = 2400959708) : (fb = fa ^ Ua ^ Jb, Ic = 3395469782);
        fb =
          ((A << 5 | A >>> 27) & 4294967295) + fb + ke + Ic + G[K] & 4294967295;
        ke = Jb;
        Jb = Ua;
        Ua = (fa << 30 | fa >>> 2) & 4294967295;
        fa = A;
        A = fb
      }
      e[0] = e[0] + A & 4294967295;
      e[1] = e[1] + fa & 4294967295;
      e[2] = e[2] + Ua & 4294967295;
      e[3] = e[3] + Jb & 4294967295;
      e[4] = e[4] + ke & 4294967295
    }

    function c(A, G) {
      if ("string" === typeof A) {
        A = unescape(encodeURIComponent(A));
        for (var K = [], fa = 0, Ua = A.length; fa < Ua; ++fa) K.push(A.charCodeAt(fa));
        A = K
      }
      G || (G = A.length);
      K = 0;
      if (0 == p)
        for (; K + 64 < G;) b(A.slice(K, K + 64)), K += 64, x += 64;
      for (; K < G;)
        if (f[p++] = A[K++], x++, 64 == p)
          for (p = 0, b(f); K + 64 < G;) b(A.slice(K,
            K + 64)), K += 64, x += 64
    }

    function d() {
      var A = [],
        G = 8 * x;
      56 > p ? c(k, 56 - p) : c(k, 64 - (p - 56));
      for (var K = 63; 56 <= K; K--) f[K] = G & 255, G >>>= 8;
      b(f);
      for (K = G = 0; 5 > K; K++)
        for (var fa = 24; 0 <= fa; fa -= 8) A[G++] = e[K] >> fa & 255;
      return A
    }
    for (var e = [], f = [], g = [], k = [128], n = 1; 64 > n; ++n) k[n] = 0;
    var p, x;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      Ak: function() {
        for (var A = d(), G = "", K = 0; K < A.length; K++) G += "0123456789ABCDEF".charAt(Math.floor(A[K] / 16)) + "0123456789ABCDEF".charAt(A[K] % 16);
        return G
      }
    }
  };

  function bF(a, b, c) {
    var d = [],
      e = [];
    if (1 == (Ha(c) ? 2 : 1)) return e = [b, a], vb(d, function(k) {
      e.push(k)
    }), cF(e.join(" "));
    var f = [],
      g = [];
    vb(c, function(k) {
      g.push(k.key);
      f.push(k.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    vb(d, function(k) {
      e.push(k)
    });
    a = cF(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
  }

  function cF(a) {
    var b = aF();
    b.update(a);
    return b.Ak().toLowerCase()
  };

  function dF(a) {
    var b = $E(String(t.location.href)),
      c;
    (c = t.__SAPISID || t.__APISID || t.__OVERRIDE_SID) ? c = !0: (c = new hr(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
    if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? t.__SAPISID : t.__APISID, c || (c = new hr(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
      b = b ? "SAPISIDHASH" : "APISIDHASH";
      var d = String(t.location.href);
      return d && c && b ? [b, bF($E(d), c, a || null)].join(" ") : null
    }
    return null
  };

  function eF(a) {
    Q.call(this);
    this.j = a;
    this.g = {};
    this.j.qf(u(this.o, this))
  }
  w(eF, Q);

  function fF(a, b) {
    if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
    if (b in a.g) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
    var c = new gF(a, b);
    return a.g[b] = c
  }
  eF.prototype.o = function(a, b) {
    if (a = a.match(/^([^:]*):(.*)/)) {
      var c = a[1];
      a = a[2];
      c in this.g && (c = this.g[c]) && c.o && c.o(a, b)
    }
  };
  eF.prototype.N = function() {
    Zb(this.g, function(a) {
      jj(a)
    });
    jj(this.j);
    delete this.g;
    delete this.j
  };

  function gF(a, b) {
    Q.call(this);
    this.g = a;
    this.j = b
  }
  w(gF, Q);
  m = gF.prototype;
  m.connect = function(a) {
    a && a()
  };
  m.ob = ca(!0);
  m.Ka = function(a, b, c) {
    this.g.j.Ka(this.j + ":" + a, u(this.Ch, this, b), c)
  };
  m.qf = function(a) {
    this.o = u(this.Ch, this, a)
  };
  m.send = function(a, b) {
    if (this.ua()) throw Error("#send called for disposed VirtualChannel.");
    this.g.j.send(this.j + ":" + a, b)
  };
  m.Ch = function(a, b) {
    this.ua() || a.apply({}, Array.prototype.slice.call(arguments, 1))
  };
  m.N = function() {
    this.g = this.g.g[this.j] = null
  };

  function hF() {
    Q.call(this);
    this.C = {}
  }
  w(hF, Q);
  m = hF.prototype;
  m.connect = function(a) {
    a && a()
  };
  m.ob = ca(!0);
  m.Ka = function(a, b, c) {
    this.C[a] = {
      callback: b,
      $g: !!c
    }
  };
  m.qf = ba("B");

  function iF(a, b, c) {
    var d = a.C[b];
    return d ? d : a.B ? {
      callback: Ra(a.B, b),
      $g: Ka(c)
    } : null
  }

  function jF(a, b) {
    if (b && "string" === typeof a) try {
      return JSON.parse(a)
    } catch (c) {
      return null
    } else if (!b && "string" !== typeof a) return Pk(a);
    return a
  }
  m.N = function() {
    hF.na.N.call(this);
    delete this.C;
    delete this.B
  };

  function kF(a) {
    Q.call(this);
    this.g = a
  }
  w(kF, Q);
  m = kF.prototype;
  m.cancel = function() {
    this.g.cancel()
  };
  m.connect = function(a) {
    a && a()
  };
  m.ob = ca(!0);
  m.Ka = function(a, b, c) {
    vi(this.g, function(d) {
      d.Ka(a, b, c)
    })
  };
  m.qf = function(a) {
    vi(this.g, function(b) {
      b.qf(a)
    })
  };
  m.send = function(a, b) {
    vi(this.g, function(c) {
      c.send(a, b)
    })
  };
  m.N = function() {
    this.cancel();
    kF.na.N.call(this)
  };

  function lF(a) {
    hF.call(this);
    this.g = a;
    this.j = Tj(this.g, "message", this.zk, !1, this)
  }
  w(lF, hF);

  function mF(a, b) {
    if ("*" == b) return new kF(Hi(Error("Invalid origin")));
    var c = new Vk(50),
      d = Ra(jj, c),
      e = new pi(d);
    yi(e, d);
    c.start();
    Tj(c, "tick", function() {
      function f() {
        g.port1.removeEventListener("message", f, !0);
        c.ua() || e.callback(new lF(g.port1))
      }
      var g = new MessageChannel;
      g.port1.start();
      g.port1.addEventListener("message", f, !0);
      a.postMessage({
        "--goog.messaging.PortChannel": !0
      }, b, [g.port2])
    });
    return new kF(e)
  }
  var nF = Sd && 0 > Oc(de, "533");
  m = lF.prototype;
  m.send = function(a, b) {
    var c = [];
    b = this.$f(c, b);
    a = {
      serviceName: a,
      payload: b,
      "--goog.messaging.PortChannel": !0
    };
    nF && (a = Pk(a));
    this.g.postMessage(a, c)
  };
  m.zk = function(a) {
    a = a.Da;
    var b = a.data;
    if (nF) try {
      b = JSON.parse(b)
    } catch (d) {
      return
    }
    var c;
    if (c = Ka(b) && b["--goog.messaging.PortChannel"]) c = b, "serviceName" in c ? "payload" in c ? c = !0 : (Li(c), c = !1) : (Li(c), c = !1);
    c && (c = b.payload, b = iF(this, b.serviceName, c)) && (c = jF(this.xg(a.ports || [], c), b.$g), null != c && b.callback(c))
  };
  m.$f = function(a, b) {
    return b && "[object MessagePort]" == Object.prototype.toString.call(b) ? (a.push(b), {
      _port: {
        type: "real",
        index: a.length - 1
      }
    }) : Ha(b) ? yb(b, u(this.$f, this, a)) : b && b.constructor == Object ? ac(b, function(c, d) {
      c = this.$f(a, c);
      return "_port" == d ? {
        type: "escaped",
        val: c
      } : c
    }, this) : b
  };
  m.xg = function(a, b) {
    return Ha(b) ? yb(b, u(this.xg, this, a)) : b && b.constructor == Object ? b._port && "real" == b._port.type ? a[b._port.index] : ac(b, function(c, d) {
      return this.xg(a, "_port" == d ? c.val : c)
    }, this) : b
  };
  m.N = function() {
    gk(this.j);
    "[object MessagePort]" == Object.prototype.toString.call(this.g) ? this.g.close() : "[object Worker]" == Object.prototype.toString.call(this.g) && this.g.terminate();
    delete this.g;
    lF.na.N.call(this)
  };

  function oF(a) {
    Q.call(this);
    this.g = new eF(a);
    this.o = {};
    this.j = fF(this.g, "private");
    this.w = fF(this.g, "public");
    this.j.Ka("mics", u(this.rk, this), !0)
  }
  w(oF, Q);
  m = oF.prototype;
  m.pm = 0;
  m.N = function() {
    jj(this.g);
    delete this.g;
    delete this.w;
    delete this.j
  };
  m.send = function(a, b, c) {
    var d = this.pm++;
    this.o[d] = c;
    c = {};
    c.signature = d;
    c.data = b;
    this.w.send(a, c)
  };
  m.rk = function(a) {
    var b = a.signature;
    a = a.data;
    b in this.o && ((0, this.o[b])(a), delete this.o[b])
  };
  m.Ka = function(a, b) {
    this.w.Ka(a, u(this.qk, this, b), !0)
  };
  m.qk = function(a, b) {
    a = a(b.data);
    var c = b.signature;
    Wh(a).then(u(function(d) {
      var e = {};
      e.data = d;
      e.signature = c;
      this.j && this.j.send("mics", e)
    }, this))
  };

  function pF(a, b) {
    Q.call(this);
    this.o = new eF(a);
    R(this, this.o);
    this.g = new oF(fF(this.o, "direct"));
    R(this, this.g);
    a = fF(this.o, "passthrough");
    this.w = b ? a : new oF(a);
    R(this, this.w);
    this.j = b;
    this.A = !1
  }
  r(pF, Q);

  function qF(a, b, c) {
    a.g.Ka(b, c)
  }
  pF.prototype.send = function(a, b, c) {
    this.g.send(a, b || {}, c || Fa)
  };

  function rF(a, b, c) {
    if (a.j) throw Error("Cannot register service in passthrough mode.");
    a.w.Ka(b, c, !0)
  }

  function sF(a, b, c, d) {
    if (a.j) throw Error("Cannot send message in passthrough mode.");
    a.w.send(b, c || {}, d || Fa)
  }
  pF.prototype.start = function() {
    this.A || (this.A = !0);
    if (this.j) throw Error("This was not registered as a passthrough for another channel.");
  };
  var tF = [];

  function uF() {
    return t.WorkerGlobalScope && self instanceof t.WorkerGlobalScope
  }

  function vF(a, b, c, d) {
    b = "#" + b + "_";
    var e = new pm;
    e.update(c.join(","));
    b += se(e.digest());
    d && (b += "&jobset=" + d);
    a += b;
    t.SharedWorker ? (c = new SharedWorker(a), a = new lF(c.port), c.port.start()) : a = new lF(new Worker(a));
    return a
  }

  function wF(a) {
    var b = a.slice(0),
      c = new Set(b);
    tF.forEach(function(d) {
      c.has(d) || b.push(d)
    });
    b.sort();
    return b
  };

  function xF(a, b, c) {
    var d = new Wz;
    var e = Pi(xF);
    F(d, 20, e);
    Yz(d, a);
    Xz(d, b ? b : 2);
    c && bA(d, c);
    return d
  }

  function yF(a) {
    var b;
    a instanceof Wz ? b = new V(null, a) : b = zF(a) ? a : t.ErrorEvent && a instanceof ErrorEvent ? a.error instanceof Error ? a.error : Error(a.message) : "string" === typeof a ? Error(a) : Error("Unknown reason type:" + a);
    b.stack || (b.stack = Pi(yF));
    return b
  }

  function AF(a) {
    if (a instanceof Wz) return a;
    var b;
    if (zF(a)) {
      if (b = BF(a)) return b;
      b = TE(void 0, void 0, a)
    } else b = "string" === typeof a ? TE(a) : TE("Converting an unexpected reason type to drive.ds.Error which should be drive.ds.Error, Error, or string. Found:" + a);
    Xz(b, 2);
    Yz(b, 6);
    return b
  }

  function BF(a) {
    return a instanceof Wz ? a : a instanceof V ? a.ab : null
  }

  function zF(a) {
    return a instanceof Error || uF() && a instanceof SE
  }

  function CF(a) {
    a = a.eb();
    return 15 == a || 32 == a || 33 == a
  };

  function DF() {
    this.g = {};
    this.o = 6;
    this.w = null
  }
  DF.prototype.S = l("o");
  DF.prototype.Ee = l("w");

  function EF(a, b) {
    a.g = b
  }

  function FF(a, b, c) {
    c = JSON.parse(c);
    a.o = c.s;
    a.w = c.d;
    var d = {};
    vb(c.me, function(e) {
      d[e.k] = e.v ? b(e.v) : null
    });
    a.g = d
  };

  function GF() {
    DF.call(this)
  }
  w(GF, DF);

  function HF(a) {
    Va("drive.DebugUtil.printFindById", function(c) {
      vi(a.Nh(c), function(d) {
        window.console.log(JSON.stringify(d))
      })
    }.bind(a));
    Va("drive.DebugUtil.getLogs", function() {
      return IF(a.Uf())
    }.bind(a));
    Va("drive.DebugUtil.printLogs", function() {
      window.console.log(IF(a.Uf()))
    }.bind(a));
    Va("drive.DebugUtil.printRequestHistory", function() {
      vi(a.Jh(), function(c) {
        vb(c, function(d) {
          window.console.log(B(d, 1));
          window.console.log(B(d, 2))
        })
      })
    }.bind(a));
    Va("drive.DebugUtil.getState", function() {
      return a.Vf()
    }.bind(a));
    var b = a.Hh();
    b && E(b, 1, !1) && Va("drive.DebugUtil.getContext", function() {
      return a.Ih()
    }.bind(a))
  };

  function JF() {};

  function KF() {
    u(this.g, this)
  }
  w(KF, JF);
  KF.g = void 0;
  KF.j = function() {
    KF.g || (KF.g = new KF)
  };
  KF.prototype.g = function(a) {
    return a.F()
  };

  function LF(a, b) {
    var c = new QD,
      d = new Set;
    if (6 == a) {
      a = q(b);
      for (b = a.next(); !b.done; b = a.next())(b = b.value) ? (b = MF.get(ry(b))) && d.add(b) : d.add(1);
      0 == d.size && d.add(0)
    }
    SD(c, oa(d).concat())
  }
  var MF = new Map([
    [5, 2],
    [4, 3],
    [3, 1],
    [2, 4]
  ]);

  function NF(a, b) {
    S.call(this, "s");
    this.error = a;
    this.g = b
  }
  r(NF, S);

  function OF(a, b, c, d, e, f) {
    T.call(this);
    var g = this;
    this.I = a;
    this.H = c;
    this.M = e;
    this.D = f;
    this.C = [];
    this.items = [];
    this.w = 6;
    SD(new QD, [1]);
    this.g = !0;
    this.G = e.ca();
    this.o = !1;
    this.sessionId = this.B = null;
    this.j = 0;
    ij(this, function() {
      g.o = !1;
      g.C = []
    })
  }
  r(OF, T);
  m = OF.prototype;
  m.pa = function() {
    return String(La(this))
  };

  function PF(a) {
    a.o = !0;
    0 == a.items.length && 6 == a.S() && a.g || QF(a)
  }
  m.T = l("M");
  m.ca = l("G");
  m.S = l("w");
  m.Tf = function(a) {
    this.dispatchEvent(new ZE(new V("Error occurred running a query after " + a.g + " retries.", a.error)))
  };
  m.Ue = function() {
    this.dispatchEvent(new S("n"))
  };

  function QF(a) {
    a.o && (RF(a, "Returning " + a.items.length + ". Status: " + (a.S() + ". Datasource: ") + (a.j + ". Query: ") + SF(a.I, a.M)), TF(a, a.items, a.M), a.dispatchEvent(new S("m", a)))
  }

  function TF(a, b, c) {
    if (fB(c)) c = "quick access";
    else if (gB(c)) c = "people predict";
    else if (hB(c)) c = "drive priority";
    else return;
    var d = b.map(function(e) {
      return e.F()
    }).join(", ");
    RF(a, "Returning " + b.length + " items for " + c + ": " + d)
  }
  m.refresh = h();

  function RF(a, b) {
    UF(a.H, "drive.ds.sync.BaseViewCacheLiveList", b)
  };

  function VF(a) {
    this.request = a;
    this.requestId = Gd()
  }

  function WF(a) {
    this.j = a
  }

  function XF(a, b) {
    this.request = a;
    this.g = b
  }

  function YF(a, b, c) {
    this.request = a;
    this.j = b;
    this.g = c
  }

  function ZF() {
    this.g = void 0
  }

  function $F() {}

  function aG(a, b) {
    this.request = a;
    this.g = b || ""
  }

  function bG(a, b) {
    this.response = a;
    this.j = void 0 === b ? 0 : b
  }

  function cG(a, b, c, d) {
    this.response = a;
    this.g = b || "";
    this.j = void 0 === d ? 0 : d
  }

  function dG(a, b) {
    this.request = a;
    this.g = b || ""
  }

  function eG(a, b, c, d) {
    this.response = a;
    this.g = b || "";
    this.j = void 0 === d ? 0 : d
  }

  function fG(a) {
    this.g = a
  }

  function gG(a) {
    this.g = a = void 0 === a ? [] : a
  }

  function hG(a, b) {
    this.request = a;
    this.g = b || ""
  }

  function iG(a, b) {
    this.response = a;
    this.g = b || ""
  };

  function jG(a) {
    S.call(this, "t");
    this.A = a
  }
  r(jG, S);
  jG.prototype.g = l("A");

  function kG(a, b) {
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? null : b;
    T.call(this);
    this.o = a;
    this.j = b
  }
  r(kG, T);
  kG.prototype.g = l("o");
  kG.prototype.Qb = function(a) {
    this.o != a && (this.o = a, this.dispatchEvent(new jG(a)))
  };

  function lG(a, b) {
    null != a && this.Ea.apply(this, arguments)
  }
  m = lG.prototype;
  m.tc = "";
  m.set = function(a) {
    this.tc = "" + a
  };
  m.Ea = function(a, b, c) {
    this.tc += String(a);
    if (null != b)
      for (var d = 1; d < arguments.length; d++) this.tc += arguments[d];
    return this
  };
  m.clear = function() {
    this.tc = ""
  };
  m.toString = l("tc");
  var mG = [73, 71];

  function nG(a, b, c, d, e) {
    var f = (e = void 0 === e ? !0 : e) ? "kind,permissionId,displayName,picture" : "kind,permissionId";
    e && (void 0 === b ? 0 : b) && (f += ",emailAddress");
    (void 0 === c ? 0 : c) && (f += ",domain");
    (void 0 === d ? 0 : d) && (f += ",id");
    return a + "(" + f + ")"
  }
  var W = {
    1: "parents/id",
    2: "title",
    3: "mimeType",
    4: "labels/starred",
    5: "labels/hidden",
    6: "labels/trashed",
    7: "labels/restricted",
    8: "labels/viewed",
    9: "createdDate",
    10: "modifiedDate",
    11: "modifiedByMeDate",
    12: "lastViewedByMeDate",
    57: "subscribedDate",
    13: "fileSize"
  };
  W[14] = nG("owners", !0, !0, !0);
  W[16] = nG("lastModifyingUser", !0, void 0, !0);
  W[18] = "";
  W[19] = "hasThumbnail,thumbnailVersion";
  W[20] = "";
  W[21] = "id";
  W[24] = "shared";
  W[25] = "sharedWithMeDate";
  W[26] = "description";
  W[27] = "userPermission(role)";
  W[28] = "explicitlyTrashed";
  W[29] = "imageMediaMetadata/date";
  W[30] = "imageMediaMetadata/width";
  W[31] = "imageMediaMetadata/height";
  W[92] = "imageMediaMetadata/rotation";
  W[32] = "quotaBytesUsed";
  W[33] = "shareable";
  W[34] = "copyable,capabilities/canCopy";
  W[35] = "subscribed";
  W[38] = "folderColor";
  W[39] = "hasChildFolders";
  W[41] = "capabilities/canDownload";
  W[42] = "";
  W[43] = "source/client_service_id,source/value";
  W[44] = "fileExtension";
  W[45] = "primarySyncParentId";
  W[46] = nG("sharingUser", !0, void 0, !0);
  W[48] = "flaggedForAbuse";
  W[49] = "folderFeatures";
  W[50] = "";
  W[51] = "gplusMedia";
  W[52] = "sources";
  W[55] = "spaces";
  W[56] = "sourceAppId";
  W[58] = "ownedByMe";
  W[59] = "capabilities/canEdit";
  W[61] = "capabilities/canComment";
  W[66] = "serverCreatedDate";
  W[67] = "recency";
  W[68] = "recencyReason";
  W[69] = "changed";
  W[71] = "recursiveFileSize";
  W[73] = "recursiveFileCount";
  W[74] = "actionItems";
  W[72] = "headRevisionId";
  W[84] = "templateData(description,category,galleryState)";
  W[76] = "capabilities/canAddChildren";
  W[77] = "capabilities/canDelete";
  W[93] = "capabilities/canMoveTeamDriveItem";
  W[90] = "capabilities/canReadTeamDrive";
  W[78] = "capabilities/canRemoveChildren";
  W[79] = "capabilities/canShare";
  W[80] = "capabilities/canTrash";
  W[81] = "capabilities/canManageMembers";
  W[82] = "capabilities/canManageVisitors";
  W[83] = "teamDriveId";
  W[85] = "capabilities/canRename";
  W[75] = "permissionsSummary(entryCount,visibility(type,domain,withLink),selectPermissions(kind,id,name,userId,emailAddress,domain,role,type,photoLink,additionalRoles,view,audienceId,customerId))";
  W[87] = "hasAugmentedPermissions";
  W[188] = "ancestorHasAugmentedPermissions";
  W[91] = nG("creator", !0, void 0, !0);
  W[94] = "primaryDomainName";
  W[95] = "organizationDisplayName";
  W[96] = "passivelySubscribed";
  W[97] = nG("trashingUser", !0, void 0, !0);
  W[98] = "trashedDate";
  W[70] = "version";
  W[100] = "hasVisitorPermissions";
  W[101] = "capabilities/canMoveItemIntoTeamDrive";
  W[102] = "capabilities/canUntrash";
  W[1002] = "";
  W[103] = "pairedDocType";
  W[104] = "hasAppsScriptAddOn";
  W[105] = "videoMediaMetadata/width";
  W[106] = "videoMediaMetadata/height";
  W[107] = "videoMediaMetadata/durationMillis";
  W[108] = "detectors";
  W[1003] = "";
  W[1004] = "containsUnsubscribedChildren";
  W[114] = "capabilities/canModifyContentRestriction";
  W[115] = "contentRestriction/readOnly";
  W[116] = "contentRestriction/reason";
  W[1005] = "";
  W[122] = "restrictions";
  W[124] = "publishingInfo/published";
  W[125] = "publishingInfo/publishedUrl";
  W[126] = "workspaceIds";
  W[136] = "contentRestrictions/readOnly";
  W[130] = "capabilities/canMoveItemWithinTeamDrive";
  W[131] = "capabilities/canMoveItemOutOfTeamDrive";
  W[132] = "capabilities/canMoveChildrenWithinTeamDrive";
  W[133] = "capabilities/canMoveChildrenOutOfTeamDrive";
  W[134] = "capabilities/canDeleteChildren";
  W[135] = "capabilities/canTrashChildren";
  W[137] = "capabilities/canRequestApproval";
  W[138] = "approvalMetadata/approvalVersion";
  W[148] = "approvalMetadata/approvalSummaries";
  W[146] = "capabilities/canReadCategoryMetadata";
  W[147] = "capabilities/canEditCategoryMetadata";
  W[149] = "appliedCategories";
  W[156] = "canChangeCategoryReferences";
  W[154] = "shortcutDetails/targetId";
  W[155] = "shortcutDetails/targetMimeType";
  W[158] = "shortcutDetails/targetLookupStatus";
  W[159] = "shortcutDetails/targetFile";
  W[184] = "authorizedAppIds";
  W[185] = "capabilities/canAddMyDriveParent";
  W[186] = "capabilities/canRemoveMyDriveParent";
  W[187] = "customerId";
  W[189] = "capabilities/canShareChildFiles";
  W[190] = "capabilities/canShareChildFolders";
  W[191] = "capabilities/canRead";
  W[192] = "shortcutDetails/canRequestAccessToTarget";
  W[193] = "clientEncryptionDetails/encryptionState";
  W[194] = "clientEncryptionDetails/decryptionMetadata/wrappedKey,clientEncryptionDetails/decryptionMetadata/kaclsId,clientEncryptionDetails/decryptionMetadata/aes256GcmChunkSize,clientEncryptionDetails/decryptionMetadata/jwt";
  var oG = {};
  oG[14] = nG("owners");
  oG[16] = nG("lastModifyingUser");
  oG[46] = nG("sharingUser");
  oG[91] = nG("creator");
  oG[97] = nG("trashingUser");
  var pG = {};
  pG[14] = nG("owners", !1, !0, !0, !1);
  pG[16] = nG("lastModifyingUser", !1, void 0, !0, !1);
  pG[46] = nG("sharingUser", !1, void 0, !0, !1);
  pG[91] = nG("creator", !1, void 0, !0, !1);
  pG[97] = nG("trashingUser", !1, void 0, !0, !1);
  pG[75] = "permissionsSummary(entryCount,visibility(type,domain,withLink),selectPermissions(kind,id,userId,domain,role,type,additionalRoles,view,audienceId,customerId))";
  var qG = [42, 20, 50, 18];

  function rG(a) {
    var b = new lG;
    b.Ea(sG(a, !0));
    return b.toString()
  }

  function tG(a) {
    var b = new lG;
    b.Ea("kind,nextPageToken,items(");
    b.Ea(sG(a, !0));
    b.Ea("),incompleteSearch");
    a.Hd && (b.Ea(","), b.Ea(a.Hd));
    return b.toString()
  }

  function uG(a) {
    var b = new lG;
    b.Ea("kind,largestChangeId,nextPageToken,");
    b.Ea("items(deleted,fileId,id,kind,");
    b.Ea(sG(a, !0, "file"));
    a.Hd && (b.Ea(",teamDriveId,teamDrive("), b.Ea(a.Hd), b.Ea(")"));
    b.Ea(")");
    return b.toString()
  }

  function sG(a, b, c) {
    var d = {},
      e = [];
    b && e.push("kind");
    a.bb.forEach(function(p) {
      if (!qG.includes(p)) {
        var x = W[p];
        if (x) {
          var A = pG[p];
          a.gd && A && (x = A);
          p = oG[p];
          a.$a && p && (x = p);
          x.split(",").forEach(function(G) {
            var K = Ld(G, "/");
            1 < K.length ? (d[K[0]] || (d[K[0]] = []), d[K[0]].push(K[1])) : e.push(G)
          })
        }
      }
    });
    for (var f = {}, g = q(Object.entries(d)), k = g.next(); !k.done; f = {
        Ed: f.Ed
      }, k = g.next()) {
      var n = q(k.value);
      k = n.next().value;
      n = n.next().value;
      f.Ed = [];
      n.forEach(function(p) {
        return function(x) {
          p.Ed.push(x)
        }
      }(f));
      "owners" == k && b && f.Ed.push("kind");
      e.push(vG(f.Ed.join(","), k))
    }
    return vG(e.join(","), c)
  }

  function vG(a, b) {
    return b ? b + "(" + a + ")" : a
  }

  function wG(a, b) {
    if (0 != a.length) {
      a = new Set(a);
      var c = new Set(Object.values(gA));
      a.forEach(function(d) {
        return c.delete(d)
      });
      for (a = 0; a < b.length; a++) xG(oa(c.values()).concat(), b[a])
    }
  }

  function xG(a, b) {
    for (var c = 0; c < a.length; c++) yG(a[c], b)
  }

  function yG(a, b) {
    var c = H(b, Gx, 27),
      d = yy(b),
      e = H(b, $x, 103),
      f = H(b, Cx, 111),
      g = Ey(b),
      k = H(b, Ax, 138);
    switch (a) {
      case 18:
        F(b, 19, void 0);
        break;
      case 9:
        F(b, 10, void 0);
        break;
      case 13:
        F(b, 14, void 0);
        break;
      case 4:
        F(b, 5, void 0);
        break;
      case 5:
        F(b, 6, void 0);
        break;
      case 6:
        F(b, 7, void 0);
        break;
      case 7:
        F(b, 8, void 0);
        break;
      case 8:
        F(b, 9, void 0);
        break;
      case 16:
        J(b, 17, void 0);
        break;
      case 12:
        F(b, 13, void 0);
        break;
      case 3:
        F(b, 4, void 0);
        break;
      case 11:
        F(b, 12, void 0);
        break;
      case 10:
        F(b, 11, void 0);
        break;
      case 14:
        M(b, 15, []);
        break;
      case 1:
        ey(b,
          []);
        break;
      case 19:
        F(b, 20, void 0);
        F(b, 44, void 0);
        F(b, 90, void 0);
        break;
      case 2:
        F(b, 3, void 0);
        break;
      case 24:
        F(b, 22, void 0);
        break;
      case 25:
        F(b, 23, void 0);
        break;
      case 26:
        F(b, 24, void 0);
        break;
      case 27:
        F(b, 25, void 0);
        break;
      case 28:
        F(b, 26, void 0);
        break;
      case 29:
        c && F(c, 1, void 0);
        break;
      case 30:
        c && F(c, 2, void 0);
        break;
      case 31:
        c && F(c, 3, void 0);
        break;
      case 92:
        c && F(c, 4, void 0);
        break;
      case 32:
        F(b, 28, void 0);
        break;
      case 33:
        F(b, 29, void 0);
        break;
      case 34:
        F(b, 30, void 0);
        d && F(d, 3, void 0);
        break;
      case 35:
        F(b, 31, void 0);
        break;
      case 38:
        F(b,
          34, void 0);
        break;
      case 39:
        F(b, 35, void 0);
        break;
      case 41:
        F(b, 40, void 0);
        d && F(d, 5, void 0);
        break;
      case 42:
        F(b, 41, void 0);
        break;
      case 43:
        F(b, 42, void 0);
        F(b, 43, void 0);
        break;
      case 44:
        F(b, 45, void 0);
        break;
      case 45:
        F(b, 46, void 0);
        break;
      case 46:
        J(b, 47, void 0);
        break;
      case 48:
        F(b, 36, void 0);
        break;
      case 49:
        F(b, 50, []);
        break;
      case 50:
        F(b, 49, void 0);
        F(b, 51, void 0);
        J(b, 81, void 0);
        break;
      case 51:
        F(b, 53, void 0);
        break;
      case 52:
        F(b, 56, []);
        break;
      case 55:
        M(b, 60, []);
        break;
      case 56:
        F(b, 61, void 0);
        break;
      case 57:
        F(b, 62, void 0);
        break;
      case 58:
        F(b, 63, void 0);
        break;
      case 59:
        d && F(d, 6, void 0);
        break;
      case 61:
        d && F(d, 2, void 0);
        break;
      case 66:
        F(b, 69, void 0);
        break;
      case 67:
        F(b, 70, void 0);
        break;
      case 68:
        F(b, 71, void 0);
        break;
      case 69:
        F(b, 74, void 0);
        break;
      case 71:
        F(b, 77, void 0);
        break;
      case 73:
        F(b, 79, void 0);
        break;
      case 74:
        M(b, 83, []);
        break;
      case 72:
        F(b, 78, void 0);
        break;
      case 76:
        d && F(d, 1, void 0);
        break;
      case 77:
        d && F(d, 4, void 0);
        break;
      case 81:
        d && F(d, 10, void 0);
        break;
      case 82:
        d && F(d, 11, void 0);
        break;
      case 93:
        d && F(d, 17, void 0);
        break;
      case 90:
        d && F(d, 16, void 0);
        break;
      case 78:
        d && F(d, 7, void 0);
        break;
      case 85:
        d && F(d, 12, void 0);
        break;
      case 79:
        d && F(d, 8, void 0);
        break;
      case 80:
        d && F(d, 9, void 0);
        break;
      case 83:
        F(b, 72, void 0);
        break;
      case 87:
        F(b, 76, void 0);
        break;
      case 188:
        F(b, 137, void 0);
        break;
      case 91:
        J(b, 91, void 0);
        break;
      case 75:
        zy(b, void 0);
        break;
      case 94:
        F(b, 92, void 0);
        break;
      case 95:
        F(b, 93, void 0);
        break;
      case 96:
        F(b, 94, void 0);
        break;
      case 97:
        J(b, 95, void 0);
        break;
      case 98:
        F(b, 96, void 0);
        break;
      case 70:
        F(b, 75, void 0);
        break;
      case 100:
        F(b, 98, void 0);
        break;
      case 101:
        d && F(d, 20, void 0);
        break;
      case 102:
        d && F(d, 21, void 0);
        break;
      case 1002:
        J(b, 100, void 0);
        break;
      case 103:
        F(b, 101, void 0);
        break;
      case 104:
        F(b, 102, void 0);
        break;
      case 105:
        e && F(e, 1, void 0);
        break;
      case 106:
        e && F(e, 2, void 0);
        break;
      case 107:
        e && F(e, 3, void 0);
        break;
      case 108:
        F(b, 104, []);
        break;
      case 1003:
        M(b, 107, []);
        break;
      case 1004:
        F(b, 108, void 0);
        break;
      case 114:
        d && F(d, 27, void 0);
        break;
      case 115:
        f && F(f, 1, void 0);
        break;
      case 116:
        f && F(f, 2, void 0);
        break;
      case 1005:
        Dy(b, []);
        break;
      case 122:
        Cy(b, void 0);
        break;
      case 124:
        F(b, 118, void 0);
        break;
      case 125:
        F(b,
          119, void 0);
        break;
      case 126:
        F(b, 120, []);
        break;
      case 136:
        M(b, 125, []);
        break;
      case 138:
        F(b, 126, void 0);
        break;
      case 148:
        M(b, 127, []);
        break;
      case 130:
        d && F(d, 30, void 0);
        break;
      case 131:
        d && F(d, 31, void 0);
        break;
      case 132:
        d && F(d, 32, void 0);
        break;
      case 133:
        d && F(d, 33, void 0);
        break;
      case 134:
        d && F(d, 34, void 0);
        break;
      case 135:
        d && F(d, 35, void 0);
        break;
      case 137:
        d && F(d, 36, void 0);
        break;
      case 146:
        d && F(d, 37, void 0);
        break;
      case 147:
        d && F(d, 38, void 0);
        break;
      case 156:
        d && F(d, 39, void 0);
        break;
      case 154:
        g && F(g, 1, void 0);
        break;
      case 155:
        g &&
          F(g, 3, void 0);
        break;
      case 158:
        g && F(g, 4, void 0);
        break;
      case 159:
        g && J(g, 5, void 0);
        break;
      case 157:
        (a = vy(b)) && Xx(a, []);
        break;
      case 184:
        F(b, 135, []);
        break;
      case 185:
        d && F(d, 40, void 0);
        break;
      case 186:
        d && F(d, 41, void 0);
        break;
      case 187:
        F(b, 136, void 0);
        break;
      case 189:
        d && F(d, 42, void 0);
        break;
      case 190:
        d && F(d, 43, void 0);
        break;
      case 191:
        d && F(d, 44, void 0);
        break;
      case 192:
        g && F(g, 6, void 0);
        break;
      case 193:
        k && F(k, 1, void 0);
        break;
      case 194:
        k && J(k, 2, void 0)
    }
  }

  function zG(a, b) {
    return b.every(function(c) {
      return AG(a, c)
    })
  }

  function AG(a, b) {
    var c = yy(a) || new kx,
      d = H(a, $x, 103),
      e = H(a, Cx, 111),
      f = Ey(a),
      g = H(a, Ax, 138);
    switch (b) {
      case 26:
        return null != B(a, 24);
      case 50:
        return null != a.j() && null != C(a, 51) || null != xy(a);
      case 10:
        return null != B(a, 11);
      case 71:
        return null != B(a, 77);
      case 73:
        return null != B(a, 79);
      case 34:
        return null != C(a, 30) || null != C(c, 3);
      case 76:
        return null != C(c, 1);
      case 61:
        return null != C(c, 2);
      case 77:
        return null != C(c, 4);
      case 81:
        return null != C(c, 10);
      case 82:
        return null != C(c, 11);
      case 93:
        return null != C(c, 17);
      case 90:
        return null !=
          C(c, 16);
      case 78:
        return null != C(c, 7);
      case 85:
        return null != C(c, 12);
      case 79:
        return null != C(c, 8);
      case 80:
        return null != C(c, 9);
      case 41:
        return null != C(c, 5);
      case 59:
        return null != C(c, 6);
      case 33:
        return null != C(a, 29);
      case 2:
        return null != B(a, 3);
      case 75:
        return null != H(a, Nx, 85);
      case 91:
        return null != H(a, Ht, 91);
      case 70:
        return null != B(a, 75);
      case 94:
        return null != B(a, 92);
      case 95:
        return null != B(a, 93);
      case 100:
        return null != C(a, 98);
      case 101:
        return null != C(c, 20);
      case 102:
        return null != C(c, 21);
      case 1002:
        return null != H(a,
          Rx, 100);
      case 103:
        return null != B(a, 101);
      case 104:
        return null != C(a, 102);
      case 105:
        return null != d && null != B(d, 1);
      case 106:
        return null != d && null != B(d, 2);
      case 107:
        return null != d && null != B(d, 3);
      case 108:
        return 0 < B(a, 104).length;
      case 1003:
        return 0 < I(a, Jx, 107).length;
      case 1004:
        return null != C(a, 108);
      case 12:
        return null != B(a, 13);
      case 11:
        return null != B(a, 12);
      case 67:
        return null != B(a, 70);
      case 68:
        return null != B(a, 71);
      case 114:
        return null != C(c, 27);
      case 115:
        return null != e && null != C(e, 1);
      case 116:
        return null != e && null !=
          B(e, 2);
      case 1005:
        return 0 < I(a, Lu, 117).length;
      case 122:
        return null != H(a, Sx, 109);
      case 124:
        return null != C(a, 118);
      case 125:
        return null != B(a, 119);
      case 126:
        return 0 < B(a, 120).length;
      case 136:
        return 0 < I(a, Cx, 125).length;
      case 130:
        return null != C(c, 30);
      case 131:
        return null != C(c, 31);
      case 132:
        return null != C(c, 32);
      case 133:
        return null != C(c, 33);
      case 134:
        return null != C(c, 34);
      case 135:
        return null != C(c, 35);
      case 137:
        return null != C(c, 36);
      case 138:
        return null != B(a, 126);
      case 148:
        return 0 < I(a, wu, 127).length;
      case 146:
        return null !=
          C(c, 37);
      case 147:
        return null != C(c, 38);
      case 156:
        return null != C(c, 39);
      case 154:
        return null != f && null != B(f, 1);
      case 155:
        return null != f && null != B(f, 3);
      case 158:
        return null != f && null != B(f, 4);
      case 159:
        return null != f && null != H(f, ay, 5);
      case 157:
        return a = vy(a), !(!a || !I(a, Ux, 8));
      case 184:
        return 0 < B(a, 135).length;
      case 185:
        return null != C(c, 40);
      case 186:
        return null != C(c, 41);
      case 187:
        return null != B(a, 136);
      case 87:
        return null != C(a, 76);
      case 188:
        return null != C(a, 137);
      case 189:
        return null != C(c, 42);
      case 190:
        return null !=
          C(c, 43);
      case 191:
        return null != C(c, 44);
      case 192:
        return null != f && null != C(f, 6);
      case 193:
        return null != g && null != B(g, 1);
      case 194:
        return null != g && null != H(g, Bx, 2);
      default:
        throw Error("Error: hasField not implemented for field: " + b);
    }
  }

  function BG(a, b, c) {
    c && (a = CG(c, a));
    return DG(b, a, !0)
  }

  function EG(a, b) {
    var c = new Set(b.concat(qG));
    return a.filter(function(d) {
      return !c.has(d)
    })
  }

  function FG(a, b, c) {
    c.forEach(function(d) {
      if (AG(b, d)) {
        switch (d) {
          case 34:
          case 76:
          case 61:
          case 77:
          case 81:
          case 82:
          case 101:
          case 93:
          case 90:
          case 78:
          case 85:
          case 79:
          case 80:
          case 102:
          case 41:
          case 59:
            if (!yy(a)) {
              var e = new kx;
              J(a, 84, e)
            }
        }
        switch (d) {
          case 154:
          case 155:
          case 158:
          case 159:
          case 192:
            Ey(a) || (e = new cy, J(a, 132, e))
        }
        switch (d) {
          case 193:
          case 194:
            H(a, Ax, 138) || (e = new Ax, J(a, 138, e))
        }
        e = yy(a);
        var f = yy(b),
          g = H(b, $x, 103),
          k = H(b, Cx, 111),
          n = Ey(a),
          p = Ey(b),
          x = H(a, Ax, 138),
          A = H(b, Ax, 138);
        switch (d) {
          case 26:
            my(a, B(b, 24));
            break;
          case 50:
            e = b.j();
            F(a, 49, e);
            e = C(b, 51);
            F(a, 51, e);
            if (e = xy(b)) e = N(e), J(a, 81, e);
            break;
          case 10:
            ky(a, B(b, 11));
            break;
          case 71:
            e = B(b, 77);
            F(a, 77, e);
            break;
          case 73:
            e = B(b, 79);
            F(a, 79, e);
            break;
          case 34:
            n = C(b, 30);
            F(a, 30, n);
            n = C(f, 3);
            F(e, 3, n);
            break;
          case 76:
            lx(e, C(f, 1));
            break;
          case 61:
            n = C(f, 2);
            F(e, 2, n);
            break;
          case 77:
            n = C(f, 4);
            F(e, 4, n);
            break;
          case 81:
            n = C(f, 10);
            F(e, 10, n);
            break;
          case 82:
            px(e, C(f, 11));
            break;
          case 93:
            sx(e, C(f, 17));
            break;
          case 90:
            rx(e, C(f, 16));
            break;
          case 78:
            mx(e, C(f, 7));
            break;
          case 85:
            qx(e, C(f, 12));
            break;
          case 79:
            nx(e,
              C(f, 8));
            break;
          case 80:
            ox(e, C(f, 9));
            break;
          case 41:
            n = C(b, 40);
            F(a, 40, n);
            n = C(f, 5);
            F(e, 5, n);
            break;
          case 59:
            n = C(f, 6);
            F(e, 6, n);
            break;
          case 33:
            e = C(b, 29);
            F(a, 29, e);
            break;
          case 2:
            fy(a, B(b, 3));
            break;
          case 75:
            zy(a, H(b, Nx, 85));
            break;
          case 91:
            e = H(b, Ht, 91);
            J(a, 91, e);
            break;
          case 70:
            e = B(b, 75);
            F(a, 75, e);
            break;
          case 94:
            Ay(a, B(b, 92));
            break;
          case 95:
            By(a, B(b, 93));
            break;
          case 100:
            e = C(b, 98);
            F(a, 98, e);
            break;
          case 101:
            tx(e, C(f, 20));
            break;
          case 102:
            ux(e, C(f, 21));
            break;
          case 1002:
            if (e = H(b, Rx, 100)) e = N(e), J(a, 100, e);
            break;
          case 103:
            e = B(b,
              101);
            F(a, 101, e);
            break;
          case 104:
            e = C(b, 102);
            F(a, 102, e);
            break;
          case 105:
            g && (e = H(a, $x, 103) || new $x, n = B(g, 1), e = F(e, 1, n), J(a, 103, e));
            break;
          case 106:
            g && (e = H(a, $x, 103) || new $x, n = B(g, 2), e = F(e, 2, n), J(a, 103, e));
            break;
          case 107:
            g && (e = H(a, $x, 103) || new $x, n = B(g, 3), e = F(e, 3, n), J(a, 103, e));
            break;
          case 108:
            e = B(b, 104);
            F(a, 104, e || []);
            break;
          case 1003:
            e = I(b, Jx, 107);
            M(a, 107, e);
            break;
          case 1004:
            e = C(b, 108);
            F(a, 108, e);
            break;
          case 12:
            e = B(b, 13);
            F(a, 13, e);
            break;
          case 11:
            e = B(b, 12);
            F(a, 12, e);
            break;
          case 67:
            e = B(b, 70);
            F(a, 70, e);
            break;
          case 68:
            e =
              B(b, 71);
            F(a, 71, e);
            break;
          case 114:
            n = C(f, 27);
            F(e, 27, n);
            break;
          case 115:
            k && (e = Dx(H(a, Cx, 111) || new Cx, C(k, 1)), J(a, 111, e));
            break;
          case 116:
            k && (e = Ex(H(a, Cx, 111) || new Cx, B(k, 2)), J(a, 111, e));
            break;
          case 1005:
            Dy(a, I(b, Lu, 117));
            break;
          case 122:
            Cy(a, H(b, Sx, 109));
            break;
          case 124:
            e = C(b, 118);
            F(a, 118, e);
            break;
          case 125:
            e = B(b, 119);
            F(a, 119, e);
            break;
          case 126:
            e = B(b, 120);
            F(a, 120, e || []);
            break;
          case 136:
            e = I(b, Cx, 125);
            M(a, 125, e);
            break;
          case 130:
            n = C(f, 30);
            F(e, 30, n);
            break;
          case 131:
            vx(e, C(f, 31));
            break;
          case 132:
            wx(e, C(f, 32));
            break;
          case 133:
            xx(e, C(f, 33));
            break;
          case 134:
            n = C(f, 34);
            F(e, 34, n);
            break;
          case 135:
            n = C(f, 35);
            F(e, 35, n);
            break;
          case 137:
            n = C(f, 36);
            F(e, 36, n);
            break;
          case 138:
            e = B(b, 126);
            F(a, 126, e);
            break;
          case 148:
            e = I(b, wu, 127);
            M(a, 127, e);
            break;
          case 146:
            n = C(f, 37);
            F(e, 37, n);
            break;
          case 147:
            n = C(f, 38);
            F(e, 38, n);
            break;
          case 156:
            n = C(f, 39);
            F(e, 39, n);
            break;
          case 154:
            e = B(p, 1);
            F(n, 1, e);
            break;
          case 155:
            e = B(p, 3);
            F(n, 3, e);
            break;
          case 158:
            e = B(p, 4);
            F(n, 4, e);
            break;
          case 159:
            e = H(p, ay, 5);
            J(n, 5, e);
            break;
          case 157:
            vy(a) || wy(a, new Vx);
            e = vy(a);
            n = vy(b);
            Xx(e,
              oa(I(n, Ux, 8)).concat());
            break;
          case 184:
            e = B(b, 135);
            F(a, 135, e || []);
            break;
          case 185:
            n = C(f, 40);
            F(e, 40, n);
            break;
          case 186:
            n = C(f, 41);
            F(e, 41, n);
            break;
          case 187:
            e = B(b, 136);
            F(a, 136, e);
            break;
          case 87:
            e = C(b, 76);
            F(a, 76, e);
            break;
          case 188:
            e = C(b, 137);
            F(a, 137, e);
            break;
          case 189:
            yx(e, C(f, 42));
            break;
          case 190:
            zx(e, C(f, 43));
            break;
          case 191:
            n = C(f, 44);
            F(e, 44, n);
            break;
          case 192:
            e = C(p, 6);
            F(n, 6, e);
            break;
          case 193:
            e = B(A, 1);
            F(x, 1, e);
            break;
          case 194:
            e = (e = H(A, Bx, 2)) ? N(e) : void 0;
            J(x, 2, e);
            break;
          default:
            throw Error("Error: mergeField not implemented for field: " +
              d);
        }
      }
    })
  }

  function GG(a, b) {
    return a.filter(function(c) {
      return b.includes(c)
    })
  }

  function DG(a, b, c) {
    var d = a.concat((void 0 === c ? 0 : c) ? qG : []);
    return b.every(function(e) {
      return (new Set(d)).has(e)
    })
  }
  var HG = {};
  HG[1] = new Set([33, 5]);
  HG[3] = new Set([33]);
  HG[4] = new Set([33]);
  HG[5] = new Set([33]);
  HG[6] = new Set([33]);
  HG[8] = new Set([33]);
  HG[10] = new Set([33]);
  var IG = HG;

  function CG(a, b) {
    var c = IG[a];
    return b.filter(function(d) {
      return !c || !c.has(d)
    })
  };

  function JG(a, b) {
    this.g = oa(a).concat();
    this.j = new Set(B(b, 28));
    a = GG(this.g, B(b, 28));
    if (0 < a.length) throw Error("Found secondary field(s) in primary field list: [" + a.join(",") + "]");
    this.g.push(21);
    this.g.push(70);
    lD(qD(b)) || (this.g.push(45), this.g.push(25), this.g.push(35), this.g.push(96), E(b, 63, !1) && this.g.push(1004), this.g.push(28), E(b, 85, !1) && (this.g.push(189), this.g.push(190)));
    uD(b) && (this.g.push(83), this.g.push(87));
    Qb(this.g);
    this.g.sort()
  }

  function KG(a) {
    return oa(a.g).concat()
  }

  function LG(a) {
    return a.g.concat(oa(a.j).concat())
  };

  function MG() {
    this.j = [];
    this.g = []
  }

  function NG(a) {
    0 == a.j.length && (a.j = a.g, a.j.reverse(), a.g = []);
    return a.j.pop()
  }
  m = MG.prototype;
  m.ia = function() {
    return this.j.length + this.g.length
  };
  m.clear = function() {
    this.j = [];
    this.g = []
  };
  m.contains = function(a) {
    return Db(this.j, a) || Db(this.g, a)
  };
  m.remove = function(a) {
    var b = this.j;
    var c = ub(b, a);
    0 <= c ? (Gb(b, c), b = !0) : b = !1;
    return b || Fb(this.g, a)
  };
  m.sa = function() {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.g.length;
    for (b = 0; b < c; ++b) a.push(this.g[b]);
    return a
  };

  function OG() {
    var a = void 0 === a ? 1E3 : a;
    this.j = new MG;
    this.g = new MG;
    this.w = Math.ceil(a / 2);
    this.A = Math.floor(a / 2);
    this.B = Date.now();
    this.o = !1
  }

  function IF(a) {
    var b = [],
      c = a.j.sa();
    a.o && c.push(PG("...", "...", "...", "..."));
    Nb(c, a.g.sa());
    for (a = 0; a < c.length; a++) {
      var d = c[a];
      b.push(d.totalTime + "\t|\t" + d.level + "\t|\t" + d.logName + "\t|\t" + d.message)
    }
    return b.join("\n")
  }

  function QG(a, b, c) {
    RG(a, b, c, "warning")
  }

  function UF(a, b, c) {
    RG(a, b, c, "info")
  }
  OG.prototype.config = function(a, b) {
    RG(this, a, b, "config")
  };
  OG.prototype.log = function(a, b, c) {
    if (!Zi) {
      Zi = {};
      for (var d = 0, e; e = Yi[d]; d++) Zi[e.value] = e, Zi[e.name] = e
    }
    RG(this, a, b, c)
  };

  function RG(a, b, c, d) {
    a.g.ia() >= a.A && (a.o = !0, NG(a.g));
    var e = Date.now() - a.B;
    b = PG(b, c, d, 1E3 < e ? (e / 1E3).toFixed(1) + "s" : e + "ms");
    a.j.ia() < a.w ? a.j.g.push(b) : a.g.g.push(b)
  }

  function PG(a, b, c, d) {
    var e = {};
    e.logName = a;
    e.message = b;
    e.level = c;
    e.totalTime = d;
    return e
  };

  function SG(a) {
    Q.call(this);
    this.j = {};
    this.B = {};
    this.C = a;
    this.A = !0;
    this.o = null;
    this.w = !1
  }
  r(SG, Q);

  function TG(a, b, c) {
    if (a.w) throw Error("Rules may only be added before the manager is started.");
    c = {
      Bi: rc(b),
      callback: c
    };
    b = q(b);
    for (var d = b.next(); !d.done; d = b.next()) {
      d = d.value;
      var e = a.j[d];
      null == e && (e = [], a.j[d] = e);
      e.push(c)
    }
  }

  function UG(a, b) {
    if (!a.w) throw Error("May only pass milestones once the manager has been started ");
    if (!a.A) throw Error("One of the milestone managers callbacks threw an exception, disabling the manager permanently. Original error: " + a.o + (a.o.stack ? "\nOriginal stack: " + a.o.stack : ""));
    UF(a.C, "drive.ds.MilestoneManager", "Passing Milestone: " + b);
    a.B[b] = !0;
    var c = a.j[b];
    if (c) {
      delete a.j[b];
      for (var d = 0; d < c.length; ++d) {
        var e = c[d];
        delete e.Bi[b];
        if (kc(e.Bi)) try {
          e.callback()
        } catch (f) {
          throw a.A = !1, a.o = f, f;
        }
      }
    }
  }
  SG.prototype.g = function(a) {
    return !!this.B[a]
  };
  SG.prototype.start = function() {
    this.w = !0
  };
  SG.prototype.N = function() {
    Q.prototype.N.call(this);
    delete this.j
  };

  function VG(a, b) {
    return 0 <= b ? !a || a <= b : !0
  }

  function WG(a, b) {
    return 1 < a ? 2 == b : a == b
  }

  function XG(a, b) {
    if (0 <= b) return !a || a < b ? b : a;
    if (-1 == b) return !a || 1 >= a ? 2 : a + 1;
    if (-2 == b) return !a || 2 >= a ? 1 : a - 1;
    throw Error("Invalid sync state");
  };

  function YG(a, b, c, d) {
    this.item = a;
    this.count = void 0 === b ? 0 : b;
    this.g = void 0 === c ? 1 : c;
    this.j = d
  }
  YG.prototype.clone = function() {
    return new YG(N(this.item), this.count, this.g, this.j)
  };
  YG.prototype.oa = function(a) {
    return this.count == a.count && this.g == a.g && this.j == a.j && Ze(this.item, a.item)
  };
  var ZG = {
      drive: 1,
      appDataFolder: 2,
      photos: 3,
      androidBackup: 4
    },
    $G = oc(ZG),
    aH = {
      1: "default",
      2: "teamDrive",
      3: "default,allTeamDrives"
    };

  function bH(a, b) {
    b && (U(a, "openDrive", !!E(b, 2, !1)), U(a, "reason", B(b, 1) || 0), U(a, "syncType", B(b, 3) || 0), U(a, "errorRecovery", !!E(b, 4, !1)))
  };
  var cH = new Set("application/vnd.google-apps.document application/vnd.google-apps.drawing application/vnd.google-apps.form application/vnd.google-apps.fusiontable application/vnd.google-apps.presentation application/vnd.google-apps.script application/vnd.google-apps.spreadsheet".split(" "));

  function dH(a) {
    if (a) {
      var b = a.ma();
      b && gy(a, b.toLowerCase());
      ty(a, I(a, Fx, 58).map(function(c) {
        var d = c.ma();
        d && F(c, 1, d.toLowerCase());
        return c
      }))
    }
  }

  function eH(a, b) {
    b = void 0 === b ? !1 : b;
    if (!a) return !1;
    var c = a.ma();
    return b && fH(a) ? (a = Ey(a), !!a && "application/vnd.google-apps.folder" == B(a, 3)) : "application/vnd.google-apps.folder" == c
  }

  function fH(a) {
    return a ? "application/vnd.google-apps.shortcut" == a.ma() : !1
  }

  function gH(a) {
    var b = a && a.F() || null;
    a && fH(a) && (a = (a = Ey(a)) && B(a, 1)) && (b = a);
    return b
  }

  function hH(a) {
    return !!C(a, 31) && !C(a, 94)
  }

  function iH(a) {
    jH.forEach(function(b) {
      return yG(b, a)
    })
  }

  function kH(a) {
    return jH.some(function(b) {
      return AG(a, b)
    })
  }
  var jH = [1002, 1003, 1005];

  function lH(a, b, c) {
    c = void 0 === c ? [] : c;
    if (!b || !mH(a) && !mH(b)) return a;
    if (2 == ry(a)) {
      c = B(a, 82);
      var d = N(b);
      nH(d, a);
      sy(d, ry(b));
      F(d, 82, c);
      return d
    }
    a = N(a);
    nH(a, b, c);
    return a
  }

  function nH(a, b, c) {
    c = void 0 === c ? [] : c;
    var d = N(a),
      e = vy(b);
    null != e && wy(a, N(e));
    if ((e = yy(b)) && null != C(e, 13)) {
      var f = yy(a) || new kx,
        g = C(e, 13);
      F(f, 13, g);
      J(a, 84, f)
    }
    e && null != C(e, 18) && (f = yy(a) || new kx, e = C(e, 18), F(f, 18, e), J(a, 84, f));
    FG(a, b, [76, 156, 61, 77, 134, 81, 82, 101, 93, 90, 78, 85, 79, 189, 190, 80, 135, 102, 34, 41, 59, 95, 75, 94, 122, 2]);
    vy(d) && FG(a, d, c)
  }

  function mH(a) {
    return a instanceof ay ? null != a.F() && a.F() == a.Z() : null != a.ba() && a.ba() == a.Z()
  }

  function oH(a, b) {
    uD(a) && (b.supportsTeamDrives = !0)
  }

  function pH(a, b) {
    return 2 == eB(a) ? cB(a) : qH(aB(a).map(function(c) {
      return c.P()
    }), b)
  }

  function qH(a, b) {
    a = a.map(function(c) {
      return (c = rH(b, c)) ? c.Z() : null
    }).filter(function(c) {
      return !!c
    });
    Qb(a);
    return a
  }

  function sH(a) {
    return (a = a ? vy(a) : null) && C(a, 7) || !1
  };

  function tH(a, b) {
    this.A = a;
    this.B = new Set(b);
    this.g = {};
    this.o = new Set;
    this.j = {};
    this.w = new Set
  }

  function uH(a, b) {
    vH(a, a.g, a.o, b)
  }

  function vH(a, b, c, d) {
    (new Set(d.filter(function(e) {
      return !a.B.has(e) && !c.has(e)
    }))).forEach(function(e) {
      UF(a.A, "drive.ds.sync.cache.FieldsCache", "Creating field cache for field: " + e);
      c.add(e);
      b[e] = {}
    })
  }

  function wH(a, b, c) {
    b.every(function(d) {
      return mH(d)
    }) ? xH(b, c, a.j, a.w) : b.every(function(d) {
      return !mH(d)
    }) && xH(b, c, a.g, a.o)
  }

  function xH(a, b, c, d) {
    var e = GG(b, oa(d).concat());
    0 != e.length && a.forEach(function(f) {
      e.forEach(function(g) {
        var k = c[g][f.F()];
        k && FG(f, k, [g])
      })
    })
  }
  tH.prototype.update = function(a, b, c) {
    b && mH(b) ? yH(a, b, this.j, this.w, c) : yH(a, b, this.g, this.o, c)
  };

  function zH(a, b) {
    Zb(a.g, function(c, d) {
      mc(a.g[d], b)
    });
    Zb(a.j, function(c, d) {
      mc(a.j[d], b)
    })
  }

  function yH(a, b, c, d, e) {
    Zb(c, function(f, g) {
      g = Number(g);
      if (e.includes(g))
        if (f[a] && !b) mc(f, a);
        else if (b && zG(b, [g])) {
        var k = new ay;
        dy(k, b.F());
        FG(k, b, [g]);
        f[a] = k
      }
    });
    b && xG(oa(d).concat(), b)
  }
  tH.prototype.clear = function() {
    var a = this;
    Zb(this.g, function(b, c) {
      a.g[c] = {}
    });
    Zb(this.j, function(b, c) {
      a.j[c] = {}
    })
  };

  function AH(a) {
    if (eH(a)) Ix(BH(a, !0), !0);
    else if (eH(a, !0)) {
      var b = Ey(a);
      if (b = b && H(b, ay, 5)) Ix(BH(b, !0), !0), Ix(BH(a, !0), !0)
    }
  }

  function BH(a, b) {
    var c = xy(a);
    c || (c = new Hx, b && J(a, 81, c));
    return c
  }

  function CH(a) {
    return !!xy(a) && !eH(a)
  }

  function DH(a) {
    var b = [];
    vb(a, function(c) {
      if (3 != ry(c)) {
        var d = c;
        if (null != d.j() || null != C(d, 51) || null != xy(d)) c = N(c), F(c, 49, void 0), F(c, 51, void 0), J(c, 81, void 0);
        b.push(c)
      }
    });
    return b
  };

  function EH() {
    this.g = ""
  }

  function FH(a) {
    return GH(a) && 0 == B(a, 40).length && void 0 == B(a, 41)
  }

  function GH(a) {
    var b = !0;
    I(a, UA, 13).forEach(function(d) {
      "me" != d.P() && (b = !1)
    });
    var c = YA(a);
    c = !c || 5 != c.getType();
    return 0 == I(a, mA, 5).length && 0 == I(a, UA, 14).length && 0 == I(a, UA, 15).length && null == B(a, 58) && !C(a, 18) && !C(a, 34) && 0 == I(a, au, 35).length && 0 == I(a, au, 38).length && c && b && 0 == B(a, 39).length && !B(a, 42) && 0 == I(a, Zt, 44).length && !fB(a) && !gB(a) && !hB(a) && 0 == I(a, vu, 57).length && HH(a) && !H(a, Xy, 59)
  }

  function HH(a) {
    return I(a, TA, 4).every(function(b) {
      return IH.test(b.P())
    })
  }

  function JH(a, b, c) {
    var d;
    if (d = !!c) d = c.F() != a.g && !mH(c);
    if (d) {
      d = !0;
      var e = I(b, TA, 4);
      if (HH(b))
        for (var f = 0; f < e.length && d; f++) {
          var g = e[f];
          if (g.P()) {
            var k = E(g, 3, !1),
              n = (B(c, 3) || "").toLowerCase(),
              p = g.P().toLowerCase();
            if (2 == B(g, 1)) n = p == n, d = d && (k ? !n : n);
            else
              for (g = p.split(/\b|_/), p = 0; p < g.length && d; p++) {
                var x = g[p];
                0 != Ec(x).length && (x = !!n.match(new RegExp("(\\b|^|_)" + String(x).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"))), d = d && (k ? !x : x))
              }
          }
        } else d = !0
    }
    if (d) {
      n = I(b, PA, 6);
      e = d = 0;
      k = f = !1;
      n = q(n);
      for (g = n.next(); !g.done; g = n.next()) p = g.value, p.P() && (g = E(p, 2, !1), x = c.ma(), p = p.P() == x, g ? (e++, k = k || p) : (d++, f = f || p));
      d = d && !f || e && k ? !1 : !0
    }
    if (d)
      for (d = !0, e = I(b, iz, 7), e = q(e), f = e.next(); !f.done; f = e.next()) f = f.value, k = B(c, 11), d = d && KH(k, f);
    if (d)
      for (d = !0, e = I(b, iz, 8), e = q(e), f = e.next(); !f.done; f = e.next()) f = f.value, k = B(c, 13), d = d && KH(k, f);
    d && (d = C(b, 9), e = (e = eB(b)) && (2 == e || 3 == e), d = null == d || d == !!C(c, 7) && (!d || 1 == B(c, 25) || e));
    d && (d = null == C(b, 10) || C(b, 10) == !!C(c, 5));
    d && (d = null == C(b, 11) || C(b, 11) == !!C(c, 6));
    if (d) a: {
      d =
      aB(b);d = q(d);
      for (e = d.next(); !e.done; e = d.next())
        if (e = e.value, e.P() && (f = "root" == e.P() && a.g || e.P(), f = B(c, 2).includes(f), E(e, 2, !1) ? f : !f)) {
          d = !1;
          break a
        } d = !0
    }
    if (a = d) a: {
      a = I(b, UA, 13);a = q(a);
      for (d = a.next(); !d.done; d = a.next())
        if (d = d.value, "me" == d.P() && (e = 1 == B(c, 25), E(d, 2, !1) ? e : !e)) {
          a = !1;
          break a
        } a = !0
    }
    a && (a = null == C(b, 16) || (C(b, 16) ? null != B(c, 23) : !0));
    a && (a = C(b, 17), d = (d = eB(b)) && (2 == d || 3 == d), a = null == a || a == !!C(c, 26) && (!a || 1 == B(c, 25) || d));
    a && (a = BH(c), a = null == C(b, 19) || C(b, 19) == !!a.j());
    a && (a = !0);
    if (a = a && LH(b, c) && MH(b,
        c)) a = cB(b), a = !a.length || a.includes(c.Z() || "");
    if (a = a && NH(b, c)) B(b, 41) ? (a = H(c, Yx, 86), a = null != a && B(b, 41) == B(a, 3)) : a = !0;
    if (a = a && OH(b, c)) a = eB(b), 1 == a ? (a = C(c, 31), a = !!aB(b).length || !!I(b, au, 35).length || 1 == C(b, 18) || fB(b) || gB(b) || hB(b) || !!B(b, 54) || null == a || a) : a = 2 == a ? !!c.Z() : !0;
    a && (a = fB(b) ? !!H(c, Rx, 100) && !C(c, 7) : !0);
    a && (a = gB(b) ? !!I(c, Jx, 107).length && !C(c, 7) : !0);
    a && (a = hB(b) ? !!I(c, Lu, 117).length && !C(c, 7) : !0);
    a && (a = null != B(b, 50) ? E(b, 50, !1) ? null != B(c, 101) && 0 !== B(c, 101) : null == B(c, 101) : !0);
    a && (b = B(b, 54), a = !b || B(c,
      120).includes(b));
    return a
  }

  function KH(a, b) {
    if (null != B(b, 2)) switch (B(b, 1)) {
      case 1:
        return a <= B(b, 2);
      case 2:
        return a < B(b, 2);
      case 3:
        return a == B(b, 2);
      case 4:
        return a > B(b, 2);
      case 5:
        return a >= B(b, 2);
      default:
        return !1
    }
    return !0
  }

  function LH(a, b) {
    var c = rc(B(b, 56));
    a = I(a, SA, 25);
    return 0 == a.length ? !0 : a.every(function(d) {
      return c[d.P()]
    })
  }

  function MH(a, b) {
    if (0 == I(a, Tx, 26).length) return !0;
    var c = rc(I(b, Tx, 60).map(function(d) {
      return B(d, 1)
    }));
    a = rc(I(a, Tx, 26).map(function(d) {
      return B(d, 1)
    }));
    return bc(a, function(d, e) {
      return c[e]
    })
  }

  function NH(a, b) {
    var c = rc(B(b, 50));
    a = I(a, lA, 37);
    return 0 == a.length ? !0 : a.every(function(d) {
      return c[d.P()]
    })
  }

  function OH(a, b) {
    if (B(a, 40).length) {
      if (b = H(b, Yx, 86)) {
        var c = rc(B(b, 2));
        return B(a, 40).some(function(d) {
          return c[d]
        })
      }
      return !1
    }
    return !0
  }
  var IH = /^[\x00-\x7F]*$/;

  function PH(a, b) {
    return QH() ? (new t.Intl.Collator([a || "en"], b || {})).compare : function(c, d) {
      return c.localeCompare(d)
    }
  }

  function QH() {
    var a = t.Intl;
    return !(!a || !a.Collator)
  };

  function RH(a) {
    var b = QH(),
      c = {};
    b && (c.numeric = b);
    this.g = PH(a, c)
  }

  function SH(a) {
    switch (a ? a.getType() : -1) {
      case 1:
        return [10];
      case 2:
        return [11];
      case 3:
        return [32];
      case 4:
        return [2];
      case 6:
        return [12];
      case 7:
        return [25];
      case 9:
        return [4];
      case 10:
        return [9];
      case 11:
        return [67];
      case 12:
        return [98];
      default:
        return null
    }
  }
  RH.prototype.j = function(a, b, c) {
    fB(a);
    b = TH(b);
    c = TH(c);
    a = YA(a);
    var d = SH(a);
    if (a && d) {
      d = UH(this, a);
      var e = 4 == a.getType() ? this.g : Tb;
      return VH(a, d, e, b, c)
    }
    return Tb(b.F(), c.F())
  };
  RH.prototype.sort = function(a, b, c) {
    fB(a);
    a = YA(a);
    var d = SH(a);
    a && d && (d = UH(this, a), d = WH(this, b, d), a = XH(this, a, d), Sb(b, a));
    c && 0 < c && Ob(b, c, b.length - c)
  };

  function TH(a) {
    return a instanceof ay ? a : a.item
  }

  function UH(a, b) {
    b = SH(b);
    return u(a.o, a, b, Tb)
  }

  function WH(a, b, c) {
    var d = {};
    vb(b, function(e) {
      e = TH(e);
      var f = e.F();
      d[f] = c(e)
    }, a);
    return d
  }

  function XH(a, b, c) {
    return u(function(d, e) {
      var f = 4 == b.getType() ? this.g : Tb;
      return VH(b, function(g) {
        return c[g.F()]
      }, f, TH(d), TH(e))
    }, a)
  }

  function VH(a, b, c, d, e) {
    var f = 1 == D(a, 2, 1) ? 1 : -1;
    if (C(a, 3)) {
      a = eH(d, !0);
      var g = eH(e, !0);
      a = a == g ? 0 : a ? -1 : 1
    } else a = 0;
    return a || f * (c(b(d), b(e)) || Tb(d.F(), e.F()))
  }
  RH.prototype.o = function(a, b, c) {
    for (var d = YH(a[0], c), e = 1; e < a.length; e++) {
      var f = YH(a[e], c);
      d = 1 == b(f, d) ? f : d
    }
    return d
  };

  function YH(a, b) {
    switch (a) {
      case 21:
        return b.F() || "";
      case 3:
        return b.ma() || "";
      case 4:
        return C(b, 5) || !1;
      case 12:
        return B(b, 13) || 0;
      case 11:
        return B(b, 12) || 0;
      case 10:
        return B(b, 11) || 0;
      case 2:
        return vd(B(b, 3) || "").toLowerCase();
      case 25:
        return B(b, 23) || 0;
      case 57:
        return B(b, 62) || 0;
      case 32:
        return B(b, 28) || 0;
      case 9:
        return B(b, 10) || 0;
      case 67:
        return B(b, 70) || 0;
      case 98:
        return B(b, 96) || 0;
      default:
        return ""
    }
  };

  function ZH(a, b, c) {
    var d = this;
    this.o = b;
    this.w = c;
    this.g = {};
    this.j = "";
    vi(a, function(e) {
      d.j = e
    })
  }
  ZH.prototype.query = function(a, b) {
    var c = this,
      d = [];
    FH(a) && (Zb(this.g, function(e) {
      JH(c.o, a, e.item) && (void 0 === b || WG(e.g, b)) && d.push(e)
    }), this.w.sort(a, d));
    return d
  };
  ZH.prototype.get = function(a) {
    return this.g[a]
  };

  function $H(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
      var e = a.g[b[d]];
      e && c.push(e)
    }
    return c
  }
  ZH.prototype.update = function(a) {
    if (a.g) {
      a.g.count++;
      a.j && a.j.count--;
      var b = a.g;
      (1 < b.count || WG(b.g, 2) || C(b.item, 26) || CH(b.item) ? 0 : "root" != b.item.F() && b.item.F() != this.j) ? (mc(this.g, a.id), a.g.count--) : this.g[a.id] = a.g
    } else mc(this.g, a.id), a.j.count--
  };

  function aI(a, b, c) {
    b = void 0 === b ? [] : b;
    c = void 0 === c ? !1 : c;
    b = oa(b).concat();
    b = bI(b);
    b = b.length ? "kind,id,name,colorRgb,backgroundImageLink,permissionsSummary,trusted,primaryDomainName,organizationDisplayName,restrictions,backgroundImageGridViewLink,backgroundImageListViewLink,hidden," + b : "kind,id,name,colorRgb,backgroundImageLink,permissionsSummary,trusted,primaryDomainName,organizationDisplayName,restrictions,backgroundImageGridViewLink,backgroundImageListViewLink,hidden";
    c = c ? "canAddChildren,canChangeDriveBackground,canComment,canCopy,canDeleteDrive,canDownload,canEdit,canManageMembers,canShare,canRename,canRenameDrive,canDeleteChildren,canTrashChildren" :
      "canAddChildren,canChangeTeamDriveBackground,canComment,canCopy,canDeleteTeamDrive,canDownload,canEdit,canManageMembers,canManageVisitors,canRemoveChildren,canRename,canRenameTeamDrive,canShareOutsideDomain,canDeleteChildren,canTrashChildren";
    E(a, 77, !1) && (c += ",canChangeCategoryReferences");
    return b + ",capabilities(" + c + ")"
  }

  function cI(a, b) {
    b = void 0 === b ? [] : b;
    return "kind,nextPageToken,items(" + aI(a, b, !1) + ")"
  }

  function bI(a) {
    return oa(new Set(a.map(function(b) {
      return dI.get(b)
    }).filter(aa()))).concat().join(",")
  }
  var dI = new Map([
    [157, "categoryReferences"],
    [5, "hidden"]
  ]);
  var eI = {
      1: "modifiedDate",
      2: "modifiedByMeDate",
      3: "quotaBytesUsed",
      4: "title",
      6: "lastViewedByMeDate",
      10: "createdDate",
      7: "sharedWithMeDate",
      9: "starred",
      11: "recency",
      5: "relevance",
      12: "trashedDate",
      13: "lastViewedByMeDate"
    },
    fI = {
      1: "asc",
      2: "desc"
    };

  function gI(a, b) {
    if (b) {
      var c = [];
      C(b, 3) && c.push("folder");
      var d = QH() && 4 == b.getType() ? "title_natural" : eI[b.getType()];
      b = fI[D(b, 2, 1)];
      d && (b && (d += " " + b), c.push(d));
      c.length && (a.orderBy = c.join(","))
    }
  };

  function hI(a, b, c, d) {
    if (c) {
      var e = [];
      (void 0 === d ? 0 : d) && e.push("not");
      e.push(iI(c));
      e.push("in");
      e.push(b);
      jI(a, e.join(" "))
    }
  }

  function iI(a) {
    return "'" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"
  }

  function jI(a, b, c) {
    a.tc.length && a.Ea(" " + (c || "and") + " ");
    a.Ea(b)
  }

  function kI(a, b, c, d) {
    d = void 0 === d ? "and" : d;
    if (null != c) {
      var e = [];
      e.push(b);
      e.push("=");
      e.push((!!c).toString());
      jI(a, e.join(" "), d)
    }
  };
  var lI = {
      Tj: ["BC", "AD"],
      No: ["Before Christ", "Anno Domini"],
      Kp: "JFMAMJJASOND".split(""),
      br: "JFMAMJJASOND".split(""),
      Yj: "January February March April May June July August September October November December".split(" "),
      gk: "January February March April May June July August September October November December".split(" "),
      dk: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      hk: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      lk: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      er: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      fk: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      dr: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      Lp: "SMTWTFS".split(""),
      cr: "SMTWTFS".split(""),
      ek: ["Q1", "Q2", "Q3", "Q4"],
      Zj: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      Mj: ["AM", "PM"],
      zo: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
      ur: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
      Ao: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
      Vj: 6,
      Ur: [5, 6],
      Wj: 5
    },
    mI = lI;
  mI = lI;

  function nI(a, b) {
    switch (b) {
      case 1:
        return 0 != a % 4 || 0 == a % 100 && 0 != a % 400 ? 28 : 29;
      case 5:
      case 8:
      case 10:
      case 3:
        return 30
    }
    return 31
  }

  function oI(a, b, c, d, e, f) {
    "string" === typeof a ? (this.j = "y" == a ? b : 0, this.g = "m" == a ? b : 0, this.o = "d" == a ? b : 0, this.w = "h" == a ? b : 0, this.A = "n" == a ? b : 0, this.B = "s" == a ? b : 0) : (this.j = a || 0, this.g = b || 0, this.o = c || 0, this.w = d || 0, this.A = e || 0, this.B = f || 0)
  }
  oI.prototype.oa = function(a) {
    return a.j == this.j && a.g == this.g && a.o == this.o && a.w == this.w && a.A == this.A && a.B == this.B
  };
  oI.prototype.clone = function() {
    return new oI(this.j, this.g, this.o, this.w, this.A, this.B)
  };
  oI.prototype.add = function(a) {
    this.j += a.j;
    this.g += a.g;
    this.o += a.o;
    this.w += a.w;
    this.A += a.A;
    this.B += a.B
  };

  function pI(a, b, c) {
    "number" === typeof a ? (this.g = qI(a, b || 0, c || 1), rI(this, c || 1)) : Ka(a) ? (this.g = qI(a.getFullYear(), a.getMonth(), a.getDate()), rI(this, a.getDate())) : (this.g = new Date(v()), a = this.g.getDate(), this.g.setHours(0), this.g.setMinutes(0), this.g.setSeconds(0), this.g.setMilliseconds(0), rI(this, a))
  }

  function qI(a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b
  }
  m = pI.prototype;
  m.hd = mI.Vj;
  m.jd = mI.Wj;
  m.clone = function() {
    var a = new pI(this.g);
    a.hd = this.hd;
    a.jd = this.jd;
    return a
  };
  m.getFullYear = function() {
    return this.g.getFullYear()
  };
  m.getMonth = function() {
    return this.g.getMonth()
  };
  m.getDate = function() {
    return this.g.getDate()
  };
  m.getTime = function() {
    return this.g.getTime()
  };
  m.getDay = function() {
    return this.g.getDay()
  };
  m.getUTCFullYear = function() {
    return this.g.getUTCFullYear()
  };
  m.getUTCMonth = function() {
    return this.g.getUTCMonth()
  };
  m.getUTCDate = function() {
    return this.g.getUTCDate()
  };
  m.getUTCDay = function() {
    return this.g.getDay()
  };
  m.getUTCHours = function() {
    return this.g.getUTCHours()
  };
  m.getUTCMinutes = function() {
    return this.g.getUTCMinutes()
  };
  m.getTimezoneOffset = function() {
    return this.g.getTimezoneOffset()
  };

  function sI(a) {
    a = a.getTimezoneOffset();
    if (0 == a) a = "Z";
    else {
      var b = Math.abs(a) / 60,
        c = Math.floor(b);
      b = 60 * (b - c);
      a = (0 < a ? "-" : "+") + Dd(c) + ":" + Dd(b)
    }
    return a
  }
  m.set = function(a) {
    this.g = new Date(a.getFullYear(), a.getMonth(), a.getDate())
  };
  m.setFullYear = function(a) {
    this.g.setFullYear(a)
  };
  m.setMonth = function(a) {
    this.g.setMonth(a)
  };
  m.setDate = function(a) {
    this.g.setDate(a)
  };
  m.setTime = function(a) {
    this.g.setTime(a)
  };
  m.setUTCFullYear = function(a) {
    this.g.setUTCFullYear(a)
  };
  m.setUTCMonth = function(a) {
    this.g.setUTCMonth(a)
  };
  m.setUTCDate = function(a) {
    this.g.setUTCDate(a)
  };
  m.add = function(a) {
    if (a.j || a.g) {
      var b = this.getMonth() + a.g + 12 * a.j,
        c = this.getFullYear() + Math.floor(b / 12);
      b %= 12;
      0 > b && (b += 12);
      var d = Math.min(nI(c, b), this.getDate());
      this.setDate(1);
      this.setFullYear(c);
      this.setMonth(b);
      this.setDate(d)
    }
    a.o && (b = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.o), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), rI(this, a.getDate()))
  };
  m.Vd = function(a) {
    return [this.getFullYear(), Dd(this.getMonth() + 1), Dd(this.getDate())].join(a ? "-" : "")
  };
  m.oa = function(a) {
    return !(!a || this.getFullYear() != a.getFullYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
  };
  m.toString = function() {
    return this.Vd()
  };

  function rI(a, b) {
    a.getDate() != b && a.g.setUTCHours(a.g.getUTCHours() + (a.getDate() < b ? 1 : -1))
  }
  m.valueOf = function() {
    return this.g.valueOf()
  };

  function tI(a, b, c, d, e, f, g) {
    this.g = "number" === typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : v())
  }
  w(tI, pI);
  m = tI.prototype;
  m.getHours = function() {
    return this.g.getHours()
  };
  m.getMinutes = function() {
    return this.g.getMinutes()
  };
  m.getSeconds = function() {
    return this.g.getSeconds()
  };
  m.getMilliseconds = function() {
    return this.g.getMilliseconds()
  };
  m.getUTCDay = function() {
    return this.g.getUTCDay()
  };
  m.getUTCHours = function() {
    return this.g.getUTCHours()
  };
  m.getUTCMinutes = function() {
    return this.g.getUTCMinutes()
  };
  m.getUTCSeconds = function() {
    return this.g.getUTCSeconds()
  };
  m.getUTCMilliseconds = function() {
    return this.g.getUTCMilliseconds()
  };
  m.setHours = function(a) {
    this.g.setHours(a)
  };
  m.setMinutes = function(a) {
    this.g.setMinutes(a)
  };
  m.setSeconds = function(a) {
    this.g.setSeconds(a)
  };
  m.setMilliseconds = function(a) {
    this.g.setMilliseconds(a)
  };
  m.setUTCHours = function(a) {
    this.g.setUTCHours(a)
  };
  m.setUTCMinutes = function(a) {
    this.g.setUTCMinutes(a)
  };
  m.setUTCSeconds = function(a) {
    this.g.setUTCSeconds(a)
  };
  m.setUTCMilliseconds = function(a) {
    this.g.setUTCMilliseconds(a)
  };
  m.add = function(a) {
    pI.prototype.add.call(this, a);
    a.w && this.setUTCHours(this.g.getUTCHours() + a.w);
    a.A && this.setUTCMinutes(this.g.getUTCMinutes() + a.A);
    a.B && this.setUTCSeconds(this.g.getUTCSeconds() + a.B)
  };
  m.Vd = function(a) {
    var b = pI.prototype.Vd.call(this, a);
    return a ? b + "T" + Dd(this.getHours()) + ":" + Dd(this.getMinutes()) + ":" + Dd(this.getSeconds()) : b + "T" + Dd(this.getHours()) + Dd(this.getMinutes()) + Dd(this.getSeconds())
  };

  function uI(a) {
    return pI.prototype.Vd.call(a, !0) + "T" + Dd(a.getHours()) + ":" + Dd(a.getMinutes()) + ":" + Dd(a.getSeconds()) + sI(a)
  }
  m.oa = function(a) {
    return this.getTime() == a.getTime()
  };
  m.toString = function() {
    return this.Vd()
  };
  m.clone = function() {
    var a = new tI(this.g);
    a.hd = this.hd;
    a.jd = this.jd;
    return a
  };

  function vI(a, b, c, d, e, f, g) {
    a = "number" === typeof a ? Date.UTC(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : a ? a.getTime() : v();
    this.g = new Date(a)
  }
  w(vI, tI);

  function wI(a) {
    var b = new vI;
    b.setTime(a);
    return b
  }
  m = vI.prototype;
  m.clone = function() {
    var a = new vI(this.g);
    a.hd = this.hd;
    a.jd = this.jd;
    return a
  };
  m.add = function(a) {
    (a.j || a.g) && pI.prototype.add.call(this, new oI(a.j, a.g));
    this.g = new Date(this.g.getTime() + 1E3 * (a.B + 60 * (a.A + 60 * (a.w + 24 * a.o))))
  };
  m.getTimezoneOffset = ca(0);
  m.getFullYear = tI.prototype.getUTCFullYear;
  m.getMonth = tI.prototype.getUTCMonth;
  m.getDate = tI.prototype.getUTCDate;
  m.getHours = tI.prototype.getUTCHours;
  m.getMinutes = tI.prototype.getUTCMinutes;
  m.getSeconds = tI.prototype.getUTCSeconds;
  m.getMilliseconds = tI.prototype.getUTCMilliseconds;
  m.getDay = tI.prototype.getUTCDay;
  m.setFullYear = tI.prototype.setUTCFullYear;
  m.setMonth = tI.prototype.setUTCMonth;
  m.setDate = tI.prototype.setUTCDate;
  m.setHours = tI.prototype.setUTCHours;
  m.setMinutes = tI.prototype.setUTCMinutes;
  m.setSeconds = tI.prototype.setUTCSeconds;
  m.setMilliseconds = tI.prototype.setUTCMilliseconds;

  function xI(a) {
    for (var b = new lG, c = I(a, TA, 4), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.P();
      if (f) {
        var g = B(e, 1),
          k = E(e, 3, !1),
          n = [];
        k && 1 == g && n.push("not");
        n.push("title");
        n.push(1 == g ? "contains" : k ? "!=" : "=");
        n.push(iI(f));
        jI(b, n.join(" "))
      }
    }
    for (var p = I(a, mA, 5), x = 0; x < p.length; x++) {
      var A = p[x],
        G = A.P();
      if (G) {
        var K = [];
        E(A, 2, !1) && K.push("not");
        K.push("fullText");
        K.push("contains");
        K.push(iI(G));
        jI(b, K.join(" "))
      }
    }
    var fa = I(a, PA, 6);
    if (fa && 0 != fa.length) {
      for (var Ua = [], Jb = [], ke = 0; ke < fa.length; ke++) {
        var fb = fa[ke];
        fb.P() && (E(fb,
          2, !1) ? Jb.push(fb) : Ua.push(fb))
      }
      for (var Ic = 0; Ic < Ua.length; Ic++) {
        var U2 = yI(Ua[Ic], 0 == Ic ? "(" : "", Ic == Ua.length - 1 ? ")" : "");
        jI(b, U2, 0 != Ic ? "or" : "and")
      }
      for (var Dn = 0; Dn < Jb.length; Dn++) jI(b, yI(Jb[Dn], 0 == Dn ? "(" : "", Dn == Jb.length - 1 ? ")" : ""))
    }
    for (var TL = I(a, iz, 7), jz = 0; jz < TL.length; jz++) zI(b, "modifiedDate", TL[jz]);
    for (var VL = I(a, iz, 8), kz = 0; kz < VL.length; kz++) zI(b, "lastViewedByMeDate", VL[kz]);
    kI(b, "trashed", C(a, 9));
    kI(b, "explicitlyTrashed", C(a, 17));
    kI(b, "starred", C(a, 10));
    kI(b, "hidden", C(a, 11));
    for (var WL = aB(a), lz =
        0; lz < WL.length; lz++) {
      var XL = WL[lz];
      hI(b, "parents", XL.P(), E(XL, 2, !1))
    }
    for (var YL = I(a, UA, 13), mz = 0; mz < YL.length; mz++) {
      var ZL = YL[mz];
      hI(b, "owners", ZL.P(), E(ZL, 2, !1))
    }
    for (var $L = I(a, UA, 14), nz = 0; nz < $L.length; nz++) {
      var aM = $L[nz];
      hI(b, "writers", aM.P(), E(aM, 2, !1))
    }
    for (var bM = I(a, UA, 15), oz = 0; oz < bM.length; oz++) {
      var cM = bM[oz];
      hI(b, "readers", cM.P(), E(cM, 2, !1))
    }
    C(a, 16) && jI(b, "sharedWithMe");
    kI(b, "unparented", C(a, 34));
    AI(b, a);
    BI(b, a);
    CI(b, a);
    DI(b, a);
    for (var pz = B(a, 40), bk = 0; bk < pz.length; bk++) {
      var ck = [];
      0 == bk && ck.push("(");
      ck.push(iI(pz[bk]));
      ck.push("in");
      ck.push("templateData.categories");
      bk == pz.length - 1 && ck.push(")");
      jI(b, ck.join(" "), 0 == bk ? "and" : "or")
    }
    var dM = B(a, 41);
    if (null != dM) {
      var vs = [];
      vs.push("templateData.galleryState");
      vs.push("=");
      vs.push(iI(EI[dM] || ""));
      jI(b, vs.join(" "))
    }
    var eM = B(a, 42);
    if (null != eM) {
      var ws = [];
      ws.push("visibility");
      ws.push("=");
      ws.push(iI(FI(eM)));
      jI(b, ws.join(" "))
    }
    for (var fM = I(a, Zt, 44), qz = 0; qz < fM.length; ++qz) {
      var gM = fM[qz];
      hI(b, "actionItems", GI(gM), E(gM, 3, !1))
    }
    if (null != B(a, 50)) {
      var xs = [];
      xs.push("pairedDocType");
      var b3 = E(a, 50, !1) ? "!=" : "=";
      xs.push(b3);
      xs.push(iI("NONE"));
      jI(b, xs.join(" "))
    }
    hI(b, "workspaceIds", B(a, 54), !1);
    for (var rz = I(a, vu, 57), dk = 0; dk < rz.length; dk++) {
      var ek = [];
      0 == dk && ek.push("(");
      ek.push(iI(rz[dk].P()));
      ek.push("in");
      ek.push("approvals");
      dk == rz.length - 1 && ek.push(")");
      jI(b, ek.join(" "), 0 == dk ? "and" : "or")
    }
    if (null != B(a, 58)) {
      var hM = H(a, UA, 58),
        iM = hM.P(),
        c3 = E(hM, 2, !1);
      if (iM) {
        var En = [];
        c3 && En.push("not");
        En.push("creator");
        En.push("=");
        En.push(iI(iM));
        jI(b, En.join(" "))
      }
    }
    var jM =
      H(a, Xy, 59);
    if (jM)
      for (var kM = q(I(jM, Vy, 1)), sz = kM.next(); !sz.done; sz = kM.next()) {
        var lM = sz.value;
        hI(b, "categoryMetadata", lM.Wa());
        for (var mM = q(I(lM, hx, 2)), tz = mM.next(); !tz.done; tz = mM.next()) {
          var fc = tz.value,
            fd = B(fc, 1),
            nM = Ne(fc, ix[0]);
          if (10 == nM) {
            var oM = b;
            H(fc, Zw, 10);
            var pM = C(fc, 15);
            (void 0 === pM ? 0 : pM) ? jI(oM, fd + " is null"): jI(oM, "not (" + fd + " is null)")
          } else {
            var Kc = new lG,
              gd = void 0;
            switch (nM) {
              case 3:
                gd = H(fc, Nw, 3);
                for (var qM = q(gd.j()), uz = qM.next(); !uz.done; uz = qM.next()) kI(Kc, fd, uz.value, "or");
                break;
              case 14:
                for (var rM =
                    gd = H(fc, Pw, 14), d3 = new Map([
                      [1, "="],
                      [2, ">"],
                      [3, "<"]
                    ]), sM = q(rM.j()), vz = sM.next(); !vz.done; vz = sM.next()) {
                  var wz = vz.value,
                    tM = d3.get(B(rM, 2));
                  if (!tM) throw Error("Unsupported operator");
                  var e3 = [fd, tM, iI(B(wz, 1) + "-" + wz.getMonth() + "-" + wz.getDay())];
                  jI(Kc, e3.join(" "), "or")
                }
                break;
              case 8:
                for (var uM = gd = H(fc, Xw, 8), f3 = new Map([
                    [1, "="],
                    [2, ">"],
                    [3, "<"]
                  ]), vM = q(uM.j()), xz = vM.next(); !xz.done; xz = vM.next()) {
                  var g3 = xz.value,
                    wM = f3.get(B(uM, 2));
                  if (!wM) throw Error("Unsupported operator");
                  jI(Kc, [fd, wM, g3].join(" "), "or")
                }
                break;
              case 9:
                for (var xM = gd = H(fc, Vw, 9), h3 = new Map([
                    [1, "in"]
                  ]), yM = q(xM.j()), yz = yM.next(); !yz.done; yz = yM.next()) {
                  var i3 = yz.value,
                    zM = h3.get(B(xM, 2));
                  if (!zM) throw Error("Unsupported operator");
                  jI(Kc, [i3, zM, fd].join(" "), "or")
                }
                break;
              case 6:
                for (var AM = gd = H(fc, bx, 6), j3 = new Map([
                    [1, "="]
                  ]), BM = q(AM.j()), zz = BM.next(); !zz.done; zz = BM.next()) {
                  var k3 = zz.value,
                    CM = j3.get(B(AM, 2));
                  if (!CM) throw Error("Unsupported operator");
                  jI(Kc, [fd, CM, iI(k3)].join(" "), "or")
                }
                break;
              case 7:
                for (var DM = gd = H(fc, $w, 7), l3 = new Map([
                      [1, "in"]
                    ]), EM =
                    q(DM.j()), Az = EM.next(); !Az.done; Az = EM.next()) {
                  var m3 = Az.value,
                    FM = l3.get(B(DM, 2));
                  if (!FM) throw Error("Unsupported operator");
                  jI(Kc, [iI(m3), FM, fd].join(" "), "or")
                }
                break;
              case 4:
                for (var GM = gd = H(fc, fx, 4), n3 = new Map([
                    [1, "="],
                    [2, "contains"],
                    [3, "starts with"]
                  ]), HM = q(GM.j()), Bz = HM.next(); !Bz.done; Bz = HM.next()) {
                  var o3 = Bz.value,
                    IM = n3.get(B(GM, 2));
                  if (!IM) throw Error("Unsupported operator");
                  jI(Kc, [fd, IM, iI(o3)].join(" "), "or")
                }
                break;
              case 5:
                for (var JM = gd = H(fc, dx, 5), p3 = new Map([
                    [1, "in"]
                  ]), KM = q(JM.j()), Cz = KM.next(); !Cz.done; Cz =
                  KM.next()) {
                  var q3 = Cz.value,
                    LM = p3.get(B(JM, 2));
                  if (!LM) throw Error("Unsupported operator");
                  jI(Kc, [iI(q3), LM, fd].join(" "), "or")
                }
                break;
              case 12:
                for (var MM = gd = H(fc, Tw, 12), r3 = new Map([
                    [1, "="]
                  ]), NM = q(MM.j()), Dz = NM.next(); !Dz.done; Dz = NM.next()) {
                  var s3 = Dz.value,
                    OM = r3.get(B(MM, 2));
                  if (!OM) throw Error("Unsupported operator");
                  jI(Kc, [fd, OM, iI(s3)].join(" "), "or")
                }
                break;
              case 11:
                for (var PM = gd = H(fc, Rw, 11), t3 = new Map([
                    [1, "in"]
                  ]), QM = q(PM.j()), Ez = QM.next(); !Ez.done; Ez = QM.next()) {
                  var u3 = Ez.value,
                    RM = t3.get(B(PM, 2));
                  if (!RM) throw Error("Unsupported operator");
                  jI(Kc, [iI(u3), RM, fd].join(" "), "or")
                }
            }
            C(fc, 15) ? jI(b, "not (" + Kc + ")") : jI(b, 1 < gd.j().length ? "(" + Kc + ")" : "" + Kc)
          }
        }
      }
    1 == eB(a) && HI(b, a);
    return b.toString()
  }

  function II(a) {
    var b = new lG(xI(a));
    fB(a) ? jI(b, "isQuickAccessRequest") : gB(a) ? jI(b, "isPeoplePredictRequest") : hB(a) && jI(b, "isDrivePriorityRequest");
    var c = YA(a);
    if (c) {
      var d = [];
      d.push("sortBy");
      d.push(eI[c.getType()]);
      d.push(JI[D(c, 2, 1)]);
      C(c, 3) && d.push("foldersFirst");
      jI(b, d.join(" "))
    }
    kI(b, "domainSearch", C(a, 18));
    kI(b, "offline", C(a, 19));
    I(a, SA, 25).length && (c = [], c.push("sources"), c.push("contains"), c.push(KI(a)), jI(b, c.join(" ")));
    I(a, Tx, 26).length && (c = [], c.push("spaces"), c.push("contains"), c.push(LI(a)),
      jI(b, c.join(" ")));
    if (c = eB(a)) d = [], d.push("corpora"), d.push("="), d.push(iI(aH[c])), jI(b, d.join(" "));
    1 != eB(a) && HI(b, a);
    E(a, 48, !1) && jI(b, "cachedOnly");
    return b.toString()
  }

  function KI(a) {
    a = I(a, SA, 25);
    if (null == a || 0 == a.length) return "";
    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].P());
    return b.join(",")
  }

  function LI(a) {
    a = I(a, Tx, 26);
    return null == a || 0 == a.length ? "" : yb(a, function(b) {
      b = B(b, 1);
      if (0 == b) throw Error("Unsupported space UNKNOWN. Please set a space value on the SpaceSpec.");
      return $G[b]
    }).join(",")
  }

  function yI(a, b, c) {
    b = void 0 === b ? "" : b;
    c = void 0 === c ? "" : c;
    var d = [],
      e = iI(a.P());
    C(a, 4) ? (E(a, 2, !1) && d.push("not"), d.push("shortcutDetails.targetMimeType")) : (E(a, 2, !1) && d.push("not"), d.push("mimeType"));
    d.push("=");
    d.push(e);
    d[0] = b + d[0];
    d[d.length - 1] += c;
    return d.join(" ")
  }

  function GI(a) {
    if (C(a, 2)) return "any";
    switch (a.P()) {
      case 0:
        return "mentions";
      case 1:
        return "suggestions";
      case 2:
        return "todos";
      default:
        return ""
    }
  }

  function HI(a, b) {
    b = cB(b)[0];
    if (null != b) {
      var c = [];
      c.push("teamDriveId");
      c.push("=");
      c.push(iI(b));
      jI(a, c.join(" "))
    }
  }

  function zI(a, b, c) {
    if (null != B(c, 2)) {
      var d = MI(B(c, 1));
      c = iI(uI(wI(B(c, 2) || 0)));
      jI(a, [b, d, c].join(" "))
    }
  }

  function AI(a, b) {
    b = I(b, au, 35) || [];
    vb(b, function(c) {
      hI(a, "ancestors", c.P(), !1)
    })
  }

  function BI(a, b) {
    b = I(b, au, 38) || [];
    vb(b, function(c) {
      hI(a, "descendants", c.P(), !1)
    })
  }

  function CI(a, b) {
    b = I(b, lA, 37) || [];
    vb(b, function(c) {
      hI(a, "folderFeatures", c.P(), !1)
    })
  }

  function DI(a, b) {
    b = B(b, 39);
    vb(b, function(c) {
      var d = [];
      d.push("templateData.description");
      d.push("contains");
      d.push(iI(c));
      jI(a, d.join(" "))
    })
  }

  function MI(a) {
    switch (a) {
      case 1:
        return "<=";
      case 2:
        return "<";
      case 3:
        return "=";
      case 4:
        return ">";
      case 5:
        return ">=";
      default:
        return ""
    }
  }

  function FI(a) {
    switch (a) {
      case 1:
        return "anyoneCanFind";
      case 2:
        return "anyoneWithLink";
      case 3:
        return "domainCanFind";
      case 4:
        return "domainWithLink";
      case 5:
        return "limited"
    }
    return ""
  }
  var EI = {
      1: "0",
      2: "1",
      3: "2"
    },
    JI = {
      1: "asc",
      2: "desc"
    };

  function NI(a) {
    var b = new lG;
    kI(b, "hidden", C(a, 4));
    return b.toString()
  };
  var OI = {},
    PI = (OI[1] = {
        "application/bzip2": !0,
        "application/gzip": !0,
        "application/gzip-compressed": !0,
        "application/gzipped": !0,
        "application/rar": !0,
        "application/tar": !0,
        "application/x-bzip": !0,
        "application/x-bzip-compressed-tar": !0,
        "application/x-bzip2": !0,
        "application/x-gtar": !0,
        "application/x-gtar-compressed": !0,
        "application/x-gunzip": !0,
        "application/x-gzip": !0,
        "application/x-gzip-compressed": !0,
        "application/x-rar": !0,
        "application/x-tar": !0,
        "application/x-tgz": !0,
        "application/x-zip": !0,
        "application/x-zip-compressed": !0,
        "application/zip": !0,
        "gzip/document": !0,
        "multipart/x-gzip": !0,
        "multipart/x-rar": !0,
        "multipart/x-tar": !0,
        "multipart/x-zip": !0,
        "multipart/zip": !0
      }, OI[2] = {
        "audio/3gp": !0,
        "audio/midi": !0,
        "audio/mp4a-latm": !0,
        "audio/mpeg": !0,
        "audio/mpeg3": !0,
        "audio/ogg": !0,
        "audio/x-ms-wma": !0,
        "audio/x-wav": !0,
        "audio/wav": !0
      }, OI[3] = {
        "text/plain": !0,
        "application/msword": !0,
        "application/vnd.ms-word": !0,
        "application/vnd.oasis.opendocument.text": !0,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": !0,
        "application/vnd.google-apps.document": !0,
        "application/vnd.google-apps.kix": !0
      }, OI[4] = {
        "application/vnd.oasis.opendocument.graphics": !0,
        "image/vnd.adobe.photoshop": !0,
        "image/x-photoshop": !0,
        "application/illustrator": !0,
        "application/vnd.google-apps.drawing": !0
      }, OI[19] = {
        "application/vnd.google-apps.drive-sdk.770102487694": !0,
        "application/vnd.google-apps.earth": !0
      }, OI[5] = {
        "application/vnd.google-apps.folder": !0
      }, OI[6] = {
        "application/vnd.google-apps.form": !0,
        "application/vnd.google-apps.freebird": !0
      },
      OI[7] = {
        "image/jpeg": !0,
        "image/png": !0,
        "image/gif": !0,
        "image/tiff": !0,
        "image/x-ms-bmp": !0,
        "image/svg+xml": !0,
        "image/vnd.microsoft.icon": !0,
        "image/heif": !0,
        "image/heic": !0
      }, OI[17] = {
        "application/vnd.google-apps.jam": !0
      }, OI[15] = {
        "application/vnd.google-apps.drive-sdk.796396377186": !0,
        "application/vnd.google-apps.map": !0
      }, OI[9] = {
        "application/pdf": !0
      }, OI[10] = {
        "application/mspowerpoint": !0,
        "application/vnd.ms-powerpoint": !0,
        "application/vnd.oasis.opendocument.presentation": !0,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": !0,
        "application/vnd.google-apps.presentation": !0,
        "application/vnd.google-apps.punch": !0
      }, OI[11] = {
        "application/vnd.google-apps.script": !0
      }, OI[18] = {
        "application/vnd.google-apps.shortcut": !0
      }, OI[16] = {
        "application/vnd.google-apps.drive-sdk.897606708560": !0,
        "application/vnd.google-apps.site": !0
      }, OI[12] = {
        "application/msexcel": !0,
        "application/vnd.ms-excel": !0,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": !0,
        "application/vnd.oasis.opendocument.spreadsheet": !0,
        "application/vnd.google-apps.spreadsheet": !0,
        "application/vnd.google-apps.ritz": !0
      }, OI[13] = {
        "application/vnd.google-apps.fusiontable": !0
      }, OI[14] = {
        "video/3gpp": !0,
        "video/avi": !0,
        "video/dv": !0,
        "video/flv": !0,
        "video/mkv": !0,
        "video/mp2p": !0,
        "video/mp2t": !0,
        "video/mp4": !0,
        "video/mpeg": !0,
        "video/mpv": !0,
        "video/ogg": !0,
        "video/quicktime": !0,
        "video/x-flv": !0,
        "video/x-msvideo": !0,
        "video/x-ms-wmv": !0,
        "video/x-m4v": !0,
        "video/x-ms-asf": !0,
        "video/x-matroska": !0,
        "video/x-dv": !0,
        "video/webm": !0
      }, OI);

  function QI(a, b) {
    this.j = a;
    this.j.sort();
    this.g = b;
    this.o = ""
  }

  function RI(a, b, c) {
    b = N(b);
    "root" == b.F() && F(b, 3, a.o);
    aB(b).filter(function(d) {
      return "root" == d.P()
    }).forEach(function(d) {
      return F(d, 1, a.o)
    });
    ZA(b, I(b, PA, 6).map(function(d) {
      var e = d.P().toLowerCase();
      F(d, 1, e);
      return d
    }));
    c && XA(b, a.j);
    b.ja().sort();
    return b
  }

  function SF(a, b, c) {
    if (b instanceof VA) {
      b = RI(a, b);
      var d = II(b)
    } else if (b instanceof hA) d = b.qa().sort().join(","), E(b, 5, !1) && (d += "|cachedOnly");
    else {
      if (b instanceof DC) return d = NI(b), d + "|tdList";
      if (b instanceof BC) return d = b.qa().sort().join(","), b.ja().length && (d += "|" + bI(b.ja())), d + "|tdMap";
      throw Error("Unsupported query type.");
    }
    return 3 == c ? d : d + "|" + SI(a, b.ja(), 2 == c)
  }

  function SI(a, b, c) {
    var d = "default",
      e = new Set(b),
      f = new Set(a.j);
    if (0 == b.length) return d;
    c ? (f.forEach(function(g) {
      return e.delete(g)
    }), f.clear()) : oa(e).concat().filter(function(g) {
      return f.has(g)
    }).forEach(function(g) {
      e.delete(g);
      f.delete(g)
    });
    f.size && (d = d + " - " + sG({
      bb: oa(f).concat(),
      $a: a.g
    }));
    e.size && (d = d + " + " + sG({
      bb: oa(e).concat(),
      $a: a.g
    }));
    return d
  }
  QI.prototype.oa = function(a, b, c) {
    var d;
    c && (d = 3);
    return SF(this, a, d) == SF(this, b, d)
  };

  function TI(a) {
    if (!a.qa().every(function(b) {
        return !Dc(b)
      })) throw new V("Invalid ids for FindByIdsRequest");
  }

  function UI(a, b, c) {
    if (gB(b)) throw new V("Did not expect a PeoplePredict request. Use peoplePredictQuery() for PeoplePredict requests. ");
    var d = xF(3);
    if (b.F()) throw new V("Use findByIds() for find by id queries.", d);
    if (!b.ca() || 0 >= b.ca()) throw new V("A positive limit is required on an ItemQueryRequest.", d);
    cB(b);
    d = a.j.slice();
    c && (d = d.concat(c));
    VI(a, d, b.ja());
    if (c = (c = YA(b)) && SH(c)) d = b.ja().length ? b.ja() : a.j, VI(a, d, c);
    if (fB(b)) {
      if (a.g) throw new V("User must be authenticated for a Quick Access request.");
      if (20 < b.ca()) throw new V("Limit must be in the range [1, 20].");
      c = 2 == eB(b);
      d = cB(b).length;
      if (c && 1 != d || d && !c) throw new V("A Team Drive Quick Access request must specify the Team Drive corpora and a single Team Drive id.");
      c = XA(b.clone(), []);
      c = J(c, 30, void 0);
      c = ZA(F(F(dB(F(c, 32, void 0), []), 45, void 0), 47, void 0), []);
      d = new VA;
      if (!Ze(c, d)) throw new V("Some fields specified are not valid for a Quick Access request. Valid: field, request_descriptor, limit, team_drive, corpora, is_quick_access_request and mime_type. Extra: " +
        Xe(d, c));
    }
    if (hB(b)) {
      if (a.g) throw new V("User must be authenticated for a DrivePriority request.");
      if (2 == eB(b)) throw new V("Team Drive corpora is not valid for a Drive Priority request.");
      a = XA(b.clone(), []);
      a = J(a, 30, void 0);
      a = F(F(F(a, 32, void 0), 45, void 0), 52, void 0);
      b = new VA;
      if (!Ze(a, b)) throw new V("Some fields specified are not valid for a Drive Priority request. Valid: field, request_descriptor, limit, corpora and is_drive_priority_request. Extra: " + Xe(b, a));
    }
  }

  function VI(a, b, c) {
    var d = xF(3);
    if (!BG(c, b)) {
      var e = sG({
          bb: c,
          $a: a.g
        }),
        f = sG({
          bb: b,
          $a: a.g
        });
      a = sG({
        bb: EG(c, b),
        $a: a.g
      });
      throw new V("Requested field was not previously specified. Needed " + e + ", but had " + (f + ". Missing: " + a + "."), d);
    }
  }

  function WI(a) {
    if (a instanceof mB) a = a.T();
    else if (!a) return !1;
    return a instanceof RB || a instanceof VA && (fB(a) || gB(a) || hB(a))
  }

  function XI(a) {
    var b = new Set;
    I(a, PA, 6).forEach(function(c) {
      Object.keys(PI[7]).includes(c.P()) ? b.add("IMAGE_ALL") : Object.keys(PI[2]).includes(c.P()) ? b.add("AUDIO_ALL") : Object.keys(PI[14]).includes(c.P()) ? b.add("VIDEO_ALL") : Object.keys(PI[4]).includes(c.P()) ? b.add("DRAWING_ALL") : Object.keys(PI[10]).includes(c.P()) ? b.add("PRESENTATION_ALL") : Object.keys(PI[12]).includes(c.P()) ? b.add("SPREADSHEET_ALL") : Object.keys(PI[3]).includes(c.P()) ? b.add("DOCUMENT_ALL") : Object.keys(PI[6]).includes(c.P()) && b.add("FORM_ALL")
    });
    return oa(b).concat()
  }

  function YI(a) {
    switch (rD(a)) {
      case 3:
      case 12:
      case 204:
        return "GOOGLE_DOCS";
      case 4:
      case 13:
      case 207:
        return "GOOGLE_SHEETS";
      case 5:
      case 14:
      case 205:
      case 208:
        return "GOOGLE_SLIDES";
      case 6:
      case 203:
        return "GOOGLE_FORMS";
      case 8:
      case 201:
        return "GOOGLE_SITES";
      case 216:
        return "GOOGLE_CLASSROOM";
      case 202:
      case 1:
      case 9:
        return "GOOGLE_DRIVE";
      default:
        return "UNSPECIFIED_APPLICATION"
    }
  };

  function ZI(a, b, c, d) {
    this.j = a;
    this.w = b;
    this.g = c;
    this.o = d
  }

  function $I(a, b) {
    return (b = a.g.get(b)) ? (b = b.clone(), wH(a.o, [b.item], LG(a.j)), b) : null
  }

  function rH(a, b) {
    return (a = $I(a, b)) ? a.item : null
  }

  function aJ(a, b) {
    var c = {};
    b.forEach(function(d) {
      var e = $I(a, d);
      e && (c[d] = e)
    });
    return c
  }

  function bJ(a, b) {
    return ac(aJ(a, b), function(c) {
      return c.item
    })
  }

  function cJ(a, b) {
    b = RI(a.w, b);
    return a.g.query(b).map(function(c) {
      return c.clone()
    })
  }
  ZI.prototype.query = function(a) {
    return cJ(this, a).map(function(b) {
      return b.item
    })
  };

  function dJ(a) {
    var b = new Set;
    a = q(Object.values(a.g.g));
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value.item;
      for (var d = q(I(c, Ht, 15)), e = d.next(); !e.done; e = d.next()) e = e.value, b.add(e.F() || B(e, 11));
      (d = H(c, Ht, 17)) && b.add(d.F() || B(d, 11));
      (d = H(c, Ht, 47)) && b.add(d.F() || B(d, 11));
      (d = H(c, Ht, 91)) && b.add(d.F() || B(d, 11));
      (c = H(c, Ht, 95)) && b.add(c.F() || B(c, 11))
    }
    return b.size
  };

  function eJ(a) {
    this.g = a
  }
  eJ.prototype.F = l("g");

  function fJ(a) {
    z(this, a, -1, null, null)
  }
  w(fJ, y);

  function gJ(a) {
    z(this, a, -1, null, null)
  }
  w(gJ, y);

  function hJ(a) {
    z(this, a, -1, null, null)
  }
  w(hJ, y);

  function iJ() {
    this.w = this.g = null
  }

  function jJ(a, b, c) {
    a.g = b;
    a.w = c;
    return a
  }

  function kJ(a, b) {
    var c = a.w.j[b.F()];
    b.F();
    b = c.eg();
    jJ(b, a.g, a.w);
    return b
  }

  function lJ(a) {
    var b = H(a.g, Uq, 5);
    null == b && (b = new Uq, J(a.g, 5, b));
    return b
  }

  function mJ(a) {
    B(a.g, 10);
    null != B(a.g, 6) || B(a.g, 10);
    2 == B(H(a.g, fJ, 8), 3) && null != B(a.g, 13) && B(H(H(a.g, fJ, 8), hJ, 2), 2);
    var b = H(a.g, Uq, 5);
    null != b && (b = N(b), J(a.g, 5, b));
    return a.g
  };

  function nJ() {
    iJ.call(this);
    this.o = this.j = null
  }
  r(nJ, iJ);

  function oJ(a) {
    (0, a.o)()
  }

  function pJ(a, b) {
    a.o || (a.o = b)
  }

  function qJ(a) {
    if (!a.j) {
      a.j = new xq;
      var b = lJ(a);
      J(b, 56, a.j)
    }
    return a.j
  }

  function rJ(a) {
    var b = qJ(a).T();
    b || (b = new yq, a = qJ(a), J(a, 1, b));
    return b
  }

  function sJ(a) {
    var b = H(qJ(a), zq, 2);
    b || (b = new zq, a = qJ(a), J(a, 2, b));
    return b
  }

  function tJ(a) {
    var b = H(qJ(a), Aq, 3);
    b || (b = new Aq, a = qJ(a), J(a, 3, b));
    return b
  }
  var uJ = new eJ("drive_dataservice_builder");

  function vJ(a) {
    z(this, a, -1, null, null)
  }
  w(vJ, y);

  function wJ(a) {
    z(this, a, -1, null, null)
  }
  w(wJ, y);

  function xJ(a) {
    z(this, a, -1, null, null)
  }
  w(xJ, y);
  wJ.prototype.Qb = function(a) {
    return J(this, 5, a)
  };
  wJ.prototype.ma = function() {
    return B(this, 7)
  };

  function yJ(a) {
    z(this, a, -1, null, null)
  }
  w(yJ, y);

  function zJ(a) {
    z(this, a, -1, null, null)
  }
  w(zJ, y);

  function AJ(a) {
    z(this, a, -1, null, null)
  }
  w(AJ, y);

  function BJ(a) {
    z(this, a, -1, null, null)
  }
  w(BJ, y);
  BJ.prototype.Xb = function() {
    return B(this, 5)
  };

  function CJ(a) {
    z(this, a, -1, null, null)
  }
  w(CJ, y);

  function DJ(a) {
    z(this, a, -1, null, null)
  }
  w(DJ, y);

  function EJ(a) {
    z(this, a, -1, null, null)
  }
  w(EJ, y);

  function FJ(a) {
    z(this, a, -1, null, null)
  }
  w(FJ, y);

  function GJ(a) {
    z(this, a, -1, null, null)
  }
  w(GJ, y);

  function HJ(a) {
    z(this, a, -1, IJ, null)
  }
  w(HJ, y);
  var IJ = [1];

  function JJ(a, b, c) {
    if ("number" === typeof a) var d = {
      name: KJ(a)
    };
    else d = a, a = LJ(a.name);
    this.code = a;
    this.kg = d;
    b = "Error " + b + ": " + (this.kg.name || "");
    c && (b += ", " + c);
    Wa.call(this, b)
  }
  w(JJ, Wa);
  var MJ = {
      kk: 1,
      Mp: 2,
      NOT_FOUND_ERR: 3,
      Pj: 4,
      Rj: 5,
      Np: 6,
      jk: 7,
      ABORT_ERR: 8,
      ak: 9,
      Br: 10,
      TIMEOUT_ERR: 11,
      $j: 12,
      INVALID_ACCESS_ERR: 13,
      INVALID_STATE_ERR: 14
    },
    NJ = (t.ec || t.zc || MJ).kk,
    OJ = (t.ec || t.zc || MJ).NOT_FOUND_ERR,
    PJ = (t.ec || t.zc || MJ).Pj,
    QJ = (t.ec || t.zc || MJ).Rj,
    RJ = (t.ec || t.zc || MJ).jk,
    SJ = (t.ec || t.zc || MJ).ABORT_ERR,
    TJ = (t.ec || t.zc || MJ).ak,
    UJ = (t.ec || t.zc || MJ).TIMEOUT_ERR,
    VJ = (t.ec || t.zc || MJ).$j,
    WJ = (t.DOMException || MJ).INVALID_ACCESS_ERR,
    XJ = (t.DOMException || MJ).INVALID_STATE_ERR;

  function LJ(a) {
    switch (a) {
      case "UnknownError":
        return NJ;
      case "NotFoundError":
        return OJ;
      case "ConstraintError":
        return PJ;
      case "DataError":
        return QJ;
      case "TransactionInactiveError":
        return RJ;
      case "AbortError":
        return SJ;
      case "ReadOnlyError":
        return TJ;
      case "TimeoutError":
        return UJ;
      case "QuotaExceededError":
        return VJ;
      case "InvalidAccessError":
        return WJ;
      case "InvalidStateError":
        return XJ;
      default:
        return NJ
    }
  }

  function KJ(a) {
    switch (a) {
      case NJ:
        return "UnknownError";
      case OJ:
        return "NotFoundError";
      case PJ:
        return "ConstraintError";
      case QJ:
        return "DataError";
      case RJ:
        return "TransactionInactiveError";
      case SJ:
        return "AbortError";
      case TJ:
        return "ReadOnlyError";
      case UJ:
        return "TimeoutError";
      case VJ:
        return "QuotaExceededError";
      case WJ:
        return "InvalidAccessError";
      case XJ:
        return "InvalidStateError";
      default:
        return "UnknownError"
    }
  }

  function YJ(a, b) {
    return "error" in a ? new JJ(a.error, b) : new JJ({
      name: "UnknownError"
    }, b)
  }

  function ZJ(a, b) {
    if ("name" in a) return b = b + ": " + a.message, new JJ(a, b);
    if ("code" in a) {
      var c = KJ(a.code);
      b = b + ": " + a.message;
      return new JJ({
        name: c
      }, b)
    }
    return new JJ({
      name: "UnknownError"
    }, b)
  };

  function $J(a) {
    this.g = a
  }
  var aK = t.IDBKeyRange || t.webkitIDBKeyRange;

  function bK(a, b) {
    return new $J(aK.bound(a, b, void 0, void 0))
  };

  function cK(a) {
    this.g = a
  }

  function dK(a, b, c) {
    var d = new pi;
    try {
      var e = a.g.get(c)
    } catch (f) {
      return b += " with key " + Li(c), d.V(ZJ(f, b)), d
    }
    e.onsuccess = function(f) {
      d.callback(f.target.result)
    };
    e.onerror = function(f) {
      b += " with key " + Li(c);
      d.V(YJ(f.target, b))
    };
    return d
  }
  cK.prototype.get = function(a) {
    return dK(this, "getting from index " + this.g.name, a)
  };

  function eK(a, b) {
    return fK(a, "getting all keys index " + a.g.name, b)
  }

  function fK(a, b, c) {
    var d;
    void 0 === c ? d = void 0 : d = c instanceof $J ? c.g : (new $J(aK.only(c))).g;
    var e = new pi;
    try {
      var f = a.g.getAllKeys(d, void 0)
    } catch (g) {
      return b += " for range " + (d ? Li(d) : "<all>"), e.V(ZJ(g, b)), e
    }
    f.onsuccess = function() {
      e.callback(f.result)
    };
    f.onerror = function(g) {
      b += " for range " + (d ? Li(d) : "<all>");
      e.V(YJ(g.target, b))
    };
    return e
  };

  function gK(a) {
    this.g = a
  }

  function hK(a, b, c, d, e) {
    var f = new pi;
    try {
      var g = e ? a.g[b](d, e) : a.g[b](d)
    } catch (k) {
      return c += Li(d), e && (c += ", with key " + Li(e)), f.V(ZJ(k, c)), f
    }
    g.onsuccess = function(k) {
      f.callback(k.target.result)
    };
    g.onerror = function(k) {
      c += Li(d);
      e && (c += ", with key " + Li(e));
      f.V(YJ(k.target, c))
    };
    return f
  }

  function iK(a, b, c) {
    return hK(a, "put", "putting into " + a.g.name + " with value", b, c)
  }
  m = gK.prototype;
  m.add = function(a, b) {
    return hK(this, "add", "adding into " + this.g.name + " with value ", a, b)
  };
  m.remove = function(a) {
    var b = new pi;
    try {
      var c = this.g["delete"](a instanceof $J ? a.g : a)
    } catch (e) {
      return c = "removing from " + this.g.name + " with key " + Li(a), b.V(ZJ(e, c)), b
    }
    c.onsuccess = function() {
      b.callback()
    };
    var d = this;
    c.onerror = function(e) {
      var f = "removing from " + d.g.name + " with key " + Li(a);
      b.V(YJ(e.target, f))
    };
    return b
  };
  m.get = function(a) {
    var b = new pi;
    try {
      var c = this.g.get(a)
    } catch (e) {
      return c = "getting from " + this.g.name + " with key " + Li(a), b.V(ZJ(e, c)), b
    }
    c.onsuccess = function(e) {
      b.callback(e.target.result)
    };
    var d = this;
    c.onerror = function(e) {
      var f = "getting from " + d.g.name + " with key " + Li(a);
      b.V(YJ(e.target, f))
    };
    return b
  };

  function jK(a, b) {
    return kK(a, "getting all from index " + a.g.name, b)
  }

  function kK(a, b, c) {
    var d;
    void 0 === c ? d = void 0 : d = c instanceof $J ? c.g : (new $J(aK.only(c))).g;
    var e = new pi;
    try {
      var f = a.g.getAll(d, void 0)
    } catch (g) {
      return b += " for range " + (d ? Li(d) : "<all>"), e.V(ZJ(g, b)), e
    }
    f.onsuccess = function() {
      e.callback(f.result)
    };
    f.onerror = function(g) {
      b += " for range " + (d ? Li(d) : "<all>");
      e.V(YJ(g.target, b))
    };
    return e
  }
  m.clear = function() {
    var a = "clearing store " + this.g.name,
      b = new pi;
    try {
      var c = this.g.clear()
    } catch (d) {
      return b.V(ZJ(d, a)), b
    }
    c.onsuccess = function() {
      b.callback()
    };
    c.onerror = function(d) {
      b.V(YJ(d.target, a))
    };
    return b
  };

  function lK(a) {
    try {
      return new cK(a.g.index("userId"))
    } catch (b) {
      throw ZJ(b, "getting index userId");
    }
  }
  m.count = function(a) {
    var b = new pi;
    try {
      var c = this.g.count(a ? a.g : null);
      c.onsuccess = function(e) {
        b.callback(e.target.result)
      };
      var d = this;
      c.onerror = function(e) {
        b.V(YJ(e.target, d.g.name))
      }
    } catch (e) {
      b.V(ZJ(e, this.g.name))
    }
    return b
  };

  function mK(a, b) {
    T.call(this);
    this.g = a;
    this.o = b;
    this.j = new Mm(this);
    this.j.R(this.g, "complete", u(this.dispatchEvent, this, "complete"));
    this.j.R(this.g, "abort", u(this.dispatchEvent, this, "abort"));
    this.j.R(this.g, "error", this.el)
  }
  w(mK, T);
  m = mK.prototype;
  m.el = function(a) {
    a.target instanceof JJ ? this.dispatchEvent({
      type: "error",
      target: a.target
    }) : this.dispatchEvent({
      type: "error",
      target: YJ(a.target, "in transaction")
    })
  };
  m.objectStore = function(a) {
    try {
      return new gK(this.g.objectStore(a))
    } catch (b) {
      throw ZJ(b, "getting object store " + a);
    }
  };
  m.wait = function() {
    var a = new pi;
    Uj(this, "complete", u(a.callback, a));
    var b = Uj(this, "abort", function() {
      gk(c);
      a.V(new JJ(SJ, "waiting for transaction to complete"))
    });
    var c = Uj(this, "error", function(e) {
      gk(b);
      a.V(e.target)
    });
    var d = this.o;
    return vi(a, function() {
      return d
    })
  };
  m.abort = function() {
    this.g.abort()
  };
  m.N = function() {
    mK.na.N.call(this);
    this.j.dispose()
  };

  function nK(a) {
    T.call(this);
    this.g = a;
    this.j = new Mm(this);
    this.j.R(this.g, "abort", u(this.dispatchEvent, this, "abort"));
    this.j.R(this.g, "error", this.dl);
    this.j.R(this.g, "versionchange", this.Bk);
    this.j.R(this.g, "close", u(this.dispatchEvent, this, "close"))
  }
  w(nK, T);
  m = nK.prototype;
  m.Xh = !0;
  m.dl = function(a) {
    a = (a = a.target) && a.error;
    this.dispatchEvent({
      type: "error",
      errorCode: a && a.severity
    })
  };
  m.Bk = function(a) {
    this.dispatchEvent(new oK(a.oldVersion, a.newVersion))
  };
  m.close = function() {
    this.Xh && (this.g.close(), this.Xh = !1)
  };

  function pK(a, b, c) {
    try {
      return new gK(a.g.createObjectStore(b, c))
    } catch (d) {
      throw ZJ(d, "creating object store " + b);
    }
  }

  function qK(a, b) {
    try {
      a.g.deleteObjectStore(b)
    } catch (c) {
      throw ZJ(c, "deleting object store " + b);
    }
  }

  function rK(a, b, c) {
    try {
      var d = c ? a.g.transaction(b, c) : a.g.transaction(b);
      return new mK(d, a)
    } catch (e) {
      throw ZJ(e, "creating transaction");
    }
  }
  m.N = function() {
    nK.na.N.call(this);
    this.j.dispose()
  };

  function oK(a, b) {
    S.call(this, "versionchange");
    this.oldVersion = a;
    this.newVersion = b
  }
  w(oK, S);
  var sK = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.moz_indexedDB;

  function tK(a, b, c, d) {
    var e = new pi;
    b = b ? sK.open(a, b) : sK.open(a);
    b.onsuccess = function(f) {
      f = new nK(f.target.result);
      e.callback(f)
    };
    b.onerror = function(f) {
      e.V(YJ(f.target, "opening database " + a))
    };
    b.onupgradeneeded = function(f) {
      if (c) {
        var g = new nK(f.target.result);
        c(new oK(f.oldVersion, f.newVersion), g, new mK(f.target.transaction, g))
      }
    };
    b.onblocked = function(f) {
      d && d(new oK(f.oldVersion, f.newVersion))
    };
    return e
  }

  function uK() {
    var a = new pi,
      b = sK.deleteDatabase("GoogleDriveDs");
    b.onsuccess = function() {
      a.callback()
    };
    b.onerror = function(c) {
      a.V(YJ(c.target, "deleting database GoogleDriveDs"))
    };
    b.onblocked = h();
    return a
  };

  function vK(a, b) {
    this.o = a;
    this.j = b;
    this.g = null
  }

  function wK(a, b) {
    UF(a.j, "drive.ds.sync.logging.ImpressionPersister", "Persisting offline impressions.");
    return xK(a, function(c) {
      return c.count().then(function(d) {
        return 1E3 > d ? yK(a, c, b) : zK(a, Error("Too many persisted impressions"))
      }, function(d) {
        return zK(a, d)
      })
    }, "readwrite")
  }

  function yK(a, b, c) {
    var d = {};
    return b.add((d.userId = a.o, d.Xl = c.ga(), d)).then(null, function(e) {
      zK(a, e)
    })
  }

  function AK(a) {
    return new Rh(function(b) {
      var c = new Map;
      xK(a, function(d) {
        return eK(lK(d), a.o).then(function(e) {
          e = new Map(e.map(function(n) {
            return [n, d.get(n)]
          }));
          for (var f = {}, g = q(e), k = g.next(); !k.done; f = {
              Gf: f.Gf
            }, k = g.next()) k = q(k.value), f.Gf = k.next().value, k.next().value.then(function(n) {
            return function(p) {
              p && c.set(n.Gf, new HJ(p.Xl))
            }
          }(f));
          return ai(oa(e.values()).concat()).then(function() {
            return b(c)
          })
        })
      })
    })
  }

  function BK(a, b) {
    return xK(a, function(c) {
      return c.remove(b)
    }, "readwrite")
  }

  function xK(a, b, c) {
    c = void 0 === c ? "readonly" : c;
    return CK(a).then(function(d) {
      try {
        var e = rK(d, ["OfflineImpressions"], c).objectStore("OfflineImpressions");
        return b(e)
      } catch (f) {
        return zK(a, f)
      }
    }, function(d) {
      return zK(a, d)
    })
  }

  function CK(a) {
    return a.g ? Wh(a.g) : tK("GoogleDriveDsImpressions", 2, function(b, c) {
      c.g.objectStoreNames.contains("OfflineImpressions") && qK(c, "OfflineImpressions");
      b = pK(c, "OfflineImpressions", {
        autoIncrement: !0
      });
      try {
        b.g.createIndex("userId", "userId", void 0)
      } catch (d) {
        throw ZJ(d, "creating new index userId with key path userId");
      }
    }, function() {
      return zK(a, Error("Error opening database."))
    }).then(function(b) {
      return a.g = b
    }, function(b) {
      return P(yF(b))
    })
  }

  function zK(a, b) {
    b || (b = Error("Error persisting impressions to the database."));
    RG(a.j, "drive.ds.sync.logging.ImpressionPersister", b.message, "severe");
    return Wh()
  };

  function DK(a, b, c, d) {
    this.w = a;
    this.A = b;
    this.g = this.o = a;
    this.B = c || 0;
    this.C = d || 2
  }
  DK.prototype.j = 0;
  DK.prototype.reset = function() {
    this.g = this.o = this.w;
    this.j = 0
  };
  DK.prototype.P = l("o");

  function EK(a) {
    a.g = Math.min(a.A, a.g * a.C);
    a.o = Math.min(a.A, a.g + (a.B ? Math.round(a.B * (Math.random() - .5) * 2 * a.g) : 0));
    a.j++
  };

  function FK(a, b, c) {
    cl(a.url, function(d) {
      d = d.target;
      ml(d) ? b(pl(d)) : c(d.S())
    }, a.Km, a.body, a.Jm, a.Rm, a.withCredentials)
  };

  function GK(a) {
    z(this, a, -1, null, null)
  }
  w(GK, y);

  function HK(a) {
    z(this, a, -1, null, null)
  }
  w(HK, y);

  function IK(a) {
    z(this, a, 30, JK, null)
  }
  w(IK, y);
  var JK = [3, 20, 27];

  function KK(a, b) {
    return F(a, 8, b)
  };

  function LK(a) {
    z(this, a, 17, MK, null)
  }
  w(LK, y);
  var MK = [3, 5];

  function NK(a) {
    var b = v().toString();
    return F(a, 4, b)
  }

  function OK(a, b) {
    return M(a, 3, b)
  }

  function PK(a, b) {
    return F(a, 14, b)
  };

  function QK(a) {
    z(this, a, 6, RK, null)
  }
  w(QK, y);
  var RK = [5];

  function SK(a) {
    z(this, a, -1, null, null)
  }
  w(SK, y);
  var TK = new Je(175237375, {
    js: 0
  }, SK, function(a, b) {
    var c = {
      vs: D(b, 1, -1)
    };
    a && (c.Fb = b);
    return c
  });

  function UK(a, b, c, d, e, f, g, k, n, p, x) {
    T.call(this);
    this.xa = a;
    this.U = b || Fa;
    this.A = new LK;
    this.Ia = d;
    this.ea = x;
    this.g = [];
    this.W = "";
    this.Sb = Ra(Bg, 0, 1);
    this.D = e || null;
    this.B = c || null;
    this.H = g || !1;
    this.L = n || null;
    this.la = this.G = !1;
    this.aa = this.O = -1;
    this.sb = !k;
    this.I = 0;
    this.tb = 1;
    this.va = f || !1;
    a = new HK;
    a = F(a, 1, 1);
    f || (f = new GK, b = document.documentElement.getAttribute("lang"), f = F(f, 5, b), J(a, 11, f));
    J(this.A, 1, a);
    F(this.A, 2, this.xa);
    this.o = new DK(1E4, 3E5, .1);
    this.j = new Vk(this.o.P());
    R(this, this.j);
    Tj(this.j, "tick",
      qb(VK(this, p)), !1, this);
    this.C = new Vk(6E5);
    R(this, this.C);
    Tj(this.C, "tick", qb(VK(this, p)), !1, this);
    this.H || this.C.start();
    this.va || (Tj(window, "beforeunload", this.w, !1, this), Tj(window, "unload", this.w, !1, this), Tj(document, "pagehide", this.w, !1, this))
  }
  w(UK, T);

  function VK(a, b) {
    return b ? function() {
      b().then(a.flush.bind(a))
    } : a.flush
  }
  UK.prototype.N = function() {
    this.w();
    UK.na.N.call(this)
  };

  function WK(a) {
    a.D || (a.D = .01 > a.Sb() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.D
  }
  UK.prototype.log = function(a) {
    a = N(a);
    var b = this.tb++;
    F(a, 21, b);
    if (!B(a, 1)) {
      b = a;
      var c = v().toString();
      F(b, 1, c)
    }
    for (; 1E3 <= this.g.length;) this.g.shift(), ++this.I;
    this.g.push(a);
    this.dispatchEvent(new XK(a));
    this.H || this.j.enabled || this.j.start()
  };
  UK.prototype.flush = function(a, b) {
    if (0 == this.g.length) a && a();
    else {
      var c = v();
      if (this.aa > c && this.O < c) b && b("throttled");
      else {
        var d = PK(OK(NK(N(this.A)), this.g), this.I);
        c = {};
        var e = this.U();
        e && (c.Authorization = e);
        var f = WK(this);
        this.B && (c["X-Goog-AuthUser"] = this.B, f = Hk(f, "authuser", this.B));
        this.L && (c["X-Goog-PageId"] = this.L, f = Hk(f, "pageId", this.L));
        if (e && this.W == e) b && b("stale-auth-token");
        else if (this.g = [], this.j.enabled && this.j.stop(), this.I = 0, this.G) d.Ga(), c && JSON.stringify(c), a && a();
        else {
          var g = d.Ga();
          c = {
            url: f,
            body: g,
            Zr: 1,
            Jm: c,
            Km: "POST",
            withCredentials: this.sb,
            Rm: 0
          };
          f = u(function(k) {
            this.o.reset();
            this.j.setInterval(this.o.P());
            if (k) {
              try {
                var n = JSON.parse(k.replace(")]}'\n", ""));
                var p = new QK(n)
              } catch (x) {}
              p && (k = D(p, 1, "-1"), k = Number(k), 0 < k && (this.O = v(), this.aa = this.O + k), p = p.$e(TK)) && (p = D(p, 1, -1), -1 != p && (this.o = new DK(1 > p ? 1 : p, 3E5, .1), this.j.setInterval(this.o.P())))
            }
            a && a()
          }, this);
          g = u(function(k) {
            var n = I(d, IK, 3);
            EK(this.o);
            this.j.setInterval(this.o.P());
            401 == k && e && (this.W = e);
            if (500 <= k && 600 > k || 401 == k ||
              0 == k) this.g = n.concat(this.g), this.H || this.j.enabled || this.j.start();
            b && b("net-send-failed", k)
          }, this);
          this.ea ? this.ea.send(c, f, g) : this.Ia(c, f, g)
        }
      }
    }
  };
  UK.prototype.w = function() {
    this.G || (this.la && YK(this), this.flush())
  };

  function YK(a) {
    ZK(a, function(b, c) {
      b = Hk(b, "format", "json");
      return window.navigator.sendBeacon(b, c.Ga())
    })
  }

  function ZK(a, b) {
    if (0 != a.g.length) {
      var c = Lk(WK(a), "format");
      c = Fk(c, "auth", a.U(), "authuser", a.B || "0");
      for (var d = 0; 10 > d && a.g.length; ++d) {
        var e = a.g.slice(0, 32),
          f = OK(NK(N(a.A)), e);
        if (!b(c, f)) break;
        a.g = a.g.slice(e.length)
      }
    }
  }

  function XK() {
    this.type = "event-logged"
  }
  w(XK, S);

  function $K(a) {
    this.j = a
  }
  $K.prototype.g = function(a) {
    a = KK(new IK, a.Ga());
    this.j.log(a);
    return new Rh(function(b) {
      this.j.flush(b, function() {
        b()
      })
    }.bind(this))
  };

  function aL(a, b, c, d, e) {
    T.call(this);
    var f = this;
    this.w = a;
    this.o = b;
    this.j = c;
    this.A = new Mm(this);
    this.A.R(b, "t", this.C);
    this.B = d;
    e.then(function() {
      return bL(f)
    })
  }
  r(aL, T);
  aL.prototype.g = function(a) {
    return this.o.g() && this.o.j ? wK(this.j, a) : this.w.g(a)
  };
  aL.prototype.C = function(a) {
    a.g() || bL(this)
  };

  function bL(a) {
    return a.o.j ? AK(a.j).then(function(b) {
      b.forEach(function(c, d) {
        a.w.g(c).then(function() {
          return cL(a, d)
        }, function() {
          return dL(a, "Unable to send offline impression batch " + d + ".")
        })
      })
    }) : Promise.resolve()
  }

  function cL(a, b) {
    dL(a, "Sent offline impression batch " + b + ".");
    a.dispatchEvent("u");
    return BK(a.j, b).then(function() {
      dL(a, "Removed offline impression batch " + b + ".")
    }, function() {
      dL(a, "Unable to remove offline impression batch " + b + ".")
    })
  }

  function dL(a, b) {
    UF(a.B, "drive.ds.sync.logging.ClearcutOfflineTransport", b)
  };

  function eL() {}
  eL.prototype.eg = function() {
    return new nJ
  };

  function fL(a) {
    this.g = a
  }
  fL.prototype.F = l("g");

  function gL() {
    this.g = new CJ
  }
  gL.prototype.j = function(a) {
    B(a, 13);
    J(a, 13, this.g)
  };
  var hL = new fL("drive_dataservice_invariants");

  function iL(a, b, c) {
    this.D = jL(kL, rD(a));
    this.A = jL(lL, D(oD(a), 8, 0));
    this.G = jL(mL, D(oD(a), 9, 2));
    this.H = E(a, 10, !1);
    this.B = lD(qD(a));
    this.I = sD(a);
    this.o = nL(a);
    this.C = B(a, 62);
    this.j = this.g = null;
    this.L = b;
    this.w = c
  }

  function nL(a) {
    return oa(oL.keys()).concat().filter(function(b) {
      return oL.get(b)(a)
    })
  }

  function jL(a, b) {
    a = q(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = q(c.value);
      c = d.next().value;
      d = d.next().value;
      if (c.includes(b)) return d
    }
    return 0
  }

  function pL(a) {
    return a instanceof DC ? 2 : a instanceof BC ? 10 : a instanceof VA ? fB(a) ? 3 : gB(a) ? 7 : hB(a) ? 8 : 1 : a instanceof hA ? 9 : a instanceof Py ? 11 : a instanceof UC ? 14 : a instanceof TB ? 12 : 0
  }
  var qL = new Map([
      [
        [1], 3
      ],
      [
        [2], 4
      ],
      [
        [3], 5
      ],
      [
        [4], 6
      ],
      [
        [5], 7
      ],
      [
        [6], 8
      ],
      [
        [7], 9
      ],
      [
        [8], 10
      ],
      [
        [9], 11
      ]
    ]),
    oL = new Map([
      [10, function(a) {
        return C(a, 74)
      }],
      [12, function(a) {
        return C(a, 69)
      }],
      [24, function(a) {
        return E(a, 3, !1)
      }],
      [9, function(a) {
        return E(a, 17, !1)
      }],
      [22, function(a) {
        return E(a, 82, !1)
      }],
      [21, function(a) {
        return vD(a)
      }],
      [11, function(a) {
        return E(a, 12, !1)
      }],
      [13, function(a) {
        return C(a, 60)
      }],
      [2, function(a) {
        return E(a, 8, !0)
      }],
      [6, function(a) {
        return E(a, 11, !1)
      }],
      [14, function(a) {
        return E(a, 18, !1)
      }],
      [15, function(a) {
        return E(a,
          55, !1)
      }],
      [16, function(a) {
        return E(a, 56, !1)
      }],
      [17, function(a) {
        return E(a, 57, !1)
      }],
      [18, function(a) {
        return E(a, 54, !1)
      }],
      [19, function(a) {
        return E(a, 53, !1)
      }],
      [23, function(a) {
        return E(a, 15, !1)
      }]
    ]),
    kL = new Map([
      [
        [3, 4, 5, 6, 8], 3
      ],
      [
        [1], 1
      ],
      [
        [2], 2
      ],
      [
        [7], 4
      ],
      [
        [9], 5
      ],
      [
        [10], 6
      ],
      [
        [11], 7
      ],
      [
        [12], 8
      ],
      [
        [13], 9
      ],
      [
        [14], 10
      ],
      [
        [200], 200
      ],
      [
        [201], 201
      ],
      [
        [202], 202
      ],
      [
        [203], 203
      ],
      [
        [204], 204
      ],
      [
        [205], 205
      ],
      [
        [206], 206
      ],
      [
        [207], 207
      ],
      [
        [208], 208
      ],
      [
        [209], 209
      ],
      [
        [210], 210
      ],
      [
        [211], 211
      ],
      [
        [212], 212
      ],
      [
        [213], 213
      ],
      [
        [214], 214
      ],
      [
        [215], 215
      ],
      [
        [216], 216
      ],
      [
        [217], 217
      ],
      [
        [218], 218
      ],
      [
        [219], 219
      ],
      [
        [220], 220
      ],
      [
        [221], 221
      ],
      [
        [222], 222
      ],
      [
        [223], 223
      ],
      [
        [224], 224
      ],
      [
        [225], 225
      ],
      [
        [226], 226
      ]
    ]),
    mL = new Map([
      [
        [2], 3
      ],
      [
        [1], 2
      ],
      [
        [0], 1
      ]
    ]),
    lL = new Map([
      [
        [0], 1
      ],
      [
        [1], 2
      ],
      [
        [2], 3
      ],
      [
        [3], 4
      ],
      [
        [4], 5
      ],
      [
        [5], 6
      ],
      [
        [6], 7
      ]
    ]);

  function rL(a) {
    this.j = a;
    this.j.la = !!window.navigator.sendBeacon && (oe || je && fe(45))
  }
  rL.prototype.g = function(a) {
    a = KK(new IK, a.Ga());
    this.j.log(a);
    this.j.w()
  };

  function sL() {
    iJ.call(this)
  }
  w(sL, iJ);
  var tL = new eJ("high_frequency_builder");
  sL.prototype.ka = function() {
    return 1 == B(H(this.g, yJ, 7), 1)
  };

  function uL(a, b, c) {
    a = new Vk(a);
    R(c, a);
    var d = new Mm(c);
    R(c, d);
    d.R(a, "tick", b);
    a.start()
  };

  function vL() {
    iJ.call(this)
  }
  w(vL, iJ);
  var wL = new eJ("system_builder");

  function xL(a, b, c) {
    var d = 1E3 * v();
    if (0 == b) {
      b = new fJ;
      var e = new gJ;
      e = F(e, 1, d);
      J(b, 1, e);
      F(b, 3, 1);
      J(a.g, 8, b);
      F(a.g, 12, c);
      F(a.g, 13, c);
      F(a.g, 4, d);
      F(a.g, 3, c)
    } else 1 == b && (b = new fJ, e = new hJ, d = F(e, 1, d), J(b, 2, d), F(b, 3, 2), J(a.g, 8, b), F(a.g, 12, c), F(a.g, 3, c));
    return a
  };

  function yL(a, b) {
    this.g = a;
    this.j = b;
    this.o = null
  }
  m = yL.prototype;
  m.ke = function(a) {
    var b = this.g;
    F(a.g, 6, b.w);
    a = mJ(a);
    b.g.add(a);
    b.o = !0;
    b = this.j;
    3 <= b.g.g.ia() && b.j.Ud()
  };
  m.wd = function(a, b) {
    a = xL(zL(this.g, a), b, this.g.A++);
    1 == b && (b = this.g, B(H(a.g, fJ, 8), 3), b.B.add(a));
    return a
  };
  m.ce = function() {
    return this.g.j
  };
  m.Yf = function(a) {
    var b = this.g;
    B(H(a.g, fJ, 8), 3);
    var c = kJ(a, wL),
      d = b.A++,
      e = H(H(c.g, fJ, 8), hJ, 2),
      f = 1E3 * v();
    F(e, 2, f);
    F(c.g, 13, d);
    b.B.remove(B(a.g, 12))
  };
  m.Qi = function() {
    var a = this.j;
    if (!a.A || a.g.o) {
      var b = mJ(AL(a.g, 691));
      b = BL(a.g, [b]);
      a.C.g(b)
    }
    a.w();
    this.g.C = !1;
    this.o && (jj(this.o), this.o = null)
  };
  m.Ug = function() {
    var a = this.g,
      b = AL(a, 716);
    CL(a, b);
    b = mJ(b);
    a.g.add(b);
    a.G = !0;
    a.C = !0;
    a = this.j;
    uL(a.D, a.j.Ud, a.j);
    uL(36E5, a.B, a);
    this.j.j.Ud()
  };
  m.cg = function() {
    this.j.w();
    return ai(tk(this.j.o)).then()
  };
  m.de = function() {
    var a = this.g;
    return a.G && a.C && !0
  };

  function DL(a, b, c) {
    Q.call(this);
    this.w = null != c ? u(a, c) : a;
    this.o = b;
    this.j = u(this.vm, this);
    this.g = []
  }
  w(DL, Q);
  m = DL.prototype;
  m.zf = !1;
  m.od = null;
  m.Ud = function(a) {
    this.g = arguments;
    this.od ? this.zf = !0 : EL(this)
  };
  m.stop = function() {
    this.od && (Xk(this.od), this.od = null, this.zf = !1, this.g = [])
  };
  m.N = function() {
    DL.na.N.call(this);
    this.stop()
  };
  m.vm = function() {
    this.od = null;
    this.zf && (this.zf = !1, EL(this))
  };

  function EL(a) {
    a.od = Wk(a.j, a.o);
    a.w.apply(null, a.g)
  };

  function FL(a) {
    this.g = new ej;
    if (a) {
      a = tk(a);
      for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    }
  }

  function GL(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + La(a) : b.charAt(0) + a
  }
  m = FL.prototype;
  m.ia = function() {
    return this.g.ia()
  };
  m.add = function(a) {
    this.g.set(GL(a), a)
  };
  m.remove = function(a) {
    return this.g.remove(GL(a))
  };
  m.clear = function() {
    this.g.clear()
  };
  m.contains = function(a) {
    a = GL(a);
    return gj(this.g.j, a)
  };
  m.sa = function() {
    return this.g.sa()
  };
  m.clone = function() {
    return new FL(this)
  };
  m.oa = function(a) {
    return this.ia() == sk(a) && HL(this, a)
  };

  function HL(a, b) {
    var c = sk(b);
    if (a.ia() > c) return !1;
    !(b instanceof FL) && 5 < c && (b = new FL(b));
    return wk(a, function(d) {
      var e = b;
      if (e.contains && "function" == typeof e.contains) d = e.contains(d);
      else if (e.ad && "function" == typeof e.ad) d = e.ad(d);
      else if (Ia(e) || "string" === typeof e) d = Db(e, d);
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
  m.Fd = function() {
    return this.g.Fd(!1)
  };

  function IL(a, b, c, d, e) {
    this.g = a;
    this.G = b;
    this.C = c;
    this.j = new DL(this.w, 3E3, this);
    this.o = new FL;
    this.A = d;
    this.D = e || 6E4
  }
  w(IL, Q);
  IL.prototype.w = function() {
    if (0 != this.g.g.ia() && (!this.A || this.g.o)) {
      var a = JL(this.g),
        b = this.G.g(a);
      b && (ei(b, u(function() {
        this.o.remove(b)
      }, this)), this.o.add(b))
    }
  };
  IL.prototype.B = function() {
    var a = this.g,
      b = AL(a, 1153);
    b = mJ(b);
    a.g.add(b);
    this.j.Ud()
  };

  function KL() {}
  KL.prototype.eg = function() {
    return new sL
  };

  function LL() {
    this.j = {};
    this.o = {};
    this.g = null
  };

  function ML() {
    this.g = []
  }
  ML.prototype.add = function(a) {
    this.g.push(a)
  };
  ML.prototype.ia = function() {
    return this.g.length
  };

  function NL() {
    this.g = {}
  }
  NL.prototype.add = function(a) {
    B(H(a.g, fJ, 8), 3);
    var b = B(a.g, 12);
    this.g[b] = a
  };
  NL.prototype.remove = function(a) {
    delete this.g[a]
  };

  function OL(a, b) {
    this.j = a;
    this.H = b;
    this.A = 1;
    this.D = this.w = null;
    this.B = new NL;
    this.g = new ML;
    this.C = this.G = this.o = !1
  }

  function zL(a, b) {
    a = kJ(jJ(new iJ, new zJ, a.H), wL);
    F(a.g, 10, b);
    return a
  }

  function JL(a) {
    var b = a.g,
      c = b.g;
    b.g = [];
    return BL(a, c)
  }

  function BL(a, b) {
    var c = new HJ;
    var d = N(a.j.g);
    c = J(c, 2, d);
    d = a.j;
    PL(d);
    (d = d.w ? N(d.w) : null) && J(c, 5, d);
    var e;
    d = a.j;
    for (var f, g = b.length - 1; 0 <= g; g--) {
      var k = H(b[g], Uq, 5);
      if (k && H(k, tq, 1)) {
        k = H(k, tq, 1);
        null != B(k, 12) && void 0 === e && (e = C(k, 12));
        k = H(k, vq, 20);
        if (void 0 !== k && void 0 === f) {
          f = new xJ;
          var n = C(k, 2);
          void 0 !== n && F(f, 2, n);
          k = C(k, 1);
          void 0 !== k && F(f, 1, k)
        }
        if (void 0 !== e && void 0 !== f) break
      }
    }
    d = d.j ? N(d.j) : null;
    if (void 0 !== e || void 0 !== f) d || (d = new wJ), void 0 !== e && F(d, 6, e), void 0 !== f && J(d, 13, f);
    (e = d) && J(c, 3, e);
    a = N(a.j.A);
    J(c, 4, a);
    M(c, 1, b);
    return c
  }

  function AL(a, b) {
    var c = xL(zL(a, b), 0, a.A++);
    var d = a.B;
    var e = Object.keys(d.g);
    if (0 == e.length) d = null;
    else {
      for (var f = [], g = 0; g < e.length; g++) {
        var k = Number(e[g]),
          n = d.g[k],
          p = new Kq;
        k = F(p, 1, k);
        n = B(n.g, 10);
        n = F(k, 2, n);
        f.push(n)
      }
      d = f
    }
    716 != b && (b = a.D, F(c.g, 6, a.w), e = new Iq, b = F(e, 1, b), d && M(b, 2, d), d = lJ(c), J(d, 3, b));
    CL(a, c);
    return c
  }

  function CL(a, b) {
    a.w = B(b.g, 12);
    a.D = B(H(H(b.g, fJ, 8), gJ, 1), 1)
  };

  function QL() {}
  QL.prototype.eg = function() {
    return new vL
  };

  function RL() {
    this.g = this.j = null
  };

  function SL() {
    this.g = new BJ;
    this.w = null;
    this.A = new AJ;
    F(this.A, 1, 6);
    this.j = this.o = null
  }

  function UL(a, b) {
    B(a.g, 2);
    F(a.g, 2, b);
    return a
  }

  function SM(a) {
    null == a.w && (a.w = new FJ);
    return a.w
  }

  function TM(a) {
    null == a.j && (a.j = new wJ);
    return a.j
  }

  function PL(a) {
    null != B(a.g, 1) && null != B(a.g, 6) && B(a.g, 6)
  };

  function UM() {
    this.w = this.B = null;
    this.g = new SL;
    this.j = null;
    this.o = !1;
    this.A = null
  }

  function VM(a, b) {
    a.B = b;
    return a
  }

  function WM(a, b) {
    a.w = b;
    return a
  }

  function XM(a, b) {
    a.j = b;
    return a
  }

  function YM(a, b) {
    var c = a.g;
    B(c.g, 1);
    F(c.g, 1, b);
    return a
  }

  function ZM(a, b) {
    var c = a.g;
    B(c.g, 6);
    F(c.g, 6, b);
    return a
  }

  function $M(a) {
    a.o = !0;
    return a
  }

  function aN() {
    var a = new UM;
    a.A = 12E4;
    return a
  }

  function bN(a) {
    PL(a.g);
    var b = new RL;
    b.j = a.g;
    null != a.j && (b.g = a.j);
    null == b.g && (b.g = new LL);
    var c = b.g,
      d = new QL;
    wL.F();
    c.j[wL.F()] = d;
    c = b.g;
    d = new KL;
    tL.F();
    c.j[tL.F()] = d;
    c = b.g;
    d = b.j;
    if (null == B(SM(d), 1)) {
      var e = SM(d),
        f = new EJ;
      J(e, 1, f)
    }
    d = H(SM(d), EJ, 1);
    c.g = d;
    d = dc(c.o);
    for (e = 0; e < d.length; e++) d[e].j(c.g);
    b = new OL(b.j, b.g);
    a = new IL(b, a.B, a.w, a.o, a.A);
    return new yL(b, a)
  };

  function cN(a, b, c, d, e, f, g) {
    UK.call(this, a, dF, b, FK, c, d, e, void 0, f, g)
  }
  w(cN, UK);

  function dN(a, b) {
    this.g = a;
    var c = new Sq;
    F(c, 1, b.o || []);
    a = this.g.ce();
    B(TM(a), 10);
    var d = TM(a);
    J(d, 10, c);
    if (c = b.C) null == a.o && (a.o = new GJ, d = SM(a), J(d, 2, a.o)), B(a.o, 1), F(a.o, 1, c);
    this.g.Ug();
    this.j = b
  }

  function eN(a, b, c, d, e, f, g) {
    g = void 0 === g ? !1 : g;
    var k = new cN(906, b, void 0, uF());
    k.G = !1;
    var n = new $K(k);
    b = new Date;
    k = YM(ZM(XM(WM($M(aN()), new rL(k)), fN(c)), 109), b.getTime() + "_" + Gd());
    if (g) {
      a = new aL(n, d, new vK(a, e), e, f);
      VM(k, a);
      d = bN(k);
      UL(d.ce(), 1E3 * b.getTime());
      var p = new dN(d, c);
      (new Mm).R(a, "u", function() {
        oJ(gN(p, 106008))
      });
      return p
    }
    VM(k, n);
    a = bN(k);
    UL(a.ce(), 1E3 * b.getTime());
    return new dN(a, c)
  }

  function fN(a) {
    var b = new LL,
      c = new gL,
      d = a.D;
    B(c.g, 1);
    F(c.g, 1, d);
    d = a.A;
    B(c.g, 3);
    F(c.g, 3, d);
    d = a.G;
    B(c.g, 4);
    F(c.g, 4, d);
    d = a.H;
    B(c.g, 5);
    F(c.g, 5, d);
    d = a.B;
    B(c.g, 6);
    F(c.g, 6, d);
    d = a.I;
    B(c.g, 7);
    F(c.g, 7, d);
    a = a.w;
    B(c.g, 2);
    F(c.g, 2, a);
    hL.F();
    b.o[hL.F()] = c;
    b.g && c.j(b.g);
    c = new eL;
    uJ.F();
    b.j[uJ.F()] = c;
    return b
  }

  function gN(a, b) {
    var c = kJ(a.g.wd(b, 0), uJ);
    pJ(c, function() {
      hN(a, c)
    });
    return c
  }

  function iN(a, b) {
    var c = kJ(a.g.wd(b, 1), uJ);
    pJ(c, function() {
      a.g.Yf(c);
      hN(a, c)
    });
    return c
  }

  function hN(a, b) {
    var c = a.j;
    c = c.g ? cc(c.g.g.g) : void 0;
    var d = sJ(b);
    F(d, 1, c);
    d = a.j.L.g() ? 2 : 1;
    c = new wq;
    F(c, 1, d);
    d = lJ(b);
    J(d, 12, c);
    c = a.j;
    c = c.j ? c.j.g("aU7Ts") : void 0;
    "boolean" === typeof c && (d = sJ(b), F(d, 6, c));
    a.g.ke(b)
  };

  function jN(a, b) {
    this.g = a;
    this.j = b
  }

  function kN(a, b, c, d, e) {
    var f = C(a, 59),
      g = iD(qD(a)).toString(),
      k = jD(qD(a));
    e = new iL(a, b, e);
    a = f ? eN(k, g, e, b, c, d, E(a, 17, !1)) : null;
    return new jN(a, e)
  }

  function lN(a, b) {
    a.g && a.g && a.g.g.de() && oJ(gN(a.g, b))
  }

  function mN(a, b) {
    return a.g && a.g && a.g.g.de() ? iN(a.g, b) : null
  }

  function nN(a) {
    a.g && a.g && a.g.g.de() && (a = a.g, a.g.de() && a.g.Qi())
  };
  new FL;

  function oN(a, b, c, d, e, f) {
    pi.call(this, e, f);
    this.H = a;
    this.G = [];
    this.O = !!b;
    this.la = !!c;
    this.ea = !!d;
    for (b = this.U = 0; b < a.length; b++) wi(a[b], u(this.X, this, b, !0), u(this.X, this, b, !1));
    0 != a.length || this.O || this.callback(this.G)
  }
  w(oN, pi);
  oN.prototype.X = function(a, b, c) {
    this.U++;
    this.G[a] = [b, c];
    this.g || (this.O && b ? this.callback([a, c]) : this.la && !b ? this.V(c) : this.U == this.H.length && this.callback(this.G));
    this.ea && !b && (c = null);
    return c
  };
  oN.prototype.V = function(a) {
    oN.na.V.call(this, a);
    for (a = 0; a < this.H.length; a++) this.H[a].cancel()
  };

  function pN(a) {
    return vi(new oN(a, !1, !0), function(b) {
      for (var c = [], d = 0; d < b.length; d++) c[d] = b[d][1];
      return c
    })
  };

  function qN() {
    var a = this;
    this.g = new Promise(function(b, c) {
      a.resolve = b;
      a.reject = c
    })
  };

  function rN(a, b, c, d, e) {
    T.call(this);
    var f = this;
    this.o = e || new OG;
    this.Nj = a;
    this.g = c;
    this.I = new JG(b, c);
    this.B = new QI(KG(this.I), lD(qD(c)));
    sN(this);
    this.Sb = new qN;
    t.setTimeout(function() {
      f.Sb.resolve()
    }, 1E4);
    this.Cg = null;
    this.Hg = new pi;
    this.A = new kG(sD(this.g));
    this.L = kN(this.g, this.A, this.o, this.Sb.g, d);
    this.Ej = !0;
    this.Oj = new pi;
    this.dg = [];
    tN(this)
  }
  r(rN, T);

  function tN(a) {
    function b() {
      uN(a).fa(Fa)
    }
    var c = a.Nj;
    (c = c && c.g(Vm)) ? Uj(c, "E", b): uF() || Uj(t, "unload", b)
  }

  function uN(a) {
    lN(a.L, 106005);
    nN(a.L);
    var b = a.dg.map(function(c) {
      return c()
    });
    Eb(a.dg);
    return ai(b).then()
  }

  function vN(a, b) {
    a.dg.push(b)
  }

  function wN(a, b, c) {
    "string" === typeof b && 0 == b.length && lD(qD(a.g));
    "string" === typeof b && null === a.Cg && (a.Cg = b, a.Hg.callback(b), b.length && a.tj(b, c || null))
  }
  m = rN.prototype;
  m.tj = h();
  m.nb = l("Cg");

  function sN(a) {
    var b = oD(a.g);
    0 == B(b, 30).length && (a.log("No user pref namespaces provided, user prefs disabled."), F(b, 19, 3));
    if (!D(b, 37, "")) throw Error("Missing auth key for Genoa auth.");
    B(b, 57) || (a.log("No root URI provided; using prod default."), F(b, 57, "https://clients6.google.com"));
    if (E(pD(a.g), 9, !1))
      if (b = I(pD(a.g), fD, 11), 0 < b.length) {
        if (!B(b[0], 1) || !B(b[0], 2) && !sD(a.g) && !E(a.g, 10, !1)) throw Error("Missing IndexedDB configuration");
      } else gD(pD(a.g), !1), a.log("Disabling IndexedDB support, missing configuration.");
    if (!E(pD(a.g), 9, !1) && (sD(a.g) || E(a.g, 10, !1))) throw Error("Missing IndexedDB configuration for offline support");
    var c = qD(a.g);
    b = !(!c || !lD(c));
    c = c && jD(c) || "";
    if (!b && !c) throw Error("Missing user id.");
    b && tD(a.g, []);
    I(a.g, VA, 44).forEach(function(d) {
      try {
        UI(a.B, d)
      } catch (e) {
        if (e instanceof V && (d = e.ab) && 3 == d.lc()) throw Error("Unsupported fields in cache hint.");
        throw e;
      }
    })
  }
  m.Hi = ca(0);
  m.yb = l("Ej");
  m.Ic = function(a) {
    this.dispatchEvent(new ZE(new V(void 0, a)))
  };
  m.log = function(a) {
    UF(this.o, "drive.ds.sync.ThinContext", a)
  };

  function xN(a, b) {
    var c = {};
    a = $b(a, function(d) {
      return !!d
    });
    b = $b(b, function(d) {
      return !!d
    });
    Zb(a, function(d, e) {
      var f = b[e];
      f ? Ze(d, f) || (d = Lz(Kz(4), f), c[e] = d) : (d = Lz(Kz(2), d), c[e] = d)
    });
    Zb(b, function(d, e) {
      a[e] || (d = Lz(Kz(1), d), c[e] = d)
    });
    return c
  };

  function yN(a, b, c) {
    OF.call(this, a.B, a.Oj, a.o, b, c, a.g);
    this.A = null
  }
  r(yN, OF);

  function zN(a) {
    a.C = a.items;
    var b = (new MA).Nd(a.S()).ub(a.items);
    b = F(b, 5, a.g);
    return J(b, 7, a.A).cd(a.B).dd(a.sessionId).He(a.j)
  }
  yN.prototype.update = function(a) {
    var b;
    if (!(b = this.S() != a.S())) a: {
      KF.j();b = this.items;
      var c = a.ta();
      if (b.length != c.length) b = !0;
      else {
        for (var d = 0; d < b.length; d++)
          if (!Ze(b[d], c[d])) {
            b = !0;
            break a
          } b = !1
      }
    }
    b && (this.items = a.ta(), this.w = a.S(), vD(this.D) && LF(this.w, this.items), this.g = a.Sh(), this.j = a.Ee(), this.A = H(a, IA, 7), this.B = a.Fe(), this.sessionId = a.Ge(), QF(this))
  };

  function AN(a) {
    var b = new Tz;
    F(b, 1, a);
    return b
  };

  function BN(a, b) {
    DK.call(this, a ? a : 500, b ? b : 6E5)
  }
  r(BN, DK);
  var CN = [1, 2, 4];

  function DN(a, b, c) {
    this.id = a;
    this.j = b;
    this.g = c
  }

  function EN(a, b) {
    var c = (a ? a : b).item.F();
    return new DN(c, a, b)
  }

  function FN(a, b) {
    a.item.F();
    b.item.F();
    return new DN(a.item.F(), a, b)
  }

  function GN(a) {
    return new DN(a.item.F(), null, a)
  }

  function HN(a) {
    return new DN(a.item.F(), a, null)
  };

  function IN(a, b) {
    this.j = a | 0;
    this.g = b | 0
  }

  function JN(a, b) {
    return new IN(a, b)
  }

  function KN(a) {
    var b = "-" === a[0];
    a = a.slice(b ? 3 : 2);
    return (b ? LN : JN)(parseInt(a.slice(-8), 16), parseInt(a.slice(-16, -8) || "", 16))
  }
  IN.prototype.oa = function(a) {
    return this === a ? !0 : a instanceof IN ? this.j === a.j && this.g === a.g : !1
  };
  IN.prototype.td = function() {
    return 31 * this.j + 17 * this.g | 0
  };

  function LN(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return JN(a, b)
  };
  ja();
  ma();

  function MN() {
    this.g = this.w = this.j = this.o = null
  }

  function NN(a) {
    var b = new Ie;
    if (a.o) {
      var c = a.o.j >>> 0,
        d = a.o.g >>> 0;
      Ge(b.g, 9);
      var e = b.g;
      He(e, c);
      He(e, d)
    }
    a.j && (c = a.j.j >>> 0, d = a.j.g >>> 0, Ge(b.g, 17), e = b.g, He(e, c), He(e, d));
    c = a.w;
    null != c && (Ge(b.g, 29), He(b.g, c));
    a.g && (c = a.g.j >>> 0, a = a.g.g >>> 0, Ge(b.g, 33), d = b.g, He(d, c), He(d, a));
    a = new Uint8Array(b.o + b.g.length());
    d = b.j;
    e = d.length;
    for (var f = c = 0; f < e; f++) {
      var g = d[f];
      a.set(g, c);
      c += g.length
    }
    d = b.g.end();
    a.set(d, c);
    b.j = [a];
    return a
  };

  function ON(a) {
    return Cc(a, "application/vnd.google-apps.drive-sdk")
  };

  function PN(a) {
    S.call(this, a)
  }
  r(PN, S);

  function QN(a) {
    S.call(this, a)
  }
  r(QN, S);

  function RN(a) {
    S.call(this, "M");
    this.dataType = a
  }
  r(RN, S);

  function SN(a, b, c) {
    T.call(this);
    var d = this;
    this.o = a;
    this.C = this.o.B;
    this.M = c;
    this.w = !1;
    this.A = {};
    this.g = {};
    this.j = 6;
    SD(new QD, [1]);
    this.B = this.o.o;
    TN(this, "Creating find by ids live map: " + this.M.qa().join(", "));
    ij(this, function() {
      d.w = !1;
      d.A = []
    })
  }
  r(SN, T);
  m = SN.prototype;
  m.pa = function() {
    return String(La(this))
  };

  function UN(a) {
    a.w = !0;
    kc(a.g) && 6 == a.j || VN(a)
  }
  m.T = l("M");

  function WN(a) {
    a.A = a.g;
    var b = new GF;
    b.o = a.j;
    b.g = a.g;
    return b
  }
  m.S = l("j");
  m.update = function(a) {
    var b = this;
    0 <= tb(this.T().qa(), "root") ? vi(this.o.Hg, function(c) {
      var d = a.g[c];
      d && (mc(a.g, c), a.g.root = d);
      XN(b, a)
    }) : XN(this, a)
  };

  function XN(a, b) {
    var c;
    if (!(c = a.j != b.S())) {
      c = a.g;
      var d = b.g;
      c = cc(c) != cc(d) || !kc(xN(c, d))
    }
    c && (a.j = b.S(), a.g = b.g, vD(a.o.g) && LF(a.j, Object.values(a.g)), VN(a))
  }
  m.Tf = function(a) {
    this.dispatchEvent(new ZE(new V("Error occurred running a find-by-IDs query after " + a.g + " retries.", a.error)))
  };
  m.Ue = function() {
    this.dispatchEvent(new S("n"))
  };

  function VN(a) {
    a.w && (TN(a, "Returning " + Object.values(a.g).length + ". Status: " + (a.S() + ". Query: ") + SF(a.C, a.M)), a.dispatchEvent(new S("m", a)))
  }

  function TN(a, b) {
    UF(a.B, "drive.ds.sync.IdViewCacheLiveMap", b)
  };

  function YN(a, b) {
    this.o = a;
    this.g = new Map;
    this.j = void 0 === b ? !1 : b
  }
  YN.prototype.create = function(a, b) {
    if ((this.j || !(b instanceof Py || b instanceof TB)) && 0 != pL(b)) {
      this.g.has(a);
      var c = mN(this.o, 106001);
      if (c) {
        b = pL(b);
        var d = rJ(c);
        F(d, 2, b);
        this.g.set(a, c)
      }
    }
  };

  function ZN(a, b, c) {
    if (a = a.g.get(b)) a = rJ(a), F(a, 5, c)
  }

  function $N(a, b, c) {
    var d = a.g.get(b);
    if (d) {
      var e = 0;
      c instanceof MA || c instanceof GF || c instanceof MB ? e = c.Ee() || 0 : c instanceof eG || c instanceof cG ? e = c.j : c instanceof bG && (e = c.j);
      e = jL(qL, e);
      var f;
      if (!(f = 4 == e)) {
        if (c instanceof MA || c instanceof GF || c instanceof MB) var g = c.S();
        else if (c instanceof eG || c instanceof cG) g = c.response ? c.response.S() : null;
        f = 1 == g
      }
      f && (c = rJ(d), F(c, 4, 1), c = rJ(d), F(c, 1, e), e = rJ(d), e.S(), c = B(e, 1), 3 == c || 8 == c ? (c = !C(e, 5), F(e, 6, c)) : 0 != c && (c = aO.has(c), F(e, 6, c)), oJ(d), a.g.delete(b))
    }
  }

  function bO(a, b, c) {
    c = void 0 === c ? 3 : c;
    var d = a.g.get(b);
    if (d) {
      var e = rJ(d);
      F(e, 4, c);
      oJ(d);
      a.g.delete(b)
    }
  }
  var aO = new Set([7, 4, 5, 9, 6, 10, 11]);

  function cO(a, b) {
    this.o = a;
    this.H = a.j;
    this.L = this.o.Bg;
    this.I = this.o.tb;
    this.j = {};
    this.B = {};
    this.C = {};
    this.g = null;
    this.A = b
  }
  cO.prototype.G = function(a) {
    var b = this,
      c = new yN(this.o, this, a);
    dO(this, c);
    ij(c, function() {
      return eO(b, c)
    });
    return c
  };
  cO.prototype.D = function(a) {
    var b = this,
      c = new SN(this.o, this, a);
    dO(this, c);
    ij(c, function() {
      return eO(b, c)
    });
    return c
  };

  function dO(a, b) {
    b.pa();
    b.pa();
    var c = b.pa();
    a.j[c] = b;
    a.A.create(c, b.T());
    if (b.T() instanceof TB) var d = fO(a.L, c, b.T());
    else if (b.T(), b.T() instanceof RB) d = fO(gO(a.o), c, b.T());
    else if (b.T() instanceof Py) d = fO(a.I, c, b.T());
    else {
      d = a.H;
      var e = b.T();
      if (e instanceof VA) {
        if (e = RI(d.g.B, e), hO(d.O, e), b = iO(d, e), jO(b.cache, c), !fB(e)) {
          e = pH(e, d.j);
          e = q(e);
          for (var f = e.next(); !f.done; f = e.next()) kO(d.g.Ij, f.value)
        }
      } else if (e instanceof hA) e = lO(d, e), b = mO(d, e), jO(b.cache, c);
      else if (e instanceof DC) b = e, e = nO(d, b), (f = d.o[e]) ?
        (3 == f.g ? (oO(d, e + " | TeamDriveQueryRequest backed by refreshing existing cache"), f.refresh()) : oO(d, e + " | TeamDriveQueryRequest backed by existing view cache"), b = {
          cache: f,
          ka: !1
        }) : (oO(d, e + " | ItemQueryRequest backed by new cache"), f = new pO(d.g, d.C, b), f.refresh().fa(Fa), d.o[e] = f, b = {
          cache: f,
          ka: !0
        }), jO(b.cache, c);
      else if (e instanceof BC) b = mO(d, e), jO(b.cache, c), d = d.G, e = e.ja(), vH(d, d.j, d.w, e);
      else throw Error("Unsupported query type");
      d = b.ka
    }
    "boolean" === typeof d && ZN(a.A, c, d)
  }

  function eO(a, b) {
    b.pa();
    b.pa();
    if (b.T() instanceof TB) qO(a.L, b.pa(), b.T());
    else if (b.T(), b.T() instanceof RB) qO(gO(a.o), b.pa(), b.T());
    else if (b.T() instanceof Py) qO(a.I, b.pa(), b.T());
    else {
      var c = a.H,
        d = b.pa(),
        e = b.T();
      if (e instanceof VA) e = RI(c.g.B, e), rO(c.O, e);
      else if (e instanceof hA) e = lO(c, e);
      else if (!(e instanceof DC || e instanceof BC)) throw Error("Unsupported query type");
      e = nO(c, e);
      var f = c.o[e];
      f && (sO(f, d), f.ua() && delete c.o[e])
    }
    bO(a.A, b.pa(), 4);
    delete a.j[b.pa()]
  }
  cO.prototype.w = function() {
    Xk(this.g);
    this.g = null;
    var a = Object.keys(this.B),
      b = Object.keys(this.C);
    a = q(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = this.B[c];
      if (d) {
        delete this.B[c];
        var e = this.j[c];
        e && ($N(this.A, c, d), e.update(d))
      }
    }
    b = q(b);
    for (c = b.next(); !c.done; c = b.next())
      if (a = c.value, c = this.C[a])
        if (delete this.C[a], d = this.j[a]) bO(this.A, a, 3), d.Tf(c)
  };

  function tO(a, b) {
    if (!a.j[b]) throw Error("Unable to find live request " + b);
    return a.j[b]
  };
  var uO = {},
    vO = (uO[0] = "/drive/v2internal", uO[1] = "/drive/v2internal.corp", uO[2] = "/drive/v2internal.scary", uO[4] = "/drive/v2internal.scary", uO[5] = "/drive/v2beta", uO[6] = "/drive/v2.1beta", uO);
  var wO, xO = new NC;
  wO = F(xO, 15, !0);
  var yO = PC(new NC, !0),
    zO = PC(new NC, !1);

  function AO(a) {
    if (a instanceof Gt) return "request access";
    if (a instanceof $t) return "admin migrate to TD";
    if (a instanceof jx) return "authorize app";
    if (a instanceof cz) return "copy item";
    if (a instanceof Zy) return "change category links";
    if (a instanceof fz) return "create item";
    if (a instanceof hz) return "create ws";
    if (a instanceof Fz) return "delete item";
    if (a instanceof Gz) return "delete revision";
    if (a instanceof Hz) return "delete TD";
    if (a instanceof Iz) return "delete ws";
    if (a instanceof Vz) return "empty trash";
    if (a instanceof hA) return "find by ID";
    if (a instanceof nA) return "generate IDS";
    if (a instanceof mB) return a = a.T(), fB(a) ? "quick access item query" : gB(a) ? "people predict item query" : hB(a) ? "drive priority query" : "item query";
    if (a instanceof qB) {
      var b = "unknown";
      switch (a.getType()) {
        case 1:
          b = "installed";
          break;
        case 2:
          b = "installed w/ app data";
          break;
        case 3:
          b = "all installable";
          break;
        case 4:
          b = "installed w/ quota"
      }
      return "list apps [" + b + "]"
    }
    return a instanceof tB ? "list changes" : a instanceof BB ? "list permissions" :
      a instanceof rC ? "get published category" : a instanceof vC ? "remove item" : a instanceof wC ? "restore item" : a instanceof RB ? "list suggested workspaces" : a instanceof JC ? "update category metadata" : a instanceof NC ? "update item" : a instanceof QC ? "update revision" : a instanceof RC ? "update TD" : a instanceof TC ? "update ws" : a instanceof UC ? "get account" : a instanceof dG ? "list category metadata" : a instanceof VF ? "create TD" : a instanceof WF ? "get largest change ID" : a instanceof XF ? "list prefs" : a instanceof YF ? "multipart upload" :
      a instanceof fG ? "people api" : a instanceof hG ? "list published categories" : a instanceof FC ? "list TDs" : a instanceof IC ? "get TD stats" : a instanceof ZF ? "test connection" : a instanceof aG ? "list workspaces" : "unknown"
  }

  function BO(a, b, c) {
    null != c && (Ha(c) ? 0 < c.length && a.push(b + ": " + c.join(", ")) : a.push(b + ": " + c))
  }

  function CO(a) {
    if (a instanceof fz || a instanceof YF) return IB(new HB, 8);
    throw Error("Cannot cancel given request type.");
  }

  function DO(a) {
    return EO.includes(a.constructor) ? FO(a) : !1
  }

  function FO(a) {
    if (a instanceof NC) {
      var b = J(F(N(a), 1, void 0), 17, void 0);
      b = Ze(b, wO)
    } else b = !1;
    b || (a instanceof NC ? (a = J(F(N(a), 1, void 0), 17, void 0), b = Ze(a, yO) || Ze(a, zO)) : b = !1);
    return b ? !1 : !0
  }
  var GO = [BB, UC, XF],
    HO = [mB, hA, tB, dG],
    IO = [FC, BC],
    JO = [rC, hG],
    EO = [Gt, jx, $t, Zy, cz, fz, hz, Fz, Gz, Hz, Iz, Vz, vC, wC, JC, NC, QC, RC, TC, VF, YF],
    KO = [tB];

  function LO(a) {
    this.j = {};
    this.g = new Dm(40);
    var b = sG({
      bb: B(a, 28),
      $a: lD(qD(a))
    });
    MO(this, "SecondaryFields", b);
    MO(this, "SdkBackfillEnabled", !!E(a, 45, !1) + " (Include corpus cache: " + !!E(a, 46, !1) + ")")
  }

  function NO(a) {
    return a instanceof mB || a instanceof FC || a instanceof RC || a instanceof Hz || a instanceof fz || a instanceof Fz || a instanceof NC && DO(a)
  }

  function MO(a, b, c) {
    a = a.j;
    var d = new wD;
    F(d, 1, b);
    F(d, 4, 1);
    F(d, 2, String(c));
    F(d, 3, OO[b]);
    a[b] = d
  }

  function PO(a, b, c) {
    var d = new xD;
    F(d, 2, "Pending...");
    b instanceof mB ? L(d, 3, yD[0], b) : b instanceof FC ? L(d, 4, yD[0], b) : b instanceof RC ? L(d, 6, yD[0], b) : b instanceof Hz ? L(d, 7, yD[0], b) : b instanceof fz ? L(d, 8, yD[0], b) : b instanceof Fz ? L(d, 9, yD[0], b) : b instanceof NC && L(d, 10, yD[0], b);
    var e = AO(b),
      f = [];
    if (b instanceof $t) BO(f, "ID", b.F()), BO(f, "Parent ID", B(b, 2));
    else if (b instanceof Hz) BO(f, "TD ID", b.F());
    else if (b instanceof mB) b = II(b.T()), BO(f, "Query", b);
    else if (b instanceof FC) BO(f, "Query", "All");
    else if (b instanceof RC) BO(f, "TD ID", b.F()), BO(f, "Title", B(b, 2)), BO(f, "Theme Image ID", B(b, 3));
    else if (b instanceof fz) BO(f, "MimeType", b.ma()), BO(f, "Title", B(b, 2)), BO(f, "Parents", B(b, 3)), BO(f, "Convert", C(b, 8)), BO(f, "Request ID", B(b, 9)), BO(f, "Parent Request IDs", B(b, 10)), BO(f, "Revision Item ID", B(b, 12)), BO(f, "Pinned", C(b, 8));
    else if (b instanceof hz) BO(f, "Title", B(b, 1));
    else if (b instanceof Fz) BO(f, "ID", b.F());
    else if (b instanceof Iz) BO(f, "WS ID", b.F());
    else if (b instanceof NC) {
      if (BO(f, "ID", b.F()), BO(f, "Title", B(b, 2)),
        BO(f, "Description", B(b, 3)), BO(f, "Starred", C(b, 4)), BO(f, "Trashed", C(b, 5)), BO(f, "MimeType", b.ma()), BO(f, "Parents", B(b, 8)), BO(f, "Parents to add", B(b, 9)), BO(f, "Parents to remove", B(b, 10)), BO(f, "Restricted", C(b, 11)), BO(f, "Folder Color", B(b, 12)), BO(f, "Update Last Viewed", C(b, 15)), BO(f, "Subscribed", C(b, 16)), BO(f, "Available Offline", b.j()), BO(f, "Wksp to add", B(b, 31)), BO(f, "Wksp to remove", B(b, 32)), b = H(b, Cx, 25)) BO(f, "Read Only", C(b, 1)), BO(f, "Reason", B(b, 2))
    } else b instanceof TC ? (BO(f, "WS ID", b.F()), BO(f, "Title",
      B(b, 2)), BO(f, "State", B(b, 3))) : b instanceof VF && BO(f, "Title", b.request.G());
    F(d, 1, "Request: " + e + (c ? " (" + c + ")" : "") + "\n" + f.join("\n"));
    a.g.add(d);
    return d
  }

  function QO(a, b) {
    for (var c = new lG, d = 0; d < b.length && 20 > d; d++) {
      var e = b[d];
      c.Ea(e.F() + ":" + xd(B(e, 3) || "") + "\n")
    }
    20 < b.length && c.Ea(b.length - 20 + " more item(s)");
    F(a, 2, c.toString() || "Done.")
  }
  var OO = {
    CacheSize: "Number of items currently in the in-memory cache.",
    SecondaryFields: "List of secondary fields",
    CachedCorpusType: "Type of corpus cached (folder, linked, subscribed, full, partial).",
    InitialChanges: "Status of initial catchup changelog requests.",
    SdkBackfillEnabled: "Whether backfill via Drive SDK is enabled.",
    UploadFailureCount: "Number of failed uploads.",
    UploadSuccessCount: "Number of successful uploads.",
    UploadTotalCount: "Number of initiated uploads.",
    InitialViewDataLoaded: "Whether initial view data was loaded before the initial query."
  };
  var RO = {
    Ym: 0,
    gn: 1,
    rp: 3,
    Lr: 5
  };

  function SO(a, b, c, d, e, f) {
    f = void 0 === f ? v() : f;
    this.B = a;
    this.A = b;
    this.j = c;
    this.w = d;
    this.g = Mb(e);
    Sb(this.g);
    Qb(this.g);
    this.ae = f;
    this.o = null;
    this.C = this.D = !1
  }
  SO.prototype.Xb = l("B");
  SO.prototype.Kb = l("A");

  function TO(a) {
    if (!a.o) {
      var b = new pm;
      b.update([a.B, a.A, a.j, a.w].join(":"));
      b.update(a.g);
      a.o = se(b.digest())
    }
    return a.o
  }

  function UO(a) {
    return {
      versionKey: TO(a),
      versionInfo: {
        u: a.B,
        c: a.A,
        pv: a.j,
        phk: a.w,
        f: a.g
      },
      lastAccessedTimestamp: a.ae
    }
  }

  function VO(a) {
    var b = !0;
    b = void 0 === b ? !1 : b;
    if (!a) return null;
    var c = a.versionInfo,
      d = a.versionKey;
    if (!c || !d) return null;
    a = new SO(c.u, c.c, c.pv, c.phk, c.f, a.lastAccessedTimestamp);
    b ? a.o = d : TO(a) != d && (a = null);
    return a
  };

  function WO(a, b, c) {
    c = void 0 === c ? !1 : c;
    a.match(XO);
    this.j = a;
    this.g = b;
    this.global = c
  }
  WO.prototype.P = l("g");

  function YO(a, b) {
    return {
      k: ZO(b, a.global, a.j),
      v: a.g
    }
  }
  var XO = /^[\w]+$/;

  function ZO(a, b, c) {
    return [a.Xb(), a.Kb(), b ? "#" : TO(a)].join(":") + ":" + (c || "")
  }

  function $O(a, b) {
    a = ZO(a, b);
    return bK(a + "A", a + "z")
  };

  function aP(a, b) {
    this.pe = a;
    this.oe = b
  }

  function bP(a) {
    return a ? new aP(a.versionKey, a.versionChangeTimestamp) : null
  }

  function cP(a, b) {
    return a + ":" + b
  };

  function dP(a, b, c, d, e) {
    this.data = a;
    this.index = b;
    this.size = c;
    this.timestamp = d;
    this.Ke = void 0 === e ? null : e
  }

  function eP(a, b, c, d) {
    a = TO(a) + "_" + b;
    3 == b && (a += "_" + d);
    return a += Bm(":%02d", c)
  }

  function fP(a, b, c, d) {
    c = eP(a, b, void 0 === c ? 0 : c, d);
    a = TO(a) + "_" + b;
    3 == b && (a += "_" + d);
    return bK(c, a + ":a")
  }

  function gP(a) {
    var b = TO(a) + "_";
    a = TO(a) + "_A";
    return bK(b, a)
  }

  function hP(a) {
    return a ? new dP(a.data, a.index, a.size, a.timestamp, a.e) : null
  };

  function iP(a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? !1 : d;
    Q.call(this);
    var e = this;
    this.o = null;
    this.O = a.then(function(f) {
      e.o = f
    });
    this.B = b;
    this.L = c;
    this.G = d;
    this.j = null;
    this.I = !1;
    this.H = !0;
    this.A = null;
    this.g = !1;
    this.w = "";
    this.D = new Mm(this);
    R(this, this.D);
    this.C = null
  }
  r(iP, Q);

  function jP(a, b) {
    a.A || (a.A = bi(), a.O.then(function() {
      b ? (a.H = !1, kP(a, b), UF(a.B, "drive.ds.sync.storage.VersionedDb", "Initialized database GoogleDriveDs with existing IndexedDb"), a.A.resolve()) : (a.L && (a.C = mN(a.L, 106004)), UF(a.B, "drive.ds.sync.storage.VersionedDb", "Opening database GoogleDriveDs (version 2)"), wi(tK("GoogleDriveDs", 2, a.Dl.bind(a), a.ug.bind(a)), a.Fl.bind(a), a.ug.bind(a)), Yk(2E4).then(a.El.bind(a)))
    }, function(c) {
      a.A.reject(new V("Database version error", void 0, zF(c) ? c : void 0))
    }));
    return a.A.g
  }

  function kP(a, b) {
    a.j = b;
    a.D.R(a.j, "close", a.Ld.bind(a, "Browser closing database"));
    a.D.R(a.j, "versionchange", a.Ld.bind(a, "Database version change detected, closing"))
  }
  m = iP.prototype;
  m.Dl = function(a, b) {
    UF(this.B, "drive.ds.sync.storage.VersionedDb", "Upgrading GoogleDriveDs to version " + a.newVersion);
    this.I = !0;
    vb(b.g.objectStoreNames, function(c) {
      return qK(b, c)
    });
    Zb(lP, function(c) {
      var d = mP.get(c);
      pK(b, c, d ? {
        keyPath: d
      } : void 0)
    })
  };
  m.ug = function(a) {
    var b;
    a && a instanceof JJ && "InvalidStateError" == (a.kg.name || "") && je ? b = Error("Database not available") : zF(a) && (b = a);
    this.Ld("Unable to open database GoogleDriveDs (version 2)");
    this.A.reject(b);
    nP(this, !1)
  };
  m.Fl = function(a) {
    this.g ? a.dispose() : (kP(this, a), R(this, this.j), this.G || oP(this).fa(h()), UF(this.B, "drive.ds.sync.storage.VersionedDb", "Initialized database GoogleDriveDs"), this.A.resolve(), nP(this, !0))
  };

  function nP(a, b) {
    if (a.C) {
      var c = a.C,
        d = H(qJ(c), Cq, 5);
      d || (d = new Cq, c = qJ(c), J(c, 5, d));
      d = F(d, 1, 2);
      d = F(d, 2, a.o.j);
      d = F(d, 5, a.o.D);
      b = F(d, 3, b);
      F(b, 4, a.I);
      oJ(a.C);
      a.C = null
    }
  }
  m.El = function() {
    this.j || this.g || (this.Ld("Opening database GoogleDriveDs timed out."), this.ug(Error("Opening database GoogleDriveDs timed out.")))
  };
  m.Ld = function(a) {
    UF(this.B, "drive.ds.sync.storage.VersionedDb", a);
    this.g || (this.g = !0, this.w = "Database disabled: " + a, this.j && this.H && this.j.close())
  };

  function pP(a) {
    return a.g ? a.w : null
  }

  function qP(a, b, c) {
    c = void 0 === c ? "readonly" : c;
    if (a.G && "readonly" != c) return null;
    a = a.j;
    try {
      return rK(a, [b], c)
    } catch (d) {
      return null
    }
  }

  function oP(a) {
    var b = qP(a, "Versions", "readwrite");
    if (!b) return P(Error("No transaction to update version access"));
    iK(b.objectStore("Versions"), UO(a.o));
    return b.wait().then(h())
  }

  function rP(a) {
    if (!a.j) return P(Error("Not ready to remove version"));
    if (a.g) return P(Error(a.w));
    var b = qP(a, "Versions", "readwrite");
    return b ? b.objectStore("Versions").remove(TO(a.o)).then() : P(Error("No transaction to remove version"))
  }

  function sP(a, b, c) {
    if (!a.length) return b.resolve([]), null;
    var d = [];
    a.forEach(function(g) {
      (g = hP(g)) && (d[g.index] = g)
    });
    if (!d[0]) return b.reject(Error("First shard missing")), 0;
    a = d[0].timestamp;
    if (!a) return b.reject(Error("No timestamp in first shard")), 0;
    var e = d[0].size;
    if (!e) return b.reject(Error("No size on first shard")), 0;
    if (e > d.length) return b.reject(Error("size (" + e + ") > #shards (" + d.length + ")")), 0;
    for (var f = 0; f < e; f++)
      if (!d[f] || d[f].size != e || d[f].timestamp != a) return b.reject(Error("missing shard i:" +
        e)), 0;
    if (c && a < c) return b.reject(Error("timestamp (" + a + ") < expiration (" + c + ")")), d.length > e ? e : null;
    if (d.length > e) return b.resolve(d.slice(0, e)), e;
    b.resolve(d);
    return null
  }

  function tP(a, b, c, d) {
    if (!a.j || 3 == b && void 0 == c) return P(Error("Not ready to get shards"));
    if (a.g) return P(Error(a.w));
    var e = fP(a.o, b, 0, c),
      f = qP(a, "Data");
    if (!f) return P(Error("no transaction to get shards"));
    e = jK(f.objectStore("Data"), e);
    var g = bi();
    wi(e, function(k) {
      k = sP(k, g, d);
      a.G || null == k || uP(a, b, c, k).fa(h())
    }, g.reject);
    return g.g
  }

  function vP(a, b, c, d, e) {
    if (a.j) {
      if (a.g) return P(Error(a.w));
      if (100 < b.length || 3 == c && void 0 == d) return P(Error("Invalid input for put shards"))
    } else return P(Error("Not ready to put shards"));
    var f = v(),
      g = b.length,
      k = new Map;
    b.forEach(function(p, x) {
      var A = eP(a.o, c, x, d);
      k.set(A, new dP(p, x, g, f, e))
    });
    b = qP(a, "Data", "readwrite");
    if (!b) return P(Error("No transaction to put shards"));
    var n = b.objectStore("Data");
    k.forEach(function(p, x) {
      iK(n, {
        data: p.data,
        index: p.index,
        size: p.size,
        timestamp: p.timestamp,
        e: p.Ke
      }, x)
    });
    return b.wait().then(h())
  }

  function uP(a, b, c, d) {
    d = void 0 === d ? 0 : d;
    if (a.j) {
      if (a.g) return P(Error(a.w));
      if (3 == b && void 0 == c) return P(Error("Invalid input for remove shards"))
    } else return P(Error("Not ready to remove shards"));
    b = fP(a.o, b, d, c);
    a = qP(a, "Data", "readwrite");
    if (!a) return P(Error("No transaction to remove shards"));
    a.objectStore("Data").remove(b);
    return a.wait().then(h())
  }

  function wP(a) {
    if (!a.j) return P(Error("Not ready to remove all shards"));
    if (a.g) return P(Error(a.w));
    var b = gP(a.o);
    a = qP(a, "Data", "readwrite");
    if (!a) return P(Error("No transaction to remove all shards"));
    a.objectStore("Data").remove(b);
    return a.wait().then(h())
  }

  function xP(a, b) {
    if (a.j) {
      if (a.g) return P(Error(a.w));
      if (b && 0 == b.length) return P(Error("Invalid input for get metadata"))
    } else return P(Error("Not ready to get metadata"));
    var c = a.o;
    a = qP(a, "Metadata");
    if (!a) return P(Error("No transaction to get metadata"));
    var d = a.objectStore("Metadata");
    if (b) {
      var e = [];
      b.forEach(function(g) {
        e.push(d.get(ZO(c, g.global, g.key)).then())
      });
      b = $h(e)
    } else b = $h([jK(d, $O(c, !1)).then(), jK(d, $O(c, !0)).then()]).then(function(g) {
      return Lb(g[0], g[1])
    });
    var f = bi();
    b.then(function(g) {
      f.resolve(g.map(function(k) {
        if (k) {
          var n =
            k.k.split(":"),
            p = "#" == n[2];
          k = 4 != n.length || !p && n[2] != TO(c) || n[0] != c.Xb() || n[1] != String(c.Kb()) ? null : new WO(n[3], k.v, p)
        } else k = null;
        return k
      }))
    }, f.reject);
    return f.g
  }

  function yP(a, b) {
    if (a.j) {
      if (a.g) return P(Error(a.w));
      if (0 == b.length) return P(Error("Invalid input for put metadata"))
    } else return P(Error("Not ready to put metadata"));
    var c = qP(a, "Metadata", "readwrite");
    if (!c) return P(Error("No transaction to put metadata"));
    var d = c.objectStore("Metadata"),
      e = [];
    b.forEach(function(f) {
      e.push(iK(d, YO(f, a.o)).then())
    });
    return $h(e).then(h())
  }

  function zP(a, b) {
    b = void 0 === b ? !1 : b;
    if (a.j) {
      if (a.g) return P(Error(a.w))
    } else return P(Error("Not ready to remove metadata"));
    var c = a.o;
    a = qP(a, "Metadata", "readwrite");
    if (!a) return P(Error("No transaction to remove metadata"));
    a = a.objectStore("Metadata");
    var d = [];
    d.push(a.remove($O(c, !1)).then());
    b && d.push(a.remove($O(c, !0)).then());
    return $h(d).then(h())
  }

  function AP(a) {
    if (!a.j) return P(Error("Not ready to get offline"));
    if (a.g) return P(Error(a.w));
    var b = cP(a.o.Xb(), a.o.Kb());
    return (a = qP(a, "Offline")) ? a.objectStore("Offline").get(b).then(function(c) {
      return bP(c)
    }) : P(Error("No transaction to get offline"))
  }

  function BP(a, b) {
    b = void 0 === b ? !1 : b;
    if (!a.j) return P(Error("Not ready to internally set offline"));
    if (a.g) return P(Error(a.w));
    var c = a.o,
      d = cP(c.Xb(), c.Kb());
    b = new aP(TO(c), b ? v() : void 0);
    a = qP(a, "Offline", "readwrite");
    if (!a) return P(Error("No transaction to internally set offline"));
    iK(a.objectStore("Offline"), {
      versionKey: b.pe,
      versionChangeTimestamp: b.oe
    }, d);
    return a.wait().then(h())
  }
  m.Qb = function(a) {
    var b = this;
    return this.j ? this.g ? P(Error(this.w)) : AP(this).then(function(c) {
      var d = TO(b.o);
      if (c)
        if (a) {
          if (!c.oe && d == c.pe && d != TO(a)) return BP(b, !0);
          if (c.oe && d == TO(a)) return BP(b)
        } else {
          if (d != c.pe) return BP(b)
        }
      else if (!a) return BP(b)
    }) : P(Error("Not ready to set offline"))
  };

  function CP(a) {
    if (!a.j) return P(Error("Not ready to remove offline"));
    if (a.g) return P(Error(a.w));
    var b = a.o,
      c = cP(b.Xb(), b.Kb());
    return AP(a).then(function(d) {
      if (d && (d = qP(a, "Offline", "readwrite"))) return d.objectStore("Offline").remove(c).then()
    })
  }
  m.clear = function(a) {
    var b = this;
    a = void 0 === a ? !1 : a;
    return this.j ? this.g ? P(Error(this.w)) : AP(this).then(function(c) {
      var d = c && c.pe == TO(b.o);
      return d && !a ? !1 : (c && d ? CP(b) : Wh()).then(function() {
        return $h([zP(b, a), wP(b), rP(b)]).then(ca(!0), ca(!1))
      }, ca(!1))
    }) : P(Error("Not ready to clear"))
  };
  m.close = function() {
    this.Ld("Closing database")
  };
  var lP = {
      Nr: "Versions",
      Fp: "Metadata",
      yo: "Data",
      OFFLINE: "Offline"
    },
    mP = new Map([
      ["Versions", "versionKey"],
      ["Metadata", "k"]
    ]);

  function DP() {
    var a = bi();
    wi(tK("GoogleDriveDs"), function(b) {
      b ? EP(b) ? a.resolve(b) : (b.close(), ei(uK().then(), function() {
        return a.resolve(null)
      })) : a.resolve(null)
    }, function() {
      a.resolve(null)
    });
    return a.g
  }

  function EP(a) {
    if (1 >= Number(a.g.version)) return !1;
    var b = a.g.objectStoreNames;
    return dc(lP).every(function(c) {
      return b && b.contains(c)
    })
  }

  function FP(a, b, c) {
    var d = bi();
    a ? wi(jK(rK(a, ["Versions"], "readonly").objectStore("Versions")), function(e) {
      e = dc(e).map(function(f) {
        return VO(f)
      }).filter(function(f) {
        return null != f
      });
      d.resolve(e.filter(function(f) {
        return (!b || f.Xb() == b) && (!c || f.Kb() == c)
      }))
    }, d.reject) : d.resolve([]);
    return d.g
  }

  function GP(a, b, c) {
    var d = bi();
    DP().then(function(e) {
        e ? rK(e, ["Offline"], "readonly").objectStore("Offline").get(a + ":" + b).then(function(f) {
          return bP(f)
        }).then(function(f) {
          if (f) {
            var g = "number" === typeof c && "number" === typeof f.oe && v() > c + f.oe,
              k = rK(e, ["Versions"], "readonly");
            k.objectStore("Versions").get(f.pe).then(function(n) {
              (n = VO(n)) ? (n.D = !0, g && (n.C = !0), d.resolve(n)) : d.resolve(null)
            });
            yi(k.wait(), function() {
              return e.close()
            })
          } else d.resolve(null), e.close()
        }, function(f) {
          d.reject(f);
          e.close()
        }) : d.resolve(null)
      },
      d.reject);
    return d.g
  }

  function HP(a, b, c) {
    var d = bi(),
      e = new iP(Wh(a), b);
    jP(e, c).then(function() {
      return d.resolve(e)
    }, d.reject);
    return d.g
  }

  function IP(a, b, c) {
    var d = v() - 12096E5,
      e = bi();
    DP().then(function(f) {
      f ? (ei(e.g, function() {
        return f.close()
      }), FP(f, a, b).then(function(g) {
        return g.filter(function(k) {
          return k.ae < d
        })
      }, function() {
        return []
      }).then(function(g) {
        JP(g, c, f, e)
      })) : e.resolve([])
    });
    return e.g
  }

  function JP(a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    var f = [];
    a.forEach(function(g) {
      var k = HP(g, b, c);
      f.push(k.then(function(n) {
        return n.clear(e)
      }).then(function(n) {
        return n ? g : void 0
      }))
    });
    $h(f).then(function(g) {
      var k = [];
      g.forEach(function(n) {
        n && (k.push(n), UF(b, "drive.ds.sync.storage.VersionedDb", "Cleared version: " + TO(n)))
      });
      d.resolve(k)
    })
  }

  function KP(a, b, c, d, e, f, g) {
    f = void 0 === f ? [] : f;
    var k = bi();
    DP().then(function(n) {
      n ? (ei(k.g, function() {
        return n.close()
      }), FP(n, a, b).then(function(p) {
        return p.filter(function(x) {
          return (!g || g != TO(x)) && x.j == c && x.ae >= e && BG(d, Mb(x.g), b)
        })
      }, function() {
        return []
      }).then(function(p) {
        p.length ? (p.sort(function(x, A) {
          return A.ae - x.ae
        }), LP(p, k, n, new Set(f))) : k.resolve(null)
      })) : k.resolve(null)
    });
    return k.g
  }

  function LP(a, b, c, d) {
    if (a.length) {
      var e = a.shift(),
        f = eP(e, 3, 0, 1);
      try {
        rK(c, ["Data"], "readonly").objectStore("Data").get(f).then(function(g) {
          (g = hP(g)) && (!g.Ke || g.Ke && d.has(e.w)) ? b.resolve(e): LP(a, b, c, d)
        }, function() {
          return b.resolve(null)
        })
      } catch (g) {
        b.resolve(null)
      }
    } else b.resolve(null)
  };

  function MP() {
    S.call(this, "VbxEwf")
  }
  r(MP, S);

  function NP(a) {
    this.g = a
  }
  m = NP.prototype;
  m.Hh = function() {
    return H(this.g.g, aD, 58)
  };
  m.Ih = l("g");
  m.Uf = function() {
    return this.g.o
  };
  m.Nh = function(a) {
    return Fi(rH(this.g.j.j, a))
  };
  m.Jh = function() {
    return Fi(this.g.U.g.sa())
  };
  m.Vf = function() {
    var a = this.g.w,
      b = a.g.bind(a);
    a = {};
    a.b = B(this.g.g, 62);
    a.m_ril = b("jroI5d");
    a.m_cil = b("T8oKm");
    a.m_icp = b("aU7Ts");
    a.m_idl = b("ZA9qG");
    a.m_il = b("W6J7De");
    a.m_if = b("DEJoH");
    a.m_pl = b("zaOY7");
    a.m_ps = b("mrK8ic");
    a.m_sls = b("Gv4zef");
    a.m_cp = b("BNEDtc");
    a.cs_cs = this.g.Hi();
    b = this.g.j.w;
    var c = b.g;
    c && (a.cs_sutd = c.w, a.cs_ss = c.Qd());
    a.cs_ch = OP(b).length;
    a.cs_td = Mb(b.j).length;
    (b = this.g.Bj) && (a.t_cps = PP(b.g.subscribed.yd).join(","));
    a.t_id = QP(this.g);
    var d = [];
    RP(this.g.xa).forEach(function(e, f) {
      d.push(f +
        ":" + e.join(";"))
    });
    a.t_ct = d.join(",");
    a.n_a = this.g.Ia.yb();
    a.n_o = this.g.A.g();
    return Fi(JSON.stringify(a))
  };

  function SP(a) {
    this.g = a;
    GG(LG(this.g), TP);
    GG(LG(this.g), UP)
  }
  var TP = [50],
    UP = [12, 11, 10, 67, 68];

  function VP(a) {
    new SP(a.I)
  };

  function WP() {
    u(this.o, this);
    this.g = new hn;
    this.g.j = !1;
    this.g.o = !1;
    this.j = this.g.g = !1;
    this.w = {}
  }
  WP.prototype.o = function(a) {
    function b(f) {
      if (f) {
        if (f.value >= Vi.value) return "error";
        if (f.value >= Wi.value) return "warn";
        if (f.value >= Xi.value) return "log"
      }
      return "debug"
    }
    if (!this.w[a.j()]) {
      var c = jn(this.g, a),
        d = XP;
      if (d) {
        var e = b(a.w());
        YP(d, e, c, a.g())
      }
    }
  };
  var ZP = null,
    XP = t.console;

  function YP(a, b, c, d) {
    if (a[b]) a[b](c, d || "");
    else a.log(c, d || "")
  };

  function $P(a) {
    T.call(this);
    this.w = "drive.ds.sync.BaseItemService";
    this.context = a;
    new VP(a);
    this.G = new NP(a);
    HF(this.G);
    var b = H(a.g, aD, 58);
    b && E(b, 1, !1) && (ZP || (ZP = new WP), t.location && -1 != t.location.href.indexOf("Debug=true") && (b = ZP, 1 != b.j && ($i || ($i = new Ti), b.j = !0)));
    this.Y = new Mm(this);
    R(this, this.Y);
    this.g = this.context.w;
    this.L = new YN(a.L, E(a.g, 78, !1));
    this.A = new cO(a, this.L);
    a = this.context;
    b = this.A;
    a.rg = b;
    a.ye.resolve(b);
    this.j = null;
    this.H = this.o = !1;
    this.B = null;
    this.wh()
  }
  r($P, T);
  m = $P.prototype;
  m.wh = h();
  m.Gh = function() {
    this.j || (this.j = bi(), this.B = mN(this.context.L, 106E3), UF(this.context.o, this.w, "Initializing with client build: " + B(this.context.g, 62)), this.Fi(), this.Y.R(this.context, "j", this.ll), this.context.Ae ? this.Y.R(this.context.Ae, ["J", "K", "L"], this.dispatchEvent) : this.Y.R(this.context.Ia, ["H", "I"], this.dispatchEvent), this.g.start(), UG(this.g, "NSockf"));
    return this.j.g
  };
  m.gi = function() {
    this.B && oJ(this.B);
    UF(this.context.o, this.w, "Ready to process requests.");
    this.o || (this.o = !0, this.j.resolve())
  };
  m.ll = function(a) {
    var b = a.error,
      c = b.ab;
    c && 3 == c.getType() && !this.o ? (this.o = !0, this.j.reject(b)) : this.dispatchEvent(a)
  };
  m.query = function(a) {
    UI(this.context.B, a, oa(this.context.I.j).concat());
    this.ed();
    var b = this.A.G(N(a));
    this.H || (a = a.bd(), a && 121 == B(a, 1) || (this.H = !0, this.Y.R(b, "m", this.Ei)));
    return b
  };
  m.Ei = function(a) {
    a = a.j;
    1 == a.S() && this.Y.hb(a, "m", this.Ei)
  };
  m.Fh = function(a) {
    this.ed();
    TI(a);
    return this.A.D(N(a))
  };
  m.Ve = h();
  m.Qb = function(a) {
    this.context.A.Qb(a)
  };
  m.Sf = function() {
    throw new V("setOfflineOptIn is unsupported", xF(3));
  };
  m.ed = h();
  m.Rh = l("G");
  m.Rf = h();
  m.yb = function() {
    return this.context.Ia.yb()
  };
  m.sync = function() {
    throw new V("sync is unsupported", xF(3));
  };
  m.Ie = function() {
    return uN(this.context)
  };

  function aQ(a) {
    $P.call(this, a);
    wN(a, "");
    bQ(a, "");
    this.w = "drive.ds.sync.AnonymousItemService"
  }
  r(aQ, $P);
  aQ.prototype.Fi = function() {
    TG(this.g, ["NSockf"], this.gi.bind(this))
  };

  function cQ(a) {
    this.j = a;
    this.A = this.j.g;
    this.g = null;
    this.w = 3;
    this.o = 0;
    this.B = this.j.j.D
  }

  function dQ(a) {
    var b = new VC;
    F(b, 1, a.w);
    a.g && (a = a.g ? N(a.g) : null, J(b, 2, a));
    return b
  }

  function eQ(a, b, c, d) {
    if (1 == a.w && !d) return !1;
    a.o = c;
    c = !a.g;
    var e = !Ze(a.g, b) || 6 == a.w && d,
      f = H(b, Ht, 1);
    bQ(a.j, f.F());
    f = sD(a.A);
    a.g = N(b);
    if (vD(a.A)) {
      b = a.g && H(a.g, Ht, 1);
      var g;
      (g = !b) || (b = B(b, 11), g = !fQ(a.B.g, b));
      a.w = !g && d || f ? 1 : 6
    } else a.w = d || f ? 1 : 6;
    c && (UG(a.j.w, "toquGd"), UF(a.j.o, "drive.ds.sync.account.InMemoryAccountCache", "Account loaded from " + (d ? "server" : "cache")));
    e && a.j.C.update(0);
    return e
  };

  function gQ() {
    T.call(this);
    this.g = Date.now()
  }
  r(gQ, T);

  function hQ(a) {
    a.g = Date.now();
    a.dispatchEvent("O")
  };

  function iQ(a) {
    T.call(this);
    this.G = a
  }
  r(iQ, T);

  function jQ(a) {
    function b(c) {
      return c.toLowerCase()
    }
    a = N(a);
    hu(a, B(a, 4).map(b));
    iu(a, B(a, 5).map(b));
    return a
  }
  iQ.prototype.A = h();
  iQ.prototype.remove = h();
  iQ.prototype.w = h();

  function kQ(a, b, c, d) {
    iQ.call(this, b);
    this.D = a;
    this.B = c;
    this.H = d;
    this.g = {};
    this.j = [];
    this.o = 6;
    this.C = !1
  }
  r(kQ, iQ);
  kQ.prototype.A = function() {
    var a = new pw;
    if (!kc(this.g)) {
      F(a, 4, this.j || []);
      var b = [];
      Zb(this.g, function(c) {
        b.push(N(c))
      });
      M(a, 2, b)
    }
    F(a, 1, this.o);
    return a
  };
  kQ.prototype.remove = function(a) {
    mc(this.g, a) && this.B.update(1)
  };
  kQ.prototype.w = function(a, b) {
    1 == this.o && b || (lQ(this, a, b), b || this.B.update(1), this.C || (this.C = !0, UF(this.D, "drive.ds.sync.appsettings.InMemoryAppSettingsCache", "Apps initialized."), UG(this.G, "nVUlO")))
  };

  function lQ(a, b, c) {
    var d = !1,
      e = c && !a.H.g() ? 6 : 1;
    d = e != a.o;
    a.o = e;
    e = B(b, 4);
    if (!d)
      if (e.length != a.j.length) d = !0;
      else {
        var f = e.concat(a.j);
        Qb(f);
        d = f.length != a.j.length
      } a.j = e;
    var g = nc(a.g);
    lc(a.g);
    b = I(b, fu, 2);
    d || (d = b.length != cc(g));
    b.forEach(function(k) {
      var n = jQ(k);
      a.g[k.F()] = n;
      d || (k = g[k.F()], d = !k || !Ze(n, k))
    });
    UF(a.D, "drive.ds.sync.appsettings.InMemoryAppSettingsCache", (c ? "Stale" : "Fresh") + " apps loaded: " + b.length);
    d && a.dispatchEvent(new S("P", a))
  };

  function mQ(a) {
    T.call(this);
    this.w = a;
    this.j = !0;
    this.g = this.o = null
  }
  w(mQ, T);
  mQ.prototype.yb = l("j");
  mQ.prototype.A = function() {
    nQ(this);
    this.g && (EK(this.g), this.o = t.setTimeout(this.A.bind(this), this.g.P()))
  };

  function nQ(a) {
    Wh().then(function() {
      return oQ(a)
    })
  }

  function oQ(a) {
    pQ(a, "Checking authentication state.");
    qQ(a.w).then(function(b) {
      return rQ(b, new ZF)
    }).then(null, pb)
  }

  function pQ(a, b) {
    UF(a.w.o, "drive.ds.sync.auth.StateManager", b)
  };

  function sQ(a) {
    return a.map(function(b) {
      return b.item
    })
  }

  function tQ(a) {
    var b = {};
    a.forEach(function(c) {
      b[c.item.F()] = c.item
    });
    return b
  };

  function uQ(a, b) {
    this.B = a;
    this.C = b;
    this.j = !0;
    this.w = !1;
    this.G = 0
  }

  function vQ(a) {
    a.j = !1;
    a.Ii()
  }
  m = uQ.prototype;
  m.jg = function(a, b) {
    var c = this;
    if (5 == this.Hb(a)) throw Error("This request cannot be answered.");
    var d = [];
    vb(this.vb(), function(e) {
      JH(c.B, a, e.item) && d.push(e)
    });
    this.C.sort(a, d, b);
    return d
  };
  m.Qd = function() {
    return this.vb().length
  };
  m.Od = function(a) {
    a = this.jg(a, void 0);
    a = sQ(a);
    var b = new MA;
    b.ub(a);
    b.Nd(this.Ze() ? 6 : 1);
    return b
  };
  m.update = function(a) {
    var b = this.Ob(a.j),
      c = this.Ob(a.g);
    if (!b && !c) return !1;
    b && this.Kd(a.j);
    c && this.yg(a.g);
    return !0
  };
  m.Hb = function(a) {
    return this.j && this.w ? FH(a) ? 1 : 5 : 5
  };
  m.vd = function() {
    this.w = !0
  };
  m.Ob = function(a) {
    return !!a && this.j
  };
  m.Va = ba("G");
  m.mc = l("G");

  function wQ(a, b, c, d, e) {
    uQ.call(this, a, b);
    this.H = c;
    this.M = RI(c, d, !0);
    this.g = [];
    this.A = {};
    this.o = !e;
    xQ(this, e);
    this.D = u(this.C.j, this.C, this.M)
  }
  r(wQ, uQ);
  m = wQ.prototype;
  m.T = l("M");
  m.yg = function(a) {
    var b = this.A[a.item.F()];
    b && this.Kd(b);
    Wb(this.g, a, this.D);
    this.A[a.item.F()] = a;
    a.count++;
    this.g.length > this.M.ca() && (this.Kd(sb(this.g)), this.o = !1)
  };
  m.Kd = function(a) {
    var b = this.g,
      c = Rb(b, this.D || Tb, a);
    0 <= c && Gb(b, c);
    mc(this.A, a.item.F());
    a.count--
  };
  m.Ii = function() {
    vb(this.g, function(a) {
      a.count--
    });
    this.g = [];
    this.A = {}
  };
  m.vb = l("g");
  m.Hb = function(a) {
    return this.H.oa(this.M, a, !0) && BG(a.ja(), this.M.ja()) ? this.o ? 1 : 6 : 5
  };
  m.jg = function(a, b) {
    if (5 == this.Hb(a)) throw Error("This request cannot be answered.");
    b = b ? Math.min(b, this.g.length) : this.g.length;
    return Pb(this.g, 0, b)
  };
  m.Ob = function(a) {
    if (!uQ.prototype.Ob.call(this, a) || !JH(this.B, this.M, a.item)) return !1;
    if (this.o || E(this.M, 48, !1)) return !0;
    var b = sb(this.g);
    return !!b && 0 >= this.D(a, b)
  };
  m.Ze = function() {
    return this.o ? !1 : !0
  };
  m.getType = ca("CacheHintCorpusCache");
  m.mb = function(a, b) {
    var c = this,
      d = sb(this.g);
    !this.o && d && Bb(a, function(e) {
      return e.item.F() == d.item.F()
    }) && (b ? (this.Kd(d), xQ(this, sb(a))) : this.o = !0);
    vb(a, function(e) {
      c.update(GN(e))
    })
  };

  function xQ(a, b) {
    b && JH(a.B, a.M, b.item) && a.yg(b)
  };

  function yQ(a) {
    Q.call(this);
    this.context = a;
    this.Y = new Mm(this);
    R(this, this.Y);
    this.B = new FL;
    this.g = 6;
    this.H = 0
  }
  w(yQ, Q);

  function jO(a, b) {
    a.B.add(b);
    a.Pd(!0);
    zQ(a, b)
  }

  function sO(a, b) {
    a.B.contains(b);
    a.B.remove(b);
    0 != a.B.g.o || a.pi() ? a.Pd(!1) : a.dispose()
  }
  m = yQ.prototype;
  m.mc = l("H");
  m.Va = ba("H");

  function AQ(a, b, c) {
    if (Ha(c)) c.forEach(function(f, g, k) {
      return k[g] = N(f)
    });
    else {
      for (var d in c) {
        var e = c[d];
        c[d] = e ? N(e) : null
      }
      c = Object.values(c).filter(function(f) {
        return null != f
      })
    }
    C(a.context.g, 68) && (d = c.filter(function(f) {
      return !mH(f)
    }), wG(b.concat([1004, 1005, 1002, 1003]), d));
    BQ(a.context.j, c, b);
    c.forEach(function(f) {
      CQ(a.context.Kj, f, b);
      if (f.Z()) {
        var g = yy(f);
        mH(f) ? g && (qx(g, C(g, 13)), ox(g, !1), ux(g, !1)) : eH(f) ? (g && F(g, 3, !1), F(f, 30, !1)) : g && (yx(g, !1), zx(g, !1))
      }
    })
  }
  m.mb = function(a, b) {
    var c = !1;
    vb(a, function(d) {
      d = GN(d);
      c = this.fd(d, !0) || c
    }, this);
    b || (1 != this.g && (c = !0), this.g = 1);
    c && DQ(this)
  };

  function EQ(a, b) {
    var c = !1;
    vb(b, function(d) {
      c = this.fd(d) || c
    }, a);
    c && DQ(a);
    return c
  }
  m.update = function(a) {
    return EQ(this, [a])
  };

  function DQ(a) {
    a.th();
    vb(a.B.sa(), function(b) {
      zQ(this, b)
    }, a)
  }
  m.th = h();

  function zQ(a, b) {
    var c = FQ(a.context);
    c = tO(c, b).T();
    a.ni(c) || (c = a.Od(c), a = FQ(a.context), a.B[b] = c, a.g || (a.g = Wk(a.w, 50, a)))
  }

  function GQ(a, b) {
    a.g = 3;
    a.B.sa().forEach(function(c) {
      var d = FQ(a.context);
      d.C[c] = b;
      d.g || (d.g = Wk(d.w, 50, d))
    })
  }

  function HQ(a) {
    a.B.sa().forEach(function(b) {
      (b = FQ(a.context).j[b]) && b.Ue()
    });
    a.Va(0 == a.mc() ? 1 : 6)
  }
  m.pi = ca(!1);
  m.ni = ca(!1);

  function IQ(a) {
    S.call(this, "p");
    this.id = a
  }
  r(IQ, S);

  function JQ(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    T.call(this);
    this.M = a;
    this.D = c || a;
    this.g = b;
    this.w = new Set;
    this.j = null;
    this.A = {};
    this.C = [];
    this.B = [];
    this.o = null;
    this.H = d
  }
  r(JQ, T);

  function KQ(a) {
    if (a.j) return a.j.g;
    a.j = bi();
    a.M.qa().forEach(function(b) {
      var c = kA(N(a.M), [b]),
        d;
      a.H && (d = {
        Wm: !0
      });
      qQ(a.g).then(function(e) {
        return rQ(e, c, d)
      }).then(function(e) {
        return void LQ(a, e)
      }, function(e) {
        if (5 == e.lc() || 4 == e.eb()) a.B.push(b), MQ(a);
        else {
          var f = new NF(AF(e), D(oD(a.g.g), 1, 1));
          NQ(a.g.j, a.M, f);
          a.dispatchEvent(f);
          a.j.reject(yF(e))
        }
      })
    });
    return a.j.g
  }

  function LQ(a, b) {
    b.Kc().ta().forEach(function(c) {
      F(c, 82, 1);
      a.C.push(c)
    });
    MQ(a)
  }

  function MQ(a) {
    a.o || (a.o = t.setTimeout(a.G.bind(a), 10))
  }
  JQ.prototype.G = function() {
    t.clearTimeout(this.o);
    this.o = null;
    OQ(this);
    PQ(this);
    this.w.size == this.M.qa().length ? (QQ(this.g.j, [], 1, this.D, !1), this.dispatchEvent("r"), this.j.resolve(this.A)) : this.dispatchEvent("o")
  };

  function OQ(a) {
    var b = a.C;
    a.C = [];
    b = RQ(a.g.Je, b);
    if (lD(qD(a.g.g))) {
      var c = a.g.j.j;
      vb(b, function(d) {
        var e = rH(c, d.F());
        e && ey(d, B(e, 2))
      })
    }
    b.forEach(function(d) {
      a.w.add(d.F());
      a.A[d.F()] = d
    });
    QQ(a.g.j, b, 1, a.D, !0)
  }

  function PQ(a) {
    var b = a.B;
    a.B = [];
    b.forEach(function(c) {
      var d = F(vA(new tA, c), 3, !0);
      SQ(a.g.j, [d]);
      a.w.add(c);
      a.A[c] = null;
      a.dispatchEvent(new IQ(c))
    })
  };

  function TQ(a, b, c, d) {
    yQ.call(this, a);
    this.o = b;
    this.M = c;
    this.j = {};
    d && this.mb(d, !0)
  }
  w(TQ, yQ);
  m = TQ.prototype;
  m.refresh = function() {
    var a = this;
    this.g = 6;
    if (E(this.M, 5, !1)) return this.g = 1, Wh();
    var b = !DG(KG(this.o), this.M.ja()),
      c = [],
      d = this.context.nb();
    this.M.qa().forEach(function(k) {
      if ("root" != k && k != d) {
        var n = a.j[k],
          p = n && n.item;
        if (n = !n || p && 1 != ry(p) || b) p = p && xy(p), n = !(p && C(p, 2));
        n && c.push(k)
      }
    });
    if (0 == c.length) return this.mb([], !1), Wh();
    var e = N(this.M);
    kA(e, c);
    var f = new JQ(e, this.context, this.M),
      g = bi();
    this.context.A.g() ? (this.Y.R(this.context.A, "t", function(k) {
        k.g() || (a.Y.hb(a.context.A, "t"), UQ(a, f, g))
      }), this.g =
      0 < cc(this.j) ? 1 : 2) : UQ(this, f, g);
    return g.g
  };

  function UQ(a, b, c) {
    a.Y.R(b, "p", function(d) {
      this.j[d.id] = null
    }.bind(a));
    HQ(a);
    KQ(b).then(function() {
      c.resolve()
    }, c.reject)
  }
  m.Od = function(a) {
    var b = new GF;
    b.o = this.g;
    b.w = this.mc();
    EF(b, ac(this.j, function(c) {
      return c ? c.item : null
    }));
    AQ(this, a.ja(), b.g);
    return b
  };
  m.Pd = h();
  m.T = l("M");
  m.fd = function(a) {
    var b = VQ(this, a.j),
      c = VQ(this, a.g);
    if (b || c) c ? (this.j[a.id] = a.g, a.g.count++, b && a.j.count--) : (this.j[a.id] = null, a.j.count--);
    else return !1;
    return !0
  };

  function VQ(a, b) {
    return !!b && Db(a.M.qa(), b.item.F())
  };

  function WQ(a, b) {
    S.call(this, a);
    this.$c = b
  }
  r(WQ, S);

  function XQ() {
    this.B = this.w = this.A = null;
    this.o = [];
    this.j = !1;
    this.g = !0
  };

  function YQ(a) {
    var b = new XQ;
    if (a.Fe()) {
      var c = a.Fe();
      b.g = !1;
      b.w = c
    }
    a.Ge() && (c = a.Ge(), b.g = !1, b.B = c);
    a instanceof MB && I(a, Ht, 6).length ? (a = I(a, Ht, 6), b.g = !1, b.o = a) : a instanceof MA && (H(a, IA, 7) || C(a, 8)) && (c = H(a, IA, 7), b.g = !1, b.A = c, a = C(a, 8) || !1, b.g = !1, b.j = a);
    return b
  };

  function ZQ(a, b, c, d) {
    T.call(this);
    this.context = a;
    this.request = b;
    this.o = "";
    this.w = 0;
    this.G = !1;
    this.j = [];
    this.C = new Set;
    this.g = !1;
    this.B = 0;
    this.D = c || !1;
    this.I = d || !1;
    this.H = this.Tg(b);
    this.A = new XQ
  }
  r(ZQ, T);

  function $Q(a) {
    return !a.G || "" != a.o
  }

  function aR(a, b) {
    a.w = b;
    return a.j.length < a.w && !a.g && $Q(a) ? bR(a) : Fi()
  }
  m = ZQ.prototype;
  m.ia = function() {
    return this.j.length
  };

  function bR(a) {
    var b = a.w - a.j.length + a.B,
      c = new pi;
    vi(c, a.Al, a);
    var d = oB(pB(new mB, a.H), a.o);
    b = lB(new kB, b);
    a.I && F(b, 10, !0);
    nB(d, b);
    a.G = !0;
    a.g = !0;
    qQ(a.context).then(function(e) {
      return rQ(e, d)
    }).then(a.Ni.bind(a, c), a.Mi.bind(a, c, b));
    return c
  }
  m.Ni = function(a, b) {
    this.g = !1;
    if (b instanceof MB) var c = b;
    else c = b.Kc(), this.o = b.Xa() || "";
    this.A = YQ(c);
    this.A.g || this.dispatchEvent("q");
    a.callback(c.ta())
  };
  m.Mi = function(a, b, c) {
    this.g = !1;
    if (5 == c.lc()) a.callback([]);
    else {
      if (10 == c.lc() && (lB(b, Math.ceil(D(b, 1, 1E3) / 2 - 2E-15)), 1 < D(b, 1, 1E3))) {
        var d = nB(oB(pB(new mB, this.H), this.o), b);
        this.g = !0;
        qQ(this.context).then(function(e) {
          return rQ(e, d)
        }).then(this.Ni.bind(this, a), this.Mi.bind(this, a, b));
        return
      }
      b = new NF(AF(c), D(oD(this.context.g), 1, 1));
      this.Li(b);
      this.dispatchEvent(b);
      a.V(c)
    }
  };
  m.Al = function(a) {
    for (var b = this, c = new Set, d = q(a), e = d.next(); !e.done; e = d.next()) {
      e = e.value;
      if (c.has(e.F())) {
        e = aA(Zz(Yz(Xz(new Wz, 2), 9), "Encountered duplicate item in server query response"));
        this.context.dispatchEvent(new ZE(new V("Encountered duplicate item in server query response", e)));
        break
      }
      c.add(e.F())
    }
    e = a.filter(function(f) {
      var g = b.C.has(f.F());
      b.C.add(f.F());
      return !g
    });
    this.B += a.length - e.length;
    a = q(e);
    for (c = a.next(); !c.done; c = a.next()) F(c.value, 82, this.D ? 2 : 1);
    a = [];
    c = q(this.gj(e));
    for (e = c.next(); !e.done; e =
      c.next()) e = e.value, this.j.push(e.F()), e = xA(vA(new tA, e.F()), e), a.push(e);
    a.length && this.dispatchEvent(new WQ("o", a));
    if (this.j.length < this.w && this.o) return bR(this);
    this.dispatchEvent("r")
  };
  m.gj = aa();
  m.Li = h();
  m.T = l("request");
  m.Tg = function(a) {
    a = N(a);
    this.D && F(a, 46, !0);
    return a
  };

  function cR(a, b, c) {
    ZQ.call(this, a, b, void 0, c)
  }
  r(cR, ZQ);
  cR.prototype.gj = function(a) {
    a = RQ(this.context.Je, a);
    QQ(this.context.j, a, 1, this.request, $Q(this));
    return a
  };
  cR.prototype.Li = function(a) {
    NQ(this.context.j, this.request, a)
  };
  cR.prototype.Tg = function(a) {
    var b = a = ZQ.prototype.Tg.call(this, a),
      c = aB(b);
    0 == cB(b).length && 1 == c.length && (c = rH(this.context.j.j, c[0].P())) && (c = c.Z()) && (dB(b, [c]), F(b, 45, 2));
    E(this.context.g, 63, !1) && dR(this, a);
    return a
  };

  function dR(a, b) {
    if (aB(b).some(function(d) {
        return (d = rH(a.context.j.j, d.P())) && C(d, 108)
      })) {
      var c = b.bd();
      c || (c = new ju, J(b, 30, c));
      ku(c, 937)
    }
  };

  function eR(a, b, c, d) {
    this.g = a;
    this.w = b;
    this.A = c;
    this.C = d;
    this.j = 0
  }

  function fR(a, b) {
    if (b) {
      gR(a, "Processing potential rejoin for TD: " + b);
      var c = new VA;
      dB(c, [b]);
      XA(c, KG(a.w));
      F(c, 45, 1);
      var d = new ju;
      F(d, 2, !1);
      ku(d, 306);
      J(c, 30, d);
      hR(a);
      c = new cR(a.g, c);
      vi(aR(c, 5E3), a.B.bind(a, c));
      iR(a);
      jR(a, b)
    }
  }

  function iR(a) {
    var b = dc(a.A);
    b = xb(b, function(d) {
      return d instanceof TQ
    });
    var c = new FL;
    vb(b, function(d) {
      vb(d.T().qa(), function(e) {
        this.C.get(e) || c.add(e)
      }, this)
    }, a);
    gR(a, "Re-querying missing find-by-ids :" + c.ia());
    kR(a, c.sa())
  }

  function jR(a, b) {
    var c = [];
    vb(a.g.j.O.g[b || "subscribed"] || [], function(d) {
      Zb(this.A, function(e) {
        Ze(e.T(), d) && c.push(e)
      })
    }.bind(a));
    Qb(c);
    0 < c.length && (hR(a), vb(c, function(d) {
      d = SF(this.g.B, d.T(), 3);
      gR(this, "Refreshing " + b + " cache: " + d)
    }.bind(a)), ei($h(yb(c, function(d) {
      return d.refresh().fa(Fa)
    })), a.o.bind(a)))
  }

  function kR(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    b = b.filter(function(f) {
      return !Dc(f)
    });
    if (0 == b.length) return Wh({});
    var e = new hA;
    kA(e, b);
    jA(e, KG(a.w));
    F(e, 7, !0);
    c && J(e, 3, c);
    hR(a);
    b = new JQ(e, a.g, void 0, d);
    return ei(KQ(b), a.B.bind(a, b))
  }
  eR.prototype.B = function(a) {
    a.dispose();
    this.o()
  };

  function hR(a) {
    a.j++;
    a.g.C.nc(!1)
  }
  eR.prototype.o = function() {
    this.j--;
    0 == this.j && this.g.C.nc(!0)
  };

  function gR(a, b) {
    UF(a.g.o, "drive.ds.sync.cache.CacheRefresher", b)
  };

  function lR(a, b, c) {
    Q.call(this);
    this.B = a;
    this.g = b;
    this.M = c;
    a = new ju;
    F(a, 2, !1);
    ku(a, 305);
    J(this.M, 30, a);
    this.w = new Mm(this);
    R(this, this.w);
    this.o = this.j = null
  }
  r(lR, Q);

  function mR(a) {
    if (!a.j) {
      a.j = bi();
      if (E(a.M, 48, !1)) return a.g.Va(9), a.j.resolve(a.g), a.j.g;
      a.o = new ZQ(a.B, a.M, !0);
      a.w.R(a.o, "o", a.A);
      a.w.R(a.o, "r", a.C.bind(a));
      a.w.R(a.o, "s", a.j.reject.bind(a.j));
      aR(a.o, a.M.ca())
    }
    return a.j.g
  }
  lR.prototype.A = function(a) {
    var b = this;
    vb(a.$c, function(c) {
      c = wA(c);
      b.g.update(GN(new YG(c)))
    })
  };
  lR.prototype.C = function() {
    this.g instanceof wQ ? this.g.o = !$Q(this.o) : $Q(this.o) && vQ(this.g);
    this.g.Va(5);
    this.j.resolve(this.g)
  };

  function nR(a, b) {
    uQ.call(this, a, b);
    this.g = {}
  }
  r(nR, uQ);
  nR.prototype.yg = function(a) {
    this.g[a.item.F()] = a;
    a.count++
  };
  nR.prototype.Kd = function(a) {
    mc(this.g, a.item.F());
    a.count--
  };
  nR.prototype.Ii = function() {
    Zb(this.g, function(a) {
      a.count--
    });
    this.g = {}
  };
  nR.prototype.vb = function() {
    return Object.values(this.g)
  };

  function oR(a) {
    nR.call(this, a.H, a.O);
    var b = this;
    this.o = a;
    TG(this.o.w, ["aU7Ts", "BNEDtc"], function() {
      return b.vd()
    })
  }
  r(oR, nR);
  m = oR.prototype;
  m.Hb = function(a) {
    var b = this,
      c = nR.prototype.Hb.call(this, a);
    if (5 == c) return c;
    if (0 < cB(a).length) return 5;
    a = aB(a);
    if (0 < a.length) {
      var d = E(this.o.g, 63, !1);
      if (!a.every(function(e) {
          e = b.g[e.P()];
          return null != e && !e.item.Z() && hH(e.item) && !(d && C(e.item, 108))
        })) return 5
    }
    return 1
  };
  m.Ob = function(a) {
    return nR.prototype.Ob.call(this, a) && pR(this, a.item)
  };

  function pR(a, b) {
    if (C(b, 31) || !a.w) return !0;
    var c = a.o.nb();
    return B(b, 2).some(function(d) {
      var e = a.g[d];
      return d == c || null != e && hH(e.item)
    })
  }
  m.vd = function() {
    var a = this;
    nR.prototype.vd.call(this);
    Zb(this.g, function(b) {
      pR(a, b.item) || (b.count--, mc(a.g, b.item.F()))
    })
  };
  m.T = function() {
    var a = new VA;
    E(this.o.g, 63, !1) || F(a, 36, !0);
    return a
  };
  m.getType = ca("SubscribedCorpusCache");
  m.Ze = ca(!1);

  function qR(a, b, c) {
    nR.call(this, a, b);
    this.o = c
  }
  r(qR, nR);
  m = qR.prototype;
  m.Hb = function(a) {
    var b = this,
      c = nR.prototype.Hb.call(this, a);
    if (5 == c) return c;
    c = aB(a);
    var d = c.every(function(e) {
      var f = e.P();
      return (null != b.g[f] || b.o == f) && !E(e, 2, !1)
    });
    if (0 < c.length && d) return 1;
    a = cB(a);
    return 0 != a.length && a.includes(this.o) ? 1 : 5
  };
  m.Ob = function(a) {
    return nR.prototype.Ob.call(this, a) && !!a && a.item.Z() == this.o && !mH(a.item)
  };
  m.Ze = ca(!1);
  m.T = function() {
    var a = new VA;
    dB(a, [this.o]);
    F(a, 45, 2);
    return a
  };
  m.Z = l("o");
  m.getType = function() {
    return "TeamDriveCorpusCache: " + this.o
  };

  function rR(a) {
    this.w = a;
    this.o = [];
    this.g = null;
    this.j = [];
    a = new VA;
    F(a, 48, !0);
    var b = new RA;
    F(b, 1, 11);
    F(b, 2, 2);
    J(a, 2, b);
    this.A = RI(this.w, a, !0)
  }

  function sR(a, b) {
    b.forEach(function(c) {
      c instanceof oR ? a.g = c : c instanceof wQ ? a.o.push(c) : c instanceof qR && a.j.push(c)
    })
  }

  function tR(a, b) {
    b.forEach(function(c) {
      if (c instanceof oR) a.g && (vQ(a.g), a.g = null);
      else if (c instanceof wQ) {
        var d = Cb(a.o, function(e) {
          return a.w.oa(e.T(), c.T())
        });
        0 <= d && (vQ(a.o[d]), Gb(a.o, d))
      } else c instanceof qR && (d = Cb(a.j, function(e) {
        return a.w.oa(e.T(), c.T())
      }), 0 <= d && (vQ(a.j[d]), Gb(a.j, d)))
    })
  }

  function uR(a) {
    var b = [];
    a.g && b.push(a.g);
    Nb(b, Mb(a.o));
    Nb(b, Mb(a.j));
    return b
  }

  function OP(a, b) {
    b = void 0 === b ? !1 : b;
    return a.o.filter(function(c) {
      return a.g && b ? (c = N(c.T()), F(c, 32, void 0), M(c, 26, []), !Ze(a.A, c)) : !0
    })
  }

  function vR(a, b) {
    return zb(a.j, function(c) {
      return c.Z() == b
    })
  }

  function wR(a, b) {
    return OP(a).find(function(c) {
      return a.w.oa(c.T(), RI(a.w, b, !0))
    })
  };

  function xR() {
    this.g = {}
  }

  function yR(a, b) {
    zR(a, "subscribed");
    b && zR(a, b);
    return a.g[b || "subscribed"].Bb.g
  }

  function zR(a, b) {
    a.g[b] || (a.g[b] = {
      count: 0,
      ui: [],
      ij: [],
      Bb: bi()
    });
    a.g[b].count++
  }

  function AR(a, b) {
    b && !BR(a, b) || BR(a, "subscribed")
  }

  function BR(a, b) {
    if (!a.g[b]) return !1;
    a.g[b].count--;
    0 == a.g[b].count && (a.g[b].Bb.resolve({
      items: a.g[b].ui,
      Fm: a.g[b].ij
    }), mc(a.g, b));
    return !0
  }

  function CR(a, b, c) {
    var d = c || "subscribed";
    b.forEach(function(e) {
      var f = e.Z();
      f && f == e.ba() && a.g[f] && a.g[f].ij.push(e);
      a.g[d] && a.g[d].ui.push(e)
    })
  };

  function DR(a, b) {
    S.call(this, ER);
    this.g = a;
    this.A = b
  }
  r(DR, S);
  var ER = "Q";

  function FR(a, b) {
    return new Rh(function(c, d) {
      b.then(function(e) {
        var f = {};
        vb(a.vb(), function(g) {
          var k = g.item.F();
          AH(g.item);
          f[k] = new YG(g.item)
        });
        vb(e.items, function(g) {
          var k = g.ba();
          k = f[k];
          g.Vb() ? k && a.update(HN(k)) : (g = wA(g), AH(g), a.update(EN(k, new YG(g))))
        });
        a.vd();
        c(e.Fm)
      }, d)
    })
  };

  function GR(a, b) {
    Q.call(this);
    this.g = a;
    this.j = b
  }
  r(GR, Q);

  function HR(a, b) {
    IR(a, "Running initial view populator.");
    try {
      var c = new DD(JSON.parse(b))
    } catch (p) {
      JR(a, "Error parsing initial view dump.", p);
      return
    }
    b = qD(a.g.g);
    if (!lD(b)) {
      var d = H(c, Wt, 8);
      if (d) {
        var e = H(d, Ht, 1);
        e && e.F() == D(b, 6, "") && eQ(a.g.la, d, 4, !0)
      }(b = c.nb()) && wN(a.g, b, 6)
    }
    var f = c.Jc() || void 0;
    f && KR(a.g, f, !0);
    (b = c.Wb()) && b.length && LR(a.g.W, b, !0);
    b = c.ta();
    b.forEach(function(p) {
      dH(p);
      F(p, 82, 6)
    });
    if (c = I(c, zD, 5)[0])
      if (d = a.g.B, BG(KG(a.j), AD(c).ja(), rD(a.g.g)))
        if ((e = YA(AD(c))) && 4 == e.getType() && !QH()) JR(a,
          "Invalid initial view data, natural sort unsupported");
        else {
          if (0 < b.length) {
            d = RI(d, AD(c));
            e = B(c, 2) || void 0;
            bB(d, e);
            e = b.map(function(p) {
              return new YG(p, void 0, 1, f)
            });
            var g = H(c, ay, 3);
            if (g && B(c, 2)) {
              var k = e[e.length - 1];
              F(g, 82, 6);
              if (!Ze(g, k.item)) {
                JR(a, "Invalid last item in initial view data.");
                return
              }
            }
            var n = new wQ(a.g.H, a.g.O, a.g.B, d, k);
            n.Va(4);
            e.forEach(function(p) {
              n.update(GN(p))
            });
            MR(a.g.j, n);
            IR(a, "Imported " + b.length + " initial view items into a cache hint corpus cache.");
            k = new mB;
            pB(k, n.T());
            k = PO(a.g.U,
              k, "IVDP");
            QO(k, b);
            UG(a.g.w, "W6J7De")
          }
        }
    else JR(a, "Invalid initial view data, fields: " + SI(d, AD(c).ja()));
    else JR(a, "No initial query found")
  }

  function JR(a, b, c) {
    var d = c ? void 0 : aA(Yz(Xz(new Wz, 2), 6));
    b = new V(b, d, c);
    a.g.Ic(b.ab);
    IR(a, "Initial view dump population failed.");
    UG(a.g.w, "DEJoH")
  }

  function IR(a, b) {
    UF(a.g.o, "drive.ds.sync.cache.InitialViewPopulator", b)
  };

  function NR(a) {
    T.call(this);
    this.context = a;
    this.g = new oR(a)
  }
  w(NR, T);
  NR.prototype.o = "drive.ds.sync.cache.CorpusCachePopulator";

  function OR(a, b) {
    var c = D(a.context.g, 31, 2E4);
    ("number" === typeof B(b, 3) ? B(b, 3) : c + 1) > c ? (vQ(a.g), b = "partialCorpus", a.log("Too many subscribed items; skipping cache.")) : (b = "fullCorpus", a.log("Caching all subscribed items."));
    MO(a.context.U, "CachedCorpusType", b)
  }
  NR.prototype.log = function(a, b) {
    this.context.o.log(this.o, a, b || "info")
  };

  function PR(a, b) {
    T.call(this);
    this.j = a;
    this.M = b;
    this.A = [];
    this.g = "";
    this.o = this.w = !1
  }
  w(PR, T);

  function QR(a) {
    return a.o || a.w && "" == a.g ? Fi() : RR(a)
  }
  PR.prototype.ia = function() {
    return this.A.length
  };

  function RR(a) {
    a.w = !0;
    a.o = !0;
    var b = GC(HC(new FC, a.M), a.g),
      c = PO(a.j.U, b);
    return Gi(qQ(a.j).then(function(d) {
      return rQ(d, b)
    }).then(function(d) {
      var e = d.Kc().ta();
      a.g = d.Xa() || "";
      SR(a, c, e)
    }, function(d) {
      a.o = !1;
      d = new NF(AF(d), D(oD(a.j.g), 1, 1));
      a.dispatchEvent(d)
    }))
  }

  function SR(a, b, c) {
    QO(b, c);
    for (b = 0; b < c.length; b++) F(c[b], 82, 1);
    QQ(a.j.j, c, 1, a.M, !a.w || "" != a.g);
    var d = [];
    vb(c, function(e) {
      this.A.push(e.F());
      e = xA(vA(new tA, e.F()), e);
      d.push(e)
    }, a);
    d.length && a.dispatchEvent(new WQ("o", d));
    a.g ? RR(a) : (a.o = !1, a.dispatchEvent("r"))
  }
  PR.prototype.T = l("M");

  function TR(a) {
    this.j = PH(a, {
      numeric: !0
    })
  }
  TR.prototype.sort = function(a) {
    Sb(a, this.g.bind(this))
  };
  TR.prototype.g = function(a, b) {
    a = a.item;
    b = b.item;
    var c = this.j(B(a, 3), B(b, 3));
    return 0 == c ? Tb(a.F(), b.F()) : c
  };

  function pO(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    yQ.call(this, a);
    this.A = b;
    this.M = N(c);
    this.w = new PR(a, this.M);
    this.C = new TR(kD(qD(a.g)));
    this.o = [];
    ij(this, this.vk, this);
    this.j = null;
    d && (this.j = bi(), this.j.resolve())
  }
  w(pO, yQ);
  m = pO.prototype;
  m.refresh = function() {
    3 == this.g && (this.g = 6, this.j = null);
    return UR(this)
  };

  function UR(a) {
    if (a.j) return a.j.g;
    a.j = bi();
    a.context.A.g() ? a.Y.R(a.context.A, "t", function(b) {
      b.g() || (a.Y.hb(a.context.A, "t"), HQ(a), wi(QR(a.w), a.j.resolve, a.j.reject, a.j))
    }) : (HQ(a), wi(QR(a.w), a.j.resolve, a.j.reject, a.j));
    return a.j.g
  }
  m.Pd = h();
  m.T = l("M");
  m.vb = l("o");
  m.Od = function(a) {
    a = a.ca();
    this.C.sort(this.o);
    var b = sQ(Pb(this.o, 0, Math.min(a, this.o.length)));
    AQ(this, LG(this.A), b);
    var c = new MA;
    c.ub(b);
    c.Nd(1 == this.g || a <= this.o.length ? 1 : this.context.A.g() ? 0 < this.o.length ? 1 : 2 : 6);
    c.He(this.mc());
    F(c, 5, a < this.o.length || !this.context.A.g() && 1 != this.g);
    return c
  };
  m.mb = function(a, b) {
    this.j && pO.na.mb.call(this, a, b)
  };
  m.fd = function(a) {
    if (!this.j) return !1;
    var b = a.id,
      c = Bb(this.o, function(g) {
        return g.item.F() == b
      }),
      d = !!c,
      e = VR(this, a.g),
      f = a.j;
    c && (f = c, d = !0);
    if (d || e) d ? e ? WR(this, f, a.g) : YR(this, f) : ZR(this, a.g);
    else return !1;
    return !0
  };

  function ZR(a, b) {
    a.o.push(b);
    b.count++
  }

  function YR(a, b) {
    Fb(a.o, b);
    b.count--
  }

  function WR(a, b, c) {
    a.o[tb(a.o, b)] = c;
    c.count++;
    b.count--
  }

  function VR(a, b) {
    if (b) {
      var c;
      if (c = mH(b.item))
        if (a = a.M, b = b.item, c = !!b && !!vy(b)) a = C(a, 4), c = null == a || !!C(vy(b), 7) == a;
      b = c
    } else b = !1;
    return b
  }
  m.vk = function() {
    vb(this.o, function(a) {
      a.count--
    })
  };
  m.pi = ca(!0);
  m.getType = ca("TeamDriveViewCache");
  m.Qd = function() {
    return this.o.length
  };
  m.vd = function() {
    this.g = 1
  };

  function $R(a) {
    this.g = a
  }

  function aS(a, b) {
    return bS(a, b, null, 0, 5)
  }

  function bS(a, b, c, d, e) {
    if (0 == e || null == b) {
      var f = new uC;
      F(f, 2, b);
      F(f, 1, d);
      return Wh(f)
    }
    var g = new tC;
    F(g, 2, b);
    c && F(g, 3, c);
    return a.g.then(function(k) {
      return rQ(k, g)
    }).then(function(k) {
      var n = B(k, 2);
      k = d + B(k, 1);
      return bS(a, n, c, k, e - 1)
    })
  };

  function cS() {
    this.o = [];
    this.j = this.g = 0
  }

  function dS(a, b) {
    if (!c) var c = b.length;
    for (var d = a.g, e = a.j, f = a.o, g = 0; g < c; ++g) {
      d = d + 1 & 255;
      e = e + f[d] & 255;
      var k = f[d];
      f[d] = f[e];
      f[e] = k;
      b[g] ^= f[f[d] + f[e] & 255]
    }
    a.g = d;
    a.j = e
  };

  function eS(a, b, c) {
    this.g = -1;
    this.j = a;
    this.g = c || a.g || 16;
    this.w = Array(this.g);
    this.o = Array(this.g);
    a = b;
    a.length > this.g && (this.j.update(a), a = this.j.digest(), this.j.reset());
    for (c = 0; c < this.g; c++) b = c < a.length ? a[c] : 0, this.w[c] = b ^ 92, this.o[c] = b ^ 54;
    this.j.update(this.o)
  }
  w(eS, om);
  eS.prototype.reset = function() {
    this.j.reset();
    this.j.update(this.o)
  };
  eS.prototype.update = function(a, b) {
    this.j.update(a, b)
  };
  eS.prototype.digest = function() {
    var a = this.j.digest();
    this.j.reset();
    this.j.update(this.w);
    this.j.update(a);
    return this.j.digest()
  };

  function fS() {
    this.g = 64;
    this.j = [];
    this.B = [];
    this.C = [];
    this.A = [];
    this.A[0] = 128;
    for (var a = 1; a < this.g; ++a) this.A[a] = 0;
    this.w = this.o = 0;
    this.reset()
  }
  w(fS, om);
  fS.prototype.reset = function() {
    this.j[0] = 1732584193;
    this.j[1] = 4023233417;
    this.j[2] = 2562383102;
    this.j[3] = 271733878;
    this.j[4] = 3285377520;
    this.w = this.o = 0
  };

  function gS(a, b, c) {
    c || (c = 0);
    var d = a.C;
    if ("string" === typeof b)
      for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
    else
      for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = (f << 1 | f >>> 31) & 4294967295
    }
    b = a.j[0];
    c = a.j[1];
    var g = a.j[2],
      k = a.j[3],
      n = a.j[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = k ^ c & (g ^ k);
          var p = 1518500249
        } else f = c ^ g ^ k, p = 1859775393;
      else 60 > e ? (f = c & g | k & (c | g), p = 2400959708) :
        (f = c ^ g ^ k, p = 3395469782);
      f = (b << 5 | b >>> 27) + f + n + p + d[e] & 4294967295;
      n = k;
      k = g;
      g = (c << 30 | c >>> 2) & 4294967295;
      c = b;
      b = f
    }
    a.j[0] = a.j[0] + b & 4294967295;
    a.j[1] = a.j[1] + c & 4294967295;
    a.j[2] = a.j[2] + g & 4294967295;
    a.j[3] = a.j[3] + k & 4294967295;
    a.j[4] = a.j[4] + n & 4294967295
  }
  fS.prototype.update = function(a, b) {
    if (null != a) {
      void 0 === b && (b = a.length);
      for (var c = b - this.g, d = 0, e = this.B, f = this.o; d < b;) {
        if (0 == f)
          for (; d <= c;) gS(this, a, d), d += this.g;
        if ("string" === typeof a)
          for (; d < b;) {
            if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.g) {
              gS(this, e);
              f = 0;
              break
            }
          } else
            for (; d < b;)
              if (e[f] = a[d], ++f, ++d, f == this.g) {
                gS(this, e);
                f = 0;
                break
              }
      }
      this.o = f;
      this.w += b
    }
  };
  fS.prototype.digest = function() {
    var a = [],
      b = 8 * this.w;
    56 > this.o ? this.update(this.A, 56 - this.o) : this.update(this.A, this.g - (this.o - 56));
    for (var c = this.g - 1; 56 <= c; c--) this.B[c] = b & 255, b /= 256;
    gS(this, this.B);
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b] = this.j[c] >> d & 255, ++b;
    return a
  };

  function hS(a) {
    this.o = a;
    this.j = new eS(new fS, qe(a));
    this.g = new fS
  }
  hS.prototype.encrypt = function(a) {
    for (var b = [], c = 0; 16 > c; c++) b[c] = Math.floor(256 * Math.random());
    b = re(b);
    c = iS(this, a);
    return b.concat(c, jS(this, b, a, !0))
  };

  function kS(a, b) {
    var c = jS(a, b.substring(0, 16), b.substring(36), !1);
    b = b.substring(16, 36);
    a = iS(a, c);
    if (b != a) throw Error("Mismatch hmac!");
    return c
  }

  function iS(a, b) {
    a = a.j;
    b = te(b);
    a.reset();
    a.update(b);
    b = a.digest();
    return re(b)
  }

  function jS(a, b, c, d) {
    a.g.reset();
    a.g.update(b);
    a.g.update(a.o);
    b = new cS;
    a = a.g.digest();
    if (!e) var e = a.length;
    for (var f = b.o, g = 0; 256 > g; ++g) f[g] = g;
    var k = 0;
    for (g = 0; 256 > g; ++g) {
      k = k + f[g] + a[g % e] & 255;
      var n = f[g];
      f[g] = f[k];
      f[k] = n
    }
    b.g = 0;
    b.j = 0;
    e = b.g;
    a = b.j;
    f = b.o;
    for (g = 0; 1536 > g; ++g) e = e + 1 & 255, a = a + f[e] & 255, k = f[e], f[e] = f[a], f[a] = k;
    b.g = e;
    b.j = a;
    if (d) {
      d = "";
      for (e = 0; e < c.length / 8192; e++) a = te(c.substring(8192 * e, 8192 * (e + 1))), dS(b, a), d += re(a);
      return d
    }
    d = [];
    for (e = 0; e < c.length / 8192; e++) {
      a = c.substring(8192 * e, 8192 * (e + 1));
      f = t.Uint8Array ?
        new Uint8Array(a.length) : Array(a.length);
      for (g = 0; g < a.length; g++) f[g] = a.charCodeAt(g) & 255;
      a = f;
      dS(b, a);
      d.push(a)
    }
    if (d.length) {
      for (c = 0; c < d.length - 1; c++)
        if (8192 != d[c].length) throw Error("Unexpected chunk size during encryption");
      c = 8192 * (d.length - 1) + d[d.length - 1].length;
      b = Array(c);
      for (a = e = 0; e < c;) f = lS(d, e++), 128 > f ? b[a++] = String.fromCharCode(f) : 191 < f && 224 > f ? (g = lS(d, e++), b[a++] = String.fromCharCode((f & 31) << 6 | g & 63)) : 239 < f && 365 > f ? (g = lS(d, e++), k = lS(d, e++), n = lS(d, e++), f = ((f & 7) << 18 | (g & 63) << 12 | (k & 63) << 6 | n & 63) - 65536,
        b[a++] = String.fromCharCode(55296 + (f >> 10)), b[a++] = String.fromCharCode(56320 + (f & 1023))) : (g = lS(d, e++), k = lS(d, e++), b[a++] = String.fromCharCode((f & 15) << 12 | (g & 63) << 6 | k & 63));
      b.length = a;
      c = b.join("")
    } else c = "";
    return c
  }

  function lS(a, b) {
    return a[Math.floor(b / 8192)][b % 8192]
  };

  function mS(a, b, c, d, e) {
    this.j = a;
    this.g = bi();
    this.B = !1;
    this.o = b;
    this.w = c;
    this.A = e;
    this.C = d
  }

  function nS(a) {
    a.B || (a.B = !0, jP(a.j).then(function() {
      a.g.resolve()
    }, function(b) {
      a.g.reject(b)
    }));
    return Gi(a.g.g)
  }

  function oS(a) {
    if (a instanceof Wt) return 0;
    if (a instanceof pw) return 1;
    if (a instanceof DB) return 5;
    if (a instanceof DD) return 3;
    throw new V("Unsupported dataShard in getDataType");
  }

  function pS(a) {
    if (0 == a) return Wt;
    if (1 == a) return pw;
    if (5 == a) return DB;
    if (3 == a) return DD;
    throw new V("Unsupported dataType:" + a + " in getDataTypeCtor");
  }

  function qS(a) {
    if (a instanceof DD) return D(a, 13, 0)
  }

  function rS(a, b, c) {
    if (0 == c.length) return Wh();
    var d = oS(c[0]);
    c.forEach(function(n) {
      oS(n)
    });
    var e = qS(c[0]);
    3 == d && sS(a, c);
    var f = !1,
      g = [];
    c.forEach(function(n) {
      f || (n = n.Ga(), n.length > a.w ? f = !0 : g.push(n))
    });
    if (f) return b = Error("Dumpstorage length error"), c = new Wz, Xz(c, 2), bA(c, 23), F(c, 21, b.message), aA(c), a.C(c), P(b);
    var k = !!b;
    return (k ? tS(a, b, g).then() : Wh(g)).then(function(n) {
      return a.g.g.then(function() {
        return vP(a.j, n, d, e, k)
      })
    })
  }

  function sS(a, b) {
    qS(b[0]);
    b.forEach(function(c) {
      qS(c)
    });
    uS(b);
    vS(a, b)
  }

  function wS(a, b, c, d, e) {
    var f = bi();
    a.g.g.then(function() {
      return tP(a.j, c, d, e)
    }).then(function(g) {
      var k = g.map(function(p) {
          return p.data
        }),
        n = new pi;
      g[0] && g[0].Ke ? xS(a, n, b, k) : n.callback(k);
      return n.then()
    }).then(function(g) {
      var k = [];
      g.forEach(function(n) {
        var p = pS(c);
        k.push(new p(JSON.parse(n)))
      });
      3 == c && (yS(k), zS(k));
      f.resolve(k)
    }).fa(f.reject, f);
    return f.g
  }

  function uS(a) {
    if (a.length) {
      for (var b = 0; b < a.length; b++)
        if (I(a[b], Ht, 2).length) return;
      var c = new Map,
        d = new Map;
      a.forEach(function(f) {
        (f.ta() || []).forEach(function(g) {
          var k = AS(I(g, Ht, 15), c, d);
          M(g, 15, k);
          k = AS([H(g, Ht, 17)], c, d)[0];
          J(g, 17, k);
          k = AS([H(g, Ht, 47)], c, d)[0];
          J(g, 47, k);
          k = AS([H(g, Ht, 91)], c, d)[0];
          J(g, 91, k);
          k = AS([H(g, Ht, 95)], c, d)[0];
          J(g, 95, k);
          if (g = H(g, Nx, 85)) Px(g, AS(I(g, Ht, 2), c, d)), Qx(g, AS(I(g, Ht, 3), c, d))
        })
      });
      var e = [];
      c.forEach(function(f) {
        return e.push(f)
      });
      HD(a[0], e)
    }
  }

  function AS(a, b, c) {
    if (!a) return a;
    var d = [];
    a.forEach(function(e) {
      if (e && e.F()) {
        var f = e.F();
        b.has(f) ? Ze(e, b.get(f)) ? d.push(c.get(f)) : d.push(e) : (b.set(f, e.clone()), e = new Ht, Jt(e, f), c.set(f, e), d.push(e))
      } else d.push(e)
    });
    return d
  }

  function yS(a) {
    var b = new Map,
      c = new Map;
    a[0] && I(a[0], Ht, 2) && I(a[0], Ht, 2).forEach(function(d) {
      b.set(d.F(), d);
      d = Jt(new Ht, d.F());
      c.set(d.F(), d)
    });
    b.size && a.forEach(function(d) {
      (d.ta() || []).forEach(function(e) {
        var f = BS(I(e, Ht, 15), b, c);
        M(e, 15, f);
        f = BS([H(e, Ht, 17)], b, c)[0];
        J(e, 17, f);
        f = BS([H(e, Ht, 47)], b, c)[0];
        J(e, 47, f);
        f = BS([H(e, Ht, 91)], b, c)[0];
        J(e, 91, f);
        f = BS([H(e, Ht, 95)], b, c)[0];
        J(e, 95, f);
        if (e = H(e, Nx, 85)) Px(e, BS(I(e, Ht, 2), b, c)), Qx(e, BS(I(e, Ht, 3), b, c))
      });
      HD(d, [])
    })
  }

  function BS(a, b, c) {
    if (!a) return a;
    var d = [];
    a.forEach(function(e) {
      if (e && e.F()) {
        var f = e.F();
        Ze(c.get(f), e) ? d.push(N(b.get(f))) : d.push(e)
      } else d.push(e)
    });
    return d
  }

  function vS(a, b) {
    if (a.A) {
      a = a.A;
      for (var c = b.length - 1; 0 <= c; c--)
        if (D(b[c], 13, 0)) {
          for (var d = [], e = b[c].ta(); e.length > a;) {
            var f = Ob(e, a - 1, a);
            f = GD(new DD, f);
            d.push(f)
          }
          GD(b[c], e);
          d.length && Ra(Ob, b, c + 1, 0).apply(null, d)
        }
    }
  }

  function zS(a) {
    for (var b = {}, c = 1; c < a.length; b = {
        se: b.se
      }, c++)
      if (!D(a[c], 13, 0)) {
        for (var d = 0, e = c; e < a.length && !D(a[e], 13, 0); e++) d++;
        e = a[c - 1];
        d = Ob(a, c, d);
        b.se = e.ta();
        d.forEach(function(f) {
          return function(g) {
            Nb(f.se, g.ta())
          }
        }(b));
        GD(e, b.se)
      }
  }

  function tS(a, b, c) {
    if (!uF() && a.o) {
      var d = new Worker(a.o),
        e = new pi;
      d.addEventListener("message", function(k) {
        d.terminate();
        e.callback(k.data)
      }, !1);
      d.addEventListener("error", function(k) {
        d.terminate();
        e.V(Error(k))
      }, !1);
      c = PD(new ND, c);
      d.postMessage({
        command: "encrypt",
        data: {
          request: c.Ga(),
          key: b
        }
      });
      return e
    }
    try {
      a = [];
      var f = new hS(b);
      for (b = 0; b < c.length; b++) a.push(f.encrypt(c[b]));
      var g = Fi(a)
    } catch (k) {
      g = Hi(k)
    }
    return g
  }

  function xS(a, b, c, d) {
    for (var e = 0; e < d.length; e++)
      if (d[e].length > a.w) {
        b.callback(void 0);
        return
      } if (!uF() && a.o) {
      var f = new Worker(a.o);
      f.addEventListener("message", function(k) {
        f.terminate();
        b.callback(k.data)
      }, !1);
      f.addEventListener("error", function(k) {
        f.terminate();
        throw Error(k);
      }, !1);
      f.postMessage({
        command: "decrypt",
        data: {
          dumps: d,
          key: c
        }
      })
    } else try {
      a = [];
      var g = new hS(c);
      for (c = 0; c < d.length; c++) a.push(kS(g, d[c]));
      b.callback(a)
    } catch (k) {
      b.callback(void 0)
    }
  };

  function CS(a) {
    this.g = new Rh(function(b) {
      a ? jP(a).then(function() {
        return b(a)
      }, function() {
        return b(null)
      }) : b(null)
    })
  }

  function DS(a, b) {
    return a.g.then(function(c) {
      if (c && !c.g) return xP(c, [b]).then(function(d) {
        return (d = d[0]) ? d.P() : void 0
      }, h())
    })
  }

  function ES(a, b, c) {
    return a.g.then(function(d) {
      return d && !d.g ? yP(d, [new WO(b.key, c, b.global)]).then(ca(!0), ca(!1)) : !1
    })
  }
  CS.prototype.nb = function() {
    return DS(this, FS).then(function(a) {
      return a ? a : null
    })
  };

  function GS(a) {
    return DS(a, HS).then(function(b) {
      return "boolean" === typeof b ? b : null
    })
  }

  function IS(a) {
    return DS(a, JS).then(function(b) {
      return "boolean" === typeof b ? b : null
    })
  }

  function KS(a) {
    return DS(a, LS).then(function(b) {
      return Ha(b) ? b : null
    })
  }

  function MS(a) {
    return DS(a, NS).then(function(b) {
      return "number" === typeof b ? b : null
    })
  }
  var OS = {
      key: "pc",
      global: !1
    },
    FS = {
      key: "rid",
      global: !0
    },
    HS = {
      key: "ooi",
      global: !0
    },
    JS = OS,
    LS = {
      key: "rtds",
      global: !1
    },
    NS = {
      key: "dct",
      global: !1
    };

  function PS(a, b) {
    NR.call(this, a);
    this.A = b;
    this.w = void 0;
    this.B = null;
    this.j = !1;
    this.o = "drive.ds.sync.cache.LocalDumpPopulator"
  }
  r(PS, NR);

  function QS(a) {
    a.log("Local dump population failed.");
    UG(a.context.w, "mrK8ic")
  }
  PS.prototype.Wf = function() {
    var a = this;
    if (this.B) return this.B;
    if (this.context.ea) {
      var b = new pi;
      this.B = b;
      RS(this).then(function() {
        var c = I(pD(a.context.g), fD, 11);
        c = c[0] && B(c[0], 2) || "";
        return SS(a, a.context.ea, c, 4)
      }).fa(function(c) {
        if (E(a.context.g, 8, !0)) return TS(a);
        throw c;
      }).then(function() {
        UG(a.context.w, "zaOY7");
        b.callback()
      }, function(c) {
        QS(a);
        b.V(c)
      });
      return b
    }
    QS(this);
    return Hi(Error("LocalDumpPopulator not enabled"))
  };

  function RS(a) {
    return nS(a.context.ea).then(function() {
      if (!sD(a.context.g)) {
        var b = D(pD(a.context.g), 7, 432E6);
        b && (a.w = Date.now() - b);
        return new Rh(function(c, d) {
          IS(a.context.G).then(function(e) {
            e ? c() : d(Error("Could not load incomplete local dump"))
          })
        })
      }
    })
  }

  function SS(a, b, c, d) {
    function e() {
      return a.log("Failed to load user prefs from storage.")
    }

    function f() {
      return a.log("Failed to load apps from storage.")
    }

    function g() {
      return a.log("Failed to load account from storage.")
    }
    var k = a.w;
    wS(b, c, 0, void 0, k).then(function(G) {
      G[0] ? eQ(a.context.la, G[0], a.j ? 7 : 3, !1) : g()
    }, function() {
      return g()
    });
    wS(b, c, 1, void 0, k).then(function(G) {
      G[0] ? a.context.sb.w(G[0], !0) : f()
    }, function() {
      return f()
    });
    wS(b, c, 5, void 0, k).then(function(G) {
      G[0] ? (G = G[0].Wb(), G.length && LR(a.context.W,
        G, !1)) : e()
    }, function() {
      return e()
    });
    var n = bi();
    wS(b, c, 3, 1, k).then(function(G) {
      return US(a, G[0])
    }).then(function(G) {
        if (G) {
          b != a.context.ea || DG(KG(a.A), G.ja(), !0) || (a.log("Disabling dump updater due to inconsistent fields.", "warning"), a.context.C.xd());
          var K = G.Jc();
          if (!K || 0 > K) throw Error("Missing change ID.");
          wN(a.context, G.nb(), d);
          K = G.Jc();
          "number" === typeof K && KR(a.context, Number(K));
          sD(a.context.g) && (a.log("Coldstart: Firing INITIAL_CHANGES_PROCESSED."), VS(a.context));
          WS(a, G, d);
          n.resolve()
        } else n.reject("Failed to load cache hints from storage.")
      },
      n.reject, n);
    var p = bi();
    wS(b, c, 3, 2, k).then(function(G) {
      G[0] ? (WS(a, G[0], d), p.resolve()) : p.reject(Error("Failed to load main corpus from storage"))
    }, p.reject, p);
    var x = bi(),
      A = bi();
    uD(a.context.g) ? (wS(b, c, 3, 4, k).then(function(G) {
      G.forEach(function(K) {
        WS(a, K, d)
      });
      x.resolve()
    }, x.reject, x), wS(b, c, 3, 3, k).then(function(G) {
      G.length ? G.forEach(function(K) {
        WS(a, K, d)
      }) : UG(a.context.w, "rVezo");
      A.resolve()
    }, A.reject, A)) : (x.resolve(), A.resolve(), UG(a.context.w, "rVezo"));
    return $h([n.g, p.g, x.g, A.g])
  }

  function US(a, b) {
    var c = b.Jc(),
      d = a.context.g;
    return c && !sD(d) && E(d, 12, !1) ? aS(new $R(qQ(a.context)), c).then(function(e) {
      return null != B(e, 2) ? (a.log("Encrypted dump too stale."), lN(a.context.L, 106007), null) : b
    }, function() {
      return b
    }) : Wh(b)
  }

  function TS(a) {
    var b = TO(a.context.aa.o),
      c = a.context.g,
      d = I(pD(c), fD, 11).filter(function(e) {
        return null != B(e, 2)
      });
    return KP(jD(qD(c)), rD(c), D(pD(c), 10, 0) || 0, KG(a.A), a.w || 0, d.map(function(e) {
      return B(e, 1)
    }), b).then(function(e) {
      if (e) {
        var f = d.find(function(n) {
            return e.w == B(n, 1)
          }),
          g = new iP(Wh(e), a.context.o, null, !0),
          k = new mS(g, D(c, 7, ""), D(pD(c), 6, 2E7), function(n) {
            a.context.Ic(n)
          }, D(pD(c), 12, 0));
        nS(k);
        a.j = !0;
        return SS(a, k, f ? B(f, 2) : null, 8).then(function() {
          return xP(g, [OS])
        }).then(function(n) {
          if (n[0]) return n =
            n[0].P(), ES(a.context.G, JS, n)
        }).then(function() {
          g.close()
        })
      }
      return P(Error("No compatible dumps to forklift were found."))
    })
  }

  function XS(a, b, c) {
    switch (D(b, 13, 0)) {
      case 1:
        return YS(a, b, c);
      case 2:
        b = H(b, Uz, 11);
        if (!b) throw Error("No dump stats found.");
        OR(a, b);
        a.g.j ? (a.g.Va(a.j ? 7 : 3), a = [{
          cache: a.g,
          $c: yR(a.context.D, null)
        }]) : a = [];
        return a;
      case 3:
        return ZS(a, b);
      case 4:
        return $S(a, b);
      default:
        return null
    }
  }

  function YS(a, b, c) {
    var d = [];
    I(b, zD, 5).forEach(function(e) {
      var f = void 0,
        g = H(e, ay, 3);
      g && (dH(g), C(a.context.g, 67) && iH(g), F(g, 82, c), f = new YG(g));
      var k = AD(e);
      if (!E(k, 48, !1) || I(a.context.g, VA, 44).some(function(n) {
          if (!E(n, 48, !1)) return !1;
          n = RI(a.context.B, n, !0);
          return Ze(n, k)
        })) e = new wQ(a.context.H, a.context.O, a.context.B, k, f), e.Va(a.j ? 7 : 3), d.push({
        cache: e,
        $c: yR(a.context.D, null)
      })
    });
    return d
  }

  function $S(a, b) {
    return I(b, zD, 5).map(function(c) {
      c = new pO(a.context, a.A, H(c, DC, 5), !0);
      c.Va(a.j ? 7 : 3);
      return {
        cache: c,
        $c: yR(a.context.D, null)
      }
    })
  }

  function ZS(a, b) {
    if (!uD(a.context.g)) return [];
    I(b, zD, 5);
    var c = I(b, zD, 5)[0];
    cB(AD(c));
    var d = cB(AD(c))[0],
      e = b.Jc() || void 0;
    b = yR(a.context.D, d);
    vi(aT(a.context), function(f) {
      bT(f, d, e)
    });
    c = new qR(a.context.H, a.context.O, d);
    c.Va(a.j ? 7 : 3);
    return [{
      cache: c,
      $c: b
    }]
  }

  function WS(a, b, c) {
    var d = XS(a, b, c);
    d && 0 != d.length ? (b.ta().forEach(function(e) {
      dH(e);
      C(a.context.g, 67) && iH(e);
      F(e, 82, c);
      e = new YG(e);
      for (var f = 0; f < d.length; f++) d[f].cache.update(GN(e))
    }, a), d.forEach(function(e) {
      var f = e.cache;
      a.dispatchEvent(new DR(f, e.$c));
      a.log("Imported " + f.Qd() + " items into the " + f.getType());
      var g = null;
      f instanceof qR && (g = f.Z());
      a.context.xe.g.then(function() {
        AR(a.context.D, g)
      })
    }), 1 == D(b, 13, 0) && UG(a.context.w, "ZA9qG")) : a.log("Ignoring corpus cache for " + D(b, 13, 0) + ".")
  };

  function cT(a) {
    Q.call(this);
    this.g = a
  }
  r(cT, Q);

  function dT(a, b) {
    eT(a, "Running prefetched request populator for " + B(b, 1) + ".");
    switch (B(b, 1)) {
      case 1:
      case 3:
        fT(a, b);
        break;
      case 4:
        gT(a, b);
        break;
      case 6:
        hT(a, b);
        break;
      case 2:
        iT(a, b);
        break;
      case 7:
        jT(a, b);
        break;
      case 5:
        I(H(b, ZB, 7), XB, 1).forEach(function(c) {
          return dT(a, c)
        });
        break;
      default:
        kT(a, "Unsupported prefetched request.")
    }
  }

  function fT(a, b) {
    var c = H(b, VA, 2);
    b = JSON.parse(B(b, 3) || "{}");
    var d = new mB;
    pB(d, c);
    b = a.g.xa.j.j(d, {
      headers: {},
      text: "",
      json: b
    }).Kc();
    lT(a, c, b)
  }

  function hT(a, b) {
    lT(a, H(b, VA, 2), H(b, MA, 9))
  }

  function lT(a, b, c) {
    for (var d = c.ta(), e = q(d), f = e.next(); !f.done; f = e.next()) F(f.value, 82, 7);
    c = YQ(c);
    a = a.g.j;
    b = RI(a.g.B, b);
    e = nO(a, b);
    f = a.o[e];
    f || (f = new mT(a.g, b), f.Va(2), a.o[e] = f);
    c.g || f.tg(c);
    QQ(a, d, 1, b)
  }

  function iT(a, b) {
    H(b, CB, 4);
    b = H(b, FB, 5);
    LR(a.g.W, b.Wb(), !0)
  }

  function gT(a, b) {
    a.g.Bg.o(I(H(b, UB, 8), Tz, 2), H(b, TB, 6), 2, !1)
  }

  function jT(a, b) {
    var c = H(b, RB, 10);
    b = JSON.parse(B(b, 3) || "{}");
    b = a.g.xa.j.j(c, {
      headers: {},
      text: "",
      json: b
    });
    gO(a.g).o([b], c, 2, !1)
  }

  function kT(a, b, c) {
    var d = c ? void 0 : aA(Yz(Xz(new Wz, 2), 6));
    a.g.dispatchEvent(new ZE(new V(b, d, c)));
    eT(a, "Prefetched request population failed.")
  }

  function eT(a, b) {
    UF(a.g.o, "drive.ds.sync.cache.PrefetchedRequestPopulator", b)
  };

  function nT(a) {
    UF(a.o, "drive.ds.sync.api.Dump", "Requesting dump stats.");
    var b = new ju;
    ku(b, 305);
    F(b, 2, !0);
    F(b, 3, 2);
    var c = new CB;
    J(c, 1, b);
    var d = new XF(c, [7]);
    a = qQ(a).then(function(e) {
      return rQ(e, d)
    }).then(oT);
    return Gi(a)
  }

  function oT(a) {
    a = a.Wb();
    var b = new Uz;
    vb(a, function(c) {
      var d = H(c, Ut, 1);
      d = d && B(d, 2);
      "corpusSize" == d ? (c = Kd(c.P()), F(b, 3, c)) : "linkedItems" == d ? (c = Kd(c.P()), F(b, 2, c)) : "linkedFolders" == d && (c = Kd(c.P()), F(b, 1, c))
    });
    return "number" === typeof B(b, 3) ? b : null
  };

  function pT(a) {
    NR.call(this, a);
    this.j = [];
    this.w = [];
    this.A = Math.ceil(1.1 * D(a.g, 31, 2E4));
    this.o = "drive.ds.sync.cache.SdkCachePopulator"
  }
  r(pT, NR);
  m = pT.prototype;
  m.Wf = function() {
    if (!E(this.context.g, 45, !1)) return this.Ji(), Hi(Error("SdkCachePopulator not enabled"));
    this.log("Drive SDK cache population initiated.");
    return xi(vi(vi(this.context.Tc.Jd(), this.Om, this), this.Em, this), this.Ji, this)
  };
  m.Om = function() {
    var a = this;
    UG(this.context.w, "L6uQWd");
    vi(aT(this.context), function(b) {
      qT(b)
    });
    if (E(this.context.g, 46, !1)) return vi(nT(this.context), function(b) {
      if (!b) throw Error("Missing dump stats");
      OR(a, b)
    });
    this.log("Subscribed corpus cache population disabled.");
    vQ(this.g);
    return Fi()
  };
  m.Em = function() {
    var a = this;
    VS(this.context);
    var b = new pi;
    if (this.g.j) {
      this.log("Starting subscribed corpus cache population.");
      var c = this.g.T();
      bB(c, this.A);
      this.g.Va(5);
      rT(this, this.g, c)
    }
    c = I(this.context.g, VA, 44);
    vb(c, function(d) {
      d = new wQ(a.context.H, a.context.O, a.context.B, d);
      d.Va(5);
      rT(a, d, d.T());
      d = SF(a.context.B, d.T());
      a.log("Starting " + d + " cache hint corpus cache population.")
    });
    $h(this.w).then(b.callback, this.jl.bind(this, b), b);
    return b
  };

  function rT(a, b, c) {
    var d = yR(a.context.D, null);
    b = new lR(a.context, b, c);
    a.j.push(b);
    b = ei(mR(b).then(function(e) {
      !e.j && e instanceof oR && (a.log("Subscribed corpus cache disabled, too many backfill items."), MO(a.context.U, "CachedCorpusType", "errorUncachedCorpus"));
      a.dispatchEvent(new DR(e, d))
    }), function() {
      a.context.xe.g.then(function() {
        AR(a.context.D, null)
      })
    });
    a.w.push(b)
  }
  m.jl = function(a, b) {
    vb(this.j, function(d) {
      d.dispose()
    });
    var c = b;
    b instanceof NF ? c = yF(b.error) : zF(b) || (c = Error("Backfill error: " + b));
    a.V(c)
  };
  m.Ji = function() {
    this.log("Drive SDK cache population failed.");
    UG(this.context.w, "Gv4zef")
  };

  function sT(a, b) {
    Q.call(this);
    this.g = a;
    this.A = b;
    this.B = new Mm(this);
    R(this, this.B);
    this.o = new PS(this.g, this.g.I);
    R(this, this.o);
    this.w = new pT(this.g);
    R(this, this.w);
    this.j = null;
    this.C = []
  }
  r(sT, Q);

  function tT(a) {
    uT(a, "Corpus cache population initiated.");
    a.j = mN(a.g.L, 106002);
    t._DRIVE_dsp && vT(a);
    t._DRIVE_dspc = function(d) {
      return vT(a, d)
    };
    yR(a.g.D, null);
    if (E(a.g.g, 24, !1) && !sD(a.g.g)) {
      var b = new pi;
      vi(b, function(d) {
        if (d) {
          var e = new GR(a.g, a.g.I);
          R(a, e);
          HR(e, d)
        }
      });
      t._DRIVE_ivd ? b.callback(t._DRIVE_ivd) : null === t._DRIVE_ivd ? UG(a.g.w, "DEJoH") : t._DRIVE_ivdc = function() {
        return b.callback(t._DRIVE_ivd)
      }
    }
    var c = a.g.ea;
    c ? (a.B.R(a.o, ER, a.D), a.B.R(a.w, ER, a.D), (!E(a.g.g, 10, !1) && C(a.g.g, 69) ? a.g.Sb.g : Promise.resolve()).then(function() {
      return nS(c).then(function() {
        uT(a,
          "Dump storage initialized.");
        return wi(a.o.Wf(), function() {
          return wT(a, a.o.j ? 9 : 5)
        }, function() {
          if (sD(a.g.g)) xT(a, Error("Failed to load Persistello on coldstart."));
          else return (C(a.g.g, 74) ? a.g.Sb.g : Promise.resolve()).then(function() {
            return a.w.Wf()
          }).then(function() {
            return wT(a, 7)
          }, function(d) {
            return xT(a, d)
          })
        })
      }, function(d) {
        xT(a, zF(d) ? d : void 0, !0)
      })
    })) : xT(a, void 0, !0)
  }

  function vT(a, b) {
    var c = new cT(a.g);
    (t._DRIVE_dsp || []).filter(function(d, e) {
      return d && [, !0, !0, !0, !0, , !0, !0][e] && (!b || e == b)
    }).forEach(function(d) {
      try {
        dT(c, new XB(JSON.parse(d)))
      } catch (e) {
        kT(c, "Error parsing prefetched request.", e)
      }
    });
    c.dispose()
  }
  sT.prototype.D = function(a) {
    var b = a.g;
    uT(this, "Cache populated: " + b.getType());
    this.C.push(yT(this, b, a.A))
  };

  function wT(a, b) {
    AR(a.g.D, null);
    UG(a.g.w, "L6uQWd");
    vi(aT(a.g), function(c) {
      qT(c)
    });
    return Promise.all(a.C).then(function() {
      return zT(a, b)
    })
  }

  function AT(a) {
    return (a = a.g.j.w.g) && a.j ? 1 : 2
  }

  function zT(a, b) {
    if (!a.ua()) {
      sD(a.g.g) || BT(a.A, I(a.g.g, VA, 44));
      uT(a, "Corpus cache population complete.");
      var c = a.g.w;
      c.g("mrK8ic") ? c.g("Gv4zef") || a.g.C.Ig() : IS(a.g.G).then(function(d) {
        d && a.g.C.Ig()
      }, h());
      UG(c, "rVezo");
      UG(c, "BNEDtc");
      a.j && (Fq(tJ(a.j), b), Eq(tJ(a.j), !0), Gq(tJ(a.j), dJ(a.A.j)), Hq(tJ(a.j), AT(a)), oJ(a.j));
      a.dispose()
    }
  }

  function xT(a, b, c) {
    c = void 0 === c ? !1 : c;
    AR(a.g.D, null);
    var d = a.g.w;
    UG(d, "L6uQWd");
    vi(aT(a.g), function(e) {
      qT(e)
    });
    UG(d, "mrK8ic");
    UG(d, "Gv4zef");
    UG(d, "rVezo");
    UG(d, "BNEDtc");
    MO(a.g.U, "CachedCorpusType", "partialCorpus");
    d = !!a.o.context.ea || E(a.w.context.g, 45, !1);
    b && !c && d ? (d = void 0, c = "Corpus population failed: ", zF(b) ? (d = b, c += d.message) : c += String(b), uT(a, c), b = new V(c, void 0, d), d = b.ab, Xz(d, sD(a.g.g) ? 3 : 1), Yz(d, 6), Zz(d, c), aA(d), a.g.dispatchEvent(new ZE(b))) : uT(a, "Corpus population skipped");
    a.j && (Eq(tJ(a.j),
      !1), oJ(a.j));
    a.dispose()
  }

  function yT(a, b, c) {
    return FR(b, c).then(function(d) {
      d.some(function(e) {
        return b instanceof qR && e.Vb() && e.ba() == b.Z()
      }) || MR(a.A, b, d)
    }, function() {
      return xT(a, Error("Failed to update corpus cache."))
    })
  }

  function uT(a, b) {
    UF(a.g.o, "drive.ds.sync.cache.CorpusCachePopulatorManager", b)
  };

  function CT(a, b, c) {
    this.g = a;
    this.Ng = void 0 === c ? 0 : c;
    this.j = new Set([b])
  }

  function DT(a, b, c) {
    var d;
    if (d = B(b, 1) == B(a.g.clone(), 1)) d = a.Ng, d = 1 == d ? 1 == c : 2 == d ? 2 == c || 1 == c : !0;
    d && (a.g = b.clone(), a.Ng = c)
  };

  function ET() {
    this.g = new Map;
    this.j = new Set
  }
  ET.prototype.get = function(a) {
    return (a = this.g.get(a)) ? a.g.clone() : null
  };

  function FT(a, b) {
    return (a = a.g.get(b)) ? oa(a.j).concat() : []
  }

  function GT(a, b, c, d) {
    d = void 0 === d ? 0 : d;
    b = q(b);
    for (var e = b.next(); !e.done; e = b.next()) {
      var f = e.value;
      if (e = a.g.get(B(f, 1))) DT(e, f, d), c && e.j.add(c);
      else {
        e = a;
        var g = c,
          k = d;
        k = void 0 === k ? 0 : k;
        1 != k && e.j.add(B(f, 1));
        g = new CT(f, g, k);
        e.g.set(B(f, 1), g)
      }
    }
  }
  ET.prototype.update = function(a, b) {
    b = void 0 === b ? 0 : b;
    var c = !1;
    a = q(a);
    for (var d = a.next(); !d.done; d = a.next()) {
      d = d.value;
      var e = B(d, 1),
        f = this.g.get(e);
      f && (DT(f, d, b), fQ(this, e) && this.j.has(e) && this.j.delete(e), c = !0)
    }
    return c
  };

  function fQ(a, b) {
    a = b && a.g.get(b);
    return !(!a || 1 != a.Ng)
  };

  function HT(a) {
    S.call(this, IT);
    this.g = a
  }
  r(HT, S);
  var IT = "R";

  function JT(a, b) {
    this.j = a;
    this.o = b;
    this.g = []
  }

  function KT(a, b) {
    var c = b.filter(function(d) {
      return !a.g.includes(d)
    });
    if (!c.length) return Promise.resolve(new gG);
    a.g = a.g.concat(b);
    UF(a.j, "drive.ds.sync.query.PeopleQueryRunner", "Querying for people. Size: " + c.length + ". " + c);
    return a.o.then(function(d) {
      return rQ(d, new fG(c))
    }).then(function(d) {
      LT(a, d);
      return d
    })
  }

  function LT(a, b) {
    var c = b.g.map(function(d) {
      return B(d, 1)
    });
    a.g = a.g.filter(function(d) {
      return !c.includes(d)
    })
  };

  function MT(a, b) {
    if (b) {
      var c = B(b, 2);
      F(a, 3, c);
      Lt(a, B(b, 3));
      (b = H(b, PB, 4)) && Kt(a, B(b, 1))
    }
  }

  function NT(a) {
    var b = B(a, 11),
      c = new QB;
    b = F(c, 1, b);
    c = B(a, 3);
    b = F(b, 2, c);
    c = B(a, 8);
    b = F(b, 3, c);
    c = new PB;
    a = B(a, 5);
    a = F(c, 1, a);
    return J(b, 4, a)
  };

  function OT(a, b) {
    T.call(this);
    this.j = new JT(a, b);
    this.g = new ET
  }
  r(OT, T);

  function PT(a, b) {
    GT(a.g, [NT(H(b, Ht, 1))], "ACCOUNT");
    return QT(a).then(function() {
      var c = B(H(b, Ht, 1), 11);
      return a.g.get(c)
    })
  }

  function RT(a, b) {
    return ST([b]).some(function(c) {
      c = B(c, 11);
      return !fQ(a.g, c)
    })
  }

  function ST(a) {
    return a.map(function(b) {
      var c = H(b, Nx, 85);
      c = c ? oa(I(c, Ht, 2)).concat(oa(I(c, Ht, 3))) : [];
      return oa(I(b, Ht, 15)).concat([H(b, Ht, 17), H(b, Ht, 47), H(b, Ht, 91), H(b, Ht, 95)], oa(c))
    }).flat().filter(function(b) {
      return b && !!B(b, 11)
    })
  }

  function TT(a, b) {
    return FT(a.g, b).filter(function(c) {
      return "ACCOUNT" != c
    })
  }

  function QT(a) {
    var b = oa(a.g.j).concat();
    return b.length ? KT(a.j, b).then(function(c) {
      a.g.update(c.g, 1) && a.dispatchEvent(new HT(c.g));
      return Promise.resolve()
    }) : Promise.resolve()
  };

  function UT() {
    nR.apply(this, arguments)
  }
  r(UT, nR);
  UT.prototype.Ob = function(a) {
    var b;
    if (b = nR.prototype.Ob.call(this, a)) a = a && a.item && xy(a.item), b = !(!a || !C(a, 3));
    return b
  };
  UT.prototype.T = h();
  UT.prototype.getType = h();
  UT.prototype.Ze = h();

  function VT(a, b) {
    this.j = a;
    this.o = b;
    this.g = {}
  }

  function hO(a, b) {
    if (!fB(b)) {
      var c = cB(b);
      if (1 == c.length) WT(a, c[0], b);
      else {
        c = aB(b);
        if (1 == c.length && !E(c[0], 2, !1)) {
          var d = c[0].P();
          c = a.o.get(d);
          if (!c) {
            kR(a.j.j.B, [d]).then(function(e) {
              (e = e[d]) && e.Z() ? WT(this, e.Z(), b) : WT(this, null, b)
            }.bind(a));
            return
          }
          if (c.item.Z()) {
            WT(a, c.item.Z(), b);
            return
          }
        }
        WT(a, null, b)
      }
    }
  }

  function WT(a, b, c) {
    var d = b || "subscribed";
    a.g[d] || (a.g[d] = []);
    a.g[d].push(c);
    b && vi(aT(a.j), function(e) {
      bT(e, b)
    })
  }

  function rO(a, b) {
    if (!fB(b))
      for (var c in a.g)
        for (var d = 0; d < a.g[c].length; d++)
          if (Ze(b, a.g[c][d])) {
            Gb(a.g[c], d);
            "subscribed" != c && vi(aT(a.j), function(e) {
              XT(e, c, !1)
            });
            return
          }
  };

  function YT() {
    this.g = new Map;
    this.j = [];
    this.o = []
  }
  YT.prototype.update = function(a) {
    var b = this,
      c = a.id,
      d = a.j;
    a = a.g;
    if (fH((d || a).item))
      if (a) {
        var e = Ey(a.item);
        e && B(e, 1) && (1 == B(e, 4) || 3 == B(e, 4)) && (e = B(e, 1), this.g.has(e) || this.g.set(e, new Set), this.g.get(e).add(c))
      } else !a && d && this.g.forEach(function(f, g, k) {
        f.delete(c) && 0 == f.size && k.delete(g)
      });
    !a && d && this.g.has(c) ? (this.g.get(c).forEach(function(f) {
      b.j.push(f)
    }), this.g.delete(c)) : this.g.has(c) && a && (!d || d && !Ze(a.item, d.item)) && this.g.get(c).forEach(function(f) {
      b.o.push(f)
    })
  };

  function ZT(a) {
    return a.o.filter(function(b) {
      return !a.j.includes(b)
    })
  }

  function $T(a) {
    a.j = [];
    a.o = []
  };

  function aU(a, b, c) {
    T.call(this);
    this.request = a;
    this.B = b;
    this.A = c;
    this.o = new Set;
    this.w = 0;
    this.g = null
  }
  r(aU, T);

  function bU(a) {
    if (a.g) return a.g.g;
    a.g = bi();
    cU(a.request).forEach(function(b, c) {
      a.w++;
      a.B.then(function(d) {
        return rQ(d, b)
      }).then(a.D.bind(a, c), a.C.bind(a, c))
    });
    return a.g.g
  }
  aU.prototype.D = function(a, b) {
    b = b.ta()[0];
    QQ(this.j.j, [b], 1, void 0, !0, this.request.ja());
    dU(this, a)
  };

  function dU(a, b) {
    a.o.add(b);
    a.o.size == a.w ? (QQ(a.j.j, [], 1, a.request, !1, a.request.ja()), a.dispatchEvent("r"), a.g.resolve()) : a.dispatchEvent("o")
  }
  aU.prototype.C = function(a, b) {
    5 == b.lc() || 4 == b.eb() ? (b = F(vA(new tA, a), 3, !0), SQ(this.j.j, [b]), dU(this, a)) : (a = new NF(AF(b), D(oD(this.A), 1, 1)), this.dispatchEvent(a), this.g.reject(b))
  };

  function eU(a, b) {
    aU.call(this, N(a), qQ(b), b.g);
    this.j = b
  }
  r(eU, aU);

  function cU(a) {
    var b = new Map;
    a.qa().forEach(function(c) {
      var d = N(a);
      d = F(d, 2, [c]);
      b.set(c, d)
    });
    return b
  };

  function fU(a, b, c) {
    yQ.call(this, a);
    this.M = b;
    this.j = {};
    c && this.mb(c, !0)
  }
  w(fU, yQ);
  m = fU.prototype;
  m.refresh = function() {
    var a = this;
    this.g = 6;
    var b = aI(this.context.g) != aI(this.context.g, this.M.ja()),
      c = [];
    vb(this.M.qa(), function(g) {
      var k = this.j[g];
      k && vy(k.item) && !b || c.push(g)
    }, this);
    if (0 == c.length) return this.mb([], !1), Wh();
    var d = N(this.M);
    F(d, 2, c || []);
    var e = new eU(d, this.context),
      f = bi();
    this.context.A.g() ? (this.Y.R(this.context.A, "t", function(g) {
      g.g() || (a.Y.hb(a.context.A, "t"), HQ(a), bU(e).then(f.resolve, f.reject, f))
    }), this.g = 0 < cc(this.j) ? 1 : 2) : (HQ(this), bU(e).then(f.resolve, f.reject, f));
    return f.g
  };
  m.Od = function(a) {
    var b = new GF;
    b.o = this.g;
    b.w = this.mc();
    EF(b, ac(this.j, function(c) {
      return c ? c.item : null
    }));
    AQ(this, a.ja(), b.g);
    return b
  };
  m.Pd = h();
  m.T = l("M");
  m.fd = function(a) {
    var b = gU(this, a.j),
      c = gU(this, a.g);
    if (b || c) c ? (this.j[a.id] = a.g, a.g.count++, b && a.j.count--) : (this.j[a.id] = null, a.j.count--);
    else return !1;
    return !0
  };

  function gU(a, b) {
    return !!b && Db(a.M.qa(), b.item.F())
  };

  function mT(a, b, c, d) {
    yQ.call(this, a);
    var e = this;
    this.M = N(b);
    this.w = new cR(this.context, this.M, !1);
    this.D = 0;
    b = YA(this.M) && SH(YA(this.M));
    var f = this.context.O;
    this.A = b ? u(f.j, f, this.M) : null;
    this.la = !b || !FH(this.M) || lD(qD(a.g));
    this.ea = GH(this.M);
    this.j = [];
    this.C = {};
    this.U = null;
    this.O = !1;
    this.G = [];
    this.W = this.X = null;
    this.o = 0;
    c && this.mb(c, !d);
    this.aa = null;
    this.I = Date.now();
    this.L = D(oD(a.g), 16, 36E5);
    WI(this.M) && this.Y.R(this.context.ag, "O", this.zm);
    ij(this, function() {
      jj(e.w);
      hU(e)
    })
  }
  r(mT, yQ);
  m = mT.prototype;
  m.refresh = function() {
    return iU(this, !1)
  };

  function iU(a, b) {
    a.g = 6;
    if (E(a.M, 48, !1)) return a.g = 1, Wh();
    if (WI(a.M)) {
      var c = jU,
        d = a.context.ag.g;
      d = Math.max(Date.now() - d, a.L);
      c(a, Math.min(d, 2592E5))
    }
    return kU(a, b)
  }

  function lU(a) {
    return a.o >= a.M.ca() || 1 == a.g ? Wh() : a.refresh()
  }

  function hU(a) {
    a.j.forEach(function(b) {
      return b.count--
    });
    a.o = 0;
    a.j = [];
    a.C = {}
  }

  function jU(a, b) {
    t.clearTimeout(a.aa);
    a.aa = t.setTimeout(function() {
      return iU(a, !0)
    }, b)
  }
  m.zm = function() {
    Date.now() - this.I > this.L && jU(this, 0)
  };

  function kU(a, b) {
    a.w && (a.Y.hb(a.w, "q", a.tg), a.Y.hb(a.w, "r", a.Ki), a.w.dispose());
    var c = a.M.bd();
    c && F(c, 2, !1);
    a.w = new cR(a.context, a.M, b);
    a.D = 0;
    a.Y.R(a.w, "q", function() {
      return a.tg(a.w.A)
    });
    a.Y.R(a.w, "r", a.Ki);
    return mU(a)
  }

  function mU(a) {
    var b = bi();
    a.context.A.g() ? a.Y.R(a.context.A, "t", function(c) {
      c.g() || (a.Y.hb(a.context.A, "t"), nU(a, b))
    }) : nU(a, b);
    return b.g
  }

  function nU(a, b) {
    HQ(a);
    var c = a.M.ca() + a.D;
    zi(wi(aR(a.w, c), b.resolve, b.reject, b), function() {
      return a.I = Date.now()
    })
  }
  m.Pd = function(a) {
    var b = 0;
    for (var c = q(this.B.clone().sa()), d = c.next(); !d.done; d = c.next()) {
      d = d.value;
      var e = FQ(this.context);
      d = tO(e, d).T();
      b = Math.max(b, d.ca())
    }
    WI(this.M) ? (bB(this.M, b), 2 != this.mc() && !this.w.g && (b > this.o || a) ? this.refresh() : oU(this)) : this.M.ca() != b && (bB(this.M, b), b > this.o ? mU(this) : oU(this))
  };
  m.T = l("M");
  m.Od = function(a) {
    var b = a.ca(),
      c, d = !1;
    if (gB(this.M)) {
      var e = this.j.slice();
      var f = this.G.slice(0, b);
      if (this.G.length > b) {
        var g = f.map(function(n) {
          return n.F()
        });
        for (c = 0; c < e.length; c++) {
          var k = e[c];
          d = I(k.item, Jx, 107).filter(function(n) {
            return g.includes(H(n, Ht, 1).F())
          });
          k = k.clone();
          M(k.item, 107, d);
          e[c] = k
        }
        e = e.filter(function(n) {
          return I(n.item, Jx, 107).length
        })
      }
      d = pU(e);
      c = new MB;
      F(c, 4, !1);
      OB(c, f)
    } else e = this.j.slice(0, b), c = new MA, F(c, 5, b < this.j.length || !this.context.A.g() && 1 != this.g), J(c, 7, this.U), F(c, 8, this.O),
      d = pU(e);
    e = sQ(e);
    AQ(this, a.ja(), e);
    c.ub(e);
    c.Nd(d ? 6 : 1 == this.g || b <= this.o ? 1 : this.context.A.g() ? 0 < this.j.length ? 1 : 2 : 6);
    c.He(this.mc());
    c.cd(this.X);
    c.dd(this.W);
    return c
  };

  function pU(a) {
    return a.some(function(b) {
      return [4, 5].includes(ry(b.item))
    })
  }
  m.tg = function(a) {
    this.U = a.A;
    this.O = a.j;
    this.G = a.o;
    this.X = a.w;
    this.W = a.B
  };
  m.Ki = function() {
    var a = this.M.ca() - this.o;
    0 < a && $Q(this.w) && (this.D += a, mU(this))
  };
  m.mb = function(a, b) {
    WI(this.M) && hU(this);
    var c = !1;
    a = q(a);
    for (var d = a.next(); !d.done; d = a.next()) d = GN(d.value), c = this.fd(d, !0) || c;
    b || (1 != this.g && (c = !0), this.g = 1);
    if (b = this.A) {
      a: {
        b = this.j;a = this.A || Tb;
        for (d = 1; d < b.length; d++)
          if (0 < a(b[d - 1], b[d])) {
            b = !1;
            break a
          } b = !0
      }
      b = !b
    }
    b && (qU(this, "ViewCache unsorted after import"), this.context.O.sort(this.M, this.j));
    c && DQ(this)
  };
  m.fd = function(a, b) {
    var c = this.C[a.id],
      d = !!c,
      e = rU(this, a.g, b),
      f = a.j;
    c && (d ? a.j && a.j != c && qU(this, "Updating different wrapper from the existing one") : qU(this, "Updating existing item but old wrapper did not match"), f = c, d = !0);
    if (d || e)
      if (d) e ? (b = f, a = a.g, this.A && 0 != this.A(b, a) ? (sU(this, b), tU(this, a)) : (c = this.j, d = this.A ? Rb(this.j, this.A || Tb, b) : tb(this.j, b), c[d] = a, a.count++, uU(a) && this.o++, b.count--, uU(b) && this.o--, mc(this.C, b.item.F()), this.C[a.item.F()] = a)) : (sU(this, f), WI(this.M) && jU(this, 0));
      else {
        if (WI(this.M) &&
          !b) return !1;
        tU(this, a.g)
      }
    else return !1;
    return !0
  };

  function tU(a, b) {
    a.A ? Wb(a.j, b, a.A) : a.j.push(b);
    b.count++;
    uU(b) && a.o++;
    a.C[b.item.F()] = b
  }

  function sU(a, b) {
    if (a.A) {
      var c = a.j,
        d = Rb(c, a.A || Tb, b);
      0 <= d && Gb(c, d)
    } else Fb(a.j, b);
    b.count--;
    uU(b) && a.o--;
    mc(a.C, b.item.F())
  }

  function rU(a, b, c) {
    if (!b) return !1;
    if (a.la && !WI(a.M)) {
      if (c) return !0;
      if (!a.ea) {
        var d = b.item.F();
        c = !!a.j.find(function(f) {
          return d == f.item.F()
        }, a);
        a = JH(a.context.H, a.M, b.item);
        return c && a
      }
    }
    if (!JH(a.context.H, a.M, b.item)) return !1;
    var e = 1.2 * a.M.ca();
    if (1 == a.g || !a.A || WG(b.g, 2) || a.o < e || c || CH(b.item)) return !0;
    c = 0 == a.j.length ? null : a.j[a.j.length - 1];
    return !!c && 0 >= a.A(b, c)
  }

  function oU(a) {
    if (1 != a.g && !a.context.A.g()) {
      var b = 1.2 * a.M.ca();
      if (!(b >= a.o || a.w && b >= a.w.ia())) {
        b = a.o - a.M.ca();
        for (var c = a.j.length - 1; 0 <= c && 0 < b; c--) {
          var d = a.j[c];
          WG(d.g, 2) || CH(d.item) || (d.count--, uU(d) && a.o--, mc(a.C, d.item.F()), Gb(a.j, c), b--)
        }
        kU(a, !1)
      }
    }
  }

  function qU(a, b) {
    var c = new Wz;
    Xz(c, 2);
    Yz(c, 6);
    aA(c);
    a.context.dispatchEvent(new ZE(new V(b, c)))
  }

  function uU(a) {
    return !WG(a.g, 2) && 3 != ry(a.item)
  }
  m.th = function() {
    oU(this)
  };
  m.ni = function(a) {
    return 1 != this.g && a.ca() > this.o && this.w.g
  };

  function vU(a, b) {
    Q.call(this);
    var c = this;
    this.X = new Mm(this);
    R(this, this.X);
    this.g = a;
    this.C = b;
    this.o = {};
    this.w = new rR(a.B);
    this.A = new ZH(a.Hg, a.H, a.O);
    this.H = new YT;
    C(a.g, 60) && (this.ea = new UT(a.H, a.O));
    this.G = new tH(a.o, KG(this.C));
    uH(this.G, B(a.g, 28));
    this.j = new ZI(this.C, this.g.B, this.A, this.G);
    this.g.L.j.g = this.j;
    this.B = new eR(this.g, this.C, this.o, this.A);
    this.O = new VT(this.g, this.A);
    this.I = new sT(this.g, this);
    ij(this.I, function() {
      c.I = null
    });
    this.aa = GG(LG(this.C), wU);
    TG(this.g.w, ["NSockf"], function() {
      tT(c.I)
    });
    b = ["NSockf", "jroI5d"];
    E(this.g.g, 15, !1) || this.g.va || b.push("NVkrgc");
    TG(this.g.w, b, function() {
      var d = new Ht;
      Jt(d, c.g.va);
      F(d, 7, !0);
      F(d, 6, 1);
      var e = new kx;
      lx(e, !0);
      F(e, 2, !1);
      F(e, 3, !1);
      F(e, 4, !1);
      F(e, 5, !1);
      F(e, 6, !0);
      mx(e, !0);
      F(e, 10, !1);
      px(e, !1);
      rx(e, !1);
      qx(e, !1);
      nx(e, !1);
      ox(e, !1);
      ux(e, !1);
      var f = new ay;
      dy(f, c.g.nb());
      fy(f, D(c.g.g, 38, "My Drive"));
      gy(f, "application/vnd.google-apps.folder");
      iy(f, !1);
      J(f, 17, d);
      M(f, 15, [d]);
      ny(f, 1);
      F(f, 29, !0);
      F(f, 63, !0);
      J(f, 84, e);
      QQ(c, [f], 1);
      UG(c.g.w, "hVFf7")
    });
    this.L = bi();
    TG(this.g.w,
      ["BNEDtc"],
      function() {
        c.L.resolve()
      });
    this.D = new OT(this.g.o, qQ(a));
    vD(this.g.g) && this.X.R(this.D, IT, this.W)
  }
  r(vU, Q);
  vU.prototype.W = function(a) {
    var b = this;
    a = a.g;
    oO(this, "Handling PeopleCache updated with " + a.length + " people.");
    a = q(a);
    for (var c = a.next(); !c.done; c = a.next()) c = TT(this.D, B(c.value, 1)).map(function(d) {
      return b.A.get(d).item
    }), QQ(this, c, 1)
  };

  function nO(a, b) {
    return SF(a.g.B, b, 2)
  }

  function iO(a, b) {
    var c = nO(a, b),
      d = a.o[c];
    if (d) return 3 == d.g ? (oO(a, c + " | ItemQueryRequest backed by refreshing existing cache"), d.refresh()) : oO(a, c + " | ItemQueryRequest backed by existing view cache"), {
      cache: d,
      ka: !1
    };
    d = [];
    for (var e = 5, f, g = uR(a.w), k = 0; k < g.length; k++) {
      var n = g[k];
      e = n.Hb(b);
      if (5 != e) {
        f = 1 == e ? void 0 : b.ca();
        d = n.jg(b, f);
        f = n.mc();
        oO(a, c + " | ItemQueryRequest backed by " + n.getType() + " | size " + (n.Qd() + " | initial " + d.length));
        break
      }
    }
    5 == e && oO(a, c + " | ItemQueryRequest backed by new cache");
    a.g.A.g() &&
      (d = d.concat(a.A.query(b, 1)), Qb(d, void 0, function(p) {
        return p.item.F()
      }), e = (e = a.w.g) && e.w && 5 != e.Hb(b) ? e.Hb(b) : 6, oO(a, "Offline: Populate with " + d.length + " initial items(s)"));
    d = new mT(a.g, b, d, 1 == e);
    f && d.Va(f);
    d.mb(a.A.query(b, 2), 1 != e);
    lU(d).fa(function(p) {
      var x = AF(p);
      aA(x);
      p = zF(p) ? p : Error(JSON.stringify(p));
      a.g.dispatchEvent(new ZE(new V("Error during view cache init", x, p)))
    });
    a.o[c] = d;
    return {
      cache: d,
      ka: !0
    }
  }

  function mO(a, b) {
    var c = nO(a, b),
      d = !1,
      e = a.o[c];
    if (e) DG(KG(a.C), b.ja()) ? oO(a, "FindByIdsRequest backed by existing query cache: " + c) : (d = $H(a.A, b.qa()), b = xU(a, b, d), d = !0, a.o[c] = b, yU(e, b), e = b, oO(a, "FindByIdsRequest backed by recreated query cache: " + c));
    else {
      var f = $H(a.A, b.qa());
      e = xU(a, b, f);
      d = !0;
      a.o[c] = e;
      oO(a, "FindByIdsRequest backed by new query cache: " + c + " with " + (f.length + " initial items."))
    }
    return {
      cache: e,
      ka: d
    }
  }

  function xU(a, b, c) {
    var d;
    b instanceof hA ? d = new TQ(a.g, a.C, b, c) : d = new fU(a.g, b, c);
    c.length && d.Va(8);
    d.refresh().fa(Fa);
    return d
  }

  function zU(a) {
    return Object.values(a.o).filter(function(b) {
      return b.T() instanceof DC
    })
  }

  function BQ(a, b, c) {
    c && c.length && wH(a.G, b, c);
    if (vD(a.g.g))
      for (a = a.D, b = ST(b), b = q(b), c = b.next(); !c.done; c = b.next())
        if (c = c.value, B(c, 11)) {
          var d = a.g.get(B(c, 11));
          d && MT(c, d)
        }
  }

  function MR(a, b, c) {
    b instanceof uQ && tR(a.w, [b]);
    var d = {},
      e = nc(a.A.g),
      f = [];
    b.vb().forEach(function(p) {
      var x = p.item.F(),
        A = a.A.get(x);
      if (A) {
        var G = ry(A.item);
        3 == G || 4 == G ? d[p.item.F()] = p.item : A != p && f.push(FN(p, A));
        mc(e, x)
      } else p = GN(p), a.A.update(p), a.H.update(p)
    });
    Zb(e, function(p) {
      f.push(GN(p))
    });
    for (var g = q(f), k = g.next(); !k.done; k = g.next()) b.update(k.value);
    b instanceof pO ? (g = nO(a, b.T()), (k = a.o[g]) && yU(k, b), a.o[g] = b) : sR(a.w, [b]);
    var n = [];
    Zb(d, function(p) {
      var x = new tA;
      vA(x, p.F());
      xA(x, p);
      n.push(x)
    });
    SQ(a,
      n);
    oO(a, "Merged cache: " + b.getType());
    b instanceof qR && c.forEach(function(p) {
      AU(a.g.wg, p)
    });
    a.g.C.update(3)
  }

  function yU(a, b) {
    a.B.clone().sa().forEach(function(c) {
      jO(b, c);
      sO(a, c)
    })
  }

  function QQ(a, b, c, d, e, f) {
    f || (f = d ? oa(d.ja().filter(function(fa) {
      return !KG(a.C).includes(fa)
    })).concat() : []);
    d && d instanceof VA && WI(d) && BU(a, b, d);
    for (var g = [], k = [], n = 0; n < b.length; n++) {
      var p = b[n],
        x = new YG(p, void 0, c),
        A = a.A.get(p.F()),
        G = A ? A.item : null,
        K = CU(a, A, x);
      if (null != K) x.g = K, DU(a, G, p), AH(p), p = lH(p, G, f), x.item = p;
      else if (null != A) x = A, p = G;
      else continue;
      vD(a.g.g) && EU(a, p);
      !A || FU(a, G, p, f) ? (k.push(EN(A, x)), g.push(x)) : g.push(A)
    }
    b = null;
    d && (b = nO(a, d), b = a.o[b], d instanceof VA && (d = wR(a.w, d)) && d.mb(g, !!e), b &&
      b.mb(g, !!e));
    0 < k.length && (e = dc(a.o), b && Fb(e, b), GU(a, k, e, f), HU(a, g));
    FQ(a.g).w()
  }

  function EU(a, b) {
    RT(a.D, b) || 5 != ry(b) || sy(b, 1)
  }

  function FU(a, b, c, d) {
    (b = b ? b.clone() : null) && BQ(a, [b], d);
    return !Ze(b, c)
  }

  function BU(a, b, c) {
    IU(a, b, c);
    b.forEach(function(d, e) {
      var f = rH(a.j, d.F());
      f && (FG(f, d, [1002]), FG(f, d, [1003]), FG(f, d, [1005]), b[e] = f);
      fB(c) && 0 < cB(c).length && uy(d, cB(c)[0])
    })
  }

  function IU(a, b, c) {
    var d;
    fB(c) ? d = "quick access" : gB(c) ? d = "people predict" : hB(c) && (d = "drive priority");
    c = b.map(function(e) {
      return e.F()
    }).join(", ");
    oO(a, "Got " + b.length + " items for " + d + ": " + c)
  }

  function JU(a, b) {
    var c = {};
    b.forEach(function(d) {
      c[d.g] || (c[d.g] = []);
      c[d.g].push(d)
    });
    Zb(c, function(d, e) {
      e = Number(e);
      QQ(a, sQ(d), e)
    })
  }

  function SQ(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
      var e = b[d],
        f = e.Vb() ? null : wA(e),
        g = e.ba(),
        k = (g = a.A.get(g)) ? g.item : null,
        n = null;
      if (f) {
        n = new YG(f, void 0, void 0, e.Jc() || void 0);
        var p = CU(a, g, n);
        if (null == p) continue;
        n.g = p;
        DU(a, k, f);
        E(e, 5, !1) && iH(f);
        AH(f);
        f = lH(f, k);
        n.item = f;
        vD(a.g.g) && EU(a, f)
      }
      p = a.g.Ij;
      AU(p.g.wg, e);
      if (mH(e)) {
        var x = e.Z();
        e.Vb() ? KU(p, x) : (e = wA(e), sH(e) && LU(p, x))
      }!k && !f || Ze(k, f) || c.push(EN(g, n))
    }
    GU(a, c, dc(a.o), [])
  }

  function DU(a, b, c) {
    b && !xy(c) && FG(c, b, a.aa);
    var d = b ? Ey(b) : null,
      e = Ey(c);
    e = e ? H(e, ay, 5) : null;
    d && e && DU(a, H(d, ay, 5), e);
    b && !H(c, Rx, 100) && FG(c, b, [1002]);
    b && !I(c, Jx, 107).length && FG(c, b, [1003]);
    b && !I(c, Lu, 117).length && FG(c, b, [1005]);
    b && null == B(c, 77) && FG(c, b, [71]);
    b && null == B(c, 79) && FG(c, b, [73]);
    b && C(b, 31) && !C(c, 31) && (iH(c), oO(a, "Cleared Item Suggest data for " + b.F() + "."))
  }

  function NQ(a, b, c) {
    if (b instanceof VA || b instanceof hA || b instanceof DC) b = nO(a, b), (a = a.o[b]) && GQ(a, c);
    else throw Error("Unsupported query type");
  }

  function CU(a, b, c) {
    var d = c.item;
    if (MU(a.g.Je, d.F())) return null;
    if (b) {
      if (!VG(b.g, c.g)) return null;
      a = b.item;
      if (3 != ry(a) && !mH(a) && !mH(d) && a.Z() == d.Z())
        if (B(a, 75) && B(d, 75)) {
          if (B(a, 75) > B(d, 75)) return null
        } else if (b.j && c.j) {
        if (b.j > c.j) return null
      } else if (B(a, 11) > B(d, 11)) return null
    }
    return XG(b && b.g, c.g)
  }
  vU.prototype.U = function(a, b) {
    if (a = this.A.get(a)) a.g = XG(a.g, b)
  };

  function GU(a, b, c, d) {
    for (var e = q(b), f = e.next(); !f.done; f = e.next()) f = f.value, a.G.update(f.id, f.g ? f.g.item : null, d);
    c = q(c);
    for (e = c.next(); !e.done; e = c.next()) EQ(e.value, b);
    c = 0;
    b = q(b);
    for (d = b.next(); !d.done; d = b.next()) {
      d = d.value;
      f = !1;
      e = uR(a.w);
      var g = q(e);
      for (e = g.next(); !e.done; e = g.next()) e.value.update(d) && (f = !0);
      f && c++;
      C(a.g.g, 60) && a.ea.update(d);
      a.A.update(d);
      a.H.update(d);
      if (a.A.get(d.id)) {
        if (vD(a.g.g) && (e = a.D, d.j || d.g)) {
          if (d.g) {
            f = void 0;
            g = e;
            d = d.g;
            f = void 0 === f ? 0 : f;
            for (var k = q(ST([d.item])), n = k.next(); !n.done; n =
              k.next()) n = NT(n.value), GT(g.g, [n], d.item.F(), f)
          }
          QT(e)
        }
      } else zH(a.G, d.id)
    }
    0 < c && a.g.C.Vi(c);
    NU(a)
  }

  function NU(a) {
    var b = a.H.j.slice(0),
      c = ZT(a.H);
    $T(a.H);
    if (b.length) {
      oO(a, "Refreshing shortcuts with unknown targets: " + b.join(", "));
      var d = new ju;
      ku(d, 308);
      kR(a.B, b, d, !0)
    }
    if (c.length) {
      oO(a, "Updating locally stale shortcuts: " + c.join(", "));
      b = aJ(a.j, c);
      var e = [];
      Object.values(b).forEach(function(f) {
        var g = Ey(f.item),
          k = B(g, 1);
        if (k = rH(a.j, k)) J(g, 5, k), F(g, 4, 1), e.push(f)
      });
      JU(a, e)
    }
  }

  function lO(a, b) {
    Sb(b.ja());
    var c = tb(b.qa(), "root");
    if (0 > c) return b;
    b = N(b);
    b.qa()[c] = a.g.nb();
    return b
  }

  function oO(a, b) {
    UF(a.g.o, "drive.ds.sync.cache.CacheManager", b)
  }

  function HU(a, b) {
    a.L.g.then(function() {
      var c = b.filter(function(d) {
        return 4 == ry(d.item)
      });
      c.length && (c = c.map(function(d) {
        return d.item.F()
      }), oO(a, "Refreshing " + c.length + " partial items. " + c), kR(a.B, c))
    })
  }

  function BT(a, b) {
    a.L.g.then(function() {
      b.forEach(function(c) {
        oO(a, "Adding cache hint for " + nO(a, c));
        if (!wR(a.w, c)) {
          var d = new wQ(a.g.H, a.g.O, a.g.B, c);
          c = new lR(a.g, d, c);
          var e = yR(a.g.D, null);
          ei(mR(c).then(function() {
            FR(d, e).then(function(f) {
              MR(a, d, f)
            })
          }), function() {
            AR(a.g.D, null)
          })
        }
      })
    })
  }
  var wU = [50];

  function OU(a, b) {
    a = PU(a);
    b = PU(b);
    return !(!a || !b || a != b)
  }

  function PU(a) {
    if (!a) return null;
    a = a.split("/");
    return 2 > a.length ? null : a[1]
  }

  function QU(a) {
    return a.ba() + "_" + PU(B(a, 1))
  };

  function RU(a, b) {
    Q.call(this);
    this.A = a;
    this.request = b;
    this.g = new Set;
    this.status = 6;
    this.B = new Map;
    this.o = 0
  }
  r(RU, Q);

  function SU(a, b) {
    a.g.add(b);
    TU(a).then(function() {
      return UU(a, b)
    })
  }
  m = RU.prototype;
  m.Qg = function(a, b, c) {
    var d = this;
    c = void 0 === c ? 1 : c;
    var e = !1;
    a.forEach(function(f) {
      e = d.Rg(f, c) || e
    });
    b || (e = 1 != this.status || e, this.status = 1);
    return e ? VU(this) : Wh([])
  };

  function VU(a) {
    for (var b = [], c = q(a.g.values()), d = c.next(); !d.done; d = c.next()) b.push(UU(a, d.value));
    return $h(b)
  }

  function WU(a, b) {
    a.status = 3;
    for (var c = [], d = {}, e = q(a.g.values()), f = e.next(); !f.done; d = {
        Ef: d.Ef
      }, f = e.next()) d.Ef = f.value, c.push(a.A.then(function(g) {
      return function(k) {
        k.C[g.Ef] = b;
        k.g || (k.g = Wk(k.w, 50, k))
      }
    }(d)));
    $h(c)
  }

  function XU(a) {
    for (var b = [], c = {}, d = q(a.g.values()), e = d.next(); !e.done; c = {
        Ff: c.Ff
      }, e = d.next()) c.Ff = e.value, b.push(a.A.then(function(f) {
      return function(g) {
        (g = g.j[f.Ff]) && g.Ue()
      }
    }(c)));
    $h(b).then(function() {
      a.o = 0 == a.o ? 1 : 6
    })
  }

  function TU(a) {
    return a.A.then(function(b) {
      var c = 0;
      a.g.forEach(function(d) {
        d = tO(b, d).T();
        c = Math.max(c, d.ca ? d.ca() || 0 : 0)
      });
      a.Og(c)
    })
  }

  function YU(a, b) {
    return b ? a.B.get(a.Pe(b)) : null
  }
  m.cf = function(a, b) {
    b = XG(YU(this, a), b);
    this.B.set(this.Pe(a), b)
  };
  m.Pe = aa();
  m.Ne = h();

  function UU(a, b) {
    return a.A.then(function(c) {
      var d = a.Pg();
      c.B[b] = d;
      c.g || (c.g = Wk(c.w, 50, c))
    })
  }
  m.removeItem = h();

  function ZU(a, b) {
    T.call(this);
    this.request = a;
    this.w = "";
    this.j = this.A = !1;
    this.C = b;
    this.g = [];
    this.o = 0
  }
  r(ZU, T);

  function $U(a, b) {
    a.o = void 0 === b ? 1E5 : b;
    return a.j || !(a.g.length <= a.o) || a.A && "" == a.w ? Wh() : aV(a)
  }

  function aV(a) {
    a.A = !0;
    a.j = !0;
    var b = a.Nf(a.request, a.o - a.g.length, a.w);
    return a.C(b).then(function(c) {
      return bV(a, c)
    }, function(c) {
      a.j = !1;
      c = AF(c);
      var d = new NF(c);
      a.Oi(d);
      a.dispatchEvent(d);
      return P(c)
    })
  }

  function bV(a, b) {
    a.j = !1;
    a.w = a.ig(b);
    b = a.fg(b);
    b.forEach(function(c) {
      return a.g.push(c)
    });
    a.df(b);
    return a.g.length < a.o && (!a.A || "" != a.w) ? $h([Wh(b), aV(a)]).then(function(c) {
      return c[0].concat(c[1])
    }) : Wh(b)
  }
  ZU.prototype.df = h();
  ZU.prototype.Oi = h();

  function cV(a, b, c) {
    ZU.call(this, c, function(d) {
      return a.then(function(e) {
        return rQ(e, d)
      }).fa(function(e) {
        if (e instanceof Wz) throw new V(void 0, e);
        if (e instanceof Error) throw new V("Not a drive.ds.Error", void 0, e);
        throw new V("Not an Error", void 0, Error("Not an Error: " + JSON.stringify(e)));
      })
    });
    this.B = b
  }
  r(cV, ZU);
  m = cV.prototype;
  m.Nf = function(a, b, c) {
    a = N(a);
    F(a, 2, b);
    return new dG(a, c)
  };
  m.ig = function(a) {
    return a.g || ""
  };
  m.fg = function(a) {
    return I(a.response, Iy, 2)
  };
  m.df = function(a) {
    dV(this.B, a, !1, 1)
  };
  m.Oi = function(a) {
    var b = this.B;
    (b = b.g.get(b.j(this.request))) && WU(b, a)
  };

  function eV(a, b, c, d) {
    RU.call(this, a, N(d));
    this.j = [];
    this.w = null;
    this.D = b;
    this.C = c
  }
  r(eV, RU);
  m = eV.prototype;
  m.refresh = function() {
    XU(this);
    this.w = new cV(this.D, this.C, this.request);
    return $U(this.w, this.request.ca() || 100)
  };

  function fV(a, b) {
    return a.j.find(function(c) {
      return OU(B(c, 1), b)
    })
  }
  m.Og = function(a) {
    this.w && a == this.request.ca() || (F(this.request, 2, a), this.w ? $U(this.w, a) : this.refresh())
  };
  m.Pg = function() {
    var a = Uy(Ty(new Ry, this.status), this.j.map(function(b) {
      return N(b)
    }));
    return new eG(a, void 0, 0, this.o)
  };
  m.Qg = function(a, b, c) {
    var d = this;
    a = a.filter(function(e) {
      return e.ba() == d.request.ba()
    });
    return RU.prototype.Qg.call(this, a, b, c)
  };
  m.Rg = function(a, b) {
    b = void 0 === b ? 1 : b;
    if (!VG(YU(this, B(a, 1)), b)) return !1;
    var c = this.j.length,
      d = this.j.findIndex(function(e) {
        return OU(B(e, 1), B(a, 1))
      }); - 1 < d && (this.j.splice(d, 1), c = d);
    this.j.splice(c, 0, a);
    this.cf(B(a, 1), b);
    return !0
  };
  m.removeItem = function(a) {
    Hb(this.j, function(b) {
      return OU(B(b, 1), a)
    }) && (this.B.delete(this.Pe(a)), VU(this))
  };
  m.Pe = function(a) {
    return PU(a)
  };
  m.cf = function(a, b) {
    fV(this, a) && RU.prototype.cf.call(this, a, b)
  };
  m.Ne = function(a) {
    var b = this;
    return a instanceof JC && a.ba() != this.request.ba() ? [] : I(a, Ny, 2).map(function(c) {
      return fV(b, c.Wa())
    }).filter(aa()).map(function(c) {
      return c.clone()
    })
  };

  function gV() {
    this.j = new Set;
    this.o = new Set;
    this.g = 0
  }

  function hV(a, b) {
    a.j.add(b)
  }
  gV.prototype.w = function(a) {
    this.j.delete(a)
  };

  function iV(a, b) {
    b.forEach(function(c) {
      return a.o.add(c)
    });
    a.g++
  }
  gV.prototype.A = function() {
    0 < this.g && this.g--;
    0 == this.g && this.o.clear()
  };

  function MU(a, b) {
    return a.j.has(b) || a.o.has(b)
  }

  function RQ(a, b) {
    return b.filter(function(c) {
      return !MU(a, c.F())
    })
  };

  function jV() {
    this.g = new Map;
    this.A = new gV
  }

  function fO(a, b, c) {
    var d = a.j(c),
      e = a.g.get(d),
      f = !e;
    e || (e = a.w(c), a.g.set(d, e));
    SU(e, b);
    return f
  }

  function qO(a, b, c) {
    var d = a.g.get(a.j(c));
    d && (d.g.has(b), d.g.delete(b), 0 == d.g.size && d.dispose(), d.ua() && a.g.delete(a.j(c)))
  }

  function dV(a, b, c, d) {
    d = void 0 === d ? 1 : d;
    var e = b.filter(function(f) {
      return a.B(f)
    });
    a.g.forEach(function(f) {
      f.Qg(e, c, d)
    })
  }
  jV.prototype.removeItem = function(a, b) {
    (b ? [this.g.get(b)] : this.g).forEach(function(c) {
      c.removeItem(a)
    })
  };
  jV.prototype.Ne = function(a) {
    var b = Array.from(this.g.values()).map(function(c) {
      return c.Ne(a)
    });
    return [].concat.apply([], oa(b))
  };

  function kV(a, b) {
    a.g.forEach(function(c) {
      c.cf(b, -2)
    })
  }
  jV.prototype.B = ca(!0);
  jV.prototype.o = function(a, b, c, d) {
    var e = this.j(b),
      f = this.g.get(e);
    f || (f = this.w(b), f.o = c, this.g.set(e, f), dV(this, a, d))
  };

  function lV(a, b) {
    jV.call(this);
    this.C = a;
    this.D = b
  }
  r(lV, jV);
  lV.prototype.j = function(a) {
    return a.ba()
  };
  lV.prototype.w = function(a) {
    return new eV(this.C, this.D, this, a)
  };

  function mV(a, b) {
    b = q(b);
    for (var c = b.next(); !c.done; c = b.next())
      if (c = wA(c.value)) c = c.F(), (c = a.g.get(c)) && c.refresh()
  }
  lV.prototype.B = function(a) {
    return !MU(this.A, QU(a))
  };

  function nV(a, b) {
    this.j = a;
    this.g = b
  }

  function oV(a, b) {
    b = Qy(new Py, b);
    var c = new cV(a.j, a.g, b);
    new Promise(function(d, e) {
      return $U(c, 100).then(d, e)
    })
  };

  function pV(a, b, c) {
    ZU.call(this, a, c);
    this.B = b
  }
  r(pV, ZU);
  pV.prototype.Nf = function(a, b) {
    a = N(a);
    return F(a, 1, b)
  };
  pV.prototype.ig = ca("");
  pV.prototype.fg = function(a) {
    return [a]
  };
  pV.prototype.df = function(a) {
    this.B(a)
  };

  function qV(a, b, c, d) {
    RU.call(this, a, N(d));
    this.C = c;
    this.D = b;
    this.j = this.w = null
  }
  r(qV, RU);
  qV.prototype.refresh = function() {
    var a = this;
    XU(this);
    this.j = new pV(this.request, this.C, function(b) {
      return a.D.then(function(c) {
        return rQ(c, b)
      })
    });
    return $U(this.j, this.request.ca() || 0)
  };
  qV.prototype.Og = function(a) {
    1 == this.status || this.j && a == this.request.ca() || (F(this.request, 1, a), this.j ? $U(this.j, a) : this.refresh())
  };
  qV.prototype.Pg = function() {
    if (this.w) return this.w;
    var a = new xC;
    F(a, 1, this.status);
    return a
  };
  qV.prototype.Rg = function(a) {
    this.w = a;
    return !0
  };

  function rV(a, b, c) {
    jV.call(this);
    this.C = a;
    this.G = b;
    this.D = c
  }
  r(rV, jV);

  function sV(a, b) {
    UF(a.D, "drive.ds.sync.cache.SuggestedWorkspaceCacheManager", b)
  }
  rV.prototype.j = function(a) {
    return a.toString()
  };
  rV.prototype.w = function(a) {
    var b = this;
    return new qV(this.C, this.G, function(c) {
      dV(b, c, !1)
    }, a)
  };
  rV.prototype.o = function(a, b, c, d) {
    var e = I(a[0], Mz, 2);
    sV(this, "Initialized " + e.length + " suggested workspaces: " + e.map(function(f) {
      return B(f, 1)
    }).join(", "));
    jV.prototype.o.call(this, a, b, c, d)
  };

  function tV(a) {
    var b = this;
    Q.call(this);
    this.g = a;
    this.j = [];
    this.w = new MG;
    var c = bi();
    this.H = c.g;
    KS(this.g.G).then(function(d) {
      b.j = d || [];
      c.resolve();
      uV(b)
    }, function() {
      return c.resolve()
    });
    this.o = new Map;
    this.C = -1;
    this.B = 0;
    TG(this.g.w, ["rVezo"], u(this.A, this))
  }
  w(tV, Q);

  function kO(a, b) {
    E(a.g.g, 46, !1) && a.H.then(function() {
      if (a.j[0] != b) {
        Fb(a.j, b);
        for (sH(rH(a.g.j.j, b)) ? vV(a, b, "Hidden TD, not tracking in recency list") : Ob(a.j, 0, 0, b); a.j.length > 2 * D(a.g.g, 47, 5);) a.j.pop();
        ES(a.g.G, LS, a.j)
      }
      Mb(a.g.j.w.j).length + a.o.size < D(a.g.g, 47, 5) && (uV(a), a.A())
    })
  }

  function LU(a, b) {
    Fb(a.j, b) && ES(a.g.G, LS, a.j)
  }

  function KU(a, b) {
    LU(a, b);
    a.w.contains(b) && a.w.remove(b);
    var c = a.o.get(b);
    c && c.dispose();
    a.o.delete(b);
    c = a.g.j.w;
    for (var d = Mb(c.j), e = 0; e < d.length; e++) {
      var f = d[e];
      if (f.Z() == b) {
        vV(a, b, "Cache removed");
        tR(c, [f]);
        a.g.C.update(3);
        break
      }
    }
    vi(aT(a.g), function(g) {
      XT(g, b, !0)
    });
    a.A()
  }
  tV.prototype.A = function() {
    if (this.g.w.g("rVezo")) {
      var a = this.g.j.w;
      wV(this);
      for (var b = {}; this.w.ia() && !(this.B >= D(this.g.g, 47, 5));) {
        var c = NG(this.w);
        this.B++;
        vR(a, c) || this.o.has(c) || (this.o.set(c, null), b.ue = new IC, F(b.ue, 1, c), qQ(this.g).then(function(d) {
          return function(e) {
            return rQ(e, d.ue)
          }
        }(b)).then(u(this.G, this, c), u(this.D, this, c)));
        b = {
          ue: b.ue
        }
      }
    }
  };

  function uV(a) {
    a.j && a.j.length && (a.B = 0, a.w.clear(), a.j.forEach(function(b) {
      a.w.g.push(b)
    }))
  }

  function wV(a) {
    t.clearTimeout(a.C);
    a.C = t.setTimeout(function() {
      uV(a);
      a.A()
    }, 36E5)
  }
  tV.prototype.G = function(a, b) {
    var c = B(b, 1);
    c && c > D(this.g.g, 48, 1E3) ? (vV(this, a, "Too large to backfill: " + B(b, 1)), xV(this, a, !1)) : yV(this, a)
  };
  tV.prototype.D = function(a) {
    yV(this, a)
  };

  function yV(a, b) {
    var c = new qR(a.g.H, a.g.O, b),
      d = N(c.T());
    bB(d, D(a.g.g, 48, 1E3));
    d = new lR(a.g, c, d);
    a.o.set(b, d);
    vV(a, b, "Backfill started");
    var e = yR(a.g.D, b);
    vi(aT(a.g), function(f) {
      bT(f, b)
    });
    ei(mR(d).then(function() {
      zV(this, b, c, e)
    }.bind(a), function() {
      vV(this, b, "Backfill failed");
      this.B--;
      xV(this, b, !0)
    }.bind(a)), function() {
      AR(this.g.D, b)
    }.bind(a))
  }

  function zV(a, b, c, d) {
    c.j ? (c.vd(), FR(c, d).then(function(e) {
      vV(this, b, "Backfill complete, size: " + c.Qd());
      MR(this.g.j, c, e);
      xV(this, b, !1)
    }.bind(a), function() {
      vV(this, b, "Backfill changes failed");
      xV(this, b, !0)
    }.bind(a))) : (vV(a, b, "Backfill exceeded size limit"), xV(a, b, !0))
  }

  function xV(a, b, c) {
    var d = a.o.get(b);
    d && d.dispose();
    a.o.delete(b);
    c && vi(aT(a.g), function(e) {
      XT(e, b, !1)
    });
    a.A();
    0 < a.o.size || Mb(a.g.j.w.j).map(function(e) {
      return e.Z()
    }).filter(function(e) {
      return !a.j.includes(e)
    }).forEach(function(e) {
      return KU(a, e)
    })
  }

  function vV(a, b, c) {
    UF(a.g.o, "drive.ds.sync.cache.TeamDriveCacheManager", b + " | " + c)
  };

  function AV(a, b) {
    a = B(a, 1);
    return null == a || B(b, 5) == a
  };

  function BV(a, b, c) {
    ZU.call(this, a, c);
    this.B = b
  }
  r(BV, ZU);
  BV.prototype.Nf = function(a, b, c) {
    a = N(a);
    F(a, 2, b);
    return new aG(a, c)
  };
  BV.prototype.ig = function(a) {
    return a.g || ""
  };
  BV.prototype.fg = function(a) {
    return I(a.response, Tz, 2)
  };
  BV.prototype.df = function(a) {
    this.B(a)
  };

  function CV(a) {
    this.o = PH(a, {
      numeric: !0
    })
  }
  CV.prototype.g = function(a, b, c) {
    var d = B(b, 2) || "",
      e = B(c, 2) || "",
      f;
    d != e ? f = this.o(d, e) * (a ? 1 : -1) : f = Tb(b.F(), c.F()) * (a ? 1 : -1);
    return f
  };
  CV.prototype.j = function(a, b, c) {
    var d = B(b, 4),
      e = B(c, 4),
      f;
    d != e ? f = Tb(d, e) * (a ? 1 : -1) : f = Tb(b.F(), c.F()) * (a ? 1 : -1);
    return f
  };

  function DV(a, b, c, d, e) {
    RU.call(this, a, N(e));
    this.D = d;
    this.G = b;
    this.w = [];
    this.j = null;
    a = new CV(c);
    b = (c = H(this.request, SB, 5)) ? c.getType() : 0;
    c = c ? B(c, 2) : 0;
    this.C = 1 == b ? a.g.bind(a, 2 != c) : a.j.bind(a, 1 == c)
  }
  r(DV, RU);
  DV.prototype.refresh = function() {
    var a = this;
    XU(this);
    this.j = new BV(this.request, this.D, function(b) {
      return a.G.then(function(c) {
        return rQ(c, b)
      })
    });
    return $U(this.j, this.request.ca() || 0)
  };
  DV.prototype.Og = function(a) {
    1 == this.status || this.j && a == this.request.ca() || (F(this.request, 2, a), this.j ? $U(this.j, a) : this.refresh())
  };
  DV.prototype.Pg = function() {
    var a = new UB;
    F(a, 1, this.status);
    WB(a, this.w.map(function(b) {
      return N(b)
    }));
    return new cG(a, void 0, 0, this.o)
  };
  DV.prototype.Rg = function(a) {
    var b = Hb(this.w, function(c) {
      return c.F() == a.F()
    });
    return a && AV(this.request, a) && !Ze(a, AN(a.F())) ? Wb(this.w, a, this.C) : b
  };

  function EV(a, b, c, d) {
    jV.call(this);
    this.D = a;
    this.H = b;
    this.G = c;
    this.C = d
  }
  r(EV, jV);

  function FV(a, b) {
    UF(a.G, "drive.ds.sync.cache.WorkspaceCacheManager", b)
  }
  EV.prototype.j = function(a) {
    return a.toString()
  };
  EV.prototype.w = function(a) {
    var b = this;
    return new DV(this.D, this.H, kD(qD(this.C)), function(c) {
      return dV(b, c, !1)
    }, a)
  };
  EV.prototype.o = function(a, b, c, d) {
    FV(this, "Initialized " + a.length + " items for workspaces: " + a.map(function(e) {
      return e.F()
    }).join(", "));
    jV.prototype.o.call(this, a, b, c, d)
  };

  function GV() {
    Q.call(this)
  }
  w(GV, Q);

  function HV(a, b) {
    b = IV(b);
    var c = wA(a),
      d = JV(yy(c));
    vb(b.ff, function(e) {
      ny(e.item, B(c, 25));
      var f = N(d);
      J(e.item, 84, f)
    });
    return b
  }

  function KV(a, b, c) {
    var d = LV(c);
    c = c.find(function(e) {
      return e.item.F() === b.F()
    });
    c = {
      g: c ? c : new YG(b),
      j: []
    };
    MV(a, d, c);
    return c
  }

  function LV(a) {
    var b = {};
    a.map(function(c) {
      B(c.item, 2).map(function(d) {
        b[d] || (b[d] = []);
        b[d].push(c)
      })
    });
    return b
  }

  function MV(a, b, c) {
    (b[c.g.item.F()] || []).forEach(function(d) {
      c.j.push(MV(a, b, {
        g: d,
        parent: c,
        j: []
      }))
    });
    return c
  }

  function NV(a, b) {
    var c = b.j.filter(function(g) {
      return !C(g.g.item, 76)
    });
    b = new Map;
    for (var d = []; c.length;) {
      var e = c.pop(),
        f = e.g.item;
      b.has(f.F()) || (ny(f, B(a, 25)), OV(a, f, e.parent ? e.parent.g.item : void 0), e.j.map(function(g) {
        C(g.g.item, 76) || c.push(g)
      }), b.set(f.F(), !0), d.push(e.g))
    }
    return d
  }

  function PV(a) {
    var b = a.j.filter(function(f) {
      return !C(f.g.item, 76)
    });
    a = new Map;
    for (var c = []; b.length;) {
      var d = b.pop(),
        e = d.g.item;
      a.has(e.F()) || (c.push(F(vA(new tA, e.F()), 3, !0)), d.j.map(function(f) {
        C(f.g.item, 76) || b.push(f)
      }), a.set(e.F(), !0))
    }
    return c
  }

  function IV(a) {
    var b = [],
      c = [];
    vb(a, function(d) {
      C(d.item, 76) || C(d.item, 137) ? c.push(d.item.F()) : b.push(d)
    });
    return {
      Ce: c,
      ff: b
    }
  }

  function JV(a) {
    a = N(a);
    var b = null != C(a, 34) ? C(a, 34) : C(a, 7),
      c = null != C(a, 35) ? C(a, 35) : C(a, 7);
    F(a, 30, c);
    vx(a, b);
    wx(a, c);
    xx(a, b);
    F(a, 4, b);
    ox(a, c);
    tx(a, b);
    sx(a, C(a, 7));
    nx(a, C(a, 10) || C(a, 11));
    ux(a, C(a, 1));
    F(a, 18, void 0);
    F(a, 13, void 0);
    F(a, 10, void 0);
    yx(a, C(a, 42));
    zx(a, C(a, 43));
    return a
  }

  function OV(a, b, c) {
    var d = yy(a),
      e = yy(b),
      f = C(d, 30);
    F(e, 30, f);
    vx(e, C(d, 31));
    wx(e, C(d, 32));
    xx(e, C(d, 33));
    f = C(d, 4);
    F(e, 4, f);
    ox(e, C(d, 9));
    ux(e, C(d, 21));
    tx(e, C(d, 20));
    sx(e, C(d, 17));
    lx(e, C(d, 1));
    mx(e, C(d, 7));
    f = C(d, 10);
    F(e, 10, f);
    px(e, C(d, 11));
    a = C(a, 76);
    F(b, 137, a);
    c && (c = yy(c), eH(b) ? (nx(e, C(c, 43)), zx(e, C(c, 43)), yx(e, C(c, 42))) : nx(e, C(c, 42)))
  };

  function QV(a) {
    this.g = a;
    this.o = new GV;
    this.j = a.j
  }

  function AU(a, b) {
    if (uD(a.g.g)) {
      var c = b.ba();
      if (mH(b)) {
        var d = RV(a, c);
        if (b.Vb()) {
          b = IV(d);
          var e = yb(b.ff, function(f) {
            return F(vA(new tA, f.item.F()), 3, !0)
          });
          SQ(a.g.j, e);
          kR(a.j.B, b.Ce);
          SV(a, c, "SD delete | Remove " + e.length + " item(s), " + b.Ce.length + " divergent items")
        } else e = rH(a.j.j, c), b = HV(b, d), JU(a.g.j, b.ff), kR(a.j.B, b.Ce), SV(a, c, "SD update | Update " + b.ff.length + " item(s), " + b.Ce.length + " divergent items"), e || fR(a.j.B, c)
      } else E(a.g.g, 86, !1) && (e = rH(a.j.j, c), TV(b, e) && (b.Vb() ? UV(a, c, e) : VV(a, b)))
    }
  }

  function UV(a, b, c) {
    c = RV(a, c.Z());
    var d = a.o,
      e = dy(new ay, b);
    c = (c = KV(d, e, c)) ? PV(c) : [];
    SQ(a.g.j, c);
    SV(a, b, "SD shared folder delete | Removed " + c.length + " item(s)")
  }

  function VV(a, b) {
    var c = wA(b),
      d = RV(a, c.Z()),
      e = a.o;
    c = wA(b);
    c = (d = KV(e, c, d)) ? NV(c, d) : [];
    JU(a.g.j, c);
    SV(a, b.ba(), "SD shared folder update | Updated " + c.length + " item(s)")
  }

  function RV(a, b) {
    var c = new VA;
    dB(c, [b]);
    F(c, 45, 2);
    return cJ(a.j.j, c)
  }

  function TV(a, b) {
    if (!b || !b.Z() || !eH(wA(a) || b)) return !1;
    if (a.Vb()) return !0;
    var c = !!C(b, 76),
      d = wA(a);
    a = C(b, 76) != C(d, 76);
    b = B(d, 25) != B(b, 25);
    return a || c && b
  }

  function SV(a, b, c) {
    UF(a.g.o, "drive.ds.sync.change.TdChangeProcessor", b + ": " + c)
  };

  function WV(a) {
    T.call(this);
    this.A = a;
    this.g = sD(a.g) ? 3 : 1;
    this.j = this.o = this.w = null
  }
  w(WV, T);

  function XV(a) {
    a.j || (a.j = new BN(5E3), a.o = t.setTimeout(a.B.bind(a), a.j.P()))
  }
  WV.prototype.B = function() {
    this.C();
    this.j && (EK(this.j), this.o = t.setTimeout(this.B.bind(this), this.j.P()))
  };
  WV.prototype.C = function() {
    YV(this, "Checking connection state.");
    qQ(this.A).then(function(a) {
      return rQ(a, new ZF)
    }).then(null, pb)
  };

  function YV(a, b) {
    UF(a.A.o, "drive.ds.sync.connection.StateManager", b)
  };

  function ZV(a) {
    Q.call(this);
    var b = this;
    this.g = a;
    this.j = null;
    this.o = new Mm(this);
    R(this, this.o);
    this.o.R(this.g.A, "t", this.B.bind(this));
    this.w = rb(this.A, this);
    GS(this.g.G).then(function(c) {
      b.g.A.j = c
    })
  }
  r(ZV, Q);
  ZV.prototype.A = function(a) {
    aA(a);
    F(a, 17, !0);
    this.g.dispatchEvent(new ZE(new V(void 0, a)))
  };
  ZV.prototype.B = function(a) {
    a.g() ? this.g.C.nc(!1) : (this.g.C.nc(!0), this.j && (this.j.resolve(), this.j = null))
  };

  function $V(a, b, c) {
    c = void 0 === c ? !1 : c;
    var d = new wl(D(b, 16, "") + "/open"),
      e = a.F();
    fH(a) && c && (e = gH(a));
    U(d, "id", e);
    U(d, "authuser", iD(qD(b)));
    return d.toString()
  };

  function aW(a, b, c) {
    c = void 0 === c ? !1 : c;
    var d = C(a, 44),
      e = Ey(a);
    if (c && e) {
      if (1 != B(e, 4)) return null;
      d = (d = H(e, ay, 5)) ? C(d, 44) : !0
    }
    if (!d) return null;
    d = a.F();
    fH(a) && c && (d = gH(a));
    return [D(b, 65, "https://lh3.google.com"), "u", iD(qD(b)), "d", d].join("/") + "={size}"
  };

  function bW(a) {
    this.g = a
  }

  function CQ(a, b, c) {
    cW(a, b, c);
    c.includes(18) && ly(b, $V(b, a.g, E(a.g, 18, !1)));
    if (c.includes(19)) {
      var d = aW(b, a.g, E(a.g, 18, !1));
      F(b, 20, d)
    }
    dW(a, b, c);
    if (E(a.g, 18, !1) && fH(b)) {
      if (d = (d = Ey(b)) && H(d, ay, 5)) {
        cW(a, d, c);
        c.includes(18) && ly(d, $V(d, a.g, E(a.g, 18, !1)));
        if (c.includes(19)) {
          var e = aW(d, a.g, E(a.g, 18, !1));
          F(d, 20, e)
        }
        dW(a, d, c)
      }
      a = !!B(b, 20);
      F(b, 44, a)
    }
  }

  function cW(a, b, c) {
    if (c.includes(20) && c.includes(3)) {
      c = E(a.g, 75, !1);
      a = E(a.g, 18, !1);
      c = void 0 === c ? !1 : c;
      a = void 0 === a ? !1 : a;
      var d = b.ma();
      a && fH(b) && (d = (a = Ey(b)) ? B(a, 3) : "");
      eH(b) && (B(b, 34) && (d += "+" + String(B(b, 34))), C(b, 22) && (d += "+shared"));
      F(b, 21, "https://drive-thirdparty.googleusercontent.com/" + (c ? "32" : "16") + "/type/" + (d || "application/unknown"))
    }
  }

  function dW(a, b, c) {
    var d = c.includes(41);
    c = c.includes(42);
    if (d || c) {
      var e = b.ma();
      e && (e = !eH(b) && !fH(b) && !(ON(e) || !ON(e) && e.startsWith("application/vnd.google-apps") && "application/vnd.google-apps.folder" != e) && (!C(b, 8) || 2 != B(b, 25)), d && F(b, 40, e), e && c && (d = a.g, c = E(a.g, 18, !1), c = void 0 === c ? !1 : c, a = b.F(), fH(b) && c && (a = gH(b)), c = new wl(D(d, 16, "") + "/uc"), U(c, "id", a), U(c, "authuser", iD(qD(d))), U(c, "export", "download"), F(b, 41, c.toString())))
    }
  };

  function eW() {
    this.g = {}
  }

  function fW(a, b, c) {
    for (var d = 0; d < b.length; d++)
      if (a.g[b[d]]) try {
        a.g[b[d]](c)
      } catch (e) {
        t.setTimeout(function() {
          throw e;
        }, 0)
      }
  };

  function gW(a, b, c) {
    this.g = new DK(a, b, .5);
    this.o = c;
    this.j = !0
  }

  function hW(a) {
    return a.g.j < a.o
  };

  function iW(a) {
    T.call(this);
    this.B = a
  }
  r(iW, T);
  m = iW.prototype;
  m.max = h();
  m.ge = h();
  m.Xg = h();
  m.Yi = h();
  m.Xi = h();
  m.Wi = h();
  m.zb = function() {
    this.dispatchEvent(new S("S"))
  };
  m.toString = function() {
    return this.B + ": " + this.max(Infinity)
  };

  function jW(a, b) {
    iW.call(this, "Backoff");
    this.g = a;
    this.o = b
  }
  r(jW, iW);
  jW.prototype.max = function() {
    return this.g.j ? Infinity : 0
  };
  jW.prototype.Xi = function() {
    this.g.g.reset()
  };
  jW.prototype.Wi = function(a) {
    (a = a.bc.length && sb(a.bc).response) && 7 == a.eb() && this.g.j && (this.g.j = !1, a = this.g.g.P(), kW(this, "Stopping new requests for " + a + " ms."), t.setTimeout(this.j.bind(this), a), EK(this.g.g))
  };
  jW.prototype.j = function() {
    kW(this, "Backoff complete, allowing requests.");
    this.g.j = !0;
    this.zb()
  };

  function kW(a, b) {
    UF(a.o, "drive.ds.network.queue.BackoffState", b)
  };

  function lW(a, b) {
    iW.call(this, "Batch");
    this.j = a;
    this.o = b;
    this.g = null
  }
  r(lW, iW);
  lW.prototype.max = function(a) {
    return a >= this.j ? this.j : null != this.g ? this.o <= Date.now() - this.g ? this.j : 0 : 0
  };
  lW.prototype.ge = function(a) {
    a >= this.j ? this.zb() : null == this.g && mW(this)
  };
  lW.prototype.Xg = function(a, b) {
    0 < b ? mW(this) : this.g = null
  };

  function mW(a) {
    a.g = Date.now() - 1;
    t.setTimeout(a.zb.bind(a), a.o)
  };

  function nW() {
    this.g = []
  }
  nW.prototype.add = function(a, b) {
    b ? this.g.unshift(a) : this.g.push(a);
    return !0
  };
  nW.prototype.j = function(a) {
    return Ob(this.g, 0, a)
  };
  nW.prototype.cancel = function(a) {
    return Hb(this.g, function(b) {
      return b.Ma.config.requestId == a ? (b.Bb.resolve(CO(b.Ma.request)), !0) : !1
    })
  };

  function oW(a) {
    return zb(a.g, function(b) {
      return DO(b.Ma.request)
    })
  }

  function pW(a) {
    var b = [];
    a.g.forEach(function(c) {
      (c = c.Ma.config.timestamp) && b.push(c)
    });
    return b
  };

  function qW() {
    T.call(this)
  }
  r(qW, T);

  function rW(a) {
    S.call(this, "T");
    this.request = a
  }
  w(rW, S);

  function sW(a, b, c) {
    T.call(this);
    this.w = a;
    this.o = b;
    this.g = c || null
  }
  r(sW, qW);
  sW.prototype.j = function(a) {
    var b = a.bc[a.bc.length - 1].response,
      c = 1 == b.lc(),
      d = CF(b);
    if (c) {
      if (this.g) {
        var e = this.g;
        3 != e.g && (YV(e, "Went offline."), e.g = 3, e.dispatchEvent(new QN("L")), XV(e))
      }
      e = this.w;
      b.lc();
      e.w(b)
    }
    d && (this.g ? (b = this.g, 2 != b.g && (YV(b, "Became unauthenticated."), b.g = 2, b.dispatchEvent(new QN("K")), XV(b))) : (b = this.o, 1 == b.j && (pQ(b, "Became unauthenticated."), b.j = !1, b.dispatchEvent(new PN("I")), b.g || (b.g = new BN(5E3), b.o = t.setTimeout(b.A.bind(b), b.g.P())))));
    b = 2 > a.bc.length;
    return (c || d) && b ? (this.dispatchEvent(new rW(a)),
      !0) : !1
  };

  function tW() {
    iW.call(this, "Immediate")
  }
  r(tW, iW);
  tW.prototype.max = ca(Infinity);
  tW.prototype.ge = function() {
    this.zb()
  };

  function uW() {
    this.g = []
  }
  r(uW, nW);
  uW.prototype.add = function(a, b) {
    var c = a.Ma.request;
    return c instanceof YF && B(c.request, 12) ? nW.prototype.add.call(this, a, b) : !1
  };
  uW.prototype.j = function(a) {
    return this.g.splice(0, Math.min(a, 1))
  };

  function vW(a, b) {
    this.g = [];
    this.o = b
  }
  r(vW, nW);
  vW.prototype.add = function(a, b) {
    return a.Ma.request instanceof YF ? !1 : nW.prototype.add.call(this, a, b)
  };
  vW.prototype.j = function(a) {
    for (var b = [], c = [], d = {}, e = 0, f = 0; f < this.g.length && b.length < a; f++) {
      var g = this.g[f],
        k = g.Ma.request;
      k = k instanceof jx || k instanceof cz || k instanceof Fz || k instanceof NC ? "item|" + (k instanceof jx ? k.ba() : k.F()) : k instanceof Gz || k instanceof QC ? "item|" + k.ba() : k instanceof Hz ? "td|" + k.F() : null;
      var n = g.Ma.request;
      if (n instanceof fz) n = !!C(n, 8);
      else if (n instanceof cz) {
        n = rH(this.o, n.F());
        var p;
        if (p = !!n) p = !!(n && n.ma() && cH.has(n.ma()));
        n = p
      } else n = !1;
      if (k && d[k] || n && 5 == e) break;
      b.push(g);
      c.unshift(f);
      k && (d[k] = !0);
      n && e++
    }
    for (a = 0; a < c.length; a++) Gb(this.g, c[a]);
    return b
  };

  function wW() {
    iW.call(this, "One Request")
  }
  r(wW, iW);
  wW.prototype.max = ca(1);

  function xW(a, b, c, d) {
    iW.call(this, "Online");
    var e = this;
    this.w = a;
    this.A = b;
    this.o = c;
    this.g = d || null;
    this.j = new Mm(this);
    R(this, this.j);
    TG(this.w, ["NSockf"], this.zb.bind(this));
    this.g ? this.j.R(this.g, "J", this.zb) : (this.j.R(this.A, "t", function(f) {
      f.g() || e.zb()
    }), this.j.R(this.o, "H", this.zb))
  }
  r(xW, iW);
  xW.prototype.max = function() {
    var a = this.w.g("NSockf");
    if (this.g) var b = 1 == this.g.g;
    else {
      b = this.A.g();
      var c = this.o.yb();
      b = !b && c
    }
    return a && b ? Infinity : 0
  };
  xW.prototype.ge = function() {
    this.zb()
  };

  function yW(a) {
    iW.call(this, "Parallel");
    this.j = a;
    this.g = 0
  }
  r(yW, iW);
  yW.prototype.max = function() {
    return Math.max(0, this.j - this.g)
  };
  yW.prototype.ge = function() {
    this.g < this.j && this.zb()
  };
  yW.prototype.Xg = function(a) {
    this.g += a.length
  };
  yW.prototype.Yi = function(a) {
    this.g -= a.length;
    this.g < this.j && this.zb()
  };

  function zW(a, b, c, d, e, f) {
    T.call(this);
    var g = this;
    this.D = a;
    this.o = b;
    this.A = new Mm(this);
    R(this, this.A);
    this.g = c;
    for (a = 0; a < c.length; a++) this.A.R(c[a], "S", this.zi);
    this.j = d;
    this.B = e;
    for (c = 0; c < e.length; c++) this.A.R(e[c], "T", function(k) {
      AW(g, !0, k.request)
    });
    this.G = Bm("drive.ds.network.queue.Queue [%s]", f);
    this.C = 0;
    this.w = new Map
  }
  r(zW, T);
  m = zW.prototype;
  m.add = function(a) {
    return AW(this, !1, {
      Ma: a,
      Bb: bi(),
      bc: []
    })
  };
  m.cancel = function(a) {
    var b = this.o.cancel(a),
      c = this.j.some(function(d) {
        return d.cancel(a)
      });
    b ? BW(this, "Canceled ID " + a + " during execution.") : c && BW(this, "Canceled ID " + a + " inside bucket.");
    return b || c
  };

  function CW(a) {
    return a.o.Di() ? !0 : a.j.some(function(b) {
      return oW(b)
    })
  }

  function AW(a, b, c) {
    if (!a.j.some(function(f) {
        return f.add(c, b)
      })) return a = Zz(new Wz, "No queue bucket accepted request."), P(a);
    for (var d = DW(a), e = 0; e < a.g.length; e++) a.g[e].ge(d);
    return c.Bb.g
  }
  m.zi = function() {
    var a = DW(this);
    if (a) {
      for (var b = this.g.reduce(function(e, f) {
          return Math.min(e, f.max(a))
        }, Infinity), c = [], d = 0; d < this.j.length && 0 == c.length; d++) c = this.j[d].j(b);
      0 < c.length && (BW(this, "Executing " + c.length + "/" + a + " requests. States: {" + this.g.join(", ") + "}"), EW(this, c))
    }
  };

  function EW(a, b) {
    var c = String(a.C++);
    a.w.set(c, b);
    for (var d = a.o.Ci(b), e = 0; e < b.length; e++) d[e].then(a.tl.bind(a, b[e]), a.sl.bind(a, b[e]));
    e = DW(a);
    for (var f = 0; f < a.g.length; f++) a.g[f].Xg(b, e);
    ei(ai(d).then(a.rl.bind(a, b)), function() {
      a.w.delete(c)
    });
    t.setTimeout(a.zi.bind(a), 0)
  }
  m.tl = function(a, b) {
    var c = a.Ma.config;
    BW(this, AO(a.Ma.request) + " request completed successfully. xd4: " + !(!c || !c.Zb));
    for (c = 0; c < this.g.length; c++) this.g[c].Xi();
    a.Bb.resolve(b)
  };
  m.sl = function(a, b) {
    b = AF(b);
    BW(this, AO(a.Ma.request) + (" request failed with error: " + b.Ra() + "."));
    a.bc.push({
      response: b,
      ys: Date.now()
    });
    for (var c = 0; c < this.g.length; c++) this.g[c].Wi(a);
    a.Ma.config.Ui || !this.B.some(function(d) {
      return d.j(a)
    }) ? a.Bb.reject(b) : BW(this, AO(a.Ma.request) + " encountered an error, but was intercepted to be retried.")
  };
  m.rl = function(a) {
    for (var b = 0; b < this.g.length; b++) this.g[b].Yi(a)
  };

  function DW(a) {
    for (var b = 0, c = 0; c < a.j.length; c++)
      if (a.j[c].g.length) {
        b = a.j[c].g.length;
        break
      } return b
  }

  function BW(a, b) {
    UF(a.D, a.G, b)
  }

  function FW(a) {
    var b = [];
    a.w.forEach(function(c) {
      c.forEach(function(d) {
        (d = d.Ma.config.timestamp) && b.push(d)
      })
    });
    a.j.forEach(function(c) {
      Nb(b, pW(c))
    });
    return b
  };

  function GW(a, b, c) {
    T.call(this);
    this.g = D(a, 21, 1E3);
    this.A = D(a, 1, 1);
    this.o = b;
    this.w = c
  }
  r(GW, qW);
  GW.prototype.j = function(a) {
    var b = this,
      c = a.bc.length,
      d = 0 < c && sb(a.bc).response,
      e = d.eb();
    if (d.ld() && 2 == d.ld()) return HW(this, "Retry " + c + " for a failed request due an offline error."), t.setTimeout(function() {
      b.dispatchEvent(new rW(a))
    }, this.g), !0;
    if (3 == e || 31 == e || 13 == e || 9 == e) {
      d = this.A;
      if (c <= d) return HW(this, "Retry number " + (c + 1) + " for a retryable error."), t.setTimeout(function() {
        b.dispatchEvent(new rW(a))
      }, this.g * Math.pow(2, c)), !0;
      HW(this, "Done retrying retriable requests after " + d + " retries.")
    } else if (7 ==
      e) {
      c = this.o.g.j;
      if (hW(this.o)) return HW(this, "Backoff number " + c + " for a User Rate Limit error."), this.dispatchEvent(new rW(a)), !0;
      HW(this, "Done retrying User Rate Limit errors after " + (c + " backoffs."))
    }
    return !1
  };

  function HW(a, b) {
    UF(a.w, "drive.ds.network.queue.RetryInterceptor", b)
  };

  function IW(a, b) {
    void 0 !== a.name ? (this.name = a.name, this.code = JW[a.name]) : (this.code = a = a.code, this.name = KW(a));
    Wa.call(this, ud("%s %s", this.name, b))
  }
  w(IW, Wa);

  function KW(a) {
    var b = ic(JW, function(c) {
      return a == c
    });
    if (void 0 === b) throw Error("Invalid code: " + a);
    return b
  }
  var JW = {
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

  function LW(a, b) {
    S.call(this, a.type, b)
  }
  w(LW, S);

  function MW() {
    T.call(this);
    this.g = new FileReader;
    this.g.onloadstart = u(this.pd, this);
    this.g.onprogress = u(this.pd, this);
    this.g.onload = u(this.pd, this);
    this.g.onabort = u(this.pd, this);
    this.g.onerror = u(this.pd, this);
    this.g.onloadend = u(this.pd, this)
  }
  w(MW, T);
  m = MW.prototype;
  m.abort = function() {
    try {
      this.g.abort()
    } catch (a) {
      throw new IW(a, "aborting read");
    }
  };
  m.Uh = function() {
    return this.g.result
  };
  m.getError = function() {
    return this.g.error && new IW(this.g.error, "reading file")
  };
  m.pd = function(a) {
    this.dispatchEvent(new LW(a, this))
  };
  m.N = function() {
    MW.na.N.call(this);
    delete this.g
  };

  function NW(a) {
    var b = new pi;
    a.R("loadend", Ra(function(c, d) {
      var e = d.Uh(),
        f = d.getError();
      null == e || f ? c.V(f) : c.callback(e);
      d.dispose()
    }, b, a));
    return b
  };

  function OW(a, b) {
    this.o = a;
    this.g = b
  }
  OW.prototype.remove = function() {
    var a = new pi;
    this.g.remove(u(a.callback, a, !0), u(function(b) {
      a.V(new IW(b, "removing " + this.g.fullPath))
    }, this));
    return a
  };

  function PW(a, b) {
    OW.call(this, a, b);
    this.j = b
  }
  w(PW, OW);

  function QW(a) {
    var b = new pi;
    a.j.getFile("__initcheck", {
      create: !0
    }, u(function(c) {
      b.callback(new RW(this.o, c))
    }, a), u(function(c) {
      b.V(new IW(c, "loading file __initcheck from " + this.g.fullPath))
    }, a));
    return b
  }

  function SW(a, b) {
    var c = new pi;
    a.j.getDirectory(b, {
      create: !0
    }, u(function(d) {
      c.callback(new PW(this.o, d))
    }, a), u(function(d) {
      c.V(new IW(d, "loading directory " + b + " from " + this.g.fullPath))
    }, a));
    return c
  }

  function TW(a) {
    var b = new pi;
    a.j.removeRecursively(u(b.callback, b, !0), u(function(c) {
      b.V(new IW(c, "removing " + this.g.fullPath + " recursively"))
    }, a));
    return b
  }

  function RW(a, b) {
    OW.call(this, a, b)
  }
  w(RW, OW);

  function UW(a) {
    this.g = a
  };

  function VW(a) {
    var b = t.requestFileSystem || t.webkitRequestFileSystem;
    if (!Ja(b)) return Hi(Error("File API unsupported"));
    var c = new pi;
    b(a, 10485760, function(d) {
      c.callback(new UW(d))
    }, function(d) {
      c.V(new IW(d, "requesting filesystem"))
    });
    return c
  };

  function WW() {
    this.g = {}
  }
  WW.prototype.Ci = function(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = Zz(new Wz, "ResumableUploadExecutor only supports ResumableUploadRequests.");
      b.push(P(d))
    }
    return b
  };
  WW.prototype.cancel = function(a) {
    return !!this.g[a] && this.g[a].cancel()
  };
  WW.prototype.Di = function() {
    return !kc(this.g)
  };

  function XW(a, b, c, d, e, f, g, k, n) {
    a = oD(a);
    D(a, 32, 1073741824);
    var p = new WW,
      x = new gW(D(a, 59, 2E3), D(a, 60, 2E4), D(a, 61, 6)),
      A = {};
    A[1] = new zW(d, b, [new tW], [new nW], [], "immediate");
    var G = new zW(d, b, [new xW(e, f, c, n), new jW(x, d), new wW], [new nW], [new sW(g, c, n), new GW(a, x, d)], "connected");
    A[2] = G;
    A[3] = YW(b, a, e, f, g, c, x, d, n);
    G = D(a, 10, 50);
    k = new zW(d, b, [new xW(e, f, c, n), new lW(G, D(a, 11, 100)), new yW(G), new jW(x, d)], [new vW(a, k), new uW, new nW], [new sW(g, c, n), new GW(a, x, d)], "mutation");
    A[4] = k;
    k = D(a, 46, 1);
    p = new zW(d, p, [new yW(k)],
      [new nW], [], "resumable upload");
    return A[5] = p, A[6] = YW(b, a, e, f, g, c, x, d, n), A[7] = YW(b, a, e, f, g, c, x, d, n), A
  }

  function YW(a, b, c, d, e, f, g, k, n) {
    var p = D(b, 10, 50);
    return new zW(k, a, [new xW(c, d, f, n), new lW(p, D(b, 12, 10)), new yW(3 * p), new jW(g, k)], [new nW], [new sW(e, f, n), new GW(b, g, k)], "batch")
  };

  function ZW(a, b, c, d, e, f, g) {
    this.D = a;
    this.g = b;
    this.B = c;
    this.w = d;
    this.A = e;
    this.o = f;
    this.C = g;
    this.j = null
  }

  function rQ(a, b, c) {
    function d() {
      return $W(a, b, c).then(null, e)
    }

    function e(g) {
      FO(b) || aA(g);
      return P(g)
    }
    if (a.o() && (b instanceof mB && WI(b.T()) || c && c.Wm)) {
      a.j || (a.j = bi());
      var f = a.j.g
    }
    return f ? f.then(d) : d()
  }

  function $W(a, b, c) {
    c = void 0 === c ? {} : c;
    var d = aX(a.D, b);
    if (d instanceof Wz) return P(d);
    var e = bX(a, d);
    if (!e) return d = bA(Zz(new Wz, "Failed to choose a queue for server request."), 18), P(d);
    e === a.g[7] && (c.Zb = !0);
    c = e.add({
      request: d,
      config: c
    });
    (DO(b) || DO(d)) && ei(c, function() {
      a.o() || (a.C(), a.j && (a.j.resolve(), a.j = null))
    });
    b = a.B.apply(d, c);
    b.then(a.w.apply.bind(a.w, d), h());
    return b
  }
  ZW.prototype.cancel = function(a) {
    return bc(this.g, function(b) {
      return b.cancel(a)
    })
  };

  function bX(a, b) {
    var c = !1;
    b instanceof hA ? c = !!C(b, 7) : b instanceof mB && (c = (c = b.T()) && !!C(c, 46));
    if (b instanceof ZF && a.g[1]) a = a.g[1];
    else {
      var d = a.A;
      a = (JO.includes(b.constructor) || d && (E(d, 54, !1) && GO.includes(b.constructor) || E(d, 55, !1) && HO.includes(b.constructor) && !WI(b) || E(d, 56, !1) && WI(b) || E(d, 57, !1) && IO.includes(b.constructor))) && a.g[7] ? a.g[7] : c && b instanceof hA && a.g[6] ? a.g[6] : (c || KO.includes(b.constructor)) && a.g[3] ? a.g[3] : EO.includes(b.constructor) && a.g[4] ? a.g[4] : a.g[2] || a.g[1]
    }
    return a
  };

  function cX(a) {
    var b = {};
    Zb(a, function(c, d) {
      b[d.toLowerCase()] = c
    });
    return b
  }

  function dX(a) {
    if (kc(a)) return "\r\n";
    var b = "";
    Zb(a, function(c, d) {
      b += d + ": " + c + "\r\n"
    });
    return b
  }

  function eX(a) {
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = Ld(a[c], ":");
      d && 2 == d.length && (b[Ec(d[0])] = Ec(d[1]))
    }
    return cX(b)
  }

  function fX(a) {
    return (a = a && cX(a)) && a["x-guploader-uploadid"]
  }

  function gX(a) {
    return (a = a && cX(a)) && a["x-google-trace"]
  };

  function hX(a, b) {
    this.g = a;
    this.j = vO[D(oD(a), 8, 0)];
    this.A = vO[D(oD(a), 51, 5)];
    this.w = iX[D(oD(a), 8, 0)];
    this.o = b
  }

  function jX(a, b, c) {
    if (c.Zb) kX(a, b, c), lX(a, b, c);
    else if (11 == b.api) {
      if (c.rs) {
        var d = c.lf || D(oD(a.g), 37, "");
        U(b.uri, "key", d)
      }
      kX(a, b, c);
      mX(a, b, c)
    } else switch (b.uri = nX(a, b.api, b.uri), b.api) {
      case 1:
        mX(a, b, c);
        kX(a, b, c);
        break;
      case 0:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        mX(a, b, c);
        lX(a, b, c);
        kX(a, b, c);
        break;
      case 8:
      case 9:
      case 10:
      case 13:
      case 12:
        mX(a, b, c);
        lX(a, b, c);
        break;
      default:
        throw Error("Unrecognized API: " + b.api);
    }
  }

  function oX(a, b) {
    var c = nX(a, b, new wl);
    if (!c.g) throw Error("Unsupported API for XD4.");
    var d = new wl;
    xl(d, c.w);
    yl(d, c.g);
    E(a.g, 82, !1) && pX.has(b) ? Al(d, "/batch" + a.j) : Al(d, "/batch");
    return d
  }

  function nX(a, b, c) {
    var d = B(oD(a.g), 57);
    switch (b) {
      case 0:
        a = d + a.j;
        break;
      case 1:
        a = d + "/batch" + a.j;
        break;
      case 2:
        a = d + "/upload" + a.j;
        break;
      case 3:
        a = d + "/upload/drive";
        break;
      case 4:
        return c;
      case 5:
        a = d + a.A;
        break;
      case 6:
        a = d + a.w;
        break;
      case 8:
        a = B(oD(a.g), 53);
        break;
      case 9:
        a = B(oD(a.g), 56);
        break;
      case 10:
        a = B(oD(a.g), 22);
        break;
      case 13:
        a = B(oD(a.g), 55);
        break;
      case 12:
        a = B(oD(a.g), 43);
        break;
      default:
        throw Error("Unrecognized API: " + b);
    }
    a && a.endsWith("/") && (a = a.slice(0, -1));
    c = c.toString();
    if (!c) return new wl(a);
    c.startsWith("/") &&
      (c = c.slice(1));
    return new wl(a + "/" + c)
  }

  function mX(a, b, c) {
    a = qD(a.g);
    c.zg || lD(a) || (c = [{
      key: "u",
      value: jD(a)
    }], b.headers.authorization = dF(c) || "", c = iD(a), 0 <= c && (b.headers["x-goog-authuser"] = String(c)))
  }

  function kX(a, b, c) {
    var d = qD(a.g),
      e = oD(a.g),
      f = c.zs || !!B(e, 13);
    c = c.As || E(e, 14, !1);
    var g = 11 == b.api;
    f && ((f = B(e, 13)) && f.startsWith("email:") ? U(b.uri, "trace", f) : f && "trace:true" == f ? U(b.uri, "$trace", "true") : f ? U(b.uri, "trace", "token:" + f) : U(b.uri, "trace", "email:" + D(d, 3, "").replace(/(@|\+).*$/, "")), g || U(b.uri, "trace.deb", "genoa:3:all,driveService:3:all" + (2 == D(e, 9, 2) ? "" : ",cospel:3:all,DriveService:3:all")));
    if (c && !g && a.o && (d = a.o, a = b.headers, e = b.method, f = b.uri.toString(), d.g && (c = d.g, !a["X-Google-DapperTraceInfo"]))) {
      b =
        new MN;
      b.o = KN(c.g);
      g = Gd().substring(0, 8);
      c = Array(18);
      c[0] = "0";
      c[1] = "x";
      for (var k = 0; 8 > k; k++) {
        var n = g.charCodeAt(7 - k);
        c[2 * k + 2] = Ee(n >> 4);
        c[2 * k + 3] = Ee(n & 15)
      }
      c = c.join("");
      k = new $C;
      g = F(k, 1, g);
      g = F(g, 2, c);
      e = F(g, 3, e);
      e = F(e, 4, f);
      d.j.push(e);
      b.j = KN(c);
      b.g = JN(808464432, 808464432);
      b.w = 41;
      d = String.fromCharCode.apply(null, NN(b));
      a["X-Google-DapperTraceInfo"] = t.btoa(d)
    }
  }

  function lX(a, b, c) {
    c.zg || lD(qD(a.g)) ? U(b.uri, "key", D(oD(a.g), 36, "")) : (a = c.lf || D(oD(a.g), 37, ""), U(b.uri, "key", a))
  }
  var qX = {},
    iX = (qX[0] = "/appsactivity/v1.1internal/activities", qX[1] = "/appsactivity/v1.1internal.corp/activities", qX[2] = "/appsactivity/v1.1internal.corp/activities", qX[4] = "/appsactivity/v1.1internal/activities", qX),
    pX = new Set([0, 1, 2, 3]);

  function rX(a) {
    this.g = a
  }

  function sX(a, b, c) {
    var d = "=====" + Gd() + "=====",
      e = b[0].api,
      f = c.every(function(p) {
        return p.Zb
      });
    if (f) {
      var g = e;
      var k = {
        "content-type": "text/plain; charset=UTF-8"
      };
      e = "POST";
      var n = oX(a.g, b[0].api);
      U(n, "$ct", 'multipart/mixed; boundary="' + d + '"')
    } else g = tX[e], k = uX[e] || {}, k["content-type"] = Bm('multipart/mixed; boundary="%s"', d), e = vX[e], n = new wl("");
    a = wX(a, b, c, d, f);
    return {
      api: g,
      body: a,
      headers: k,
      method: e,
      uri: n
    }
  }

  function wX(a, b, c, d, e) {
    for (var f = dX(xX[b[0].api] || {}), g = "", k = 0; k < b.length; k++) {
      e && mX(a.g, b[k], c[k]);
      var n = b[k],
        p = a.g,
        x = n,
        A = c[k];
      x.uri = nX(p, x.api, x.uri);
      switch (x.api) {
        case 0:
        case 5:
        case 6:
          lX(p, x, A);
          kX(p, x, A);
          break;
        case 2:
          mX(p, x, A);
          lX(p, x, A);
          var G = x,
            K = B(oD(p.g), 57);
          G.headers.host = Ol(K).g;
          G.headers.origin = t.location.origin ? t.location.origin : t.location.protocol + "//" + t.location.host;
          kX(p, x, A);
          break;
        case 12:
        case 10:
        case 13:
          break;
        case 8:
          throw Error("Batching unsupported for given API.");
        default:
          throw Error("Unrecognized API: " +
            x.api);
      }
      p = n;
      x = p.uri.clone();
      xl(x, "");
      yl(x, "");
      zl(x, null);
      n = f + "\r\n" + (p.method + " " + x + " HTTP/1.1\r\n") + dX(n.headers) + "\r\n" + (n.body ? n.body + "\r\n" : "");
      g += "--" + d + "\r\n";
      g += n
    }
    return g + ("--" + d + "--\r\n")
  }
  var vX = {
      0: "POST",
      2: "PUT",
      12: "POST"
    },
    tX = {
      0: 1,
      2: 3
    },
    yX = {},
    uX = (yX[2] = {
      "x-goog-upload-protocol": "batch"
    }, yX),
    zX = {},
    xX = (zX[0] = {
      "content-type": "application/http",
      "content-transfer-encoding": "binary"
    }, zX[12] = {
      "content-type": "application/http",
      "content-transfer-encoding": "binary"
    }, zX[2] = {
      "content-type": "application/http"
    }, zX);

  function AX(a, b, c, d, e, f, g, k) {
    if (200 == a || 204 == a || 308 == a) return null;
    e = BX(e) || new Wz;
    F(e, 8, !0);
    k && (k = Bl(new wl(k), void 0).toString(), F(e, 19, k));
    e.De() || F(e, 15, a || f);
    e.Ra() || Zz(e, ["HTTP status code: " + a, "HTTP status text: " + b, "XHR error code: " + f, "XHR error text: " + g].join(", "));
    B(e, 4) || $z(e, d);
    e.eb() || (5 == f ? bA(e, 7) : 0 != a || d ? 403 == a ? bA(e, 22) : (F(e, 14, void 0), F(e, 10, 1), F(e, 8, !0)) : bA(e, 2));
    e.wf(fX(c));
    e.uf(gX(c));
    return e
  }

  function BX(a) {
    if (!Ka(a)) return null;
    var b = new Wz,
      c = a.error;
    if (!c) return $z(b, JSON.stringify(a)), null;
    F(b, 15, c.code);
    Zz(b, c.message);
    a = c.errors && c.errors[0];
    if (!a) return b;
    c = a.reason;
    var d = CX[c];
    d ? F(b, 10, d) : c && !d && F(b, 10, 2);
    (a = a.debugInfo) && $z(b, a);
    return b
  }
  var CX = {
    authError: 15,
    backendError: 9,
    badContent: 14,
    badRequest: 11,
    cannotMoveTrashedItemIntoTeamDrive: 45,
    conflict: 8,
    conversionCorruptedInput: 16,
    conversionInputDoesNotMatchSpecifiedMimeType: 17,
    conversionInputTooLarge: 18,
    conversionInvalidRequest: 19,
    conversionInvalidLanguage: 20,
    conversionMissingCredentials: 21,
    conversionOutputTooLarge: 22,
    conversionQuotaExceeded: 23,
    conversionTimeout: 24,
    conversionTooManyCharts: 25,
    conversionTooManyDrawings: 26,
    conversionTooManyImages: 27,
    conversionUnsupportedConversionPath: 28,
    conversionUnsupportedLanguage: 29,
    conversionUnsupportedFormat: 30,
    deadlineExceeded: 31,
    fileOwnerNotMemberOfTeamDrive: 42,
    fileOwnerNotMemberOfTeamDriveDomain: 43,
    fileOwnerNotMemberOfWriterDomain: 47,
    fileWriterTeamDriveMoveInDisabled: 46,
    forbidden: 10,
    internalError: 3,
    invalid: 12,
    missingCookie: 33,
    notFound: 4,
    quotaExceeded: 6,
    rateLimitExceeded: 7,
    responseTooLarge: 5,
    required: 32,
    uploadBrokenConnection: 35,
    shareOutNotPermittedForContent: 50,
    crossDomainMoveRestriction: 52,
    teamDriveFileLimitExceeded: 40,
    teamDriveHierarchyTooDeep: 49,
    teamDriveMembershipRequired: 48,
    teamDriveNameTooLong: 44,
    teamDrivesFileTypeNotSupported: 39,
    teamDrivesFolderMoveInNotSupported: 36,
    teamDrivesFolderMoveOutNotSupported: 37,
    teamDrivesParentLimit: 41,
    teamDrivesShortcutFileNotSupported: 38,
    tooManyFiles: 53,
    tooManyUnmovableFiles: 54,
    transientError: 13,
    userCannotCreateFileForMimeType: 51,
    userRateLimitExceeded: 7,
    richContentLimitExceeded: 55,
    numChildrenLimitExceeded: 56,
    shortcutLimitExceeded: 57,
    shortcutPerCreatorLimitExceeded: 58
  };
  var DX = /^HTTP\/1\.1 (\d+) ([\w ]+)/,
    EX = /^multipart\/mixed; boundary="?([^"]+)"?$/;

  function FX(a, b, c) {
    var d, e = b.split("\r\n\r\n");
    if (2 > e.length) return bA($z(Zz(new Wz, "Individual batch response contained too few parts."), b), 17);
    var f = e[1].split("\r\n");
    if (d = DX.exec(f[0])) {
      var g = Kd(d[1]);
      d = d[2]
    } else return bA($z(Zz(new Wz, "Could not extract HTTP status code and text."), b), 16);
    f.shift();
    a = nc(a);
    Object.assign(a, eX(f));
    try {
      var k = Dc(Ed(e[2])) ? void 0 : JSON.parse(e[2])
    } catch (n) {}
    return AX(g, d, a, b, k, void 0, void 0, c && c.toString()) || {
      headers: a,
      text: b,
      json: k || void 0
    }
  };

  function GX() {
    Zk.apply(this, arguments)
  }
  r(GX, Zk);
  GX.prototype.qg = function() {
    return vd(Zk.prototype.qg.call(this))
  };

  function HX(a, b) {
    this.B = a;
    this.o = b;
    this.j = {};
    this.g = {}
  }

  function IX(a, b, c) {
    jX(a.B, b, c);
    var d = new GX;
    d.C = !0;
    var e = c.requestId || "",
      f = bi();
    d.R("complete", a.C.bind(a, d, f, e, c.Ag));
    e && c.hj && !c.Zb && (a.j[e] = d, a.g[e] = c, d.ea = !0, d.R("uploadprogress", u(a.A, a, c)), c.pk || d.R("downloadprogress", u(a.w, a, c)));
    d.send(b.uri, b.method, b.body, b.headers);
    return f.g
  }
  HX.prototype.cancel = function(a) {
    var b = this.j[a];
    a = this.g[a];
    return b && b.g ? (a.Ui = !0, b.abort(), !0) : !1
  };
  HX.prototype.C = function(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    c && (delete this.j[c], delete this.g[c]);
    c = {
      headers: ql(a),
      text: pl(a)
    };
    if (!d) try {
      if (a.g) b: {
        var e = a.g.responseText;
        if (t.JSON) try {
          var f = t.JSON.parse(e);
          break b
        } catch (k) {}
        f = Ok(e)
      }
      else f = void 0;
      var g = f;
      c.json = g
    } catch (k) {}
    d = AX(a.S(), nl(a), c.headers, c.text, c.json, a.j, rl(a), String(a.G));
    a.dispose();
    d ? b.reject(d) : b.resolve(c)
  };
  HX.prototype.A = function(a, b) {
    b.lengthComputable && fW(this.o, [a.hj], a.pk ? b.loaded / b.total : b.loaded / b.total / 2)
  };
  HX.prototype.w = function(a, b) {
    b.lengthComputable && fW(this.o, [a.hj], b.loaded / b.total / 2 + .5)
  };

  function JX(a, b, c) {
    this.j = a;
    this.o = b;
    this.w = c;
    this.g = new Map
  }
  JX.prototype.add = function(a, b) {
    var c = "DEFAULT";
    b.Zb && (c = oX(this.j, a.api).toString());
    this.g.has(c) || this.g.set(c, []);
    c = this.g.get(c);
    if (1 <= c.length && !b.Zb && !tX[a.api]) return a = Zz(new Wz, "Unsupported batch API: " + a.api), P(a);
    var d = bi();
    c.push({
      request: a,
      config: b,
      Bb: d
    });
    return d.g
  };
  JX.prototype.send = function() {
    var a = this;
    this.g.forEach(function(b, c) {
      try {
        KX(a, b)
      } catch (e) {
        var d = $z(Zz(new Wz, "Error executing XHR: " + e.message), e.stack);
        b.forEach(function(f) {
          f.Bb.reject(d)
        });
        a.g.delete(c)
      }
    })
  };

  function KX(a, b) {
    if (1 == b.length) {
      var c = b[0];
      if (!c.config.Ag && !c.config.Zb) {
        var d = !1;
        if (tX[c.request.api]) {
          var e = {
            api: c.request.api,
            headers: {},
            method: c.request.method,
            uri: c.request.uri.clone()
          };
          jX(a.j, e, c.config);
          2E3 < e.uri.toString().length && (d = !0)
        }
        if (!d) {
          b = c.Bb;
          IX(a.o, c.request, c.config).then(b.resolve, b.reject, b);
          return
        }
      }
    }
    LX(a, b)
  }

  function LX(a, b) {
    var c = [],
      d = [];
    b.forEach(function(e) {
      c.push(e.request);
      d.push(e.config)
    });
    IX(a.o, sX(a.w, c, d), {
      Ag: !0,
      Zb: d.every(function(e) {
        return e.Zb
      })
    }).then(function(e) {
      e.headers = cX(e.headers);
      var f = EX.exec(e.headers["content-type"]);
      var g = f && f[1] ? "--" + f[1] : null;
      if (!g) throw e = bA($z(new Wz, JSON.stringify(e)), 14), new V("Could not extract batch boundary.", e);
      f = g + "\r\n";
      g = e.text.split(g + "--");
      if (2 == g.length && Cc(vd(g[0]), f) && Dc(g[1])) g = vd(g[0]).substring(f.length);
      else throw e = bA($z(new Wz, JSON.stringify(e)),
        15), new V("Could not parse batch response; did not begin and end with boundary.", e);
      f = g.split(f);
      g = c.length == f.length;
      for (var k = [], n = 0; n < f.length; n++) {
        var p = g ? c[n] : void 0;
        k.push(FX(e.headers, f[n], p && p.uri))
      }
      return k
    }).then(null, function(e) {
      return Xb(BF(e), b.length)
    }).then(function(e) {
      for (var f = 0; f < b.length; f++) {
        var g = b[f].Bb,
          k = e[f];
        k instanceof Wz ? g.reject(k) : g.resolve(k)
      }
    })
  };

  function MX(a, b, c, d, e, f, g) {
    this.j = a;
    this.G = b;
    this.H = c;
    this.B = d;
    this.D = e;
    this.o = f;
    this.w = g;
    this.C = new rX(this.j);
    this.A = new HX(this.j, this.G);
    this.g = []
  }
  m = MX.prototype;
  m.Ci = function(a) {
    for (var b = this, c = [], d = [], e = 0; e < a.length; e++) {
      var f = a[e].Ma;
      this.g.push(f);
      c.push(this.H.j(f, a[e].bc));
      d.push(NO(f.request) ? PO(this.D, f.request) : void 0)
    }
    var g = new JX(this.j, this.A, this.C);
    e = [];
    for (f = 0; f < a.length; f++) {
      var k = c[f].then(function(p, x) {
        var A = g.add(x, p);
        A.then(b.Bm.bind(b, x.api, p.zg), h());
        return A
      }.bind(this, a[f].Ma.config));
      e.push(k)
    }
    ai(c).then(function() {
      g.send()
    });
    c = [];
    for (f = 0; f < a.length; f++) {
      k = a[f].Ma;
      var n = e[f].then(this.wk.bind(this, k.request, d[f])).fa(function(p) {
        p =
          AF(p);
        return P(p)
      });
      ei(n, this.lm.bind(this, k));
      c.push(n)
    }
    return c
  };
  m.wk = function(a, b, c) {
    a = this.B.j(a, c);
    b && QO(b, a.ta ? a.ta() : []);
    return a
  };
  m.Bm = function(a, b) {
    a = !b && Db(NX, a);
    this.w ? (b = this.w, 1 == b.g || !a && 2 == b.g || (YV(b, "Became connected."), b.g = 1, b.j = null, b.o && (t.clearTimeout(b.o), b.o = null), b.dispatchEvent(new QN("J"))), b.w && (b.w.resolve(), b.w = null)) : this.o && a && (a = this.o, 0 == a.j && (pQ(a, "Became authenticated."), a.j = !0, a.g = null, a.o && (t.clearTimeout(a.o), a.o = null), a.dispatchEvent(new PN("H"))))
  };
  m.cancel = function(a) {
    return this.A.cancel(a)
  };
  m.Di = function() {
    return this.g.some(function(a) {
      return DO(a.request)
    })
  };
  m.lm = function(a) {
    Fb(this.g, a)
  };
  var NX = [0, 2, 4, 6, 8];

  function OX(a, b, c) {
    this.g = a;
    this.w = b;
    this.o = c
  }

  function PX(a, b, c) {
    var d = a.g.Ne(b);
    if (!d.length) return null;
    for (var e = {}, f = q(I(b, Ny, 2)), g = f.next(); !g.done; e = {
        Dd: e.Dd,
        ve: e.ve,
        Ac: e.Ac
      }, g = f.next())
      if (e.Dd = g.value, e.Ac = d.find(function(n) {
          return function(p) {
            return OU(B(p, 1), n.Dd.Wa())
          }
        }(e)), e.Ac)
        if (C(e.Dd, 3)) e.ve = QU(e.Ac), hV(a.g.A, e.ve), ei(c, function(n) {
          return function() {
            a.g.A.w(n.ve)
          }
        }(e));
        else {
          g = q(I(e.Dd, Gy, 2));
          for (var k = g.next(); !k.done; k = g.next()) QX(a, e.Ac, k.value);
          dV(a.g, [e.Ac], !1, -1);
          ei(c, function(n) {
            return function() {
              return kV(a.g, B(n.Ac, 1))
            }
          }(e))
        } c.then(null,
      function(n) {
        var p = b.ba();
        oV(a.w, p);
        n = AF(n);
        F(n, 21, "Server error updating metadata after optimistic application.");
        a.o(n)
      });
    return MC()
  }

  function QX(a, b, c) {
    var d = I(b, nu, 2).find(function(e) {
      return e.F() == c.F()
    });
    d || (d = new nu, uu(d, c.F()), Ly(b, I(b, nu, 2).concat([d])), RX(d, c));
    if (1 == B(d, 4)) d.gh(C(c, 3));
    else if (12 == B(d, 4)) su(d, B(c, 17));
    else if (2 == B(d, 4)) d.jh(B(c, 4));
    else if (3 == B(d, 4)) B(c, 6).length ? d.yf(B(c, 6)) : B(c, 5).length && (a = B(d, 7).concat(B(c, 5)), d.yf(a));
    else if (4 == B(d, 4)) pu(d, B(c, 7));
    else if (5 == B(d, 4)) d.ih(B(c, 8));
    else if (6 == B(d, 4)) B(c, 10).length ? d.xf(B(c, 10)) : B(c, 9).length && (a = B(d, 10).concat(B(c, 9)), d.xf(a));
    else if (7 == B(d, 4)) d.hh(B(c,
      11));
    else if (8 == B(d, 4)) B(c, 13).length ? d.vf(B(c, 13)) : B(c, 12).length && (a = B(d, 12).concat(B(c, 12)), d.vf(a));
    else if (10 == B(d, 4)) qu(d, a.j(B(c, 14)));
    else if (11 == B(d, 4)) B(c, 16).length ? ru(d, B(c, 16).map(a.j)) : B(c, 15).length && ru(d, I(d, Ht, 16).concat(B(c, 15).map(a.j)));
    else throw d = "Optimistic Applier: Unsupported value type " + (B(d, 4) + "."), new V(d, new Wz);
  }

  function RX(a, b) {
    null != B(b, 3) ? a.Ua(1) : null != B(b, 17) ? a.Ua(12) : null != B(b, 4) ? a.Ua(2) : B(b, 6).length || B(b, 5).length ? a.Ua(3) : null != B(b, 7) ? a.Ua(4) : null != B(b, 8) ? a.Ua(5) : B(b, 10).length || B(b, 9).length ? a.Ua(6) : null != B(b, 11) ? a.Ua(7) : B(b, 13).length || B(b, 12).length ? a.Ua(8) : null != B(b, 14) ? a.Ua(10) : (B(b, 16).length || B(b, 15).length) && a.Ua(11)
  }
  OX.prototype.j = function(a) {
    return Lt(It(1), a)
  };

  function SX(a, b, c, d, e, f, g, k) {
    this.g = a;
    this.A = b;
    this.C = c;
    this.j = d;
    this.G = e;
    this.D = f;
    this.o = k;
    this.H = g;
    this.w = 0
  }
  SX.prototype.apply = function(a, b) {
    var c = this;
    if (!DO(a)) return b;
    var d;
    a instanceof Fz ? d = TX(this, a, b) : a instanceof Vz ? d = UX(this, b) : a instanceof NC ? d = VX(this, a, b) : a instanceof Zy ? d = WX(this, a, b) : a instanceof JC && (d = PX(this.C, a, b));
    d && (this.w++, this.A.nc(!1), ei(b, function() {
      c.w--;
      0 == c.w && c.A.nc(!0)
    }));
    return d ? Wh(d) : b
  };

  function TX(a, b, c) {
    hV(a.j, b.F());
    var d = rH(a.g.j, b.F());
    ei(c.then(null, a.B.bind(a, b.F(), d)), a.j.w.bind(a.j, b.F()));
    c.then(null, function(e) {
      e = AF(e);
      F(e, 21, "Server error deleting item after optimistic application.");
      a.o(e)
    });
    return IB(new HB, 1)
  }

  function UX(a, b) {
    var c = $A(new VA, !0);
    c = a.g.j.query(c).map(function(d) {
      return d.F()
    });
    iV(a.j, c);
    ei(b.then(null, h()), a.j.A.bind(a.j));
    b.then(null, function(d) {
      d = AF(d);
      F(d, 21, "Server error emptying trash after optimistic application.");
      a.o(d)
    });
    return IB(new HB, 1)
  }

  function WX(a, b, c) {
    var d = b.Z(),
      e = rH(a.g.j, d);
    if (!e) return null;
    e = N(e);
    BQ(a.g, [e], [157]);
    var f = vy(e);
    XX(f, I(b, Ux, 2));
    YX(f, I(b, Ux, 3));
    QQ(a.g, [e], -1, void 0, void 0, [157]);
    ei(c, function() {
      a.g.U(d, -2)
    }).then(function(g) {
      QQ(a.g, [H(g, ay, 2)], 1, void 0, void 0, [157])
    }, null);
    c.then(null, function(g) {
      g = AF(g);
      F(g, 21, "Server error updating item after optimistic application.");
      a.o(g)
    });
    return F(bz(new az, e), 1, 1)
  }

  function XX(a, b) {
    var c = {};
    b = q(b);
    for (var d = b.next(); !d.done; c = {
        te: c.te
      }, d = b.next()) c.te = d.value, I(a, Ux, 8).some(function(e) {
      return function(f) {
        return f.Wa() == e.te.Wa()
      }
    }(c)) || Se(a, 8, c.te, Ux, void 0)
  }

  function YX(a, b) {
    var c = b.map(function(d) {
      return d.Wa()
    });
    b = I(a, Ux, 8).filter(function(d) {
      return !c.includes(d.Wa())
    });
    Xx(a, b)
  }

  function VX(a, b, c) {
    var d = rH(a.g.j, b.F());
    if (!d || d.Z() && 0 == C(b, 5)) return null;
    var e = B(b, 10),
      f = B(b, 9);
    if (0 < e.length && 0 < f.length && (e = Object.values(bJ(a.g.j, e.concat(f))).map(function(g) {
        return g.Z() || "root"
      }), Qb(e), 1 < e.length)) return null;
    e = N(d);
    ZX(a, b, e);
    QQ(a.g, [e], -1, void 0, void 0, oa(a.D.j).concat());
    ei(c.then(null, a.B.bind(a, b.F(), d)), a.g.U.bind(a.g, b.F(), -2));
    c.then(null, function(g) {
      g = AF(g);
      F(g, 21, "Server error updating item after optimistic application.");
      a.o(g)
    });
    return IB(KB(JB(new HB, e), e.F()),
      1)
  }

  function ZX(a, b, c) {
    null != B(b, 3) && my(c, B(b, 3));
    null != B(b, 12) && qy(c, B(b, 12));
    null != b.ma() && gy(c, b.ma());
    null != B(b, 7) && ky(c, B(b, 7));
    null != C(b, 11) && jy(c, C(b, 11));
    null != C(b, 4) && hy(c, C(b, 4));
    null != C(b, 16) && py(c, C(b, 16));
    null != B(b, 2) && fy(c, B(b, 2));
    null != C(b, 5) && (iy(c, C(b, 5)), oy(c, C(b, 5)));
    null != b.j() && Ix(BH(c, !0), b.j());
    B(b, 8).length && ey(c, B(b, 8));
    if (B(b, 9).length) {
      var d = new Set(B(c, 2));
      B(b, 9).forEach(function(p) {
        return d.add(p)
      });
      ey(c, oa(d).concat())
    }
    if (B(b, 10).length) {
      var e = new Set(B(c, 2));
      B(b, 10).forEach(function(p) {
        return e.delete(p)
      });
      ey(c,
        oa(e).concat());
      var f = B(c, 46);
      f && B(b, 10).includes(f) && F(c, 46, void 0)
    }
    if (!B(c, 46)) {
      var g = a.H();
      f = B(c, 2).find(function(p) {
        var x = rH(a.g.j, p);
        return x && !!B(x, 46) || p == g
      });
      F(c, 46, f || void 0)
    }
    B(c, 2).length && (f = rH(a.g.j, B(c, 2)[0])) && uy(c, f.Z());
    if (f = H(b, Cx, 25)) {
      var k = H(c, Cx, 111) || new Cx;
      null != C(f, 1) && Dx(k, C(f, 1));
      null != B(f, 2) && Ex(k, B(f, 2));
      J(c, 111, k)
    }
    var n = B(c, 120);
    B(b, 31).forEach(function(p) {
      n.includes(p) || n.push(p)
    });
    B(b, 32).forEach(function(p) {
      Fb(n, p)
    });
    F(c, 120, n || [])
  }
  SX.prototype.B = function(a, b) {
    var c = this,
      d = kA(new hA, [a]);
    this.G.then(function(e) {
      return rQ(e, d)
    }).then(function(e) {
      e = e.Kc().ta()[0];
      QQ(c.g, [N(e)], 1)
    }, function() {
      b && QQ(c.g, [N(b)], 1)
    })
  };

  function $X(a, b, c, d, e) {
    this.g = a;
    this.A = b;
    this.o = c;
    this.j = d;
    this.w = e
  }
  $X.prototype.apply = function(a, b) {
    var c = this;
    b instanceof HB && 8 == b.S() || (a instanceof cz || a instanceof fz || a instanceof VF || a instanceof NC || a instanceof RC || a instanceof YF ? QQ(this.g, [N(H(b, ay, 2))], 1) : a instanceof Fz ? (b = F(vA(new tA, a.F()), 3, !0), SQ(this.g, [b])) : a instanceof Hz ? (b = F(yA(vA(new tA, a.F()), a.F()), 3, !0), SQ(this.g, [b]), AU(this.A, b)) : a instanceof Vz ? (b = $A(new VA, !0), b = this.g.j.query(b).map(function(d) {
      return F(vA(new tA, d.F()), 3, !0)
    }), SQ(this.g, b)) : a instanceof hz || a instanceof TC ? dV(this.o,
      [H(b, Tz, 2)], !1) : a instanceof Iz ? dV(this.o, [AN(a.F())], !1) : a instanceof dG ? dV(this.j, I(b.response, Iy, 2), !1, 1) : a instanceof JC && (I(a, Ny, 2).filter(function(d) {
      return C(d, 3)
    }).forEach(function(d) {
      return c.j.removeItem(d.Wa() || "", a.ba())
    }), oV(this.w, a.ba())))
  };

  function aY(a) {
    this.g = a
  }

  function aX(a, b) {
    if (b instanceof vC) {
      var c = rH(a.g, b.F());
      if (!c) return new Wz;
      var d = new NC;
      var e = b.F();
      d = F(d, 1, e);
      c.Z() ? C(yy(c), 16) ? F(d, 5, !0) : PC(d, !1) : (b = B(b, 2), 1 == B(c, 25) ? F(d, 5, !0) : b ? (a = rH(a.g, b), !a || C(yy(a), 7) ? F(d, 10, [b]) : PC(d, !1)) : PC(d, !1));
      return d
    }
    if (b instanceof wC) {
      c = rH(a.g, b.F());
      if (!c) return new Wz;
      d = new NC;
      e = b.F();
      d = F(d, 1, e);
      c.Z() ? C(yy(c), 16) ? F(d, 5, !1) : PC(d, !0) : (b = B(b, 2), 1 == B(c, 25) ? F(d, 5, !1) : b ? (a = rH(a.g, b), !a || C(yy(a), 1) ? F(d, 9, [b]) : PC(d, !0)) : PC(d, !0));
      return d
    }
    return b
  };

  function bY(a, b) {
    this.g = a;
    this.j = b
  }

  function cY(a, b) {
    if (!Ka(b)) throw new V("Expected an object, but got a " + Ga(b) + ".", xF(11, void 0, 8));
    var c = b.kind;
    if (!c) throw new V("Expected 'kind' parameter in response: " + JSON.stringify(b), xF(11, void 0, 21));
    if (!a.includes(c)) throw new V("Expected " + a.join(" or ") + " but got a " + c + ".", xF(11, void 0, 9));
  }

  function dY(a) {
    return null != a ? (new Date(a)).getTime() : void 0
  }

  function eY(a) {
    return a.nextPageToken ? a.nextPageToken : a.continuationToken ? a.continuationToken : ""
  }

  function fY(a) {
    var b = null != a.canDelete ? a.canDelete : a.canDeleteTeamDrive;
    var c = lx(new kx, a.canAddChildren);
    c = F(c, 18, a.canChangeTeamDriveBackground);
    c = F(c, 2, a.canComment);
    c = F(c, 3, a.canCopy);
    b = F(c, 4, b);
    b = F(b, 5, a.canDownload);
    b = F(b, 6, a.canEdit);
    b = qx(mx(rx(sx(tx(px(F(b, 10, a.canManageMembers), a.canManageVisitors), a.canMoveItemIntoTeamDrive), a.canMoveTeamDriveItem), a.canReadTeamDrive), a.canRemoveChildren), a.canRename);
    b = F(b, 13, a.canRenameTeamDrive);
    b = ux(ox(nx(b, a.canShare), a.canTrash), a.canUntrash);
    b = F(b,
      27, a.canModifyContentRestriction);
    b = F(b, 26, a.canShareOutsideDomain);
    b = xx(wx(vx(F(b, 30, a.canMoveItemWithinTeamDrive), a.canMoveItemOutOfTeamDrive), a.canMoveChildrenWithinTeamDrive), a.canMoveChildrenOutOfTeamDrive);
    b = F(b, 34, a.canDeleteChildren);
    b = F(b, 35, a.canTrashChildren);
    b = F(b, 36, a.canRequestApproval);
    b = F(b, 37, a.canReadCategoryMetadata);
    b = F(b, 38, a.canEditCategoryMetadata);
    b = F(b, 39, a.canChangeCategoryReferences);
    b = F(b, 40, a.canAddMyDriveParent);
    b = F(b, 41, a.canRemoveMyDriveParent);
    b = zx(yx(b, a.canShareChildFiles),
      a.canShareChildFolders);
    return F(b, 44, a.canRead)
  }

  function gY(a, b) {
    cY(["drive#user"], b);
    var c = Jt(It(1), b.permissionId);
    c = F(c, 11, b.id);
    c = Lt(F(c, 3, b.displayName), b.emailAddress);
    b.picture && Kt(c, b.picture.url);
    a = hY(a, b.permissionId, b.id);
    F(c, 7, a);
    F(c, 9, b.domain);
    return c
  }

  function hY(a, b, c) {
    var d = a.j();
    if (d && b) return d == b;
    if (c) return a.g == c
  };

  function iY() {
    this.g = [];
    this.j = mI;
    for (var a = !1, b = "", c = 0; 19 > c; c++) {
      var d = "yyyy:MM:dd HH:mm:ss".charAt(c);
      if (" " == d)
        for (0 < b.length && (this.g.push({
            text: b,
            count: 0,
            Yc: !1
          }), b = ""), this.g.push({
            text: " ",
            count: 0,
            Yc: !1
          }); 18 > c && " " == "yyyy:MM:dd HH:mm:ss".charAt(c + 1);) c++;
      else if (a) "'" == d ? 19 > c + 1 && "'" == "yyyy:MM:dd HH:mm:ss".charAt(c + 1) ? (b += "'", c++) : a = !1 : b += d;
      else if (0 <= "GyMdkHmsSEDahKzZvQL".indexOf(d)) {
        0 < b.length && (this.g.push({
          text: b,
          count: 0,
          Yc: !1
        }), b = "");
        var e = "yyyy:MM:dd HH:mm:ss".charAt(c);
        for (var f = c + 1; 19 >
          f && "yyyy:MM:dd HH:mm:ss".charAt(f) == e;) f++;
        e = f - c;
        this.g.push({
          text: d,
          count: e,
          Yc: !1
        });
        c += e - 1
      } else "'" == d ? 19 > c + 1 && "'" == "yyyy:MM:dd HH:mm:ss".charAt(c + 1) ? (b += "'", c++) : a = !0 : b += d
    }
    0 < b.length && this.g.push({
      text: b,
      count: 0,
      Yc: !1
    });
    a = !1;
    for (b = 0; b < this.g.length; b++) jY(this.g[b]) ? !a && b + 1 < this.g.length && jY(this.g[b + 1]) && (a = !0, this.g[b].Yc = !0) : a = !1
  }
  iY.prototype.parse = function(a, b, c) {
    a: {
      c = c || 0;
      for (var d = new kY, e = [c], f = -1, g = 0, k = 0, n = 0; n < this.g.length; n++)
        if (0 < this.g[n].count)
          if (0 > f && this.g[n].Yc && (f = n, g = c, k = 0), 0 <= f) {
            var p = this.g[n].count;
            if (n == f && (p -= k, k++, 0 == p)) {
              b = 0;
              break a
            }
            lY(this, a, e, this.g[n], p, d) || (n = f - 1, e[0] = g)
          } else {
            if (f = -1, !lY(this, a, e, this.g[n], 0, d)) {
              b = 0;
              break a
            }
          }
      else {
        f = -1;
        if (" " == this.g[n].text.charAt(0)) {
          if (p = e[0], mY(a, e), e[0] > p) continue
        } else if (a.indexOf(this.g[n].text, e[0]) == e[0]) {
          e[0] += this.g[n].text.length;
          continue
        }
        b = 0;
        break a
      }
      b: {
        if (null ==
          b) throw Error("Parameter 'date' should not be null.");void 0 != d.era && void 0 != d.year && 0 == d.era && 0 < d.year && (d.year = -(d.year - 1));void 0 != d.year && b.setFullYear(d.year);a = b.getDate();b.setDate(1);void 0 != d.month && b.setMonth(d.month);void 0 != d.day ? b.setDate(d.day) : (f = nI(b.getFullYear(), b.getMonth()), b.setDate(a > f ? f : a));Ja(b.setHours) && (void 0 == d.g && (d.g = b.getHours()), void 0 != d.w && 0 < d.w && 12 > d.g && (d.g += 12), b.setHours(d.g));Ja(b.setMinutes) && void 0 != d.A && b.setMinutes(d.A);Ja(b.setSeconds) && void 0 != d.B && b.setSeconds(d.B);
        Ja(b.setMilliseconds) && void 0 != d.C && b.setMilliseconds(d.C);void 0 != d.o && b.setTime(b.getTime() + 6E4 * (d.o - b.getTimezoneOffset()));d.D && (a = new Date, a.setFullYear(a.getFullYear() - 80), b.getTime() < a.getTime() && b.setFullYear(a.getFullYear() + 100));
        if (void 0 != d.j)
          if (void 0 == d.day) d = (7 + d.j - b.getDay()) % 7, 3 < d && (d -= 7), a = b.getMonth(), b.setDate(b.getDate() + d), b.getMonth() != a && b.setDate(b.getDate() + (0 < d ? -7 : 7));
          else if (d.j != b.getDay()) {
          b = !1;
          break b
        }
        b = !0
      }
      b = b ? e[0] - c : 0
    }
    return b
  };

  function jY(a) {
    if (0 >= a.count) return !1;
    var b = "MydhHmsSDkK".indexOf(a.text.charAt(0));
    return 0 < b || 0 == b && 3 > a.count
  }

  function mY(a, b) {
    (a = a.substring(b[0]).match(/^\s+/)) && (b[0] += a[0].length)
  }

  function lY(a, b, c, d, e, f) {
    mY(b, c);
    var g = c[0],
      k = d.text.charAt(0),
      n = -1;
    if (jY(d))
      if (0 < e) {
        if (g + e > b.length) return !1;
        n = nY(a, b.substring(0, g + e), c)
      } else n = nY(a, b, c);
    switch (k) {
      case "G":
        return n = oY(b, c, a.j.Tj), 0 <= n && (f.era = n), !0;
      case "M":
      case "L":
        a: {
          d = n;
          if (0 > d) {
            d = oY(b, c, a.j.Yj.concat(a.j.gk, a.j.dk, a.j.hk));
            if (0 > d) {
              f = !1;
              break a
            }
            f.month = d % 12
          } else f.month = d - 1;f = !0
        }
        return f;
      case "E":
        return d = oY(b, c, a.j.lk), 0 > d && (d = oY(b, c, a.j.fk)), 0 > d ? f = !1 : (f.j = d, f = !0), f;
      case "a":
        return n = oY(b, c, a.j.Mj), 0 <= n && (f.w = n), !0;
      case "y":
        a: {
          if (0 >
            n) {
            var p = b.charAt(c[0]);
            if ("+" != p && "-" != p) {
              f = !1;
              break a
            }
            c[0]++;
            n = nY(a, b, c);
            if (0 > n) {
              f = !1;
              break a
            }
            "-" == p && (n = -n)
          }
          p || 2 != c[0] - g || 2 != d.count ? f.year = n : (a = n, b = (new Date).getFullYear() - 80, c = b % 100, f.D = a == c, a += 100 * Math.floor(b / 100) + (a < c ? 100 : 0), f.year = a);f = !0
        }
        return f;
      case "Q":
        return 0 > n ? (d = oY(b, c, a.j.Zj), 0 > d && (d = oY(b, c, a.j.ek)), 0 > d ? f = !1 : (f.month = 3 * d, f.day = 1, f = !0)) : f = !1, f;
      case "d":
        return 0 <= n && (f.day = n), !0;
      case "S":
        return a = c[0] - g, f.C = 3 > a ? n * Math.pow(10, 3 - a) : Math.round(n / Math.pow(10, a - 3)), !0;
      case "h":
        12 == n &&
          (n = 0);
      case "K":
      case "H":
      case "k":
        return 0 <= n && (f.g = n), !0;
      case "m":
        return 0 <= n && (f.A = n), !0;
      case "s":
        return 0 <= n && (f.B = n), !0;
      case "z":
      case "Z":
      case "v":
        b.indexOf("GMT", c[0]) == c[0] && (c[0] += 3);
        a: if (c[0] >= b.length) f.o = 0, f = !0;
          else {
            d = 1;
            switch (b.charAt(c[0])) {
              case "-":
                d = -1;
              case "+":
                c[0]++
            }
            g = c[0];
            n = nY(a, b, c);
            if (0 > n) f = !1;
            else {
              if (c[0] < b.length && ":" == b.charAt(c[0])) {
                p = 60 * n;
                c[0]++;
                n = nY(a, b, c);
                if (0 > n) {
                  f = !1;
                  break a
                }
                p += n
              } else p = n, p = 24 > p && 2 >= c[0] - g ? 60 * p : p % 100 + p / 100 * 60;
              f.o = -(p * d);
              f = !0
            }
          }
        return f;
      default:
        return !1
    }
  }

  function nY(a, b, c) {
    if (a.j.mk) {
      for (var d = [], e = c[0]; e < b.length; e++) {
        var f = b.charCodeAt(e) - a.j.mk;
        d.push(0 <= f && 9 >= f ? String.fromCharCode(f + 48) : b.charAt(e))
      }
      b = d.join("")
    } else b = b.substring(c[0]);
    a = b.match(/^\d+/);
    if (!a) return -1;
    c[0] += a[0].length;
    return parseInt(a[0], 10)
  }

  function oY(a, b, c) {
    var d = 0,
      e = -1;
    a = a.substring(b[0]).toLowerCase();
    for (var f = 0; f < c.length; f++) {
      var g = c[f].length;
      g > d && 0 == a.indexOf(c[f].toLowerCase()) && (e = f, d = g)
    }
    0 <= e && (b[0] += d);
    return e
  }

  function kY() {};

  function pY(a, b) {
    this.g = a;
    this.j = b
  }

  function qY(a, b, c) {
    var d = new iB;
    a = (new MA).ub(rY(a, b));
    a = F(a, 8, b.incompleteSearch);
    if ("drive#fileList" == b.kind) {
      cY(["drive#fileList"], b);
      var e = b.spellResponse;
      if (e) {
        var f = [];
        var g = e.spellCorrections;
        for (e = 0; e < g.length; e++) {
          for (var k = g[e].spellFragments, n = [], p = 0; p < k.length; p++) {
            var x = k[p];
            var A = new DA;
            A = F(A, 2, sY[x.status]);
            A = F(A, 1, x.original);
            x = F(A, 3, x.correction);
            n.push(x)
          }
          k = new EA;
          n = M(k, 1, n);
          f.push(n)
        }
        g = new GA;
        M(g, 1, f)
      }
      if ((f = b.suggestedNlpQueries) && 0 < f.length) {
        var G = new BA;
        F(G, 1, f || [])
      }
      g || G ? (f = new IA,
        g && J(f, 1, g), G && J(f, 2, G), G = f) : G = null;
      J(a, 7, G)
    }
    d = jB(d, a);
    c = gX(c);
    c = F(d, 2, c);
    b.nextPageToken && F(c, 3, b.nextPageToken);
    return c
  }

  function tY(a) {
    return IB(KB(new HB, a), 1).wf(fX(void 0)).uf(gX(void 0))
  }

  function uY(a, b, c, d) {
    d || cY(["drive#permissionList"], b);
    var e = [];
    b = b[c] || [];
    for (c = 0; c < b.length; c++) {
      var f = a,
        g = b[c];
      d || cY(["drive#permission"], g);
      var k = Jt(It(vY[g.type]), g.id);
      k = F(k, 11, g.userId);
      f = hY(f.g, g.id, g.userId);
      f = F(k, 7, f);
      f = F(f, 4, g.withLink);
      f = Lt(Kt(F(f, 3, g.name), g.photoLink), g.emailAddress);
      f = F(f, 9, g.domain);
      f = F(f, 10, g.deleted);
      f = F(f, 12, g.audienceId);
      f = F(f, 13, g.customerId);
      f.F() || Jt(f, g.type + "|" + (g.domain || "") + "|" + g.withLink);
      k = wY[g.role];
      2 == k && g.additionalRoles && "commenter" == g.additionalRoles[0] ?
        k = 4 : 2 == k && "published" == g.view && (k = 6);
      F(f, 6, k);
      (g = f) && e.push(g)
    }
    return e
  }

  function rY(a, b) {
    cY(["drive#fileList", "drive#file"], b);
    var c = [];
    if ("drive#file" == b.kind)(a = xY(a, b)) && c.push(a);
    else if ("drive#fileList" == b.kind) {
      b = b.items || [];
      for (var d = 0; d < b.length; d++) {
        var e = xY(a, b[d]);
        c.push(e)
      }
    }
    return c
  }

  function xY(a, b) {
    cY(["drive#file"], b);
    var c = dy(new ay, b.id),
      d = [];
    if (b && b.parents)
      for (var e = b.parents, f = 0; f < e.length; f++) d.push(e[f].id);
    c = ly(gy(fy(ey(c, d), b.title), b.mimeType), b.alternateLink);
    c = F(c, 44, b.hasThumbnail);
    null != b.thumbnailVersion && F(c, 90, Number(b.thumbnailVersion));
    F(c, 21, b.iconLink);
    my(c, b.description);
    oy(c, b.explicitlyTrashed);
    F(c, 22, b.shared);
    null != b.quotaBytesUsed && F(c, 28, Number(b.quotaBytesUsed));
    null != b.fileSize && F(c, 14, Number(b.fileSize));
    F(c, 30, b.copyable);
    b.labels && (d = b.labels,
      hy(c, d.starred), F(c, 6, d.hidden), iy(c, d.trashed), jy(c, d.restricted), F(c, 9, d.viewed));
    F(c, 10, dY(b.createdDate));
    F(c, 69, dY(b.serverCreatedDate));
    ky(c, dY(b.modifiedDate));
    F(c, 12, dY(b.modifiedByMeDate));
    F(c, 13, dY(b.lastViewedByMeDate));
    F(c, 23, dY(b.sharedWithMeDate));
    F(c, 62, dY(b.subscribedDate));
    F(c, 70, dY(b.recency));
    b.recencyReason && F(c, 71, yY[b.recencyReason] || 0);
    d = [];
    if (b && b.owners)
      for (e = b.owners, f = 0; f < e.length; f++) {
        var g = gY(a.g, e[f]);
        g && d.push(g)
      }
    M(c, 15, d);
    b.lastModifyingUser && (d = gY(a.g, b.lastModifyingUser),
      J(c, 17, d));
    b.userPermission && ny(c, wY[b.userPermission.role]);
    b.imageMediaMetadata && (d = b.imageMediaMetadata, e = new Gx, e = F(e, 2, d.width), e = F(e, 3, d.height), e = F(e, 4, d.rotation), d.date && (d = d.date, f = new vI, f.setMilliseconds(0), zY.parse(d, f), F(e, 1, f.getTime())), J(c, 27, e));
    null != b.folderColor && qy(c, Number(b.folderColor));
    py(c, b.subscribed);
    F(c, 45, b.fileExtension);
    F(c, 50, b.folderFeatures || []);
    F(c, 36, b.flaggedForAbuse);
    F(c, 53, b.gplusMedia);
    F(c, 46, b.primarySyncParentId || void 0);
    F(c, 35, b.hasChildFolders);
    b.source &&
      (F(c, 42, b.source.client_service_id), F(c, 43, b.source.value));
    b.sharingUser && (d = gY(a.g, b.sharingUser), J(c, 47, d));
    b.sources ? F(c, 56, b.sources || []) : b.gplusMedia && F(c, 56, ["GOOGLE_PHOTOS"]);
    if (b.spaces) {
      d = b.spaces;
      e = [];
      for (f = 0; f < d.length; f++)
        if (g = d[f], ZG[g]) {
          var k = new Tx;
          g = F(k, 1, ZG[g]);
          e.push(g)
        } M(c, 60, e)
    }
    F(c, 63, b.ownedByMe);
    F(c, 29, b.shareable);
    b.sourceAppId && F(c, 61, b.sourceAppId);
    F(c, 74, b.changed);
    null != b.recursiveFileSize && F(c, 77, Number(b.recursiveFileSize));
    null != b.recursiveFileCount && F(c, 79, Number(b.recursiveFileCount));
    if (b.actionItems) {
      d = b.actionItems;
      e = [];
      for (f = 0; f < d.length; f++) g = d[f], g.id && g.type && (k = new Yt, k = F(k, 1, g.id), g = F(k, 2, AY[g.type]), e.push(g));
      M(c, 83, e)
    }
    b.capabilities && (d = fY(b.capabilities), J(c, 84, d));
    b.permissionsSummary && zy(c, BY(a, b.permissionsSummary));
    b.headRevisionId && F(c, 78, b.headRevisionId);
    b.templateData && (d = b.templateData, e = new Yx, e = F(e, 1, d.description), e = F(e, 3, CY[d.galleryState]), d = F(e, 2, d.category || []), J(c, 86, d));
    uy(c, b.teamDriveId);
    F(c, 76, b.hasAugmentedPermissions);
    F(c, 137, b.ancestorHasAugmentedPermissions);
    b.creator && (d = gY(a.g, b.creator), J(c, 91, d));
    Ay(c, b.primaryDomainName);
    By(c, b.organizationDisplayName);
    F(c, 94, b.passivelySubscribed);
    b.trashingUser && (d = gY(a.g, b.trashingUser), J(c, 95, d));
    F(c, 96, dY(b.trashedDate));
    b.version && F(c, 75, Number(b.version));
    F(c, 98, b.hasVisitorPermissions);
    F(c, 102, b.hasAppsScriptAddOn);
    (d = b.pairedDocType) && F(c, 101, DY[d]);
    b.videoMediaMetadata && (d = b.videoMediaMetadata, e = new $x, e = F(e, 1, d.width), e = F(e, 2, d.height), d.durationMillis && F(e, 3, Number(d.durationMillis)), J(c, 103, e));
    F(c,
      104, b.detectors || []);
    F(c, 108, b.containsUnsubscribedChildren);
    if (b.contentRestrictions) {
      d = [];
      e = q(b.contentRestrictions);
      for (f = e.next(); !f.done; f = e.next()) f = f.value, f = Ex(Dx(new Cx, f.readOnly), f.reason), d.push(f);
      M(c, 125, d)
    }
    if (d = b.publishingInfo) F(c, 118, d.published), F(c, 119, d.publishedUrl);
    F(c, 120, b.workspaceIds || []);
    b.approvalMetadata && b.approvalMetadata.approvalVersion && F(c, 126, b.approvalMetadata.approvalVersion);
    if (b.approvalMetadata && b.approvalMetadata.approvalSummaries) {
      d = [];
      e = q(b.approvalMetadata.approvalSummaries);
      for (f = e.next(); !f.done; f = e.next()) f = f.value, g = new wu, g = F(g, 1, f.approvalId), f = F(g, 2, EY[f.status]), d.push(f);
      M(c, 127, d)
    }
    b.shortcutDetails && (d = b.shortcutDetails, e = new cy, e = F(e, 1, d.targetId), e = F(e, 3, d.targetMimeType), e = F(e, 6, d.canRequestAccessToTarget), d.targetLookupStatus && F(e, 4, FY[d.targetLookupStatus] || 0), d.targetFile && (d = xY(a, d.targetFile), J(e, 5, d)), J(c, 132, e));
    b.clientEncryptionDetails && (d = b.clientEncryptionDetails, e = new Ax, e = F(e, 1, GY[d.encryptionState]), d.decryptionMetadata && (d = HY(d.decryptionMetadata),
      J(e, 2, d)), J(c, 138, e));
    F(c, 135, b.authorizedAppIds || []);
    F(c, 136, b.customerId);
    dH(c);
    vD(a.j) && sy(c, 5);
    return c
  }

  function BY(a, b) {
    var c = new Nx;
    c = F(c, 1, b.entryCount);
    a = Qx(Px(c, uY(a, b, "visibility", !0)), uY(a, b, "selectPermissions", !0));
    a = F(a, 4, b.memberCount);
    a = F(a, 5, b.userEntryCount);
    return F(a, 6, b.groupEntryCount)
  }

  function HY(a) {
    var b = a.wrappedKey;
    var c = new Bx;
    b = b ? Ce(b) : void 0;
    c = F(c, 1, b);
    c = F(c, 2, a.kaclsId);
    c = F(c, 3, IY[a.aes256GcmChunkSize]);
    return F(c, 4, a.jwt)
  }
  var wY = {
      fileOrganizer: 7,
      organizer: 5,
      owner: 1,
      reader: 2,
      writer: 3
    },
    vY = {
      anyone: 4,
      audience: 5,
      domain: 3,
      group: 2,
      user: 1
    },
    yY = {
      createdByMe: 1,
      modifiedByMe: 2,
      modified: 3,
      viewedByMe: 4
    },
    AY = {
      MENTION: 0,
      SUGGESTION: 1,
      ASSIGNMENT: 2
    },
    CY = {
      UNAVAILABLE: 1,
      AVAILABLE: 2,
      PENDING: 3
    },
    sY = {
      CORRECT: 1,
      INCORRECT: 2,
      SUSPICIOUS: 3
    },
    EY = {
      IN_PROGRESS: 1,
      APPROVED: 2,
      CANCELLED: 3
    },
    DY = {
      docs: 1,
      sheets: 2,
      slides: 3
    },
    FY = {
      ok: 1,
      notFound: 2,
      permissionDenied: 3
    },
    GY = {
      unencrypted: 1,
      encrypted: 2
    },
    IY = {
      unset: 0,
      "default": 1,
      small: 2
    },
    zY = new iY;

  function JY(a, b, c, d) {
    this.o = a;
    this.D = b;
    this.A = c;
    this.C = new bY(jD(qD(b)), d);
    this.g = new pY(this.C, b)
  }
  JY.prototype.j = function(a, b) {
    try {
      return KY(this, a, b)
    } catch (c) {
      throw c;
    }
  };

  function KY(a, b, c) {
    var d = a.G(b, c);
    if (d) return d;
    if (b instanceof fz) return LY(a, b, c);
    if (b instanceof nA) {
      if (!c.json) throw MY();
      a = new pA;
      c = c.json;
      cY(["drive#generatedIds"], c);
      return F(a, 1, c.ids || [])
    }
    if (b instanceof hA) {
      if (!c.json) throw MY();
      return qY(a.g, c.json, c.headers)
    }
    if (b instanceof YF) return LY(a, b, c);
    throw new V("FromXhrConverter: Unsupported request type.", new Wz);
  }
  JY.prototype.G = ca(null);

  function LY(a, b, c) {
    if (!c.json) {
      if (b instanceof NC) return tY(NY(b));
      throw MY();
    }
    var d = !1;
    b instanceof YF && (d = !!B(b.request, 12));
    var e = a.g,
      f = c.json,
      g = NY(b);
    b = c.headers;
    c = d;
    cY(["drive#adminFile", "drive#file", "drive#revision"], f);
    d = KB(new HB, g);
    "drive#adminFile" == f.kind ? (cY(["drive#adminFile"], f), e = dy(new ay, f.id), f.parentId && ey(e, [f.parentId]), uy(e, f.teamDriveId), JB(d, e), KB(d, e.F())) : "drive#file" == f.kind ? (f = xY(e, f), JB(d, f), g || KB(d, f.F())) : "drive#revision" == f.kind && (cY(["drive#revision"], f), g = sA(f.id),
      g = F(g, 2, f.mimeType), g = F(g, 3, dY(f.modifiedDate)), g = F(g, 4, f.pinned), g = F(g, 5, f.downloadUrl), g = F(g, 7, f.originalFilename), null != f.fileSize && F(g, 8, Number(f.fileSize)), f.lastModifyingUser && (e = gY(e.g, f.lastModifyingUser), J(g, 9, e)), f.decryptionMetadata && (f = HY(f.decryptionMetadata), J(g, 10, f)), J(d, 4, g));
    d.wf(fX(b));
    d.uf(gX(b));
    (f = (f = b && cX(b)) && f["x-server-object-version"]) && c && (c = sA(f), J(d, 4, c));
    IB(d, 1);
    H(d, ay, 2) && CQ(a.A, H(d, ay, 2), KG(a.o));
    return d
  }

  function MY() {
    var a = bA(new Wz, 11);
    return new V("FromXhrConverter: JSON required, but none found", a)
  }

  function NY(a) {
    return a.F ? a.F() : a.ba ? a.ba() : null
  };

  function OY(a) {
    this.g = a
  }
  var PY = {
      DRIVE: 1,
      FAMILY: 4,
      GMAIL: 2,
      PHOTOS: 3
    },
    QY = {
      LIMITED: 1,
      UNLIMITED: 2
    };

  function RY(a) {
    cY(["drive#app"], a);
    var b = new fu;
    b = F(b, 1, a.id);
    b = F(b, 3, a.useByDefault);
    b = F(b, 2, a.name);
    b = F(b, 7, a.openUrlTemplate);
    b = iu(hu(b, a.primaryMimeTypes), a.secondaryMimeTypes);
    b = F(b, 8, a.createUrl);
    b = F(b, 9, a.createInFolderTemplate);
    b = F(b, 10, a.objectType);
    b = F(b, 11, a.supportsCreate);
    b = F(b, 12, a.supportsImport);
    b = F(b, 13, a.supportsMultiOpen);
    b = F(b, 27, a.supportsOfflineCreate);
    b = F(b, 14, a.installed);
    b = F(b, 15, a.authorized);
    b = F(b, 16, a.productUrl);
    b = F(b, 17, a.primaryFileExtensions || []);
    b = F(b, 18, a.secondaryFileExtensions || []);
    b = F(b, 19, a.shortDescription);
    b = F(b, 20, a.longDescription);
    b = F(b, 21, a.productId);
    b = F(b, 22, a.removable);
    b = F(b, 23, SY[a.type]);
    b = F(b, 25, a.hasAppData);
    b = F(b, 26, a.appDataQuotaBytesUsed);
    b = F(b, 28, a.requiresAuthorizationBeforeOpenWith);
    b = F(b, 30, a.hasDriveWideScope);
    b = F(b, 31, a.driveSource);
    b = F(b, 32, a.driveBranded);
    b = F(b, 33, a.hidden);
    b = F(b, 34, a.supportsMobileBrowser);
    b = F(b, 35, a.supportsTeamDrives);
    b = F(b, 36, a.hasGsmListing);
    for (var c = a.icons || [], d = [], e = 0; e < c.length; e++) d.push(TY(c[e]));
    M(b, 6, d);
    c = a.chromeExtensionIds || [];
    d = [];
    for (e = 0; e < c.length; e++) d.push(c[e]);
    F(b, 24, d || []);
    c = a.rankingInfo || {};
    a = new du;
    d = c.absoluteScore;
    null != d && F(a, 1, Number(d));
    d = UY(c.mimeTypeScores || []);
    M(a, 2, d);
    c = UY(c.fileExtensionScores || []);
    M(a, 3, c);
    J(b, 29, a);
    return b
  }

  function TY(a) {
    var b = new bu;
    b = F(b, 3, a.iconUrl);
    b = F(b, 2, a.size);
    a.category && F(b, 1, VY[a.category]);
    return b
  }

  function UY(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = new cu;
      d = F(d, 1, a[c].type);
      d = F(d, 2, Number(a[c].score));
      b.push(d)
    }
    return b
  }
  var SY = {
      WEB_ONLY: 1,
      WEB_AND_CHROME_EXTENSION: 2,
      CHROME_EXTENSION_ONLY: 3
    },
    VY = {
      application: 1,
      document: 2,
      documentShared: 3
    };

  function WY(a, b) {
    this.g = a;
    this.j = b
  };
  var XY = {
    read: 2,
    write: 3,
    comment: 4
  };

  function YY(a, b, c) {
    var d = c.itemId;
    c = c.driveItem;
    d = gy(fy(dy(new ay, d), c.title), c.mimeType);
    c.userCapabilities && (c = fY(c.userCapabilities), J(d, 84, c));
    KG(b).includes(19) && F(d, 44, !0);
    CQ(a, d, KG(b));
    sy(d, 4);
    return d
  }

  function ZY(a) {
    a = a.promotionItem;
    var b = new AA;
    return F(b, 1, $Y[a.type] || 0)
  }

  function aZ(a, b, c, d) {
    var e = [],
      f = [];
    (d.item || []).forEach(function(g) {
      if (g.driveItem) {
        var k = new Rx;
        k = F(k, 1, g.confidenceScore);
        k = F(k, 2, g.predictionReason);
        g = YY(a, b, g);
        g = J(g, 100, k);
        e.push(g)
      } else E(c, 83, !1) && g.promotionItem && f.push(ZY(g))
    });
    d = OA((new MA).ub(e), f).cd(bZ(d)).dd(cZ(d));
    return jB(new iB, d)
  }

  function dZ(a, b, c) {
    var d = [],
      e = [];
    (c.item || []).forEach(function(f) {
      if (f.person) {
        var g = f.itemId,
          k = Jt(eZ(f.person), g);
        (f.childItem || []).forEach(function(n) {
          e.some(function(A) {
            return A.F() == g
          }) || e.push(k);
          var p = n.itemId,
            x = d.find(function(A) {
              return A.F() == p
            });
          x || (x = YY(a, b, n), d.push(x));
          n = Mx(Lx(Kx(new Jx, k.clone()), n.predictionReason), n.url);
          Se(x, 107, n, Jx, void 0)
        })
      }
    });
    return OB((new MB).ub(d), e).cd(bZ(c)).dd(cZ(c))
  }

  function eZ(a) {
    var b = Jt(new Ht, a.id);
    b = F(b, 3, a.displayName);
    return Kt(Lt(b, a.emailAddress), a.photoUrl)
  }

  function fZ(a, b, c, d) {
    var e = [],
      f = [];
    (d.item || []).forEach(function(g) {
      g.driveItem ? (g = Dy(YY(a, b, g), gZ(g)), e.push(g)) : E(c, 83, !1) && g.promotionItem && f.push(ZY(g))
    });
    d = OA((new MA).ub(e), f).cd(bZ(d)).dd(cZ(d));
    return jB(new iB, d)
  }

  function gZ(a) {
    var b = a.action;
    return b ? b.map(function(c) {
      var d = new Lu,
        e = iZ(c);
      e && L(d, 2, Mu[0], e);
      (e = jZ(c)) && Qv(d, e);
      (e = kZ(c)) && L(d, 4, Mu[0], e);
      (e = lZ(c)) && L(d, 5, Mu[0], e);
      (e = mZ(c)) && L(d, 6, Mu[0], e);
      (e = nZ(c)) && L(d, 7, Mu[0], e);
      (e = oZ(c)) && L(d, 8, Mu[0], e);
      (e = pZ(c)) && L(d, 9, Mu[0], e);
      (e = qZ(c)) && L(d, 10, Mu[0], e);
      (c = rZ(c)) && L(d, 11, Mu[0], c);
      return d
    }) : (a = hZ(a), a = fw([a]), [Qv(new Lu, a)])
  }

  function sZ(a) {
    return (a.justification || []).map(function(b) {
      return tZ(b)
    })
  }

  function hZ(a) {
    return (a = a.justification) ? tZ(a) : null
  }

  function tZ(a) {
    var b = Iu(new Fu, uZ(a.displayText)),
      c = a.primaryPerson,
      d = a.allPeople;
    c ? (c = eZ(c), L(b, 3, Hu[0], c), Ju(b, [c])) : d ? (c = (d.person || []).map(function(e) {
      return eZ(e)
    }), d = Eu(c), L(b, 4, Hu[0], d), Ju(b, c)) : (c = (a.person || []).map(function(e) {
      return eZ(e)
    }), c.length && (d = Eu(c), L(b, 4, Hu[0], d), Ju(b, c)));
    F(b, 5, dY(a.eventTime));
    Ku(b, uZ(a.justificationDescription));
    return b
  }

  function uZ(a) {
    if (!a) return null;
    a = a.textSegment || [];
    return Bu(new xu, a.map(function(b) {
      var c = new zu;
      c = F(c, 1, b.text);
      var d = b.link;
      if (d) {
        var e = new Au;
        d = F(e, 1, d.url)
      } else d = null;
      c = J(c, 2, d);
      c = F(c, 3, b.bold);
      return F(c, 4, b.italic)
    }))
  }

  function iZ(a) {
    a = a.documentDocosAction;
    if (!a) return null;
    var b = Yv(new kv, hZ(a));
    Xv(b, (a.subAction || []).map(function(c) {
      var d = new mv;
      c.reply ? (c = new Vu, L(d, 1, nv[0], c)) : c.resolve ? (c = new Wu, L(d, 2, nv[0], c)) : c.reassign ? (c = new Tu, L(d, 3, nv[0], c)) : c.acceptSuggestion ? (c = new Nu, L(d, 4, nv[0], c)) : c.rejectSuggestion ? (c = new Uu, L(d, 5, nv[0], c)) : c.openThread && (c = new Ru, L(d, 6, nv[0], c));
      return d
    }));
    F(b, 2, a.discussionId);
    F(b, 3, a.postId);
    Zv(b, uZ(a.anchorText));
    return b
  }

  function kZ(a) {
    a = a.documentShareAction;
    if (!a) return null;
    var b = bw(new ov, hZ(a));
    aw(b, (a.subAction || []).map(function(c) {
      var d = new qv;
      c.suggestedShare ? (c = new $u, L(d, 1, rv[0], c)) : c.responseToRequest && (c = new Xu, L(d, 2, rv[0], c));
      return d
    }));
    $v(b, (a.sharee || []).map(function(c) {
      return eZ(c)
    }));
    F(b, 3, XY[a.shareeRole]);
    return b
  }

  function jZ(a) {
    a = a.documentViewAction;
    if (!a) return null;
    var b = fw(sZ(a));
    ew(b, (a.subAction || []).map(function(c) {
      var d = new yv;
      c.open ? (c = new Pu, L(d, 1, zv[0], c)) : c.reviewEdits && (c = new Yu, L(d, 2, zv[0], c));
      return d
    }));
    return b
  }

  function lZ(a) {
    a = a.emailViewAction;
    if (!a) return null;
    var b = kw(new Ev, hZ(a));
    jw(b, (a.subAction || []).map(function(c) {
      var d = new Gv;
      c.openEmail && (c = new Qu, L(d, 1, Hv[0], c));
      return d
    }));
    return b
  }

  function mZ(a) {
    a = a.calendarEventAction;
    if (!a) return null;
    var b = Uv(Tv(Sv(new cv, a.eventId), hZ(a)), a.guestCount);
    Rv(b, (a.subAction || []).map(function(c) {
      var d = new ev;
      if (c.viewCalendarEvent) {
        var e = new av;
        L(d, 1, fv[0], e)
      }
      c.shareWithAttendees && (e = new Zu, L(d, 2, fv[0], e));
      c.present && (e = new Su, L(d, 3, fv[0], e));
      c.openDocument && (c = new Pu, L(d, 4, fv[0], c));
      return d
    }));
    return b
  }

  function nZ(a) {
    a = a.documentWorkspaceAction;
    if (!a) return null;
    var b = iw(hw(new Av, a.workspaceId), hZ(a));
    gw(b, (a.subAction || []).map(function(c) {
      var d = new Cv;
      c.addToWorkspace && (c = new Ou, L(d, 1, Dv[0], c));
      return d
    }));
    return b
  }

  function oZ(a) {
    a = a.documentTopicAction;
    if (!a) return null;
    var b = dw(new sv, hZ(a));
    cw(b, (a.subAction || []).map(function(c) {
      var d = new uv;
      c.openDocument && (c = new Pu, L(d, 1, vv[0], c));
      return d
    }));
    return b
  }

  function pZ(a) {
    a = a.popularDocumentAction;
    if (!a) return null;
    var b = ow(new Mv, hZ(a));
    nw(b, (a.subAction || []).map(function(c) {
      var d = new Ov;
      c.openDocument && (c = new Pu, L(d, 1, Pv[0], c));
      return d
    }));
    return b
  }

  function qZ(a) {
    a = a.collaboratorActivityAction;
    if (!a) return null;
    var b = Wv(new gv, hZ(a));
    Vv(b, (a.subAction || []).map(function(c) {
      var d = new iv;
      c.openDocument && (c = new Pu, L(d, 1, jv[0], c));
      return d
    }));
    return b
  }

  function rZ(a) {
    a = a.formResponseAction;
    if (!a) return null;
    var b = mw(new Iv, sZ(a));
    lw(b, (a.subAction || []).map(function(c) {
      var d = new Kv;
      c.openDocument ? (c = new Pu, L(d, 1, Lv[0], c)) : c.viewResponses && (c = new bv, L(d, 2, Lv[0], c));
      return d
    }));
    return b
  }

  function bZ(a) {
    a = a.predictionSessionId && a.predictionSessionId.eventId;
    if (!a) return null;
    a = fA(eA(dA(new cA, a.timeUsec), a.serverIp), a.processId);
    var b = new zA;
    return J(b, 1, a)
  }

  function cZ(a) {
    var b = a.sessionId;
    if (!b) return null;
    a = b.genoClientIds || [];
    a = LA(new JA, a.map(function(c) {
      return vZ[c] || 0
    }));
    if (b = b.eventId) b = fA(eA(dA(new cA, b.timeUsec), b.serverIp), b.processId), J(a, 2, b);
    return a
  }
  var vZ = {
      UNSPECIFIED_CLIENT: 0,
      DEFAULT_CLIENT: 102,
      QUICK_ACCESS_CLIENT: 110,
      DRIVE_ZERO_STATE_SEARCH_CLIENT: 113,
      DRIVE_PRIORITY: 116,
      DRIVE_WORKSPACES_CLIENT: 117,
      DRIVE_PEOPLE_CLIENT: 118,
      DRIVE_PEOPLE_WITH_ACTIONS_CLIENT: 119,
      DRIVE_WORKING_SET_CLIENT: 122,
      SMART_TASKS_CLIENT: 123
    },
    $Y = {
      PRIORITY_HAS_WORKSPACE: 1
    };

  function wZ(a, b) {
    this.g = a;
    this.j = b
  }

  function xZ(a, b, c) {
    cY(["drive#categoryMetadataList"], c);
    var d = new Ry,
      e = Object.values(c.categoryMetadata || {});
    Uy(d, e.map(function(f) {
      return yZ(a, f, b.request.ba())
    }));
    Ty(d, 1);
    return new eG(d, eY(c))
  }

  function zZ(a, b) {
    var c = new oC;
    qC(c, (b.categories || []).map(function(d) {
      return AZ(a, d)
    }));
    F(c, 1, 1);
    return new iG(c, eY(b))
  }

  function yZ(a, b, c) {
    cY(["drive#categoryMetadata"], b);
    c = My(Ky(new Iy, b.categoryName), c);
    b = Object.values(b.attributeValues || []);
    Ly(c, b.map(function(d) {
      return BZ(a, d)
    }).filter(aa()));
    return c
  }

  function AZ(a, b) {
    var c = hC(gC(fC(eC(dC(new aC, b.name), b.categoryName), b.latestName), b.title), b.description);
    iC(c, (b.attributes || []).map(function(d) {
      var e = d.type;
      var f = new tw;
      f = F(f, 1, d.id);
      f = F(f, 2, d.queryGuid);
      f = F(f, 3, d.helpText);
      f = F(f, 4, d.displayName);
      if (d.attributeDisplayHints) {
        var g = CZ(d.attributeDisplayHints);
        J(f, 5, g)
      }
      if (d.capabilities) {
        g = d.capabilities;
        var k = new vw;
        k = F(k, 1, g.canSearch);
        g = F(k, 2, g.canWrite);
        J(f, 6, g)
      }
      F(f, 7, DZ[e]);
      d = d[EZ(e) + "Options"];
      return FZ(a, f, e, d) ? f : null
    }).filter(aa()));
    b.createdBy &&
      jC(c, GZ(b.createdBy));
    b.updatedBy && kC(c, GZ(b.updatedBy));
    b.publishedBy && lC(c, GZ(b.publishedBy));
    F(c, 9, dY(b.createTime));
    F(c, 10, dY(b.updateTime));
    F(c, 11, dY(b.publishTime));
    b.displayHints && mC(c, CZ(b.displayHints));
    b.capabilities && nC(c, HZ(b.capabilities));
    return c
  }

  function BZ(a, b) {
    cY(["drive#categoryAttributeValue"], b);
    var c = uu(new nu, b.id);
    if (b.userScoped) b = Object.values(b.userScoped), tu(c, b.map(function(d) {
      cY(["drive#userScopedAttributeValue"], d);
      var e = new lu,
        f = gY(a.g, d.scopedUser);
      e = J(e, 1, f);
      return IZ(a, e, d) ? e : null
    }).filter(aa())), c.Ua(9);
    else if (!IZ(a, c, b)) return null;
    return c
  }

  function CZ(a) {
    var b = new sw;
    b = F(b, 1, a.disabled);
    b = F(b, 2, a.hidden);
    return F(b, 3, a.activatedInAllDrives)
  }

  function HZ(a) {
    var b = new cC;
    b = F(b, 1, a.canSearch);
    b = F(b, 2, a.canApply);
    return F(b, 3, a.canManageSharedDriveActivation)
  }

  function FZ(a, b, c, d) {
    return JZ(a, function() {
      KZ(a)[c](b, d)
    }, c, b)
  }

  function LZ(a) {
    a = void 0 === a ? {} : a;
    var b = new Cw;
    b = F(b, 1, a.minSize);
    return F(b, 2, a.maxSize)
  }

  function MZ(a) {
    var b = new ww;
    b = F(b, 1, a.trueLabel);
    return F(b, 2, a.falseLabel)
  }

  function NZ(a) {
    var b = new Dw;
    b = F(b, 1, a.maxEntries);
    a = LZ(a.options);
    return J(b, 2, a)
  }

  function OZ(a) {
    var b = new xw;
    Mw(b, (a.choices || []).map(function(c) {
      var d = new zw;
      d = F(d, 1, c.label);
      d = F(d, 2, c.value);
      if (c.capabilities) {
        var e = c.capabilities;
        var f = new Aw;
        f = F(f, 1, e.canSearch);
        e = F(f, 2, e.canSelect);
        J(d, 3, e)
      }
      c.displayHints && (c = CZ(c.displayHints), J(d, 4, c));
      return d
    }));
    return b
  }

  function PZ(a) {
    var b = new Bw;
    b = F(b, 1, a.maxEntries);
    a = OZ(a.options);
    return J(b, 2, a)
  }

  function QZ(a) {
    var b = new Fw;
    b = F(b, 1, a.showThousandsSeparator);
    b = F(b, 2, a.minValue);
    return F(b, 3, a.maxValue)
  }

  function RZ(a) {
    var b = new Gw;
    b = F(b, 1, a.maxEntries);
    a = QZ(a.options);
    return J(b, 2, a)
  }

  function SZ(a) {
    var b = new Kw;
    a = F(b, 1, a.maxEntries);
    b = new Jw;
    return J(a, 2, b)
  }

  function TZ(a) {
    var b = new Lw;
    b = F(b, 4, a.dateFormat);
    var c = UZ(a.minValue);
    b = J(b, 2, c);
    a = UZ(a.maxValue);
    return J(b, 3, a)
  }

  function UZ(a) {
    var b = new rw;
    b = F(b, 1, a.year).setMonth(a.month);
    return F(b, 3, a.day)
  }

  function IZ(a, b, c) {
    var d = c.valueType.replace(/([A-Z])/g, "_$1").toLowerCase().toUpperCase();
    b.Ua(DZ[d]);
    return JZ(a, function() {
      VZ(a)[d](b, c[c.valueType])
    }, c.valueType)
  }

  function JZ(a, b, c, d) {
    try {
      b()
    } catch (e) {
      if (e instanceof TypeError && !(d instanceof Hw)) return QG(a.j, "drive.ds.response.MetadataParser", "Response Parser: Error parsing type " + c + "."), !1;
      throw e;
    }
    return !0
  }

  function GZ(a) {
    return Jt(It(1), a.personName.split("/")[1])
  }

  function EZ(a) {
    return a.toLowerCase().replace(/_([a-z])/g, function(b, c) {
      return c.toUpperCase()
    })
  }

  function KZ(a) {
    return {
      BOOLEAN: function(b, c) {
        return b.pj(MZ(c))
      },
      TEXT: function(b, c) {
        return b.xj(LZ(c))
      },
      TEXT_LIST: function(b, c) {
        return b.wj(NZ(c))
      },
      LONG_TEXT: function(b, c) {
        var d = new Ew;
        d = F(d, 1, c.minSize);
        c = F(d, 2, c.maxSize);
        return L(b, 10, uw[0], c)
      },
      SELECTION: function(b, c) {
        return b.vj(OZ(c))
      },
      SELECTION_LIST: function(b, c) {
        return b.uj(PZ(c))
      },
      INTEGER: function(b, c) {
        return b.sj(QZ(c))
      },
      INTEGER_LIST: function(b, c) {
        return b.rj(RZ(c))
      },
      USER: function(b) {
        return b.zj(new Jw)
      },
      USER_LIST: function(b, c) {
        return b.yj(SZ(c))
      },
      DATE: function(b, c) {
        return b.qj(TZ(c))
      },
      USER_SCOPED: function(b, c) {
        var d = new Hw;
        d = F(d, 1, c.canReadCollaboratorValues);
        var e = c.subtype;
        F(d, 2, DZ[e]);
        c = c[EZ(e) + "Options"];
        FZ(a, d, e, c);
        return L(b, 16, uw[0], d)
      }
    }
  }

  function VZ(a) {
    return {
      BOOLEAN: function(b, c) {
        return b.gh(c)
      },
      TEXT: function(b, c) {
        return b.jh(c)
      },
      TEXT_LIST: function(b, c) {
        return b.yf(c)
      },
      LONG_TEXT: function(b, c) {
        return pu(b, c)
      },
      SELECTION: function(b, c) {
        return b.ih(c)
      },
      SELECTION_LIST: function(b, c) {
        return b.xf(c)
      },
      INTEGER: function(b, c) {
        return b.hh(parseInt(c, 10))
      },
      INTEGER_LIST: function(b, c) {
        return b.vf(c.map(function(d) {
          return parseInt(d, 10)
        }))
      },
      USER: function(b, c) {
        return qu(b, gY(a.g, c))
      },
      USER_LIST: function(b, c) {
        ru(b, c.map(function(d) {
          return gY(a.g, d)
        }))
      },
      DATE_STRING: function(b, c) {
        return su(b, c)
      }
    }
  }
  var DZ = {
    BOOLEAN: 1,
    TEXT: 2,
    TEXT_LIST: 3,
    LONG_TEXT: 4,
    SELECTION: 5,
    SELECTION_LIST: 6,
    INTEGER: 7,
    INTEGER_LIST: 8,
    USER_SCOPED: 9,
    USER: 10,
    USER_LIST: 11,
    DATE: 12,
    DATE_STRING: 12
  };

  function WZ(a) {
    return new gG(a.personResponse.map(function(b) {
      var c = new QB;
      F(c, 1, b.personId);
      var d = b = b.person;
      d = void 0 === d ? {} : d;
      d = d.metadata;
      F(c, 2, d ? d.bestDisplayName.displayName : "");
      d = b;
      d = void 0 === d ? {} : d;
      d = d.email;
      F(c, 3, d ? d[0].value : "");
      d = b;
      d = void 0 === d ? {} : d;
      b = new PB;
      d = d.photo;
      F(b, 1, d ? d[0].url : void 0);
      F(b, 2, (d ? d[0].isMonogram : !1) || !1);
      F(b, 3, d ? d[0].monogramBackground : void 0);
      J(c, 4, b);
      return c
    }))
  };

  function XZ(a) {
    this.g = a
  }

  function YZ(a, b) {
    cY(["drive#teamDriveList", "drive#driveList"], b);
    return (b.items || []).map(function(c) {
      return ZZ(a, c)
    })
  }

  function ZZ(a, b) {
    cY(["drive#teamDrive", "drive#drive"], b);
    var c = new Vx,
      d = b.colorRgb;
    d = d ? parseInt(d.substring(1), 16) : 0;
    F(c, 2, d);
    F(c, 1, b.backgroundImageLink);
    F(c, 3, b.trusted);
    F(c, 5, b.backgroundImageGridViewLink);
    F(c, 6, b.backgroundImageListViewLink);
    F(c, 7, b.hidden);
    (d = b.categoryReferences) && Xx(c, d.map(function(e) {
      cY(["drive#driveCategoryReference"], e);
      var f = new Ux;
      return F(f, 1, e.category)
    }));
    c = By(Ay(sy(uy(wy(gy(fy(dy(new ay, b.id), b.name), "application/vnd.google-apps.folder"), c), b.id), 2), b.primaryDomainName),
      b.organizationDisplayName);
    b.capabilities && (d = rx(fY(b.capabilities), !0), J(c, 84, d));
    b.permissionsSummary && zy(c, BY(a.g, b.permissionsSummary));
    b.restrictions && Cy(c, $Z(b.restrictions));
    return c
  }

  function $Z(a) {
    var b = new Sx;
    b = F(b, 1, a.copyRequiresWriterPermission);
    b = F(b, 2, a.disallowDriveFileStream);
    b = F(b, 3, a.domainUsersOnly);
    return F(b, 4, a.teamMembersOnly)
  };
  var a_ = {
      DRIVE_FE: 2,
      DRIVE_BE: 4,
      EXPLORER: 1,
      GENERAL: 3,
      PSYNCHO: 5,
      SLACK: 6,
      DRIVE_BE_EX: 7
    },
    b_ = oc(a_);

  function c_(a) {
    cY(["drive#workspaceList"], a);
    var b = a.items || [];
    b = WB(new UB, b.map(function(c) {
      return d_(c)
    }));
    return new cG(b, eY(a))
  }

  function d_(a) {
    cY(["drive#workspace"], a);
    var b = new Tz;
    b = F(b, 1, a.id);
    b = F(b, 2, a.title);
    b = F(b, 3, dY(a.createdDate));
    b = F(b, 4, dY(a.modifiedDate));
    return F(b, 5, e_[a.state])
  }

  function f_(a, b, c) {
    var d = c.item || [];
    return AC(zC(new xC, d.map(function(e) {
      return g_(a, b, e)
    })), cZ(c))
  }

  function g_(a, b, c) {
    var d = c.driveWorkspace,
      e = c.childItem || [];
    return Sz(Qz(Rz(Pz(Oz(new Mz, c.predictionId), d && d.title), d && d.workspaceToken), e.map(function(f) {
      return YY(a, b, f)
    })), hZ(c))
  }

  function h_(a) {
    var b = new LB;
    a.kind && (a = d_(a), J(b, 2, a));
    F(b, 1, 1);
    return b
  }
  var e_ = {
    active: 1,
    archived: 2
  };

  function i_(a, b, c, d, e) {
    JY.call(this, a, b, d, e);
    this.L = c;
    this.H = new OY(this.C);
    this.w = new XZ(this.g);
    this.I = new WY(this.g, this.w);
    this.B = null
  }
  r(i_, JY);

  function j_(a) {
    a.B || (a.B = new wZ(a.C, a.L));
    return a.B
  }
  i_.prototype.G = function(a, b) {
    if (a instanceof Gt) return tY(NY(a));
    if (a instanceof $t) return LY(this, a, b);
    if (a instanceof dG) {
      if (!b.json) throw MY();
      return xZ(j_(this), a, b.json)
    }
    if (a instanceof jx) return LY(this, a, b);
    if (a instanceof Zy) {
      if (!b.json) throw MY();
      return bz(F(new az, 1, 1), ZZ(this.w, b.json))
    }
    if (a instanceof cz) return LY(this, a, b);
    if (a instanceof hz) return k_(a, b);
    if (a instanceof Fz) return tY(NY(a));
    if (a instanceof Gz) return tY(NY(a));
    if (a instanceof Hz) return tY(NY(a));
    if (a instanceof Iz) return k_(a,
      b);
    if (a instanceof Vz) return tY(NY(a));
    if (a instanceof mB) {
      a: {
        if (!b.json) throw MY();
        if (a instanceof mB) {
          if ((a = a.T()) && fB(a)) {
            b = aZ(this.A, this.o, this.D, b.json);
            break a
          }
          if (a && gB(a)) {
            b = dZ(this.A, this.o, b.json);
            break a
          }
          if (a && hB(a)) {
            b = fZ(this.A, this.o, this.D, b.json);
            break a
          }
        }
        b = qY(this.g, b.json, b.headers)
      }
      return b
    }
    if (a instanceof qB) {
      if (!b.json) throw MY();
      b = b.json;
      cY(["drive#appList"], b);
      a = new pw;
      for (var c = [], d = b.items || [], e = 0; e < d.length; e++) c.push(RY(d[e]));
      a = M(a, 2, c);
      b = F(a, 4, b.defaultAppIds || []);
      return F(b,
        1, 1)
    }
    if (a instanceof tB) return l_(this, b);
    if (a instanceof BB) {
      if (!b.json) throw MY();
      a = new AB;
      d = this.g;
      e = b.json;
      c = new yB;
      d = uY(d, e, "items");
      c = M(c, 2, d);
      a = J(a, 1, c);
      return F(a, 2, eY(b.json))
    }
    if (a instanceof fG) {
      if (!b.json) throw MY();
      return WZ(b.json)
    }
    if (a instanceof hG) {
      if (!b.json) throw MY();
      return zZ(j_(this), b.json)
    }
    if (a instanceof rC) {
      if (!b.json) throw MY();
      a = j_(this);
      c = b.json;
      b = new sC;
      a = AZ(a, c);
      b = J(b, 2, a);
      return F(b, 1, 1)
    }
    if (a instanceof tC) {
      if (!b.json) throw MY();
      b = b.json;
      cY(["drive#remainingCount"],
        b);
      a = new uC;
      c = b.nextPageToken;
      null != c && F(a, 2, Number(c));
      F(a, 1, Number(b.remainingCount));
      return a
    }
    if (a instanceof BC) {
      if (!b.json) throw MY();
      return (new MA).ub([ZZ(this.w, b.json)])
    }
    if (a instanceof FC) {
      if (!b.json) throw MY();
      a = (new MA).ub(YZ(this.w, b.json));
      a = jB(new iB, a);
      return F(a, 3, eY(b.json))
    }
    if (a instanceof JC) return MC();
    if (a instanceof NC) return LY(this, a, b);
    if (a instanceof QC) return LY(this, a, b);
    if (a instanceof RC) return m_(this, b);
    if (a instanceof TC) return k_(a, b);
    if (a instanceof UC) {
      if (!b.json) throw MY();
      d = this.H;
      a = b.json;
      cY(["drive#about"], a);
      b = new VC;
      c = new Wt;
      a.user && (d = gY(d.g, a.user), J(c, 1, d));
      d = new Pt;
      d = F(d, 1, Number(a.quotaBytesTotal));
      d = F(d, 2, Number(a.quotaBytesUsed));
      d = F(d, 3, Number(a.quotaBytesUsedAggregate));
      d = F(d, 4, Number(a.quotaBytesUsedInTrash));
      e = a.quotaBytesByService || [];
      for (var f = [], g = 0; g < e.length; g++) {
        var k = new Ot;
        k = F(k, 3, PY[e[g].serviceName]);
        k = F(k, 2, Number(e[g].bytesUsed));
        f.push(k)
      }
      d = M(d, 5, f);
      d = F(d, 6, QY[a.quotaType]);
      e = new Mt;
      d = J(e, 1, d);
      d = F(d, 2, a.rootFolderId);
      d = F(d, 3, a.domainSharingPolicy);
      if (a.importFormats) {
        e = [];
        for (f = 0; f < a.importFormats.length; f++) g = a.importFormats[f], k = new Rt, k = F(k, 1, g.source), g = F(k, 2, g.targets || []), e.push(g);
        M(d, 4, e)
      }
      J(c, 3, d);
      J(b, 2, c);
      a = a.largestChangeId;
      null != a && F(b, 4, Number(a));
      return b
    }
    if (a instanceof VF) return m_(this, b);
    if (a instanceof WF) return l_(this, b);
    if (a instanceof XF) {
      if (!b.json) throw MY();
      c = b.json;
      b = new FB;
      cY(["drive#settingList"], c);
      a = [];
      c = c.items || [];
      for (d = 0; d < c.length; d++) e = c[d], cY(["drive#setting"], e), f = new Ut, f = F(f, 2, e.key), f = F(f, 1, a_[e.namespace]),
        g = new Tt, f = J(g, 1, f), (e = F(f, 2, e.value)) && a.push(e);
      return M(b, 3, a)
    }
    if (a instanceof RB) {
      if (!b.json) throw MY();
      b = f_(this.A, this.o, b.json);
      return F(b, 1, 1)
    }
    if (a instanceof IC) {
      if (!b.json) throw MY();
      a = b.json;
      cY(["drive#teamDrive"], a);
      b = a.recursiveFolderCount;
      a = a.recursiveFileCount;
      c = new ez;
      a = F(c, 1, a);
      return F(a, 2, b)
    }
    if (a instanceof ZF) return new $F;
    if (a instanceof aG) {
      if (!b.json) throw MY();
      return c_(b.json)
    }
  };

  function k_(a, b) {
    if (!b.json) {
      if (a instanceof Iz) return h_({});
      throw MY();
    }
    return h_(b.json)
  }

  function m_(a, b) {
    if (!b.json) throw MY();
    a = ZZ(a.w, b.json);
    return JB(IB(new HB, 1), a)
  }

  function l_(a, b) {
    if (!b.json) throw MY();
    a = a.I;
    var c = b.json;
    cY(["drive#about", "drive#changeList"], c);
    b = new vB;
    var d = c.nextPageToken;
    null != d && F(b, 2, Number(d));
    d = c.largestChangeId;
    null != d && F(b, 3, Number(d));
    if ("drive#changeList" == c.kind) {
      cY(["drive#changeList"], c);
      d = [];
      c = c.items || [];
      for (var e = 0; e < c.length; e++) {
        var f = a,
          g = c[e];
        cY(["drive#change"], g);
        var k = new tA;
        k = F(k, 1, Number(g.id));
        g.teamDriveId ? (yA(k, g.teamDriveId), vA(k, g.teamDriveId)) : vA(k, g.fileId);
        g.file ? xA(k, xY(f.g, g.file)) : g.teamDrive && xA(k, ZZ(f.j,
          g.teamDrive));
        g.deleted && !wA(k) && F(k, 3, !0);
        d.push(k)
      }
      M(b, 4, d)
    }
    return b
  };

  function n_(a) {
    var b = {};
    b.parentId = B(a, 2);
    return b
  }

  function o_(a) {
    var b = {};
    Dc(Ed(B(a, 2))) || (b.title = B(a, 2));
    p_(b, B(a, 3));
    return b
  }

  function q_(a, b, c) {
    var d = {};
    Dc(Ed(B(a, 2))) || (B(a, 12) ? d.originalFilename = B(a, 2) : d.title = B(a, 2));
    if (a.ma() && (d.mimeType = a.ma(), a.ba() && a.ma().startsWith("application/vnd.google-gsuite.encrypted"))) {
      var e = {
        encryptionState: "encrypted"
      };
      if (c) {
        var f = c.G(),
          g = {};
        e.decryptionMetadata = (g.wrappedKey = Be(c.j()), g.kaclsId = c.H(), g.aes256GcmChunkSize = r_[f ? f.j() : 0], g)
      }
      d.clientEncryptionDetails = e
    }
    p_(d, B(a, 3));
    (b = a.ba() || b) && (d.id = b);
    B(a, 16) && (d.embeddingParent = B(a, 16));
    B(a, 21) && (d.shortcutDetails = {}, d.shortcutDetails.targetId =
      B(a, 21));
    return d
  }

  function s_(a) {
    var b = {};
    null != B(a, 1) && (b.title = B(a, 1));
    null != B(a, 3) && (b.workspaceToken = B(a, 3));
    return b
  }

  function p_(a, b) {
    if (b.length) {
      a.parents = [];
      for (var c = 0; c < b.length; c++) {
        var d = {};
        d.id = b[c];
        a.parents.push(d)
      }
    }
  }

  function t_(a) {
    var b = {},
      c = {};
    Dc(Ed(B(a, 2))) || (b.title = B(a, 2));
    null != B(a, 3) && (b.description = B(a, 3));
    null != C(a, 4) && (c.starred = C(a, 4));
    null != C(a, 5) && (c.trashed = C(a, 5));
    Dc(Ed(a.ma())) || (b.mimeType = a.ma());
    "number" === typeof B(a, 7) && (b.modifiedDate = uI(wI(B(a, 7) || 0)));
    null != C(a, 11) && (c.restricted = C(a, 11));
    cc(c) && (b.labels = c);
    null != B(a, 12) && (b.folderColor = B(a, 12));
    null != C(a, 16) && (b.subscribed = C(a, 16));
    if (c = H(a, Cx, 25)) {
      b.contentRestrictions = [];
      var d = {};
      null != C(c, 1) && (d.readOnly = C(c, 1));
      null != B(c, 2) && (d.reason =
        B(c, 2));
      b.contentRestrictions.push(d)
    }
    p_(b, B(a, 8));
    return b
  }

  function u_(a) {
    var b = {};
    null != C(a, 3) && (b.pinned = C(a, 3));
    return b
  }

  function v_(a) {
    var b = {};
    null != B(a, 2) && (b.name = B(a, 2));
    if (null != B(a, 3)) !B(a, 6) && H(a, Fy, 9), b.backgroundImageId = B(a, 3);
    else {
      var c = B(a, 6);
      null != c && (c = c.toString(16), b.colorRgb = "#" + Cd("0", 6 - c.length) + c);
      c = H(a, Fy, 9);
      if (null != c) {
        a = {};
        var d = c.F();
        d && (a.id = d);
        d = B(c, 2);
        "number" === typeof d && (a.xCoordinate = d);
        d = B(c, 3);
        "number" === typeof d && (a.yCoordinate = d);
        (c = B(c, 4)) && (a.width = c);
        b.backgroundImageFile = a
      }
    }
    return b
  }

  function w_(a) {
    var b = {};
    null != B(a, 2) && (b.title = B(a, 2));
    null != B(a, 3) && (a = x_[B(a, 3)]) && (b.state = a);
    return b
  }
  var x_ = {
      1: "active",
      2: "archived"
    },
    y_ = {},
    r_ = (y_[0] = "unset", y_[1] = "default", y_[2] = "small", y_);

  function z_(a) {
    try {
      if ("undefined" != typeof FileReaderSync && uF()) {
        var b = new FileReaderSync;
        return Wh(b.readAsDataURL(a))
      }
      var c = new MW,
        d = NW(c);
      c.g.readAsDataURL(a);
      return d.then()
    } catch (e) {
      return P(new IW(e, "reading data"))
    }
  };

  function A_(a, b, c) {
    var d = z_(a.j),
      e = a.request;
    c = C(e, 8) || e.ba() || B(e, 12) ? Wh(void 0) : B_(c);
    return $h([d, c]).then(function(f) {
      var g = f[0],
        k = f[1];
      f = !!B(a.request, 12);
      var n = "files";
      f && (n += "/" + B(a.request, 12));
      n = new wl(n);
      U(n, "uploadType", "multipart");
      U(n, "supportsTeamDrives", !0);
      U(n, "pinned", !!E(a.request, 13, !0));
      null != C(a.request, 8) && U(n, "convert", C(a.request, 8));
      U(n, "fields", rG({
        bb: KG(b),
        $a: !1
      }));
      bH(n, H(a.request, ju, 7));
      var p = q_(a.request, k, a.g),
        x = Gd();
      k = {};
      k = (k["content-type"] = Bm('multipart/related; boundary="%s"',
        x), k);
      var A = g.indexOf(",");
      g = 0 <= A ? g.substring(A + 1) : "";
      p = JSON.stringify(p);
      A = {};
      A = (A["content-transfer-encoding"] = "base64", A);
      a.request.ma() && (A["content-type"] = a.request.ma());
      x = "--" + x;
      x = x + "\r\n" + dX({
        "content-type": "application/json; charset=UTF-8"
      }) + "\r\n" + p + "\r\n" + x + "\r\n" + dX(A) + "\r\n" + g + "\r\n" + x + "--";
      return {
        api: 2,
        headers: k,
        method: f ? "PUT" : "POST",
        uri: n,
        body: x
      }
    }, C_)
  }

  function C_(a) {
    if (a instanceof Wz) var b = a;
    else b = new Wz, Zz(b, "fs.Error: " + a.message), bA(b, 5);
    return P(b)
  };

  function D_(a) {
    this.o = a;
    this.j = [];
    this.g = []
  }

  function B_(a) {
    var b = new pi;
    a.g.push({
      Zg: 1,
      Gc: b
    });
    1 == a.g.length && E_(a);
    return b
  }

  function E_(a) {
    for (var b = 0; b < a.g.length; b++) {
      var c = a.g[b];
      if (a.j.length >= c.Zg) {
        var d = Pb(a.j, 0, c.Zg);
        a.j = Pb(a.j, c.Zg);
        c.Gc.callback(d)
      } else {
        F_(a);
        break
      }
    }
    a.g = Pb(a.g, b)
  }

  function G_(a, b) {
    vb(a.g, function(c) {
      c.Gc.V(b)
    });
    a.g = []
  }

  function F_(a) {
    var b = oA();
    a.o.then(function(c) {
      return rQ(c, b)
    }).then(a.w.bind(a), function(c) {
      G_(this, new V("Error occurred fetching pregenerated IDs.", c))
    }.bind(a))
  }
  D_.prototype.w = function(a) {
    Nb(this.j, a.qa());
    E_(this)
  };

  function H_(a, b, c) {
    this.g = a;
    this.B = new D_(b);
    this.A = c
  }
  H_.prototype.j = function(a, b) {
    try {
      return a.request instanceof YF ? A_(a.request, this.A, this.B) : Wh(this.w(a.request, a.config, b))
    } catch (c) {
      return c instanceof V ? a = c.ab : (a = new Wz, Zz(a, "Error converting XHR: " + c.message), $z(a, c.stack), bA(a, 4)), P(a)
    }
  };
  H_.prototype.w = function(a, b, c) {
    var d = {},
      e = "GET",
      f = {};
    if (a instanceof fz) {
      e = (b = !!B(a, 12)) ? "PUT" : "POST";
      var g = "files";
      b && (g += "/" + B(a, 12), f.pinned = !!E(a, 13, !0));
      null != C(a, 8) && (f.convert = C(a, 8));
      f.fields = rG({
        bb: I_(this, c),
        $a: lD(qD(this.g)),
        gd: vD(this.g)
      });
      var k = q_(a);
      d["content-type"] = "application/json";
      var n = H(a, ju, 7);
      oH(this.g, f);
      J_(this.g, f)
    } else a instanceof hA ? (n = a.qa()[0], g = "files/" + n, c = Kb(I_(this, c), I_(this, c, a.ja())), Qb(c), f.fields = rG({
      bb: c,
      $a: lD(qD(this.g)),
      gd: vD(this.g)
    }), oH(this.g, f), K_(this.g,
      f), L_(this.g, f), this.o(n, f), n = H(a, ju, 3), C(a, 7) && (b.Ag = !0)) : a instanceof nA ? (g = "files/generateIds", f.space = "drive", a.ca() && (f.maxResults = a.ca()), n = H(a, ju, 2)) : M_();
    return N_(0, g, f, d, e, n, k)
  };

  function N_(a, b, c, d, e, f, g) {
    b = new wl(b);
    [10, 12, 13].includes(a) || bH(b, f);
    c = q(Object.entries(c));
    for (f = c.next(); !f.done; f = c.next()) {
      var k = q(f.value);
      f = k.next().value;
      k = k.next().value;
      Ll(b, f, k)
    }
    return {
      api: a,
      headers: d,
      method: e,
      uri: b,
      body: g ? JSON.stringify(g) : void 0
    }
  }

  function K_(a, b) {
    E(oD(a), 23, !1) && (b.includePermissionsForView = "published")
  }
  H_.prototype.o = h();

  function L_(a, b) {
    E(a, 14, !1) && (b.useLegacyDomainPermissionBehavior = !1)
  }

  function J_(a, b) {
    E(a, 3, !1) && (b.enforceSingleParent = !0)
  }

  function I_(a, b, c) {
    c || (c = KG(a.A));
    0 < b.length && (c = c.slice(0), Ib(c, function(d) {
      return mG.includes(d)
    }));
    return c
  }

  function M_() {
    var a = bA(new Wz, 4);
    throw new V("ToXhrConverter: Unsupported request type.", a);
  };

  function O_(a) {
    for (var b = [], c = 0; c < a.length; c++) b.push(b_[a[c]]);
    return b
  };

  function P_(a) {
    var b = new lG;
    if (a = B(a, 1)) {
      var c = [];
      c.push("state");
      c.push("=");
      c.push(Q_[a]);
      jI(b, c.join(" "))
    }
    return b.toString()
  }
  var Q_ = {
    1: "active",
    2: "archived"
  };

  function R_(a, b, c, d) {
    H_.call(this, b, c, d);
    this.C = a
  }
  r(R_, H_);
  R_.prototype.w = function(a, b, c) {
    try {
      return H_.prototype.w.call(this, a, b, c)
    } catch (A) {}
    var d = 0,
      e = {},
      f = "GET",
      g = {};
    if (a instanceof $t) {
      f = "POST";
      var k = "admin/files/" + a.F() + "/migrateToTeamDrive";
      g.fields = "kind,id,parentId,teamDriveId";
      g.fileId = a.F();
      var n = n_(a);
      e["content-type"] = "application/json"
    } else if (a instanceof jx) {
      f = "POST";
      k = "files/" + a.ba() + "/authorize";
      g.appId = B(a, 1);
      C(a, 3) && (g.propagate = !0);
      var p = H(a, ju, 4);
      oH(this.g, g)
    } else if (a instanceof VF) f = "POST", k = "teamdrives/" + a.requestId, g.fields = aI(this.g),
      n = {
        name: a.request.G()
      }, e["content-type"] = "application/json", p = a.request.H();
    else if (a instanceof hz) f = "POST", k = "workspaces", g.fields = "kind,id,title,createdDate,modifiedDate,state", n = s_(a), e["content-type"] = "application/json";
    else if (a instanceof cz) f = "POST", k = "files/" + a.F() + "/copy", g.fields = rG({
      bb: I_(this, c),
      $a: lD(qD(this.g)),
      gd: vD(this.g)
    }), g.convert = E(a, 4, !1), n = o_(a), e["content-type"] = "application/json", p = H(a, ju, 5), oH(this.g, g), J_(this.g, g);
    else if (a instanceof Fz) f = "DELETE", k = "files/" + a.F(), p =
      H(a, ju, 3), oH(this.g, g);
    else if (a instanceof Gz) f = "DELETE", k = "files/" + a.ba() + "/revisions/" + B(a, 2), p = H(a, ju, 3);
    else if (a instanceof Hz) f = "DELETE", k = "teamdrives/" + a.F(), p = H(a, ju, 2);
    else if (a instanceof Iz) f = "DELETE", k = "workspaces/" + a.F();
    else if (a instanceof Vz) f = "DELETE", k = "files/trash", p = H(a, ju, 1);
    else if (a instanceof mB || a instanceof RB)
      if (b = a instanceof mB ? a.T() : a, WI(b)) {
        d = 10;
        f = "POST";
        k = "/v1/items";
        e["content-type"] = "application/json";
        n = {};
        var x = 9 == rD(this.g) ? "WEB_MOBILE" : "WEB_DESKTOP";
        c = {};
        c.applicationType =
          YI(this.g);
        c.platformType = x;
        c.languageCode = kD(qD(this.g));
        c.timeZone = sI(new pI);
        c.requestType = "LIVE_REQUEST";
        a instanceof mB && (a = H(a, kB, 1)) && E(a, 10, !1) && (c.requestType = "BACKGROUND_REQUEST");
        b instanceof VA ? (fB(b) ? (200 <= rD(this.g) && 300 > rD(this.g) ? c.scenarioType = "ONE_PICK" : c.scenarioType = "QUICK_ACCESS", 2 == eB(b) && (cB(b), n.contextFeature = {
          type: "DRIVE_TEAM_DRIVE_ROOT_ID",
          stringValue: cB(b)[0]
        }), I(b, PA, 6).length && (n.itemType = XI(b))) : gB(b) ? c.scenarioType = "DRIVE_PEOPLE_WITH_ACTIONS" : hB(b) && (c.scenarioType =
          "DRIVE_PRIORITY"), E(this.g, 83, !1) && (n.itemType = ["DRIVE_ALL", "PROMOTION_ALL"])) : b instanceof RB ? c.scenarioType = "DRIVE_WORKSPACES" : M_();
        n.maxSuggestions = b.ca();
        n.clientInfo = c
      } else p = b.bd(), b.F(), k = "files", g.q = xI(b), c = Mb(I_(this, c)), x = void 0, 0 < I(b, mA, 5).length && (x = B(oD(this.g), 50)), g.fields = tG({
        bb: c,
        $a: lD(qD(this.g)),
        Hd: x || void 0,
        gd: vD(this.g)
      }), g.appDataFilter = "NO_APP_DATA", 0 < I(b, SA, 25).length && (g.sources = KI(b)), 0 < I(b, Tx, 26).length && (g.spaces = LI(b)), a.Xa() && (g.pageToken = a.Xa()), (a = H(a, kB, 1)) && D(a, 1,
        1E3) && (g.maxResults = D(a, 1, 1E3)), E(b, 36, !1) && (g.includeUnsubscribed = !0), B(b, 43) && (g.rawUserQuery = B(b, 43)), oH(this.g, g), uD(this.g) && (g.includeTeamDriveItems = !0, 0 < cB(b).length && 2 == eB(b) && (g.teamDriveId = cB(b)[0]), g.corpora = aH[eB(b)]), C(b, 18) && (mc(g, "corpora"), g.corpus = "DOMAIN"), gI(g, YA(b)), K_(this.g, g), L_(this.g, g);
    else if (a instanceof qB) {
      k = "apps";
      switch (a.getType()) {
        case 1:
          g.fields = S_;
          break;
        case 2:
          g.fields = T_;
          break;
        case 4:
          g.fields = U_;
          break;
        case 3:
          d = 5, k = "apps", g.fields = "items(icons[category='application'],icons(size,iconUrl),id,name,openUrlTemplate,primaryFileExtensions,primaryMimeTypes,productId,rankingInfo,secondaryFileExtensions,secondaryMimeTypes,kind),kind",
            g.appQueryScope = "all_webstore", b.zg = !0
      }
      g.languageCode = kD(qD(this.g));
      0 < B(a, 3).length && (g.appFilterExtensions = B(a, 3).join(","));
      0 < B(a, 4).length && (g.appFilterMimeTypes = B(a, 4).join(","));
      p = H(a, ju, 2)
    } else a instanceof tB ? (k = "changes", g.includeDeleted = E(a, 3, !0), g.includeSubscribed = E(a, 4, !0), g.maxResults = D(a, 2, 100), g.startChangeId = B(a, 1), g.fields = uG({
          bb: I_(this, c),
          Hd: uD(this.g) ? aI(this.g, a.ja()) : void 0,
          $a: lD(qD(this.g)),
          gd: vD(this.g)
        }), g.appDataFilter = "NO_APP_DATA", a.Z() || (g.filters = "DRIVE_DATASERVICE"),
        p = Pe(oD(this.g), 31), p.length && (g.spaces = yb(p, function(A) {
          return $G[A]
        }).join(",")), oH(this.g, g), uD(this.g) && (g.includeCorpusRemovals = !0, g.includeTeamDriveItems = !0, a.Z() && (g.teamDriveId = a.Z())), p = H(a, ju, 6)) : a instanceof BB ? (p = a.T(), k = "files/" + p.F() + "/permissions", g.fields = vD(this.g) ? "kind,items(kind,type,id,userId,withLink,role,additionalRoles,deleted,view,audienceId,customerId),nextPageToken" : "kind,items(kind,type,id,userId,name,emailAddress,withLink,photoLink,role,additionalRoles,deleted,view,audienceId,customerId),nextPageToken",
        a.Xa() && (g.pageToken = a.Xa()), B(a, 1) && (g.maxResults = B(a, 1)), p = H(p, ju, 2), oH(this.g, g), K_(this.g, g), L_(this.g, g)) : a instanceof BC ? (a.qa(), k = "teamdrives/" + a.qa()[0], g.fields = aI(this.g, a.ja()), p = H(a, ju, 3)) : a instanceof FC ? (p = a.T(), k = "teamdrives", g.fields = cI(this.g, p.ja()), g.q = NI(p), a.Xa() && (g.pageToken = a.Xa()), (p = (p = H(a, kB, 1)) && D(p, 1, 1E3)) && (g.maxResults = p), p = H(a.T(), ju, 2)) : a instanceof IC ? (k = "teamdrives/" + a.Z(), g.fields = "kind,id,recursiveFileCount,recursiveFolderCount") : a instanceof NC ? (f = "PUT", k = "files/" +
        a.F(), g.fields = rG({
          bb: I_(this, c),
          $a: lD(qD(this.g)),
          gd: vD(this.g)
        }), g.modifiedDateBehavior = "DRIVE_UI", g.updateViewedDate = !!C(a, 15), g.fileId = a.F(), B(a, 9).length && (g.addParents = B(a, 9).join(",")), B(a, 10).length && (g.removeParents = B(a, 10).join(",")), B(a, 31).length && (g.addWorkspaces = B(a, 31).join(",")), B(a, 32).length && (g.removeWorkspaces = B(a, 32).join(",")), null != C(a, 24) && (g.confirmed = C(a, 24)), g.languageCode = kD(qD(this.g)), n = t_(a), e["content-type"] = "application/json", p = H(a, ju, 17), oH(this.g, g), this.o(a.F(),
          g), J_(this.g, g)) : a instanceof QC ? (f = "PUT", k = "files/" + a.ba() + "/revisions/" + B(a, 2), n = u_(a), e["content-type"] = "application/json", p = H(a, ju, 4)) : a instanceof RC ? (k = "teamdrives/" + a.F(), null != C(a, 15) ? (f = "POST", k += "/" + (C(a, 15) ? "hide" : "unhide")) : (f = "PUT", n = v_(a), e["content-type"] = "application/json"), g.fields = aI(this.g), p = H(a, ju, 4)) : a instanceof TC ? (f = "PUT", k = "workspaces/" + a.F(), g.fields = "kind,id,title,createdDate,modifiedDate,state", n = w_(a), e["content-type"] = "application/json") : a instanceof UC ? (k = "about", g.fields =
        vD(this.g) ? "kind,user(kind,id,permissionId,domain),quotaBytesTotal,quotaBytesUsed,quotaBytesUsedAggregate,quotaBytesUsedInTrash,quotaBytesByService,quotaType,rootFolderId,domainSharingPolicy,largestChangeId,importFormats" : "kind,user,quotaBytesTotal,quotaBytesUsed,quotaBytesUsedAggregate,quotaBytesUsedInTrash,quotaBytesByService,quotaType,rootFolderId,domainSharingPolicy,largestChangeId,importFormats", p = H(a, ju, 1)) : a instanceof dG ? (k = "files/" + a.request.ba() + "/listCategoryMetadata", p = H(a.request, ju,
        3), a.g && (g.pageToken = a.g), a.request.ca() && (g.maxResults = a.request.ca()), g.fields = "kind,nextPageToken,categoryMetadata") : a instanceof JC ? (e["content-type"] = "application/json", f = "POST", k = "files/" + a.ba() + "/updateCategoryMetadata", p = H(a, ju, 3), n = {
        categoryMetadata: I(a, Ny, 2).map(function(A) {
          var G = I(A, Gy, 2).map(function(fa) {
              return {
                id: fa.F(),
                userId: fa.Xb(),
                setBooleanValue: C(fa, 3),
                setTextValue: B(fa, 4),
                setTextValues: B(fa, 6),
                addTextValues: B(fa, 5),
                setLongTextValue: B(fa, 7),
                setSelectionValue: B(fa, 8),
                setSelectionValues: B(fa,
                  10),
                addSelectionValues: B(fa, 9),
                setIntegerValue: B(fa, 11),
                setIntegerValues: B(fa, 13),
                addIntegerValues: B(fa, 12),
                setUserValue: B(fa, 14),
                setUserValues: B(fa, 16),
                addUserValues: B(fa, 15),
                setDateStringValue: B(fa, 17)
              }
            }),
            K = {
              categoryName: A.Wa()
            };
          G.length ? K.categoryAttributeValueDeltas = G : B(A, 4).length ? K.revertAttributeIds = B(A, 4) : C(A, 3) && (K.removeCategory = C(A, 3));
          return K
        })
      }) : a instanceof fG ? (d = 13, k = "/v2/people", g.person_id = a.g, g["request_mask.include_container"] = ["PROFILE", "DOMAIN_PROFILE"], g["request_mask.include_field.paths"] = ["person.metadata.best_display_name", "person.photo", "person.email"]) : a instanceof hG ? (d = 12, k = "/v1/categories/-/published", e["content-type"] = "application/json", a.g && (g.pageToken = a.g), a.request.ca() && (g.maxResults = a.request.ca()), g.$outputDefaults = !0, g.languageCode = kD(qD(this.g))) : a instanceof rC ? (d = 12, k = "/v1/" + B(a, 1), e["content-type"] = "application/json", g.$outputDefaults = !0, g.languageCode = kD(qD(this.g))) : a instanceof Zy ? (e["content-type"] = "application/json", f = "POST", k = "drives/" + a.Z() + "/changeCategoryReferences",
        p = H(a, ju, 4), g.fields = aI(this.g, [157], !0), n = {}, b = I(a, Ux, 2), b.length && (n.addCategoryReferences = b.map(function(A) {
          return {
            category: A.Wa()
          }
        })), a = I(a, Ux, 3), a.length && (n.removeCategoryReferences = a.map(function(A) {
          return A.Wa()
        }))) : a instanceof WF ? (k = "changes", g.fields = "kind,largestChangeId", oH(this.g, g), uD(this.g) && (g.includeTeamDriveItems = !0, a.j && (g.teamDriveId = a.j))) : a instanceof XF ? (k = "settings", g.namespace = O_(a.g), p = H(a.request, ju, 1)) : a instanceof ZF ? (k = "about", g.fields = "kind", p = a.g) : a instanceof aG ?
      (k = "workspaces", g.fields = "kind,nextPageToken,items(kind,id,title,createdDate,modifiedDate,state)", a.g && (g.pageToken = a.g), a.request.ca() && (g.maxResults = a.request.ca()), g.q = P_(a.request), (p = H(a.request, SB, 5)) && 1 == p.getType() && (g.orderBy = "title"), p = H(a.request, ju, 3)) : a instanceof tC ? (k = "changes/getRemainingCount", g.pageToken = B(a, 2), null != B(a, 3) && (g.supportsTeamDrives = !0, g.includeTeamDriveItems = !0, g.teamDriveId = a.Z())) : a instanceof Gt ? (e["content-type"] = "application/json", f = "POST", k = "files/" + a.ba() + "/sendAccessRequest",
        n = {}) : M_();
    return N_(d, k, g, e, f, p, n)
  };
  R_.prototype.o = function(a, b) {
    a = rH(this.C.j, a);
    b.expectedParentIds = a ? B(a, 2).join(",") : []
  };

  function V_(a) {
    return "kind,defaultAppIds,items(" + a + ")"
  }
  var S_ = V_("kind,id,useByDefault,name,openUrlTemplate,primaryMimeTypes,secondaryMimeTypes,createUrl,createInFolderTemplate,objectType,supportsCreate,supportsImport,supportsMultiOpen,supportsOfflineCreate,installed,authorized,productUrl,primaryFileExtensions,secondaryFileExtensions,shortDescription,longDescription,productId,removable,icons(iconUrl,size,category),type,chromeExtensionIds,requiresAuthorizationBeforeOpenWith,hasDriveWideScope,driveBranded,driveSource,supportsMobileBrowser,supportsTeamDrives,hasGsmListing"),
    T_ =
    V_("kind,id,useByDefault,name,openUrlTemplate,primaryMimeTypes,secondaryMimeTypes,createUrl,createInFolderTemplate,objectType,supportsCreate,supportsImport,supportsMultiOpen,supportsOfflineCreate,installed,authorized,productUrl,primaryFileExtensions,secondaryFileExtensions,shortDescription,longDescription,productId,removable,icons(iconUrl,size,category),type,chromeExtensionIds,requiresAuthorizationBeforeOpenWith,hasDriveWideScope,driveBranded,driveSource,supportsMobileBrowser,supportsTeamDrives,hasGsmListing,hasAppData"),
    U_ = V_("kind,id,useByDefault,name,openUrlTemplate,primaryMimeTypes,secondaryMimeTypes,createUrl,createInFolderTemplate,objectType,supportsCreate,supportsImport,supportsMultiOpen,supportsOfflineCreate,installed,authorized,productUrl,primaryFileExtensions,secondaryFileExtensions,shortDescription,longDescription,productId,removable,icons(iconUrl,size,category),type,chromeExtensionIds,requiresAuthorizationBeforeOpenWith,hasDriveWideScope,driveBranded,driveSource,supportsMobileBrowser,supportsTeamDrives,hasGsmListing,hasAppData,appDataQuotaBytesUsed");

  function W_(a, b, c) {
    this.sf = bi();
    var d = new aY(a.j.j),
      e = a.Ic.bind(a);
    e = new SX(a.j, a.C, new OX(a.tb, a.nj, e), a.Je, this.sf.g, a.I, a.nb.bind(a), e);
    var f = new $X(a.j, a.wg, a.Bg, a.tb, a.nj);
    this.A = new eW;
    this.w = new hX(a.g, a.Uj);
    var g = new R_(a.j, a.g, this.sf.g, a.I);
    this.j = new i_(a.I, a.g, a.o, a.Kj, function() {
      return a.va
    });
    this.o = XW(a.g, new MX(this.w, this.A, g, this.j, a.U, a.Ia, a.Ae), a.Ia, a.o, a.w, a.A, a.Sj, a.j.j, a.Ae || void 0);
    this.sf.resolve(c ? c : new ZW(d, this.o, e, f, a.g, this.g.bind(this), b))
  }
  W_.prototype.g = function() {
    return bc(this.o, function(a) {
      return CW(a)
    })
  };

  function RP(a) {
    var b = new Map,
      c = v();
    Zb(a.o, function(d, e) {
      d = FW(d);
      d.length && b.set(e, d.map(function(f) {
        return f ? c - f : null
      }))
    });
    return b
  };

  function X_() {
    this.g = null;
    this.j = []
  };

  function Y_(a, b) {
    var c = this;
    this.g = a;
    this.X = b;
    this.C = null;
    this.w = 0;
    this.D = this.G = !1;
    this.o = bi();
    this.H = null;
    b = pD(a.g);
    this.L = new BN(D(b, 2, 37500), D(b, 3, 6E5));
    this.j = null;
    this.B = a.ea;
    this.A = {};
    Zb(RO, function(d) {
      c.A[d] = []
    });
    this.O = this.I = !1;
    TG(a.w, ["hVFf7", "T8oKm", "BNEDtc"], function() {
      Z_(c, "Initializing: loaded from local dump");
      $_(c)
    });
    TG(a.w, ["hVFf7", "T8oKm", "mrK8ic"], function() {
      Z_(c, "Initializing: loaded from sdk backfill");
      $_(c)
    });
    TG(a.w, ["mrK8ic", "BNEDtc"], function() {
      Z_(c, "Updating: sdk backfill complete");
      c.Rd().fa(Fa)
    })
  }

  function $_(a) {
    a.I || (a.I = !0, vi(aT(a.g), function(b) {
      wi(nS(a.B), function() {
        a.C = b;
        a.nc(!0)
      }, function(c) {
        c && QG(a.g.o, "drive.ds.sync.storage.LiveDumpUpdater", "Error initializing dump storage", yF(c));
        Z_(a, "Error initializing dump storage");
        a.xd()
      })
    }))
  }
  m = Y_.prototype;
  m.Vi = function(a) {
    this.G && (this.w += a, this.w > D(pD(this.g.g), 1, 500) && this.update(3))
  };
  m.nc = function(a) {
    if ((this.C || this.D) && this.G != a) {
      var b = this.g;
      a && (b.xa.g() || 0 < b.j.B.j || b.A.g()) || ((this.G = a) ? (this.o.resolve(), this.j || this.Rd().fa(Fa)) : (this.o = bi(), t.clearTimeout(this.H)))
    }
  };
  m.xd = function() {
    this.D = !0
  };
  m.Wh = function() {
    return this.j ? this.j.g : Wh()
  };
  m.Rd = function() {
    var a = this;
    if (this.j) return this.j.g;
    this.j = bi();
    ei(this.j.g, function() {
      a.j = null
    });
    this.o.g.then(function() {
      return GS(a.g.G)
    }).then(function(b) {
      var c = !b;
      a.D ? a.j.resolve(c) : wi(pN([a0(a, 3, c), a0(a, 0, c, void 0, !0), a0(a, 1, c, void 0, !0), a0(a, 5, c, void 0, !0)]), function() {
        return a.j.resolve(c)
      }, function(d) {
        d = d && zF(d) ? d instanceof V ? d : new V("Failed to update dump", void 0, d) : new V(d || "Failed to update dump");
        a.j.reject(d)
      })
    }, function() {
      a.j.reject(Error("Unable to determine offline opt-in state."))
    });
    return this.j.g
  };
  m.update = function(a, b) {
    var c = this,
      d = new pi;
    this.o.g.then(function() {
      return GS(c.g.G)
    }).then(function(e) {
      e = !e;
      c.D ? d.callback() : Ai(a0(c, a, e, b), d)
    });
    return d
  };

  function a0(a, b, c, d, e) {
    var f = sb(a.A[b]);
    if (f) {
      if (f.encrypt == c && 1 < a.A[b].length) return f.Gc.Jd();
      var g = new pi;
      yi(f.Gc, function() {
        Ai(b0(a, b, c, d, e), g)
      })
    } else g = b0(a, b, c, d, e);
    var k = {
      encrypt: c,
      Gc: g
    };
    a.A[b].push(k);
    yi(g, function() {
      Hb(a.A[b], function(n) {
        return k == n
      })
    });
    xi(g, function(n) {
      a.B.j.g ? a.xd() : n instanceof V && (n = n.j || null, n instanceof JJ && "InvalidStateError" == (n.kg.name || "") && n.message && -1 < n.message.indexOf("The database connection is closing.") && a.xd());
      return null
    });
    return g
  }

  function b0(a, b, c, d, e) {
    var f = new pi;
    a.o.g.then(function() {
      if (3 == b) Ai(c0(a, d || !1, c), f);
      else {
        switch (b) {
          case 0:
            var g = a.g.la;
            g = g.g ? N(g.g) : null;
            break;
          case 1:
            g = a.g.sb.A();
            break;
          case 5:
            var k = d0(a.g.W);
            g = new DB;
            M(g, 1, k);
            break;
          default:
            f.V("Invalid data type to write to storage.");
            return
        }
        g ? (k = B(I(pD(a.g.g), fD, 11)[0], 2), !k && c ? (Z_(a, "Skipping dump update, encrypted and no key"), f.callback()) : rS(a.B, c ? k : null, [g]).then(f.callback, f.V, f)) : e ? (Z_(a, "Skipping dump update: " + b), f.callback()) : f.V("Failed to get data to write to dump.")
      }
    });
    return f
  }

  function c0(a, b, c) {
    t.clearTimeout(a.H);
    a.H = t.setTimeout(u(a.Um, a), a.L.P());
    if (b && 0 == a.w) return Fi();
    a.w = 0;
    var d = B(I(pD(a.g.g), fD, 11)[0], 2);
    if (!d && c) return Z_(a, "Skipping dump update, encrypted and no key"), Fi();
    var e = [];
    Zb(FD, function(g) {
      0 < g && (g = e0(a, g), g.length && e.push(rS(a.B, c ? d : null, g)))
    });
    var f = new pi;
    $h(e).then(function() {
      a.O && ES(a.g.G, JS, !0);
      f.callback()
    }, f.V, f);
    return f
  }
  m.Um = function() {
    EK(this.L);
    this.update(3, !0)
  };

  function e0(a, b) {
    switch (b) {
      case 1:
        return [f0(a)];
      case 2:
        var c = (b = a.g.j.w.g) ? b.vb() : [];
        c = g0(a, dc(tQ(c)));
        Z_(a, "Exporting " + c.length + " secondary dump items.");
        c.length > D(pD(a.g.g), 5, 2E4) && (b && vQ(b), c = []);
        b = GD(new DD, h0(c));
        c = a.g.j.w;
        a = new Uz;
        (c = c.g) && c.j && (c = c.vb(), F(a, 3, c.length));
        a = J(b, 11, a);
        return [MD(a, 2)];
      case 3:
        return i0(a);
      case 4:
        return j0(a);
      default:
        throw new V("Unsupported CacheType");
    }
  }

  function f0(a) {
    var b = {},
      c = [],
      d = E(a.g.g, 79, !1);
    d = OP(a.g.j.w, d);
    for (var e = 0; e < d.length; e++) {
      var f = d[e],
        g = f.vb(),
        k = g0(a, sQ(g));
      g = k.length;
      var n = 0 < g ? k[g - 1] : null;
      vb(k, function(p) {
        b[p.F()] = p
      });
      if (0 < g || f.o) k = BD(new zD, f.T()), f.o || (F(k, 2, g), J(k, 3, n)), c.push(k)
    }
    d = dc(b);
    Z_(a, "Exporting " + d.length + " initial dump items.");
    return MD(KD(GD(ID(LD(JD(new DD, a.g.nb()), KG(a.X)), k0(a.C, null)), h0(d)), c), 1)
  }

  function i0(a) {
    if (!uD(a.g.g)) return [];
    var b = [],
      c = a.C;
    Mb(a.g.j.w.j).forEach(function(d) {
      var e = k0(c, d.Z());
      if (e) {
        var f = g0(a, sQ(d.vb()));
        Z_(a, "Exporting " + f.length + " TD dump items for: " + d.Z());
        e = MD(ID(GD(new DD, h0(f)), e), 3);
        d = BD(new zD, d.T());
        KD(e, [d]);
        b.push(e)
      }
    });
    return b
  }

  function j0(a) {
    if (!uD(a.g.g)) return [];
    var b = {},
      c = [];
    zU(a.g.j).forEach(function(d) {
      1 == d.g && (sQ(d.vb()).forEach(function(e) {
        b[e.F()] = e
      }), d = CD(BD(new zD, new VA), d.T()), c.push(d))
    });
    return [MD(KD(GD(new DD, h0(Object.values(b))), c), 4)]
  }

  function g0(a, b) {
    b = DH(b);
    C(a.g.g, 67) && (b = l0(b));
    return b.filter(function(c) {
      return 4 != ry(c)
    })
  }

  function l0(a) {
    var b = [];
    a = q(a);
    for (var c = a.next(); !c.done; c = a.next()) c = c.value, kH(c) ? (c = c.clone(), iH(c), b.push(c)) : b.push(c);
    return b
  }

  function h0(a) {
    return a.map(function(b) {
      return N(b)
    })
  }

  function Z_(a, b) {
    UF(a.g.o, "drive.ds.sync.storage.LiveDumpUpdater", b)
  }
  m.Ig = function() {
    this.O = !0
  };

  function m0() {}
  m = m0.prototype;
  m.nc = h();
  m.xd = h();
  m.update = function() {
    return Fi()
  };
  m.Wh = function() {
    return Wh()
  };
  m.Rd = function() {
    return Wh()
  };
  m.Vi = h();
  m.Ig = h();

  function n0(a, b, c, d) {
    T.call(this);
    this.C = a;
    this.w = b;
    this.o = c;
    this.B = d;
    this.g = {};
    this.A = 6;
    this.j = null
  }
  r(n0, T);

  function o0(a) {
    return B(a, 1) + "-" + B(a, 2)
  }

  function p0(a) {
    if ("undefined" != a) {
      var b = Id(a);
      return jc(Vt, function(c) {
        return c == b
      })
    }
  }
  n0.prototype.get = function(a) {
    a = Ld(a, "-");
    if (2 == a.length) {
      var b = new Ut,
        c = p0(a[0]);
      F(b, 1, c);
      F(b, 2, a[1]);
      a = b
    } else a = null;
    return (b = a) ? (a = new Tt, J(a, 1, b), b = this.g[o0(b)], F(a, 2, b), a) : null
  };

  function LR(a, b, c) {
    for (var d = !1, e = 0, f = 0; f < b.length; f++) {
      var g = b[f],
        k = H(g, Ut, 1);
      if (k) {
        var n = a.g[o0(k)];
        if (!q0(a, k) || !n) {
          a: {
            k = a;
            if (n = H(g, Ut, 1)) {
              var p = o0(n);
              g = g.P() || "";
              if (g != k.g[o0(n)]) {
                k.g[p] = g;
                g = !0;
                break a
              }
            }
            g = !1
          }
          d = g || d;e++
        }
      }
    }
    UF(a.C, "drive.ds.sync.userprefs.InMemoryUserPrefsCache", "User prefs loaded: " + e + "/" + b.length);
    if (b.length) {
      if (c || sD(a.o)) a.A = 1, UG(a.w, "px2C2c");
      UG(a.w, "KDDche")
    }
    d && r0(a, !c)
  }

  function q0(a, b) {
    return null != I(a.o, Ut, 41).find(function(c) {
      return Ze(c, b)
    })
  }

  function r0(a, b) {
    b || a.j || (a.j = t.setTimeout(function() {
      t.clearTimeout(a.j);
      a.j = null;
      a.B.update(5)
    }, 1E3));
    a.dispatchEvent(new S("WPi0i"))
  }
  n0.prototype.remove = function(a) {
    a = o0(a);
    mc(this.g, a) && r0(this)
  };

  function d0(a) {
    var b = [];
    Zb(a.g, function(c, d) {
      (c = a.get(d)) && b.push(c)
    });
    return b
  }

  function s0(a) {
    var b = new FB;
    F(b, 1, a.A);
    a = d0(a);
    M(b, 3, a);
    return b
  };

  function t0(a) {
    var b = 0,
      c = a.length,
      d = {
        a: -1640531527,
        b: -1640531527,
        c: 314159265
      },
      e;
    for (e = c; 12 <= e; e -= 12, b += 12) d.a += u0(a, b), d.b += u0(a, b + 4), d.c += u0(a, b + 8), v0(d);
    d.c += c;
    switch (e) {
      case 11:
        d.c += a[b + 10] << 24;
      case 10:
        d.c += (a[b + 9] & 255) << 16;
      case 9:
        d.c += (a[b + 8] & 255) << 8;
      case 8:
        d.b += u0(a, b + 4);
        d.a += u0(a, b);
        break;
      case 7:
        d.b += (a[b + 6] & 255) << 16;
      case 6:
        d.b += (a[b + 5] & 255) << 8;
      case 5:
        d.b += a[b + 4] & 255;
      case 4:
        d.a += u0(a, b);
        break;
      case 3:
        d.a += (a[b + 2] & 255) << 16;
      case 2:
        d.a += (a[b + 1] & 255) << 8;
      case 1:
        d.a += a[b] & 255
    }
    return v0(d)
  }

  function v0(a) {
    var b = a.a,
      c = a.b,
      d = a.c;
    b = b - c - d ^ d >>> 13;
    c = c - d - b ^ b << 8;
    d -= b;
    d = d - c ^ c >>> 13;
    b -= c;
    b -= d;
    b ^= d >>> 12;
    c = c - d - b ^ b << 16;
    d -= b;
    d = d - c ^ c >>> 5;
    b -= c;
    b -= d;
    b ^= d >>> 3;
    c = c - d - b ^ b << 10;
    d -= b;
    d = d - c ^ c >>> 15;
    a.a = b;
    a.b = c;
    return a.c = d
  }

  function u0(a, b) {
    return w0(a[b]) + (w0(a[b + 1]) << 8) + (w0(a[b + 2]) << 16) + (w0(a[b + 3]) << 24)
  }

  function w0(a) {
    return 127 < a ? a - 256 : a
  };

  function x0(a, b, c, d, e, f, g) {
    rN.call(this, a, b, c, d, e);
    var k = this;
    this.Gj = bi();
    this.w = f ? f : new SG(this.o);
    this.L.j.j = this.w;
    this.aa = E(pD(c), 9, !1) && (t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.moz_indexedDB) ? y0(this, c) : null;
    this.O = new RH(kD(qD(c)));
    this.H = new EH;
    this.rg = null;
    this.ye = bi();
    this.G = z0(this, this.aa);
    this.C = (this.ea = A0(this, this.aa, c)) ? new Y_(this, this.I) : new m0;
    this.j = new vU(this, this.I);
    this.la = new cQ(this);
    this.sb = new kQ(this.o, this.w, this.C, this.A);
    this.W = new n0(this.o, this.w, this.g,
      this.C);
    this.Zi = new pi;
    this.Bj = null;
    this.Sj = new ZV(this);
    this.Je = new gV;
    this.Bc = null;
    this.Hj = bi();
    TG(this.w, ["mrK8ic"], function() {
      k.Hj.g.then(function() {
        KR(k, k.Bc)
      })
    });
    this.Tc = new pi;
    this.Kj = new bW(this.g);
    this.U = new LO(this.g);
    this.wg = new QV(this);
    this.Ia = new mQ(this);
    this.tb = new lV(this.ye.g, qQ(this));
    this.nj = new nV(qQ(this), this.tb);
    this.Uj = new X_;
    this.Bg = new EV(this.ye.g, qQ(this), this.o, this.g);
    this.xa = new W_(this, this.Qj.bind(this), g);
    this.Gj.resolve(this.xa);
    this.D = new xR;
    this.Ae = E(oD(c), 52,
      !1) ? new WV(this) : null;
    this.Ij = new tV(this);
    this.ag = new gQ;
    this.xe = bi();
    this.ej = !1;
    this.kj = bi();
    TG(this.w, ["BNEDtc"], function() {
      return k.kj.resolve()
    });
    (this.va = D(qD(c), 6, "") || "") && bQ(this, this.va);
    this.Wg = null;
    vN(this, function() {
      k.C.xd();
      return Wh()
    })
  }
  r(x0, rN);

  function y0(a, b) {
    function c() {}
    var d = jD(qD(b)),
      e = rD(b),
      f = I(pD(b), fD, 11);
    f = f[0] && B(f[0], 1);
    var g = new SO(d, e, D(pD(b), 10, 0) || 0, f || "", KG(a.I));
    sD(b) ? d = GP(d, e).then(function(n) {
      return n ? n : g
    }) : E(b, 10, !1) && 0 < D(pD(b), 8, 432E6) ? (b = B0(a, d), d = GP(d, e, b).then(function(n) {
      return n && (c = function(p) {
        return p.Qb(g).fa(pb)
      }, !n.C) ? n : g
    })) : d = Wh(g);
    var k = new iP(d, a.o, a.L);
    jP(k).then(function() {
      return c(k)
    }, pb);
    return k
  }

  function B0(a, b) {
    var c = D(pD(a.g), 8, 432E6);
    if (!sD(a.g) && 0 < c) return Math.abs(t0(qe(b))) % c
  }

  function C0(a, b) {
    return a.aa ? a.aa.g ? P(Error("Database disabled: " + pP(a.aa))) : GS(a.G).then(function(c) {
      var d = a.aa,
        e = [];
      e.push(a.C.Wh());
      e.push(b ? d.Qb() : CP(d));
      if (b === c) return $h(e).then(ca(!1));
      !1 === b && (e.push(oP(d)), (c = a.nb()) && e.push(ES(a.G, FS, c)));
      return $h(e).then(function() {
        return ES(a.G, HS, b)
      }, ca(!1))
    }) : P(Error("No database connection."))
  }

  function A0(a, b, c) {
    var d = null;
    b && (d = new mS(b, D(c, 7, ""), D(pD(c), 6, 2E7), function(e) {
      a.Ic(e)
    }, D(pD(c), 12, 0)), nS(d));
    return d
  }

  function z0(a, b) {
    var c = new CS(b || void 0);
    c.nb().then(function(d) {
      d && wN(a, d, 5)
    });
    b && $h([jP(b), a.Sb.g]).then(function() {
      D0(a, c)
    }, h());
    return c
  }

  function D0(a, b) {
    MS(b).then(function(c) {
      (!c || c < v() - 864E5) && IP(jD(qD(a.g)), rD(a.g), a.o).then(function(d) {
        d && (d = v(), ES(b, NS, d))
      }, h())
    })
  }

  function aT(a) {
    return a.Zi.Jd()
  }

  function QP(a) {
    return a.aa ? a.aa.g : null
  }

  function E0(a, b) {
    a.w.g("NSockf") ? UG(a.w, b) : TG(a.w, ["NSockf"], function() {
      UG(a.w, b)
    })
  }
  x0.prototype.tj = function(a, b) {
    this.log("Setting Root ID: " + a);
    a && (this.H.g = a || "", this.B.o = a || "", 6 != b && 1 != b || ES(this.G, FS, a), E0(this, "jroI5d"))
  };

  function bQ(a, b) {
    E(a.g, 15, !1) || (a.va = b, E0(a, "NVkrgc"))
  }

  function KR(a, b, c) {
    0 > b || (c ? a.Bc ? a.Bc = Math.max(a.Bc, b) : (a.Bc = b, a.Hj.resolve()) : a.Tc.g || (a.Tc.callback(b), E0(a, "T8oKm")))
  }

  function FQ(a) {
    if (!a.rg) throw Error("Live request updater not set");
    return a.rg
  }

  function qQ(a) {
    return a.Gj.g.then(function(b) {
      return b.sf.g
    })
  }

  function VS(a) {
    a.ej || (a.ej = !0, a.xe.resolve(), UG(a.w, "aU7Ts"))
  }
  x0.prototype.yb = function() {
    throw Error("Unsupported. Use the AuthStateManager.");
  };
  x0.prototype.Qj = function() {
    this.xa.g() || this.dispatchEvent("U")
  };
  x0.prototype.Hi = function() {
    return cc(this.j.j.g.g)
  };

  function gO(a) {
    a.Wg || (a.Wg = new rV(a.ye.g, qQ(a), a.o));
    return a.Wg
  };

  function F0(a, b, c, d) {
    this.clientId = a;
    this.method = b;
    this.j = c;
    this.requestId = d || null;
    this.g = String(La(this))
  }

  function G0(a, b, c) {
    this.id = a;
    this.data = b || [];
    this.error = "string" === typeof c ? c : void 0
  }

  function H0(a) {
    return new G0(a.id, a.d, a.err || void 0)
  };

  function I0(a, b, c) {
    T.call(this);
    var d = this;
    this.H = a;
    this.tb = b;
    this.j = new pi;
    this.I = {};
    this.C = this.A = this.aa = null;
    c.then(function(e) {
      d.aa = e.clientId;
      d.A = e.channel;
      d.C = e.g;
      rF(d.A, d.H, u(d.mm, d));
      rF(d.A, d.H + "_update", u(d.Ml, d));
      d.log("Service initialized.");
      d.j.callback()
    })
  }
  r(I0, T);
  m = I0.prototype;
  m.mm = function(a) {
    a = H0(a);
    var b = this.I[a.id];
    if (b) {
      if (null != a.data && null == a.error) b.resolve(a.data);
      else {
        if (a.error) var c = new Wz(JSON.parse(a.error));
        else c = new Wz, Xz(c, 2), Yz(c, 6), F(c, 21, "An invalid response was received");
        b.reject(new V(void 0, c))
      }
      delete this.I[a.id]
    }
  };
  m.Ml = function(a) {
    a = H0(a);
    this.ki(a.id, a.data, a.error)
  };
  m.ki = h();
  m.send = function(a, b, c, d) {
    var e = this,
      f = new pi;
    vi(this.j, function() {
      var g = e.A,
        k = new F0(e.aa, a, b, d),
        n = bi();
      e.I[k.g] = n;
      n.g.then(function(p) {
        f.callback((c || Fa)(p))
      }, function(p) {
        p = p.ab;
        var x = B(p, 21) || "";
        F(p, 21, "Worker" + ("An invalid response was received" == x ? "[" + a + "]: " : ": ") + x);
        f.V(new V(void 0, p))
      });
      sF(g, e.H, {
        c: k.clientId,
        m: k.method,
        a: k.j,
        req: k.requestId,
        res: k.g
      })
    });
    return f
  };
  m.log = function(a) {
    this.C && UF(this.C, this.tb, a)
  };

  function J0(a, b, c) {
    this.clientId = a;
    this.channel = b;
    this.g = c
  };

  function K0(a, b, c) {
    I0.call(this, "LRM", "drive.ds.sync.cache.LiveRequestManagerProxy", a);
    this.w = b;
    this.o = {};
    this.g = c
  }
  r(K0, I0);
  K0.prototype.G = function(a) {
    a = new yN(this.w, this, a);
    L0(this, a);
    return a
  };

  function L0(a, b) {
    M0(a, b);
    ij(b, function() {
      N0(a, b);
      a.send("4.3", [b.pa(), b.T().Ga()])
    });
    a.send("4.1", [b.pa(), b.T().Ga()])
  }
  K0.prototype.D = function(a) {
    var b = new SN(this.w, this, a);
    M0(this, b);
    ij(b, function() {
      N0(this, b);
      this.send("4.4", [b.pa(), b.T().Ga()])
    }.bind(this));
    this.send("4.2", [b.pa(), b.T().Ga()]);
    return b
  };

  function M0(a, b) {
    b.pa();
    b.pa();
    a.g.create(b.pa(), b.T());
    a.o[b.pa()] = b
  }

  function N0(a, b) {
    b.pa();
    b.pa();
    bO(a.g, b.pa(), 4);
    delete a.o[b.pa()]
  }
  K0.prototype.ki = function(a, b, c) {
    if (a = this.o[a]) {
      var d, e = 0;
      if (c) c = new Wz(JSON.parse(c)), c = new NF(c, c.Eh()), a.Tf(c), bO(this.g, a.pa(), 3);
      else if (b[e]) {
        var f = b[e++];
        if ("cacheRefresh" == f) {
          a.Ue();
          return
        }
        c = a.T();
        if (c instanceof VA || c instanceof DC) f = JSON.parse(f), c instanceof VA && gB(c) ? d = new MB(f) : d = new MA(f);
        else if (c instanceof hA || c instanceof BC) d = new GF, FF(d, function(g) {
          return new ay(JSON.parse(g))
        }, f);
        else if (c instanceof Py) d = new eG(new Ry(JSON.parse(f)), b[e++], b[e++], b[e++]);
        else if (c instanceof TB) d = new cG(new UB(JSON.parse(f)), b[e++], b[e++], b[e++]);
        else if (c instanceof RB) d = new xC(JSON.parse(f));
        else throw Error("Invalid request type for handleUpdateInternal");
      }
      d && ("boolean" === typeof b[e] && ZN(this.g, a.pa(), !!b[e]), $N(this.g, a.pa(), d), a.update(d))
    }
  };

  function O0(a, b) {
    I0.call(this, "DU", "drive.ds.sync.DebugUtilProxy", a);
    this.g = b
  }
  r(O0, I0);
  m = O0.prototype;
  m.Hh = function() {
    return H(this.g.g, aD, 58)
  };
  m.Ih = l("g");
  m.Uf = function() {
    return this.g.o
  };
  m.Nh = function(a) {
    return this.send("5.2", [a], function(b) {
      return (b = JSON.parse(b[0])) && new ay(b)
    })
  };
  m.Jh = function() {
    return this.send("5.5", [], function(a) {
      a = JSON.parse(a[0]);
      for (var b = [], c = 0; c < a.length; c++) b.push(new xD(a[c]));
      return b
    })
  };
  m.Vf = function() {
    return this.send("5.12", [], function(a) {
      return a[0]
    })
  };

  function P0(a) {
    I0.call(this, "ODS", "drive.ds.sync.offline.DataServiceProxy", a)
  }
  r(P0, I0);

  function Q0(a, b) {
    var c = bi();
    I0.call(this, "IS", "drive.ds.sync.ItemServiceProxy", c.g);
    this.va = c;
    this.g = a;
    new P0(c.g);
    this.B = b;
    this.ea = wF(KG(this.B));
    this.sb = new YN(a.L, E(a.g, 78, !1));
    this.W = new K0(c.g, a, this.sb);
    this.L = new O0(c.g, a);
    HF(this.L);
    this.U = !1;
    this.w = Wh(this.j);
    this.xa = !1;
    this.o = new Mm(this);
    R(this, this.o);
    this.G = this.D = this.O = !1;
    this.Ia = bi();
    this.la = !1
  }
  r(Q0, I0);
  m = Q0.prototype;
  m.Gh = function() {
    var a = this,
      b = H(this.g.g, cD, 66);
    if (this.U) return this.w;
    if (!b || !B(b, 1)) return b = new V("Dataservice URL not provided."), this.j.V(b), this.w;
    var c = mN(this.g.L, 106E3);
    this.U = !0;
    UF(this.g.o, "drive.ds.sync.ItemServiceProxy", "Initialization started with client build: " + B(this.g.g, 62));
    R0(this, b);
    this.w.then(function() {
      oJ(c);
      a.fj()
    });
    return this.w
  };

  function R0(a, b) {
    var c = S0(a),
      d = !0,
      e = B(b, 5) || "";
    if (zk(c.toString()) && e) {
      d = !1;
      c = vF(e, T0(a), a.ea, B(b, 6));
      var f = new pF(c, !1)
    } else b = U0(c.toString()), c = Pl(c.w, void 0, c.g, c.j), f = new pF(mF(window.frames[b], c.toString()), !1);
    V0(a, f, d);
    f.start();
    vN(a.g, function() {
      return W0(f)
    })
  }

  function W0(a) {
    return Zh([new Rh(function(b) {
      a.ua() || sF(a, "8.1", void 0, function() {
        a.dispose();
        b()
      })
    }), Yk(1E4)])
  }

  function S0(a) {
    var b = new wl(B(H(a.g.g, cD, 66), 1));
    var c = new wl(window.location);
    var d = c.w + "://" + c.g;
    null != c.j && (d += ":" + c.j);
    c = Be(d, 3);
    U(b, "co", c);
    c = b.A;
    !sD(a.g.g) && 0 < iD(qD(a.g.g)) && (a = iD(qD(a.g.g)), c += "u/" + a + "/");
    Al(b, c + "_/dataservice/cacheproxy");
    return b
  }

  function U0(a) {
    var b = "cpiframe_goog_" + Hd++;
    a = Ig("IFRAME", {
      name: b,
      id: b,
      src: a
    });
    var c = wc(new tc(uc, "display: none;"));
    var d = 0 === c.length ? $c : Zc(c);
    c = a.style;
    d instanceof Xc && d.constructor === Xc && d.j === Yc ? d = d.g : (Ga(d), d = "type_error:SafeStyle");
    c.cssText = d;
    document.body.appendChild(a);
    return b
  }

  function V0(a, b, c) {
    c ? qF(b, "2.0", u(a.vl, a)) : qF(b, "1.1", function() {
      var d = new hr(document),
        e = {};
      e.__SAPISID = d.get("SAPISID") || d.get("__Secure-3PAPISID");
      e.__APISID = d.get("APISID") || d.get("__Secure-APISID");
      return {
        ac: e,
        bl: B(a.g.g, 62),
        ufds: a.ea
      }
    });
    sF(b, "8.4", {
      dsc: a.g.g.Ga()
    });
    X0(b);
    Y0(a, b);
    rF(b, "2.1", u(a.wl, a));
    rF(b, "2.2", u(a.Pl, a, b));
    rF(b, "2.15", u(a.ml, a));
    rF(b, "2.5", u(a.Hl, a));
    rF(b, "2.6", u(a.Cl, a));
    rF(b, "2.18", u(a.Bl, a));
    rF(b, "2.7", u(a.Gl, a));
    rF(b, "2.8", u(a.il, a));
    rF(b, "2.9", u(a.zl, a));
    rF(b, "2.10", u(a.ql,
      a));
    rF(b, "2.12", u(a.li, a));
    rF(b, "2.14", function() {
      return a.Ia.resolve()
    });
    rF(b, "2.16", function() {
      return a.xa = !0
    })
  }

  function X0(a) {
    t._DRIVE_dsp && sF(a, "8.3", {
      dsp: Z0(t._DRIVE_dsp)
    });
    t._DRIVE_dspc = function(b) {
      if (t._DRIVE_dsp) {
        var c = [];
        c[b] = t._DRIVE_dsp[b];
        sF(a, "8.3", {
          dsp: Z0(c)
        })
      }
    }
  }

  function Y0(a, b) {
    E(a.g.g, 24, !1) && (t._DRIVE_ivd ? sF(b, "8.2", {
      ivd: t._DRIVE_ivd
    }) : void 0 === t._DRIVE_ivd && (t._DRIVE_ivdc = function() {
      t._DRIVE_ivd && sF(b, "8.2", {
        ivd: t._DRIVE_ivd
      })
    }))
  }
  m.vl = function() {
    return {
      uid: T0(this),
      fds: KG(this.B)
    }
  };

  function T0(a) {
    a = N(a.g.g);
    a = F(a, 28, []);
    a = tD(a, []);
    var b = new pm;
    b.update(jD(qD(a)));
    b.update(String(iD(qD(a))));
    b.update(a.Ga());
    return se(b.digest())
  }
  m.wl = function() {
    return {
      dsc: this.g.g.Ga()
    }
  };

  function Z0(a) {
    var b = [],
      c = [, !0, !0, !0, !0, , !0, !0];
    a.forEach(function(d, e) {
      d && c[e] && (b[e] = d)
    });
    return 0 < b.length ? b : null
  }
  m.Pl = function(a, b) {
    "number" === typeof b.id ? (this.va.resolve(new J0(b.id, a, this.g.o)), b.dsp && X0(a), b.ivd && Y0(this, a)) : (a = new Wz(JSON.parse(b.err)), this.j.V(new V("Unable to initialize dataservice.", a)))
  };
  m.ml = function(a) {
    this.dispatchEvent(new RN(a.dt))
  };
  m.Hl = function(a) {
    wN(this.g, a.id)
  };
  m.Cl = function(a) {
    this.g.A.Qb(a.os)
  };
  m.Bl = function(a) {
    this.g.A.j = a.oois
  };
  m.il = function(a) {
    this.g.Ej = a.au;
    this.dispatchEvent(new PN(a.au ? "H" : "I"))
  };
  m.zl = function(a) {
    var b = a.logName,
      c = a.level;
    a = Bm("[CSW %s] %s", a.totalTime, a.message);
    switch (c) {
      case "config":
        this.g.o.config(b, a);
        break;
      case "fine":
        RG(this.g.o, b, a, "fine");
        break;
      case "finer":
        RG(this.g.o, b, a, "finer");
        break;
      case "finest":
        RG(this.g.o, b, a, "finest");
        break;
      case "info":
        UF(this.g.o, b, a);
        break;
      case "warning":
      case "severe":
        QG(this.g.o, b, a);
        break;
      default:
        QG(this.g.o, "drive.ds.sync.ItemServiceProxy", "Unknown log level: " + c), QG(this.g.o, b, a)
    }
  };
  m.Gl = h();
  m.ql = function(a) {
    this.dispatchEvent(new ZE(new V(void 0, new Wz(JSON.parse(a.p)))))
  };
  m.li = function() {
    this.la = !0;
    $0(this)
  };
  m.query = function(a) {
    $0(this);
    UI(this.g.B, a, oa(this.B.j).concat());
    this.ed();
    var b = this.W.G(a);
    this.O || (a = a.bd(), a && 121 == B(a, 1) || (this.O = !0, this.o.R(b, "m", this.Gi)));
    return b
  };
  m.Gi = function(a) {
    a = a.j;
    1 == a.S() && (this.G || (this.G = !0), this.o.hb(a, "m", this.Gi))
  };
  m.Fh = function(a) {
    $0(this);
    TI(a);
    this.ed();
    a = this.W.D(a);
    this.D || (this.D = !0, this.o.R(a, "m", this.ii));
    return a
  };
  m.ii = function(a) {
    a = a.j;
    1 == a.S() && this.o.hb(a, "m", this.ii)
  };
  m.Ve = h();
  m.Qb = function(a) {
    $0(this);
    this.send("3.8", [a])
  };
  m.Sf = function(a) {
    $0(this);
    return this.send("3.36", [a], function(b) {
      return !!b[0]
    }).then()
  };
  m.ed = function() {
    $0(this);
    this.send("3.9", [])
  };
  m.yb = function() {
    $0(this);
    return this.g.yb()
  };
  m.Rh = l("L");
  m.sync = function() {
    $0(this);
    return this.send("3.28", []).then()
  };
  m.Ie = function() {
    return uN(this.g)
  };
  m.Rf = h();
  m.fj = function() {
    var a = [Yk(1E4, !1), this.send("3.29", [], function(b) {
      return !!b[0]
    }).then()];
    Zh(a).then(function(b) {
      b ? Wk(this.fj.bind(this), 6E4) : this.li({})
    }.bind(this))
  };

  function $0(a) {
    a.la && a.dispatchEvent(new MP)
  }

  function a1(a) {
    if (E(a, 61, !1) && t.SharedWorker)
      if (H(a, cD, 66)) {
        if (lD(qD(a)) || sD(a) && !E(a, 52, !1)) return !1
      } else return !1;
    else return !1;
    return !0
  };

  function b1() {
    T.call(this);
    this.A = new MG;
    this.H = this.L = this.O = !1
  }
  w(b1, T);

  function c1(a) {
    a.O || (a.O = !0, a.B(), d1(a))
  }
  b1.prototype.B = h();

  function d1(a) {
    a.L = !0;
    e1(a)
  }

  function e1(a) {
    if (a.L && !a.H) {
      var b = NG(a.A);
      if (b)
        if (a.U()) {
          do a.W(b); while (b = NG(a.A))
        } else a.H = !0, ei(f1(a, b), function() {
          this.H = !1;
          e1(this)
        }.bind(a))
    }
  }
  b1.prototype.U = ca(!0);

  function g1() {
    Q.call(this)
  }
  w(g1, Q);
  g1.prototype.init = function() {
    this.g = []
  };

  function h1(a) {
    var b = i1,
      c = null;
    if (b.o) {
      c = "Potentially sensitive message stripped for security reasons.";
      var d = Error("Potentially sensitive message stripped for security reasons.");
      d.columnNumber = a.columnNumber;
      d.lineNumber = a.lineNumber;
      d.name = a.name;
      d.fileName = a.fileName;
      if (jd() && 0 <= Oc(kd(), 28) || id() && 0 <= Oc(kd(), 14)) d.stack = a.stack;
      a = d
    }
    b.ua() || a instanceof qi || (b.j ? b.j.g(a, c) : b.g && 10 > b.g.length && b.g.push([c, a]))
  }
  var i1 = new g1;

  function j1(a) {
    b1.call(this);
    var b = this;
    this.g = a;
    var c = a.w;
    TG(c, ["toquGd"], function() {
      return c1(b)
    });
    var d = ["NSockf"],
      e = oD(a.g);
    a.va && 1 != D(e, 17, 1) && (d.push("iuEtc"), TG(c, ["mrK8ic"], function() {
      UG(c, "iuEtc")
    }));
    TG(c, d, function() {
      return k1(b)
    })
  }
  r(j1, b1);
  j1.prototype.B = function() {
    l1(this)
  };

  function k1(a) {
    if (1 != dQ(a.g.la).S()) {
      var b = new ju;
      F(b, 2, !0);
      ku(b, 301);
      var c = new UC;
      J(c, 1, b);
      m1(a, c).then(h(), function(d) {
        d = d.ab;
        F(d, 21, "Initial account request failed.");
        a.g.Ic(d)
      })
    }
  }

  function m1(a, b, c) {
    return qQ(a.g).then(function(d) {
      return rQ(d, b, c)
    }).then(function(d) {
      return n1(a, d)
    }, function(d) {
      d = AF(d);
      F(d, 5, 1);
      return new V("Error fetching account from server.", d)
    })
  }

  function n1(a, b) {
    var c = H(b, Wt, 2),
      d = H(c, Ht, 1);
    if (d && 0 == C(d, 7)) return a = iD(qD(a.g.g)), a = Error("(b/73301807) Incorrect account for session index " + a), h1(a), Promise.reject(a);
    var e = a.g.la,
      f = 0 == e.o ? 1 : 6;
    d = eQ(e, c, f, !0);
    var g = H(c, Mt, 3);
    g && wN(a.g, B(g, 2), 1);
    (b = B(b, 4)) && KR(a.g, b, !0);
    d && a.dispatchEvent(new S("WPi0i"));
    return vD(a.g.g) ? PT(a.g.j.D, c).then(function(k) {
      MT(H(c, Ht, 1), k);
      eQ(e, c, f, !0);
      return new bG(dQ(e), e.o)
    }) : Promise.resolve(new bG(dQ(e), e.o))
  }
  j1.prototype.W = function(a) {
    var b = a.j();
    if (b.hs) {
      var c = {};
      b.mf && (c.lf = b.mf);
      m1(this, b.M, c).then(function(d) {
        return a.g().callback(d)
      }, function(d) {
        return a.g().V(d)
      })
    } else b = dQ(this.g.la), b.S(), a.g().callback(new bG(b, this.g.la.o))
  };

  function l1(a) {
    var b = oD(a.g.g);
    t.setTimeout(function() {
      var c = new UC,
        d = new ju;
      ku(d, 306);
      J(c, 1, d);
      m1(a, c).then(function() {
        return l1(a)
      }, function() {
        return l1(a)
      })
    }, Math.ceil(D(b, 7, 9E5) * Math.random()) + D(b, 3, 72E5))
  };

  function o1(a) {
    b1.call(this);
    this.g = a;
    this.Y = new Mm(this);
    R(this, this.Y);
    this.Y.R(this.g.sb, "P", Ra(this.dispatchEvent, new S("P", this)));
    this.I = this.C = !1;
    this.o = null;
    this.j = 1;
    this.G = 0;
    this.D = null;
    p1(this)
  }
  r(o1, b1);

  function p1(a) {
    var b = a.g.w;
    TG(b, ["nVUlO"], function() {
      a.I = !0;
      d1(a)
    });
    if (!sD(a.g.g)) {
      var c = D(oD(a.g.g), 18, 1);
      TG(b, ["NSockf"], function() {
        1 == c ? q1(a) : d1(a)
      });
      2 == c && TG(b, ["mrK8ic"], function() {
        a.C || q1(a)
      })
    }
  }

  function q1(a) {
    var b = new ju;
    F(b, 2, !0);
    ku(b, 301);
    var c = new qB;
    sB(c, b);
    F(c, 1, 1);
    a.w(c).fa(pb)
  }
  o1.prototype.w = function(a, b) {
    var c = this;
    t.clearTimeout(this.G);
    this.G = 0;
    var d = bi();
    this.o = d.g;
    ei(this.o, function() {
      c.o = null;
      var k = oD(c.g.g),
        n = new ju;
      ku(n, 306);
      var p = new qB;
      F(p, 1, 1);
      sB(p, n);
      c.G = t.setTimeout(c.w.bind(c, p), Math.ceil(D(k, 7, 9E5) * Math.random()) + D(k, 4, 72E5))
    });
    var e = this.j;
    this.j = a.getType() || e;
    var f = !this.C;
    this.C = !0;
    var g = new qB;
    F(g, 1, this.j);
    sB(g, H(a, ju, 2));
    qQ(this.g).then(function(k) {
      return rQ(k, g, b)
    }).then(function(k) {
      c.D = null;
      c.g.sb.w(k);
      d.resolve()
    }, function(k) {
      c.j = e;
      F(k, 5, 2);
      f ? (Xz(k,
        1), k = new V("Initial app settings refresh failed.", k), c.g.Ic(k.ab), d1(c)) : (Xz(k, 2), k = new V("Error occurred while loading the latest set of apps.", k));
      c.D = k;
      d.reject(k)
    });
    return this.o
  };
  o1.prototype.U = ca(!1);

  function f1(a, b) {
    var c = b.j(),
      d = c.M,
      e = c.Oh,
      f = c.mf ? {
        lf: c.mf
      } : void 0;
    if (!r1(d)) return qQ(a.g).then(function(n) {
      return rQ(n, d, f)
    }).then(function(n) {
      b.g().callback(n)
    }, function(n) {
      b.g().V(yF(n))
    }), Wh();
    c = Wh();
    if (a.o)
      if (s1(a, d.getType())) var g = a.o;
      else c = g = new Rh(function(n, p) {
        a.o.then(function() {
          a.w(d, f).then(function() {
            return n()
          }, p)
        })
      });
    else !e && a.I && s1(a, d.getType()) && !a.D ? g = Wh() : g = a.w(d, f);
    var k = b.g();
    g.then(function() {
      var n = a.g.sb.A();
      k.callback(n)
    }, function(n) {
      k.V(n)
    });
    return c.then()
  }

  function r1(a) {
    var b = a.getType();
    return 1 == b || 2 == b || 4 == b ? (b = B(a, 4), a = B(a, 3), !(b && b.length) && !(a && a.length)) : !1
  }

  function s1(a, b) {
    return a.j == b || 4 == a.j || 2 == a.j && 1 == b
  };

  function t1(a) {
    b1.call(this);
    var b = this;
    this.g = a;
    this.C = new Mm(this);
    R(this, this.C);
    this.C.R(this.g.W, "WPi0i", function() {
      return b.dispatchEvent(new S("WPi0i"))
    });
    this.o = null;
    this.j = I(this.g.g, Ut, 41);
    this.w = bi();
    this.ef = new Set(Pe(oD(this.g.g), 30));
    u1(this)
  }
  r(t1, b1);

  function u1(a) {
    var b = a.g.w;
    TG(b, ["KDDche"], function() {
      return c1(a)
    });
    TG(b, ["px2C2c"], function() {
      UF(a.g.o, "drive.ds.sync.userprefs.UserPrefsManager", "All user prefs loaded.");
      a.j = null;
      a.w.resolve();
      a.w = null
    });
    var c = ["NSockf"],
      d = D(oD(a.g.g), 19, 1);
    1 != d && (c.push("OZvrNc"), 2 == d && TG(b, ["mrK8ic"], function() {
      UG(b, "OZvrNc")
    }));
    !E(a.g.g, 11, !1) && E(a.g.g, 24, !1) && (c.push("DEJoH"), t.setTimeout(function() {
      0 < s0(a.g.W).Wb().length || (b.g("NSockf") ? UG(b, "DEJoH") : TG(b, ["NSockf"], function() {
        UG(b, "DEJoH")
      }))
    }, 12E3));
    TG(b,
      c,
      function() {
        if (!b.g("px2C2c")) {
          var e = new CB,
            f = new ju;
          F(f, 2, !0);
          ku(f, 301);
          J(e, 1, f);
          v1(a, e).fa(function() {
            c1(a)
          })
        }
      })
  }
  t1.prototype.B = function() {
    var a = (this.g.w.g("px2C2c") ? "User" : "Local user") + " prefs detected: " + d0(this.g.W).length;
    UF(this.g.o, "drive.ds.sync.userprefs.UserPrefsManager", a);
    w1(this)
  };

  function v1(a, b, c) {
    var d = new XF(b, x1(a)),
      e = c ? {
        lf: c
      } : void 0;
    return qQ(a.g).then(function(f) {
      return rQ(f, d, e)
    }).then(function(f) {
      a.o = null;
      LR(a.g.W, f.Wb(), !0)
    }).then(null, function(f) {
      F(f, 5, 4);
      f = new V("Error fetching user preferences from server.", f);
      0 < a.A.ia() || a.g.Ic(f.ab);
      a.o = f;
      throw f;
    })
  }
  t1.prototype.W = function(a) {
    var b = this,
      c = a.j(),
      d = a.g();
    c.ef.forEach(function(e) {
      b.ef.has(e) || (c.Oh = !0, b.ef.add(e))
    });
    this.o ? d.V(this.o) : c.Oh ? ei(this.w ? this.w.g : v1(this, c.M, c.mf || void 0), function() {
      return y1(b, d)
    }) : y1(this, d)
  };

  function x1(a) {
    var b = [];
    a.ef.forEach(function(c) {
      b.push(c)
    });
    return b
  }

  function y1(a, b) {
    var c = s0(a.g.W);
    if (a.j && a.j.length) {
      var d = c.Wb().filter(function(e) {
        return !!a.j.find(function(f) {
          return Ze(f, H(e, Ut, 1))
        })
      });
      M(c, 3, d)
    }
    b.callback(c)
  }

  function w1(a) {
    var b = oD(a.g.g);
    t.setTimeout(function() {
      var c = new CB,
        d = new ju;
      ku(d, 306);
      J(c, 1, d);
      ei(v1(a, c).fa(Fa), function() {
        return w1(a)
      })
    }, Math.ceil(D(b, 7, 9E5) * Math.random()) + D(b, 5, 72E5))
  };

  function z1(a) {
    $P.call(this, a);
    this.O = bi();
    qQ(a);
    this.w = "drive.ds.sync.SyncedItemService"
  }
  r(z1, $P);
  m = z1.prototype;
  m.wh = function() {
    this.C = new j1(this.context);
    R(this, this.C);
    this.D = new o1(this.context);
    R(this, this.D);
    this.I = new t1(this.context);
    R(this, this.I)
  };
  m.Fi = function() {
    var a = this,
      b = ["hVFf7"];
    sD(this.context.g) && b.push("BNEDtc");
    TG(this.g, b, u(this.gi, this));
    TG(this.g, ["T8oKm", "ZA9qG"], u(this.mj, this));
    TG(this.g, ["T8oKm", "mrK8ic"], u(this.mj, this));
    this.Y.R(this.C, "WPi0i", this.Mg.bind(this, 1));
    this.Y.R(this.D, "P", this.Mg.bind(this, 2));
    this.Y.R(this.I, "WPi0i", this.Mg.bind(this, 4));
    TG(this.g, ["GZTDpc"], function() {
      return a.O.resolve()
    })
  };
  m.mj = function() {
    vi(aT(this.context), function(a) {
      a.start()
    })
  };
  m.Mg = function(a) {
    Db(CN, a) && this.dispatchEvent(new RN(a))
  };
  m.Ve = function() {
    this.context.xa.g()
  };
  m.Sf = function(a) {
    var b = this;
    return C0(this.context, a).then(function(c) {
      return c ? (b.context.A.j = a, b.context.C.Rd()) : Wh(!a)
    })
  };
  m.ed = function() {
    vi(aT(this.context), function(a) {
      a && A1(a)
    });
    hQ(this.context.ag)
  };
  m.Rf = function(a) {
    B1(a, this.context)
  };
  m.sync = function() {
    var a = this;
    return $h([this.context.xe.g, this.context.kj.g]).then(function() {
      return a.context.C.Rd()
    }).then()
  };
  m.Ie = function() {
    vi(aT(this.context), function(a) {
      a && a.dispose()
    });
    return $P.prototype.Ie.call(this)
  };

  function C1(a) {
    1 >= t.devicePixelRatio && F(a, 75, !1);
    if (a1(a)) return a = new rN(null, rE, a, 3), new Q0(a, a.I);
    F(a, 61, !1);
    var b = lD(qD(a)) ? 2 : 1;
    b = new x0(null, rE, a, b, void 0, void 0, void 0);
    return lD(qD(a)) ? new aQ(b) : new z1(b)
  };

  function D1(a, b) {
    this.g = b
  };

  function E1(a, b, c) {
    this.Ai = a;
    this.j = b.name || null;
    this.g = {};
    for (a = 0; a < c.length; a++) b = c[a], this.g[b.j] = b
  }

  function F1(a) {
    a = dc(a.g);
    Sb(a, function(b, c) {
      return b.j - c.j
    });
    return a
  }

  function G1(a, b) {
    return jc(a.g, function(c) {
      return c.A == b
    }) || null
  };

  function H1(a, b, c) {
    this.C = a;
    this.j = b;
    this.A = c.name;
    this.D = !!c.ss;
    this.g = c.K;
    this.o = c.type;
    this.B = !1;
    switch (this.g) {
      case 3:
      case 4:
      case 6:
      case 16:
      case 18:
      case 2:
      case 1:
        this.B = !0
    }
    this.w = c.defaultValue
  }

  function I1(a) {
    a.C.prototype.J()
  }

  function J1(a) {
    return 11 == a.g || 10 == a.g
  }
  H1.prototype.gb = l("D");

  function X() {
    this.j = {};
    this.o = this.J().g;
    this.g = null
  }

  function K1(a, b, c) {
    c = c || a;
    for (var d in a.j) {
      var e = Number(d);
      a.o[e] || b.call(c, e, a.j[d])
    }
  }
  m = X.prototype;
  m.has = function(a) {
    I1(a);
    this.J();
    return L1(this, a.j)
  };

  function M1(a, b) {
    I1(b);
    a.J();
    b = b.j;
    return a.o[b].gb() ? L1(a, b) ? a.j[b].length : 0 : L1(a, b) ? 1 : 0
  }
  m.get = function(a, b) {
    I1(a);
    this.J();
    return Y(this, a.j, b)
  };
  m.set = function(a, b) {
    I1(a);
    this.J();
    Z(this, a.j, b)
  };
  m.add = function(a, b) {
    I1(a);
    this.J();
    N1(this, a.j, b)
  };
  m.clear = function(a) {
    I1(a);
    this.J();
    a = a.j;
    delete this.j[a];
    this.g && delete this.g[a]
  };
  m.oa = function(a) {
    if (!a || this.constructor != a.constructor) return !1;
    for (var b = F1(this.J()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.j;
      if (L1(this, e) != L1(a, e)) return !1;
      if (L1(this, e)) {
        var f = J1(d),
          g = O1(this, e);
        e = O1(a, e);
        if (d.gb()) {
          if (g.length != e.length) return !1;
          for (d = 0; d < g.length; d++) {
            var k = g[d],
              n = e[d];
            if (f ? !k.oa(n) : k != n) return !1
          }
        } else if (f ? !g.oa(e) : g != e) return !1
      }
    }
    return !0
  };

  function P1(a, b) {
    for (var c = F1(a.J()), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.j;
      if (L1(b, f)) {
        a.g && delete a.g[e.j];
        var g = J1(e);
        if (e.gb()) {
          e = O1(b, f) || [];
          for (var k = 0; k < e.length; k++) N1(a, f, g ? e[k].clone() : e[k])
        } else e = O1(b, f), g ? (g = O1(a, f)) ? P1(g, e) : Z(a, f, e.clone()) : Z(a, f, e)
      }
    }
  }
  m.clone = function() {
    var a = new this.constructor;
    a != this && (a.j = {}, a.g && (a.g = {}), P1(a, this));
    return a
  };

  function L1(a, b) {
    return null != a.j[b]
  }

  function O1(a, b) {
    a = a.j[b];
    return null == a ? null : a
  }

  function Y(a, b, c) {
    var d = O1(a, b);
    return a.o[b].gb() ? d[c || 0] : d
  }

  function Q1(a, b) {
    if (L1(a, b)) a = Y(a, b, void 0);
    else a: {
      a = a.o[b];
      if (void 0 === a.w)
        if (b = a.o, b === Boolean) a.w = !1;
        else if (b === Number) a.w = 0;
      else if (b === String) a.w = a.B ? "0" : "";
      else {
        a = new b;
        break a
      }
      a = a.w
    }
    return a
  }

  function Z(a, b, c) {
    a.j[b] = c;
    a.g && (a.g[b] = c)
  }

  function N1(a, b, c) {
    a.j[b] || (a.j[b] = []);
    a.j[b].push(c);
    a.g && delete a.g[b]
  }

  function R1(a, b) {
    var c = [],
      d = b[0],
      e;
    for (e in b) 0 != e && c.push(new H1(a, e, b[e]));
    return new E1(a, d, c)
  };

  function S1() {
    X.call(this)
  }
  w(S1, X);
  var T1 = null;

  function U1() {
    X.call(this)
  }
  w(U1, X);
  var V1 = null;

  function W1(a) {
    var b = yk(t.location.href);
    Z(a, 1, b)
  }
  U1.prototype.getToken = function() {
    return Y(this, 3)
  };
  U1.prototype.setToken = function(a) {
    Z(this, 3, a)
  };
  S1.prototype.J = function() {
    var a = T1;
    a || (T1 = a = R1(S1, {
      0: {
        name: "BrowserChannelConfig",
        ha: "buzz.channel.proto.BrowserChannelConfig"
      },
      1: {
        name: "authuser",
        K: 4,
        type: Number
      },
      2: {
        name: "client_type",
        K: 9,
        type: String
      },
      3: {
        name: "init_delay_ms",
        K: 5,
        type: Number
      },
      4: {
        name: "service_override",
        K: 9,
        type: String
      },
      5: {
        name: "gapi_src",
        K: 9,
        type: String
      },
      6: {
        name: "property_id",
        K: 9,
        type: String
      },
      7: {
        name: "application_version",
        K: 9,
        type: String
      },
      8: {
        name: "retry_on_auth_error",
        K: 8,
        type: Boolean
      },
      9: {
        name: "gsid_servlet_path",
        K: 9,
        type: String
      },
      10: {
        name: "page_id",
        K: 9,
        type: String
      },
      11: {
        name: "initial_retry_delay_ms",
        K: 5,
        defaultValue: 1E4,
        type: Number
      },
      12: {
        name: "max_backoff_factor",
        K: 5,
        defaultValue: 180,
        type: Number
      },
      13: {
        name: "use_shared_channel",
        K: 8,
        type: Boolean
      },
      14: {
        name: "stable_connection_threshold_ms",
        K: 5,
        defaultValue: 3E5,
        type: Number
      }
    }));
    return a
  };
  S1.J = S1.prototype.J;
  U1.prototype.J = function() {
    var a = V1;
    a || (V1 = a = R1(U1, {
      0: {
        name: "AuthenticationParameters",
        ha: "buzz.channel.proto.AuthenticationParameters"
      },
      1: {
        name: "origin",
        K: 9,
        type: String
      },
      2: {
        name: "scheme",
        K: 5,
        type: Number
      },
      3: {
        name: "token",
        K: 9,
        type: String
      },
      4: {
        name: "authuser",
        K: 13,
        type: Number
      }
    }));
    return a
  };
  U1.J = U1.prototype.J;
  var X1 = {
      APISIDHASH: 1,
      SAPISIDHASH: 2,
      OAuth: 3
    },
    Y1 = {
      1: "APISIDHASH",
      2: "SAPISIDHASH",
      3: "OAuth"
    };

  function Z1(a) {
    var b = {},
      c = Y(a, 2);
    L1(a, 3) && $1.contains(c) && (b.Authorization = Y1[c] + " " + a.getToken(), a2.contains(c) && (b["X-Origin"] = Y(a, 1), b["X-Goog-AuthUser"] = Q1(a, 4)));
    return b
  }
  var $1 = new FL([1, 2, 3]),
    a2 = new FL([1, 2]);

  function b2() {
    var a = 8;
    a = void 0 === a ? 1 : a;
    this.max = 8;
    this.j = v();
    this.g = a
  }
  b2.prototype.update = function() {
    var a = v();
    a = Math.floor((a - this.j) / 3E5);
    this.g = Math.min(this.g + a, this.max);
    this.j += 3E5 * a
  };

  function c2(a, b) {
    var c = Math.random;
    this.o = a;
    this.A = b;
    this.w = c;
    this.reset()
  }
  c2.prototype.reset = function() {
    this.g = this.o;
    this.j = !1
  };

  function d2(a) {
    var b = 0;
    if (a.j) {
      b = Math.ceil(a.w() * a.g);
      var c = a.o * a.A;
      a.g <= c && (a.g *= 2, a.g > c && (a.g = c))
    }
    a.j = !0;
    return b
  };

  function e2() {};

  function f2() {}
  f2.prototype.o = function(a, b) {
    return J1(a) ? this.g(b) : "number" !== typeof b || isFinite(b) ? b : b.toString()
  };

  function g2(a, b, c) {
    b = new b.Ai;
    a.w(b, c);
    return b
  }
  f2.prototype.j = function(a, b) {
    if (J1(a)) return b instanceof X ? b : g2(this, a.o.prototype.J(), b);
    if (14 == a.g) return "string" === typeof b && h2.test(b) && (a = Number(b), 0 < a) ? a : b;
    if (!a.B) return b;
    a = a.o;
    if (a === String) {
      if ("number" === typeof b) return String(b)
    } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || h2.test(b))) return Number(b);
    return b
  };
  var h2 = /^-?[0-9]+$/;

  function i2(a, b) {
    this.A = a;
    this.B = b
  }
  w(i2, f2);
  i2.prototype.g = function(a) {
    for (var b = F1(a.J()), c = {}, d = 0; d < b.length; d++) {
      var e = b[d],
        f = e.j;
      switch (this.A) {
        case 1:
          f = e.A;
          break;
        case 2:
          f = Jd(e.A.replace(/_/g, "-"))
      }
      if (a.has(e))
        if (e.gb()) {
          var g = [];
          c[f] = g;
          for (f = 0; f < M1(a, e); f++) g.push(this.o(e, a.get(e, f)))
        } else c[f] = this.o(e, a.get(e))
    }
    K1(a, function(k, n) {
      c[k] = n
    });
    return c
  };
  i2.prototype.o = function(a, b) {
    return this.B && 8 == a.g && "boolean" === typeof b ? b ? 1 : 0 : i2.na.o.call(this, a, b)
  };
  i2.prototype.j = function(a, b) {
    return 8 == a.g && "number" === typeof b ? !!b : i2.na.j.call(this, a, b)
  };
  i2.prototype.w = function(a, b) {
    var c = a.J(),
      d;
    for (d in b) {
      var e = b[d],
        f = !/[^0-9]/.test(d);
      if (f) var g = c.g[parseInt(d, 10)] || null;
      else 2 == this.A && (d = String(d).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/\-/g, "_")), g = G1(c, d);
      if (g)
        if (g.gb())
          for (Ha(e), f = 0; f < e.length; f++) a.add(g, this.j(g, e[f]));
        else Ha(e), a.set(g, this.j(g, e));
      else f && (g = a, f = Number(d), g.J(), g.j[f] = e, g.g && delete g.g[f])
    }
  };

  function j2(a, b) {
    this.B = !!a;
    this.A = !!b
  }
  w(j2, f2);
  j2.prototype.w = function(a, b) {
    var c = new k2;
    c.parse(a, b.toString(), this.B) || c.getError()
  };
  j2.prototype.g = function(a) {
    var b = new l2;
    m2(this, a, b);
    return b.toString()
  };

  function m2(a, b, c) {
    var d = F1(b.J());
    vb(d, function(e) {
      if (b.has(e))
        for (var f = M1(b, e), g = 0; g < f; ++g) {
          n2(c, e.A);
          11 == e.g || 10 == e.g ? (n2(c, " {"), o2(c), c.g += 2) : n2(c, ": ");
          p2(this, b.get(e, g), e, c);
          if (11 == e.g || 10 == e.g) c.g -= 2, n2(c, "}");
          o2(c)
        }
    }, a);
    K1(b, function(e, f) {
      q2(this, e, f, c)
    }, a)
  }

  function q2(a, b, c, d) {
    if (null != c)
      if (Ha(c)) vb(c, function(f) {
        q2(this, b, f, d)
      }, a);
      else {
        if (Ka(c)) {
          n2(d, b);
          n2(d, " {");
          o2(d);
          d.g += 2;
          if (c instanceof X) m2(a, c, d);
          else
            for (var e in c) q2(a, Kd(e), c[e], d);
          d.g -= 2;
          n2(d, "}")
        } else "string" === typeof c && (c = Ad(c)), n2(d, b), n2(d, ": "), n2(d, c);
        o2(d)
      }
  }

  function p2(a, b, c, d) {
    switch (c.g) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 13:
      case 6:
      case 7:
      case 8:
      case 15:
      case 16:
      case 17:
      case 18:
        n2(d, b);
        break;
      case 12:
      case 9:
        b = Ad(b.toString());
        n2(d, b);
        break;
      case 14:
        if (!a.A) {
          var e = !1;
          Zb(c.o, function(f, g) {
            e || f != b || (n2(d, g), e = !0)
          })
        }
        e && !a.A || n2(d, b.toString());
        break;
      case 10:
      case 11:
        m2(a, b, d)
    }
  }

  function l2() {
    this.g = 0;
    this.j = [];
    this.o = !0
  }
  l2.prototype.toString = function() {
    return this.j.join("")
  };

  function n2(a, b) {
    if (a.o) {
      for (var c = 0; c < a.g; ++c) a.j.push(" ");
      a.o = !1
    }
    a.j.push(String(b))
  }

  function o2(a) {
    a.j.push("\n");
    a.o = !0
  }

  function r2(a) {
    this.w = a;
    this.o = 0;
    this.j = a;
    this.g = {
      type: s2,
      value: null
    }
  }
  var s2 = /---end---/,
    t2 = /^-?[a-zA-Z][a-zA-Z0-9_]*/,
    u2 = /^(0x[0-9a-f]+)|(([-])?[0-9][0-9]*(\.?[0-9]+)?(e[+-]?[0-9]+|[f])?)/,
    v2 = /^#.*/,
    w2 = /^"([^"\\]|\\.)*"/,
    x2 = /^\s/,
    y2 = {
      Mo: s2,
      mp: t2,
      Op: u2,
      jo: v2,
      Pp: /^{/,
      bo: /^}/,
      Rp: /^</,
      eo: /^>/,
      Qp: /^\[/,
      co: /^\]/,
      hr: w2,
      fo: /^:/,
      io: /^,/,
      Gq: /^;/,
      Vr: x2
    };
  r2.prototype.next = function() {
    for (; z2(this);) {
      var a = this.g.type;
      if (a != x2 && a != v2) return !0
    }
    this.g = {
      type: s2,
      value: null
    };
    return !1
  };

  function z2(a) {
    if (a.o >= a.w.length) return !1;
    var b = a.j,
      c = null;
    bc(y2, function(d) {
      if (c || d == s2) return !1;
      var e = d.exec(b);
      e && 0 == e.index && (c = {
        type: d,
        value: e[0]
      });
      return !!c
    });
    c && (a.g = c, a.o += c.value.length, a.j = a.j.substring(c.value.length));
    return !!c
  }

  function k2() {
    this.g = this.j = null;
    this.o = !1
  }
  k2.prototype.parse = function(a, b, c) {
    this.j = null;
    this.o = !!c;
    this.g = new r2(b);
    this.g.next();
    return A2(this, a, "")
  };
  k2.prototype.getError = l("j");

  function A2(a, b, c) {
    for (;
      ">" != a.g.g.value && "}" != a.g.g.value && a.g.g.type != s2;)
      if (!B2(a, b)) return !1;
    if (c) {
      if (!C2(a, c)) return !1
    } else a.g.g.type != s2 && (a.j = "Expected END token");
    return !0
  }

  function D2(a, b, c) {
    a = E2(a, c);
    if (null === a) return !1;
    c.gb() ? b.add(c, a) : b.set(c, a);
    return !0
  }

  function F2(a) {
    return -1 != a.indexOf(".") ? parseFloat(a) : Kd(a)
  }

  function E2(a, b) {
    switch (b.g) {
      case 1:
      case 2:
        if (b = G2(a, t2))
          if (b = /^-?inf(?:inity)?f?$/i.test(b) ? Infinity * (Cc(b, "-") ? -1 : 1) : /^nanf?$/i.test(b) ? NaN : null, null != b) return b;
      case 5:
      case 13:
      case 7:
      case 15:
      case 17:
        return (a = G2(a, u2)) ? F2(a) : null;
      case 3:
      case 4:
      case 6:
      case 16:
      case 18:
        return (a = G2(a, u2)) ? b.o == Number ? F2(a) : a : null;
      case 8:
        b = G2(a, t2);
        if (!b) return null;
        switch (b) {
          case "true":
            return !0;
          case "false":
            return !1;
          default:
            return a.j = "Unknown type for bool: " + b, null
        }
        case 14:
          if (a.g.g.type == u2) return (a = G2(a, u2)) ? F2(a) :
            null;
          var c = G2(a, t2);
          if (!c) return null;
          b = b.o[c];
          return null == b ? (a.j = "Unknown enum value: " + c, null) : b;
        case 12:
        case 9:
          if (b = G2(a, w2)) {
            for (c = JSON.parse(b).toString(); a.g.g.type == w2;) b = G2(a, w2), c += JSON.parse(b).toString();
            a = c
          } else a = null;
          return a
    }
  }

  function H2(a) {
    I2(a, ":");
    if (I2(a, "[")) {
      for (;;) {
        a.g.next();
        if (I2(a, "]")) break;
        if (!C2(a, ",")) return !1
      }
      return !0
    }
    if (I2(a, "<")) return A2(a, null, ">");
    if (I2(a, "{")) return A2(a, null, "}");
    a.g.next();
    return !0
  }

  function B2(a, b) {
    var c = G2(a, t2);
    if (!c) return a.j = "Missing field name", !1;
    var d = null;
    b && (d = G1(b.J(), c.toString()));
    if (null == d) {
      if (a.o) return H2(a);
      a.j = "Unknown field: " + c;
      return !1
    }
    if (11 == d.g || 10 == d.g) {
      I2(a, ":");
      a: {
        c = d;
        if (I2(a, "<")) d = ">";
        else {
          if (!C2(a, "{")) {
            b = !1;
            break a
          }
          d = "}"
        }
        var e = new(c.o.prototype.J().Ai);A2(a, e, d) ? (c.gb() ? b.add(c, e) : b.set(c, e), b = !0) : b = !1
      }
      if (!b) return !1
    } else {
      if (!C2(a, ":")) return !1;
      if (d.gb() && I2(a, "["))
        for (;;) {
          if (!D2(a, b, d)) return !1;
          if (I2(a, "]")) break;
          if (!C2(a, ",")) return !1
        } else if (!D2(a,
            b, d)) return !1
    }
    I2(a, ",") || I2(a, ";");
    return !0
  }

  function I2(a, b) {
    return a.g.g.value == b ? (a.g.next(), !0) : !1
  }

  function G2(a, b) {
    if (a.g.g.type != b) return a.j = "Expected token type: " + b, null;
    b = a.g.g.value;
    a.g.next();
    return b
  }

  function C2(a, b) {
    return I2(a, b) ? !0 : (a.j = 'Expected token "' + b + '"', !1)
  };
  var J2 = new i2(0),
    K2 = new i2(2),
    L2 = new j2;

  function M2(a) {
    a = J2.g(a);
    return Pk(a)
  }
  var N2 = JSON.parse;

  function O2(a, b) {
    try {
      var c = N2(b)
    } catch (e) {
      return null
    }
    try {
      var d = g2(K2, a, c)
    } catch (e) {
      return null
    }
    return null == d ? null : d
  }
  X.prototype.toString = function() {
    return L2.g(this)
  };

  function P2(a) {
    var b = Eg(document, a);
    null == b && (b = Ig("DIV", {
      id: a,
      style: "display:none"
    }), a = document, a = a.querySelectorAll && a.querySelector ? a.querySelectorAll("BODY") : a.getElementsByTagName("BODY"), a[0].appendChild(b));
    return b
  };

  function Q2() {
    T.call(this);
    this.o = new Mm(this);
    Fj && (Gj ? this.o.R(Hj ? document.body : window, ["online", "offline"], this.w) : (this.A = this.g(), this.j = new Vk(250), this.o.R(this.j, "tick", this.B), this.j.start()))
  }
  w(Q2, T);
  Q2.prototype.g = function() {
    return Fj ? navigator.onLine : !0
  };
  Q2.prototype.B = function() {
    var a = this.g();
    a != this.A && (this.A = a, this.w())
  };
  Q2.prototype.w = function() {
    this.dispatchEvent(this.g() ? "online" : "offline")
  };
  Q2.prototype.N = function() {
    Q2.na.N.call(this);
    this.o.dispose();
    this.o = null;
    this.j && (this.j.dispose(), this.j = null)
  };

  function R2(a, b, c, d) {
    this.g = a;
    this.w = b;
    this.D = c;
    this.C = d || 1;
    this.A = 45E3;
    this.o = new Mm(this);
    this.j = new Vk;
    this.j.setInterval(250)
  }
  m = R2.prototype;
  m.Mc = null;
  m.Cb = !1;
  m.Cd = null;
  m.oh = null;
  m.Ad = null;
  m.rd = null;
  m.gc = null;
  m.xc = null;
  m.Qc = null;
  m.Na = null;
  m.qe = 0;
  m.Db = null;
  m.Df = null;
  m.sc = null;
  m.Yd = -1;
  m.oj = !0;
  m.Dc = !1;
  m.pg = 0;
  m.nf = null;
  var S2 = {},
    T2 = {};
  m = R2.prototype;
  m.setTimeout = ba("A");

  function V2(a, b, c) {
    a.rd = 1;
    a.gc = Nl(b.clone());
    a.Qc = c;
    a.B = !0;
    W2(a, null)
  }

  function X2(a, b, c, d, e) {
    a.rd = 1;
    a.gc = Nl(b.clone());
    a.Qc = null;
    a.B = c;
    e && (a.oj = !1);
    W2(a, d)
  }

  function W2(a, b) {
    a.Ad = v();
    Y2(a);
    a.xc = a.gc.clone();
    Ll(a.xc, "t", a.C);
    a.qe = 0;
    a.Na = a.g.lg(a.g.ne() ? b : null);
    0 < a.pg && (a.nf = new DL(u(a.Jj, a, a.Na), a.pg));
    a.o.R(a.Na, "readystatechange", a.Hm);
    b = a.Mc ? nc(a.Mc) : {};
    a.Qc ? (a.Df = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Na.send(a.xc, a.Df, a.Qc, b)) : (a.Df = "GET", a.oj && !Sd && (b.Connection = "close"), a.Na.send(a.xc, a.Df, null, b));
    a.g.Ab(1)
  }
  m.Hm = function(a) {
    a = a.target;
    var b = this.nf;
    b && 3 == ll(a) ? b.Ud() : this.Jj(a)
  };
  m.Jj = function(a) {
    try {
      if (a == this.Na) a: {
        var b = ll(this.Na),
          c = this.Na.j,
          d = this.Na.S();
        if (Pd && !ge(10) || Sd && !fe("420+")) {
          if (4 > b) break a
        } else if (3 > b || 3 == b && !Od && !pl(this.Na)) break a;this.Dc || 4 != b || 7 == c || (8 == c || 0 >= d ? this.g.Ab(3) : this.g.Ab(2));Z2(this);
        var e = this.Na.S();this.Yd = e;
        var f = pl(this.Na);
        (this.Cb = 200 == e) ? (4 == b && $2(this), this.B ? (a3(this, b, f), Od && this.Cb && 3 == b && (this.o.R(this.j, "tick", this.Dm), this.j.start())) : (v3(f), w3(this, f)), this.Cb && !this.Dc && (4 == b ? this.g.jf(this) : (this.Cb = !1, Y2(this)))) : (400 ==
          e && 0 < f.indexOf("Unknown SID") ? (this.sc = 3, x3(13)) : (this.sc = 0, x3(14)), $2(this), y3(this))
      }
    } catch (g) {} finally {}
  };

  function a3(a, b, c) {
    for (var d = !0; !a.Dc && a.qe < c.length;) {
      var e = z3(a, c);
      if (e == T2) {
        4 == b && (a.sc = 4, x3(15), d = !1);
        v3(null);
        break
      } else if (e == S2) {
        a.sc = 4;
        x3(16);
        v3(c);
        d = !1;
        break
      } else v3(e), w3(a, e)
    }
    4 == b && 0 == c.length && (a.sc = 1, x3(17), d = !1);
    a.Cb = a.Cb && d;
    d || (v3(c), $2(a), y3(a))
  }
  m.Dm = function() {
    var a = ll(this.Na),
      b = pl(this.Na);
    this.qe < b.length && (Z2(this), a3(this, a, b), this.Cb && 4 != a && Y2(this))
  };

  function z3(a, b) {
    var c = a.qe,
      d = b.indexOf("\n", c);
    if (-1 == d) return T2;
    c = Number(b.substring(c, d));
    if (isNaN(c)) return S2;
    d += 1;
    if (d + c > b.length) return T2;
    b = b.substr(d, c);
    a.qe = d + c;
    return b
  }

  function A3(a, b) {
    a.Ad = v();
    Y2(a);
    var c = b ? window.location.hostname : "";
    a.xc = a.gc.clone();
    U(a.xc, "DOMAIN", c);
    U(a.xc, "t", a.C);
    try {
      a.Db = new ActiveXObject("htmlfile")
    } catch (g) {
      $2(a);
      a.sc = 7;
      x3(22);
      y3(a);
      return
    }
    var d = "<html><body>";
    if (b) {
      b = "";
      for (var e = 0; e < c.length; e++) {
        var f = c.charAt(e);
        b = "<" == f ? b + "\\x3c" : ">" == f ? b + "\\x3e" : b + Bd(f)
      }
      d += '<script>document.domain="' + b + '"\x3c/script>'
    }
    c = pd(d + "</body></html>");
    a.Db.open();
    a.Db.write(od(c));
    a.Db.close();
    a.Db.parentWindow.m = u(a.ym, a);
    a.Db.parentWindow.d = u(a.dj, a, !0);
    a.Db.parentWindow.rpcClose = u(a.dj, a, !1);
    c = a.Db.createElement("DIV");
    a.Db.parentWindow.document.body.appendChild(c);
    d = a.xc.toString();
    d instanceof Qc || (d = "object" == typeof d && d.Nc ? d.qc() : String(d), Wc.test(d) || (d = "about:invalid#zClosurez"), d = new Qc(Rc, d));
    d = wd(Tc(d));
    d = pd('<iframe src="' + d + '"></iframe>');
    if (rd())
      for (; c.lastChild;) c.removeChild(c.lastChild);
    c.innerHTML = od(d);
    a.g.Ab(1)
  }
  m.ym = function(a) {
    B3(u(this.xm, this, a), 0)
  };
  m.xm = function(a) {
    this.Dc || (v3(a), Z2(this), w3(this, a), Y2(this))
  };
  m.dj = function(a) {
    B3(u(this.wm, this, a), 0)
  };
  m.wm = function(a) {
    this.Dc || ($2(this), this.Cb = a, this.g.jf(this), this.g.Ab(4))
  };
  m.cancel = function() {
    this.Dc = !0;
    $2(this)
  };

  function Y2(a) {
    a.oh = v() + a.A;
    C3(a, a.A)
  }

  function C3(a, b) {
    if (null != a.Cd) throw Error("WatchDog timer not null");
    a.Cd = B3(u(a.Am, a), b)
  }

  function Z2(a) {
    a.Cd && (t.clearTimeout(a.Cd), a.Cd = null)
  }
  m.Am = function() {
    this.Cd = null;
    var a = v();
    0 <= a - this.oh ? (2 != this.rd && this.g.Ab(3), $2(this), this.sc = 2, x3(18), y3(this)) : C3(this, this.oh - a)
  };

  function y3(a) {
    a.g.oi() || a.Dc || a.g.jf(a)
  }

  function $2(a) {
    Z2(a);
    jj(a.nf);
    a.nf = null;
    a.j.stop();
    Pm(a.o);
    if (a.Na) {
      var b = a.Na;
      a.Na = null;
      b.abort();
      b.dispose()
    }
    a.Db && (a.Db = null)
  }

  function w3(a, b) {
    try {
      a.g.kf(a, b), a.g.Ab(4)
    } catch (c) {}
  };

  function v3(a) {
    if (a && "y2f%" != a) try {
      var b = JSON.parse(a);
      if (b)
        for (a = 0; a < b.length; a++)
          if (Ha(b[a])) {
            var c = b[a];
            if (!(2 > c.length)) {
              var d = c[1];
              if (Ha(d) && !(1 > d.length)) {
                var e = d[0];
                if ("noop" != e && "stop" != e)
                  for (var f = 1; f < d.length; f++) d[f] = ""
              }
            }
          } Pk(b)
    } catch (g) {}
  };

  function D3(a, b, c, d, e) {
    if (0 == d) c(!1);
    else {
      var f = e || 0;
      d--;
      E3(a, b, function(g) {
        g ? c(!0) : t.setTimeout(function() {
          D3(a, b, c, d, f)
        }, f)
      })
    }
  }

  function E3(a, b, c) {
    var d = new Image;
    d.onload = function() {
      try {
        F3(d), c(!0)
      } catch (e) {}
    };
    d.onerror = function() {
      try {
        F3(d), c(!1)
      } catch (e) {}
    };
    d.onabort = function() {
      try {
        F3(d), c(!1)
      } catch (e) {}
    };
    d.ontimeout = function() {
      try {
        F3(d), c(!1)
      } catch (e) {}
    };
    t.setTimeout(function() {
      if (d.ontimeout) d.ontimeout()
    }, b);
    sd(d, a)
  }

  function F3(a) {
    a.onload = null;
    a.onerror = null;
    a.onabort = null;
    a.ontimeout = null
  };

  function G3() {}
  G3.prototype.stringify = function(a) {
    return t.JSON.stringify(a, void 0)
  };
  G3.prototype.parse = function(a) {
    return t.JSON.parse(a, void 0)
  };

  function H3(a) {
    this.g = a;
    this.j = new G3
  }
  m = H3.prototype;
  m.ng = null;
  m.M = null;
  m.pf = !1;
  m.Zh = null;
  m.Le = null;
  m.Eg = null;
  m.og = null;
  m.pb = null;
  m.Yb = -1;
  m.Xd = null;
  m.Id = null;
  m.connect = function(a) {
    this.og = a;
    a = I3(this.g, null, this.og);
    x3(3);
    this.Zh = v();
    var b = this.g.H;
    null != b ? (this.Xd = b[0], (this.Id = b[1]) ? (this.pb = 1, J3(this)) : (this.pb = 2, K3(this))) : (Ll(a, "MODE", "init"), this.M = new R2(this, void 0, void 0, void 0), this.M.Mc = this.ng, X2(this.M, a, !1, null, !0), this.pb = 0)
  };

  function J3(a) {
    var b = I3(a.g, a.Id, "/mail/images/cleardot.gif");
    Nl(b);
    D3(b.toString(), 5E3, u(a.tk, a), 3, 2E3);
    a.Ab(1)
  }
  m.tk = function(a) {
    if (a) this.pb = 2, K3(this);
    else {
      x3(4);
      var b = this.g;
      b.Mb = b.kc.Yb;
      L3(b, 9)
    }
    a && this.Ab(2)
  };

  function K3(a) {
    var b = a.g.I;
    if (null != b) x3(5), b ? (x3(11), M3(a.g, a, !1)) : (x3(12), M3(a.g, a, !0));
    else if (a.M = new R2(a, void 0, void 0, void 0), a.M.Mc = a.ng, b = a.g, b = I3(b, b.ne() ? a.Xd : null, a.og), x3(5), !Pd || ge(10)) Ll(b, "TYPE", "xmlhttp"), X2(a.M, b, !1, a.Xd, !1);
    else {
      Ll(b, "TYPE", "html");
      var c = a.M;
      a = !!a.Xd;
      c.rd = 3;
      c.gc = Nl(b.clone());
      A3(c, a)
    }
  }
  m.lg = function(a) {
    return this.g.lg(a)
  };
  m.abort = function() {
    this.M && (this.M.cancel(), this.M = null);
    this.Yb = -1
  };
  m.oi = ca(!1);
  m.kf = function(a, b) {
    this.Yb = a.Yd;
    if (0 == this.pb)
      if (b) {
        try {
          var c = this.j.parse(b)
        } catch (d) {
          a = this.g;
          a.Mb = this.Yb;
          L3(a, 2);
          return
        }
        this.Xd = c[0];
        this.Id = c[1]
      } else a = this.g, a.Mb = this.Yb, L3(a, 2);
    else if (2 == this.pb)
      if (this.pf) x3(7), this.Eg = v();
      else if ("11111" == b) {
      if (x3(6), this.pf = !0, this.Le = v(), a = this.Le - this.Zh, !Pd || ge(10) || 500 > a) this.Yb = 200, this.M.cancel(), x3(12), M3(this.g, this, !0)
    } else x3(8), this.Le = this.Eg = v(), this.pf = !1
  };
  m.jf = function() {
    this.Yb = this.M.Yd;
    if (this.M.Cb) 0 == this.pb ? this.Id ? (this.pb = 1, J3(this)) : (this.pb = 2, K3(this)) : 2 == this.pb && ((!Pd || ge(10) ? !this.pf : 200 > this.Eg - this.Le) ? (x3(11), M3(this.g, this, !1)) : (x3(12), M3(this.g, this, !0)));
    else {
      0 == this.pb ? x3(9) : 2 == this.pb && x3(10);
      var a = this.g;
      a.Mb = this.Yb;
      L3(a, 2)
    }
  };
  m.ne = function() {
    return this.g.ne()
  };
  m.Ab = function(a) {
    this.g.Ab(a)
  };

  function N3(a, b, c, d) {
    this.D = a || null;
    this.g = 1;
    this.j = [];
    this.o = [];
    this.A = new G3;
    this.H = b || null;
    this.I = null != c ? c : null;
    this.B = d || !1
  }

  function O3(a, b) {
    this.g = a;
    this.map = b;
    this.context = null
  }
  m = N3.prototype;
  m.qd = null;
  m.Sd = null;
  m.cb = null;
  m.ya = null;
  m.mg = null;
  m.Me = null;
  m.sh = null;
  m.Te = null;
  m.fe = 0;
  m.om = 0;
  m.Ya = null;
  m.oc = null;
  m.Tb = null;
  m.Fc = null;
  m.kc = null;
  m.mh = null;
  m.af = -1;
  m.vi = -1;
  m.Mb = -1;
  m.kd = 0;
  m.Zc = 0;
  m.Af = !1;
  m.Ec = 8;
  var P3 = new T;

  function Q3(a, b) {
    S.call(this, "statevent", a);
    this.g = b
  }
  w(Q3, S);

  function R3(a, b, c) {
    S.call(this, "timingevent", a);
    this.size = b;
    this.rtt = c
  }
  w(R3, S);

  function S3(a) {
    S.call(this, "serverreachability", a)
  }
  w(S3, S);
  m = N3.prototype;
  m.connect = function(a, b, c, d, e) {
    x3(0);
    this.mg = b;
    this.Sd = c || {};
    d && void 0 !== e && (this.Sd.OSID = d, this.Sd.OAID = e);
    this.B ? (B3(u(this.vh, this, a), 100), T3(this)) : this.vh(a)
  };

  function U3(a) {
    V3(a);
    if (3 == a.g) {
      var b = a.fe++,
        c = a.Me.clone();
      U(c, "SID", a.w);
      U(c, "RID", b);
      U(c, "TYPE", "terminate");
      W3(a, c);
      b = new R2(a, a.w, b, void 0);
      b.rd = 2;
      b.gc = Nl(c.clone());
      sd(new Image, b.gc.toString());
      b.Ad = v();
      Y2(b)
    }
    X3(a)
  }
  m.vh = function(a) {
    this.kc = new H3(this);
    this.kc.ng = this.qd;
    this.kc.j = this.A;
    this.kc.connect(a)
  };

  function T3(a) {
    a.Pk(1, 0);
    a.Me = I3(a, null, a.mg);
    Y3(a)
  }

  function V3(a) {
    a.kc && (a.kc.abort(), a.kc = null);
    a.ya && (a.ya.cancel(), a.ya = null);
    a.Tb && (t.clearTimeout(a.Tb), a.Tb = null);
    Z3(a);
    a.cb && (a.cb.cancel(), a.cb = null);
    a.oc && (t.clearTimeout(a.oc), a.oc = null)
  }
  m.oi = function() {
    return 0 == this.g
  };

  function Y3(a) {
    a.cb || a.oc || (a.oc = B3(u(a.cj, a), 0), a.kd = 0)
  }
  m.cj = function(a) {
    this.oc = null;
    if (1 == this.g) {
      if (!a) {
        this.fe = Math.floor(1E5 * Math.random());
        a = this.fe++;
        var b = new R2(this, "", a, void 0);
        b.Mc = this.qd;
        var c = $3(this),
          d = this.Me.clone();
        U(d, "RID", a);
        this.D && U(d, "CVER", this.D);
        W3(this, d);
        V2(b, d, c);
        this.cb = b;
        this.g = 2
      }
    } else 3 == this.g && (a ? a4(this, a) : 0 == this.j.length || this.cb || a4(this))
  };

  function a4(a, b) {
    if (b)
      if (6 < a.Ec) {
        a.j = a.o.concat(a.j);
        a.o.length = 0;
        var c = a.fe - 1;
        b = $3(a)
      } else c = b.D, b = b.Qc;
    else c = a.fe++, b = $3(a);
    var d = a.Me.clone();
    U(d, "SID", a.w);
    U(d, "RID", c);
    U(d, "AID", a.af);
    W3(a, d);
    c = new R2(a, a.w, c, a.kd + 1);
    c.Mc = a.qd;
    c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
    a.cb = c;
    V2(c, d, b)
  }

  function W3(a, b) {
    a.Ya && (a = a.Ya.Ph()) && Zb(a, function(c, d) {
      U(b, d, c)
    })
  }

  function $3(a) {
    var b = Math.min(a.j.length, 1E3),
      c = ["count=" + b];
    if (6 < a.Ec && 0 < b) {
      var d = a.j[0].g;
      c.push("ofs=" + d)
    } else d = 0;
    for (var e = 0; e < b; e++) {
      var f = a.j[e].g,
        g = a.j[e].map;
      f = 6 >= a.Ec ? e : f - d;
      try {
        Zb(g, function(k, n) {
          c.push("req" + f + "_" + n + "=" + encodeURIComponent(k))
        })
      } catch (k) {
        c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
      }
    }
    a.o = a.o.concat(a.j.splice(0, b));
    return c.join("&")
  }

  function b4(a) {
    a.ya || a.Tb || (a.C = 1, a.Tb = B3(u(a.bj, a), 0), a.Zc = 0)
  }

  function c4(a) {
    if (a.ya || a.Tb || 3 <= a.Zc) return !1;
    a.C++;
    a.Tb = B3(u(a.bj, a), d4(a, a.Zc));
    a.Zc++;
    return !0
  }
  m.bj = function() {
    this.Tb = null;
    this.ya = new R2(this, this.w, "rpc", this.C);
    this.ya.Mc = this.qd;
    this.ya.pg = 0;
    var a = this.sh.clone();
    U(a, "RID", "rpc");
    U(a, "SID", this.w);
    U(a, "CI", this.mh ? "0" : "1");
    U(a, "AID", this.af);
    W3(this, a);
    if (!Pd || ge(10)) U(a, "TYPE", "xmlhttp"), X2(this.ya, a, !0, this.Te, !1);
    else {
      U(a, "TYPE", "html");
      var b = this.ya,
        c = !!this.Te;
      b.rd = 3;
      b.gc = Nl(a.clone());
      A3(b, c)
    }
  };

  function M3(a, b, c) {
    a.mh = c;
    a.Mb = b.Yb;
    a.B || T3(a)
  }
  m.kf = function(a, b) {
    if (0 != this.g && (this.ya == a || this.cb == a))
      if (this.Mb = a.Yd, this.cb == a && 3 == this.g)
        if (7 < this.Ec) {
          try {
            var c = this.A.parse(b)
          } catch (d) {
            c = null
          }
          if (Ha(c) && 3 == c.length)
            if (a = c, 0 == a[0]) a: {
              if (!this.Tb) {
                if (this.ya)
                  if (this.ya.Ad + 3E3 < this.cb.Ad) Z3(this), this.ya.cancel(), this.ya = null;
                  else break a;
                c4(this);
                x3(19)
              }
            }
          else this.vi = a[1], 0 < this.vi - this.af && 37500 > a[2] && this.mh && 0 == this.Zc && !this.Fc && (this.Fc = B3(u(this.rm, this), 6E3));
          else L3(this, 11)
        } else "y2f%" != b && L3(this, 11);
    else if (this.ya == a && Z3(this),
      !Dc(b))
      for (c = this.A.parse(b), Ha(c), a = c, b = 0; b < a.length; b++) c = a[b], this.af = c[0], c = c[1], 2 == this.g ? "c" == c[0] ? (this.w = c[1], this.Te = c[2], c = c[3], null != c ? this.Ec = c : this.Ec = 6, this.g = 3, this.Ya && this.Ya.Se(this), this.sh = I3(this, this.ne() ? this.Te : null, this.mg), b4(this)) : "stop" == c[0] && L3(this, 7) : 3 == this.g && ("stop" == c[0] ? L3(this, 7) : "noop" != c[0] && this.Ya && this.Ya.Re(this, c), this.Zc = 0)
  };
  m.rm = function() {
    null != this.Fc && (this.Fc = null, this.ya.cancel(), this.ya = null, c4(this), x3(20))
  };

  function Z3(a) {
    null != a.Fc && (t.clearTimeout(a.Fc), a.Fc = null)
  }
  m.jf = function(a) {
    if (this.ya == a) {
      Z3(this);
      this.ya = null;
      var b = 2
    } else if (this.cb == a) this.cb = null, b = 1;
    else return;
    this.Mb = a.Yd;
    if (0 != this.g)
      if (a.Cb) 1 == b ? (b = v() - a.Ad, P3.dispatchEvent(new R3(P3, a.Qc ? a.Qc.length : 0, b, this.kd)), Y3(this), this.o.length = 0) : b4(this);
      else {
        var c = a.sc,
          d;
        if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Mb)) {
          if (d = 1 == b) this.cb || this.oc || 1 == this.g || 2 <= this.kd ? d = !1 : (this.oc = B3(u(this.cj, this, a), d4(this, this.kd)), this.kd++, d = !0);
          d = !(d || 2 == b && c4(this))
        }
        if (d) switch (c) {
          case 1:
            L3(this, 5);
            break;
          case 4:
            L3(this,
              10);
            break;
          case 3:
            L3(this, 6);
            break;
          case 7:
            L3(this, 12);
            break;
          default:
            L3(this, 2)
        }
      }
  };

  function d4(a, b) {
    var c = 5E3 + Math.floor(1E4 * Math.random());
    a.Ya || (c *= 2);
    return c * b
  }
  m.Pk = function(a) {
    if (!Db(arguments, this.g)) throw Error("Unexpected channel state: " + this.g);
  };

  function L3(a, b) {
    if (2 == b || 9 == b) {
      var c = null;
      a.Ya && (c = null);
      var d = u(a.Pm, a);
      c || (c = new wl("//www.google.com/images/cleardot.gif"), Nl(c));
      E3(c.toString(), 1E4, d)
    } else x3(2);
    e4(a, b)
  }
  m.Pm = function(a) {
    a ? x3(2) : (x3(1), e4(this, 8))
  };

  function e4(a, b) {
    a.g = 0;
    a.Ya && a.Ya.Qe(a, b);
    X3(a);
    V3(a)
  }

  function X3(a) {
    a.g = 0;
    a.Mb = -1;
    if (a.Ya)
      if (0 == a.o.length && 0 == a.j.length) a.Ya.Wd(a);
      else {
        var b = Mb(a.o),
          c = Mb(a.j);
        a.o.length = 0;
        a.j.length = 0;
        a.Ya.Wd(a, b, c)
      }
  }

  function I3(a, b, c) {
    var d = Ol(c);
    if ("" != d.g) b && yl(d, b + "." + d.g), zl(d, d.j);
    else {
      var e = window.location;
      d = Pl(e.protocol, null, b ? b + "." + e.hostname : e.hostname, +e.port, c)
    }
    a.Sd && Zb(a.Sd, function(f, g) {
      U(d, g, f)
    });
    U(d, "VER", a.Ec);
    W3(a, d);
    return d
  }
  m.lg = function(a) {
    if (a && !this.Af) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new Zk;
    a.C = this.Af;
    return a
  };

  function B3(a, b) {
    if (!Ja(a)) throw Error("Fn must not be null and must be a function");
    return t.setTimeout(function() {
      a()
    }, b)
  }
  m.Ab = function(a) {
    P3.dispatchEvent(new S3(P3, a))
  };

  function x3(a) {
    P3.dispatchEvent(new Q3(P3, a))
  }
  m.ne = function() {
    return this.Af || !(!Pd || ge(10))
  };
  new hn;

  function f4() {}
  m = f4.prototype;
  m.Se = h();
  m.Re = h();
  m.Qe = h();
  m.Wd = h();
  m.Ph = function() {
    return {}
  };

  function g4(a, b, c) {
    return new h4(a, b, c)
  }

  function i4(a, b, c, d) {
    d = void 0 === d ? g4 : d;
    this.C = a;
    this.Y = b;
    this.config = c;
    this.I = d;
    this.xb = !1;
    this.o = this.state = 0;
    this.G = new Mm;
    this.A = new c2(6E4, 30);
    this.D = new c2(250, 7200);
    this.$ = new U1;
    this.H = new b2;
    this.w = -1;
    this.j = 0;
    Y(c, 2);
    this.G.R(P3, "statevent", this.wc.bind(this));
    this.Jb = new c2(Q1(c, 11), Q1(c, 12));
    d2(this.A);
    d2(this.D)
  }
  r(i4, f4);

  function j4(a, b) {
    b !== a.state && (a.state = b, a.o++);
    return a.o
  }
  m = i4.prototype;
  m.Rb = function(a) {
    var b = !this.$ || this.$.getToken() !== a.getToken();
    this.$ = a.clone();
    this.g && (a = Z1(this.$), this.g.qd = a);
    b && (b = this.j, this.j = 1, 2 === b && this.Bd())
  };
  m.start = function() {
    j4(this, 1);
    this.open(this.Jb)
  };
  m.Aj = h();
  m.open = function(a) {
    var b = this;
    if (1 === this.state) {
      j4(this, 2);
      a = d2(a) + Q1(this.config, 3);
      Z(this.config, 3, 0);
      var c = this.o;
      Wk(function() {
        k4(b, c)
      }, a)
    }
  };
  m.Bd = function() {
    switch (this.state) {
      case 1:
      case 2:
        var a = this.H;
        a.update();
        0 < a.g ? (a.g--, a = !0) : a = !1;
        a && (2 === this.j && (this.j = 0), k4(this, this.o))
    }
  };
  m.Jl = function(a) {
    switch (a.g) {
      case 1:
      case 2:
        U3(a);
        l4(this.Y, 1001);
        a.F();
        break;
      case 3:
        U3(a), l4(this.Y, 1002), a.F()
    }
  };

  function k4(a, b) {
    Y(a.config, 2);
    if (a.o === b) {
      var c = j4(a, 3);
      a.g = a.I("5", a.Jl.bind(a), c);
      a.g.Ya = a;
      5 === Y(a.$, 2) ? a.g.Af = !0 : (b = Z1(a.$), a.g.qd = b);
      2 === a.j ? (m4(a.Y, new D1(0, 401)), U3(a.g)) : (a.j = 0, Y(a.config, 9) ? n4(Y(a.config, 9), function(d) {
        a.o === c && (d && (a.B = d), o4(a))
      }) : o4(a))
    }
  }

  function o4(a) {
    var b = a.C + "/cbp",
      c = a.C + "/bind",
      d = {};
    p4(a, d);
    a.g.connect(b, c, d)
  }

  function p4(a, b) {
    L1(a.$, 4) && (b.authuser = Y(a.$, 4));
    4 === Y(a.$, 2) && (b.app_auth = a.$.getToken());
    b.ctype = Y(a.config, 2);
    L1(a.config, 4) && (b.service = Y(a.config, 4));
    L1(a.config, 6) && (b.prop = Y(a.config, 6));
    L1(a.config, 7) && (b.appver = Y(a.config, 7));
    a.B && (b.gsessionid = a.B);
    L1(a.config, 10) && (b.pageId = Y(a.config, 10));
    Y(a.config, 13) && (b.sw = !0)
  }
  m.Ph = function() {
    var a = {};
    p4(this, a);
    return a
  };
  m.close = function() {
    j4(this, 1);
    this.g && U3(this.g)
  };
  m.Pi = function(a) {
    if (this.g) {
      var b = this.g;
      if (0 == b.g) throw Error("Invalid operation: sending map when state is closed");
      1E3 == b.j.length && b.A.stringify(a);
      b.j.push(new O3(b.om++, a));
      2 != b.g && 3 != b.g || Y3(b)
    }
  };
  m.Se = function(a) {
    var b = this;
    if (a === this.g) {
      j4(this, 4);
      this.A.reset();
      d2(this.A);
      var c = this.o;
      Wk(function() {
        b.o === c && b.Jb.reset()
      }, Q1(this.config, 14))
    }
  };
  m.Re = function(a, b) {
    if (a === this.g) {
      a = [];
      b = q(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = c.gsid;
        d ? this.B = d : (d = c.osc) ? 400 <= d && 499 >= d && (this.w = d, m4(this.Y, new D1(0, d)), void 0 !== this.g && U3(this.g)) : a.push(c)
      }
      0 < a.length && q4(this.Y, a)
    }
  };
  m.Qe = function(a) {
    a === this.g && (this.w = a.Mb, m4(this.Y, new D1(0, this.w)))
  };
  m.Wd = function(a) {
    if (a === this.g) {
      a = this.state;
      j4(this, 1);
      if (4 === a || 3 === a) {
        a = this.Jb;
        switch (this.w) {
          case 401:
            0 !== this.j || Y(this.config, 8) || (this.j = 2);
            break;
          case 429:
            a = this.A;
            break;
          case 404:
            a = this.D
        }
        this.open(a)
      }
      this.w = -1;
      this.g = void 0;
      r4(this.Y)
    }
  };
  m.wc = function(a) {
    l4(this.Y, a.g)
  };
  m.dispose = function() {
    jj(this.G);
    this.xb = !0
  };
  m.ua = l("xb");

  function s4(a, b) {
    cl(a, function(c) {
      var d = null;
      try {
        var e = c.target;
        if (ml(e)) {
          var f = N2(pl(e));
          d = {
            count: Number(f[0]),
            ci: f[1].toString()
          }
        }
      } catch (g) {}
      b(d)
    }, "GET", void 0, void 0, 500)
  }

  function n4(a, b) {
    s4(a, function(c) {
      c ? s4(a, function(d) {
        d ? b(c.count < d.count ? c.ci : d.ci) : b(void 0)
      }) : b(void 0)
    })
  }

  function t4(a, b) {
    this.g = a;
    this.o = b;
    this.j = 0
  }
  t4.prototype.w = function() {
    this.j++;
    switch (this.g.g) {
      case 1:
      case 2:
        if (3 === this.j) {
          this.o(this.g);
          return
        }
        break;
      case 3:
        if (5 === this.j) {
          this.o(this.g);
          return
        }
        break;
      case 0:
        return
    }
    this.Ba();
    this.g.F()
  };
  t4.prototype.Ba = function() {
    Wk(this.w, 2E4, this)
  };

  function h4(a, b, c) {
    N3.call(this, a);
    this.id = c;
    this.G = new t4(this, b);
    this.G.Ba()
  }
  r(h4, N3);
  h4.prototype.F = l("id");
  h4.prototype.kf = function(a, b) {
    var c = this.G;
    3 === c.g.g && (c.j = 0);
    N3.prototype.kf.call(this, a, b)
  };

  function u4(a, b, c) {
    return new i4(a, b, c)
  };
  var v4 = null;

  function w4() {
    v4 || (v4 = x4() ? "0" : Math.floor(30 * Math.random()).toString());
    return v4
  }

  function x4() {
    try {
      if (t.PerformanceNavigationTiming) {
        var a = performance.getEntriesByType("navigation")[0];
        return "hq" === a.nextHopProtocol || "h2" === a.nextHopProtocol
      }
      return !!t.chrome.loadTimes().wasFetchedViaSpdy
    } catch (b) {
      return !1
    }
  };

  function y4() {
    X.call(this)
  }
  w(y4, X);
  var z4 = null;

  function A4() {
    X.call(this)
  }
  w(A4, X);
  var B4 = null;

  function C4() {
    X.call(this)
  }
  w(C4, X);
  var D4 = null;

  function E4() {
    X.call(this)
  }
  w(E4, X);
  var F4 = null;

  function G4() {
    X.call(this)
  }
  w(G4, X);
  var H4 = null;
  G4.prototype.w = function() {
    return L1(this, 1)
  };

  function I4() {
    X.call(this)
  }
  w(I4, X);
  var J4 = null;

  function K4() {
    X.call(this)
  }
  w(K4, X);
  var L4 = null;

  function M4() {
    X.call(this)
  }
  w(M4, X);
  var N4 = null;

  function O4() {
    X.call(this)
  }
  w(O4, X);
  var P4 = null;

  function Q4() {
    X.call(this)
  }
  w(Q4, X);
  var R4 = null;
  Q4.prototype.Ra = function() {
    return Y(this, 2)
  };

  function S4() {
    X.call(this)
  }
  w(S4, X);
  var T4 = null;
  S4.prototype.S = function() {
    return Y(this, 4)
  };

  function U4() {
    X.call(this)
  }
  w(U4, X);
  var V4 = null;
  U4.prototype.w = function() {
    return L1(this, 1)
  };

  function W4() {
    X.call(this)
  }
  w(W4, X);
  var X4 = null;

  function Y4() {
    X.call(this)
  }
  w(Y4, X);
  var Z4 = null;

  function $4() {
    X.call(this)
  }
  w($4, X);
  var a5 = null;
  $4.prototype.S = function() {
    return Y(this, 1)
  };

  function b5() {
    X.call(this)
  }
  w(b5, X);
  var c5 = null;

  function d5() {
    X.call(this)
  }
  w(d5, X);
  var e5 = null;
  d5.prototype.Ra = function() {
    return Y(this, 2)
  };

  function f5() {
    X.call(this)
  }
  w(f5, X);
  var g5 = null;

  function h5() {
    X.call(this)
  }
  w(h5, X);
  var i5 = null;
  y4.prototype.J = function() {
    var a = z4;
    a || (z4 = a = R1(y4, {
      0: {
        name: "Version",
        ha: "buzz.channel.Version"
      },
      1: {
        name: "major_version",
        K: 5,
        type: Number
      },
      2: {
        name: "minor_version",
        K: 5,
        type: Number
      }
    }));
    return a
  };
  y4.J = y4.prototype.J;
  A4.prototype.J = function() {
    var a = B4;
    a || (B4 = a = R1(A4, {
      0: {
        name: "ProtocolVersion",
        ha: "buzz.channel.ProtocolVersion"
      },
      1: {
        name: "version",
        K: 11,
        type: y4
      }
    }));
    return a
  };
  A4.J = A4.prototype.J;
  C4.prototype.J = function() {
    var a = D4;
    a || (D4 = a = R1(C4, {
      0: {
        name: "ClientVersion",
        ha: "buzz.channel.ClientVersion"
      },
      1: {
        name: "version",
        K: 11,
        type: y4
      },
      2: {
        name: "platform",
        K: 9,
        type: String
      },
      3: {
        name: "language",
        K: 9,
        type: String
      },
      4: {
        name: "application_info",
        K: 9,
        type: String
      }
    }));
    return a
  };
  C4.J = C4.prototype.J;
  E4.prototype.J = function() {
    var a = F4;
    a || (F4 = a = R1(E4, {
      0: {
        name: "SessionId",
        ha: "buzz.channel.SessionId"
      },
      1: {
        name: "service_name",
        K: 9,
        type: String
      },
      2: {
        name: "session_name",
        K: 9,
        type: String
      }
    }));
    return a
  };
  E4.J = E4.prototype.J;
  G4.prototype.J = function() {
    var a = H4;
    a || (H4 = a = R1(G4, {
      0: {
        name: "ClientToServerMessage",
        ha: "buzz.channel.ClientToServerMessage"
      },
      1: {
        name: "header",
        K: 11,
        type: I4
      },
      2: {
        name: "init_endpoint_message",
        K: 11,
        type: K4
      },
      3: {
        name: "init_session_message",
        K: 11,
        type: M4
      },
      4: {
        name: "client_data_message_deprecated",
        K: 11,
        type: Q4
      },
      5: {
        name: "send_on_disconnect_message",
        K: 11,
        type: Q4
      },
      6: {
        name: "close_session_message",
        K: 11,
        type: O4
      }
    }));
    return a
  };
  G4.J = G4.prototype.J;
  I4.prototype.J = function() {
    var a = J4;
    a || (J4 = a = R1(I4, {
      0: {
        name: "ClientHeader",
        ha: "buzz.channel.ClientHeader"
      },
      1: {
        name: "protocol_version",
        K: 11,
        type: A4
      },
      2: {
        name: "client_version",
        K: 11,
        type: C4
      },
      3: {
        name: "client_time_ms",
        K: 3,
        type: Number
      },
      4: {
        name: "max_known_server_time_ms",
        K: 3,
        type: Number
      },
      5: {
        name: "message_id",
        K: 9,
        type: String
      }
    }));
    return a
  };
  I4.J = I4.prototype.J;
  K4.prototype.J = function() {
    var a = L4;
    a || (L4 = a = R1(K4, {
      0: {
        name: "InitEndpointMessage",
        ha: "buzz.channel.InitEndpointMessage"
      }
    }));
    return a
  };
  K4.J = K4.prototype.J;
  M4.prototype.J = function() {
    var a = N4;
    a || (N4 = a = R1(M4, {
      0: {
        name: "InitSessionMessage",
        ha: "buzz.channel.InitSessionMessage"
      },
      1: {
        name: "session_id",
        K: 11,
        type: E4
      },
      2: {
        name: "subscriber_info",
        K: 9,
        type: String
      }
    }));
    return a
  };
  M4.J = M4.prototype.J;
  O4.prototype.J = function() {
    var a = P4;
    a || (P4 = a = R1(O4, {
      0: {
        name: "CloseSessionMessage",
        ha: "buzz.channel.CloseSessionMessage"
      },
      1: {
        name: "session_id",
        K: 11,
        type: E4
      }
    }));
    return a
  };
  O4.J = O4.prototype.J;
  Q4.prototype.J = function() {
    var a = R4;
    a || (R4 = a = R1(Q4, {
      0: {
        name: "DataMessage",
        ha: "buzz.channel.DataMessage"
      },
      1: {
        name: "session_id",
        K: 11,
        type: E4
      },
      2: {
        name: "message",
        K: 9,
        type: String
      }
    }));
    return a
  };
  Q4.J = Q4.prototype.J;
  S4.prototype.J = function() {
    var a = T4;
    a || (T4 = a = R1(S4, {
      0: {
        name: "SessionStatusMessage",
        ha: "buzz.channel.SessionStatusMessage"
      },
      1: {
        name: "session_id",
        K: 11,
        type: E4
      },
      2: {
        name: "address",
        K: 9,
        type: String
      },
      3: {
        name: "is_broadcast_to_user",
        K: 8,
        type: Boolean
      },
      4: {
        name: "status",
        K: 11,
        type: Y4
      },
      5: {
        name: "subscriber_info",
        K: 9,
        type: String
      }
    }));
    return a
  };
  S4.J = S4.prototype.J;
  U4.prototype.J = function() {
    var a = V4;
    a || (V4 = a = R1(U4, {
      0: {
        name: "ServerToClientMessage",
        ha: "buzz.channel.ServerToClientMessage"
      },
      1: {
        name: "header",
        K: 11,
        type: W4
      },
      2: {
        name: "server_data_message",
        K: 11,
        type: Q4
      },
      5: {
        name: "postman_invalidation",
        K: 11,
        type: b5
      },
      3: {
        name: "channel_status_message",
        K: 11,
        type: $4
      },
      4: {
        name: "session_status_message",
        K: 11,
        type: S4
      }
    }));
    return a
  };
  U4.J = U4.prototype.J;
  W4.prototype.J = function() {
    var a = X4;
    a || (X4 = a = R1(W4, {
      0: {
        name: "ServerHeader",
        ha: "buzz.channel.ServerHeader"
      },
      1: {
        name: "protocol_version",
        K: 11,
        type: A4
      },
      4: {
        name: "server_time_ms",
        K: 3,
        type: Number
      },
      5: {
        name: "message_id",
        K: 9,
        type: String
      }
    }));
    return a
  };
  W4.J = W4.prototype.J;
  Y4.prototype.J = function() {
    var a = Z4;
    a || (Z4 = a = R1(Y4, {
      0: {
        name: "StatusP",
        ha: "buzz.channel.StatusP"
      },
      1: {
        name: "code",
        K: 5,
        type: Number
      },
      2: {
        name: "description",
        K: 9,
        type: String
      }
    }));
    return a
  };
  Y4.J = Y4.prototype.J;
  $4.prototype.J = function() {
    var a = a5;
    a || (a5 = a = R1($4, {
      0: {
        name: "ChannelStatusMessage",
        ha: "buzz.channel.ChannelStatusMessage"
      },
      1: {
        name: "status",
        K: 11,
        type: Y4
      },
      2: {
        name: "jid_resource",
        K: 9,
        type: String
      }
    }));
    return a
  };
  $4.J = $4.prototype.J;
  b5.prototype.J = function() {
    var a = c5;
    a || (c5 = a = R1(b5, {
      0: {
        name: "LcsPostmanInvalidation",
        ha: "buzz.channel.LcsPostmanInvalidation"
      },
      1: {
        name: "signal",
        K: 11,
        type: d5
      },
      2: {
        name: "session_id",
        K: 11,
        type: E4
      },
      3: {
        name: "ack_id",
        K: 9,
        type: String
      }
    }));
    return a
  };
  b5.J = b5.prototype.J;
  d5.prototype.J = function() {
    var a = e5;
    a || (e5 = a = R1(d5, {
      0: {
        name: "LcsSignal",
        ha: "buzz.channel.LcsSignal"
      },
      1: {
        name: "subscription_key",
        K: 11,
        type: f5
      },
      2: {
        name: "message",
        K: 11,
        type: h5
      }
    }));
    return a
  };
  d5.J = d5.prototype.J;
  f5.prototype.J = function() {
    var a = g5;
    a || (g5 = a = R1(f5, {
      0: {
        name: "LcsSubscriptionKey",
        ha: "buzz.channel.LcsSubscriptionKey"
      },
      1: {
        name: "name",
        K: 12,
        type: String
      },
      2: {
        name: "topic_name",
        K: 9,
        type: String
      }
    }));
    return a
  };
  f5.J = f5.prototype.J;
  h5.prototype.J = function() {
    var a = i5;
    a || (i5 = a = R1(h5, {
      0: {
        name: "LcsPostmanMessage",
        ha: "buzz.channel.LcsPostmanMessage"
      },
      1: {
        name: "data",
        K: 9,
        type: String
      },
      2: {
        name: "trace_id",
        K: 9,
        type: String
      },
      3: {
        name: "publish_timestamp_micros",
        K: 3,
        type: String
      },
      4: {
        name: "is_suppressor",
        K: 8,
        defaultValue: !0,
        type: Boolean
      }
    }));
    return a
  };
  h5.J = h5.prototype.J;
  var j5 = new A4,
    k5 = new y4;
  Z(k5, 1, 3);
  Z(k5, 2, 2);
  Z(j5, 1, k5);
  var l5 = new y4;
  Z(l5, 1, 3);
  Z(l5, 2, 2);
  var m5 = new y4;
  Z(m5, 1, 3);
  Z(m5, 2, 2);

  function n5() {
    X.call(this)
  }
  w(n5, X);
  var o5 = null;

  function p5() {
    X.call(this)
  }
  w(p5, X);
  var q5 = null;

  function r5() {
    X.call(this)
  }
  w(r5, X);
  var s5 = null,
    t5 = {
      CREATED: 1,
      gr: 2
    };

  function u5() {
    X.call(this)
  }
  w(u5, X);
  var v5 = null;

  function w5() {
    X.call(this)
  }
  w(w5, X);
  var x5 = null;

  function y5() {
    X.call(this)
  }
  w(y5, X);
  var z5 = null;

  function A5() {
    X.call(this)
  }
  w(A5, X);
  var B5 = null;

  function C5() {
    X.call(this)
  }
  w(C5, X);
  var D5 = null;

  function E5() {
    X.call(this)
  }
  w(E5, X);
  var F5 = null;
  n5.prototype.J = function() {
    var a = o5;
    a || (o5 = a = R1(n5, {
      0: {
        name: "ClientToSharedWorkerMessage",
        ha: "buzz.channel.proto.ClientToSharedWorkerMessage"
      },
      1: {
        name: "auth_params",
        K: 11,
        type: U1
      },
      2: {
        name: "init_session_message",
        K: 11,
        type: M4
      },
      3: {
        name: "browser_channel_config",
        K: 11,
        type: S1
      },
      4: {
        name: "heartbeat",
        K: 11,
        type: u5
      }
    }));
    return a
  };
  n5.J = n5.prototype.J;
  p5.prototype.J = function() {
    var a = q5;
    a || (q5 = a = R1(p5, {
      0: {
        name: "SharedWorkerToClientMessage",
        ha: "buzz.channel.proto.SharedWorkerToClientMessage"
      },
      1: {
        name: "data_message",
        K: 11,
        type: Q4
      },
      12: {
        name: "postman_invalidation",
        K: 11,
        type: b5
      },
      2: {
        name: "session_status_message",
        K: 11,
        type: S4
      },
      3: {
        name: "channel_status_message",
        K: 11,
        type: $4
      },
      4: {
        name: "shared_worker_event_message",
        K: 11,
        type: r5
      },
      5: {
        name: "auth_params_request_message",
        K: 11,
        type: w5
      },
      6: {
        name: "config_request_message",
        K: 11,
        type: y5
      },
      7: {
        name: "sender_id",
        K: 9,
        type: String
      },
      9: {
        name: "channel_stat_message",
        K: 11,
        type: A5
      },
      10: {
        name: "browser_channel_closed_message",
        K: 11,
        type: C5
      },
      11: {
        name: "browser_channel_error_message",
        K: 11,
        type: E5
      }
    }));
    return a
  };
  p5.J = p5.prototype.J;
  r5.prototype.J = function() {
    var a = s5;
    a || (s5 = a = R1(r5, {
      0: {
        name: "SharedWorkerEventMessage",
        ha: "buzz.channel.proto.SharedWorkerEventMessage"
      },
      1: {
        name: "event",
        K: 14,
        defaultValue: 1,
        type: t5
      },
      2: {
        name: "connection_count",
        K: 5,
        type: Number
      }
    }));
    return a
  };
  r5.J = r5.prototype.J;
  u5.prototype.J = function() {
    var a = v5;
    a || (v5 = a = R1(u5, {
      0: {
        name: "Heartbeat",
        ha: "buzz.channel.proto.Heartbeat"
      }
    }));
    return a
  };
  u5.J = u5.prototype.J;
  w5.prototype.J = function() {
    var a = x5;
    a || (x5 = a = R1(w5, {
      0: {
        name: "AuthenticationParametersRequestMessage",
        ha: "buzz.channel.proto.AuthenticationParametersRequestMessage"
      }
    }));
    return a
  };
  w5.J = w5.prototype.J;
  y5.prototype.J = function() {
    var a = z5;
    a || (z5 = a = R1(y5, {
      0: {
        name: "BrowserChannelConfigRequestMessage",
        ha: "buzz.channel.proto.BrowserChannelConfigRequestMessage"
      }
    }));
    return a
  };
  y5.J = y5.prototype.J;
  A5.prototype.J = function() {
    var a = B5;
    a || (B5 = a = R1(A5, {
      0: {
        name: "ChannelStatMessage",
        ha: "buzz.channel.proto.ChannelStatMessage"
      },
      1: {
        name: "stat",
        K: 5,
        type: Number
      }
    }));
    return a
  };
  A5.J = A5.prototype.J;
  C5.prototype.J = function() {
    var a = D5;
    a || (D5 = a = R1(C5, {
      0: {
        name: "BrowserChannelClosedMessage",
        ha: "buzz.channel.proto.BrowserChannelClosedMessage"
      }
    }));
    return a
  };
  C5.J = C5.prototype.J;
  E5.prototype.J = function() {
    var a = F5;
    a || (F5 = a = R1(E5, {
      0: {
        name: "BrowserChannelErrorMessage",
        ha: "buzz.channel.proto.BrowserChannelErrorMessage"
      },
      1: {
        name: "browser_channel_error_code",
        K: 5,
        type: Number
      },
      2: {
        name: "last_http_status_code",
        K: 5,
        type: Number
      }
    }));
    return a
  };
  E5.J = E5.prototype.J;
  var G5 = function() {
    if (Ud) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(ad)) ? a[1] : "0"
    }
    return Td ? (a = /10[_.][0-9_.]+/, (a = a.exec(ad)) ? a[0].replace(/_/g, ".") : "10") : Vd ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(ad)) ? a[1] : "") : Wd || Xd || Yd ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(ad)) ? a[1].replace(/_/g, ".") : "") : ""
  }();

  function H5(a, b, c) {
    var d = new M4,
      e = new E4;
    Z(e, 1, a);
    null != b && Z(e, 2, b);
    Z(d, 1, e);
    c && Z(d, 2, c);
    return d
  };

  function I5(a, b) {
    this.o = 0;
    this.L = this.C = !1;
    a = new wl(a);
    var c = a.g;
    if ("client-channel.google.com" === c) {
      var d = w4();
      d && yl(a, d + "." + c)
    }
    this.uri = a;
    this.A = b;
    (b = t.gapi) && b.load && t.gapi.load("auth")
  }

  function J5(a, b) {
    if (-1 !== a.uri.g.indexOf("client-channel.google.com")) {
      var c = b ? a.A : w4();
      yl(a.uri, c + ".client-channel.google.com")
    }
    a.C = b
  }

  function K5(a) {
    var b = a.A,
      c = a.B || null,
      d = a.X || null,
      e = a.U || null,
      f = a.O || null,
      g = a.g || null;
    a = !a.g && t.SharedWorker && a.w() ? a.C : !1;
    var k = new S1;
    Z(k, 2, b);
    null !== c && Z(k, 4, c);
    null !== d && Z(k, 5, d);
    null !== e && Z(k, 6, e);
    null !== f && Z(k, 7, f);
    Z(k, 8, !1);
    null !== g && Z(k, 10, g);
    Z(k, 13, a);
    return k
  }
  I5.prototype.j = function() {
    var a;
    if (t.gapi && t.gapi.auth && (a = t.gapi.auth.getAuthHeaderValueForFirstParty)) try {
      var b = a([]);
      if (b) {
        var c = b.split(" ");
        var d = {
          scheme: c[0],
          hash: c[1]
        }
      } else d = null;
      return d
    } catch (e) {}
    return null
  };

  function L5() {
    var a = dF([]);
    return a ? (a = a.split(" "), {
      scheme: a[0],
      hash: a[1]
    }) : null
  };

  function M5(a, b, c) {
    c = void 0 === c ? u4 : c;
    I5.call(this, a, b);
    this.I = c
  }
  r(M5, I5);
  M5.prototype.D = function(a) {
    return this.I(this.uri.toString(), a, K5(this))
  };
  M5.prototype.G = function() {
    throw Error("getIframeContainerId: unsupported method");
  };
  M5.prototype.w = ca(!1);
  M5.prototype.j = function(a) {
    return I5.prototype.j.call(this, a) || L5()
  };
  var N5 = ["pu", "lru", "pru", "lpu", "ppu"],
    O5 = {};

  function P5(a) {
    for (var b = Q5, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
    return d
  }
  var Q5 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function R5(a) {
    Q.call(this);
    this.B = a || Cg()
  }
  w(R5, Q);
  R5.prototype.lh = 0;
  R5.prototype.getType = l("lh");

  function S5(a, b) {
    R5.call(this, b);
    this.g = a;
    this.H = new Mm(this);
    R(this, this.H);
    this.C = new Vk(100, Hg(this.B.g));
    R(this, this.C);
    this.w = new pi;
    this.A = new pi;
    this.j = new pi;
    this.G = P5(10);
    this.D = null;
    this.o = {};
    this.L = this.g.name;
    T5(this.g, this.g.name + "_" + U5(this.g));
    this.I = !1;
    Bi(this.j, this.w);
    Bi(this.j, this.A);
    vi(this.j, this.fl, this);
    this.j.callback(!0);
    this.H.R(this.C, "tick", this.ai)
  }
  w(S5, R5);
  var V5 = {};

  function W5(a) {
    var b = new X5(a.channelName, a.service, a.payload);
    a = b.g;
    var c = b.j;
    b = b.eh;
    var d = O5[a];
    if (d) return d.re(c, b), !0;
    d = Y5(b)[0];
    for (var e in O5) {
      var f = O5[e];
      if (1 == U5(f) && !f.ob() && "tp" == c && "SETUP" == d) return T5(f, a), f.re(c, b), !0
    }
    return !1
  }
  m = S5.prototype;
  m.lh = 3;
  m.Dj = function(a) {
    a = Y5(a);
    var b = a[1];
    switch (a[0]) {
      case "SETUP_ACK":
        this.w.g || this.w.callback(!0);
        break;
      case "SETUP":
        this.send("tp", "SETUP_ACK"), this.A.g || this.A.callback(!0), null != this.D && this.D != b && this.send("tp", "SETUP," + this.G), this.D = b
    }
  };
  m.connect = function() {
    var a = Hg(this.B.g);
    if (a) {
      var b = La(a);
      0 == (V5[b] || 0) && null == Ea("crosswindowmessaging.channel", a) && Da("crosswindowmessaging.channel", W5, a);
      V5[b]++;
      this.I = !0;
      this.ai()
    }
  };
  m.ai = function() {
    this.g.ob() ? this.C.stop() : (this.C.start(), this.send("tp", "SETUP," + this.G))
  };
  m.send = function(a, b) {
    this.g.qb && (a = new X5(this.L + "_" + (0 == U5(this.g) ? 1 : 0), a, b), this.g.g.directSyncMode ? this.Kh(a) : this.o[La(a)] = Wk(u(this.Kh, this, a), 0))
  };
  m.Kh = function(a) {
    var b = La(a);
    this.o[b] && delete this.o[b];
    try {
      var c = Ea("crosswindowmessaging.channel", this.g.qb)
    } catch (d) {
      return
    }
    if (null !== c) try {
      c({
        channelName: a.g,
        service: a.j,
        payload: a.eh
      })
    } catch (d) {}
  };
  m.fl = function() {
    Z5(this.g, 0)
  };
  m.N = function() {
    if (this.I) {
      var a = Hg(this.B.g),
        b = La(a);
      1 == --V5[b] && Da("crosswindowmessaging.channel", null, a)
    }
    this.o && (Zb(this.o, function(c) {
      Xk(c)
    }), this.o = null);
    this.w && (this.w.cancel(), delete this.w);
    this.A && (this.A.cancel(), delete this.A);
    this.j && (this.j.cancel(), delete this.j);
    S5.na.N.call(this)
  };

  function Y5(a) {
    a = a.split(",");
    a[1] = a[1] || null;
    return a
  }

  function X5(a, b, c) {
    this.g = a;
    this.j = b;
    this.eh = c
  };

  function $5(a, b, c, d, e) {
    R5.call(this, c);
    this.A = a;
    this.C = e || 2;
    this.X = b || "*";
    this.H = new Mm(this);
    this.D = new Vk(100, Hg(this.B.g));
    this.I = !!d;
    this.o = new pi;
    this.w = new pi;
    this.j = new pi;
    this.O = P5(10);
    this.G = null;
    this.I ? 1 == U5(this.A) ? Bi(this.j, this.o) : Bi(this.j, this.w) : (Bi(this.j, this.o), 2 == this.C && Bi(this.j, this.w));
    vi(this.j, this.gl, this);
    this.j.callback(!0);
    this.H.R(this.D, "tick", this.bi)
  }
  w($5, R5);
  $5.prototype.g = null;
  $5.prototype.L = !1;
  $5.prototype.lh = 1;
  var a6 = {};
  m = $5.prototype;
  m.le = 0;

  function b6(a) {
    var b = a.Da.data;
    if ("string" !== typeof b) return !1;
    var c = b.indexOf("|"),
      d = b.indexOf(":");
    if (-1 == c || -1 == d) return !1;
    var e = b.substring(0, c);
    c = b.substring(c + 1, d);
    b = b.substring(d + 1);
    if (d = O5[e]) return d.re(c, b, a.Da.origin), !0;
    d = c6(b)[0];
    for (var f in O5) {
      var g = O5[f];
      if (1 == U5(g) && !g.ob() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && d6(g, a.Da.origin)) return T5(g, e), g.re(c, b), !0
    }
    return !1
  }
  m.Dj = function(a) {
    var b = c6(a);
    a = b[1];
    switch (b[0]) {
      case "SETUP_ACK":
        e6(this, 1);
        this.o.g || this.o.callback(!0);
        break;
      case "SETUP_ACK_NTPV2":
        2 == this.C && (e6(this, 2), this.o.g || this.o.callback(!0));
        break;
      case "SETUP":
        e6(this, 1);
        f6(this, 1);
        break;
      case "SETUP_NTPV2":
        2 == this.C && (b = this.g, e6(this, 2), f6(this, 2), 1 != b && null == this.G || this.G == a || g6(this), this.G = a)
    }
  };

  function g6(a) {
    2 != a.C || null != a.g && 2 != a.g || a.send("tp", "SETUP_NTPV2," + a.O);
    null != a.g && 1 != a.g || a.send("tp", "SETUP")
  }

  function f6(a, b) {
    if (2 != a.C || null != a.g && 2 != a.g || 2 != b) {
      if (null != a.g && 1 != a.g || 1 != b) return;
      a.send("tp", "SETUP_ACK")
    } else a.send("tp", "SETUP_ACK_NTPV2");
    a.w.g || a.w.callback(!0)
  }

  function e6(a, b) {
    b > a.g && (a.g = b);
    1 == a.g && (a.w.g || a.I || a.w.callback(!0), a.G = null)
  }
  m.connect = function() {
    var a = Hg(this.B.g),
      b = La(a),
      c = a6[b];
    "number" !== typeof c && (c = 0);
    0 == c && Tj(a.postMessage ? a : a.document, "message", b6, !1, $5);
    a6[b] = c + 1;
    this.L = !0;
    this.bi()
  };
  m.bi = function() {
    var a = 0 == U5(this.A);
    this.I && a || this.A.ob() || this.ua() ? this.D.stop() : (this.D.start(), g6(this))
  };
  m.send = function(a, b) {
    var c = this.A.qb;
    c && (this.send = function(d, e) {
      var f = this,
        g = this.A.name;
      this.le = Wk(function() {
        f.le = 0;
        try {
          var k = c.postMessage ? c : c.document;
          k.postMessage && k.postMessage(g + "|" + d + ":" + e, f.X)
        } catch (n) {}
      }, 0)
    }, this.send(a, b))
  };
  m.gl = function() {
    Z5(this.A, 1 == this.C || 1 == this.g ? 200 : void 0)
  };
  m.N = function() {
    if (this.L) {
      var a = Hg(this.B.g),
        b = La(a),
        c = a6[b];
      a6[b] = c - 1;
      1 == c && fk(a.postMessage ? a : a.document, "message", b6, !1, $5)
    }
    this.le && (Xk(this.le), this.le = 0);
    jj(this.H);
    delete this.H;
    jj(this.D);
    delete this.D;
    this.o.cancel();
    delete this.o;
    this.w.cancel();
    delete this.w;
    this.j.cancel();
    delete this.j;
    delete this.send;
    $5.na.N.call(this)
  };

  function c6(a) {
    a = a.split(",");
    a[1] = a[1] || null;
    return a
  };

  function h6(a, b) {
    hF.call(this);
    for (var c = 0, d; d = N5[c]; c++)
      if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
    this.g = a;
    this.name = this.g.cn || P5(10);
    this.j = b || Cg();
    this.o = [];
    this.w = new Mm(this);
    a.lpu = a.lpu || yk(Hg(this.j.g).location.href) + "/robots.txt";
    a.ppu = a.ppu || yk(a.pu || "") + "/robots.txt";
    O5[this.name] = this;
    hk(window, "unload", i6) || Uj(window, "unload", i6)
  }
  w(h6, hF);
  var j6 = /^%*tp$/,
    k6 = /^%+tp$/;
  m = h6.prototype;
  m.jc = null;
  m.Pb = null;
  m.Nb = null;
  m.sd = 1;
  m.ob = function() {
    return 2 == this.sd
  };
  m.qb = null;
  m.We = null;

  function aaa(a, b) {
    var c = a.g.ifrid;
    c || (c = a.g.ifrid = "xpcpeer" + P5(4));
    var d = Cg(b).createElement("IFRAME");
    d.id = d.name = c;
    d.style.width = d.style.height = "100%";
    l6(a);
    a.Pb = new pi(void 0, a);
    var e = baa(a);
    Om(a.w, d, "load", a.Pb.callback, !1, a.Pb);
    Rd || Sd ? window.setTimeout(u(function() {
      b.appendChild(d);
      td(d, Qn(e.toString()))
    }, a), 1) : (td(d, Qn(e.toString())), b.appendChild(d))
  }

  function l6(a) {
    a.Pb && (a.Pb.cancel(), a.Pb = null);
    a.o.length = 0;
    Pm(a.w)
  }

  function baa(a) {
    var b = a.g.pu;
    "string" === typeof b && (b = a.g.pu = new wl(b));
    var c = {};
    c.cn = a.name;
    c.tp = a.g.tp;
    c.osh = a.g.osh;
    a.g.lru && (c.pru = a.g.lru);
    a.g.lpu && (c.ppu = a.g.lpu);
    a.g.ppu && (c.lpu = a.g.ppu);
    (a = a.g.role) && (c.role = 1 == a ? 0 : 1);
    U(b, "xpc", Pk(c));
    return b
  }
  m.connect = function(a) {
    this.A = a || Fa;
    3 == this.sd && (this.sd = 1);
    this.Pb ? vi(this.Pb, this.xh) : this.xh()
  };
  m.xh = function() {
    this.Pb = null;
    this.g.ifrid && (this.We = Eg(this.j.g, this.g.ifrid));
    if (this.We) {
      var a = this.We.contentWindow;
      a || (a = window.frames[this.g.ifrid]);
      this.qb = a
    }
    if (!this.qb) {
      if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
      this.qb = window.parent
    }
    if (!this.Nb) {
      this.g.tp || (this.g.tp = Ja(document.postMessage) || Ja(window.postMessage) || Pd && window.postMessage ? 1 : 0);
      if (Ja(this.g.tp)) this.Nb = new this.g.tp(this, this.j);
      else switch (this.g.tp) {
        case 1:
          this.Nb = new $5(this,
            this.g.ph, this.j, !!this.g.osh, this.g.nativeProtocolVersion || 2);
          break;
        case 3:
          if (a = this.qb) try {
            a = window.document.domain == this.qb.document.domain
          } catch (b) {
            a = !1
          }
          a && (this.Nb = new S5(this, this.j))
      }
      if (!this.Nb) throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
    }
    for (this.Nb.connect(); 0 < this.o.length;) this.o.shift()()
  };
  m.close = function() {
    l6(this);
    this.sd = 3;
    jj(this.Nb);
    this.A = this.Nb = null;
    jj(this.jc);
    this.jc = null
  };

  function Z5(a, b) {
    a.ob() || a.jc && 0 != a.jc.rc || (a.sd = 2, jj(a.jc), void 0 !== b ? (a.jc = new Lm(a.A, b), a.jc.start()) : (a.jc = null, a.A()))
  }
  m.send = function(a, b) {
    if (this.ob()) {
      try {
        var c = !!this.qb && !this.qb.closed
      } catch (d) {
        c = !1
      }
      c ? (Ka(b) && (b = Pk(b)), this.Nb.send(caa(a), b)) : this.close()
    }
  };
  m.re = function(a, b, c) {
    this.Pb ? this.o.push(u(this.re, this, a, b, c)) : d6(this, c) && !this.ua() && 3 != this.sd && (a && "tp" != a ? this.ob() && (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = k6.test(a) ? a.substring(1) : a, a = iF(this, a, b)) && (b = jF(b, a.$g), null != b && a.callback(b)) : this.Nb.Dj(b))
  };

  function caa(a) {
    j6.test(a) && (a = "%" + a);
    return a.replace(/[%:|]/g, encodeURIComponent)
  }

  function U5(a) {
    var b = a.g.role;
    return "number" === typeof b ? b : window.parent == a.qb ? 1 : 0
  }

  function T5(a, b) {
    delete O5[a.name];
    a.name = b;
    O5[b] = a
  }

  function d6(a, b) {
    var c = a.g.ph;
    return Dc(Ed(b)) || Dc(Ed(c)) || b == a.g.ph
  }
  m.N = function() {
    this.close();
    this.We = this.qb = null;
    delete O5[this.name];
    jj(this.w);
    delete this.w;
    h6.na.N.call(this)
  };

  function i6() {
    for (var a in O5) jj(O5[a])
  };

  function m6(a, b, c, d) {
    this.w = a;
    this.o = b;
    this.C = c;
    this.B = d;
    this.j = new c2(5E3, 128);
    this.g = null
  }

  function n6(a) {
    a.g = new h6(a.w, a.C || void 0);
    var b = P2(a.o);
    aaa(a.g, b);
    Wk(a.A, d2(a.j) + 5E3, a);
    a.g.connect(u(function() {
      this.j.reset();
      this.B(this.g)
    }, a))
  }

  function o6(a, b) {
    a = Eg(document, a);
    a = Og(a);
    b = new wl(b);
    for (var c = 0; c < a.length; ++c)
      if ("IFRAME" == a[c].tagName) {
        var d = new wl(a[c].src);
        d.g == b.g && d.A == b.A && Ng(a[c])
      }
  }
  m6.prototype.A = function() {
    this.g && !this.g.ob() && (p6(this), n6(this))
  };

  function p6(a) {
    a.g && (a.g.close(), jj(a.g), a.g = null);
    o6(a.o, a.w.pu)
  };

  function q6(a, b, c, d, e) {
    this.Xe = a;
    this.g = b;
    this.La = c;
    this.Y = d;
    this.config = e;
    this.xb = !1
  }
  m = q6.prototype;
  m.start = function() {
    this.La.start(this.hg(), this.g, this.tm.bind(this))
  };
  m.Aj = function() {
    r6(this.La, "sh", [])
  };
  m.tm = function() {
    this.La.g.Ka("cha", this.Re.bind(this), !0);
    this.La.g.Ka("co", this.Se.bind(this), !0);
    this.La.g.Ka("cc", this.Wd.bind(this), !0);
    this.La.g.Ka("ce", this.Qe.bind(this), !0);
    this.La.g.Ka("cse", this.nm.bind(this), !0);
    this.$ && this.Rb(this.$);
    r6(this.La, "s", [])
  };
  m.hg = function() {
    var a = new wl(this.Xe),
      b = M2(this.config);
    U(a, "cfg", b);
    U(a, "ctype", Y(this.config, 2));
    (b = Y(this.config, 5)) && U(a, "gapi_src", b);
    (b = Y(this.config, 4)) && U(a, "service", b);
    null != this.$ && 3 === Y(this.$, 2) && U(a, "oauth_token", this.$.getToken());
    Y(this.config, 10) && U(a, "pageId", Y(this.config, 10));
    return a.toString()
  };
  m.close = function() {
    this.La.close();
    o6(this.g, this.Xe)
  };
  m.Rb = function(a) {
    this.$ = a;
    a = J2.g(this.$);
    r6(this.La, "uap", a)
  };
  m.Pi = function(a) {
    r6(this.La, "sm", a)
  };
  m.Bd = function() {
    r6(this.La, "tcn", [])
  };
  m.Se = h();
  m.Re = function(a) {
    q4(this.Y, a)
  };
  m.Wd = function() {
    r4(this.Y)
  };
  m.Qe = function(a) {
    m4(this.Y, "object" === typeof a ? new D1(0, a[1]) : new D1(0, -1))
  };
  m.nm = function(a) {
    l4(this.Y, a)
  };
  m.ua = l("xb");
  m.dispose = function() {
    this.xb = !0
  };

  function s6(a) {
    this.o = a
  }
  s6.prototype.start = function(a, b, c) {
    var d = {};
    d.pu = a;
    this.j = new m6(d, b, this.o || null, this.bh.bind(this, c));
    n6(this.j)
  };
  s6.prototype.bh = function(a, b) {
    this.g = b;
    a()
  };

  function r6(a, b, c) {
    a.g && a.g.ob() && a.g.send(b, c || [])
  }
  s6.prototype.close = function() {
    p6(this.j);
    this.g = void 0
  };

  function t6(a, b, c) {
    I5.call(this, a, b);
    this.I = c
  }
  r(t6, I5);
  t6.prototype.D = function(a) {
    return new q6(this.uri.toString(), this.I, new s6(this.H || void 0), a, K5(this))
  };
  t6.prototype.G = l("I");
  t6.prototype.j = function(a) {
    return I5.prototype.j.call(this, a) || L5()
  };
  t6.prototype.w = ca(!0);

  function u6() {}

  function v6(a, b) {
    for (var c = b.J(), d = a.w[c.j], e = F1(c), f = 0; f < e.length; ++f);
    for (var g in d) {
      e = d[g];
      var k = G1(c, g);
      for (f = 0; f < e.length; ++f) {
        if (!e[f](k, b)) return !1;
        for (var n = 0; n < M1(b, k); ++n) {
          var p = b.get(k, n);
          if (p instanceof X && !v6(a, p)) return !1
        }
      }
    }
    return !0
  }
  u6.prototype.j = function(a, b) {
    return b.has(a)
  };
  u6.prototype.g = function(a, b, c) {
    (a = !c.has(b) || c.get(b) >= a) || c.get(b);
    return a
  };
  u6.prototype.o = function(a, b) {
    return !b.has(a) || "" != b.get(a)
  };

  function w6() {
    function a() {
      return !0
    }
    var b = this.j.bind(this),
      c = this.g.bind(this, 0),
      d = this.o.bind(this);
    this.w = {
      Version: {
        major_version: [b, c],
        minor_version: [b, c]
      },
      ProtocolVersion: {
        version: [b]
      },
      ClientVersion: {
        version: [b],
        platform: [b],
        language: [b, d],
        application_info: [b, d]
      },
      ClientToServerMessage: {
        header: [b],
        init_endpoint_message: [a],
        init_session_message: [a],
        client_data_message_deprecated: [a],
        send_on_disconnect_message: [a],
        close_session_message: [a]
      },
      ClientHeader: {
        protocol_version: [b],
        client_version: [b],
        client_time_ms: [b],
        max_known_server_time_ms: [b],
        message_id: [a]
      },
      SessionId: {
        service_name: [b, d],
        session_name: [a]
      },
      InitEndpointMessage: {},
      InitSessionMessage: {
        session_id: [b],
        subscriber_info: [a]
      },
      CloseSessionMessage: {
        session_id: [b]
      },
      SessionStatusMessage: {
        session_id: [b],
        address: [a, d],
        is_broadcast_to_user: [a],
        subscriber_info: [a],
        status: [a]
      },
      DataMessage: {
        session_id: [b],
        message: [b]
      },
      LcsPostmanInvalidation: {
        signal: [b],
        session_id: [b],
        ack_id: [b]
      },
      LcsSignal: {
        subscription_key: [b],
        message: [b]
      },
      LcsSubscriptionKey: {
        name: [b],
        topic_name: [b]
      },
      LcsPostmanMessage: {
        data: [a],
        trace_id: [a],
        publish_timestamp_micros: [b],
        is_suppressor: [a]
      },
      ServerToClientMessage: {
        header: [b],
        server_data_message: [a],
        postman_invalidation: [a],
        channel_status_message: [a],
        session_status_message: [a]
      },
      ServerHeader: {
        protocol_version: [b],
        server_time_ms: [b, c],
        message_id: [a, d]
      },
      StatusP: {
        code: [b],
        description: [a]
      },
      ChannelStatusMessage: {
        status: [b],
        jid_resource: [a]
      }
    }
  }
  r(w6, u6);

  function x6(a, b) {
    this.channel = a;
    this.o = b
  }
  x6.prototype.toString = function() {
    return "HangingGetChannel(" + this.g + ")"
  };
  x6.prototype.open = function() {
    this.channel.yc(this)
  };

  function y6(a, b, c) {
    x6.call(this, a, b);
    this.B = c
  }
  r(y6, x6);
  y6.prototype.j = l("B");
  y6.prototype.w = function(a) {
    var b = this.B,
      c = a != b.B;
    b.B = a;
    z6(b, !0, c)
  };
  y6.prototype.A = h();

  function A6(a, b, c) {
    x6.call(this, a, b);
    this.B = c
  }
  r(A6, x6);
  A6.prototype.j = l("B");
  A6.prototype.w = h();
  A6.prototype.A = function(a) {
    this.C = a;
    var b = this.B;
    if (B6(b) && a !== b.j) {
      b.j = a;
      for (var c = q(b.g), d = c.next(); !d.done; d = c.next()) {
        var e = q(d.value);
        d = e.next().value;
        e = e.next().value;
        C6(b, e);
        0 < e.g.size && D6(b, e, d, a)
      }
    }
  };

  function E6(a, b) {
    this.kb = a;
    this.Ib = b;
    this.ib = [];
    this.Rc = new Map;
    this.Ub = new Map;
    this.ee = 0;
    this.B = new e2;
    this.w = new w6(this.B);
    this.o = !1;
    this.$ = new U1;
    this.A = this.j = 0;
    this.xb = !1;
    this.Ib.L ? Z(this.$, 2, 5) : (Z(this.$, 2, 2), W1(this.$));
    a = b.o;
    0 !== a && Z(this.$, 4, a)
  }
  m = E6.prototype;
  m.Sc = function(a) {
    5 !== Y(this.$, 2) && (Z(this.$, 2, 3), this.$.setToken(a), this.Rb())
  };
  m.tf = function(a) {
    5 !== Y(this.$, 2) && (Z(this.$, 2, 4), this.$.setToken(a), this.Rb())
  };
  m.open = function() {
    this.g = this.Ib.D(this);
    this.Rb();
    this.g.start()
  };
  m.Jg = function() {
    var a = v();
    a > this.ee && (this.ee = a + Math.ceil(18E5 * Math.random()), this.close(), r4(this), this.g = void 0, this.open())
  };
  m.close = function() {
    void 0 !== this.g && this.g.close()
  };
  m.dispose = function() {
    this.close();
    this.xb = !0
  };
  m.ua = l("xb");
  m.Rb = function() {
    if (a2.contains(Y(this.$, 2))) {
      var a = this.Ib.j(Y(this.$, 1));
      if (null != a) {
        var b = a.scheme;
        a = a.hash;
        a !== this.$.getToken() && (Z(this.$, 2, X1[b]), this.$.setToken(a))
      } else this.$.setToken("")
    }
    this.g && this.g.Rb(this.$)
  };
  m.vg = function(a) {
    var b = Y(a, 1);
    if (null != b) {
      var c = Y(b, 2);
      if (null != c) {
        var d = this.Lc(b);
        if (null == d)
          for (var e = 0; e < this.ib.length; ++e) {
            var f = this.ib[e],
              g = Y(b, 1);
            if (f.o === g) {
              d = f;
              d.g = c;
              this.ib.splice(e, 1);
              Q1(a, 3) ? this.Ub.has(g) || this.Ub.set(g, d) : this.Rc.set(d.g || null, d);
              break
            }
          }
        null != d && (L1(a, 4) && 1 !== Y(a.S(), 1) ? (Y(b, 1), Y(a.S(), 2), b = d.j(), null != b.ie && b.ie(d, {
          $l: !1,
          description: Y(a.S(), 2) || ""
        })) : (Y(a, 2), Y(b, 2), Y(b, 1), d.w(Y(a, 2)), L1(a, 5) && d.A(Y(a, 5))))
      }
    }
  };

  function q4(a, b) {
    b = q(b);
    for (var c = b.next(); !c.done; c = b.next())
      if (c = c.value.p) {
        var d = U4.J();
        c = O2(d, c);
        if (null != c && v6(a.w, c) && c.w()) {
          d = Y(Y(c, 1), 4);
          a.j = d ? Math.max(a.j, d) : a.j;
          if (L1(c, 3)) {
            d = a;
            var e = Y(c, 3),
              f = e.S();
            f = f ? Y(f, 1) : null;
            if (1 === f) {
              d.o = !0;
              var g = q(d.Rc.values());
              for (f = g.next(); !f.done; f = g.next()) d.yc(f.value);
              g = q(d.ib);
              for (f = g.next(); !f.done; f = g.next()) d.yc(f.value);
              g = q(d.Ub.values());
              for (f = g.next(); !f.done; f = g.next()) d.yc(f.value);
              f = {};
              L1(e, 2) && (f.am = Y(e, 2));
              d.kb.hf(d, f)
            } else 4 === f ? (d.o = !1, d.g.Aj()) :
              5 === f && d.Jg()
          }
          L1(c, 4) && (d = Y(c, 4), a.vg(d));
          if (L1(c, 2)) {
            d = Y(c, 2);
            e = (e = Y(d, 1)) ? a.Lc(e) : null;
            if (null == e) continue;
            else if (e instanceof A6) continue;
            d.Ra()
          }
          L1(c, 5) && (c = Y(c, 5), d = (d = Y(c, 2)) ? a.Lc(d) : null, null != d && (d instanceof y6 || F6(d.j(), c)))
        }
      }
  }

  function m4(a, b) {
    a.Rb();
    a.kb.gf(a, b)
  }

  function r4(a) {
    a.o = !1;
    a.kb.he(a)
  }

  function l4(a, b) {
    null != a.kb.wc && a.kb.wc(a, b)
  }
  m.Ti = function(a, b) {
    a = new y6(this, a, b);
    this.ib.push(a);
    return a
  };
  m.Si = function(a, b) {
    a = new A6(this, a, b);
    this.ib.push(a);
    return a
  };
  m.Bd = function() {
    this.g && this.g.Bd()
  };
  m.Lc = function(a) {
    var b = this.Rc.get(Y(a, 2));
    null == b && (b = this.Ub.get(Y(a, 1)));
    return b
  };
  m.yc = function(a) {
    if (this.o) {
      a = H5(a.o, a.g || null, a.C || null);
      var b = "c" + ++this.A,
        c = v(),
        d = this.j,
        e = new I4;
      Z(e, 1, j5);
      Z(e, 3, c);
      Z(e, 4, d);
      Z(e, 5, b);
      b = new C4;
      Z(b, 1, m5);
      Z(b, 2, G5);
      Z(b, 3, "JS");
      Z(b, 4, "lcsclient");
      Z(e, 2, b);
      b = new G4;
      Z(b, 1, e);
      a instanceof K4 ? Z(b, 2, a) : a instanceof M4 ? Z(b, 3, a) : a instanceof O4 && Z(b, 6, a);
      v6(this.w, b) && (a = {}, e = M2(b), a.p = e, this.g.Pi(a))
    }
  };

  function G6(a, b) {
    var c = void 0 === c ? new s6(b.H || void 0) : c;
    this.kb = a;
    this.Ib = b;
    this.La = c;
    this.$ = new U1;
    this.ib = [];
    this.Rc = new Map;
    this.Ub = new Map;
    this.xb = this.Ye = !1;
    this.ee = 0;
    this.Jb = new c2(1E4, 100);
    W1(this.$);
    Z(this.$, 2, 2);
    a = b.o;
    null != a && Z(this.$, 4, a)
  }
  m = G6.prototype;
  m.Sc = h();
  m.tf = h();
  m.hg = function() {
    var a = new wl(this.Ib.uri.toString()),
      b = M2(K5(this.Ib));
    U(a, "cfg", b);
    U(a, "ctype", this.Ib.A);
    U(a, "sw", !0);
    return a.toString()
  };
  m.open = function() {
    this.Xe = this.hg();
    this.La.start(this.Xe, this.Ib.G(), this.bh.bind(this))
  };
  m.bh = function() {
    this.La.g.Ka("sw2c", this.sk.bind(this), !1);
    H6(this)
  };
  m.Ti = function(a, b) {
    a = new y6(this, a, b);
    this.ib.push(a);
    return a
  };
  m.Si = function(a, b) {
    a = new A6(this, a, b);
    this.ib.push(a);
    return a
  };
  m.Bd = function() {
    I6(this)
  };
  m.dispose = function() {
    this.close();
    this.xb = !0
  };
  m.ua = l("xb");
  m.close = function() {
    this.La.close();
    this.Ye = !1;
    this.kb.he(this)
  };
  m.Rb = function() {
    Y(this.$, 2);
    var a = this.Ib.j(Y(this.$, 1));
    if (null != a) {
      var b = a.scheme;
      a = a.hash;
      a !== this.$.getToken() && (Z(this.$, 2, X1[b]), this.$.setToken(a))
    } else this.$.setToken("")
  };

  function H6(a) {
    a.Rb();
    var b = new n5;
    Z(b, 1, a.$);
    a.send(b)
  }

  function I6(a) {
    var b = new n5,
      c = K5(a.Ib);
    Z(b, 3, c);
    a.send(b)
  }

  function daa(a) {
    var b = d2(a.Jb) + 1E4;
    Wk(function() {
      a.Ye ? a.Jb.reset() : (a.close(), a.open())
    }, b)
  }
  m.yc = function(a) {
    if (this.Ye) {
      a = H5(a.o, a.g || null, a.C || null);
      var b = new n5;
      Z(b, 2, a);
      this.send(b)
    }
  };
  m.send = function(a) {
    a = M2(a);
    r6(this.La, "c2sw", a)
  };
  m.Lc = function(a) {
    var b = this.Rc.get(Y(a, 2));
    null == b && (b = this.Ub.get(Y(a, 1)));
    return b
  };
  m.sk = function(a) {
    var b = p5.J();
    a = O2(b, a);
    if (null != a)
      if (L1(a, 1)) a = Y(a, 1), b = Y(a, 1), b = this.Lc(b), null == b || b instanceof A6 || a.Ra();
      else if (L1(a, 12)) a = Y(a, 12), b = Y(a, 2), b = this.Lc(b), null != b && (b instanceof y6 || F6(b.j(), a));
    else if (L1(a, 6)) I6(this);
    else if (L1(a, 2)) this.vg(Y(a, 2));
    else if (L1(a, 3)) a = Y(a, 3), b = (b = a.S()) ? Y(b, 1) : null, 1 === b ? (b = {}, L1(a, 2) && (b.am = Y(a, 2)), this.kb.hf(this, b)) : 4 !== b && 5 === b && this.Jg();
    else if (L1(a, 9)) a = Y(a, 9), a = Y(a, 1), null != this.kb.wc && this.kb.wc(this, a);
    else if (L1(a, 5)) H6(this);
    else if (L1(a,
        4)) {
      if (a = Y(a, 4), L1(a, 1)) switch (Y(a, 1)) {
        case 1:
          daa(this);
          break;
        case 2:
          Y(a, 2);
          this.Ye = !0;
          b = q(this.Rc.values());
          for (a = b.next(); !a.done; a = b.next()) this.yc(a.value);
          b = q(this.ib);
          for (a = b.next(); !a.done; a = b.next()) this.yc(a.value);
          b = q(this.Ub.values());
          for (a = b.next(); !a.done; a = b.next()) this.yc(a.value)
      }
    } else L1(a, 10) ? this.kb.he(this) : L1(a, 11) && (H6(this), a = Y(a, 11), a = new D1(Y(a, 1), Y(a, 2)), this.kb.gf(this, a))
  };
  m.vg = function(a) {
    var b = Y(a, 1);
    if (null != b) {
      var c = Y(b, 2);
      if (null != c) {
        var d = this.Lc(b);
        if (null == d)
          for (var e = 0; e < this.ib.length; ++e) {
            var f = this.ib[e],
              g = Y(b, 1);
            if (f.o === g) {
              d = f;
              d.g = c;
              this.ib.splice(e, 1);
              Q1(a, 3) ? this.Ub.has(g) || this.Ub.set(g, d) : this.Rc.set(d.g || null, d);
              break
            }
          }
        L1(a, 4) && 1 !== Y(a.S(), 1) ? (Y(b, 1), Y(a.S(), 2), b = d.j(), null != b.ie && b.ie(d, {
          $l: !1,
          description: Y(a.S(), 2) || ""
        })) : (Y(a, 2), Y(b, 2), Y(b, 1), d.w(Y(a, 2)), L1(a, 5) && (a = Y(a, 5), d.A(a)))
      }
    }
  };
  m.Jg = function() {
    var a = v();
    a > this.ee && (this.ee = a + Math.ceil(18E5 * Math.random()), this.close(), this.open())
  };

  function J6(a, b) {
    return !a.g && t.SharedWorker && a.w() && a.C ? new G6(b, a) : new E6(b, a)
  };

  function K6(a) {
    z(this, a, -1, null, null)
  }
  w(K6, y);
  K6.prototype.F = function() {
    return B(this, 1)
  };

  function L6(a) {
    z(this, a, -1, eaa, null)
  }
  w(L6, y);
  var eaa = [2];

  function M6(a) {
    z(this, a, -1, null, null)
  }
  w(M6, y);

  function N6(a) {
    z(this, a, -1, null, null)
  }
  w(N6, y);

  function O6(a) {
    z(this, a, -1, null, null)
  }
  w(O6, y);

  function P6(a) {
    z(this, a, -1, null, null)
  }
  w(P6, y);

  function Q6(a) {
    z(this, a, -1, null, null)
  }
  w(Q6, y);

  function R6(a) {
    z(this, a, -1, null, null)
  }
  w(R6, y);

  function S6(a) {
    z(this, a, -1, faa, null)
  }
  w(S6, y);
  var faa = [3];
  S6.prototype.Ra = function() {
    return D(this, 2, "")
  };

  function T6(a, b, c, d, e) {
    a = new wl(a);
    0 != b && U(a, "authuser", b);
    null != c && U(a, "pageId", c);
    null != d && U(a, "service", d);
    this.j = a.toString();
    this.Y = e;
    this.w = 0
  }
  T6.prototype.start = function() {
    var a = this.Y;
    a.H = !0;
    z6(a, !0, !1)
  };
  T6.prototype.send = function(a, b, c) {
    var d = new wl(this.j),
      e;
    for (e in c) U(d, e, c[e]);
    cl(d.toString(), u(this.o, this, this.w++), "POST", a, b, void 0, !0)
  };
  T6.prototype.o = function(a, b) {
    ml(b.target)
  };

  function U6() {
    X.call(this)
  }
  w(U6, X);
  var V6 = null;

  function W6() {
    X.call(this)
  }
  w(W6, X);
  var X6 = null;

  function Y6() {
    X.call(this)
  }
  w(Y6, X);
  var Z6 = null;
  U6.prototype.J = function() {
    var a = V6;
    a || (V6 = a = R1(U6, {
      0: {
        name: "Version",
        ha: "ipc.invalidation.Version"
      },
      1: {
        name: "major_version",
        K: 5,
        type: Number
      },
      2: {
        name: "minor_version",
        K: 5,
        type: Number
      }
    }));
    return a
  };
  U6.J = U6.prototype.J;
  W6.prototype.J = function() {
    var a = X6;
    a || (X6 = a = R1(W6, {
      0: {
        name: "ProtocolVersion",
        ha: "ipc.invalidation.ProtocolVersion"
      },
      1: {
        name: "version",
        K: 11,
        type: U6
      }
    }));
    return a
  };
  W6.J = W6.prototype.J;
  Y6.prototype.J = function() {
    var a = Z6;
    a || (Z6 = a = R1(Y6, {
      0: {
        name: "ObjectIdP",
        ha: "ipc.invalidation.ObjectIdP"
      },
      1: {
        name: "source",
        K: 5,
        type: Number
      },
      2: {
        name: "name",
        K: 12,
        type: String
      }
    }));
    return a
  };
  Y6.J = Y6.prototype.J;
  var gaa = new W6,
    $6 = new U6;
  Z($6, 1, 3);
  Z($6, 2, 2);
  Z(gaa, 1, $6);
  var a7 = new U6;
  Z(a7, 1, 3);
  Z(a7, 2, 2);
  var b7 = new U6;
  Z(b7, 1, 3);
  Z(b7, 2, 20150820);
  var c7 = new Y6;
  Z(c7, 2, "");
  Z(c7, 1, 1);
  var haa = {
    oq: 1,
    pq: 2
  };

  function d7() {
    X.call(this)
  }
  w(d7, X);
  var e7 = null,
    iaa = {
      ik: 1,
      ln: 111,
      ir: 112,
      bn: 113,
      Ap: 114,
      wr: 115,
      lq: 116,
      yr: 117,
      xr: 118
    };
  d7.prototype.J = function() {
    var a = e7;
    a || (e7 = a = R1(d7, {
      0: {
        name: "NetworkEndpointId",
        ha: "ipc.invalidation.NetworkEndpointId"
      },
      1: {
        name: "network_address",
        K: 14,
        defaultValue: 1,
        type: iaa
      },
      2: {
        name: "client_address",
        K: 12,
        type: String
      },
      3: {
        name: "is_offline",
        K: 8,
        type: Boolean
      }
    }));
    return a
  };
  d7.J = d7.prototype.J;

  function f7() {
    X.call(this)
  }
  w(f7, X);
  var g7 = null,
    jaa = {
      ao: 1,
      Iq: 2,
      Eo: 3,
      vr: 4,
      Jq: 5
    };
  f7.prototype.J = function() {
    var a = g7;
    a || (g7 = a = R1(f7, {
      0: {
        name: "ClientGatewayMessage",
        ha: "ipc.invalidation.ClientGatewayMessage"
      },
      1: {
        name: "is_client_to_server",
        K: 8,
        type: Boolean
      },
      2: {
        name: "service_context",
        K: 12,
        type: String
      },
      3: {
        name: "rpc_scheduling_hash",
        K: 3,
        type: String
      },
      5: {
        name: "protocol_version",
        K: 11,
        type: W6
      },
      6: {
        name: "message_type",
        K: 14,
        defaultValue: 1,
        type: jaa
      },
      7: {
        name: "encoding",
        K: 14,
        defaultValue: 1,
        type: haa
      },
      8: {
        name: "client_endpoint_id",
        K: 11,
        type: d7
      },
      9: {
        name: "service_endpoint_id",
        K: 12,
        type: String
      },
      4: {
        name: "network_message",
        K: 12,
        type: String
      },
      10: {
        name: "debug_info",
        K: 9,
        type: String
      }
    }));
    return a
  };
  f7.J = f7.prototype.J;

  function h7(a, b, c, d, e, f, g, k) {
    T6.call(this, a, d, e, f, k);
    a = new wl(this.j);
    null != c && U(a, "oauth_token", c);
    0 != d && U(a, "authuser", d);
    null != e && U(a, "pageId", e);
    null != f && U(a, "service", f);
    c = {};
    c.pu = a.toString();
    this.A = new m6(c, b, g, u(this.Cm, this));
    this.g = null
  }
  r(h7, T6);
  m = h7.prototype;
  m.Cm = function(a) {
    this.g = a;
    this.g.Ka("ss", u(this.Nm, this));
    this.g.Ka("sf", u(this.Mm, this), !0);
    a = this.Y;
    a.H = !0;
    z6(a, !0, !1)
  };
  m.start = function() {
    n6(this.A)
  };
  m.send = function(a, b, c) {
    this.g.send("s", [a, b, c])
  };
  m.Nm = h();
  m.Mm = h();

  function i7(a, b) {
    this.O = [];
    this.H = this.A = !1;
    this.L = b;
    this.o = [];
    this.C = this.w = null;
    this.g = [];
    this.j = J6(a, this);
    null != this.w && this.j.Sc(this.w);
    this.j.open();
    this.B = this.G = null;
    this.I = 0;
    b = a.o;
    var c = a.g || null;
    a.w() ? this.D = new h7(this.L, "lcssenderclient", this.w, b, c, a.B || null, a.H || null, this) : this.D = new T6(this.L, b, c, a.B || null, this);
    this.D.start()
  }
  m = i7.prototype;
  m.Sc = function(a) {
    this.w = a;
    this.j.Sc(a)
  };
  m.tf = function(a) {
    this.C = a;
    this.j.tf(a)
  };
  m.hf = function(a, b) {
    this.G || (this.G = a.Ti("tango_service", this), this.G.open());
    for (var c = 0; c < this.g.length; ++c) this.g[c].hf(a, b)
  };
  m.stop = function() {
    this.j.ua() || this.j.dispose()
  };
  m.sendMessage = function(a) {
    this.A ? j7(this, a) : (10 <= this.o.length && this.o.shift(), this.o.push(a))
  };

  function j7(a, b) {
    if (a.A) {
      var c = a.B,
        d = new d7;
      Z(d, 1, 114);
      Z(d, 2, c);
      c = a.I.toString();
      var e = new U6;
      Z(e, 2, 2);
      Z(e, 1, 3);
      var f = new W6;
      Z(f, 1, e);
      e = new f7;
      Z(e, 5, f);
      Z(e, 6, 1);
      Z(e, 7, 2);
      Z(e, 4, b);
      Z(e, 8, d);
      Z(e, 1, !0);
      Z(e, 10, c);
      a.I++;
      b = M2(e);
      d = {
        "Content-Type": "text/plain"
      };
      c = {};
      null != a.w ? d.Authorization = "OAuth " + a.w : null != a.C && (c.app_auth = a.C);
      a.D.send(b, d, c)
    }
  }
  m.gf = function(a, b) {
    for (var c = 0; c < this.g.length; ++c) this.g[c].gf(a, b)
  };
  m.he = function(a) {
    z6(this, !1, !1);
    for (var b = 0; b < this.g.length; ++b) this.g[b].he(a)
  };
  m.wc = function(a, b) {
    for (var c = 0; c < this.g.length; ++c) {
      var d = this.g[c];
      d.wc && d.wc(a, b)
    }
  };
  m.ie = h();

  function z6(a, b, c) {
    a.A = b && null != a.B && a.H;
    if (a.A && 0 != a.o.length) {
      b = q(a.o);
      for (var d = b.next(); !d.done; d = b.next()) j7(a, d.value);
      Eb(a.o)
    }
    b = q(a.O);
    for (d = b.next(); !d.done; d = b.next()) d = d.value, d(a.A, c)
  };

  function k7(a) {
    Promise.resolve().then(a)
  }

  function kaa(a) {
    switch (a) {
      case 200:
        return 0;
      case 400:
        return 3;
      case 401:
        return 16;
      case 403:
        return 7;
      case 404:
        return 5;
      case 409:
        return 10;
      case 412:
        return 9;
      case 429:
        return 8;
      case 501:
        return 12;
      case 503:
        return 14;
      case 504:
        return 4;
      default:
        return 2
    }
  };
  /*


   Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  */
  var l7 = !0,
    m7 = {
      set Eb(a) {
        a ? console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + Error().stack) : l7 && console.log("RxJS: Back to a better error behavior. Thank you. <3");
        l7 = a
      },
      get Eb() {
        return l7
      }
    };
  ja();
  ja();
  var laa = "function" === typeof Symbol && Symbol.observable || "@@observable";

  function n7(a) {
    setTimeout(function() {
      throw a;
    }, 0)
  };
  var o7 = {
    closed: !0,
    next: h(),
    error: function(a) {
      if (m7.Eb) throw a;
      n7(a)
    },
    complete: h()
  };
  var p7 = function() {
    function a(b) {
      Error.call(this);
      this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
        return d + 1 + ") " + c.toString()
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.Zf = b;
      return this
    }
    a.prototype = Object.create(Error.prototype);
    return a
  }();
  var maa = Array.isArray || function(a) {
    return a && "number" === typeof a.length
  };

  function q7(a) {
    return "function" === typeof a
  };

  function r7(a) {
    this.closed = !1;
    this.Xc = this.fc = null;
    a && (this.we = a)
  }
  r7.prototype.unsubscribe = function() {
    if (!this.closed) {
      var a = this.fc,
        b = this.we,
        c = this.Xc;
      this.closed = !0;
      this.Xc = this.fc = null;
      if (a instanceof r7) a.remove(this);
      else if (null !== a)
        for (var d = 0; d < a.length; ++d) a[d].remove(this);
      if (q7(b)) try {
        b.call(this)
      } catch (k) {
        var e = k instanceof p7 ? s7(k.Zf) : [k]
      }
      if (maa(c)) {
        d = -1;
        for (var f = c.length; ++d < f;) {
          var g = c[d];
          if (null !== g && "object" === typeof g) try {
            g.unsubscribe()
          } catch (k) {
            e = e || [], k instanceof p7 ? e = e.concat(s7(k.Zf)) : e.push(k)
          }
        }
      }
      if (e) throw new p7(e);
    }
  };
  r7.prototype.add = function(a) {
    var b = a;
    if (!a) return r7.EMPTY;
    switch (typeof a) {
      case "function":
        b = new r7(a);
      case "object":
        if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
        if (this.closed) return b.unsubscribe(), b;
        b instanceof r7 || (a = b, b = new r7, b.Xc = [a]);
        break;
      default:
        throw Error("unrecognized teardown " + a + " added to Subscription.");
    }
    var c = b.fc;
    if (null === c) b.fc = this;
    else if (c instanceof r7) {
      if (c === this) return b;
      b.fc = [c, this]
    } else if (-1 === c.indexOf(this)) c.push(this);
    else return b;
    a = this.Xc;
    null === a ? this.Xc = [b] : a.push(b);
    return b
  };
  r7.prototype.remove = function(a) {
    var b = this.Xc;
    b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
  };
  var t7 = new r7;
  t7.closed = !0;
  r7.EMPTY = t7;

  function s7(a) {
    return a.reduce(function(b, c) {
      return b.concat(c instanceof p7 ? c.Zf : c)
    }, [])
  };
  ja();
  ja();
  var u7 = "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();

  function v7(a, b, c) {
    r7.call(this);
    this.Cf = null;
    this.Fa = this.rb = this.Bf = !1;
    switch (arguments.length) {
      case 0:
        this.destination = o7;
        break;
      case 1:
        if (!a) {
          this.destination = o7;
          break
        }
        if ("object" === typeof a) {
          a instanceof v7 ? (this.rb = a.rb, this.destination = a, a.add(this)) : (this.rb = !0, this.destination = new w7(this, a));
          break
        }
        default:
          this.rb = !0, this.destination = new w7(this, a, b, c)
    }
  }
  r(v7, r7);
  v7.EMPTY = r7.EMPTY;
  v7.prototype[u7] = function() {
    return this
  };
  v7.create = function(a, b, c) {
    a = new v7(a, b, c);
    a.rb = !1;
    return a
  };
  m = v7.prototype;
  m.next = function(a) {
    this.Fa || this.Wc(a)
  };
  m.error = function(a) {
    this.Fa || (this.Fa = !0, this.Cc(a))
  };
  m.complete = function() {
    this.Fa || (this.Fa = !0, this.Vc())
  };
  m.unsubscribe = function() {
    this.closed || (this.Fa = !0, r7.prototype.unsubscribe.call(this))
  };
  m.Wc = function(a) {
    this.destination.next(a)
  };
  m.Cc = function(a) {
    this.destination.error(a);
    this.unsubscribe()
  };
  m.Vc = function() {
    this.destination.complete();
    this.unsubscribe()
  };
  m.Xr = function() {
    var a = this.fc;
    this.fc = null;
    this.unsubscribe();
    this.Fa = this.closed = !1;
    this.fc = a;
    return this
  };

  function w7(a, b, c, d) {
    v7.call(this);
    this.g = a;
    var e = this;
    if (q7(b)) var f = b;
    else b && (f = b.next, c = b.error, d = b.complete, b !== o7 && (e = Object.create(b), q7(e.unsubscribe) && this.add(e.unsubscribe.bind(e)), e.unsubscribe = this.unsubscribe.bind(this)));
    this.j = e;
    this.Wc = f;
    this.Cc = c;
    this.Vc = d
  }
  r(w7, v7);
  w7.EMPTY = v7.EMPTY;
  w7.create = v7.create;
  m = w7.prototype;
  m.next = function(a) {
    if (!this.Fa && this.Wc) {
      var b = this.g;
      m7.Eb && b.rb ? this.If(b, this.Wc, a) && this.unsubscribe() : this.Jf(this.Wc, a)
    }
  };
  m.error = function(a) {
    if (!this.Fa) {
      var b = this.g,
        c = m7.Eb;
      if (this.Cc) c && b.rb ? this.If(b, this.Cc, a) : this.Jf(this.Cc, a), this.unsubscribe();
      else if (b.rb) c ? (b.Cf = a, b.Bf = !0) : n7(a), this.unsubscribe();
      else {
        this.unsubscribe();
        if (c) throw a;
        n7(a)
      }
    }
  };
  m.complete = function() {
    var a = this;
    if (!this.Fa) {
      var b = this.g;
      if (this.Vc) {
        var c = function() {
          return a.Vc.call(a.j)
        };
        m7.Eb && b.rb ? this.If(b, c) : this.Jf(c)
      }
      this.unsubscribe()
    }
  };
  m.Jf = function(a, b) {
    try {
      a.call(this.j, b)
    } catch (c) {
      this.unsubscribe();
      if (m7.Eb) throw c;
      n7(c)
    }
  };
  m.If = function(a, b, c) {
    if (!m7.Eb) throw Error("bad call");
    try {
      b.call(this.j, c)
    } catch (d) {
      return m7.Eb ? (a.Cf = d, a.Bf = !0) : n7(d), !0
    }
    return !1
  };
  m.we = function() {
    var a = this.g;
    this.g = this.j = null;
    a.unsubscribe()
  };

  function naa() {};

  function oaa(a) {
    return a ? 1 === a.length ? a[0] : function(b) {
      return a.reduce(function(c, d) {
        return d(c)
      }, b)
    } : naa
  };

  function x7(a) {
    this.j = !1;
    a && (this.Gd = a)
  }
  m = x7.prototype;
  m.xi = function(a) {
    var b = new x7;
    b.source = this;
    b.operator = a;
    return b
  };
  m.subscribe = function(a, b, c) {
    var d = this.operator;
    a: {
      if (a) {
        if (a instanceof v7) break a;
        if (a[u7]) {
          a = a[u7]();
          break a
        }
      }
      a = a || b || c ? new v7(a, b, c) : new v7(o7)
    }
    d ? a.add(d.call(a, this.source)) : a.add(this.source || m7.Eb && !a.rb ? this.Gd(a) : this.Kf(a));
    if (m7.Eb && a.rb && (a.rb = !1, a.Bf)) throw a.Cf;
    return a
  };
  m.Kf = function(a) {
    try {
      return this.Gd(a)
    } catch (f) {
      m7.Eb && (a.Bf = !0, a.Cf = f);
      var b;
      a: {
        for (b = a; b;) {
          var c = b,
            d = c.destination,
            e = c.Fa;
          if (c.closed || e) {
            b = !1;
            break a
          }
          d && d instanceof v7 ? b = d : b = null
        }
        b = !0
      }
      b ? a.error(f) : console.warn(f)
    }
  };
  m.forEach = function(a, b) {
    var c = this;
    b = paa(b);
    return new b(function(d, e) {
      var f = c.subscribe(function(g) {
        try {
          a(g)
        } catch (k) {
          e(k), f && f.unsubscribe()
        }
      }, e, d)
    })
  };
  m.Gd = function(a) {
    var b = this.source;
    return b && b.subscribe(a)
  };
  x7.prototype[laa] = function() {
    return this
  };
  x7.prototype.g = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    return 0 === b.length ? this : oaa(b)(this)
  };
  x7.create = function(a) {
    return new x7(a)
  };

  function paa(a) {
    a || (a = Promise);
    if (!a) throw Error("no Promise impl found");
    return a
  };

  function y7(a, b) {
    r7.call(this);
    this.g = a;
    this.dc = b;
    this.closed = !1
  }
  r(y7, r7);
  y7.EMPTY = r7.EMPTY;
  y7.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = !0;
      var a = this.g,
        b = a.vc;
      this.g = null;
      !b || 0 === b.length || a.Fa || a.closed || (a = b.indexOf(this.dc), -1 !== a && b.splice(a, 1))
    }
  };
  var z7 = function() {
    function a() {
      Error.call(this);
      this.message = "object unsubscribed";
      this.name = "ObjectUnsubscribedError";
      return this
    }
    a.prototype = Object.create(Error.prototype);
    return a
  }();

  function A7(a) {
    v7.call(this, a);
    this.destination = a
  }
  r(A7, v7);
  A7.EMPTY = v7.EMPTY;
  A7.create = v7.create;

  function B7() {
    x7.call(this);
    this.vc = [];
    this.Zd = this.Fa = this.closed = !1;
    this.Cj = null
  }
  r(B7, x7);
  B7.prototype[u7] = function() {
    return new A7(this)
  };
  m = B7.prototype;
  m.xi = function(a) {
    var b = new C7(this, this);
    b.operator = a;
    return b
  };
  m.next = function(a) {
    if (this.closed) throw new z7;
    if (!this.Fa) {
      var b = this.vc,
        c = b.length;
      b = b.slice();
      for (var d = 0; d < c; d++) b[d].next(a)
    }
  };
  m.error = function(a) {
    if (this.closed) throw new z7;
    this.Zd = !0;
    this.Cj = a;
    this.Fa = !0;
    var b = this.vc,
      c = b.length;
    b = b.slice();
    for (var d = 0; d < c; d++) b[d].error(a);
    this.vc.length = 0
  };
  m.complete = function() {
    if (this.closed) throw new z7;
    this.Fa = !0;
    var a = this.vc,
      b = a.length;
    a = a.slice();
    for (var c = 0; c < b; c++) a[c].complete();
    this.vc.length = 0
  };
  m.unsubscribe = function() {
    this.closed = this.Fa = !0;
    this.vc = null
  };
  m.Kf = function(a) {
    if (this.closed) throw new z7;
    return x7.prototype.Kf.call(this, a)
  };
  m.Gd = function(a) {
    if (this.closed) throw new z7;
    if (this.Zd) return a.error(this.Cj), r7.EMPTY;
    if (this.Fa) return a.complete(), r7.EMPTY;
    this.vc.push(a);
    return new y7(this, a)
  };
  B7.create = function(a, b) {
    return new C7(a, b)
  };

  function C7(a, b) {
    B7.call(this);
    this.destination = a;
    this.source = b
  }
  r(C7, B7);
  C7.create = B7.create;
  C7.prototype.next = function(a) {
    var b = this.destination;
    b && b.next && b.next(a)
  };
  C7.prototype.error = function(a) {
    var b = this.destination;
    b && b.error && this.destination.error(a)
  };
  C7.prototype.complete = function() {
    var a = this.destination;
    a && a.complete && this.destination.complete()
  };
  C7.prototype.Gd = function(a) {
    return this.source ? this.source.subscribe(a) : r7.EMPTY
  };

  function qaa(a) {
    return a && "function" === typeof a.Ba
  };

  function D7() {
    r7.call(this)
  }
  r(D7, r7);
  D7.EMPTY = r7.EMPTY;
  D7.prototype.Ba = function() {
    return this
  };

  function E7(a, b) {
    r7.call(this);
    this.cc = a;
    this.g = b;
    this.pending = !1
  }
  r(E7, D7);
  E7.EMPTY = D7.EMPTY;
  E7.prototype.Ba = function(a, b) {
    b = void 0 === b ? 0 : b;
    if (this.closed) return this;
    this.state = a;
    a = this.id;
    var c = this.cc;
    null != a && (this.id = F7(this, a, b));
    this.pending = !0;
    this.delay = b;
    this.id = this.id || setInterval(c.flush.bind(c, this), void 0 === b ? 0 : b);
    return this
  };

  function F7(a, b, c) {
    c = void 0 === c ? 0 : c;
    if (null !== c && a.delay === c && !1 === a.pending) return b;
    clearInterval(b)
  }
  E7.prototype.j = function(a) {
    var b = !1,
      c = void 0;
    try {
      this.g(a)
    } catch (d) {
      b = !0, c = !!d && d || Error(d)
    }
    if (b) return this.unsubscribe(), c
  };
  E7.prototype.we = function() {
    var a = this.id,
      b = this.cc.actions,
      c = b.indexOf(this);
    this.state = this.g = null;
    this.pending = !1;
    this.cc = null; - 1 !== c && b.splice(c, 1);
    null != a && (this.id = F7(this, a, null));
    this.delay = null
  };

  function G7(a, b) {
    b = void 0 === b ? G7.now : b;
    this.g = a;
    this.now = b
  }
  G7.prototype.Ba = function(a, b, c) {
    b = void 0 === b ? 0 : b;
    return (new this.g(this, a)).Ba(c, b)
  };
  G7.now = function() {
    return Date.now()
  };

  function H7(a, b) {
    b = void 0 === b ? G7.now : b;
    G7.call(this, a, function() {
      return H7.g && H7.g !== c ? H7.g.now() : b()
    });
    var c = this;
    this.actions = [];
    this.active = !1
  }
  r(H7, G7);
  H7.now = G7.now;
  H7.prototype.Ba = function(a, b, c) {
    b = void 0 === b ? 0 : b;
    return H7.g && H7.g !== this ? H7.g.Ba(a, b, c) : G7.prototype.Ba.call(this, a, b, c)
  };
  H7.prototype.flush = function(a) {
    var b = this.actions;
    if (this.active) b.push(a);
    else {
      this.active = !0;
      do {
        var c = a;
        var d = a.state;
        a = a.delay;
        c.closed ? c = Error("executing a cancelled action") : (c.pending = !1, (a = c.j(d, a)) ? c = a : (!1 === c.pending && null != c.id && (c.id = F7(c, c.id, null)), c = void 0));
        if (c) break
      } while (a = b.shift());
      this.active = !1;
      if (c) {
        for (; a = b.shift();) a.unsubscribe();
        throw c;
      }
    }
  };
  var raa = new H7(E7);
  (function() {
    function a() {
      Error.call(this);
      this.message = "argument out of range";
      this.name = "ArgumentOutOfRangeError";
      return this
    }
    a.prototype = Object.create(Error.prototype);
    return a
  })();
  (function() {
    function a() {
      Error.call(this);
      this.message = "no elements in sequence";
      this.name = "EmptyError";
      return this
    }
    a.prototype = Object.create(Error.prototype);
    return a
  })();
  (function() {
    function a() {
      Error.call(this);
      this.message = "Timeout has occurred";
      this.name = "TimeoutError";
      return this
    }
    a.prototype = Object.create(Error.prototype);
    return a
  })();

  function I7(a, b, c) {
    this.B = a;
    this.C = b;
    this.g = c
  }
  I7.prototype.w = function() {
    var a = {},
      b = L5();
    null != b && (a.Authorization = b.scheme + " " + b.hash);
    a["X-Goog-AuthUser"] = String(this.C || 0);
    (b = this.g) && (a["X-Goog-PageId"] = b);
    return a
  };
  I7.prototype.o = function() {
    return {
      key: this.B
    }
  };
  I7.prototype.A = ca(!0);
  I7.prototype.j = ca(11);

  function J7(a, b) {
    this.B = a;
    this.g = b
  }
  J7.prototype.w = function() {
    var a = {};
    a.Authorization = "OAuth " + this.B.P();
    var b = this.g;
    b && (a["X-Goog-PageId"] = b);
    return a
  };
  J7.prototype.o = function() {
    return {}
  };
  J7.prototype.A = ca(!0);
  J7.prototype.j = ca(11);

  function K7(a, b) {
    this.g = a;
    this.B = b
  }
  K7.prototype.w = function() {
    return {}
  };
  K7.prototype.o = function() {
    return {
      key: this.g
    }
  };
  K7.prototype.A = ca(!1);
  K7.prototype.j = ca(13);

  function L7() {
    var a = this;
    this.w = new Set;
    this.status = new x7(function(b) {
      a.w.add(b);
      if (4 === a.state) k7(function() {
        b.complete()
      });
      else {
        var c = a.G;
        c && k7(function() {
          b.next(c)
        })
      }
      return function() {
        return a.w.delete(b)
      }
    })
  }
  L7.prototype.stop = function() {
    this.w.forEach(function(a) {
      k7(function() {
        a.complete()
      })
    });
    return Promise.resolve()
  };
  L7.prototype.hf = function() {
    if (B6(this)) {
      var a = new S6;
      Qe(a, 1, 0, 0);
      this.G = a;
      M7(this, a)
    }
  };
  L7.prototype.gf = function(a, b) {
    B6(this) && (a = b.g, b = new S6, Qe(b, 1, kaa(a), 0), this.G = b, M7(this, b))
  };
  L7.prototype.he = h();

  function M7(a, b) {
    var c = {};
    a = q(a.w);
    for (var d = a.next(); !d.done; c = {
        Hf: c.Hf
      }, d = a.next()) c.Hf = d.value, k7(function(e) {
      return function() {
        e.Hf.next(b)
      }
    }(c))
  }

  function B6(a) {
    return 1 === a.state || 2 === a.state
  }

  function saa(a) {
    this.g = a
  };
  var taa = {
    send: function(a, b, c, d, e, f, g) {
      cl(a, b, c, d, e, f, g)
    }
  };
  var uaa = new Set([1, 2]),
    vaa = new Set([408, 429]);

  function N7(a, b) {
    var c = void 0 === c ? taa : c;
    this.j = a;
    this.g = b;
    this.o = c
  }
  N7.prototype.subscribe = function(a) {
    var b = H(a, N6, 1);
    F(b, 4, this.g.j());
    return O7(this, "/v1/subscriptions", a, P6)
  };
  N7.prototype.unsubscribe = function(a) {
    F(a, 4, this.g.j());
    var b = new Q6;
    J(b, 1, a);
    return O7(this, "/v1/deleteSubscriptions", b, R6)
  };

  function waa(a, b) {
    var c = new L6;
    b = q(b);
    for (var d = b.next(); !d.done; d = b.next()) Se(c, 2, d.value, K6, void 0);
    return O7(a, "/v1/acknowledgments", c, M6)
  }

  function O7(a, b, c, d) {
    var e = new wl(a.j);
    Al(e, b);
    b = q(Object.entries(a.g.o()));
    for (var f = b.next(); !f.done; f = b.next()) {
      var g = q(f.value);
      f = g.next().value;
      g = g.next().value;
      U(e, f, g)
    }
    var k = {
      "Content-type": "application/json+protobuf"
    };
    Object.assign(k, a.g.w());
    var n = c.Ga();
    return new Promise(function(p, x) {
      a.o.send(e, function() {
        var A = -1 === this.S() ? void 0 : this.S();
        if (ml(this)) try {
          p(Ve(d, pl(this)))
        } catch (Ua) {
          x({
            code: 4,
            message: "Failed to deserialize response from Doorman server as " + (d + ": ") + pl(this),
            status: A,
            ri: !0
          })
        } else {
          var G = this.j,
            K = rl(this);
          var fa = this.S();
          fa = uaa.has(this.j) || 400 <= fa && 499 >= fa && !vaa.has(fa);
          x({
            code: G,
            message: K,
            status: A,
            ri: fa
          })
        }
      }, "POST", n, k, 2E4, a.g.A())
    })
  };
  ja();
  ma();

  function P7() {
    this.size = 0;
    this.Za = new Map
  }
  m = P7.prototype;
  m.clear = function() {
    this.Za.clear();
    this.size = this.Za.size
  };
  m.delete = function(a) {
    a = this.Za.delete(JSON.stringify(a));
    this.size = this.Za.size;
    return a
  };
  m.forEach = function(a, b) {
    var c = this;
    void 0 !== b && (a = a.bind(b));
    this.Za.forEach(function(d, e) {
      e = JSON.parse(e);
      a(d, e, c)
    })
  };
  m.get = function(a) {
    return this.Za.get(JSON.stringify(a))
  };
  m.has = function(a) {
    return this.Za.has(JSON.stringify(a))
  };
  m.set = function(a, b) {
    this.Za.set(JSON.stringify(a), b);
    this.size = this.Za.size;
    return this
  };
  P7.prototype[Symbol.iterator] = function() {
    return this.entries()
  };
  P7.prototype.entries = function() {
    return new Q7(this.Za.entries(), function(a) {
      var b = q(a);
      a = b.next().value;
      b = b.next().value;
      return [JSON.parse(a), b]
    })
  };
  P7.prototype.keys = function() {
    return new Q7(this.Za.keys(), JSON.parse)
  };
  P7.prototype.values = function() {
    return this.Za.values()
  };
  ja();
  ma();

  function Q7(a, b) {
    this.Za = a;
    this.bm = b
  }
  Q7.prototype[Symbol.iterator] = function() {
    return this
  };
  Q7.prototype.next = function() {
    var a = this.Za.next(),
      b = a.value;
    a = a.done;
    return {
      value: a ? void 0 : this.bm(b),
      done: a
    }
  };

  function R7(a, b) {
    this.name = a;
    this.j = b
  };

  function xaa(a) {
    var b = arguments.length,
      c = raa;
    qaa(arguments[arguments.length - 1]) && (c = arguments[arguments.length - 1], b--);
    var d = null;
    2 <= b && (d = arguments[1]);
    var e = Number.POSITIVE_INFINITY;
    3 <= b && (e = arguments[2]);
    return function(f) {
      return f.xi(new S7(a, d, e, c))
    }
  }

  function S7(a, b, c, d) {
    this.hc = a;
    this.ze = b;
    this.g = c;
    this.cc = d
  }
  S7.prototype.call = function(a, b) {
    return b.subscribe(new T7(a, this.hc, this.ze, this.g, this.cc))
  };

  function yaa() {
    this.j = []
  }

  function T7(a, b, c, d, e) {
    v7.call(this, a);
    this.hc = b;
    this.ze = c;
    this.o = d;
    this.cc = e;
    this.g = [];
    a = U7(this);
    (this.j = null == c || 0 > c) ? this.add(a.g = e.Ba(V7, b, {
      dc: this,
      context: a,
      hc: b
    })): (d = {
      hc: b,
      ze: c,
      dc: this,
      cc: e
    }, this.add(a.g = e.Ba(W7, b, {
      dc: this,
      context: a
    })), this.add(e.Ba(zaa, c, d)))
  }
  r(T7, v7);
  T7.EMPTY = v7.EMPTY;
  T7.create = v7.create;
  T7.prototype.Wc = function(a) {
    for (var b = this.g, c = b.length, d, e = 0; e < c; e++) {
      var f = b[e],
        g = f.j;
      g.push(a);
      g.length == this.o && (d = f)
    }
    d && (a = d, X7(this, a), a = a.g, a.unsubscribe(), this.remove(a), !this.closed && this.j && (a = U7(this), b = this.hc, this.add(a.g = this.cc.Ba(V7, b, {
      dc: this,
      context: a,
      hc: b
    }))))
  };
  T7.prototype.Cc = function(a) {
    this.g.length = 0;
    v7.prototype.Cc.call(this, a)
  };
  T7.prototype.Vc = function() {
    for (var a = this.g, b = this.destination; 0 < a.length;) {
      var c = a.shift();
      b.next(c.j)
    }
    v7.prototype.Vc.call(this)
  };
  T7.prototype.we = function() {
    this.g = null
  };

  function U7(a) {
    var b = new yaa;
    a.g.push(b);
    return b
  }

  function X7(a, b) {
    a.destination.next(b.j);
    a = a.g;
    0 <= (a ? a.indexOf(b) : -1) && a.splice(a.indexOf(b), 1)
  }

  function V7(a) {
    var b = a.dc,
      c = a.context;
    c && X7(b, c);
    b.closed || (a.context = U7(b), a.context.g = this.Ba(a, a.hc))
  }

  function zaa(a) {
    var b = a.ze,
      c = a.hc,
      d = a.dc,
      e = a.cc,
      f = U7(d);
    d.closed || (d.add(f.g = e.Ba(W7, c, {
      dc: d,
      context: f
    })), this.Ba(a, b))
  }

  function W7(a) {
    X7(a.dc, a.context)
  };
  var Aaa = {
    Gb: function(a, b) {
      return Wk(a, b)
    },
    clear: function(a) {
      Xk(a)
    }
  };

  function Y7(a) {
    this.g = a
  }

  function Baa(a, b) {
    var c = !1,
      d = a.Gb(function() {
        c || b()
      }, 3E4);
    return new Y7(function() {
      c = !0;
      a.clear(d)
    })
  }
  Y7.prototype.cancel = function() {
    this.g()
  };

  function Z7(a, b, c) {
    c = void 0 === c ? Aaa : c;
    L7.call(this);
    this.A = a;
    this.config = b;
    this.H = c;
    this.g = new P7;
    this.B = new Map;
    this.state = 0;
    this.Jb = new c2(500, 1024);
    this.D = new B7;
    this.channel = b.w(this)
  }
  r(Z7, L7);
  m = Z7.prototype;
  m.start = function() {
    var a = this;
    this.config.g instanceof J7 ? this.o = this.config.g.B.subscribe(function(b) {
      a.Sc(b)
    }) : this.config.g instanceof K7 && (this.o = this.config.g.B.subscribe(function(b) {
      a.channel.tf(b)
    }));
    this.channel.Si("tango_web", this).open();
    this.C = this.D.g(xaa(this.config.j, -1, this.config.o)).subscribe(function(b) {
      0 < b.length && waa(a.A, b).catch(function(c) {
        JSON.stringify(c)
      })
    });
    this.state = 2;
    return this
  };

  function Caa(a, b) {
    return new x7(function(c) {
      var d = a.g.get(b);
      d || (d = new $7(b.j, function(e) {
        Daa(a, b, e)
      }), a.g.set(b, d), 4 === a.state && d.terminate());
      return Eaa(d, c)
    })
  }

  function Daa(a, b, c) {
    if (B6(a) && a.g.get(b) === c)
      if (0 === c.g.size) {
        if (null == c.j) {
          var d = Baa(a.H, function() {
            c.j = void 0;
            C6(a, c);
            a.g.delete(b);
            null != c.A && a.B.delete(c.A)
          });
          c.j = d
        }
      } else c.j && (c.j.cancel(), c.j = void 0), 0 === c.state && null != a.j && D6(a, c, b, a.j)
  }
  m.Sc = function(a) {
    this.channel.Sc(a)
  };
  m.ie = function(a, b) {
    JSON.stringify(b);
    a = new S6;
    Qe(a, 1, 2, 0);
    Qe(a, 2, b.description, "");
    M7(this, a)
  };

  function F6(a, b) {
    if (B6(a)) {
      var c = Y(b, 1),
        d = Y(c, 1);
      d = Y(d, 2);
      d = a.B.get(d) || new R7(d, !1);
      if (d = a.g.get(d)) {
        var e = c.Ra();
        c = ob(Y(e, 3));
        var f = L1(e, 1) ? Y(e, 1) : void 0,
          g = L1(e, 2) ? Y(e, 2) : void 0;
        e = Q1(e, 4);
        c = {
          version: c,
          eh: f,
          Bs: g,
          Zl: !1,
          Yl: e
        };
        a8(d, c);
        d = q(d.g);
        for (f = d.next(); !f.done; f = d.next()) f.value.next(c)
      } else null != a.j && (c = Y(Y(b, 1), 1), d = new N6, f = Y(c, 2), F(d, 1, f), F(d, 3, a.j), F(d, 4, a.config.g.j()), c = Y(c, 1), F(d, 5, c), a.unsubscribe(d));
      b = Y(b, 3);
      d = (new Date).getTime();
      c = new K6;
      F(c, 1, b);
      F(c, 2, 1E3 * d);
      a.D.next(c)
    }
  }

  function D6(a, b, c, d) {
    b.state = 1;
    var e = Faa();
    b.C = e;
    var f = new N6;
    F(f, 1, c.name);
    F(f, 3, d);
    F(f, 5, e);
    F(f, 4, a.config.g.j());
    var g = new O6;
    J(g, 1, f);
    F(g, 2, b.D);
    b.w = new Promise(function(k, n) {
      b8(a, function() {
        return a.A.subscribe(g)
      }, function(p) {
        var x = f.clone();
        null != B(p, 2) && (b.A = B(p, 2), F(x, 1, b.A));
        k(x);
        if (b.C === e && a.g.get(c) === b && 2 !== b.state) {
          null != B(p, 2) && a.B.set(B(p, 2), c);
          b.state = 2;
          p = B(p, 1);
          p = {
            version: ob(p),
            Zl: !0,
            Yl: !0
          };
          a8(b, p);
          x = q(b.g);
          for (var A = x.next(); !A.done; A = x.next()) A.value.next(p)
        }
      }, function(p) {
        n(p);
        if (d === a.j && b === a.g.get(c)) {
          JSON.stringify(c);
          JSON.stringify(p);
          if (0 < b.g.size) {
            p = q(b.g);
            for (var x = p.next(); !x.done; x = p.next()) x.value.error(Gaa());
            b.g.clear();
            b.B(b)
          }
          b.state = 0;
          b.w = void 0;
          b.C = void 0
        }
      }, function() {
        return a.j === d && 0 < b.g.size
      })
    })
  }

  function C6(a, b) {
    b.w && (b.w.then(function(c) {
      a.unsubscribe(c)
    }, h()), b.state = 0, b.w = void 0, b.C = void 0)
  }
  m.unsubscribe = function(a) {
    this.A.unsubscribe(a).then(h()).catch(h())
  };
  m.stop = function() {
    this.state = 3;
    this.o && (this.o.unsubscribe(), this.o = void 0);
    this.C && (this.C.unsubscribe(), this.C = void 0);
    L7.prototype.stop.call(this);
    for (var a = q(this.g.values()), b = a.next(); !b.done; b = a.next()) b = b.value, C6(this, b), b.terminate();
    this.state = 4;
    return Promise.resolve()
  };

  function b8(a, b, c, d, e) {
    b().then(function(f) {
      a.Jb.reset();
      c(f)
    }).catch(function(f) {
      f instanceof Error || (f.ri ? (a.Jb.reset(), d(f)) : (null == e || e()) && a.H.Gb(function() {
        b8(a, b, c, d, e)
      }, d2(a.Jb)))
    })
  }

  function Faa() {
    for (var a = []; 8 > a.length;) a.push(Math.floor(256 * Math.random()));
    return ze(a)
  }

  function $7(a, b) {
    this.D = a;
    this.B = b;
    this.state = 0;
    this.g = new Set
  }

  function Eaa(a, b) {
    if (3 === a.state) return b.complete(), h();
    a.g.add(b);
    null != a.o && b.next(a.o);
    a.B(a);
    return function() {
      a.g.delete(b);
      a.B(a)
    }
  }

  function a8(a, b) {
    if (null == a.o || 0 < hb(b.version, a.o.version)) a.o = b
  }
  $7.prototype.terminate = function() {
    this.state = 3;
    for (var a = q(this.g), b = a.next(); !b.done; b = a.next()) b.value.complete();
    this.g.clear()
  };

  function Gaa() {
    var a = new S6;
    Qe(a, 1, 2, 0);
    return a
  }

  function c8(a, b, c, d, e) {
    this.g = a;
    this.w = b;
    this.A = c;
    this.j = d;
    this.o = e
  }
  r(c8, saa);

  function Haa(a, b, c) {
    this.A = a;
    this.B = b;
    this.C = c
  }

  function Iaa(a, b) {
    a.o = function(c) {
      b.g.push(c);
      return b.j
    };
    return a
  }

  function Jaa(a, b) {
    if (a.G) var c = new J7(a.G, a.g);
    else {
      if (!a.j) throw Error("An API key is required");
      a.D ? c = new K7(a.j, a.D) : c = new I7(a.j, a.w, a.g)
    }
    var d = c instanceof I7 ? a.B : a.C;
    a.o || (c instanceof I7 && J5(b, !1), a.g && (b.g = a.g), a.w && (b.o = a.w), a.o = function(e) {
      e = J6(b, e);
      e.open();
      return e
    });
    return new c8(c, a.o, d, 250, 20)
  };

  function d8(a, b) {
    T.call(this);
    var c = this;
    this.context = a;
    this.A = -1;
    this.U = this.G = this.g = 0;
    this.aa = this.la = this.W = this.ea = null;
    this.B = 0;
    this.o = this.D = !1;
    this.j = b;
    this.O = !1;
    this.xa = 0;
    this.w = null;
    this.L = 0;
    this.va = !1;
    ij(this, function() {
      return c.stop()
    })
  }
  r(d8, T);

  function PP(a) {
    return [a.A, a.G, a.g, a.xa, a.ea, a.W, a.o, a.D, a.la, a.aa]
  }

  function e8(a, b) {
    b > a.g && (a.log("Changes processed up to " + b.toString()), a.g = b, a.xa++);
    MO(a.context.U, "InitialChanges", a.context.w.g("aU7Ts") ? "finished" : b + "/" + a.G)
  }

  function f8(a, b) {
    b > a.G && (a.log("Changes scheduled up to " + b.toString()), a.G = b)
  }
  m = d8.prototype;
  m.Sg = function() {
    this.g && !this.o && (this.log("Restarting change processor in response to user activity"), this.start(this.g))
  };
  m.Pc = function(a) {
    var b = this;
    if (!this.D && this.o) {
      null != this.j || this.w || (this.w = mN(this.context.L, 106003));
      this.D = !0;
      this.la = this.context.A.g();
      this.aa = this.context.Ia.yb();
      var c = new tB;
      F(c, 1, this.g + 1);
      F(c, 2, 1E3);
      F(c, 8, this.j);
      var d = new ju;
      ku(d, this.reason);
      J(c, 6, d);
      return qQ(this.context).then(function(e) {
        return rQ(e, c, {
          Ui: a,
          timestamp: v()
        })
      }).then(function(e) {
        return void Kaa(b, e)
      }).fa(function(e) {
        b.log("Killing change processor at " + b.g);
        b.D = !1;
        b.stop();
        e instanceof Wz ? (48 == e.eb() || 4 == e.eb() || 7 == e.eb() ||
          2 == e.ld() || 22 == e.ld() || CF(e) || h1(new V("b/74491949 Error restarting change processor for a DsError. Inactive time:" + (b.B ? (v() - b.B) / 1E3 : null) + (" responseCode:" + e.De()) + (" ErrorReason:" + e.eb()), e)), b.ea = e.De(), b.W = e.eb(), 4 == e.eb() ? b.log("Permanently disabling change processor due to a RESOURCE_NOT_FOUND error.") : 22 == e.ld() ? b.log("Permanently disabling change processor due to a FORBIDDEN_REQUEST error.") : g8(b)) : (e = zF(e) ? e : Error(e), h1(new V("b/74491949 Error restarting change processor for non-DsError. Inactive time:" +
          (b.B ? (v() - b.B) / 1E3 : null), void 0, e)), g8(b));
        h8(b, !1, !b.O)
      })
    }
    return Wh()
  };

  function Kaa(a, b) {
    a.D = !1;
    a.B = v();
    if (a.o) {
      a.w && a.L++;
      var c = I(b, tA, 4);
      c.forEach(function(g) {
        (g = wA(g)) && F(g, 82, 3)
      });
      var d = a.context.j;
      if (!a.j) {
        var e = [],
          f = [];
        c.forEach(function(g) {
          var k = g.ba();
          if (g.Vb()) e.push(g);
          else {
            var n = rH(d.j, k);
            n = n ? B(n, 2) : [];
            var p = B(wA(g), 2);
            n.filter(function(x) {
              return !p.includes(x)
            }).length ? f.push(k) : e.push(g)
          }
        });
        c = e;
        f.length && (a.log("Refreshing ids to check for missing parents: " + f.join(",")), kR(d.B, f))
      }
      SQ(d, c);
      CR(a.context.D, c, a.j);
      mV(a.context.tb, c);
      Laa(a, b)
    }
  }

  function Laa(a, b) {
    var c = B(b, 3) || 0;
    b = B(b, 2) ? B(b, 2) - 1 : c;
    b <= a.g && a.U++;
    f8(a, c);
    e8(a, b);
    a.g < a.G && 2 > a.U ? a.Pc() : (c = !a.O, null == a.j && c && (a.O = !0, VS(a.context)), h8(a, !0, c), a.U = 0)
  }
  m.start = function(a) {
    this.o = !0;
    this.log("Starting at " + a);
    this.A = a;
    e8(this, this.A);
    null == this.j && MO(this.context.U, "InitialChanges", this.A + "/" + this.A)
  };
  m.stop = function() {
    this.log("Stopping change processor at: " + this.g);
    this.o = !1
  };

  function g8(a) {
    a.log("Temporarily disabling change processor.");
    var b = oD(a.context.g);
    b = D(b, 24, 36E5) + Math.random() * D(b, 7, 9E5);
    t.setTimeout(function() {
      a.log("Restarting change processor at: " + a.g);
      a.o || a.start(a.g)
    }, b)
  }

  function h8(a, b, c) {
    if (a.w) {
      var d = a.w;
      var e = H(qJ(d), Dq, 4);
      e || (e = new Dq, d = qJ(d), J(d, 4, e));
      F(e, 1, a.L);
      F(e, 2, a.ti());
      F(e, 3, b);
      F(e, 4, c && !a.va);
      oJ(a.w);
      a.w = null;
      a.L = 0
    }
    a.va = !0
  }
  m.log = function(a) {
    UF(this.context.o, this.Gg, (null == this.j ? "Subscribed" : this.j) + ": " + a)
  };
  m.ti = ca(!1);
  m.reason = 0;
  m.Gg = "drive.ds.sync.change.ChangeProcessor";

  function i8(a, b) {
    d8.call(this, a, b)
  }
  r(i8, d8);
  i8.prototype.start = function(a) {
    d8.prototype.start.call(this, a);
    this.C()
  };
  i8.prototype.C = function() {
    this.Pc(!0);
    var a = D(oD(this.context.g), 2, 18E5);
    this.o && a && t.setTimeout(this.C.bind(this), a)
  };
  i8.prototype.reason = 302;
  i8.prototype.Gg = "drive.ds.sync.change.PullChangeProcessor";

  function j8(a, b, c) {
    Q.call(this);
    this.j = b;
    this.g = c
  }
  r(j8, Q);
  j8.prototype.start = function() {
    var a = this.g.start();
    ij(this, function() {
      return a.stop()
    })
  };
  j8.prototype.register = function(a, b, c) {
    return Caa(this.g, c ? new R7("team-drive-" + c, !1) : new R7("Drive", !0)).subscribe(function(d) {
      return a(d.version && ab(d.version))
    }, function(d) {
      return b(d.toString())
    })
  };

  function k8(a, b, c, d) {
    this.j = a;
    this.A = b;
    this.g = c;
    this.o = d
  }

  function l8(a, b, c, d, e) {
    k8.call(this, a, b, d, e);
    this.w = c
  }
  r(l8, k8);

  function m8(a, b, c) {
    d8.call(this, a, c);
    this.Ia = b;
    this.C = null;
    this.I = new DK(1E3, D(oD(a.g), 20, 18E5));
    this.H = null
  }
  r(m8, d8);
  m = m8.prototype;
  m.start = function(a) {
    d8.prototype.start.call(this, a);
    this.H = this.Ia.register(this.Ll.bind(this), this.Kl.bind(this), this.j);
    this.Pc()
  };
  m.stop = function() {
    d8.prototype.stop.call(this);
    this.H && (this.H.unsubscribe(), this.H = null)
  };
  m.Sg = function() {
    d8.prototype.Sg.call(this);
    this.I.reset();
    this.C && this.Pc(!0)
  };
  m.Pc = function(a) {
    a = d8.prototype.Pc.call(this, a);
    t.clearTimeout(this.C);
    this.C = null;
    return a
  };
  m.Ll = function(a) {
    a && f8(this, a - 1);
    this.C || (this.C = t.setTimeout(this.Pc.bind(this, !0), this.I.P()), EK(this.I))
  };
  m.Kl = function(a) {
    this.log(a)
  };
  m.ti = ca(!0);
  m.reason = 303;
  m.Gg = "drive.ds.sync.change.PushChangeProcessor";

  function n8(a) {
    Q.call(this);
    this.j = null;
    this.g = {};
    this.D = void 0 !== a ? !a : !0;
    this.o = null;
    this.A = !1;
    this.B = new Mm(this);
    R(this, this.B);
    this.w = -1
  }
  w(n8, Q);

  function B1(a, b) {
    a.j || (a.j = b, a.D && (a.o = Maa(a), R(a, a.o)), o8(a, null), vi(b.Tc.Jd(), function(c) {
      a.w = c;
      b.Bj = a;
      b.Zi.callback(a)
    }), a.B.R(b.A, "t", function(c) {
      c.g() || Naa(a)
    }))
  }

  function p8(a) {
    if (!a.j) throw Error("The context has not been set.");
    return a.j
  }
  n8.prototype.start = function() {
    this.g.subscribed.yd.start(this.w)
  };

  function k0(a, b) {
    b = b || "subscribed";
    var c = a.g[b].yd.g;
    return 0 >= c && "subscribed" == b ? a.w : c
  }

  function bT(a, b, c) {
    var d = o8(a, b);
    d.count++;
    if (c) d.Xf = c, qT(a);
    else if (1 == d.count) {
      var e = new WF(b);
      b = a.C.bind(a, b, d);
      qQ(a.j).then(function(f) {
        return rQ(f, e)
      }).then(b)
    }
  }
  n8.prototype.C = function(a, b, c) {
    this.g[a] == b && (this.g[a].fh = B(c, 3), qT(this))
  };

  function qT(a) {
    Zb(a.g, function(b, c) {
      "subscribed" != c && (c = b.yd, c.g || this.j.w.g("L6uQWd") && (b.Xf ? c.start(b.Xf) : b.fh && c.start(b.fh)))
    }, a)
  }

  function XT(a, b, c) {
    var d = a.g[b];
    d && (d.count--, 0 == d.count || c) && (d.yd.dispose(), mc(a.g, b))
  }

  function A1(a) {
    Zb(a.g, function(b) {
      b.yd.Sg()
    })
  }

  function o8(a, b) {
    var c = b || "subscribed";
    a.g[c] || (b = a.o ? new m8(p8(a), a.o, b) : new i8(p8(a), b), R(a, b), a.g[c] = {
      yd: b,
      Xf: null,
      fh: null,
      count: 0
    });
    return a.g[c]
  }

  function Naa(a) {
    a.o && !a.A && (a.A = !0, ei(Yk(3E5), function() {
      a.A = !1
    }), a.o.j.j.Bd())
  }

  function Maa(a) {
    var b = uF();
    if (!b) {
      var c = Ig("DIV", {
          id: "lcsclient",
          style: "display: none"
        }),
        d = Ig("DIV", {
          id: "lcssenderclient",
          style: "display: none"
        }),
        e = document.body;
      e.appendChild(c);
      e.appendChild(d)
    }
    a = p8(a).g;
    c = 1;
    b && (c = 2);
    b = new l8(D(oD(a), 40, ""), D(oD(a), 41, ""), D(oD(a), 25, ""), iD(qD(a)), c);
    2 == b.o ? (a = new M5(b.j, "cello"), a.w() || (a.L = !0)) : a = new t6(b.j, "cello", "lcsclient");
    J5(a, 1 == b.o);
    a.B = "appscommonstorage";
    b.g && (a.o = b.g);
    a = new i7(a, b.A);
    c = new wl("https://client-channel.google.com/client-channel/client");
    new wl("https://client-channel.google.com/client-channel/channel");
    d = new wl("https://signaler-pa.clients6.google.com");
    e = new wl("https://signaler-pa.googleapis.com");
    c = Iaa(new Haa(c, d, e), a);
    c.j = b.w;
    c = Jaa(c, new t6(c.A.toString(), "cello", "lcsclient"));
    c = new Z7(new N7(c.A, c.g), c);
    b = new j8(b, a, c);
    b.start();
    return b
  };

  function q8() {
    var a = this;
    Q.call(this);
    this.g = Oaa();
    R(this, this.g);
    this.D = this.g.Gh().then(function() {
      return a.g.sync()
    });
    this.j = this.w = this.A = this.o = this.B = this.C = 0
  }
  w(q8, Q);

  function Oaa() {
    var a = Xg(),
      b = [GE(), IE(), KE()],
      c = EE(),
      d = Kb(BE(), b, c);
    d = oE(nE(lE(kE(jE(iE(hE(gE(fE(ZD(eE(dE(cE(bE(aE(UD(WD(XD(VD($D(mE(YD(new TD, ah(a, "docs-offline-dck"))), ah(a, "docs-cgj") || ah(a, "jobset"))), ah(a, "docs-pid")), ah(a, "docs-offline-ue")), YC[ah(a, "docs-cci")]), ah(a, "docs-caru")), ah(a, "docs-cbau")), ah(a, "docs-ctcu")), ah(a, "docs-ctsu")), ah(a, "buildLabel")), Zg(a, "docs-offline-ecsd")))), $g(a, "docs-cpv")), $g(a, "docs-offline-cmpsm"))), Zg(a, "docs-ceci")), Zg(a, "docs-cecpcls"))), d);
    var e = bh(a, "docs-cpks");
    e && e.length && (e = e.map(function(f) {
      return new fD(JSON.parse(f))
    }), d.g = e);
    d = pE(d);
    Zg(a, "docs-offline-dcud") && (F(d, 39, 10), tD(d, Kb(b, c)));
    a = C1(d);
    a.Rf(new n8(!0));
    return a
  }

  function Paa(a) {
    var b = [GE(), IE(), KE()];
    b = r8(a, b, 500);
    if (!Zg(Xg(), "docs-offline-esdas") || Zg(Xg(), "docs-localstore-dom")) return b;
    var c = [ME(), OE(), PE()];
    a = r8(a, c, 100);
    return $h([b, a]).then(function(d) {
      return Yb(d)
    })
  }

  function r8(a, b, c) {
    return a.D.then(function() {
      return $h(yb(b, function(d) {
        return Qaa(this, d)
      }, a))
    }).then(function(d) {
      d = zE(d[0], d[1], d[2], c);
      return yb(d, function(e) {
        return AE(e)
      })
    })
  }

  function Qaa(a, b) {
    var c = a.g.query(b);
    return ei(new Rh(function(d, e) {
      c.R("m", function() {
        1 == c.S() && (a.C++, a.o += zN(c).ta().length, d(zN(c).ta()));
        2 == c.S() && e(Error("Unable to query for relevance while offline."))
      });
      c.Oc("j", function(f) {
        a.B++;
        var g = "ItemService query failed!";
        f && (g += " " + f.error.message);
        e(Error(g))
      });
      PF(c)
    }), function() {
      return c.dispose()
    })
  }

  function Raa(a, b, c) {
    c = void 0 === c ? !1 : c;
    return a.D.then(function() {
      var d = c ? QE(307, b) : QE(302, b);
      return Saa(a, d)
    }).then(function(d) {
      return ac(d, function(e) {
        return e && uE[e.ma()] ? AE(e) : null
      })
    })
  }

  function Saa(a, b) {
    var c = a.g.Fh(b);
    return ei(new Rh(function(d) {
      c.R("m", function() {
        1 == c.S() && (a.A++, a.j = cc(WN(c).g), d(WN(c).g));
        2 == c.S() && d(WN(c).g)
      });
      c.Oc("j", function() {
        a.w++;
        a.j = cc(WN(c).g);
        d(WN(c).g)
      });
      UN(c)
    }), function() {
      return c.dispose()
    })
  }

  function Taa(a) {
    var b = [a.g.Sf(!0).then(function() {
      return a.g.Ie()
    })];
    b.push(Yk(1E4));
    return Zh(b)
  }

  function Uaa(a) {
    return vi(a.g.Rh().Vf(), function(b) {
      return b + JSON.stringify({
        c_qsc: a.C,
        c_qfc: a.B,
        c_qsic: a.o,
        c_fsc: a.A,
        c_ffc: a.w,
        c_fsic: a.j
      })
    })
  };

  function s8() {}
  s8.prototype.get = function() {
    return new q8
  };

  function t8() {
    Q.call(this);
    this.g = null
  }
  w(t8, Q);

  function Vaa(a, b, c) {
    a.ua() || (u8(a), a.g = new Image, a.g.onload = function() {
      c && c(!0);
      u8(a)
    }, a.g.onerror = function() {
      c && c(!1);
      u8(a)
    }, a.g.src = b)
  }

  function u8(a) {
    if (a.g) try {
      a.g.onload = null, a.g.onerror = null, a.g = null
    } catch (b) {}
  }
  t8.prototype.N = function() {
    u8(this)
  };

  function v8() {
    Q.call(this);
    this.g = null
  }
  w(v8, Q);
  v8.prototype.Ba = function(a, b) {
    jj(this.g);
    this.g = new Lm(a, b);
    this.g.start()
  };
  v8.prototype.N = function() {
    jj(this.g)
  };

  function w8(a, b, c, d, e) {
    var f = this;
    T.call(this);
    this.B = new Mm(this);
    this.O = a;
    this.j = new Lm(function() {
      f.j.stop();
      x8(f, y8(f, !1))
    }, 1E4);
    this.I = c || 12E4;
    this.w = new Q2;
    this.o = b;
    this.H = v();
    this.A = d || new v8;
    this.G = e || new t8;
    this.B.R(this.w, "online", this.D).R(this.w, "offline", this.D);
    this.C = bi();
    x8(this, !0, !0)
  }
  w(w8, T);
  w8.prototype.g = l("o");

  function x8(a, b, c) {
    var d = v(),
      e = a.o ? 25E3 : 1E4;
    if (b || !a.o) b = c ? 0 : e, a.H = d - b;
    else {
      b = e;
      c = a.H + e;
      for (var f = 1; c < d && b < a.I;) b = Math.min(a.I, e * Math.pow(1.2, f++)), c += b
    }
    a.A.Ba(u(a.L, a), b)
  }
  w8.prototype.L = function() {
    x8(this);
    Waa(this)
  };

  function y8(a, b) {
    a.C.resolve();
    return b != a.o ? (a.o = b, a.dispatchEvent(b ? "V" : "W"), !0) : !1
  }
  w8.prototype.D = function() {
    x8(this, !0, !0)
  };

  function Waa(a) {
    a.j.stop();
    a.j.start();
    Vaa(a.G, Mk(a.O), function(b) {
      a.j.stop();
      x8(a, y8(a, b))
    })
  }
  w8.prototype.N = function() {
    this.j.stop();
    kj(this.A, this.j, this.w, this.B, this.G);
    w8.na.N.call(this)
  };

  function z8(a, b, c, d, e, f) {
    Q.call(this);
    var g = this;
    this.B = new ih;
    this.w = new ih;
    this.o = new th;
    this.A = new Mm(this);
    c = void 0 !== c ? c : Zg(Xg(), "icso");
    this.j = f || new w8(a, !c, b, d, e);
    this.j.C.g.then(function() {
      g.o.callback(null)
    }, function(k) {
      g.o.V(Ji(k))
    });
    this.A.R(this.j, "V", function() {
      return g.B.dispatchEvent(null)
    }).R(this.j, "W", function() {
      return g.w.dispatchEvent(null)
    })
  }
  r(z8, Q);
  z8.prototype.g = function() {
    return this.j.g()
  };

  function A8(a, b, c, d, e, f) {
    Qm.call(this, d, f);
    this.C = b;
    this.w = b + "-f";
    this.j = b + "-n";
    this.A = c;
    this.aa = a;
    this.g = null;
    this.X = e || t.indexedDB || t.webkitIndexedDB;
    a = this.X.open("DocsErrors", 1);
    a.onsuccess = u(this.ol, this);
    a.onupgradeneeded = u(this.Ol, this);
    a.onerror = u(this.hi, this);
    a.onblocked = u(this.hi, this)
  }
  r(A8, Qm);
  m = A8.prototype;
  m.ol = function(a) {
    var b = a.target.result,
      c = B8(b, "readwrite");
    vi(new oN([C8(this.w, c), C8(this.j, c)]), function(d) {
      null == d[0][1] || null == d[1][1] ? (d = c.objectStore("Errors"), d.put({
        key: this.w,
        value: "1"
      }), d.put({
        key: this.j,
        value: "1"
      }), c.oncomplete = u(this.Bh, this, b)) : this.Bh(b)
    }, this)
  };
  m.Bh = function(a) {
    this.g = a;
    this.B()
  };
  m.Ol = function(a) {
    a.target.transaction.db.createObjectStore("Errors", {
      keyPath: "key"
    })
  };
  m.hi = function(a) {
    this.g && (this.g.close(), this.g = null);
    qn(this.aa, Error("IdbErrorSender: " + Zn(a)))
  };
  m.bf = function(a) {
    if (!this.g) return this.A.bf(a);
    var b = B8(this.g, "readwrite"),
      c = new pi;
    vi(C8(this.j, b), function(d) {
      if (d) {
        var e = b.objectStore("Errors");
        e.put({
          key: this.j,
          value: String(d + 1)
        });
        e.put({
          key: this.C + "-e-" + d,
          value: Pk(a)
        });
        b.oncomplete = u(c.callback, c)
      } else c.callback()
    }, this);
    return c
  };
  m.Hc = function() {
    if (!this.g) return this.A.Hc();
    var a = B8(this.g, "readwrite"),
      b = new pi;
    vi(new oN([C8(this.w, a), C8(this.j, a)]), function(c) {
      var d = c[0][1];
      c = c[1][1];
      if (!d || c <= d) b.callback();
      else {
        var e = a.objectStore("Errors");
        e["delete"](this.C + "-e-" + d);
        d++;
        e.put({
          key: this.w,
          value: String(d)
        });
        vi(D8(this, a), function(f) {
          0 == f && (e.put({
            key: this.w,
            value: "1"
          }), e.put({
            key: this.j,
            value: "1"
          }));
          a.oncomplete = u(b.callback, b)
        }, this)
      }
    }, this);
    return b
  };
  m.md = function() {
    if (!this.g) return this.A.md();
    var a = B8(this.g, "readonly");
    return vi(new oN([C8(this.w, a), C8(this.j, a)]), function(b) {
      var c = b[0][1];
      return !c || 1 > b[1][1] - c ? null : vi(E8(this.C + "-e-" + c, a), function(d) {
        return d && (d = JSON.parse(d)) ? d : vi(this.Hc(), this.md, this)
      }, this)
    }, this)
  };
  m.nd = function() {
    if (!this.g) return this.A.nd();
    var a = B8(this.g, "readonly");
    return D8(this, a)
  };

  function D8(a, b) {
    return vi(new oN([C8(a.w, b), C8(a.j, b)]), function(c) {
      return c[1][1] - c[0][1]
    })
  }

  function C8(a, b) {
    return vi(E8(a, b), function(c) {
      c = parseInt(c, 10);
      return 0 > c || isNaN(c) ? null : c
    })
  }

  function E8(a, b) {
    b = b.objectStore("Errors");
    var c = new pi;
    b.get(a).onsuccess = function(d) {
      d.target.result ? c.callback(d.target.result.value) : c.callback(null)
    };
    return c
  }

  function B8(a, b) {
    var c = ["Errors"];
    try {
      return a.transaction(c, b)
    } catch (d) {
      throw b = $n(a.objectStoreNames), Qi(d, {
        databaseName: a.name,
        databaseObjectStores: b,
        databaseVersion: a.version.toString(),
        transactionObjectStores: c.toString()
      });
    }
  }
  m.N = function() {
    this.g && (this.g.close(), this.g = null);
    Qm.prototype.N.call(this)
  };

  function F8() {
    try {
      var a = t.localStorage;
      if (a && (oe || pe || Pd) && (a.setItem("test", "test"), "test" == a.getItem("test") && (a.removeItem("test"), null == a.getItem("test")))) return !0
    } catch (b) {}
    return !1
  };

  function G8() {
    Q.call(this);
    this.g = {}
  }
  r(G8, Q);
  G8.prototype.Gb = function(a, b, c) {
    var d = this;
    if (Ja(a)) c && (a = u(a, c));
    else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    var e = new H8;
    b = Wk(function() {
      var f = a,
        g = e.F();
      null !== g && delete d.g[g];
      f()
    }, b);
    this.g[b] = !0;
    return e.g = b
  };
  G8.prototype.clear = function(a) {
    null !== a && delete this.g[a];
    Xk(a)
  };
  G8.prototype.N = function() {
    for (var a in this.g) this.clear(Number(a));
    Q.prototype.N.call(this)
  };

  function H8() {
    this.g = null
  }
  H8.prototype.F = l("g");

  function I8(a, b, c) {
    Qm.call(this, a, c);
    this.C = b;
    this.A = b + "-v";
    this.w = b + "-f";
    this.j = b + "-n";
    this.g = t.localStorage;
    F8();
    a = J8(this, this.A);
    if (!a || 1 > a) this.g.setItem(this.A, "1"), this.g.setItem(this.w, "1"), this.g.setItem(this.j, "1");
    this.B();
    this.X = new G8;
    R(this, this.X);
    this.X.Gb(this.dm, 3E4, this)
  }
  r(I8, Qm);
  m = I8.prototype;
  m.bf = function(a) {
    var b = J8(this, this.j);
    if (!b || 1 != J8(this, this.A)) return Fi();
    try {
      this.g.setItem(this.j, String(b + 1)), this.g.setItem(this.C + "-e-" + b, Pk(a))
    } catch (c) {}
    return Fi()
  };
  m.Hc = function() {
    var a = J8(this, this.w);
    if (!a || 1 != J8(this, this.A)) return Fi();
    this.g.removeItem(this.C + "-e-" + a);
    a++;
    this.g.setItem(this.w, String(a));
    return vi(this.nd(), function(b) {
      0 == b && (this.g.setItem(this.w, "1"), this.g.setItem(this.j, "1"))
    }, this)
  };
  m.md = function() {
    var a = J8(this, this.w);
    return a && 1 == J8(this, this.A) ? vi(this.nd(), function(b) {
      if (1 > b) return null;
      try {
        var c = this.g.getItem(this.C + "-e-" + a);
        if (c) {
          var d = JSON.parse(c);
          if (d) return d
        }
      } catch (e) {}
      return vi(this.Hc(), this.md, this)
    }, this) : Fi(null)
  };
  m.nd = function() {
    return Fi(J8(this, this.j) - J8(this, this.w))
  };

  function J8(a, b) {
    return (a = a.g.getItem(b)) ? K8(a) : null
  }

  function K8(a) {
    a = parseInt(a, 10);
    return 0 > a || isNaN(a) ? null : a
  }
  m.dm = function() {
    if (J8(this, this.j) && 1 == J8(this, this.A))
      for (var a = this.C + "-e-", b = 0, c = this.g.length; b < c; ++b) {
        var d = this.g.key(b);
        if (d && Cc(d, a)) {
          var e = K8(d.substring(a.length)),
            f = J8(this, this.j);
          f && e && e >= f && this.g.removeItem(d)
        }
      }
  };
  m.N = function() {
    Qm.prototype.N.call(this)
  };

  function L8() {}
  L8.prototype.create = function(a, b) {
    return F8() ? new I8(new Zk, "schedulerFrame", b) : null
  };

  function M8() {}
  M8.prototype.create = function(a, b) {
    var c = (new L8).create(a, b) || new Tm(new Zk, b);
    return oe && (t.indexedDB || t.webkitIndexedDB) ? new A8(a, "schedulerFrame", c, new Zk, void 0, b) : c
  };

  function Xaa() {
    var a = new ln;
    a.w = !1;
    a.o = !0;
    a.g = new M8;
    a.j = void 0 === b ? !1 : b;
    var b = new kn(a);
    a = ah(Xg(), "buildLabel");
    Dc(a) || (b.j["build-label"] = a);
    b.j.locale = "en";
    a = Xg();
    b.j.sessionTypeName = "scheduler-frame";
    b.j.sessionType = (118).toString();
    var c = t.applicationCache;
    c && (b.j.appCacheStatusOnLoad = c.status);
    Yg(a, "docs-offline-ecasq") && (a = Zg(a, "docs-offline-ecasq"), b.j.enableCelloAutoSync = a.toString());
    b.j.serviceWorkerControlled = Ea("navigator.serviceWorker.controller") ? "true" : "false";
    b.j.docsExtensionUsed =
      String(On());
    b.j.docsExtensionFeaturesVersion = String(Pn());
    return b
  };

  function N8() {
    var a;
    if (a = oe) a = 0 <= Oc(Nn, 54);
    return a && !!t.BroadcastChannel
  };

  function O8() {
    Q.call(this);
    this.g = new Mm(this);
    R(this, this.g)
  }
  r(O8, Q);

  function vt(a) {
    var b = [],
      c;
    if (N8()) var d = c = new BroadcastChannel("DocsEventBus");
    else if (t.SharedWorker) {
      var e = new SharedWorker(tm("/eventbusworker.js", !0));
      d || (d = e.port);
      b.push(e.port)
    } else throw Error("Event bus is not supported via BroadcastChannel or SharedWorker.");
    var f = new MessageChannel;
    ij(a, function() {
      f.port1.close();
      b.forEach(function(g) {
        g.close()
      });
      c && c.close()
    });
    a.g.R(f.port1, "message", function(g) {
      var k = g.Da.data;
      b.forEach(function(n) {
        n.postMessage(k)
      });
      if (c) switch (g = new lt(k), g.getType()) {
        case 1:
          c.postMessage(k);
          break;
        case 0:
          break;
        default:
          throw Error("Could not handle event bus message type " + g.getType());
      }
    });
    a.g.R(d, "message", function(g) {
      f.port1.postMessage(g.Da.data)
    });
    f.port1.start();
    b.forEach(function(g) {
      g.start()
    });
    return f.port2
  };

  function Yaa() {
    this.g = new DJ;
    Zg(Xg(), "docs-offline-iunos") ? F(this.g, 3, 2) : F(this.g, 3, 1)
  };

  function Zaa(a) {
    this.g = a
  }

  function $aa(a, b) {
    b = KK(new IK, b.Ga());
    a.g.log(b);
    return new Rh(function(c, d) {
      a.g.flush(c, d)
    })
  };

  function aba() {
    var a = Xg(),
      b = Zg(a, "docs-offline-ecpl") ? "https://jmt17.google.com/log" : void 0,
      c = !(Ka(t) && t.window == t) || !t.document || !t.document.documentElement,
      d = ah(a, "docs-offline-ue");
    if (Zg(a, "docs-eea")) return new UK(306, function() {
      return d ? dF([{
        key: "e",
        value: d
      }]) : null
    }, null, FK, b, c, !0);
    a = ah(a, "gaia_session_id");
    return new UK(306, dF, a || null, FK, b, c, !0)
  };

  function P8(a) {
    this.g = a
  }
  P8.prototype.j = function(a) {
    B(a, 15);
    J(a, 15, this.g.g)
  };
  var Q8 = new fL("offline_infra_invariants");

  function bba(a, b) {
    this.j = a;
    this.g = b
  }
  var R8 = null;

  function S8(a, b) {
    Q.call(this);
    this.o = a;
    this.j = "number" === typeof b ? b : null;
    a = Xg();
    var c = a.get("ilcm");
    if (null == c) a = null;
    else {
      b = c.je;
      if (!R8) {
        var d = Xg(),
          e = d.get("ilcm");
        null != e && (R8 = Zg(d, "icso") ? jh() : e.si)
      }
      c = c.ei;
      a.get("buildLabel");
      a = new bba(b, c)
    }
    this.A = a ? a.j : 0;
    this.w = a ? a.g : [];
    this.g = null
  }
  r(S8, Q);
  S8.prototype.get = function() {
    if (this.g) return this.g;
    var a = new wJ;
    a = F(a, 1, "en");
    a = F(a, 2, ad);
    "number" === typeof this.j && F(a, 11, this.j);
    var b = Xg();
    var c = new vJ;
    c = F(c, 2, this.o);
    b = Zg(b, "icso");
    b = F(c, 1, b);
    a.Qb(b);
    F(a, 9, this.A);
    b = new Sq;
    b = F(b, 1, this.w || []);
    J(a, 10, b);
    return this.g = a
  };

  function T8(a) {
    this.j = a
  }
  T8.prototype.g = function(a) {
    a = KK(new IK, a.Ga());
    this.j.log(a);
    this.j.w()
  };

  function U8(a, b) {
    this.j = a;
    this.o = b
  }
  U8.prototype.g = function(a) {
    return $aa(this.j, a).fa(function() {
      var b = I(a, zJ, 1);
      b = q(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        if (null == B(c, 5)) {
          var d = new Uq;
          J(c, 5, d)
        }
        if (null == B(H(c, Uq, 5), 34)) {
          d = H(c, Uq, 5);
          var e = new Lq;
          J(d, 34, e)
        }
        F(H(H(c, Uq, 5), Lq, 34), 26, !0)
      }
      return cba(this, a)
    }, this)
  };

  function cba(a, b) {
    return new Rh(function(c, d) {
      a.o.g(b, c, d)
    })
  };

  function V8() {}
  V8.prototype.g = function(a, b) {
    b()
  };

  function W8(a) {
    this.j = a
  }
  W8.prototype.g = function(a, b, c) {
    a = new kp(null, "offline", v(), a.ga(), !0);
    this.j.write([a], b, c)
  };

  function X8(a) {
    this.j = a
  }
  X8.prototype.g = function(a, b, c) {
    Dt(this.j).then(function(d) {
      d ? (new W8(d.g)).g(a, b, c) : b()
    })
  };

  function dba() {
    this.o = this.j = this.g = null
  }

  function eba(a) {
    var b = new dba;
    b.g = a;
    return b
  }

  function fba(a, b) {
    a.j = b;
    return a
  }

  function gba(a, b) {
    a.o = b;
    return a
  }

  function hba(a) {
    if (a.g) var b = new X8(a.g);
    else throw Error("Must set either a LocalStore or LocalStoreSupplier");
    var c = new LL;
    if (a.j) {
      var d = new P8(a.j);
      Q8.F();
      c.o[Q8.F()] = d;
      c.g && d.j(c.g)
    }
    a = a.o || jh();
    d = b;
    b = aba();
    var e = void 0 == window.isSecureContext ? !0 : window.isSecureContext;
    d = new U8(new Zaa(b), oe && (t.indexedDB || t.webkitIndexedDB) && (N8() || t.SharedWorker) && e ? d : new V8);
    b = new T8(b);
    c = bN(XM(ZM(YM($M(WM(VM(new UM, d), b)), a), 118), c));
    a = (new S8(!1)).get();
    b = ah(Xg(), "jobset");
    F(a, 9, iba(b));
    UL(c.ce(), 1E3 * v()).j =
      a;
    return c
  }

  function iba(a) {
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

  function jba() {
    this.g = Cg()
  }

  function kba(a) {
    var b = [lba(a), Y8(a, String(Al(new wl, "/document/offline/optout")))];
    return ai(b).then(function() {
      return $h(b)
    }).then(h())
  }

  function lba(a) {
    var b = vm("/drive/offline/optout");
    return Y8(a, b)
  }

  function Y8(a, b) {
    var c = [];
    return ei(new Rh(function(d) {
      var e = a.g.createElement("IFRAME");
      e.addEventListener("load", function() {
        return c.push(setTimeout(function() {
          return d()
        }, 1E3))
      });
      e.style.display = "none";
      e.src = b;
      a.g.appendChild(a.g.g.body, e);
      c.push(setTimeout(function() {
        return d()
      }, 22E3))
    }), function() {
      c.map(function(d) {
        return clearTimeout(d)
      })
    })
  };

  function Z8(a, b, c, d) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? "docs" : c;
    d = void 0 === d ? t.PERSISTENT : d;
    xg.call(this);
    this.o = b;
    this.B = c;
    this.w = d;
    this.j = a;
    this.g = null
  }
  r(Z8, cq);

  function mba(a, b, c) {
    var d = new po(u(a.Il, a, "initialize"), 3E4, document);
    d.start();
    wi(yi(nba(a), function() {
      d.dispose()
    }), u(a.ul, a, b, c), u(a.sg, a, c, "initialize"))
  }

  function nba(a) {
    switch (a.w) {
      case t.PERSISTENT:
        return VW(1);
      case t.TEMPORARY:
        return VW(0);
      default:
        throw Error("Cannot handle Filesystem type: " + a.w);
    }
  }
  m = Z8.prototype;
  m.sg = function(a, b, c) {
    b = $8(b, c);
    rn(this.j, b);
    a(b)
  };
  m.em = function(a, b, c, d) {
    a = $8(a, d);
    c && Db(c, d.name) || rn(this.j, a);
    this.o && this.o(a);
    b(a)
  };
  m.Il = function(a, b) {
    var c = {
      requestTimeout: 3E4
    };
    c.timeoutDelays = b.g.concat().toString();
    rn(this.j, Error("Filesystem slowness, took 30000ms during " + a), c)
  };

  function $8(a, b) {
    return new bq("Filesystem error (" + b.name + ") during " + a + ": " + b.message, "QuotaExceededError" == b.name ? "QuotaExceeded" : "Other")
  }
  m.ul = function(a, b, c) {
    wi(SW(new PW(c, c.g.root), this.B), Ra(this.pl, a, b), Ra(this.sg, b, "handleFileSystemAvailable_"), this)
  };
  m.pl = function(a, b, c) {
    this.g = c;
    wi(QW(c), a, u(this.sg, this, b, "handleDirectoryEntryAvailable_"))
  };

  function oba(a, b) {
    wi(TW(a.g), b, u(a.em, a, "clearStorage", function() {
      b()
    }, null))
  }
  m.N = function() {
    cq.prototype.N.call(this);
    delete this.g
  };

  function a9(a, b, c) {
    a = void 0 === a ? Cg() : a;
    b = void 0 === b ? ah(Xg(), "olbu") : b;
    c = void 0 === c ? ah(Xg(), "docs-offline-lsuid") : c;
    Q.call(this);
    this.o = a;
    this.w = b;
    this.B = c;
    this.j = this.g = null;
    this.C = new Mm(this);
    R(this, this.C);
    this.C.R(t, "message", this.D)
  }
  r(a9, Q);
  a9.prototype.A = function() {
    jr.set("delete_cache", "1", {
      yi: 120,
      path: "/"
    });
    return this.update()
  };
  a9.prototype.update = function(a) {
    return ei(pba(this, a), function() {
      jr.remove("delete_cache", "/");
      jr.remove("install_cache", "/")
    }.bind(this))
  };

  function pba(a, b) {
    return a.w ? a.g && !b ? Wh() : Wh().then(function() {
      return qba(a)
    }).then(function() {
      if (a.g)
        if (b) b9(a);
        else return Wh();
      a.g = a.o.createElement("IFRAME");
      var c = bi();
      a.g.style.display = "none";
      a.g.src = rba(a);
      a.o.appendChild(a.o.g.body, a.g);
      Yk(3E5).then(function() {
        c.reject("App cache updater timed out")
      });
      a.j = c;
      return a.j.g
    }) : P(Error("No base url provided."))
  }

  function rba(a) {
    var b = Nk(a.w, "cacheupdate"),
      c = {
        al: "1"
      };
    a.B && (c.ouid = a.B);
    return Gk(b, c)
  }

  function qba(a) {
    var b = bi(),
      c = new Zk;
    Tj(c, "complete", function(d) {
      d = d.target.S();
      200 == d ? b.resolve() : b.reject(Error("Failed to invalidate appcache manifest, received " + d + " from POST request."));
      jj(c)
    });
    c.B = 1E4;
    c.send(sba(a), "POST");
    return b.g
  }

  function sba(a) {
    var b = Nk(a.w, "common/manifest"),
      c = {};
    c.ouid = a.B;
    return Gk(b, c)
  }
  a9.prototype.D = function(a) {
    a = a.Da;
    new wl(this.w);
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

  function b9(a) {
    a.g && (a.o.Yh(a.g), a.g = null, a.j.reject("Removing updater frame"), a.j = null)
  }
  a9.prototype.N = function() {
    b9(this);
    Q.prototype.N.call(this)
  };

  function c9(a) {
    z(this, a, -1, null, null)
  }
  w(c9, y);

  function d9(a) {
    z(this, a, -1, null, null)
  }
  w(d9, y);
  d9.prototype.Kb = function() {
    return B(this, 1)
  };

  function e9(a) {
    z(this, a, -1, null, null)
  }
  w(e9, y);

  function f9(a) {
    z(this, a, -1, tba, null)
  }
  w(f9, y);
  var tba = [1];
  f9.prototype.qa = function() {
    return B(this, 1)
  };

  function g9(a) {
    z(this, a, -1, null, null)
  }
  w(g9, y);
  g9.prototype.Oa = function() {
    return B(this, 1)
  };

  function h9(a) {
    z(this, a, -1, null, null)
  }
  w(h9, y);
  h9.prototype.getType = function() {
    return B(this, 1)
  };

  function i9(a) {
    z(this, a, -1, uba, null)
  }
  w(i9, y);
  var uba = [1, 2];
  i9.prototype.ta = function() {
    return I(this, sE, 1)
  };

  function j9(a) {
    z(this, a, -1, null, null)
  }
  w(j9, y);

  function k9(a) {
    z(this, a, -1, vba, null)
  }
  w(k9, y);
  var vba = [1];
  k9.prototype.ta = function() {
    return I(this, sE, 1)
  };

  function l9(a) {
    z(this, a, -1, null, null)
  }
  w(l9, y);
  l9.prototype.Oa = function() {
    return B(this, 1)
  };
  l9.prototype.getType = function() {
    return B(this, 2)
  };

  function m9(a) {
    z(this, a, -1, null, null)
  }
  w(m9, y);
  m9.prototype.F = function() {
    return B(this, 1)
  };

  function n9(a, b) {
    F(a, 2, b)
  }

  function o9(a, b) {
    F(a, 7, b)
  };

  function p9(a) {
    this.j = a;
    a = t.localStorage.getItem("docs-tasksStats_default") || "[]";
    try {
      var b = JSON.parse(a)
    } catch (e) {
      b = [], t.localStorage.removeItem("docs-tasksStats_default"), qn(this.j, Oi(e, "Detected task stats corruption, resetting"))
    }
    a = {};
    for (var c = 0; c < b.length; c++) {
      var d = new m9(b[c]);
      a[d.F()] = d
    }
    this.g = a
  }

  function q9(a, b) {
    return (a = a.g[b]) ? N(a) : null
  }

  function r9(a, b) {
    var c = q9(a, b);
    if (c) return c;
    c = new m9;
    F(c, 1, b);
    n9(c, 0);
    F(c, 3, 0);
    a.g[b] = c;
    return N(c)
  }

  function s9(a, b) {
    a.g[b.F()] = N(b);
    b = [];
    for (var c in a.g) b.push(a.g[c].ga());
    t.localStorage.setItem("docs-tasksStats_default", Pk(b))
  }

  function wba(a) {
    t.localStorage.removeItem("docs-tasksStats_default");
    lc(a.g)
  };

  function t9(a, b) {
    this.message = a;
    this.ports = b
  }
  t9.prototype.toString = function() {
    return "{message: " + this.message + ", ports: " + this.ports + "}"
  };

  function u9(a) {
    var b = v9;
    this.g = a;
    this.j = b
  }
  u9.prototype.send = function(a, b, c) {
    var d = this;
    return this.g.send(a.ga(), b, c).then(function(e) {
      return new t9(new d.j(e.message), e.ports)
    })
  };

  function w9(a) {
    a = void 0 === a ? 12E4 : a;
    Q.call(this);
    this.o = a;
    this.g = {};
    this.w = 0
  }
  r(w9, Q);
  w9.prototype.send = function(a, b, c) {
    var d = this;
    b = void 0 === b ? [] : b;
    c = void 0 === c ? this.o : c;
    var e = bi(),
      f = ++this.w;
    this.g[f] = e;
    var g = Wk(function() {
      e.reject(Error("Request to transport timed out."))
    }, c);
    xba(this, e, a, b);
    return ei(e.g, function() {
      Xk(g);
      delete d.g[f]
    })
  };
  w9.prototype.N = function() {
    for (var a = q(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) b.value.reject("Sender was disposed");
    Q.prototype.N.call(this)
  };

  function x9(a) {
    w9.call(this, a);
    this.j = new Mm(this);
    R(this, this.j)
  }
  r(x9, w9);

  function xba(a, b, c, d) {
    var e = new MessageChannel;
    a.j.Oc(e.port1, "message", function(f) {
      f = f.Da;
      b.resolve(new t9(f.data, f.ports))
    }.bind(a));
    e.port1.start();
    a.postMessage(c, [e.port2].concat(d));
    ei(b.g, function() {
      e.port1.close()
    })
  };

  function y9(a, b) {
    x9.call(this, b);
    this.A = a
  }
  r(y9, x9);
  y9.prototype.postMessage = function(a, b) {
    this.A.postMessage(a, b)
  };

  function z9() {
    this.g = [];
    this.j = [];
    this.o = [];
    this.w = []
  }

  function A9(a) {
    a.g.push(new yba)
  }

  function B9(a) {
    var b = ["/"];
    b.every(function(c) {
      return Cc(c, "/")
    });
    Nb(a.o, b)
  }

  function C9(a) {
    var b = zba;
    b.every(function(c) {
      return Cc(c, "/")
    });
    Nb(a.j, b)
  }

  function Aba(a) {
    var b = ["/offline/blank"];
    b.every(function(c) {
      return Cc(c, "/")
    });
    Nb(a.w, b)
  }

  function yba() {};

  function Bba(a) {
    encodeURIComponent(String(a))
  };

  function D9(a, b, c, d) {
    this.j = a;
    this.g = d ? Nk("//" + d, b) : b
  }
  D9.prototype.getType = l("j");

  function E9(a) {
    return (new wl(Nk(a.g, "/"))).toString()
  };
  var zba = ["/create"];

  function F9(a, b) {
    a = void 0 === a ? Xg() : a;
    var c = new z9;
    A9(c);
    A9(c);
    A9(c);
    A9(c);
    B9(c);
    C9(c);
    return new D9("kix", ah(a, "kixOfflineUrl"), Zg(a, "udurls"), b)
  }

  function G9(a, b) {
    a = void 0 === a ? Xg() : a;
    var c = new z9;
    A9(c);
    A9(c);
    A9(c);
    A9(c);
    C9(c);
    return new D9("drawing", ah(a, "drawingsOfflineUrl"), Zg(a, "udurls"), b)
  }

  function H9(a, b) {
    a = void 0 === a ? Xg() : a;
    var c = new z9;
    A9(c);
    A9(c);
    A9(c);
    A9(c);
    C9(c);
    B9(c);
    A9(new z9);
    return new D9("punch", ah(a, "punchOfflineUrl"), Zg(a, "udurls"), b)
  }

  function I9(a, b) {
    a = void 0 === a ? Xg() : a;
    var c = new z9;
    A9(c);
    A9(c);
    A9(c);
    A9(c);
    C9(c);
    B9(c);
    Aba(c);
    return new D9("ritz", ah(a, "ritzOfflineUrl"), Zg(a, "udurls"), b)
  };

  function J9(a) {
    z(this, a, -1, null, null)
  }
  w(J9, y);
  J9.prototype.Kb = function() {
    return B(this, 1)
  };

  function Cba(a, b) {
    return F(a, 1, b)
  };

  function K9(a) {
    z(this, a, -1, null, null)
  }
  w(K9, y);

  function L9(a) {
    z(this, a, -1, null, null)
  }
  w(L9, y);
  L9.prototype.Oa = function() {
    return B(this, 1)
  };

  function M9(a) {
    z(this, a, -1, null, null)
  }
  w(M9, y);
  M9.prototype.getType = function() {
    return B(this, 1)
  };

  function v9(a) {
    z(this, a, -1, null, null)
  }
  w(v9, y);
  v9.prototype.Oe = function() {
    return H(this, L9, 3)
  };

  function N9(a) {
    var b = Xg();
    switch (a) {
      case "kix":
        return Zg(b, "docs-sw-eksw");
      case "ritz":
        return Zg(b, "docs-sw-ersw");
      case "punch":
      case "drawing":
        return Zg(b, "docs-sw-epsw");
      default:
        return !1
    }
  };

  function O9(a, b) {
    Q.call(this);
    this.o = a;
    this.g = b;
    this.j = t.navigator.serviceWorker;
    this.w = new Mm(this);
    R(this, this.w)
  }
  r(O9, Q);

  function Dba(a) {
    var b = [];
    N9("kix") && b.push(E9(F9()));
    N9("ritz") && b.push(E9(I9()));
    N9("punch") && b.push(E9(H9()));
    N9("drawing") && b.push(E9(G9()));
    return b.map(function(c) {
      return new O9(a, c)
    })
  }

  function P9(a) {
    return Wh().then(function() {
      return a.j.getRegistration(a.g)
    })
  }

  function Eba(a) {
    return P9(a).then(function(b) {
      return !!b
    })
  }

  function Fba(a) {
    return P9(a).then(function(b) {
      return b ? b.unregister() : !1
    })
  }
  O9.prototype.register = function(a) {
    var b = this;
    return Wh(this.j.register(a, {
      scope: this.g,
      updateViaCache: "all"
    })).fa(function(c) {
      rn(b.o, Oi(c));
      throw c;
    })
  };

  function Q9(a) {
    return P9(a).then(function(b) {
      return b ? (b = b.active || b.waiting || b.installing) ? R9(b, S9(2), 15E3).then(ca(!0)).fa(function(c) {
        rn(a.o, Error("Failed to reach service worker"), {
          originalErrorMessage: c.message
        });
        return !1
      }) : !1 : !1
    })
  }

  function Gba(a, b) {
    var c = S9(4);
    b = Cba(new J9, b);
    J(c, 3, b);
    return T9(a, c, 5E3).then(function(d) {
      d = H(d, K9, 5);
      return B(d, 1)
    })
  }

  function U9(a, b, c) {
    return T9(a, b, c).then(h())
  }

  function T9(a, b, c) {
    return P9(a).then(function(d) {
      if (!d) throw Error("Cannot send message to service worker without registration");
      Pk(b);
      d = d.active || d.waiting || d.installing;
      if (!d) throw Error("No active, waiting or installing service worker, cannot send message of type " + b.getType());
      return R9(d, b, c)
    })
  }

  function R9(a, b, c) {
    return (new u9(new y9(a, c))).send(b).then(function(d) {
      return d.message
    }).then(function(d) {
      var e = d.Oe();
      if (e) throw d = {}, Qi(Error(e.Oa()), (d.serviceworker_errorFromSWMessage = "true", d));
      return d
    })
  }

  function S9(a) {
    var b = new M9;
    return F(b, 1, a)
  };
  var V9 = ["installing", "installed", "activating", "activated"];

  function W9(a, b) {
    if ("redundant" == b) throw Error("REDUNDANT state does not have an order, cannot check that a service worker is at least REDUNDANT");
    a = V9.indexOf(a.state);
    return 0 <= a && a >= V9.indexOf(b)
  };

  function X9(a, b) {
    Q.call(this);
    this.j = a;
    this.o = b;
    this.g = new Mm(this);
    R(this, this.g)
  }
  r(X9, Q);

  function Hba(a, b) {
    return ei(Iba(a, b).then(function(c) {
      return c ? Jba(a, c).then(ca(!0)) : !1
    }), function() {
      return a.g.dispose()
    })
  }

  function Iba(a, b) {
    return a.j.register(b).then(function(c) {
      var d = c.installing;
      return d ? d : Kba(a, c)
    })
  }

  function Kba(a, b) {
    return Zh([Yk(15E3, null), new Rh(function(c, d) {
      a.g.Oc(b, "updatefound", function() {
        var e = b.installing;
        e ? c(e) : d(Error("Update found but there was no installing service worker."))
      });
      b.update()
    })])
  }

  function Jba(a, b) {
    return Y9(a, b, "installed", 27E4).then(function(c) {
      if (!c) throw Error("Service worker did not finish installing before timeout.");
    }).then(function() {
      return Y9(a, b, "activated", 5E3)
    }).then(function(c) {
      c || rn(a.o, Error("Service worker did not activate within specified timeout."), {
        serviceworker_scope: a.j.g
      })
    })
  }

  function Y9(a, b, c, d) {
    var e;
    return Zh([Yk(d), new Rh(function(f, g) {
      e = function() {
        W9(b, "installing") ? W9(b, c) && f() : g(Qi(Error("Update failed or service worker replaced by newer version while updating."), {
          serviceworker_state_expected: c,
          serviceworker_state_current: b.state
        }))
      };
      e();
      a.g.R(b, "statechange", e)
    })]).then(function() {
      a.g.hb(b, "statechange", e);
      return W9(b, c)
    })
  };

  function Lba() {
    this.g = {}
  }

  function Mba(a) {
    var b = Xg();
    new Bba(Oo(a, "locale"));
    a = new Lba(ah(b, "drive-host"), ah(b, "drcuap"));
    var c = b;
    c = void 0 === c ? Xg() : c;
    b = [];
    b.push(F9(c, void 0));
    b.push(G9(c, void 0));
    b.push(H9(c, void 0));
    b.push(I9(c, void 0));
    for (c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.getType();
      if (a.g[e]) throw Error("Already have an adapter installed for type " + e);
      a.g[e] = d
    }
    return a
  }

  function Z9(a, b) {
    a = a.g[b];
    if (!a) throw Error("No offline URL adapter for documents of type " + b);
    return a
  };

  function $9(a, b) {
    this.g = a;
    this.o = b;
    this.j = t.caches
  }
  $9.prototype.update = function() {
    var a = this;
    return a$(this).then(function(b) {
      for (var c = [], d = {}, e = 0; e < b.length; d = {
          Uc: d.Uc
        }, e++) {
        d.Uc = b[e];
        var f = d.Uc.enabled ? Nba(a, d.Uc) : b$(a, d.Uc);
        f = f.fa(function(g) {
          return function(k) {
            throw Qi(k, {
              serviceworker_scope: g.Uc.g
            });
          }
        }(d));
        c.push(f)
      }
      return ai(c).then(function() {
        return $h(c)
      })
    }).then(h()).fa(function(b) {
      throw Qi(b, {
        serviceworker_updater_method: "update"
      });
    })
  };
  $9.prototype.A = function() {
    var a = this;
    return a$(this).then(function(b) {
      b = b.map(function(c) {
        return b$(a, c)
      });
      return $h(b)
    }).then(function() {
      return Oba(a)
    }).then(h()).fa(function(b) {
      throw Qi(b, {
        serviceworker_updater_method: "deleteAll"
      });
    })
  };

  function Oba(a) {
    return Wh(a.j.keys()).then(function(b) {
      return $h(b.map(function(c) {
        return a.j.delete(c)
      }))
    })
  }

  function a$(a) {
    var b = new Rh(function(d, e) {
        Cs(a.o.g.Vg(), d, e)
      }),
      c = Ii(Zp(a.o.g.B));
    return $h([b, c]).then(function(d) {
      var e = d[0],
        f = d[1],
        g = Mba(f);
      return e.map(function(k) {
        var n = k.Lb();
        k = N9(n);
        var p = Zg(Xg(), "docs-sw-eswrfi");
        var x = f.F();
        var A = Z9(g, n);
        A = new wl(Nk(A.g, "/offline/serviceworker.js"));
        U(A, "ouid", encodeURIComponent(String(x)));
        ym() && U(A, "Debug", "true");
        x = A.toString();
        p = p ? Mk(x) : x;
        n = E9(Z9(g, n));
        return new c$(a.g, p, n, k, !0)
      }).concat(Pba(a, f))
    })
  }

  function Pba(a, b) {
    var c = Xg(),
      d = [];
    d.push(Qba(a, b, Zg(c, "docs-sw-eocsw")));
    return d
  }

  function Qba(a, b, c) {
    b = U(new wl("/offline/serviceworker.js"), "ouid", b.F()).toString();
    return new c$(a.g, b, "/offline/", c, !1)
  }

  function Nba(a, b) {
    var c = new O9(b.j, b.g);
    return Hba(new X9(c, a.g), b.w).then(function() {
      if (Zg(Xg(), "docs-sw-eswrfi") || !b.o) return U9(c, S9(7), 5E3);
      var d = v();
      return Q9(c).then(function(e) {
        var f = v() - d;
        15E3 < f && rn(a.g, Error("Heartbeat to service worker exceeded timeout"), {
          scopeUrl: b.g,
          elapsedTime: f,
          reachable: e
        });
        if (e) return U9(c, S9(0), 3E5)
      })
    }).then(function() {
      c.dispose()
    })
  }

  function b$(a, b) {
    var c = new O9(b.j, b.g);
    return Q9(c).then(function(d) {
      if (d) return U9(c, S9(1), 18E4).then(h())
    }).fa(function(d) {
      rn(a.g, Oi(d))
    }).then(function() {
      return Fba(c)
    }).then(function() {
      return c.dispose()
    })
  }

  function c$(a, b, c, d, e) {
    this.j = a;
    this.w = b;
    this.g = c;
    this.enabled = d;
    this.o = e
  };

  function d$(a, b, c, d, e, f) {
    this.C = a;
    this.g = b;
    this.B = c;
    this.o = d;
    this.D = f;
    this.j = e
  }

  function Rba(a) {
    wba(new p9(a.g));
    yr(null);
    tr();
    t.localStorage.removeItem("docs-ldb");
    var b = new a9,
      c = [b.A().fa(function(d) {
        qn(a.g, Error("Failed to completely delete appcache when disabling offline: " + d))
      }), kba(a.o), Sba(a), a.D.A()];
    return ei(ai(c).then(function() {
      return $h(c)
    }).then(a.w.bind(a)).then(a.A.bind(a)), function() {
      jj(b)
    }).fa(function(d) {
      qn(a.g, Error("Failed to completely disable offline: " + d));
      throw d;
    })
  }
  d$.prototype.A = function() {
    var a = this,
      b = this.j.wd(81001, 0);
    this.j.ke(b);
    return this.j.cg().then(function() {
      Tn(a.B)
    })
  };

  function Sba(a) {
    var b = new Z8(a.g);
    return ei((new Rh(function(c, d) {
      mba(b, c, d)
    })).then(function() {
      return new Rh(function(c) {
        oba(b, c)
      })
    }, h()), function() {
      jj(b)
    })
  }
  d$.prototype.w = function() {
    var a = this;
    t.localStorage.setItem("docs-oiouid", "");
    return new Rh(function(b, c) {
      es(a.C.g.Ha(), b, c)
    })
  };

  function e$(a) {
    z(this, a, -1, null, null)
  }
  w(e$, y);

  function f$() {
    var a = ah(Xg(), "docs-offline-uifeo");
    return a ? Ve(e$, a) : null
  };

  function Tba(a) {
    this.g = a
  }

  function g$(a, b, c) {
    var d = f$();
    d && C(d, 5) ? b(!0) : (d = (d = f$()) && B(d, 7)) ? Vn(a.g, d).then(b, c) : b(!1)
  };

  function h$(a) {
    z(this, a, -1, null, null)
  }
  w(h$, y);
  h$.prototype.P = function() {
    return B(this, 2)
  };

  function i$(a) {
    z(this, a, -1, Uba, null)
  }
  w(i$, y);
  var Uba = [1];

  function j$(a) {
    z(this, a, -1, null, null)
  }
  w(j$, y);

  function k$(a) {
    z(this, a, -1, Vba, null)
  }
  w(k$, y);
  var Vba = [1];

  function Wba(a, b) {
    return F(a, 1, b || [])
  }

  function Xba(a) {
    var b = new k$;
    return F(b, 2, a)
  };

  function l$(a) {
    z(this, a, -1, null, null)
  }
  w(l$, y);

  function m$(a) {
    z(this, a, -1, null, null)
  }
  w(m$, y);

  function n$(a) {
    z(this, a, -1, null, null)
  }
  w(n$, y);

  function o$(a) {
    z(this, a, -1, null, null)
  }
  w(o$, y);

  function p$(a) {
    z(this, a, -1, null, null)
  }
  w(p$, y);
  p$.prototype.getType = function() {
    return B(this, 1)
  };

  function Yba(a, b) {
    J(a, 2, b)
  };

  function q$(a) {
    z(this, a, -1, null, null)
  }
  w(q$, y);
  q$.prototype.getType = function() {
    return B(this, 1)
  };

  function r$(a, b, c, d, e, f, g, k) {
    this.o = a;
    this.j = b;
    this.g = c;
    this.A = d;
    this.C = e;
    this.B = f;
    this.D = g;
    this.w = k || null
  }

  function s$(a) {
    var b = new wl(a.j);
    b.o.remove("ouid");
    return "context: " + a.o + ", url: " + b.toString() + ", taskType: " + a.g
  }

  function Zba(a, b) {
    var c = new l$;
    F(c, 1, a.g);
    b && F(c, 4, b);
    if (a.w)
      if (a = N(a.w), a instanceof k$) J(c, 3, a);
      else throw Error("Unhandled parameter type.");
    return c
  };

  function t$(a, b, c, d, e, f, g) {
    this.B = a;
    this.j = b;
    this.C = c;
    this.w = d;
    this.g = g;
    this.o = e;
    this.A = f
  }
  t$.prototype.F = l("B");

  function u$() {
    return new t$("binary-sync", 3, 1, 180, !0, !1, new r$(2, um(), "offline_binary_sync", 3E5, !0, !0, !1))
  }

  function v$() {
    return new t$("local-changes-sync", 5, 1, 5, !1, !0, new r$(1, sm(), "local_changes_sync", 3E5, !0, !0, !1))
  }

  function w$() {
    var a = Xg(),
      b = [];
    Zg(a, "docs-offline-esmst") && b.push(new t$("metadata-sync", 4, 0, 480, !0, !0, new r$(1, sm(), "metadata", 3E5, !0, !0, !0)));
    Zg(a, "docs-offline-esbst") && b.push(new t$("service-worker-update", 16, 1, 180, !0, !1, new r$(2, um(), "service_worker_update", 3E5, !0, !1, !1)), u$());
    Zg(a, "docs-offline-edswut") && b.push(new t$("drive-service-worker", 13, 1, 180, !0, !1, new r$(2, vm("/drive/serviceworker/update"), "drive_service_worker_update", 3E5, !0, !0, !0)));
    Zg(a, "docs-offline-eshcst") && b.push(new t$("homescreen-cello-sync",
      2, 2, $g(Xg(), "docs-offline-scstpim"), !0, !1, new r$(2, wm(xm(), "/document/backgroundsync"), "homescreen_cello_sync", 3E5, !0, !0, !0)));
    Zg(a, "docs-offline-esdcst") && b.push(new t$("drive-cello-sync", 1, 2, $g(Xg(), "docs-offline-scstpim"), !0, !1, new r$(2, vm("/drive/_/dataservice/backgroundsync"), "drive_cello_sync", 3E5, !0, !0, !0)));
    Zg(a, "docs-offline-eslcst") && b.push(v$());
    Zg(a, "docs-offline-esast") && 0 < $g(a, "docs-offline-sastpim") && b.push(new t$("auto-sync", 6, 3, $g(Xg(), "docs-offline-sastpim"), !1, !1, new r$(1, sm(),
      "auto_sync", 3E5, !0, !0, !0)));
    Zg(a, "docs-offline-eswst") && b.push(new t$("webfonts-sync", 8, 2, 1440, !0, !0, new r$(1, sm(), "webfonts_sync", 3E5, !0, !0, !0)));
    Zg(a, "docs-offline-esist") && b.push(new t$("impression-sync", 7, 4, 360, !1, !0, new r$(1, sm(), "impressionSync", 3E5, !0, !0, !1)));
    Zg(a, "docs-offline-esddt") && b.push(new t$("document-deletion", 9, 4, 1440, !1, !0, new r$(1, sm(), "doc_deletion", 3E5, !1, !1, !1)));
    Zg(a, "docs-offline-esuuct") && b.push(new t$("update-unsaved-changes", 10, 4, 10, !1, !0, new r$(2, um(), "update_unsaved_changes",
      3E5, !1, !1, !1)));
    Zg(a, "docs-offline-esct") && b.push(new t$("cleanup-task", 11, 4, 1440, !1, !0, new r$(2, um(), "cleanup", 3E5, !1, !1, !1)));
    Zg(a, "docs-offline-esrt") && b.push(new t$("report-task", 14, 4, 1440, !1, !1, new r$(2, um(), "report", 3E5, !1, !1, !1)));
    if (Zg(a, "docs-offline-eskst")) {
      var c = bh(a, "docs-offline-rte");
      Db(c, "kix") && b.push(new t$("kix-snapshot", 12, 2, 180, !1, !0, new r$(1, wm(xm(), "/document/snapshot.js"), "kix_snapshot", 3E5, !1, !1, !1)))
    }
    Zg(a, "docs-offline-esost") && b.push(new t$("sync-objects-sync", 15, 2, 120,
      !0, !0, new r$(1, sm(), "sync_objects_sync", 3E5, !0, !0, !0)));
    return b
  };

  function $ba(a, b, c) {
    this.o = a;
    this.g = b;
    this.j = c
  }

  function aca(a) {
    return (new Rh(function(b, c) {
      g$(a.o, b, c)
    })).then(function(b) {
      var c = t.localStorage.getItem("docs-lspa");
      c = null != c ? Number(c) : null;
      if (b || null === c) yr(v());
      else if (864E5 < v() - c) return bca(a);
      return Wh()
    })
  }

  function bca(a) {
    var b = v$(),
      c = b.g;
    if (!a.g.g(c)) return Wh();
    b = Qq(Pq(new Nq, b.j), !1);
    return x$(a.g.j(c, b)).then(function(d) {
      return 0 != d ? Wh() : Rba(a.j)
    })
  };

  function y$(a, b) {
    this.Ok = a;
    this.Nk = b || null
  };

  function z$(a, b) {
    this.g = a;
    this.j = b
  }
  z$.prototype.get = function() {
    var a = this;
    return Dt(this.g).then(function(b) {
      return b ? new y$(1, b.j.F(), cca(a)) : Bt(a.g).then(function(c) {
        return (new Rh(function(d, e) {
          $p(c.g.B, d, e)
        })).then(function(d) {
          if (d.length)
            if (1 == d.length) d = new y$(4, d[0].F());
            else throw Error("More than one user in store: " + d.length);
          else {
            try {
              var e = !!t.localStorage.getItem("docs-uoo")
            } catch (f) {
              e = !0
            }
            d = e ? new y$(2) : xr() ? new y$(5) : new y$(3)
          }
          return d
        })
      })
    })
  };

  function cca(a) {
    a = new p9(a.j);
    for (var b = w$(), c = [], d = 0; d < b.length; d++) {
      var e = b[d];
      e.o && c.push(e)
    }
    for (b = 0; b < c.length; b++)
      if (d = q9(a, c[b].F()), !d || !E(d, 5, !1)) return !1;
    return !0
  };

  function dca(a) {
    this.g = a
  }

  function A$(a) {
    var b = u$();
    a = q9(a.g, b.F());
    return !!a && E(a, 5, !1)
  };

  function B$(a, b) {
    this.j = a;
    this.g = b
  };

  function eca() {
    return C$() && Zg(Xg(), "docs-offline-usea") ? fca() : new Rh(function(a, b) {
      gca(function(c, d) {
        a(new B$(c, d))
      }, b)
    })
  }

  function C$() {
    return !!Ea("navigator.storage.estimate")
  }

  function fca() {
    return C$() ? Wh(t.navigator.storage.estimate().then(function(a) {
      return new B$(a.usage, a.quota)
    })) : P(Error("navigator.storage.estimate is undefined"))
  }

  function D$(a, b, c) {
    var d = "persistent" == a ? t.navigator ? t.navigator.webkitPersistentStorage || null : null : t.navigator ? t.navigator.webkitTemporaryStorage || null : null;
    d ? d.queryUsageAndQuota(b, function(e) {
      c("queryUsageAndQuota failed: " + e.code)
    }) : t.webkitStorageInfo ? (d = t.webkitStorageInfo, d.queryUsageAndQuota("persistent" == a ? d.PERSISTENT : d.TEMPORARY, b, function(e) {
      c("queryUsageAndQuota failed: " + e.code)
    })) : c("webkitStorageInfo not available in this browser.")
  }

  function gca(a, b) {
    D$("temporary", function(c, d) {
      D$("persistent", function(e, f) {
        e = c + e;
        a(e, Math.max(d, f) - e)
      }, b)
    }, b)
  };

  function E$(a, b, c, d, e, f, g, k, n) {
    Q.call(this);
    this.I = a;
    this.H = b;
    this.L = 0;
    this.o = {};
    this.w = c;
    this.A = d;
    this.B = e;
    this.C = n || null;
    this.U = f;
    this.D = g;
    this.O = k
  }
  w(E$, Q);
  E$.prototype.j = function(a) {
    var b = this.G(a);
    a = F$(this, a);
    if (null != a) return b.stop("The task cannot be executed: " + a), b;
    var c = ++this.L;
    this.o[c] = b;
    b.start(this.O);
    ei(b.j.g, function() {
      delete this.o[c]
    }, this);
    return b
  };
  E$.prototype.g = function(a) {
    return null == F$(this, a)
  };

  function F$(a, b) {
    var c = b.C || !A$(a.B),
      d = b.B || !A$(a.B);
    return c && !a.A.g() ? "network" : d && !a.w.yb() ? "authenication" : b.D && !a.U ? "policy" : null
  }
  E$.prototype.N = function() {
    for (var a = q(Object.values(this.o)), b = a.next(); !b.done; b = a.next()) b.value.stop("The task executor was disposed.");
    this.o = {};
    E$.na.N.call(this)
  };

  function G$(a, b, c, d, e, f, g) {
    var k = this;
    this.H = a;
    this.j = bi();
    this.g = b;
    this.ea = c;
    this.U = d;
    this.G = g || null;
    this.w = null;
    this.aa = f;
    this.W = new mh;
    this.A = new Mm(this);
    a = this.g.A;
    this.D = Wk(this.hl, Math.max(0, a - 3E4), this);
    this.L = Wk(this.km, a, this);
    ei(this.j.g, function() {
      Xk(k.D);
      Xk(k.L)
    });
    this.O = !1;
    this.C = null;
    b.C && nh(this.W, e.w, function() {
      return k.stop("Network connection lost.")
    });
    b.B && this.A.R(this.U, "g", function() {
      return k.stop("Authentication lost.")
    })
  }
  m = G$.prototype;
  m.stop = function(a) {
    H$(this, 3, a)
  };

  function x$(a) {
    return a.j.g.then(function(b) {
      return Wh(B(b, 1))
    })
  }
  m.start = function(a) {
    var b = this,
      c = new p$;
    F(c, 1, 0);
    Yba(c, Zba(this.g, a));
    I$(this, c).then(function(d) {
      d = H(d, o$, 2);
      1 == B(d, 1) && J$(b, Error(B(d, 3) || "Unknown failure message."), {
        isExplicitError: "true"
      });
      b.resolve(d)
    })
  };

  function I$(a, b) {
    return new Rh(function(c) {
      var d = new MessageChannel;
      d.port1.onmessage = function(e) {
        e = new q$(e.data);
        c(e)
      };
      ei(a.j.g, function() {
        d.port1.close()
      });
      a.postMessage(b.ga(), [d.port2])
    })
  }
  m.ji = function(a) {
    var b = a.Da;
    if (!(b && b.data && b.ports && b.ports.length)) throw Error("Dropped invalid message from the task.");
    a = b.ports[0];
    var c = b.ports.slice(1);
    b = new h9(b.data);
    this.Lg(b, a, c)
  };
  m.Lg = function(a, b) {
    switch (a.getType()) {
      case 1:
        a = vt(this.ea);
        var c = new l9;
        b.postMessage(c.ga(), [a]);
        break;
      case 2:
        hca(b);
        break;
      case 4:
        a = new l9;
        b.postMessage(a.ga());
        b = this.U;
        if (!b.o) throw Error("Cannot notifyPossibleAuthChange before initialization");
        lr(b, !0);
        break;
      case 5:
        ica(this, b);
        break;
      case 6:
        b = H(a, g9, 3);
        K$(this, Error(b.Oa() || "Unknown error from task"));
        break;
      case 7:
        jca(this, a, b);
        break;
      case 8:
        kca(this, a, b);
        break;
      case 9:
        lca(this, b);
        break;
      default:
        throw Error("Dropped unknown message " + a);
    }
  };

  function hca(a) {
    var b = new l9;
    eca().then(function(c) {
      var d = new j9;
      J(b, 3, d);
      F(d, 1, c.j);
      F(d, 2, c.g);
      a.postMessage(b.ga())
    }, function(c) {
      c = Oi(c);
      F(b, 1, c.message);
      a.postMessage(b.ga())
    })
  }

  function ica(a, b) {
    a.G ? Paa(L$(a)).then(function(c) {
      var d = new k9;
      M(d, 1, c);
      c = new l9;
      J(c, 4, d);
      b.postMessage(c.ga())
    }) : (a = new l9, F(a, 1, "No dataservice available to handle the relevant docs request."), b.postMessage(a.ga()))
  }

  function jca(a, b, c) {
    if (a.G) {
      var d = H(b, f9, 4).qa();
      b = C(H(b, f9, 4), 2) || !1;
      Raa(L$(a), d, b).then(function(e) {
        var f = [],
          g = [];
        vb(d, function(p) {
          var x = e[p];
          x ? f.push(x) : g.push(p)
        });
        var k = new i9;
        M(k, 1, f);
        F(k, 2, g || []);
        var n = new l9;
        J(n, 5, k);
        c.postMessage(n.ga())
      })
    } else a = new l9, F(a, 1, "No dataservice available to handle the find by ids request."), c.postMessage(a.ga())
  }

  function kca(a, b, c) {
    b = H(b, d9, 5).Kb();
    mca(a.aa, b).then(function(d) {
      var e = new e9;
      F(e, 1, d);
      d = new l9;
      J(d, 6, e);
      c.postMessage(d.ga())
    })
  }

  function lca(a, b) {
    Uaa(L$(a)).then(function(c) {
      var d = new c9;
      F(d, 1, c);
      a: {
        try {
          var e = vr();
          if (e) {
            var f = B(e, 2);
            break a
          }
        } catch (g) {}
        f = null
      }
      c = f;
      null != c ? (c = v() - c, F(d, 2, c)) : F(d, 3, !0);
      c = new l9;
      J(c, 7, d);
      b.postMessage(c.ga())
    })
  }

  function L$(a) {
    a.w || (a.w = a.G.get());
    return a.w
  }
  m.Kg = function(a) {
    a = a.Da;
    K$(this, Error(a instanceof ErrorEvent ? a.message : "event of type " + a.type + (a.message ? " with message " + a.message : "")))
  };

  function K$(a, b, c) {
    c = void 0 === c ? {} : c;
    c.isUnexpectedTaskFailure = !0;
    J$(a, b, c);
    H$(a, 1, b.message)
  }

  function J$(a, b, c) {
    c = void 0 === c ? {} : c;
    c.taskType = a.g.g;
    qn(a.H, Error("Detected error from task (" + s$(a.g) + "). errorMessage:" + b.message), c)
  }
  m.hl = function() {
    var a = this;
    this.O = !0;
    var b = new p$;
    F(b, 1, 1);
    I$(this, b).then(function(c) {
      c = H(c, j$, 3);
      a.C = H(c, i$, 1)
    })
  };
  m.km = function() {
    var a = {
      taskType: this.g.g
    };
    this.C && I(this.C, h$, 1).forEach(function(b) {
      a["taskTimeoutDebug_" + B(b, 1)] = b.P()
    });
    qn(this.H, Error("Detected timeout from task (" + s$(this.g) + "). timeout: " + this.g.A + " ms)"), a);
    H$(this, 2)
  };

  function H$(a, b, c) {
    var d = new o$;
    F(d, 1, b);
    c && F(d, 3, c);
    a.resolve(d)
  }
  m.resolve = function(a) {
    function b() {
      c.close();
      c.j.resolve(a)
    }
    var c = this;
    this.A.dispose();
    this.W.dispose();
    Xk(this.D);
    this.D = 0;
    Xk(this.L);
    this.L = 0;
    this.w ? ei(Taa(this.w), b) : b()
  };
  m.close = function() {
    jj(this.w)
  };

  function M$(a, b, c, d, e, f, g, k, n, p) {
    E$.call(this, a, b, c, d, e, f, g, k, n);
    this.X = p || Cg()
  }
  r(M$, E$);
  M$.prototype.G = function(a) {
    return new N$(this.I, a, this.H, this.X, this.w, this.A, this.D, this.C)
  };

  function N$(a, b, c, d, e, f, g, k) {
    var n = G$.call(this, a, b, c, e, f, g, k) || this;
    n.va = null;
    n.I = d;
    n.la = nca(b);
    n.o = n.I.yk("IFRAME", {
      style: "display:none"
    });
    b = Qn(b.j);
    td(n.o, b);
    n.I.g.body.appendChild(n.o);
    n.B = bi();
    n.A.R(t, "message", sn(a, n.um, n));
    n.X = 1E3 * ($g(Xg(), "docs-offline-iteits") || 15);
    n.Ha = Wk(n.xl, n.X, n);
    ei(Zh([x$(n), n.B.g]), function() {
      Xk(n.Ha)
    });
    return n
  }
  r(N$, G$);
  m = N$.prototype;
  m.xl = function() {
    var a = {};
    try {
      a.iframeHref = this.o.contentWindow.location.href;
      var b = this.o.contentDocument.body;
      if (b) {
        for (var c = !1, d = b.getElementsByTagName("script"), e = 0; e < d.length; e++)
          if (0 <= d[e].src.indexOf("offline_task_iframe_bin")) {
            c = !0;
            break
          } a.hasExpectedContent = c.toString();
        if (c) a.iframeInitProgress = this.o.contentWindow._iframeTaskInitProgress || "null";
        else {
          var f = b.getElementsByTagName("h2"),
            g = 1 == f.length ? f[0].textContent : null;
          null != g && 0 == g.indexOf("Error") && (a.iframeErrorMessage = g)
        }
      }
    } catch (k) {
      a.iframeHref =
        "N/A"
    }
    qn(this.H, Error("Detected timeout during initialization of task (" + s$(this.g) + "). timeout: " + this.X + " ms)"), a);
    H$(this, 2)
  };

  function nca(a) {
    a = new wl(a.j);
    var b = new wl;
    xl(b, a.w || t.location.protocol);
    yl(b, a.g || t.location.hostname);
    null != a.j ? zl(b, a.j) : null != t.location.port && "" != t.location.port && zl(b, t.location.port);
    return b.toString()
  }
  m.um = function(a) {
    var b = a.Da;
    b && b.origin == this.la && b.source == this.o.contentWindow && this.ji(a)
  };
  m.Lg = function(a, b, c) {
    var d = new l9;
    switch (a.getType()) {
      case 3:
        this.B.resolve(c[0]);
        b.postMessage(d.ga());
        break;
      default:
        G$.prototype.Lg.call(this, a, b, c)
    }
  };
  m.postMessage = function(a, b) {
    this.B.g.then(function(c) {
      c.postMessage(a, b)
    })
  };
  m.close = function() {
    G$.prototype.close.call(this);
    this.I.Yh(this.o);
    this.B.g.then(function(a) {
      a.close()
    })
  };

  function O$(a, b, c, d, e, f, g, k, n) {
    E$.call(this, a, b, c, d, e, f, g, k, n)
  }
  r(O$, E$);
  O$.prototype.G = function(a) {
    return new P$(this.I, a, this.H, this.w, this.A, this.D, this.C)
  };

  function P$(a, b, c, d, e, f, g) {
    c = G$.call(this, a, b, c, d, e, f, g) || this;
    c.B = b.j;
    c.o = new Worker(c.B);
    c.A.R(c.o, "message", sn(a, c.ji, c)).R(c.o, "error", sn(a, c.Kg, c));
    return c
  }
  r(P$, G$);
  P$.prototype.Kg = function(a) {
    var b = this,
      c = a.Da;
    c instanceof ErrorEvent && -1 != c.message.indexOf("Unexpected token <") ? Q$(this).then(function(d) {
      return d.text().then(function(e) {
        var f = {
          workerUrlStatus: d.status
        };
        e && (f.workerContentIsHtml = Cc(e, "<"), f.workerContentIsFallback = -1 != e.indexOf("_startFallbackApplication"));
        K$(b, Error("Worker init error: " + c.message), f)
      })
    }).fa(function(d) {
      K$(b, Oi(d))
    }) : c instanceof Event && "error" == c.type && !c.message ? Q$(this).then(function(d) {
      return d.text().then(function(e) {
        var f = {
          workerUrlStatus: d.status
        };
        e && (f.isSyncTaskWorkerJs = -1 != e.indexOf("_docs_worker_handler_resolve"), f.workerContentIsHtml = Cc(e, "<"), f.workerRedirected = d.redirected, f.isClientRedirect = -1 != e.indexOf("Redirecting..."), (e = e.match(/var url = '([^\?]+)/)) && (f.clientRedirectUrl = e[1]));
        K$(b, Error("Worker create error"), f)
      })
    }).fa(function(d) {
      K$(b, Oi(d))
    }) : G$.prototype.Kg.call(this, a)
  };

  function Q$(a) {
    return Zh([t.fetch(a.B, {
      credentials: "same-origin"
    }), Yk(5E3).then(function() {
      throw Error("Timed out trying to fetch worker URL");
    })])
  }
  P$.prototype.postMessage = function(a, b) {
    this.o.postMessage(a, b)
  };
  P$.prototype.close = function() {
    G$.prototype.close.call(this);
    this.o.terminate()
  };

  function oca(a) {
    switch (a) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 4;
      default:
        return 0
    }
  };

  function R$() {}
  m = R$.prototype;
  m.ke = h();
  m.wd = function() {
    var a = new iJ,
      b = new zJ;
    jJ(a, b, new LL);
    return a
  };
  m.ce = function() {
    return new SL
  };
  m.Yf = h();
  m.Qi = h();
  m.Ug = h();
  m.cg = function() {
    return Wh()
  };
  m.de = ca(!1);

  function S$(a, b, c, d, e, f, g, k, n, p) {
    Q.call(this);
    this.o = n || new R$;
    n = Xg();
    (this.w = Zg(n, "docs-offline-eteir") && Math.floor(100 * Math.random()) < $g(n, "docs-offline-teirr")) && (a.j.executorReportingEnabled = "true");
    this.B = new O$(a, b, c, d, e, f, g, k, p);
    R(this, this.B);
    this.A = new M$(a, b, c, d, e, f, g, k, p);
    R(this, this.A)
  }
  r(S$, Q);

  function T$(a, b) {
    switch (b) {
      case 1:
        return a.B;
      case 2:
        return a.A;
      default:
        throw Error("Not supported execution context:" + b);
    }
  }
  S$.prototype.j = function(a, b) {
    var c = this,
      d = pca(this, b),
      e = T$(this, a.o).j(a, b);
    x$(e).then(function(f) {
      var g = e.O;
      if (c.w) {
        var k = new Oq;
        F(k, 1, oca(f));
        F(k, 2, g);
        f = new Lq;
        J(f, 23, b);
        J(f, 24, k);
        k = lJ(d);
        J(k, 34, f);
        c.o.Yf(d);
        c.o.ke(d)
      }
    });
    return e
  };
  S$.prototype.g = function(a) {
    return T$(this, a.o).g(a)
  };

  function pca(a, b) {
    if (!a.w) return null;
    var c = new Lq;
    J(c, 23, b);
    b = a.o.wd(81008, 0);
    var d = lJ(b);
    J(d, 34, c);
    a.o.ke(b);
    return a.o.wd(81009, 1)
  };

  function U$(a, b) {
    Q.call(this);
    this.A = [];
    this.B = b;
    this.w = a;
    this.o = null;
    this.j = !1;
    this.g = null;
    ij(this, this.stop, this)
  }
  r(U$, Q);
  U$.prototype.start = function() {
    var a = this;
    if (this.j) return P(Error("The scheduler is already started."));
    this.j = !0;
    var b = new O8;
    R(this, b);
    this.g = new ut(b, "user_" + ah(Xg(), "docs-offline-lsuid"));
    R(this, this.g);
    this.g.connect();
    return ei(V$(this), function() {
      jj(a.g);
      jj(b);
      a.g = null;
      a.j = !1
    })
  };
  U$.prototype.stop = function() {
    this.o && (this.o.stop(), this.o = null);
    this.j = !1
  };

  function V$(a) {
    if (!a.j) return Wh();
    var b = qca(a);
    if (!b) return Wh();
    var c = r9(a.w, b.F()),
      d = new Nq;
    Pq(d, b.j);
    Qq(d, !0);
    F(d, 3, b.o);
    Rq(d, null == B(c, 4));
    n9(c, v());
    o9(c, D(c, 7, 0) + 1);
    s9(a.w, c);
    a.o = a.B.j(b.g, d);
    return a.o.j.g.then(function(e) {
      a.o = null;
      e = B(e, 1);
      F(c, 4, e);
      var f = v();
      F(c, 3, f);
      o9(c, 0);
      0 == e ? (F(c, 5, !0), F(c, 6, 0)) : (f = D(c, 6, 0) + 1, F(c, 6, f));
      s9(a.w, c);
      f = new st;
      var g = c.F();
      F(f, 1, g);
      F(f, 2, e);
      e = new Zs;
      We(e, tt, f);
      wt(a.g, e);
      return V$(a)
    })
  }

  function qca(a) {
    for (var b = v(), c = [], d = 0; d < a.A.length; d++) {
      var e = a.A[d];
      if (a.B.g(e.g)) {
        var f = r9(a.w, e.F()),
          g = D(f, 6, 0),
          k = e.w;
        e.A && !E(f, 5, !1) && 3 > g && (k = Math.min(k, 2 > g ? 0 : 5 * (g - 1)));
        k = (g = Math.max(D(f, 3, 0), D(f, 2, 0))) ? (b - g) / 1E3 / 60 - k : Number.MAX_SAFE_INTEGER;
        0 <= k && c.push(new rca(e, f, k))
      }
    }
    Ub(c, function(n) {
      return [n.g.C, E(n.o, 5, !1), -n.j]
    });
    return c.length ? c[0].g : null
  }

  function rca(a, b, c) {
    this.g = a;
    this.o = b;
    this.j = c
  };

  function sca(a, b) {
    this.j = a;
    this.g = b
  }

  function mca(a, b) {
    return tca(a).then(function(c) {
      return c ? Gba(c, b).fa(function(d) {
        rn(a.g, Oi(d), {
          errorSourceFunction: "getClientOpenState"
        });
        return 0
      }) : 0
    })
  }

  function tca(a) {
    var b = a.j.map(function(c) {
      return Eba(c).then(function(d) {
        return {
          client: c,
          Im: d
        }
      })
    });
    return $h(b).then(function(c) {
      return (c = c.find(function(d) {
        return d.Im
      })) ? c.client : null
    }).fa(function(c) {
      rn(a.g, Oi(c));
      return null
    })
  };

  function W$(a, b, c, d, e, f, g, k, n, p) {
    Q.call(this);
    this.B = ah(Xg(), "docs-extension-id");
    this.U = p || t.parent.parent;
    this.w = a;
    this.X = p ? p.location.origin : "chrome-extension://" + this.B;
    this.A = new Mm(this);
    R(this, this.A);
    this.L = new z$(c, a);
    b = new MessageChannel;
    this.H = b.port1;
    this.H.onmessage = sn(a, this.O, this);
    this.W = b.port2;
    this.o = d;
    this.A.R(this.o, "h", function(x) {
      X$(this, x.Vm)
    }.bind(this));
    this.C = e;
    this.j = f;
    uca(this);
    this.I = g;
    this.G = k;
    this.g = new G8;
    R(this, this.g);
    X$(this, vca(this))
  }
  r(W$, Q);

  function uca(a) {
    for (var b = w$(), c = 0; c < b.length; c++) a.j.A.push(b[c])
  }

  function vca(a) {
    return a.L.get().then(function(b) {
      switch (b.Ok) {
        case 1:
          return wca(this);
        case 4:
          return Y$(this, b.Nk);
        default:
          return Y$(this)
      }
    }.bind(a))
  }

  function wca(a) {
    wr(a.w);
    return a.o.start().then(function() {
      var b = Fn(1);
      return Z$(this, b, this.W).then()
    }.bind(a))
  }

  function Y$(a, b) {
    var c = new An;
    b && F(c, 1, b);
    b = Fn(3);
    c = J(b, 3, c);
    return Z$(a, c).then()
  }

  function Z$(a, b, c) {
    var d = new MessageChannel;
    return ei((new Rh(u(function(e) {
      var f = [d.port2];
      c && f.push(c);
      this.U.postMessage(b.ga(), this.X, f);
      d.port1.onmessage = e
    }, a))).then(u(function(e) {
      e = new Ln(e.data);
      var f = b.getType();
      return F(e, 1, f)
    }, a)), u(d.port1.close, d.port1))
  }
  W$.prototype.O = function(a) {
    var b = this,
      c = new zn(a.data);
    X$(this, xca(this, c).then(function(d) {
      return ai([Rm(b.w.w), b.G.cg()]).then(function() {
        a.ports.length && a.ports[0].postMessage(d.ga())
      })
    }))
  };

  function xca(a, b) {
    var c = Jn(new In, b.getType());
    switch (b.getType()) {
      case 0:
        return yca(a, B(H(b, vn, 2), 1)).then(function() {
          return c
        });
      case 2:
        return b = Pe(H(b, xn, 3), 1), zca(a, b).then(function(d) {
          var e = new Hn;
          d = J(e, 1, d);
          J(c, 2, d);
          return c
        });
      case 3:
        return $$(a).then(function() {
          return c
        });
      default:
        throw Error("Dropped unknown message " + b);
    }
  }

  function yca(a, b) {
    switch (b) {
      case "heartbeat":
        return $$(a);
      default:
        return Wh()
    }
  }

  function $$(a) {
    return a.j.j ? Wh() : a.j.start().then(a.D.bind(a))
  }
  W$.prototype.D = function() {
    return aca(this.I)
  };

  function zca(a, b) {
    var c = "multi_doc_sync_" + Gd(),
      d = sm();
    c = Wba(Xba(c), b);
    b = new r$(1, d, "multi_doc_sync", Math.min(12E4 * b.length, 6E5), !0, !0, !0, c);
    if (!a.C.g(b)) return Wh();
    d = Qq(Pq(new Nq, 18), !1);
    return a.C.j(b, d).j.g.then(function(e) {
      return (e = (e = H(e, n$, 5)) && H(e, m$, 1)) && H(e, Gn, 1) || null
    })
  }

  function X$(a, b) {
    var c = chrome.runtime.connect(a.B),
      d = a.g.Gb(function() {
        c.disconnect()
      }, 18E5);
    ei(b, function() {
      c.disconnect();
      this.g.clear(d)
    }.bind(a))
  }
  Da("_loadSchedulerFrame", function(a) {
    var b = Xaa(),
      c = Dba(b),
      d = new sca(c, b);
    c = ah(Xg(), "docs-obsImUrl");
    var e = new z8(c, 9E5, !1),
      f = new zt(b, null),
      g = new kr(e, b),
      k = new Sn,
      n = new Tba(k);
    return tn(b, Ii(e.o).then(function() {
      return new Rh(function(p, x) {
        g$(n, p, x)
      })
    }).then(function(p) {
      var x = new O8,
        A = new p9(b),
        G = new dca(A),
        K = jh(),
        fa = new Yaa,
        Ua = hba(gba(fba(eba(f), fa), K));
      Ua.Ug();
      b.j.sid = K;
      var Jb = new S$(b, x, g, e, G, p, d, K, Ua, new s8),
        ke = new U$(A, Jb);
      return Bt(f).then(function(fb) {
        var Ic = new jba;
        fb = new W$(b, e, f, g, Jb, ke,
          new $ba(n, Jb, new d$(fb, b, k, Ic, Ua, new $9(b, fb))), Ua, fa, a);
        R(fb, b);
        R(fb, e);
        R(fb, f);
        R(fb, g);
        R(fb, ke);
        R(fb, x);
        return fb
      })
    }))
  }, void 0);
}).call(this);