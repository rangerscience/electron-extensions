/* JS */
gapi.loaded_0(function(_) {
  var window = this;
  var ha, wa, Ja, Ka, Ma;
  _.fa = function(a) {
    return function() {
      return _.da[a].apply(this, arguments)
    }
  };
  _._DumpException = function(a) {
    throw a;
  };
  _.da = [];
  ha = function(a) {
    var b = 0;
    return function() {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      }
    }
  };
  _.ta = function(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: ha(a)
    }
  };
  _.va = "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
  };
  if ("function" == typeof Object.setPrototypeOf) wa = Object.setPrototypeOf;
  else {
    var ya;
    a: {
      var Ca = {
          a: !0
        },
        Ga = {};
      try {
        Ga.__proto__ = Ca;
        ya = Ga.a;
        break a
      } catch (a) {}
      ya = !1
    }
    wa = ya ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  _.Ia = wa;
  Ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
  };
  Ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  Ma = function(a, b) {
    if (b) {
      var c = Ka;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e]
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && Ja(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      })
    }
  };
  Ma("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
      a: {
        var d = this;d instanceof String && (d = String(d));
        for (var e = d.length, f = 0; f < e; f++) {
          var g = d[f];
          if (b.call(c, g, f, d)) {
            b = g;
            break a
          }
        }
        b = void 0
      }
      return b
    }
  });
  var Na = function(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
  };
  Ma("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
      var d = Na(this, b, "startsWith"),
        e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e;)
        if (d[c++] != b[g++]) return !1;
      return g >= f
    }
  });
  Ma("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
      var c = Na(this, null, "repeat");
      if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b;)
        if (b & 1 && (d += c), b >>>= 1) c += c;
      return d
    }
  });
  var Oa = function() {
      Oa = function() {};
      Ka.Symbol || (Ka.Symbol = Pa)
    },
    Ra = function(a, b) {
      this.nO = a;
      Ja(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
      })
    };
  Ra.prototype.toString = function() {
    return this.nO
  };
  var Pa = function() {
      function a(c) {
        if (this instanceof a) throw new TypeError("Symbol is not a constructor");
        return new Ra("jscomp_symbol_" + (c || "") + "_" + b++, c)
      }
      var b = 0;
      return a
    }(),
    Ua = function() {
      Oa();
      var a = Ka.Symbol.iterator;
      a || (a = Ka.Symbol.iterator = Ka.Symbol("Symbol.iterator"));
      "function" != typeof Array.prototype[a] && Ja(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
          return Sa(ha(this))
        }
      });
      Ua = function() {}
    },
    Sa = function(a) {
      Ua();
      a = {
        next: a
      };
      a[Ka.Symbol.iterator] = function() {
        return this
      };
      return a
    },
    Va = function(a, b) {
      Ua();
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
    };
  Ma("Array.prototype.keys", function(a) {
    return a ? a : function() {
      return Va(this, function(b) {
        return b
      })
    }
  });
  Ma("Array.prototype.values", function(a) {
    return a ? a : function() {
      return Va(this, function(b, c) {
        return c
      })
    }
  });
  Ma("Object.is", function(a) {
    return a ? a : function(b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
  });
  Ma("Array.prototype.includes", function(a) {
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
  Ma("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      return -1 !== Na(this, b, "includes").indexOf(b, c || 0)
    }
  });
  var Ya = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  Ma("WeakMap", function(a) {
    function b() {}

    function c(l) {
      var m = typeof l;
      return "object" === m && null !== l || "function" === m
    }

    function d(l) {
      if (!Ya(l, f)) {
        var m = new b;
        Ja(l, f, {
          value: m
        })
      }
    }

    function e(l) {
      var m = Object[l];
      m && (Object[l] = function(n) {
        if (n instanceof b) return n;
        d(n);
        return m(n)
      })
    }
    if (function() {
        if (!a || !Object.seal) return !1;
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [l, 2],
              [m, 3]
            ]);
          if (2 != n.get(l) || 3 != n.get(m)) return !1;
          n["delete"](l);
          n.set(m, 4);
          return !n.has(l) && 4 == n.get(m)
        } catch (p) {
          return !1
        }
      }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      k = function(l) {
        this.Ca = (g += Math.random() + 1).toString();
        if (l) {
          l = _.ta(l);
          for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
        }
      };
    k.prototype.set = function(l, m) {
      if (!c(l)) throw Error("a");
      d(l);
      if (!Ya(l, f)) throw Error("b`" + l);
      l[f][this.Ca] = m;
      return this
    };
    k.prototype.get = function(l) {
      return c(l) && Ya(l, f) ? l[f][this.Ca] : void 0
    };
    k.prototype.has = function(l) {
      return c(l) && Ya(l, f) && Ya(l[f], this.Ca)
    };
    k.prototype["delete"] =
      function(l) {
        return c(l) && Ya(l, f) && Ya(l[f], this.Ca) ? delete l[f][this.Ca] : !1
      };
    return k
  });
  Ma("Map", function(a) {
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var k = Object.seal({
              x: 4
            }),
            l = new a(_.ta([
              [k, "s"]
            ]));
          if ("s" != l.get(k) || 1 != l.size || l.get({
              x: 4
            }) || l.set({
              x: 4
            }, "t") != l || 2 != l.size) return !1;
          var m = l.entries(),
            n = m.next();
          if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
          n = m.next();
          return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
        } catch (p) {
          return !1
        }
      }()) return a;
    Ua();
    var b = new WeakMap,
      c = function(k) {
        this.uf = {};
        this.We = f();
        this.size = 0;
        if (k) {
          k = _.ta(k);
          for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
        }
      };
    c.prototype.set = function(k, l) {
      k = 0 === k ? 0 : k;
      var m = d(this, k);
      m.list || (m.list = this.uf[m.id] = []);
      m.ve ? m.ve.value = l : (m.ve = {
        next: this.We,
        kj: this.We.kj,
        head: this.We,
        key: k,
        value: l
      }, m.list.push(m.ve), this.We.kj.next = m.ve, this.We.kj = m.ve, this.size++);
      return this
    };
    c.prototype["delete"] = function(k) {
      k = d(this, k);
      return k.ve && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.uf[k.id], k.ve.kj.next = k.ve.next,
        k.ve.next.kj = k.ve.kj, k.ve.head = null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
      this.uf = {};
      this.We = this.We.kj = f();
      this.size = 0
    };
    c.prototype.has = function(k) {
      return !!d(this, k).ve
    };
    c.prototype.get = function(k) {
      return (k = d(this, k).ve) && k.value
    };
    c.prototype.entries = function() {
      return e(this, function(k) {
        return [k.key, k.value]
      })
    };
    c.prototype.keys = function() {
      return e(this, function(k) {
        return k.key
      })
    };
    c.prototype.values = function() {
      return e(this, function(k) {
        return k.value
      })
    };
    c.prototype.forEach = function(k, l) {
      for (var m =
          this.entries(), n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(k, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
        var n = k.uf[m];
        if (n && Ya(k.uf, m))
          for (k = 0; k < n.length; k++) {
            var p = n[k];
            if (l !== l && p.key !== p.key || l === p.key) return {
              id: m,
              list: n,
              index: k,
              ve: p
            }
          }
        return {
          id: m,
          list: n,
          index: -1,
          ve: void 0
        }
      },
      e = function(k, l) {
        var m = k.We;
        return Sa(function() {
          if (m) {
            for (; m.head != k.We;) m = m.kj;
            for (; m.next !=
              m.head;) return m = m.next, {
              done: !1,
              value: l(m)
            };
            m = null
          }
          return {
            done: !0,
            value: void 0
          }
        })
      },
      f = function() {
        var k = {};
        return k.kj = k.next = k.head = k
      },
      g = 0;
    return c
  });
  Ma("Set", function(a) {
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var c = Object.seal({
              x: 4
            }),
            d = new a(_.ta([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
              x: 4
            }) != d || 2 != d.size) return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
        } catch (g) {
          return !1
        }
      }()) return a;
    Ua();
    var b = function(c) {
      this.W = new Map;
      if (c) {
        c = _.ta(c);
        for (var d; !(d = c.next()).done;) this.add(d.value)
      }
      this.size = this.W.size
    };
    b.prototype.add = function(c) {
      c = 0 === c ? 0 : c;
      this.W.set(c, c);
      this.size = this.W.size;
      return this
    };
    b.prototype["delete"] = function(c) {
      c = this.W["delete"](c);
      this.size = this.W.size;
      return c
    };
    b.prototype.clear = function() {
      this.W.clear();
      this.size = 0
    };
    b.prototype.has = function(c) {
      return this.W.has(c)
    };
    b.prototype.entries = function() {
      return this.W.entries()
    };
    b.prototype.values = function() {
      return this.W.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
      var e = this;
      this.W.forEach(function(f) {
        return c.call(d, f, f, e)
      })
    };
    return b
  });
  Ma("Array.from", function(a) {
    return a ? a : function(b, c, d) {
      c = null != c ? c : function(k) {
        return k
      };
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
  Ma("Promise", function(a) {
    function b() {
      this.Qe = null
    }

    function c(g) {
      return g instanceof e ? g : new e(function(k) {
        k(g)
      })
    }
    if (a) return a;
    b.prototype.GG = function(g) {
      if (null == this.Qe) {
        this.Qe = [];
        var k = this;
        this.HG(function() {
          k.bT()
        })
      }
      this.Qe.push(g)
    };
    var d = Ka.setTimeout;
    b.prototype.HG = function(g) {
      d(g, 0)
    };
    b.prototype.bT = function() {
      for (; this.Qe && this.Qe.length;) {
        var g = this.Qe;
        this.Qe = [];
        for (var k = 0; k < g.length; ++k) {
          var l = g[k];
          g[k] = null;
          try {
            l()
          } catch (m) {
            this.MR(m)
          }
        }
      }
      this.Qe = null
    };
    b.prototype.MR = function(g) {
      this.HG(function() {
        throw g;
      })
    };
    var e = function(g) {
      this.Da = 0;
      this.Kf = void 0;
      this.fo = [];
      var k = this.jz();
      try {
        g(k.resolve, k.reject)
      } catch (l) {
        k.reject(l)
      }
    };
    e.prototype.jz = function() {
      function g(m) {
        return function(n) {
          l || (l = !0, m.call(k, n))
        }
      }
      var k = this,
        l = !1;
      return {
        resolve: g(this.$Z),
        reject: g(this.mj)
      }
    };
    e.prototype.$Z = function(g) {
      if (g === this) this.mj(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof e) this.F0(g);
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
        k ?
        this.ZZ(g) : this.kI(g)
      }
    };
    e.prototype.ZZ = function(g) {
      var k = void 0;
      try {
        k = g.then
      } catch (l) {
        this.mj(l);
        return
      }
      "function" == typeof k ? this.G0(k, g) : this.kI(g)
    };
    e.prototype.mj = function(g) {
      this.kN(2, g)
    };
    e.prototype.kI = function(g) {
      this.kN(1, g)
    };
    e.prototype.kN = function(g, k) {
      if (0 != this.Da) throw Error("c`" + g + "`" + k + "`" + this.Da);
      this.Da = g;
      this.Kf = k;
      this.dT()
    };
    e.prototype.dT = function() {
      if (null != this.fo) {
        for (var g = 0; g < this.fo.length; ++g) f.GG(this.fo[g]);
        this.fo = null
      }
    };
    var f = new b;
    e.prototype.F0 = function(g) {
      var k = this.jz();
      g.Gt(k.resolve, k.reject)
    };
    e.prototype.G0 = function(g, k) {
      var l = this.jz();
      try {
        g.call(k, l.resolve, l.reject)
      } catch (m) {
        l.reject(m)
      }
    };
    e.prototype.then = function(g, k) {
      function l(t, r) {
        return "function" == typeof t ? function(u) {
          try {
            m(t(u))
          } catch (v) {
            n(v)
          }
        } : r
      }
      var m, n, p = new e(function(t, r) {
        m = t;
        n = r
      });
      this.Gt(l(g, m), l(k, n));
      return p
    };
    e.prototype["catch"] = function(g) {
      return this.then(void 0, g)
    };
    e.prototype.Gt = function(g, k) {
      function l() {
        switch (m.Da) {
          case 1:
            g(m.Kf);
            break;
          case 2:
            k(m.Kf);
            break;
          default:
            throw Error("d`" + m.Da);
        }
      }
      var m = this;
      null == this.fo ? f.GG(l) : this.fo.push(l)
    };
    e.resolve = c;
    e.reject = function(g) {
      return new e(function(k, l) {
        l(g)
      })
    };
    e.race = function(g) {
      return new e(function(k, l) {
        for (var m = _.ta(g), n = m.next(); !n.done; n = m.next()) c(n.value).Gt(k, l)
      })
    };
    e.all = function(g) {
      var k = _.ta(g),
        l = k.next();
      return l.done ? c([]) : new e(function(m, n) {
        function p(u) {
          return function(v) {
            t[u] = v;
            r--;
            0 == r && m(t)
          }
        }
        var t = [],
          r = 0;
        do t.push(void 0), r++, c(l.value).Gt(p(t.length - 1), n), l = k.next(); while (!l.done)
      })
    };
    return e
  });
  _.Za = _.Za || {};
  _.q = this || self;
  _.$a = function(a) {
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
    else if ("function" ==
      b && "undefined" == typeof a.call) return "object";
    return b
  };
  _.ab = function(a) {
    return "array" == _.$a(a)
  };
  _.db = "closure_uid_" + (1E9 * Math.random() >>> 0);
  _.fb = Date.now || function() {
    return +new Date
  };
  _.y = function(a, b) {
    a = a.split(".");
    var c = _.q;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
  };
  _.H = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.H = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Dp = function(d, e, f) {
      for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
      return b.prototype[e].apply(d, g)
    }
  };
  gadgets = window.gadgets || {};
  osapi = window.osapi = window.osapi || {};

  window.___jsl = window.___jsl || {};
  (window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: {
      parsetags: "explicit"
    },
    appsapi: {
      plus_one_service: "/plus/v1"
    },
    csi: {
      rate: .01
    },
    poshare: {
      hangoutContactPickerServer: "https://plus.google.com"
    },
    gappsutil: {
      required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
      display_on_page_ready: !1
    },
    appsutil: {
      required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
      display_on_page_ready: !1
    },
    "oauth-flow": {
      authUrl: "https://accounts.google.com/o/oauth2/auth",
      proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
      redirectUri: "postmessage"
    },
    iframes: {
      sharebox: {
        params: {
          json: "&"
        },
        url: ":socialhost:/:session_prefix:_/sharebox/dialog"
      },
      plus: {
        url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
      },
      ":socialhost:": "https://apis.google.com",
      ":im_socialhost:": "https://plus.googleapis.com",
      domains_suggest: {
        url: "https://domains.google.com/suggest/flow"
      },
      card: {
        params: {
          s: "#",
          userid: "&"
        },
        url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
      },
      ":signuphost:": "https://plus.google.com",
      ":gplus_url:": "https://plus.google.com",
      plusone: {
        url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
      },
      plus_share: {
        url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
      },
      plus_circle: {
        url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
      },
      plus_followers: {
        url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
      },
      configurator: {
        url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
      },
      appcirclepicker: {
        url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
      },
      page: {
        url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
      },
      person: {
        url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
      },
      community: {
        url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
      },
      follow: {
        url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
      },
      commentcount: {
        url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
      },
      comments: {
        url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
      },
      youtube: {
        url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
      },
      reportabuse: {
        url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
      },
      additnow: {
        url: ":socialhost:/additnow/additnow.html"
      },
      appfinder: {
        url: "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
      },
      ":source:": "1p"
    },
    poclient: {
      update_session: "google.updateSessionCallback"
    },
    "googleapis.config": {
      rpc: "/rpc",
      root: "https://content.googleapis.com",
      "root-1p": "https://clients6.google.com",
      useGapiForXd3: !0,
      xd3: "/static/proxy.html",
      auth: {
        useInterimAuth: !1
      }
    },
    report: {
      apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
      rate: 1E-4
    },
    client: {
      perApiBatch: !0
    }
  });

  var nb, ob;
  _.ib = function() {};
  _.jb = function(a) {
    var b = _.$a(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  };
  _.kb = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  };
  _.mb = function(a) {
    return "function" == _.$a(a)
  };
  nb = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
  };
  ob = function(a, b, c) {
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
  };
  _.L = function(a, b, c) {
    _.L = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? nb : ob;
    return _.L.apply(null, arguments)
  };
  _.pb = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, _.pb);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  _.H(_.pb, Error);
  _.pb.prototype.name = "CustomError";
  var qb = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    _.pb.call(this, c + a[d])
  };
  _.H(qb, _.pb);
  qb.prototype.name = "AssertionError";
  _.rb = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0)
  } : function(a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
      if (c in a && a[c] === b) return c;
    return -1
  };
  _.sb = Array.prototype.lastIndexOf ? function(a, b) {
    return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
  } : function(a, b) {
    var c = a.length - 1;
    0 > c && (c = Math.max(0, a.length + c));
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
    for (; 0 <= c; c--)
      if (c in a && a[c] === b) return c;
    return -1
  };
  _.tb = Array.prototype.forEach ? function(a, b, c) {
    Array.prototype.forEach.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
  };
  _.ub = Array.prototype.filter ? function(a, b) {
    return Array.prototype.filter.call(a, b, void 0)
  } : function(a, b) {
    for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
      if (g in f) {
        var k = f[g];
        b.call(void 0, k, g, a) && (d[e++] = k)
      } return d
  };
  _.vb = Array.prototype.map ? function(a, b) {
    return Array.prototype.map.call(a, b, void 0)
  } : function(a, b) {
    for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d
  };
  _.wb = Array.prototype.some ? function(a, b, c) {
    return Array.prototype.some.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return !0;
    return !1
  };
  _.xb = Array.prototype.every ? function(a, b, c) {
    return Array.prototype.every.call(a, b, c)
  } : function(a, b, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && !b.call(c, e[f], f, a)) return !1;
    return !0
  };
  _.yb = function(a, b) {
    return 0 <= (0, _.rb)(a, b)
  };
  var Ab;
  _.zb = String.prototype.trim ? function(a) {
    return a.trim()
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
  };
  _.Bb = function(a, b) {
    var c = 0;
    a = (0, _.zb)(String(a)).split(".");
    b = (0, _.zb)(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c = Ab(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ab(0 == f[2].length, 0 == g[2].length) || Ab(f[2], g[2]);
        f = f[3];
        g = g[3]
      } while (0 == c)
    }
    return c
  };
  Ab = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  };
  a: {
    var Db = _.q.navigator;
    if (Db) {
      var Eb = Db.userAgent;
      if (Eb) {
        _.Cb = Eb;
        break a
      }
    }
    _.Cb = ""
  }
  _.Fb = function(a) {
    return -1 != _.Cb.indexOf(a)
  };
  var Hb;
  _.Gb = function(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  };
  Hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  _.Ib = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Hb.length; f++) c = Hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  };
  _.Jb = function() {
    return _.Fb("Opera")
  };
  _.Kb = function() {
    return _.Fb("Trident") || _.Fb("MSIE")
  };
  _.Lb = function(a) {
    var b = !1,
      c;
    return function() {
      b || (c = a(), b = !0);
      return c
    }
  };
  var Nb, Mb;
  _.Ob = function(a, b) {
    this.AN = a === Mb && b || "";
    this.XQ = Nb
  };
  _.Ob.prototype.eh = !0;
  _.Ob.prototype.Df = function() {
    return this.AN
  };
  _.Pb = function(a) {
    return a instanceof _.Ob && a.constructor === _.Ob && a.XQ === Nb ? a.AN : "type_error:Const"
  };
  _.Qb = function(a) {
    return new _.Ob(Mb, a)
  };
  Nb = {};
  Mb = {};
  _.Rb = _.Qb("");
  var Sb = function() {
    this.JL = ""
  };
  Sb.prototype.eh = !0;
  Sb.prototype.Df = function() {
    return this.JL.toString()
  };
  Sb.prototype.fh = function(a) {
    this.JL = a;
    return this
  };
  (new Sb).fh("");
  var Vb;
  _.Wb = function(a, b) {
    this.KL = a === _.Ub && b || "";
    this.GQ = Vb
  };
  _.Wb.prototype.eh = !0;
  _.Wb.prototype.Df = function() {
    return this.KL.toString()
  };
  _.Wb.prototype.CB = !0;
  _.Wb.prototype.Jh = _.fa(1);
  _.Xb = function(a) {
    if (a instanceof _.Wb && a.constructor === _.Wb && a.GQ === Vb) return a.KL;
    _.$a(a);
    return "type_error:SafeUrl"
  };
  _.Yb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  _.Zb = function(a) {
    if (a instanceof _.Wb) return a;
    a = "object" == typeof a && a.eh ? a.Df() : String(a);
    _.Yb.test(a) || (a = "about:invalid#zClosurez");
    return new _.Wb(_.Ub, a)
  };
  Vb = {};
  _.Ub = {};
  var dc, ec, kc, ic, hc, gc, jc, lc;
  _.bc = function() {
    this.$C = "";
    this.FQ = ac
  };
  _.bc.prototype.eh = !0;
  var ac = {};
  _.bc.prototype.Df = function() {
    return this.$C
  };
  _.cc = function(a) {
    if (a instanceof _.bc && a.constructor === _.bc && a.FQ === ac) return a.$C;
    _.$a(a);
    return "type_error:SafeStyle"
  };
  _.bc.prototype.fh = function(a) {
    this.$C = a;
    return this
  };
  dc = (new _.bc).fh("");
  _.fc = function(a) {
    var b = "",
      c;
    for (c in a) {
      if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("i`" + c);
      var d = a[c];
      null != d && (d = _.ab(d) ? (0, _.vb)(d, ec).join(" ") : ec(d), b += c + ":" + d + ";")
    }
    return b ? (new _.bc).fh(b) : dc
  };
  ec = function(a) {
    if (a instanceof _.Wb) return 'url("' + _.Xb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    if (a instanceof _.Ob) a = _.Pb(a);
    else {
      a = String(a);
      var b = a.replace(gc, "$1").replace(gc, "$1").replace(hc, "url");
      if (ic.test(b)) {
        if (b = !jc.test(a)) {
          for (var c = b = !0, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
          }
          b = b && c && kc(a)
        }
        a = b ? lc(a) : "zClosurez"
      } else a = "zClosurez"
    }
    if (/[{;}]/.test(a)) throw new qb("Value does not allow [{;}], got: %s.", [a]);
    return a
  };
  kc = function(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1
      } else if (!b && !c.test(e)) return !1
    }
    return b
  };
  ic = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/;
  hc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
  gc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
  jc = /\/\*/;
  lc = function(a) {
    return a.replace(hc, function(b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
        f = k;
        return l
      });
      b = _.Zb(d).Df();
      return c + f + b + f + e
    })
  };
  _.nc = function() {
    this.ZC = "";
    this.EQ = _.mc
  };
  _.nc.prototype.eh = !0;
  _.mc = {};
  _.pc = function(a) {
    a = _.Pb(a);
    return 0 === a.length ? oc : (new _.nc).fh(a)
  };
  _.nc.prototype.Df = function() {
    return this.ZC
  };
  _.nc.prototype.fh = function(a) {
    this.ZC = a;
    return this
  };
  var oc = (new _.nc).fh("");
  var qc;
  _.sc = function() {
    this.YC = "";
    this.DQ = qc;
    this.HH = null
  };
  _.sc.prototype.CB = !0;
  _.sc.prototype.Jh = _.fa(0);
  _.sc.prototype.eh = !0;
  _.sc.prototype.Df = function() {
    return this.YC.toString()
  };
  _.tc = function(a) {
    if (a instanceof _.sc && a.constructor === _.sc && a.DQ === qc) return a.YC;
    _.$a(a);
    return "type_error:SafeHtml"
  };
  qc = {};
  _.uc = function(a, b) {
    return (new _.sc).fh(a, b)
  };
  _.sc.prototype.fh = function(a, b) {
    this.YC = a;
    this.HH = b;
    return this
  };
  _.uc("<!DOCTYPE html>", 0);
  _.vc = _.uc("", 0);
  _.wc = _.uc("<br>", 0);
  _.xc = _.Lb(function() {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = _.tc(_.vc);
    return !b.parentElement
  });
  _.yc = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
  } : function(a, b) {
    return Array(b + 1).join(a)
  };
  _.zc = 2147483648 * Math.random() | 0;
  _.Ac = function() {
    return _.Fb("iPhone") && !_.Fb("iPod") && !_.Fb("iPad")
  };
  _.Bc = function() {
    return _.Ac() || _.Fb("iPad") || _.Fb("iPod")
  };
  var Cc = function(a) {
      Cc[" "](a);
      return a
    },
    Fc;
  Cc[" "] = _.ib;
  _.Dc = function(a, b) {
    try {
      return Cc(a[b]), !0
    } catch (c) {}
    return !1
  };
  Fc = function(a, b) {
    var c = Ec;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
  };
  var Vc, Xc, Ec, ed;
  _.Gc = _.Jb();
  _.Hc = _.Kb();
  _.Ic = _.Fb("Edge");
  _.Jc = _.Ic || _.Hc;
  _.Kc = _.Fb("Gecko") && !(-1 != _.Cb.toLowerCase().indexOf("webkit") && !_.Fb("Edge")) && !(_.Fb("Trident") || _.Fb("MSIE")) && !_.Fb("Edge");
  _.Lc = -1 != _.Cb.toLowerCase().indexOf("webkit") && !_.Fb("Edge");
  _.Mc = _.Lc && _.Fb("Mobile");
  _.Nc = _.Fb("Macintosh");
  _.Oc = _.Fb("Windows");
  _.Pc = _.Fb("Linux") || _.Fb("CrOS");
  _.Qc = _.Fb("Android");
  _.Rc = _.Ac();
  _.Sc = _.Fb("iPad");
  _.Tc = _.Fb("iPod");
  _.Uc = _.Bc();
  Vc = function() {
    var a = _.q.document;
    return a ? a.documentMode : void 0
  };
  a: {
    var Yc = "",
      Zc = function() {
        var a = _.Cb;
        if (_.Kc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (_.Ic) return /Edge\/([\d\.]+)/.exec(a);
        if (_.Hc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (_.Lc) return /WebKit\/(\S+)/.exec(a);
        if (_.Gc) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();Zc && (Yc = Zc ? Zc[1] : "");
    if (_.Hc) {
      var $c = Vc();
      if (null != $c && $c > parseFloat(Yc)) {
        Xc = String($c);
        break a
      }
    }
    Xc = Yc
  }
  _.ad = Xc;
  Ec = {};
  _.bd = function(a) {
    return Fc(a, function() {
      return 0 <= _.Bb(_.ad, a)
    })
  };
  _.dd = function(a) {
    return Number(_.cd) >= a
  };
  ed = _.q.document && _.Hc ? Vc() : void 0;
  _.cd = ed;

  var gd, id, md, nd, od, pd, qd, rd, sd, vd, Hd, Id;
  _.fd = function(a, b) {
    return _.da[a] = b
  };
  _.Wb.prototype.Jh = _.fd(1, function() {
    return 1
  });
  _.sc.prototype.Jh = _.fd(0, function() {
    return this.HH
  });
  gd = 0;
  _.hd = function(a) {
    return a[_.db] || (a[_.db] = ++gd)
  };
  _.jd = function(a) {
    return Array.prototype.concat.apply([], arguments)
  };
  _.kd = function(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  };
  _.ld = function(a, b) {
    return 0 == a.lastIndexOf(b, 0)
  };
  md = /&/g;
  nd = /</g;
  od = />/g;
  pd = /"/g;
  qd = /'/g;
  rd = /\x00/g;
  sd = /[\x00&<>"']/;
  _.td = function(a, b) {
    if (b) a = a.replace(md, "&amp;").replace(nd, "&lt;").replace(od, "&gt;").replace(pd, "&quot;").replace(qd, "&#39;").replace(rd, "&#0;");
    else {
      if (!sd.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(md, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(nd, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(od, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pd, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qd, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rd, "&#0;"))
    }
    return a
  };
  _.ud = {};
  vd = {};
  _.wd = function(a, b) {
    this.LL = a === _.ud && b || "";
    this.gR = vd
  };
  _.wd.prototype.eh = !0;
  _.wd.prototype.Df = function() {
    return this.LL.toString()
  };
  _.wd.prototype.CB = !0;
  _.wd.prototype.Jh = function() {
    return 1
  };
  _.yd = function(a) {
    if (a instanceof _.wd && a.constructor === _.wd && a.gR === vd) return a.LL;
    _.$a(a);
    return "type_error:TrustedResourceUrl"
  };
  _.zd = function(a) {
    return _.yd(a).toString()
  };
  _.Ad = function(a) {
    return new _.wd(_.ud, _.Pb(a))
  };
  _.Bd = function(a) {
    if (a instanceof _.Wb) return a;
    a = "object" == typeof a && a.eh ? a.Df() : String(a);
    _.Yb.test(a) || (a = "about:invalid#zClosurez");
    return new _.Wb(_.Ub, a)
  };
  _.Cd = function(a) {
    if (a instanceof _.sc) return a;
    var b = "object" == typeof a,
      c = null;
    b && a.CB && (c = a.Jh());
    return _.uc(_.td(b && a.eh ? a.Df() : String(a)), c)
  };
  _.Dd = function(a, b) {
    if ((0, _.xc)())
      for (; a.lastChild;) a.removeChild(a.lastChild);
    a.innerHTML = _.tc(b)
  };
  _.Ed = function(a, b) {
    b = b instanceof _.Wb ? b : _.Bd(b);
    a.href = _.Xb(b)
  };
  _.Fd = function(a) {
    return a = _.td(a, void 0)
  };
  _.Gd = function(a) {
    return String(a).replace(/\-([a-z])/g, function(b, c) {
      return c.toUpperCase()
    })
  };
  Hd = !_.Hc || _.dd(9);
  Id = !_.Kc && !_.Hc || _.Hc && _.dd(9) || _.Kc && _.bd("1.9.1");
  _.Jd = _.Hc && !_.bd("9");
  _.Kd = _.Hc || _.Gc || _.Lc;
  _.Ld = _.Hc && !_.dd(9);
  var Rd, Vd, Zd;
  _.Od = function(a) {
    return a ? new _.Md(_.Nd(a)) : id || (id = new _.Md)
  };
  _.Pd = function(a, b) {
    return "string" === typeof b ? a.getElementById(b) : b
  };
  _.Qd = function(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
        d.length = e;
        return d
      }
      return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.yb(b.split(/\s+/), c) && (d[e++] = g);
      d.length = e;
      return d
    }
    return a
  };
  _.Sd = function(a, b) {
    _.Gb(b, function(c, d) {
      c && "object" == typeof c && c.eh && (c = c.Df());
      "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Rd.hasOwnProperty(d) ? a.setAttribute(Rd[d], c) : _.ld(d, "aria-") || _.ld(d, "data-") ? a.setAttribute(d, c) : a[d] = c
    })
  };
  Rd = {
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
  _.Td = function(a) {
    return a ? a.parentWindow || a.defaultView : window
  };
  _.Wd = function(a, b) {
    var c = String(b[0]),
      d = b[1];
    if (!Hd && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', _.Fd(d.name), '"');
      if (d.type) {
        c.push(' type="', _.Fd(d.type), '"');
        var e = {};
        _.Ib(e, d);
        delete e.type;
        d = e
      }
      c.push(">");
      c = c.join("")
    }
    c = _.Ud(a, c);
    d && ("string" === typeof d ? c.className = d : _.ab(d) ? c.className = d.join(" ") : _.Sd(c, d));
    2 < b.length && Vd(a, c, b, 2);
    return c
  };
  Vd = function(a, b, c, d) {
    function e(g) {
      g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
    }
    for (; d < c.length; d++) {
      var f = c[d];
      !_.jb(f) || _.kb(f) && 0 < f.nodeType ? e(f) : (0, _.tb)(Zd(f) ? _.kd(f) : f, e)
    }
  };
  _.$d = function(a) {
    return _.Ud(document, a)
  };
  _.Ud = function(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b)
  };
  _.ae = function(a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1
    }
    return !0
  };
  _.be = function(a, b) {
    Vd(_.Nd(a), a, arguments, 1)
  };
  _.ce = function(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
  };
  _.de = function(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
  };
  _.ee = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  };
  _.fe = function(a) {
    var b, c = a.parentNode;
    if (c && 11 != c.nodeType) {
      if (a.removeNode) return a.removeNode(!1);
      for (; b = a.firstChild;) c.insertBefore(b, a);
      return _.ee(a)
    }
  };
  _.ge = function(a) {
    return Id && void 0 != a.children ? a.children : (0, _.ub)(a.childNodes, function(b) {
      return 1 == b.nodeType
    })
  };
  _.he = function(a) {
    return _.kb(a) && 1 == a.nodeType
  };
  _.ie = function(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  };
  _.Nd = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  };
  _.je = function(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
      a.firstChild.data = String(b)
    } else _.ce(a), a.appendChild(_.Nd(a).createTextNode(String(b)))
  };
  Zd = function(a) {
    if (a && "number" == typeof a.length) {
      if (_.kb(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (_.mb(a)) return "function" == typeof a.item
    }
    return !1
  };
  _.Md = function(a) {
    this.mb = a || _.q.document || document
  };
  _.h = _.Md.prototype;
  _.h.Fa = _.Od;
  _.h.RD = _.fa(2);
  _.h.tb = function() {
    return this.mb
  };
  _.h.T = function(a) {
    return _.Pd(this.mb, a)
  };
  _.h.getElementsByTagName = function(a, b) {
    return (b || this.mb).getElementsByTagName(String(a))
  };
  _.h.ma = function(a, b, c) {
    return _.Wd(this.mb, arguments)
  };
  _.h.createElement = function(a) {
    return _.Ud(this.mb, a)
  };
  _.h.createTextNode = function(a) {
    return this.mb.createTextNode(String(a))
  };
  _.h.vb = function() {
    var a = this.mb;
    return a.parentWindow || a.defaultView
  };
  _.h.appendChild = function(a, b) {
    a.appendChild(b)
  };
  _.h.append = _.be;
  _.h.canHaveChildren = _.ae;
  _.h.Kd = _.ce;
  _.h.bK = _.de;
  _.h.removeNode = _.ee;
  _.h.qT = _.fe;
  _.h.qA = _.ge;
  _.h.isElement = _.he;
  _.h.contains = _.ie;
  _.h.Sh = _.fa(3);
  /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  _.ke = window;
  _.le = document;
  _.me = _.ke.location;
  _.oe = /\[native code\]/;
  _.pe = function(a, b, c) {
    return a[b] = a[b] || c
  };
  _.qe = function() {
    var a;
    if ((a = Object.create) && _.oe.test(a)) a = a(null);
    else {
      a = {};
      for (var b in a) a[b] = void 0
    }
    return a
  };
  _.re = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  _.se = function(a, b) {
    a = a || {};
    for (var c in a) _.re(a, c) && (b[c] = a[c])
  };
  _.te = _.pe(_.ke, "gapi", {});
  _.ue = function(a, b, c) {
    var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
    b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
    if (a = a && (d.exec(a) || b.exec(a))) try {
      c = decodeURIComponent(a[2])
    } catch (e) {}
    return c
  };
  _.ve = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
  _.we = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
  _.xe = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
  _.ze = function(a, b, c) {
    _.ye(a, b, c, "add", "at")
  };
  _.ye = function(a, b, c, d, e) {
    if (a[d + "EventListener"]) a[d + "EventListener"](b, c, !1);
    else if (a[e + "tachEvent"]) a[e + "tachEvent"]("on" + b, c)
  };
  _.Ae = _.pe(_.ke, "___jsl", _.qe());
  _.pe(_.Ae, "I", 0);
  _.pe(_.Ae, "hel", 10);
  var Be, Ce, De, Ee, Fe, Ge, He;
  Be = function(a) {
    var b = window.___jsl = window.___jsl || {};
    b[a] = b[a] || [];
    return b[a]
  };
  Ce = function(a) {
    var b = window.___jsl = window.___jsl || {};
    b.cfg = !a && b.cfg || {};
    return b.cfg
  };
  De = function(a) {
    return "object" === typeof a && /\[native code\]/.test(a.push)
  };
  Ee = function(a, b, c) {
    if (b && "object" === typeof b)
      for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !De(a[d]) && !De(b[d]) ? Ee(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = De(b[d]) ? [] : {}, Ee(a[d], b[d])) : a[d] = b[d])
  };
  Fe = function(a) {
    if (a && !/^\s+$/.test(a)) {
      for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
      try {
        var b = window.JSON.parse(a)
      } catch (c) {}
      if ("object" === typeof b) return b;
      try {
        b = (new Function("return (" + a + "\n)"))()
      } catch (c) {}
      if ("object" === typeof b) return b;
      try {
        b = (new Function("return ({" + a + "\n})"))()
      } catch (c) {}
      return "object" === typeof b ? b : {}
    }
  };
  Ge = function(a, b) {
    var c = {
      ___goc: void 0
    };
    a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
    Ee(c, b);
    a.push(c)
  };
  He = function(a) {
    Ce(!0);
    var b = window.___gcfg,
      c = Be("cu"),
      d = window.___gu;
    b && b !== d && (Ge(c, b), window.___gu = b);
    b = Be("cu");
    var e = document.scripts || document.getElementsByTagName("script") || [];
    d = [];
    var f = [];
    f.push.apply(f, Be("us"));
    for (var g = 0; g < e.length; ++g)
      for (var k = e[g], l = 0; l < f.length; ++l) k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
    0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
    for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g =
      f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = Fe(f)) && b.push(f));
    a && Ge(c, a);
    d = Be("cd");
    a = 0;
    for (b = d.length; a < b; ++a) Ee(Ce(), d[a], !0);
    d = Be("ci");
    a = 0;
    for (b = d.length; a < b; ++a) Ee(Ce(), d[a], !0);
    a = 0;
    for (b = c.length; a < b; ++a) Ee(Ce(), c[a], !0)
  };
  _.R = function(a, b) {
    var c = Ce();
    if (!a) return c;
    a = a.split("/");
    for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d) c = c[a[d]];
    return d === a.length && void 0 !== c ? c : b
  };
  _.Ie = function(a, b) {
    var c;
    if ("string" === typeof a) {
      var d = c = {};
      a = a.split("/");
      for (var e = 0, f = a.length; e < f - 1; ++e) {
        var g = {};
        d = d[a[e]] = g
      }
      d[a[e]] = b
    } else c = a;
    He(c)
  };
  var Je = function() {
    var a = window.__GOOGLEAPIS;
    a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.pe(_.Ae, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
  };
  Je && Je();
  He();
  _.y("gapi.config.get", _.R);
  _.y("gapi.config.update", _.Ie);

  _.Ke = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (_.jb(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g]
      } else a.push(d)
    }
  };
  _.Le = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
      var e = a[d++];
      var f = e;
      f = _.kb(f) ? "o" + _.hd(f) : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
    }
    a.length = c
  };
  _.Me = function(a) {
    return /^[\s\xa0]*$/.test(a)
  };
  _.Ne = function(a, b) {
    var c = b || document;
    if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
    else {
      c = document;
      var d = b || c;
      a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.Qd(c, "*", a, b)[0] || null
    }
    return a || null
  };

  _.ij = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d)
    }
  };
  _.jj = function(a, b) {
    a: {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a
        } b = -1
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
  };
  _.kj = [];
  _.lj = [];
  _.mj = !1;
  _.nj = function(a) {
    _.kj[_.kj.length] = a;
    if (_.mj)
      for (var b = 0; b < _.lj.length; b++) a((0, _.L)(_.lj[b].wrap, _.lj[b]))
  };

  var oj, pj, qj, yj;
  oj = null;
  pj = /^[\w+/_-]+[=]{0,2}$/;
  qj = function(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && pj.test(a) ? a : ""
  };
  _.rj = function(a) {
    if (a && a != _.q) return qj(a.document);
    null === oj && (oj = qj(_.q.document));
    return oj
  };
  _.sj = function(a, b) {
    for (var c in a)
      if (!(c in b) || a[c] !== b[c]) return !1;
    for (var d in b)
      if (!(d in a)) return !1;
    return !0
  };
  _.tj = function(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  };
  _.uj = function(a) {
    return a
  };
  _.vj = function(a, b) {
    a.src = _.zd(b)
  };
  _.wj = function(a, b) {
    a.src = _.yd(b);
    (b = _.rj()) && a.setAttribute("nonce", b)
  };
  _.xj = function(a) {
    var b = window.location;
    a = a instanceof _.Wb ? a : _.Bd(a);
    b.href = _.Xb(a)
  };
  yj = function(a, b) {
    this.BS = a;
    this.XZ = b;
    this.Tv = 0;
    this.We = null
  };
  yj.prototype.get = function() {
    if (0 < this.Tv) {
      this.Tv--;
      var a = this.We;
      this.We = a.next;
      a.next = null
    } else a = this.BS();
    return a
  };
  yj.prototype.put = function(a) {
    this.XZ(a);
    100 > this.Tv && (this.Tv++, a.next = this.We, this.We = a)
  };
  var zj, Bj, Cj, Aj;
  zj = function(a) {
    _.q.setTimeout(function() {
      throw a;
    }, 0)
  };
  _.Dj = function(a) {
    a = Aj(a);
    !_.mb(_.q.setImmediate) || _.q.Window && _.q.Window.prototype && !_.Fb("Edge") && _.q.Window.prototype.setImmediate == _.q.setImmediate ? (Bj || (Bj = Cj()), Bj(a)) : _.q.setImmediate(a)
  };
  Cj = function() {
    var a = _.q.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.Fb("Presto") && (a = function() {
      var e = _.$d("IFRAME");
      e.style.display = "none";
      _.vj(e, _.Ad(_.Rb));
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(_.tc(_.vc));
      e.close();
      var g = "callImmediate" + Math.random(),
        k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = (0, _.L)(function(l) {
        if (("*" == k || l.origin ==
            k) && l.data == g) this.port1.onmessage()
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function() {
          f.postMessage(g, k)
        }
      }
    });
    if ("undefined" !== typeof a && !_.Kb()) {
      var b = new a,
        c = {},
        d = c;
      b.port1.onmessage = function() {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.cb;
          c.cb = null;
          e()
        }
      };
      return function(e) {
        d.next = {
          cb: e
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof document && "onreadystatechange" in _.$d("SCRIPT") ? function(e) {
      var f = _.$d("SCRIPT");
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
      _.q.setTimeout(e, 0)
    }
  };
  Aj = _.uj;
  _.nj(function(a) {
    Aj = a
  });
  var Ej = function() {
      this.xx = this.Xo = null
    },
    Gj = new yj(function() {
      return new Fj
    }, function(a) {
      a.reset()
    });
  Ej.prototype.add = function(a, b) {
    var c = Gj.get();
    c.set(a, b);
    this.xx ? this.xx.next = c : this.Xo = c;
    this.xx = c
  };
  Ej.prototype.remove = function() {
    var a = null;
    this.Xo && (a = this.Xo, this.Xo = this.Xo.next, this.Xo || (this.xx = null), a.next = null);
    return a
  };
  var Fj = function() {
    this.next = this.scope = this.Ug = null
  };
  Fj.prototype.set = function(a, b) {
    this.Ug = a;
    this.scope = b;
    this.next = null
  };
  Fj.prototype.reset = function() {
    this.next = this.scope = this.Ug = null
  };
  var Hj, Ij, Jj, Kj, Mj;
  _.Lj = function(a, b) {
    Hj || Ij();
    Jj || (Hj(), Jj = !0);
    Kj.add(a, b)
  };
  Ij = function() {
    if (_.q.Promise && _.q.Promise.resolve) {
      var a = _.q.Promise.resolve(void 0);
      Hj = function() {
        a.then(Mj)
      }
    } else Hj = function() {
      _.Dj(Mj)
    }
  };
  Jj = !1;
  Kj = new Ej;
  Mj = function() {
    for (var a; a = Kj.remove();) {
      try {
        a.Ug.call(a.scope)
      } catch (b) {
        zj(b)
      }
      Gj.put(a)
    }
    Jj = !1
  };
  _.Nj = function(a) {
    a.prototype.$goog_Thenable = !0
  };
  _.Oj = function(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };
  var Qj, Rj, ck, ak;
  _.Pj = function(a, b) {
    this.Da = 0;
    this.Kf = void 0;
    this.fn = this.Vj = this.$a = null;
    this.Pu = this.Wz = !1;
    if (a != _.ib) try {
      var c = this;
      a.call(b, function(d) {
        c.qh(2, d)
      }, function(d) {
        c.qh(3, d)
      })
    } catch (d) {
      this.qh(3, d)
    }
  };
  Qj = function() {
    this.next = this.context = this.eo = this.Er = this.kl = null;
    this.yp = !1
  };
  Qj.prototype.reset = function() {
    this.context = this.eo = this.Er = this.kl = null;
    this.yp = !1
  };
  Rj = new yj(function() {
    return new Qj
  }, function(a) {
    a.reset()
  });
  _.Sj = function(a, b, c) {
    var d = Rj.get();
    d.Er = a;
    d.eo = b;
    d.context = c;
    return d
  };
  _.Tj = function(a) {
    if (a instanceof _.Pj) return a;
    var b = new _.Pj(_.ib);
    b.qh(2, a);
    return b
  };
  _.Uj = function(a) {
    return new _.Pj(function(b, c) {
      c(a)
    })
  };
  _.Wj = function(a, b, c) {
    Vj(a, b, c, null) || _.Lj(_.ij(b, a))
  };
  _.Xj = function(a) {
    return new _.Pj(function(b, c) {
      var d = a.length,
        e = [];
      if (d)
        for (var f = function(m, n) {
            d--;
            e[m] = n;
            0 == d && b(e)
          }, g = function(m) {
            c(m)
          }, k = 0, l; k < a.length; k++) l = a[k], _.Wj(l, _.ij(f, k), g);
      else b(e)
    })
  };
  _.Zj = function() {
    var a, b, c = new _.Pj(function(d, e) {
      a = d;
      b = e
    });
    return new Yj(c, a, b)
  };
  _.Pj.prototype.then = function(a, b, c) {
    return ak(this, _.mb(a) ? a : null, _.mb(b) ? b : null, c)
  };
  _.Nj(_.Pj);
  _.Pj.prototype.hx = function(a, b) {
    return ak(this, null, a, b)
  };
  _.Pj.prototype.cancel = function(a) {
    if (0 == this.Da) {
      var b = new bk(a);
      _.Lj(function() {
        ck(this, b)
      }, this)
    }
  };
  ck = function(a, b) {
    if (0 == a.Da)
      if (a.$a) {
        var c = a.$a;
        if (c.Vj) {
          for (var d = 0, e = null, f = null, g = c.Vj; g && (g.yp || (d++, g.kl == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.Da && 1 == d ? ck(c, b) : (f ? (d = f, d.next == c.fn && (c.fn = d), d.next = d.next.next) : dk(c), ek(c, e, 3, b)))
        }
        a.$a = null
      } else a.qh(3, b)
  };
  _.gk = function(a, b) {
    a.Vj || 2 != a.Da && 3 != a.Da || fk(a);
    a.fn ? a.fn.next = b : a.Vj = b;
    a.fn = b
  };
  ak = function(a, b, c, d) {
    var e = _.Sj(null, null, null);
    e.kl = new _.Pj(function(f, g) {
      e.Er = b ? function(k) {
        try {
          var l = b.call(d, k);
          f(l)
        } catch (m) {
          g(m)
        }
      } : f;
      e.eo = c ? function(k) {
        try {
          var l = c.call(d, k);
          void 0 === l && k instanceof bk ? g(k) : f(l)
        } catch (m) {
          g(m)
        }
      } : g
    });
    e.kl.$a = a;
    _.gk(a, e);
    return e.kl
  };
  _.Pj.prototype.s1 = function(a) {
    this.Da = 0;
    this.qh(2, a)
  };
  _.Pj.prototype.t1 = function(a) {
    this.Da = 0;
    this.qh(3, a)
  };
  _.Pj.prototype.qh = function(a, b) {
    0 == this.Da && (this === b && (a = 3, b = new TypeError("Promise cannot resolve to itself")), this.Da = 1, Vj(b, this.s1, this.t1, this) || (this.Kf = b, this.Da = a, this.$a = null, fk(this), 3 != a || b instanceof bk || hk(this, b)))
  };
  var Vj = function(a, b, c, d) {
      if (a instanceof _.Pj) return _.gk(a, _.Sj(b || _.ib, c || null, d)), !0;
      if (_.Oj(a)) return a.then(b, c, d), !0;
      if (_.kb(a)) try {
        var e = a.then;
        if (_.mb(e)) return ik(a, e, b, c, d), !0
      } catch (f) {
        return c.call(d, f), !0
      }
      return !1
    },
    ik = function(a, b, c, d, e) {
      var f = !1,
        g = function(l) {
          f || (f = !0, c.call(e, l))
        },
        k = function(l) {
          f || (f = !0, d.call(e, l))
        };
      try {
        b.call(a, g, k)
      } catch (l) {
        k(l)
      }
    },
    fk = function(a) {
      a.Wz || (a.Wz = !0, _.Lj(a.cT, a))
    },
    dk = function(a) {
      var b = null;
      a.Vj && (b = a.Vj, a.Vj = b.next, b.next = null);
      a.Vj || (a.fn = null);
      return b
    };
  _.Pj.prototype.cT = function() {
    for (var a; a = dk(this);) ek(this, a, this.Da, this.Kf);
    this.Wz = !1
  };
  var ek = function(a, b, c, d) {
      if (3 == c && b.eo && !b.yp)
        for (; a && a.Pu; a = a.$a) a.Pu = !1;
      if (b.kl) b.kl.$a = null, jk(b, c, d);
      else try {
        b.yp ? b.Er.call(b.context) : jk(b, c, d)
      } catch (e) {
        kk.call(null, e)
      }
      Rj.put(b)
    },
    jk = function(a, b, c) {
      2 == b ? a.Er.call(a.context, c) : a.eo && a.eo.call(a.context, c)
    },
    hk = function(a, b) {
      a.Pu = !0;
      _.Lj(function() {
        a.Pu && kk.call(null, b)
      })
    },
    kk = zj,
    bk = function(a) {
      _.pb.call(this, a)
    };
  _.H(bk, _.pb);
  bk.prototype.name = "cancel";
  var Yj = function(a, b, c) {
    this.promise = a;
    this.resolve = b;
    this.reject = c
  };

  var ey = function() {};
  ey.prototype.WG = null;
  ey.prototype.getOptions = function() {
    var a;
    (a = this.WG) || (a = {}, _.fy(this) && (a[0] = !0, a[1] = !0), a = this.WG = a);
    return a
  };
  var hy;
  hy = function() {};
  _.H(hy, ey);
  _.fy = function(a) {
    if (!a.MJ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d), a.MJ = d
        } catch (e) {}
      }
      throw Error("ma");
    }
    return a.MJ
  };
  _.gy = new hy;

  _.Oe = _.Oe || {};

  _.Oe = _.Oe || {};
  (function() {
    function a(c, d) {
      return String.fromCharCode(d)
    }
    var b = {
      0: !1,
      10: !0,
      13: !0,
      34: !0,
      39: !0,
      60: !0,
      62: !0,
      92: !0,
      8232: !0,
      8233: !0,
      65282: !0,
      65287: !0,
      65308: !0,
      65310: !0,
      65340: !0
    };
    _.Oe.escape = function(c, d) {
      if (c) {
        if ("string" === typeof c) return _.Oe.escapeString(c);
        if ("Array" === typeof c) {
          var e = 0;
          for (d = c.length; e < d; ++e) c[e] = _.Oe.escape(c[e])
        } else if ("object" === typeof c && d) {
          d = {};
          for (e in c) c.hasOwnProperty(e) && (d[_.Oe.escapeString(e)] = _.Oe.escape(c[e], !0));
          return d
        }
      }
      return c
    };
    _.Oe.escapeString = function(c) {
      if (!c) return c;
      for (var d = [], e, f, g = 0, k = c.length; g < k; ++g) e = c.charCodeAt(g), f = b[e], !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(c.charAt(g));
      return d.join("")
    };
    _.Oe.unescapeString = function(c) {
      return c ? c.replace(/&#([0-9]+);/g, a) : c
    }
  })();

  _.Oe = _.Oe || {};
  (function() {
    function a(b) {
      var c = "";
      if (3 == b.nodeType || 4 == b.nodeType) c = b.nodeValue;
      else if (b.innerText) c = b.innerText;
      else if (b.innerHTML) c = b.innerHTML;
      else if (b.firstChild) {
        c = [];
        for (b = b.firstChild; b; b = b.nextSibling) c.push(a(b));
        c = c.join("")
      }
      return c
    }
    _.Oe.createElement = function(b) {
      if (!document.body || document.body.namespaceURI) try {
        var c = document.createElementNS("http://www.w3.org/1999/xhtml", b)
      } catch (d) {}
      return c || document.createElement(b)
    };
    _.Oe.createIframeElement = function(b) {
      var c = _.Oe.createElement("iframe");
      try {
        var d = ["<", "iframe"],
          e = b || {},
          f;
        for (f in e) e.hasOwnProperty(f) && (d.push(" "), d.push(f), d.push('="'), d.push(_.Oe.escapeString(e[f])), d.push('"'));
        d.push("></");
        d.push("iframe");
        d.push(">");
        var g = _.Oe.createElement(d.join(""));
        g && (!c || g.tagName == c.tagName && g.namespaceURI == c.namespaceURI) && (c = g)
      } catch (l) {}
      d = c;
      b = b || {};
      for (var k in b) b.hasOwnProperty(k) && (d[k] = b[k]);
      return c
    };
    _.Oe.getBodyElement = function() {
      if (document.body) return document.body;
      try {
        var b = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml",
          "body");
        if (b && 1 == b.length) return b[0]
      } catch (c) {}
      return document.documentElement || document
    };
    _.Oe.oaa = function(b) {
      return a(b)
    }
  })();

  (function() {
    function a(e, f) {
      if (!(e < c) && d)
        if (2 === e && d.warn) d.warn(f);
        else if (3 === e && d.error) try {
        d.error(f)
      } catch (g) {} else d.log && d.log(f)
    }
    var b = function(e) {
      a(1, e)
    };
    _.gb = function(e) {
      a(2, e)
    };
    _.hb = function(e) {
      a(3, e)
    };
    _.Pe = function() {};
    b.INFO = 1;
    b.WARNING = 2;
    b.NONE = 4;
    var c = 1,
      d = window.console ? window.console : window.opera ? window.opera.postError : void 0;
    return b
  })();

  _.Oe = _.Oe || {};
  (function() {
    var a = [];
    _.Oe.registerOnLoadHandler = function(b) {
      a.push(b)
    };
    _.Oe.Aba = function() {
      for (var b = 0, c = a.length; b < c; ++b) a[b]()
    }
  })();

  _.Oe = _.Oe || {};
  (function() {
    var a = null;
    _.Oe.getUrlParameters = function(b) {
      var c = "undefined" === typeof b;
      if (null !== a && c) return a;
      var d = {};
      b = b || window.location.href;
      var e = b.indexOf("?"),
        f = b.indexOf("#");
      b = (-1 === f ? b.substr(e + 1) : [b.substr(e + 1, f - e - 1), "&", b.substr(f + 1)].join("")).split("&");
      e = window.decodeURIComponent ? decodeURIComponent : unescape;
      f = 0;
      for (var g = b.length; f < g; ++f) {
        var k = b[f].indexOf("=");
        if (-1 !== k) {
          var l = b[f].substring(0, k);
          k = b[f].substring(k + 1);
          k = k.replace(/\+/g, " ");
          try {
            d[l] = e(k)
          } catch (m) {}
        }
      }
      c && (a = d);
      return d
    };
    _.Oe.getUrlParameters()
  })();
  _.y("gadgets.util.getUrlParameters", _.Oe.getUrlParameters);

  var Qe;
  Qe = window.console;
  _.Re = function(a) {
    Qe && Qe.log && Qe.log(a)
  };
  _.Se = function(a) {
    Qe && (Qe.error ? Qe.error(a) : Qe.log && Qe.log(a))
  };
  _.Te = function(a) {
    Qe && (Qe.warn ? Qe.warn(a) : Qe.log && Qe.log(a))
  };
  _.Ue = function() {};

  _.Ve = function() {
    var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
    a && _.Ie(a());
    return {
      register: function(b, c, d) {
        d && d(_.R())
      },
      get: function(b) {
        return _.R(b)
      },
      update: function(b, c) {
        if (c) throw "Config replacement is not supported";
        _.Ie(b)
      },
      init: function() {}
    }
  }();
  _.y("gadgets.config.register", _.Ve.register);
  _.y("gadgets.config.get", _.Ve.get);
  _.y("gadgets.config.init", _.Ve.init);
  _.y("gadgets.config.update", _.Ve.update);

  var We, Xe, Ye, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of , pf, qf, rf, sf, tf, uf, vf, wf, xf, yf, zf, Af, Df, Gf, Hf;
  Ye = void 0;
  $e = function(a) {
    try {
      return _.q.JSON.parse.call(_.q.JSON, a)
    } catch (b) {
      return !1
    }
  };
  af = function(a) {
    return Object.prototype.toString.call(a)
  };
  bf = af(0);
  cf = af(new Date(0));
  df = af(!0);
  ef = af("");
  ff = af({});
  gf = af([]);
  hf = function(a, b) {
    if (b)
      for (var c = 0, d = b.length; c < d; ++c)
        if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
    d = typeof a;
    if ("undefined" !== d) {
      c = Array.prototype.slice.call(b || [], 0);
      c[c.length] = a;
      b = [];
      var e = af(a);
      if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== gf || a.constructor !== Array && a.constructor !== Object) && (e !== ff || a.constructor !== Array && a.constructor !== Object) && e !== ef && e !== bf && e !== df && e !== cf)) return hf(a.toJSON.call(a), c);
      if (null ==
        a) b[b.length] = "null";
      else if (e === bf) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
      else if (e === df) b[b.length] = String(!!Number(a));
      else {
        if (e === cf) return hf(a.toISOString.call(a), c);
        if (e === gf && af(a.length) === bf) {
          b[b.length] = "[";
          var f = 0;
          for (d = Number(a.length) >> 0; f < d; ++f) f && (b[b.length] = ","), b[b.length] = hf(a[f], c) || "null";
          b[b.length] = "]"
        } else if (e == ef && af(a.length) === bf) {
          b[b.length] = '"';
          f = 0;
          for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f),
            e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
          b[b.length] = '"'
        } else if ("object" === d) {
          b[b.length] = "{";
          d = 0;
          for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e = hf(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = hf(f), b[b.length] = ":", b[b.length] = e));
          b[b.length] = "}"
        } else return
      }
      return b.join("")
    }
  };
  jf = /[\0-\x07\x0b\x0e-\x1f]/;
  kf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
  lf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
  mf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
  nf = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g; of = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
  pf = /[ \t\n\r]+/g;
  qf = /[^"]:/;
  rf = /""/g;
  sf = /true|false|null/g;
  tf = /00/;
  uf = /[\{]([^0\}]|0[^:])/;
  vf = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
  wf = /[^\[,:][\[\{]/;
  xf = /^(\{|\}|\[|\]|,|:|0)+/;
  yf = /\u2028/g;
  zf = /\u2029/g;
  Af = function(a) {
    a = String(a);
    if (jf.test(a) || kf.test(a) || lf.test(a) || mf.test(a)) return !1;
    var b = a.replace(nf, '""');
    b = b.replace( of , "0");
    b = b.replace(pf, "");
    if (qf.test(b)) return !1;
    b = b.replace(rf, "0");
    b = b.replace(sf, "0");
    if (tf.test(b) || uf.test(b) || vf.test(b) || wf.test(b) || !b || (b = b.replace(xf, ""))) return !1;
    a = a.replace(yf, "\\u2028").replace(zf, "\\u2029");
    b = void 0;
    try {
      b = Ye ? [$e(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
    } catch (c) {
      return !1
    }
    return b && 1 ===
      b.length ? b[0] : !1
  };
  Df = function() {
    var a = ((_.q.document || {}).scripts || []).length;
    if ((void 0 === We || void 0 === Ye || Xe !== a) && -1 !== Xe) {
      We = Ye = !1;
      Xe = -1;
      try {
        try {
          Ye = !!_.q.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.q.JSON.stringify.call(_.q.JSON, {
            a: [3, !0, new Date(0)],
            c: function() {}
          }) && !0 === $e("true") && 3 === $e('[{"a":3}]')[0].a
        } catch (b) {}
        We = Ye && !$e("[00]") && !$e('"\u0007"') && !$e('"\\0"') && !$e('"\\v"')
      } finally {
        Xe = a
      }
    }
  };
  _.Ef = function(a) {
    if (-1 === Xe) return !1;
    Df();
    return (We ? $e : Af)(a)
  };
  _.Ff = function(a) {
    if (-1 !== Xe) return Df(), Ye ? _.q.JSON.stringify.call(_.q.JSON, a) : hf(a)
  };
  Gf = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
  Hf = function() {
    var a = Date.prototype.getUTCFullYear.call(this);
    return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
      "Z"
    ].join("")
  };
  Date.prototype.toISOString = Gf ? Hf : Date.prototype.toISOString;

  _.y("gadgets.json.stringify", _.Ff);
  _.y("gadgets.json.parse", _.Ef);

  _.ue(_.ke.location.href, "rpctoken") && _.ze(_.le, "unload", function() {});

  var Kf;
  _.If = function() {
    var a = _.le.readyState;
    return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
  };
  _.Jf = function(a) {
    if (_.If()) a();
    else {
      var b = !1,
        c = function() {
          if (!b) return b = !0, a.apply(this, arguments)
        };
      _.ke.addEventListener ? (_.ke.addEventListener("load", c, !1), _.ke.addEventListener("DOMContentLoaded", c, !1)) : _.ke.attachEvent && (_.ke.attachEvent("onreadystatechange", function() {
        _.If() && c.apply(this, arguments)
      }), _.ke.attachEvent("onload", c))
    }
  };
  Kf = Kf || {};
  Kf.gM = null;
  Kf.VK = null;
  Kf.fv = null;
  Kf.frameElement = null;
  Kf = Kf || {};
  Kf.cF || (Kf.cF = function() {
    function a(f, g, k) {
      "undefined" != typeof window.addEventListener ? window.addEventListener(f, g, k) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + f, g);
      "message" === f && (window.___jsl = window.___jsl || {}, f = window.___jsl, f.RPMQ = f.RPMQ || [], f.RPMQ.push(g))
    }

    function b(f) {
      var g = _.Ef(f.data);
      if (g && g.f) {
        (0, _.Pe)("gadgets.rpc.receive(" + window.name + "): " + f.data);
        var k = _.Lf.getTargetOrigin(g.f);
        e && ("undefined" !== typeof f.origin ? f.origin !== k : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1]) ? _.hb("Invalid rpc message origin. " +
          k + " vs " + (f.origin || "")) : c(g, f.origin)
      }
    }
    var c, d, e = !0;
    return {
      sI: function() {
        return "wpm"
      },
      GX: function() {
        return !0
      },
      init: function(f, g) {
        _.Ve.register("rpc", null, function(k) {
          "true" === String((k && k.rpc || {}).disableForceSecure) && (e = !1)
        });
        c = f;
        d = g;
        a("message", b, !1);
        d("..", !0);
        return !0
      },
      Bc: function(f) {
        d(f, !0);
        return !0
      },
      call: function(f, g, k) {
        var l = _.Lf.getTargetOrigin(f),
          m = _.Lf.kG(f);
        l ? window.setTimeout(function() {
          var n = _.Ff(k);
          (0, _.Pe)("gadgets.rpc.send(" + window.name + "): " + n);
          m.postMessage(n, l)
        }, 0) : ".." != f && _.hb("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
        return !0
      }
    }
  }());
  if (window.gadgets && window.gadgets.rpc) "undefined" != typeof _.Lf && _.Lf || (_.Lf = window.gadgets.rpc, _.Lf.config = _.Lf.config, _.Lf.register = _.Lf.register, _.Lf.unregister = _.Lf.unregister, _.Lf.registerDefault = _.Lf.registerDefault, _.Lf.unregisterDefault = _.Lf.unregisterDefault, _.Lf.forceParentVerifiable = _.Lf.forceParentVerifiable, _.Lf.call = _.Lf.call, _.Lf.getRelayUrl = _.Lf.getRelayUrl, _.Lf.setRelayUrl = _.Lf.setRelayUrl, _.Lf.setAuthToken = _.Lf.setAuthToken, _.Lf.setupReceiver = _.Lf.setupReceiver, _.Lf.getAuthToken =
    _.Lf.getAuthToken, _.Lf.removeReceiver = _.Lf.removeReceiver, _.Lf.getRelayChannel = _.Lf.getRelayChannel, _.Lf.receive = _.Lf.receive, _.Lf.RL = _.Lf.receiveSameDomain, _.Lf.getOrigin = _.Lf.getOrigin, _.Lf.getTargetOrigin = _.Lf.getTargetOrigin, _.Lf.kG = _.Lf._getTargetWin, _.Lf.vR = _.Lf._parseSiblingId);
  else {
    _.Lf = function() {
      function a(x, O) {
        if (!N[x]) {
          var aa = Ea;
          O || (aa = ma);
          N[x] = aa;
          O = J[x] || [];
          for (var Y = 0; Y < O.length; ++Y) {
            var la = O[Y];
            la.t = B[x];
            aa.call(x, la.f, la)
          }
          J[x] = []
        }
      }

      function b() {
        function x() {
          ia = !0
        }
        Ba || ("undefined" !=
          typeof window.addEventListener ? window.addEventListener("unload", x, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", x), Ba = !0)
      }

      function c(x, O, aa, Y, la) {
        B[O] && B[O] === aa || (_.hb("Invalid gadgets.rpc token. " + B[O] + " vs " + aa), sa(O, 2));
        la.onunload = function() {
          K[O] && !ia && (sa(O, 1), _.Lf.removeReceiver(O))
        };
        b();
        Y = _.Ef(decodeURIComponent(Y))
      }

      function d(x, O) {
        if (x && "string" === typeof x.s && "string" === typeof x.f && x.a instanceof Array)
          if (B[x.f] && B[x.f] !== x.t && (_.hb("Invalid gadgets.rpc token. " +
              B[x.f] + " vs " + x.t), sa(x.f, 2)), "__ack" === x.s) window.setTimeout(function() {
            a(x.f, !0)
          }, 0);
          else {
            x.c && (x.callback = function(ra) {
              _.Lf.call(x.f, (x.g ? "legacy__" : "") + "__cb", null, x.c, ra)
            });
            if (O) {
              var aa = e(O);
              x.origin = O;
              var Y = x.r;
              try {
                var la = e(Y)
              } catch (ra) {}
              Y && la == aa || (Y = O);
              x.referer = Y
            }
            O = (v[x.s] || v[""]).apply(x, x.a);
            x.c && "undefined" !== typeof O && _.Lf.call(x.f, "__cb", null, x.c, O)
          }
      }

      function e(x) {
        if (!x) return "";
        x = x.split("#")[0].split("?")[0];
        x = x.toLowerCase();
        0 == x.indexOf("//") && (x = window.location.protocol + x); - 1 ==
          x.indexOf("://") && (x = window.location.protocol + "//" + x);
        var O = x.substring(x.indexOf("://") + 3),
          aa = O.indexOf("/"); - 1 != aa && (O = O.substring(0, aa));
        x = x.substring(0, x.indexOf("://"));
        if ("http" !== x && "https" !== x && "chrome-extension" !== x && "file" !== x && "android-app" !== x && "chrome-search" !== x) throw Error("n");
        aa = "";
        var Y = O.indexOf(":");
        if (-1 != Y) {
          var la = O.substring(Y + 1);
          O = O.substring(0, Y);
          if ("http" === x && "80" !== la || "https" === x && "443" !== la) aa = ":" + la
        }
        return x + "://" + O + aa
      }

      function f(x) {
        if ("/" == x.charAt(0)) {
          var O = x.indexOf("|");
          return {
            id: 0 < O ? x.substring(1, O) : x.substring(1),
            origin: 0 < O ? x.substring(O + 1) : null
          }
        }
        return null
      }

      function g(x) {
        if ("undefined" === typeof x || ".." === x) return window.parent;
        var O = f(x);
        if (O) return window.top.frames[O.id];
        x = String(x);
        return (O = window.frames[x]) ? O : (O = document.getElementById(x)) && O.contentWindow ? O.contentWindow : null
      }

      function k(x, O) {
        if (!0 !== K[x]) {
          "undefined" === typeof K[x] && (K[x] = 0);
          var aa = g(x);
          ".." !== x && null == aa || !0 !== Ea.Bc(x, O) ? !0 !== K[x] && 10 > K[x]++ ? window.setTimeout(function() {
            k(x, O)
          }, 500) : (N[x] =
            ma, K[x] = !0) : K[x] = !0
        }
      }

      function l(x) {
        (x = w[x]) && "/" === x.substring(0, 1) && (x = "/" === x.substring(1, 2) ? document.location.protocol + x : document.location.protocol + "//" + document.location.host + x);
        return x
      }

      function m(x, O, aa) {
        O && !/http(s)?:\/\/.+/.test(O) && (0 == O.indexOf("//") ? O = window.location.protocol + O : "/" == O.charAt(0) ? O = window.location.protocol + "//" + window.location.host + O : -1 == O.indexOf("://") && (O = window.location.protocol + "//" + O));
        w[x] = O;
        "undefined" !== typeof aa && (z[x] = !!aa)
      }

      function n(x, O) {
        O = O || "";
        B[x] = String(O);
        k(x, O)
      }

      function p(x) {
        x = (x.passReferrer || "").split(":", 2);
        I = x[0] || "none";
        V = x[1] || "origin"
      }

      function t(x) {
        "true" === String(x.useLegacyProtocol) && (Ea = Kf.fv || ma, Ea.init(d, a))
      }

      function r(x, O) {
        function aa(Y) {
          Y = Y && Y.rpc || {};
          p(Y);
          var la = Y.parentRelayUrl || "";
          la = e(W.parent || O) + la;
          m("..", la, "true" === String(Y.useLegacyProtocol));
          t(Y);
          n("..", x)
        }!W.parent && O ? aa({}) : _.Ve.register("rpc", null, aa)
      }

      function u(x, O, aa) {
        if (".." === x) r(aa || W.rpctoken || W.ifpctok || "", O);
        else a: {
          var Y = null;
          if ("/" != x.charAt(0)) {
            if (!_.Oe) break a;
            Y = document.getElementById(x);
            if (!Y) throw Error("o`" + x);
          }
          Y = Y && Y.src;O = O || _.Lf.getOrigin(Y);m(x, O);O = _.Oe.getUrlParameters(Y);n(x, aa || O.rpctoken)
        }
      }
      var v = {},
        w = {},
        z = {},
        B = {},
        A = 0,
        E = {},
        K = {},
        W = {},
        N = {},
        J = {},
        I = null,
        V = null,
        na = window.top !== window.self,
        xa = window.name,
        sa = function() {},
        La = window.console,
        Ha = La && La.log && function(x) {
          La.log(x)
        } || function() {},
        ma = function() {
          function x(O) {
            return function() {
              Ha(O + ": call ignored")
            }
          }
          return {
            sI: function() {
              return "noop"
            },
            GX: function() {
              return !0
            },
            init: x("init"),
            Bc: x("setup"),
            call: x("call")
          }
        }();
      _.Oe && (W = _.Oe.getUrlParameters());
      var ia = !1,
        Ba = !1,
        Ea = function() {
          if ("rmr" == W.rpctx) return Kf.gM;
          var x = "function" === typeof window.postMessage ? Kf.cF : "object" === typeof window.postMessage ? Kf.cF : window.ActiveXObject ? Kf.VK ? Kf.VK : Kf.fv : 0 < navigator.userAgent.indexOf("WebKit") ? Kf.gM : "Gecko" === navigator.product ? Kf.frameElement : Kf.fv;
          x || (x = ma);
          return x
        }();
      v[""] = function() {
        Ha("Unknown RPC service: " + this.s)
      };
      v.__cb = function(x, O) {
        var aa = E[x];
        aa && (delete E[x], aa.call(this, O))
      };
      return {
        config: function(x) {
          "function" ===
          typeof x.mM && (sa = x.mM)
        },
        register: function(x, O) {
          if ("__cb" === x || "__ack" === x) throw Error("p");
          if ("" === x) throw Error("q");
          v[x] = O
        },
        unregister: function(x) {
          if ("__cb" === x || "__ack" === x) throw Error("r");
          if ("" === x) throw Error("s");
          delete v[x]
        },
        registerDefault: function(x) {
          v[""] = x
        },
        unregisterDefault: function() {
          delete v[""]
        },
        forceParentVerifiable: function() {},
        call: function(x, O, aa, Y) {
          x = x || "..";
          var la = "..";
          ".." === x ? la = xa : "/" == x.charAt(0) && (la = _.Lf.getOrigin(window.location.href), la = "/" + xa + (la ? "|" + la : ""));
          ++A;
          aa &&
            (E[A] = aa);
          var ra = {
            s: O,
            f: la,
            c: aa ? A : 0,
            a: Array.prototype.slice.call(arguments, 3),
            t: B[x],
            l: !!z[x]
          };
          a: if ("bidir" === I || "c2p" === I && ".." === x || "p2c" === I && ".." !== x) {
            var F = window.location.href;
            var C = "?";
            if ("query" === V) C = "#";
            else if ("hash" === V) break a;
            C = F.lastIndexOf(C);
            C = -1 === C ? F.length : C;
            F = F.substring(0, C)
          } else F = null;
          F && (ra.r = F);
          if (".." === x || null != f(x) || document.getElementById(x))(F = N[x]) || null === f(x) || (F = Ea), 0 === O.indexOf("legacy__") && (F = Ea, ra.s = O.substring(8), ra.c = ra.c ? ra.c : A), ra.g = !0, ra.r = la, F ? (z[x] && (F =
            Kf.fv), !1 === F.call(x, la, ra) && (N[x] = ma, Ea.call(x, la, ra))) : J[x] ? J[x].push(ra) : J[x] = [ra]
        },
        getRelayUrl: l,
        setRelayUrl: m,
        setAuthToken: n,
        setupReceiver: u,
        getAuthToken: function(x) {
          return B[x]
        },
        removeReceiver: function(x) {
          delete w[x];
          delete z[x];
          delete B[x];
          delete K[x];
          delete N[x]
        },
        getRelayChannel: function() {
          return Ea.sI()
        },
        receive: function(x, O) {
          4 < x.length ? Ea.y$(x, d) : c.apply(null, x.concat(O))
        },
        RL: function(x) {
          x.a = Array.prototype.slice.call(x.a);
          window.setTimeout(function() {
            d(x)
          }, 0)
        },
        getOrigin: e,
        getTargetOrigin: function(x) {
          var O =
            null,
            aa = l(x);
          aa ? O = aa : (aa = f(x)) ? O = aa.origin : ".." == x ? O = W.parent : (x = document.getElementById(x)) && "iframe" === x.tagName.toLowerCase() && (O = x.src);
          return e(O)
        },
        init: function() {
          !1 === Ea.init(d, a) && (Ea = ma);
          na ? u("..") : _.Ve.register("rpc", null, function(x) {
            x = x.rpc || {};
            p(x);
            t(x)
          })
        },
        kG: g,
        vR: f,
        ACK: "__ack",
        e8: xa || "..",
        r8: 0,
        q8: 1,
        p8: 2
      }
    }();
    _.Lf.init()
  };
  _.Lf.config({
    mM: function(a) {
      throw Error("t`" + a);
    }
  });
  _.Pe = _.Ue;
  _.y("gadgets.rpc.config", _.Lf.config);
  _.y("gadgets.rpc.register", _.Lf.register);
  _.y("gadgets.rpc.unregister", _.Lf.unregister);
  _.y("gadgets.rpc.registerDefault", _.Lf.registerDefault);
  _.y("gadgets.rpc.unregisterDefault", _.Lf.unregisterDefault);
  _.y("gadgets.rpc.forceParentVerifiable", _.Lf.forceParentVerifiable);
  _.y("gadgets.rpc.call", _.Lf.call);
  _.y("gadgets.rpc.getRelayUrl", _.Lf.getRelayUrl);
  _.y("gadgets.rpc.setRelayUrl", _.Lf.setRelayUrl);
  _.y("gadgets.rpc.setAuthToken", _.Lf.setAuthToken);
  _.y("gadgets.rpc.setupReceiver", _.Lf.setupReceiver);
  _.y("gadgets.rpc.getAuthToken", _.Lf.getAuthToken);
  _.y("gadgets.rpc.removeReceiver", _.Lf.removeReceiver);
  _.y("gadgets.rpc.getRelayChannel", _.Lf.getRelayChannel);
  _.y("gadgets.rpc.receive", _.Lf.receive);
  _.y("gadgets.rpc.receiveSameDomain", _.Lf.RL);
  _.y("gadgets.rpc.getOrigin", _.Lf.getOrigin);
  _.y("gadgets.rpc.getTargetOrigin", _.Lf.getTargetOrigin);

  _.qg = window.gapi && window.gapi.util || {};

  var rg = _.qg = _.qg || {};
  window.___jsl = window.___jsl || {};
  rg.Fy = {
    kaa: function() {
      return window.___jsl.bsh
    },
    CI: function() {
      return window.___jsl.h
    },
    ID: function(a) {
      window.___jsl.bsh = a
    },
    f0: function(a) {
      window.___jsl.h = a
    }
  };

  _.sg = function(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("u`" + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
      var e = b.substring(d + 1);
      b = b.substring(0,
        d);
      if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
  };

  _.qg.getOrigin = function(a) {
    return _.sg(a)
  };

  var Dh;
  Dh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
  _.Eh = function(a) {
    var b = _.R("googleapis.config/sessionIndex");
    "string" === typeof b && 254 < b.length && (b = null);
    null == b && (b = window.__X_GOOG_AUTHUSER);
    "string" === typeof b && 254 < b.length && (b = null);
    if (null == b) {
      var c = window.google;
      c && (b = c.authuser)
    }
    "string" === typeof b && 254 < b.length && (b = null);
    null == b && (a = a || window.location.href, b = _.ue(a, "authuser") || null, null == b && (b = (b = a.match(Dh)) ? b[1] : null));
    if (null == b) return null;
    b = String(b);
    254 < b.length && (b = null);
    return b
  };

  _.Fh = {};
  _.Gh = function(a) {
    return _.Fh[a || "token"] || null
  };

  var Hh = function() {
    this.Tj = -1
  };
  _.Ih = function() {
    this.Tj = 64;
    this.Dc = [];
    this.Ky = [];
    this.oR = [];
    this.gw = [];
    this.gw[0] = 128;
    for (var a = 1; a < this.Tj; ++a) this.gw[a] = 0;
    this.jx = this.On = 0;
    this.reset()
  };
  _.H(_.Ih, Hh);
  _.Ih.prototype.reset = function() {
    this.Dc[0] = 1732584193;
    this.Dc[1] = 4023233417;
    this.Dc[2] = 2562383102;
    this.Dc[3] = 271733878;
    this.Dc[4] = 3285377520;
    this.jx = this.On = 0
  };
  var Jh = function(a, b, c) {
    c || (c = 0);
    var d = a.oR;
    if ("string" === typeof b)
      for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
    else
      for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = (f << 1 | f >>> 31) & 4294967295
    }
    b = a.Dc[0];
    c = a.Dc[1];
    var g = a.Dc[2],
      k = a.Dc[3],
      l = a.Dc[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = k ^ c & (g ^ k);
          var m = 1518500249
        } else f = c ^ g ^ k, m = 1859775393;
      else 60 > e ? (f = c & g | k & (c | g),
        m = 2400959708) : (f = c ^ g ^ k, m = 3395469782);
      f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
      l = k;
      k = g;
      g = (c << 30 | c >>> 2) & 4294967295;
      c = b;
      b = f
    }
    a.Dc[0] = a.Dc[0] + b & 4294967295;
    a.Dc[1] = a.Dc[1] + c & 4294967295;
    a.Dc[2] = a.Dc[2] + g & 4294967295;
    a.Dc[3] = a.Dc[3] + k & 4294967295;
    a.Dc[4] = a.Dc[4] + l & 4294967295
  };
  _.Ih.prototype.update = function(a, b) {
    if (null != a) {
      void 0 === b && (b = a.length);
      for (var c = b - this.Tj, d = 0, e = this.Ky, f = this.On; d < b;) {
        if (0 == f)
          for (; d <= c;) Jh(this, a, d), d += this.Tj;
        if ("string" === typeof a)
          for (; d < b;) {
            if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Tj) {
              Jh(this, e);
              f = 0;
              break
            }
          } else
            for (; d < b;)
              if (e[f] = a[d], ++f, ++d, f == this.Tj) {
                Jh(this, e);
                f = 0;
                break
              }
      }
      this.On = f;
      this.jx += b
    }
  };
  _.Ih.prototype.digest = function() {
    var a = [],
      b = 8 * this.jx;
    56 > this.On ? this.update(this.gw, 56 - this.On) : this.update(this.gw, this.Tj - (this.On - 56));
    for (var c = this.Tj - 1; 56 <= c; c--) this.Ky[c] = b & 255, b /= 256;
    Jh(this, this.Ky);
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b] = this.Dc[c] >> d & 255, ++b;
    return a
  };

  _.Kh = function() {
    this.jE = new _.Ih
  };
  _.h = _.Kh.prototype;
  _.h.reset = function() {
    this.jE.reset()
  };
  _.h.UN = function(a) {
    this.jE.update(a)
  };
  _.h.GH = function() {
    return this.jE.digest()
  };
  _.h.LE = function(a) {
    a = unescape(encodeURIComponent(a));
    for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
    this.UN(b)
  };
  _.h.Rg = function() {
    for (var a = this.GH(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
    return b
  };

  var Mh, Nh;
  _.Lh = function(a, b) {
    this.xd = a;
    a = b || {};
    this.bY = Number(a.maxAge) || 0;
    this.Vc = a.domain;
    this.hj = a.path;
    this.z_ = !!a.secure
  };
  Mh = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
  Nh = /^[A-Z_][A-Z0-9_]{0,63}$/;
  _.Lh.prototype.read = function() {
    for (var a = this.xd + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
      var d = b[c];
      if (0 == d.indexOf(a)) return d.substr(a.length)
    }
  };
  _.Lh.prototype.write = function(a, b) {
    if (!Nh.test(this.xd)) throw "Invalid cookie name";
    if (!Mh.test(a)) throw "Invalid cookie value";
    a = this.xd + "=" + a;
    this.Vc && (a += ";domain=" + this.Vc);
    this.hj && (a += ";path=" + this.hj);
    b = "number" === typeof b ? b : this.bY;
    if (0 <= b) {
      var c = new Date;
      c.setSeconds(c.getSeconds() + b);
      a += ";expires=" + c.toUTCString()
    }
    this.z_ && (a += ";secure");
    document.cookie = a;
    return !0
  };
  _.Lh.prototype.clear = function() {
    this.write("", 0)
  };
  _.Lh.iterate = function(a) {
    for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
      var d = b[c].split("="),
        e = d.shift();
      a(e, d.join("="))
    }
  };
  var Ph;
  _.Oh = function(a) {
    this.Uh = a
  };
  Ph = {};
  _.Oh.prototype.read = function() {
    if (Ph.hasOwnProperty(this.Uh)) return Ph[this.Uh]
  };
  _.Oh.prototype.write = function(a) {
    Ph[this.Uh] = a;
    return !0
  };
  _.Oh.prototype.clear = function() {
    delete Ph[this.Uh]
  };
  _.Oh.iterate = function(a) {
    for (var b in Ph) Ph.hasOwnProperty(b) && a(b, Ph[b])
  };
  var Qh = function() {
      this.ie = null;
      this.key = function() {
        return null
      };
      this.getItem = function() {
        return this.ie
      };
      this.setItem = function(a, b) {
        this.ie = b;
        this.length = 1
      };
      this.removeItem = function() {
        this.clear()
      };
      this.clear = function() {
        this.ie = null;
        this.length = 0
      };
      this.length = 0
    },
    Rh = function(a) {
      try {
        var b = a || window.sessionStorage;
        if (!b) return !1;
        b.setItem("gapi.sessionStorageTest", "gapi.sessionStorageTest" + b.length);
        b.removeItem("gapi.sessionStorageTest");
        return !0
      } catch (c) {
        return !1
      }
    },
    Sh = function(a, b) {
      this.xd = a;
      this.Of =
        Rh(b) ? b || window.sessionStorage : new Qh
    };
  Sh.prototype.read = function() {
    return this.Of.getItem(this.xd)
  };
  Sh.prototype.write = function(a) {
    try {
      this.Of.setItem(this.xd, a)
    } catch (b) {
      return !1
    }
    return !0
  };
  Sh.prototype.clear = function() {
    this.Of.removeItem(this.xd)
  };
  Sh.iterate = function(a) {
    if (Rh())
      for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
        var d = window.sessionStorage.key(b);
        a(d, window.sessionStorage[d])
      }
  };
  for (var Th = 0; 64 > Th; ++Th);
  _.Uh = "https:" === window.location.protocol;
  _.Vh = _.Uh || "http:" === window.location.protocol ? _.Lh : _.Oh;
  _.Wh = function(a) {
    var b = a.substr(1),
      c = "",
      d = window.location.hostname;
    if ("" !== b) {
      c = parseInt(b, 10);
      if (isNaN(c)) return null;
      b = d.split(".");
      if (b.length < c - 1) return null;
      b.length == c - 1 && (d = "." + d)
    } else d = "";
    return {
      De: "S" == a.charAt(0),
      domain: d,
      Dh: c
    }
  };
  _.Xh = function(a) {
    if (0 !== a.indexOf("GCSC")) return null;
    var b = {
      PB: !1
    };
    a = a.substr(4);
    if (!a) return b;
    var c = a.charAt(0);
    a = a.substr(1);
    var d = a.lastIndexOf("_");
    if (-1 == d) return b;
    var e = _.Wh(a.substr(d + 1));
    if (null == e) return b;
    a = a.substring(0, d);
    if ("_" !== a.charAt(0)) return b;
    d = "E" === c && e.De;
    return !d && ("U" !== c || e.De) || d && !_.Uh ? b : {
      PB: !0,
      De: d,
      nS: a.substr(1),
      domain: e.domain,
      Dh: e.Dh
    }
  };
  var Yh, Zh, bi, ci, di;
  Yh = _.qe();
  Zh = _.qe();
  _.$h = _.qe();
  _.ai = _.qe();
  bi = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
  ci = function(a) {
    this.BL = a;
    this.jC = null
  };
  ci.prototype.write = function(a) {
    var b = _.qe(),
      c = _.qe();
    for (d in a) _.re(a, d) && (c[d] = a[d], b[d] = a[d]);
    var d = 0;
    for (var e = bi.length; d < e; ++d) delete c[bi[d]];
    a = String(a.authuser || 0);
    d = _.qe();
    d[a] = _.Oe.getUrlParameters("#" + di(c));
    this.BL.write(_.Ff(d));
    this.jC = b
  };
  ci.prototype.read = function() {
    return this.jC
  };
  ci.prototype.clear = function() {
    this.BL.clear();
    this.jC = _.qe()
  };
  _.ei = function(a) {
    return a ? {
      domain: a.domain,
      path: "/",
      secure: a.De
    } : null
  };
  di = function(a) {
    var b = "";
    if (!a) return b;
    for (var c in a)
      if ({}.hasOwnProperty.call(a, c)) {
        var d = a[c];
        if (null != d) {
          var e = [encodeURIComponent(c), "="];
          if (d instanceof Array) {
            for (var f = [], g = 0; g < d.length; g++) f.push(encodeURIComponent(d[g]));
            e.push(f.join("+"))
          } else e.push(encodeURIComponent(d));
          d = e.join("")
        } else d = "";
        d && (b && (b += "&"), b += d)
      } return b
  };
  Sh.iterate(function(a) {
    var b = _.Xh(a);
    b && b.PB && (Yh[a] = new ci(new Sh(a)))
  });
  _.Vh.iterate(function(a) {
    Yh[a] && (Zh[a] = new _.Vh(a, _.ei(_.Xh(a))))
  });

  _.tg = window.googleapis && window.googleapis.server || {};

  _.Cg = function() {
    var a = /\s*;\s*/;
    return {
      get: function(b, c) {
        b += "=";
        for (var d = (document.cookie || "").split(a), e = 0, f; f = d[e]; ++e)
          if (0 == f.indexOf(b)) return f.substr(b.length);
        return c
      }
    }
  }();

  var gi;
  _.fi = function(a) {
    this.mb = a || {
      cookie: ""
    }
  };
  _.h = _.fi.prototype;
  _.h.isEnabled = function() {
    return navigator.cookieEnabled
  };
  _.h.set = function(a, b, c, d, e, f) {
    if ("object" === typeof c) {
      var g = c.Bba;
      f = c.secure;
      e = c.domain;
      d = c.path;
      c = c.aY
    }
    if (/[;=\s]/.test(a)) throw Error("z`" + a);
    if (/[;\r\n]/.test(b)) throw Error("A`" + b);
    void 0 === c && (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.fb)() + 1E3 * c)).toUTCString();
    this.mb.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
  };
  _.h.get = function(a, b) {
    for (var c = a + "=", d = (this.mb.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
      f = (0, _.zb)(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return ""
    }
    return b
  };
  _.h.remove = function(a, b, c) {
    var d = this.qe(a);
    this.set(a, "", 0, b, c);
    return d
  };
  _.h.Bf = function() {
    return gi(this).keys
  };
  _.h.Fd = function() {
    return gi(this).values
  };
  _.h.isEmpty = function() {
    return !this.mb.cookie
  };
  _.h.Jb = function() {
    return this.mb.cookie ? (this.mb.cookie || "").split(";").length : 0
  };
  _.h.qe = function(a) {
    return void 0 !== this.get(a)
  };
  _.h.rl = function(a) {
    for (var b = gi(this).values, c = 0; c < b.length; c++)
      if (b[c] == a) return !0;
    return !1
  };
  _.h.clear = function() {
    for (var a = gi(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
  };
  gi = function(a) {
    a = (a.mb.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.zb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
      keys: b,
      values: c
    }
  };
  _.hi = new _.fi("undefined" == typeof document ? null : document);

  var ji, ki, mi;
  _.ii = function() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      n = m = 0
    }

    function b(p) {
      for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
      for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
      p = e[0];
      var u = e[1],
        v = e[2],
        w = e[3],
        z = e[4];
      for (r = 0; 80 > r; r++) {
        if (40 > r)
          if (20 > r) {
            var B = w ^ u & (v ^ w);
            var A = 1518500249
          } else B = u ^ v ^ w, A = 1859775393;
        else 60 > r ? (B = u & v | w & (u | v), A = 2400959708) : (B = u ^ v ^ w, A = 3395469782);
        B = ((p << 5 | p >>> 27) & 4294967295) +
          B + z + A + t[r] & 4294967295;
        z = w;
        w = v;
        v = (u << 30 | u >>> 2) & 4294967295;
        u = p;
        p = B
      }
      e[0] = e[0] + p & 4294967295;
      e[1] = e[1] + u & 4294967295;
      e[2] = e[2] + v & 4294967295;
      e[3] = e[3] + w & 4294967295;
      e[4] = e[4] + z & 4294967295
    }

    function c(p, t) {
      if ("string" === typeof p) {
        p = unescape(encodeURIComponent(p));
        for (var r = [], u = 0, v = p.length; u < v; ++u) r.push(p.charCodeAt(u));
        p = r
      }
      t || (t = p.length);
      r = 0;
      if (0 == m)
        for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
      for (; r < t;)
        if (f[m++] = p[r++], n++, 64 == m)
          for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
    }

    function d() {
      var p = [],
        t = 8 * n;
      56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
      for (var r = 63; 56 <= r; r--) f[r] = t & 255, t >>>= 8;
      b(f);
      for (r = t = 0; 5 > r; r++)
        for (var u = 24; 0 <= u; u -= 8) p[t++] = e[r] >> u & 255;
      return p
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
    var m, n;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      Rg: function() {
        for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
        return t
      }
    }
  };
  ji = function(a) {
    var b = _.ii();
    b.update(a);
    return b.Rg().toLowerCase()
  };
  ki = function(a, b, c) {
    var d = [],
      e = [];
    if (1 == (_.ab(c) ? 2 : 1)) return e = [b, a], (0, _.tb)(d, function(k) {
      e.push(k)
    }), ji(e.join(" "));
    var f = [],
      g = [];
    (0, _.tb)(c, function(k) {
      g.push(k.key);
      f.push(k.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    (0, _.tb)(d, function(k) {
      e.push(k)
    });
    a = ji(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
  };
  _.li = function(a) {
    var b = {
      SAPISIDHASH: !0,
      APISIDHASH: !0
    };
    return a && (a.OriginToken || a.Authorization && b[String(a.Authorization).split(" ")[0]]) ? !0 : !1
  };
  mi = function() {
    var a = _.q.__SAPISID || _.q.__APISID || _.q.__OVERRIDE_SID;
    if (a) return !0;
    a = new _.fi(document);
    a = a.get("SAPISID") || a.get("APISID") || a.get("__Secure-3PAPISID") || a.get("SID");
    return !!a
  };
  _.ni = function(a) {
    var b = _.sg(String(_.q.location.href));
    if (mi()) {
      var c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? _.q.__SAPISID : _.q.__APISID;
      c || (c = new _.fi(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID"));
      if (c) {
        b = b ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(_.q.location.href);
        return d && c && b ? [b, ki(_.sg(d), c, a || null)].join(" ") : null
      }
    }
    return null
  };
  _.oi = {
    AW: _.li,
    CX: mi,
    MU: function() {
      var a = null;
      mi() && (a = window.__PVT, null == a && (a = _.Cg.get("BEAT")));
      return a
    },
    mA: _.ni
  };

  _.Oe = _.Oe || {};
  _.Oe.attachBrowserEvent = function(a, b, c, d) {
    "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : _.gb("cannot attachBrowserEvent: " + b)
  };
  _.Oe.FZ = function(a) {
    var b = window;
    b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.gb("cannot removeBrowserEvent: mousemove")
  };

  _.ug = function() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      n = m = 0
    }

    function b(p) {
      for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
      for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
      p = e[0];
      var u = e[1],
        v = e[2],
        w = e[3],
        z = e[4];
      for (r = 0; 80 > r; r++) {
        if (40 > r)
          if (20 > r) {
            var B = w ^ u & (v ^ w);
            var A = 1518500249
          } else B = u ^ v ^ w, A = 1859775393;
        else 60 > r ? (B = u & v | w & (u | v), A = 2400959708) : (B = u ^ v ^ w, A = 3395469782);
        B = ((p << 5 | p >>> 27) & 4294967295) +
          B + z + A + t[r] & 4294967295;
        z = w;
        w = v;
        v = (u << 30 | u >>> 2) & 4294967295;
        u = p;
        p = B
      }
      e[0] = e[0] + p & 4294967295;
      e[1] = e[1] + u & 4294967295;
      e[2] = e[2] + v & 4294967295;
      e[3] = e[3] + w & 4294967295;
      e[4] = e[4] + z & 4294967295
    }

    function c(p, t) {
      if ("string" === typeof p) {
        p = unescape(encodeURIComponent(p));
        for (var r = [], u = 0, v = p.length; u < v; ++u) r.push(p.charCodeAt(u));
        p = r
      }
      t || (t = p.length);
      r = 0;
      if (0 == m)
        for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
      for (; r < t;)
        if (f[m++] = p[r++], n++, 64 == m)
          for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
    }

    function d() {
      var p = [],
        t = 8 * n;
      56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
      for (var r = 63; 56 <= r; r--) f[r] = t & 255, t >>>= 8;
      b(f);
      for (r = t = 0; 5 > r; r++)
        for (var u = 24; 0 <= u; u -= 8) p[t++] = e[r] >> u & 255;
      return p
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
    var m, n;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      Rg: function() {
        for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
        return t
      }
    }
  };
  _.vg = function() {
    function a(m) {
      var n = _.ug();
      n.update(m);
      return n.Rg()
    }
    var b = window.crypto;
    if (b && "function" == typeof b.getRandomValues) return function() {
      var m = new window.Uint32Array(1);
      b.getRandomValues(m);
      return Number("0." + m[0])
    };
    var c = _.R("random/maxObserveMousemove");
    null == c && (c = -1);
    var d = 0,
      e = Math.random(),
      f = 1,
      g = 1E6 * (screen.width * screen.width + screen.height),
      k = function(m) {
        m = m || window.event;
        var n = m.screenX + m.clientX << 16;
        n += m.screenY + m.clientY;
        n *= (new Date).getTime() % 1E6;
        f = f * n % g;
        0 < c && ++d == c && _.Oe.FZ(k)
      };
    0 != c && _.Oe.attachBrowserEvent(window, "mousemove", k, !1);
    var l = a(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + e);
    return function() {
      var m = f;
      m += parseInt(l.substr(0, 20), 16);
      l = a(l);
      return m / (g + Math.pow(16, 20))
    }
  }();
  _.y("shindig.random", _.vg);

  _.nh = function(a) {
    return encodeURIComponent(String(a))
  };
  _.oh = function(a) {
    return null == a ? "" : String(a)
  };
  _.ph = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  _.qh = function(a, b) {
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
  };
  _.rh = function(a, b, c) {
    if (_.ab(b))
      for (var d = 0; d < b.length; d++) _.rh(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + _.nh(b)))
  };
  _.sh = function(a) {
    var b = [],
      c;
    for (c in a) _.rh(c, a[c], b);
    return b.join("&")
  };
  _.th = function(a, b) {
    b = _.sh(b);
    return _.qh(a, b)
  };
  _.uh = function(a, b, c) {
    for (var d = 0, e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
      var f = a.charCodeAt(d - 1);
      if (38 == f || 63 == f)
        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) return d;
      d += e + 1
    }
    return -1
  };
  _.vh = /#|$/;

  var pi;
  pi = function(a, b) {
    a = _.Oe.createIframeElement({
      id: a,
      name: a
    });
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.position = "absolute";
    a.style.top = "-100px";
    a.style.display = "none";
    if (window.navigator) {
      var c = window.navigator.userAgent || "";
      var d = window.navigator.product || "";
      c = 0 != c.indexOf("Opera") && -1 == c.indexOf("WebKit") && "Gecko" == d && 0 < c.indexOf("rv:1.")
    } else c = !1;
    a.src = c ? "about:blank" : b;
    a.tabIndex = -1;
    "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true";
    document.body.appendChild(a);
    c &&
      (a.src = b);
    return a
  };
  _.qi = function() {
    function a() {
      return !!g("auth/useFirstPartyAuthV2")
    }

    function b(p, t, r, u, v) {
      var w = g("proxy");
      if (u || !w) {
        w = g("root");
        var z = g("root-1p") || w;
        w = w || "https://content.googleapis.com";
        z = z || "https://clients6.google.com";
        var B = g("xd3") || "/static/proxy.html";
        w = (u || String(t ? z : w)) + B
      }
      w = String(w);
      r && (w += (0 <= w.indexOf("?") ? "&" : "?") + "usegapi=1");
      (t = _.Oe.getUrlParameters().jsh || _.qg.Fy.CI()) && (w += (0 <= w.indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(t));
      w += "#parent=" + encodeURIComponent(null != v ? String(v) :
        _.qg.getOrigin(document.location.href));
      return w + ("&rpctoken=" + p)
    }

    function c(p, t, r, u, v) {
      var w = e(r, u, v);
      l[w] || (r = pi(w, t), _.Lf.register("ready:" + p, function() {
        _.Lf.unregister("ready:" + p);
        if (!m[w]) {
          m[w] = !0;
          var z = n[w];
          n[w] = [];
          for (var B = 0, A = z.length; B < A; ++B) {
            var E = z[B];
            f(E.rpc, E.UZ, E.callback)
          }
        }
      }), _.Lf.setupReceiver(w, t), l[w] = r)
    }

    function d(p, t, r) {
      var u = String(2147483647 * (0, _.vg)() | 0),
        v = b(u, p, t, r);
      _.Jf(function() {
        c(u, v, p, t, r)
      })
    }

    function e(p, t, r) {
      p = b("", p, t, r, "");
      r = k[p + t];
      if (!r) {
        r = _.ug();
        r.update(p);
        r = r.Rg().toLowerCase();
        var u = (0, _.vg)();
        r += u;
        k[p + t] = r
      }
      return "apiproxy" + r
    }

    function f(p, t, r) {
      var u = void 0,
        v = !1;
      if ("makeHttpRequests" !== p) throw 'only "makeHttpRequests" RPCs are implemented';
      var w = function(K) {
        if (K) {
          if ("undefined" != typeof u && "undefined" != typeof K.root && u != K.root) throw "all requests in a batch must have the same root URL";
          u = K.root || u;
          v = _.oi.AW(K.headers)
        }
      };
      if (t)
        for (var z = 0, B = t.length; z < B; ++z) {
          var A = t[z];
          A && w(A.params)
        }
      w = !!g("useGapiForXd3");
      var E = e(v, w, u);
      l[E] || d(v, w, u);
      m[E] ? _.Lf.call(E, p, function(K) {
        if (this.f ==
          E && this.t == _.Lf.getAuthToken(this.f) && this.origin == _.Lf.getTargetOrigin(this.f)) {
          var W = _.Ef(K);
          r(W, K)
        }
      }, t) : (n[E] || (n[E] = []), n[E].push({
        rpc: p,
        UZ: t,
        callback: r
      }))
    }

    function g(p) {
      return _.R("googleapis.config/" + p)
    }
    var k = {},
      l = {},
      m = {},
      n = {};
    return {
      zR: function(p, t, r) {
        var u = r || "auto";
        p = p || {};
        if ("none" == u) return p;
        t = t || window.location.href;
        r = p.Authorization;
        var v = p.OriginToken;
        if (!r && !v) {
          (v = _.Gh()) && v.access_token && ("oauth2" == u || "auto" == u) && (r = String(v.token_type || "Bearer") + " " + v.access_token);
          if (v = !r) v = (!!g("auth/useFirstPartyAuth") ||
            "1p" == u) && "oauth2" != u;
          if (v && _.oi.CX()) {
            if (a()) {
              r = g("primaryEmail");
              u = g("appDomain");
              v = g("fogId");
              var w = [];
              r && w.push({
                key: "e",
                value: r
              });
              u && w.push({
                key: "a",
                value: u
              });
              v && w.push({
                key: "u",
                value: v
              });
              r = _.oi.mA(w)
            } else r = _.oi.mA();
            r && (t = _.Eh(t), t = p["X-Goog-AuthUser"] || t, _.Me(_.oh(t)) && (!a() || a() && _.Me(_.oh(g("primaryEmail"))) && _.Me(_.oh(g("appDomain"))) && _.Me(_.oh(g("fogId")))) && (t = "0"), _.Me(_.oh(t)) || (p["X-Goog-AuthUser"] = t))
          }
          r ? p.Authorization = r : !1 !== g("auth/useOriginToken") && (v = _.oi.MU()) && (p.OriginToken =
            v)
        }
        return p
      },
      sj: f
    }
  }();

  var Eg, Fg;
  _.Dg = {
    AUTHORIZATION: "Authorization",
    Fx: "Content-ID",
    Gx: "Content-Transfer-Encoding",
    CONTENT_TYPE: "Content-Type",
    MO: "Date",
    WP: "OriginToken",
    nR: "WWW-Authenticate",
    cG: "X-ClientDetails",
    qR: "X-Goog-AuthUser",
    my: "X-Goog-Encode-Response-If-Executable",
    dG: "X-Goog-Meeting-Botguardid",
    eG: "X-Goog-Meeting-Debugid",
    fG: "X-Goog-Meeting-Token",
    rR: "X-Goog-PageId",
    ny: "X-Goog-Safety-Content-Type",
    oy: "X-Goog-Safety-Encoding",
    gG: "X-HTTP-Method-Override",
    hG: "X-JavaScript-User-Agent",
    iG: "X-Origin",
    py: "X-Referer",
    jG: "X-Requested-With",
    sR: "X-Use-HTTP-Status-Code-Override"
  };
  Eg = ["Accept", "Accept-Language", _.Dg.AUTHORIZATION, "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", _.Dg.Gx, _.Dg.CONTENT_TYPE, _.Dg.MO, "GData-Version", "google-cloud-resource-prefix", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "MIME-Version", "Origin", _.Dg.WP, "Pragma", "Range", "Slug", "Transfer-Encoding", "Want-Digest", "x-chrome-connected", "X-Client-Data", _.Dg.cG, "X-Client-Version", "X-Firebase-Locale",
    "X-GData-Client", "X-GData-Key", _.Dg.qR, _.Dg.rR, _.Dg.my, "X-GoogApps-Allowed-Domains", "X-Goog-AdX-Buyer-Impersonation", "X-Goog-Api-Client", "X-Goog-Api-Key", "X-Goog-Correlation-Id", "X-Goog-Request-Info", "X-Goog-Request-Reason", "X-Goog-Experiments", "x-goog-ext-124712974-jspb", "x-goog-ext-259736195-jspb", "X-Goog-Firebase-Installations-Auth", "x-goog-iam-authority-selector", "x-goog-iam-authorization-token", "X-Goog-Spatula", "X-Goog-Travel-Bgr", "X-Goog-Travel-Settings", "X-Goog-Upload-Command", "X-Goog-Upload-Content-Disposition",
    "X-Goog-Upload-Content-Length", "X-Goog-Upload-Content-Type", "X-Goog-Upload-File-Name", "X-Goog-Upload-Header-Content-Length", "X-Goog-Upload-Offset", "X-Goog-Upload-Protocol", "X-Goog-User-Project", "X-Goog-Visitor-Id", "X-Goog-FieldMask", "X-Google-Project-Override", _.Dg.gG, _.Dg.hG, "X-Pan-Versionid", "X-Proxied-User-IP", _.Dg.iG, _.Dg.py, _.Dg.jG, "X-Stadia-Client-Context", "X-Upload-Content-Length", "X-Upload-Content-Type", _.Dg.sR, "X-Ios-Bundle-Identifier", "X-Android-Package", "X-Ariane-Xsrf-Token", "X-Earth-Engine-App-ID-Token",
    "X-Earth-Engine-Computation-Profile", "X-Earth-Engine-Computation-Profiling", "X-Play-Console-Experiments-Override", "X-YouTube-VVT", "X-YouTube-Page-CL", "X-YouTube-Page-Timestamp", _.Dg.dG, _.Dg.eG, _.Dg.fG, "X-Sfdc-Authorization"
  ];
  Fg = ["Digest", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", _.Dg.Gx, _.Dg.CONTENT_TYPE, "Date", "ETag", "Expires", "Last-Modified", "Location", "Pragma", "Range", "Server", "Transfer-Encoding", _.Dg.nR, "Vary", "Unzipped-Content-MD5", "X-Goog-Generation", "X-Goog-Metageneration", _.Dg.ny, _.Dg.oy, "X-Google-Trace", "X-Goog-Upload-Chunk-Granularity", "X-Goog-Upload-Control-URL", "X-Goog-Upload-Size-Received", "X-Goog-Upload-Status", "X-Goog-Upload-URL",
    "X-Goog-Diff-Download-Range", "X-Goog-Hash", "X-Goog-Updated-Authorization", "X-Server-Object-Version", "X-Guploader-Customer", "X-Guploader-Upload-Result", "X-Guploader-Uploadid", "X-Google-Gfe-Backend-Request-Cost", "X-Earth-Engine-Computation-Profile", _.Dg.dG, _.Dg.eG, _.Dg.fG
  ];
  var Gg, Hg, Ig, Jg, Lg, Mg, Ng, Og, Pg, Qg, Rg, Sg;
  Gg = null;
  Hg = null;
  Ig = null;
  Jg = function(a, b) {
    var c = a.length;
    if (c != b.length) return !1;
    for (var d = 0; d < c; ++d) {
      var e = a.charCodeAt(d),
        f = b.charCodeAt(d);
      65 <= e && 90 >= e && (e += 32);
      65 <= f && 90 >= f && (f += 32);
      if (e != f) return !1
    }
    return !0
  };
  _.Kg = function(a) {
    a = String(a || "").split("\x00").join("");
    for (var b = [], c = !0, d = 0, e = a.length; d < e; ++d) {
      var f = a.charAt(d),
        g = a.charCodeAt(d);
      if (55296 <= g && 56319 >= g && d + 1 < e) {
        var k = a.charAt(d + 1),
          l = a.charCodeAt(d + 1);
        56320 <= l && 57343 >= l && (f += k, g = 65536 + (g - 55296 << 10) + (l - 56320), ++d)
      }
      if (!(0 <= g && 1114109 >= g) || 55296 <= g && 57343 >= g || 64976 <= g && 65007 >= g || 65534 == (g & 65534)) g = 65533, f = String.fromCharCode(g);
      k = !(32 <= g && 126 >= g) || " " == f || c && ":" == f || "\\" == f;
      !c || "/" != f && "?" != f || (c = !1);
      "%" == f && (d + 2 >= e ? k = !0 : (l = 16 * parseInt(a.charAt(d +
        1), 16) + parseInt(a.charAt(d + 2), 16), 0 <= l && 255 >= l ? (g = l, f = 0 == g ? "" : "%" + (256 + l).toString(16).toUpperCase().substr(1), d += 2) : k = !0));
      k && (f = encodeURIComponent(f), 1 >= f.length && (0 <= g && 127 >= g ? f = "%" + (256 + g).toString(16).toUpperCase().substr(1) : (g = 65533, f = encodeURIComponent(String.fromCharCode(g)))));
      b.push(f)
    }
    a = b.join("");
    a = a.split("#")[0];
    a = a.split("?");
    b = a[0].split("/");
    c = [];
    d = 0;
    for (e = b.length; d < e; ++d) f = b[d], g = f.split("%2E").join("."), g = g.split(encodeURIComponent("\uff0e")).join("."), "." == g ? d + 1 == e && c.push("") :
      ".." == g ? (0 < c.length && c.pop(), d + 1 == e && c.push("")) : c.push(f);
    a[0] = c.join("/");
    for (a = a.join("?"); a && "/" == a.charAt(0);) a = a.substr(1);
    return "/" + a
  };
  Lg = {
    "access-control-allow-origin": !0,
    "access-control-allow-credentials": !0,
    "access-control-expose-headers": !0,
    "access-control-max-age": !0,
    "access-control-allow-headers": !0,
    "access-control-allow-methods": !0,
    p3p: !0,
    "proxy-authenticate": !0,
    "set-cookie": !0,
    "set-cookie2": !0,
    status: !0,
    tsv: !0,
    "": !0
  };
  Mg = {
    "accept-charset": !0,
    "accept-encoding": !0,
    "access-control-request-headers": !0,
    "access-control-request-method": !0,
    "client-ip": !0,
    clientip: !0,
    connection: !0,
    "content-length": !0,
    cookie: !0,
    cookie2: !0,
    date: !0,
    dnt: !0,
    expect: !0,
    forwarded: !0,
    "forwarded-for": !0,
    "front-end-https": !0,
    host: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    method: !0,
    origin: !0,
    "raw-post-data": !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    url: !0,
    "user-agent": !0,
    version: !0,
    via: !0,
    "x-att-deviceid": !0,
    "x-chrome-connected": !0,
    "x-client-data": !0,
    "x-client-ip": !0,
    "x-do-not-track": !0,
    "x-forwarded-by": !0,
    "x-forwarded-for": !0,
    "x-forwarded-host": !0,
    "x-forwarded-proto": !0,
    "x-geo": !0,
    "x-googapps-allowed-domains": !0,
    "x-origin": !0,
    "x-proxyuser-ip": !0,
    "x-real-ip": !0,
    "x-referer": !0,
    "x-uidh": !0,
    "x-user-ip": !0,
    "x-wap-profile": !0,
    "": !0
  };
  Ng = function(a) {
    if (!_.jb(a)) return null;
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = a[c];
      if ("string" === typeof d && d) {
        var e = d.toLowerCase();
        Jg(d, e) && (b[e] = d)
      }
    }
    for (var f in _.Dg) Object.prototype.hasOwnProperty.call(_.Dg, f) && (d = _.Dg[f], e = d.toLowerCase(), Jg(d, e) && Object.prototype.hasOwnProperty.call(b, e) && (b[e] = d));
    return b
  };
  Og = new RegExp("(" + /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source + "|" + /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source + "){1,100}", "g");
  Pg = /[ \t]*(\r?\n[ \t]+)+/g;
  Qg = /^[ \t]+|[ \t]+$/g;
  Rg = function(a, b) {
    if (!b && "object" === typeof a && a && "number" === typeof a.length) {
      b = a;
      a = "";
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = Rg(b[c], !0);
        e && (a && (e = a + ", " + e), a = e)
      }
    }
    if ("string" === typeof a && (a = a.replace(Pg, " "), a = a.replace(Qg, ""), "" == a.replace(Og, "") && a)) return a
  };
  Sg = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
  _.Tg = function(a) {
    if ("string" !== typeof a || !a || !a.match(Sg)) return null;
    a = a.toLowerCase();
    if (null == Ig) {
      var b = [],
        c = _.R("googleapis/headers/response");
      c && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      (c = _.R("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      b = b.concat(Fg);
      (c = _.R("googleapis/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      (c = _.R("client/headers/request")) &&
      "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      b = b.concat(Eg);
      for (var d in _.Dg) Object.prototype.hasOwnProperty.call(_.Dg, d) && b.push(_.Dg[d]);
      Ig = Ng(b)
    }
    return null != Ig && Ig.hasOwnProperty(a) ? Ig[a] : a
  };
  _.Ug = function(a, b) {
    if (!_.Tg(a) || !Rg(b)) return null;
    a = a.toLowerCase();
    if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || Mg[a]) return null;
    if (null == Gg) {
      b = [];
      var c = _.R("googleapis/headers/request");
      c && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      (c = _.R("client/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      b = b.concat(Eg);
      Gg = Ng(b)
    }
    return null != Gg && Gg.hasOwnProperty(a) ? Gg[a] : null
  };
  _.Vg = function(a, b) {
    if (!_.Tg(a) || !Rg(b)) return null;
    a = a.toLowerCase();
    if (Lg[a]) return null;
    if (null == Hg) {
      b = [];
      var c = _.R("googleapis/headers/response");
      c && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      (c = _.R("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
      null != c && (b = b.concat(c));
      b = b.concat(Fg);
      Hg = Ng(b)
    }
    return null != Hg && Hg.hasOwnProperty(a) ? a : null
  };
  _.Wg = function(a, b) {
    if (_.Tg(b) && null != a && "object" === typeof a) {
      var c = void 0,
        d;
      for (d in a)
        if (Object.prototype.hasOwnProperty.call(a, d) && Jg(d, b)) {
          var e = Rg(a[d]);
          e && (void 0 !== c && (e = c + ", " + e), c = e)
        } return c
    }
  };
  _.Xg = function(a, b, c, d) {
    var e = _.Tg(b);
    if (e) {
      c && (c = Rg(c));
      b = b.toLowerCase();
      for (var f in a) Object.prototype.hasOwnProperty.call(a, f) && Jg(f, b) && delete a[f];
      c && (d || (b = e), a[b] = c)
    }
  };
  _.Yg = function(a, b) {
    var c = {};
    if (!a) return c;
    a = a.split("\r\n");
    for (var d = 0, e = a.length; d < e; ++d) {
      var f = a[d];
      if (!f) break;
      var g = f.indexOf(":");
      if (!(0 >= g)) {
        var k = f.substring(0, g);
        if (k = _.Tg(k)) {
          for (f = f.substring(g + 1); d + 1 < e && a[d + 1].match(/^[ \t]/);) f += "\r\n" + a[d + 1], ++d;
          if (f = Rg(f))
            if (k = _.Vg(k, f) || (b ? void 0 : k)) k = k.toLowerCase(), g = _.Wg(c, k), void 0 !== g && (f = g + ", " + f), _.Xg(c, k, f, !0)
        }
      }
    }
    return c
  };

  _.Zg = function() {
    return _.Fb("Firefox") || _.Fb("FxiOS")
  };
  _.$g = function() {
    return (_.Fb("Chrome") || _.Fb("CriOS")) && !_.Fb("Edge")
  };
  _.ah = function() {
    return _.Fb("Safari") && !(_.$g() || _.Fb("Coast") || _.Jb() || _.Fb("Edge") || _.Fb("Edg/") || _.Fb("OPR") || _.Zg() || _.Fb("Silk") || _.Fb("Android"))
  };
  _.bh = function() {
    return _.Fb("Android") && !(_.$g() || _.Zg() || _.Jb() || _.Fb("Silk"))
  };
  _.ch = _.Zg();
  _.dh = _.Ac() || _.Fb("iPod");
  _.eh = _.Fb("iPad");
  _.fh = _.bh();
  _.gh = _.$g();
  _.hh = _.ah() && !_.Bc();

  var ih;
  ih = {};
  _.jh = null;
  _.kh = _.Kc || _.Lc && !_.hh || _.Gc || !_.hh && !_.Hc && "function" == typeof _.q.atob;
  _.mh = function(a, b) {
    void 0 === b && (b = 0);
    _.lh();
    b = ih[b];
    for (var c = [], d = 0; d < a.length; d += 3) {
      var e = a[d],
        f = d + 1 < a.length,
        g = f ? a[d + 1] : 0,
        k = d + 2 < a.length,
        l = k ? a[d + 2] : 0,
        m = e >> 2;
      e = (e & 3) << 4 | g >> 4;
      g = (g & 15) << 2 | l >> 6;
      l &= 63;
      k || (l = 64, f || (g = 64));
      c.push(b[m], b[e], b[g] || "", b[l] || "")
    }
    return c.join("")
  };
  _.lh = function() {
    if (!_.jh) {
      _.jh = {};
      for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
        var d = a.concat(b[c].split(""));
        ih[c] = d;
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === _.jh[f] && (_.jh[f] = e)
        }
      }
    }
  };

  var cq;
  _.aq = function(a, b) {
    a = a.split(".");
    b = b || _.q;
    for (var c = 0; c < a.length; c++)
      if (b = b[a[c]], null == b) return null;
    return b
  };
  _.bq = function(a, b) {
    b = (0, _.rb)(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c
  };
  cq = function(a, b) {
    for (var c in a)
      if (b.call(void 0, a[c], c, a)) return !0;
    return !1
  };
  _.dq = function(a, b) {
    for (var c in a)
      if (a[c] == b) return !0;
    return !1
  };
  _.eq = function() {
    this.Ib = this.Ib;
    this.im = this.im
  };
  _.eq.prototype.Ib = !1;
  _.eq.prototype.Sn = function() {
    return this.Ib
  };
  _.eq.prototype.Ea = function() {
    this.Ib || (this.Ib = !0, this.ua())
  };
  _.hq = function(a, b) {
    _.fq(a, _.ij(_.gq, b))
  };
  _.fq = function(a, b) {
    a.Ib ? b() : (a.im || (a.im = []), a.im.push(b))
  };
  _.eq.prototype.ua = function() {
    if (this.im)
      for (; this.im.length;) this.im.shift()()
  };
  _.gq = function(a) {
    a && "function" == typeof a.Ea && a.Ea()
  };
  _.iq = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.tm = !1;
    this.eM = !0
  };
  _.iq.prototype.stopPropagation = function() {
    this.tm = !0
  };
  _.iq.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.eM = !1
  };
  var kq, lq;
  _.jq = !_.Hc || _.dd(9);
  kq = !_.Hc || _.dd(9);
  lq = _.Hc && !_.bd("9");
  !_.Lc || _.bd("528");
  _.Kc && _.bd("1.9b") || _.Hc && _.bd("8") || _.Gc && _.bd("9.5") || _.Lc && _.bd("528");
  _.Kc && !_.bd("8") || _.Hc && _.bd("9");
  var mq = function() {
    if (!_.q.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        }
      });
    try {
      _.q.addEventListener("test", _.ib, b), _.q.removeEventListener("test", _.ib, b)
    } catch (c) {}
    return a
  }();
  _.nq = _.Lc ? "webkitTransitionEnd" : _.Gc ? "otransitionend" : "transitionend";
  _.oq = function(a, b) {
    _.iq.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.SC = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.we = null;
    a && this.init(a, b)
  };
  _.H(_.oq, _.iq);
  var pq = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  _.oq.prototype.init = function(a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget) ? _.Kc && (_.Dc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = _.Lc || void 0 !==
      a.offsetX ? a.offsetX : a.layerX, this.offsetY = _.Lc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.SC = _.Nc ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId ||
      0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : pq[a.pointerType] || "";
    this.state = a.state;
    this.we = a;
    a.defaultPrevented && this.preventDefault()
  };
  _.oq.prototype.stopPropagation = function() {
    _.oq.H.stopPropagation.call(this);
    this.we.stopPropagation ? this.we.stopPropagation() : this.we.cancelBubble = !0
  };
  _.oq.prototype.preventDefault = function() {
    _.oq.H.preventDefault.call(this);
    var a = this.we;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, lq) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  var sq;
  _.qq = "closure_listenable_" + (1E6 * Math.random() | 0);
  _.rq = function(a) {
    return !(!a || !a[_.qq])
  };
  sq = 0;
  var tq = function(a, b, c, d, e) {
      this.listener = a;
      this.qw = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Be = e;
      this.key = ++sq;
      this.qo = this.Ft = !1
    },
    uq = function(a) {
      a.qo = !0;
      a.listener = null;
      a.qw = null;
      a.src = null;
      a.Be = null
    };
  _.vq = function(a) {
    this.src = a;
    this.wd = {};
    this.Ms = 0
  };
  _.vq.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.wd[f];
    a || (a = this.wd[f] = [], this.Ms++);
    var g = wq(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ft = !1)) : (b = new tq(b, this.src, f, !!d, e), b.Ft = c, a.push(b));
    return b
  };
  _.vq.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.wd)) return !1;
    var e = this.wd[a];
    b = wq(e, b, c, d);
    return -1 < b ? (uq(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.wd[a], this.Ms--), !0) : !1
  };
  _.xq = function(a, b) {
    var c = b.type;
    if (!(c in a.wd)) return !1;
    var d = _.bq(a.wd[c], b);
    d && (uq(b), 0 == a.wd[c].length && (delete a.wd[c], a.Ms--));
    return d
  };
  _.vq.prototype.removeAll = function(a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.wd)
      if (!a || c == a) {
        for (var d = this.wd[c], e = 0; e < d.length; e++) ++b, uq(d[e]);
        delete this.wd[c];
        this.Ms--
      } return b
  };
  _.vq.prototype.yn = function(a, b, c, d) {
    a = this.wd[a.toString()];
    var e = -1;
    a && (e = wq(a, b, c, d));
    return -1 < e ? a[e] : null
  };
  _.vq.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return cq(this.wd, function(f) {
      for (var g = 0; g < f.length; ++g)
        if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
      return !1
    })
  };
  var wq = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.qo && f.listener == b && f.capture == !!c && f.Be == d) return e
    }
    return -1
  };
  var yq, zq, Aq, Eq, Gq, Hq, Lq, Kq, Iq, Mq;
  yq = "closure_lm_" + (1E6 * Math.random() | 0);
  zq = {};
  Aq = 0;
  _.Cq = function(a, b, c, d, e) {
    if (d && d.once) return _.Bq(a, b, c, d, e);
    if (_.ab(b)) {
      for (var f = 0; f < b.length; f++) _.Cq(a, b[f], c, d, e);
      return null
    }
    c = _.Dq(c);
    return _.rq(a) ? a.U(b, c, _.kb(d) ? !!d.capture : !!d, e) : Eq(a, b, c, !1, d, e)
  };
  Eq = function(a, b, c, d, e, f) {
    if (!b) throw Error("E");
    var g = _.kb(e) ? !!e.capture : !!e,
      k = _.Fq(a);
    k || (a[yq] = k = new _.vq(a));
    c = k.add(b, c, d, g, f);
    if (c.qw) return c;
    d = Gq();
    c.qw = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) mq || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Hq(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("F");
    Aq++;
    return c
  };
  Gq = function() {
    var a = Iq,
      b = kq ? function(c) {
        return a.call(b.src, b.listener, c)
      } : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c
      };
    return b
  };
  _.Bq = function(a, b, c, d, e) {
    if (_.ab(b)) {
      for (var f = 0; f < b.length; f++) _.Bq(a, b[f], c, d, e);
      return null
    }
    c = _.Dq(c);
    return _.rq(a) ? a.Zn(b, c, _.kb(d) ? !!d.capture : !!d, e) : Eq(a, b, c, !0, d, e)
  };
  _.Jq = function(a) {
    if ("number" === typeof a || !a || a.qo) return !1;
    var b = a.src;
    if (_.rq(b)) return b.GE(a);
    var c = a.type,
      d = a.qw;
    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Hq(c), d) : b.addListener && b.removeListener && b.removeListener(d);
    Aq--;
    (c = _.Fq(b)) ? (_.xq(c, a), 0 == c.Ms && (c.src = null, b[yq] = null)) : uq(a);
    return !0
  };
  Hq = function(a) {
    return a in zq ? zq[a] : zq[a] = "on" + a
  };
  Lq = function(a, b, c, d) {
    var e = !0;
    if (a = _.Fq(a))
      if (b = a.wd[b.toString()])
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.capture == c && !f.qo && (f = Kq(f, d), e = e && !1 !== f)
        }
    return e
  };
  Kq = function(a, b) {
    var c = a.listener,
      d = a.Be || a.src;
    a.Ft && _.Jq(a);
    return c.call(d, b)
  };
  Iq = function(a, b) {
    if (a.qo) return !0;
    if (!kq) {
      var c = b || _.aq("window.event");
      b = new _.oq(c, this);
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
        for (e = b.currentTarget; e; e = e.parentNode) c.push(e);a = a.type;
        for (e = c.length - 1; !b.tm && 0 <= e; e--) {
          b.currentTarget = c[e];
          var f = Lq(c[e], a, !0, b);
          d = d && f
        }
        for (e = 0; !b.tm && e < c.length; e++) b.currentTarget = c[e],
        f = Lq(c[e], a, !1, b),
        d = d && f
      }
      return d
    }
    return Kq(a, new _.oq(b,
      this))
  };
  _.Fq = function(a) {
    a = a[yq];
    return a instanceof _.vq ? a : null
  };
  Mq = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  _.Dq = function(a) {
    if (_.mb(a)) return a;
    a[Mq] || (a[Mq] = function(b) {
      return a.handleEvent(b)
    });
    return a[Mq]
  };
  _.nj(function(a) {
    Iq = a(Iq)
  });

  _.Nq = function(a, b) {
    a.prototype = (0, _.va)(b.prototype);
    a.prototype.constructor = a;
    if (_.Ia)(0, _.Ia)(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c];
    a.H = b.prototype
  };
  _.Oq = function(a) {
    a.HB = void 0;
    a.Ma = function() {
      return a.HB ? a.HB : a.HB = new a
    }
  };
  _.Pq = function(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
  };
  _.Qq = function(a) {
    for (var b in a) return !1;
    return !0
  };
  _.Rq = function(a, b, c, d, e) {
    if (_.ab(b))
      for (var f = 0; f < b.length; f++) _.Rq(a, b[f], c, d, e);
    else d = _.kb(d) ? !!d.capture : !!d, c = _.Dq(c), _.rq(a) ? a.$b(b, c, d, e) : a && (a = _.Fq(a)) && (b = a.yn(b, c, d, e)) && _.Jq(b)
  };
  _.Sq = function() {
    _.eq.call(this);
    this.Pi = new _.vq(this);
    this.yR = this;
    this.MC = null
  };
  _.H(_.Sq, _.eq);
  _.Sq.prototype[_.qq] = !0;
  _.h = _.Sq.prototype;
  _.h.Gl = function() {
    return this.MC
  };
  _.h.Qw = _.fa(18);
  _.h.addEventListener = function(a, b, c, d) {
    _.Cq(this, a, b, c, d)
  };
  _.h.removeEventListener = function(a, b, c, d) {
    _.Rq(this, a, b, c, d)
  };
  _.h.dispatchEvent = function(a) {
    var b, c = this.Gl();
    if (c)
      for (b = []; c; c = c.Gl()) b.push(c);
    c = this.yR;
    var d = a.type || a;
    if ("string" === typeof a) a = new _.iq(a, c);
    else if (a instanceof _.iq) a.target = a.target || c;
    else {
      var e = a;
      a = new _.iq(d, c);
      _.Ib(a, e)
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.tm && 0 <= f; f--) {
        var g = a.currentTarget = b[f];
        e = g.jq(d, !0, a) && e
      }
    a.tm || (g = a.currentTarget = c, e = g.jq(d, !0, a) && e, a.tm || (e = g.jq(d, !1, a) && e));
    if (b)
      for (f = 0; !a.tm && f < b.length; f++) g = a.currentTarget = b[f], e = g.jq(d, !1, a) && e;
    return e
  };
  _.h.ua = function() {
    _.Sq.H.ua.call(this);
    this.eD();
    this.MC = null
  };
  _.h.U = function(a, b, c, d) {
    return this.Pi.add(String(a), b, !1, c, d)
  };
  _.h.Zn = function(a, b, c, d) {
    return this.Pi.add(String(a), b, !0, c, d)
  };
  _.h.$b = function(a, b, c, d) {
    return this.Pi.remove(String(a), b, c, d)
  };
  _.h.GE = function(a) {
    return _.xq(this.Pi, a)
  };
  _.h.eD = function(a) {
    this.Pi && this.Pi.removeAll(a)
  };
  _.h.jq = function(a, b, c) {
    a = this.Pi.wd[String(a)];
    if (!a) return !0;
    a = a.concat();
    for (var d = !0, e = 0; e < a.length; ++e) {
      var f = a[e];
      if (f && !f.qo && f.capture == b) {
        var g = f.listener,
          k = f.Be || f.src;
        f.Ft && this.GE(f);
        d = !1 !== g.call(k, c) && d
      }
    }
    return d && 0 != c.eM
  };
  _.h.yn = function(a, b, c, d) {
    return this.Pi.yn(String(a), b, c, d)
  };
  _.h.hasListener = function(a, b) {
    return this.Pi.hasListener(void 0 !== a ? String(a) : void 0, b)
  };

  _.Dt = function(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
  };
  _.Et = "StopIteration" in _.q ? _.q.StopIteration : {
    message: "StopIteration",
    stack: ""
  };
  _.Ft = function() {};
  _.Ft.prototype.next = function() {
    throw _.Et;
  };
  _.Ft.prototype.Ci = function() {
    return this
  };

  _.Gt = function(a, b) {
    this.W = {};
    this.Ob = [];
    this.Rf = this.Xb = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("h");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
  };
  _.h = _.Gt.prototype;
  _.h.Jb = function() {
    return this.Xb
  };
  _.h.Fd = function() {
    Ht(this);
    for (var a = [], b = 0; b < this.Ob.length; b++) a.push(this.W[this.Ob[b]]);
    return a
  };
  _.h.Bf = function() {
    Ht(this);
    return this.Ob.concat()
  };
  _.h.qe = function(a) {
    return _.It(this.W, a)
  };
  _.h.rl = _.fa(4);
  _.h.equals = function(a, b) {
    if (this === a) return !0;
    if (this.Xb != a.Jb()) return !1;
    b = b || Jt;
    Ht(this);
    for (var c, d = 0; c = this.Ob[d]; d++)
      if (!b(this.get(c), a.get(c))) return !1;
    return !0
  };
  var Jt = function(a, b) {
    return a === b
  };
  _.Gt.prototype.isEmpty = function() {
    return 0 == this.Xb
  };
  _.Gt.prototype.clear = function() {
    this.W = {};
    this.Rf = this.Xb = this.Ob.length = 0
  };
  _.Gt.prototype.remove = function(a) {
    return _.It(this.W, a) ? (delete this.W[a], this.Xb--, this.Rf++, this.Ob.length > 2 * this.Xb && Ht(this), !0) : !1
  };
  var Ht = function(a) {
    if (a.Xb != a.Ob.length) {
      for (var b = 0, c = 0; b < a.Ob.length;) {
        var d = a.Ob[b];
        _.It(a.W, d) && (a.Ob[c++] = d);
        b++
      }
      a.Ob.length = c
    }
    if (a.Xb != a.Ob.length) {
      var e = {};
      for (c = b = 0; b < a.Ob.length;) d = a.Ob[b], _.It(e, d) || (a.Ob[c++] = d, e[d] = 1), b++;
      a.Ob.length = c
    }
  };
  _.h = _.Gt.prototype;
  _.h.get = function(a, b) {
    return _.It(this.W, a) ? this.W[a] : b
  };
  _.h.set = function(a, b) {
    _.It(this.W, a) || (this.Xb++, this.Ob.push(a), this.Rf++);
    this.W[a] = b
  };
  _.h.addAll = function(a) {
    if (a instanceof _.Gt)
      for (var b = a.Bf(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
    else
      for (b in a) this.set(b, a[b])
  };
  _.h.forEach = function(a, b) {
    for (var c = this.Bf(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  _.h.clone = function() {
    return new _.Gt(this)
  };
  _.h.Ci = function(a) {
    Ht(this);
    var b = 0,
      c = this.Rf,
      d = this,
      e = new _.Ft;
    e.next = function() {
      if (c != d.Rf) throw Error("K");
      if (b >= d.Ob.length) throw _.Et;
      var f = d.Ob[b++];
      return a ? f : d.W[f]
    };
    return e
  };
  _.It = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };

  _.Kt = function(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  };
  _.Lt = function(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  };
  _.Mt = function(a, b) {
    var c = _.jb(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]]
    }
    return a
  };
  _.Nt = function(a) {
    if (a.Fd && "function" == typeof a.Fd) return a.Fd();
    if ("string" === typeof a) return a.split("");
    if (_.jb(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b
    }
    return _.Kt(a)
  };
  _.Ot = function(a) {
    if (a.Bf && "function" == typeof a.Bf) return a.Bf();
    if (!a.Fd || "function" != typeof a.Fd) {
      if (_.jb(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b
      }
      return _.Lt(a)
    }
  };
  _.Pt = function(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (_.jb(a) || "string" === typeof a)(0, _.tb)(a, b, c);
    else
      for (var d = _.Ot(a), e = _.Nt(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
  };

  _.iy = function(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c
  };

  var jy;
  _.ky = function(a) {
    return (new jy).Am(a)
  };
  jy = function() {};
  jy.prototype.Am = function(a) {
    var b = [];
    ly(this, a, b);
    return b.join("")
  };
  var ly = function(a, b, c) {
      if (null == b) c.push("null");
      else {
        if ("object" == typeof b) {
          if (_.ab(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), ly(a, d[f], c), e = ",";
            c.push("]");
            return
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
          else {
            c.push("{");
            e = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), my(d, c), c.push(":"), ly(a, f, c), e = ","));
            c.push("}");
            return
          }
        }
        switch (typeof b) {
          case "string":
            my(b, c);
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
            throw Error("oa`" + typeof b);
        }
      }
    },
    ny = {
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
    oy = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    my = function(a, b) {
      b.push('"', a.replace(oy, function(c) {
        var d = ny[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ny[c] = d);
        return d
      }), '"')
    };

  _.py = function(a, b, c) {
    if (_.mb(a)) c && (a = (0, _.L)(a, c));
    else if (a && "function" == typeof a.handleEvent) a = (0, _.L)(a.handleEvent, a);
    else throw Error("pa");
    return 2147483647 < Number(b) ? -1 : _.q.setTimeout(a, b || 0)
  };
  _.qy = function(a) {
    _.q.clearTimeout(a)
  };
  _.ry = function(a) {
    var b = null;
    return (new _.Pj(function(c, d) {
      b = _.py(function() {
        c(void 0)
      }, a); - 1 == b && d(Error("qa"))
    })).hx(function(c) {
      _.qy(b);
      throw c;
    })
  };

  var wy, xy, Ay, Cy;
  _.sy = function(a) {
    return (a = _.fy(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  };
  _.ty = function(a) {
    if (!_.ab(a))
      for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
  };
  _.uy = function(a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b
  };
  _.vy = function(a) {
    var b = _.$a(a);
    if ("object" == b || "array" == b) {
      if (_.mb(a.clone)) return a.clone();
      b = "array" == b ? [] : {};
      for (var c in a) b[c] = _.vy(a[c]);
      return b
    }
    return a
  };
  wy = function(a) {
    return Array.prototype.join.call(arguments, "")
  };
  xy = function(a, b) {
    var c = [];
    for (b = b || 0; b < a.length; b += 2) _.rh(a[b], a[b + 1], c);
    return c.join("&")
  };
  _.yy = function(a, b) {
    var c = 2 == arguments.length ? xy(arguments[1], 0) : xy(arguments, 1);
    return _.qh(a, c)
  };
  _.zy = function(a, b) {
    _.Pq(a, "/") && (a = a.substr(0, a.length - 1));
    _.ld(b, "/") && (b = b.substr(1));
    return wy(a, "/", b)
  };
  Ay = {};
  _.By = function(a) {
    if (Ay[a]) return Ay[a];
    a = String(a);
    if (!Ay[a]) {
      var b = /function\s+([^\(]+)/m.exec(a);
      Ay[a] = b ? b[1] : "[Anonymous]"
    }
    return Ay[a]
  };
  Cy = function(a, b) {
    var c = [];
    if (_.yb(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
      c.push(_.By(a) + "(");
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
            f = (f = _.By(f)) ? f : "[fn]";
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
        c.push(Cy(a.caller,
          b))
      } catch (g) {
        c.push("[exception trying to get caller]\n")
      }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
  };
  _.Dy = function(a) {
    var b = Error();
    if (Error.captureStackTrace) Error.captureStackTrace(b, a || _.Dy), b = String(b.stack);
    else {
      try {
        throw b;
      } catch (c) {
        b = c
      }
      b = (b = b.stack) ? String(b) : null
    }
    b || (b = Cy(a || arguments.callee.caller, []));
    return b
  };
  _.Ey = function(a) {
    switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        return !0;
      default:
        return !1
    }
  };
  _.Fy = function(a, b) {
    _.Sq.call(this);
    this.zk = a || 1;
    this.Gs = b || _.q;
    this.SG = (0, _.L)(this.m1, this);
    this.vK = (0, _.fb)()
  };
  _.H(_.Fy, _.Sq);
  _.h = _.Fy.prototype;
  _.h.enabled = !1;
  _.h.nc = null;
  _.h.setInterval = function(a) {
    this.zk = a;
    this.nc && this.enabled ? (this.stop(), this.start()) : this.nc && this.stop()
  };
  _.h.m1 = function() {
    if (this.enabled) {
      var a = (0, _.fb)() - this.vK;
      0 < a && a < .8 * this.zk ? this.nc = this.Gs.setTimeout(this.SG, this.zk - a) : (this.nc && (this.Gs.clearTimeout(this.nc), this.nc = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
  };
  _.h.start = function() {
    this.enabled = !0;
    this.nc || (this.nc = this.Gs.setTimeout(this.SG, this.zk), this.vK = (0, _.fb)())
  };
  _.h.stop = function() {
    this.enabled = !1;
    this.nc && (this.Gs.clearTimeout(this.nc), this.nc = null)
  };
  _.h.ua = function() {
    _.Fy.H.ua.call(this);
    this.stop();
    delete this.Gs
  };
  var Hy, Iy, Jy;
  _.Gy = function(a) {
    _.Sq.call(this);
    this.headers = new _.Gt;
    this.zx = a || null;
    this.qf = !1;
    this.yx = this.Oa = null;
    this.Dv = "";
    this.Vn = 0;
    this.Xl = this.DB = this.hv = this.Rz = !1;
    this.Im = 0;
    this.kd = null;
    this.Ik = "";
    this.QE = this.xh = !1
  };
  _.H(_.Gy, _.Sq);
  Hy = /^https?$/i;
  Iy = ["POST", "PUT"];
  Jy = [];
  _.Ky = function(a, b, c, d, e, f) {
    var g = new _.Gy;
    Jy.push(g);
    b && g.U("complete", b);
    g.Zn("ready", g.iS);
    f && g.hE(f);
    g.send(a, c, d, e)
  };
  _.Gy.prototype.iS = function() {
    this.Ea();
    _.bq(Jy, this)
  };
  _.Gy.prototype.hE = function(a) {
    this.Im = Math.max(0, a)
  };
  _.Gy.prototype.send = function(a, b, c, d) {
    if (this.Oa) throw Error("ra`" + this.Dv + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Dv = a;
    this.Vn = 0;
    this.Rz = !1;
    this.qf = !0;
    this.Oa = this.zx ? _.sy(this.zx) : _.sy(_.gy);
    this.yx = this.zx ? this.zx.getOptions() : _.gy.getOptions();
    this.Oa.onreadystatechange = (0, _.L)(this.jL, this);
    try {
      this.DB = !0, this.Oa.open(b, String(a), !0), this.DB = !1
    } catch (f) {
      this.pu(5, f);
      return
    }
    a = c || "";
    var e = this.headers.clone();
    d && _.Pt(d, function(f, g) {
      e.set(g, f)
    });
    d = _.jj(e.Bf(), Ly);
    c = _.q.FormData && a instanceof _.q.FormData;
    !_.yb(Iy, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
      this.Oa.setRequestHeader(g, f)
    }, this);
    this.Ik && (this.Oa.responseType = this.Ik);
    "withCredentials" in this.Oa && this.Oa.withCredentials !== this.xh && (this.Oa.withCredentials = this.xh);
    try {
      My(this), 0 < this.Im && ((this.QE = Ny(this.Oa)) ? (this.Oa.timeout = this.Im, this.Oa.ontimeout = (0, _.L)(this.Bg, this)) : this.kd = _.py(this.Bg, this.Im, this)), this.hv = !0, this.Oa.send(a), this.hv = !1
    } catch (f) {
      this.pu(5, f)
    }
  };
  var Ny = function(a) {
      return _.Hc && _.bd(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    },
    Ly = function(a) {
      return "content-type" == a.toLowerCase()
    };
  _.Gy.prototype.Bg = function() {
    "undefined" != typeof _.Za && this.Oa && (this.Vn = 8, this.dispatchEvent("timeout"), this.abort(8))
  };
  _.Gy.prototype.pu = function(a) {
    this.qf = !1;
    this.Oa && (this.Xl = !0, this.Oa.abort(), this.Xl = !1);
    this.Vn = a;
    Oy(this);
    Py(this)
  };
  var Oy = function(a) {
    a.Rz || (a.Rz = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
  };
  _.Gy.prototype.abort = function(a) {
    this.Oa && this.qf && (this.qf = !1, this.Xl = !0, this.Oa.abort(), this.Xl = !1, this.Vn = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Py(this))
  };
  _.Gy.prototype.ua = function() {
    this.Oa && (this.qf && (this.qf = !1, this.Xl = !0, this.Oa.abort(), this.Xl = !1), Py(this, !0));
    _.Gy.H.ua.call(this)
  };
  _.Gy.prototype.jL = function() {
    this.Ib || (this.DB || this.hv || this.Xl ? Qy(this) : this.AC())
  };
  _.Gy.prototype.AC = function() {
    Qy(this)
  };
  var Qy = function(a) {
      if (a.qf && "undefined" != typeof _.Za && (!a.yx[1] || 4 != _.Ry(a) || 2 != a.getStatus()))
        if (a.hv && 4 == _.Ry(a)) _.py(a.jL, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == _.Ry(a)) {
        a.qf = !1;
        try {
          _.Sy(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Vn = 6, a.getStatus(), Oy(a))
        } finally {
          Py(a)
        }
      }
    },
    Py = function(a, b) {
      if (a.Oa) {
        My(a);
        var c = a.Oa,
          d = a.yx[0] ? _.ib : null;
        a.Oa = null;
        a.yx = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d
        } catch (e) {}
      }
    },
    My = function(a) {
      a.Oa && a.QE && (a.Oa.ontimeout =
        null);
      a.kd && (_.qy(a.kd), a.kd = null)
    };
  _.Gy.prototype.Wd = function() {
    return !!this.Oa
  };
  _.Sy = function(a) {
    var b = a.getStatus(),
      c;
    if (!(c = _.Ey(b))) {
      if (b = 0 === b) a = String(a.Dv).match(_.ph)[1] || null, !a && _.q.self && _.q.self.location && (a = _.q.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Hy.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  };
  _.Ry = function(a) {
    return a.Oa ? a.Oa.readyState : 0
  };
  _.Gy.prototype.getStatus = function() {
    try {
      return 2 < _.Ry(this) ? this.Oa.status : -1
    } catch (a) {
      return -1
    }
  };
  _.Ty = function(a) {
    try {
      return a.Oa ? a.Oa.responseText : ""
    } catch (b) {
      return ""
    }
  };
  _.Uy = function(a) {
    try {
      if (!a.Oa) return null;
      if ("response" in a.Oa) return a.Oa.response;
      switch (a.Ik) {
        case "":
        case "text":
          return a.Oa.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.Oa) return a.Oa.mozResponseArrayBuffer
      }
      return null
    } catch (b) {
      return null
    }
  };
  _.Gy.prototype.getResponseHeader = function(a) {
    if (this.Oa && 4 == _.Ry(this)) return a = this.Oa.getResponseHeader(a), null === a ? void 0 : a
  };
  _.Gy.prototype.getAllResponseHeaders = function() {
    return this.Oa && 4 == _.Ry(this) ? this.Oa.getAllResponseHeaders() || "" : ""
  };
  _.nj(function(a) {
    _.Gy.prototype.AC = a(_.Gy.prototype.AC)
  });

  var wg = function(a) {
      return {
        execute: function(b) {
          var c = {
              method: a.httpMethod || "GET",
              root: a.root,
              path: a.url,
              params: a.urlParams,
              headers: a.headers,
              body: a.body
            },
            d = window.gapi,
            e = function() {
              var f = d.config.get("client/apiKey"),
                g = d.config.get("client/version");
              try {
                var k = d.config.get("googleapis.config/developerKey"),
                  l = d.config.get("client/apiKey", k);
                d.config.update("client/apiKey", l);
                d.config.update("client/version", "1.0.0-alpha");
                var m = d.client;
                m.request.call(m, c).then(b, b)
              } finally {
                d.config.update("client/apiKey",
                  f), d.config.update("client/version", g)
              }
            };
          d.client ? e() : d.load.call(d, "client", e)
        }
      }
    },
    xg = function(a, b) {
      return function(c) {
        var d = {};
        c = c.body;
        var e = _.Ef(c),
          f = {};
        if (e && e.length)
          for (var g = 0, k = e.length; g < k; ++g) {
            var l = e[g];
            f[l.id] = l
          }
        g = 0;
        for (k = b.length; g < k; ++g) l = b[g].id, d[l] = e && e.length ? f[l] : e;
        a(d, c)
      }
    },
    yg = function(a) {
      a.transport = {
        name: "googleapis",
        execute: function(b, c) {
          for (var d = [], e = 0, f = b.length; e < f; ++e) {
            var g = b[e],
              k = g.method,
              l = String(k).split(".")[0];
            l = _.R("googleapis.config/versions/" + k) || _.R("googleapis.config/versions/" +
              l) || "v1";
            d.push({
              jsonrpc: "2.0",
              id: g.id,
              method: k,
              apiVersion: String(l),
              params: g.params
            })
          }
          b = wg({
            httpMethod: "POST",
            root: a.transport.root,
            url: "/rpc?pp=0",
            headers: {
              "Content-Type": "application/json"
            },
            body: d
          });
          b.execute.call(b, xg(c, d))
        },
        root: void 0
      }
    },
    zg = function(a) {
      var b = this.method,
        c = this.transport;
      c.execute.call(c, [{
        method: b,
        id: b,
        params: this.rpc
      }], function(d) {
        d = d[b];
        d.error || (d = d.data || d.result);
        a(d)
      })
    },
    Bg = function() {
      for (var a = Ag, b = a.split("."), c = function(k) {
          k = k || {};
          k.groupId = k.groupId || "@self";
          k.userId =
            k.userId || "@viewer";
          k = {
            method: a,
            rpc: k || {}
          };
          yg(k);
          k.execute = zg;
          return k
        }, d = _.q, e = 0, f = b.length; e < f; ++e) {
        var g = d[b[e]] || {};
        e + 1 == f && (g = c);
        d = d[b[e]] = g
      }
      if (1 < b.length && "googleapis" != b[0])
        for (b[0] = "googleapis", "delete" == b[b.length - 1] && (b[b.length - 1] = "remove"), d = _.q, e = 0, f = b.length; e < f; ++e) g = d[b[e]] || {}, e + 1 == f && (g = c), d = d[b[e]] = g
    },
    Ag;
  for (Ag in _.R("googleapis.config/methods")) Bg();
  _.y("googleapis.newHttpRequest", function(a) {
    return wg(a)
  });
  _.y("googleapis.setUrlParameter", function(a, b) {
    if ("trace" !== a) throw Error("v");
    _.Ie("client/trace", b)
  });

  var Mu, Nu, Ou, Pu, Ru, Su, Tu, Uu, Wu;
  oauth2 = {};
  _.Lu = !1;
  Mu = function(a) {
    try {
      _.Lu && window.console && window.console.log && window.console.log(a)
    } catch (b) {}
  };
  Nu = function(a, b) {
    if (!a) return -1;
    if (a.indexOf) return a.indexOf(b, void 0);
    for (var c = 0, d = a.length; c < d; c++)
      if (a[c] === b) return c;
    return -1
  };
  Ou = function(a, b) {
    function c() {}
    if (!a) throw "Child class cannot be empty.";
    if (!b) throw "Parent class cannot be empty.";
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
  };
  Pu = function(a) {
    return "[object Function]" === Object.prototype.toString.call(a)
  };
  _.Qu = function(a) {
    var b = {};
    if (a)
      for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    return b
  };
  Ru = function(a) {
    var b = location.hash;
    a = new RegExp("[&#]" + a + "=([^&]*)");
    b = decodeURIComponent(b);
    b = a.exec(b);
    return null == b ? "" : b[1].replace(/\+/g, " ")
  };
  Su = function(a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, !1);
    else if (a.attachEvent) a.attachEvent("on" + b, c);
    else throw "Add event handler for " + b + " failed.";
  };
  Tu = {
    token: 1,
    id_token: 1
  };
  Uu = function() {
    var a = navigator.userAgent.toLowerCase();
    return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
  };
  _.Vu = window.JSON;
  Wu = function(a) {
    this.UE = a || [];
    this.Yb = {}
  };
  Wu.prototype.addEventListener = function(a, b) {
    if (!(0 <= Nu(this.UE, a))) throw "Unrecognized event type: " + a;
    if (!Pu(b)) throw "The listener for event '" + a + "' is not a function.";
    this.Yb[a] || (this.Yb[a] = []);
    0 > Nu(this.Yb[a], b) && this.Yb[a].push(b)
  };
  Wu.prototype.removeEventListener = function(a, b) {
    if (!(0 <= Nu(this.UE, a))) throw "Unrecognized event type: " + a;
    Pu(b) && this.Yb[a] && this.Yb[a].length && (b = Nu(this.Yb[a], b), 0 <= b && this.Yb[a].splice(b, 1))
  };
  Wu.prototype.dispatchEvent = function(a) {
    var b = a.type;
    if (!(b && 0 <= Nu(this.UE, b))) throw "Failed to dispatch unrecognized event type: " + b;
    if (this.Yb[b] && this.Yb[b].length)
      for (var c = 0, d = this.Yb[b].length; c < d; c++) this.Yb[b][c](a)
  };
  var Xu, Yu, Zu, cv, dv, uv, vv, xv, yv, Av, Jv;
  Xu = {};
  Yu = {};
  Zu = {
    google: {
      authServerUrl: "https://accounts.google.com/o/oauth2/auth",
      idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
    }
  };
  _.$u = function(a, b) {
    if (a = Zu[a]) return a[b]
  };
  _.av = function(a, b) {
    if (!a) throw Error("N");
    if (!b.authServerUrl) throw Error("O");
    if (!b.idpIFrameUrl) throw Error("P");
    Zu[a] = {
      authServerUrl: b.authServerUrl,
      idpIFrameUrl: b.idpIFrameUrl
    }
  };
  _.bv = void 0;
  cv = function(a) {
    a.style.position = "absolute";
    a.style.width = "1px";
    a.style.height = "1px";
    a.style.left = "-9999px";
    a.style.top = "-9999px";
    a.style.right = "-9999px";
    a.style.bottom = "-9999px";
    a.style.display = "none";
    a.setAttribute("aria-hidden", "true")
  };
  dv = function() {
    this.W1 = window;
    this.Xt = this.ol = this.Nr = this.kh = null
  };
  dv.prototype.open = function(a, b, c, d) {
    ev(this);
    this.Nr ? (this.ol && (this.ol(), this.ol = null), fv(this)) : this.Nr = "authPopup" + Math.floor(1E6 * Math.random() + 1);
    a: {
      this.kh = this.W1.open(a, this.Nr, b);
      try {
        this.kh.focus();
        if (this.kh.closed || "undefined" == typeof this.kh.closed) throw Error("R");
        _.bv = this.kh
      } catch (e) {
        d && setTimeout(d, 0);
        this.kh = null;
        break a
      }
      c && (this.ol = c, gv(this))
    }
  };
  var ev = function(a) {
      try {
        if (null == a.kh || a.kh.closed) a.kh = null, a.Nr = null, fv(a), a.ol && (a.ol(), a.ol = null)
      } catch (b) {
        a.kh = null, a.Nr = null, fv(a)
      }
    },
    gv = function(a) {
      a.Xt = window.setInterval(function() {
        ev(a)
      }, 300)
    },
    fv = function(a) {
      a.Xt && (window.clearInterval(a.Xt), a.Xt = null)
    };
  Yu = Yu || {};
  var hv = function(a, b) {
    this.Gb = a;
    this.KB = b;
    this.kd = null;
    this.Sl = !1
  };
  hv.prototype.start = function() {
    if (!this.Sl && !this.kd) {
      var a = this;
      this.kd = window.setTimeout(function() {
        a.clear();
        a.Sl || (a.Gb(), a.Sl = !0)
      }, Yu.UI(this.KB))
    }
  };
  hv.prototype.clear = function() {
    this.kd && (window.clearTimeout(this.kd), this.kd = null)
  };
  var iv = function(a, b) {
    var c = Yu.vp;
    this.NW = Yu.gp;
    this.cO = c;
    this.Gb = a;
    this.KB = b;
    this.kd = null;
    this.Sl = !1;
    var d = this;
    this.dO = function() {
      document[d.NW] || (d.clear(), d.start())
    }
  };
  iv.prototype.start = function() {
    if (!this.Sl && !this.kd) {
      Su(document, this.cO, this.dO);
      var a = this;
      this.kd = window.setTimeout(function() {
        a.clear();
        a.Sl || (a.Gb(), a.Sl = !0)
      }, Yu.UI(this.KB))
    }
  };
  iv.prototype.clear = function() {
    var a = this.cO,
      b = this.dO,
      c = document;
    if (c.removeEventListener) c.removeEventListener(a, b, !1);
    else if (c.detachEvent) c.detachEvent("on" + a, b);
    else throw "Remove event handler for " + a + " failed.";
    this.kd && (window.clearTimeout(this.kd), this.kd = null)
  };
  Yu.gp = null;
  Yu.vp = null;
  Yu.jX = function() {
    var a = document;
    "undefined" !== typeof a.hidden ? (Yu.gp = "hidden", Yu.vp = "visibilitychange") : "undefined" !== typeof a.msHidden ? (Yu.gp = "msHidden", Yu.vp = "msvisibilitychange") : "undefined" !== typeof a.webkitHidden && (Yu.gp = "webkitHidden", Yu.vp = "webkitvisibilitychange")
  };
  Yu.jX();
  Yu.AS = function(a, b) {
    return Yu.gp && Yu.vp ? new iv(a, b) : new hv(a, b)
  };
  Yu.UI = function(a) {
    return Math.max(1, a - (new Date).getTime())
  };
  var jv = function(a, b) {
      document.cookie = "G_ENABLED_IDPS=" + a + ";domain=." + b + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/"
    },
    kv = function() {
      function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = m = 0
      }

      function b(p) {
        for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
        for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var u = e[1],
          v = e[2],
          w = e[3],
          z = e[4];
        for (r = 0; 80 > r; r++) {
          if (40 > r)
            if (20 > r) {
              var B = w ^ u & (v ^ w);
              var A = 1518500249
            } else B =
              u ^ v ^ w, A = 1859775393;
          else 60 > r ? (B = u & v | w & (u | v), A = 2400959708) : (B = u ^ v ^ w, A = 3395469782);
          B = ((p << 5 | p >>> 27) & 4294967295) + B + z + A + t[r] & 4294967295;
          z = w;
          w = v;
          v = (u << 30 | u >>> 2) & 4294967295;
          u = p;
          p = B
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + u & 4294967295;
        e[2] = e[2] + v & 4294967295;
        e[3] = e[3] + w & 4294967295;
        e[4] = e[4] + z & 4294967295
      }

      function c(p, t) {
        if ("string" === typeof p) {
          p = unescape(encodeURIComponent(p));
          for (var r = [], u = 0, v = p.length; u < v; ++u) r.push(p.charCodeAt(u));
          p = r
        }
        t || (t = p.length);
        r = 0;
        if (0 == m)
          for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
        for (; r <
          t;)
          if (f[m++] = p[r++], n++, 64 == m)
            for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
      }

      function d() {
        var p = [],
          t = 8 * n;
        56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
        for (var r = 63; 56 <= r; r--) f[r] = t & 255, t >>>= 8;
        b(f);
        for (r = t = 0; 5 > r; r++)
          for (var u = 24; 0 <= u; u -= 8) p[t++] = e[r] >> u & 255;
        return p
      }
      for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
      var m, n;
      a();
      return {
        reset: a,
        update: c,
        digest: d,
        Rg: function() {
          for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
          return t
        }
      }
    },
    lv =
    window.crypto,
    mv = !1,
    nv = 0,
    ov = 1,
    pv = 0,
    qv = "",
    rv = function(a) {
      a = a || window.event;
      var b = a.screenX + a.clientX << 16;
      b += a.screenY + a.clientY;
      b *= (new Date).getTime() % 1E6;
      ov = ov * b % pv;
      if (3 == ++nv)
        if (a = window, b = rv, a.removeEventListener) a.removeEventListener("mousemove", b, !1);
        else if (a.detachEvent) a.detachEvent("onmousemove", b);
      else throw Error("S`mousemove");
    },
    sv = function(a) {
      var b = kv();
      b.update(a);
      return b.Rg()
    };
  mv = !!lv && "function" == typeof lv.getRandomValues;
  mv || (pv = 1E6 * (screen.width * screen.width + screen.height), qv = sv(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + Math.random()), Su(window, "mousemove", rv));
  Xu = Xu || {};
  Xu.kP = "ssIFrame_";
  _.tv = function(a, b) {
    this.Db = a;
    if (!this.Db) throw Error("T");
    a = _.$u(a, "idpIFrameUrl");
    if (!a) throw Error("U");
    this.LJ = a;
    if (!b) throw Error("V");
    this.xm = b;
    a = this.LJ;
    b = document.createElement("a");
    b.setAttribute("href", a);
    a = [b.protocol, "//", b.hostname];
    "http:" == b.protocol && "" != b.port && "0" != b.port && "80" != b.port ? (a.push(":"), a.push(b.port)) : "https:" == b.protocol && "" != b.port && "0" != b.port && "443" != b.port && (a.push(":"), a.push(b.port));
    this.wB = a.join("");
    this.n_ = [location.protocol, "//", location.host].join("");
    this.vB =
      this.Nn = !1;
    this.HJ = null;
    this.$v = [];
    this.no = [];
    this.Hi = {};
    this.Vl = void 0
  };
  _.tv.prototype.show = function() {
    var a = this.Vl;
    a.style.position = "fixed";
    a.style.width = "100%";
    a.style.height = "100%";
    a.style.left = "0px";
    a.style.top = "0px";
    a.style.right = "0px";
    a.style.bottom = "0px";
    a.style.display = "block";
    a.style.zIndex = "9999999";
    a.style.overflow = "hidden";
    a.setAttribute("aria-hidden", "false")
  };
  _.tv.prototype.lc = function() {
    cv(this.Vl)
  };
  _.tv.prototype.Fv = function(a) {
    if (this.Nn) a && a(this);
    else {
      if (!this.Vl) {
        var b = Xu.kP + this.Db;
        var c = this.Db;
        var d = location.hostname;
        var e, f = document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
        f && 2 < f.length && (e = f[2]);
        (f = e && 0 <= Nu(e.split("|"), c)) ? jv(e, d): jv(e ? e + "|" + c : c, d);
        c = !f;
        f = this.LJ;
        var g = this.n_;
        d = this.xm;
        e = document.createElement("iframe");
        e.setAttribute("id", b);
        b = "allow-scripts allow-same-origin";
        document.requestStorageAccess && Pu(document.requestStorageAccess) && (b += " allow-storage-access-by-user-activation");
        e.setAttribute("sandbox", b);
        cv(e);
        e.setAttribute("frame-border", "0");
        b = [f, "#origin=", encodeURIComponent(g)];
        b.push("&rpcToken=");
        b.push(encodeURIComponent(d));
        c && b.push("&clearCache=1");
        _.Lu && b.push("&debug=1");
        document.body.appendChild(e);
        e.setAttribute("src", b.join(""));
        this.Vl = e
      }
      a && this.$v.push(a)
    }
  };
  _.tv.prototype.Fl = function() {
    return this.HJ
  };
  uv = function(a) {
    for (var b = 0; b < a.$v.length; b++) a.$v[b](a);
    a.$v = []
  };
  _.wv = function(a, b, c, d) {
    if (a.Nn) {
      if (a.Nn && a.vB) throw a = "Failed to communicate with IDP IFrame due to unitialization error: " + a.Fl(), Mu(a), Error(a);
      vv(a, {
        method: b,
        params: c
      }, d)
    } else a.no.push({
      rpc: {
        method: b,
        params: c
      },
      callback: d
    }), a.Fv()
  };
  vv = function(a, b, c) {
    if (c) {
      for (var d = b.id; !d || a.Hi[d];) d = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
      b.id = d;
      a.Hi[d] = c
    }
    b.rpcToken = a.xm;
    a.Vl.contentWindow.postMessage(_.Vu.stringify(b), a.wB)
  };
  xv = function(a) {
    if (a && 0 <= a.indexOf("::")) throw Error("W");
  };
  _.tv.prototype.Vh = function(a, b, c, d, e, f, g, k) {
    xv(f);
    b = _.Qu(b);
    _.wv(this, "getTokenResponse", {
      clientId: a,
      loginHint: c,
      request: b,
      sessionSelector: d,
      forceRefresh: g,
      skipCache: k,
      id: f
    }, e)
  };
  _.tv.prototype.Ev = function(a, b, c, d, e) {
    b = _.Qu(b);
    _.wv(this, "listIdpSessions", {
      clientId: a,
      request: b,
      sessionSelector: c,
      forceRefresh: e
    }, d)
  };
  yv = function(a, b, c) {
    xv(b.identifier);
    _.wv(a, "getSessionSelector", b, c)
  };
  _.zv = function(a, b, c, d, e) {
    xv(b.identifier);
    _.wv(a, "setSessionSelector", {
      domain: b.domain,
      crossSubDomains: b.crossSubDomains,
      policy: b.policy,
      id: b.id,
      hint: d,
      disabled: !!c
    }, e)
  };
  Av = function(a, b, c) {
    _.wv(a, "monitorClient", {
      clientId: b
    }, c)
  };
  _.tv.prototype.Vr = _.fa(25);
  _.tv.prototype.Yw = function(a, b) {
    _.wv(this, "showDialog", {
      V$: a
    }, b)
  };
  _.tv.prototype.Mp = _.fa(27);
  Xu.ev = {};
  Xu.CA = function(a) {
    return Xu.ev[a]
  };
  Xu.Fv = function(a, b) {
    var c = Xu.CA(a);
    if (!c) {
      c = String;
      if (mv) {
        var d = new window.Uint32Array(1);
        lv.getRandomValues(d);
        d = Number("0." + d[0])
      } else d = ov, d += parseInt(qv.substr(0, 20), 16), qv = sv(qv), d /= pv + Math.pow(16, 20);
      c = c(2147483647 * d);
      c = new _.tv(a, c);
      Xu.ev[a] = c
    }
    c.Fv(b)
  };
  Xu.aU = function(a) {
    for (var b in Xu.ev) {
      var c = Xu.CA(b);
      if (c && c.Vl && c.Vl.contentWindow == a.source && c.wB == a.origin) return c
    }
  };
  Xu.LU = function(a) {
    for (var b in Xu.ev) {
      var c = Xu.CA(b);
      if (c && c.wB == a) return c
    }
  };
  Xu = Xu || {};
  var Cv = function() {
    var a = [],
      b;
    for (b in Bv) a.push(Bv[b]);
    Wu.call(this, a);
    this.tk = {};
    Mu("EventBus is ready.")
  };
  Ou(Cv, Wu);
  var Bv = {
      JQ: "sessionSelectorChanged",
      Yx: "sessionStateChanged",
      Dx: "authResult",
      TO: "displayIFrame"
    },
    Ev = function(a) {
      var b = Dv;
      a && (b.tk[a] || (b.tk[a] = []))
    },
    Fv = function(a, b, c) {
      return b && a.tk[b] && 0 <= Nu(a.tk[b], c)
    };
  _.h = Cv.prototype;
  _.h.tZ = function(a) {
    var b, c = !!a.source && (a.source.opener === window || a.source === _.bv);
    if (b = c ? Xu.LU(a.origin) : Xu.aU(a)) {
      try {
        var d = _.Vu.parse(a.data)
      } catch (e) {
        Mu("Bad event, an error happened when parsing data.");
        return
      }
      if (!c) {
        if (!d || !d.rpcToken || d.rpcToken != b.xm) {
          Mu("Bad event, no RPC token.");
          return
        }
        if (d.id && !d.method) {
          c = d;
          if (a = b.Hi[c.id]) delete b.Hi[c.id], a(c.result, c.error);
          return
        }
      }
      "fireIdpEvent" != d.method ? Mu("Bad IDP event, method unknown.") : (a = d.params) && a.type && this.KJ[a.type] ? (d = this.KJ[a.type],
        c && !d.ER ? Mu("Bad IDP event. Source window cannot be a popup.") : d.Uo && !d.Uo.call(this, b, a) ? Mu("Bad IDP event.") : d.Be.call(this, b, a)) : Mu("Bad IDP event.")
    } else Mu("Bad event, no corresponding Idp Stub.")
  };
  _.h.N_ = function(a, b) {
    return Fv(this, a.Db, b.clientId)
  };
  _.h.M_ = function(a, b) {
    b = b.clientId;
    return !b || Fv(this, a.Db, b)
  };
  _.h.QR = function(a, b) {
    return Fv(this, a.Db, b.clientId)
  };
  _.h.BY = function(a) {
    a.Nn = !0;
    uv(a);
    for (var b = 0; b < a.no.length; b++) vv(a, a.no[b].rpc, a.no[b].callback);
    a.no = []
  };
  _.h.AY = function(a, b) {
    b = {
      error: b.error
    };
    a.Nn = !0;
    a.vB = !0;
    a.HJ = b;
    a.no = [];
    uv(a)
  };
  _.h.xw = function(a, b) {
    b.originIdp = a.Db;
    this.dispatchEvent(b)
  };
  var Dv = new Cv,
    Gv = Dv,
    Hv = {};
  Hv.idpReady = {
    Be: Gv.BY
  };
  Hv.idpError = {
    Be: Gv.AY
  };
  Hv.sessionStateChanged = {
    Be: Gv.xw,
    Uo: Gv.N_
  };
  Hv.sessionSelectorChanged = {
    Be: Gv.xw,
    Uo: Gv.M_
  };
  Hv.authResult = {
    Be: Gv.xw,
    Uo: Gv.QR,
    ER: !0
  };
  Hv.displayIFrame = {
    Be: Gv.xw
  };
  Dv.KJ = Hv || {};
  Su(window, "message", function(a) {
    Dv.tZ.call(Dv, a)
  });
  _.Iv = function(a, b) {
    this.fe = !1;
    if (!a) throw Error("X");
    var c = [],
      d;
    for (d in a) c.push(a[d]);
    Wu.call(this, c);
    this.Gc = [location.protocol, "//", location.host].join("");
    this.Vc = b.crossSubDomains ? b.domain || this.Gc : this.Gc;
    if (!b) throw Error("Y");
    if (!b.idpId) throw Error("Z");
    if (!_.$u(b.idpId, "authServerUrl") || !_.$u(b.idpId, "idpIFrameUrl")) throw Error("$`" + b.idpId);
    this.Db = b.idpId;
    this.Wb = void 0;
    this.HS = !!b.disableTokenRefresh;
    this.zT = !!b.forceTokenRefresh;
    this.Q0 = !!b.skipTokenCache;
    this.setOptions(b);
    this.Vp = [];
    this.Yl = this.hK = !1;
    this.Rn = void 0;
    this.SL();
    this.Yc = void 0;
    var e = this,
      f = function() {
        Mu("Token Manager is ready.");
        if (e.Vp.length)
          for (var g = 0; g < e.Vp.length; g++) e.Vp[g].call(e);
        e.hK = !0;
        e.Vp = []
      };
    Xu.Fv(this.Db, function(g) {
      e.Yc = g;
      g.Nn && g.vB ? (e.Yl = !0, e.Rn = g.Fl(), e.Wv(e.Rn)) : e.Wb ? Av(e.Yc, e.Wb, function(k) {
        if (k) {
          k = e.Db;
          var l = e.Wb,
            m = Dv;
          k && l && (m.tk[k] || (m.tk[k] = []), 0 > Nu(m.tk[k], l) && m.tk[k].push(l));
          f()
        } else e.Rn = {
          error: "Not a valid origin for the client: " + e.Gc + " has not been whitelisted for client ID " + e.Wb +
            ". Please go to https://console.developers.google.com/ and whitelist this origin for your project's client ID."
        }, e.Yl = !0, e.Wv(e.Rn)
      }) : (Ev(e.Db), f())
    })
  };
  Ou(_.Iv, Wu);
  _.Iv.prototype.setOptions = function() {};
  _.Iv.prototype.SL = function() {};
  _.Iv.prototype.Wv = function() {};
  _.Iv.prototype.Fl = function() {
    return this.Rn
  };
  Jv = function(a, b, c) {
    return function() {
      b.apply(a, c)
    }
  };
  _.Kv = function(a, b, c) {
    if (a.hK) b.apply(a, c);
    else {
      if (a.Yl) throw a.Rn;
      a.Vp.push(Jv(a, b, c))
    }
  };
  _.Iv.prototype.cH = _.fa(28);
  _.Iv.prototype.Mp = _.fa(26);
  _.Mv = function(a, b) {
    _.Iv.call(this, a, b);
    this.CL = new dv;
    this.lj = this.lm = null;
    Lv(this)
  };
  Ou(_.Mv, _.Iv);
  _.Mv.prototype.setOptions = function() {};
  var Nv = function(a, b) {
      a.ee = {
        crossSubDomains: !!b.crossSubDomains,
        id: b.sessionSelectorId,
        domain: a.Vc
      };
      b.crossSubDomains && (a.ee.policy = b.policy)
    },
    Ov = function(a, b) {
      if (!b.authParameters) throw Error("aa");
      if (!b.authParameters.scope) throw Error("ba");
      if (!b.authParameters.response_type) throw Error("ca");
      a.Bp = b.authParameters;
      a.Bp.redirect_uri || (a.Bp.redirect_uri = [location.protocol, "//", location.host, location.pathname].join(""));
      a.fi = _.Qu(b.rpcAuthParameters || a.Bp);
      if (!a.fi.scope) throw Error("da");
      if (!a.fi.response_type) throw Error("ea");
      a: {
        var c = a.fi.response_type.split(" ");
        for (var d = 0, e = c.length; d < e; d++)
          if (c[d] && !Tu[c[d]]) {
            c = !0;
            break a
          } c = !1
      }
      if (c) throw Error("fa");
      b.enableSerialConsent && (a.fi.enable_serial_consent = !0);
      b.authResultIdentifier && (a.RR = b.authResultIdentifier);
      b.spec_compliant && (a.fi.spec_compliant = b.spec_compliant)
    };
  _.Mv.prototype.SL = function() {
    var a = this;
    Dv.addEventListener(Bv.JQ, function(b) {
      a.fe && a.ee && b.originIdp == a.Db && !b.crossSubDomains == !a.ee.crossSubDomains && b.domain == a.ee.domain && b.id == a.ee.id && a.nL(b)
    });
    Dv.addEventListener(Bv.Yx, function(b) {
      a.fe && b.originIdp == a.Db && b.clientId == a.Wb && a.oL(b)
    });
    Dv.addEventListener(Bv.Dx, function(b) {
      _.bv = void 0;
      a.fe && b.originIdp == a.Db && b.clientId == a.Wb && b.id == a.ij && (a.lm && (window.clearTimeout(a.lm), a.lm = null), a.ij = void 0, a.Br(b))
    });
    Dv.addEventListener(Bv.TO, function(b) {
      a.fe &&
        b.originIdp == a.Db && (b.lc ? a.Yc.lc() : a.Yc.show())
    })
  };
  _.Mv.prototype.nL = function() {};
  _.Mv.prototype.oL = function() {};
  _.Mv.prototype.Br = function() {};
  var Qv = function(a, b) {
      Pv(a);
      a.HS || (a.lj = Yu.AS(function() {
        a.Vh(!0)
      }, b - 3E5), navigator.onLine && a.lj.start())
    },
    Pv = function(a) {
      a.lj && (a.lj.clear(), a.lj = null)
    },
    Lv = function(a) {
      var b = window;
      Uu() && (b = document.body);
      Su(b, "online", function() {
        a.lj && a.lj.start()
      });
      Su(b, "offline", function() {
        a.lj && a.lj.clear()
      })
    };
  _.h = _.Mv.prototype;
  _.h.Vh = function() {};
  _.h.Yw = function(a, b) {
    this.Yc.Yw(a, b)
  };
  _.h.XK = _.fa(29);
  _.h.QX = function(a, b) {
    if (!this.Wb) throw Error("ja");
    this.Yc.Ev(this.Wb, this.fi, this.ee, a, b)
  };
  _.h.Ev = function(a, b) {
    _.Kv(this, this.QX, [a, b])
  };
  _.Sv = function(a) {
    this.Zd = void 0;
    this.Sg = !1;
    this.Fo = void 0;
    _.Mv.call(this, _.Rv, a)
  };
  Ou(_.Sv, _.Mv);
  _.Rv = {
    GF: "noSessionBound",
    rp: "userLoggedOut",
    pO: "activeSessionChanged",
    Yx: "sessionStateChanged",
    eR: "tokenReady",
    dR: "tokenFailed",
    Dx: "authResult",
    ERROR: "error"
  };
  _.Sv.prototype.setOptions = function(a) {
    if (!a.clientId) throw Error("ka");
    this.Wb = a.clientId;
    this.Ca = a.id;
    Nv(this, a);
    Ov(this, a)
  };
  _.Sv.prototype.Wv = function(a) {
    this.dispatchEvent({
      type: _.Rv.ERROR,
      error: "idpiframe_initialization_failed",
      details: a.error,
      idpId: this.Db
    })
  };
  var Tv = function(a) {
    Pv(a);
    a.Fo = void 0;
    a.WB = void 0
  };
  _.h = _.Sv.prototype;
  _.h.nL = function(a) {
    var b = a.newValue || {};
    if (this.Zd != b.hint || this.Sg != !!b.disabled) {
      a = this.Zd;
      var c = !this.Zd || this.Sg;
      Tv(this);
      this.Zd = b.hint;
      this.Sg = !!b.disabled;
      (b = !this.Zd || this.Sg) && !c ? this.dispatchEvent({
        type: _.Rv.rp,
        idpId: this.Db
      }) : b || (a != this.Zd && this.dispatchEvent({
        type: _.Rv.pO,
        idpId: this.Db
      }), this.Zd && this.Vh())
    }
  };
  _.h.oL = function(a) {
    this.Sg || (this.Zd ? a.user || this.Fo ? a.user == this.Zd && (this.Fo ? a.sessionState ? this.Fo = a.sessionState : (Tv(this), this.dispatchEvent({
      type: _.Rv.rp,
      idpId: this.Db
    })) : a.sessionState && (this.Fo = a.sessionState, this.Vh())) : this.Vh() : this.dispatchEvent({
      type: _.Rv.Yx,
      idpId: this.Db
    }))
  };
  _.h.Br = function(a) {
    this.dispatchEvent({
      type: _.Rv.Dx,
      authResult: a.authResult
    })
  };
  _.h.xq = _.fa(31);
  _.h.pq = function(a) {
    _.Kv(this, this.pA, [a])
  };
  _.h.pA = function(a) {
    yv(this.Yc, this.ee, a)
  };
  _.h.Zw = function(a, b, c) {
    if (!a) throw Error("la");
    Tv(this);
    this.Zd = a;
    this.Sg = !1;
    b && _.zv(this.Yc, this.ee, !1, this.Zd);
    this.fe = !0;
    this.Vh(c, !0)
  };
  _.h.start = function() {
    _.Kv(this, this.V0, [])
  };
  _.h.V0 = function() {
    var a = this.Wb == Ru("client_id") ? Ru("login_hint") : void 0;
    var b = this.Wb == Ru("client_id") ? Ru("state") : void 0;
    this.tC = b;
    if (a) window.history.replaceState ? window.history.replaceState(null, document.title, window.location.href.split("#")[0]) : window.location.href.hash = "", this.Zw(a, !0, !0);
    else {
      var c = this;
      this.pq(function(d) {
        c.fe = !0;
        d && d.hint ? (Tv(c), c.Zd = d.hint, c.Sg = !!d.disabled, c.Sg ? c.dispatchEvent({
          type: _.Rv.rp,
          idpId: c.Db
        }) : c.Zw(d.hint)) : (Tv(c), c.Zd = void 0, c.Sg = !(!d || !d.disabled), c.dispatchEvent({
          type: _.Rv.GF,
          autoOpenAuthUrl: !c.Sg,
          idpId: c.Db
        }))
      })
    }
  };
  _.h.jI = _.fa(32);
  _.h.Vh = function(a, b) {
    var c = this;
    this.Yc.Vh(this.Wb, this.fi, this.Zd, this.ee, function(d, e) {
      (e = e || d.error) ? "user_logged_out" == e ? (Tv(c), c.dispatchEvent({
        type: _.Rv.rp,
        idpId: c.Db
      })) : (c.WB = null, c.dispatchEvent({
        type: _.Rv.dR,
        idpId: c.Db,
        error: e
      })): (c.WB = d, c.Fo = d.session_state, Qv(c, d.expires_at), d.idpId = c.Db, b && c.tC && (d.state = c.tC, c.tC = void 0), c.dispatchEvent({
        type: _.Rv.eR,
        idpId: c.Db,
        response: d
      }))
    }, this.Ca, a)
  };
  _.h.Vr = _.fa(24);
  _.h.fM = _.fa(33);
  _.Uv = function(a) {
    this.dl = null;
    _.Mv.call(this, {}, a);
    this.fe = !0
  };
  Ou(_.Uv, _.Mv);
  _.h = _.Uv.prototype;
  _.h.setOptions = function(a) {
    if (!a.clientId) throw Error("ka");
    this.Wb = a.clientId;
    this.Ca = a.id;
    Nv(this, a);
    Ov(this, a)
  };
  _.h.Wv = function(a) {
    this.dl && (this.dl({
      authResult: {
        error: "idpiframe_initialization_failed",
        details: a.error
      }
    }), this.dl = null)
  };
  _.h.Br = function(a) {
    if (this.dl) {
      var b = this.dl;
      this.dl = null;
      b(a)
    }
  };
  _.h.xq = _.fa(30);
  _.h.pq = function(a) {
    this.Yl ? a(this.Fl()) : _.Kv(this, this.pA, [a])
  };
  _.h.pA = function(a) {
    yv(this.Yc, this.ee, a)
  };
  _.Vv = function(a, b, c) {
    a.Yl ? c(a.Fl()) : _.Kv(a, a.TY, [b, c])
  };
  _.Uv.prototype.TY = function(a, b) {
    this.Yc.Vh(this.Wb, this.fi, a, this.ee, function(c, d) {
      d ? b({
        error: d
      }) : b(c)
    }, this.Ca, this.zT, this.Q0)
  };
  _.Uv.prototype.zK = _.fa(34);

  var Wv = function(a, b, c) {
      if (!a.fe) throw Error("ga");
      b ? _.zv(a.Yc, a.ee, !0, void 0, c) : _.zv(a.Yc, a.ee, !0, a.Zd, c)
    },
    Xv = function(a) {
      if (!a.fe) throw Error("ga");
      return a.WB
    },
    Yv, Zv, $v, aw, bw, cw, dw, ew, fw, gw, jw, mw;
  _.Uv.prototype.zK = _.fd(34, function(a, b) {
    var c = this.Yc,
      d = this.Wb,
      e = this.ee,
      f = _.Qu(this.fi);
    delete f.response_type;
    _.wv(c, "getOnlineCode", {
      clientId: d,
      loginHint: a,
      request: f,
      sessionSelector: e
    }, b)
  });
  _.Sv.prototype.fM = _.fd(33, function(a) {
    Xv(this) && Xv(this).access_token && (this.Yc.Vr(this.Wb, Xv(this).access_token, a), Wv(this, !0))
  });
  _.Sv.prototype.jI = _.fd(32, function() {
    var a = this;
    this.pq(function(b) {
      b && b.hint ? b.disabled ? a.dispatchEvent({
        type: _.Rv.rp,
        idpId: a.Db
      }) : a.Vh(!0) : a.dispatchEvent({
        type: _.Rv.GF,
        idpId: a.Db
      })
    })
  });
  _.Sv.prototype.xq = _.fd(31, function() {
    var a = this;
    return function(b) {
      b && b.authResult && b.authResult.login_hint && a.Zw(b.authResult.login_hint, a.Sg || b.authResult.login_hint != a.Zd, !0)
    }
  });
  _.Uv.prototype.xq = _.fd(30, function(a) {
    var b = this;
    return function(c) {
      c && c.authResult && c.authResult.login_hint ? b.pq(function(d) {
        _.zv(b.Yc, b.ee, d && d.disabled, c.authResult.login_hint, function() {
          _.Vv(b, c.authResult.login_hint, a)
        })
      }) : a(c && c.authResult && c.authResult.error ? c.authResult : c && c.authResult && !c.authResult.login_hint ? {
        error: "wrong_response_type"
      } : {
        error: "unknown_error"
      })
    }
  });
  _.Mv.prototype.XK = _.fd(29, function() {
    this.Wb && _.wv(this.Yc, "startPolling", {
      clientId: this.Wb,
      origin: this.Gc,
      id: this.ij
    }, void 0)
  });
  _.tv.prototype.Vr = _.fd(25, function(a, b, c) {
    _.wv(this, "revoke", {
      clientId: a,
      token: b
    }, c)
  });
  _.Sv.prototype.Vr = _.fd(24, function(a) {
    _.Kv(this, this.fM, [a])
  });
  Yv = function() {
    var a = navigator.userAgent,
      b;
    if (b = !!a && -1 != a.indexOf("CriOS")) b = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1), b = 48 > b;
    return b
  };
  Zv = function() {
    var a = navigator.userAgent.toLowerCase();
    if (!(-1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android"))) return !1;
    var b = /version\/(\d+)\.(\d+)[\.0-9]*/.exec(navigator.userAgent.toLowerCase());
    if (!b || 3 > b.length) return !1;
    a = parseInt(b[1], 10);
    b = parseInt(b[2], 10);
    return 12 < a || 12 == a && 1 <= b
  };
  $v = function(a, b, c, d, e, f, g) {
    var k = _.$u(a, "authServerUrl");
    if (!k) throw Error("Q`" + a);
    a = _.Qu(d);
    a.response_type = g || "permission";
    a.client_id = c;
    a.ss_domain = b;
    if (f && f.extraQueryParams)
      for (var l in f.extraQueryParams) a[l] = f.extraQueryParams[l];
    e && Zv() && !a.prompt && (a.prompt = "select_account");
    b = k + (0 > k.indexOf("?") ? "?" : "&");
    c = [];
    for (var m in a)
      if (a.hasOwnProperty(m)) {
        e = a[m];
        if (null === e || void 0 === e) e = "";
        c.push(encodeURIComponent(m) + "=" + encodeURIComponent(e))
      } return b + c.join("&")
  };
  aw = function(a, b, c, d) {
    if (!a.Wb) throw Error("ha");
    a.ij = c || a.RR || "auth" + Math.floor(1E6 * Math.random() + 1);
    b = b || {};
    b.extraQueryParams = b.extraQueryParams || {};
    if (!b.extraQueryParams.redirect_uri) {
      var e = a.Gc.split("//");
      c = b.extraQueryParams;
      var f = e[0],
        g = f.indexOf(":");
      0 < g && (f = f.substring(0, g));
      e = ["storagerelay://", f, "/", e[1], "?"];
      e.push("id=" + a.ij);
      c.redirect_uri = e.join("")
    }
    return $v(a.Db, a.Vc, a.Wb, a.Bp, !0, b, d)
  };
  bw = function(a, b, c) {
    if (!a.Wb) throw Error("ha");
    return $v(a.Db, a.Vc, a.Wb, a.Bp, !1, b, c)
  };
  cw = function(a, b) {
    a.lm && window.clearTimeout(a.lm);
    a.lm = window.setTimeout(function() {
      a.ij == b && (_.bv = void 0, a.lm = null, a.ij = void 0, a.Br({
        authResult: {
          error: "popup_closed_by_user"
        }
      }))
    }, 1E3)
  };
  dw = function(a, b, c) {
    if (!a.Wb) throw Error("ia");
    c = c || {};
    c = aw(a, c.sessionMeta, c.oneTimeId, c.responseType);
    (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject || Yv()) && _.Kv(a, a.XK, []);
    var d = a.ij;
    a.CL.open(c, b, function() {
      a.ij == d && cw(a, d)
    }, function() {
      a.ij = void 0;
      a.Br({
        authResult: {
          error: "popup_blocked_by_browser"
        }
      })
    })
  };
  ew = function(a) {
    _.Kv(a, a.jI, [])
  };
  fw = function(a, b, c) {
    a.Yl ? c(a.Fl()) : _.Kv(a, a.zK, [b, c])
  };
  gw = function(a) {
    return Array.prototype.concat.apply([], arguments)
  };
  _.hw = function(a) {
    for (var b = [], c = 0, d = 0; c < a.length;) {
      var e = a[c++];
      if (128 > e) b[d++] = String.fromCharCode(e);
      else if (191 < e && 224 > e) {
        var f = a[c++];
        b[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
      } else if (239 < e && 365 > e) {
        f = a[c++];
        var g = a[c++],
          k = a[c++];
        e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63) - 65536;
        b[d++] = String.fromCharCode(55296 + (e >> 10));
        b[d++] = String.fromCharCode(56320 + (e & 1023))
      } else f = a[c++], g = a[c++], b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
    }
    return b.join("")
  };
  _.iw = function(a, b) {
    function c(l) {
      for (; d < a.length;) {
        var m = a.charAt(d++),
          n = _.jh[m];
        if (null != n) return n;
        if (!_.Me(m)) throw Error("w`" + m);
      }
      return l
    }
    _.lh();
    for (var d = 0;;) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        k = c(64);
      if (64 === k && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
    }
  };
  jw = function(a) {
    var b = [];
    _.iw(a, function(c) {
      b.push(c)
    });
    return b
  };
  _.kw = function(a, b) {
    _.Fh[b || "token"] = a
  };
  _.lw = function(a) {
    delete _.Fh[a || "token"]
  };
  mw = function() {
    var a = window.crypto || window.msCrypto;
    a && a.getRandomValues && (this.PE = !0, this.rn = Infinity);
    if (1 > this.rn) {
      var b = this.yk;
      a = this.rn;
      this.yk = "";
      this.rn = 1;
      a = Math.max(0, a);
      if (!this.PE) {
        b = this.QC + b;
        var c = new _.Ih;
        c.update(b);
        b = String.fromCharCode.apply(String, c.digest());
        this.kw += a;
        this.kw >= this.rn ? (c.reset(), c.update("SEED_SALT:" + b + this.yk), this.yk = String.fromCharCode.apply(String, c.digest()), this.QC = "", this.kw = 0) : this.QC = b
      }
    }
  };
  _.h = mw.prototype;
  _.h.PE = !1;
  _.h.yk = "";
  _.h.QC = "";
  _.h.kw = 0;
  _.h.rn = -1;
  var pw = function(a) {
      var b = nw,
        c = [];
      if (b.PE) a = new window.Uint8Array(Math.min(65536, a || 1)), (window.crypto || window.msCrypto).getRandomValues(a), c = [].slice.call(a);
      else {
        if (0 > b.rn || 0 == b.yk.length) throw new ow;
        var d = new _.Ih;
        d.update("RANDOM_SALT:" + b.yk);
        var e = d.digest();
        null !== e && (d.reset(), d.update("SEED_SALT:" + b.yk), b.yk = String.fromCharCode.apply(String, d.digest()), c = e.slice(0, a || e.length))
      }
      return c
    },
    ow = function() {};
  _.H(ow, Error);
  ow.prototype.name = "Insufficient Entropy";
  _.Vu = {
    parse: function(a) {
      a = _.Ef("[" + String(a) + "]");
      if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
      return a[0]
    },
    stringify: function(a) {
      return _.Ff(a)
    }
  };
  _.Uv.prototype.bA = function(a, b) {
    _.Kv(this, this.kT, [a, b])
  };
  _.Uv.prototype.kT = function(a, b) {
    this.Yc.bA(this.Wb, a, this.fi, this.ee, b)
  };
  _.tv.prototype.bA = function(a, b, c, d, e) {
    c = _.Qu(c);
    _.wv(this, "gsi:fetchLoginHint", {
      clientId: a,
      loginHint: b,
      request: c,
      sessionSelector: d
    }, e)
  };
  var qw, rw = ["client_id", "cookie_policy", "scope"],
    sw = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection gsiwebsdk".split(" "),
    tw = ["authuser", "after_redirect", "access_type", "hl"],
    uw = ["login_hint", "prompt"],
    vw = {
      clientid: "client_id",
      cookiepolicy: "cookie_policy"
    },
    ww = ["approval_prompt", "authuser", "login_hint",
      "prompt", "hd"
    ],
    xw = ["login_hint", "g-oauth-window", "status"],
    yw = Math.min(_.R("oauth-flow/authWindowWidth", 599), screen.width - 20),
    zw = Math.min(_.R("oauth-flow/authWindowHeight", 600), screen.height - 30);
  var Aw = function(a) {
    _.pb.call(this, a)
  };
  _.Nq(Aw, _.pb);
  Aw.prototype.name = "gapi.auth2.ExternallyVisibleError";
  var Bw = function() {};
  Bw.prototype.select = function(a, b) {
    if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0], a.login_hint)) {
      b(a);
      return
    }
    b()
  };
  var Cw = function() {};
  Cw.prototype.select = function(a, b) {
    if (a.sessions && a.sessions.length)
      for (var c = 0; c < a.sessions.length; c++) {
        var d = a.sessions[c];
        if (d.login_hint) {
          b(d);
          return
        }
      }
    b()
  };
  var Dw = function(a) {
    this.SR = a
  };
  Dw.prototype.select = function(a, b) {
    if (a.sessions)
      for (var c = 0; c < a.sessions.length; c++) {
        var d = a.sessions[c];
        if (d.session_state && d.session_state.extraQueryParams && d.session_state.extraQueryParams.authuser == this.SR) {
          d.login_hint ? b(d) : b();
          return
        }
      }
    b()
  };
  var Ew = function(a) {
    this.Nd = a;
    this.Iw = []
  };
  Ew.prototype.select = function(a) {
    var b = 0,
      c = this,
      d = function(e) {
        if (e) a(e);
        else {
          var f = c.Iw[b];
          f ? (b++, c.Nd.Ev(function(g) {
            g ? f.select(g, d) : d()
          })) : a()
        }
      };
    d()
  };
  var Fw = function(a) {
      a = new Ew(a);
      a.Iw.push(new Bw);
      return a
    },
    Gw = function(a) {
      a = new Ew(a);
      a.Iw.push(new Cw);
      return a
    },
    Hw = function(a, b) {
      void 0 === b || null === b ? b = Fw(a) : (a = new Ew(a), a.Iw.push(new Dw(b)), b = a);
      return b
    };
  var Iw = function(a) {
    this.Be = a;
    this.Wd = !0
  };
  Iw.prototype.remove = function() {
    this.Wd = !1
  };
  Iw.prototype.trigger = function() {};
  var Jw = function(a) {
      this.remove = function() {
        a.remove()
      };
      this.trigger = function() {
        a.trigger()
      }
    },
    Kw = function() {
      this.Yb = []
    };
  Kw.prototype.add = function(a) {
    this.Yb.push(a)
  };
  Kw.prototype.notify = function(a) {
    for (var b = this.Yb, c = [], d = 0; d < b.length; d++) {
      var e = b[d];
      e.Wd && (c.push(e), _.Dj(Lw(e.Be, a)))
    }
    this.Yb = c
  };
  var Lw = function(a, b) {
    return function() {
      a(b)
    }
  };
  var Nw = function(a) {
    this.ie = null;
    this.O1 = new Mw(this);
    this.Yb = new Kw;
    void 0 != a && this.set(a)
  };
  Nw.prototype.set = function(a) {
    a != this.ie && (this.ie = a, this.O1.value = a, this.Yb.notify(this.ie))
  };
  Nw.prototype.get = function() {
    return this.ie
  };
  Nw.prototype.U = function(a) {
    a = new Ow(this, a);
    this.Yb.add(a);
    return a
  };
  var Ow = function(a, b) {
    Iw.call(this, b);
    this.TX = a
  };
  _.H(Ow, Iw);
  Ow.prototype.trigger = function() {
    var a = this.Be;
    a(this.TX.get())
  };
  var Mw = function(a) {
    this.value = null;
    this.U = function(b) {
      return new Jw(a.U(b))
    }
  };
  var Pw = {
      x4: "fetch_basic_profile",
      O5: "login_hint",
      G7: "prompt",
      R7: "redirect_uri",
      i8: "scope",
      V9: "ux_mode",
      p9: "state"
    },
    Qw = function(a) {
      this.Ba = {};
      if (a && !_.Qq(a))
        if ("function" == typeof a.get) this.Ba = a.get();
        else
          for (var b in Pw) {
            var c = Pw[b];
            c in a && (this.Ba[c] = a[c])
          }
    };
  Qw.prototype.get = function() {
    return this.Ba
  };
  Qw.prototype.$M = function(a) {
    this.Ba.scope = a;
    return this
  };
  Qw.prototype.Iq = function() {
    return this.Ba.scope
  };
  var Rw = function(a, b) {
    var c = a.Ba.scope;
    b = gw(b.split(" "), c ? c.split(" ") : []);
    _.Le(b);
    a.Ba.scope = b.join(" ")
  };
  _.h = Qw.prototype;
  _.h.t0 = function(a) {
    this.Ba.prompt = a;
    return this
  };
  _.h.PU = function() {
    return this.Ba.prompt
  };
  _.h.Q_ = function() {
    _.Te("Property app_package_name no longer supported and was not set");
    return this
  };
  _.h.FT = function() {
    _.Te("Property app_package_name no longer supported")
  };
  _.h.kf = function(a) {
    this.Ba.state = a
  };
  _.h.getState = function() {
    return this.Ba.state
  };
  var Sw = function() {
      return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + yw, "height=" + zw, "top=" + (screen.height - zw) / 2, "left=" + (screen.width - yw) / 2].join()
    },
    Tw = function(a) {
      a = a && a.id_token;
      if (!a || !a.split(".")[1]) return null;
      a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
      return JSON.parse(_.hw(jw(a)))
    },
    Uw = function() {
      qw = _.R("auth2/idpValue", "google");
      var a = _.R("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth"),
        b = _.R("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
      _.av(qw, {
        authServerUrl: a,
        idpIFrameUrl: b
      })
    },
    Vw = function(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (d === b.length - 1) {
          a[e] = c;
          break
        }
        _.kb(a[e]) || (a[e] = {});
        a = a[e]
      }
    },
    Ww = function() {
      var a = window.location.origin;
      a || (a = window.location.protocol + "//" + window.location.host);
      return a
    };
  var Xw = function(a) {
    var b = a ? (b = Tw(a)) ? b.sub : null : null;
    this.Ca = b;
    this.tc = a ? _.tj(a) : null
  };
  _.h = Xw.prototype;
  _.h.getId = function() {
    return this.Ca
  };
  _.h.zA = function() {
    var a = Tw(this.tc);
    return a ? a.hd : null
  };
  _.h.Th = function() {
    return !!this.tc
  };
  _.h.fk = function(a) {
    if (a) return this.tc;
    a = Yw;
    var b = _.tj(this.tc);
    !a.nv || a.pB || a.BW || (delete b.access_token, delete b.scope);
    return b
  };
  _.h.dD = function() {
    return Yw.dD()
  };
  _.h.Cj = function() {
    this.tc = null
  };
  _.h.jU = function() {
    return this.tc ? this.tc.scope : null
  };
  _.h.update = function(a) {
    this.Ca = a.Ca;
    this.tc = a.tc;
    this.tc.id_token ? this.yt = new Zw(this.tc) : this.yt && (this.yt = null)
  };
  var $w = function(a) {
    return a.tc && "object" == typeof a.tc.session_state ? _.tj(a.tc.session_state.extraQueryParams || {}) : {}
  };
  _.h = Xw.prototype;
  _.h.kq = function() {
    var a = $w(this);
    return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
  };
  _.h.Bj = function(a) {
    var b = Yw,
      c = new Qw(a);
    b.pB = c.Iq() ? !0 : !1;
    Yw.nv && Rw(c, "openid profile email");
    return new _.Pj(function(d, e) {
      var f = $w(this);
      f.login_hint = this.getId();
      f.scope = c.Iq();
      ax(b, d, e, f)
    }, this)
  };
  _.h.Lq = function(a) {
    return new _.Pj(function(b, c) {
      var d = a || {},
        e = Yw;
      d.login_hint = this.getId();
      e.Lq(d).then(b, c)
    }, this)
  };
  _.h.jV = function(a) {
    return this.Bj(a)
  };
  _.h.disconnect = function() {
    return Yw.disconnect()
  };
  _.h.IT = function() {
    return this.yt
  };
  _.h.Zu = function(a) {
    if (!this.Th()) return !1;
    var b = this.tc && this.tc.scope ? this.tc.scope.split(" ") : "";
    return (0, _.xb)(a ? a.split(" ") : [], function(c) {
      return _.yb(b, c)
    })
  };
  var Zw = function(a) {
    a = Tw(a);
    this.CT = a.sub;
    this.xd = a.name;
    this.gV = a.given_name;
    this.iT = a.family_name;
    this.SJ = a.picture;
    this.hu = a.email
  };
  _.h = Zw.prototype;
  _.h.getId = function() {
    return this.CT
  };
  _.h.getName = function() {
    return this.xd
  };
  _.h.hU = function() {
    return this.gV
  };
  _.h.cU = function() {
    return this.iT
  };
  _.h.rU = function() {
    return this.SJ
  };
  _.h.Du = function() {
    return this.hu
  };
  var cx = function(a, b, c) {
      this.fm = b;
      this.pY = a;
      for (var d in a) a.hasOwnProperty(d) && bx(this, d);
      if (c && c.length)
        for (a = 0; a < c.length; a++) this[c[a]] = this.fm[c[a]]
    },
    bx = function(a, b) {
      a[b] = function() {
        return a.pY[b].apply(a.fm, arguments)
      }
    };
  cx.prototype.then = function(a, b, c) {
    var d = this;
    return _.Tj().then(function() {
      return dx(d.fm, a, b, c)
    })
  };
  _.Nj(cx);
  var ex;
  ex = function(a) {
    var b = location;
    if (a && "none" != a) return "single_host_origin" == a ? b.protocol + "//" + b.host : a
  };
  _.fx = function(a) {
    if (!a) throw new Aw("No cookiePolicy");
    var b = window.location.hostname;
    "single_host_origin" == a && (a = window.location.protocol + "//" + b);
    if ("none" == a) return null;
    var c = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
    if (!c) throw new Aw("Invalid cookiePolicy");
    a = c[2];
    c = c[1];
    var d = {};
    d.dotValue = a.split(".").length;
    d.isSecure = -1 != c.indexOf("https");
    d.domain = a;
    if (!_.Pq(b, "." + a) && !_.Pq(b, a)) throw new Aw("Invalid cookiePolicy domain");
    return d
  };
  var nw;
  nw = new mw;
  _.gx = function() {
    try {
      for (var a = [], b = 0; 64 > a.length && 128 > b;) a.push.apply(a, pw(64 - a.length)), b++;
      if (64 > a.length) throw new ow;
      var c = a.slice(0, 64)
    } catch (d) {
      for (c = [], a = 0; 64 > a; a++) c[a] = Math.floor(256 * Math.random())
    }
    return _.mh(c, 3).substring(0, 64)
  };
  var ix, hx, jx, kx, lx, mx, ox, tx, px, vx, wx, qx;
  ix = function(a) {
    var b = a || {},
      c = hx();
    (0, _.tb)(sw, function(d) {
      "undefined" === typeof b[d] && "undefined" !== typeof c[d] && (b[d] = c[d])
    });
    return b
  };
  hx = function() {
    for (var a = {}, b = document.getElementsByTagName("meta"), c = 0; c < b.length; ++c)
      if (b[c].name) {
        var d = b[c].name;
        if (0 == d.indexOf("google-signin-")) {
          d = d.substring(14);
          var e = b[c].content;
          vw[d] && (d = vw[d]);
          _.yb(sw, d) && e && (a[d] = "true" == e ? !0 : "false" == e ? !1 : e)
        }
      } return a
  };
  jx = function(a) {
    return String(a).replace(/_([a-z])/g, function(b, c) {
      return c.toUpperCase()
    })
  };
  kx = function(a) {
    (0, _.tb)(sw, function(b) {
      var c = jx(b);
      "undefined" !== typeof a[c] && "undefined" === typeof a[b] && (a[b] = a[c], delete a[c])
    })
  };
  lx = function(a) {
    a = ix(a);
    kx(a);
    a.cookie_policy || (a.cookie_policy = "single_host_origin");
    var b = sw + tw,
      c;
    for (c in a) 0 > b.indexOf(c) && delete a[c];
    return a
  };
  mx = function(a, b) {
    if (!a) throw new Aw("Empty initial options.");
    for (var c = 0; c < rw.length; ++c)
      if (!(b && "scope" == rw[c] || a[rw[c]])) throw new Aw("Missing required parameter '" + rw[c] + "'");
    _.fx(a.cookie_policy)
  };
  ox = function(a) {
    var b = {
      authParameters: {
        redirect_uri: void 0,
        response_type: "token id_token",
        scope: a.scope,
        "openid.realm": a.openid_realm
      },
      clientId: a.client_id,
      crossSubDomains: !0,
      domain: ex(a.cookie_policy),
      disableTokenRefresh: !!a.disable_token_refresh,
      idpId: qw
    };
    _.nx(b, a);
    (0, _.tb)(uw, function(c) {
      a[c] && (b.authParameters[c] = a[c])
    });
    "boolean" == typeof a.enable_serial_consent && (b.enableSerialConsent = a.enable_serial_consent);
    return b
  };
  _.nx = function() {};
  tx = function(a) {
    var b = a.client_id,
      c = a.cookie_policy,
      d = a.scope,
      e = a.openid_realm,
      f = a.hosted_domain,
      g = a.oidc_spec_compliant,
      k = a.nonce,
      l = px(a),
      m = {
        authParameters: {
          response_type: l,
          scope: d,
          "openid.realm": e
        },
        rpcAuthParameters: {
          response_type: l,
          scope: d,
          "openid.realm": e
        },
        clientId: b,
        crossSubDomains: !0,
        domain: ex(c),
        idpId: qw
      };
    f && (m.authParameters.hd = f, m.rpcAuthParameters.hd = f);
    g && (m.rpcAuthParameters.spec_compliant = g, k = k || _.gx());
    k && (m.authParameters.nonce = k, m.rpcAuthParameters.nonce = k, m.forceTokenRefresh = !0, m.skipTokenCache = !0);
    (0, _.tb)(uw.concat(tw), function(n) {
      a[n] && (m.authParameters[n] = a[n])
    });
    void 0 !== a.authuser && null !== a.authuser && (m.authParameters.authuser = a.authuser);
    "boolean" == typeof a.include_granted_scopes && (b = new qx(a.response_type || "token"), rx(b) && (m.authParameters.include_granted_scopes = a.include_granted_scopes), sx(b) && (m.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes, !1 === a.include_granted_scopes && (m.forceTokenRefresh = !0, m.skipTokenCache = !0)));
    "boolean" == typeof a.enable_serial_consent &&
      (m.enableSerialConsent = a.enable_serial_consent);
    return m
  };
  px = function(a) {
    a = new qx(a.response_type || "token");
    var b = [];
    sx(a) && b.push("token");
    ux(a, "id_token") && b.push("id_token");
    0 == b.length && (b = ["token", "id_token"]);
    return b.join(" ")
  };
  vx = ["permission", "id_token"];
  wx = /(^|[^_])token/;
  qx = function(a) {
    this.wo = [];
    this.GB(a)
  };
  qx.prototype.GB = function(a) {
    a ? ((0 <= a.indexOf("permission") || a.match(wx)) && this.wo.push("permission"), 0 <= a.indexOf("id_token") && this.wo.push("id_token"), 0 <= a.indexOf("code") && this.wo.push("code")) : this.wo = vx
  };
  var rx = function(a) {
      return ux(a, "code")
    },
    sx = function(a) {
      return ux(a, "permission")
    };
  qx.prototype.toString = function() {
    return this.wo.join(" ")
  };
  var ux = function(a, b) {
    var c = !1;
    (0, _.tb)(a.wo, function(d) {
      d == b && (c = !0)
    });
    return c
  };
  var Yw, xx, Ax, Cx, Dx, dx;
  Yw = null;
  _.yx = function() {
    return Yw ? xx() : null
  };
  xx = function() {
    return new cx(Ax.prototype, Yw, ["currentUser", "isSignedIn"])
  };
  Ax = function(a) {
    delete a.include_granted_scopes;
    this.Ba = ox(a);
    this.wS = a.cookie_policy;
    this.BW = !!a.scope;
    (this.nv = !1 !== a.fetch_basic_profile) && (this.Ba.authParameters.scope = Bx(this, "openid profile email"));
    this.Vq = a.hosted_domain;
    this.L1 = a.ux_mode || "popup";
    this.yZ = a.redirect_uri || null;
    Cx(this)
  };
  Cx = function(a) {
    a.currentUser = new Nw(new Xw(null));
    a.isSignedIn = new Nw(!1);
    a.Nd = new _.Sv(a.Ba);
    a.Un = null;
    a.uv = null;
    a.HX = new _.Pj(function(b, c) {
      this.Un = b;
      this.uv = c
    }, a);
    a.Zv = {};
    a.kr = !0;
    Dx(a);
    a.Nd.start()
  };
  Dx = function(a) {
    a.Nd.addEventListener("error", function(b) {
      a.kr && a.Un && (a.kr = !1, a.uv({
        error: b.error,
        details: b.details
      }), a.Un = null, a.uv = null)
    });
    a.Nd.addEventListener("authResult", function(b) {
      b && b.authResult && a.Se(b);
      a.Nd.xq()(b)
    });
    a.Nd.addEventListener("tokenReady", function(b) {
      var c = new Xw(b.response);
      if (a.Vq && a.Vq != c.zA()) a.Se({
        type: "tokenFailed",
        reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
        accountDomain: c.zA(),
        expectedDomain: a.Vq
      });
      else {
        a.currentUser.get().update(c);
        var d = a.currentUser;
        d.Yb.notify(d.ie);
        a.isSignedIn.set(!0);
        c = c.kq();
        (d = _.fx(a.wS)) && c && _.hi.set(["G_AUTHUSER_", "https:" === window.location.protocol && d.De ? "S" : "H", d.Dh].join(""), c, void 0, void 0, d.domain, d.isSecure);
        _.kw(b.response);
        a.Se(b)
      }
    });
    a.Nd.addEventListener("noSessionBound", function(b) {
      a.kr && b.autoOpenAuthUrl ? (a.kr = !1, Fw(a.Nd).select(function(c) {
        if (c && c.login_hint) {
          var d = a.Nd;
          _.Kv(d, d.Zw, [c.login_hint, !0])
        } else a.currentUser.set(new Xw(null)), a.isSignedIn.set(!1), _.lw(), a.Se(b)
      })) : (a.currentUser.set(new Xw(null)),
        a.isSignedIn.set(!1), _.lw(), a.Se(b))
    });
    a.Nd.addEventListener("tokenFailed", function(b) {
      a.Se(b)
    });
    a.Nd.addEventListener("userLoggedOut", function(b) {
      a.currentUser.get().Cj();
      var c = a.currentUser;
      c.Yb.notify(c.ie);
      a.isSignedIn.set(!1);
      _.lw();
      a.Se(b)
    })
  };
  dx = function(a, b, c, d) {
    return a.HX.then(function(e) {
      if (b) return b(e.hV)
    }, c, d)
  };
  Ax.prototype.Se = function(a) {
    if (a) {
      this.kr = !1;
      var b = a.type || "";
      if (this.Zv[b]) this.Zv[b](a);
      this.Un && (this.Un({
        hV: this
      }), this.uv = this.Un = null)
    }
  };
  var Ex = function(a, b) {
      _.Gb(b, function(c, d) {
        a.Zv[d] = function(e) {
          a.Zv = {};
          c(e)
        }
      })
    },
    ax = function(a, b, c, d) {
      d = _.tj(d);
      a.Vq && (d.hd = a.Vq);
      var e = d.ux_mode || a.L1;
      delete d.ux_mode;
      delete d.app_package_name;
      var f = {
        sessionMeta: {
          extraQueryParams: d
        },
        responseType: "permission id_token"
      };
      "redirect" == e ? (d.redirect_uri || (d.redirect_uri = a.yZ || Ww() + window.location.pathname), Fx(a, f)) : (delete d.redirect_uri, Gx(a, f), Ex(a, {
        authResult: function(g) {
          g.authResult && g.authResult.error ? c(g.authResult) : Ex(a, {
            tokenReady: function() {
              b(a.currentUser.get())
            },
            tokenFailed: c
          })
        }
      }))
    };
  Ax.prototype.Bj = function(a) {
    return new _.Pj(function(b, c) {
      var d = new Qw(a);
      this.pB = d.Iq() ? !0 : !1;
      this.nv ? (d.Ba.fetch_basic_profile = !0, Rw(d, "email profile openid")) : d.Ba.fetch_basic_profile = !1;
      var e = Bx(this, d.Iq());
      d.$M(e);
      ax(this, b, c, d.get())
    }, this)
  };
  Ax.prototype.Lq = function(a) {
    var b = a || {};
    this.pB = !!b.scope;
    a = Bx(this, b.scope);
    if ("" == a) return _.Uj({
      error: "Missing required parameter: scope"
    });
    var c = {
      scope: a,
      access_type: "offline",
      include_granted_scopes: !0
    };
    (0, _.tb)(ww, function(d) {
      null != b[d] && (c[d] = b[d])
    });
    c.hasOwnProperty("prompt") || c.hasOwnProperty("approval_prompt") || (c.prompt = "consent");
    return "postmessage" == b.redirect_uri || void 0 == b.redirect_uri ? Hx(this, c) : Ix(this, c, b.redirect_uri)
  };
  var Ix = function(a, b, c) {
      b.redirect_uri = c;
      Fx(a, {
        sessionMeta: {
          extraQueryParams: b
        },
        responseType: "code id_token"
      });
      return _.Tj({
        message: "Redirecting to IDP."
      })
    },
    Hx = function(a, b) {
      b.origin = Ww();
      delete b.redirect_uri;
      Gx(a, {
        sessionMeta: {
          extraQueryParams: b
        },
        responseType: "code permission id_token"
      });
      return new _.Pj(function(c, d) {
        Ex(this, {
          authResult: function(e) {
            (e = e && e.authResult) && e.code ? c({
              code: e.code
            }) : d(e && e.error ? e : {
              error: "unknown_error"
            })
          }
        })
      }, a)
    },
    Gx = function(a, b) {
      Vw(b, ["sessionMeta", "extraQueryParams",
        "gsiwebsdk"
      ], "2");
      dw(a.Nd, Sw(), b)
    },
    Fx = function(a, b) {
      Vw(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
      b = b || {};
      window.location.assign(bw(a.Nd, b.sessionMeta, b.responseType))
    };
  Ax.prototype.Cj = function(a) {
    var b = a || !1;
    return new _.Pj(function(c) {
      Wv(this.Nd, b, function() {
        c()
      })
    }, this)
  };
  Ax.prototype.EI = function() {
    return this.Ba.authParameters.scope
  };
  var Bx = function(a, b) {
    a = a.EI();
    b = gw(b ? b.split(" ") : [], a ? a.split(" ") : []);
    _.Le(b);
    return b.join(" ")
  };
  Ax.prototype.dD = function() {
    var a = this;
    return new _.Pj(function(b, c) {
      Ex(a, {
        noSessionBound: c,
        tokenFailed: c,
        userLoggedOut: c,
        tokenReady: function(d) {
          b(d.response)
        }
      });
      ew(a.Nd)
    })
  };
  Ax.prototype.OR = function(a, b, c, d) {
    if (a = "string" === typeof a ? document.getElementById(a) : a) {
      var e = this;
      _.Cq(a, "click", function() {
        var f = b;
        "function" == typeof b && (f = b());
        e.Bj(f).then(function(g) {
          c && c(g)
        }, function(g) {
          d && d(g)
        })
      })
    } else d && d({
      error: "Could not attach click handler to the element. Reason: element not found."
    })
  };
  Ax.prototype.disconnect = function() {
    return new _.Pj(function(a) {
      this.Nd.Vr(function() {
        a()
      })
    }, this)
  };
  var Jx;
  _.Pj.prototype["catch"] = _.Pj.prototype.hx;
  Jx = null;
  _.Kx = function(a) {
    a = lx(a);
    if (Yw) {
      if (_.sj(a, Jx || {})) return xx();
      throw new Aw("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
    }
    mx(a, !1 !== a.fetch_basic_profile);
    Uw();
    Jx = a;
    Yw = new Ax(a);
    _.Ae.ga = 1;
    return xx()
  };
  var Mx, Ox, Lx, Qx, Px, Rx;
  _.Nx = function(a, b) {
    Uw();
    a = lx(a);
    mx(a);
    var c = tx(a),
      d = new _.Uv(c);
    "none" == a.prompt ? Lx(d, a, function(e) {
      e.status = e.error ? {
        signed_in: !1,
        method: null,
        google_logged_in: !1
      } : {
        signed_in: !0,
        method: "AUTO",
        google_logged_in: !0
      };
      b(e)
    }) : Mx(d, a, function(e) {
      if (e.error) e.status = {
        signed_in: !1,
        method: null,
        google_logged_in: !1
      };
      else {
        var f = e.access_token || e.id_token;
        e.status = {
          signed_in: !!f,
          method: "PROMPT",
          google_logged_in: !!f
        }
      }
      e["g-oauth-window"] = d.CL.kh;
      b(e)
    })
  };
  Mx = function(a, b, c) {
    var d = new qx(b.response_type);
    c = Ox(a, d, c);
    var e = {
      responseType: d.toString()
    };
    Vw(e, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], b.gsiwebsdk || "2");
    rx(d) && Vw(e, ["sessionMeta", "extraQueryParams", "access_type"], b.access_type || "offline");
    b.redirect_uri && Vw(e, ["sessionMeta", "extraQueryParams", "redirect_uri"], b.redirect_uri);
    b.state && Vw(e, ["sessionMeta", "extraQueryParams", "state"], b.state);
    b = Sw();
    a.Yl ? c({
      authResult: {
        error: "idpiframe_initialization_failed",
        details: a.Fl().error
      }
    }) : (a.dl =
      c, dw(a, b, e))
  };
  Ox = function(a, b, c) {
    if (sx(b)) {
      var d = Px(c);
      return function(e) {
        e && e.authResult && !e.authResult.error ? a.xq(function(f) {
          f && !f.error ? (f = _.tj(f), rx(b) && (f.code = e.authResult.code), d(f)) : d(f ? f : {
            error: "unknown_error"
          })
        })(e) : d(e && e.authResult ? e.authResult : {
          error: "unknown_error"
        })
      }
    }
    return function(e) {
      e && e.authResult && !e.authResult.error ? c(_.tj(e.authResult)) : c(e && e.authResult ? e.authResult : {
        error: "unknown_error"
      })
    }
  };
  Lx = function(a, b, c) {
    if (rx(new qx(b.response_type)) && "offline" == b.access_type) c({
      error: "immediate_failed",
      error_subtype: "access_denied"
    });
    else {
      var d = Px(c);
      b.login_hint ? a.bA(b.login_hint, function(e) {
        e ? Qx(a, b, e, d) : c({
          error: "immediate_failed",
          error_subtype: "access_denied"
        })
      }) : void 0 !== b.authuser && null !== b.authuser ? Hw(a, b.authuser).select(function(e) {
        e && e.login_hint ? Qx(a, b, e.login_hint, d) : d({
          error: "immediate_failed",
          error_subtype: "access_denied"
        })
      }) : a.pq(function(e) {
        e && e.hint ? Qx(a, b, e.hint, d) : e && e.disabled ?
          d({
            error: "immediate_failed",
            error_subtype: "no_user_bound"
          }) : ("first_valid" == b.session_selection ? Gw(a) : Fw(a)).select(function(f) {
            f && f.login_hint ? Qx(a, b, f.login_hint, d) : d({
              error: "immediate_failed",
              error_subtype: "no_user_bound"
            })
          })
      })
    }
  };
  Qx = function(a, b, c, d) {
    b = new qx(b.response_type);
    var e = 0,
      f = {},
      g = function(k) {
        !k || k.error ? d(k) : (e--, _.Ib(f, k), 0 == e && d(f))
      };
    (sx(b) || ux(b, "id_token")) && e++;
    rx(b) && e++;
    (sx(b) || ux(b, "id_token")) && _.Vv(a, c, g);
    rx(b) && fw(a, c, g)
  };
  Px = function(a) {
    return function(b) {
      if (!b || b.error) _.lw(), b ? a(b) : a({
        error: "unknown_error"
      });
      else {
        if (b.access_token) {
          var c = _.tj(b);
          Rx(c);
          delete c.id_token;
          delete c.code;
          _.kw(c)
        }
        a(b)
      }
    }
  };
  Rx = function(a) {
    (0, _.tb)(xw, function(b) {
      delete a[b]
    })
  };
  _.y("gapi.auth2.init", _.Kx);
  _.y("gapi.auth2.authorize", function(a, b) {
    if (null != Yw) throw new Aw("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");
    _.Nx(a, function(c) {
      Rx(c);
      b(c)
    })
  });
  _.y("gapi.auth2._gt", function() {
    return _.Gh()
  });
  _.y("gapi.auth2.enableDebugLogs", function(a) {
    a = !1 !== a;
    _.Lu = "0" != a && !!a
  });
  _.y("gapi.auth2.getAuthInstance", _.yx);
  _.y("gapi.auth2.BasicProfile", Zw);
  _.y("gapi.auth2.BasicProfile.prototype.getId", Zw.prototype.getId);
  _.y("gapi.auth2.BasicProfile.prototype.getName", Zw.prototype.getName);
  _.y("gapi.auth2.BasicProfile.prototype.getGivenName", Zw.prototype.hU);
  _.y("gapi.auth2.BasicProfile.prototype.getFamilyName", Zw.prototype.cU);
  _.y("gapi.auth2.BasicProfile.prototype.getImageUrl", Zw.prototype.rU);
  _.y("gapi.auth2.BasicProfile.prototype.getEmail", Zw.prototype.Du);
  _.y("gapi.auth2.GoogleAuth", Ax);
  _.y("gapi.auth2.GoogleAuth.prototype.attachClickHandler", Ax.prototype.OR);
  _.y("gapi.auth2.GoogleAuth.prototype.disconnect", Ax.prototype.disconnect);
  _.y("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", Ax.prototype.Lq);
  _.y("gapi.auth2.GoogleAuth.prototype.signIn", Ax.prototype.Bj);
  _.y("gapi.auth2.GoogleAuth.prototype.signOut", Ax.prototype.Cj);
  _.y("gapi.auth2.GoogleAuth.prototype.getInitialScopes", Ax.prototype.EI);
  _.y("gapi.auth2.GoogleUser", Xw);
  _.y("gapi.auth2.GoogleUser.prototype.grant", Xw.prototype.jV);
  _.y("gapi.auth2.GoogleUser.prototype.getId", Xw.prototype.getId);
  _.y("gapi.auth2.GoogleUser.prototype.isSignedIn", Xw.prototype.Th);
  _.y("gapi.auth2.GoogleUser.prototype.getAuthResponse", Xw.prototype.fk);
  _.y("gapi.auth2.GoogleUser.prototype.getBasicProfile", Xw.prototype.IT);
  _.y("gapi.auth2.GoogleUser.prototype.getGrantedScopes", Xw.prototype.jU);
  _.y("gapi.auth2.GoogleUser.prototype.getHostedDomain", Xw.prototype.zA);
  _.y("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", Xw.prototype.Lq);
  _.y("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", Xw.prototype.Zu);
  _.y("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", Xw.prototype.dD);
  _.y("gapi.auth2.LiveValue", Nw);
  _.y("gapi.auth2.LiveValue.prototype.listen", Nw.prototype.U);
  _.y("gapi.auth2.LiveValue.prototype.get", Nw.prototype.get);
  _.y("gapi.auth2.SigninOptionsBuilder", Qw);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", Qw.prototype.FT);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", Qw.prototype.Q_);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.getScope", Qw.prototype.Iq);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.setScope", Qw.prototype.$M);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", Qw.prototype.PU);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", Qw.prototype.t0);
  _.y("gapi.auth2.SigninOptionsBuilder.prototype.get", Qw.prototype.get);

  var zi = function() {
      this.Ls = {
        UL: si ? "../" + si : null,
        KS: ti,
        ZI: ui,
        dba: vi,
        Nu: wi,
        Jba: xi
      };
      this.Ne = _.ke;
      this.EL = this.FS;
      this.uT = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
      if (this.Ls.UL) {
        this.Ne = this.Ls.ZI(this.Ne, this.Ls.UL);
        var a = this.Ne.document,
          b = a.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
        a.body.appendChild(b);
        this.EL = this.Ne.doPostMsg
      }
      this.kE = {};
      this.IE = {};
      a = (0, _.L)(this.gB,
        this);
      _.ze(this.Ne, "message", a);
      _.pe(_.Ae, "RPMQ", []).push(a);
      this.Ne != this.Ne.parent && yi(this, this.Ne.parent, '{"h":"' + escape(this.Ne.name) + '"}', "*")
    },
    Ai = function(a) {
      var b = null;
      0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
      return b
    },
    Bi = function(a) {
      if (!/^\s*{/.test(a)) return !1;
      a = _.Ef(a);
      return null !== a && "object" === typeof a && !!a.g
    };
  zi.prototype.gB = function(a) {
    var b = String(a.data);
    (0, _.Ue)("gapi.rpc.receive(" + vi + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
    var c = 0 !== b.indexOf("!_");
    c || (b = b.substring(2));
    var d = Bi(b);
    if (!c && !d) {
      if (!d && (c = Ai(b))) {
        if (this.kE[c]) this.kE[c]();
        else this.IE[c] = 1;
        return
      }
      var e = a.origin,
        f = this.Ls.KS;
      this.uT ? _.ke.setTimeout(function() {
        f(b, e)
      }, 0) : f(b, e)
    }
  };
  zi.prototype.Bc = function(a, b) {
    ".." === a || this.IE[a] ? (b(), delete this.IE[a]) : this.kE[a] = b
  };
  var yi = function(a, b, c, d) {
    var e = Bi(c) ? "" : "!_";
    (0, _.Ue)("gapi.rpc.send(" + vi + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
    a.EL(b, e + c, d)
  };
  zi.prototype.FS = function(a, b, c) {
    a.postMessage(b, c)
  };
  zi.prototype.send = function(a, b, c) {
    (a = this.Ls.ZI(this.Ne, a)) && !a.closed && yi(this, a, b, c)
  };
  var Ci, Di, Ei, Fi, Gi, Hi, Ii, Ji, si, vi, Ki, Li, Mi, Ni, ui, wi, Oi, Pi, Ui, Vi, Yi, xi, dj, Zi, Qi, Ri, ej, ti, fj, gj;
  Ci = 0;
  Di = [];
  Ei = {};
  Fi = {};
  Gi = _.Oe.getUrlParameters;
  Hi = Gi();
  Ii = Hi.rpctoken;
  Ji = Hi.parent || _.le.referrer;
  si = Hi.rly;
  vi = si || (_.ke !== _.ke.top || _.ke.opener) && _.ke.name || "..";
  Ki = null;
  Li = {};
  Mi = function() {};
  Ni = {
    send: Mi,
    Bc: Mi
  };
  ui = function(a, b) {
    "/" == b.charAt(0) && (b = b.substring(1), a = _.ke.top);
    for (b = b.split("/"); b.length;) {
      var c = b.shift();
      "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
      if (".." === c) a = a == a.parent ? a.opener : a.parent;
      else if (".." !== c && a.frames[c]) {
        if (a = a.frames[c], !("postMessage" in a)) throw "Not a window";
      } else return null
    }
    return a
  };
  wi = function(a) {
    return (a = Ei[a]) && a.Qk
  };
  Oi = function(a) {
    if (a.f in {}) return !1;
    var b = a.t,
      c = Ei[a.r];
    a = a.origin;
    return c && (c.Qk === b || !c.Qk && !b) && (a === c.origin || "*" === c.origin)
  };
  Pi = function(a) {
    var b = a.id.split("/"),
      c = b[b.length - 1],
      d = a.origin;
    return function(e) {
      var f = e.origin;
      return e.f == c && (d == f || "*" == d)
    }
  };
  _.Si = function(a, b, c) {
    a = Qi(a);
    Fi[a.name] = {
      Ug: b,
      qr: a.qr,
      Uo: c || Oi
    };
    Ri()
  };
  _.Ti = function(a) {
    delete Fi[Qi(a).name]
  };
  Ui = {};
  Vi = function(a, b) {
    (a = Ui["_" + a]) && a[1](this) && a[0].call(this, b)
  };
  Yi = function(a) {
    var b = a.c;
    if (!b) return Mi;
    var c = a.r,
      d = a.g ? "legacy__" : "";
    return function() {
      var e = [].slice.call(arguments, 0);
      e.unshift(c, d + "__cb", null, b);
      _.Xi.apply(null, e)
    }
  };
  xi = function(a) {
    Ki = a
  };
  dj = function(a) {
    Li[a] || (Li[a] = _.ke.setTimeout(function() {
      Li[a] = !1;
      Zi(a)
    }, 0))
  };
  Zi = function(a) {
    var b = Ei[a];
    if (b && b.ready) {
      var c = b.bD;
      for (b.bD = []; c.length;) Ni.send(a, _.Ff(c.shift()), b.origin)
    }
  };
  Qi = function(a) {
    return 0 === a.indexOf("legacy__") ? {
      name: a.substring(8),
      qr: !0
    } : {
      name: a,
      qr: !1
    }
  };
  Ri = function() {
    for (var a = _.R("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c = 0, d; d = Di[c]; ++c) {
      var e = d.rpc;
      if (!e || 0 < a && b - d.timestamp > a) Di.splice(c, 1), --c;
      else {
        var f = e.s,
          g = Fi[f] || Fi["*"];
        if (g)
          if (Di.splice(c, 1), --c, e.origin = d.origin, d = Yi(e), e.callback = d, g.Uo(e)) {
            if ("__cb" !== f && !!g.qr != !!e.g) break;
            e = g.Ug.apply(e, e.a);
            void 0 !== e && d(e)
          } else(0, _.Ue)("gapi.rpc.rejected(" + vi + "): " + f)
      }
    }
  };
  ej = function(a, b, c) {
    Di.push({
      rpc: a,
      origin: b,
      timestamp: (new Date).getTime() / 1E3
    });
    c || Ri()
  };
  ti = function(a, b) {
    a = _.Ef(a);
    ej(a, b, !1)
  };
  fj = function(a) {
    for (; a.length;) ej(a.shift(), this.origin, !0);
    Ri()
  };
  gj = function(a) {
    var b = !1;
    a = a.split("|");
    var c = a[0];
    0 <= c.indexOf("/") && (b = !0);
    return {
      id: c,
      origin: a[1] || "*",
      NB: b
    }
  };
  _.hj = function(a, b, c, d) {
    var e = gj(a);
    d && (_.ke.frames[e.id] = _.ke.frames[e.id] || d);
    a = e.id;
    if (!Ei.hasOwnProperty(a)) {
      c = c || null;
      d = e.origin;
      if (".." === a) d = _.qg.getOrigin(Ji), c = c || Ii;
      else if (!e.NB) {
        var f = _.le.getElementById(a);
        f && (f = f.src, d = _.qg.getOrigin(f), c = c || Gi(f).rpctoken)
      }
      "*" === e.origin && d || (d = e.origin);
      Ei[a] = {
        Qk: c,
        bD: [],
        origin: d,
        k_: b,
        PL: function() {
          var g = a;
          Ei[g].ready = 1;
          Zi(g)
        }
      };
      Ni.Bc(a, Ei[a].PL)
    }
    return Ei[a].PL
  };
  _.Xi = function(a, b, c, d) {
    a = a || "..";
    _.hj(a);
    a = a.split("|", 1)[0];
    var e = b,
      f = [].slice.call(arguments, 3),
      g = c,
      k = vi,
      l = Ii,
      m = Ei[a],
      n = k,
      p = gj(a);
    if (m && ".." !== a) {
      if (p.NB) {
        if (!(l = Ei[a].k_)) {
          l = Ki ? Ki.substring(1).split("/") : [vi];
          n = l.length - 1;
          for (var t = _.ke.parent; t !== _.ke.top;) {
            var r = t.parent;
            if (!n--) {
              for (var u = null, v = r.frames.length, w = 0; w < v; ++w) r.frames[w] == t && (u = w);
              l.unshift("{" + u + "}")
            }
            t = r
          }
          l = "/" + l.join("/")
        }
        n = l
      } else n = k = "..";
      l = m.Qk
    }
    g && p ? (m = Oi, p.NB && (m = Pi(p)), Ui["_" + ++Ci] = [g, m], g = Ci) : g = null;
    f = {
      s: e,
      f: k,
      r: n,
      t: l,
      c: g,
      a: f
    };
    e = Qi(e);
    f.s = e.name;
    f.g = e.qr;
    Ei[a].bD.push(f);
    dj(a)
  };
  if ("function" === typeof _.ke.postMessage || "object" === typeof _.ke.postMessage) Ni = new zi, _.Si("__cb", Vi, function() {
    return !0
  }), _.Si("_processBatch", fj, function() {
    return !0
  }), _.hj("..");

  _.lk = function(a) {
    return new _.Pj(a)
  };

  _.mk = _.mk || {};
  _.mk.getViewportDimensions = function() {
    var a = 0,
      b = 0;
    self.innerHeight ? (a = self.innerWidth, b = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : document.body && (a = document.body.clientWidth, b = document.body.clientHeight);
    return {
      width: a,
      height: b
    }
  };

  _.mk = _.mk || {};
  (function() {
    function a(b, c) {
      window.getComputedStyle(b, "").getPropertyValue(c).match(/^([0-9]+)/);
      return parseInt(RegExp.$1, 10)
    }
    _.mk.getHeight = function() {
      var b = _.mk.getViewportDimensions().height,
        c = document.body,
        d = document.documentElement;
      if ("CSS1Compat" === document.compatMode && d.scrollHeight) return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight;
      if (0 <= navigator.userAgent.indexOf("AppleWebKit")) {
        b = 0;
        for (c = [document.body]; 0 < c.length;) {
          var e = c.shift();
          d = e.childNodes;
          if ("undefined" !== typeof e.style) {
            var f = e.style.overflowY;
            f || (f = (f = document.defaultView.getComputedStyle(e, null)) ? f.overflowY : null);
            if ("visible" != f && "inherit" != f && (f = e.style.height, f || (f = (f = document.defaultView.getComputedStyle(e, null)) ? f.height : ""), 0 < f.length && "auto" != f)) continue
          }
          for (e = 0; e < d.length; e++) {
            f = d[e];
            if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
              var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
              b = Math.max(b, g)
            }
            c.push(f)
          }
        }
        return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body,
          "padding-bottom")
      }
      if (c && d) return e = d.scrollHeight, f = d.offsetHeight, d.clientHeight !== f && (e = c.scrollHeight, f = c.offsetHeight), e > b ? e > f ? e : f : e < f ? e : f
    }
  })();

  var ok, nk, uk, vk, pk, sk, qk, wk, rk;
  _.tk = function() {
    if (nk) {
      var a = new _.ke.Uint32Array(1);
      ok.getRandomValues(a);
      a = Number("0." + a[0])
    } else a = pk, a += parseInt(qk.substr(0, 20), 16), qk = rk(qk), a /= sk + Math.pow(16, 20);
    return a
  };
  ok = _.ke.crypto;
  nk = !1;
  uk = 0;
  vk = 0;
  pk = 1;
  sk = 0;
  qk = "";
  wk = function(a) {
    a = a || _.ke.event;
    var b = a.screenX + a.clientX << 16;
    b += a.screenY + a.clientY;
    b *= (new Date).getTime() % 1E6;
    pk = pk * b % sk;
    0 < uk && ++vk == uk && _.ye(_.ke, "mousemove", wk, "remove", "de")
  };
  rk = function(a) {
    var b = new _.Kh;
    b.LE(a);
    return b.Rg()
  };
  nk = !!ok && "function" == typeof ok.getRandomValues;
  nk || (sk = 1E6 * (screen.width * screen.width + screen.height), qk = rk(_.le.cookie + "|" + _.le.location + "|" + (new Date).getTime() + "|" + Math.random()), uk = _.R("random/maxObserveMousemove") || 0, 0 != uk && _.ze(_.ke, "mousemove", wk));

  var xk, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Qk, Sk, Tk, Uk, Vk, Wk, Yk;
  _.yk = function(a) {
    return !!a && "object" === typeof a && _.oe.test(a.push)
  };
  _.zk = function(a) {
    for (var b = 0; b < this.length; b++)
      if (this[b] === a) return b;
    return -1
  };
  _.Ak = function(a, b) {
    if (!a) throw Error(b || "");
  };
  Bk = /&/g;
  Ck = /</g;
  Dk = />/g;
  Ek = /"/g;
  Fk = /'/g;
  Gk = function(a) {
    return String(a).replace(Bk, "&amp;").replace(Ck, "&lt;").replace(Dk, "&gt;").replace(Ek, "&quot;").replace(Fk, "&#39;")
  };
  Hk = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
  Ik = /%([a-f]|[0-9a-fA-F][a-f])/g;
  Jk = /^(https?|ftp|file|chrome-extension):$/i;
  Kk = function(a) {
    a = String(a);
    a = a.replace(Hk, function(e) {
      try {
        return encodeURIComponent(e)
      } catch (f) {
        return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
      }
    }).replace(_.we, function(e) {
      return e.replace(/%/g, "%25")
    }).replace(Ik, function(e) {
      return e.toUpperCase()
    });
    a = a.match(_.ve) || [];
    var b = _.qe(),
      c = function(e) {
        return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
      },
      d = !!(a[1] || "").match(Jk);
    b.Dp = c((a[1] || "") + (a[2] || "") + (a[3] ||
      (a[2] && d ? "/" : "")));
    d = function(e) {
      return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
    };
    b.query = a[5] ? [d(a[5])] : [];
    b.Hh = a[7] ? [d(a[7])] : [];
    return b
  };
  Lk = function(a) {
    return a.Dp + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Hh.length ? "#" + a.Hh.join("&") : "")
  };
  Mk = function(a, b) {
    var c = [];
    if (a)
      for (var d in a)
        if (_.re(a, d) && null != a[d]) {
          var e = b ? b(a[d]) : a[d];
          c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
        } return c
  };
  _.Nk = function(a, b, c, d) {
    a = Kk(a);
    a.query.push.apply(a.query, Mk(b, d));
    a.Hh.push.apply(a.Hh, Mk(c, d));
    return Lk(a)
  };
  _.Ok = function(a, b) {
    var c = Kk(b);
    b = c.Dp;
    c.query.length && (b += "?" + c.query.join(""));
    c.Hh.length && (b += "#" + c.Hh.join(""));
    var d = "";
    2E3 < b.length && (c = b, b = b.substr(0, 2E3), b = b.replace(_.xe, ""), d = c.substr(b.length));
    var e = a.createElement("div");
    a = a.createElement("a");
    c = Kk(b);
    b = c.Dp;
    c.query.length && (b += "?" + c.query.join(""));
    c.Hh.length && (b += "#" + c.Hh.join(""));
    _.Ed(a, new _.Wb(_.Ub, b));
    e.appendChild(a);
    b = _.uc(e.innerHTML, null);
    _.Dd(e, b);
    b = String(e.firstChild.href);
    e.parentNode && e.parentNode.removeChild(e);
    c = Kk(b +
      d);
    b = c.Dp;
    c.query.length && (b += "?" + c.query.join(""));
    c.Hh.length && (b += "#" + c.Hh.join(""));
    return b
  };
  _.Pk = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
  Qk = function(a) {
    for (; a.firstChild;) a.removeChild(a.firstChild)
  };
  _.Rk = function(a, b) {
    var c = _.pe(_.Ae, "watt", _.qe());
    _.pe(c, a, b)
  };
  Sk = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
  Tk = function(a) {
    var b = _.R("googleapis.config/sessionDelegate");
    "string" === typeof b && 21 < b.length && (b = null);
    null == b && (b = (a = (a || window.location.href).match(Sk)) ? a[1] : null);
    if (null == b) return null;
    b = String(b);
    21 < b.length && (b = null);
    return b
  };
  Uk = function() {
    var a = _.Ae.onl;
    if (!a) {
      a = _.qe();
      _.Ae.onl = a;
      var b = _.qe();
      a.e = function(c) {
        var d = b[c];
        d && (delete b[c], d())
      };
      a.a = function(c, d) {
        b[c] = d
      };
      a.r = function(c) {
        delete b[c]
      }
    }
    return a
  };
  Vk = function(a, b) {
    b = b.onload;
    return "function" === typeof b ? (Uk().a(a, b), b) : null
  };
  Wk = function(a) {
    _.Ak(/^\w+$/.test(a), "Unsupported id - " + a);
    Uk();
    return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
  };
  Yk = function(a) {
    Uk().r(a)
  };
  var $k, al, el;
  _.Zk = {
    allowtransparency: "true",
    frameborder: "0",
    hspace: "0",
    marginheight: "0",
    marginwidth: "0",
    scrolling: "no",
    style: "",
    tabindex: "0",
    vspace: "0",
    width: "100%"
  };
  $k = {
    allowtransparency: !0,
    onload: !0
  };
  al = 0;
  _.bl = function(a, b) {
    var c = 0;
    do var d = b.id || ["I", al++, "_", (new Date).getTime()].join(""); while (a.getElementById(d) && 5 > ++c);
    _.Ak(5 > c, "Error creating iframe id");
    return d
  };
  _.cl = function(a, b) {
    return a ? b + "/" + a : ""
  };
  _.dl = function(a, b, c, d) {
    var e = {},
      f = {};
    a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
    _.se(d.queryParams || {}, e);
    _.se(d.fragmentParams || {}, f);
    var g = d.pfname;
    var k = _.qe();
    _.R("iframes/dropLegacyIdParam") || (k.id = c);
    k._gfid = c;
    k.parent = a.location.protocol + "//" + a.location.host;
    c = _.ue(a.location.href, "parent");
    g = g || "";
    !g && c && (g = _.ue(a.location.href, "_gfid", "") || _.ue(a.location.href, "id", ""), g = _.cl(g, _.ue(a.location.href, "pfname", "")));
    g || (c = _.Ef(_.ue(a.location.href, "jcp", ""))) && "object" ==
      typeof c && (g = _.cl(c.id, c.pfname));
    k.pfname = g;
    d.connectWithJsonParam && (g = {}, g.jcp = _.Ff(k), k = g);
    g = _.ue(b, "rpctoken") || e.rpctoken || f.rpctoken;
    g || (g = d.rpctoken || String(Math.round(1E8 * _.tk())), k.rpctoken = g);
    d.rpctoken = g;
    _.se(k, d.connectWithQueryParams ? e : f);
    k = a.location.href;
    a = _.qe();
    (g = _.ue(k, "_bsh", _.Ae.bsh)) && (a._bsh = g);
    (k = _.Ae.dpo ? _.Ae.h : _.ue(k, "jsh", _.Ae.h)) && (a.jsh = k);
    d.hintInFragment ? _.se(a, f) : _.se(a, e);
    return _.Nk(b, e, f, d.paramsSerializer)
  };
  el = function(a) {
    _.Ak(!a || _.Pk.test(a), "Illegal url for new iframe - " + a)
  };
  _.fl = function(a, b, c, d, e) {
    el(c.src);
    var f, g = Vk(d, c),
      k = g ? Wk(d) : "";
    try {
      document.all && (f = a.createElement('<iframe frameborder="' + Gk(String(c.frameborder)) + '" scrolling="' + Gk(String(c.scrolling)) + '" ' + k + ' name="' + Gk(String(c.name)) + '"/>'))
    } catch (m) {} finally {
      f || (f = a.createElement("iframe"), g && (f.onload = function() {
        f.onload = null;
        g.call(this)
      }, Yk(d)))
    }
    f.setAttribute("ng-non-bindable", "");
    for (var l in c) a = c[l], "style" === l && "object" === typeof a ? _.se(a, f.style) : $k[l] || f.setAttribute(l, String(a));
    (l = e && e.beforeNode ||
      null) || e && e.dontclear || Qk(b);
    b.insertBefore(f, l);
    f = l ? l.previousSibling : b.lastChild;
    c.allowtransparency && (f.allowTransparency = !0);
    return f
  };
  var gl, jl;
  gl = /^:[\w]+$/;
  _.hl = /:([a-zA-Z_]+):/g;
  _.il = function() {
    var a = _.Eh() || "0",
      b = Tk();
    var c = _.Eh(void 0) || a;
    var d = Tk(void 0),
      e = "";
    c && (e += "u/" + encodeURIComponent(String(c)) + "/");
    d && (e += "b/" + encodeURIComponent(String(d)) + "/");
    c = e || null;
    (e = (d = !1 === _.R("isLoggedIn")) ? "_/im/" : "") && (c = "");
    var f = _.R("iframes/:socialhost:"),
      g = _.R("iframes/:im_socialhost:");
    return xk = {
      socialhost: f,
      ctx_socialhost: d ? g : f,
      session_index: a,
      session_delegate: b,
      session_prefix: c,
      im_prefix: e
    }
  };
  jl = function(a, b) {
    return _.il()[b] || ""
  };
  _.kl = function(a) {
    return _.Ok(_.le, a.replace(_.hl, jl))
  };
  _.ll = function(a) {
    var b = a;
    gl.test(a) && (b = _.R("iframes/" + b.substring(1) + "/url"), _.Ak(!!b, "Unknown iframe url config for - " + a));
    return _.kl(b)
  };
  _.ml = function(a, b, c) {
    var d = c || {};
    c = d.attributes || {};
    _.Ak(!(d.allowPost || d.forcePost) || !c.onload, "onload is not supported by post iframe (allowPost or forcePost)");
    a = _.ll(a);
    c = b.ownerDocument || _.le;
    var e = _.bl(c, d);
    a = _.dl(c, a, e, d);
    var f = _.qe();
    _.se(_.Zk, f);
    _.se(d.attributes, f);
    f.name = f.id = e;
    f.src = a;
    d.eurl = a;
    var g = d || {},
      k = !!g.allowPost;
    if (g.forcePost || k && 2E3 < a.length) {
      g = Kk(a);
      f.src = "";
      d.dropDataPostorigin || (f["data-postorigin"] = a);
      a = _.fl(c, b, f, e);
      if (-1 != navigator.userAgent.indexOf("WebKit")) {
        var l = a.contentWindow.document;
        l.open();
        f = l.createElement("div");
        k = {};
        var m = e + "_inner";
        k.name = m;
        k.src = "";
        k.style = "display:none";
        _.fl(c, f, k, m, d)
      }
      f = (d = g.query[0]) ? d.split("&") : [];
      d = [];
      for (k = 0; k < f.length; k++) m = f[k].split("=", 2), d.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
      g.query = [];
      f = Lk(g);
      _.Ak(_.Pk.test(f), "Invalid URL: " + f);
      g = c.createElement("form");
      g.action = f;
      g.method = "POST";
      g.target = e;
      g.style.display = "none";
      for (e = 0; e < d.length; e++) f = c.createElement("input"), f.type = "hidden", f.name = d[e][0], f.value = d[e][1], g.appendChild(f);
      b.appendChild(g);
      g.submit();
      g.parentNode.removeChild(g);
      l && l.close();
      b = a
    } else b = _.fl(c, b, f, e, d);
    return b
  };

  _.nl = function(a) {
    this.S = a
  };
  _.h = _.nl.prototype;
  _.h.value = function() {
    return this.S
  };
  _.h.zj = function(a) {
    this.S.width = a;
    return this
  };
  _.h.Oc = function() {
    return this.S.width
  };
  _.h.ii = function(a) {
    this.S.height = a;
    return this
  };
  _.h.getHeight = function() {
    return this.S.height
  };
  _.h.$c = function(a) {
    this.S.style = a;
    return this
  };
  _.h.Ol = _.fa(6);
  var ol = function(a) {
    this.S = a
  };
  ol.prototype.Go = function(a) {
    this.S.anchor = a;
    return this
  };
  ol.prototype.Af = function() {
    return this.S.anchor
  };
  ol.prototype.GD = function(a) {
    this.S.anchorPosition = a;
    return this
  };
  _.pl = function(a) {
    a.S.show = !0;
    return a
  };
  ol.prototype.ii = function(a) {
    this.S.height = a;
    return this
  };
  ol.prototype.getHeight = function() {
    return this.S.height
  };
  ol.prototype.zj = function(a) {
    this.S.width = a;
    return this
  };
  ol.prototype.Oc = function() {
    return this.S.width
  };
  _.ql = function(a) {
    this.S = a || {}
  };
  _.ql.prototype.value = function() {
    return this.S
  };
  _.ql.prototype.setUrl = function(a) {
    this.S.url = a;
    return this
  };
  _.ql.prototype.getUrl = function() {
    return this.S.url
  };
  _.rl = function(a, b) {
    a.S.where = b;
    return a
  };
  _.h = _.ql.prototype;
  _.h.$c = function(a) {
    this.S.style = a;
    return this
  };
  _.h.Ol = _.fa(5);
  _.h.Je = function(a) {
    this.S.id = a;
    return this
  };
  _.h.getId = function() {
    return this.S.id
  };
  _.h.Lk = _.fa(7);
  _.sl = function(a, b) {
    a.S.queryParams = b;
    return a
  };
  _.tl = function(a, b) {
    a.S.relayOpen = b;
    return a
  };
  _.ul = function(a, b) {
    a.S.messageHandlers = b;
    return a
  };
  _.vl = function(a, b) {
    a.S.messageHandlersFilter = b;
    return a
  };
  _.ql.prototype.Ho = _.fa(8);
  _.ql.prototype.getContext = function() {
    return this.S.context
  };
  _.ql.prototype.Nc = function() {
    return this.S.openerIframe
  };
  _.wl = function(a) {
    return new ol(a.S)
  };
  _.ql.prototype.El = function() {
    this.S.attributes = this.S.attributes || {};
    return new _.nl(this.S.attributes)
  };
  _.xl = function(a) {
    a.S.connectWithQueryParams = !0;
    return a
  };

  var yl, Cl, Dl, El, Jl, Il;
  _.nl.prototype.Ol = _.fd(6, function() {
    return this.S.style
  });
  _.ql.prototype.Ol = _.fd(5, function() {
    return this.S.style
  });
  yl = function(a, b) {
    a.S.onload = b
  };
  _.zl = function(a) {
    a.S.closeClickDetection = !0
  };
  _.Al = function(a) {
    return a.S.rpctoken
  };
  _.Bl = function(a) {
    a.S.waitForOnload = !0;
    return a
  };
  Cl = function(a) {
    return (a = a.S.timeout) ? a : null
  };
  _.Gl = function(a, b, c) {
    if (a) {
      _.Ak(_.yk(a), "arrayForEach was called with a non array value");
      for (var d = 0; d < a.length; d++) b.call(c, a[d], d)
    }
  };
  _.Hl = function(a, b, c) {
    if (a)
      if (_.yk(a)) _.Gl(a, b, c);
      else {
        _.Ak("object" === typeof a, "objectForEach was called with a non object value");
        c = c || a;
        for (var d in a) _.re(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
      }
  };
  Jl = function(a) {
    this.resolve = this.reject = null;
    this.promise = _.lk((0, _.L)(function(b, c) {
      this.resolve = b;
      this.reject = c
    }, this));
    a && (this.promise = Il(this.promise, a))
  };
  Il = function(a, b) {
    return a.then(function(c) {
      try {
        b(c)
      } catch (d) {}
      return c
    })
  };
  _.Kl = function(a) {
    this.S = a || {}
  };
  _.H(_.Kl, _.ql);
  _.Ll = function(a, b) {
    a.S.frameName = b;
    return a
  };
  _.Kl.prototype.Dd = function() {
    return this.S.frameName
  };
  _.Ml = function(a, b) {
    a.S.rpcAddr = b;
    return a
  };
  _.Kl.prototype.Ml = function() {
    return this.S.rpcAddr
  };
  _.Nl = function(a, b) {
    a.S.retAddr = b;
    return a
  };
  _.Ol = function(a) {
    return a.S.retAddr
  };
  _.Kl.prototype.ki = function(a) {
    this.S.origin = a;
    return this
  };
  _.Kl.prototype.getOrigin = function() {
    return this.S.origin
  };
  _.Kl.prototype.xj = function(a) {
    this.S.setRpcReady = a;
    return this
  };
  _.Pl = function(a) {
    return a.S.setRpcReady
  };
  _.Kl.prototype.Jo = function(a) {
    this.S.context = a
  };
  var Ql = function(a, b) {
    a.S._rpcReadyFn = b
  };
  _.Kl.prototype.Ia = function() {
    return this.S.iframeEl
  };
  var Rl, Wl, Vl;
  Rl = /^[\w\.\-]*$/;
  _.Sl = function(a) {
    return a.Gc === a.getContext().Gc
  };
  _.Tl = function() {
    return !0
  };
  _.Ul = function(a) {
    for (var b = _.qe(), c = 0; c < a.length; c++) b[a[c]] = !0;
    return function(d) {
      return !!b[d.Gc]
    }
  };
  Wl = function(a, b, c) {
    return function(d) {
      if (!b.Ib) {
        _.Ak(this.origin === b.Gc, "Wrong origin " + this.origin + " != " + b.Gc);
        var e = this.callback;
        d = Vl(a, d, b);
        !c && 0 < d.length && _.Xj(d).then(e)
      }
    }
  };
  Vl = function(a, b, c) {
    a = Dl[a];
    if (!a) return [];
    for (var d = [], e = 0; e < a.length; e++) d.push(_.Tj(a[e].call(c, b, c)));
    return d
  };
  _.Xl = function(a, b, c) {
    _.Ak("_default" != a, "Cannot update default api");
    El[a] = {
      map: b,
      filter: c
    }
  };
  _.Yl = function(a, b, c) {
    _.Ak("_default" != a, "Cannot update default api");
    _.pe(El, a, {
      map: {},
      filter: _.Sl
    }).map[b] = c
  };
  _.Zl = function(a, b) {
    _.pe(El, "_default", {
      map: {},
      filter: _.Tl
    }).map[a] = b;
    _.Hl(_.Fl.Re, function(c) {
      c.register(a, b, _.Tl)
    })
  };
  _.$l = function() {
    return _.Fl
  };
  _.bm = function(a) {
    a = a || {};
    this.Ib = !1;
    this.yL = _.qe();
    this.Re = _.qe();
    this.Ne = a._window || _.ke;
    this.ld = this.Ne.location.href;
    this.zL = (this.NC = am(this.ld, "parent")) ? am(this.ld, "pfname") : "";
    this.Ca = this.NC ? am(this.ld, "_gfid") || am(this.ld, "id") : "";
    this.zf = _.cl(this.Ca, this.zL);
    this.Gc = _.qg.getOrigin(this.ld);
    if (this.Ca) {
      var b = new _.Kl;
      _.Ml(b, a._parentRpcAddr || "..");
      _.Nl(b, a._parentRetAddr || this.Ca);
      b.ki(_.qg.getOrigin(this.NC || this.ld));
      _.Ll(b, this.zL);
      this.$a = this.Rj(b.value())
    } else this.$a = null
  };
  _.h = _.bm.prototype;
  _.h.Sn = _.fa(10);
  _.h.Ea = function() {
    if (!this.Ib) {
      for (var a = 0; a < this.Re.length; a++) this.Re[a].Ea();
      this.Ib = !0
    }
  };
  _.h.Dd = function() {
    return this.zf
  };
  _.h.vb = function() {
    return this.Ne
  };
  _.h.tb = function() {
    return this.Ne.document
  };
  _.h.Nw = _.fa(11);
  _.h.yA = function(a) {
    return this.yL[a]
  };
  _.h.Rj = function(a) {
    _.Ak(!this.Ib, "Cannot attach iframe in disposed context");
    a = new _.Kl(a);
    a.Ml() || _.Ml(a, a.getId());
    _.Ol(a) || _.Nl(a, "..");
    a.getOrigin() || a.ki(_.qg.getOrigin(a.getUrl()));
    a.Dd() || _.Ll(a, _.cl(a.getId(), this.zf));
    var b = a.Dd();
    if (this.Re[b]) return this.Re[b];
    var c = a.Ml(),
      d = c;
    a.getOrigin() && (d = c + "|" + a.getOrigin());
    var e = _.Ol(a),
      f = _.Al(a);
    f || (f = (f = a.Ia()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(), f = _.ue(f, "rpctoken"));
    Ql(a, _.hj(d, e, f, a.S._popupWindow));
    d = ((window.gadgets || {}).rpc || {}).setAuthToken;
    f && d && d(c, f);
    var g = new _.cm(this, c, b, a),
      k = a.S.messageHandlersFilter;
    _.Hl(a.S.messageHandlers, function(l, m) {
      g.register(m, l, k)
    });
    _.Pl(a) && g.xj();
    _.dm(g, "_g_rpcReady");
    return g
  };
  _.h.qD = function(a) {
    _.Ll(a, null);
    var b = a.getId();
    !b || Rl.test(b) && !this.vb().document.getElementById(b) || (_.Re("Ignoring requested iframe ID - " + b), a.Je(null))
  };
  var am = function(a, b) {
    var c = _.ue(a, b);
    c || (c = _.Ef(_.ue(a, "jcp", ""))[b]);
    return c || ""
  };
  _.bm.prototype.Xh = function(a) {
    _.Ak(!this.Ib, "Cannot open iframe in disposed context");
    var b = new _.Kl(a);
    em(this, b);
    var c = b.Dd();
    if (c && this.Re[c]) return this.Re[c];
    this.qD(b);
    c = b.getUrl();
    _.Ak(c, "No url for new iframe");
    var d = b.S.queryParams || {};
    d.usegapi = "1";
    _.sl(b, d);
    d = this.sJ && this.sJ(c, b);
    d || (d = b.S.where, _.Ak(!!d, "No location for new iframe"), c = _.ml(c, d, a), b.S.iframeEl = c, d = c.getAttribute("id"));
    _.Ml(b, d).Je(d);
    b.ki(_.qg.getOrigin(b.S.eurl || ""));
    this.CK && this.CK(b, b.Ia());
    c = this.Rj(a);
    c.aE && c.aE(c,
      a);
    (a = b.S.onCreate) && a(c);
    b.S.disableRelayOpen || c.zp("_open");
    return c
  };
  var fm = function(a, b, c) {
      var d = b.S.canvasUrl;
      if (!d) return c;
      _.Ak(!b.S.allowPost && !b.S.forcePost, "Post is not supported when using canvas url");
      var e = b.getUrl();
      _.Ak(e && _.qg.getOrigin(e) === a.Gc && _.qg.getOrigin(d) === a.Gc, "Wrong origin for canvas or hidden url " + d);
      b.setUrl(d);
      _.Bl(b);
      b.S.canvasUrl = null;
      return function(f) {
        var g = f.vb(),
          k = g.location.hash;
        k = _.ll(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
        g.location.replace(k);
        c && c(f)
      }
    },
    hm = function(a, b, c) {
      var d = b.S.relayOpen;
      if (d) {
        var e = a.$a;
        d instanceof _.cm ?
          (e = d, _.tl(b, 0)) : 0 < Number(d) && _.tl(b, Number(d) - 1);
        if (e) {
          _.Ak(!!e.rL, "Relaying iframe open is disabled");
          if (d = b.Ol())
            if (d = _.gm[d]) b.Jo(a), d(b.value()), b.Jo(null);
          b.S.openerIframe = null;
          c.resolve(e.rL(b));
          return !0
        }
      }
      return !1
    },
    lm = function(a, b, c) {
      var d = b.Ol();
      if (d)
        if (_.Ak(!!_.im, "Defer style is disabled, when requesting style " + d), _.jm[d]) em(a, b);
        else return km(d, function() {
          _.Ak(!!_.jm[d], "Fail to load style - " + d);
          c.resolve(a.open(b.value()))
        }), !0;
      return !1
    };
  _.bm.prototype.open = function(a, b) {
    _.Ak(!this.Ib, "Cannot open iframe in disposed context");
    var c = new _.Kl(a);
    b = fm(this, c, b);
    var d = new Jl(b);
    (b = c.getUrl()) && c.setUrl(_.ll(b));
    if (hm(this, c, d) || lm(this, c, d) || hm(this, c, d)) return d.promise;
    if (null != Cl(c)) {
      var e = setTimeout(function() {
          g.Ia().src = "about:blank";
          d.reject({
            timeout: "Exceeded time limit of :" + Cl(c) + "milliseconds"
          })
        }, Cl(c)),
        f = d.resolve;
      d.resolve = function(k) {
        clearTimeout(e);
        f(k)
      }
    }
    c.S.waitForOnload && yl(c.El(), function() {
      d.resolve(g)
    });
    var g = this.Xh(a);
    c.S.waitForOnload || d.resolve(g);
    return d.promise
  };
  _.bm.prototype.JI = _.fa(12);
  _.cm = function(a, b, c, d) {
    this.Ib = !1;
    this.Qd = a;
    this.oj = b;
    this.zf = c;
    this.Ba = d;
    this.zo = _.Ol(this.Ba);
    this.Gc = this.Ba.getOrigin();
    this.ZW = this.Ba.Ia();
    this.uN = this.Ba.S.where;
    this.oo = [];
    this.zp("_default");
    a = this.Ba.S.apis || [];
    for (b = 0; b < a.length; b++) this.zp(a[b]);
    this.Qd.Re[c] = this
  };
  _.h = _.cm.prototype;
  _.h.Sn = _.fa(9);
  _.h.Ea = function() {
    if (!this.Ib) {
      for (var a = 0; a < this.oo.length; a++) this.unregister(this.oo[a]);
      delete _.Fl.Re[this.Dd()];
      this.Ib = !0
    }
  };
  _.h.getContext = function() {
    return this.Qd
  };
  _.h.Ml = function() {
    return this.oj
  };
  _.h.Dd = function() {
    return this.zf
  };
  _.h.Ia = function() {
    return this.ZW
  };
  _.h.Za = function() {
    return this.uN
  };
  _.h.jf = function(a) {
    this.uN = a
  };
  _.h.xj = function() {
    (0, this.Ba.S._rpcReadyFn)()
  };
  _.h.UM = function(a, b) {
    this.Ba.value()[a] = b
  };
  _.h.IA = function(a) {
    return this.Ba.value()[a]
  };
  _.h.Sb = function() {
    return this.Ba.value()
  };
  _.h.getId = function() {
    return this.Ba.getId()
  };
  _.h.getOrigin = function() {
    return this.Gc
  };
  _.h.register = function(a, b, c) {
    _.Ak(!this.Ib, "Cannot register handler on disposed iframe " + a);
    _.Ak((c || _.Sl)(this), "Rejecting untrusted message " + a);
    c = this.zf + ":" + this.Qd.zf + ":" + a;
    1 == _.pe(Dl, c, []).push(b) && (this.oo.push(a), _.Si(c, Wl(c, this, "_g_wasClosed" === a)))
  };
  _.h.unregister = function(a, b) {
    var c = this.zf + ":" + this.Qd.zf + ":" + a,
      d = Dl[c];
    d && (b ? (b = _.zk.call(d, b), 0 <= b && d.splice(b, 1)) : d.splice(0, d.length), 0 == d.length && (b = _.zk.call(this.oo, a), 0 <= b && this.oo.splice(b, 1), _.Ti(c)))
  };
  _.h.QU = function() {
    return this.oo
  };
  _.h.zp = function(a) {
    this.wy = this.wy || [];
    if (!(0 <= _.zk.call(this.wy, a))) {
      this.wy.push(a);
      a = El[a] || {
        map: {}
      };
      for (var b in a.map) _.re(a.map, b) && this.register(b, a.map[b], a.filter)
    }
  };
  _.h.send = function(a, b, c, d) {
    _.Ak(!this.Ib, "Cannot send message to disposed iframe - " + a);
    _.Ak((d || _.Sl)(this), "Wrong target for message " + a);
    c = new Jl(c);
    _.Xi(this.oj, this.Qd.zf + ":" + this.zf + ":" + a, c.resolve, b);
    return c.promise
  };
  _.dm = function(a, b, c, d) {
    return a.send(b, c, d, _.Tl)
  };
  _.cm.prototype.iZ = function(a) {
    return a
  };
  _.cm.prototype.ping = function(a, b) {
    return _.dm(this, "_g_ping", b, a)
  };
  Dl = _.qe();
  El = _.qe();
  _.Fl = new _.bm;
  _.Zl("_g_rpcReady", _.cm.prototype.xj);
  _.Zl("_g_discover", _.cm.prototype.QU);
  _.Zl("_g_ping", _.cm.prototype.iZ);
  var km, em;
  _.jm = _.qe();
  _.gm = _.qe();
  _.im = function(a) {
    return _.jm[a]
  };
  km = function(a, b) {
    _.te.load("gapi.iframes.style." + a, b)
  };
  em = function(a, b) {
    var c = b.Ol();
    if (c) {
      b.$c(null);
      var d = _.jm[c];
      _.Ak(d, "No such style: " + c);
      b.Jo(a);
      d(b.value());
      b.Jo(null)
    }
  };
  var mm, nm;
  mm = {
    height: !0,
    width: !0
  };
  nm = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
  _.om = function(a) {
    "number" === typeof a && (a = String(a) + "px");
    return a
  };
  _.cm.prototype.vb = function() {
    if (!_.Sl(this)) return null;
    var a = this.Ba.S._popupWindow;
    if (a) return a;
    var b = this.oj.split("/");
    a = this.getContext().vb();
    for (var c = 0; c < b.length && a; c++) {
      var d = b[c];
      a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
    }
    return a
  };
  var pm = function(a, b) {
    var c = a.$a,
      d = !0;
    b.filter && (d = b.filter.call(b.Ff, b.params));
    return _.Tj(d).then(function(e) {
      return e && c ? (b.xL && b.xL.call(a, b.params), e = b.sender ? b.sender(b.params) : _.dm(c, b.message, b.params), b.P1 ? e.then(function() {
        return !0
      }) : !0) : !1
    })
  };
  _.bm.prototype.Wy = function(a, b, c) {
    a = pm(this, {
      sender: function(d) {
        var e = _.Fl.$a;
        _.Hl(_.Fl.Re, function(f) {
          f !== e && _.dm(f, "_g_wasClosed", d)
        });
        return _.dm(e, "_g_closeMe", d)
      },
      message: "_g_closeMe",
      params: a,
      Ff: c,
      filter: this.yA("onCloseSelfFilter")
    });
    b = new Jl(b);
    b.resolve(a);
    return b.promise
  };
  _.bm.prototype.oD = function(a, b, c) {
    a = a || {};
    b = new Jl(b);
    b.resolve(pm(this, {
      message: "_g_restyleMe",
      params: a,
      Ff: c,
      filter: this.yA("onRestyleSelfFilter"),
      P1: !0,
      xL: this.TN
    }));
    return b.promise
  };
  _.bm.prototype.TN = function(a) {
    "auto" === a.height && (a.height = _.mk.getHeight())
  };
  _.qm = function(a) {
    var b = {};
    if (a)
      for (var c in a) _.re(a, c) && _.re(mm, c) && nm.test(a[c]) && (b[c] = a[c]);
    return b
  };
  _.h = _.cm.prototype;
  _.h.close = function(a, b) {
    return _.dm(this, "_g_close", a, b)
  };
  _.h.Ur = function(a, b) {
    return _.dm(this, "_g_restyle", a, b)
  };
  _.h.xo = function(a, b) {
    return _.dm(this, "_g_restyleDone", a, b)
  };
  _.h.pS = function(a) {
    return this.getContext().Wy(a, void 0, this)
  };
  _.h.g_ = function(a) {
    if (a && "object" === typeof a) return this.getContext().oD(a, void 0, this)
  };
  _.h.h_ = function(a) {
    var b = this.Ba.S.onRestyle;
    b && b.call(this, a, this);
    a = a && "object" === typeof a ? _.qm(a) : {};
    (b = this.Ia()) && a && "object" === typeof a && (_.re(a, "height") && (a.height = _.om(a.height)), _.re(a, "width") && (a.width = _.om(a.width)), _.se(a, b.style))
  };
  _.h.qS = function(a) {
    var b = this.Ba.S.onClose;
    b && b.call(this, a, this);
    this.jH && this.jH() || (b = this.Ia()) && b.parentNode && b.parentNode.removeChild(b);
    if (b = this.Ba.S.controller) {
      var c = {};
      c.frameName = this.Dd();
      _.dm(b, "_g_disposeControl", c)
    }
    Vl(this.zf + ":" + this.Qd.zf + ":_g_wasClosed", a, this)
  };
  _.bm.prototype.CM = _.fa(13);
  _.bm.prototype.YM = _.fa(14);
  _.cm.prototype.TL = _.fa(15);
  _.cm.prototype.Ek = function(a, b) {
    this.register("_g_wasClosed", a, b)
  };
  _.cm.prototype.S1 = function() {
    delete this.getContext().Re[this.Dd()];
    this.getContext().vb().setTimeout((0, _.L)(function() {
      this.Ea()
    }, this), 0)
  };
  _.Zl("_g_close", _.cm.prototype.pS);
  _.Zl("_g_closeMe", _.cm.prototype.qS);
  _.Zl("_g_restyle", _.cm.prototype.g_);
  _.Zl("_g_restyleMe", _.cm.prototype.h_);
  _.Zl("_g_wasClosed", _.cm.prototype.S1);

  var vm, ym, zm, Am;
  _.ql.prototype.Ho = _.fd(8, function(a) {
    this.S.apis = a;
    return this
  });
  _.ql.prototype.Lk = _.fd(7, function(a) {
    this.S.rpctoken = a;
    return this
  });
  _.rm = function(a, b) {
    a.S.onClose = b;
    return a
  };
  _.sm = function(a) {
    this.S = a || {}
  };
  _.sm.prototype.value = function() {
    return this.S
  };
  _.sm.prototype.getIframe = function() {
    return this.S.iframe
  };
  _.tm = function(a, b) {
    a.S.role = b;
    return a
  };
  _.sm.prototype.xj = function(a) {
    this.S.setRpcReady = a;
    return this
  };
  _.sm.prototype.Lk = function(a) {
    this.S.rpctoken = a;
    return this
  };
  _.um = function(a) {
    a.S.selfConnect = !0;
    return a
  };
  vm = function(a) {
    this.S = a || {}
  };
  vm.prototype.value = function() {
    return this.S
  };
  var wm = function(a) {
    var b = new vm;
    b.S.role = a;
    return b
  };
  vm.prototype.QI = function() {
    return this.S.role
  };
  vm.prototype.Zb = function(a) {
    this.S.handler = a;
    return this
  };
  vm.prototype.rb = function() {
    return this.S.handler
  };
  var xm = function(a, b) {
    a.S.filter = b;
    return a
  };
  vm.prototype.Ho = function(a) {
    this.S.apis = a;
    return this
  };
  ym = function(a) {
    a.S.runOnce = !0;
    return a
  };
  zm = /^https?:\/\/[^\/%\\?#\s]+$/i;
  Am = {
    longdesc: !0,
    name: !0,
    src: !0,
    frameborder: !0,
    marginwidth: !0,
    marginheight: !0,
    scrolling: !0,
    align: !0,
    height: !0,
    width: !0,
    id: !0,
    "class": !0,
    title: !0,
    tabindex: !0,
    hspace: !0,
    vspace: !0,
    allowtransparency: !0
  };
  _.Bm = function(a, b, c) {
    var d = a.oj,
      e = b.zo;
    _.Nl(_.Ml(c, a.zo + "/" + b.oj), e + "/" + d);
    _.Ll(c, b.Dd()).ki(b.Gc)
  };
  _.bm.prototype.Yy = _.fa(16);
  _.h = _.cm.prototype;
  _.h.tS = function(a) {
    var b = new _.Kl(a);
    a = new _.sm(b.value());
    if (a.S.selfConnect) var c = this;
    else(_.Ak(zm.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()), c = this.Qd.Re[b.Dd()], c) ? _.Pl(b) && (c.xj(), _.dm(c, "_g_rpcReady")) : (b = _.Ll(_.Nl(_.Ml((new _.Kl).Lk(_.Al(b)), b.Ml()), _.Ol(b)).ki(b.getOrigin()), b.Dd()).xj(_.Pl(b)), c = this.Qd.Rj(b.value()));
    b = this.Qd;
    var d = a.S.role;
    a = a.S.data;
    Cm(b);
    d = d || "";
    _.pe(b.$y, d, []).push({
      Ff: c.Dd(),
      data: a
    });
    Dm(c, a, b.wC[d])
  };
  _.h.aE = function(a, b) {
    (new _.Kl(b)).S._relayedDepth || (b = {}, _.um(_.tm(new _.sm(b), "_opener")), _.dm(a, "_g_connect", b))
  };
  _.h.rL = function(a) {
    var b = this,
      c = a.S.messageHandlers,
      d = a.S.messageHandlersFilter,
      e = a.S.onClose;
    _.rm(_.vl(_.ul(a, null), null), null);
    _.Zj();
    return _.dm(this, "_g_open", a.value()).then(function(f) {
      var g = new _.Kl(f[0]),
        k = g.Dd();
      f = new _.Kl;
      var l = b.zo,
        m = _.Ol(g);
      _.Nl(_.Ml(f, b.oj + "/" + g.Ml()), m + "/" + l);
      _.Ll(f, k);
      f.ki(g.getOrigin());
      f.Ho(g.S.apis);
      f.Lk(_.Al(a));
      _.ul(f, c);
      _.vl(f, d);
      _.rm(f, e);
      (g = b.Qd.Re[k]) || (g = b.Qd.Rj(f.value()));
      return g
    })
  };
  _.h.qD = function(a) {
    var b = a.getUrl();
    _.Ak(!b || _.Pk.test(b), "Illegal url for new iframe - " + b);
    var c = a.El().value();
    b = {};
    for (var d in c) _.re(c, d) && _.re(Am, d) && (b[d] = c[d]);
    _.re(c, "style") && (d = c.style, "object" === typeof d && (b.style = _.qm(d)));
    a.value().attributes = b
  };
  _.h.VY = function(a) {
    a = new _.Kl(a);
    this.qD(a);
    var b = a.S._relayedDepth || 0;
    a.S._relayedDepth = b + 1;
    a.S.openerIframe = this;
    _.Zj();
    var c = _.Al(a);
    a.Lk(null);
    return this.Qd.open(a.value()).then((0, _.L)(function(d) {
      var e = (new _.Kl(d.Sb())).S.apis,
        f = new _.Kl;
      _.Bm(d, this, f);
      0 == b && _.tm(new _.sm(f.value()), "_opener");
      f.xj(!0);
      f.Lk(c);
      _.dm(d, "_g_connect", f.value());
      f = new _.Kl;
      _.Ll(_.Nl(_.Ml(f.Ho(e), d.Ml()), d.zo), d.Dd()).ki(d.getOrigin());
      return f.value()
    }, this))
  };
  var Cm = function(a) {
    a.$y || (a.$y = _.qe(), a.wC = _.qe())
  };
  _.bm.prototype.qy = function(a, b, c, d) {
    Cm(this);
    "object" === typeof a ? (b = new vm(a), c = b.QI() || "") : (b = xm(wm(a).Zb(b).Ho(c), d), c = a);
    d = this.$y[c] || [];
    a = !1;
    for (var e = 0; e < d.length && !a; e++) Dm(this.Re[d[e].Ff], d[e].data, [b]), a = b.S.runOnce;
    c = _.pe(this.wC, c, []);
    a || b.S.dontWait || c.push(b)
  };
  _.bm.prototype.WL = _.fa(17);
  var Dm = function(a, b, c) {
    c = c || [];
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (e && a) {
        var f = e.S.filter || _.Sl;
        if (a && f(a)) {
          f = e.S.apis || [];
          for (var g = 0; g < f.length; g++) a.zp(f[g]);
          e.rb() && e.rb()(a, b);
          e.S.runOnce && (c.splice(d, 1), --d)
        }
      }
    }
  };
  _.bm.prototype.Oj = function(a, b, c) {
    this.qy(ym(xm(wm("_opener").Zb(a).Ho(b), c)).value())
  };
  _.cm.prototype.f_ = function(a) {
    this.getContext().Oj(function(b) {
      b.send("_g_wasRestyled", a, void 0, _.Tl)
    }, null, _.Tl)
  };
  var Em = _.Fl.$a;
  Em && Em.register("_g_restyleDone", _.cm.prototype.f_, _.Tl);
  _.Zl("_g_connect", _.cm.prototype.tS);
  var Fm = {};
  Fm._g_open = _.cm.prototype.VY;
  _.Xl("_open", Fm, _.Tl);

  _.Ve.q4 = function(a) {
    var b = [];
    if (1 < arguments.length)
      for (var c = 0, d; d = arguments[c]; ++c) b.push(d);
    else b = a;
    return function(e) {
      for (var f = 0; b[f]; ++f)
        if (e === b[f]) return !0;
      return !1
    }
  };
  _.Ve.f8 = function(a) {
    return function(b) {
      return a.test(b)
    }
  };
  _.Ve.aP = function(a) {
    return "undefined" !== typeof a
  };
  _.Ve.P6 = function(a) {
    return "string" === typeof a && 0 < a.length
  };
  _.Ve.G2 = function(a) {
    return "boolean" === typeof a
  };
  _.Ve.T5 = function(a) {
    return function(b) {
      for (var c in a)
        if (a.hasOwnProperty(c) && !(0, a[c])(b[c])) return !1;
      return !0
    }
  };

  _.Oe = _.Oe || {};
  _.Oe.makeClosure = function(a, b, c) {
    for (var d = [], e = 2, f = arguments.length; e < f; ++e) d.push(arguments[e]);
    return function() {
      for (var g = d.slice(), k = 0, l = arguments.length; k < l; ++k) g.push(arguments[k]);
      return b.apply(a, g)
    }
  };
  _.Oe.wr = function(a) {
    var b, c, d = {};
    for (b = 0; c = a[b]; ++b) d[c] = c;
    return d
  };

  _.Oe = _.Oe || {};
  (function() {
    function a(d) {
      b = d["core.util"] || {}
    }
    var b = {},
      c = {};
    _.Ve && _.Ve.register("core.util", null, a);
    _.Oe.getFeatureParameters = function(d) {
      return "undefined" === typeof b[d] ? null : b[d]
    };
    _.Oe.hasFeature = function(d) {
      return "undefined" !== typeof b[d]
    };
    _.Oe.waa = function() {
      return c
    }
  })();

  _.Om = _.qe();

  _.Qm = function(a) {
    var b = window;
    a = (a || b.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
    return "1" === decodeURIComponent(a[a.length - 1] || "")
  };

  var rr, tr, ur, vr, wr, zr, Cr, Ir, Jr;
  _.er = function(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
  };
  _.fr = function(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
  };
  _.h = _.fr.prototype;
  _.h.clone = function() {
    return new _.fr(this.x, this.y)
  };
  _.h.equals = function(a) {
    return a instanceof _.fr && _.er(this, a)
  };
  _.h.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  };
  _.h.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  };
  _.h.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  _.h.translate = function(a, b) {
    a instanceof _.fr ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
    return this
  };
  _.h.scale = function(a, b) {
    this.x *= a;
    this.y *= "number" === typeof b ? b : a;
    return this
  };
  _.gr = function(a, b) {
    this.width = a;
    this.height = b
  };
  _.h = _.gr.prototype;
  _.h.clone = function() {
    return new _.gr(this.width, this.height)
  };
  _.h.aspectRatio = function() {
    return this.width / this.height
  };
  _.h.isEmpty = function() {
    return !(this.width * this.height)
  };
  _.h.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  _.h.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  _.h.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  _.h.scale = function(a, b) {
    this.width *= a;
    this.height *= "number" === typeof b ? b : a;
    return this
  };
  _.hr = function(a) {
    return "CSS1Compat" == a.compatMode
  };
  _.jr = function(a) {
    a = a.document;
    a = _.hr(a) ? a.documentElement : a.body;
    return new _.gr(a.clientWidth, a.clientHeight)
  };
  _.kr = function(a) {
    return _.jr(a || window)
  };
  _.lr = function(a) {
    return a.scrollingElement ? a.scrollingElement : !_.Lc && _.hr(a) ? a.documentElement : a.body || a.documentElement
  };
  _.mr = function(a) {
    var b = _.lr(a);
    a = a.parentWindow || a.defaultView;
    return _.Hc && _.bd("10") && a.pageYOffset != b.scrollTop ? new _.fr(b.scrollLeft, b.scrollTop) : new _.fr(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
  };
  _.nr = function(a, b, c, d) {
    return _.Qd(a.mb, b, c, d)
  };
  _.or = function(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
  };
  _.pr = function(a, b, c, d) {
    return Array.prototype.splice.apply(a, _.or(arguments, 1))
  };
  _.qr = function(a, b, c) {
    if (null !== a && b in a) throw Error("g`" + b);
    a[b] = c
  };
  rr = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };
  _.sr = function(a) {
    if (a instanceof _.nc && a.constructor === _.nc && a.EQ === _.mc) return a.ZC;
    _.$a(a);
    return "type_error:SafeStyleSheet"
  };
  tr = /^[a-zA-Z0-9-]+$/;
  ur = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  };
  vr = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
  };
  wr = function(a) {
    var b = _.Cd(_.vc),
      c = b.Jh(),
      d = [],
      e = function(f) {
        _.ab(f) ? (0, _.tb)(f, e) : (f = _.Cd(f), d.push(_.tc(f).toString()), f = f.Jh(), 0 == c ? c = f : 0 != f && c != f && (c = null))
      };
    (0, _.tb)(a, e);
    return _.uc(d.join(_.tc(b).toString()), c)
  };
  _.xr = function(a) {
    return wr(Array.prototype.slice.call(arguments))
  };
  _.yr = function(a, b, c) {
    var d = String(a);
    if (!tr.test(d)) throw Error("m");
    if (d.toUpperCase() in vr) throw Error("m");
    a = String(a);
    d = null;
    var e = "<" + a,
      f = "";
    if (b)
      for (l in b) {
        if (!tr.test(l)) throw Error("m");
        var g = b[l];
        if (null != g) {
          var k = l;
          if (g instanceof _.Ob) g = _.Pb(g);
          else if ("style" == k.toLowerCase()) {
            if (!_.kb(g)) throw Error("m");
            g instanceof _.bc || (g = _.fc(g));
            g = _.cc(g)
          } else {
            if (/^on/i.test(k)) throw Error("m");
            if (k.toLowerCase() in ur)
              if (g instanceof _.wd) g = _.zd(g);
              else if (g instanceof _.Wb) g = _.Xb(g);
            else if ("string" ===
              typeof g) g = _.Zb(g).Df();
            else throw Error("m");
          }
          g.eh && (g = g.Df());
          k = k + '="' + _.td(String(g)) + '"';
          f += " " + k
        }
      }
    var l = e + f;
    null == c ? c = [] : _.ab(c) || (c = [c]);
    !0 === rr[a.toLowerCase()] ? l += ">" : (c = _.xr(c), l += ">" + _.tc(c).toString() + "</" + a + ">", d = c.Jh());
    (b = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return _.uc(l, d)
  };
  zr = function(a) {
    return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
      return c + d.toUpperCase()
    })
  };
  _.Ar = function(a, b, c) {
    return _.Wd(document, arguments)
  };
  _.Br = function(a) {
    var b;
    if (_.Kd && !(_.Hc && _.bd("9") && !_.bd("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement)) return b;
    b = a.parentNode;
    return _.he(b) ? b : null
  };
  Cr = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
  };
  Ir = {
    IMG: " ",
    BR: "\n"
  };
  Jr = function(a, b, c) {
    if (!(a.nodeName in Cr))
      if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
      else if (a.nodeName in Ir) b.push(Ir[a.nodeName]);
    else
      for (a = a.firstChild; a;) Jr(a, b, c), a = a.nextSibling
  };
  _.Kr = function(a) {
    if (_.Jd && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
      var b = [];
      Jr(a, b, !0);
      a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    _.Jd || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
  };
  _.Lr = function(a) {
    var b = [];
    Jr(a, b, !1);
    return b.join("")
  };
  _.Mr = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  };
  _.h = _.Mr.prototype;
  _.h.Oc = function() {
    return this.right - this.left
  };
  _.h.getHeight = function() {
    return this.bottom - this.top
  };
  _.h.clone = function() {
    return new _.Mr(this.top, this.right, this.bottom, this.left)
  };
  _.h.contains = function(a) {
    return this && a ? a instanceof _.Mr ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
  };
  _.h.expand = function(a, b, c, d) {
    _.kb(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
    return this
  };
  _.h.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  _.h.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  _.h.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  _.h.translate = function(a, b) {
    a instanceof _.fr ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
    return this
  };
  _.h.scale = function(a, b) {
    b = "number" === typeof b ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this
  };
  var Pr, Vr, Tr, Yr, ks, ls;
  _.Or = function(a, b, c) {
    if ("string" === typeof b)(b = _.Nr(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = _.Nr(c, d);
        f && (c.style[f] = e)
      }
  };
  Pr = {};
  _.Nr = function(a, b) {
    var c = Pr[b];
    if (!c) {
      var d = _.Gd(b);
      c = d;
      void 0 === a.style[d] && (d = (_.Lc ? "Webkit" : _.Kc ? "Moz" : _.Hc ? "ms" : _.Gc ? "O" : null) + zr(d), void 0 !== a.style[d] && (c = d));
      Pr[b] = c
    }
    return c
  };
  _.Qr = function(a, b) {
    var c = _.Nd(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
  };
  _.Rr = function(a, b) {
    return a.currentStyle ? a.currentStyle[b] : null
  };
  _.Sr = function(a, b) {
    return _.Qr(a, b) || _.Rr(a, b) || a.style && a.style[b]
  };
  _.Ur = function(a, b, c) {
    if (b instanceof _.fr) {
      var d = b.x;
      b = b.y
    } else d = b, b = c;
    a.style.left = Tr(d, !1);
    a.style.top = Tr(b, !1)
  };
  Vr = function(a) {
    try {
      var b = a.getBoundingClientRect()
    } catch (c) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }
    _.Hc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  };
  _.Zr = function(a, b) {
    b = b || _.lr(document);
    var c = b || _.lr(document);
    var d = _.Wr(a),
      e = _.Wr(c),
      f = _.Xr(c);
    if (c == _.lr(document)) {
      var g = d.x - c.scrollLeft;
      d = d.y - c.scrollTop;
      _.Hc && !_.dd(10) && (g += f.left, d += f.top)
    } else g = d.x - e.x - f.left, d = d.y - e.y - f.top;
    a = Yr(a);
    f = c.clientHeight - a.height;
    e = c.scrollLeft;
    var k = c.scrollTop;
    e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - f, 0));
    c = new _.fr(e, k);
    b.scrollLeft = c.x;
    b.scrollTop = c.y
  };
  _.Wr = function(a) {
    var b = _.Nd(a),
      c = new _.fr(0, 0);
    var d = b ? _.Nd(b) : document;
    d = !_.Hc || _.dd(9) || _.hr(_.Od(d).mb) ? d.documentElement : d.body;
    if (a == d) return c;
    a = Vr(a);
    b = _.mr(_.Od(b).mb);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
  };
  _.as = function(a, b) {
    var c = new _.fr(0, 0),
      d = _.Td(_.Nd(a));
    if (!_.Dc(d, "parent")) return c;
    do {
      var e = d == b ? _.Wr(a) : _.$r(a);
      c.x += e.x;
      c.y += e.y
    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
    return c
  };
  _.$r = function(a) {
    a = Vr(a);
    return new _.fr(a.left, a.top)
  };
  _.bs = function(a, b, c) {
    if (b instanceof _.gr) c = b.height, b = b.width;
    else if (void 0 == c) throw Error("H");
    a.style.width = Tr(b, !0);
    a.style.height = Tr(c, !0)
  };
  Tr = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
  };
  _.cs = function(a) {
    var b = Yr;
    if ("none" != _.Sr(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
  };
  Yr = function(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = _.Lc && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = Vr(a), new _.gr(a.right - a.left, a.bottom - a.top)) : new _.gr(b, c)
  };
  _.ds = function(a, b) {
    a = a.style;
    "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
  };
  _.es = function(a, b) {
    a.style.display = b ? "" : "none"
  };
  _.gs = function(a) {
    var b = _.Od(void 0),
      c = b.tb();
    if (_.Hc && c.createStyleSheet) return b = c.createStyleSheet(), _.fs(b, a), b;
    c = _.nr(b, "HEAD")[0];
    if (!c) {
      var d = _.nr(b, "BODY")[0];
      c = b.ma("HEAD");
      d.parentNode.insertBefore(c, d)
    }
    d = b.ma("STYLE");
    _.fs(d, a);
    b.appendChild(c, d);
    return d
  };
  _.fs = function(a, b) {
    b = _.sr(b);
    _.Hc && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
  };
  _.hs = function(a) {
    return "rtl" == _.Sr(a, "direction")
  };
  _.is = _.Kc ? "MozUserSelect" : _.Lc || _.Ic ? "WebkitUserSelect" : null;
  _.js = function(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
      d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    b = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return +b
  };
  ks = {
    thin: 2,
    medium: 4,
    thick: 6
  };
  ls = function(a, b) {
    if ("none" == _.Rr(a, b + "Style")) return 0;
    b = _.Rr(a, b + "Width");
    return b in ks ? ks[b] : _.js(a, b)
  };
  _.Xr = function(a) {
    if (_.Hc && !_.dd(9)) {
      var b = ls(a, "borderLeft"),
        c = ls(a, "borderRight"),
        d = ls(a, "borderTop");
      a = ls(a, "borderBottom");
      return new _.Mr(d, c, a, b)
    }
    b = _.Qr(a, "borderLeftWidth");
    c = _.Qr(a, "borderRightWidth");
    d = _.Qr(a, "borderTopWidth");
    a = _.Qr(a, "borderBottomWidth");
    return new _.Mr(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
  };

  _.Vy = function(a) {
    this.q1 = a
  };
  _.Vy.prototype.toString = function() {
    return this.q1
  };
  _.Wy = function(a) {
    _.eq.call(this);
    this.Uh = 1;
    this.lw = [];
    this.rw = 0;
    this.lf = [];
    this.wi = {};
    this.NR = !!a
  };
  _.H(_.Wy, _.eq);
  _.h = _.Wy.prototype;
  _.h.subscribe = function(a, b, c) {
    var d = this.wi[a];
    d || (d = this.wi[a] = []);
    var e = this.Uh;
    this.lf[e] = a;
    this.lf[e + 1] = b;
    this.lf[e + 2] = c;
    this.Uh = e + 3;
    d.push(e);
    return e
  };
  _.h.Bs = _.fa(36);
  _.h.unsubscribe = function(a, b, c) {
    if (a = this.wi[a]) {
      var d = this.lf;
      if (a = _.jj(a, function(e) {
          return d[e + 1] == b && d[e + 2] == c
        })) return this.Hj(a)
    }
    return !1
  };
  _.h.Hj = function(a) {
    var b = this.lf[a];
    if (b) {
      var c = this.wi[b];
      0 != this.rw ? (this.lw.push(a), this.lf[a + 1] = _.ib) : (c && _.bq(c, a), delete this.lf[a], delete this.lf[a + 1], delete this.lf[a + 2])
    }
    return !!b
  };
  _.h.lo = function(a, b) {
    var c = this.wi[a];
    if (c) {
      for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
      if (this.NR)
        for (e = 0; e < c.length; e++) {
          var g = c[e];
          Xy(this.lf[g + 1], this.lf[g + 2], d)
        } else {
          this.rw++;
          try {
            for (e = 0, f = c.length; e < f; e++) g = c[e], this.lf[g + 1].apply(this.lf[g + 2], d)
          } finally {
            if (this.rw--, 0 < this.lw.length && 0 == this.rw)
              for (; c = this.lw.pop();) this.Hj(c)
          }
        }
      return 0 != e
    }
    return !1
  };
  var Xy = function(a, b, c) {
    _.Lj(function() {
      a.apply(b, c)
    })
  };
  _.Wy.prototype.clear = function(a) {
    if (a) {
      var b = this.wi[a];
      b && ((0, _.tb)(b, this.Hj, this), delete this.wi[a])
    } else this.lf.length = 0, this.wi = {}
  };
  _.Wy.prototype.Jb = function(a) {
    if (a) {
      var b = this.wi[a];
      return b ? b.length : 0
    }
    a = 0;
    for (b in this.wi) a += this.Jb(b);
    return a
  };
  _.Wy.prototype.ua = function() {
    _.Wy.H.ua.call(this);
    this.clear();
    this.lw.length = 0
  };
  _.Yy = function(a) {
    _.eq.call(this);
    this.Id = new _.Wy(a);
    _.hq(this, this.Id)
  };
  _.H(_.Yy, _.eq);
  _.h = _.Yy.prototype;
  _.h.subscribe = function(a, b, c) {
    return this.Id.subscribe(a.toString(), b, c)
  };
  _.h.Bs = _.fa(35);
  _.h.unsubscribe = function(a, b, c) {
    return this.Id.unsubscribe(a.toString(), b, c)
  };
  _.h.Hj = function(a) {
    return this.Id.Hj(a)
  };
  _.h.lo = function(a, b) {
    return this.Id.lo(a.toString(), b)
  };
  _.h.clear = function(a) {
    this.Id.clear(void 0 !== a ? a.toString() : void 0)
  };
  _.h.Jb = function(a) {
    return this.Id.Jb(void 0 !== a ? a.toString() : void 0)
  };

  _.Zy = function(a, b) {
    _.ab(b) || (b = [b]);
    b = (0, _.vb)(b, function(c) {
      return "string" === typeof c ? c : c.ow + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
    });
    _.Or(a, "transition", b.join(","))
  };
  _.$y = _.Lb(function() {
    if (_.Hc) return _.bd("10.0");
    var a = _.$d("DIV"),
      b = _.Lc ? "-webkit" : _.Kc ? "-moz" : _.Hc ? "-ms" : _.Gc ? "-o" : null,
      c = {
        transition: "opacity 1s linear"
      };
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = _.yr("div", {
      style: c
    });
    _.Dd(a, b);
    a = a.firstChild;
    b = a.style[_.Gd("transition")];
    return "" != ("undefined" !== typeof b ? b : a.style[_.Nr(a, "transition")] || "")
  });

  _.bz = !1;
  _.cz = function() {
    _.az = "oauth2relay" + String(2147483647 * (0, _.vg)() | 0)
  };
  _.dz = new _.Yy;
  _.ez = new _.Vy("oauth");
  _.cz();
  _.R("oauth-flow/client_id");
  var fz = String(_.R("oauth-flow/redirectUri"));
  if (fz) fz.replace(/[#][\s\S]*/, "");
  else {
    var gz = _.qg.getOrigin(window.location.href);
    _.R("oauth-flow/callbackUrl");
    encodeURIComponent(gz)
  }
  _.qg.getOrigin(window.location.href);

  _.Gm = _.pe(_.Ae, "rw", _.qe());

  var Hm = function(a, b) {
    (a = _.Gm[a]) && a.state < b && (a.state = b)
  };
  var Im = function(a) {
    a = (a = _.Gm[a]) ? a.oid : void 0;
    if (a) {
      var b = _.le.getElementById(a);
      b && b.parentNode.removeChild(b);
      delete _.Gm[a];
      Im(a)
    }
  };
  _.Jm = function(a) {
    a = a.container;
    "string" === typeof a && (a = document.getElementById(a));
    return a
  };
  _.Km = function(a) {
    var b = a.clientWidth;
    return "position:absolute;top:-10000px;width:" + (b ? b + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
  };
  _.Lm = function(a, b) {
    var c = {},
      d = a.Sb(),
      e = b && b.width,
      f = b && b.height,
      g = b && b.verticalAlign;
    g && (c.verticalAlign = g);
    e || (e = d.width || a.width);
    f || (f = d.height || a.height);
    d.width = c.width = e;
    d.height = c.height = f;
    d = a.Ia();
    e = a.getId();
    Hm(e, 2);
    a: {
      e = a.Za();c = c || {};
      if (_.Ae.oa) {
        var k = d.id;
        if (k) {
          f = (f = _.Gm[k]) ? f.state : void 0;
          if (1 === f || 4 === f) break a;
          Im(k)
        }
      }(f = e.nextSibling) && f.getAttribute && f.getAttribute("data-gapistub") && (e.parentNode.removeChild(f), e.style.cssText = "");f = c.width;g = c.height;
      var l = e.style;l.textIndent = "0";
      l.margin = "0";l.padding = "0";l.background = "transparent";l.borderStyle = "none";l.cssFloat = "none";l.styleFloat = "none";l.lineHeight = "normal";l.fontSize = "1px";l.verticalAlign = "baseline";e = e.style;e.display = "inline-block";d = d.style;d.position = "static";d.left = "0";d.top = "0";d.visibility = "visible";f && (e.width = d.width = f + "px");g && (e.height = d.height = g + "px");c.verticalAlign && (e.verticalAlign = c.verticalAlign);k && Hm(k, 3)
    }(k = b ? b.title : null) && a.Ia().setAttribute("title", k);
    (b = b ? b.ariaLabel : null) && a.Ia().setAttribute("aria-label",
      b)
  };
  _.Mm = function(a) {
    var b = a.Za();
    b && b.removeChild(a.Ia())
  };
  _.Nm = function(a) {
    a.where = _.Jm(a);
    var b = a.messageHandlers = a.messageHandlers || {},
      c = function(e) {
        _.Lm(this, e)
      };
    b._ready = c;
    b._renderstart = c;
    var d = a.onClose;
    a.onClose = function(e) {
      d && d.call(this, e);
      _.Mm(this)
    };
    a.onCreate = function(e) {
      e = e.Ia();
      e.style.cssText = _.Km(e)
    }
  };

  _.S = {};
  _.Pm = {};
  window.iframer = _.Pm;

  _.S.util = _.S.util || {};
  _.S.util.cS = function(a) {
    try {
      return !!a.document
    } catch (b) {}
    return !1
  };
  _.S.util.WI = function(a) {
    var b = a.parent;
    return a != b && _.S.util.cS(b) ? _.S.util.WI(b) : a
  };
  _.S.util.Eaa = function(a) {
    var b = a.userAgent || "";
    a = a.product || "";
    return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
  };

  var qp, rp, sp, up, vp, wp, Bp, Cp, Dp, Ep, Gp, Hp, Ip, Kp, Lp, Np;
  qp = function() {
    _.S.OJ++;
    return ["I", _.S.OJ, "_", (new Date).getTime()].join("")
  };
  rp = function(a) {
    return a instanceof Array ? a.join(",") : a instanceof Object ? _.Ff(a) : a
  };
  sp = function() {};
  up = function(a) {
    a && a.match(tp) && _.Ie("googleapis.config/gcv", a)
  };
  vp = function(a) {
    _.qg.Fy.f0(a)
  };
  wp = function(a) {
    _.qg.Fy.ID(a)
  };
  _.xp = function(a, b) {
    b = b || {};
    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    return b
  };
  _.zp = function(a, b, c, d, e) {
    var f = [],
      g;
    for (g in a)
      if (a.hasOwnProperty(g)) {
        var k = b,
          l = c,
          m = a[g],
          n = d,
          p = yp(g);
        p[k] = p[k] || {};
        n = _.Oe.makeClosure(n, m);
        m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
        p[k][l] = n;
        f.push(g)
      } if (e)
      for (g in _.S.Fn) _.S.Fn.hasOwnProperty(g) && f.push(g);
    return f.join(",")
  };
  Bp = function(a, b, c) {
    var d = {};
    if (a && a._methods) {
      a = a._methods.split(",");
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        d[f] = Ap(f, b, c)
      }
    }
    return d
  };
  Cp = function(a) {
    if (a && a.disableMultiLevelParentRelay) a = !1;
    else {
      var b;
      if (b = _.Pm && _.Pm._open && "inline" != a.style && !0 !== a.inline) a = a.container, b = !(a && ("string" == typeof a && document.getElementById(a) || document == (a.ownerDocument || a.document)));
      a = b
    }
    return a
  };
  Dp = function(a, b) {
    var c = {};
    b = b.params || {};
    for (var d in a) "#" == d.charAt(0) && (c[d.substring(1)] = a[d]), 0 == d.indexOf("fr-") && (c[d.substring(3)] = a[d]), "#" == b[d] && (c[d] = a[d]);
    for (var e in c) delete a["fr-" + e], delete a["#" + e], delete a[e];
    return c
  };
  Ep = function(a) {
    if (":" == a.charAt(0)) {
      var b = _.R("iframes/" + a.substring(1));
      a = {};
      _.se(b, a);
      (b = a.url) && (a.url = _.kl(b));
      a.params || (a.params = {});
      return a
    }
    return {
      url: _.kl(a)
    }
  };
  Gp = function(a) {
    function b() {}
    b.prototype = Fp.prototype;
    a.prototype = new b
  };
  Hp = function(a) {
    return _.S.As[a]
  };
  Ip = function(a, b) {
    _.S.As[a] = b
  };
  Kp = function(a) {
    a = a || {};
    "auto" === a.height && (a.height = _.mk.getHeight());
    var b = window && Jp && Jp.Ma();
    b ? b.cM(a.width || 0, a.height || 0) : _.Pm && _.Pm._resizeMe && _.Pm._resizeMe(a)
  };
  Lp = function(a) {
    up(a)
  };
  _.Mp = function() {
    return _.ke.location.origin || _.ke.location.protocol + "//" + _.ke.location.host
  };
  Np = function(a) {
    var b = _.ue(a.location.href, "urlindex");
    if (b = _.pe(_.Ae, "fUrl", [])[b]) {
      var c = a.location.hash;
      b += /#/.test(b) ? c.replace(/^#/, "&") : c;
      a.location.replace(b)
    }
  };
  if (window.ToolbarApi) Jp = window.ToolbarApi, Jp.Ma = window.ToolbarApi.getInstance, Jp.prototype = window.ToolbarApi.prototype, _.h = Jp.prototype, _.h.openWindow = Jp.prototype.openWindow, _.h.kH = Jp.prototype.closeWindow, _.h.SM = Jp.prototype.setOnCloseHandler, _.h.ZG = Jp.prototype.canClosePopup, _.h.cM = Jp.prototype.resizeWindow;
  else {
    var Jp = function() {},
      Op = null;
    Jp.Ma = function() {
      !Op && window.external && window.external.GTB_IsToolbar && (Op = new Jp);
      return Op
    };
    _.h = Jp.prototype;
    _.h.openWindow = function(a) {
      return window.external.GTB_OpenPopup &&
        window.external.GTB_OpenPopup(a)
    };
    _.h.kH = function(a) {
      window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
    };
    _.h.SM = function(a, b) {
      window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
    };
    _.h.ZG = function(a) {
      return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
    };
    _.h.cM = function(a, b) {
      return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
    };
    window.ToolbarApi = Jp;
    window.ToolbarApi.getInstance = Jp.Ma
  };
  var Pp = function() {
      _.Lf.register("_noop_echo", function() {
        this.callback(_.S.KU(_.S.sk[this.f]))
      })
    },
    Qp = function() {
      window.setTimeout(function() {
        _.Lf.call("..", "_noop_echo", _.S.dZ)
      }, 0)
    },
    Ap = function(a, b, c) {
      var d = function(e) {
        var f = Array.prototype.slice.call(arguments, 0),
          g = f[f.length - 1];
        if ("function" === typeof g) {
          var k = g;
          f.pop()
        }
        f.unshift(b, a, k, c);
        _.Lf.call.apply(_.Lf, f)
      };
      d._iframe_wrapped_rpc_ = !0;
      return d
    },
    yp = function(a) {
      _.S.ww[a] || (_.S.ww[a] = {}, _.Lf.register(a, function(b, c) {
        var d = this.f;
        if (!("string" != typeof b ||
            b in {} || d in {})) {
          var e = this.callback,
            f = _.S.ww[a][d],
            g;
          f && Object.hasOwnProperty.call(f, b) ? g = f[b] : Object.hasOwnProperty.call(_.S.Fn, a) && (g = _.S.Fn[a]);
          if (g) return d = Array.prototype.slice.call(arguments, 1), g._iframe_wrapped_rpc_ && e && d.push(e), g.apply({}, d)
        }
        _.hb(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
        return null
      }));
      return _.S.ww[a]
    };
  _.S.$R = function(a, b, c) {
    var d = Array.prototype.slice.call(arguments);
    _.S.KI(function(e) {
      e.sameOrigin && (d.unshift("/" + e.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.Lf.call.apply(_.Lf, d))
    })
  };
  _.S.BZ = function(a, b) {
    _.Lf.register(a, b)
  };
  var tp = /^[-_.0-9A-Za-z]+$/,
    Rp = {
      open: "open",
      onready: "ready",
      close: "close",
      onresize: "resize",
      onOpen: "open",
      onReady: "ready",
      onClose: "close",
      onResize: "resize",
      onRenderStart: "renderstart"
    },
    Sp = {
      onBeforeParentOpen: "beforeparentopen"
    },
    Tp = {
      onOpen: function(a) {
        var b = a.Sb();
        a.If(b.container || b.element);
        return a
      },
      onClose: function(a) {
        a.remove()
      }
    };
  _.S.El = function(a) {
    var b = _.qe();
    _.se(_.Zk, b);
    _.se(a, b);
    return b
  };
  var Fp = function(a, b, c, d, e, f, g, k) {
    this.config = Ep(a);
    this.openParams = this.Ir = b || {};
    this.params = c || {};
    this.methods = d;
    this.$w = !1;
    Up(this, b.style);
    this.Hp = {};
    Vp(this, function() {
      var l;
      (l = this.Ir.style) && _.S.As[l] ? l = _.S.As[l] : l ? (_.gb(['Missing handler for style "', l, '". Continuing with default handler.'].join("")), l = null) : l = Tp;
      if (l) {
        if ("function" === typeof l) var m = l(this);
        else {
          var n = {};
          for (m in l) {
            var p = l[m];
            n[m] = "function" === typeof p ? _.Oe.makeClosure(l, p, this) : p
          }
          m = n
        }
        for (var t in e) l = m[t], "function" === typeof l &&
          Wp(this, e[t], _.Oe.makeClosure(m, l))
      }
      f && Wp(this, "close", f)
    });
    this.fj = this.ac = g;
    this.HC = (k || []).slice();
    g && this.HC.unshift(g.getId())
  };
  Fp.prototype.Sb = function() {
    return this.Ir
  };
  Fp.prototype.getParams = function() {
    return this.params
  };
  Fp.prototype.Iu = function() {
    return this.methods
  };
  Fp.prototype.Nc = function() {
    return this.fj
  };
  var Up = function(a, b) {
      a.$w || ((b = b && !_.S.As[b] && _.S.oz[b]) ? (a.nz = [], b(function() {
        a.$w = !0;
        for (var c = 0, d = a.nz.length; c < d; ++c) a.nz[c].call(a)
      })) : a.$w = !0)
    },
    Vp = function(a, b) {
      a.$w ? b.call(a) : a.nz.push(b)
    };
  Fp.prototype.Tc = function(a, b) {
    Vp(this, function() {
      Wp(this, a, b)
    })
  };
  var Wp = function(a, b, c) {
    a.Hp[b] = a.Hp[b] || [];
    a.Hp[b].push(c)
  };
  Fp.prototype.um = function(a, b) {
    Vp(this, function() {
      var c = this.Hp[a];
      if (c)
        for (var d = 0, e = c.length; d < e; ++d)
          if (c[d] === b) {
            c.splice(d, 1);
            break
          }
    })
  };
  Fp.prototype.Yg = function(a, b) {
    var c = this.Hp[a];
    if (c)
      for (var d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length; e < f; ++e) try {
        var g = c[e].apply({}, d)
      } catch (k) {
        _.hb(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join(""))
      }
    return g
  };
  var Xp = function(a) {
      return "number" == typeof a ? {
        value: a,
        hA: a + "px"
      } : "100%" == a ? {
        value: 100,
        hA: "100%",
        kK: !0
      } : null
    },
    Yp = function(a, b, c, d, e, f, g) {
      Fp.call(this, a, b, c, d, Rp, e, f, g);
      this.id = b.id || qp();
      this.Wr = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * (0, _.vg)());
      this.MW = Dp(this.params, this.config);
      this.Zz = {};
      Vp(this, function() {
        this.Yg("open");
        _.xp(this.Zz, this)
      })
    };
  Gp(Yp);
  _.h = Yp.prototype;
  _.h.If = function(a, b) {
    if (!this.config.url) return _.hb("Cannot open iframe, empty URL."), this;
    var c = this.id;
    _.S.sk[c] = this;
    var d = _.xp(this.methods);
    d._ready = this.bw;
    d._close = this.close;
    d._open = this.cw;
    d._resizeMe = this.uo;
    d._renderstart = this.lL;
    var e = this.MW;
    this.Wr && (e.rpctoken = this.Wr);
    e._methods = _.zp(d, c, "", this, !0);
    this.el = a = "string" === typeof a ? document.getElementById(a) : a;
    d = {};
    d.id = c;
    if (b) {
      d.attributes = b;
      var f = b.style;
      if ("string" === typeof f) {
        if (f) {
          var g = [];
          f = f.split(";");
          for (var k = 0, l = f.length; k <
            l; ++k) {
            var m = f[k];
            if (0 != m.length || k + 1 != l) m = m.split(":"), 2 == m.length && m[0].match(/^[ a-zA-Z_-]+$/) && m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? g.push(m.join(":")) : _.hb(['Iframe style "', f[k], '" not allowed.'].join(""))
          }
          g = g.join(";")
        } else g = "";
        b.style = g
      }
    }
    this.Sb().allowPost && (d.allowPost = !0);
    this.Sb().forcePost && (d.forcePost = !0);
    d.queryParams = this.params;
    d.fragmentParams = e;
    d.paramsSerializer = rp;
    this.dh = _.ml(this.config.url, a, d);
    a = this.dh.getAttribute("data-postorigin") || this.dh.src;
    _.S.sk[c] = this;
    _.Lf.setAuthToken(this.id,
      this.Wr);
    _.Lf.setRelayUrl(this.id, a);
    return this
  };
  _.h.xe = function(a, b) {
    this.Zz[a] = b
  };
  _.h.getId = function() {
    return this.id
  };
  _.h.Ia = function() {
    return this.dh
  };
  _.h.Za = function() {
    return this.el
  };
  _.h.jf = function(a) {
    this.el = a
  };
  _.h.bw = function(a) {
    var b = Bp(a, this.id, "");
    this.fj && "function" == typeof this.methods._ready && (a._methods = _.zp(b, this.fj.getId(), this.id, this, !1), this.methods._ready(a));
    _.xp(a, this);
    _.xp(b, this);
    this.Yg("ready", a)
  };
  _.h.lL = function(a) {
    this.Yg("renderstart", a)
  };
  _.h.close = function(a) {
    a = this.Yg("close", a);
    delete _.S.sk[this.id];
    return a
  };
  _.h.remove = function() {
    var a = document.getElementById(this.id);
    a && a.parentNode && a.parentNode.removeChild(a)
  };
  _.h.cw = function(a) {
    var b = Bp(a.params, this.id, a.proxyId);
    delete a.params._methods;
    "_parent" == a.openParams.anchor && (a.openParams.anchor = this.el);
    if (Cp(a.openParams)) new Zp(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain);
    else {
      var c = new Yp(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain),
        d = this;
      Vp(c, function() {
        var e = {
            childId: c.getId()
          },
          f = c.Zz;
        f._toclose = c.close;
        e._methods = _.zp(f, d.id, c.id, c, !1);
        b._onopen(e)
      })
    }
  };
  _.h.uo = function(a) {
    if (void 0 === this.Yg("resize", a) && this.dh) {
      var b = Xp(a.width);
      null != b && (this.dh.style.width = b.hA);
      a = Xp(a.height);
      null != a && (this.dh.style.height = a.hA);
      this.dh.parentElement && (null != b && b.kK || null != a && a.kK) && (this.dh.parentElement.style.display = "block")
    }
  };
  var Zp = function(a, b, c, d, e, f, g) {
    Fp.call(this, a, b, c, d, Sp, e, f, g);
    this.url = a;
    this.Hm = null;
    this.aD = qp();
    Vp(this, function() {
      this.Yg("beforeparentopen");
      var k = _.xp(this.methods);
      k._onopen = this.UY;
      k._ready = this.bw;
      k._onclose = this.SY;
      this.params._methods = _.zp(k, "..", this.aD, this, !0);
      k = {};
      for (m in this.params) k[m] = rp(this.params[m]);
      var l = this.config.url;
      if (this.Ir.hideUrlFromParent) {
        var m = window.name;
        var n = l;
        l = _.Nk(this.config.url, this.params, {}, rp);
        var p = k;
        k = {};
        k._methods = p._methods;
        k["#opener"] = p["#opener"];
        k["#urlindex"] = p["#urlindex"];
        k["#opener"] && void 0 != p["#urlindex"] ? (k["#opener"] = m + "," + k["#opener"], m = n) : (n = _.pe(_.Ae, "fUrl", []), p = n.length, n[p] = l, _.Ae.rUrl = Np, k["#opener"] = m, k["#urlindex"] = p, m = _.qg.getOrigin(_.ke.location.href), l = _.R("iframes/relay_url_" + encodeURIComponent(m)) || "/_/gapi/sibling/1/frame.html", m += l);
        l = m
      }
      _.Pm._open({
        url: l,
        openParams: this.Ir,
        params: k,
        proxyId: this.aD,
        openedByProxyChain: this.HC
      })
    })
  };
  Gp(Zp);
  Zp.prototype.$U = function() {
    return this.Hm
  };
  Zp.prototype.UY = function(a) {
    this.Hm = a.childId;
    var b = Bp(a, "..", this.Hm);
    _.xp(b, this);
    this.close = b._toclose;
    _.S.sk[this.Hm] = this;
    this.fj && this.methods._onopen && (a._methods = _.zp(b, this.fj.getId(), this.Hm, this, !1), this.methods._onopen(a))
  };
  Zp.prototype.bw = function(a) {
    var b = String(this.Hm),
      c = Bp(a, "..", b);
    _.xp(a, this);
    _.xp(c, this);
    this.Yg("ready", a);
    this.fj && this.methods._ready && (a._methods = _.zp(c, this.fj.getId(), b, this, !1), this.methods._ready(a))
  };
  Zp.prototype.SY = function(a) {
    if (this.fj && this.methods._onclose) this.methods._onclose(a);
    else return a = this.Yg("close", a), delete _.S.sk[this.Hm], a
  };
  var $p = function(a, b, c, d, e, f, g) {
    Fp.call(this, a, b, c, d, Sp, f, g);
    this.id = b.id || qp();
    this.p1 = e;
    d._close = this.close;
    this.onClosed = this.eL;
    this.jO = 0;
    Vp(this, function() {
      this.Yg("beforeparentopen");
      var k = _.xp(this.methods);
      this.params._methods = _.zp(k, "..", this.aD, this, !0);
      k = {};
      k.queryParams = this.params;
      a = _.dl(_.le, this.config.url, this.id, k);
      var l = e.openWindow(a);
      this.canAutoClose = function(m) {
        m(e.ZG(l))
      };
      e.SM(l, this);
      this.jO = l
    })
  };
  Gp($p);
  $p.prototype.close = function(a) {
    a = this.Yg("close", a);
    this.p1.kH(this.jO);
    return a
  };
  $p.prototype.eL = function() {
    this.Yg("close")
  };
  (function() {
    _.S.sk = {};
    _.S.As = {};
    _.S.oz = {};
    _.S.OJ = 0;
    _.S.ww = {};
    _.S.Fn = {};
    _.S.iw = null;
    _.S.hw = [];
    _.S.dZ = function(c) {
      var d = !1;
      try {
        if (null != c) {
          var e = window.parent.frames[c.id];
          d = e.iframer.id == c.id && e.iframes.openedId_(_.Pm.id)
        }
      } catch (f) {}
      try {
        _.S.iw = {
          origin: this.origin,
          referer: this.referer,
          claimedOpenerId: c && c.id,
          claimedOpenerProxyChain: c && c.proxyChain || [],
          sameOrigin: d
        };
        for (c = 0; c < _.S.hw.length; ++c) _.S.hw[c](_.S.iw);
        _.S.hw = []
      } catch (f) {}
    };
    _.S.KU = function(c) {
      var d = c && c.fj,
        e = null;
      d && (e = {}, e.id = d.getId(), e.proxyChain =
        c.HC);
      return e
    };
    Pp();
    if (window.parent != window) {
      var a = _.Oe.getUrlParameters();
      a.gcv && up(a.gcv);
      var b = a.jsh;
      b && vp(b);
      _.xp(Bp(a, "..", ""), _.Pm);
      _.xp(a, _.Pm);
      Qp()
    }
    _.S.rb = Hp;
    _.S.Zb = Ip;
    _.S.e0 = Lp;
    _.S.resize = Kp;
    _.S.XT = function(c) {
      return _.S.oz[c]
    };
    _.S.ND = function(c, d) {
      _.S.oz[c] = d
    };
    _.S.bM = Kp;
    _.S.E0 = Lp;
    _.S.Xu = {};
    _.S.Xu.get = Hp;
    _.S.Xu.set = Ip;
    _.S.CR = function(c, d) {
      yp(c);
      _.S.Fn[c] = d || window[c]
    };
    _.S.Y$ = function(c) {
      delete _.S.Fn[c]
    };
    _.S.open = function(c, d, e, f, g, k) {
      3 == arguments.length ? f = {} : 4 == arguments.length && "function" ===
        typeof f && (g = f, f = {});
      var l = "bubble" === d.style && Jp ? Jp.Ma() : null;
      return l ? new $p(c, d, e, f, l, g, k) : Cp(d) ? new Zp(c, d, e, f, g, k) : new Yp(c, d, e, f, g, k)
    };
    _.S.close = function(c, d) {
      _.Pm && _.Pm._close && _.Pm._close(c, d)
    };
    _.S.ready = function(c, d, e) {
      2 == arguments.length && "function" === typeof d && (e = d, d = {});
      var f = c || {};
      "height" in f || (f.height = _.mk.getHeight());
      f._methods = _.zp(d || {}, "..", "", _.Pm, !0);
      _.Pm && _.Pm._ready && _.Pm._ready(f, e)
    };
    _.S.KI = function(c) {
      _.S.iw ? c(_.S.iw) : _.S.hw.push(c)
    };
    _.S.YY = function(c) {
      return !!_.S.sk[c]
    };
    _.S.iU = function() {
      return ["https://ssl.gstatic.com/gb/js/", _.R("googleapis.config/gcv")].join("")
    };
    _.S.ML = function(c) {
      var d = {
        mouseover: 1,
        mouseout: 1
      };
      if (_.Pm._event)
        for (var e = 0; e < c.length; e++) {
          var f = c[e];
          f in d && _.Oe.attachBrowserEvent(document, f, function(g) {
            _.Pm._event({
              event: g.type,
              timestamp: (new Date).getTime()
            })
          }, !0)
        }
    };
    _.S.o0 = vp;
    _.S.ID = wp;
    _.S.$aa = sp;
    _.S.RJ = _.Pm
  })();
  _.y("iframes.allow", _.S.CR);
  _.y("iframes.callSiblingOpener", _.S.$R);
  _.y("iframes.registerForOpenedSibling", _.S.BZ);
  _.y("iframes.close", _.S.close);
  _.y("iframes.getGoogleConnectJsUri", _.S.iU);
  _.y("iframes.getHandler", _.S.rb);
  _.y("iframes.getDeferredHandler", _.S.XT);
  _.y("iframes.getParentInfo", _.S.KI);
  _.y("iframes.iframer", _.S.RJ);
  _.y("iframes.open", _.S.open);
  _.y("iframes.openedId_", _.S.YY);
  _.y("iframes.propagate", _.S.ML);
  _.y("iframes.ready", _.S.ready);
  _.y("iframes.resize", _.S.resize);
  _.y("iframes.setGoogleConnectJsVersion", _.S.e0);
  _.y("iframes.setBootstrapHint", _.S.ID);
  _.y("iframes.setJsHint", _.S.o0);
  _.y("iframes.setHandler", _.S.Zb);
  _.y("iframes.setDeferredHandler", _.S.ND);
  _.y("IframeBase", Fp);
  _.y("IframeBase.prototype.addCallback", Fp.prototype.Tc);
  _.y("IframeBase.prototype.getMethods", Fp.prototype.Iu);
  _.y("IframeBase.prototype.getOpenerIframe", Fp.prototype.Nc);
  _.y("IframeBase.prototype.getOpenParams", Fp.prototype.Sb);
  _.y("IframeBase.prototype.getParams", Fp.prototype.getParams);
  _.y("IframeBase.prototype.removeCallback", Fp.prototype.um);
  _.y("Iframe", Yp);
  _.y("Iframe.prototype.close", Yp.prototype.close);
  _.y("Iframe.prototype.exposeMethod", Yp.prototype.xe);
  _.y("Iframe.prototype.getId", Yp.prototype.getId);
  _.y("Iframe.prototype.getIframeEl", Yp.prototype.Ia);
  _.y("Iframe.prototype.getSiteEl", Yp.prototype.Za);
  _.y("Iframe.prototype.openInto", Yp.prototype.If);
  _.y("Iframe.prototype.remove", Yp.prototype.remove);
  _.y("Iframe.prototype.setSiteEl", Yp.prototype.jf);
  _.y("Iframe.prototype.addCallback", Yp.prototype.Tc);
  _.y("Iframe.prototype.getMethods", Yp.prototype.Iu);
  _.y("Iframe.prototype.getOpenerIframe", Yp.prototype.Nc);
  _.y("Iframe.prototype.getOpenParams", Yp.prototype.Sb);
  _.y("Iframe.prototype.getParams", Yp.prototype.getParams);
  _.y("Iframe.prototype.removeCallback", Yp.prototype.um);
  _.y("IframeProxy", Zp);
  _.y("IframeProxy.prototype.getTargetIframeId", Zp.prototype.$U);
  _.y("IframeProxy.prototype.addCallback", Zp.prototype.Tc);
  _.y("IframeProxy.prototype.getMethods", Zp.prototype.Iu);
  _.y("IframeProxy.prototype.getOpenerIframe", Zp.prototype.Nc);
  _.y("IframeProxy.prototype.getOpenParams", Zp.prototype.Sb);
  _.y("IframeProxy.prototype.getParams", Zp.prototype.getParams);
  _.y("IframeProxy.prototype.removeCallback", Zp.prototype.um);
  _.y("IframeWindow", $p);
  _.y("IframeWindow.prototype.close", $p.prototype.close);
  _.y("IframeWindow.prototype.onClosed", $p.prototype.eL);
  _.y("iframes.util.getTopMostAccessibleWindow", _.S.util.WI);
  _.y("iframes.handlers.get", _.S.Xu.get);
  _.y("iframes.handlers.set", _.S.Xu.set);
  _.y("iframes.resizeMe", _.S.bM);
  _.y("iframes.setVersionOverride", _.S.E0);
  Fp.prototype.send = function(a, b, c) {
    _.S.pM(this, a, b, c)
  };
  _.Pm.send = function(a, b, c) {
    _.S.pM(_.Pm, a, b, c)
  };
  Fp.prototype.register = function(a, b) {
    var c = this;
    c.Tc(a, function(d) {
      b.call(c, d)
    })
  };
  _.S.pM = function(a, b, c, d) {
    var e = [];
    void 0 !== c && e.push(c);
    d && e.push(function(f) {
      d.call(this, [f])
    });
    a[b] && a[b].apply(a, e)
  };
  _.S.ep = function() {
    return !0
  };
  _.y("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.S.ep);
  _.y("IframeBase.prototype.send", Fp.prototype.send);
  _.y("IframeBase.prototype.register", Fp.prototype.register);
  _.y("Iframe.prototype.send", Yp.prototype.send);
  _.y("Iframe.prototype.register", Yp.prototype.register);
  _.y("IframeProxy.prototype.send", Zp.prototype.send);
  _.y("IframeProxy.prototype.register", Zp.prototype.register);
  _.y("IframeWindow.prototype.send", $p.prototype.send);
  _.y("IframeWindow.prototype.register", $p.prototype.register);
  _.y("iframes.iframer.send", _.S.RJ.send);

  var dt = _.S.Zb,
    et = {
      open: function(a) {
        var b = _.Jm(a.Sb());
        return a.If(b, {
          style: _.Km(b)
        })
      },
      attach: function(a, b) {
        var c = _.Jm(a.Sb()),
          d = b.id,
          e = b.getAttribute("data-postorigin") || b.src,
          f = /#(?:.*&)?rpctoken=(\d+)/.exec(e);
        f = f && f[1];
        a.id = d;
        a.Wr = f;
        a.el = c;
        a.dh = b;
        _.S.sk[d] = a;
        b = _.xp(a.methods);
        b._ready = a.bw;
        b._close = a.close;
        b._open = a.cw;
        b._resizeMe = a.uo;
        b._renderstart = a.lL;
        _.zp(b, d, "", a, !0);
        _.Lf.setAuthToken(a.id, a.Wr);
        _.Lf.setRelayUrl(a.id, e);
        c = _.S.El({
          style: _.Km(c)
        });
        for (var g in c) Object.prototype.hasOwnProperty.call(c,
          g) && ("style" == g ? a.dh.style.cssText = c[g] : a.dh.setAttribute(g, c[g]))
      }
    };
  et.onready = _.Lm;
  et.onRenderStart = _.Lm;
  et.close = _.Mm;
  dt("inline", et);

  _.pg = (window.gapi || {}).load;

  var Rm, Sm, Tm, Um, Vm, Wm, $m, an;
  Rm = function(a) {
    if (_.oe.test(Object.keys)) return Object.keys(a);
    var b = [],
      c;
    for (c in a) _.re(a, c) && b.push(c);
    return b
  };
  Sm = function(a, b) {
    if (!_.If()) try {
      a()
    } catch (c) {}
    _.Jf(b)
  };
  Tm = {
    button: !0,
    div: !0,
    span: !0
  };
  Um = function(a) {
    var b = _.pe(_.Ae, "sws", []);
    return 0 <= _.zk.call(b, a)
  };
  Vm = function(a) {
    return _.pe(_.Ae, "watt", _.qe())[a]
  };
  Wm = function(a) {
    return function(b, c) {
      return a ? _.il()[c] || a[c] || "" : _.il()[c] || ""
    }
  };
  _.Xm = {
    callback: 1,
    clientid: 1,
    cookiepolicy: 1,
    openidrealm: -1,
    includegrantedscopes: -1,
    requestvisibleactions: 1,
    scope: 1
  };
  _.Ym = !1;
  _.Zm = function() {
    if (!_.Ym) {
      for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
        var c = a[b].name.toLowerCase();
        if (_.ld(c, "google-signin-")) {
          c = c.substring(14);
          var d = a[b].content;
          _.Xm[c] && d && (_.Om[c] = d)
        }
      }
      if (window.self !== window.top) {
        a = document.location.toString();
        for (var e in _.Xm) 0 < _.Xm[e] && (b = _.ue(a, e, "")) && (_.Om[e] = b)
      }
      _.Ym = !0
    }
    e = _.qe();
    _.se(_.Om, e);
    return e
  };
  $m = function(a) {
    var b;
    a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
    return _.Ok(document, b ? b : a)
  };
  an = function(a) {
    a = a || "canonical";
    for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
      var e = b[c],
        f = e.getAttribute("rel");
      if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = $m(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
    }
    return window.location.href
  };
  _.bn = function() {
    return window.location.origin || window.location.protocol + "//" + window.location.host
  };
  _.cn = function(a, b, c, d) {
    return (a = "string" == typeof a ? a : void 0) ? $m(a) : an(d)
  };
  _.dn = function(a, b, c) {
    null == a && c && (a = c.db, null == a && (a = c.gwidget && c.gwidget.db));
    return a || void 0
  };
  _.en = function(a, b, c) {
    null == a && c && (a = c.ecp, null == a && (a = c.gwidget && c.gwidget.ecp));
    return a || void 0
  };
  _.fn = function(a, b, c) {
    return _.cn(a, b, c, b.action ? void 0 : "publisher")
  };
  var gn, hn, jn, kn, ln, mn, on, nn;
  gn = {
    se: "0"
  };
  hn = {
    post: !0
  };
  jn = {
    style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
  };
  kn = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
  ln = _.pe(_.Ae, "WI", _.qe());
  mn = ["style", "data-gapiscan"];
  on = function(a) {
    for (var b = _.qe(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
      var f = a.attributes[d],
        g = f.name,
        k = f.value;
      0 <= _.zk.call(mn, g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
    }
    a = a.style;
    (c = nn(a && a.height)) && (b.height = String(c));
    (a = nn(a && a.width)) && (b.width = String(a));
    return b
  };
  _.qn = function(a, b, c, d, e, f) {
    if (c.rd) var g = b;
    else g = document.createElement("div"), b.setAttribute("data-gapistub", !0), g.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(g, b);
    f.siteElement = g;
    g.id || (g.id = _.pn(a));
    b = _.qe();
    b[">type"] = a;
    _.se(c, b);
    a = _.ml(d, g, e);
    f.iframeNode = a;
    f.id = a.getAttribute("id")
  };
  _.pn = function(a) {
    _.pe(ln, a, 0);
    return "___" + a + "_" + ln[a]++
  };
  nn = function(a) {
    var b = void 0;
    "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
    return b
  };
  var rn = function() {},
    wn = function(a) {
      var b = a.ln,
        c = function(l) {
          c.H.constructor.call(this, l);
          var m = this.Ch.length;
          this.Qg = [];
          for (var n = 0; n < m; ++n) this.Ch[n].U$ || (this.Qg[n] = new this.Ch[n](l))
        };
      _.H(c, b);
      for (var d = []; a && a !== Object;) {
        if (b = a.ln) {
          b.Ch && (_.Ke(d, b.Ch), _.Le(d));
          var e = b.prototype,
            f;
          for (f in e)
            if (e.hasOwnProperty(f) && _.mb(e[f]) && e[f] !== b) {
              var g = !!e[f].F$,
                k = un(f, e, d, g);
              (g = vn(f, e, k, g)) && (c.prototype[f] = g)
            }
        }
        a = a === Object ? Object : Object.getPrototypeOf ? Object.getPrototypeOf(a.prototype).constructor || Object :
          a.H && a.H.constructor || Object
      }
      c.prototype.Ch = d;
      return c
    },
    un = function(a, b, c, d) {
      for (var e = [], f = 0; f < c.length && (c[f].prototype[a] === b[a] || (e.push(f), !d)); ++f);
      return e
    },
    vn = function(a, b, c, d) {
      return c.length ? d ? function(e) {
        var f = this.Qg[c[0]];
        return f ? f[a].apply(this.Qg[c[0]], arguments) : this.Ch[c[0]].prototype[a].apply(this, arguments)
      } : b[a].bS ? function(e) {
        a: {
          var f = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var k = this.Qg[c[g]];
            if (k = k ? k[a].apply(k, f) : this.Ch[c[g]].prototype[a].apply(this,
                f)) {
              f = k;
              break a
            }
          }
          f = !1
        }
        return f
      } : b[a].aS ? function(e) {
        a: {
          var f = Array.prototype.slice.call(arguments, 0);
          for (var g = 0; g < c.length; ++g) {
            var k = this.Qg[c[g]];
            k = k ? k[a].apply(k, f) : this.Ch[c[g]].prototype[a].apply(this, f);
            if (null != k) {
              f = k;
              break a
            }
          }
          f = void 0
        }
        return f
      } : b[a].WK ? function(e) {
        for (var f = Array.prototype.slice.call(arguments, 0), g = 0; g < c.length; ++g) {
          var k = this.Qg[c[g]];
          k ? k[a].apply(k, f) : this.Ch[c[g]].prototype[a].apply(this, f)
        }
      } : function(e) {
        for (var f = Array.prototype.slice.call(arguments, 0), g = [], k = 0; k < c.length; ++k) {
          var l =
            this.Qg[c[k]];
          g.push(l ? l[a].apply(l, f) : this.Ch[c[k]].prototype[a].apply(this, f))
        }
        return g
      } : d || b[a].bS || b[a].aS || b[a].WK ? null : xn
    },
    xn = function() {
      return []
    };
  rn.prototype.dA = function(a) {
    if (this.Qg)
      for (var b = 0; b < this.Qg.length; ++b)
        if (this.Qg[b] instanceof a) return this.Qg[b];
    return null
  };
  var yn = function(a) {
    return this.Xa.dA(a)
  };
  var zn, An, Bn, Dn, En = /(?:^|\s)g-((\S)*)(?:$|\s)/,
    Fn = {
      plusone: !0,
      autocomplete: !0,
      profile: !0,
      signin: !0,
      signin2: !0
    };
  zn = _.pe(_.Ae, "SW", _.qe());
  An = _.pe(_.Ae, "SA", _.qe());
  Bn = _.pe(_.Ae, "SM", _.qe());
  Dn = _.pe(_.Ae, "FW", []);
  var Gn = function(a, b) {
      return ("string" === typeof a ? document.getElementById(a) : a) || b
    },
    Kn = function(a, b) {
      var c;
      Hn.ps0 = (new Date).getTime();
      In("ps0");
      a = Gn(a, _.le);
      var d = _.le.documentMode;
      if (a.querySelectorAll && (!d || 8 < d)) {
        d = b ? [b] : Rm(zn).concat(Rm(An)).concat(Rm(Bn));
        for (var e = [], f = 0; f < d.length; f++) {
          var g = d[f];
          e.push(".g-" + g, "g\\:" + g)
        }
        d = a.querySelectorAll(e.join(","))
      } else d = a.getElementsByTagName("*");
      a = _.qe();
      for (e = 0; e < d.length; e++) {
        f = d[e];
        var k = f;
        g = b;
        var l = k.nodeName.toLowerCase(),
          m = void 0;
        if (k.getAttribute("data-gapiscan")) g =
          null;
        else {
          var n = l.indexOf("g:");
          0 == n ? m = l.substr(2) : (n = (n = String(k.className || k.getAttribute("class"))) && En.exec(n)) && (m = n[1]);
          g = !m || !(zn[m] || An[m] || Bn[m]) || g && m !== g ? null : m
        }
        g && (Fn[g] || 0 == f.nodeName.toLowerCase().indexOf("g:") || 0 != Rm(on(f)).length) && (f.setAttribute("data-gapiscan", !0), _.pe(a, g, []).push(f))
      }
      for (p in a) Dn.push(p);
      Hn.ps1 = (new Date).getTime();
      In("ps1");
      if (b = Dn.join(":")) try {
        _.te.load(b, void 0)
      } catch (t) {
        _.Re(t);
        return
      }
      e = [];
      for (c in a) {
        d = a[c];
        var p = 0;
        for (b = d.length; p < b; p++) f = d[p], Jn(c, f,
          on(f), e, b)
      }
    };
  var Ln = function(a, b) {
      var c = Vm(a);
      b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : _.te.load(a, function() {
        var d = Vm(a),
          e = b && b.iframeNode,
          f = b && b.userParams;
        e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = _.te[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
      })
    },
    Jn = function(a, b, c, d, e, f, g) {
      switch (Mn(b, a, f)) {
        case 0:
          a = Bn[a] ? a + "_annotation" : a;
          d = {};
          d.iframeNode = b;
          d.userParams = c;
          Ln(a, d);
          break;
        case 1:
          if (b.parentNode) {
            for (var k in c) {
              if (f = _.re(c, k)) f = c[k], f = !!f && "object" === typeof f && (!f.toString ||
                f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
              if (f) try {
                c[k] = _.Ff(c[k])
              } catch (w) {
                delete c[k]
              }
            }
            k = !0;
            c.dontclear && (k = !1);
            delete c.dontclear;
            var l;
            f = {};
            var m = l = a;
            "plus" == a && c.action && (l = a + "_" + c.action, m = a + "/" + c.action);
            (l = _.R("iframes/" + l + "/url")) || (l = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + m + "?usegapi=1");
            for (n in gn) f[n] = n + "/" + (c[n] || gn[n]) + "/";
            var n = _.Ok(_.le, l.replace(_.hl, Wm(f)));
            m = "iframes/" + a + "/params/";
            f = {};
            _.se(c, f);
            (l = _.R("lang") || _.R("gwidget/lang")) &&
            (f.hl = l);
            hn[a] || (f.origin = _.bn());
            f.exp = _.R(m + "exp");
            if (m = _.R(m + "location"))
              for (l = 0; l < m.length; l++) {
                var p = m[l];
                f[p] = _.ke.location[p]
              }
            switch (a) {
              case "plus":
              case "follow":
                f.url = _.fn(f.href, c, null);
                delete f.href;
                break;
              case "plusone":
                m = (m = c.href) ? $m(m) : an();
                f.url = m;
                f.db = _.dn(c.db, void 0, _.R());
                f.ecp = _.en(c.ecp, void 0, _.R());
                delete f.href;
                break;
              case "signin":
                f.url = an()
            }
            _.Ae.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var t in gn) f[t] && delete f[t];
            f.gsrc = _.R("iframes/:source:");
            t = _.R("inline/css");
            "undefined" !== typeof t && 0 < e && t >= e && (f.ic = "1");
            t = /^#|^fr-/;
            e = {};
            for (var r in f) _.re(f, r) && t.test(r) && (e[r.replace(t, "")] = f[r], delete f[r]);
            r = "q" == _.R("iframes/" + a + "/params/si") ? f : e;
            t = _.Zm();
            for (var u in t) !_.re(t, u) || _.re(f, u) || _.re(e, u) || (r[u] = t[u]);
            u = [].concat(kn);
            r = _.R("iframes/" + a + "/methods");
            _.yk(r) && (u = u.concat(r));
            for (v in c) _.re(c, v) && /^on/.test(v) && ("plus" != a || "onconnect" != v) && (u.push(v), delete f[v]);
            delete f.callback;
            e._methods = u.join(",");
            var v = _.Nk(n, f, e);
            u = g || {};
            u.allowPost = 1;
            u.attributes =
              jn;
            u.dontclear = !k;
            g = {};
            g.userParams = c;
            g.url = v;
            g.type = a;
            _.qn(a, b, c, v, u, g);
            b = g.id;
            c = _.qe();
            c.id = b;
            c.userParams = g.userParams;
            c.url = g.url;
            c.type = g.type;
            c.state = 1;
            _.Gm[b] = c;
            b = g
          } else b = null;
          b && ((c = b.id) && d.push(c), Ln(a, b))
      }
    },
    Mn = function(a, b, c) {
      if (a && 1 === a.nodeType && b) {
        if (c) return 1;
        if (Bn[b]) {
          if (Tm[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
        } else {
          if (An[b]) return 0;
          if (zn[b]) return 1
        }
      }
      return null
    };
  _.pe(_.te, "platform", {}).go = function(a, b) {
    Kn(a, b)
  };
  var Nn = _.pe(_.Ae, "perf", _.qe()),
    Hn = _.pe(Nn, "g", _.qe()),
    On = _.pe(Nn, "i", _.qe()),
    Pn, Qn, Rn, In, Tn, Un, Vn;
  _.pe(Nn, "r", []);
  Pn = _.qe();
  Qn = _.qe();
  Rn = function(a, b, c, d) {
    Pn[c] = Pn[c] || !!d;
    _.pe(Qn, c, []);
    Qn[c].push([a, b])
  };
  In = function(a, b, c) {
    var d = Nn.r;
    "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
  };
  Tn = function(a, b, c, d) {
    if ("_p" == b) throw Error("B");
    _.Sn(a, b, c, d)
  };
  _.Sn = function(a, b, c, d) {
    Un(b, c)[a] = d || (new Date).getTime();
    In(a, b, c)
  };
  Un = function(a, b) {
    a = _.pe(On, a, _.qe());
    return _.pe(a, b, _.qe())
  };
  Vn = function(a, b, c) {
    var d = null;
    b && c && (d = Un(b, c)[a]);
    return d || Hn[a]
  };
  (function() {
    function a(g) {
      this.t = {};
      this.tick = function(k, l, m) {
        this.t[k] = [void 0 != m ? m : (new Date).getTime(), l];
        if (void 0 == m) try {
          window.console.timeStamp("CSI/" + k)
        } catch (n) {}
      };
      this.tick("start", null, g)
    }
    var b;
    if (window.performance) var c = (b = window.performance.timing) && b.responseStart;
    var d = 0 < c ? new a(c) : new a;
    window.__gapi_jstiming__ = {
      Timer: a,
      load: d
    };
    if (b) {
      var e = b.navigationStart;
      0 < e && c >= e && (window.__gapi_jstiming__.srt = c - e)
    }
    if (b) {
      var f = window.__gapi_jstiming__.load;
      0 < e && c >= e && (f.tick("_wtsrt", void 0, e),
        f.tick("wtsrt_", "_wtsrt", c), f.tick("tbsd_", "wtsrt_"))
    }
    try {
      b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT), f && 0 < e && (f.tick("_tbnd", void 0, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", e))), null == b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT, f && 0 < e && (f.tick("_tbnd", void 0, window.external.startE), f.tick("tbnd_", "_tbnd", e))), b && (window.__gapi_jstiming__.pt = b)
    } catch (g) {}
  })();
  if (window.__gapi_jstiming__) {
    window.__gapi_jstiming__.NG = {};
    window.__gapi_jstiming__.PZ = 1;
    var Wn = function(a, b, c) {
      var d = a.t[b],
        e = a.t.start;
      if (d && (e || c)) return d = a.t[b][0], e = void 0 != c ? c : e[0], Math.round(d - e)
    };
    window.__gapi_jstiming__.getTick = Wn;
    window.__gapi_jstiming__.getLabels = function(a) {
      var b = [],
        c;
      for (c in a.t) b.push(c);
      return b
    };
    var Xn = function(a, b, c) {
        var d = "";
        window.__gapi_jstiming__.srt && (d += "&srt=" + window.__gapi_jstiming__.srt);
        window.__gapi_jstiming__.pt && (d += "&tbsrt=" + window.__gapi_jstiming__.pt);
        try {
          window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (p) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes)) {
          e().wasFetchedViaSpdy && (d += "&p=s");
          if (e().wasNpnNegotiated) {
            d += "&npn=1";
            var f = e().npnNegotiatedProtocol;
            f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
          }
          e().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var g = a.t,
          k = g.start;
        e = [];
        f = [];
        for (var l in g)
          if ("start" != l && 0 != l.indexOf("_")) {
            var m = g[l][1];
            m ? g[m] && f.push(l + "." + Wn(a, l, g[m][0])) : k && e.push(l + "." + Wn(a, l))
          } if (b)
          for (var n in b) d += "&" + n + "=" + b[n];
        (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
      },
      Yn = function(a, b, c) {
        a = Xn(a, b, c);
        if (!a) return "";
        b = new Image;
        var d = window.__gapi_jstiming__.PZ++;
        window.__gapi_jstiming__.NG[d] = b;
        b.onload = b.onerror = function() {
          window.__gapi_jstiming__ && delete window.__gapi_jstiming__.NG[d]
        };
        b.src = a;
        b = null;
        return a
      };
    window.__gapi_jstiming__.report = function(a, b, c) {
      var d = document.visibilityState,
        e = "visibilitychange";
      d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
      if ("prerender" == d) {
        var f = !1,
          g = function() {
            if (!f) {
              b ? b.prerender = "1" : b = {
                prerender: "1"
              };
              if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var k = !1;
              else Yn(a, b, c),
                k = !0;
              k && (f = !0, document.removeEventListener(e, g, !1))
            }
          };
        document.addEventListener(e, g, !1);
        return ""
      }
      return Yn(a, b, c)
    }
  };
  var Zn = {
      g: "gapi_global",
      m: "gapi_module",
      w: "gwidget"
    },
    $n = function(a, b) {
      this.type = a ? "_p" == a ? "m" : "w" : "g";
      this.name = a;
      this.Po = b
    };
  $n.prototype.key = function() {
    switch (this.type) {
      case "g":
        return this.type;
      case "m":
        return this.type + "." + this.Po;
      case "w":
        return this.type + "." + this.name + this.Po
    }
  };
  var ao = new $n,
    bo = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),
    co = _.pe(Nn, "_c", _.qe()),
    eo = Math.random() < (_.R("csi/rate") || 0),
    go = function(a, b, c) {
      for (var d = new $n(b, c), e = _.pe(co, d.key(), _.qe()), f = Qn[a] || [], g = 0; g < f.length; ++g) {
        var k = f[g],
          l = k[0],
          m = a,
          n = b,
          p = c;
        k = Vn(k[1], n, p);
        m = Vn(m, n, p);
        e[l] = k && m ? m - k : null
      }
      Pn[a] && eo && (fo(ao), fo(d))
    },
    ho = function(a, b) {
      b = b || [];
      for (var c = [], d = 0; d < b.length; d++) c.push(a + b[d]);
      return c
    },
    fo = function(a) {
      var b = _.ke.__gapi_jstiming__;
      b.sn = Zn[a.type];
      var c = new b.Timer(0);
      a: {
        switch (a.type) {
          case "g":
            var d = "global";
            break a;
          case "m":
            d = a.Po;
            break a;
          case "w":
            d = a.name;
            break a
        }
        d = void 0
      }
      c.name = d;
      d = !1;
      var e = a.key(),
        f = co[e];
      c.tick("_start", null, 0);
      for (var g in f) c.tick(g, "_start", f[g]), d = !0;
      co[e] = _.qe();
      d && (g = [], g.push("l" + (_.R("isPlusUser") ? "1" : "0")), d = "m" + (bo ? "1" : "0"), g.push(d), "m" == a.type ? g.push("p" + a.Po) : "w" == a.type && (e = "n" + a.Po, g.push(e), "0" == a.Po && g.push(d + e)), g.push("u" + (_.R("isLoggedIn") ? "1" : "0")), a = ho("", g), a = ho("abc_", a).join(","), b.report(c, {
        e: a
      }))
    };
  Rn("blt", "bs0", "bs1");
  Rn("psi", "ps0", "ps1");
  Rn("rpcqi", "rqe", "rqd");
  Rn("bsprt", "bsrt0", "bsrt1");
  Rn("bsrqt", "bsrt1", "bsrt2");
  Rn("bsrst", "bsrt2", "bsrt3");
  Rn("mli", "ml0", "ml1");
  Rn("mei", "me0", "me1", !0);
  Rn("wcdi", "wrs", "wcdi");
  Rn("wci", "wrs", "wdc");
  Rn("wdi", "wrs", "wrdi");
  Rn("wdt", "bs0", "wrdt");
  Rn("wri", "wrs", "wrri", !0);
  Rn("wrt", "bs0", "wrrt");
  Rn("wji", "wje0", "wje1", !0);
  Rn("wjli", "wjl0", "wjl1");
  Rn("whi", "wh0", "wh1", !0);
  Rn("wai", "waaf0", "waaf1", !0);
  Rn("wadi", "wrs", "waaf1", !0);
  Rn("wadt", "bs0", "waaf1", !0);
  Rn("wprt", "wrt0", "wrt1");
  Rn("wrqt", "wrt1", "wrt2");
  Rn("wrst", "wrt2", "wrt3", !0);
  Rn("fbprt", "fsrt0", "fsrt1");
  Rn("fbrqt", "fsrt1", "fsrt2");
  Rn("fbrst", "fsrt2", "fsrt3", !0);
  Rn("fdns", "fdns0", "fdns1");
  Rn("fcon", "fcon0", "fcon1");
  Rn("freq", "freq0", "freq1");
  Rn("frsp", "frsp0", "frsp1");
  Rn("fttfb", "fttfb0", "fttfb1");
  Rn("ftot", "ftot0", "ftot1", !0);
  var io = Nn.r;
  if ("function" !== typeof io) {
    for (var jo; jo = io.shift();) go.apply(null, jo);
    Nn.r = go
  };
  var ko = ["div"],
    lo = "onload",
    mo = !0,
    no = !0,
    oo = function(a) {
      return a
    },
    po = null,
    qo = function(a) {
      var b = _.R(a);
      return "undefined" !== typeof b ? b : _.R("gwidget/" + a)
    },
    Mo, No, Oo, Po, Fo, Ho, Qo, Go, Ro, So, To, Uo;
  po = _.R();
  _.R("gwidget");
  var ro = qo("parsetags");
  lo = "explicit" === ro || "onload" === ro ? ro : lo;
  var so = qo("google_analytics");
  "undefined" !== typeof so && (mo = !!so);
  var to = qo("data_layer");
  "undefined" !== typeof to && (no = !!to);
  var uo = function() {
      var a = this && this.getId();
      a && (_.Ae.drw = a)
    },
    vo = function() {
      _.Ae.drw = null
    },
    wo = function(a) {
      return function(b) {
        var c = a;
        "number" === typeof b ? c = b : "string" === typeof b && (c = b.indexOf("px"), -1 != c && (b = b.substring(0, c)), c = parseInt(b, 10));
        return c
      }
    },
    xo = function(a) {
      "string" === typeof a && (a = window[a]);
      return "function" === typeof a ? a : null
    },
    yo = function() {
      return qo("lang") || "en-US"
    },
    zo = function(a) {
      if (!_.S.rb("attach")) {
        var b = {},
          c = _.S.rb("inline"),
          d;
        for (d in c) c.hasOwnProperty(d) && (b[d] = c[d]);
        b.open = function(e) {
          var f =
            e.Sb().renderData.id;
          f = document.getElementById(f);
          if (!f) throw Error("C");
          return c.attach(e, f)
        };
        _.S.Zb("attach", b)
      }
      a.style = "attach"
    },
    Ao = function() {
      var a = {};
      a.width = [wo(450)];
      a.height = [wo(24)];
      a.onready = [xo];
      a.lang = [yo, "hl"];
      a.iloader = [function() {
        return _.Ae.ILI
      }, "iloader"];
      return a
    }(),
    Do = function(a) {
      var b = {};
      b.Me = a[0];
      b.Wo = -1;
      b.Yba = "___" + b.Me + "_";
      b.T1 = "g:" + b.Me;
      b.Paa = "g-" + b.Me;
      b.XL = [];
      b.config = {};
      b.Ht = [];
      b.XN = {};
      b.kx = {};
      var c = function(e) {
          for (var f in e)
            if (_.re(e, f)) {
              b.config[f] = [xo];
              b.Ht.push(f);
              var g =
                e[f],
                k = null,
                l = null,
                m = null;
              "function" === typeof g ? k = g : g && "object" === typeof g && (k = g.Daa, l = g.lx, m = g.SE);
              m && (b.Ht.push(m), b.config[m] = [xo], b.XN[f] = m);
              k && (b.config[f] = [k]);
              l && (b.kx[f] = l)
            }
        },
        d = function(e) {
          for (var f = {}, g = 0; g < e.length; ++g) f[e[g].toLowerCase()] = 1;
          f[b.T1] = 1;
          b.ZX = f
        };
      a[1] && (b.parameters = a[1]);
      (function(e) {
        b.config = e;
        for (var f in Ao) Ao.hasOwnProperty(f) && !b.config.hasOwnProperty(f) && (b.config[f] = Ao[f])
      })(a[2] || {});
      a[3] && c(a[3]);
      a[4] && d(a[4]);
      a[5] && (b.Gk = a[5]);
      b.Pba = !0 === a[6];
      b.qZ = a[7];
      b.D1 = a[8];
      b.ZX || d(ko);
      b.CC = function(e) {
        b.Wo++;
        Tn("wrs", b.Me, String(b.Wo));
        var f = [],
          g = e.element,
          k = e.config,
          l = ":" + b.Me;
        ":plus" == l && e.Dk && e.Dk.action && (l += "_" + e.Dk.action);
        var m = Bo(b, k),
          n = {};
        _.se(_.Zm(), n);
        for (var p in e.Dk) null != e.Dk[p] && (n[p] = e.Dk[p]);
        p = {
          container: g.id,
          renderData: e.KZ,
          style: "inline",
          height: k.height,
          width: k.width
        };
        zo(p);
        b.Gk && (f[2] = p, f[3] = n, f[4] = m, b.Gk("i", f));
        l = _.S.open(l, p, n, m);
        Co(b, l, k, g, e.CS);
        f[5] = l;
        b.Gk && b.Gk("e", f)
      };
      return b
    },
    Bo = function(a, b) {
      for (var c = {}, d = a.Ht.length - 1; 0 <= d; --d) {
        var e =
          a.Ht[d],
          f = b[a.XN[e] || e] || b[e],
          g = b[e];
        g && f !== g && (f = function(l, m) {
          return function(n) {
            m.apply(this, arguments);
            l.apply(this, arguments)
          }
        }(f, g));
        f && (c[e] = f)
      }
      for (var k in a.kx) a.kx.hasOwnProperty(k) && (c[k] = Eo(c[k] || function() {}, a.kx[k]));
      c.drefresh = uo;
      c.erefresh = vo;
      return c
    },
    Eo = function(a, b) {
      return function(c) {
        var d = b(c);
        if (d) {
          var e = c.href || null;
          if (mo) {
            if (window._gat) try {
              var f = window._gat._getTrackerByName("~0");
              f && "UA-XXXXX-X" != f._getAccount() ? f._trackSocial("Google", d, e) : window._gaq && window._gaq.push(["_trackSocial",
                "Google", d, e
              ])
            } catch (k) {}
            if (window.ga && window.ga.getAll) try {
              var g = window.ga.getAll();
              for (f = 0; f < g.length; f++) g[f].send("social", "Google", d, e)
            } catch (k) {}
          }
          if (no && window.dataLayer) try {
            window.dataLayer.push({
              event: "social",
              socialNetwork: "Google",
              socialAction: d,
              socialTarget: e
            })
          } catch (k) {}
        }
        a.call(this, c)
      }
    },
    Co = function(a, b, c, d, e) {
      Fo(b, c);
      Go(b, d);
      Ho(a, b, e);
      Io(a.Me, a.Wo.toString(), b);
      (new Jo).Xa.$k(a, b, c, d, e)
    },
    Jo = function() {
      if (!this.Xa) {
        for (var a = this.constructor; a && !a.ln;) a = a.H && a.H.constructor;
        a.ln.CH || (a.ln.CH =
          wn(a));
        this.Xa = new a.ln.CH(this);
        this.dA || (this.dA = yn)
      }
    },
    Ko = function() {},
    Lo = Jo;
  Ko.H || _.H(Ko, rn);
  Lo.ln = Ko;
  Ko.prototype.$k = function(a) {
    a = a ? a : function() {};
    a.WK = !0;
    return a
  }();
  Mo = function(a) {
    return _.cm && "undefined" != typeof _.cm && a instanceof _.cm
  };
  No = function(a) {
    return Mo(a) ? "_renderstart" : "renderstart"
  };
  Oo = function(a) {
    return Mo(a) ? "_ready" : "ready"
  };
  Po = function() {
    return !0
  };
  Fo = function(a, b) {
    if (b.onready) {
      var c = !1,
        d = function() {
          c || (c = !0, b.onready.call(null))
        };
      a.register(Oo(a), d, Po);
      a.register(No(a), d, Po)
    }
  };
  Ho = function(a, b, c) {
    var d = a.Me,
      e = String(a.Wo),
      f = !1,
      g = function() {
        f || (f = !0, c && Tn("wrdt", d, e), Tn("wrdi", d, e))
      };
    b.register(No(b), g, Po);
    var k = !1;
    a = function() {
      k || (k = !0, g(), c && Tn("wrrt", d, e), Tn("wrri", d, e))
    };
    b.register(Oo(b), a, Po);
    Mo(b) ? b.register("widget-interactive-" + b.id, a, Po) : _.Lf.register("widget-interactive-" + b.id, a);
    _.Lf.register("widget-csi-tick-" + b.id, function(l, m, n) {
      "wdc" === l ? Tn("wdc", d, e, n) : "wje0" === l ? Tn("wje0", d, e, n) : "wje1" === l ? Tn("wje1", d, e, n) : "wh0" == l ? _.Sn("wh0", d, e, n) : "wh1" == l ? _.Sn("wh1", d,
        e, n) : "wcdi" == l && _.Sn("wcdi", d, e, n)
    })
  };
  Qo = function(a) {
    return "number" == typeof a ? a + "px" : "100%" == a ? a : null
  };
  Go = function(a, b) {
    var c = function(d) {
      d = d || a;
      var e = Qo(d.width);
      e && b.style.width != e && (b.style.width = e);
      (d = Qo(d.height)) && b.style.height != d && (b.style.height = d)
    };
    Mo(a) ? a.UM("onRestyle", c) : (a.register("ready", c, Po), a.register("renderstart", c, Po), a.register("resize", c, Po))
  };
  Ro = function(a, b) {
    for (var c in Ao)
      if (Ao.hasOwnProperty(c)) {
        var d = Ao[c][1];
        d && !b.hasOwnProperty(d) && (b[d] = a[d])
      } return b
  };
  So = function(a, b) {
    var c = {},
      d;
    for (d in a) a.hasOwnProperty(d) && (c[a[d][1] || d] = (a[d] && a[d][0] || oo)(b[d.toLowerCase()], b, po));
    return c
  };
  To = function(a) {
    if (a = a.qZ)
      for (var b = 0; b < a.length; b++)(new Image).src = a[b]
  };
  Uo = function(a, b) {
    var c = b.userParams,
      d = b.siteElement;
    d || (d = (d = b.iframeNode) && d.parentNode);
    if (d && 1 === d.nodeType) {
      var e = So(a.config, c);
      a.XL.push({
        element: d,
        config: e,
        Dk: Ro(e, So(a.parameters, c)),
        vba: 3,
        CS: !!c["data-onload"],
        KZ: b
      })
    }
    b = a.XL;
    for (a = a.CC; 0 < b.length;) a(b.shift())
  };
  _.Vo = function(a) {
    var b = Do(a);
    To(b);
    _.Rk(b.Me, function(d) {
      Uo(b, d)
    });
    zn[b.Me] = !0;
    var c = {
      wa: function(d, e, f) {
        var g = e || {};
        g.type = b.Me;
        e = g.type;
        delete g.type;
        var k = Gn(d);
        if (k) {
          d = {};
          for (var l in g) _.re(g, l) && (d[l.toLowerCase()] = g[l]);
          d.rd = 1;
          (l = !!d.ri) && delete d.ri;
          Jn(e, k, d, [], 0, l, f)
        } else _.Re("string" === "gapi." + e + ".render: missing element " + typeof d ? d : "")
      },
      go: function(d) {
        Kn(d, b.Me)
      },
      wba: function() {
        var d = _.pe(_.Ae, "WI", _.qe()),
          e;
        for (e in d) delete d[e]
      }
    };
    a = function() {
      "onload" === lo && c.go()
    };
    Um(b.Me) || Sm(a,
      a);
    _.y("gapi." + b.Me + ".go", c.go);
    _.y("gapi." + b.Me + ".render", c.wa);
    return c
  };
  var Wo = Uo,
    Xo = function(a, b) {
      a.Wo++;
      Tn("wrs", a.Me, String(a.Wo));
      var c = b.userParams,
        d = So(a.config, c),
        e = [],
        f = b.iframeNode,
        g = b.siteElement,
        k = Bo(a, d),
        l = So(a.parameters, c);
      _.se(_.Zm(), l);
      l = Ro(d, l);
      c = !!c["data-onload"];
      var m = _.Fl,
        n = _.qe();
      n.renderData = b;
      n.height = d.height;
      n.width = d.width;
      n.id = b.id;
      n.url = b.url;
      n.iframeEl = f;
      n.where = n.container = g;
      n.apis = ["_open"];
      n.messageHandlers = k;
      n.messageHandlersFilter = _.Tl;
      _.Nm(n);
      f = l;
      a.Gk && (e[2] = n, e[3] = f, e[4] = k, a.Gk("i", e));
      k = m.Rj(n);
      k.id = b.id;
      k.aE(k, n);
      Co(a, k, d, g, c);
      e[5] =
        k;
      a.Gk && a.Gk("e", e)
    };
  Uo = function(a, b) {
    var c = b.url;
    a.D1 || _.Qm(c) ? _.$l ? Xo(a, b) : (0, _.pg)("gapi.iframes.impl", function() {
      Xo(a, b)
    }) : _.S.open ? Wo(a, b) : (0, _.pg)("iframes", function() {
      Wo(a, b)
    })
  };
  var Yo = function() {
      var a = window;
      return !!a.performance && !!a.performance.getEntries
    },
    Io = function(a, b, c) {
      if (Yo()) {
        var d = function() {
            var f = !1;
            return function() {
              if (f) return !0;
              f = !0;
              return !1
            }
          }(),
          e = function() {
            d() || window.setTimeout(function() {
              var f = c.Ia().src;
              var g = f.indexOf("#"); - 1 != g && (f = f.substring(0, g));
              f = window.performance.getEntriesByName(f);
              1 > f.length ? f = null : (f = f[0], f = 0 == f.responseStart ? null : f);
              if (f) {
                g = Math.round(f.requestStart);
                var k = Math.round(f.responseStart),
                  l = Math.round(f.responseEnd);
                Tn("wrt0",
                  a, b, Math.round(f.startTime));
                Tn("wrt1", a, b, g);
                Tn("wrt2", a, b, k);
                Tn("wrt3", a, b, l)
              }
            }, 1E3)
          };
        c.register(No(c), e, Po);
        c.register(Oo(c), e, Po)
      }
    };
  _.y("gapi.widget.make", _.Vo);

  var iz, jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, uz, vz, wz, xz, yz, zz, Az, Bz, Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, Oz, Pz, Qz, Rz, Sz, Tz, Uz, Vz, Wz, Xz, Yz, aA, $z, bA, cA, dA, eA, fA, gA, iA, jA, lA;
  _.hz = function(a, b) {
    if (_.kh && !b) return _.q.atob(a);
    var c = "";
    _.iw(a, function(d) {
      c += String.fromCharCode(d)
    });
    return c
  };
  iz = function(a) {
    var b = String(a("immediate") || "");
    a = String(a("prompt") || "");
    return "true" === b || "none" === a
  };
  jz = function(a) {
    return _.R("enableMultilogin") && a("cookie_policy") && !iz(a) ? !0 : !1
  };
  mz = function() {
    var a, b = null;
    _.Vh.iterate(function(c, d) {
      0 === c.indexOf("G_AUTHUSER_") && (c = _.Wh(c.substring(11)), !a || c.De && !a.De || c.De == a.De && c.Dh > a.Dh) && (a = c, b = d)
    });
    return {
      XR: a,
      authuser: b
    }
  };
  nz = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
  oz = function(a) {
    a = a.toUpperCase();
    for (var b = 0, c = nz.length; b < c; ++b) {
      var d = a.split(nz[b]);
      2 == d.length && "" === d[1] && (a = d[0])
    }
    a = a.replace(/-/g, "_").toUpperCase();
    40 < a.length && (b = new _.Kh, b.LE(a), a = b.Rg().toUpperCase());
    return a
  };
  pz = function(a) {
    if (!a) return [];
    a = a.split("=");
    return a[1] ? a[1].split("|") : []
  };
  qz = function(a) {
    a = a.split(":");
    return {
      clientId: a[0].split("=")[1],
      O_: pz(a[1]),
      Xaa: pz(a[2]),
      eaa: pz(a[3])
    }
  };
  rz = function(a) {
    var b = mz(),
      c = b.XR;
    b = b.authuser;
    var d = a && oz(a);
    if (null !== b) {
      var e;
      _.Vh.iterate(function(g, k) {
        (g = _.Xh(g)) && g.PB && (d && g.nS != d || g.De == c.De && g.Dh == c.Dh && (e = k))
      });
      if (e) {
        var f = qz(e);
        a = f && f.O_[Number(b)];
        f = f && f.clientId;
        if (a) return {
          authuser: b,
          Fba: a,
          clientId: f
        }
      }
    }
    return null
  };
  sz = function(a, b) {
    a = _.Gh(a);
    if (!a || !b && a.error) return null;
    b = Math.floor((new Date).getTime() / 1E3);
    return a.expires_at && b > a.expires_at ? null : a
  };
  _.tz = function(a, b) {
    if (b) {
      var c = b;
      var d = a
    } else "string" === typeof a ? d = a : c = a;
    c ? _.kw(c, d) : _.lw(d)
  };
  uz = function(a) {
    if (!a) return null;
    "single_host_origin" !== a && (a = _.Lf.getOrigin(a));
    var b = window.location.hostname,
      c = b,
      d = _.Uh;
    if ("single_host_origin" !== a) {
      c = a.split("://");
      if (2 == c.length) d = "https" === c.shift();
      else return _.Re("WARNING invalid cookie_policy: " + a), null;
      c = c[0]
    }
    if (-1 !== c.indexOf(":")) c = b = "";
    else {
      a = "." + c;
      if (b.lastIndexOf(a) !== b.length - a.length) return _.Re("Invalid cookie_policy domain: " + c), null;
      c = a;
      b = c.split(".").length - 1
    }
    return {
      domain: c,
      De: d,
      Dh: b
    }
  };
  vz = function(a) {
    var b = uz(a);
    if (!b) return new _.Oh("G_USERSTATE_");
    a = ["G_USERSTATE_", _.Uh && b.De ? "S" : "H", b.Dh].join("");
    var c = _.ai[a];
    c || (c = {
      aY: 63072E3
    }, _.se(_.ei(b), c), c = new _.Lh(a, c), _.ai[a] = c, b = c.read(), "undefined" !== typeof b && null !== b && (document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/", c.write(b)));
    return c
  };
  wz = function(a) {
    var b = vz(a).read();
    a = _.qe();
    if (b) {
      b = b.split(":");
      for (var c; c = b.shift();) c = c.split("="), a[c[0]] = c[1]
    }
    return a
  };
  xz = function(a, b, c) {
    var d = wz(b),
      e = d[a];
    d[a] = "0";
    var f = [];
    _.Hl(d, function(k, l) {
      f.push(l + "=" + k)
    });
    var g = f.join(":");
    b = vz(b);
    g ? b.write(g) : b.clear();
    d[a] !== e && c && c()
  };
  yz = function(a, b) {
    b = wz(b);
    return "0" == b[a] || "X" == b[a]
  };
  zz = function(a) {
    a = uz(a.g_user_cookie_policy);
    if (!a || a.De && !_.Uh) a = null;
    else {
      var b = ["G_AUTHUSER_", _.Uh && a.De ? "S" : "H", a.Dh].join(""),
        c = _.$h[b];
      c || (c = new _.Vh(b, _.ei(a)), _.$h[b] = c);
      a = c
    }
    _.Ie("googleapis.config/sessionIndex", null);
    a.clear()
  };
  Az = function(a) {
    return iz(function(b) {
      return a[b]
    })
  };
  Bz = 0;
  Cz = !1;
  Dz = [];
  Ez = {};
  Fz = {};
  Gz = null;
  Hz = function(a) {
    var b = _.az;
    return function(c) {
      if (this.f == b && this.t == _.Lf.getAuthToken(this.f) && this.origin == _.Lf.getTargetOrigin(this.f)) return a.apply(this, arguments)
    }
  };
  Iz = function(a) {
    "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true"
  };
  Jz = function(a) {
    if (_.bz && a && !decodeURIComponent(a).startsWith("m;/_/scs/")) throw Error("ta");
  };
  Kz = function(a) {
    var b = _.Oe.getUrlParameters,
      c = b(a).jsh;
    if (null != c) return Jz(c), a;
    if (b = String(b().jsh || _.Ae.h || "")) Jz(b), c = (a + "#").indexOf("#"), a = a.substr(0, c) + (-1 !== a.substr(0, c).indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(b) + a.substr(c);
    return a
  };
  Lz = function() {
    return !!_.R("oauth-flow/usegapi")
  };
  Mz = function(a, b) {
    Lz() ? Gz.unregister(a) : _.Lf.unregister(a + ":" + b)
  };
  Nz = function(a, b, c) {
    Lz() ? Gz.register(a, c, _.Tl) : _.Lf.register(a + ":" + b, Hz(c))
  };
  Oz = function() {
    kz.parentNode.removeChild(kz)
  };
  Pz = function(a) {
    var b = kz;
    _.Zy(b, [{
      ow: "-webkit-transform",
      duration: 1,
      timing: "ease",
      delay: 0
    }]);
    _.Zy(b, [{
      ow: "transform",
      duration: 1,
      timing: "ease",
      delay: 0
    }]);
    _.py(function() {
      b.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
      b.style.transform = "translate3d(0px," + a + "px,0px)"
    }, 0)
  };
  Qz = function() {
    var a = lz + 88;
    Pz(a);
    lz = a
  };
  Rz = function() {
    var a = lz - 88;
    Pz(a);
    lz = a
  };
  Sz = function(a) {
    var b = a ? Qz : Rz,
      c = a ? Rz : Qz;
    a = a ? "-" : "";
    lz = parseInt(a + 88, 10);
    kz.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
    kz.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
    kz.style.display = "";
    kz.style.visibility = "visible";
    b();
    _.py(c, 4E3);
    _.py(Oz, 5E3)
  };
  Tz = function(a) {
    var b = _.R("oauth-flow/toast/position");
    "top" !== b && (b = "bottom");
    var c = document.createElement("div");
    kz = c;
    c.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
    _.Or(c, "visibility", "hidden");
    _.Or(c, b, "-40px");
    _.Or(c, "height", "128px");
    var d = c;
    if ("desktop" == _.R("deviceType")) {
      d = document.createElement("div");
      d.style.cssText = "float:left;position:relative;left:50%;";
      c.appendChild(d);
      var e = document.createElement("div");
      e.style.cssText = "float:left;position:relative;left:-50%";
      d.appendChild(e);
      d = e
    }
    e = "top" == b ? "-" : "";
    lz = parseInt(e + 88, 10);
    kz.style.webkitTransform = "translate3d(0px," + e + 88 + "px,0px)";
    kz.style.transform = "translate3d(0px," + e + 88 + "px,0px)";
    e = window;
    try {
      for (; e.parent != e && e.parent.document;) e = e.parent
    } catch (f) {}
    e = e.document.body;
    try {
      e.insertBefore(c, e.firstChild)
    } catch (f) {}
    _.Fl.Xh({
      url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
      queryParams: {
        clientId: a.client_id,
        idToken: a.id_token
      },
      where: d,
      onRestyle: function() {
        "top" === b ? Sz(!0) : Sz(!1)
      }
    })
  };
  Uz = function(a) {
    var b = _.Zm(),
      c = b && b.scope;
    b = a && a.scope;
    b = "string" === typeof b ? b.split(" ") : b || [];
    if (c) {
      c = c.split(" ");
      for (var d = 0; d < c.length; ++d) {
        var e = c[d]; - 1 == _.zk.call(b, e) && b.push(e)
      }
      0 < b.length && (a.scope = b.join(" "))
    }
    return a
  };
  Vz = function(a, b) {
    var c = null;
    a && b && (c = b.client_id = b.client_id || a.client_id, b.scope = b.scope || a.scope, b.g_user_cookie_policy = a.cookie_policy, b.cookie_policy = b.cookie_policy || a.cookie_policy, b.response_type = b.response_type || a.response_type);
    if (b) {
      b.issued_at || (b.issued_at = String(Math.floor((new Date).getTime() / 1E3)));
      var d = parseInt(b.expires_in, 10) || 86400;
      b.error && (d = _.R("oauth-flow/errorMaxAge") || 86400);
      b.expires_in = String(d);
      b.expires_at || (b.expires_at = String(Math.floor((new Date).getTime() / 1E3) + d));
      b._aa || b.error || null != rz(c) || !Az(a) || (b._aa = "1");
      a = b.status = {};
      a.google_logged_in = !!b.session_state;
      c = a.signed_in = !!b.access_token;
      a.method = c ? b["g-oauth-window"] ? "PROMPT" : "AUTO" : null
    }
    return b
  };
  Wz = function(a) {
    a = a && a.id_token;
    if (!a || !a.split(".")[1]) return null;
    a = (a.split(".")[1] + "...").replace(/^((....)+)\.?\.?\.?$/, "$1");
    a = _.Ef(_.hz(a, !0));
    if (!1 === a) throw Error("ua");
    return a
  };
  Xz = function(a) {
    return (a = Wz(a)) ? a.sub : null
  };
  Yz = function(a) {
    a && Dz.push(a);
    a = _.az;
    var b = document.getElementById(a),
      c = (new Date).getTime();
    if (b) {
      if (Bz && 6E4 > c - Bz) return;
      var d = _.Lf.getAuthToken(a);
      d && (Mz("oauth2relayReady", d), Mz("oauth2callback", d));
      b.parentNode.removeChild(b);
      if (/Firefox/.test(navigator.userAgent)) try {
        window.frames[a] = void 0
      } catch (f) {}
      _.cz();
      a = _.az
    }
    Bz = c;
    var e = String(2147483647 * (0, _.vg)() | 0);
    b = _.R("oauth-flow/proxyUrl") || _.R("oauth-flow/relayUrl");
    Lz() ? Gz = _.Fl.Xh({
      where: _.Oe.getBodyElement(),
      url: b,
      id: a,
      attributes: {
        style: {
          width: "1px",
          height: "1px",
          position: "absolute",
          top: "-100px",
          display: "none"
        },
        "aria-hidden": "true"
      },
      dontclear: !0
    }) : (b = [b, "?parent=", encodeURIComponent(_.qg.getOrigin(window.location.href)), "#rpctoken=", e, "&forcesecure=1"].join(""), c = _.Oe.getBodyElement(), d = _.Oe.createIframeElement({
      name: a,
      id: a
    }), d.src = Kz(b), d.style.width = "1px", d.style.height = "1px", d.style.position = "absolute", d.style.top = "-100px", d.tabIndex = -1, Iz(d), c.appendChild(d), _.Lf.setupReceiver(a));
    Nz("oauth2relayReady", e, function() {
      Mz("oauth2relayReady", e);
      var f = Dz;
      if (null !== f) {
        Dz = null;
        for (var g = 0, k = f.length; g < k; ++g) f[g]()
      }
    });
    Nz("oauth2callback", e, function(f) {
      var g = _.Oe.getUrlParameters;
      g = g(f);
      var k = g.state;
      f = k.replace(/\|.*$/, "");
      f = {}.hasOwnProperty.call(Fz, f) ? Fz[f] : null;
      g.state = f;
      if (null != g.state) {
        f = Ez[k];
        delete Ez[k];
        k = f && f.key || "token";
        var l = g = Vz(f && f.params, g);
        var m = (m = Xz(l)) ? yz(m, l.cookie_policy) : !1;
        !m && l && 0 <= (" " + (l.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ") && _.R("isLoggedIn") && "1" === (l && l._aa) && (l._aa = "0", Cz || (Cz = !0, Tz(l)));
        _.tz(k, g);
        g = sz(k);
        if (f) {
          k = f.popup;
          l = f.after_redirect;
          if (k && "keep_open" != l) try {
            k.close()
          } catch (n) {}
          f.callback && (f.callback(g), f.callback = null)
        }
      }
    })
  };
  _.Zz = function(a) {
    null !== Dz ? Yz(a) : a && a()
  };
  aA = function(a, b) {
    var c = $z,
      d = Xz(a);
    d && (zz(a), xz(d, b, function() {
      if (c) {
        var e = {
          error: "user_signed_out"
        };
        e.client_id = a.client_id;
        e.g_user_cookie_policy = a.g_user_cookie_policy;
        e.scope = a.scope;
        e.response_type = a.response_type;
        e.session_state = a.session_state;
        e = Vz(null, e);
        c(e)
      }
    }))
  };
  $z = function(a) {
    a || (a = sz(void 0, !0));
    a && "object" === typeof a || (a = {
      error: "invalid_request",
      error_description: "no callback data"
    });
    var b = a.error_description;
    b && window.console && (window.console.error(a.error), window.console.error(b));
    a.error || (_.Ae.drw = null);
    _.tz(a);
    if (b = a.authuser) _.R("googleapis.config/sessionIndex"), _.Ie("googleapis.config/sessionIndex", b);
    _.dz.lo(_.ez, a);
    return a
  };
  bA = ["client_id", "cookie_policy", "response_type"];
  cA = "client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(" ");
  dA = function(a) {
    var b = _.tj(a);
    b.session_state && b.session_state.extraQueryParams && (b.authuser = b.session_state.extraQueryParams.authuser);
    b.session_state = null;
    a.expires_at && (b.expires_at = parseInt(a.expires_at / 1E3).toString());
    a.expires_in && (b.expires_in = a.expires_in.toString());
    a.first_issued_at && (b.issued_at = parseInt(a.first_issued_at / 1E3).toString(), delete b.first_issued_at);
    _.kw(b);
    return b
  };
  eA = function(a) {
    if (void 0 === a.include_granted_scopes) {
      var b = _.R("include_granted_scopes");
      a.include_granted_scopes = !!b
    }
  };
  fA = function(a) {
    window.console && ("function" === typeof window.console.warn ? window.console.warn(a) : "function" === typeof window.console.log && window.console.log(a))
  };
  gA = function(a) {
    var b = a || {},
      c = {};
    (0, _.tb)(cA, function(d) {
      null != b[d] && (c[d] = b[d])
    });
    a = _.R("googleapis/overrideClientId");
    null != a && (c.client_id = a);
    eA(c);
    "string" === typeof b.scope ? c.scope = b.scope : _.ab(b.scope) && (c.scope = b.scope.join(" "));
    null != b["openid.realm"] && (c.openid_realm = b["openid.realm"]);
    null != b.cookie_policy ? c.cookie_policy = b.cookie_policy : null != b.cookiepolicy && (c.cookie_policy = b.cookiepolicy);
    null == c.login_hint && null != b.user_id && (c.login_hint = b.user_id);
    try {
      _.fx(c.cookie_policy)
    } catch (d) {
      c.cookie_policy &&
        fA("The cookie_policy configuration: '" + c.cookie_policy + "' is illegal, and thus ignored."), delete c.cookie_policy
    }
    null != b.hd && (c.hosted_domain = b.hd);
    null == c.prompt && (1 == b.immediate || "true" == b.immediate ? c.prompt = "none" : "force" == b.approval_prompt && (c.prompt = "consent"));
    "none" == c.prompt && (c.session_selection = "first_valid");
    "none" == c.prompt && "offline" == c.access_type && delete c.access_type;
    "undefined" === typeof c.authuser && (a = _.Eh(), null != a && (c.authuser = a));
    a = b.redirect_uri || _.R("oauth-flow/redirectUri");
    null != a && "postmessage" != a && (c.redirect_uri = a);
    c.gsiwebsdk = "shim";
    return c
  };
  _.hA = function(a, b) {
    var c = gA(a),
      d = new _.Pj(function(e, f) {
        _.Nx(c, function(g) {
          var k = g || {};
          (0, _.tb)(bA, function(l) {
            null == k[l] && (k[l] = c[l])
          });
          !c.include_granted_scopes && a && a.scope && (k.scope = a.scope);
          a && null != a.state && (k.state = a.state);
          k.error ? ("none" == c.prompt && "user_logged_out" == k.error && (k.error = "immediate_failed_user_logged_out"), f(k)) : (g = dA(k), null != g.authuser && _.Ie("googleapis.config/sessionIndex", g.authuser), e(g))
        })
      });
    b && d.then(b, b);
    return d
  };
  iA = _.oi.mA;
  jA = null;
  _.mA = function(a, b) {
    if ("force" !== a.approvalprompt) {
      a = _.kA(a);
      a.prompt = "none";
      delete a.redirect_uri;
      delete a.approval_prompt;
      delete a.immediate;
      if (b = !b) jA ? (a.client_id !== jA.client_id && window.console && window.console.log && window.console.log("Ignoring mismatched page-level auth param client_id=" + a.client_id), b = !0) : (jA = a, b = !1);
      b || lA(a)
    }
  };
  _.kA = function(a) {
    var b = a.redirecturi || "postmessage",
      c = (0, _.zb)((a.scope || "").replace(/[\s\xa0]+/g, " "));
    b = {
      client_id: a.clientid,
      redirect_uri: b,
      response_type: "code token id_token gsession",
      scope: c
    };
    a.approvalprompt && (b.approval_prompt = a.approvalprompt);
    a.state && (b.state = a.state);
    a.openidrealm && (b["openid.realm"] = a.openidrealm);
    c = "offline" == a.accesstype ? !0 : (c = a.redirecturi) && "postmessage" != c;
    c && (b.access_type = "offline");
    a.requestvisibleactions && (b.request_visible_actions = (0, _.zb)(a.requestvisibleactions.replace(/[\s\xa0]+/g,
      " ")));
    a.after_redirect && (b.after_redirect = a.after_redirect);
    a.cookiepolicy && "none" !== a.cookiepolicy && (b.cookie_policy = a.cookiepolicy);
    "undefined" != typeof a.includegrantedscopes && (b.include_granted_scopes = a.includegrantedscopes);
    a.e && (b.e = a.e);
    (a = a.authuser || _.R("googleapis.config/sessionIndex")) && (b.authuser = a);
    (a = _.R("useoriginassocialhost")) && (b.use_origin_as_socialhost = a);
    return b
  };
  lA = function(a) {
    _.Sn("waaf0", "signin", "0");
    _.hA(a, function(b) {
      _.Sn("waaf1", "signin", "0");
      $z(b)
    })
  };
  _.nA = function(a) {
    a = _.kA(a);
    _.Ie("oauth-flow/authWindowWidth", 445);
    _.Ie("oauth-flow/authWindowHeight", 615);
    lA(a)
  };
  _.oA = function(a) {
    _.dz.unsubscribe(_.ez, a);
    _.dz.subscribe(_.ez, a)
  };
  var vA, yA;
  _.qA = function(a) {
    return a.cookiepolicy ? !0 : (_.pA("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."), !1)
  };
  _.pA = function(a) {
    window.console && (window.console.error ? window.console.error(a) : window.console.log && window.console.log(a))
  };
  _.uA = function(a, b) {
    var c = _.Zm();
    _.se(a, c);
    c = Uz(c);
    if (_.qA(c)) {
      var d = _.rA();
      _.sA(c);
      b ? _.ze(b, "click", function() {
        _.tA(c, d)
      }) : _.tA(c, d)
    }
  };
  _.rA = function() {
    var a = new vA;
    _.oA(function(b) {
      a.iC && b && (b.access_token && _.Ie("isPlusUser", !0), b["g-oauth-window"] && (a.iC = !1, _.Te("OTA app install is no longer supported.")))
    });
    return a
  };
  vA = function() {
    this.iC = !1
  };
  _.sA = function(a) {
    a = _.wA(a);
    _.xA(a.callback);
    _.Zz(function() {
      _.mA(a)
    })
  };
  _.wA = function(a) {
    yA(a);
    a.redirecturi && delete a.redirecturi;
    jz(function(b) {
      return a[b]
    }) || (a.authuser = 0);
    return a
  };
  yA = function(a) {
    /^\s*$/.test(a.scope || "") && (a.scope = "https://www.googleapis.com/auth/plus.login")
  };
  _.xA = function(a) {
    if ("string" === typeof a)
      if (window[a]) a = window[a];
      else {
        _.pA('Callback function named "' + a + '" not found');
        return
      } a && _.oA(a)
  };
  _.tA = function(a, b) {
    b.iC = !0;
    a = _.wA(a);
    _.nA(a)
  };
  _.y("gapi.auth.authorize", _.hA);
  _.y("gapi.auth.checkSessionState", function(a, b) {
    var c = _.qe();
    c.client_id = a.client_id;
    c.session_state = a.session_state;
    _.Zz(function() {
      Lz() ? Gz.send("check_session_state", c, function(d) {
        b.call(null, d[0])
      }, _.Tl) : _.Lf.call(_.az, "check_session_state", Hz(function(d) {
        b.call(null, d)
      }), c.session_state, c.client_id)
    })
  });
  _.y("gapi.auth.getAuthHeaderValueForFirstParty", iA);
  _.y("gapi.auth.getToken", sz);
  _.y("gapi.auth.getVersionInfo", function(a, b) {
    _.Zz(function() {
      var c = _.ni() || "",
        d = null,
        e = null;
      c && (e = c.split(" "), 2 == e.length && (d = e[1]));
      d ? Lz() ? Gz.send("get_versioninfo", {
        xapisidHash: d,
        sessionIndex: b
      }, function(f) {
        a(f[0])
      }, _.Tl) : _.Lf.call(_.az, "get_versioninfo", Hz(function(f) {
        a(f)
      }), d, b) : a()
    })
  });
  _.y("gapi.auth.init", _.Zz);
  _.y("gapi.auth.setToken", _.tz);
  _.y("gapi.auth.signIn", function(a) {
    _.uA(a)
  });
  _.y("gapi.auth.signOut", function() {
    var a = sz();
    a && aA(a, a.cookie_policy)
  });
  _.y("gapi.auth.unsafeUnpackIdToken", Wz);
  _.y("gapi.auth._pimf", _.mA);
  _.y("gapi.auth._oart", Tz);
  _.y("gapi.auth._guss", function(a) {
    return vz(a).read()
  });

  _.zA = function(a) {
    return !!(a.clientid && a.scope && a.callback)
  };
  _.AA = function() {
    var a = _.Zm();
    _.zA(a) && !_.R("disableRealtimeCallback") ? _.sA(a) : _.Zz()
  };
  _.Dj(function() {
    _.AA()
  });

  var BA, CA, DA, EA = {
      OG: function(a) {
        BA = a;
        try {
          delete EA.OG
        } catch (b) {}
      },
      PG: function(a) {
        CA = a;
        try {
          delete EA.PG
        } catch (b) {}
      },
      QG: function(a) {
        DA = a;
        try {
          delete EA.QG
        } catch (b) {}
      }
    },
    FA = function() {
      var a = !0,
        b = _.sy(_.gy);
      b && void 0 !== b.withCredentials || (a = !1);
      return a
    },
    GA = function(a, b) {
      if (null == b) return b;
      b = String(b);
      b.match(/^\/\/.*/) && (b = ("http:" == window.location.protocol ? "http:" : "https:") + b);
      b.match(/^\/([^\/].*)?$/) && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = window.location.protocol +
        "//" + window.location.host + b);
      var c = b.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
      c && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = c[1] + "//" + window.location.host + (c[3] || ""));
      b = b.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
      b = b.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
      b = b.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
      b.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) && (b = b.toLowerCase());
      c = _.R("client/rewrite");
      _.kb(c) && Object.prototype.hasOwnProperty.call(c,
        b) ? b = String(c[b] || b) : (b = b.replace(/^(https?):\/\/www\.googleapis\.com$/, "$1://content.googleapis.com"), b = b.replace(/^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/, "$1://content-$2"), b.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) || (b = b.replace(/^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/, "$1://content-$2")));
      a && (a = _.R("client/firstPartyRewrite"), _.kb(a) && Object.prototype.hasOwnProperty.call(a, b) ? b = String(a[b] || b) : (b = b.replace(/^(https?):\/\/content\.googleapis\.com$/,
        "$1://clients6.google.com"), b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/, "$1://$2-googleapis.$3.google.com"), b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/, "$1://$2.clients6.google.com"), b = b.replace(/^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/, "$1://content-googleapis-$2.$3.google.com")));
      return b
    },
    HA = function(a) {
      _.pb.call(this, a)
    };
  _.Nq(HA, _.pb);
  HA.prototype.name = "gapi.client.Error";
  var IA = function(a) {
    if (!a || !_.mb(a)) throw new HA("Must provide a function.");
    this.Jf = null;
    this.eT = a
  };
  IA.prototype.then = function(a, b, c) {
    this.Jf || (this.Jf = this.eT());
    return this.Jf.then(a, b, c)
  };
  IA.prototype.Sw = function(a) {
    this.Jf || (this.Jf = a)
  };
  var JA = {};
  JA = function(a) {
    var b = {},
      c;
    for (c in a)
      if (Object.prototype.hasOwnProperty.call(a, c)) {
        var d = _.Wg(a, c);
        d && (c = _.Vg(c, d)) && _.Xg(b, c, d, !0)
      } return b
  };
  var KA = {
      error: {
        code: -1,
        message: "A network error occurred and the request could not be completed."
      }
    },
    LA = function(a, b, c, d) {
      _.Gy.call(this);
      this.ld = a;
      this.mC = b;
      this.qd = c;
      a = {};
      if (d)
        for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b = _.Wg(d, e), void 0 !== b && (e = _.Ug(e, b)) && _.Xg(a, e, b));
      d = {};
      for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[unescape(encodeURIComponent(e))] = unescape(encodeURIComponent(a[e])));
      this.Sq = d;
      this.Jf = null
    };
  _.Nq(LA, _.Gy);
  LA.prototype.then = function(a) {
    this.Jf || (this.Jf = (new _.Pj(function(b, c) {
      this.U("error", (0, _.L)(function() {
        c(MA(this))
      }, this));
      this.U("success", (0, _.L)(function() {
        b(MA(this))
      }, this));
      this.send(this.ld, this.mC, this.qd, this.Sq)
    }, this)).then(function(b) {
      b.headers = JA(b.headers);
      return b
    }, function(b) {
      return b.status ? (b.headers = JA(b.headers), _.Uj(b)) : _.Uj({
        result: KA,
        body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
        headers: null,
        status: null,
        statusText: null
      })
    }));
    return this.Jf.then.apply(this.Jf, arguments)
  };
  var MA = function(a) {
      var b = a.getStatus(),
        c = _.Ty(a);
      var d = 204 == b ? !1 : "" == a.Ik ? _.Ef(c) : _.Uy(a);
      var e = a.getAllResponseHeaders();
      e = _.Yg(e, !1);
      try {
        var f = 2 < _.Ry(a) ? a.Oa.statusText : ""
      } catch (g) {
        f = ""
      }
      return {
        result: d,
        body: c,
        headers: e,
        status: b,
        statusText: f
      }
    },
    NA = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i,
    OA = /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i,
    PA = /;\s*charset\s*=/i,
    QA = /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g,
    RA =
    function(a) {
      var b = [];
      a = a.replace(QA, function(c) {
        b.push(_.hz(c));
        return ""
      });
      if (a.length) throw Error("sa");
      return b.join("")
    },
    SA = function(a) {
      var b = a.headers;
      if (b && "base64" === _.Wg(b, _.Dg.oy)) {
        var c = RA(a.body),
          d = _.Wg(b, _.Dg.ny);
        b[_.Dg.CONTENT_TYPE] = d;
        if (d.match(NA) || d.match(OA) && !d.match(PA)) {
          d = [];
          for (var e = 0, f = 0; f < c.length; f++) {
            var g = c.charCodeAt(f);
            255 < g && (d[e++] = g & 255, g >>= 8);
            d[e++] = g
          }
          c = _.hw(d)
        }
        _.Xg(b, _.Dg.oy);
        _.Xg(b, _.Dg.ny);
        a.body = c
      }
    },
    TA = function(a, b, c) {
      c || ((c = _.R("googleapis.config/proxy")) && (c =
        String(c).replace(/\/static\/proxy\.html$/, "") || "/"), c = String(c || ""));
      c || (c = _.R("googleapis.config/root"), b && (c = _.R("googleapis.config/root-1p") || c), c = String(c || ""));
      c = String(GA(b, c) || c);
      return a = _.zy(c, a)
    },
    UA = function(a) {
      var b = _.Mt(a, "params", "headers");
      b && "object" === typeof b || (b = {});
      a = {};
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
          var d = _.Wg(b, c);
          d && (_.Ug(c, d), _.Xg(a, c, d))
        } c = "chrome-extension" == (window.location.href.match(_.ph)[1] || null);
      a = _.li(a);
      return !(c && a) && FA()
    },
    VA = function(a,
      b) {
      var c = a.params || _.qe();
      c.url = c.path;
      var d = c.root;
      d = TA("/", _.li(c.headers), d);
      d.match(/^(.*[^\/])?\/$/) && (d = d.substr(0, d.length - 1));
      c.root = d;
      a.params = c;
      _.qi.sj("makeHttpRequests", [a], function(e, f) {
        e && e.gapiRequest ? (e.gapiRequest.data ? SA(e.gapiRequest.data) : SA(e), b(e, _.Ff(e))) : b(e, f)
      })
    },
    WA = function(a) {
      return new _.Pj(function(b, c) {
        var d = function(e) {
          e && e.gapiRequest ? e = e.gapiRequest.data || e : c(e);
          e = {
            result: 204 != e.status && _.Ef(e.body),
            body: e.body,
            headers: e.headers || null,
            status: e.status || null,
            statusText: e.statusText ||
              null
          };
          _.Ey(e.status) ? b(e) : c(e)
        };
        try {
          VA(a, d)
        } catch (e) {
          c(e)
        }
      })
    },
    XA = function(a) {
      var b = !_.R("client/cors") || !!_.R("client/xd4"),
        c = {};
      _.Hl(a, function(d, e) {
        (d = _.Ug(e, d)) || b || (d = _.Tg(e));
        d && (e = _.Wg(a, d)) && _.Xg(c, d, e)
      });
      return c
    },
    YA = function(a) {
      var b = a.params || _.qe();
      a = _.tj(b.headers || {});
      var c = b.httpMethod || "GET",
        d = String(b.url || ""),
        e = encodeURIComponent("$unique");
      if (!("POST" === c || 0 <= _.uh(d, "$unique", d.search(_.vh)) || 0 <= _.uh(d, e, d.search(_.vh)))) {
        var f = [];
        for (g in a) Object.prototype.hasOwnProperty.call(a,
          g) && f.push(g.toLowerCase());
        f.sort();
        f.push(_.sg(location.href));
        var g = f.join(":");
        f = _.ii();
        f.update(g);
        g = f.Rg().toLowerCase().substr(0, 7);
        g = String(parseInt(g, 16) % 1E3 + 1E3).substr(1);
        d = _.yy(d, e, "gc" + g)
      }
      e = b.body || null;
      g = b.responseType || null;
      b = _.li(a) || "1p" == b.authType;
      _.Xg(a, _.Dg.py, void 0);
      a = XA(a);
      var k = new LA(d, c, e, a);
      k.xh = b;
      g && (k.Ik = g);
      return new _.Pj(function(l, m) {
        k.then(function(n) {
          SA(n);
          l(n)
        }, function(n) {
          m(n)
        })
      })
    },
    ZA = function(a, b) {
      var c = function(d) {
        d = _.tj(d);
        delete d.result;
        d = {
          gapiRequest: {
            data: d
          }
        };
        b && b(d, _.Ff(d))
      };
      YA(a).then(c, c)
    },
    $A = function(a, b) {
      (_.R("client/cors") || _.R("client/xd4")) && UA(a) ? ZA(a, b) : VA(a, b)
    },
    aB = function(a) {
      this.Sc = a;
      this.qf = !1;
      this.promise = {
        then: (0, _.L)(function(b, c, d) {
          this.qf || (this.qf = !0);
          this.Tr && !this.Rr ? this.Sc.resolve(this.Tr) : this.Rr && !this.Tr && this.Sc.reject(this.Rr);
          return this.Sc.promise.then(b, c, d)
        }, this)
      }
    };
  aB.prototype.resolve = function(a) {
    this.qf ? this.Sc.resolve(a) : this.Tr || this.Rr || (this.Tr = a)
  };
  aB.prototype.reject = function(a) {
    this.qf ? this.Sc.reject(a) : this.Tr || this.Rr || (this.Rr = a)
  };
  var bB = function(a) {
      a = _.vy(a.error);
      return {
        code: a.code,
        data: a.errors,
        message: a.message
      }
    },
    cB = function(a) {
      throw Error("va`" + a);
    };
  var dB = function(a) {
    IA.call(this, dB.prototype.rm);
    if (!a || "object" != typeof a && "string" != typeof a) throw new HA("Missing required parameters");
    if ("string" === typeof a) {
      var b = {};
      b.path = a
    } else b = a;
    if (!b.path) throw new HA('Missing required parameter: "path"');
    this.nh = {};
    this.nh.path = b.path;
    this.nh.method = b.method || "GET";
    this.nh.params = b.params || {};
    this.nh.headers = b.headers || {};
    this.nh.body = b.body;
    this.nh.root = b.root;
    this.nh.responseType = b.responseType;
    this.nh.apiId = b.apiId;
    this.Cp = b.authType || "auto";
    this.MX = !!b.isXd4;
    this.ZL = !1
  };
  _.H(dB, IA);
  var eB = ["appVersion", "platform", "userAgent"],
    fB = {
      "google-api-gwt-client": !0,
      "google-api-javascript-client": !0
    };
  dB.prototype.lg = function() {
    return this.nh
  };
  dB.prototype.uj = function(a) {
    this.Cp = a
  };
  dB.prototype.jj = function() {
    if (!this.ZL) {
      this.ZL = !0;
      var a = this.nh,
        b = a.headers = a.headers || {},
        c = [],
        d = [];
      for (g in b)
        if (Object.prototype.hasOwnProperty.call(b, g)) {
          c.push(g);
          var e = g,
            f = _.Wg(b, e);
          f && (e = _.Ug(e, f) || _.Tg(e)) && d.push([e, f])
        } var g = 0;
      for (e = c.length; g < e; ++g) delete b[c[g]];
      c = 0;
      for (g = d.length; c < g; ++c) _.Xg(b, d[c][0], d[c][1]);
      if (this.MX) d = "1p" == this.Cp;
      else {
        d = b;
        c = _.Dg.hG;
        g = String(_.R("client/version", "1.1.0"));
        e = String(_.R("client/name", "google-api-javascript-client"));
        e = !0 === fB[e] ? e : "google-api-javascript-client";
        f = String(_.R("client/appName", ""));
        var k = [];
        f && (k.push(f), k.push(" "));
        k.push(e);
        g && (k.push("/"), k.push(g));
        _.Xg(d, c, k.join(""));
        _.Xg(b, _.Dg.jG, "XMLHttpRequest");
        d = _.Wg(b, _.Dg.CONTENT_TYPE);
        a.body && !d && _.Xg(b, _.Dg.CONTENT_TYPE, "application/json");
        _.R("client/allowExecutableResponse") || _.Xg(b, _.Dg.my, "base64");
        (d = _.Wg(b, _.Dg.CONTENT_TYPE)) && "application/json" == d.toLowerCase() && !a.params.alt && (a.params.alt = "json");
        (d = a.body || null) && _.kb(d) && (a.body = _.Ff(d));
        a.key = a.id;
        b = _.qi.zR(b, void 0, this.Cp);
        d =
          _.li(b);
        if ((c = b) && window.navigator) {
          g = [];
          for (e = 0; e < eB.length; e++)(f = window.navigator[eB[e]]) && g.push(encodeURIComponent(eB[e]) + "=" + encodeURIComponent(f));
          _.Xg(c, _.Dg.cG, g.join("&"))
        }(c = _.R("client/apiKey")) && void 0 === a.params.key && (a.params.key = c);
        (c = _.R("client/trace")) && !a.params.trace && (a.params.trace = c)
      }
      "auto" == this.Cp && (d ? this.uj("1p") : (b = _.Wg(b, _.Dg.AUTHORIZATION)) && String(b).match(/^(Bearer|MAC)[ \t]/i) ? this.uj("oauth2") : this.uj("none"));
      (b = String(a.path || "").match(/^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i)) &&
      !a.root && (a.root = String(b[1]), a.path = String(b[2] || "/"), a.path.match(/^\/_ah\/api(\/.*)?$/) ? (a.root += "/_ah/api", a.path = a.path.substr(8)) : (b = _.R("googleapis.config/root"), d && (b = _.R("googleapis.config/root-1p") || b), b = String(b || ""), c = a.root + a.path, b && c.substr(0, b.length) === b && (a.path = c.substr(b.length), a.root = b)));
      b = a.params;
      c = _.Kg(a.path);
      g = String(_.R("googleapis.config/xd3") || "");
      18 <= g.length && "/static/proxy.html" == g.substring(g.length - 18) && (g = g.substring(0, g.length - 18));
      g || (g = "/");
      e = _.Kg(g);
      if (g !=
        e) throw Error("x");
      "/" != g.charAt(g.length - 1) && (g += "/");
      c = _.zy(g, c);
      _.Pq(c, "/") && (c = c.substring(0, c.length - 1));
      g = _.qe();
      for (var l in b) Object.prototype.hasOwnProperty.call(b, l) && (e = encodeURIComponent(l), g[e] = b[l]);
      c = _.th(c, g);
      a.path = c;
      a.root = GA(!!d, a.root);
      a.url = TA(a.path, !!d, a.root)
    }
  };
  var gB = function(a) {
    a.jj();
    var b = a.nh;
    return {
      key: "gapiRequest",
      params: {
        id: b.id,
        key: b.key,
        url: b.url,
        path: b.path,
        httpMethod: b.method,
        body: b.body || "",
        headers: b.headers || {},
        urlParams: {},
        root: b.root,
        authType: a.Cp
      }
    }
  };
  dB.prototype.execute = function(a) {
    var b = gB(this);
    $A(b, function(c, d) {
      var e = c;
      c.gapiRequest && (e = c.gapiRequest);
      e && e.data && (e = e.data);
      c = e instanceof Array ? e[0] : e;
      if (204 != c.status && c.body) try {
        var f = _.Ef(c.body)
      } catch (g) {}
      a && a(f, d)
    })
  };
  dB.prototype.rm = function() {
    var a = gB(this);
    return (_.R("client/cors") || _.R("client/xd4")) && UA(a) ? YA(a) : WA(a)
  };
  dB.prototype.lk = function() {
    return this.rm()
  };
  dB.prototype.execute = dB.prototype.execute;
  dB.prototype.then = dB.prototype.then;
  dB.prototype.getPromise = dB.prototype.lk;
  var hB = function(a) {
    if (!a || "object" != typeof a) throw new HA("Missing rpc parameters");
    if (!a.method) throw new HA("Missing rpc method");
    this.Fw = a
  };
  hB.prototype.Ll = function() {
    var a = this.Fw.transport;
    return a ? a.root || null : null
  };
  hB.prototype.execute = function(a) {
    var b = CA();
    b.add(this, {
      id: "gapiRpc",
      callback: this.ur(a)
    });
    b.execute()
  };
  hB.prototype.Iv = function(a) {
    var b = this.Fw.method,
      c = String,
      d;
    (d = this.Fw.apiVersion) || (d = String(b).split(".")[0], d = _.R("googleapis.config/versions/" + b) || _.R("googleapis.config/versions/" + d) || "v1", d = String(d));
    c = c(d);
    a = {
      jsonrpc: "2.0",
      id: a,
      method: b,
      apiVersion: c
    };
    (b = this.Fw.rpcParams) && (a.params = b);
    return a
  };
  hB.prototype.ur = function(a) {
    return function(b, c) {
      if (b)
        if (b.error) {
          var d = b.error;
          null == d.error && (d.error = _.tj(b.error))
        } else d = b.result || b.data, _.kb(d) && null == d.result && (d.result = _.tj(b.result || b.data));
      else d = !1;
      a(d, c)
    }
  };
  hB.prototype.execute = hB.prototype.execute;
  var jB = function(a, b) {
      this.yf = b || 0;
      2 == this.yf ? (b = null, null != a && _.kb(a) && (b = {}, b.method = a.method, b.rpcParams = a.rpcParams, b.transport = a.transport, b.root = a.root, b.apiVersion = a.apiVersion, b.authType = a.authType), this.Mb = new hB(b)) : (0 == this.yf && (b = a && a.callback) && (a.callback = iB(b)), b = null, null != a && (_.kb(a) ? (b = {}, b.path = a.path, b.method = a.method, b.params = a.params, b.headers = a.headers, b.body = a.body, b.root = a.root, b.responseType = a.responseType, b.authType = a.authType, b.apiId = a.apiId) : "string" === typeof a && (b = a)),
        this.Mb = new dB(b))
    },
    iB = function(a) {
      return function(b) {
        if (null != b && _.kb(b) && b.error) {
          var c = bB(b);
          b = _.Ff([{
            id: "gapiRpc",
            error: c
          }]);
          c.error = _.vy(c)
        } else null == b && (b = {}), c = _.vy(b), c.result = _.vy(b), b = _.Ff([{
          id: "gapiRpc",
          result: b
        }]);
        a(c, b)
      }
    };
  _.h = jB.prototype;
  _.h.getFormat = function() {
    return this.yf
  };
  _.h.execute = function(a) {
    this.Mb.execute(a && 1 == this.yf ? iB(a) : a)
  };
  _.h.then = function(a, b, c) {
    2 == this.yf && cB('The "then" method is not available on this object.');
    return this.Mb.then(a, b, c)
  };
  _.h.Sw = function(a) {
    this.Mb.Sw && this.Mb.Sw(a)
  };
  _.h.lg = function() {
    if (this.Mb.lg) return this.Mb.lg()
  };
  _.h.jj = function() {
    this.Mb.lg && this.Mb.jj()
  };
  _.h.Ll = function() {
    if (this.Mb.Ll) return this.Mb.Ll()
  };
  _.h.Iv = function(a) {
    if (this.Mb.Iv) return this.Mb.Iv(a)
  };
  _.h.uj = function(a) {
    this.Mb.uj && this.Mb.uj(a)
  };
  _.h.lk = function() {
    if (this.Mb.lk) return this.Mb.lk()
  };
  jB.prototype.execute = jB.prototype.execute;
  jB.prototype.then = jB.prototype.then;
  jB.prototype.getPromise = jB.prototype.lk;
  var kB = function(a) {
    IA.call(this, kB.prototype.rm);
    this.Mb = a
  };
  _.H(kB, IA);
  _.h = kB.prototype;
  _.h.execute = function(a) {
    var b = this.getFormat(),
      c = function(d) {
        if (_.mb(a)) {
          var e = {
              gapiRequest: {
                data: {
                  status: d && d.status,
                  statusText: d && d.statusText,
                  headers: d && d.headers,
                  body: d && d.body
                }
              }
            },
            f = a,
            g = void 0;
          1 === b && (f = iB(f), g = {});
          var k = d ? d.result : !1;
          d && 204 == d.status && (k = g, delete e.gapiRequest.data.body);
          d = _.Ff(e);
          f(k, d)
        }
      };
    this.lk().then(c, c)
  };
  _.h.rm = function() {
    return new _.Pj(function(a, b) {
      var c = BA(),
        d = c.add(this.Mb, {
          id: "gapiRequest"
        });
      return c.then(function(e) {
        var f = e.result;
        if (f && (f = f[d])) {
          Object.prototype.hasOwnProperty.call(f, "result") || (f.result = !1);
          Object.prototype.hasOwnProperty.call(f, "body") || (f.body = "");
          _.Ey(f.status) ? a(f) : b(f);
          return
        }
        b(e)
      }, b)
    }, this)
  };
  _.h.lg = function() {
    if (this.Mb.lg) return this.Mb.lg()
  };
  _.h.jj = function() {
    this.Mb.jj && this.Mb.jj()
  };
  _.h.Ll = function() {
    if (this.Mb.Ll) return this.Mb.Ll()
  };
  _.h.uj = function(a) {
    this.Mb.uj && this.Mb.uj(a)
  };
  _.h.getFormat = function() {
    var a = void 0;
    this.Mb.getFormat && (a = this.Mb.getFormat());
    void 0 === a && (a = 0);
    return a
  };
  _.h.lk = function() {
    return this.rm()
  };
  kB.prototype.execute = kB.prototype.execute;
  kB.prototype.then = kB.prototype.then;
  kB.prototype.getPromise = kB.prototype.lk;
  var lB = /<response-(.*)>/,
    mB = /^application\/http(;.+$|$)/,
    nB = function(a, b) {
      a = _.Wg(a, b);
      if (!a) throw new HA("Unable to retrieve header.");
      return a
    },
    pB = function(a, b, c, d) {
      var e = "batch" + String(Math.round(2147483647 * (0, _.vg)())) + String(Math.round(2147483647 * (0, _.vg)())),
        f = "--" + e;
      e = "multipart/mixed; boundary=" + e;
      a: {
        var g = void 0;
        for (var k = 0; k < a.length; k++) {
          var l = a[k].request.lg().apiId;
          if ("string" !== typeof l) {
            g = "batch";
            break a
          }
          if (void 0 === g) g = l;
          else if (g != l) {
            g = "batch";
            break a
          }
        }
        g = _.R("client/batchPath/" + g) ||
        "batch/" + g.split(":").join("/")
      }
      g = {
        path: g,
        method: "POST"
      };
      k = [];
      for (l = 0; l < a.length; l++) k.push(oB(a[l].request, [f.substr(f.indexOf("--") + 2), "+", encodeURIComponent(a[l].id).split("(").join("%28").split(")").join("%29").split(".").join("%2E"), "@googleapis.com"].join("")));
      g.body = [f, k.join("\r\n" + f + "\r\n"), f + "--"].join("\r\n") + "\r\n";
      g.root = b || null;
      if (_.R("client/xd4") && FA()) return g.isXd4 = !0, g.params = {
          $ct: e
        }, g.headers = {}, _.Xg(g.headers, _.Dg.CONTENT_TYPE, "text/plain; charset=UTF-8"), c ? g.authType = "1p" : d &&
        (g.authType = "oauth2"), new dB(g);
      g.headers = {};
      _.Xg(g.headers, _.Dg.CONTENT_TYPE, e);
      return DA(g)
    },
    oB = function(a, b) {
      var c = [];
      a = a.lg();
      var d = function(f, g) {
          _.Hl(f, function(k, l) {
            g.push(l + ": " + k)
          })
        },
        e = {};
      e[_.Dg.CONTENT_TYPE] = "application/http";
      e[_.Dg.Gx] = "binary";
      e[_.Dg.Fx] = "<" + b + ">";
      d(e, c);
      c.push("");
      c.push(a.method + " " + a.path);
      d(a.headers, c);
      c.push("");
      a.body && c.push(a.body);
      return c.join("\r\n")
    },
    rB = function(a, b) {
      a = qB(a, b);
      var c = {};
      _.Gb(a, function(d, e) {
        c[e] = {
          result: d.result || d.body,
          rawResult: _.Ff({
            id: e,
            result: d.result || d.body
          }),
          id: e
        }
      });
      return c
    },
    qB = function(a, b) {
      a = (0, _.zb)(a);
      _.Pq(a, "--") && (a = a.substring(0, a.length - 2));
      a = a.split(b);
      b = _.qe();
      for (var c = 0; c < a.length; c++)
        if (a[c]) {
          var d;
          if (d = a[c]) {
            _.Pq(d, "\r\n") && (d = d.substring(0, d.length - 2));
            if (d) {
              d = d.split("\r\n");
              for (var e = 0, f = {
                  headers: {},
                  body: ""
                }; e < d.length && "" == d[e];) e++;
              for (f.outerHeaders = sB(d, e); e < d.length && "" != d[e];) e++;
              e++;
              var g = d[e++].split(" ");
              f.status = Number(g[1]);
              f.statusText = g.slice(2).join(" ");
              for (f.headers = sB(d, e); e < d.length && "" != d[e];) e++;
              e++;
              f.body = d.slice(e).join("\r\n");
              SA(f);
              d = f
            } else d = null;
            e = _.qe();
            f = nB(d.outerHeaders, _.Dg.CONTENT_TYPE);
            if (null == mB.exec(f)) throw new HA("Unexpected Content-Type <" + f + ">");
            f = nB(d.outerHeaders, _.Dg.Fx);
            f = lB.exec(f);
            if (!f) throw new HA("Unable to recognize Content-Id.");
            e.id = decodeURIComponent(f[1].split("@")[0].replace(/^.*[+]/, ""));
            e.response = {
              status: d.status,
              statusText: d.statusText,
              headers: d.headers
            };
            204 != d.status && (e.response.body = d.body, e.response.result = _.Ef(d.body));
            d = e
          } else d = null;
          d && d.id &&
            (b[d.id] = d.response)
        } return b
    },
    sB = function(a, b) {
      for (var c = []; b < a.length && a[b]; b++) c.push(a[b]);
      return _.Yg(c.join("\r\n"), !1)
    };
  var tB = function(a) {
    IA.call(this, tB.prototype.rm);
    this.Rb = [];
    this.Lf = a;
    this.$X = !!a;
    this.oB = this.nB = !1
  };
  _.H(tB, IA);
  var uB = function(a, b) {
    for (var c = 0; c < a.Rb.length; c++)
      if (a.Rb[c].id == b) return !0;
    return !1
  };
  _.h = tB.prototype;
  _.h.add = function(a, b) {
    b = b || _.qe();
    var c = _.qe();
    if (!a) throw new HA("Batch entry " + (_.re(b, "id") ? '"' + b.id + '" ' : "") + "is missing a request method");
    a.jj();
    c.request = a;
    var d = _.Zj();
    d = new aB(d);
    c.vo = d;
    a.Sw(c.vo.promise);
    d = a.lg().headers;
    _.li(d) && (this.nB = !0);
    (d = String((d || {}).Authorization || "") || null) && d.match(/^Bearer|MAC[ \t]/i) && (this.oB = !0);
    a = a.lg().root;
    if (!this.$X) {
      if (a && this.Lf && a != this.Lf) throw new HA('The "root" provided in this request is not consistent with that of existing requests in the batch.');
      this.Lf = a || this.Lf
    }
    if (_.re(b, "id")) {
      a = b.id;
      if (uB(this, a)) throw new HA('Batch ID "' + a + '" already in use, please use another.');
      c.id = a
    } else {
      do c.id = String(Math.round(2147483647 * (0, _.vg)())); while (uB(this, c.id))
    }
    c.callback = b.callback;
    this.Rb.push(c);
    return c.id
  };
  _.h.execute = function(a) {
    1 > this.Rb.length || (_.Gl(this.Rb, function(b) {
      b.request.jj()
    }), a = this.ur(a), pB(this.Rb, this.Lf, this.nB, this.oB).execute(a))
  };
  _.h.rm = function() {
    if (1 > this.Rb.length) return new _.Pj(function(d) {
      d({})
    });
    _.Gl(this.Rb, function(d) {
      d.request.jj()
    });
    var a = pB(this.Rb, this.Lf, this.nB, this.oB),
      b = (0, _.L)(function(d) {
        vB(d);
        if (0 != nB(d.headers, _.Dg.CONTENT_TYPE).indexOf("multipart/mixed")) throw new HA("The response's Content-Type is not multipart/mixed.");
        var e = nB(d.headers, _.Dg.CONTENT_TYPE).split("boundary=")[1];
        if (!e) throw new HA("Boundary not indicated in response.");
        e = qB(d.body, "--" + e);
        d.result = e || {};
        for (var f = 0; f < this.Rb.length; f++) {
          var g =
            this.Rb[f],
            k = e[g.id];
          k && _.Ey(k.status) ? g.vo.resolve(k) : g.vo.reject(k)
        }
        return d
      }, this),
      c = (0, _.L)(function(d) {
        for (var e = 0; e < this.Rb.length; e++) {
          var f = this.Rb[e],
            g = {
              error: {
                code: 0,
                message: "The batch request could not be fulfilled."
              }
            };
          d && d.message || d.message ? g.error.message += " " + (d.message || d.message) : d && d.error && d.error.message && (g.error.message = d.error.message, g.error.code = d.error.code || 0);
          f.vo.reject({
            result: g,
            body: _.Ff(g),
            headers: null,
            status: null,
            statusText: null
          })
        }
        throw d;
      }, this);
    return a.then(b, c)
  };
  _.h.ur = function(a) {
    return (0, _.L)(function(b, c) {
      this.Ey(b, c, a)
    }, this)
  };
  _.h.Ey = function(a, b, c) {
    try {
      a = wB(a, b);
      if (!a) throw new HA("The batch response is missing.");
      if (0 != nB(a.headers, _.Dg.CONTENT_TYPE).indexOf("multipart/mixed")) throw new HA("The response's Content-Type is not multipart/mixed.");
      if (200 <= a.status && 299 >= a.status) {
        var d = nB(a.headers, _.Dg.CONTENT_TYPE).split("boundary=")[1];
        if (!d) throw new HA("Boundary not indicated in response.");
        var e = rB(a.body, "--" + d);
        for (a = 0; a < this.Rb.length; a++) {
          var f = this.Rb[a],
            g = e[f.id];
          if (g && Object.prototype.hasOwnProperty.call(g, "rawResult")) {
            g.rawResult =
              void 0;
            try {
              delete g.rawResult
            } catch (l) {}
          }
          if (f.callback) {
            var k = _.Ff(g);
            try {
              f.callback(g || !1, k)
            } catch (l) {
              (function(m) {
                setTimeout(function() {
                  throw m;
                })
              })(l)
            }
          }
        }
      }
      if (c) try {
        c(e || null, b)
      } catch (l) {
        (function(m) {
          setTimeout(function() {
            throw m;
          })
        })(l)
      }
    } catch (l) {
      b = !0;
      f = {
        error: {
          code: 0,
          message: "The batch request could not be fulfilled."
        }
      };
      if (l && l.message || l.message) f.error.message += " " + (l.message || l.message);
      e = {
        result: f,
        body: _.Ff(f),
        headers: null,
        status: null,
        statusText: null
      };
      g = _.Ff(e);
      if (this.Rb)
        for (a = 0; a < this.Rb.length; a++)
          if (f =
            this.Rb[a], f.callback) try {
            f.callback(e, g)
          } catch (m) {
            (function(n) {
              setTimeout(function() {
                throw n;
              })
            })(m)
          } else b = !1;
          else b = !1;
      if (c) {
        try {
          c(e, g)
        } catch (m) {
          (function(n) {
            setTimeout(function() {
              throw n;
            })
          })(m)
        }
        b = !0
      }
      if (!b) throw l;
    }
  };
  var wB = function(a, b) {
      b && !a && (b = _.Ef(b)) && (a = b.gapiRequest ? b.gapiRequest.data : b);
      vB(a);
      return a
    },
    vB = function(a) {
      if (a) {
        var b = a.headers;
        if (b) {
          var c = _.qe(),
            d;
          for (d in b)
            if (Object.prototype.hasOwnProperty.call(b, d)) {
              var e = _.Wg(b, d);
              _.Xg(c, d, e, !0)
            } a.headers = c
        }
      }
    };
  tB.prototype.add = tB.prototype.add;
  tB.prototype.execute = tB.prototype.execute;
  tB.prototype.then = tB.prototype.then;
  var xB = function() {
    this.Rb = [];
    this.Lf = this.Rc = null
  };
  xB.prototype.add = function(a, b) {
    b = b || {};
    var c = {},
      d = Object.prototype.hasOwnProperty;
    if (a) c.rpc = a;
    else throw new HA("Batch entry " + (d.call(b, "id") ? '"' + b.id + '" ' : "") + "is missing a request method");
    if (d.call(b, "id")) {
      a = b.id;
      for (d = 0; d < this.Rb.length; d++)
        if (this.Rb[d].id == a) throw new HA('Batch ID "' + a + '" already in use, please use another.');
      c.id = a
    } else {
      do c.id = String(2147483647 * (0, _.vg)() | 0); while (d.call(this.Rb, c.id))
    }
    c.callback = b.callback;
    this.Rb.push(c);
    return c.id
  };
  var yB = function(a) {
    return function(b) {
      var c = b.body;
      if (b = b.result) {
        for (var d = {}, e = 0, f = b.length; e < f; ++e) d[b[e].id] = b[e];
        a(d, c)
      } else a(b, c)
    }
  };
  xB.prototype.execute = function(a) {
    this.Rc = [];
    for (var b, c, d = 0; d < this.Rb.length; d++) b = this.Rb[d], c = b.rpc, this.Rc.push(c.Iv(b.id)), this.Lf = c.Ll() || this.Lf;
    b = {
      requests: this.Rc,
      root: this.Lf
    };
    c = this.ur(a);
    a = {};
    d = b.headers || {};
    for (var e in d) {
      var f = e;
      if (Object.prototype.hasOwnProperty.call(d, f)) {
        var g = _.Wg(d, f);
        g && (f = _.Ug(f, g) || _.Tg(f)) && _.Xg(a, f, g)
      }
    }
    _.Xg(a, _.Dg.CONTENT_TYPE, "application/json");
    e = yB(c);
    DA({
      method: "POST",
      root: b.root || void 0,
      path: "/rpc",
      params: b.urlParams,
      headers: a,
      body: b.requests || []
    }).then(e,
      e)
  };
  xB.prototype.ur = function(a) {
    var b = this;
    return function(c, d) {
      b.Ey(c, d, a)
    }
  };
  xB.prototype.Ey = function(a, b, c) {
    a || (a = {});
    for (var d = 0; d < this.Rb.length; d++) {
      var e = this.Rb[d];
      e.callback && e.callback(a[e.id] || !1, b)
    }
    c && c(a, b)
  };
  EA.PG(function() {
    return new xB
  });
  xB.prototype.add = xB.prototype.add;
  xB.prototype.execute = xB.prototype.execute;
  var zB = function(a, b) {
    this.$Y = a;
    this.yf = b || null;
    this.Qe = null
  };
  zB.prototype.GB = function(a) {
    this.yf = a;
    this.Qe = 2 == this.yf ? new xB : new tB(this.$Y)
  };
  zB.prototype.add = function(a, b) {
    if (!a) throw a = b || _.qe(), new HA("Batch entry " + (_.re(a, "id") ? '"' + a.id + '" ' : "") + "is missing a request method");
    null === this.yf && this.GB(a.getFormat());
    this.yf !== a.getFormat() && cB("Unable to add item to batch.");
    var c = b && b.callback;
    1 == this.yf && c && (b.callback = function(d) {
      d = AB(d);
      var e = _.Ff([d]);
      c(d, e)
    });
    return this.Qe.add(a, b)
  };
  zB.prototype.execute = function(a) {
    var b = a && 1 == this.yf ? function(c) {
      var d = [];
      _.Hl(c, function(f, g) {
        f = AB(f);
        c[g] = f;
        d.push(f)
      });
      var e = _.Ff(d);
      a(c, e)
    } : a;
    this.Qe && this.Qe.execute(b)
  };
  var AB = function(a) {
    var b = a ? _.Mt(a, "result") : null;
    _.kb(b) && null != b.error && (b = bB(b), a = {
      id: a.id,
      error: b
    });
    return a
  };
  zB.prototype.then = function(a, b, c) {
    2 == this.yf && cB('The "then" method is not available on this object.');
    return this.Qe.then(a, b, c)
  };
  zB.prototype.add = zB.prototype.add;
  zB.prototype.execute = zB.prototype.execute;
  zB.prototype.then = zB.prototype.then;
  var BB = "/rest?fields=" + encodeURIComponent("kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id") + "&pp=0",
    CB = function(a, b) {
      return "/discovery/v1/apis/" + (encodeURIComponent(a) + "/" + encodeURIComponent(b) + BB)
    },
    EB = function(a, b, c, d) {
      if (_.kb(a)) {
        var e = a;
        var f = a.name;
        a = a.version || "v1"
      } else f = a, a = b;
      if (!f || !a) throw new HA("Missing required parameters.");
      var g = c || function() {},
        k = _.kb(d) ? d : {};
      c = function(l) {
        var m = l && l.result;
        if (!m || m.error || !m.name || !l || l.error || l.message || l.message) g(m &&
          m.error ? m : l && (l.error || l.message || l.message) ? l : new HA("API discovery response missing required fields."));
        else {
          l = k.root;
          l = null != m.rootUrl ? String(m.rootUrl) : l;
          l = "string" === typeof l ? l.replace(/([^\/])\/$/, "$1") : void 0;
          k.root = l;
          m.name && m.version && !m.id && (m.id = [m.name, m.version].join(":"));
          m.id && (k.apiId = m.id, l = "client/batchPath/" + m.id, m.batchPath && !_.R(l) && _.Ie(l, m.batchPath));
          var n = m.servicePath,
            p = m.parameters,
            t = function(u) {
              _.Hl(u, function(v) {
                if (!(v && v.id && v.path && v.httpMethod)) throw new HA("Missing required parameters");
                var w = v.id.split("."),
                  z = window.gapi.client,
                  B;
                for (B = 0; B < w.length - 1; B++) {
                  var A = w[B];
                  z[A] = z[A] || {};
                  z = z[A]
                }
                var E, K;
                k && (k.hasOwnProperty("root") && (E = k.root), k.hasOwnProperty("apiId") && (K = k.apiId));
                A = window.gapi.client[w[0]];
                A.eF || (A.eF = {
                  servicePath: n || "",
                  parameters: p,
                  apiId: K
                });
                w = w[B];
                z[w] || (z[w] = _.ij(DB, {
                    path: "string" === typeof v.path ? v.path : null,
                    httpMethod: "string" === typeof v.httpMethod ? v.httpMethod : null,
                    parameters: v.parameters,
                    parameterName: (v.request || {}).parameterName || "",
                    request: v.request,
                    root: E
                  },
                  A.eF))
              })
            },
            r = function(u) {
              _.Hl(u, function(v) {
                t(v.methods);
                r(v.resources)
              })
            };
          r(m.resources);
          t(m.methods);
          g.call()
        }
      };
      e ? c({
        result: e
      }) : 0 < f.indexOf("://") ? DA({
        path: f,
        params: {
          pp: 0,
          fields: 0 <= ("/" + f).indexOf("/discovery/v1/apis/") ? "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id" : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]'
        }
      }).then(c, c) : DA({
        path: CB(f,
          a),
        root: d && d.root
      }).then(c, c)
    },
    DB = function(a, b, c, d) {
      var e = b.servicePath || "";
      _.ld(e, "/") || (e = "/" + e);
      var f = FB(a.path, [a.parameters, b.parameters], c || {});
      c = f.Dk;
      var g = f.z1;
      e = _.zy(e, f.path);
      f = g.root;
      delete g.root;
      var k = a.parameterName;
      !k && 1 == _.uy(g) && g.hasOwnProperty("resource") && (k = "resource");
      if (k) {
        var l = g[k];
        delete g[k]
      }
      null == l && (l = d);
      null == l && a.request && (_.Qq(g) && (g = void 0), l = g);
      k = {};
      var m = a.httpMethod;
      "GET" == m && void 0 !== l && "" != String(l) && (_.Xg(k, _.Dg.gG, m), m = "POST");
      if ((null == l || null != d) && g)
        for (var n in g) "string" ===
          typeof g[n] && (c[n] = g[n]);
      return DA({
        path: e,
        method: m,
        params: c,
        headers: k,
        body: l,
        root: f || a.root,
        apiId: b.apiId
      }, 1)
    },
    FB = function(a, b, c) {
      c = _.tj(c);
      var d = {};
      _.Gl(b, function(e) {
        _.Hl(e, function(f, g) {
          var k = f.required;
          if ("path" == f.location)
            if (Object.prototype.hasOwnProperty.call(c, g)) - 1 != a.indexOf("{" + g + "}") ? (f = _.nh(c[g]), a = a.replace("{" + g + "}", f)) : -1 != a.indexOf("{+" + g + "}") && (f = encodeURI(String(c[g])), a = a.replace("{+" + g + "}", f)), delete c[g];
            else {
              if (k) throw new HA("Required path parameter " + g + " is missing.");
            }
          else "query" ==
            f.location && Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g], delete c[g])
        })
      });
      if (b = c.trace) d.trace = b, delete c.trace;
      return {
        path: a,
        Dk: d,
        z1: c
      }
    };
  var GB = function(a, b, c, d) {
      var e = b || "v1",
        f = _.kb(d) ? d : {
          root: d
        };
      if (c) EB(a, e, function(g) {
        if (g)
          if (g.error) c(g);
          else {
            var k = "API discovery was unsuccessful.";
            if (g.message || g.message) k = g.message || g.message;
            c({
              error: k,
              code: 0
            })
          }
        else c()
      }, f);
      else return new _.Pj(function(g, k) {
        var l = function(m) {
          m ? k(m) : g()
        };
        try {
          EB(a, e, l, f)
        } catch (m) {
          k(m)
        }
      })
    },
    HB = new RegExp(/^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source + /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source),
    IB = function(a, b) {
      if (!a) throw new HA("Missing required parameters");
      var c = "object" === typeof a ? a : {
        path: a
      };
      a = c.callback;
      delete c.callback;
      b = new jB(c, b);
      if (c = !!_.R("client/xd4") && FA()) {
        var d = b.lg();
        c = d.path;
        (d = d.root) && "/" !== d.charAt(d.length - 1) && (d += "/");
        d && c && c.substr(0, d.length) === d && (c = c.substr(d.length));
        c = !c.match(HB)
      }
      c && (b = new kB(b));
      return a ? (b.execute(a), null) : b
    };
  EA.QG(function(a) {
    return IB.apply(null, arguments)
  });
  var JB = function(a, b) {
      if (!a) throw new HA("Missing required parameters");
      for (var c = a.split("."), d = window.gapi.client, e = 0; e < c.length - 1; e++) {
        var f = c[e];
        d[f] = d[f] || {};
        d = d[f]
      }
      c = c[c.length - 1];
      if (!d[c]) {
        var g = b || {};
        d[c] = function(k) {
          var l = "string" == typeof g ? g : g.root;
          k && k.root && (l = k.root);
          return new jB({
            method: a,
            apiVersion: g.apiVersion,
            rpcParams: k,
            transport: {
              name: "googleapis",
              root: l
            }
          }, 2)
        }
      }
    },
    KB = function(a) {
      return new zB(a)
    };
  EA.OG(function(a) {
    return KB.apply(null, arguments)
  });
  var LB = function(a) {
    _.Re(a + " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs")
  };
  _.y("gapi.client.init", function(a) {
    a.apiKey && _.Ie("client/apiKey", a.apiKey);
    var b = (0, _.vb)(a.discoveryDocs || [], function(d) {
      return GB(d)
    });
    if ((a.clientId || a.client_id) && a.scope) {
      var c = new _.Pj(function(d, e) {
        _.q.gapi.load("auth2", {
          callback: function() {
            _.q.gapi.auth2.init.call(_.q.gapi.auth2, a).then(function() {
              d()
            }, e)
          },
          onerror: function(f) {
            e(f || Error("wa"))
          }
        })
      });
      b.push(c)
    } else(a.clientId || a.client_id || a.scope) && _.Re("client_id and scope must both be provided to initialize OAuth.");
    return _.Xj(b).then(function() {})
  });
  _.y("gapi.client.load", GB);
  _.y("gapi.client.newBatch", KB);
  _.y("gapi.client.newRpcBatch", function() {
    LB("gapi.client.newRpcBatch");
    return KB()
  });
  _.y("gapi.client.newHttpBatch", function(a) {
    LB("gapi.client.newHttpBatch");
    return new zB(a, 0)
  });
  _.y("gapi.client.register", function(a, b) {
    LB("gapi.client.register");
    var c;
    b && (c = {
      apiVersion: b.apiVersion,
      root: b.root
    });
    JB(a, c)
  });
  _.y("gapi.client.request", IB);
  _.y("gapi.client.rpcRequest", function(a, b, c) {
    LB("gapi.client.rpcRequest");
    if (!a) throw new HA('Missing required parameter "method".');
    return new jB({
      method: a,
      apiVersion: b,
      rpcParams: c,
      transport: {
        name: "googleapis",
        root: c && c.root || ""
      }
    }, 2)
  });
  _.y("gapi.client.setApiKey", function(a) {
    _.Ie("client/apiKey", a);
    _.Ie("googleapis.config/developerKey", a)
  });
  _.y("gapi.client.setApiVersions", function(a) {
    LB("gapi.client.setApiVersions");
    _.Ie("googleapis.config/versions", a)
  });
  _.y("gapi.client.getToken", function(a) {
    return _.Gh(a)
  });
  _.y("gapi.client.setToken", function(a, b) {
    a ? _.kw(a, b) : _.lw(b)
  });
  _.y("gapi.client.AuthType", {
    o2: "auto",
    NONE: "none",
    Q6: "oauth2",
    B4: "1p"
  });
  _.y("gapi.client.AuthType.AUTO", "auto");
  _.y("gapi.client.AuthType.NONE", "none");
  _.y("gapi.client.AuthType.OAUTH2", "oauth2");
  _.y("gapi.client.AuthType.FIRST_PARTY", "1p");

});
// Google Inc.