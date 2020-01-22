this._D = this._D || {};
(function(_) {
  var window = this;
  try {
    var sDf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(sDf, _.D);
    _.R("oqOEaf");
    var tDf = function(a) {
      var b = this;
      this.H = null;
      a.Jc(_.Dw, !0).then(function(c) {
        return c.ha().then(function() {
          b.H = c
        })
      }).then(null, _.Js(a, 407))
    };
    tDf.prototype.ha = function() {
      if (!this.H) return null;
      var a = this.H.H.get();
      a = uDf[a];
      var b = new sDf;
      return _.l(b, 3, a)
    };
    var vDf = {},
      uDf = (vDf[2] = 300, vDf[1] = 400, vDf[3] = 200, vDf);
    _.bt({
      id: _.KAa,
      Rb: tDf
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("Uxcdvf");
    var s8f = function() {
      this.H = !0
    };
    s8f.prototype.Tua = function(a) {
      this.H && (a.focus(), this.H = !1)
    };
    s8f.prototype.Ada = function(a) {
      0 < a.size() ? this.Tua(a.qg(0)) : this.H = !1
    };
    s8f.prototype.isValid = function() {
      return this.H
    };
    var t8f = function() {
      _.I.call(this);
      var a = this;
      this.H = null;
      var b = _.Bj(document.documentElement, "focus", function() {
        a.H && (a.H.H = !1, a.H = null)
      }, !0);
      _.rj(this, function() {
        _.Ej(b)
      })
    };
    _.z(t8f, _.I);
    t8f.prototype.request = function() {
      this.H && (this.H.H = !1, this.H = null);
      return this.H = new s8f
    };
    _.bt({
      id: _.Tn,
      Rb: t8f
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.D7d = function(a) {
      switch (a) {
        case 3:
          return "Comfortable";
        case 2:
          return "Cozy";
        case 1:
          return "Compact";
        default:
          return "Comfortable"
      }
    };
    _.R("sywq");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywr");
    var E7d = function(a) {
        var b = this;
        this.Fa = a;
        this.Ze = a.get(_.Qp);
        this.ta = a.get(_.cn);
        this.H = new _.$q(3);
        this.Ze.LF().then(function() {
          var c = b.Ze.Aj(_.sXa);
          c || (c = 3, b.Ze.Jl(_.sXa, c).then(null, _.Js(b.Fa, 417)));
          b.H.set(c)
        }).then(null, _.Js(a, 404))
      },
      F7d = function(a) {
        switch (a) {
          case 2:
            return "sd-we";
          case 1:
            return "sd-mi-we";
          default:
            return "sd-ph"
        }
      };
    E7d.prototype.ka = function(a) {
      this.H.set(a);
      this.Ze.Jl(_.sXa, a).then(null, _.Js(this.Fa, 419));
      a = new _.cD("Density set to " + (_.D7d(a) + "."), 0);
      this.ta.WC(a)
    };
    E7d.prototype.ma = function(a) {
      this.H.observe(function(b, c) {
        _.Fb(this.Xa(), F7d(c));
        _.Xc(this.Xa(), F7d(b))
      }, a, !0)
    };
    E7d.prototype.ha = function() {
      return this.Ze.LF()
    };
    _.bt({
      id: _.Dw,
      Rb: E7d
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("YPy80d");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sys1");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syif");
    _.yob = function(a) {
      return (0, _.rs)('data-target="showHelp" data-help-topic="' + _.X(a.zf) + '"')
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syie");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var s7c, x7c;
    _.o7c = function(a, b) {
      return _.l(a, 1, b)
    };
    _.p7c = function(a, b) {
      return _.l(a, 1, b)
    };
    _.q7c = function(a, b) {
      return _.ka(a, 2, b)
    };
    _.r7c = function(a, b) {
      return _.H(a, 3, b)
    };
    _.rS = function(a, b) {
      a.Xq.H(_.Bu(a.Xq, a.Oa(), b, a.ha.H))
    };
    s7c = [3];
    _.sS = function(a) {
      _.E(this, a, 0, -1, s7c, null)
    };
    _.C(_.sS, _.D);
    _.sS.prototype.getType = function() {
      return _.p(this, 1)
    };
    _.sS.prototype.Bd = function() {
      return _.p(this, 2)
    };
    _.t7c = function(a, b) {
      return _.l(a, 2, b)
    };
    _.sS.prototype.H = function() {
      return _.ob(this, _.sS, 3)
    };
    _.u7c = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.u7c, _.D);
    _.u7c.prototype.H = function() {
      return _.p(this, 1)
    };
    _.v7c = function(a, b) {
      return _.l(a, 1, b)
    };
    _.u7c.prototype.ka = function() {
      return _.u(this, _.sS, 2)
    };
    _.w7c = function(a, b) {
      return _.H(a, 2, b)
    };
    x7c = [1];
    _.yv = function(a) {
      _.E(this, a, 0, -1, x7c, null)
    };
    _.C(_.yv, _.D);
    _.yv.prototype.H = function() {
      return _.ob(this, _.u7c, 1)
    };
    _.y7c = function(a, b) {
      return _.ka(a, 1, b)
    };
    _.R("sys0");
    var z7c = function() {
      return (0, _.T)("<span>Working\u2026</span>")
    };
    _.tS = function(a, b, c, d) {
      _.uy.call(this, a);
      this.Gb = b;
      this.Pb = c;
      this.ka = a.get(_.Jb);
      this.va = a.get(_.$fb);
      this.Bb = d;
      this.ta = null;
      this.rb = this.wa = !1
    };
    _.z(_.tS, _.uy);
    _.g = _.tS.prototype;
    _.g.Ub = function() {
      return this.Gb
    };
    _.g.Ep = function() {
      return new _.lw(z7c, {})
    };
    _.g.Qi = function() {
      return null
    };
    _.g.Cz = function() {
      return null
    };
    _.g.lE = function() {
      var a = this;
      return this.wa ? {
        undo: function() {
          a.Ot();
          _.vy(a, new _.$gb)
        }
      } : null
    };
    _.g.execute = function(a) {
      var b = this;
      this.Bb && this.qn();
      a = _.uy.prototype.execute.call(this, a);
      a.then(function(c) {
        c = b.Qi(c);
        b.Ot();
        var d = null != b.lE() ? 2 : 1;
        c && (b.ta = b.ka.H(new _.mw(c, "d", b.lE(), d)))
      }).then(null, function(c) {
        if (!(c instanceof _.Qk || c instanceof _.Fk || c instanceof _.Zgb || "iid" == c)) {
          var d = new _.Pb(b.Oa()),
            e = b.Cz(c);
          c = c instanceof Error ? c : Error(c);
          d.Rd(c);
          e ? _.DSa(d, e) : _.Ob(d, c.message || "Soy error");
          _.Nb(d, b.Pb);
          b.Ot();
          b.ta = b.ka.H(_.Lb(d))
        }
      });
      return this.TB(a)
    };
    _.g.TB = function(a) {
      var b = new _.Pk;
      _.Rk(a, b.callback.bind(b));
      return b
    };
    _.g.qn = function() {
      if (!this.rb) {
        var a = this.Ep();
        a && (this.rb = !0, this.ta = this.ka.H(new _.mw(a, "p", null, 3)))
      }
    };
    _.g.Ot = function() {
      null != this.ta && (this.ka.ha(this.ta), this.ta = null)
    };
    _.uS = function(a, b, c) {
      a.wa = !0;
      var d = c();
      d.tb(function() {
        a.va.gga({
          Exa: a.Ub(),
          tja: b,
          pga: c
        })
      });
      return d
    };
    _.tS.prototype.xT = function() {
      return _.Uk(!0)
    };
    _.A7c = function(a, b) {
      b = b();
      b.tb(function() {
        a.va.Xya()
      });
      return b
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Yjd = function(a) {
      a = a.getCapabilities();
      return !(!a || !_.x(a, 6))
    };
    _.R("syse");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sytv");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syig");
    _.NE = function(a) {
      var b = a.zf,
        c = a.ou;
      a = a.Jb;
      b = '<span class="' + _.X("Oh-Ma-A") + " " + _.X("kc-A") + (c ? " " + _.X(c) : "") + '"' + (a ? ' aria-label="' + _.X(a) + '"' : "") + " " + _.yob({
        zf: b
      }) + ' role="link" tabindex=0>';
      return (0, _.T)(b + "Learn more</span>")
    };
    _.zob = function(a) {
      a = a.uri;
      a = '<a class="' + _.X("Oh-Ma-A") + " " + _.X("kc-A") + '" href="' + _.X(_.Es(a)) + '" target="_blank">';
      return (0, _.T)(a + "Learn more</a>")
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var i7c = function(a) {
      return (0, _.T)("<span>" + _.U(a.content) + "</span>")
    };
    _.R("syrt");
    _.qS = function(a, b, c, d, e, f) {
      _.mw.call(this, new _.lw(i7c, {
        content: a
      }), b, {}, c, d, e, f)
    };
    _.z(_.qS, _.mw);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sysd");
    var Zjd = function(a) {
      a = 'Cannot create a file: "' + (_.Hs(_.U(a.Fk)) + '" is view only');
      return (0, _.T)(a)
    };
    _.zS = function(a, b, c) {
      _.tS.call(this, a, b, c, !1);
      this.ua = a.get(_.Qn)
    };
    _.z(_.zS, _.tS);
    _.zS.prototype.Ad = function() {
      var a = this,
        b = this.Ub();
      _.IHa(this.ha.H.H, b.app);
      b = b.parent.getItem();
      if (!$jd(this, b)) return b.getId(), _.Uk();
      if (b.Ph()) return akd(this, b).tb(function() {
        bkd(a);
        return _.Uk()
      });
      bkd(this);
      return _.Uk()
    };
    var akd = function(a, b) {
        var c = new _.Pk,
          d = _.Oc(_.Oc(new _.Pc, _.Qc, !1, !0), {
            key: "ok",
            caption: "Create and share"
          }, !0),
          e = _.$ca("Create in a shared folder?", _.bh("The created item will have the same sharing permissions as the selected folder."), function() {
            return c.callback(b)
          }, function() {
            return c.cancel()
          }, void 0, void 0, d);
        a.ua.Ig(e).dispatchEvent("wa");
        (e = d.H) && _.gy(d, e).focus();
        return c.tb(function() {
          return $jd(a, b) ? b : _.kma()
        })
      },
      $jd = function(a, b) {
        if (_.Yjd(b)) return !0;
        a.ka.H(new _.mw(new _.lw(Zjd, {
          Fk: b.getTitle() ||
            ""
        })));
        return !1
      },
      bkd = function(a) {
        a.qn();
        a = a.H();
        _.zE(a)
      };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var HAd;
    _.GAd = function(a) {
      if (!a) return 0;
      var b = _.Paa(a);
      return 1 == b && _.Ea(a || "") ? 13 : FAd[b] || 0
    };
    HAd = [6];
    _.IAd = function(a) {
      _.E(this, a, 0, -1, HAd, null)
    };
    _.C(_.IAd, _.D);
    _.JAd = function(a, b) {
      return _.l(a, 1, b)
    };
    _.KAd = function(a, b) {
      return _.l(a, 2, b)
    };
    _.LAd = function(a, b) {
      return _.l(a, 3, b)
    };
    _.MAd = function(a, b) {
      return _.l(a, 4, b)
    };
    _.NAd = function(a, b) {
      return _.l(a, 5, b)
    };
    _.OAd = function(a, b) {
      return _.l(a, 6, b || [])
    };
    _.PAd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.PAd, _.D);
    _.PAd.prototype.ur = function() {
      return _.p(this, 1)
    };
    _.R("syt9");
    var FAd = {
      1: 12,
      2: 1,
      18: 22,
      23: 12,
      3: 4,
      4: 5,
      20: 15,
      15: 3,
      5: 6,
      21: 10,
      22: 16,
      6: 7,
      19: 8,
      7: 9,
      16: 9,
      8: 11,
      9: 17,
      10: 18,
      11: 19,
      12: 20,
      13: 21,
      14: 14,
      17: 14
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sytl");
    var xId = function(a) {
        var b = a.Q6,
          c = a.yla,
          d = a.appName;
        a = a.KH;
        c = '<div class="' + _.X("a-ge-pd-Yb-k-oa") + '"><div class="' + _.X("a-ge-pd-Yb-k-c") + " " + _.X("h-sb-Ic") + '"><img class="' + _.X("a-ge-pd-Yb-k-c-ta") + '" src="' + _.X(_.Fs(c)) + '"/></div><div class="' + _.X("a-ge-pd-Yb-k-x") + " " + _.X("h-sb-Ic") + '"><div class="' + _.X("a-ge-pd-Yb-k-D") + '">';
        d = "<b>" + (_.Hs(_.U(d)) + "</b> will be disconnected from Drive.");
        c += d;
        a && (c += '<div class="' + _.X("a-ge-pd-Yb-Ie-Yb-gi") + '"><input class="' + _.X("a-ge-pd-Yb-Ie-Yb-gi-Qa") + '" type="checkbox" checked> ',
          b = "Also delete <b>" + (_.U(b) + "</b> of hidden app data created by this app"), c = c + b + "</div>");
        return (0, _.T)(c + "</div></div></div>")
      },
      yId = function(a) {
        var b = a.Q6,
          c = a.yla;
        a = a.appName;
        c = '<div class="' + _.X("a-ge-pd-Yb-k-oa") + '"><div class="' + _.X("a-ge-pd-Yb-k-c") + " " + _.X("h-sb-Ic") + '"><img class="' + _.X("a-ge-pd-Yb-k-c-ta") + '" src="' + _.X(_.Fs(c)) + '"/></div><div class="' + _.X("a-ge-pd-Yb-k-x") + " " + _.X("h-sb-Ic") + '"><div class="' + _.X("a-ge-pd-Yb-k-D") + '">';
        b = _.U(b) + (" of hidden app data from <b>" + (_.Hs(_.U(a)) +
          "</b> will be deleted from Drive."));
        return (0, _.T)(c + b + "</div></div></div>")
      };
    _.BV = function(a, b) {
      _.Zx.call(this);
      this.ka = a;
      this.li = b;
      this.H = new _.Pk;
      this.ha = null;
      a = new _.Pc;
      _.Oc(a, _.Qc, !1, !0);
      "uninstallApp" == this.li ? a.set("d", "Disconnect", !0) : "deleteAppData" == this.li && a.set("dad", "Delete", !0);
      _.Sc(this, a);
      _.Tc(this, a.H);
      "uninstallApp" == b ? this.setTitle("Disconnect app") : "deleteAppData" == b && this.setTitle("Delete hidden app data");
      this.Pg(!0)
    };
    _.z(_.BV, _.Zx);
    _.zId = function(a) {
      a.Va(!0);
      a.H.H && (a.H = new _.Pk);
      return a.H
    };
    _.BV.prototype.focus = function() {
      _.Zx.prototype.focus.call(this);
      var a = this.yf,
        b = a.H;
      b && _.gy(a, b).focus()
    };
    _.BV.prototype.Ka = function() {
      _.Zx.prototype.Ka.call(this);
      var a = {};
      a.yla = this.ka.Fx(64);
      a.appName = this.ka.getName();
      a.KH = !1;
      a.Q6 = "";
      var b = this.ka.Fd();
      b && b.KH() && (b = b.ua, null != b && (a.KH = !0, a.Q6 = (new _.uC).format(b)));
      this.ha = null;
      b = this.jc();
      "uninstallApp" == this.li ? (b.appendChild(_.id(xId, a)), a.KH && (this.ha = this.Cb("a-ge-pd-Yb-Ie-Yb-gi-Qa"))) : "deleteAppData" == this.li && b.appendChild(_.id(yId, a))
    };
    _.BV.prototype.Sa = function() {
      _.Zx.prototype.Sa.call(this);
      this.Ra().qd(this, "dialogselect", this.ma)
    };
    _.BV.prototype.ma = function(a) {
      "d" == a.key ? this.H.callback({
        NBa: !0,
        sx: this.ha ? this.ha.checked : !1
      }) : "dad" == a.key ? this.H.callback({
        NBa: !1,
        sx: !0
      }) : this.H.cancel();
      this.Va(!1)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var wJd, xJd, GJd, IJd, JJd, KJd, LJd, NJd, pKd, qKd, rKd, sKd, tKd, uKd, vKd, wKd, AKd, EKd, DKd, FKd, BKd, uJd, qJd, iJd, lJd, kJd, mJd, jJd, oJd, pJd, nJd, rJd, sJd, tJd;
    _.hJd = function(a) {
      var b = a.Fd().vA;
      a = (a = a.Fd().fF) && 0 < a.length;
      return b && 1 == b.length && _.Ea(b[0]) && !a
    };
    _.vJd = function(a) {
      switch (a) {
        case "conversionCorruptedInput":
          return iJd;
        case "conversionInputDoesNotMatchSpecifiedMimeType":
          return jJd;
        case "conversionInputTooLarge":
        case "conversionOutputTooLarge":
          return kJd;
        case "conversionMissingCredentials":
          return lJd;
        case "conversionTimeout":
          return mJd;
        case "conversionTooManyCharts":
          return nJd;
        case "conversionTooManyDrawings":
          return oJd;
        case "conversionTooManyImages":
          return pJd;
        case "conversionUnsupportedFormat":
          return qJd;
        case "Qb":
          return rJd;
        case "Rb":
          return sJd;
        case "Sb":
          return tJd;
        default:
          return uJd
      }
    };
    wJd = /\{folderId\}/g;
    xJd = function(a) {
      this.ka = a.supportsCreate || !1;
      this.Na = a.supportsImport || !1;
      this.ma = a.supportsOfflineCreate || !1;
      this.Pa = a.supportsMultiOpen || !1;
      this.ta = a.useByDefault || !1;
      this.vA = a.primaryMimeTypes || [];
      this.iJ = a.secondaryMimeTypes || [];
      this.fF = a.primaryFileExtensions || [];
      this.$U = a.secondaryFileExtensions || [];
      this.H = a.openUrlTemplate || "";
      this.va = a.createUrl || "";
      this.ha = a.createInFolderTemplate || "";
      this.Ca = a.hasAppData || null;
      this.ua = a.appDataQuotaBytesUsed || null;
      this.Ja = void 0 !== a.requiresAuthorizationBeforeOpenWith ?
        a.requiresAuthorizationBeforeOpenWith : !0;
      this.Ga = a.hasDriveWideScope || null;
      this.wa = a.driveBranded || !1
    };
    _.yJd = function(a, b) {
      return b ? a.ha.replace(wJd, b) : a.va
    };
    xJd.prototype.KH = function() {
      return this.Ca
    };
    xJd.prototype.Ea = function() {
      return this.Ga
    };
    var zJd = function(a) {
      this.ha = a.u || null;
      this.H = a.cc || null
    };
    zJd.prototype.getUrl = function() {
      return this.ha
    };
    zJd.prototype.Tc = function() {
      return this.H
    };
    var AJd = function(a, b) {
        return a.size - b.size
      },
      BJd = function(a) {
        var b = {},
          c;
        for (c in a.H) {
          var d = _.Se(a.H[c]);
          d.sort(AJd);
          b[c] = d
        }
        this.H = b;
        this.ha = a.ha
      };
    BJd.prototype.$l = function(a, b) {
      a = CJd(this, a);
      if (!a) return null;
      b = !this.ha && 1 < window.devicePixelRatio ? _.WMa[b] || b : b;
      return DJd(a, b)
    };
    var CJd = function(a, b) {
        return a.H[b] ? a.H[b] : "doc_sh" == b ? CJd(a, "doc") : _.Cfa(a.H) || null
      },
      DJd = function(a, b) {
        var c = _.Nf(a, function(d) {
          return d.size >= b
        });
        return c ? c.icon : a[a.length - 1].icon
      },
      EJd = function(a, b) {
        this.icon = a;
        this.size = b
      },
      FJd = function() {
        this.H = {};
        this.ha = !1
      },
      HJd = function(a) {
        this.ka = a.absoluteScore || 0;
        this.ha = GJd(a.mimeTypeScores || []);
        this.H = GJd(a.fileExtensionScores || [])
      };
    HJd.prototype.wZ = function() {
      return this.ka
    };
    GJd = function(a) {
      var b = {};
      _.Ue(a, function(c) {
        var d = c.type;
        c = c.score;
        null != d && null != c && (b[d] = c)
      });
      return b
    };
    IJd = function(a, b) {
      return b in a.ha ? a.ha[b] : 0
    };
    JJd = function(a, b) {
      return b in a.H ? a.H[b] : 0
    };
    KJd = "619683526622 1083656409722 889782162350 196802322321 952342923413 796396377186 897606708560 1014160490159 26410270374 338347331578 1095523759147 629453589428 22364497035 230754619982 760326228798 371237729773 335078253515 770102487694".split(" ");
    _.MJd = function(a) {
      this.jd = a.id;
      this.Ja = a.name;
      this.Na = a.type || "WEB_ONLY";
      this.Ga = a.installed || !1;
      this.ua = a.removable || !1;
      this.wa = a.authorized || !1;
      this.H = a.productId || null;
      this.ta = a.hasGsmListing || !1;
      this.Ca = LJd(a.icons);
      this.va = a.shortDescription || "";
      this.Ea = new xJd(a);
      this.Pa = new HJd(a.rankingInfo || {});
      this.uHa = a.chromeExtensionIds || [];
      this.ha = a.supportsTeamDrives || !1;
      this.ma = !1;
      this.isSuggestable = void 0
    };
    LJd = function(a) {
      var b = new FJd;
      null != a && _.Ue(a, function(c) {
        var d = c.iconUrl;
        if (null != d && 0 < d.length) {
          var e = {};
          e.u = null != d ? d : null;
          d = new zJd(e);
          e = c.category;
          c = c.size;
          var f = b.H[e];
          f || (f = [], b.H[e] = f);
          f.push(new EJd(d, c))
        }
      });
      return new BJd(b)
    };
    _.g = _.MJd.prototype;
    _.g.getId = function() {
      return this.jd
    };
    _.g.getName = function() {
      return this.Ja
    };
    _.g.getType = function() {
      return this.Na
    };
    _.g.ze = function(a, b) {
      return (a = this.Ca.$l(b, a)) ? a.getUrl() : null
    };
    _.g.Fx = function(a) {
      return this.ze(a, "app")
    };
    _.g.YYa = function() {
      return -1 != KJd.indexOf(this.jd)
    };
    _.g.isInstalled = function() {
      return this.Ga
    };
    _.g.ZH = function() {
      return this.wa
    };
    _.g.isRemovable = function() {
      return this.ua
    };
    _.g.Fd = function() {
      return this.Ea
    };
    _.g.Hz = function() {
      return this.Pa
    };
    _.g.kma = function() {
      if (!this.isInstalled()) return !1;
      var a = this.Fd();
      return a ? 0 < a.vA.length || 0 < a.fF.length : !1
    };
    _.g.clone = function() {
      return NJd(this, this)
    };
    NJd = function(a, b) {
      if (null == b || "object" != typeof b) return b;
      if (b instanceof Date) return a = new Date, a.setTime(b.getTime()), a;
      if (b instanceof Array) {
        for (var c = [], d = b.length, e = 0; e < d; e++) c[e] = NJd(a, b[e]);
        return c
      }
      if (b instanceof Object) {
        c = Object.create(b.constructor.prototype);
        for (d in b) b.hasOwnProperty(d) && (c[d] = NJd(a, b[d]));
        return c
      }
      throw Error("wb");
    };
    _.GE = function(a, b, c) {
      var d = {};
      d.id = a;
      d.name = b;
      _.MJd.call(this, d);
      this.ka = c || ""
    };
    _.z(_.GE, _.MJd);
    _.GE.prototype.Fx = function() {
      return this.ka
    };
    var EV = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(EV, _.D);
    EV.prototype.ka = function() {
      return _.p(this, 1)
    };
    EV.prototype.H = function() {
      return _.p(this, 2)
    };
    var OJd = [2],
      PJd = function(a) {
        _.E(this, a, 0, -1, OJd, null)
      };
    _.C(PJd, _.D);
    PJd.prototype.taa = function() {
      return _.p(this, 1)
    };
    PJd.prototype.H = function() {
      return _.ob(this, EV, 2)
    };
    var QJd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(QJd, _.D);
    QJd.prototype.getName = function() {
      return _.p(this, 2)
    };
    QJd.prototype.Id = function(a) {
      return _.l(this, 2, a)
    };
    QJd.prototype.$l = function() {
      return _.p(this, 3)
    };
    QJd.prototype.setIcon = function(a) {
      return _.l(this, 3, a)
    };
    var RJd = [1],
      SJd = function(a) {
        _.E(this, a, 0, -1, RJd, null)
      };
    _.C(SJd, _.D);
    SJd.prototype.taa = function() {
      return _.p(this, 3)
    };
    var TJd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(TJd, _.D);
    TJd.prototype.getEmail = function() {
      return _.p(this, 1)
    };
    var UJd = function(a, b) {
      return _.l(a, 1, b)
    };
    TJd.prototype.Tx = function() {
      return null != _.p(this, 1)
    };
    var VJd = function(a, b) {
        return _.l(a, 2, b)
      },
      WJd = function(a) {
        _.E(this, a, 0, -1, null, null)
      };
    _.C(WJd, _.D);
    WJd.prototype.getType = function() {
      return _.v(this, 1, "applications_for_file")
    };
    WJd.prototype.kE = function() {
      return _.x(this, 2)
    };
    WJd.prototype.getData = function() {
      return _.u(this, SJd, 3)
    };
    WJd.prototype.$B = function() {
      return null != _.p(this, 3)
    };
    var XJd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(XJd, _.D);
    XJd.prototype.taa = function() {
      return _.p(this, 2)
    };
    var YJd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(YJd, _.D);
    YJd.prototype.getEmail = function() {
      return _.p(this, 1)
    };
    YJd.prototype.Tx = function() {
      return null != _.p(this, 1)
    };
    var ZJd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(ZJd, _.D);
    ZJd.prototype.getType = function() {
      return _.v(this, 1, "open_file")
    };
    ZJd.prototype.kE = function() {
      return _.x(this, 2)
    };
    ZJd.prototype.getData = function() {
      return _.u(this, XJd, 3)
    };
    ZJd.prototype.$B = function() {
      return null != _.p(this, 3)
    };
    var $Jd = [3],
      aKd = function(a) {
        _.E(this, a, 0, -1, $Jd, null)
      };
    _.C(aKd, _.D);
    aKd.prototype.getEmail = function() {
      return _.p(this, 1)
    };
    var bKd = function(a, b) {
      return _.l(a, 1, b)
    };
    aKd.prototype.Tx = function() {
      return null != _.p(this, 1)
    };
    var cKd = [3],
      dKd = function(a) {
        _.E(this, a, 0, -1, cKd, null)
      };
    _.C(dKd, _.D);
    dKd.prototype.getEmail = function() {
      return _.p(this, 1)
    };
    dKd.prototype.Tx = function() {
      return null != _.p(this, 1)
    };
    var FV = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(FV, _.D);
    FV.prototype.getType = function() {
      return _.v(this, 1, "pin_state")
    };
    FV.prototype.kE = function() {
      return _.x(this, 2)
    };
    FV.prototype.getData = function() {
      return _.u(this, PJd, 3)
    };
    FV.prototype.$B = function() {
      return null != _.p(this, 3)
    };
    var eKd = function() {
      _.Ef.apply(this, arguments)
    };
    _.z(eKd, _.Ef);
    var fKd = function() {
      _.Ef.apply(this, arguments)
    };
    _.z(fKd, _.Ef);
    var gKd = function() {
      _.Ef.apply(this, arguments)
    };
    _.z(gKd, _.Ef);
    _.HE = function() {
      _.Ef.apply(this, arguments)
    };
    _.z(_.HE, _.Ef);
    _.Lmb = function() {
      _.Ef.apply(this, arguments)
    };
    _.z(_.Lmb, _.Ef);
    var GV = function(a, b) {
      this.H = a;
      this.ma = b;
      a = this.H.ha;
      this.ha = _.v(a, 9, "") || "";
      this.ka = _.v(a, 8, 0) || 0
    };
    GV.prototype.Hx = function() {
      return "v1"
    };
    GV.prototype.kra = function() {
      return this.ma
    };
    GV.prototype.lva = function(a) {
      return this.H.fetch(a + ",applications_for_file", "native_opener/list_apps/" + this.ha + "/" + a, this.ka).then(function(b) {
        return hKd(b)
      })
    };
    var hKd = function(a) {
        if (!a) throw new gKd("No response from Sync Client");
        if (!a.success) throw Error("Ve");
        var b = a.data;
        if (!b) throw Error("We");
        if (0 == a.reason_code) throw new _.HE("Sync Client not enabled");
        a = b.applications;
        if (!a || 0 == a.length) throw new gKd;
        var c = [],
          d = [];
        a.forEach(function(e) {
          e["default"] ? c.push(e) : d.push(e)
        });
        a = iKd(c);
        return {
          hU: iKd(d),
          H: 0 < a.length ? a[0] : void 0
        }
      },
      iKd = function(a) {
        var b = [];
        a.forEach(function(c) {
          var d = c.application_id;
          d && b.push(new _.GE(d, c.name, _.Kc(_.yh(c.icon)) ? void 0 :
            "data:image/png;base64," + c.icon))
        });
        return b
      };
    GV.prototype.mva = function(a, b) {
      return this.H.fetch(a + ",open_file", "native_opener/open_file/" + this.ha + "/" + a + "/" + b).then(function(c) {
        if (c.success) return c;
        throw Error("Xe");
      })
    };
    GV.prototype.raa = function() {
      return Promise.reject(Error("F"))
    };
    GV.prototype.cAa = function() {
      return Promise.reject(Error("F"))
    };
    var jKd = function(a, b) {
      this.ha = a;
      this.ma = b;
      a = this.ha.ha;
      this.H = _.v(a, 9, "");
      this.ka = _.v(a, 8, 0) || 0
    };
    _.g = jKd.prototype;
    _.g.Hx = function() {
      return "v2"
    };
    _.g.kra = function() {
      return this.ma
    };
    _.g.lva = function(a) {
      var b = VJd(UJd(new TJd, this.H), a);
      return kKd(this, "2/" + a, "native_opener/v2/2", b, WJd, this.ka).then(function(c) {
        return lKd(c)
      })
    };
    _.g.mva = function(a, b) {
      var c = new YJd;
      c = _.l(c, 1, this.H);
      c = _.l(c, 2, a);
      c = _.l(c, 3, b);
      return kKd(this, "3/" + a + "/" + b, "native_opener/v2/3", c, ZJd)
    };
    _.g.raa = function(a) {
      if (!a || 1 > a.length || 1E3 < a.length) return Promise.reject(new eKd("docIds required and fewer than 1000"));
      var b = new dKd;
      b = _.l(b, 1, this.H);
      b = _.l(b, 3, a || []);
      return kKd(this, "4/" + a.join(","), "native_opener/v2/4", b, FV)
    };
    _.g.cAa = function(a, b) {
      var c = !!(a && 0 < a.length && 1E3 > a.length),
        d = !!(b && 0 < b.length && 1E3 > b.length);
      if (!c && !d) return Promise.reject(new eKd("Specify docs ids to pin or unpin"));
      var e = bKd(new aKd, this.H);
      c && a.forEach(function(f) {
        var h = new EV;
        f = _.l(h, 1, f);
        f = _.l(f, 2, 2);
        _.vi(e, 3, f, EV, void 0)
      });
      d && b.forEach(function(f) {
        var h = new EV;
        f = _.l(h, 1, f);
        f = _.l(f, 2, 3);
        _.vi(e, 3, f, EV, void 0)
      });
      return kKd(this, "5/" + a.join(",") + ("/" + b.join(",")), "native_opener/v2/5", e, FV)
    };
    var kKd = function(a, b, c, d, e, f) {
        d.Tx() && d.getEmail() || Promise.reject(Error("Ye"));
        c = c + "/" + btoa(d.Pc());
        return a.ha.fetch(b, c, f).then(function(h) {
          if (!h) throw new fKd("No response from Sync Client fetch");
          h = new e(h);
          if (!h) throw new fKd("Unable to parse response from Sync Client fetch");
          if (!h.kE()) throw new fKd("Sync Client fetch was unsuccessful");
          if (h.$B() && 0 == h.getData().taa()) throw new _.HE("Unspecified error: Sync Client not enabled");
          if (!h.$B()) throw new fKd("Expected data field missing");
          h = h.getData();
          if (!h) throw new fKd("The data field was unexpectedly empty");
          return h
        })
      },
      lKd = function(a) {
        a = _.ob(a, QJd, 1);
        if (!a || 0 == a.length) throw new gKd;
        var b = [],
          c = [];
        a.forEach(function(d) {
          var e = _.p(d, 1);
          e && (e = new _.GE(e, d.getName(), d.$l() ? "data:image/png;base64," + d.$l() : void 0), _.x(d, 4) ? b.push(e) : c.push(e))
        });
        return {
          hU: c,
          H: 0 < b.length ? b[0] : void 0
        }
      },
      mKd = function(a) {
        this.ha = a;
        this.H = new Map;
        this.ka = null
      },
      nKd = function(a) {
        if (a.ka) return Promise.resolve(a.ka);
        var b = _.v(a.ha, 8, 0) || 0;
        return a.fetch("version", "native_opener/version",
          b).then(function(c) {
          if (!c) throw new _.HE("Invalid response from Sync Client");
          var d = c.data;
          if (!d) throw Error("Ze");
          d = d.full;
          if (!d || 0 > _.Lg(d, "1.18")) throw Error("$e");
          d = c.protocol_versions;
          Array.isArray(d) && 0 < d.length ? a.ka = new jKd(a, c) : a.ka = new GV(a, c);
          return a.ka
        })
      };
    mKd.prototype.fetch = function(a, b, c) {
      var d = this;
      if (this.H.get(a)) return this.H.get(a);
      try {
        if (chrome && chrome.runtime) var e = chrome.runtime.connect(_.v(this.ha, 5, "lmjegmlicamnimmfhcmpkclmigmmcbeh"), {
          name: _.v(this.ha, 4, "com.google.drive.nativeproxy")
        });
        else return Promise.reject(Error("af"))
      } catch (h) {
        return Promise.reject(new _.HE(h))
      }
      if (!e) return c = new _.HE("Unable to get Application Launcher for Drive (by Google) extension"), Promise.reject(c);
      var f = (new Promise(function(h, k) {
        var m = e;
        m.onDisconnect.addListener(function() {
          k(new _.Lmb("Drive Client unexpectedly disappeared"))
        });
        m.onMessage.addListener(function(n) {
          h(n)
        });
        m.postMessage(b)
      }))["finally"](function() {
        var h = e;
        try {
          h.postMessage("quit"), h.disconnect()
        } catch (k) {}
        d.H.get(a) && d.H["delete"](a)
      });
      this.H.set(a, f);
      return c ? Promise.race([_.ca(c, null), f]) : f
    };
    var oKd = function(a, b) {
      b = void 0 === b ? null : b;
      this.ha = _.uE() ? nKd(new mKd(a)) : Promise.reject(Error("bf"));
      this.H = b;
      this.ka = new _.Pk;
      this.H && (this.ma(), this.H.listen((0, _.B)(this.ma, this), this))
    };
    oKd.prototype.ma = function() {
      this.H && (this.H.get() ? this.ka = new _.Pk : _.Sk(pKd(this), this.ka))
    };
    pKd = function(a) {
      return qKd(a, "undefined").ug(function(b) {
        return b instanceof gKd ? _.Uk() : _.Wk(b)
      })
    };
    qKd = function(a, b) {
      return _.uE() ? _.Vk(a.ha.then(function(c) {
        return c.lva(b)
      })) : _.Wk(Error("cf"))
    };
    rKd = function(a, b, c) {
      return _.uE() ? _.Vk(a.ha.then(function(d) {
        return d.mva(b, c)
      })) : _.Wk(Error("bf"))
    };
    sKd = /{ids}/g;
    tKd = /{exportIds}/g;
    uKd = /%22ids%22:%5B%22{ids}%22%5D,?/;
    vKd = /%22exportIds%22:%5B%22{exportIds}%22%5D,?/;
    wKd = /state=%7B/;
    _.xKd = function() {};
    _.xKd.prototype.resolve = function(a, b) {
      var c = [],
        d = [],
        e;
      for (e in b)
        if (b.hasOwnProperty(e)) {
          var f = b[e];
          1 == f || 2 == f ? c.push(e) : 3 == f && d.push(e)
        } wKd.test(a) ? (a = 0 < c.length ? a.replace(sKd, c.join(encodeURI('","'))) : a.replace(uKd, ""), a = 0 < d.length ? a.replace(tKd, d.join(encodeURI('","'))) : a.replace(vKd, "")) : (a = 0 < c.length ? a.replace(sKd, c.join(",")) : a.replace(sKd, ""), a = 0 < d.length ? a.replace(tKd, d.join(",")) : a.replace(tKd, ""));
      return a
    };
    var yKd = function(a, b, c, d, e, f) {
      e = void 0 === e ? null : e;
      f = void 0 === f ? null : f;
      _.I.call(this);
      this.H = a;
      this.ta = new _.xKd;
      this.va = b;
      this.wa = c;
      this.ma = d;
      this.ha = f;
      this.ua = e
    };
    _.z(yKd, _.I);
    _.CKd = function(a, b, c, d, e, f, h, k) {
      k = void 0 === k ? !1 : k;
      f = f || _.zKd(0, c, d, e);
      return 2 == f ? a.wa.includes(c) && (a.va || a.ma && k) ? AKd(a, b, c, e, h) : {
        url: null,
        Tr: a.H.aY(b, h).tb(function(m) {
          m = BKd(a, m.Ax, m.mimeType, e, 2);
          return m.url || m.Tr
        })
      } : BKd(a, b, c, e, f)
    };
    AKd = function(a, b, c, d, e) {
      if (a.ua && !a.ua()) return BKd(a, b, c, d, 1);
      if (a.ma) {
        var f = d.Fd().H.includes("/{ids}/edit?");
        return DKd(a, f, b, c, d, e)
      }
      return EKd(a, b, c, d, e)
    };
    EKd = function(a, b, c, d, e) {
      if (!d.Fd().H.includes("/{ids}/edit?")) return DKd(a, !1, b, c, d, e);
      var f = d.Fd().H.replace("/{ids}/edit?", "/" + b + "/isPairedDocEnabled?"),
        h = new _.Pk,
        k = h.tb(function(m) {
          return DKd(a, m, b, c, d, e).Tr
        });
      FKd(a, f, h, 2);
      return {
        url: null,
        Tr: k
      }
    };
    DKd = function(a, b, c, d, e, f) {
      return b ? (b = BKd(a, c, d, e, 1), {
        url: null,
        Tr: (b.url ? _.Uk(b.url) : b.Tr).tb(function(h) {
          return _.Ti(h, "dls", "true")
        })
      }) : {
        url: null,
        Tr: a.H.aY(c, f).tb(function(h) {
          h = BKd(a, h.Ax, h.mimeType, e, 2);
          return h.url || h.Tr
        })
      }
    };
    FKd = function(a, b, c, d) {
      var e = new _.Jk;
      e.ma = 3E3;
      e.ka = !0;
      e.listen("complete", function(f) {
        if (f.target.Zq()) {
          var h = (f = _.Ok(f.target, ")]}'\n")) ? f.status : !1;
          c.callback(h);
          a.ha && a.ha(h, f)
        } else 0 < d ? FKd(a, b, c, d - 1) : (c.callback(!1), a.ha && a.ha())
      });
      e.send(b)
    };
    BKd = function(a, b, c, d, e) {
      var f = d.Fd().H;
      if (!_.Kc(f)) {
        var h = {};
        h[b] = e;
        if ((f = a.ta.resolve(f, h)) && _.GKd(d, c, e)) return {
          url: f
        }
      }
      return {
        url: null,
        Tr: a.H.i7(b, d, e).ug(function() {
          return _.Wk("Rb")
        })
      }
    };
    _.GKd = function(a, b, c) {
      return 1 == c && _.Ea(b) ? !0 : (a = a.Fd()) && !a.Ja ? !0 : !1
    };
    yKd.prototype.ka = function(a, b) {
      var c = null;
      a = a.Fd().H;
      _.Kc(a) || (c = this.ta.resolve(a, b));
      if (!c) throw Error("df");
      return c
    };
    _.zKd = function(a, b, c, d) {
      d = d.Fd();
      a = _.Of(d.vA, b) || _.Of(d.fF, c);
      c = _.Of(d.iJ, b) || _.Of(d.$U, c);
      return a || c ? 1 : _.Ea(b) ? 3 : 2
    };
    uJd = function() {
      return (0, _.T)("Unable to convert document.")
    };
    qJd = function() {
      return (0, _.T)('File version too old. Please make sure the file is in the latest format. <a target="_blank" href="https://support.google.com/drive/answer/2407404?hl=en">Learn More</a>')
    };
    iJd = function() {
      return (0, _.T)("Corrupted document. Please make sure the file is in the latest format.")
    };
    lJd = function() {
      return (0, _.T)("Password protected files are not supported.")
    };
    kJd = function() {
      return (0, _.T)('File is too large. <a target="_blank" href="https://support.google.com/docs/answer/37603">Learn more</a>')
    };
    mJd = function() {
      return (0, _.T)("File could not be converted: conversion timed out. Please try again later.")
    };
    jJd = function() {
      return (0, _.T)("File content doesn't match expected file format.")
    };
    oJd = function() {
      return (0, _.T)("File has too many shapes, textboxes, or drawings.")
    };
    pJd = function() {
      return (0, _.T)("File has too many images.")
    };
    nJd = function() {
      return (0, _.T)("File has too many charts.")
    };
    rJd = function() {
      return (0, _.T)("Sorry, an error occurred when opening this file. Please try again.")
    };
    sJd = function() {
      return (0, _.T)("Sorry, we were unable to authorize this app for all of the files you attempted to open. Please try again.")
    };
    tJd = function() {
      return (0, _.T)("Sorry, opening multiple files with this app is not supported.")
    };
    _.HKd = function(a, b, c) {
      var d = _.Uca(a, b);
      d && c.then(function(e) {
        d.location.replace(e)
      }, function(e) {
        if ("string" == typeof e) {
          var f = d.document.getElementById("message");
          f && (_.Zn(f, _.vJd(e)), (e = d.document.getElementById("loading")) && _.Om(e, !1))
        }
      });
      return d
    };
    _.R("sytq");
    var IKd = function(a, b) {
      _.K.call(this, "EEY3jf", a);
      this.reason = b
    };
    _.z(IKd, _.K);
    var HV = function(a, b, c, d) {
      _.K.call(this, a, b);
      this.qla = c;
      this.Rya = d
    };
    _.z(HV, _.K);
    var JKd = function() {
        return "undefined" != typeof chrome && !!chrome.runtime && !!chrome.runtime.connect
      },
      KKd = function(a) {
        var b = {
            msg: "driveEnabled"
          },
          c = {
            name: "drive"
          };
        if (!JKd()) return Promise.reject(Error("Ih"));
        try {
          var d = chrome.runtime.connect(a, c);
          if (!d) return Promise.reject(Error("Jh`" + a));
          var e = new Promise(function(f, h) {
            d.onMessage.addListener(function n(m) {
              d.onMessage.removeListener(n);
              d.disconnect();
              chrome.runtime.lastError ? h(Error("Kh`" + JSON.stringify(chrome.runtime.lastError))) : f(m)
            })
          });
          d.postMessage(b);
          return e
        } catch (f) {
          return b = f instanceof Error ? f : Error(JSON.stringify(f)), b.message = "devapps.ChromeExtensionManager could not connect to extensionId " + (a + " (extension not installed?): " + b.message), Promise.reject(b)
        }
      };
    var LKd = function() {
      this.ha = {
        "application/vnd.google-apps.document": "text/html application/vnd.oasis.opendocument.text application/pdf application/rtf text/plain application/vnd.openxmlformats-officedocument.wordprocessingml.document".split(" "),
        "application/vnd.google-apps.drawing": ["application/pdf", "image/jpeg", "image/png", "image/svg+xml"],
        "application/vnd.google-apps.presentation": ["application/pdf", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "text/plain"],
        "application/vnd.google-apps.spreadsheet": ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/pdf", "application/x-vnd.oasis.opendocument.spreadsheet", "text/csv"
        ]
      }
    };
    LKd.prototype.H = function(a) {
      return this.ha[a] || null
    };
    var MKd = function(a) {
      this.ka = a;
      this.ha = new Map
    };
    MKd.prototype.initialize = function() {
      var a = this;
      return this.ka.faa().then(function(b) {
        var c = new Map;
        b.forEach(function(d, e) {
          c.set(e.toLowerCase(), d)
        });
        return a.ha = c
      })
    };
    MKd.prototype.H = function(a) {
      return this.ha.get(a.toLowerCase()) || null
    };
    var NKd, OKd;
    NKd = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel.sheet.macroEnabled.12"];
    OKd = ["application/msword", "application/vnd.ms-excel", "application/vnd.ms-powerpoint"];
    _.PKd = function(a) {
      var b = [];
      (a ? NKd.concat(OKd) : NKd.slice()).forEach(function(c) {
        b.push(c.toLowerCase())
      });
      return b
    };
    var QKd = function() {
      _.M.call(this);
      this.ka = new Map;
      this.ha = new Map;
      this.H = !1
    };
    _.z(QKd, _.M);
    var RKd = function(a, b) {
      a.clear();
      b.forEach(function(c) {
        _.zc(c.Fd().vA).concat(_.zc(c.Fd().iJ)).forEach(function(d) {
          var e = a.ka.get(d);
          e || (e = [], a.ka.set(d, e));
          e.push(c)
        });
        _.zc(c.Fd().fF).concat(_.zc(c.Fd().$U)).forEach(function(d) {
          var e = a.ha.get(d);
          e || (e = [], a.ha.set(d, e));
          e.push(c)
        })
      });
      a.H || (a.H = !0, a.dispatchEvent(new HV("Rayp9d", a, b, [], [])))
    };
    QKd.prototype.clear = function() {
      this.ka.clear();
      this.ha.clear()
    };
    QKd.prototype.mb = function() {
      this.clear();
      _.M.prototype.mb.call(this)
    };
    var SKd = function(a) {
      return a.getId()
    };
    var TKd, YKd, ZKd, aLd, cLd, $Kd, fLd, gLd, dLd, eLd, oLd, pLd, bLd;
    _.IV = function(a, b) {
      b = void 0 === b ? {} : b;
      _.M.call(this);
      var c = b;
      b = void 0 === c.Zoa ? !1 : c.Zoa;
      var d = void 0 === c.bpa ? !1 : c.bpa,
        e = void 0 === c.Z9 ? !1 : c.Z9,
        f = void 0 === c.a$ ? !1 : c.a$,
        h = void 0 === c.b$ ? !1 : c.b$,
        k = void 0 === c.cpa ? !0 : c.cpa,
        m = void 0 === c.Jwa ? null : c.Jwa,
        n = void 0 === c.Rha ? null : c.Rha;
      c = void 0 === c.Pia ? void 0 : c.Pia;
      this.ha = a;
      this.Gd = b;
      this.Nc = d;
      this.Re = f;
      this.mf = h;
      this.Gb = k;
      this.wd = m;
      this.Af = n;
      this.kh = _.PKd(e);
      this.Vc = !1;
      this.ta = [];
      this.wa = !1;
      this.ua = new QKd;
      this.Ta(this.ua);
      this.ma = new QKd;
      this.Ta(this.ma);
      this.Ga =
        0;
      this.Ja = new Set;
      this.Pa = new Map;
      this.Na = new Map;
      this.Db = new Set;
      this.ka = new Map;
      this.$a = new Map;
      this.qc = [];
      this.Bb = [];
      this.ld = [];
      this.rb = null;
      this.Ea = new MKd(a);
      this.Pb = new LKd;
      this.H = c ? new oKd(c, m) : null;
      this.va = null;
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.Za.listen(this.ha, "da", this.Pf);
      this.lc = new _.er;
      this.Ca = !1
    };
    _.z(_.IV, _.M);
    _.IV.prototype.initialize = function() {
      var a = this;
      if (!this.va) {
        this.Ea.initialize();
        this.Gb && TKd(this);
        var b = [_.UKd(this)];
        this.H && b.push(this.H.ha.then(null, function() {
          a.H = null
        }));
        this.va = _.Vk(Promise.all(b)).tb(function() {})
      }
      return this.va
    };
    _.VKd = function(a) {
      if (!a.va) {
        var b = [a.Ea.initialize()];
        a.Gb && b.push(TKd(a));
        a.H && b.push(a.H.ha.then(null, function() {
          a.H = null
        }));
        a.va = Promise.all(b).then(function() {
          return _.UKd(a)
        }).then(function() {}).then(null, function(c) {
          a.va = null;
          throw c;
        })
      }
      return a.va
    };
    TKd = function(a) {
      switch (a.Ga) {
        case 0:
          return a.ha.yZ().tb(function(c) {
            _.WKd(a, c)
          });
        case 1:
          var b = Promise.resolve();
          0 < a.Ja.size && (b = a.ha.zR(Array.from(a.Ja.values())).tb(function(c) {
            _.WKd(a, c)
          }));
          a.Ga = 2;
          return b;
        default:
          return Promise.reject(Error("Lh`" + a.Ga))
      }
    };
    _.IV.prototype.Td = function() {
      return this.wd.get()
    };
    _.XKd = function(a) {
      null == a.rb && (a.rb = new yKd(a.ha, a.mf, a.kh, a.Re, a.wd ? a.Td.bind(a) : null, a.Af), a.Ta(a.rb));
      return a.rb
    };
    _.IV.prototype.Pf = function() {
      var a = this;
      _.UKd(this).then(null, function(b) {
        a.dispatchEvent(new IKd(a, b))
      })
    };
    _.WKd = function(a, b) {
      if (a.ma.H) {
        var c = "V1l3vd";
        var d = a.ma,
          e = _.od(Array.from(d.ka.values()), Array.from(d.ha.values()), b);
        _.$f(e, null, SKd);
        RKd(d, e)
      } else c = "bTQ6eb", RKd(a.ma, b);
      b = new HV(c, a, b, [], []);
      a.wa ? a.dispatchEvent(b) : a.Za.qd(a, "Rayp9d", a.dispatchEvent.bind(a, b))
    };
    _.UKd = function(a, b, c) {
      return a.ha.haa(b, void 0 === c ? 0 : c).tb(function(d) {
        return Promise.race([new Promise(function(e) {
          setTimeout(function() {
            return e()
          }, 100)
        }), YKd(a, d)]).then(function() {
          return d
        }, function() {
          return d
        })
      })
    };
    YKd = function(a, b) {
      var c = _.qfa(b, function(m) {
          return m.getType()
        }),
        d = c.WEB_AND_CHROME_EXTENSION || [],
        e = c.CHROME_EXTENSION_ONLY || [];
      a.ta = _.zc(c.WEB_ONLY || []).concat(_.zc(d));
      var f = [];
      if (a.Gd && 0 < e.length && JKd()) {
        c = _.zc(d).concat(_.zc(e));
        var h = new Set,
          k = new Map;
        c.forEach(function(m) {
          m.uHa.forEach(function(n) {
            h.add(n);
            k.has(n) ? k.get(n).push(m) : k.set(n, [m])
          })
        });
        h.forEach(function(m) {
          var n = KKd(m).then(function(r) {
            ZKd(a, m, k.get(m), r)
          });
          f.push(n)
        })
      }
      $Kd(a);
      return Promise.all(f).then(function() {
        return b
      })
    };
    ZKd = function(a, b, c, d) {
      var e = [],
        f = [];
      d && (d.driveEnabled || d.qo_version) && (d.supportsTeamDrives && aLd(c) && (a.Vc = !0), c.forEach(function(h) {
        h.ma = !0;
        var k = h.Fd(),
          m = _.cj(_.bj(new _.aj(k.H), "chrome-extension"), b);
        k.H = m.toString();
        k.ka && (m = _.cj(_.bj(new _.aj(_.yJd(k)), "chrome-extension"), b), k.va = m.toString(), m = _.cj(_.bj(new _.aj(k.ha), "chrome-extension"), b), k.ha = m.toString());
        h.ua = !1;
        "CHROME_EXTENSION_ONLY" == h.getType() ? (a.ta.push(h), f.push(h)) : e.push(h)
      }), (0 < e.length || 0 < f.length) && $Kd(a, new HV("MHYjYb", a,
        f, [], e)))
    };
    aLd = function(a) {
      return a.some(function(b) {
        return b.getId() in bLd
      })
    };
    _.IV.prototype.sx = function(a) {
      var b = this;
      a = this.ha.sx(a);
      a.tb(function(c) {
        cLd(b, c)
      });
      return a
    };
    _.IV.prototype.Lf = function(a) {
      var b = _.Tf(this.ta, a),
        c = new HV("MHYjYb", this, [], [a], []);
      if (b) $Kd(this, c);
      else throw Error("Nh`" + a.getId());
    };
    cLd = function(a, b) {
      var c = a.ta.findIndex(function(d) {
        return d.getId() == b.getId()
      });
      if (0 < c) a.ta[c] = b, $Kd(a, new HV("MHYjYb", a, [], [], [b]));
      else throw Error("Oh`" + b.getId());
    };
    $Kd = function(a, b) {
      var c = new Map;
      a.ka.forEach(function(e, f) {
        c.set(f, e)
      });
      dLd(a);
      var d = a.ta.filter(function(e) {
        return e.isInstalled() || e.ma
      });
      RKd(a.ua, d);
      eLd(a);
      d = a.wa;
      a.wa = !0;
      a.dispatchEvent(b ? b : fLd(a, d, a.ka, c))
    };
    fLd = function(a, b, c, d) {
      return new HV(b ? "MHYjYb" : "Rayp9d", a, gLd(c, d), gLd(d, c), [])
    };
    gLd = function(a, b) {
      var c = [];
      a.forEach(function(d) {
        var e = b.get(d.getId());
        !d.isInstalled() && !d.ZH() || e && (e.isInstalled() || e.ZH()) || c.push(d)
      });
      return c
    };
    dLd = function(a) {
      a.ka.clear();
      a.Bb = [];
      a.ld = [];
      a.ta.forEach(function(b) {
        a.ka.set(b.getId(), b);
        if (b.isInstalled() || b.ma) b.Fd().ka && a.Bb.push(b), _.hJd(b) && a.ld.push(b.getId())
      })
    };
    eLd = function(a) {
      a.Db.clear();
      a.Pa.clear();
      a.Na.clear();
      a.ta.forEach(function(b) {
        (b.isInstalled() || b.ma) && b.Fd().ta && (a.Db.add(b), b.Fd().vA.forEach(function(c) {
          a.Pa.set(c, b)
        }), b.Fd().fF.forEach(function(c) {
          a.Na.set(c, b)
        }))
      })
    };
    _.nLd = function(a, b) {
      var c = _.hLd(a, b.mimeType, b.bs, b.Jt);
      if (a.Nc) {
        var d = a.Pb.H(b.mimeType);
        d && d.forEach(function(f) {
          f = _.iLd(a, f, b.Jt, !0);
          c = _.zc(c).concat(_.zc(f))
        })
      }(d = a.Ea.H(b.mimeType)) && d.forEach(function(f) {
        f = _.iLd(a, f, b.Jt, !0);
        c = _.zc(c).concat(_.zc(f))
      });
      var e = (d = _.jLd(a, b)) ? d.getId() : "";
      c.sort(function(f, h) {
        return _.kLd(e, f, h)
      });
      if (!b.Jt || a.Vc) c = _.lLd(c);
      _.$f(c, null, _.mLd);
      return c
    };
    _.lLd = function(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c].getId();
        d in bLd && (b[bLd[d]] = !0)
      }
      return a.filter(function(e) {
        return !(e.getId() in b)
      })
    };
    _.iLd = function(a, b, c, d) {
      (a = oLd(a.ua.ka.get(b) || [], c)) && d && (a = a.filter(function(e) {
        return e.Fd().Na || _.Raa(b)
      }));
      return a ? _.zc(a).concat() : []
    };
    oLd = function(a, b) {
      return b ? a.filter(function(c) {
        return c.ha
      }) : a
    };
    _.hLd = function(a, b, c, d) {
      b = _.iLd(a, b, d);
      a = (a = oLd(a.ua.ha.get(c) || [], d)) ? _.zc(a).concat() : [];
      return _.zc(b).concat(_.zc(a))
    };
    _.jLd = function(a, b) {
      var c = b.Jt;
      var d = a.Na.get(b.bs);
      (c = d ? c ? pLd(a, d) : d : null) ? a = c: (c = b.Jt, a = (b = a.Pa.get(b.mimeType)) ? c ? pLd(a, b) : b : null);
      return a
    };
    pLd = function(a, b) {
      return b.ha ? b : b.getId() in bLd && (b = bLd[b.getId()], (a = a.ka.get(b)) && a.ha) ? a : null
    };
    _.IV.prototype.Ua = function(a, b) {
      var c = this;
      if (this.Gb) {
        var d = this.Ua.bind(this, a, b);
        this.ua.H ? this.ma.H ? (d = _.zc(this.ma.ka.get(a.mimeType) || []).concat(_.zc(this.ma.ha.get(a.bs) || [])), _.$f(d, null, _.mLd), d = d.filter(function(e) {
          e = c.ka.get(e.getId());
          return !(e && e.isInstalled())
        }), d.sort(function(e, f) {
          var h = IJd(e.Hz(), a.mimeType) + JJd(e.Hz(), a.bs);
          h = IJd(f.Hz(), a.mimeType) + JJd(f.Hz(), a.bs) - h;
          return 0 != h ? h : f.Hz().wZ() - e.Hz().wZ()
        }), d.forEach(function(e) {
          e.isSuggestable = _.Ea(a.mimeType) || 450 < IJd(e.Hz(), a.mimeType) ||
            450 < JJd(e.Hz(), a.bs)
        }), b(d)) : this.Za.qd(this.ma, "Rayp9d", d) : this.Za.qd(this.ua, "Rayp9d", d)
      } else b([])
    };
    _.IV.prototype.install = function(a) {
      var b = this;
      return this.ha.install(a).then(function() {
        return _.UKd(b, !0, void 0)
      })
    };
    _.IV.prototype.mb = function() {
      this.qc.forEach(function(a) {
        _.Ik(a)
      });
      this.ka.clear();
      this.$a.clear();
      this.Pa.clear();
      this.Na.clear();
      this.Db.clear();
      _.M.prototype.mb.call(this)
    };
    _.mLd = function(a) {
      return a.getId()
    };
    _.qLd = function(a) {
      return a.H ? a.H.ha : _.Wk(new _.HE("getSyncClient: Native Application launching is not enabled"))
    };
    _.rLd = function(a, b, c) {
      return a.H ? c && _.Ea(c) ? _.Uk({
        hU: []
      }) : (c = a.$a.get(b)) ? _.Uk(c) : qKd(a.H, b).tb(function(d) {
        a.$a.set(b, d);
        var e = _.Hk(function() {
          a.$a["delete"](b);
          _.Tf(a.qc, e)
        }, 36E5);
        a.qc.push(e)
      }) : _.Wk(new _.HE("Get Native Apps: Application launching is not enabled"))
    };
    _.sLd = function(a, b, c) {
      return a.H ? rKd(a.H, b, c) : _.Wk(new _.HE("Open with Native: Application launching is not enabled"))
    };
    _.IV.prototype.Be = function() {
      var a = this;
      return _.VKd(this).then(function() {
        return _.qLd(a)
      }).then(function(b) {
        if ("v1" == b.Hx()) throw Error("Ph");
        a.Ca = !0;
        a.lc.H(a.Ca);
        return b
      }).then(null, function(b) {
        a.Ca = !1;
        a.lc.H(a.Ca);
        throw b;
      })
    };
    _.IV.prototype.onChange = function() {
      return this.lc
    };
    _.kLd = function(a, b, c) {
      if (b.getId() != c.getId()) {
        if (b.getId() == a) return -1;
        if (c.getId() == a) return 1
      }
      return _.Lg(b.getName(), c.getName())
    };
    bLd = {
      0xfe66319858: "619683526622",
      133678810058: "1083656409722",
      973666970040: "889782162350"
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sytr");
    _.tLd = ["619683526622", "1083656409722", "889782162350"];
    _.uLd = ["1092636219480", "133678810058", "973666970040"];

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.wLd = function(a) {
      _.h6a("docs-usp");
      if (vLd) {
        var b = _.Wj("A", {
          target: "_blank",
          rel: "noreferrer",
          style: "display: none"
        });
        _.jh(b, a);
        var c = document.createEvent("MouseEvent");
        c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        _.Yj(document.body, b);
        b.dispatchEvent(c);
        _.dk(b);
        b = !0
      } else b = !1;
      b || _.nm(a, {
        target: "_blank",
        noreferrer: !0
      })
    };
    _.R("syts");
    var vLd = !!document.createEvent;
    var xLd = function(a, b) {
      switch (a) {
        case "ANY":
          return !0;
        case "ONE":
          return 1 == b;
        case "AT_LEAST_ONE":
          return 1 <= b;
        default:
          return !1
      }
    };
    _.yLd = function(a) {
      var b = void 0 === a.dB ? void 0 : a.dB,
        c = a.jX,
        d = void 0 === a.actionUrl ? "" : a.actionUrl,
        e = void 0 === a.Jb ? "" : a.Jb,
        f = void 0 === a.HQ ? [] : a.HQ,
        h = void 0 === a.filter ? void 0 : a.filter,
        k = void 0 === a.d0 ? "" : a.d0,
        m = a.label,
        n = void 0 === a.location ? "ACTIONS" : a.location;
      this.callback = void 0 === a.callback ? null : a.callback;
      this.jX = c;
      this.dB = b;
      this.actionUrl = d;
      this.Jb = e;
      this.filter = h;
      this.d0 = k;
      this.label = m;
      this.location = n;
      this.HQ = f
    };
    _.yLd.prototype.ha = function(a) {
      if (!this.filter) return !0;
      var b = this.filter.W8 && this.filter.W8.length,
        c = b ? this.filter.W8 : this.filter.vBa;
      if (!c || 0 == c.length) return !0;
      a = a.map(function(e) {
        return e.toLowerCase()
      });
      var d = c.map(function(e) {
        return e.toLowerCase()
      });
      if (0 == a.length) return !1;
      c = function(e) {
        return -1 != d.indexOf(e)
      };
      return b ? !a.some(c) : a.every(c)
    };
    _.yLd.prototype.H = function(a) {
      return this.filter && this.filter.pO ? xLd(this.filter.pO, a) : !0
    };
    _.zLd = function(a) {
      var b = void 0 === a.KF ? [] : a.KF,
        c = a.location;
      this.filter = void 0 === a.filter ? void 0 : a.filter;
      this.location = c;
      this.KF = b
    };
    _.zLd.prototype.H = function(a) {
      if (!this.filter || !this.filter.mimeTypes) return !0;
      a = a.map(function(c) {
        return c.toLowerCase()
      });
      var b = this.filter.mimeTypes.map(function(c) {
        return c.toLowerCase()
      });
      return a.some(function(c) {
        return -1 != b.indexOf(c)
      })
    };
    _.zLd.prototype.ha = function(a) {
      return this.filter && this.filter.pO ? xLd(this.filter.pO, a) : !0
    };
    _.ALd = function(a) {
      return _.Cc(a.AN()).map(function(b) {
        return {
          itemId: b.getId(),
          mimeType: _.Ly(b),
          title: _.eC(b)
        }
      })
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.BLd = function(a, b, c) {
      var d = c();
      d.tb(function(e) {
        return a.xT(e).tb(function(f) {
          (a.wa = f) ? a.va.gga({
            Exa: a.Ub(),
            tja: b,
            pga: c
          }): a.va.Xya();
          return e
        })
      });
      return d
    };
    _.R("sytt");
    _.JV = function(a, b, c, d) {
      _.tS.call(this, a, b, c, d);
      this.H = a.get(_.Ub);
      this.Mh = {
        tX: [],
        $d: 0,
        xe: 0,
        QN: 0,
        wC: 0,
        sy: 0,
        Sh: 0
      }
    };
    _.z(_.JV, _.tS);
    _.CLd = function(a) {
      for (var b = {
          tX: a,
          $d: 0,
          xe: 0,
          QN: 0,
          wC: 0,
          sy: 0,
          Sh: 0
        }, c = 0; c < a.length; c++) {
        var d = a[c];
        _.Ha(d.Ec()) ? b.Sh++ : _.Ga(d.Ec()) ? (b.xe++, d.Ph() && b.sy++) : (b.$d++, d.Ph() && b.wC++, d.Ct().some(function(e) {
          return 3 == _.p(e, 1)
        }) && b.QN++)
      }
      return b
    };
    _.DLd = function(a, b, c, d) {
      c = a.H.yn(b, c, d);
      c.tb(function(e) {
        this.Mh = _.CLd(_.Cc(e.Xi))
      }.bind(a));
      c.ug(function() {
        this.Mh = {
          tX: [],
          $d: b.length,
          xe: 0,
          QN: 0,
          wC: 0,
          sy: 0,
          Sh: 0
        }
      }.bind(a));
      return c
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sytu");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sytw");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var ELd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(ELd, _.D);
    ELd.prototype.Vf = function() {
      return _.p(this, 2)
    };
    var FLd = [1],
      GLd = function(a) {
        _.E(this, a, 0, -1, FLd, null)
      };
    _.C(GLd, _.D);
    var HLd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(HLd, _.D);
    var ILd = function(a, b) {
        a.vA = b
      },
      JLd = function(a, b) {
        a.iJ = b
      },
      KLd = function(a, b) {
        a.fF = b
      },
      LLd = function(a, b) {
        a.$U = b
      },
      MLd = function(a, b) {
        return _.Lg(a.getName(), b.getName())
      },
      NLd = function(a) {
        return _.Vk(a.ha.then(function(b) {
          return b.kra()
        }))
      },
      OLd = function(a, b, c, d) {
        for (var e = {}, f = 0; f < b.length; f++) {
          var h = b[f];
          _.GKd(d, h.mimeType, c[h.Ax]) || (e[h.Ax] = c[h.Ax])
        }
        return 0 < _.og(e) ? (f = a.H.FX(d, e).ug(function() {
          return _.Wk("Rb")
        }), _.og(e) < b.length && f.tb(a.ka.bind(a, d, c)), {
          url: null,
          Tr: f
        }) : {
          url: a.ka(d, c)
        }
      },
      PLd = function(a,
        b) {
        switch (a.Ga) {
          case 0:
            if (a.ma.H) break;
            a.Ga = 1;
          case 1:
            b.forEach(function(d) {
              a.Ja.add(d)
            });
            break;
          case 2:
            var c = new Set;
            b.forEach(function(d) {
              a.Ja.has(d) || c.add(d)
            });
            if (0 < c.size) return b = a.ha.zR(Array.from(c.values())).then(function(d) {
              _.WKd(a, d)
            }), c.forEach(function(d) {
              a.Ja.add(d)
            }), b
        }
        return Promise.resolve()
      },
      QLd = function(a, b) {
        a = a.ha.X6(b);
        a.tb(function(c) {
          for (var d = [], e = 0; e < c.length; e++) {
            var f = c[e];
            f[0] || d.push(f[1].message)
          }
          if (0 < d.length) throw Error(d.join("\n"));
        });
        return a
      },
      RLd = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
          var d = a[c];
          b[d.mimeType] || (b[d.mimeType] = {});
          b[d.mimeType][d.bs] = !0
        }
        return b
      },
      SLd = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
          var d = a[c];
          b[d.getId()] = d
        }
        return b
      },
      TLd = function(a) {
        return _.lg(a, function(b) {
          b = b.Fd();
          return null != b && b.Pa
        })
      },
      ULd = function(a) {
        var b = null;
        a.forEach(function(c) {
          null == b ? b = c : _.kg(b, function(d, e) {
            c[e] || delete b[e]
          })
        });
        return b || {}
      },
      VLd = function(a, b, c) {
        var d = [];
        (b = b(c)) && b.forEach(function(e) {
          e = _.iLd(a, e, !1, !0);
          d = _.zc(d).concat(_.zc(e))
        });
        return d
      },
      WLd =
      function(a, b) {
        var c = RLd(b),
          d = b.some(function(r) {
            return r.Jt
          }),
          e = [],
          f = null,
          h = !0;
        _.kg(c, function(r, t) {
          var y = {};
          if (a.Nc) {
            var A = VLd(a, a.Pb.H.bind(a.Pb), t);
            y = SLd(A)
          }
          var G = {};
          1 == b.length && (A = VLd(a, a.Ea.H.bind(a.Ea), t), G = SLd(A));
          _.kg(r, function(J, L) {
            J && (J = _.hLd(a, t, L, d), h && ((L = _.jLd(a, {
              Ax: "",
              mimeType: t,
              bs: L,
              Jt: d
            })) ? f ? L != f && (h = !1) : f = L : h = !1), L = SLd(J), _.yg(L, y, G), e.push(L))
          })
        });
        c = {};
        0 < e.length && (1 < b.length && (e[0] = TLd(e[0])), c = ULd(e));
        var k = "";
        if (h && f) {
          var m = f.getId();
          c[m] && (k = m)
        }
        var n = [];
        _.kg(c, function(r) {
          n.push(r)
        });
        n.sort(function(r, t) {
          return _.kLd(k, r, t)
        });
        d || (n = _.lLd(n));
        _.$f(n, null, _.mLd);
        return n
      },
      XLd = function(a, b) {
        var c = a.ka.get(b);
        return c ? _.Uk(c) : a.ha.U6(b).tb(function(d) {
          a.ka.set(b, d)
        })
      },
      YLd = function(a) {
        _.E(this, a, 0, -1, null, null)
      };
    _.C(YLd, _.D);
    _.Kd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.Kd, _.D);
    _.Kd.prototype.Vf = function() {
      return _.p(this, 1)
    };
    _.Kd.prototype.H = function() {
      return _.x(this, 2)
    };
    _.Kd.prototype.ka = function() {
      return _.u(this, _.hl, 3)
    };
    _.Xd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.Xd, _.D);
    _.Xd.prototype.Vf = function() {
      return _.p(this, 1)
    };
    _.Xd.prototype.H = function() {
      return _.u(this, _.hl, 2)
    };
    _.Yd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.Yd, _.D);
    _.Yd.prototype.Vf = function() {
      return _.p(this, 1)
    };
    _.Yd.prototype.H = function() {
      return _.u(this, _.hl, 2)
    };
    _.qe = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.qe, _.D);
    _.qe.prototype.Vf = function() {
      return _.p(this, 1)
    };
    _.qe.prototype.ta = function() {
      return _.x(this, 2)
    };
    _.qe.prototype.H = function() {
      return _.x(this, 3)
    };
    _.qe.prototype.ka = function() {
      return _.u(this, _.hl, 4)
    };
    var ZLd = function(a) {
        var b = document.createEvent("MouseEvent");
        _.Vkb(b, a, !1)
      },
      $Ld = function() {
        return (0, _.T)("<span>Copy saved to My Drive</span>")
      },
      aMd = function(a, b) {
        _.K.call(this, "RDwPpb");
        this.H = b
      };
    _.z(aMd, _.K);
    _.R("apps");
    var bMd = function(a, b) {
      _.zS.call(this, a, b, 86);
      this.ma = a.get(_.zu)
    };
    _.z(bMd, _.zS);
    bMd.prototype.H = function() {
      var a = this.Ub(),
        b = this.ma,
        c = a.app;
      a = a.parent ? a.parent.getId() : null;
      a = _.yJd(c.Fd(), a);
      a: {
        c = c.getId();
        for (var d = _.w(b.ma.H.values()), e = d.next(); !e.done; e = d.next())
          if (e.value == c) {
            c = !0;
            break a
          } c = !1
      }
      c && (a = cMd(b, a));
      return a
    };
    var dMd = function(a, b) {
      return new bMd(a, b)
    };
    var eMd = function(a, b, c) {
      var d = new _.$q(null);
      _.CD.call(this, a, b, d);
      this.ta = a.get(_.va);
      a.Jc(_.zu).tb(this.wa.bind(this, c, d))
    };
    _.z(eMd, _.CD);
    eMd.prototype.Ira = function() {
      this.ta.H(20)
    };
    eMd.prototype.wa = function(a, b, c) {
      c.vI(a).tb(this.va.bind(this, b)).ug(this.Ca.bind(this, a))
    };
    eMd.prototype.va = function(a, b) {
      a.set(b)
    };
    eMd.prototype.Ca = function(a, b) {
      "A network error occurred, and the request could not be completed." == b.message ? this.ta.H(56) : this.ta.H(10, null, "getAppById failure using appId:" + a, b)
    };
    var fMd = function(a, b) {
      _.tS.call(this, a, b, 79, !1);
      this.H = a.get(_.zu);
      this.ma = a.get(_.Qn)
    };
    _.z(fMd, _.tS);
    fMd.prototype.Ad = function() {
      var a = this,
        b = this.Ub();
      return this.H.vI(b.appId).tb(function(c) {
        c = new _.BV(c, "deleteAppData");
        a.ma.Ig(c).Av(b.H);
        return _.zId(c)
      }).tb(function(c) {
        if (c.sx) return a.qn(), a.H.sx(b.appId)
      })
    };
    var gMd = function(a, b) {
      return new fMd(a, b)
    };
    var hMd = function(a, b) {
      _.tS.call(this, a, b, 90, !0);
      this.H = _.v(a.get(_.ab), 2, "")
    };
    _.z(hMd, _.tS);
    var iMd = function(a, b) {
      return new hMd(a, b)
    };
    hMd.prototype.Ad = function() {
      _.wLd(this.H);
      return _.Uk()
    };
    var jMd = function(a) {
        var b = a.zf;
        a = '<div><div>After you download Backup&nbsp;and&nbsp;Sync, you can open your Drive files using applications on your computer.<li>Locate your file in Drive, right-click and select the "Open with" menu</li><li>Choose an application for your file</li><li>Work on your file and save</li><li>Your edited file is saved in your Drive and accessible anywhere</li></div><div class="' + (_.X("a-Rc-Fa-k-Oh-Ma") + '">' + _.NE(_.ss({
          zf: b
        }, a)) + "</div></div>");
        return (0, _.T)(a)
      },
      kMd = function(a) {
        a =
          a.WXa;
        var b = '<div><div class="' + _.X("a-Rc-Fa-k-g7W7Ed") + '">';
        b = b + 'Drive File Stream allows you to open files stored in Drive using desktop applications and automatically save them back to Drive.</div><div class="' + (_.X("a-Rc-Fa-k-g7W7Ed") + '">');
        b = b + "After downloading Drive File Stream, right click a file stored in Drive and select 'Open With' to choose an application from your computer.</div><a class=\"" + (_.X("Oh-Ma-A") + " " + _.X("kc-A") + '" target="_blank" href="' + _.X(_.Es(a)) + '">');
        return (0, _.T)(b +
          "Learn more</a></div>")
      };
    var mMd = function(a) {
      _.Zx.call(this);
      this.H = a.get(_.ab);
      this.ka = a.get(_.Sn);
      this.ha = _.v(this.H, 2, "");
      lMd(this.H) ? (this.setTitle("Work on files stored in Drive using desktop applications"), _.Sc(this, _.Oc(_.Oc(new _.Pc, _.Qc, !1, !0), {
        key: "ok",
        caption: "Download Drive File Stream"
      }, !0, !1))) : (this.setTitle("New ways to work on the files you save in Drive"), _.Sc(this, _.Oc(_.Oc(new _.Pc, _.Qc, !1, !0), {
        key: "ok",
        caption: "Download Backup and Sync"
      }, !0, !1)));
      _.Bj(this, "dialogselect", function(b) {
        "ok" == b.key && (b = a.get(_.Ze),
          b.H(_.Bu(b, a, _.mUa)), _.nm(this.ha))
      }, void 0, this);
      this.Pg(!0)
    };
    _.z(mMd, _.Zx);
    mMd.prototype.Ka = function() {
      _.Zx.prototype.Ka.call(this);
      lMd(this.H) ? _.Zn(this.jc(), kMd, {
        WXa: this.ha
      }) : _.Zn(this.jc(), jMd, {
        zf: "images_videos_docs"
      })
    };
    mMd.prototype.Sa = function() {
      _.Zx.prototype.Sa.call(this);
      this.ka.register(this)
    };
    var lMd = function(a) {
      return !(!_.F(a, 15, !1) || 3 != _.p(a, 14))
    };
    var nMd = function(a, b) {
      _.tS.call(this, a, b, 100, !0);
      this.H = a.get(_.Qn)
    };
    _.z(nMd, _.tS);
    var oMd = function(a, b) {
      return new nMd(a, b)
    };
    nMd.prototype.Ad = function() {
      var a = new mMd(this.Oa());
      this.H.Ig(a);
      a.Va(!0);
      return _.Uk()
    };
    var pMd = new _.S(_.Jw, "pg2A3d", 91138),
      qMd = new _.S(_.Jw, "ZL0rtd", 91139),
      rMd = new _.S(_.Jw, "y1IXHc", 91140),
      sMd = new _.S(_.Jw, "jPLHje", 91141);
    var tMd = function() {
      return (0, _.T)("<span>There were some problems loading your apps</span>")
    };
    var uMd = [3, 8, 6, 5, 2, 7, 4, 1],
      vMd = [2, 3, 5, 6],
      wMd = [3, 5, 6],
      xMd = new Map;
    xMd.set("ea", "lDRfLc");
    xMd.set("fa", "xGYMOd");
    xMd.set("ga", "ge6pde");
    var KV = function(a) {
      _.M.call(this);
      this.Fa = a;
      this.H = a.get(_.yu);
      this.Pa = a.get(_.Xa);
      a.get(_.Na);
      this.Ua = a.get(_.Qa);
      this.lc = a.get(_.$aa);
      this.Gb = a.get(_.bd);
      this.Na = _.ta(a, _.sr);
      this.Db = a.get(_.to);
      this.ma = new _.DD(a);
      this.Bb = _.khb(this.ma, uMd);
      this.Pb = _.khb(this.ma, vMd);
      this.rb = _.khb(this.ma, wMd);
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.ha = [];
      this.ka = [];
      this.Ga = [];
      this.va = [];
      this.Ea = 0;
      this.ta = null
    };
    _.z(KV, _.M);
    _.g = KV.prototype;
    _.g.initialize = function() {
      var a = this;
      if (!this.ta) {
        var b = _.VKd(this.H);
        this.ta = Promise.resolve(b).then(function() {
          yMd(a);
          zMd(a)
        }).then(null, function(c) {
          a.ta = null;
          throw c;
        })
      }
      return this.ta
    };
    _.g.KL = function() {
      var a = new _.Pk;
      this.Ypa(["xGYMOd"], a);
      return a
    };
    _.g.pva = function(a) {
      return _.nLd(this.H, a)
    };
    _.g.W0a = function(a) {
      return WLd(this.H, a)
    };
    _.g.w1 = function(a) {
      var b = [];
      this.H.Ua(a, function(c) {
        b = c
      });
      return b
    };
    var yMd = function(a) {
        if (!_.Pa(a.Ua) && a.Na) {
          var b = a.Na.H;
          _.F(a.lc, 10, !1) ? _.Ghb(a.Gb, function() {
            AMd(a, b)
          }) : AMd(a, b)
        }
      },
      AMd = function(a, b) {
        a.KL().then(function() {
          var c = [];
          _.aD.forEach(function(d, e) {
            (e = a.ma.getId(e)) && c.push(BMd(a, b, d, e))
          });
          return Promise.all(c)
        }).then(null, _.Js(a.Fa, 63))
      },
      BMd = function(a, b, c, d) {
        return a.vI(d).then(function(e) {
          e && e.Fd().ka && a.Db.H(c, new eMd(a.Fa, b, d))
        })
      },
      zMd = function(a) {
        CMd(a);
        a.Za.listen(a.H, "MHYjYb", function(b) {
          CMd(a);
          0 < b.qla.length && a.dispatchEvent(new aMd("Hc", b.qla));
          0 < b.Rya.length && a.dispatchEvent(new aMd("Ic", b.Rya))
        });
        a.Za.qd(a.H, "EEY3jf", function(b) {
          _.cc(a.Fa, _.pa(b.reason), 238)
        })
      };
    _.g = KV.prototype;
    _.g.Ypa = function(a, b) {
      a.includes(this.getState()) ? b.callback(this.ha) : this.Za.qd(this, "MHYjYb", _.df(this.Ypa, a, b))
    };
    _.g.Tda = function(a) {
      return _.jLd(this.H, _.Mkb(a))
    };
    _.g.Y0a = function() {
      var a = this.H;
      return a.H ? NLd(a.H) : _.Wk(new _.HE("isSyncClientRunning: Application launching is not enabled"))
    };
    _.g.V0a = function() {
      var a = this.H;
      a.H ? (a = a.H, a = a.H ? a.H.get() ? _.Wk("User is not offline.") : a.ka : _.Wk("Network status is not available.")) : a = _.Wk(new _.HE("Native Apps Available: Application launching is not enabled"));
      return a
    };
    _.g.X0a = function(a) {
      var b = this,
        c = _.qLd(this.H).then(function(d) {
          var e = a.getId(),
            f = a.Ec();
          "v1" == d.Hx() && (e = _.hd(a), f = _.Xe(a));
          return _.rLd(b.H, e, f)
        });
      return _.Vk(c)
    };
    var DMd = function(a, b, c) {
      var d = _.qLd(a.H).then(function(e) {
        e = "v1" == e.Hx() ? _.hd(b) : b.getId();
        return _.sLd(a.H, e, c.getId())
      });
      return _.Vk(d)
    };
    KV.prototype.ua = function(a) {
      var b = this;
      return EMd(this, 1, a).then(function() {
        return EMd(b, 2, a)
      })
    };
    var EMd = function(a, b, c) {
        a.Ea = b;
        return _.UKd(a.H, !0, b).then(function(d) {
          return void 0 === c ? null : _.F(a.Pa, 15, !1) ? d.find(function(e) {
            return e.getId() == c
          }) : d.find(function(e) {
            return e.H == c
          })
        })
      },
      FMd = function(a, b, c, d, e) {
        if (b.H && _.x(b.H, 2)) return a = a.Fa.get(_.rta).ha(b.itemId), {
          url: null,
          Tr: _.Uk(a.toString())
        };
        var f = b.mimeType;
        return _.CKd(_.XKd(a.H), b.itemId, f, b.bs || "", c, d, e)
      };
    KV.prototype.$a = function(a) {
      var b = window.location.href;
      return b.substring(0, b.indexOf(".com/")) + (".com/open?id=" + a)
    };
    KV.prototype.wa = function(a) {
      return -1 < this.rb.indexOf(a)
    };
    KV.prototype.Ja = function(a, b) {
      if (!this.wa(a.getId())) return "";
      b = _.yJd(a.Fd(), b);
      b = b.replace(/\/create/, "/encrypted/create");
      b = cMd(this, b);
      if (a = this.Fa.get(_.wn).zr()) b = new _.aj(b), _.jj(b, "token", a), b = b.toString();
      return b
    };
    var cMd = function(a, b) {
      a = _.Kl(a.Ua);
      if (!a) return b;
      b = new _.aj(b);
      _.lj(b, "ouid") || _.jj(b, "authuser", a);
      return b.toString()
    };
    _.g = KV.prototype;
    _.g.rva = function(a) {
      var b = this;
      a = QLd(this.H, a);
      a.tb(function() {
        return b.ua()
      });
      return a
    };
    _.g.S$ = function(a) {
      var b = _.ob(this.Pa, _.vna, 9);
      a: {
        var c = a.Ec();
        if (!_.Kc(_.yh(c)))
          for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (_.v(e, 1, "") == c) {
              b = _.ob(e, HLd, 2)[0];
              c = {};
              c.mediaType = _.v(b, 2, "");
              c.url = _.v(b, 1, "").replace("{docid}", a.getId());
              a = c;
              break a
            }
          }
        a = null
      }
      return a
    };
    _.g.vI = function(a) {
      return XLd(this.H, a)
    };
    _.g.qva = function(a, b) {
      var c = this.H;
      (a = c.ka.get(a)) ? (b = c.ha.W6(a.getId(), b), b.tb(c.Lf.bind(c, a)), c = b) : c = _.Wk(Error("Mh`" + a.getId()));
      return c
    };
    _.g.sx = function(a) {
      return this.H.sx(a)
    };
    var GMd = function(a) {
        a = a.ka;
        var b = [],
          c = {};
        a.forEach(function(k) {
          c[k.getId()] = k
        });
        for (var d = {}, e = 0; e < b.length && 3 > _.og(d); e++) {
          var f = b[e];
          f in c && (d[f] = c[f])
        }
        b = 3 - _.og(d);
        e = [];
        for (f = 0; f < a.length && 3 > e.length; f++) {
          var h = a[f];
          h.getId() in d ? e.push(h) : 0 < b && (e.push(h), b--)
        }
        return e
      },
      CMd = function(a) {
        a.ha = HMd(_.zc(a.H.ta).concat());
        a.ka = IMd(a, _.zc(a.H.Bb).concat());
        var b = _.zc(a.H.ta).concat();
        for (var c = {}, d = 0; d < b.length; d++) {
          var e = b[d];
          if (e.isInstalled() && e.getName()) {
            var f = e.Fd();
            f = !f || 0 == f.vA.length && 0 == f.iJ.length ?
              !1 : !0
          } else f = !1;
          if (f) {
            f = e.getName();
            var h = c[f];
            h ? JMd(h, e) : c[f] = e.clone()
          }
        }
        b = HMd(_.Cc(c));
        a.Ga = b;
        a.va = GMd(a);
        a.dispatchEvent("MHYjYb")
      },
      JMd = function(a, b) {
        function c(d, e) {
          _.Xf(d, e);
          _.$f(d);
          return d
        }
        a = a.Fd();
        b = b.Fd();
        a && b && (ILd(a, c(a.vA, b.vA)), JLd(a, c(a.iJ, b.iJ)), KLd(a, c(a.fF, b.fF)), LLd(a, c(a.$U, b.$U)))
      },
      HMd = function(a) {
        a = _.Se(a);
        a.sort(MLd);
        return a
      },
      IMd = function(a, b) {
        var c = new Map;
        b.forEach(function(e) {
          c.set(e.getId(), e)
        });
        var d = [];
        a.Bb.forEach(function(e) {
          var f = c.get(e);
          f && (d.push(f), c["delete"](e))
        });
        a = Array.from(c.values());
        a.sort(MLd);
        return d.concat(a)
      };
    KV.prototype.getState = function() {
      return xMd.get(this.H.ha.V6())
    };
    KV.prototype.Ca = function(a) {
      return -1 < this.Pb.indexOf(a)
    };
    var KMd = function() {};
    KMd.prototype.H = function(a) {
      var b = {};
      b.id = a.getId();
      b.name = a.getName();
      b.type = LMd(a.getType());
      b.primaryMimeTypes = a.Sqa();
      b.secondaryMimeTypes = a.H();
      b.primaryFileExtensions = a.kRa();
      b.secondaryFileExtensions = a.wRa();
      b.installed = a.LQa();
      b.removable = a.nRa();
      b.authorized = a.iQa();
      b.createUrl = a.nKa();
      b.createInFolderTemplate = a.mKa();
      b.openUrlTemplate = a.rKa();
      b.supportsCreate = a.wKa();
      b.supportsImport = a.xKa();
      b.supportsMultiOpen = a.zKa();
      b.supportsOfflineCreate = a.AKa();
      b.objectType = a.qKa();
      b.productId = a.sKa();
      b.productUrl = a.tKa();
      b.hasGsmListing = a.oKa();
      b.shortDescription = a.vKa();
      b.longDescription = a.pKa();
      b.useByDefault = a.CKa();
      b.chromeExtensionIds = a.qQa();
      b.hasAppData = a.FQa();
      b.appDataQuotaBytesUsed = a.lKa();
      b.requiresAuthorizationBeforeOpenWith = a.uKa();
      b.hasDriveWideScope = a.GQa();
      b.driveBranded = a.MQa();
      b.supportsMobileBrowser = a.yKa();
      b.supportsTeamDrives = a.BKa();
      var c = a.eQa();
      _.Pf(c) ? (c = [], c.push({
        category: "app",
        size: 32,
        iconUrl: "//ssl.gstatic.com/docs/doclist/images/generic_app_icon_32.png"
      })) : c = _.nd(c,
        this.ha, this);
      b.icons = c;
      if (a = a.Hz()) c = {}, c.absoluteScore = a.wZ(), c.mimeTypeScores = MMd(a.ka()), c.fileExtensionScores = MMd(a.H()), b.rankingInfo = c;
      return new _.MJd(b)
    };
    var LMd = function(a) {
      switch (a) {
        case 1:
          return "WEB_ONLY";
        case 2:
          return "WEB_AND_CHROME_EXTENSION";
        case 3:
          return "CHROME_EXTENSION_ONLY";
        default:
          return "WEB_ONLY"
      }
    };
    KMd.prototype.ha = function(a) {
      var b = {};
      b.category = NMd(a.bo());
      b.size = OMd(a.Od());
      b.iconUrl = a.getUrl();
      return b
    };
    var NMd = function(a) {
        switch (a) {
          case 1:
            return "app";
          case 2:
            return "doc";
          case 3:
            return "doc_sh";
          default:
            return "doc"
        }
      },
      OMd = function(a) {
        switch (a) {
          case 10:
            return 10;
          case 16:
            return 16;
          case 32:
            return 32;
          case 48:
            return 48;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
            return 256;
          default:
            return 16
        }
      },
      MMd = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = {};
          d.type = a[c].getType();
          d.score = a[c].H();
          b.push(d)
        }
        return b
      };
    var PMd = new _.S(new _.Kn("EmbeddedApps"), "BleXTd", 91109);
    var QMd = new _.O("IRObZ", "apps", [_.Xa, _.zu, _.Ze]);
    var LV = function(a, b, c, d) {
      b = void 0 === b ? null : b;
      c = Error.call(this, void 0 === c ? null : c);
      this.message = c.message;
      "stack" in c && (this.stack = c.stack);
      this.errorCode = a;
      this.id = b;
      this.H = d
    };
    _.z(LV, Error);
    var RMd = function(a, b) {
      return new LV(b.code, a, b.message, b.data)
    };
    var SMd = function(a) {
      this.H = a
    };
    SMd.prototype.validate = function() {
      if (Array.isArray(this.H)) {
        if (Array.isArray(this.H)) {
          if (0 == this.H.length) throw new LV(-32600, null, "Batch requests must have non-zero length");
          for (var a = _.w(this.H), b = a.next(); !b.done; b = a.next())
            if (Array.isArray(b.value)) throw new LV(-32600, null, "Batch requests may not contain other batches");
        }
        return this
      }
      if ("2.0" == !this.H.jsonrpc) throw new LV(-32600, this.H.id, 'Version is either missing or incorrect (must be "2.0")');
      if (null == this.H.method && !TMd(this)) throw new LV(-32600,
        this.H.id, "Message is neither a correct message nor result object.");
      if (null != this.H.method && TMd(this)) throw new LV(-32600, this.H.id, "Message is both a request and result object.");
      if (null != this.H.result && null != this.H.id && UMd(this)) throw new LV(-32600, this.H.id, "Message cannot be both a result and an error response.");
      if (null != this.H.result && null == this.H.id) throw new LV(-32600, null, "Result message has no ID field.");
      if (null != this.H.error && void 0 === this.H.id) throw new LV(-32600, null, "Error message has no ID field.");
      return this
    };
    SMd.prototype.getId = function() {
      return this.H.id
    };
    SMd.prototype.Jz = function() {
      return this.H.result
    };
    var TMd = function(a) {
        return null != a.H.result || null != a.H.error
      },
      UMd = function(a) {
        return null != a.H.error && void 0 !== a.H.id && null != a.H.error.code && null != a.H.error.message
      };
    SMd.prototype.toJSON = function() {
      return this.H
    };
    var VMd = function() {
      var a = this;
      this.ha = new Promise(function(b, c) {
        a.ka = b;
        a.H = c
      })
    };
    VMd.prototype.resolve = function(a) {
      null != a.H.result && null != a.H.id ? this.ka(a.Jz()) : (a = RMd(a.getId(), a.H.error), this.H(a))
    };
    VMd.prototype.reject = function(a) {
      this.H(a)
    };
    var WMd = function(a, b) {
        this.ka = a;
        this.H = new Map;
        this.ha = b
      },
      XMd = function(a, b) {
        var c = new VMd;
        a.H.set(b, c);
        b = c.ha;
        setTimeout(function() {
          var d = new LV(-32002, null, "Server took too long to respond. Timeout threshold " + (a.ha + " milliseconds"));
          c.reject(d)
        }, a.ha);
        return b
      },
      YMd = function(a, b) {
        try {
          if ("string" == typeof b) try {
            b = JSON.parse(b)
          } catch (h) {
            throw new LV(-32700, null, 'Unabled to parse message: Reason: "' + h.message + '" Message: "' + b + '"');
          }
          if (null == b) throw new LV(-32700, null, "No RPC request included in incoming message.");
          if (!Array.isArray(b) && "object" != typeof b) throw new LV(-32700, null, "Message must either be an array or an object.  Type: " + typeof b);
          var c = new SMd(b);
          c.validate();
          var d = c.getId();
          if (!TMd(c)) throw new LV(-32600, d, "Message received on client port that is not a result message.");
          if (null != d && "number" != typeof d) throw new LV(-32600, d, "All request messages from Drive use numbers as ids");
          if (UMd(c) && null === d) throw RMd(d, c.H.error);
          var e = c.H.id,
            f = a.H.get(e);
          if (!f) throw new LV(-32600, e, "Message ID not found on list of pending requests: " +
            e + " from AppId: " + a.ka);
          a.H["delete"](e);
          f.resolve(c)
        } catch (h) {}
      };
    var ZMd = function(a) {
      var b = this;
      this.ha = 0;
      this.ta = new _.$q(!1);
      setInterval(function() {
        b.ha > _.v(a, 6, 50) && b.ta.set(!0);
        b.ha = 0
      }, _.v(a, 7, 1E4))
    };
    ZMd.prototype.LR = function() {
      return this.ta
    };
    var $Md = function(a, b, c) {
      ZMd.call(this, c);
      this.H = b;
      this.ma = new WMd(a, _.v(c, 5, 1E4));
      this.ka = null
    };
    _.z($Md, ZMd);
    $Md.prototype.start = function() {
      var a = this;
      this.H.start();
      this.ka = _.Bj(this.H, "message", function(b) {
        b = b.Ke;
        a.ha++;
        YMd(a.ma, b.data)
      })
    };
    $Md.prototype.HT = function() {
      _.Ej(this.ka);
      this.H.close()
    };
    $Md.prototype.sendRequest = function(a) {
      var b = XMd(this.ma, a.H.id);
      a = JSON.stringify(a);
      this.H.postMessage(a);
      return b
    };
    $Md.prototype.dV = function(a) {
      a = JSON.stringify(a);
      this.H.postMessage(a)
    };
    var aNd = function(a, b) {
      this.ha = new MessageChannel;
      this.H = new $Md(a, this.ha.port1, b)
    };
    _.g = aNd.prototype;
    _.g.LR = function() {
      return this.H.LR()
    };
    _.g.start = function() {
      this.H.start()
    };
    _.g.HT = function() {
      this.H.HT()
    };
    _.g.sendRequest = function(a) {
      return this.H.sendRequest(a)
    };
    _.g.dV = function(a) {
      this.H.dV(a)
    };
    var bNd = function(a, b, c, d) {
      ZMd.call(this, d);
      this.ua = b;
      this.ka = c;
      this.H = new WMd(a, _.v(d, 5, 1E4));
      this.ma = null
    };
    _.z(bNd, ZMd);
    bNd.prototype.start = function() {
      var a = this;
      this.ma = _.Bj(window, "message", function(b) {
        b = b.Ke;
        b.origin == a.ka && (a.ha++, YMd(a.H, b.data))
      })
    };
    bNd.prototype.HT = function() {
      _.Ej(this.ma)
    };
    bNd.prototype.sendRequest = function(a) {
      var b = XMd(this.H, a.H.id);
      cNd(this, a);
      return b
    };
    bNd.prototype.dV = function(a) {
      cNd(this, a)
    };
    var cNd = function(a, b, c) {
      b = JSON.stringify(b);
      a.ua.postMessage(b, a.ka, c)
    };
    var dNd = 1,
      eNd = function() {
        this.H = {
          jsonrpc: "2.0"
        }
      };
    eNd.prototype.clear = function() {
      this.H = {
        jsonrpc: "2.0"
      };
      return this
    };
    eNd.prototype.Fc = function(a) {
      this.H.id = a;
      return this
    };
    var MV = function(a) {
        var b = new eNd;
        b.H.method = a;
        return b
      },
      NV = function(a, b) {
        a.H.params = b;
        return a
      };
    eNd.prototype.Rd = function(a, b, c) {
      this.H.error = {
        code: a,
        message: b,
        data: c
      };
      return this
    };
    var fNd = function(a) {
        a.H.id = dNd++;
        return a
      },
      OV = function(a) {
        a.H.error && void 0 === a.H.id && (a.H.id = null);
        a = new SMd(a.H);
        a.validate();
        return a
      };
    var gNd = function(a) {
      this.H = a
    };
    gNd.prototype.send = function(a) {
      a.dV(OV(NV(MV("ResponseError"), {
        error: {
          code: this.H.errorCode,
          message: this.H.message,
          data: this.H.H
        }
      })));
      return Promise.resolve()
    };
    var PV = function(a) {
      this.H = a
    };
    _.g = PV.prototype;
    _.g.send = function(a) {
      var b = this,
        c = this.HK();
      return null != c.H.method && void 0 === c.H.id ? (a.dV(c), Promise.resolve()) : this.sendRequest(a, c).then(function(d) {
        b.PO(c, d);
        b.my(c, d);
        return d
      }).then(null, function(d) {
        var e = d instanceof LV ? d : new LV(-32603, c.getId(), d.message);
        (new gNd(e)).send(a);
        if (-32002 == e.errorCode) b.H.timeout();
        else b.onError(c, d);
        throw d;
      })
    };
    _.g.sendRequest = function(a, b) {
      return a.sendRequest(b)
    };
    _.g.PO = function() {};
    _.g.my = function() {};
    _.g.onError = function() {};
    _.g.HK = function() {
      return OV(fNd(NV(MV("GetStatus"), {})))
    };
    var hNd = (new Map).set("ACTIONS", "ACTIONS").set("DOWNLOADS", "DOWNLOADS").set("UPLOADS", "UPLOADS"),
      iNd = (new Map).set("DOWNLOADS", "DOWNLOADS").set("UPLOADS", "UPLOADS"),
      jNd = (new Map).set("ANY", "ANY").set("ONE", "ONE").set("AT_LEAST_ONE", "AT_LEAST_ONE"),
      kNd = (new Map).set("FOLDER", _.nc).set("MY_DRIVE", _.oc).set("PHOTOS", _.fHa).set("RECENT", _.qc).set("SEARCH", _.sc).set("SHARED_WITH_ME", _.tc).set("STARRED", _.wc).set("TEAM_DRIVE_FOLDER", _.uc).set("TRASH", _.xc);
    var QV = {
        name: "of type string",
        fD: function(a) {
          return "string" === typeof a
        }
      },
      lNd = {
        name: "of type array",
        fD: Array.isArray
      },
      mNd = {
        name: "of type object",
        fD: _.zf
      },
      nNd = {
        name: 'one of the following "' + Array.from(hNd.keys()).join(", ") + '"',
        fD: function(a) {
          return "string" === typeof a && hNd.has(a)
        }
      },
      oNd = {
        name: 'one of the following "' + Array.from(iNd.keys()).join(", ") + '"',
        fD: function(a) {
          return "string" === typeof a && iNd.has(a)
        }
      },
      pNd = {
        name: 'one of the following "' + Array.from(jNd.keys()).join(", ") + '"',
        fD: function(a) {
          return "string" ===
            typeof a && jNd.has(a)
        }
      },
      qNd = {
        name: "of type array of strings",
        fD: function(a) {
          return Array.isArray(a) && a.every(function(b) {
            return "string" === typeof b
          })
        }
      },
      rNd = {
        name: 'a subset of the following: "' + Array.from(kNd.keys()).join(", ") + '"',
        fD: function(a) {
          return Array.isArray(a) && a.every(function(b) {
            return kNd.has(b)
          })
        }
      },
      RV = function(a, b, c) {
        return {
          name: a,
          type: b,
          required: c
        }
      },
      SV = function(a, b) {
        this.DN = b;
        _.zf(a) || sNd(b, "Expected an object and got: " + JSON.stringify(a));
        this.ha = a
      };
    SV.prototype.kq = function() {
      return this.DN
    };
    var sNd = function(a, b) {
        throw new LV(-32602, a, b);
      },
      tNd = function(a, b) {
        b.required && !_.Dfa(a.ha, b.name) && sNd(a.DN, 'Required property "' + b.name + '" is missing from a portion of the object.');
        var c = a.ha[b.name];
        c && !b.type.fD(c) && (b = 'Value of the "' + b.name + '" property should be ' + b.type.name + (b.required ? "." : ", if specified.") + " Instead is: " + JSON.stringify(c) + ".", sNd(a.DN, b));
        return c
      };
    SV.prototype.H = function(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
      var d = this;
      b.forEach(function(e) {
        return tNd(d, e)
      })
    };
    var uNd = [RV("actionId", QV, !0), RV("actionComplete", {
        name: "of type boolean",
        fD: function(a) {
          return "boolean" === typeof a
        }
      }, !0), RV("statusMessage", QV, !0)],
      TV = function(a, b) {
        this.H = b;
        this.ma = a.get(_.Jb)
      };
    _.z(TV, PV);
    TV.prototype.PO = function(a, b) {
      a = new SV(b, a.getId());
      a.H.apply(a, _.zc(uNd))
    };
    TV.prototype.my = function(a, b) {
      PV.prototype.my.call(this, a, b);
      a = b.actionComplete;
      b.statusMessage && this.ma.H(new _.qS(b.statusMessage, "d", a ? 1 : 2, null))
    };
    var vNd = function(a, b, c, d) {
      TV.call(this, a, b);
      this.ha = c;
      this.ka = d
    };
    _.z(vNd, TV);
    vNd.prototype.HK = function() {
      return OV(fNd(NV(MV("ActionTriggered"), {
        actionId: this.ha.jX,
        selections: _.ALd(this.ka)
      })))
    };
    vNd.prototype.my = function(a, b) {
      TV.prototype.my.call(this, a, b);
      if (!b.actionComplete) {
        var c = this.H;
        a = a.getId();
        (new wNd(c.Fa, c, b.actionId, a)).send(c.H)
      }
    };
    var wNd = function(a, b, c, d) {
      TV.call(this, a, b);
      this.ha = c;
      this.ka = d
    };
    _.z(wNd, TV);
    wNd.prototype.PO = function(a, b) {
      TV.prototype.PO.call(this, a, b);
      if (b.actionId != this.ha) throw new LV(-32602, a.getId(), 'Expected a response for actionId "' + this.ha + '" but response referenced actionId "' + b.actionId + '"');
    };
    wNd.prototype.HK = function() {
      return OV(fNd(NV(MV("GetActionUpdate"), {
        actionId: this.ha,
        requestId: this.ka
      })))
    };
    wNd.prototype.my = function(a, b) {
      TV.prototype.my.call(this, a, b);
      b.actionComplete || (a = this.H, (new wNd(a.Fa, a, this.ha, this.ka)).send(a.H))
    };
    var xNd = function(a, b, c) {
        var d = b.params;
        b = {};
        d.actionClickId && (b.dB = _.Wj("div", {
          id: a + "-" + d.actionClickId,
          style: "display: none;"
        }));
        b.jX = d.actionId;
        b.actionUrl = d.actionUrl;
        b.Jb = d.ariaLabel;
        b.callback = c;
        b.d0 = d.iconDriveFileId;
        b.label = d.label;
        if (a = d.location) b.location = hNd.get(a);
        if (a = d.views) b.HQ = a.map(function(e) {
          return kNd.get(e)
        });
        if (a = d.filter) {
          d = {};
          if (c = a.supportedMimeTypes) d.vBa = c;
          if (c = a.disabledMimeTypes) d.W8 = c;
          if (a = a.selectionMode) d.pO = jNd.get(a);
          b.filter = d
        }
        return new _.yLd(b)
      },
      yNd = function(a,
        b) {
        b = b.params;
        a = {};
        var c = b.location;
        c && (a.location = iNd.get(c));
        if (c = b.views) a.KF = c.map(function(e) {
          return kNd.get(e)
        });
        if (c = b.filter) {
          b = {};
          var d = c.mimeTypes;
          d && (b.mimeTypes = d);
          if (c = c.selectionMode) b.pO = jNd.get(c);
          a.filter = b
        }
        return new _.zLd(a)
      };
    var zNd = [RV("actionId", QV, !0), RV("actionClickId", QV, !1), RV("actionUrl", QV, !1), RV("ariaLabel", QV, !1), RV("iconDriveFileId", QV, !1), RV("label", QV, !0), RV("location", nNd, !1), RV("views", rNd, !1)],
      ANd = [RV("selectionMode", pNd, !1), RV("supportedMimeTypes", qNd, !1), RV("disabledMimeTypes", qNd, !1)],
      BNd = [RV("location", oNd, !1), RV("views", rNd, !1)],
      CNd = [RV("selectionMode", pNd, !1), RV("supportedMimeTypes", qNd, !1)],
      DNd = function(a, b) {
        this.H = a;
        this.Fa = b
      };
    _.z(DNd, PV);
    DNd.prototype.PO = function(a, b) {
      tNd(new SV(b, a.getId()), RV("customizations", lNd, !0)).forEach(function(c) {
        var d = new SV(c, a.getId()),
          e = tNd(d, RV("customizationType", QV, !0));
        c = tNd(d, RV("params", mNd, !0));
        switch (e) {
          case "AddMenuItem":
            d = new SV(c, d.kq());
            d.H.apply(d, _.zc(zNd));
            c.filter && (e = new SV(c.filter, d.kq()), e.H.apply(e, _.zc(ANd)));
            c.actionClickId && c.actionUrl && sNd(d.DN, 'At most one of "actionClickId" and "actionUrl" can be defined, but not both.');
            break;
          case "DisableDefaultMenuItems":
            d = new SV(c, d.kq());
            d.H.apply(d, _.zc(BNd));
            c.filter && ("DOWNLOADS" != c.location && sNd(d.DN, "Filters on DisableDefaultMenuItem requests can only be applied to DOWNLOADS"), c = new SV(c.filter, d.kq()), c.H.apply(c, _.zc(CNd)));
            break;
          default:
            sNd(d.DN, 'Unknown customizationType: "' + e + '"')
        }
      })
    };
    DNd.prototype.my = function(a, b) {
      var c = this;
      PV.prototype.my.call(this, a, b);
      var d = function(h, k) {
        var m = c.H;
        (new vNd(m.Fa, m, h, k)).send(m.H)
      };
      a = b.customizations;
      var e = a.filter(function(h) {
          return "AddMenuItem" == h.customizationType
        }).map(function(h) {
          return xNd(c.H.Vf(), h, d)
        }),
        f = a.filter(function(h) {
          return "DisableDefaultMenuItems" == h.customizationType
        }).map(function(h) {
          return yNd(c.H.Vf(), h)
        });
      this.Fa.Jc(_.wy).tb(function(h) {
        e.forEach(function(k) {
          var m = c.H;
          k.dB && window.document.body.appendChild(k.dB);
          m.ta.push(k);
          h.nX(k)
        });
        f.forEach(function(k) {
          c.H.ua.push(k);
          h.T8(k)
        })
      })
    };
    DNd.prototype.HK = function() {
      return OV(fNd(NV(MV("GetCustomizations"), {})))
    };
    var ENd = function(a, b) {
      this.H = a;
      this.ha = b
    };
    _.z(ENd, PV);
    ENd.prototype.HK = function() {
      return OV(NV(MV("ShutdownApplication"), {
        reason: this.ha
      }))
    };
    var FNd = function(a, b, c) {
      this.H = a;
      this.ka = a.Vf();
      this.ta = c;
      this.ha = b.get(_.Qa);
      this.ma = b.get(_.Jb)
    };
    _.z(FNd, PV);
    FNd.prototype.sendRequest = function(a, b) {
      var c = [this.ta],
        d = XMd(a.H, b.H.id);
      cNd(a, b, c);
      return d
    };
    FNd.prototype.PO = function(a, b) {
      b = b.statusMessage;
      if (null != b && "string" !== typeof b) throw new LV(-32001, a.getId(), "Result status message is not of type string", {});
    };
    FNd.prototype.my = function(a, b) {
      PV.prototype.my.call(this, a, b);
      b.statusMessage && this.ma.H(new _.qS(b.statusMessage, "d", 2, null))
    };
    FNd.prototype.HK = function() {
      return OV(fNd(NV(MV("StartApplication"), {
        applicationId: this.ka,
        locale: _.Ll(this.ha),
        userEmail: _.v(this.ha, 4, ""),
        userDriveId: _.v(this.ha, 5, "")
      })))
    };
    var GNd = function(a) {
      var b = a.appId;
      return (0, _.T)('<iframe sandbox="allow-scripts allow-same-origin" src="' + _.X(_.bGa(a.wFa)) + '" id="' + _.X(b) + '" style="display:none;height:0;width:0;outline:none"></iframe>')
    };
    var HNd = new _.qy("An application timed out trying to communicate with Google Drive. Stopping: {APPLICATION}."),
      INd = new _.qy("An application sent us too many messages. Stopping: {APPLICATION}."),
      UV = function(a, b, c) {
        _.I.call(this);
        var d = this;
        this.wa = c;
        this.Fa = a;
        this.Ca = a.get(_.Jb);
        this.jd = b.Vf();
        this.Ea = _.p(b, 3);
        _.x(b, 4);
        this.Lb = new _.$q("YhcIJd");
        this.va = JNd(this.Ea);
        this.Ga = b;
        this.ma = this.ka = null;
        _.rj(this, function() {
          _.Ej(d.ma)
        });
        this.H = new aNd(this.jd, b);
        this.H.LR().observe(function(f) {
            f && KNd(d)
          },
          this);
        var e = this.H.LR();
        e.observe(function(f) {
          f && KNd(d)
        }, this);
        _.rj(this, function() {
          e.ti(d)
        });
        this.ha = null;
        _.rj(this, function() {
          d.stop("WINDOW_CLOSED")
        });
        this.ta = [];
        this.ua = []
      };
    _.z(UV, _.I);
    UV.prototype.Vf = function() {
      return this.jd
    };
    var KNd = function(a) {
      if ("LmegLb" != a.Lb.get()) {
        var b = new _.qS(INd.format({
          APPLICATION: a.wa
        }), "d", 2, null);
        a.Ca.H(b);
        a.stop("POST_MESSAGE_RATE_LIMIT_EXCEEDED")
      }
    };
    UV.prototype.start = function() {
      this.va ? (this.Lb.set("Az6kQd"), LNd(this)) : this.Lb.set("rGxhhf")
    };
    UV.prototype.stop = function(a) {
      var b = this;
      "LmegLb" != this.Lb.get() && ("WpOnb" != this.Lb.get() && "Am173b" != this.Lb.get() || (new ENd(this, a)).send(this.H), this.H.HT(), MNd(this), this.Fa.isDisposed() || this.Fa.Jc(_.wy).tb(function(c) {
        b.ua.forEach(function(d) {
          return c.s$a(d)
        });
        b.ta.forEach(function(d) {
          c.r$a(d);
          d.dB && window.document.body.removeChild(d.dB)
        })
      }), this.ka && "WINDOW_CLOSED" != a && _.Hk(function() {
        window.document.body.removeChild(b.ka)
      }, 0), this.Lb.set("LmegLb"))
    };
    UV.prototype.timeout = function() {
      if ("LmegLb" != this.Lb.get()) {
        var a = new _.qS(HNd.format({
          APPLICATION: this.wa
        }), "d", 2, null);
        this.Ca.H(a);
        this.stop("TIMEOUT")
      }
    };
    UV.prototype.getState = function() {
      return this.Lb
    };
    var LNd = function(a) {
        var b = _.Yc(GNd, {
          appId: a.jd,
          wFa: _.ip(a.Ea)
        });
        a.ka = b;
        a.ma = _.Uc(a.ka, "load", function() {
          a.ma = null;
          a.H.start();
          NNd(a)
        });
        window.document.body.appendChild(b)
      },
      NNd = function(a) {
        a.ha = new bNd(a.jd, a.ka && a.ka.contentWindow, a.va, a.Ga);
        var b = a.ha.LR();
        b.observe(function(c) {
          c && KNd(a)
        }, a);
        a.ha.start();
        _.rj(a, function() {
          b.ti(a)
        });
        (new FNd(a, a.Fa, a.H.ha.port2)).send(a.ha).then(function() {
          MNd(a);
          ONd(a)
        })["catch"](function() {
          a.stop("INTERNAL_ERROR")
        })
      },
      MNd = function(a) {
        a.ha && (a.ha.HT(), a.ha = null);
        _.Ej(a.ma);
        a.ma = null
      },
      ONd = function(a) {
        a.Lb.set("Am173b");
        (new DNd(a, a.Fa)).send(a.H).then(function() {
          a.Lb.set("WpOnb")
        })["catch"](function() {
          a.stop("STARTUP_CUSTOMIZATION_FAILED")
        })
      },
      JNd = function(a) {
        a = _.nj(a);
        if (!a.ha || !a.H) return "";
        _.ej(a, "");
        _.fj(a, "", void 0);
        _.gj(a, "");
        return a.toString()
      };
    var QNd = function(a) {
      _.I.call(this);
      var b = this;
      this.Fa = a;
      this.ha = a.get(_.zu);
      this.H = new Map;
      _.rj(this, function() {
        for (var c = _.w(b.H.values()), d = c.next(); !d.done; d = c.next()) d = d.value, d.getState().ti(b), d.dispose()
      });
      this.ma = _.u(a.get(_.Xa), GLd, 12) || new GLd;
      this.ka = a.get(_.Ze);
      this.ta = _.Bj(this.ha, "MHYjYb", function() {
        PNd(b)
      });
      _.rj(this, function() {
        return _.Ej(b.ta)
      });
      "ge6pde" != this.ha.getState() && PNd(this)
    };
    _.z(QNd, _.I);
    var PNd = function(a) {
        var b = RNd(a);
        _.ra("installedEmbeddedApps");
        _.sa("installedEmbeddedApps", function() {
          return b.map(function(c) {
            return null != _.p(c, 2) ? c.Vf() : "[UNKNOWN APP ID]"
          }).join()
        });
        SNd(a, b);
        TNd(a, b);
        UNd(a)
      },
      SNd = function(a, b) {
        if (b.length) {
          a.ka.H(_.Bu(a.ka, a.Fa, PMd));
          b = _.w(b);
          for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.H.get(c.Vf()),
              e = d ? d.getState().get() : "YhcIJd";
            if (!d) VNd(a, c);
            else if ("LmegLb" == e || "rGxhhf" == e) WNd(a, d), VNd(a, c)
          }
        }
      },
      TNd = function(a, b) {
        var c = Array.from(a.H.values()).filter(function(e) {
          return !b.find(function(f) {
            return f.Vf() ==
              e.Vf()
          })
        });
        c = _.w(c);
        for (var d = c.next(); !d.done; d = c.next()) WNd(a, d.value)
      },
      VNd = function(a, b) {
        var c = b.Vf();
        if (b = XNd(a, b)) a.H.set(c, b), b.getState().observe(function() {
          return UNd(a)
        }, a, !0), b.start()
      },
      XNd = function(a, b) {
        switch (_.p(b, 1)) {
          case 1:
            var c = a.ha.ha.find(function(d) {
              return d.getId() == b.Vf()
            });
            c = c ? c.getName() : "Unknown Application";
            return new UV(a.Fa, b, c)
        }
        return null
      },
      WNd = function(a, b) {
        b.stop("APP_REMOVED");
        a.H["delete"](b.Vf());
        b.getState().ti(a);
        b.dispose()
      },
      RNd = function(a) {
        var b = _.ob(a.ma, ELd,
            1),
          c = a.ha.ha;
        return b.filter(function(d) {
          return c.find(function(e) {
            return e.getId() == d.Vf()
          })
        })
      },
      UNd = function(a) {
        a.Fa.Jc(_.wy).tb(function(b) {
          var c = Array.from(a.H.values()),
            d = c.every(function(e) {
              return YNd(e)
            });
          b.Cbb(d);
          c = c.every(function(e) {
            return "WpOnb" == e.getState().get()
          });
          b.c1a(c)
        })
      },
      YNd = function(a) {
        switch (a.getState().get()) {
          case "WpOnb":
            return !0;
          case "rGxhhf":
            return !0;
          case "LmegLb":
            return !0;
          default:
            return !1
        }
      };
    var ZNd = function(a) {
      KV.call(this, a)
    };
    _.z(ZNd, KV);
    ZNd.prototype.w1 = function(a) {
      var b = _.Saa(a.mimeType);
      return b ? (a = KV.prototype.w1.call(this, a), _.If(a, function(c) {
        return c.getId() == b || _.hJd(c)
      })) : []
    };
    ZNd.prototype.Tda = function(a) {
      return a.ma ? null : this.w1(_.Mkb(a))[0] || null
    };
    ZNd.prototype.wa = function() {
      return !1
    };
    ZNd.prototype.Ja = function() {
      return ""
    };
    var $Nd = function(a) {
      _.M.call(this);
      this.H = a;
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.Za.listen(this.H, "da", this.dispatchEvent)
    };
    _.z($Nd, _.M);
    _.g = $Nd.prototype;
    _.g.haa = function() {
      return _.Uk([])
    };
    _.g.yZ = function() {
      return this.H.yZ()
    };
    _.g.zR = function(a, b) {
      return this.H.zR(a, b)
    };
    _.g.V6 = function() {
      return "fa"
    };
    _.g.faa = function() {
      return Promise.resolve(new Map)
    };
    _.g.U6 = function() {
      return VV()
    };
    _.g.W6 = function() {
      return VV()
    };
    _.g.sx = function() {
      return VV()
    };
    _.g.X6 = function(a) {
      return new _.ln(_.nd(a, VV))
    };
    _.g.i7 = function() {
      return VV()
    };
    _.g.FX = function() {
      return VV()
    };
    _.g.install = function() {
      return VV()
    };
    _.g.aY = function() {
      return VV()
    };
    var VV = function() {
      return _.Wk(Error("Qh"))
    };
    var aOd = function(a) {
      _.I.call(this);
      this.ma = a.get(_.bd);
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.H = this.ka = null;
      _.rj(this, this.OBa, this);
      this.ha = []
    };
    _.z(aOd, _.I);
    _.g = aOd.prototype;
    _.g.initialize = function(a) {
      this.ka = a;
      this.sva();
      this.Za.listen(this.ma, ["r"], this.sva)
    };
    _.g.sva = function() {
      this.OBa();
      var a = _.OB(this.ma.Vd(), _.cr);
      null != a && (this.H = a.kg().getData(), this.H.observe(this.nTa, null, this, !0))
    };
    _.g.nTa = function(a) {
      (a = a.getItem().Ec()) && _.Ea(a) && (_.Pf(this.ha) && _.Hk(this.b9a, 0, this), this.ha.push(a))
    };
    _.g.b9a = function() {
      PLd(this.ka, this.ha);
      this.ha = []
    };
    _.g.OBa = function() {
      this.H && (this.H.Zu(this), this.H = null)
    };
    var bOd = function(a) {
      _.M.call(this);
      this.Lc = a.get(_.vo);
      a.get(_.Ua);
      a.get(_.Xa);
      this.ma = a.get(_.cb);
      this.H = new KMd;
      this.ta = new _.xKd;
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.ka = "ga";
      this.ha = null
    };
    _.z(bOd, _.M);
    _.g = bOd.prototype;
    _.g.initialize = function() {
      this.ha || (this.ha = Promise.resolve(), this.Za.listen(this.Lc, "Kb", this.Z0a));
      return this.ha
    };
    _.g.Z0a = function(a) {
      2 == a.dataType && this.dispatchEvent(new _.K("da"))
    };
    _.g.haa = function(a, b) {
      var c = 1;
      b && (2 == b ? c = 4 : 1 == b && (c = 2));
      b = new _.fe;
      _.l(b, 1, c);
      c = new _.hl;
      _.il(c, 700);
      _.jl(c, !0);
      _.hOa(b, c);
      return this.Lc.eL(b, a).tb(this.geb.bind(this))
    };
    _.g.faa = function() {
      var a = new _.xe,
        b = new _.hl;
      _.il(b, 700);
      _.jl(b, !0);
      _.H(a, 1, b);
      return this.Lc.uM(a).then(function(c) {
        var d = _.ob(c.tk().getMetadata(), _.yOa, 4);
        c = new Map;
        d = _.w(d);
        for (var e = d.next(); !e.done; e = d.next()) {
          var f = e.value;
          e = _.p(f, 1);
          f = _.p(f, 2);
          c.set(e, f)
        }
        return c
      })
    };
    _.g.yZ = function() {
      if (_.$k(this.ma)) return _.Uk([]);
      var a = new _.fe;
      _.l(a, 1, 3);
      var b = new _.hl;
      _.il(b, 700);
      _.jl(b, !0);
      _.hOa(a, b);
      return this.Lc.eL(a).tb(this.nja.bind(this))
    };
    _.g.zR = function(a, b) {
      a = a ? a.slice() : [];
      var c = b ? b.slice() : [];
      b = new _.fe;
      _.l(b, 1, 3);
      _.l(b, 4, a || []);
      _.l(b, 3, c || []);
      a = new _.hl;
      _.il(a, 700);
      _.hOa(b, a);
      return this.Lc.eL(b).tb(this.nja.bind(this))
    };
    _.g.U6 = function(a) {
      var b = this,
        c = new _.Pk,
        d = new _.Xd;
      _.l(d, 1, a);
      a = new _.hl;
      _.il(a, 701);
      _.H(d, 2, a);
      this.Lc.A9(d).then(function(e) {
        c.callback(b.H.H(e.H()))
      }, c.Hd.bind(c));
      return c
    };
    _.g.W6 = function(a, b) {
      var c = new _.Kd;
      _.l(c, 1, a);
      _.l(c, 2, b);
      a = new _.hl;
      _.il(a, 706);
      _.H(c, 3, a);
      return this.Lc.I8(c).ug(function(d) {
        throw _.zb(d);
      }).tb(function() {})
    };
    _.g.sx = function(a) {
      var b = this,
        c = new _.qe;
      _.l(c, 1, a);
      _.l(c, 3, !0);
      a = new _.hl;
      _.il(a, 702);
      _.H(c, 4, a);
      return this.Lc.I4(c).ug(function(d) {
        throw _.zb(d);
      }).tb(function(d) {
        d = d.H();
        return b.H.H(d)
      })
    };
    _.g.i7 = function(a, b, c) {
      var d = {};
      d[a] = c;
      return this.FX(b, d)
    };
    _.g.FX = function(a, b) {
      var c = this,
        d = new _.Pk,
        e = [];
      _.kg(b, function(h, k) {
        h = new _.Ed;
        _.COa(h, a.getId());
        _.l(h, 2, k);
        k = new _.hl;
        _.il(k, 703);
        _.H(h, 4, k);
        k = c.Lc.xd(h);
        e.push(k)
      });
      var f = _.mn(e);
      f.tb(function(h) {
        a: {
          var k = null;
          if (h) {
            for (var m = 0; m < h.length; m++)
              if (1 != h[m].Kb()) {
                d.Hd("Authorize response reported a result other than SUCCESS.");
                k = void 0;
                break a
              } h = a.Fd().H;
            _.Kc(h) || (k = c.ta.resolve(h, b))
          }
          k ? d.callback(k) : d.Hd("No open-with url could be determined.");k = void 0
        }
        return k
      });
      f.ug(d.Hd, d);
      return d
    };
    _.g.aY = function(a, b) {
      var c = new _.Gd;
      c.Fc(a);
      _.l(c, 4, !0);
      b && (a = b.map(function(d) {
        return d.id
      }), _.l(c, 3, a || []));
      a = new _.hl;
      _.il(a, 901);
      _.H(c, 5, a);
      return this.Lc.xd(c).tb(function(d) {
        d = d.getItem();
        return {
          Ax: d.getId(),
          mimeType: d.Ec()
        }
      })
    };
    _.g.install = function(a) {
      var b = new _.Yd;
      _.l(b, 1, a);
      a = new _.hl;
      _.il(a, 704);
      _.H(b, 2, a);
      return this.Lc.Yba(b).tb(function() {})
    };
    _.g.X6 = function(a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = new _.qe;
        _.l(e, 1, d.appId);
        _.l(e, 2, d.sW);
        d = new _.hl;
        _.il(d, 705);
        _.H(e, 4, d);
        b.push(this.Lc.I4(e))
      }
      return new _.ln(b)
    };
    _.g.geb = function(a) {
      var b = a.Kb();
      this.ka = 1 == b ? "fa" : 6 == b ? "ea" : "ga";
      var c = this.nja(a);
      a = a.ka();
      b = {};
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        b[e.getId()] = e
      }
      c = [];
      for (d = 0; d < a.length; d++) {
        e = a[d];
        var f = b[e];
        f && (c.push(f), delete b[e])
      }
      _.df(_.Zf, c, void 0, 0).apply(null, _.Cc(b));
      return c
    };
    _.g.nja = function(a) {
      return a.H().map(this.H.H.bind(this.H))
    };
    _.g.V6 = function() {
      return this.ka
    };
    var cOd = function(a, b) {
        var c = new bOd(a);
        c.initialize().then(null, _.Js(a, 244));
        var d = _.Pa(a.get(_.Qa));
        c = d ? new $Nd(c) : c;
        var e = a.get(_.Ze);
        b = new _.IV(c, {
          dyb: !0,
          bpa: !0,
          Z9: !0,
          a$: !1,
          b$: !0,
          cpa: b,
          Jwa: a.get(_.Pe).zd(),
          Rha: function(f, h) {
            e.Md(a, f ? sMd : 0 == f ? h ? rMd : pMd : qMd)
          },
          Pia: a.get(_.ab)
        });
        d && (PLd(b, []).then(null, _.Js(a, 243)), d = new aOd(a), b.Ta(d), d.initialize(b));
        return b
      },
      dOd = function(a) {
        var b = _.Pa(a.get(_.Qa)) ? new ZNd(a) : new KV(a);
        b.initialize().then(null, function(c) {
          c = _.Mb(_.Nb(_.DSa(new _.Pb(a), new _.lw(tMd, {})).Rd(_.pa(c)), 23), 3);
          a.get(_.Jb).H(_.Lb(c))
        });
        return b
      };
    var WV = new _.Kn("DriveOpen"),
      eOd = new _.S(WV, "ezQJge", 91130),
      fOd = new _.S(WV, "sjtAZ", 91131),
      gOd = new _.S(WV, "bSByUe", 91132),
      hOd = new _.S(WV, "WClwwb", 91125);
    new _.S(WV, "r2ccJd", 91128);
    var iOd = new _.S(WV, "g5qfPc", 91117),
      jOd = new _.S(WV, "PZUoTc", 91118),
      kOd = new _.S(WV, "ITsTEb", 91121),
      lOd = new _.S(WV, "ci55d", 91122);
    var mOd = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        this.ta = b;
        this.H = c;
        this.ua = d;
        this.ma = a.get(_.Ub);
        this.ha = a.get(_.zu);
        this.va = a.get(_.bd);
        this.ka = !1
      },
      qOd = function(a) {
        a.ka = !1;
        var b = nOd(a);
        if (b.url) return b = _.Ti(b.url, a.ua), oOd(b), {
          Hq: "NJOwj"
        };
        b = b.Tr.tb(function(c) {
          return _.Ti(c, a.ua)
        });
        return pOd(a, b.ek())
      },
      pOd = function(a, b) {
        return b.H ? (b.tb(function(c) {
          return oOd(c)
        }), {
          Hq: "NJOwj"
        }) : {
          Hq: _.HKd(a.H.getName(), a.H.Fx(128) || "", b) ? "y3xUfd" : "ejxng"
        }
      },
      oOd = function(a) {
        var b = document.createEvent && document.createEvent("MouseEvent");
        if (b instanceof MouseEvent) _.Vkb(b, a, !1);
        else {
          var c = _.Uca("", "");
          c && c.location.replace(a);
          _.Xk("Sh`" + c + "`" + b, Error("Rh"))
        }
      },
      nOd = function(a) {
        if (1 == a.ta.length) {
          var b = a.ta[0];
          var c = a.H;
          c = _.zKd(_.XKd(a.ha.H), b.mimeType || "", b.bs || "", c);
          return 2 == c ? rOd(a, b) : FMd(a.ha, b, a.H, c)
        }
        c = a.ha;
        var d = a.ta;
        a = a.H;
        b = [];
        for (var e = 0; e < d.length; e++) b.push(_.Mkb(d[e]));
        a: {
          c = _.XKd(c.H);d = {};
          for (e = 0; e < b.length; e++) {
            var f = b[e],
              h = _.zKd(0, f.mimeType, f.bs, a);
            if (2 == h) {
              a = 1 == b.length ? _.CKd(c, f.Ax, f.mimeType, f.bs, a, h) : {
                url: null,
                Tr: _.Wk("Sb")
              };
              break a
            }
            d[f.Ax] = h
          }
          a = OLd(c, b, d, a)
        }
        return a
      },
      rOd = function(a, b) {
        return {
          url: null,
          Tr: a.ma.yn(b.ha, "open_with_permission_check", [59, 76]).tb(function(c) {
            c = sOd(a, b, c);
            return c.url ? c.url : c.Tr
          })
        }
      },
      sOd = function(a, b, c) {
        var d = c.Xi;
        c = a.va.Vd();
        var e = !1,
          f = "";
        if (c && c.Hg() == _.nc && (c = c.Oa().get(_.LB).we(), e = (f = c[c.length - 1].getId()) && tOd(d, f), !e)) return a.ka = !0, FMd(a.ha, b, a.H, 2, [{
          id: a.ma.ih().getId()
        }]);
        if (b.ha.every(function(h) {
            return tOd(d, h)
          })) return FMd(a.ha, b, a.H, 2);
        if (e) return FMd(a.ha, b, a.H, 2, [{
          id: f
        }]);
        a.ka = !0;
        return FMd(a.ha, b, a.H, 2, [{
          id: a.ma.ih().getId()
        }])
      },
      tOd = function(a, b) {
        a = a[b];
        return !(!a || !_.Zp(a.getCapabilities()))
      };
    var uOd = function(a) {
        this.Fa = a;
        this.ta = a.get(_.Na);
        this.ma = a.get(_.Pe);
        this.ua = a.get(_.bd);
        this.ka = a.get(_.Ub);
        this.H = a.get(_.va);
        this.ha = !1
      },
      zOd = function(a, b, c) {
        var d = b.H,
          e = a.ma.zd().get();
        if (!e && !d.every(function(h) {
            return h.ta || !1
          })) return a.H.H(16, c), {
          Hq: null,
          XJ: _.Wk(new _.Zgb("Cannot open documents while offline - some documents are unavailable."))
        };
        vOd(a, b, c);
        var f = b.app;
        if (f) return wOd(a, f, b, c);
        f = _.ta(a.Fa, _.zu);
        if (!f) return a.H.H(15, c), {
          Hq: null,
          XJ: _.Wk(Error("Th"))
        };
        d = d[0];
        return e ? xOd(a, f,
          d, b, c) : yOd(a, f, d, b, c)
      },
      xOd = function(a, b, c, d, e) {
        var f = b.Tda(c);
        if (f) return AOd(a, c, f, d, e);
        d = c.mimeType || "";
        return 0 == b.ha.length && d.startsWith("application/vnd.google-apps") ? (a = b.$a(c.itemId), ZLd(a), {
          Hq: "NJOwj"
        }) : _.F(a.ta, 116, !1) && -1 != _.PKd(!0).indexOf(d) ? BOd(c, b) : {
          Hq: "d8vLec"
        }
      },
      yOd = function(a, b, c, d, e) {
        a: {
          b = _.nLd(b.H, _.Mkb(c));
          for (var f = 0; f < b.length; f++) {
            var h = b[f];
            if (h.Fd().ma) {
              b = h;
              break a
            }
          }
          b = null
        }
        if (b) return AOd(a, c, b, d, e);a.H.H(18, e);
        return {
          Hq: null,
          XJ: _.Wk(new _.Zgb("Cannot preview documents while offline - some documents are unavailable."))
        }
      },
      AOd = function(a, b, c, d, e) {
        return _.uLd.includes(c.getId()) ? b.item ? COd(b.item) ? {
          Hq: "d8vLec"
        } : wOd(a, c, d, e) : {
          Hq: null,
          XJ: a.ka.Pl(b.itemId, "open_default_app_without_item").tb(function(f) {
            if (!f || COd(f)) return "d8vLec";
            f = wOd(a, c, d, e);
            return f.Hq ? f.Hq : f.XJ
          })
        } : wOd(a, c, d, e)
      },
      COd = function(a) {
        return a.NL().some(function(b) {
          return _.x(b, 1)
        })
      },
      vOd = function(a, b, c) {
        c = c.H;
        var d = b.ka;
        if (d && d.ka) _.LHa(c, d.ka);
        else {
          d = new _.kt;
          var e = _.ta(a.Fa, _.pBa);
          e ? (a = a.ua.Vd(), a = e.Jsa(a.getId()) ? e.get(a.getId()) : null) : a = null;
          a && a.ta() &&
            (a = a.ta(), _.l(d, 1, a));
          a = new _.lt;
          b = b.H[0];
          _.l(a, 1, b.itemId);
          b = _.GAd(b.mimeType);
          _.l(a, 4, b);
          b = new _.PAd;
          _.H(b, 6, a);
          _.H(d, 4, b);
          _.LHa(c, d)
        }
      },
      BOd = function(a, b) {
        var c = b.pva(_.Mkb(a)).filter(function(d) {
          return -1 != _.tLd.indexOf(d.getId())
        });
        if (0 == c.length) return {
          Hq: "d8vLec"
        };
        c = c[0];
        if (!c.Fd().ta) return {
          Hq: "d8vLec"
        };
        a = FMd(b, a, c, 1);
        if (a.url) return ZLd(a.url), {
          Hq: "NJOwj"
        };
        a = a.Tr.ek();
        return a.H ? (a.tb(function(d) {
          _.zE(d)
        }), {
          Hq: "NJOwj"
        }) : {
          Hq: _.HKd(c.getName(), c.Fx(128) || "", a) ? "y3xUfd" : "ejxng"
        }
      },
      wOd = function(a,
        b, c, d) {
        DOd(b, c, d);
        var e = new mOd(a.Fa, c.H, b, c.ha ? ["disco", c.ha] : void 0);
        b = qOd(e);
        b.XJ && b.XJ.tb(function() {
          a.ha = e.ka
        });
        return b
      },
      DOd = function(a, b, c) {
        c && (c = c.H, _.IHa(c, a), a = b.ka) && ((b = a.rv) && _.Lkb(_.Kkb(_.Jkb(c, b.Xsa), b.Z_), b.Ssa), a.ha && _.HHa(c, a.ha), a.H && (a = a.H)) && (c = _.qt(c), _.H(c, 23, a))
      };
    var EOd = function(a) {
      this.Fa = a;
      this.ha = a.get(_.Qa);
      this.ka = a.get(_.bd);
      this.H = a.get(_.Ub)
    };
    EOd.prototype.navigate = function(a, b) {
      var c = this.ka.Vd().Bn(),
        d = {
          view: _.nc
        };
      if (c.view == _.nc || c.view == _.oc) {
        var e = c.path || [];
        d.path = 0 < e.length && e[e.length - 1] == a ? _.Se(e) : e.concat(a);
        d.sort = c.sort;
        d.layout = c.layout;
        _.Tb(this.ha) && a == this.H.ih().getId() && (d.view = _.oc, d.path = [])
      } else _.Tb(this.ha) && a == this.H.ih().getId() ? (d.view = _.oc, d.path = []) : d.path = [a];
      d.vy = b;
      _.$e(this.Fa, d, _.oGa);
      return this.ka.navigate(d)
    };
    var FOd = !1,
      GOd = function(a, b) {
        _.JV.call(this, a, b, 146, !0);
        a.get(_.Qa);
        this.Ca = a.get(_.Ze);
        this.ua = new EOd(a);
        this.ma = new uOd(a)
      };
    _.z(GOd, _.JV);
    GOd.prototype.Ad = function() {
      var a = this,
        b = this.Ub(),
        c = b.H,
        d = c[0];
      if (!b.app && _.Ga(d.mimeType)) return 1 != c.length ? (_.rS(this, fOd), _.Wk(Error("Uh"))) : _.st(this.ua.navigate(d.itemId, this.ha.H)).tb(function(e) {
        e = e.Jz();
        if (1 == e) {
          if (!FOd && _.q.performance && _.q.performance.timing) {
            FOd = !0;
            e = _.Ye(0, a.Oa(), gOd);
            var f = new YLd,
              h = Date.now() - _.q.performance.timing.navigationStart;
            _.l(f, 1, h);
            e.Bb = f;
            a.Ca.ha(e)
          }
          _.rS(a, eOd)
        } else return _.Wk(Error("Vh`" + e))
      }).ug(function() {
        _.rS(a, fOd)
      });
      d = zOd(this.ma, b, this.ha.H);
      return d.Hq ?
        HOd(this, b.ma, c, d.Hq) : d.XJ.tb(function(e) {
          return HOd(a, b.ma, c, e)
        })
    };
    GOd.prototype.Qi = function() {
      return this.ma.ha ? new _.lw($Ld, {}) : null
    };
    GOd.prototype.Cz = function(a) {
      return "string" == typeof a ? new _.lw(_.vJd(a.toString()), {}) : null
    };
    var HOd = function(a, b, c, d) {
        return "y3xUfd" == d || "NJOwj" == d ? (_.rS(a, iOd), _.Uk()) : "ejxng" == d ? (a.ka.H(_.Lb(_.Mb(_.Nb(_.Ob(new _.Pb(a.Oa()), "The browser prevented a window from being opened."), 290), 3))), _.rS(a, jOd), _.Uk()) : IOd(a, c, b).tb(function() {
          _.rS(a, hOd)
        }).ug(function() {
          _.rS(a, jOd)
        })
      },
      IOd = function(a, b, c) {
        var d = b[0].itemId,
          e = c && c.Lca;
        if (e) return JOd(a, e, d, c);
        e = [];
        var f = [];
        b = _.w(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, h.item ? e.push(h.item) : f.push(h.itemId);
        return 0 == f.length ? JOd(a, new _.QB(e),
          d, c) : a.H.yn(f, "open_preview_without_item").tb(function(k) {
          k = Object.values(k.Xi);
          return JOd(a, new _.QB(k), d, c)
        })
      },
      JOd = function(a, b, c, d) {
        b = new _.Fjb({
          VT: b,
          mta: c,
          pY: d && d.pY
        }, d && d.zU);
        return _.vy(a, b)
      },
      KOd = function(a, b) {
        return new GOd(a, b)
      };
    var LOd = function(a, b) {
      _.tS.call(this, a, b, 91, !0);
      this.H = a.get(_.zu)
    };
    _.z(LOd, _.tS);
    LOd.prototype.Ad = function() {
      var a = this.Ub();
      if (a.rv) {
        var b = a.rv;
        _.Lkb(_.Kkb(_.Jkb(this.ha.H.H, b.Xsa), b.Z_), b.Ssa)
      }
      return MOd(this, a.document, a.H)
    };
    LOd.prototype.Qi = function() {
      return null
    };
    var NOd = function(a, b) {
        return new LOd(a, b)
      },
      MOd = function(a, b, c) {
        return DMd(a.H, b, c).ug(function() {
          _.rS(a, lOd)
        }).tb(function() {
          _.rS(a, kOd)
        })
      };
    var OOd = function(a, b) {
      _.zS.call(this, a, b, 92);
      this.ma = a.get(_.zu)
    };
    _.z(OOd, _.zS);
    OOd.prototype.Ad = function() {
      return this.ma.Ca(this.Ub().app.getId()) ? _.zS.prototype.Ad.call(this) : _.Uk()
    };
    OOd.prototype.H = function() {
      var a = this.Ub();
      var b = this.ma;
      var c = a.app;
      b.Ca(c.getId()) ? (c = _.yJd(c.Fd()), c = c.replace(/\/create.*/, "/?ftv=1"), b = cMd(b, c)) : b = "";
      b = _.Yi(b, "usp", "drive_web_tmpl");
      return _.Yi(b, "folder", a.parent ? a.parent.getId() : null)
    };
    var POd = function(a, b) {
      return new OOd(a, b)
    };
    var QOd = function() {
      _.I.call(this)
    };
    _.z(QOd, _.dn);
    QOd.prototype.initialize = function(a) {
      var b = !_.BMa(a.get(_.Qa));
      a.registerService(_.yu, cOd(a, b));
      a.registerService(_.zu, dOd(a));
      a.registerService(QMd, new QNd(a));
      a.registerService(_.C3a, dMd);
      a.registerService(_.D3a, gMd);
      a.registerService(_.A3a, iMd);
      a.registerService(_.B3a, oMd);
      a.registerService(_.E3a, KOd);
      a.registerService(_.F3a, NOd);
      a.registerService(_.G3a, POd)
    };
    _.hn("apps").Pw(QOd);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("xku9we");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.dM = function(a) {
      var b = _.ya.Ab();
      return _.nNa(b, a, 1 < _.q.devicePixelRatio ? 32 : 16)
    };
    _.R("syox");
    var ldc = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(ldc, _.D);
    _.g = ldc.prototype;
    _.g.Od = function() {
      return _.p(this, 1)
    };
    _.g.setSize = function(a) {
      return _.l(this, 1, a)
    };
    _.g.ig = function(a) {
      return _.l(this, 13, a)
    };
    _.g.Hy = function(a) {
      return _.l(this, 19, a)
    };
    _.g.getToken = function() {
      return _.p(this, 24)
    };
    _.g.setToken = function(a) {
      return _.l(this, 24, a)
    };
    _.g.nJ = function(a) {
      return _.l(this, 46, a)
    };
    var mdc = function() {
      ldc.call(this)
    };
    _.C(mdc, ldc);
    _.eM = function(a) {
      this.H = void 0;
      this.yj = {};
      if (a) {
        var b = _.Lia(a);
        a = _.Ki(a);
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
      }
    };
    _.eM.prototype.set = function(a, b) {
      ndc(this, a, b, !1)
    };
    _.eM.prototype.add = function(a, b) {
      ndc(this, a, b, !0)
    };
    var ndc = function(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
          var f = b.charAt(e);
          a.yj[f] || (a.yj[f] = new _.eM);
          a = a.yj[f]
        }
        if (d && void 0 !== a.H) throw Error("lg`" + b);
        a.H = c
      },
      odc = function(a, b) {
        for (var c = 0; c < b.length; c++)
          if (a = a.yj[b.charAt(c)], !a) return;
        return a
      };
    _.eM.prototype.get = function(a) {
      return (a = odc(this, a)) ? a.H : void 0
    };
    _.eM.prototype.Ff = function() {
      var a = [];
      pdc(this, a);
      return a
    };
    var pdc = function(a, b) {
      void 0 !== a.H && b.push(a.H);
      for (var c in a.yj) pdc(a.yj[c], b)
    };
    _.eM.prototype.Je = function(a) {
      var b = [];
      if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          if (!c.yj[e]) return [];
          c = c.yj[e]
        }
        qdc(c, a, b)
      } else qdc(this, "", b);
      return b
    };
    var qdc = function(a, b, c) {
      void 0 !== a.H && c.push(b);
      for (var d in a.yj) qdc(a.yj[d], b + d, c)
    };
    _.g = _.eM.prototype;
    _.g.ym = function(a) {
      if (this.H === a) return !0;
      for (var b in this.yj)
        if (this.yj[b].ym(a)) return !0;
      return !1
    };
    _.g.clear = function() {
      this.yj = {};
      this.H = void 0
    };
    _.g.remove = function(a) {
      for (var b = this, c = [], d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!b.yj[e]) throw Error("mg`" + a);
        c.push([b, e]);
        b = b.yj[e]
      }
      a = b.H;
      for (delete b.H; 0 < c.length;)
        if (e = c.pop(), b = e[0], e = e[1], b.yj[e].isEmpty()) delete b.yj[e];
        else break;
      return a
    };
    _.g.clone = function() {
      return new _.eM(this)
    };
    _.g.kc = function() {
      return _.Kia(this.Ff())
    };
    _.g.isEmpty = function() {
      return void 0 === this.H && _.rg(this.yj)
    };
    var rdc;
    _.tdc = function() {
      if (!rdc) {
        var a = rdc = new _.eM,
          b;
        for (b in sdc) a.add(b, sdc[b])
      }
    };
    _.tdc.prototype.Hc = null;
    var fM = function(a, b) {
        this.types = a;
        this.H = b
      },
      sdc = {
        a: new fM([3, 0], [function(a, b) {
          _.l(a, 21, b)
        }, function(a, b) {
          _.l(a, 56, b)
        }]),
        al: new fM([3], [function(a, b) {
          _.l(a, 74, b)
        }]),
        b: new fM([3, 0], [function(a, b) {
          _.l(a, 23, b)
        }, function(a, b) {
          _.l(a, 38, b)
        }]),
        ba: new fM([0], [function(a, b) {
          _.l(a, 85, b)
        }]),
        bc: new fM([0], [function(a, b) {
          _.l(a, 87, b)
        }]),
        br: new fM([0], [function(a, b) {
          _.l(a, 86, b)
        }]),
        c: new fM([3, 0], [function(a, b) {
          _.l(a, 2, b)
        }, function(a, b) {
          _.l(a, 39, b)
        }]),
        cc: new fM([3], [function(a, b) {
          _.l(a, 51, b)
        }]),
        ci: new fM([3], [function(a,
          b) {
          _.l(a, 32, b)
        }]),
        cp: new fM([0], [function(a, b) {
          _.l(a, 92, b)
        }]),
        cv: new fM([0], [function(a, b) {
          _.l(a, 94, b)
        }]),
        d: new fM([3], [function(a, b) {
          _.l(a, 3, b)
        }]),
        df: new fM([3], [function(a, b) {
          _.l(a, 80, b)
        }]),
        dv: new fM([3], [function(a, b) {
          _.l(a, 90, b)
        }]),
        e: new fM([0], [function(a, b) {
          _.l(a, 15, b)
        }]),
        f: new fM([4], [function(a, b) {
          _.l(a, 16, b)
        }]),
        fg: new fM([3], [function(a, b) {
          _.l(a, 34, b)
        }]),
        fh: new fM([3], [function(a, b) {
          _.l(a, 30, b)
        }]),
        fm: new fM([3], [function(a, b) {
          _.l(a, 84, b)
        }]),
        fo: new fM([2], [function(a, b) {
          _.l(a, 79, b)
        }]),
        ft: new fM([3],
          [function(a, b) {
            _.l(a, 50, b)
          }]),
        fv: new fM([3], [function(a, b) {
          _.l(a, 31, b)
        }]),
        g: new fM([3], [function(a, b) {
          _.l(a, 14, b)
        }]),
        gd: new fM([3], [function(a, b) {
          _.l(a, 83, b)
        }]),
        h: new fM([3, 0], [function(a, b) {
          _.l(a, 4, b)
        }, function(a, b) {
          a.ig(b)
        }]),
        i: new fM([3], [function(a, b) {
          _.l(a, 22, b)
        }]),
        ic: new fM([0], [function(a, b) {
          _.l(a, 71, b)
        }]),
        id: new fM([3], [function(a, b) {
          _.l(a, 70, b)
        }]),
        il: new fM([3], [function(a, b) {
          _.l(a, 96, b)
        }]),
        ip: new fM([3], [function(a, b) {
          _.l(a, 54, b)
        }]),
        iv: new fM([0], [function(a, b) {
          _.l(a, 75, b)
        }]),
        j: new fM([1],
          [function(a, b) {
            a.H = b
          }]),
        k: new fM([3, 0], [function(a, b) {
          _.l(a, 17, b)
        }, function(a, b) {
          _.l(a, 42, b)
        }]),
        l: new fM([0], [function(a, b) {
          _.l(a, 44, b)
        }]),
        lf: new fM([3], [function(a, b) {
          _.l(a, 65, b)
        }]),
        lo: new fM([3], [function(a, b) {
          _.l(a, 97, b)
        }]),
        m: new fM([0], [function(a, b) {
          _.l(a, 63, b)
        }]),
        md: new fM([3], [function(a, b) {
          _.l(a, 91, b)
        }]),
        mm: new fM([4], [function(a, b) {
          _.l(a, 81, b)
        }]),
        mo: new fM([3], [function(a, b) {
          _.l(a, 73, b)
        }]),
        mv: new fM([3], [function(a, b) {
          _.l(a, 66, b)
        }]),
        n: new fM([3], [function(a, b) {
          _.l(a, 20, b)
        }]),
        nc: new fM([3],
          [function(a, b) {
            _.l(a, 55, b)
          }]),
        nd: new fM([3], [function(a, b) {
          _.l(a, 53, b)
        }]),
        ng: new fM([3], [function(a, b) {
          _.l(a, 95, b)
        }]),
        no: new fM([3], [function(a, b) {
          _.l(a, 37, b)
        }]),
        ns: new fM([3], [function(a, b) {
          _.l(a, 40, b)
        }]),
        nt0: new fM([4], [function(a, b) {
          _.l(a, 36, b)
        }]),
        nu: new fM([3], [function(a, b) {
          a.nJ(b)
        }]),
        nw: new fM([3], [function(a, b) {
          _.l(a, 48, b)
        }]),
        o: new fM([1, 3], [function(a, b) {
          a.ka = b
        }, function(a, b) {
          _.l(a, 27, b)
        }]),
        p: new fM([3, 0], [function(a, b) {
          a.Hy(b)
        }, function(a, b) {
          _.l(a, 43, b)
        }]),
        pa: new fM([3], [function(a, b) {
          _.l(a,
            61, b)
        }]),
        pc: new fM([0], [function(a, b) {
          _.l(a, 88, b)
        }]),
        pd: new fM([3], [function(a, b) {
          _.l(a, 60, b)
        }]),
        pf: new fM([3], [function(a, b) {
          _.l(a, 67, b)
        }]),
        pg: new fM([3], [function(a, b) {
          _.l(a, 72, b)
        }]),
        pi: new fM([2], [function(a, b) {
          _.l(a, 76, b)
        }]),
        pp: new fM([3], [function(a, b) {
          _.l(a, 52, b)
        }]),
        q: new fM([4], [function(a, b) {
          _.l(a, 28, b)
        }]),
        r: new fM([3, 0], [function(a, b) {
          _.l(a, 6, b)
        }, function(a, b) {
          _.l(a, 26, b)
        }]),
        rg: new fM([3], [function(a, b) {
          _.l(a, 59, b)
        }]),
        rh: new fM([3], [function(a, b) {
          _.l(a, 49, b)
        }]),
        rj: new fM([3], [function(a,
          b) {
          _.l(a, 57, b)
        }]),
        ro: new fM([2], [function(a, b) {
          _.l(a, 78, b)
        }]),
        rp: new fM([3], [function(a, b) {
          _.l(a, 58, b)
        }]),
        rw: new fM([3], [function(a, b) {
          _.l(a, 35, b)
        }]),
        rwa: new fM([3], [function(a, b) {
          _.l(a, 64, b)
        }]),
        rwu: new fM([3], [function(a, b) {
          _.l(a, 41, b)
        }]),
        s: new fM([3, 0], [function(a, b) {
          _.l(a, 33, b)
        }, function(a, b) {
          a.setSize(b)
        }]),
        sc: new fM([0], [function(a, b) {
          _.l(a, 89, b)
        }]),
        sg: new fM([3], [function(a, b) {
          _.l(a, 82, b)
        }]),
        sm: new fM([3], [function(a, b) {
          _.l(a, 93, b)
        }]),
        t: new fM([4], [function(a, b) {
          a.setToken(b)
        }]),
        u: new fM([3],
          [function(a, b) {
            _.l(a, 18, b)
          }]),
        ut: new fM([3], [function(a, b) {
          _.l(a, 45, b)
        }]),
        v: new fM([0], [function(a, b) {
          _.l(a, 62, b)
        }]),
        vb: new fM([0], [function(a, b) {
          _.l(a, 68, b)
        }]),
        vl: new fM([0], [function(a, b) {
          _.l(a, 69, b)
        }]),
        vm: new fM([3], [function(a, b) {
          _.l(a, 98, b)
        }]),
        w: new fM([0], [function(a, b) {
          _.l(a, 12, b)
        }]),
        x: new fM([0], [function(a, b) {
          _.l(a, 9, b)
        }]),
        y: new fM([0], [function(a, b) {
          _.l(a, 10, b)
        }]),
        ya: new fM([2], [function(a, b) {
          _.l(a, 77, b)
        }]),
        z: new fM([0], [function(a, b) {
          _.l(a, 11, b)
        }])
      };
    _.tdc.prototype.parse = function(a) {
      var b = new mdc,
        c = new mdc;
      if ("" == a) a = !0;
      else {
        a = a.split("-");
        for (var d = !0, e = 0; e < a.length; e++) {
          var f = a[e];
          if (0 == f.length) d = !1;
          else {
            var h = f,
              k = !1;
            var m = h;
            var n = h.charAt(0);
            n != n.toLowerCase() && (k = !0, m = h.charAt(0).toLowerCase() + h.substring(1));
            var r = rdc;
            for (n = 1; n <= m.length; ++n) {
              var t = r,
                y = m.substring(0, n);
              if (0 == y.length ? t.isEmpty() : !odc(t, y)) break
            }
            m = 1 == n ? null : (m = r.get(m.substring(0, n - 1))) ? {
              fU: h.substring(0, n - 1),
              value: h.substring(n - 1),
              qcb: k,
              attributes: m
            } : null;
            if (m) {
              h = [];
              k = [];
              n = !1;
              for (r = 0; r < m.attributes.types.length; r++) {
                t = m.attributes.types[r];
                var A = m.value;
                y = e;
                if (m.qcb && 1 == t)
                  for (var G = A.length; 12 > G && y < a.length - 1;) A += "-" + a[y + 1], G = A.length, ++y;
                else if (2 == t)
                  for (; y < a.length - 1 && a[y + 1].match(/^[\d\.]/);) A += "-" + a[y + 1], ++y;
                G = m.attributes.H[r];
                A = udc(this, t)(m.fU, A, b, c, G);
                if (null === A) {
                  n = !0;
                  e = y;
                  break
                } else h.push(t), k.push(A)
              }
              if (!n)
                for (m = 0; m < k.length; m++) r = h[m], A = k[m], vdc(this, r)(f, A);
              d = d && n
            } else d = !1
          }
        }
        a = d
      }
      return new wdc(b, c, a)
    };
    var xdc = function(a, b, c, d, e) {
      e(c, b);
      a = a.charAt(0);
      e(d, a == a.toUpperCase())
    };
    _.g = _.tdc.prototype;
    _.g.b8a = function(a, b, c, d, e) {
      if ("" == b) return 0;
      b = _.Ch(b);
      if (isNaN(b)) return 1;
      xdc(a, b, c, d, e);
      return null
    };
    _.g.I_a = function() {};
    _.g.a8a = function(a, b, c, d, e) {
      if ("" == b) return 0;
      b = _.Bh(b);
      if (isNaN(b)) return 1;
      xdc(a, b, c, d, e);
      return null
    };
    _.g.H_a = function() {};
    _.g.$7a = function(a, b, c, d, e) {
      if ("" != b) return 2;
      xdc(a, !0, c, d, e);
      return null
    };
    _.g.G_a = function() {};
    _.g.c8a = function(a, b, c, d, e) {
      if ("" == b) return 0;
      xdc(a, b, c, d, e);
      return null
    };
    _.g.J_a = function() {};
    var udc = function(a, b) {
        switch (b) {
          case 0:
            return (0, _.B)(a.b8a, a);
          case 2:
            return (0, _.B)(a.a8a, a);
          case 3:
            return (0, _.B)(a.$7a, a);
          case 4:
          case 1:
            return (0, _.B)(a.c8a, a);
          default:
            return function() {}
        }
      },
      vdc = function(a, b) {
        switch (b) {
          case 0:
            return (0, _.B)(a.I_a, a);
          case 2:
            return (0, _.B)(a.H_a, a);
          case 3:
            return (0, _.B)(a.G_a, a);
          case 4:
          case 1:
            return (0, _.B)(a.J_a, a);
          default:
            return function() {}
        }
      },
      wdc = function(a, b, c) {
        this.H = a;
        this.ha = b;
        this.ka = c
      };
    wdc.prototype.isValid = function() {
      return this.ka
    };
    var ydc, Bdc;
    _.Adc = function(a) {
      this.ma = null;
      this.ka = [];
      this.dk = null;
      this.Hc = ydc;
      _.zdc(this, a)
    };
    ydc = null;
    Bdc = function(a) {
      null == a.ma && (a.ma = new _.tdc);
      return a.ma
    };
    _.zdc = function(a, b) {
      a.dk = b ? "string" === typeof b ? Bdc(a).parse(b) : b : Bdc(a).parse("")
    };
    _.gM = function(a, b) {
      return a == b ? !1 : !0
    };
    _.g = _.Adc.prototype;
    _.g.AP = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.F(c, 2, !1), _.F(b.ha, 2, !1)) && _.l(c, 2, a);
      return this
    };
    _.g.zP = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.x(c, 51), _.x(b.ha, 51)) && _.l(c, 51, a);
      return this
    };
    _.g.Y6 = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.x(c, 32), _.x(b.ha, 32)) && _.l(c, 32, a);
      return this
    };
    _.g.Z6 = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.p(c, 16), _.p(b.ha, 16)) && _.l(c, 16, a);
      return this
    };
    _.g.ig = function(a) {
      var b = this.dk,
        c = b.H;
      _.gM(a, _.p(c, 13), _.p(b.ha, 13)) && c.ig(a);
      return this
    };
    _.Cdc = function(a, b) {
      b = b || void 0;
      var c = a.dk,
        d = c.H;
      _.gM(b, _.x(d, 17), _.x(c.ha, 17)) && _.l(d, 17, b);
      return a
    };
    _.g = _.Adc.prototype;
    _.g.yP = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.F(c, 20, !1), _.F(b.ha, 20, !1)) && _.l(c, 20, a);
      return this
    };
    _.g.nJ = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.x(c, 46), _.x(b.ha, 46)) && c.nJ(a);
      return this
    };
    _.g.Hy = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.F(c, 19, !1), _.F(b.ha, 19, !1)) && c.Hy(a);
      return this
    };
    _.g.BP = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.x(c, 60), _.x(b.ha, 60)) && _.l(c, 60, a);
      return this
    };
    _.g.b7 = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.F(c, 67, !1), _.F(b.ha, 67, !1)) && _.l(c, 67, a);
      return this
    };
    _.g.a7 = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, _.F(c, 52, !1), _.F(b.ha, 52, !1)) && _.l(c, 52, a);
      return this
    };
    _.g.setSize = function(a) {
      var b = this.dk,
        c = b.H;
      _.gM(a, c.Od(), b.ha.Od()) && c.setSize(a);
      return this
    };
    _.g.setToken = function(a) {
      a = a || void 0;
      var b = this.dk,
        c = b.H;
      _.gM(a, c.getToken(), b.ha.getToken()) && c.setToken(a);
      return this
    };
    _.g.eG = function(a) {
      var b = this.dk,
        c = b.H;
      _.gM(a, _.p(c, 12), _.p(b.ha, 12)) && _.l(c, 12, a);
      return this
    };
    _.g.Zp = function() {
      this.ka.length = 0;
      var a = this.dk,
        b = a.H;
      a = a.ha;
      hM(this, "s", b.Od(), a.Od());
      hM(this, "w", _.p(b, 12), _.p(a, 12));
      iM(this, "c", _.F(b, 2, !1), _.F(a, 2, !1));
      hM(this, "c", _.p(b, 39), _.p(a, 39), 16, 6);
      iM(this, "d", _.F(b, 3, !1), _.F(a, 3, !1));
      hM(this, "h", _.p(b, 13), _.p(a, 13));
      iM(this, "s", _.x(b, 33), _.x(a, 33));
      iM(this, "h", _.F(b, 4, !1), _.F(a, 4, !1));
      iM(this, "p", _.F(b, 19, !1), _.F(a, 19, !1));
      iM(this, "pa", _.x(b, 61), _.x(a, 61));
      iM(this, "pd", _.x(b, 60), _.x(a, 60));
      iM(this, "pp", _.F(b, 52, !1), _.F(a, 52, !1));
      iM(this, "pf", _.F(b,
        67, !1), _.F(a, 67, !1));
      hM(this, "p", _.p(b, 43), _.p(a, 43));
      iM(this, "n", _.F(b, 20, !1), _.F(a, 20, !1));
      hM(this, "r", _.p(b, 26), _.p(a, 26));
      iM(this, "r", _.F(b, 6, !1), _.F(a, 6, !1));
      iM(this, "fh", _.x(b, 30), _.x(a, 30));
      iM(this, "fv", _.x(b, 31), _.x(a, 31));
      iM(this, "cc", _.x(b, 51), _.x(a, 51));
      iM(this, "ci", _.x(b, 32), _.x(a, 32));
      iM(this, "o", _.x(b, 27), _.x(a, 27));
      var c = b.ka;
      c && jM(this, "o", c, !!a.ka);
      (c = b.H) && jM(this, "j", c, !!a.H);
      hM(this, "x", _.p(b, 9), _.p(a, 9));
      hM(this, "y", _.p(b, 10), _.p(a, 10));
      hM(this, "z", _.p(b, 11), _.p(a, 11));
      iM(this,
        "g", _.F(b, 14, !1), _.F(a, 14, !1));
      iM(this, "fg", _.F(b, 34, !1), _.F(a, 34, !1));
      iM(this, "ft", _.x(b, 50), _.x(a, 50));
      hM(this, "e", _.p(b, 15), _.p(a, 15));
      c = _.p(b, 16);
      var d = _.p(a, 16);
      c && jM(this, "f", c, !!d);
      iM(this, "k", _.x(b, 17), _.x(a, 17));
      hM(this, "k", _.p(b, 42), _.p(a, 42));
      iM(this, "u", _.x(b, 18), _.x(a, 18));
      iM(this, "ut", _.x(b, 45), _.x(a, 45));
      iM(this, "i", _.x(b, 22), _.x(a, 22));
      iM(this, "ip", _.x(b, 54), _.x(a, 54));
      iM(this, "a", _.x(b, 21), _.x(a, 21));
      hM(this, "a", _.p(b, 56), _.p(a, 56));
      hM(this, "m", _.p(b, 63), _.p(a, 63));
      hM(this, "vb", _.p(b,
        68), _.p(a, 68));
      hM(this, "vl", _.p(b, 69), _.p(a, 69));
      iM(this, "lf", _.x(b, 65), _.x(a, 65));
      iM(this, "mv", _.x(b, 66), _.x(a, 66));
      iM(this, "id", _.x(b, 70), _.x(a, 70));
      hM(this, "ic", _.p(b, 71), _.p(a, 71));
      iM(this, "b", _.F(b, 23, !1), _.F(a, 23, !1));
      hM(this, "b", _.p(b, 38), _.p(a, 38));
      c = b.getToken();
      d = a.getToken();
      c && jM(this, "t", c, !!d);
      c = _.p(b, 36);
      d = _.p(a, 36);
      c && jM(this, "nt0", c, !!d);
      iM(this, "rw", _.F(b, 35, !1), _.F(a, 35, !1));
      iM(this, "rwu", _.F(b, 41, !1), _.F(a, 41, !1));
      iM(this, "rwa", _.F(b, 64, !1), _.F(a, 64, !1));
      iM(this, "nw", _.F(b, 48,
        !1), _.F(a, 48, !1));
      iM(this, "rh", _.F(b, 49, !1), _.F(a, 49, !1));
      iM(this, "nc", _.x(b, 55), _.x(a, 55));
      iM(this, "nd", _.x(b, 53), _.x(a, 53));
      iM(this, "no", _.F(b, 37, !1), _.F(a, 37, !1));
      c = _.p(b, 28);
      d = _.p(a, 28);
      c && jM(this, "q", c, !!d);
      iM(this, "ns", _.x(b, 40), _.x(a, 40));
      hM(this, "l", _.p(b, 44), _.p(a, 44));
      hM(this, "v", _.p(b, 62), _.p(a, 62));
      iM(this, "nu", _.x(b, 46), _.x(a, 46));
      iM(this, "rj", _.x(b, 57), _.x(a, 57));
      iM(this, "rp", _.x(b, 58), _.x(a, 58));
      iM(this, "rg", _.x(b, 59), _.x(a, 59));
      iM(this, "pg", _.F(b, 72, !1), _.F(a, 72, !1));
      iM(this, "mo",
        _.x(b, 73), _.x(a, 73));
      iM(this, "al", _.x(b, 74), _.x(a, 74));
      hM(this, "iv", _.p(b, 75), _.p(a, 75));
      hM(this, "pi", _.ni(b, 76), _.ni(a, 76));
      hM(this, "ya", _.ni(b, 77), _.ni(a, 77));
      hM(this, "ro", _.ni(b, 78), _.ni(a, 78));
      hM(this, "fo", _.ni(b, 79), _.ni(a, 79));
      iM(this, "df", _.x(b, 80), _.x(a, 80));
      c = _.p(b, 81);
      d = _.p(a, 81);
      c && jM(this, "mm", c, !!d);
      iM(this, "sg", _.x(b, 82), _.x(a, 82));
      iM(this, "gd", _.x(b, 83), _.x(a, 83));
      iM(this, "fm", _.x(b, 84), _.x(a, 84));
      hM(this, "ba", _.p(b, 85), _.p(a, 85));
      hM(this, "br", _.p(b, 86), _.p(a, 86));
      hM(this, "bc", _.p(b,
        87), _.p(a, 87), 16, 6);
      hM(this, "pc", _.p(b, 88), _.p(a, 88), 16, 6);
      hM(this, "sc", _.p(b, 89), _.p(a, 89), 16, 6);
      iM(this, "dv", _.x(b, 90), _.x(a, 90));
      iM(this, "md", _.x(b, 91), _.x(a, 91));
      hM(this, "cp", _.p(b, 92), _.p(a, 92));
      iM(this, "sm", _.x(b, 93), _.x(a, 93));
      hM(this, "cv", _.p(b, 94), _.p(a, 94));
      iM(this, "ng", _.x(b, 95), _.x(a, 95));
      iM(this, "il", _.x(b, 96), _.x(a, 96));
      iM(this, "lo", _.x(b, 97), _.x(a, 97));
      iM(this, "vm", _.x(b, 98), _.x(a, 98));
      return this.ka.join("-")
    };
    var Ddc = function(a, b) {
        if (void 0 == b) return "";
        a = b - a.length;
        return 0 >= a ? "" : (0, _.wh)("0", a)
      },
      hM = function(a, b, c, d, e, f) {
        if (null != c) {
          e = void 0 == e || 10 != e && 16 != e ? 10 : e;
          c = c.toString(e);
          var h = new _.ib;
          h.append(16 == e ? "0x" : "");
          h.append(Ddc(c, f));
          h.append(c);
          jM(a, b, h.toString(), !!d)
        }
      },
      iM = function(a, b, c, d) {
        c && jM(a, b, "", !!d)
      },
      jM = function(a, b, c, d) {
        d && (b = b.charAt(0).toUpperCase() + b.substring(1));
        a.ka.push(b + c)
      };
    _.kM = function(a) {
      _.Adc.call(this, a)
    };
    _.C(_.kM, _.Adc);
    _.g = _.kM.prototype;
    _.g.AP = function(a) {
      a && _.lM(this);
      return _.kM.Qa.AP.call(this, a)
    };
    _.g.ig = function(a) {
      null != a && this.setSize();
      return _.kM.Qa.ig.call(this, a)
    };
    _.g.Z6 = function(a) {
      a && (a = a.replace(";", ":"));
      return _.kM.Qa.Z6.call(this, a)
    };
    _.g.Y6 = function(a) {
      a && _.lM(this);
      return _.kM.Qa.Y6.call(this, a)
    };
    _.g.zP = function(a) {
      a && _.lM(this);
      return _.kM.Qa.zP.call(this, a)
    };
    _.g.setSize = function(a) {
      _.zf(a) && (a = Math.max(a.width, a.height));
      null != a && (this.eG(), this.ig());
      return _.kM.Qa.setSize.call(this, a)
    };
    _.g.Hy = function(a) {
      a && _.lM(this);
      return _.kM.Qa.Hy.call(this, a)
    };
    _.g.a7 = function(a) {
      a && _.lM(this);
      return _.kM.Qa.a7.call(this, a)
    };
    _.g.b7 = function(a) {
      a && _.lM(this);
      return _.kM.Qa.b7.call(this, a)
    };
    _.g.yP = function(a) {
      a && _.lM(this);
      return _.kM.Qa.yP.call(this, a)
    };
    _.g.BP = function(a) {
      a && _.lM(this);
      return _.kM.Qa.BP.call(this, a)
    };
    _.g.eG = function(a) {
      null != a && this.setSize();
      return _.kM.Qa.eG.call(this, a)
    };
    _.Edc = function(a) {
      a = a.dk.H;
      return !!(a.Od() || _.p(a, 12) || _.p(a, 13))
    };
    _.lM = function(a) {
      a.yP();
      a.zP();
      a.AP();
      a.Y6();
      a.BP();
      a.Hy();
      a.a7();
      a.b7()
    };
    _.kM.prototype.Zp = function() {
      var a = this.dk.H;
      _.x(a, 18) || _.x(a, 45) ? a.Od() || this.setSize(0) : _.Edc(this) || (this.setSize(), this.ig(), this.eG(), _.lM(this));
      return _.kM.Qa.Zp.call(this)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var WUd, XUd, YUd;
    _.VUd = function(a, b) {
      b = void 0 === b ? !1 : b;
      if (0 == a.va()) {
        var c = a.Ec();
        if (_.Ga(c)) return "Folders do not take up storage space";
        if (_.Raa(c || "")) return b ? _.bea(a) + " files are free" : _.bea(a) + " files do not take up storage space";
        if (_.Ea(c || "")) return "This file is stored on a third-party server";
        if (1 != a.H()) return b ? "Owned by someone else" : "Only files you own take up storage space"
      }
      return null
    };
    WUd = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\x0B": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      $: "\\x24",
      "&": "\\x26",
      "'": "\\x27",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      "/": "\\/",
      ":": "\\x3a",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "?": "\\x3f",
      "[": "\\x5b",
      "\\": "\\\\",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    XUd = function(a) {
      return WUd[a]
    };
    YUd = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g;
    _.ZUd = function(a) {
      return String(a).replace(YUd, XUd)
    };
    _.R("syvg");
    var $Ud = function(a) {
      var b = void 0 === b ? window : b;
      b = void 0 === b ? window : b;
      return Math.round(a * (b.devicePixelRatio || 1))
    };
    _.aVd = function(a, b) {
      this.ha = a;
      this.H = new _.kM;
      _.Cdc(this.H, !0);
      if (b) {
        a = this.H.dk;
        var c = a.H;
        _.gM(b, _.p(c, 75), _.p(a.ha, 75)) && _.l(c, 75, b)
      }
    };
    _.aVd.prototype.setSize = function(a) {
      this.H.setSize($Ud(a));
      return this
    };
    _.bVd = function(a, b) {
      a.H.eG($Ud(b));
      return a
    };
    _.aVd.prototype.ig = function(a) {
      this.H.ig($Ud(a));
      return this
    };
    _.aVd.prototype.Hy = function(a) {
      this.H.Hy(a);
      return this
    };
    _.aVd.prototype.nJ = function(a) {
      this.H.nJ(a);
      return this
    };
    _.BW = function(a) {
      _.Edc(a.H) || a.setSize(512);
      var b = a.H.Zp();
      return a.ha.replace("{size}", b)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Fdc = function(a, b) {
      b = b || void 0;
      var c = a.dk,
        d = c.H;
      _.gM(b, _.F(d, 35, !1), _.F(c.ha, 35, !1)) && _.l(d, 35, b);
      return a
    };
    _.R("syow");
    var Gdc, Hdc, Idc, Jdc;
    Gdc = /^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z]|-testonly)?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(lh[3-6]\.(googleadsserving\.cn|xn--9kr7l\.com))|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\//i;
    Hdc = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i;
    Idc = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i;
    Jdc = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;
    _.mM = function(a) {
      return Gdc.test(a) || Hdc.test(a) || Idc.test(a) || Jdc.test(a)
    };
    var Kdc = /^[^\/]*\/\//,
      Ldc = function(a) {
        this.ka = a;
        this.ta = "";
        (a = this.ka.match(Kdc)) && a[0] ? (this.ta = a[0], a = this.ta.match(/\w+/) ? this.ka : "http://" + this.ka.substring(this.ta.length)) : a = "http://" + this.ka;
        this.ma = _.nj(a, !0);
        this.ua = !0;
        this.Na = !1
      },
      Mdc = function(a, b) {
        a.ha = a.ha ? a.ha + ("/" + b) : b
      },
      Ndc = function(a) {
        if (void 0 == a.H) {
          a.ha = null;
          a.H = a.ma.we().substring(1).split("/");
          var b = a.H.length;
          2 < b && "u" == a.H[0] && (Mdc(a, a.H[0] + "/" + a.H[1]), a.H.shift(), a.H.shift(), b -= 2);
          if (0 == b || 4 == b || 7 < b) return a.ua = !1, a.H;
          if (2 == b) Mdc(a,
            a.H[0]);
          else if ("image" == a.H[0]) Mdc(a, a.H[0]);
          else if (7 == b || 3 == b) return a.ua = !1, a.H;
          if (3 >= b) {
            a.Na = !0;
            3 == b && (Mdc(a, a.H[1]), a.H.shift(), --b);
            --b;
            var c = a.H[b],
              d = c.indexOf("="); - 1 != d && (a.H[b] = c.substr(0, d), a.H.push(c.substr(d + 1)))
          }
        }
        return a.H
      };
    Ldc.prototype.isValid = function() {
      Ndc(this);
      return this.ua
    };
    var Odc = function(a) {
      Ndc(a);
      return a.Na
    };
    Ldc.prototype.getQuery = function() {
      return this.ma.ka.toString()
    };
    Ldc.prototype.hE = function() {
      Ndc(this);
      void 0 == this.ha && (this.ha = null);
      return this.ha
    };
    var Pdc = function(a) {
        switch (Ndc(a).length) {
          case 7:
            return !0;
          case 6:
            return null == a.hE();
          case 5:
            return !1;
          case 3:
            return !0;
          case 2:
            return null == a.hE();
          case 1:
            return !1;
          default:
            return !1
        }
      },
      nM = function(a, b) {
        if (Odc(a)) a: {
          var c = null != a.hE() ? 1 : 0;
          switch (b) {
            case 6:
              b = c;
              break;
            case 4:
              if (!Pdc(a)) {
                a = null;
                break a
              }
              b = 1 + c;
              break;
            default:
              a = null;
              break a
          }
          a = Ndc(a)[b]
        }
        else a: {
          c = null != a.hE() ? 1 : 0;
          switch (b) {
            case 0:
              b = c;
              break;
            case 1:
              b = 1 + c;
              break;
            case 2:
              b = 2 + c;
              break;
            case 3:
              b = 3 + c;
              break;
            case 4:
              if (!Pdc(a)) {
                a = null;
                break a
              }
              b = 4 + c;
              break;
            case 5:
              b =
                Pdc(a) ? 1 : 0;
              b = 4 + c + b;
              break;
            default:
              a = null;
              break a
          }
          a = Ndc(a)[b]
        }
        return a
      },
      Qdc = function(a) {
        void 0 == a.Ca && (a.Ca = nM(a, 0));
        return a.Ca
      },
      Rdc = function(a) {
        void 0 == a.Pa && (a.Pa = nM(a, 1));
        return a.Pa
      },
      Sdc = function(a) {
        void 0 == a.Ga && (a.Ga = nM(a, 2));
        return a.Ga
      },
      Tdc = function(a) {
        void 0 == a.Ua && (a.Ua = nM(a, 3));
        return a.Ua
      };
    Ldc.prototype.getOptions = function() {
      void 0 == this.Ea && (this.Ea = nM(this, 4));
      return this.Ea
    };
    var Udc = function(a) {
      void 0 == a.wa && (a.wa = nM(a, 5));
      return a.wa
    };
    var Vdc = function() {};
    Vdc.prototype.parse = function(a) {
      return new Wdc(a)
    };
    var Wdc = function(a) {
      Ldc.call(this, a)
    };
    _.C(Wdc, Ldc);
    var Ydc = function(a) {
        this.H = null;
        a instanceof Wdc || (void 0 == Xdc && (Xdc = new Vdc), a = Xdc.parse(a.toString()));
        a = this.H = a;
        if (void 0 == a.va) {
          var b = a.getOptions();
          b || (b = "");
          a.va = (new _.tdc).parse(b)
        }
        _.Adc.call(this, a.va);
        this.ua = this.H.ta;
        a = this.H;
        b = a.ma.ma;
        this.ta = a.ma.H + (b ? ":" + b : "");
        this.ha = this.H.getQuery()
      },
      Xdc;
    _.C(Ydc, _.kM);
    Ydc.prototype.isValid = function() {
      return this.H.isValid()
    };
    Ydc.prototype.Zp = function() {
      if (!this.H.isValid()) return this.H.ka;
      var a = Ydc.Qa.Zp.call(this),
        b = [];
      null != this.H.hE() && b.push(this.H.hE());
      if (Odc(this.H)) {
        var c = this.H;
        void 0 == c.Ja && (c.Ja = nM(c, 6));
        b.push(c.Ja + (a ? "=" + a : ""))
      } else b.push(Qdc(this.H)), b.push(Rdc(this.H)), b.push(Sdc(this.H)), b.push(Tdc(this.H)), a && b.push(a), b.push(Udc(this.H));
      return this.ua + this.ta + "/" + b.join("/") + (this.ha ? "?" + this.ha : "")
    };
    var $dc;
    _.Zdc = new Vdc;
    _.oM = function(a) {
      return new Ydc(a)
    };
    $dc = /\/\/lh[3-6]\./;
    _.aec = function(a) {
      if (!a || !_.mM(String(a))) return String(a || "");
      a = String(a);
      a = a.replace($dc, "//lh3.");
      a = _.Cdc((new Ydc(a)).setSize(64).eG(void 0).ig(void 0).AP(!0), !1);
      var b = void 0;
      var c = a.dk,
        d = c.H;
      _.gM(b, _.x(d, 21), _.x(c.ha, 21)) && _.l(d, 21, b);
      a = a.Hy(!1).yP(!1);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.x(d, 27), _.x(c.ha, 27)) && _.l(d, 27, b);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.F(d, 37, !1), _.F(c.ha, 37, !1)) && _.l(d, 37, b);
      a = _.Fdc(a, !1);
      b = a.dk;
      c = b.H;
      _.gM(void 0, _.p(c, 62), _.p(b.ha, 62)) && _.l(c, 62, void 0);
      a = a.Z6(void 0);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.x(d, 65), _.x(c.ha, 65)) && _.l(d, 65, b);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.x(d, 84), _.x(c.ha, 84)) && _.l(d, 84, b);
      b = a.dk;
      c = b.H;
      _.gM(void 0, _.p(c, 86), _.p(b.ha, 86)) && _.l(c, 86, void 0);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.x(d, 58), _.x(c.ha, 58)) && _.l(d, 58, b);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.x(d, 57), _.x(c.ha, 57)) && _.l(d, 57, b);
      b = void 0;
      c = a.dk;
      d = c.H;
      _.gM(b, _.F(d, 49, !1), _.F(c.ha, 49, !1)) && _.l(d, 49, b);
      return a.BP(!1).Zp()
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.b9d = function(a, b) {
      a.ha = b;
      return a
    };
    _.R("syvr");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvs");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.HUd = function(a) {
      if (!_.Ia(a)) return !1;
      var b = a.Tf();
      if (!b) return a.getId(), !1;
      a = _.Ve(b);
      b = _.Ja(b);
      return 1 == a && null != b && !!b.Jh()
    };
    _.IUd = function(a) {
      null === a.vj && (a.vj = _.XAa(a.Me, a.getItem().iq));
      return a.vj
    };
    _.JUd = function(a) {
      null === a.Yy && (null === a.nK && (a.nK = new _.go([a.Me], a.g_.bind(a))), a.Yy = new _.go([a.nK], a.Ga.bind(a)));
      return a.Yy
    };
    _.vW = function(a, b) {
      return new _.go([b], function() {
        return _.ZB(b.get())
      }.bind(a))
    };
    _.KUd = function(a) {
      null === a.ua && (null === a.Wn && (a.Wn = _.br(a.Me, a.getItem().ka)), a.ua = _.vW(a, a.Wn));
      return a.ua
    };
    _.LUd = function(a) {
      null === a.ta && (null === a.Vn && (a.Vn = _.br(a.Me, a.getItem().ua)), a.ta = _.vW(a, a.Vn));
      return a.ta
    };
    _.MUd = function(a) {
      null === a.va && (null === a.Yo && (a.Yo = _.br(a.Me, a.getItem().ta)), a.va = _.vW(a, a.Yo));
      return a.va
    };
    _.NUd = function(a) {
      a.ma || (null === a.Pf && (a.Pf = _.br(a.Me, a.getItem().wa)), a.ma = _.vW(a, a.Pf));
      return a.ma
    };
    _.OUd = function(a, b) {
      a = a.Ew;
      var c = "This file is in a shared drive owned by " + a;
      b = '<div class="' + _.X("a-s-FXeV7b-Dg") + '" data-tooltip="' + _.X(c) + '">' + _.Hs(_.U(a)) + _.mu({
        variant: "smallInfo",
        color: "rgba(0, 0, 0, .42)",
        hb: !0,
        Nd: "a-s-FXeV7b-Dg-Ya-c"
      }, b) + "</div>";
      return (0, _.T)(b)
    };
    _.R("syvd");
    _.wW = function(a) {
      var b = new _.nC;
      if (a.Dd()) {
        var c = a.getItem();
        _.tC(b, a.Rl());
        a = a.Oh();
        var d = new _.mC;
        _.oC(d, a.Lk);
        d.Id(a.name);
        _.pC(d, a.ws);
        _.sC(b, d);
        _.rC(b, !!c.Ph());
        _.qC(b, _.Ga(c.Ec()) ? _.F9a(c) ? 4 : _.E9a(c) ? 3 : 2 : 1)
      } else _.qC(b, 1);
      return b
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvw");
    _.QX = function(a) {
      var b = this;
      this.ka = _.g$a;
      this.H = 0;
      this.ha = {};
      for (var c = {
          eK: 0
        }; c.eK < this.ka.length; c = {
          eK: c.eK
        }, c.eK++) {
        var d = _.If(a, function(e) {
          return function(f) {
            return f.getType() == b.ka[e.eK]
          }
        }(c));
        this.ha[this.ka[c.eK]] = d;
        this.H += d.length
      }
    };
    _.QX.prototype.ma = function() {
      return (this.ha[0] || []).length
    };
    _.QX.prototype.ta = function() {
      return (this.ha[1] || []).length
    };
    _.QX.prototype.ua = function() {
      return (this.ha[2] || []).length
    };
    _.M6d = function(a) {
      a = a.ha[0] || [];
      return 0 < a.length ? _.Ff(a).getId() : null
    };
    _.N6d = function(a) {
      a = a.ha[1] || [];
      return 0 < a.length ? _.Ff(a).getId() : null
    };
    _.O6d = function(a) {
      a = a.ha[2] || [];
      return 0 < a.length ? _.Ff(a).getId() : null
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvu");
    _.c9d = function(a) {
      return _.vv[3][a] ? !0 : !!_.vv[12][a]
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("synu");
    var P9b;
    P9b = 0;
    _.KK = function() {
      return "c" + P9b++
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syt7");
    _.sAd = function(a) {
      return (0, _.rs)('src="' + _.X(_.Es(_.aec(a.url))) + '"')
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var cVd;
    _.CW = function(a, b) {
      var c = b.Wv();
      return c && a.get(_.Pe).zd().get() ? new cVd(c, _.p(b, 90)) : dVd
    };
    cVd = function(a, b, c) {
      this.ka = a;
      this.H = void 0 === b ? null : b;
      this.ha = (void 0 === c ? 0 : c) ? 0 : 1
    };
    _.eVd = function(a, b, c) {
      return _.BW(_.bVd(_.DW(a), b).ig(c).Hy(!0).nJ(!0))
    };
    cVd.prototype.getType = function() {
      return this.ha
    };
    _.DW = function(a) {
      return new _.aVd(a.ka, a.H ? a.H : void 0)
    };
    _.R("syvh");
    var dVd = new cVd("//ssl.gstatic.com/docs/doclist/images/nopreview_blank.png", void 0, !0);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.qVd = function(a) {
      if (_.fea(a)) var b = "Shared drive";
      else if (_.Ia(a)) {
        var c = a.Tf();
        c ? (b = _.p(c, 3), b = _.Xda(b, !0, _.We(a))) : a.getId()
      } else _.Ga(a.Ec()) ? (b = a.Oh(), b = _.dbb(_.YB(), b), b = _.Zda(!1, b, _.Ia(a), _.Ia(a) && _.We(a))) : b = _.Xda(a.Ec() || "", !1);
      a.Ph() && (b = "Shared " + b);
      return a.getTitle() + " " + b
    };
    _.R("syvi");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvt");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.e9d = function(a) {
      if (a && _.YRa) {
        a = a.querySelectorAll("img[data-drive-load-handling]");
        for (var b = {}, c = 0; c < a.length; b = {
            gK: b.gK,
            Kv: b.Kv
          }, c++) b.Kv = a[c], b.Kv.removeAttribute("data-drive-load-handling"), b.Kv.complete ? b.Kv.naturalHeight && b.Kv.naturalWidth ? _.mca(b.Kv) : _.qca(b.Kv) : (b.gK = [], b.gK.push(_.Bj(b.Kv, "load", function(d) {
          return function() {
            d.gK.forEach(function(e) {
              _.Ej(e)
            });
            _.mca(d.Kv)
          }
        }(b))), b.gK.push(_.Bj(b.Kv, "error", function(d) {
          return function() {
            d.gK.forEach(function(e) {
              _.Ej(e)
            });
            _.qca(d.Kv)
          }
        }(b))))
      }
    };
    _.f9d = function(a) {
      null === a.J5 && (a.J5 = new _.go([_.mbb(a)], a.SB.bind(a)));
      return a.J5
    };
    _.fY = function() {
      _.jD.Ab();
      return _.Kh
    };
    _.R("sywg");
    _.g9d = function(a, b, c, d, e, f, h) {
      _.Zw.call(this);
      this.qe = a;
      _.Wra(this.qe) && _.$w(this, this.qe);
      this.selected = b || new _.$q(!1);
      _.$w(this, this.selected);
      this.Qh = c || new _.$q(!1);
      _.$w(this, this.Qh);
      this.HD = new _.qo(d);
      this.Tv = new _.qo(e);
      this.ha = f;
      this.H = h
    };
    _.z(_.g9d, _.Zw);
    _.h9d = function(a, b) {
      a = (new _.QX(b)).H;
      return 0 < a ? (new _.qy("{NUM_ACTIONITEMS, plural,=1 {1 follow up}other {# follow ups}}")).format({
        NUM_ACTIONITEMS: a
      }) : ""
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syx2");
    _.l9d = function(a) {
      var b = a.wy && (a.wy.kb || a.wy);
      a = "";
      if (_.p(b, 6)) {
        var c = _.ry(new _.qy("{GROUP_ENTRY_COUNT_1,plural,=1{1 group}other{{GROUP_ENTRY_COUNT_2} groups}}"), {
          GROUP_ENTRY_COUNT_1: _.p(b, 6),
          GROUP_ENTRY_COUNT_2: _.U(_.p(b, 6))
        });
        a += c
      }
      a += _.p(b, 6) && _.p(b, 5) ? " \u00b7 " : "";
      _.p(b, 5) && (b = _.ry(new _.qy("{USER_ENTRY_COUNT_1,plural,=1{1 person}other{{USER_ENTRY_COUNT_2} people}}"), {
        USER_ENTRY_COUNT_1: _.p(b, 5),
        USER_ENTRY_COUNT_2: _.U(_.p(b, 5))
      }), a += b);
      return (0, _.T)(a)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syx4");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw8");
    _.A$d = new _.QAa("backup-model");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syx0");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.B$d = function(a) {
      return null == a ? !1 : null != a.Uc()
    };
    _.R("syx3");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syx5");
    _.C$d = function(a) {
      var b = a.Hu();
      null == b && (a = _.lq(a), b = 0 < a.length ? a[0] : null);
      return b
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var D$d, E$d, F$d, G$d, N$d;
    D$d = function(a, b) {
      b = null != b ? b : !0;
      return {
        xz: a.ze(void 0),
        Qe: a.Rl(),
        dg: _.wW(a),
        Gn: _.YRa,
        iconUrl: a.ze(),
        Dd: a.Dd(),
        xs: a.xs(),
        H0: b,
        lk: a.lk(),
        Sm: a.getItem().Wv() || "",
        aI: _.ubb(a),
        Ud: a.Ud()
      }
    };
    E$d = function(a) {
      if (!_.Ia(a)) return !1;
      var b = a.Tf();
      return b ? 2 == _.Ve(b) ? !0 : !1 : (a.getId(), !1)
    };
    F$d = function() {
      return ["ow", "sdp", "fs"]
    };
    G$d = function() {
      return ["fnsi", "sdp", "ow", "fs"]
    };
    _.L$d = function(a, b) {
      var c = a == _.xc && b && b.Y_ ? "td" : H$d[a],
        d = I$d[a];
      if (a == _.uc || a == _.vc) b && b.KOa && d.push("cd"), _.fY() && d.push("sl");
      if (a == _.xc && b && b.Y_) var e = ["tu", "sdp", "fs"];
      else e = J$d[a], a == _.jc && _.fY() && e.push("sl");
      return {
        kj: a,
        hJa: c,
        aza: d,
        yna: e,
        nya: a == _.xc && b && b.Y_ ? ["fnsi", "sdp", "tu", "fs"] : K$d[a]
      }
    };
    _.M$d = function(a) {
      a.dT || (a.dT = _.br(a.Me, a.getItem().jE));
      return a.dT
    };
    N$d = function(a, b) {
      var c = a.imageUrl,
        d = a.Mv,
        e = a.Gn;
      a = a.Ud;
      return (0, _.T)('<div class="' + _.X("l-t-c") + (d ? " " + _.X(d) : "") + '"><img src="' + _.X(_.Fs(c)) + '"' + (e ? " data-drive-load-handling" : "") + ' alt="">' + (a ? _.ws("d", "shortcutSmall", !0)(null, b) : "") + "</div>")
    };
    _.R("syx1");
    _.mY = function(a) {
      _.kF.call(this, a)
    };
    _.z(_.mY, _.kF);
    var P$d = function(a, b, c) {
        b = c || b;
        var d = a.Jb,
          e = a.Qe,
          f = a.dg && (a.dg.kb || a.dg),
          h = a.xz,
          k = a.iconUrl,
          m = a.id,
          n = a.Dd,
          r = a.xs,
          t = a.H0,
          y = a.hn,
          A = a.lk,
          G = a.BU;
        c = a.ccb;
        var J = a.title,
          L = a.Sm,
          N = a.Gn,
          V = a.aI,
          ia = a.Ud;
        a = a.ZYa;
        b = '<div class="' + _.X("l-t-T-j") + (a ? " " + _.X("l-Ab-rRTxde-dn") : "") + '" data-id="' + _.X(m) + '" aria-label="' + _.X(d) + '"><div class="' + _.X("l-A-ia-ef") + '"></div><div class="' + _.X("l-t-T-c-j") + '" data-is-doc-name="true">' + O$d({
            Qe: e,
            dg: f,
            xz: h,
            iconUrl: k,
            Dd: n,
            xs: r,
            H0: t,
            hn: y,
            lk: A,
            Sm: L,
            Gn: N,
            aI: V,
            Ud: ia
          }, b) + '</div><div class="' +
          _.X("l-t-T-V") + '" data-tooltip="';
        a = "";
        e = b + _.X(n && ia ? a + ("Google Drive Folder Shortcut: " + J) : a + (e + (": " + J))) + '"><span class="' + _.X("l-Ab-T-r") + '" data-is-doc-name="true">' + _.Hs(_.U(J)) + "</span>";
        y && G && (e += '<span class="' + _.X("l-Ab-T-re") + '">&bull; ', y = "Files owned by " + _.Hs(_.U(G)), e = e + y + "</span>");
        e += "</div>" + (c ? '<div class="' + _.X("l-t-jjgHhb-ed-yc-j") + '"></div><div class="' + _.X("l-t-Z-j") + '"></div><div class="' + _.X("l-t-fc-a-j") + '"></div><div class="' + _.X("l-t-fc-a-zk-wDYxhc-j") + '"></div><div class="' +
          _.X("l-t-Jq-dn-j") + '"></div><div class="' + _.X("l-t-em-dn-j") + '"></div><div class="' + _.X("l-t-Jk-j") + '"></div><div class="' + _.X("l-t-Nk-tq-j") + '"></div><div class="' + _.X("l-t-Op-cc-j") + '"></div><div class="' + _.X("l-t-Jq-j") + '"></div><div class="' + _.X("l-t-DJPBic-j") + '"></div>' : "") + "</div>";
        return (0, _.T)(e)
      },
      O$d = function(a, b, c) {
        b = c || b;
        var d = a.Sm,
          e = a.aI;
        c = _.T;
        if (a.hn && d) var f = (0, _.T)('<div class="' + _.X("l-t-c") + " " + _.X("l-t-Bb") + " " + _.X("l-t-fc-a-c") + (e ? " " + _.X("l-t-c-hc") : "") + '"><img src="' + _.X(_.Fs(d)) +
          '" alt=""></div>');
        else {
          d = b;
          var h = a.xz,
            k = a.Qe,
            m = a.dg && (a.dg.kb || a.dg),
            n = a.iconUrl,
            r = a.xs,
            t = a.H0,
            y = a.lk,
            A = a.Gn,
            G = a.Sm;
          e = a.Ud;
          b = _.T;
          a.Dd ? (f = m && (m.kb || m), f = (0, _.T)('<div class="' + _.X("l-t-c") + '"><div class="' + _.X("l-t-o-c") + '">' + _.Bbb({
            Qe: k,
            dg: f,
            Ud: e
          }, d) + "</div></div>")) : (a = _.T, h = '<div class="' + _.X("l-t-c-x") + (A ? " " + _.X("l-ta-wa") : "") + '">' + N$d({
            imageUrl: h,
            Mv: "l-t-hf-og l-t-ul",
            Gn: !1,
            Ud: e
          }, d), (r || y && t) && G ? f = (0, _.T)(N$d({
            imageUrl: null != G ? G : "",
            Mv: "l-t-Bb",
            Gn: A,
            Ud: e
          }, d) + (y ? '<div class="' + _.X("l-t-ma-og") +
            '">' + _.jd({
              variant: "videoPlaySmall"
            }, d) + "</div>" : "")) : f = (0, _.T)(N$d({
            imageUrl: n,
            Mv: "l-t-hf-og",
            Gn: A,
            Ud: e
          }, d)), f = a(h + f + "</div>"));
          f = b(f)
        }
        return c(f)
      };
    var Q$d, R$d, S$d, T$d, U$d, V$d, W$d, Y$d;
    Q$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.Ak ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-Z") + '">' + _.mu({
        variant: "sharedList",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "sharedList",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    R$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.PA ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-Jk") + '">' + _.mu({
        variant: "starredList",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "starredList",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    S$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.xL ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-Jk") + '">' + _.mu({
        variant: "cseBadge",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "cseBadge",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    T$d = function(a, b, c) {
      b = c || b;
      var d = a.Dca,
        e = a.zs;
      c = "";
      a.UH && (c += '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-fc-a") + '">', a = d && !e ? "untrustedTeamDrive" : "teamDriveList", c += _.mu({
        variant: a,
        size: "16px",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: a,
        size: "16px",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>");
      return (0, _.T)(c)
    };
    U$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.IXa ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-fc-a-zk-wDYxhc") + '">' + _.mu({
        variant: "sharedList",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "sharedList",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    V$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.EPa ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-Nk-tq") + '">' + _.mu({
        variant: "abuseFlag",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "abuseFlag",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    W$d = function(a, b, c) {
      b = c || b;
      a = a.ul;
      var d;
      _.us(a, "sync-in-progress") || _.us(a, "waiting-to-sync") || _.us(a, "waiting-to-sync-local-changes") ? d = _.mu({
        variant: "offlineSyncing",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "offlineSyncing",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) : _.us(a, "manually-synced") ? d = _.mu({
        variant: "offlinePinned",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "offlinePinned",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) : _.us(a, "sync-problem") || _.us(a, "undeliverable-local-changes") ? d = _.mu({
          variant: "offlineSyncError",
          hb: !0,
          Nd: "l-t-sb-c-wk"
        },
        b) + _.mu({
        variant: "offlineSyncError",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) : d = "";
      return (0, _.T)('<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-Op-cc") + '">' + d + "</div>")
    };
    _.X$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.locked ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-Jq") + '">' + _.mu({
        variant: "lockOutlineList",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "lockOutlineList",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    Y$d = function(a, b, c) {
      b = c || b;
      return (0, _.T)(a.deleted ? '<div class="' + _.X("l-t-sb-c") + " " + _.X("l-t-em") + '">' + _.mu({
        variant: "trashList",
        color: "#000000",
        hb: !0,
        Nd: "l-t-sb-c-wk"
      }, b) + _.mu({
        variant: "trashList",
        color: "#FFFFFF",
        hb: !0,
        Nd: "l-t-sb-c-ha"
      }, b) + "</div>" : "")
    };
    var Z$d;
    Z$d = new _.Jj(32, 32);
    _.nY = function(a, b) {
      _.kF.call(this, a);
      this.ka = b || "none";
      _.ta(a, _.i4a);
      this.ua = a.get(_.Dw);
      this.wa = a.get(_.Nr)
    };
    _.z(_.nY, _.mY);
    _.g = _.nY.prototype;
    _.g.By = function(a, b) {
      var c = this;
      _.mY.prototype.By.call(this, a, b);
      a.qe.Dd() && _.lca(b);
      a.qe.hn() && _.iC(a.qe).observe(function() {
        c.ha(a, b)
      }, this, !0)
    };
    _.g.Vm = function(a) {
      a = a.qe;
      var b = a.getItem(),
        c = _.Ia(b) ? _.Ka(b) : null,
        d = "none" != this.ka,
        e = $$d(this, a),
        f = a.Rl(),
        h = _.wW(a),
        k = a.ze(void 0),
        m = a.ze(),
        n = b.getId(),
        r = a.Dd(),
        t = _.ubb(a),
        y = a.xs() || null != c && _.Taa(c.Ec() || ""),
        A = 3 == this.ua.H.get(),
        G = a.hn(),
        J = a.lk() || null != c && _.$da(c);
      var L = a.getItem();
      L = _.Ia(L) ? _.Ka(L) : L;
      L = a.hn() ? aae(a) : L ? (L = _.CW(this.Oa(), L)) && 1 == L.getType() ? _.eVd(L, 32, 32) : null : null;
      b = {
        Jb: e,
        Qe: f,
        dg: h,
        xz: k,
        iconUrl: m,
        id: n,
        Dd: r,
        aI: t,
        xs: y,
        H0: A,
        hn: G,
        lk: J,
        ccb: d,
        Sm: L,
        Gn: _.YRa,
        title: b.getTitle(),
        Ud: _.Ia(b),
        ZYa: _.Ia(b) && (!_.We(b) || !!c.Jh())
      };
      (c = a.getItem().sj()) && !_.x(c, 3) && (b.BU = a.getItem().nq());
      a = _.Yc(P$d, b);
      _.e9d(a);
      return a
    };
    _.g.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      bae(this, b, a, c, c, !0);
      d.observe(_.df(this.z1a, b, a), this);
      this.ua.H.observe(_.df(this.Neb, b, c), this)
    };
    _.g.z1a = function(a, b, c, d) {
      var e = new _.aC(this.Oa(), c),
        f = new _.aC(this.Oa(), d),
        h = _.eC(e);
      h != _.eC(f) && this.H("l-Ab-T-r", a, h);
      h = $$d(this, e);
      h != $$d(this, f) && this.ma("l-t-T-j", a, h);
      if (e.hn()) {
        h = aae(e);
        var k = a.querySelector(".l-t-fc-a-c img");
        h && k && _.kh(k, h)
      }
      e.Dd() ? c.Oh() == d.Oh() && c.Ph() == d.Ph() || _.lF(this, e, a, "l-t-T-c-j", O$d, D$d) : e.xs() == f.xs() && e.lk() == f.lk() && e.ze() == f.ze() && c.Wv() == d.Wv() && _.p(c, 90) == _.p(d, 90) || _.lF(this, e, a, "l-t-T-c-j", O$d, D$d);
      _.e9d(a);
      bae(this, a, b, e, f, !1)
    };
    _.g.Neb = function(a, b, c, d) {
      b.Dd() || ((3 == d ? !1 : !0) != (3 == c ? !1 : !0) && _.lF(this, b, a, "l-t-T-c-j", O$d, D$d), _.e9d(a))
    };
    var bae = function(a, b, c, d, e, f) {
        if ("none" != a.ka) {
          var h = d.getItem(),
            k = e.getItem();
          c.ha.ka(a.Oa(), d, k.wt(), b);
          !f && h.Ph() == k.Ph() && h.Uc() == k.Uc() || "hide-shared" == a.ka || d.Dd() || (c = h.Ph() ? "Shared" : void 0, _.lF(a, h, b, "l-t-Z-j", Q$d, function(r) {
            return {
              Ak: !(!r.Ph() || r.Uc())
            }
          }, c, 1E3));
          !f && h.Uc() == k.Uc() || "hide-team-drive" == a.ka || ((c = h.Uc()) ? _.$p(h.getCapabilities()) ? a.wa.Jc(c).then(function(r) {
            return (r = r.getItem()) && r.sj()
          }, function() {
            return null
          }).then(function(r) {
            cae(a, h, b, !0, !(!r || !_.x(r, 3)), !!r)
          }) : cae(a, h,
            b, !0, !1, !1) : cae(a, h, b, !1, !1, !1));
          !f && _.x(h, 98) == _.x(k, 98) && h.Uc() == k.Uc() || "hide-team-drive-acl-mod" == a.ka || (c = _.x(h, 98) ? "Accessible by people outside of the shared drive" : void 0, _.lF(a, h, b, "l-t-fc-a-zk-wDYxhc-j", U$d, function(r) {
            return {
              IXa: !!(r.Uc() && _.x(r, 98) && _.$p(r.getCapabilities()))
            }
          }, c, 1E3));
          !f && h.Vv() == k.Vv() || "hide-starred" == a.ka || (c = h.Vv() ? "Starred" : void 0, _.lF(a, d, b, "l-t-Jk-j", R$d, function(r) {
            return {
              PA: !!r.getItem().Vv()
            }
          }, c, 1E3));
          if (f || _.x(h, 36) != _.x(k, 36)) c = _.x(h, 36) ? "Flagged for abuse" :
            void 0, _.lF(a, d, b, "l-t-Nk-tq-j", V$d, function(r) {
              return {
                EPa: !!_.x(r.getItem(), 36)
              }
            }, c, 1E3);
          if (f || _.Zkb(h) != _.Zkb(k)) c = _.Zkb(h) ? "You need permission to open" : void 0, _.lF(a, d, b, "l-t-Jq-dn-j", _.X$d, function(r) {
            return {
              locked: _.Zkb(r.getItem())
            }
          }, c, 1E3);
          if (f || E$d(h) != E$d(k) || _.HUd(h) != _.HUd(k)) {
            var m = E$d(h) ? "Original item deleted" : _.HUd(h) ? "Original item moved to trash" : void 0;
            _.lF(a, d, b, "l-t-em-dn-j", Y$d, function() {
              return {
                deleted: !!m
              }
            }, m, 1E3)
          }
          a.ta(b, d, e, f);
          var n = dae(d);
          _.lF(a, d, b, "l-t-Op-cc-j", W$d, function() {
              return {
                ul: n
              }
            },
            eae(n), 1E3);
          f && _.oNa(h.Ec()) && _.lF(a, d, b, "l-t-DJPBic-j", S$d, function() {
            return {
              xL: !0
            }
          }, "Encrypted", 1E3)
        }
      },
      eae = function(a) {
        switch (a) {
          case "manually-synced":
            return "Available offline";
          case "sync-in-progress":
            return "Waiting to sync";
          case "sync-problem":
            return "Trouble syncing";
          case "undeliverable-local-changes":
            return "Can't sync your changes";
          case "waiting-to-sync":
            return "Waiting to sync";
          case "waiting-to-sync-local-changes":
            return "Waiting to sync your changes";
          default:
            return ""
        }
      },
      cae = function(a, b, c, d, e,
        f) {
        var h = b.Uc() ? "Belongs to a shared drive" : void 0;
        _.lF(a, b, c, "l-t-fc-a-j", T$d, function() {
          return {
            UH: d,
            Dca: f,
            zs: e
          }
        }, h, 1E3)
      };
    _.nY.prototype.Fp = function(a) {
      a = a.qe.getItem();
      return (_.Ia(a) && _.dea(a) ? "Google Drive Folder Shortcut" : _.Qe(a.Ec() || "", !1)) + ": " + a.getTitle()
    };
    _.nY.prototype.CT = function(a, b) {
      a.H.ha(b)
    };
    var $$d = function(a, b) {
        var c = _.qVd(b.getItem());
        "none" != a.ka && ((a = _.h9d(a.Oa(), b.getItem().wt())) && (c += " " + a), b.getItem().Vv() && (c += " starred"), _.x(b.getItem(), 36) && (c += " flagged for abuse"), b = fae(dae(b)), c += b);
        return c
      },
      fae = function(a) {
        switch (a) {
          case "manually-synced":
            return " available offline";
          case "sync-in-progress":
            return " waiting to sync";
          case "sync-problem":
            return " trouble syncing";
          case "undeliverable-local-changes":
            return " unable to sync your changes";
          case "waiting-to-sync":
            return " waiting to sync";
          case "waiting-to-sync-local-changes":
            return " waiting to sync your changes";
          default:
            return ""
        }
      },
      aae = function(a) {
        if (a = a.getItem().sj()) {
          var b = _.p(a, 6);
          return !b && (b = a.sM(), _.mM(b)) ? _.oM(b).ig(Z$d.height).Zp() : b || ""
        }
        return ""
      };
    _.nY.prototype.ta = function() {};
    var dae = function(a) {
      if (a.Dd()) return "";
      a = a.getItem();
      var b = _.AE(a);
      if (a = (b ? b.Ij() : a.Ij()) || a.Ij()) {
        if (_.x(a, 8)) return "undeliverable-local-changes";
        if (_.x(a, 4)) return "waiting-to-sync-local-changes";
        if (_.x(a, 3) && _.p(a, 5))
          if (_.p(a, 6) && _.p(a, 6) >= _.p(a, 5)) {
            if (0 == _.x(a, 7)) return "sync-problem";
            if (a.Dm()) return "manually-synced"
          } else return "sync-in-progress"
      }
      return ""
    };
    var oY = {},
      I$d = (oY[_.jc] = ["bn", "lb"], oY[_.kc] = ["fnsi"], oY[_.nc] = ["fnsi"], oY[_.eHa] = ["fnsi"], oY[_.gHa] = ["fnswm"], oY[_.oc] = ["fnsi"], oY[_.pc] = ["nsnsi"], oY[_.qc] = ["nsnsi"], oY[_.sc] = ["nsnsi"], oY[_.hHa] = ["nsnsi"], oY[_.iHa] = ["nsnsi"], oY[_.uc] = ["nsn", "mc"], oY[_.vc] = ["nsn", "mc"], oY[_.tc] = ["fnswm"], oY[_.wc] = ["fns"], oY[_.xc] = ["fnsi"], oY),
      pY = {},
      J$d = (pY[_.jc] = [], pY[_.kc] = F$d(), pY[_.nc] = F$d(), pY[_.eHa] = ["ow", "fm"], pY[_.gHa] = ["su", "sd"], pY[_.oc] = F$d(), pY[_.pc] = ["qu"], pY[_.qc] = ["rc", "ow", "fs"], pY[_.sc] = ["ow", "md",
        "fs"
      ], pY[_.hHa] = ["ow", "md"], pY[_.iHa] = [], pY[_.tc] = ["sup", "sdp"], pY[_.uc] = [], pY[_.vc] = [], pY[_.wc] = F$d(), pY[_.xc] = F$d(), pY),
      qY = {},
      H$d = (qY[_.jc] = "bn", qY[_.kc] = "fm", qY[_.nc] = "fm", qY[_.eHa] = "fm", qY[_.gHa] = "sd", qY[_.oc] = "fm", qY[_.qc] = "rc", qY[_.sc] = "md", qY[_.hHa] = "md", qY[_.iHa] = "nsnsi", qY[_.uc] = "nsn", qY[_.vc] = "nsn", qY[_.tc] = "sd", qY[_.wc] = "fm", qY[_.xc] = "fm", qY),
      rY = {},
      K$d = (rY[_.jc] = ["bn", "lb"], rY[_.kc] = G$d(), rY[_.nc] = G$d(), rY[_.eHa] = ["fnsi", "fm", "ow"], rY[_.gHa] = ["fnswm", "sd", "su"], rY[_.oc] = G$d(), rY[_.pc] = ["nsnsi", "qu"], rY[_.qc] = ["nsnsi", "rc", "ow", "fs"], rY[_.sc] = ["nsnsi", "md", "ow", "fs"], rY[_.hHa] = ["nsnsi", "md", "ow"], rY[_.iHa] = ["nsnsi"], rY[_.tc] = ["fnswm", "sup", "sdp"], rY[_.uc] = ["nsn", "mc"], rY[_.vc] = ["nsn", "mc"], rY[_.wc] = ["fns", "sdp", "ow", "fs"], rY[_.xc] = G$d(), rY);

    _.nY.prototype.ta = function(a, b, c, d) {
      var e = b.getItem();
      c = c.getItem();
      var f = gae(e);
      (d || f != gae(c)) && _.lF(this, b, a, "l-t-Jq-j", _.X$d, function() {
        return {
          locked: f
        }
      }, f ? "Locked" : void 0, 1E3)
    };
    var gae = function(a) {
      return a.NL().some(function(b) {
        return _.x(b, 1)
      })
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var Wge = function(a) {
        var b = a.jE();
        if (!b) return null;
        switch (b) {
          case 1:
            return _.Re(a.Ec() || "") ? "Uploaded" : "Created by me";
          case 2:
            return "Modified by me";
          case 4:
            return "Opened by me";
          default:
            return null
        }
      },
      Xge = function(a) {
        null === a.D5 && (a.D5 = _.br(a.Me, a.getItem().Hu));
        return a.D5
      },
      Yge = function(a) {
        null === a.c6 && (a.c6 = _.br(a.Me, a.getItem().tH));
        return a.c6
      },
      Zge = function(a) {
        a.Dd() ? (null === a.FU && (a.FU = _.XAa(a.Me, a.getItem().nM)), a = a.FU) : a = _.IUd(a);
        return a
      },
      UY = function(a, b, c, d) {
        c = new _.go(c, function() {
          return this.Fp(b)
        }.bind(a));
        var e = a.Gc.Cb("a-s-Nc-j", d);
        _.Mc(e, "", void 0, 1, 2, void 0);
        c.observe(function(f) {
          _.Jc(e, f, void 0)
        }, a, !0)
      },
      VY = function(a, b, c, d, e, f) {
        this.id = a;
        this.H = b;
        this.title = c || "";
        this.bQ = d;
        this.rn = void 0 === e ? null : e;
        this.eQ = void 0 === f ? null : f
      },
      $ge = function(a) {
        var b = a.owner;
        a = a.title;
        return (0, _.T)('<div class="' + _.X("a-s-Nc-j") + '"><span class="' + _.X("a-s-Nc-Q") + '"' + (a ? ' title="' + _.X(a) + '"' : "") + ">" + _.U(b) + "</span></div>")
      },
      ahe = function(a) {
        a = a || {};
        var b = a.date;
        a = a.Sc;
        return (0, _.T)('<div class="' + _.X("a-s-Nc-j") + '"' +
          (a ? ' title="' + _.X(a) + '"' : "") + ">" + (b ? '<div class="' + _.X("a-s-Nc-Q") + '">' + _.U(b) + "</div>" : '<div class="' + _.X("a-s-Nc-Q") + " " + _.X("a-s-Nc-Zi") + '">&mdash;</div>') + "</div>")
      },
      bhe = function(a) {
        var b = a.id,
          c = a.title,
          d = a.zJa,
          e = a.iPa,
          f = a.BXa,
          h = '<div class="' + _.X("l-t-T-j") + '" data-id="' + _.X(b) + '" data-target="backup"><div class="' + _.X("l-t-T-c-j") + '" data-is-doc-name="true"><div class="' + _.X("l-t-c") + '"><svg class="' + _.X("l-t-Kj-T-c-qd") + '" width="24px" height="24px" viewBox="0 0 24 24" fill="rgb(143, 143, 143)"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg></div></div>',
          k = "OVLdKe" + _.KK(),
          m = "m4PIw" + _.KK();
        b = "cR89sc" + _.KK();
        a = "gRGjcd" + _.KK();
        c = '<div class="' + _.X("l-t-T-V") + " " + _.X("l-t-Kj-T-fk") + (f ? " " + _.X("l-t-Kj-gc-USrqEe") : "") + '" aria-labelledby="' + _.X(k) + " " + _.X(m) + " " + _.X(b) + " " + _.X(a) + '"><div id="' + _.X(k) + '" class="' + _.X("l-t-Kj-T-r") + " " + _.X("l-Ab-T-r") + '">' + _.U(c) + "</div>";
        f ? (f = '<div class="' + _.X("l-t-Kj-T-USrqEe-og") + '" data-tooltip="' + _.X("MMS data backed up by Google One") + '">', m = (0, _.T)('<img id="' + _.X(m) + '" class="' + _.X("l-t-Kj-T-USrqEe-qd") + '" src="https://www.gstatic.com/images/branding/product/2x/one_24dp.png" alt="' +
          _.X("MMS data backed up by Google One") + '">'), f = (0, _.T)(f + m + "</div>")) : f = "";
        h += c + f;
        d && (h += '<div id="' + _.X(b) + '" class="' + _.X("l-t-Kj-T-zF4a0c") + '">', h += "(Backup turned off)</div>");
        e && (h += '<div id="' + _.X(a) + '" class="' + _.X("l-t-Kj-T-ey4Jwb") + '">', d = _.ry(new _.qy("{EXPIRY_DAYS_1,plural,=1{(Expires in 1 day)}other{(Expires in {EXPIRY_DAYS_2} days)}}"), {
          EXPIRY_DAYS_1: e,
          EXPIRY_DAYS_2: _.U(e)
        }), h = h + d + "</div>");
        return (0, _.T)(h + "</div></div>")
      },
      che = function(a) {
        _.kF.call(this, a);
        this.ka = _.ta(this.Oa(), _.Na)
      };
    _.z(che, _.mY);
    che.prototype.Vm = function(a) {
      a = a.qe.xt();
      var b = !1,
        c = 0;
      if (1 == a.zn()) {
        var d = _.u(a, _.Sv, 6);
        d && (b = !_.x(d, 1))
      } else(d = _.p(a, 8)) && this.ka && (d = Math.floor((d - (new Date).getTime()) / 864E5), _.F(this.ka, 79, !1) || d <= _.v(this.ka, 78, 0)) && (c = d);
      a = {
        id: a.getId(),
        title: a.getTitle(),
        zJa: b,
        iPa: c,
        BXa: !!_.x(a, 9)
      };
      return _.Yc(bhe, a)
    };
    che.prototype.listen = function(a, b) {
      a.qe.H.observe(this.ha.bind(this, a, b), this)
    };
    var dhe = function(a) {
        return (0, _.T)(ahe({
          date: a.sIa,
          Sc: a.Sc
        }))
      },
      ehe = function(a) {
        _.kF.call(this, a)
      };
    _.z(ehe, _.mY);
    ehe.prototype.Vm = function(a) {
      a = {
        sIa: _.ZB(a.qe.getItem().wa())
      };
      return _.Yc(dhe, a)
    };
    ehe.prototype.Fp = function(a) {
      return (a = _.ZB(a.qe.getItem().wa())) ? "Created " + a : ""
    };
    ehe.prototype.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      _.NUd(c).observe(_.df(this.ka, b), this);
      UY(this, a, [d], b)
    };
    ehe.prototype.ka = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    var fhe = function(a) {
        return (0, _.T)(ahe({
          date: a.f_a,
          Sc: a.Sc
        }))
      },
      WY = function(a) {
        _.kF.call(this, a)
      };
    _.z(WY, _.mY);
    WY.prototype.Vm = function(a) {
      a = a.qe;
      if (_.Ia(a.getItem())) return _.Xj("div");
      a = {
        f_a: _.ZB(a.getItem().ua())
      };
      return _.Yc(fhe, a)
    };
    WY.prototype.Fp = function(a) {
      return _.Ia(a.qe.getItem()) ? "" : (a = _.ZB(a.qe.getItem().ua())) ? "Last modified by me " + a : "Never modified by me"
    };
    WY.prototype.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      _.Ia(c.getItem()) || (_.LUd(c).observe(_.df(this.ka, b), this), UY(this, a, [d], b))
    };
    WY.prototype.ka = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    var ghe = function(a) {
        a = a.xPa;
        return (0, _.T)('<div class="' + _.X("a-s-Nc-j") + '"><div class="' + _.X("a-s-Nc-Q") + '">' + _.U(a) + "</div></div>")
      },
      hhe = function(a) {
        _.kF.call(this, a);
        this.ka = _.b9d(new _.uC, !0)
      };
    _.z(hhe, _.mY);
    hhe.prototype.Vm = function(a) {
      var b = a.qe;
      if (_.Ia(b.getItem())) return _.Xj("div");
      b = Zge(b).get() || 0;
      a = {
        xPa: this.ka.format(b),
        Sc: this.Fp(a)
      };
      return _.Yc(ghe, a)
    };
    hhe.prototype.Fp = function(a) {
      if (a.qe.Dd() || _.Ia(a.qe.getItem())) a = "";
      else {
        var b = this.Oa();
        a = a.qe;
        var c = Zge(a).get() || 0,
          d = a.getItem().va() || 0,
          e = _.b9d(new _.uC, !0);
        (b = _.ta(b, _.Qa)) && _.Pa(b) ? (_.b9d(e, !1), a = "Size: " + e.format(c)) : (b = e.format(c), _.b9d(e, !1), e = e.format(d), 0 == d ? (a = _.VUd(a.getItem(), !0), a = "Size: " + (b + (" \n Storage used: " + (e + (" (" + ((a || "") + ")")))))) : a = "Size: " + (b + (" \n Storage used: " + e)))
      }
      return a
    };
    hhe.prototype.listen = function(a, b) {
      var c = a.qe;
      _.Ia(c.getItem()) || (c = Zge(c), c.observe(_.df(this.ta, b), this, !0), UY(this, a, [c], b))
    };
    hhe.prototype.ta = function(a, b, c) {
      b != c && (b = this.ka.format(b || 0), this.H("a-s-Nc-Q", a, b))
    };
    var ihe = function(a) {
        return (0, _.T)(ahe({
          date: a.d_a,
          Sc: a.Sc
        }))
      },
      jhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(jhe, _.mY);
    jhe.prototype.Vm = function(a) {
      a = a.qe.xt();
      a = {
        d_a: _.ZB(a.CR())
      };
      return _.Yc(ihe, a)
    };
    jhe.prototype.listen = function(a, b) {
      var c = this,
        d = a.qe.H;
      d.observe(function() {
        c.ha(a, b)
      }, this);
      UY(this, a, [d], b)
    };
    jhe.prototype.Fp = function(a) {
      a = a.qe.xt();
      return (a = _.ZB(a.CR())) ? "Last backed up " + a : ""
    };
    jhe.prototype.CT = function(a, b) {
      a.H.ha(b)
    };
    var khe = function(a, b, c) {
        b = c || b;
        a = a.wy && (a.wy.kb || a.wy);
        return (0, _.T)('<div class="' + _.X("a-s-Nc-j") + '"><div class="' + _.X("a-s-Nc-Q") + " " + _.X("a-t-l-vs-yc-r") + '">' + _.l9d({
          wy: a
        }, b) + "</div></div>")
      },
      lhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(lhe, _.mY);
    lhe.prototype.Vm = function(a) {
      a = {
        wy: a.qe.getItem().At()
      };
      return _.Yc(khe, a)
    };
    var mhe = function(a) {
        return (a = a.At()) ? _.p(a, 1) || 0 : 0
      },
      nhe = function(a) {
        return (a = a.At()) ? _.p(a, 5) || 0 : 0
      };
    lhe.prototype.listen = function(a, b) {
      var c = a.qe.Me;
      c.observe(_.df(this.ka, b), this);
      UY(this, a, [c], b)
    };
    lhe.prototype.ka = function(a, b, c) {
      var d = mhe(c);
      c = nhe(c);
      var e = mhe(b),
        f = nhe(b);
      b = b.At();
      d == e && c == f || _.Zn(a, khe, {
        wy: b
      })
    };
    var ohe = function(a) {
        var b = _.T;
        var c = a.g_a;
        var d = a.h_a;
        a = a.Sc;
        c = (0, _.T)('<div class="' + _.X("a-s-Nc-j") + '"' + (a ? ' title="' + _.X(a) + '"' : "") + ">" + (c ? '<span class="' + _.X("a-s-Nc-Q") + '">' + _.U(c) + '</span><span class="' + _.X("a-s-Nc-Ej") + '">' + _.Hs(_.U(d)) + "</span>" : '<div class="' + _.X("a-s-Nc-Q") + " " + _.X("a-s-Nc-Zi") + '">&mdash;</div>') + "</div>");
        return b(c)
      },
      phe = function(a) {
        _.kF.call(this, a)
      };
    _.z(phe, _.mY);
    _.g = phe.prototype;
    _.g.Vm = function(a) {
      a = a.qe;
      if (_.Ia(a.getItem())) return _.Xj("div");
      a = {
        g_a: _.ZB(a.getItem().ka()),
        h_a: _.rbb(a.getItem().Jm())
      };
      return _.Yc(ohe, a)
    };
    _.g.Fp = function(a) {
      if (_.Ia(a.qe.getItem())) return "";
      var b = a.qe.getItem().Jm();
      a = _.ZB(a.qe.getItem().ka());
      return b ? _.x(b, 7) ? "Last modified by me " + a : "Last modified by " + ((b.getName() || "") + (" " + a)) : "Last modified " + a
    };
    _.g.listen = function(a, b) {
      var c = a.qe;
      if (!_.Ia(c.getItem())) {
        var d = c.Me;
        c = _.KUd(c);
        d.observe(_.df(this.ffb, b), this);
        c.observe(_.df(this.y1a, b), this);
        UY(this, a, [d], b)
      }
    };
    _.g.ffb = function(a, b, c) {
      b.Jm() != c.Jm() && (b = new _.aC(this.Oa(), b), this.H("a-s-Nc-Ej", a, _.rbb(b.getItem().Jm())))
    };
    _.g.y1a = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    var qhe = function(a, b, c) {
        b = c || b;
        var d = a.item && (a.item.kb || a.item);
        c = a.AC;
        a = a.iX;
        var e = "";
        if (_.vC(d)) {
          if (_.wC(d)) {
            b = e;
            e = d && (d.kb || d);
            d = "";
            var f = 2 == _.Ve(e.Tf());
            f || (f = e.Tf(), null == f ? f = null : (f = _.Ja(f), f = null == f ? null : f.Jh()));
            var h = f;
            h && (e = e.getCapabilities(), h = !(null == e ? 0 : _.x(e, 9)));
            h || (d += _.Fbb({
              className: "WUQjje",
              disabled: !c || a,
              tabIndex: "-1",
              body: (0, _.xs)(f ? "Remove shortcut" : "Request access"),
              attributes: (0, _.ys)(c ? 'data-target="' + _.X(f ? "Rsbfue" : "eMskY") + '"' : "")
            }));
            c = (0, _.T)(d);
            e = b + c
          }
        } else _.lq(d).length ?
          (c = (c = _.lq(d)[0]) && (c.kb || c), a = "", c && (a = _.x(c, 7) ? a + "me" : a + ("" + _.Is(c.getName()))), c = a) : c = "", e += $ge({
            owner: (0, _.xs)("" + (c ? _.U(c) : _.p(d, 93) ? _.OUd({
              Ew: _.p(d, 93)
            }, b) : "&mdash;"))
          });
        return (0, _.T)(e)
      },
      rhe = function(a) {
        _.kF.call(this, a);
        this.ua = a.get(_.Nr);
        this.ka = _.ta(a, _.dA);
        this.ta = new Map
      };
    _.z(rhe, _.mY);
    rhe.prototype.Vm = function(a) {
      var b = a.qe.getItem().getId();
      this.ta.set(b, !1);
      return _.Yc(qhe, {
        item: a.qe.getItem(),
        AC: this.ka ? this.ka.gA.zd().get() : !0,
        iX: !1
      })
    };
    rhe.prototype.listen = function(a, b) {
      var c = this,
        d = a.qe,
        e = new _.$q("");
      a.Qh.observe(function(h) {
        c.Ia().Mb("WUQjje", b) && c.rk("WUQjje", b, h)
      }, this, !0);
      she(this, b, e);
      _.f9d(d).observe(function() {
        return c.ha(a, b)
      }, this, !1);
      _.dC(d).observe(function(h) {
        _.co(e);
        h ? _.$p(d.getItem().getCapabilities()) ? this.ua.Jc(h).then(function(k) {
          k = k.Kj();
          _.fo(e, k)
        }, _.uf) : this.ha(a, b) : _.ar(e, _.JUd(d))
      }.bind(this), this, !0);
      e.observe(_.df(this.wa, b), this, !0);
      this.ka && this.ka.gA.zd().observe(function() {
          return void c.ha(a, b)
        }, this,
        !1);
      var f = new _.Xw(b);
      f.listen("Rsbfue.click", function() {
        return the(c, d)
      }, a);
      f.listen("Rsbfue.keyup", function(h) {
        13 != h.keyCode && 32 != h.keyCode || the(c, d)
      });
      f.listen("eMskY.click", function() {
        return uhe(c, d, a, b)
      });
      f.listen("eMskY.keyup", function(h) {
        13 != h.keyCode && 32 != h.keyCode || uhe(c, d, a, b)
      })
    };
    var uhe = function(a, b, c, d) {
        var e = c.qe.getItem().getId();
        a.ta.get(e) || (b = b.getItem(), (new _.Ykb(b)).submit(a.Oa()), a.ta.set(e, !0), _.Zn(d, qhe, {
          item: c.qe.getItem(),
          AC: a.ka ? a.ka.gA.zd().get() : !0,
          iX: !0
        }))
      },
      the = function(a, b) {
        b = b.getItem();
        (b.Jh() ? new _.Nkb([b.getId()]) : new _.ykb([b.getId()], _.B$d(b), b.qf()[0])).submit(a.Oa())
      };
    rhe.prototype.wa = function(a, b) {
      b && this.Ia().Mb("a-s-Nc-Q", a) && this.H("a-s-Nc-Q", a, b)
    };
    var she = function(a, b, c) {
        var d = new _.go([c], function() {
            return c.get() ? "Owned by " + (c.get() || "") : ""
          }),
          e = a.Ia();
        d.observe(function(f) {
          if (e.Mb("a-s-Nc-j", b)) {
            var h = e.Cb("a-s-Nc-j", b);
            _.Mc(h, f, void 0, 1, 2)
          }
        }, a, !0)
      },
      vhe = function(a) {
        a = a.M9a;
        return (0, _.T)('<div class="' + _.X("a-s-Nc-j") + '"><div class="' + _.X("a-s-Nc-Q") + '">' + _.U(a) + "</div></div>")
      },
      whe = function(a) {
        _.kF.call(this, a);
        this.ka = new _.uC
      };
    _.z(whe, _.mY);
    whe.prototype.Vm = function(a) {
      a = {
        M9a: xhe(this, a.qe.getItem()),
        Sc: this.Fp(a)
      };
      return _.Yc(vhe, a)
    };
    whe.prototype.Fp = function(a) {
      return xhe(this, a.qe.getItem()) + " of quota used"
    };
    whe.prototype.listen = function(a, b) {
      var c = a.qe.Me;
      c.observe(_.df(this.ta, b), this);
      UY(this, a, [c], b)
    };
    whe.prototype.ta = function(a, b, c) {
      b.va() != c.va() && this.H("a-s-Nc-Q", a, xhe(this, b))
    };
    var xhe = function(a, b) {
        return a.ka.format(b.va() || 0)
      },
      yhe = function(a) {
        var b = _.T,
          c = {
            date: a.S9a,
            attribution: a.R9a,
            Sc: a.Sc
          };
        c = c || {};
        a = c.date;
        var d = c.attribution;
        c = c.Sc;
        c = '<div class="' + _.X("a-s-Nc-j") + '"' + (c ? ' title="' + _.X(c) + '"' : "") + ">";
        d = null != d ? d : "\u2014";
        c += '<span class="' + _.X("a-s-Nc-Q") + '">' + _.U(a) + '</span><span class="' + _.X("a-s-Nc-Ej") + '">' + _.U(d) + "</span></div>";
        a = (0, _.T)(c);
        return b(a)
      },
      zhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(zhe, _.mY);
    _.g = zhe.prototype;
    _.g.Vm = function(a) {
      a = a.qe;
      a = {
        S9a: _.ZB(a.getItem().OB()),
        R9a: Wge(a.getItem())
      };
      return _.Yc(yhe, a)
    };
    _.g.Fp = function(a) {
      var b = _.M$d(a.qe).get();
      return b && 0 != b && 3 != b ? (b = Wge(a.qe.getItem()), a = _.ZB(a.qe.getItem().OB()), b + (" " + a)) : ""
    };
    _.g.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      c.HU || (c.oga || (c.oga = _.br(c.Me, c.getItem().OB)), c.HU = _.vW(c, c.oga));
      c = c.HU;
      d.observe(_.df(this.$eb, b), this);
      c.observe(_.df(this.A1a, b), this);
      UY(this, a, [d], b)
    };
    _.g.$eb = function(a, b, c) {
      var d = b.jE();
      c = c.jE();
      d != c && (b = new _.aC(this.Oa(), b), this.H("a-s-Nc-Ej", a, Wge(b.getItem()) || ""))
    };
    _.g.A1a = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    var Ahe = function(a) {
        a = a.selected;
        var b = '<div class="' + _.X("l-t-ha") + " " + _.X("a-zf-Ti-mf-Eh") + '">';
        return (0, _.T)((a ? b + "Selected" : b + "Not selected") + "</div>")
      },
      Bhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(Bhe, _.mY);
    Bhe.prototype.Vm = function(a) {
      a = {
        selected: a.selected.get()
      };
      return _.Yc(Ahe, a)
    };
    Bhe.prototype.listen = function(a, b) {
      a.selected.observe(_.df(this.ha, a, b), this)
    };
    var Che = function(a) {
        return (0, _.T)(ahe({
          date: a.Mbb,
          Sc: a.Sc
        }))
      },
      Dhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(Dhe, _.mY);
    Dhe.prototype.Vm = function(a) {
      a = {
        Mbb: _.ZB(a.qe.getItem().Bt())
      };
      return _.Yc(Che, a)
    };
    Dhe.prototype.Fp = function(a) {
      return (a = _.ZB(a.qe.getItem().Bt())) ? "Shared with me " + a : ""
    };
    Dhe.prototype.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      null === c.DV && (c.DV = _.vW(c, _.pbb(c)));
      c.DV.observe(_.df(this.ka, b), this);
      UY(this, a, [d], b)
    };
    Dhe.prototype.ka = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    var Ehe = function(a) {
        a = a || {};
        var b = a.Wha,
          c = a.Rbb,
          d = a.Sbb;
        a = a.Tbb;
        return (0, _.T)('<div class="' + _.X("l-t-ea-q") + '">' + (b && a ? '<img class="' + _.X("l-t-ea-q-Xj") + " " + _.X("l-t-Bb") + '" aria-hidden="true" alt="" ' + _.sAd({
            url: a
          }) + ">" : '<div class="' + _.X("l-t-ea-q-Xj") + " " + _.X("l-t-Bb") + (d ? "" : " " + _.X("l-t-ea-q-Xc-Id")) + '" style="background-color: ' + _.X(_.Gs(c)) + '" aria-hidden="true"><div class="' + _.X("l-t-ea-q-Xj-qj-za") + '">' + (d ? _.U(d) : "") + "</div></div>") + '<div class="' + _.X("l-ea-q-r-j") + '"><span class="' + _.X("l-ea-q-T") +
          '">' + _.Hs(_.U(b)) + "</span></div></div>")
      },
      Fhe = function(a) {
        _.kF.call(this, a);
        this.ka = _.ta(a, _.Nr);
        this.ta = a.get(_.Pe)
      };
    _.z(Fhe, _.mY);
    Fhe.prototype.Vm = function(a) {
      a = a.qe.getItem();
      a = _.C$d(a);
      var b = "",
        c = "",
        d = "",
        e = null;
      a && a instanceof _.al && (d = a.getName(), e = this.ta.zd().get() ? _.p(a, 5) : null, c = _.gE(d), b = a.getId() || "");
      return _.Yc(Ehe, {
        Rbb: _.fE(b),
        Sbb: c,
        Wha: d,
        Tbb: e
      })
    };
    Fhe.prototype.listen = function(a, b) {
      var c = this,
        d = a.qe;
      d.Me.observe(_.df(this.ua, a, b), this);
      a = d.getItem();
      !a.Hu() && a.Uc() && _.$p(a.getCapabilities()) && this.ka && this.ka.Jc(a.Uc()).then(function(e) {
        return e.getItem().getTitle()
      }, function() {
        return null
      }).then(function(e) {
        var f = _.gE(e) || "";
        c.H("l-ea-q-T", b, e);
        c.H("l-t-ea-q-Xj-qj-za", b, f)
      })
    };
    Fhe.prototype.ua = function(a, b, c, d) {
      c.Hu() != d.Hu() && this.ha(a, b)
    };
    var Ghe = function(a) {
        return (0, _.T)($ge({
          owner: a.Wha
        }))
      },
      Hhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(Hhe, _.mY);
    Hhe.prototype.Vm = function(a) {
      a = {
        Wha: a.qe.Eaa()
      };
      return _.Yc(Ghe, a)
    };
    Hhe.prototype.listen = function(a, b) {
      if (Xge(a.qe) && a.qe.Eaa()) {
        var c = a.qe;
        null === c.hP && (c.hP = new _.go([Xge(c)], c.Eaa.bind(c)));
        c.hP.observe(_.df(this.H, "a-s-Nc-Q", b), this);
        UY(this, a, [Xge(a.qe)], b)
      }
    };
    Hhe.prototype.Fp = function(a) {
      return (a = a.qe.getItem().Hu()) && a.getName() ? "Shared by " + a.getName() : ""
    };
    var Ihe = function(a) {
        return (0, _.T)(ahe({
          date: a.keb,
          Sc: a.Sc
        }))
      },
      Jhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(Jhe, _.mY);
    Jhe.prototype.Vm = function(a) {
      a = {
        keb: _.ZB(a.qe.getItem().sH())
      };
      return _.Yc(Ihe, a)
    };
    Jhe.prototype.Fp = function(a) {
      return (a = _.ZB(a.qe.getItem().sH())) ? "Trashed " + a : ""
    };
    Jhe.prototype.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      c.gW || (null === c.oja && (c.oja = _.br(c.Me, c.getItem().sH)), c.gW = _.vW(c, c.oja));
      c.gW.observe(_.df(this.ka, b), this);
      UY(this, a, [d], b)
    };
    Jhe.prototype.ka = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    var Khe = function(a) {
        return (0, _.T)($ge({
          owner: a.leb
        }))
      },
      Lhe = function(a) {
        _.kF.call(this, a)
      };
    _.z(Lhe, _.mY);
    Lhe.prototype.Vm = function(a) {
      a = {
        leb: a.qe.ira()
      };
      return _.Yc(Khe, a)
    };
    Lhe.prototype.listen = function(a, b) {
      var c = a.qe;
      null === c.b6 && (c.b6 = new _.go([Yge(c)], c.ira.bind(c)));
      c.b6.observe(_.df(this.H, "a-s-Nc-Q", b), this);
      UY(this, a, [Yge(a.qe)], b)
    };
    Lhe.prototype.Fp = function(a) {
      return (a = (a = a.qe.getItem().tH()) && a.getName()) ? "Trashed by " + a : ""
    };
    var Mhe = function(a) {
        return (0, _.T)(ahe({
          date: a.o_a,
          Sc: a.Sc
        }))
      },
      XY = function(a) {
        _.kF.call(this, a)
      };
    _.z(XY, _.mY);
    XY.prototype.Vm = function(a) {
      a = {
        o_a: _.ZB(a.qe.getItem().ta())
      };
      return _.Yc(Mhe, a)
    };
    XY.prototype.Fp = function(a) {
      return (a = _.ZB(a.qe.getItem().ta())) ? "Last opened by me " + a : "Never opened by me"
    };
    XY.prototype.listen = function(a, b) {
      var c = a.qe,
        d = c.Me;
      _.MUd(c).observe(_.df(this.ka, b), this);
      UY(this, a, [d], b)
    };
    XY.prototype.ka = function(a, b, c) {
      b != c && this.H("a-s-Nc-Q", a, b)
    };
    _.R("qj7MZb");
    var Nhe = function(a) {
        var b = {};
        a = (b.bn = new che(a), b.cd = new ehe(a), b.ed = new WY(a), b.fe = new WY(a), b.fs = new hhe(a), b.lb = new jhe(a), b.md = new phe(a), b.fm = new phe(a), b.fn = new _.nY(a), b.fnswm = new _.nY(a, "hide-shared"), b.fns = new _.nY(a, "hide-starred"), b.fnsi = new _.nY(a, "hide-team-drive"), b.mc = new lhe(a), b.nsn = new _.nY(a), b.nsnsi = new _.nY(a, "all"), b.ow = new rhe(a), b.sup = new Fhe(a), b.su = new Hhe(a), b.qu = new whe(a), b.sl = new Bhe(a), b.vd = new XY(a), b.fv = new XY(a), b.sd = new Dhe(a), b.rc = new zhe(a), b.td = new Jhe(a), b.tu =
          new Lhe(a), b);
        b = {};
        b.bn = new VY("bn", a.bn, _.BKa.H, "a-t-l-Kj-T");
        b.cd = new VY("cd", a.cd, _.CKa.H, "a-t-l-Sc");
        b.ed = new VY("ed", a.ed, _.bu.H, "a-t-l-Sc", _.bu);
        b.fe = new VY("fe", a.fe, _.HKa.H, "a-t-l-Sc", _.HKa);
        b.fs = new VY("fs", a.fs, "Size", "a-t-l-sa-bk");
        b.lb = new VY("lb", a.lb, "Last backup", "a-t-l-Sc");
        b.md = new VY("md", a.md, _.$t.H, "a-t-l-Sc", _.$t);
        b.fm = new VY("fm", a.fm, _.FKa.H, "a-t-l-Sc", _.FKa);
        b.fn = new VY("fn", a.fn, _.Zt.H, "a-t-l-T", _.Zt, "itemUploadDrop");
        b.fnswm = new VY("fnswm", a.fnswm, _.Zt.H, "a-t-l-T", _.Zt, "itemUploadDrop");
        b.fns = new VY("fns", a.fns, _.Zt.H, "a-t-l-T", _.Zt, "itemUploadDrop");
        b.fnsi = new VY("fnsi", a.fnsi, _.Zt.H, "a-t-l-T", _.Zt, "itemUploadDrop");
        b.mc = new VY("mc", a.mc, "Members", "a-t-l-vs-yc");
        b.nsn = new VY("nsn", a.nsn, _.Yt.H, "a-t-l-T", void 0, "itemUploadDrop");
        b.nsnsi = new VY("nsnsi", a.nsnsi, _.Yt.H, "a-t-l-T");
        b.ow = new VY("ow", a.ow, "Owner", "a-t-l-Dg");
        b.sup = new VY("sup", a.sup, "Shared by", "a-t-l-ea-q");
        b.su = new VY("su", a.su, "Shared by", "a-t-l-Dg");
        b.qu = new VY("qu", a.qu, _.Xt.H, "a-t-l-ji", _.Xt);
        b.sl = new VY("sl", a.sl,
          null, "a-t-l-ha");
        b.vd = new VY("vd", a.vd, _.au.H, "a-t-l-Sc", _.au);
        b.fv = new VY("fv", a.fv, _.GKa.H, "a-t-l-Sc", _.GKa);
        b.sd = new VY("sd", a.sd, _.Vt.H, "a-t-l-Sc", _.Vt);
        b.rc = new VY("rc", a.rc, null, "a-t-l-Sc-in");
        b.td = new VY("td", a.td, _.Wt.H, "a-t-l-Sc", _.Wt);
        b.tu = new VY("tu", a.tu, "Trashed by", "a-t-l-Dg");
        this.ua = b
      },
      Ohe = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++) c.push(a.ua[b[d]]);
        return c
      };
    Nhe.prototype.ha = function(a) {
      a = a.map(function(b) {
        return _.uw(b)
      });
      a = a.filter(function(b) {
        return void 0 !== b
      });
      return Ohe(this, a)
    };
    var Phe = function(a, b) {
        if (0 == a.length) return [];
        a = a.slice(0);
        var c = a.indexOf("sdp"); - 1 != c && (a[c] = b);
        return a
      },
      Qhe = function(a, b, c) {
        if (0 == a.length) return [];
        a = a.slice(0);
        b = b.hJa;
        c = _.uw(c.rm);
        b && c && !_.Of(a, c) && (b = a.indexOf(b), _.Sf(a, b), _.Zf(a, b, 0, c));
        return a
      };
    Nhe.prototype.H = function(a, b) {
      var c = [];
      c = c.concat(a.aza);
      c = c.concat(Qhe(a.yna, a, b));
      _.fY() && _.Of([_.nc, _.oc, _.pc, _.qc, _.sc, _.wc, _.xc], a.kj) && c.push("sl");
      return Ohe(this, c)
    };
    Nhe.prototype.ma = function(a, b) {
      var c = [];
      c = c.concat(a.aza);
      c = c.concat(Phe(a.yna, b));
      _.fY() && _.Of([_.nc, _.oc, _.pc, _.qc, _.sc, _.wc, _.xc], a.kj) && c.push("sl");
      return Ohe(this, c)
    };
    Nhe.prototype.ka = function(a, b) {
      a = Qhe(a.nya, a, b);
      return Ohe(this, a)
    };
    Nhe.prototype.ta = function(a, b) {
      a = Phe(a.nya, b);
      return Ohe(this, a)
    };
    _.bt({
      id: _.Ew,
      Rb: Nhe
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywn");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywl");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.T6d = function(a, b) {
      var c = Array.from(_.UX.keys()).find(function(d) {
        return d.In(a, b)
      });
      return c ? _.UX.get(c) : null
    };
    _.R("sywm");
    _.UX = new Map;
    _.UX.set(_.wfb, {
      direction: "l",
      extend: !1,
      hv: !1
    });
    _.UX.set(_.xfb, {
      direction: "r",
      extend: !1,
      hv: !1
    });
    _.UX.set(_.yfb, {
      direction: "u",
      extend: !1,
      hv: !1
    });
    _.UX.set(_.vfb, {
      direction: "d",
      extend: !1,
      hv: !1
    });
    _.UX.set(_.rfb, {
      direction: "l",
      extend: !0,
      hv: !1
    });
    _.UX.set(_.sfb, {
      direction: "r",
      extend: !0,
      hv: !1
    });
    _.UX.set(_.tfb, {
      direction: "u",
      extend: !0,
      hv: !1
    });
    _.UX.set(_.qfb, {
      direction: "d",
      extend: !0,
      hv: !1
    });
    _.UX.set(_.Afb, {
      direction: "l",
      extend: !1,
      hv: !0
    });
    _.UX.set(_.Bfb, {
      direction: "r",
      extend: !1,
      hv: !0
    });
    _.UX.set(_.Cfb, {
      direction: "u",
      extend: !1,
      hv: !0
    });
    _.UX.set(_.zfb, {
      direction: "d",
      extend: !1,
      hv: !0
    });
    _.U6d = function(a, b, c) {
      c = void 0 === c ? !1 : c;
      _.I.call(this);
      this.H = a;
      this.ha = this.H.ee();
      this.ka = b;
      (this.Mj = c) && this.H.ZD().observe(this.ma, this, !0)
    };
    _.C(_.U6d, _.I);
    _.g = _.U6d.prototype;
    _.g.gL = function() {
      this.Mj || this.H.Ck()
    };
    _.g.hL = function(a) {
      this.H.SE(a);
      this.H.Fs(a)
    };
    _.g.H9 = function(a, b) {
      return !this.Mj && _.Reb.In(a, b) ? (this.gL(), !0) : !this.Mj && _.Ffb.In(a, b) ? (V6d(this), !0) : (a = _.T6d(a, b)) ? W6d(this, a) : !1
    };
    _.g.PY = function(a) {
      return this.Mj || a != _.Reb ? this.Mj || a != _.Ffb ? (a = _.UX.get(a)) ? W6d(this, a) : !1 : (V6d(this), !0) : (this.gL(), !0)
    };
    _.g.xBa = function() {
      return !1
    };
    _.g.uoa = function() {};
    var W6d = function(a, b) {
      var c = a.H.Wj();
      var d = c ? (d = a.ka.eM(c, b.direction)) || c : 0 == a.ha.kc() ? null : a.ha.getKey(a.ha.get(0));
      null != d && (b.hv ? a.H.Fs(d) : (b = d, a.H.SE(b), a.H.Fs(b)));
      return !0
    };
    _.U6d.prototype.ma = function(a) {
      a && !this.H.isSelected(a) && this.H.SE(a)
    };
    var V6d = function(a) {
      var b = a.H.Wj();
      b && (a.H.isSelected(b) ? a.H.Xf(b, !1) : (a.H.SE(b), a.H.Fs(b)))
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywo");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw0");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.A7d = function(a, b) {
      a.ta = b;
      if (a.ha) {
        b = a.ha;
        a = a.ta;
        var c = _.oca(a);
        c.KI = b;
        _.pca(c);
        _.tca(a)
      }
    };
    _.B7d = function(a) {
      a.prototype[_.$Aa] = !0;
      _.Vq(a)
    };
    _.kw = function(a, b) {
      _.Eq.call(this, a.get(_.rn).Ia());
      this.Fa = a;
      this.ld = b || ""
    };
    _.C(_.kw, _.Eq);
    _.g = _.kw.prototype;
    _.g.Va = function(a) {
      _.Om(this.Da(), a)
    };
    _.g.Ka = function() {
      _.kw.Qa.Ka.call(this);
      this.Va(!1)
    };
    _.g.toString = function() {
      return "[" + _.wja(this.constructor) + " type:" + this.Hg() + "]"
    };
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.mb = function() {
      var a = this.Da();
      this.gD && a && _.dk(a);
      _.kw.Qa.mb.call(this)
    };
    _.g.vM = function() {
      return this.ld
    };
    _.g.Hg = _.uf;
    _.g.nR = function() {
      return null
    };
    _.g.WR = function() {};
    _.g.Yi = function() {
      return this
    };
    _.g.kB = function() {
      return !1
    };
    _.g.Ov = function() {
      return !1
    };
    _.g.deactivate = _.uf;
    _.g.activate = _.uf;
    _.g.bma = function() {
      return !0
    };
    _.g.NM = _.uf;
    _.g.reload = _.uf;
    _.R("sywt");
    _.C7d = function(a) {
      var b = a.AW;
      return (0, _.T)('<div id="' + _.X(a.Tv) + '" role="main" tabindex="-1" class="' + _.X("a-S") + " " + _.X("a-s-tb-pa") + '">' + _.U(null != b ? b : "") + "</div>")
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywu");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywy");
    _.w6d = function() {
      this.H = !1
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywa");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Emd = function(a, b) {
      a.left = Math.min(a.left, b.left);
      a.top = Math.min(a.top, b.top);
      a.right = Math.max(a.right, b.right);
      a.bottom = Math.max(a.bottom, b.bottom)
    };
    _.Fmd = function(a, b) {
      _.Jc(a, b, void 0)
    };
    _.TS = function(a, b, c) {
      _.Gmd.listen(b, c, void 0, a.ua || a, a);
      return a
    };
    _.Hmd = function(a, b, c, d) {
      _.Gmd.listen(a, b, c, d)
    };
    _.R("sysq");
    var Imd, Jmd;
    Imd = function() {};
    _.Gmd = new Imd;
    Jmd = ["click", "keydown", "keyup"];
    Imd.prototype.listen = function(a, b, c, d, e) {
      var f = function(h) {
        var k = _.lka(b),
          m = _.hk(h.target) ? _.Aq(h.target) : null;
        "click" == h.type && _.yj(h) ? k.call(d, h) : 13 != h.keyCode && 3 != h.keyCode || "keyup" == h.type ? 32 != h.keyCode || "keyup" != h.type || "button" != m && "tab" != m || (k.call(d, h), h.preventDefault()) : (h.type = "keypress", k.call(d, h))
      };
      f.wh = b;
      f.Or = d;
      e ? e.listen(a, Jmd, f, c) : _.Bj(a, Jmd, f, c)
    };
    Imd.prototype.Yc = function(a, b, c, d, e) {
      for (var f, h = 0; f = Jmd[h]; h++) {
        var k = a;
        var m = f;
        var n = !!c;
        m = _.zj(k) ? k.ER(m, n) : k ? (k = _.Cj(k)) ? k.ER(m, n) : [] : [];
        for (k = 0; n = m[k]; k++) {
          var r = n.listener;
          if (r.wh == b && r.Or == d) {
            e ? e.Yc(a, f, n.listener, c, d) : _.Dj(a, f, n.listener, c, d);
            break
          }
        }
      }
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywj");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywd");
    _.P6d = new _.uj("nd");
    var Q6d = function() {
      return (0, _.T)('<div class="' + _.X("a-zf-ja-j") + " " + _.X("a-s-tb-Fp-Ja") + '"><div class="' + _.X("a-gd-j") + " " + _.X("a-s-oe") + '" role="presentation" tabindex="-1"><div class="' + _.X("a-gd-Oa-Tl") + " " + _.X("a-Wa-ka") + '" data-target="selectionArea" role="presentation"><div class="' + _.X("a-gd-x") + '" role="presentation"></div><div class="' + _.X("a-dj-do-x") + '" role="presentation"></div></div></div></div>')
    };
    _.RX = function(a, b) {
      _.Eq.call(this, b);
      this.rb = a;
      this.Ja = new _.er;
      this.Ga = this.Na = this.Ie = this.H = null;
      this.wa = new _.Pk;
      this.wn = this.va = null;
      this.Of = new _.$q(!0);
      this.rr = [];
      this.ka = !0;
      this.ua = null
    };
    _.z(_.RX, _.Eq);
    _.RX.prototype.Sf = function(a) {
      _.Of(this.rr, a) || (this.rr.push(a), this.Wc && _.Xc(this.Xa(), a))
    };
    _.RX.prototype.zga = function(a) {
      _.Tf(this.rr, a) && this.Wc && _.Fb(this.Xa(), a)
    };
    _.RX.prototype.TZ = function() {
      return null
    };
    _.SX = function(a, b) {
      a.wn = b;
      if (b = a.Da()) b = a.AZ(b), null != a.wn ? _.gd(b, a.wn) : _.Lc(b, "label")
    };
    _.RX.prototype.AZ = function(a) {
      return a
    };
    _.RX.prototype.ta = function(a) {
      return _.Gq(this, a)
    };
    _.TX = function(a, b) {
      return a.Ia().Da(a.ta(b))
    };
    _.g = _.RX.prototype;
    _.g.gE = function() {
      return this.H
    };
    _.g.Jk = function() {
      return this.rb
    };
    _.g.ZU = function(a, b) {
      b = void 0 === b ? !0 : b;
      (a = _.TX(this, a)) && _.Em(a, this.H, b)
    };
    _.g.Ka = function() {
      var a = _.Yc(Q6d);
      this.Oc(a);
      this.H = this.Ia().Cb("a-gd-j", a);
      this.Ie = this.Ia().Cb("a-gd-x", a);
      this.Na = this.Ia().Cb("a-dj-do-x", a)
    };
    _.g.Sa = function() {
      _.Eq.prototype.Sa.call(this);
      0 < this.rr.length && _.km(this.Xa(), this.rr);
      _.SX(this, this.wn);
      this.wa.callback();
      this.Jk().ZD().observe(this.L5a, this, !0);
      this.Ra().listen(this, _.P6d, this.a6a);
      this.Ra().listen(this.Da(), "focus", this.focus)
    };
    _.g.ZG = function() {
      this.Ja.H(null)
    };
    _.g.jc = function() {
      return this.Ie
    };
    _.g.Va = function(a) {
      _.Om(this.Xa(), a);
      this.Of.set(a)
    };
    _.g.focus = function() {
      var a = this.Jk().Wj();
      a || (a = this.TZ(), this.Jk().Fs(a));
      R6d(this, !1, a)
    };
    _.g.L5a = function(a) {
      var b = this.Xa();
      null == a ? b.tabIndex = 0 : b.removeAttribute("tabIndex");
      this.hasFocus() && R6d(this, !1, a)
    };
    _.g.a6a = function(a) {
      var b = this.Jk(),
        c = b.Wj();
      b.ee().wk(a.key) && c == a.key && !this.va && (this.va = _.Hk(function() {
        this.va = null;
        R6d(this, !0, b.Wj())
      }, 0, this))
    };
    var R6d = function(a, b, c) {
      if (null != c) {
        if (c = _.TX(a, c)) c.tabIndex = 0, !a.ka && b || c.focus();
        _.Ik(a.va)
      } else a.Xa().focus()
    };
    _.RX.prototype.hasFocus = function() {
      return _.fc(this)
    };
    _.RX.prototype.bH = function() {};
    _.RX.prototype.Cca = function() {
      return !1
    };
    _.Vq(_.RX);
    _.S6d = Symbol("drive.view.api.LayoutDataView");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var Z6d, $6d;
    _.X6d = function(a, b) {
      for (var c = a.Cu(), d = 0; d < a.kc(); d++)
        if (c(a.get(d)) == b) return d;
      return -1
    };
    _.Y6d = function(a) {
      return a ? "Selected" : "Not selected"
    };
    Z6d = [1];
    $6d = function(a) {
      _.E(this, a, 0, -1, Z6d, null)
    };
    _.C($6d, _.D);
    $6d.prototype.fl = function() {
      return _.p(this, 1)
    };
    _.R("sywk");
    _.a7d = function(a) {
      this.H = a
    };
    _.a7d.prototype.QL = function() {
      var a = new _.IAd;
      _.JAd(a, this.H.Mz());
      _.MAd(a, this.H.ee().kc());
      if (0 < this.H.Mz()) {
        var b = [];
        this.H.qh().FL(_.df(this.ha, b), this);
        _.OAd(a, b);
        b = this.H.ee().Cu();
        for (var c = this.H.ee().Sg(), d = 0, e = 0; e < c.length; e++)
          if (this.H.isSelected(b(c[e]))) {
            d = e;
            break
          } _.KAd(a, d + 1);
        if (1 < this.H.Mz()) {
          e = d;
          for (var f = !1, h = 1, k = d + 1; k < c.length && h < this.H.Mz(); k++) this.H.isSelected(b(c[k])) ? (e = k, h++) : f = !0;
          _.LAd(a, e - d + 1);
          _.NAd(a, f)
        }
      }
      return a
    };
    _.a7d.prototype.vQ = function() {
      var a = new $6d,
        b = this.H.qh().Je();
      _.l(a, 1, b || []);
      return a
    };
    _.a7d.prototype.ha = function(a, b) {
      (b = this.H.ee().wk(b)) && "function" == typeof b.getItem ? a.push(_.GAd(b.getItem().Ec() || "")) : a.push(0)
    };
    _.U$a(_.a7d);
    var b7d = function(a) {
      this.ha = a;
      this.H = new Set
    };
    b7d.prototype.reset = function() {
      this.H.clear()
    };
    b7d.prototype.select = function(a) {
      var b = new Set;
      a = _.w(a);
      for (var c = a.next(); !c.done; c = a.next()) c = c.value, this.ha.Xf(c, !0), b.add(c), this.H["delete"](c);
      a = _.w(this.H);
      for (c = a.next(); !c.done; c = a.next()) this.ha.Xf(c.value, !1);
      this.H = b
    };
    var c7d = function(a, b) {
        this.ma = a;
        this.ka = b;
        this.H = null;
        this.ha = new b7d(a)
      },
      d7d = function(a, b) {
        var c = a.ma.Wj();
        if (null == c) a.ha.select([]);
        else {
          if (null == a.H || null == a.ka.wk(a.H)) a.H = c;
          var d = a.ka,
            e = a.H,
            f = [],
            h = d.wk(e),
            k = d.wk(c);
          if (h && k)
            if (e == c) f.push(e);
            else {
              c = d.kc();
              for (var m, n = 0; n < c; n++)
                if (e = d.get(n), e == h) {
                  m = k;
                  break
                } else if (e == k) {
                m = h;
                break
              }
              for (k = d.Cu(); n < c && (e = d.get(n), h = k(e), f.push(h), e != m); n++);
            } void 0 != b && b < f.length || a.ha.select(f)
        }
      };
    _.e7d = function(a) {
      this.ka = a;
      this.ha = new c7d(a, a.ee());
      this.H = new b7d(a)
    };
    _.e7d.prototype.reset = function() {
      this.H.reset();
      this.ha.ha.reset();
      this.ha.H = null;
      this.ka.Fs(null);
      this.ka.Ck()
    };
    _.e7d.prototype.Jk = function() {
      return this.ka
    };
    var VX = new _.Kn("Selection"),
      f7d = new _.S(VX, "l4mzl", 1196),
      g7d = new _.S(VX, "dlM1w", 1198),
      h7d = new _.S(VX, "WbBY0e", 1197),
      i7d = new _.S(VX, "Q9n96c", 1085),
      j7d = new _.S(VX, "AD5Bce", 1193),
      k7d = new _.S(VX, "mrL8sc", 1270),
      l7d = new _.S(VX, "XALYEf", 1194),
      m7d = new _.S(VX, "qkKihb", 1195);
    var n7d = function(a) {
      _.I.call(this);
      this.H = null;
      a.observe(this.ha, this, !0);
      a.Li(this)
    };
    _.z(n7d, _.I);
    n7d.prototype.ha = function() {
      this.H = (0, _.Cf)()
    };
    var o7d = function(a) {
      a = a.Lea;
      a = _.ry(new _.qy("{NUM_SELECTED_1,plural,=0{unused plural form}=1{1 item selected.}other{{NUM_SELECTED_2} items selected.}}"), {
        NUM_SELECTED_1: a,
        NUM_SELECTED_2: _.U(a)
      });
      return (0, _.T)(a)
    };
    var WX = function(a, b, c, d) {
      d = void 0 === d ? !1 : d;
      _.I.call(this);
      this.Fa = a;
      this.ka = a.get(_.Ze);
      this.ta = _.ta(a, _.cn);
      this.Ua = _.ta(a, _.gb);
      this.Ja = b;
      this.wa = _.ta(a, _.Jb);
      this.Pb = d;
      this.H = b.Jk();
      this.rb = new _.a7d(this.H);
      this.ua = this.H.ee();
      this.ha = b.ha;
      this.Pa = _.ta(a, _.Na);
      this.Na = c;
      this.Ea = !1;
      this.Ga = new n7d(this.H.ZD());
      this.Ta(this.Ga);
      this.va = this.Ca = this.ma = null;
      p7d(this)
    };
    _.z(WX, _.I);
    var p7d = function(a) {
      a.H.N$().listen(a.Bb, a);
      a.H.O$().listen(a.Db, a);
      a.H.Aqa().listen(function(b) {
        var c = a.ha.H;
        c == b.Ica && (a.ha.H = b.KT, c != b.Ywa && d7d(a.ha))
      }, a);
      a.H.zqa().listen(function(b) {
        var c;
        if ((c = a.ha.H == b.Ica) && !(c = null == b.KT)) {
          c = b.Wo;
          var d = b.from,
            e = _.X6d(a.ua, b.KT),
            f = Math.max(d, e);
          c = !(c >= Math.min(d, e) && c <= f)
        }
        c && (a.ha.H = b.KT, d7d(a.ha))
      }, a);
      a.H.Yqa().observe(a.Gb.bind(a), a)
    };
    WX.prototype.mb = function() {
      this.H.ee().Zu(this);
      this.H.O$().wl(this);
      this.H.N$().wl(this);
      _.I.prototype.mb.call(this)
    };
    var q7d = function(a, b) {
      b = void 0 === b ? !1 : b;
      a.ka.Md(a.Fa, f7d);
      var c = a.H.kH().get();
      a.H.Ck();
      a.ha.ha.reset();
      var d = a.H.Wj();
      a.ha.H = d;
      (c || !b) && a.ta && a.ta.speak("All selections cleared", 1)
    };
    WX.prototype.Bb = function(a) {
      var b = this.ha.H;
      if (b) {
        var c = this.H.ee();
        b = _.X6d(c, b);
        0 <= b && b != a.Wo && (a = b < a.from && a.Wo > a.from ? c.getKey(c.get(a.from - 1)) : b > a.from && a.Wo < a.from ? c.getKey(c.get(a.from + 1)) : c.getKey(c.get(a.from)), this.H.Fs(a))
      }
    };
    WX.prototype.Db = function(a) {
      var b = this.ha.H;
      if (b) {
        var c = this.H.ee();
        b = _.X6d(c, b);
        0 <= b && (a = b < a ? c.getKey(c.get(a - 1)) : c.getKey(c.get(a)), this.H.Fs(a))
      }
    };
    var u7d = function(a, b, c) {
      c.is(_.Pw) ? 1 == a.H.Mz() && a.H.isSelected(b) ? a.ma ? (_.Ik(a.ma), a.ma = null) : a.ma = _.Hk(a.$a, 500, a) : (r7d(a, b), a.ma = _.Hk(function() {
        this.ma = null
      }, 500, a), a.Ua && _.F(a.Ua, 37, !1) && a.Fa.Jc(_.iTa, !0).tb(function(d) {
        d.$a(b)
      })) : c.is(_.HUa) ? s7d(a, b) : c.is(_.GUa) && t7d(a, b, void 0)
    };
    WX.prototype.$a = function() {
      this.ka.Md(this.Fa, k7d);
      this.ma = null
    };
    var y7d = function(a, b) {
        switch (b) {
          case _.Reb:
            return q7d(a), !0;
          case _.Efb:
            return v7d(a), !0;
          case _.Ffb:
            return w7d(a), !0;
          default:
            return (b = _.UX.get(b)) ? x7d(a, b) : !1
        }
      },
      x7d = function(a, b, c) {
        var d = a.H.Wj();
        var e = d ? (e = a.Na.eM(d, b.direction)) || d : 0 == a.ua.kc() ? null : a.ua.getKey(a.ua.get(0));
        null != e && (b.hv ? (b = e, a.ka.Md(a.Fa, i7d), a.H.Fs(b)) : b.extend ? t7d(a, e, c) : r7d(a, e));
        return !0
      },
      r7d = function(a, b) {
        var c = _.Bu(a.ka, a.Fa, j7d);
        a.H.SE(b);
        a.H.Fs(b);
        a.ha.ha.reset();
        a.ha.H = b;
        z7d(a, c);
        a.ka.H(c)
      },
      v7d = function(a) {
        var b = _.Bu(a.ka,
          a.Fa, l7d);
        a.H.Nw();
        a.ha.ha.reset();
        z7d(a, b);
        a.ka.H(b);
        a.ta && a.ta.speak("All visible items selected", void 0);
        a.Pa && _.F(a.Pa, 110, !1) && (b = a.H.Mz(), 0 < b && a.wa && (a.va = a.wa.H(new _.mw(new _.lw(o7d, {
          Lea: b
        })))))
      };
    WX.prototype.Gb = function() {
      this.va && this.wa && (this.wa.ha(this.va), this.va = null)
    };
    var w7d = function(a) {
        var b = a.H.Wj();
        b && s7d(a, b)
      },
      s7d = function(a, b) {
        var c = _.Bu(a.ka, a.Fa, m7d),
          d = !a.H.isSelected(b);
        _.jD.Ab();
        var e;
        (e = !_.Kh || b != a.H.Wj()) || (e = a.Ga, e = 100 > Date.now() - e.H);
        e || a.Pb || a.ta && a.ta.speak(_.Y6d(d), void 0);
        a.H.Xf(b, d);
        a.H.Fs(b);
        a.ha.ha.reset();
        a.ha.H = b;
        z7d(a, c);
        a.ka.H(c)
      },
      t7d = function(a, b, c) {
        var d = _.Bu(a.ka, a.Fa, l7d);
        a.H.Fs(b);
        d7d(a.ha, c);
        z7d(a, d);
        a.ka.H(d)
      },
      z7d = function(a, b) {
        if (a = a.rb.QL()) b = b.H, a && (b = _.qt(b), _.H(b, 3, a))
      };
    _.XX = function(a, b, c, d) {
      _.I.call(this);
      this.H = new WX(a, b, c, d);
      this.Ta(this.H)
    };
    _.C(_.XX, _.I);
    _.g = _.XX.prototype;
    _.g.gL = function(a) {
      q7d(this.H, a)
    };
    _.g.hL = function(a, b) {
      u7d(this.H, a, b)
    };
    _.g.H9 = function(a, b) {
      var c = this.H;
      _.Reb.In(a, b) ? (q7d(c), c = !0) : _.Efb.In(a, b) ? (v7d(c), c = !0) : _.Ffb.In(a, b) ? (w7d(c), c = !0) : c = (a = _.T6d(a, b)) ? x7d(c, a, void 0) : !1;
      return c
    };
    _.g.PY = function(a) {
      return y7d(this.H, a)
    };
    _.g.xBa = function() {
      return !0
    };
    _.g.uoa = function(a) {
      var b = this.H;
      if ("f" == a.status) b.Ea && (b.ka.Md(b.Fa, g7d, b.Ca), b.Ea = !1, b.Ca = null), b.Ja.H.reset();
      else {
        if ("n" == a.status) {
          var c = _.Bu(b.ka, b.Fa, h7d);
          b.Ca = c
        }
        b.Ja.H.select(b.Na.wR(a.Ama));
        b.Ea = !0;
        c && (z7d(b, c), b.ka.H(c))
      }
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw1");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syws");
    _.ZX = function(a, b) {
      a = new _.Ln(a);
      _.kw.call(this, a, b.caption);
      this.Ta(a);
      this.Yo = a.get(_.Wq);
      this.Iq = a.get(_.Cw);
      this.Af = a.get(_.bc);
      this.Vr = b.kj;
      this.Ga = new _.Pk;
      this.Of = new _.$q(!1);
      this.Jd = new _.$q(!1);
      this.mf = b.Nj ? b.Nj : null;
      _.YX(this, 1);
      (b = this.ky()) && _.A7d(b.Nm, this.getId());
      this.lc = this.Tg = this.Ea = this.Ja = null;
      _.rj(this, this.Qya.bind(this));
      _.rj(this, function() {}.bind(this));
      new _.$q(!1)
    };
    _.C(_.ZX, _.kw);
    _.B7d(_.ZX);
    _.g = _.ZX.prototype;
    _.g.Ka = function() {
      this.Oc(_.Yc(_.C7d, {
        Tv: this.getId()
      }));
      this.Va(!1);
      var a = _.zTa((new _.Px).wg(_.G7d(this)), this.getContent()).wg(H7d(this));
      this.ub(a, !0);
      _.Xc(a.Xa(), "a-S-x-j")
    };
    _.g.Sa = function() {
      _.ZX.Qa.Sa.call(this);
      this.Yo.H(this)
    };
    _.g.kB = function(a) {
      (a = _.ZX.Qa.kB.call(this, a)) || this.Qya();
      return a
    };
    _.g.Qya = function() {
      var a = this.zt();
      a && -1 != _.ed(this, a.wa()) && this.removeChild(a.wa(), !1)
    };
    _.g.Va = function(a) {
      _.ZX.Qa.Va.call(this, a);
      this.Of.set(a)
    };
    _.g.isVisible = function() {
      return this.Of.get()
    };
    _.g.DR = function() {
      return null
    };
    _.g.focus = function() {};
    _.g.hasFocus = function() {
      return !1
    };
    _.g.activate = function() {
      _.ZX.Qa.activate.call(this);
      _.YX(this, 5);
      this.Jd.set(!0);
      this.Ga.callback()
    };
    _.g.deactivate = function() {
      _.ZX.Qa.deactivate.call(this);
      this.Jd.set(!1);
      this.Ga.H && (this.Ga = new _.Pk)
    };
    _.g.rf = function() {
      return this.Jd.get()
    };
    _.g.Qpa = function() {
      return this.Jd
    };
    _.G7d = function(a) {
      a.Ja || (a.Ja = a.Pma(), a.Ta(a.Ja));
      return a.Ja
    };
    _.ZX.prototype.Pma = function() {
      return new _.vw(this.Ia())
    };
    var H7d = function(a) {
      a.Ea || (a.Ea = a.zG(), a.Ra().listen(a.Ea, "od", a.csa), a.Ta(a.Ea));
      return a.Ea
    };
    _.g = _.ZX.prototype;
    _.g.zG = function() {
      return new _.vw(this.Ia())
    };
    _.g.csa = _.uf;
    _.g.getContent = function() {
      this.Tg || (this.Tg = this.Xva(), this.Ta(this.Tg));
      return this.Tg
    };
    _.g.Xva = function() {
      return new _.vw(this.Ia())
    };
    _.g.Ju = function() {
      return null
    };
    _.g.zt = function() {
      this.lc || (this.lc = this.zda());
      return this.lc
    };
    _.g.zda = function() {
      return null
    };
    _.g.mCa = function() {
      return this.iQ().then()
    };
    _.g.hA = function() {
      return _.Uk()
    };
    _.g.Uy = function() {
      return this.hA().then()
    };
    _.g.Xj = function() {
      return null
    };
    _.g.Hg = function() {
      return this.Vr
    };
    _.g.ky = function() {
      var a = null;
      null != this.mf && (a = this.Af.H[this.mf]);
      return a
    };
    _.YX = function(a, b) {
      var c = a.ky();
      c && !c.Nm.Er(b) && _.uca(a.Af, c.id, b)
    };
    _.ZX.prototype.Yva = function() {
      return 0
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywp");
    _.I7d = function(a, b) {
      _.qr.call(this);
      this.H = new _.Nx;
      this.H.observe(this.G1.bind(this), this.I1.bind(this), this.Iea.bind(this), this);
      this.ua = a;
      this.ma = b;
      this.ma.observe(this.o6a.bind(this), this.p6a.bind(this), this, !0);
      this.ua.observe(this.Q6a.bind(this), this.R6a.bind(this), this.S6a.bind(this), this)
    };
    _.z(_.I7d, _.qr);
    _.g = _.I7d.prototype;
    _.g.o6a = function(a) {
      this.H.set(a, this.ua.get(a))
    };
    _.g.p6a = function(a) {
      this.H.set(a, null)
    };
    _.g.Q6a = function(a) {
      this.ma.has(a) ? this.H.set(a, this.ua.get(a)) : this.H.set(a, null)
    };
    _.g.R6a = function(a) {
      this.H.set(a, null)
    };
    _.g.S6a = function(a, b) {
      this.ma.has(a) && this.H.set(a, b)
    };
    _.g.kc = function() {
      return this.H.kc()
    };
    _.g.Om = function() {
      return this.H.Om()
    };
    _.g.RE = function() {
      return this.H.RE()
    };
    _.g.Je = function() {
      return this.H.Je()
    };
    _.g.zN = function(a) {
      return this.H.zN(a)
    };
    _.g.get = function(a) {
      return this.H.get(a)
    };
    _.g.AN = function() {
      return this.H.AN()
    };
    _.J7d = function(a, b, c, d, e) {
      _.I.call(this);
      var f = this;
      this.Ja = a;
      this.ka = b;
      this.H = c;
      this.wa = e;
      this.ha = d;
      this.ta = new _.I7d(this.wa.hB(), this.H.getSelection());
      this.Ga = new _.yD(this.H.getSelection().Bu());
      this.ua = new _.er;
      this.ka.iR().listen(function(h) {
        h.region == f.ha && f.ua.H(h)
      }, this);
      this.va = new _.er;
      this.ka.TL().listen(function(h) {
        h.region == f.ha && f.va.H(h.index)
      }, this);
      this.Ea = new _.er;
      this.ka.gM().listen(function(h) {
        h.region == f.ha && f.Ea.H(h)
      }, this);
      this.Ca = new _.er;
      this.ka.fM().listen(function(h) {
        h.region ==
          f.ha && f.Ca.H(h)
      }, this);
      this.ma = new _.$q(null)
    };
    _.z(_.J7d, _.I);
    _.g = _.J7d.prototype;
    _.g.caa = function(a) {
      var b = this;
      return new _.go([this.ZD()], function() {
        return b.ZD().get() == a
      })
    };
    _.g.cea = function(a) {
      return this.H.EN(a)
    };
    _.g.isSelected = function(a) {
      return this.H.getSelection().has(a)
    };
    _.g.Xf = function(a, b) {
      this.H.Xf(a, b)
    };
    _.g.ZD = function() {
      return this.ma
    };
    _.g.Wj = function() {
      return this.ma.get()
    };
    _.g.Fs = function(a) {
      var b = this;
      if (null == a) this.ma.set(null);
      else if (!this.ha.ha.has(a)) return;
      this.Ja.PB().some(function(c) {
        return c == b.ha
      }) && (this.ka.DA(this.ha), this.ka.xI(a), _.ar(this.ma, this.ka.SL(this.ha)))
    };
    _.g.SE = function(a) {
      this.H.GN(a)
    };
    _.g.Ck = function() {
      this.H.Ck()
    };
    _.g.Nw = function() {
      this.H.Nw()
    };
    _.g.qh = function() {
      return this.ta
    };
    _.g.RB = function() {
      return this.ta.Je()
    };
    _.g.kH = function() {
      return this.Ga
    };
    _.g.dea = function() {
      return this.H.FN()
    };
    _.g.Yqa = function() {
      return this.H.getSelection().Em()
    };
    _.g.Mz = function() {
      return this.H.getSelection().kc()
    };
    _.g.ee = function() {
      return this.wa
    };
    _.g.O$ = function() {
      return this.va
    };
    _.g.N$ = function() {
      return this.ua
    };
    _.g.Aqa = function() {
      return this.Ea
    };
    _.g.zqa = function() {
      return this.Ca
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywv");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywz");
    var $X = function(a, b, c, d) {
      _.zF.call(this, "a-bb-su", d);
      this.H = a;
      this.Na = b;
      this.Pa = c;
      this.state = new _.$q({
        Ama: new _.pm(0, 0, 0, 0),
        x0a: _.Pw,
        status: "s"
      });
      this.Ea = new _.Hj(0, 0);
      this.Ga = new _.Hj(0, 0);
      this.Ca = _.Pw;
      this.ma = this.ha = 0;
      this.wa = new _.Gk(200);
      this.Ta(this.wa);
      this.Ra().listen(this.wa, "tick", this.$a)
    };
    _.z($X, _.zF);
    $X.prototype.start = function(a) {
      var b = new _.Hj(a.clientX, a.clientY);
      this.Ca = _.Ow(a);
      this.Ea = K7d(this, b);
      a = this.Ia().Yb().documentElement;
      this.Ra().listen(a, "mousemove", this.rb);
      this.Ra().listen(a, "mouseup", this.Ja)
    };
    $X.prototype.rb = function(a) {
      var b = a.Ke;
      b instanceof MouseEvent && 0 == b.buttons ? this.Ja() : (this.Ga = new _.Hj(a.clientX, a.clientY), this.Ca = _.Ow(a), L7d(this))
    };
    var L7d = function(a) {
        var b = K7d(a, a.Ga),
          c = M7d(a, a.Ea),
          d = M7d(a, b);
        c = N7d(c, d);
        a.Wc || a.render();
        var e = a.Xa();
        e.style.left = c.left + "px";
        e.style.top = c.top + "px";
        e.style.width = c.width + "px";
        e.style.height = c.height + "px";
        a.Va(!0);
        a.ha = O7d(a.Na, b.x, a.H.clientWidth, a.H.scrollLeft);
        a.ma = O7d(a.Pa, b.y, a.H.clientHeight, a.H.scrollTop);
        0 != a.ha || 0 != a.ma ? a.wa.start() : a.wa.stop();
        b = "s" == a.state.get().status ? "n" : "u";
        d = N7d(P7d(a, a.Ea), d);
        a.state.set({
          Ama: d,
          x0a: a.Ca,
          status: b
        })
      },
      M7d = function(a, b) {
        return P7d(a, new _.Hj(_.Bi(b.x,
          a.H.scrollLeft, a.H.scrollLeft + a.H.offsetWidth), _.Bi(b.y, a.H.scrollTop, a.H.scrollTop + a.H.offsetHeight)))
      },
      K7d = function(a, b) {
        var c = a.H.getBoundingClientRect();
        return new _.Hj(b.x - c.left + a.H.scrollLeft, b.y - c.top + a.H.scrollTop)
      },
      P7d = function(a, b) {
        var c = a.H.getBoundingClientRect();
        return new _.Hj(b.x + c.left - a.H.scrollLeft, b.y + c.top - a.H.scrollTop)
      },
      N7d = function(a, b) {
        return new _.pm(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(a.x - b.x), Math.abs(a.y - b.y))
      };
    $X.prototype.Ja = function() {
      this.dispose()
    };
    var O7d = function(a, b, c, d) {
      if (!a) return 0;
      a = d + c;
      return b < d ? b - d : b > a ? b - a : 0
    };
    $X.prototype.$a = function() {
      var a = this.H,
        b = a.scrollLeft + this.ha,
        c = a.scrollTop + this.ma;
      0 >= b ? this.ha = b = 0 : b >= a.scrollWidth - a.clientWidth && (b = a.scrollWidth - a.clientWidth, this.ha = 0);
      0 >= c ? this.ma = c = 0 : c >= a.scrollHeight - a.clientHeight && (c = a.scrollHeight - a.clientHeight, this.ma = 0);
      0 == this.ha && 0 == this.ma && this.wa.stop();
      a.scrollLeft = b;
      a.scrollTop = c;
      L7d(this)
    };
    $X.prototype.mb = function() {
      this.Va(!1);
      var a = _.xg(this.state.get());
      a.status = "f";
      this.state.set(a);
      _.zF.prototype.mb.call(this)
    };
    var R7d = function(a, b, c) {
      this.H = a;
      this.ka = c || null;
      this.ta = b;
      this.ma = Q7d(this);
      this.ha = null
    };
    R7d.prototype.listen = function() {
      var a = this;
      this.H.observe(function() {
        S7d(a)
      }, function() {
        S7d(a)
      }, this)
    };
    R7d.prototype.Yc = function() {
      this.H.Zu(this)
    };
    var S7d = function(a) {
      null != a.ha && _.Ik(a.ha);
      a.ha = _.Hk(a.ua, a.ta, a)
    };
    R7d.prototype.ua = function() {
      this.ha = null;
      this.ma = Q7d(this)
    };
    var Q7d = function(a) {
      for (var b = {}, c = a.H.Sg(), d = null != a.ka ? Math.min(c.length, a.ka) : c.length, e = 0; e < d; e++) b[a.H.Cu()(c[e])] = e;
      return b
    };
    _.T7d = function(a, b, c, d, e, f, h) {
      this.Fa = a;
      this.Ga = a.get(_.Ze);
      this.va = a.get(_.Qa);
      this.ta = b;
      this.Ea = this.ta.ee();
      this.wa = c;
      this.ua = e;
      this.Ja = f;
      this.Ca = h;
      this.ma = !1;
      this.ha = null;
      this.ka = "";
      a = _.v(a.get(_.Na), 17, 0);
      b = null;
      0 < a && (b = new R7d(this.Ea, a, d));
      this.H = b
    };
    _.T7d.prototype.enable = function() {
      this.ma || (this.H && this.H.listen(), this.ma = !0)
    };
    _.T7d.prototype.disable = function() {
      this.ma || (this.H && this.H.Yc(), this.ma = !0)
    };
    var U7d = function(a, b) {
        a.ua().xBa() ? (_.sj(a.ha), a.ha = new $X(a.Ja(), !1, !0), a.ha.state.observe(a.BTa, a), a.ha.start(b), a.wa.H = !0) : a.Ga.Md(a.Fa, _.O3a)
      },
      V7d = function(a, b, c, d, e) {
        if (!_.xj(b, 0)) return 1;
        var f = a.ta.isSelected(c),
          h = _.Ow(b),
          k = !h.is(_.Pw),
          m = a.ka == c;
        if (f && !k && (e || m)) return e || (a.ka = ""), 1;
        e && !_.Tb(a.va) || a.ua().hL(c, h);
        !e || f || d || U7d(a, b);
        a.ka = e ? c : "";
        return 1
      };
    _.g = _.T7d.prototype;
    _.g.uba = function(a, b, c) {
      var d;
      if ((d = c == this.ta.dea()) && !(d = !this.H)) {
        var e = this.H;
        if (_.rg(e.ma) || null == e.ha) c = !1;
        else {
          d = e.ma[c];
          b: {
            for (var f = e.H.Sg(), h = null != e.ka ? Math.min(f.length, e.ka) : f.length, k = 0; k < h; k++)
              if (e.H.Cu()(f[k]) == c) {
                c = k;
                break b
              } c = null
          }
          c = null == c || d != c
        }
        d = !c
      }
      d && a.open(b)
    };
    _.g.M_ = function(a, b, c) {
      return V7d(this, a, b, c, !0)
    };
    _.g.$ra = function(a, b, c) {
      if (a.m1(b)) return 1;
      var d = V7d(this, b, c, !1, !1);
      return _.Pa(this.va) ? (this.uba(a, b, c), 1) : d
    };
    _.g.qba = function(a) {
      if (_.Pa(this.va)) {
        var b = this.ka == a;
        this.ka = "";
        if (b) return 0
      }
      a && this.ta.Fs(a);
      return 0
    };
    _.g.S_ = function(a) {
      this.ua().gL();
      _.xj(a, 0) && U7d(this, a);
      this.Ca();
      a.preventDefault()
    };
    _.g.BTa = function(a) {
      this.ua().uoa(a);
      "f" == a.status && (_.sj(this.ha), this.ha = null, this.wa.H = !1)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywh");
    _.zbe = function(a) {
      switch (a) {
        case 1:
          return 1;
        case 2:
          return 2;
        default:
          return 0
      }
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw6");
    _.CY = new _.O("xlkrF", "BbAowe", [_.zu]);
    _.Abe = new _.O("xJzIIb", "HW2wOe", [_.CY]);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.bpd = function(a) {
      null === a.Pb && (a.Pb = new _.go([_.lbb(a), a.ha], a.H.bind(a)));
      return a.Pb
    };
    _.R("sysv");
    var cpd = function(a) {
      var b = a.Ybb;
      a = a.uid;
      a = '<div class="' + _.X("g-ia") + '" role="alertdialog"' + (a ? ' aria-describedby="' + _.X(a) + '"' : "") + '><div class="' + _.X("g-ia-x-Lg") + '"' + (a ? ' id="' + _.X(a) + '"' : "") + "></div>";
      b && (a += '<div class="' + _.X("g-ia-Qm-Lg") + " " + _.X("g-ia-Qm") + '" aria-label="', a += _.As("Close"), a += '" role="button" tabindex=0></div>');
      a += '<div class="' + _.X("g-ia-aa-Lg") + " " + _.X("g-ia-aa") + '"><div class="' + _.X("g-ia-Fd") + '"></div><div class="' + _.X("g-ia-Jd") + '"></div></div></div>';
      return (0, _.T)(a)
    };
    _.fT = function(a) {
      _.Eq.call(this, a);
      this.ma = new _.BWa("g-ia", !0);
      this.ka = new _.eF;
      this.$a = []
    };
    _.C(_.fT, _.Eq);
    _.g = _.fT.prototype;
    _.g.rJ = !0;
    _.g.ku = !1;
    _.g.setAnchorElement = function(a) {
      this.ma.setAnchorElement(a);
      this.Qd()
    };
    _.g.setPosition = function(a, b, c, d, e) {
      this.ma.uX = !!e;
      this.ma.setPosition(a, b, c, d)
    };
    _.g.Sf = function(a) {
      this.$a.push(a)
    };
    _.g.setContent = function(a) {
      this.Tg = a;
      dpd(this, a)
    };
    var dpd = function(a, b) {
      a = a.jc();
      b && a && ("string" === typeof b ? _.mk(a, b) : b instanceof _.Xn ? (b = b.nr(), _.hh(a, b)) : b instanceof _.Yg ? _.hh(a, b) : (_.hh(a, _.eh), a.appendChild(b)))
    };
    _.g = _.fT.prototype;
    _.g.Pg = function(a) {
      this.ku = a
    };
    _.g.jc = function() {
      return this.Mb("g-ia-x-Lg")
    };
    _.g.Ka = function() {
      this.Oc(_.Yc(cpd, {
        Ybb: this.rJ,
        uid: "bubble-" + _.Af(this)
      }, void 0, this.Ia()));
      dpd(this, this.Tg);
      _.Om(this.Da(), !1);
      this.ka.EH(this.Da());
      _.Bha || this.ka.zV(_.tZa(this.Da(), .218), _.uZa(this.Da(), .218));
      _.km(this.Da(), this.$a)
    };
    _.g.Sa = function() {
      _.fT.Qa.Sa.call(this);
      this.Ra().listen(this.ka, ["beforeshow", "show", "beforehide", "hide"], this.DVa);
      this.rJ && _.TS(this.Ra(), this.Mb("g-ia-Qm-Lg"), _.df(this.Va, !1));
      var a = this.Da(),
        b = this.Mb("g-ia-aa-Lg"),
        c = this.ma;
      c.H = a;
      c.ma = b;
      this.ka.setPosition(this.ma)
    };
    _.g.Va = function(a) {
      this.ka.Va(a)
    };
    _.g.isVisible = function() {
      return this.ka.isVisible()
    };
    _.g.Qd = function() {
      this.isVisible() && this.ka.Qd()
    };
    _.g.mb = function() {
      this.ka.dispose();
      delete this.ka;
      _.fT.Qa.mb.call(this)
    };
    _.g.cua = function() {
      _.Fm(this.Da());
      return !1
    };
    _.g.DVa = function(a) {
      if ("show" == a.type || "hide" == a.type) {
        var b = this.Ra(),
          c = this.Ia();
        c = _.Fh ? c.getWindow() : c.Yb();
        "show" == a.type ? b.listen(c, "scroll", this.cua) : b.Yc(c, "scroll", this.cua)
      }
      b = this.dispatchEvent(a.type);
      this.ku && "hide" == a.type && this.dispose();
      return b
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var W7d, a8d;
    W7d = function(a, b, c) {
      for (var d = 0, e = a.kc(), f; d < e;) {
        var h = d + e >> 1,
          k = b.call(c, a.get(h), h, a);
        0 < k ? d = h + 1 : (e = h, f = !k)
      }
      return f ? d : ~d
    };
    _.X7d = function(a, b) {
      var c = 0,
        d = 0;
      if (b = _.TX(a.Dl, b)) d = _.Bm(b), b = _.Km(b), c = d.x, c = a.zk() ? c + (b.width - 2) : c + 2, d = d.y + b.height;
      a = _.Cm(a.getContent().Xa());
      c < a.left ? c = a.left : c > a.right && (c = a.right);
      d < a.top ? d = a.top : d > a.bottom && (d = a.bottom);
      return new _.Hj(c, d)
    };
    _.Y7d = function(a) {
      a.Ga || (a.Ga = new _.Hsb(_.Isb(a.H)));
      return a.Ga
    };
    _.Z7d = function(a) {
      _.K.call(this, a)
    };
    _.z(_.Z7d, _.K);
    _.$7d = function(a, b) {
      var c = a.Jb;
      a = a.text;
      return (0, _.T)('<div class="' + _.X("a-s-tb-pa") + " " + _.X("a-zf-ja-j") + '" data-target="uploadTarget" tabindex="0"><div class="' + _.X("cc-oc-ab") + '" aria-label="' + _.X(c) + '"><div class="' + _.X("cc-oc-oa") + '" aria-hidden="true"><div class="' + _.X("cc-oc-c-j") + '">' + _.jd({
        variant: "offline",
        hb: !0
      }, b) + '</div><div class="' + _.X("Wa-ka-oa-r") + " " + _.X("Wa-ka-oa-Zk") + " " + _.X("cc-oc-r") + '"><div class="' + _.X("Wa-ka-oa-qc-V") + '">' + _.U(a) + "</div></div></div></div></div>")
    };
    a8d = function(a, b, c) {
      a = "" + _.$7d({
        Jb: "No files in this folder. You're offline, so some items may not be available",
        text: "You're offline, so some items may not be available"
      }, c || b);
      return (0, _.T)(a)
    };
    _.R("sywe");
    _.b8d = new _.uj("change-sort");
    _.c8d = new _.uj("change-date-column");
    var d8d = function(a, b) {
        this.H = a;
        this.dh = b
      },
      g8d = function(a, b) {
        var c = e8d(a, b);
        if (0 > c) return [];
        for (var d = [], e = a.H.Cu(), f = a.H.kc(); c < f; c++) {
          var h = e(a.H.get(c)),
            k = _.TX(a.dh, h);
          k = f8d(k);
          if (!(k.top <= b.top + b.height && b.top <= k.top + k.height)) break;
          k.left <= b.left + b.width && b.left <= k.left + k.width && d.push(h)
        }
        return d
      },
      e8d = function(a, b) {
        var c = a.H.Cu(),
          d = b.top,
          e = b.top + b.height;
        b = function(f) {
          f = c(f);
          f = _.TX(this.dh, f);
          if (!f) return -1;
          f = f8d(f);
          return f.top > e ? -1 : f.top + f.height < d ? 1 : 0
        }.bind(a);
        return W7d(a.H, b, a)
      },
      f8d = function(a) {
        a =
          a.getBoundingClientRect();
        return new _.pm(a.left, a.top, a.width, a.height)
      };
    var h8d = function(a, b) {
      this.H = a;
      this.ha = new d8d(a, b)
    };
    h8d.prototype.eM = function(a, b) {
      a = _.X6d(this.H, a);
      if (0 > a) return null;
      switch (b) {
        case "u":
          return i8d(this, a - 1);
        case "d":
          return i8d(this, a + 1)
      }
      return null
    };
    h8d.prototype.wR = function(a) {
      return g8d(this.ha, a)
    };
    var i8d = function(a, b) {
      return 0 <= b && b < a.H.kc() ? a.H.getKey(a.H.get(b)) : null
    };
    var j8d = function(a, b, c) {
      var d = c.Cca(),
        e = b.Jk().ee();
      _.XX.call(this, a, b, new h8d(e, c), d)
    };
    _.z(j8d, _.XX);
    _.aY = function(a, b, c, d) {
      _.yw.call(this, a, c, b, d)
    };
    _.z(_.aY, _.yw);
    _.aY.prototype.focus = function() {
      this.Xa().focus()
    };
    _.aY.prototype.hasFocus = function() {
      return _.fc(this)
    };
    _.aY.prototype.Ka = function() {
      _.yw.prototype.Ka.call(this);
      _.Xc(this.Xa(), "a-ab-Mj")
    };
    var k8d = function(a, b) {
      this.H = a;
      this.dh = b;
      this.ha = b.zk();
      this.ka = new d8d(a, b)
    };
    k8d.prototype.eM = function(a, b) {
      a = _.X6d(this.H, a);
      if (0 > a) return null;
      switch (b) {
        case "l":
          return l8d(this, a + (this.ha ? 1 : -1));
        case "r":
          return l8d(this, a + (this.ha ? -1 : 1));
        case "u":
          return m8d(this, a, -1);
        case "d":
          return m8d(this, a, 1)
      }
      return null
    };
    k8d.prototype.wR = function(a) {
      return g8d(this.ka, a)
    };
    var m8d = function(a, b, c) {
        for (var d = n8d(a, b), e = a.H.kc(), f = [], h = []; 0 <= b && b < e; b += c) {
          var k = n8d(a, b);
          if (k.y != d.y) {
            if (0 < h.length && k.y != h[0].y) break;
            f.push(b);
            h.push(k)
          }
        }
        c = null;
        e = Number.MAX_VALUE;
        for (b = 0; b < f.length; b++)
          if (k = Math.abs(h[b].x - d.x), k < e) c = f[b], e = k;
          else break;
        return null != c ? l8d(a, c) : null
      },
      n8d = function(a, b) {
        b = l8d(a, b);
        a = _.TX(a.dh, b).getBoundingClientRect();
        return new _.Hj((a.left + a.right) / 2, a.top)
      },
      l8d = function(a, b) {
        return 0 <= b && b < a.H.kc() ? a.H.getKey(a.H.get(b)) : null
      };
    var o8d = function(a, b, c) {
      var d = c.Cca(),
        e = b.Jk().ee();
      c = new k8d(e, c);
      _.XX.call(this, a, b, c, d)
    };
    _.C(o8d, _.XX);
    var p8d = function(a) {
      this.H = a
    };
    p8d.prototype.enable = function() {
      for (var a = 0; a < this.H.length; a++) this.H[a].enable()
    };
    p8d.prototype.disable = function() {
      for (var a = 0; a < this.H.length; a++) this.H[a].disable()
    };
    p8d.prototype.Gp = function(a) {
      for (var b = 0; b < this.H.length; b++)
        if (this.H[b].Gp(a)) return !0;
      return !1
    };
    var q8d = function(a, b) {
      _.zF.call(this, a, b);
      this.H = null
    };
    _.z(q8d, _.zF);
    q8d.prototype.focus = function() {
      var a = this.H;
      a && a.focus()
    };
    q8d.prototype.hasFocus = function() {
      var a = this.H;
      return null != a && a.hasFocus()
    };
    _.Vq(q8d);
    var r8d = function(a, b, c) {
      _.I.call(this);
      var d = this;
      this.H = a;
      this.wa = b;
      this.va = b.ke();
      this.ua = c || new _.$q(1);
      this.ha = null;
      this.ta = new _.go([this.H.lF, this.H.H, this.H.$X, this.H.visible, this.ua], this.Ca.bind(this));
      [this.ta, this.va.H].forEach(function(e) {
        e.listen(function() {
          return d.ka()
        }, d)
      });
      this.ka()
    };
    _.z(r8d, _.I);
    r8d.prototype.Ca = function() {
      if (!this.H.visible.get() || 0 === this.H.$X.get()) return !1;
      var a = this.H.H.get(),
        b = this.H.$X.get(),
        c = this.H.lF.get();
      return 0 < a && (b <= a || 1 >= Math.abs(b - a)) ? !0 : 0 < c ? b - c <= (1 + this.ua.get()) * a : !1
    };
    r8d.prototype.ka = function() {
      this.ta.get() && !this.ha && this.va.H.get() && (this.ha = this.wa.GE(), this.ha.then(this.ma.bind(this), this.ma.bind(this)))
    };
    r8d.prototype.ma = function() {
      this.ha = null;
      _.Hk(this.ka, 0, this)
    };
    var s8d = function(a, b, c, d) {
      this.lF = a.lF;
      this.H = b;
      this.$X = c;
      this.visible = d
    };
    var t8d = function(a, b, c) {
      this.H = a;
      this.ka = b;
      this.ma = c
    };
    t8d.prototype.ha = function(a) {
      var b = a.H,
        c = new _.Ky(this.ka, a.Of);
      _.ho(c, a);
      var d = new _.go([c, this.H], function() {
        return a.Xa().offsetHeight
      });
      _.ho(d, a);
      var e = new _.Yfb([a.Ja, c, this.H], function() {
        return b.scrollHeight
      });
      _.ho(e, a);
      c = new s8d(_.Y7d(a), d, e, c);
      c = new r8d(c, this.ma);
      a.Ta(c)
    };
    _.bY = function(a, b, c, d, e, f) {
      _.ZX.call(this, a, b);
      var h = this;
      this.wd = d;
      this.Ca = f || new _.er;
      this.Mj = _.Pa(a.get(_.Qa));
      d = c.kL();
      this.Mj && b.Xg && !_.Of(b.Xg, d.rm) && (d = this.wd);
      this.Be = d;
      d = this.Oa();
      d.registerService(_.Xq, this);
      f = a.get(_.Pe);
      f = new _.SVa(f.ha);
      d.registerService(_.Pe, f);
      this.Pb = d.get(_.Jb);
      this.Sn = a.get(_.HXa);
      this.Yp = d.get(_.Oba);
      this.Un = a.get(_.dA);
      this.$a = a.get(_.DXa);
      this.Wn = a.get(_.$n);
      this.Re = b.ai || null;
      this.H = c;
      this.ha = new _.rt;
      this.Ta(this.ha);
      this.ha.Cg(this);
      _.Ib(this.ha, 3);
      this.wa =
        null;
      _.rj(this, function() {
        h.wa && _.q.clearTimeout(h.wa)
      });
      this.va = new _.$q(0);
      a = new Map;
      a.set(this.Ix(), this.H.getData());
      a = new _.cab(a, this.Ix());
      this.Vn = new _.QB([a]);
      this.ta = new _.J7d(d.get(_.Lr), d.get(_.Hr), d.get(_.Mr), a, this.H.getData());
      this.Ta(this.ta);
      this.Td = new _.a7d(this.ta);
      this.Ua = new _.e7d(this.ta);
      this.Bb = _.jg(function() {
        return h.Bz()
      });
      this.Zo = this.maa();
      this.Pf = new _.qo(null);
      this.ka = new _.$q("EmalEc");
      this.Tn = new _.go([this.Of, this.ka], this.aZa.bind(this));
      this.Na = u8d(e);
      this.Vc =
        e[0].Km();
      this.vj = new t8d(this.Ca, this.Tn, this.H.En());
      this.Db = new q8d("a-s-tb-pa");
      this.Ta(this.Db);
      this.qc = {};
      this.Nc = {};
      this.ma = this.Gb = this.Lf = this.Dl = null;
      this.Gd = -1
    };
    _.z(_.bY, _.ZX);
    _.bY.prototype.Vqa = function() {
      return this.Vn
    };
    _.bY.prototype.Xva = function() {
      var a = new _.Bw(this.ka, this.Ia());
      a.add(this.Db, "EmalEc");
      a.add(this.Zo, "vqBN5b");
      this.Bb().observe(this.$ab.bind(this, a), this, !0);
      return a
    };
    _.bY.prototype.BD = function() {
      return []
    };
    var v8d = function(a) {
      a.Gb || (a.Gb = new p8d(a.BD()));
      return a.Gb
    };
    _.g = _.bY.prototype;
    _.g.Va = function(a) {
      _.ZX.prototype.Va.call(this, a);
      if (a) {
        a = this.Cb("a-S-x-j");
        var b = this.ky();
        b ? (this.ma = this.$a.ria(this.getContent(), a, b.Nm), _.Rk(this.ma, function(c) {
          c instanceof _.Qk || v8d(this).enable()
        }.bind(this))) : (this.$a.Gia(), v8d(this).enable())
      } else v8d(this).disable()
    };
    _.g.aZa = function() {
      return this.isVisible() && "EmalEc" === this.ka.get()
    };
    _.g.Ka = function() {
      _.ZX.prototype.Ka.call(this);
      this.Un.ma(this)
    };
    _.g.Sa = function() {
      var a = this;
      _.ZX.prototype.Sa.call(this);
      this.iQ().Oe(this.nUa.bind(this), this.lsa.bind(this, 2));
      this.Ca.repeat([this.Wn.Lu(), this.ka, this.Of]);
      var b = this.zt();
      b && b.jy.listen(this.l3a.bind(this), this);
      this.Ca.listen(function() {
        a.Dl && a.Dl.bH()
      }, this);
      (b = this.ky()) && !b.Nm.Er(3) && this.H.CZ().listen(this.j3a.bind(this), this)
    };
    _.g.Ov = function(a) {
      _.ZX.prototype.Ov.call(this, a);
      a && this.MJ(a);
      (a = this.zt()) && a.Ov();
      this.Ua.reset()
    };
    _.g.$ab = function(a, b) {
      a.xga("xFQqWe");
      b && (a.add(b, "xFQqWe"), a = b.Xa(), _.Gsb(a, "neVct"))
    };
    _.g.j3a = function(a) {
      "zb" == a.type ? (w8d(this, this.H.getData().kc()), this.H.CZ().wl(this)) : _.YX(this, 3)
    };
    var w8d = function(a, b) {
      if (!a.ky().Nm.Er(4)) {
        var c = a.getId();
        c = _.oca(c);
        c.Hs = b;
        _.pca(c);
        _.YX(a, 4)
      }
    };
    _.g = _.bY.prototype;
    _.g.maa = function() {
      return new _.aY(a8d, this.Ia())
    };
    _.g.Jk = function() {
      return this.ta
    };
    _.g.yr = function() {
      return this.Lf
    };
    _.g.kg = function() {
      return this.H
    };
    _.g.Fm = function() {
      return this.H.getData()
    };
    _.g.nR = function() {
      return this.Bn()
    };
    _.g.Bn = function() {
      return {
        ai: this.Re,
        layout: this.va.get(),
        sort: this.Be,
        view: this.Hg()
      }
    };
    _.g.nf = function() {
      return this.Dl
    };
    _.g.Km = function() {
      return this.va.get()
    };
    _.g.voa = function() {
      return this.va
    };
    _.g.KE = function(a) {
      return this.Hg() == a.view && this.Be.Fb(a.sort || this.wd) && this.Re == a.ai
    };
    _.g.nqa = function(a) {
      return _.TX(this.Dl, a)
    };
    _.g.gE = function(a) {
      return this.Dl.gE(a)
    };
    _.g.nUa = function() {
      this.hA().H || (this.wa = _.q.setTimeout(this.k3a.bind(this), _.v(this.Yp, 3, 0)));
      this.Bb().observe(this.L4.bind(this), this);
      this.H.getData().Bu().observe(this.L4.bind(this), this);
      this.H.getData().Bu().Li(this);
      this.H.jL().observe(this.L4.bind(this), this);
      this.H.jL().Li(this);
      this.L4();
      var a = this.H.En().ke();
      a.H.observe(this.nW.bind(this), this);
      a.ha.observe(this.nW.bind(this), this);
      this.Pf.observe(this.nW.bind(this), this);
      this.nW();
      this.hA().Oe(this.DUa.bind(this), this.lsa.bind(this,
        40))
    };
    _.g.DUa = function() {
      _.q.clearTimeout(this.wa);
      _.Hk(this.N7.bind(this), 0)
    };
    _.g.k3a = function() {
      this.Pb.H(new _.qS("Data load timed out", "e", null, 1));
      this.N7();
      _.YX(this, 9);
      _.YX(this, 10)
    };
    _.g.lsa = function(a, b) {
      _.Ik(this.wa);
      if (this.ha) {
        var c;
        b instanceof Error ? c = b : b instanceof _.os ? c = b.error : c = Error("zl`" + b);
        b = c;
        c = _.Mb(_.Ob(new _.Pb(this.Oa()), "Could not load view"), 2);
        a && _.Nb(c, a);
        b && c.Rd(b);
        this.Pb.H(_.Lb(c));
        this.N7()
      }
    };
    _.g.N7 = function() {
      this.ha && (_.Ib(this.ha, 4), _.sj(this.ha), this.ha = null, this.dispatchEvent("m"))
    };
    var u8d = function(a) {
      var b = {};
      a.forEach(function(c) {
        b[c.Km()] = c
      });
      return b
    };
    _.g = _.bY.prototype;
    _.g.nW = function() {
      if (this.Dl) {
        var a = this.Dl.Na;
        _.Zj(a);
        var b = this.H.En().ke(),
          c = null;
        b.ha.get() ? c = _.Yc(_.Tx) : b.H.get() || (c = this.Pf.get());
        c && a.appendChild(c)
      }
    };
    _.g.WR = function(a) {
      this.ha && a.push(this.ha)
    };
    _.g.csa = function() {
      this.Ca.H(void 0)
    };
    _.g.MJ = function(a) {
      var b = a.layout || this.Vc;
      if (b != this.va.get()) {
        a = this.ky();
        (a = this.iQ().H && a && !(a.Nm.Er(3) && a.Nm.Er(4))) && _.YX(this, 3);
        var c = b,
          d = this.Na[c];
        d || (c = this.Vc, d = this.Na[c]);
        this.va.set(c);
        var e = this.qc[c];
        b = !!e;
        e || (e = d.create(this.H.getData(), this.ta, !0), d = this.vj, e.wa.tb((0, _.B)(d.ha, d, e)), x8d(this, e), this.qc[c] = e);
        this.Dl = e;
        e = this.Nc[c];
        if (!e) {
          a: if (this.Mj) {
            switch (this.Km()) {
              case 1:
                var f = new h8d(this.ta.ee(), this.Dl);
                break;
              case 2:
                f = new k8d(this.ta.ee(), this.Dl);
                break;
              default:
                this.Km()
            }
            e =
              new _.U6d(this.ta, f, this.Mj)
          } else switch (this.Km()) {
            case 1:
              e = new j8d(this.Oa(), this.Ua, this.Dl);
              break a;
            default:
              e = new o8d(this.Oa(), this.Ua, this.Dl)
          }
          this.Ta(e);this.Nc[c] = e
        }
        this.Lf = e;
        this.Ua.H.reset();
        f = this.Db;
        c = this.Dl;
        e = f.hasFocus();
        f.H && f.H.Va(!1);
        b ? c.Va(!0) : f.ub(c, !0);
        f.H = c;
        e && f.focus();
        this.dispatchEvent("pd");
        b || (b = this.Dl.Xa(), _.Gsb(b, "neVct"), this.nW());
        this.Ca.H(void 0);
        a && w8d(this, this.H.getData().kc())
      }
      a = this.DR();
      null != a && _.SX(this.Dl, a)
    };
    _.g.iQ = function() {
      return this.H.uY()
    };
    _.g.hA = function() {
      return this.H.hQ().ek()
    };
    _.g.L4 = function() {
      var a = this;
      _.Hk(function() {
        a.H.getData().Bu().get() ? "no_data_offline" == a.H.jL().get() ? _.y8d(a, "vqBN5b") : a.Bb().get() && _.y8d(a, "xFQqWe") : a.ka.set("EmalEc")
      }, 0)
    };
    _.y8d = function(a, b) {
      a.ma && !a.ma.H ? _.Rk(a.ma, a.ka.set.bind(a.ka, b)) : a.ka.set(b)
    };
    _.bY.prototype.highlight = function(a) {
      if (this.ta.ee().wk(a)) return this.yr().hL(a, new _.Nw), this.Dl && this.Dl.ZU(a), _.Uk();
      if (this.H.En().ke().H.get()) {
        var b = this.H.En().GE();
        b.then(this.highlight.bind(this, a));
        return b
      }
      return _.Wk(Error("Al`" + a))
    };
    _.bY.prototype.focus = function() {
      this.ma && !this.ma.H ? (this.$a.Dpa(), this.ma.tb(function(a) {
        "undefined" != typeof _.nEb && a instanceof _.nEb && a.H && a.view == this.getContent() && z8d(this)
      }.bind(this))) : z8d(this)
    };
    var z8d = function(a) {
      a.ha ? _.st(a.ha).then(function() {
        a.isVisible() && a.getContent().focus()
      }) : a.getContent().focus()
    };
    _.bY.prototype.hasFocus = function() {
      return this.ma && !this.ma.H ? this.$a.Rta() : this.getContent().hasFocus()
    };
    _.bY.prototype.Gp = function(a) {
      var b = !1,
        c = this.zt();
      switch (a) {
        case _.c4a:
          this.Na[2] && this.Na[1] && (A8d(this, a), this.Sn.ka(), b = !0);
          break;
        case _.R3a:
          this.focus();
          A8d(this, a);
          b = !0;
          break;
        case _.Q3a:
          c && (c.focus(), b = !0)
      }
      b || c && c.NM(a) || v8d(this).Gp(a)
    };
    var A8d = function(a, b) {
      var c = a.Oa().get(_.Ze);
      c.H(_.Bu(c, a.Oa(), b))
    };
    _.g = _.bY.prototype;
    _.g.nt = function() {
      var a = new _.ht;
      _.jt(a, 4);
      var b = _.it((new _.gt).ig(this.Dl.Xa().clientHeight), this.Dl.Xa().clientWidth);
      _.H(a, 2, b);
      b = _.it((new _.gt).ig(this.Dl.H.scrollHeight), this.Dl.H.scrollWidth);
      _.H(a, 3, b);
      _.l(a, 4, this.Dl.H.scrollTop);
      return a
    };
    _.g.QL = function() {
      return this.Td.QL()
    };
    _.g.vQ = function() {
      return this.Td.vQ()
    };
    _.g.En = function() {
      return this.H.En()
    };
    _.g.Yva = function() {
      return this.Dl.H.scrollTop
    };
    _.g.l3a = function(a) {
      var b = this.Xa(),
        c = "kxZRtc" == a,
        d = "cf3fJc" == a || "YH0yb" == a;
      a = "yV3cH" == a || "cf3fJc" == a;
      c || (_.fd(b, "a-S-j-ub-Xc-Om", d), _.fd(b, "a-S-j-ub-Yx9pqc", !d), _.fd(b, "a-S-j-ub-pb", a), _.fd(b, "a-S-j-ub-xTMeO", !a));
      if (c || d) b.classList.remove("a-S-j-ub-Yx9pqc"), b = this.nf(), this.Gd = _.q.requestAnimationFrame(b.bH.bind(b))
    };
    var x8d = function(a, b) {
      b.wa.tb(function() {
        this.Ra().listen(b.H, "scroll", this.dispatchEvent.bind(this))
      }.bind(a))
    };
    _.bY.prototype.TAa = function() {
      var a = this.nf().ua;
      a && (a.C7a(), a.focus())
    };
    _.bY.prototype.mb = function() {
      _.ZX.prototype.mb.call(this);
      _.q.cancelAnimationFrame(this.Gd)
    };
    _.bY.prototype[_.GXa] = !0;
    _.bY.prototype[_.$$a] = !0;
    _.B7d(_.bY);
    _.U$a(_.bY);
    _.bY.prototype[_.R$a] = !0;
    _.bY.prototype[_.S6d] = !0;
    _.bY.prototype[_.iab] = !0;
    _.B8d = function(a, b, c, d, e, f, h) {
      this.H = new _.T7d(a, c, e, h, function() {
        return b.yr()
      }, function() {
        return b.nf().H
      }, function() {
        return b.focus()
      });
      this.ka = f;
      this.ma = new _.Xw(b, this);
      this.ha = !1
    };
    _.g = _.B8d.prototype;
    _.g.enable = function() {
      this.ha || (_.Yw(this.ma, {
        "doc.dblclick": this.t1a.bind(this),
        "doc.mousedown": this.PTa.bind(this),
        "doc.click": this.NTa.bind(this),
        "doc.focus": this.OTa.bind(this),
        "linkBubble.click": this.P_.bind(this),
        "linkBubble.contextmenu": this.P_.bind(this),
        "linkBubble.dblclick": this.P_.bind(this),
        "linkBubble.mousedown": this.P_.bind(this),
        "selectionArea.mousedown": this.ZUa.bind(this)
      }), this.H.enable(), this.ha = !0)
    };
    _.g.disable = function() {
      this.ha && (this.ma.removeAll(), this.H.disable(), this.ha = !1)
    };
    _.g.Gp = function() {
      return !1
    };
    _.g.t1a = function(a) {
      var b = _.Gc(a, "id");
      this.H.uba(this.ka, a, b)
    };
    _.g.PTa = function(a) {
      var b = _.Gc(a, "id"),
        c = !!_.Fc(a.target, "isDocName", a.currentTarget);
      return this.H.M_(a, b, c)
    };
    _.g.NTa = function(a) {
      var b = _.Gc(a, "id");
      return this.H.$ra(this.ka, a, b)
    };
    _.g.OTa = function(a) {
      a = _.Fc(a, "id");
      return this.H.qba(a)
    };
    _.g.ZUa = function(a) {
      this.H.S_(a)
    };
    _.g.P_ = function() {
      return 1
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sywf");
    var C8d = new _.S(new _.Kn("UiData"), "HQQWr", 1073);
    _.D8d = function(a, b, c, d) {
      this.Fa = a;
      this.H = b;
      this.ha = c;
      this.Gc = d
    };
    _.F8d = function(a) {
      var b = new _.hD(a.Gc);
      _.E8d(a, b);
      return b
    };
    _.E8d = function(a, b) {
      new _.pD(b, C8d, a.Fa, void 0);
      for (var c = 0; c < a.H.length; c++) {
        var d = a.H[c],
          e = d == a.ha.rm,
          f = d.H || "";
        f = e ? _.qea("checkmark", f, a.Gc) : f;
        d = new _.jx(f, d, a.Gc);
        b.ub(d, !0);
        e && _.Igb() && (f = d.Mb("a-v-c")) && _.gd(f, "Checkmark");
        _.dd(d.Xa(), "checked", e)
      }
    };
    _.G8d = function(a, b, c) {
      var d = a.rm;
      a = a.H();
      var e = null;
      d == b && c ? e = new _.rr(b, "a" == a ? "d" : "a") : d != b && (e = new _.rr(b));
      return e
    };
    _.H8d = function(a) {
      return new _.rr(a.rm, "a" == a.H() ? "d" : "a")
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syx8");
    _.uae = function(a) {
      this.H = a
    };
    _.vae = function(a, b, c) {
      var d = "Sort changed to: " + (c.rm.H + ", ascending."),
        e = "Sort changed to: " + (c.rm.H + ", descending.");
      b.Jj() != c.Jj() ? c.rm.H ? a.H.speak("a" == c.H() ? d : e) : a.H.speak("Sort changed.") : b.H() != c.H() && a.H.speak("a" == c.H() ? "Sort direction changed to ascending." : "Sort direction changed to descending.")
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvz");
    _.wae = function(a, b) {
      _.wE.call(this, a, b)
    };
    _.z(_.wae, _.wE);
    _.wae.prototype.ta = function(a) {
      return {
        enabled: new _.sE(a, function(b) {
          return b.getId() == _.dC(b).get()
        }, this)
      }
    };
    _.wae.prototype.ua = function(a) {
      return !a.Om().next().getItem().Vv()
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw5");
    var Bbe = new _.Kn("DriveDoclistBackups");
    _.Cbe = new _.S(Bbe, "ukcdPb", 2626);
    _.Dbe = new _.S(Bbe, "JTD91c", 2694);
    _.Ebe = new _.S(Bbe, "Bho4Ff", 2695);
    new _.S(Bbe, "HQ5cZ", 2656);
    new _.S(Bbe, "qgTMvc", 2659);
    new _.S(Bbe, "Nek2qc", 2655);
    _.Fbe = new _.O("fZ8S0b", "GYg9ae", [_.CY, _.Qn]);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syma");
    _.O3b = new Set([1]);
    var P3b, Q3b;
    _.PJ = function(a, b) {
      this.ta = a.UQ;
      this.H = a.x3;
      this.Ca = a.g8;
      this.ma = a.Uzb;
      this.ha = a.w8 ? new P3b(a.w8) : null;
      this.ka = a.hqa;
      this.Ea = a.metadata;
      this.va = a.R_a ? new Set(a.R_a) : null;
      this.wa = !!a.ezb;
      b && (this.H && (a = this.H.jd, Q3b.add(a), this.ma && a.XL().push(this.ma)), this.ka ? _.R3b.push(this) : _.S3b.push(this))
    };
    P3b = function(a) {
      this.ha = a.le;
      this.H = a.Ncb
    };
    _.PJ.prototype.ua = function() {
      return this.Ca || _.uf
    };
    _.PJ.prototype.hqa = function(a) {
      return this.ka(a)
    };
    _.PJ.prototype.getMetadata = function() {
      return this.Ea
    };
    _.PJ.prototype.toString = function() {
      return "ViewId<" + this.ta + ">"
    };
    P3b.prototype.Ra = function() {
      return this.ha
    };
    P3b.prototype.Ncb = function() {
      return this.H
    };
    _.S3b = [];
    Q3b = new Set;
    _.R3b = [];
    _.T3b = function(a) {
      this.ta = a;
      this.ha = [];
      this.ka = null;
      this.ma = {};
      this.H = null
    };
    _.T3b.prototype.match = function(a, b) {
      U3b(this);
      if (this.H && this.H.match(a)) return null;
      a = a.replace(/;[^/]*/, "");
      for (var c = [], d = 0; d < this.ka.length; d++) {
        var e = this.ka[d].match(a);
        !e || b && !b(e) || c.push(e)
      }
      return c.sort(V3b)[0] || null
    };
    var V3b = function(a, b) {
        if (a.elements.length != b.elements.length) return b.elements.length - a.elements.length;
        for (var c = 0; c < a.elements.length; c++)
          if (a.elements[c].type != b.elements[c].type) {
            if ("Jt5cK" == a.elements[c].type) return -1;
            if ("Jt5cK" == b.elements[c].type || "iJ4yB" == a.elements[c].type) return 1;
            if ("iJ4yB" == b.elements[c].type) return -1
          } return 0
      },
      U3b = function(a) {
        a.ka || (a.ka = [], 0 == a.ha.length && a.ha.push(""), _.Ue(a.ta, function(b) {
          _.Ue(b.ta, function(c) {
            _.Ue(this.ha, function(d) {
                this.ka.push(W3b(this, b, d, c))
              },
              this)
          }, this)
        }, a), a.H && (_.Ue(a.ha, function(b) {
          this.H.ha.push(b)
        }, a), U3b(a.H)))
      },
      W3b = function(a, b, c, d) {
        c = X3b(a, !0, c);
        c.push.apply(c, X3b(a, !1, d));
        a = "^" + (0 == c.length ? "" : "/" + _.nd(c, function(e) {
          return e.KU
        }).join("/")) + "$";
        return new Y3b(b, new RegExp(a), c, d)
      },
      X3b = function(a, b, c) {
        var d = c.split("/");
        d.shift();
        return _.nd(d, function(e) {
          var f = {
            Pyb: e,
            pattern: c,
            VYa: b,
            type: void 0,
            prefix: void 0,
            GW: void 0,
            KU: void 0
          };
          if ("*" == e) f.type = "iJ4yB", f.KU = "(.+)";
          else {
            var h = /^([^:]*):([a-zA-Z0-9_]+)$/.exec(e);
            h ? (f.type = "T6GQkd",
              f.prefix = h[1], f.GW = h[2], e = "[^/]+", this.ma[f.GW] && (e = this.ma[f.GW], delete this.ma[f.GW]), f.KU = _.vh(f.prefix) + "(" + e + ")") : (f.type = "Jt5cK", f.KU = "(" + _.vh(e) + ")")
          }
          return f
        }, a)
      },
      Y3b = function(a, b, c, d) {
        this.ka = a;
        this.LU = b;
        this.H = c;
        this.ha = d
      };
    Y3b.prototype.match = function(a) {
      var b = this.LU.exec(a);
      if (!b) return null;
      b.shift();
      a = {
        Ah: this.ka,
        path: a,
        pattern: this.ha,
        prefix: "",
        HW: {},
        suffix: void 0,
        elements: this.H,
        LU: this.LU
      };
      for (var c = [], d = 0; d < b.length; d++) {
        var e = this.H[d],
          f = e.type;
        e.VYa && c.push(b[d]);
        "T6GQkd" == f ? a.HW[e.GW] = b[d] : "iJ4yB" == f && (a.suffix = b[d], a.HW["*"] = b[d])
      }
      0 < c.length && (a.prefix = "/" + c.join("/"));
      return a
    };
    Y3b.prototype.normalize = function(a) {
      return _.nd(this.H, function(b) {
        if ("Jt5cK" == b.type) return b.KU;
        var c = "";
        null != b.prefix && a && (c = b.prefix);
        return c + b.type
      }, this).join("/")
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy10b");
    var LJe;
    LJe = function(a, b, c, d, e, f) {
      this.top = a;
      this.bottom = b;
      this.left = c;
      this.right = d;
      this.width = e;
      this.height = f;
      this.H = a + f / 2;
      this.ha = c + e / 2
    };
    _.MJe = function(a) {
      var b = void 0 === b ? 0 : b;
      var c = void 0 === c ? 0 : c;
      return new LJe(a.top + b, a.top + b + a.height, a.left + c, a.left + c + a.width, a.width, a.height)
    };
    LJe.prototype.toString = function() {
      return "[RendererRect <(" + this.left + ", " + this.top + "), " + this.width + " x " + (this.height + ">]")
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syja");
    var Znb;
    _.Ynb = new _.O("RSNXoe", "RSNXoe", []);
    Znb = new _.S(new _.Kn("DriveCreateShortcuts"), "oWaXRd", 91110);
    _.$nb = function(a, b, c) {
      c = void 0 === c ? "" : c;
      if (null == c) throw Error("gf`" + c);
      _.lE.call(this, Znb, _.Ynb);
      this.xl = b;
      this.mh = a;
      this.parentId = c
    };
    _.z(_.$nb, _.lE);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syve");
    var yW, zW;
    _.xW = function(a, b, c) {
      b = c || b;
      c = a.variant;
      var d = a.Nd;
      a = a.Wg;
      return (0, _.T)("<div" + (d ? ' class="' + _.X(d) + '"' : "") + ">" + _.ws("I", c, !0)({
        Wg: a
      }, b) + "</div>")
    };
    yW = function(a) {
      a = a || {};
      return _.us(a.Wg, "black") ? "#FFFFFF" : "#000000"
    };
    zW = function(a) {
      a = a || {};
      return _.us(a.Wg, "white") ? "#000000" : "#FFFFFF"
    };
    _.W("I", "linkSharingWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)((0, _.T)(_.U(_.EMa({
        color: zW(a)
      }))))
    });
    _.W("I", "linkSharing", 0, function(a) {
      a = a || {};
      return (0, _.T)((0, _.T)(_.U(_.EMa({
        color: yW(a)
      }))))
    });
    _.W("I", "domain", 0, function(a) {
      a = a || {};
      return (0, _.T)(PUd({
        color: yW(a)
      }))
    });
    _.W("I", "domainWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)(PUd({
        color: zW(a)
      }))
    });
    var PUd = function(a) {
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(a.color) + '" d="M11,9v-4h-7v11h13v-7H11zM7,14h-1v-1h1V14zM7,12h-1v-1h1V12zM7,10h-1v-1h1V10zM7,8h-1v-1h1V8zM9,14h-1v-1h1V14zM9,12h-1v-1h1V12zM9,10h-1v-1h1V10zM9,8h-1v-1h1V8zM13,14h-1v-1h1V14zM13,12h-1v-1h1V12zM15,14h-1v-1h1V14zM15,12h-1v-1h1V12z"/></svg>')
    };
    _.W("I", "anyoneWithLink", 0, function(a) {
      a = a || {};
      return (0, _.T)(QUd({
        color: yW(a)
      }))
    });
    _.W("I", "anyoneWithLinkWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)(QUd({
        color: zW(a)
      }))
    });
    var QUd = function(a) {
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(a.color) + '" d="M15.005,11.166c0-1.834-3.667-2.566-5.5-2.566s-5.5,0.732-5.5,2.566v1.832h11V11.166zM9.505,7c1.38,0,2.49-1.119,2.49-2.5s-1.11-2.5-2.49-2.5s-2.5,1.119-2.5,2.5S8.125,7,9.505,7zM6.005,16.498c0,0.275,0.225,0.502,0.5,0.502h6c0.275,0,0.5-0.227,0.5-0.502s-0.225-0.498-0.5-0.498h-6C6.23,16,6.005,16.221,6.005,16.498zM7.219,18.199H5.505c-0.939,0-1.7-0.762-1.7-1.699s0.761-1.701,1.7-1.701h1.714c0.364,0,0.593,0.174,0.786,0.451h1c-0.293-0.709-1.053-1.25-1.786-1.25H5.505c-1.382,0-2.5,1.119-2.5,2.5c0,1.379,1.118,2.5,2.5,2.5h1.714c0.733,0,1.493-0.541,1.786-1.25h-1C7.812,18.025,7.583,18.199,7.219,18.199zM13.505,14H11.79c-0.732,0-1.492,0.541-1.785,1.25h1c0.193-0.277,0.422-0.451,0.785-0.451h1.715c0.939,0,1.7,0.764,1.7,1.701s-0.761,1.699-1.7,1.699H11.79c-0.363,0-0.592-0.174-0.785-0.449h-1c0.293,0.709,1.053,1.25,1.785,1.25h1.715c1.382,0,2.49-1.121,2.49-2.5C15.995,15.119,14.887,14,13.505,14z"/></svg>')
    };
    _.W("I", "domainWithLink", 0, function(a) {
      a = a || {};
      return (0, _.T)(RUd({
        color: yW(a)
      }))
    });
    _.W("I", "domainWithLinkWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)(RUd({
        color: zW(a)
      }))
    });
    var RUd = function(a) {
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(a.color) + '" d="M7.214,18.199H5.5c-0.939,0-1.7-0.762-1.7-1.699s0.761-1.701,1.7-1.701h1.714c0.364,0,0.593,0.174,0.786,0.451h1c-0.293-0.709-1.053-1.25-1.786-1.25H5.5c-1.382,0-2.5,1.119-2.5,2.5c0,1.379,1.118,2.5,2.5,2.5h1.714c0.733,0,1.493-0.541,1.786-1.25h-1C7.807,18.025,7.578,18.199,7.214,18.199zM6,16.498C6,16.773,6.225,17,6.5,17h6c0.275,0,0.5-0.227,0.5-0.502S12.775,16,12.5,16H6.5C6.225,16,6,16.221,6,16.498zM13.5,14h-1.715c-0.732,0-1.492,0.541-1.785,1.25h1c0.193-0.277,0.422-0.451,0.785-0.451H13.5c0.939,0,1.7,0.764,1.7,1.701s-0.761,1.699-1.7,1.699h-1.715c-0.363,0-0.592-0.174-0.785-0.449h-1c0.293,0.709,1.053,1.25,1.785,1.25H13.5c1.382,0,2.49-1.121,2.49-2.5C15.99,15.119,14.882,14,13.5,14zM10,6v-4h-7v11h13v-7H10zM6,11h-1v-1h1V11zM6,9h-1v-1h1V9zM6,7h-1v-1h1V7zM6,5h-1v-1h1V5zM8,11h-1v-1h1V11zM8,9h-1v-1h1V9zM8,7h-1v-1h1V7zM8,5h-1v-1h1V5zM12,11h-1v-1h1V11zM12,9h-1v-1h1V9zM14,11h-1v-1h1V11zM14,9h-1v-1h1V9z"/></svg>')
    };
    _.W("I", "groupWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="24px" height="22px" viewbox="0 0 20 20" focusable="false"><g fill="' + _.X(zW(a)) + '"><path d="M10,10c1.104,0,2-0.896,2-2s-0.896-2-2-2C8.895,6,8.001,6.896,8.001,8S8.895,10,10,10zM10,11c-2,0-4,0.699-4,1.6V14h8v-1.4C14,11.699,12,11,10,11z"/><circle cx="4.5" cy="9.5" r="1.5"/><path d="M4.5,12.125c-1.25,0-2.5,0.437-2.5,1V14h5v-0.875C7,12.562,5.75,12.125,4.5,12.125z"/><circle cx="15.5" cy="9.5" r="1.5"/><path d="M15.5,12.125c-1.25,0-2.5,0.437-2.5,1V14h5v-0.875C18,12.562,16.75,12.125,15.5,12.125z"/></g></svg>')
    });
    _.W("I", "linkWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(zW(a)) + '" d="M1.89535714,10.5782857 L1.89535714,9.41828571 C1.89535714,8.64 2.48464286,8.01028571 3.21428571,8.01028571 L8.57142857,8.01028571 C8.13214286,6.87771429 6.99107143,6 5.89285714,6 L3.75,6 C1.67785714,6 0,7.79085714 0,10 C0,12.2102857 1.67785714,14 3.75,14 L5.89285714,14 C6.99107143,14 8.13214286,13.1222857 8.57142857,11.9885714 L3.21428571,11.9885714 C2.48357143,11.9885714 1.89535714,11.3588571 1.89535714,10.5782857 L1.89535714,10.5782857 Z M16.2489286,6 L14.1071429,6 C13.0089286,6 11.8667857,6.87771429 11.4285714,8.01142857 L16.7857143,8.01142857 C17.5164286,8.01142857 18.1035714,8.64228571 18.1035714,9.41942857 L18.1035714,10.5817143 C18.1035714,11.3622857 17.5153571,11.9885714 16.7857143,11.9885714 L11.4285714,11.9885714 C11.8667857,13.1245714 13.0089286,14 14.1071429,14 L16.2489286,14 C18.3221429,14 20,12.2102857 20,10 C20,7.79085714 18.3221429,6 16.2489286,6 L16.2489286,6 Z M5.71428571,9.99733837 C5.71428571,10.5499341 6.07419574,11 6.5176563,11 L13.4802014,11 C13.9204485,11 14.2857143,10.5499341 14.2857143,9.99733837 C14.2857143,9.44474266 13.9204485,9.00000297 13.4802014,9.00000297 L6.51979862,9.00000297 C6.0752669,8.99867142 5.71428571,9.44474266 5.71428571,9.99733837 L5.71428571,9.99733837 Z"/></svg>')
    });
    _.W("I", "lock", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(yW(a)) + '" d="M9.375,14.4545455 L9.375,13.0055455 C9.003125,12.7847273 8.75,12.3787273 8.75,11.9084545 C8.75,11.2059091 9.309375,10.6363636 10,10.6363636 C10.69,10.6363636 11.25,11.2059091 11.25,11.9084545 C11.25,12.3787273 10.996875,12.7847273 10.625,13.0055455 L10.625,14.4545455 L9.375,14.4545455 M7.5,8.09090909 L7.5,6.81818182 C7.5,5.41245455 8.619375,4.20909091 10,4.20909091 C11.380625,4.20909091 12.5,5.41245455 12.5,6.81818182 L12.5,8.09090909 L7.5,8.09090909 M10,3 C7.92875,3 6.25625,4.70927273 6.25625,6.81818182 L6.25,8.09090909 C5.56,8.09090909 5,8.66109091 5,9.363 L5,15.7272727 C5,16.4298182 5.56,17 6.25,17 L13.75,17 C14.44,17 15,16.4298182 15,15.7272727 L15,9.363 C15,8.66109091 14.44,8.09090909 13.75,8.09090909 L13.75,6.81818182 C13.75,4.70927273 12.07125,3 10,3"/></svg>')
    });
    _.W("I", "personWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(zW(a)) + '" d="M9,9c1.656,0,3-1.342,3-3c0-1.656-1.344-3-3-3S6,4.344,6,6C6,7.658,7.344,9,9,9zM9,11c-2,0-6,1-6,3v2h12v-2C15,12,11,11,9,11z"/></svg>')
    });
    _.W("I", "public", 0, function(a) {
      a = a || {};
      return (0, _.T)(SUd({
        color: yW(a)
      }))
    });
    _.W("I", "publicWhite", 0, function(a) {
      a = a || {};
      return (0, _.T)(SUd({
        color: zW(a)
      }))
    });
    var SUd = function(a) {
      return (0, _.T)('<svg x="0px" y="0px" width="20px" height="20px" viewbox="0 0 20 20" focusable="false"><path fill="' + _.X(a.color) + '" d="M10,2c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S14.418,2,10,2zM10,17.1c-3.921,0-7.1-3.18-7.1-7.102c0-1.045,0.23-2.033,0.638-2.925L5,9.998c0,0,4,2.99,4,3v0.913c0,1.087,1,0.997,1,1.087V17.1zM15,15.039v-1.08c0-0.688-0.251-0.959-0.936-0.959H12v-1c0,0,0-2-2-2h-3l0.012-2h0.973c0.668,0,1.017,0,1.017-0.875V6h1.065c1.935,0,1.935-2,1.935-2v-0.811c2.945,0.863,5.098,3.582,5.098,6.811C17.1,11.969,16.296,13.752,15,15.039z"/></svg>')
    };
    _.W("I", "smallWhiteLink", 0, function(a) {
      a = a || {};
      return (0, _.T)('<div class="' + _.X("a-s-Ub-A-c") + '">' + _.U(_.EMa({
        size: "18px",
        color: zW(a)
      })) + "</div>")
    });
    _.W("I", "people", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="18px" height="18px" viewBox="0 0 24 24" focusable="false"><path fill="' + _.X(yW(a)) + '" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>')
    });
    _.W("I", "editor", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="24px" height="24px" viewbox="0 0 24 24" focusable="false" fill="' + _.X(yW(a)) + '"><path d="M1,15.25V19h3.75L15.814,7.936l-3.75-3.75L1,15.25z M18.707,5.043c0.391-0.391,0.391-1.023, 0-1.414l-2.336-2.336  c-0.391-0.391-1.024-0.391-1.414,0l-1.832,1.832l3.75,3.75L18.707, 5.043z"/></svg>')
    });
    _.W("I", "commentor", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="24px" height="24px" viewbox="0 0 24 24" focusable="false" fill="' + _.X(yW(a)) + '"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>')
    });
    _.W("I", "viewer", 0, function(a) {
      a = a || {};
      return (0, _.T)('<svg x="0px" y="0px" width="24px" height="24px" viewbox="0 0 24 24" focusable="false" fill="' + _.X(yW(a)) + '"><g><path d="M10,3C4.477,3,0,7.031,0,10c0,3,4.477,7,10,7s10-4,10-7C20,7.031,15.523,3,10,3z M10,15 c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S12.761,15,10,15z"/><circle cx="10" cy="10" r="2.5"/></g></svg>')
    });
    _.AW = function(a) {
      a = void 0 === a ? null : a;
      _.fT.call(this);
      this.wa = a;
      this.Ea = this.Vh = null;
      this.rJ = !1;
      this.ma.aN = !0;
      this.setPosition(1);
      this.Sf("H-qa-ia")
    };
    _.z(_.AW, _.fT);
    _.g = _.AW.prototype;
    _.g.Ka = function() {
      _.fT.prototype.Ka.call(this);
      _.nk(this.jc(), !0)
    };
    _.g.Sa = function() {
      _.fT.prototype.Sa.call(this);
      this.Vh = new _.Xx(this.Ia().Yb());
      this.Ta(this.Vh);
      this.Ra().listen(this.Vh, "focusin", this.onFocus);
      this.Ra().listen(this.Da(), "keydown", this.K0a)
    };
    _.g.setAnchorElement = function(a) {
      _.fT.prototype.setAnchorElement.call(this, a);
      this.Ea = a
    };
    _.g.getAnchorElement = function() {
      return this.Ea
    };
    _.g.onFocus = function(a) {
      !_.ec(this.Da(), a.target) && this.isVisible() && this.Va(!1)
    };
    _.g.K0a = function(a) {
      if (this.isVisible()) switch (a.keyCode) {
        case 27:
          this.Va(!1);
          if (this.wa) {
            var b = this.wa instanceof _.Eq ? this.wa.Da() : this.wa;
            b && b.focus()
          }
          a.stopPropagation();
          break;
        case 40:
        case 37:
        case 39:
        case 38:
        case 13:
        case 3:
        case 46:
          a.stopPropagation()
      }
    };
    _.g.resize = function() {
      if (this.Da() && this.isVisible()) {
        var a = _.Cm(this.Da());
        if (a) {
          a.top += 10;
          a.right -= 10;
          a.bottom -= 10;
          a.left += 10;
          if (this.Ea) {
            var b = _.Fm(this.Ea),
              c = _.Km(this.Ea);
            _.Emd(a, new _.om(b.y, Math.min(c.width, a.right), b.y + c.height, b.x))
          }
          if (b = _.dpa(this.Da())) b = _.Fm(b), _.Voa(a, -b.x, -b.y);
          this.ma.DW = a
        }
      }
    };
    _.g.Rda = function() {
      var a = this.jc();
      a && a.focus()
    };
    _.g.Va = function(a) {
      _.fT.prototype.Va.call(this, a);
      a && (this.Rda(), this.resize(), this.Qd())
    };
    _.g.kl = function() {
      return 10
    };
    _.W("J", "", 0, function(a) {
      var b = a.domainName,
        c = a.role,
        d = "";
      if (a.Ao) switch (c) {
        case 2:
          d += "Anyone at " + (b + " with the link can view");
          break;
        case 3:
          d += "Anyone at " + (b + " with the link can comment");
          break;
        case 4:
          d += "Anyone at " + (b + " with the link can edit");
          break;
        default:
          d += "Anyone at " + (b + " with the link can access")
      } else switch (c) {
        case 2:
          d += "Anyone at " + (b + " can find and view");
          break;
        case 3:
          d += "Anyone at " + (b + " can find and comment");
          break;
        case 4:
          d += "Anyone at " + (b + " can find and edit");
          break;
        default:
          d +=
            "Anyone at " + (b + " can find and access")
      }
      return d
    });
    _.W("K", "", 0, function(a) {
      var b = a.role,
        c = "";
      if (a.Ao) switch (b) {
        case 2:
          c += "Anyone with the link can view";
          break;
        case 3:
          c += "Anyone with the link can comment";
          break;
        case 4:
          c += "Anyone with the link can edit";
          break;
        default:
          c += "Anyone with the link can access"
      } else switch (b) {
        case 2:
          c += "Public on the web - Anyone can find and view";
          break;
        case 3:
          c += "Public on the web - Anyone can find and comment";
          break;
        case 4:
          c += "Public on the web - Anyone can find and edit";
          break;
        default:
          c += "Public on the web - Anyone can find and access"
      }
      return c
    });
    _.W("L", "", 0, function(a) {
      var b = a.role,
        c = "";
      if (a.Ao) switch (b) {
        case 2:
          a = 'Anyone with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can view</span>');
          c += a;
          break;
        case 3:
          a = 'Anyone with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can comment</span>');
          c += a;
          break;
        case 4:
          a = 'Anyone with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can edit</span>');
          c += a;
          break;
        default:
          a = 'Anyone with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can access</span>'), c += a
      } else switch (b) {
        case 2:
          a = 'Public on the web - Anyone <span class="' +
            (_.X("H-qa-wc-ua-r-Ld") + '">can find and view</span>');
          c += a;
          break;
        case 3:
          a = 'Public on the web - Anyone <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and comment</span>');
          c += a;
          break;
        case 4:
          a = 'Public on the web - Anyone <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and edit</span>');
          c += a;
          break;
        default:
          a = 'Public on the web - Anyone <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and access</span>'), c += a
      }
      return (0, _.T)(c)
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.i2d = function(a) {
      return a && a && a.view && a.view instanceof _.ct ? a : null
    };
    _.R("syvm");
    _.hf();
    _.j2d = Symbol("drive.debug.api.IssueReporterInterface");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var x6d = function(a, b) {
        return new _.Xw(a, b)
      },
      y6d = function(a) {
        return new _.jqb(a)
      },
      z6d = function(a, b) {
        _.mF(a, "isAdd", b ? "true" : "false")
      };
    _.R("syxa");
    _.PX = function(a, b, c, d) {
      var e = void 0 === e ? {
        uIa: x6d,
        CIa: y6d
      } : e;
      this.Fa = a;
      this.H = b;
      this.Bb = a.get(_.bd);
      this.ua = c;
      this.Pa = d;
      this.$a = a.get(_.Na);
      this.Ja = a.get(_.Pe);
      this.Ua = a.get(_.Jb);
      this.Ea = a.get(_.Ze);
      this.rb = a.get(_.Qa);
      this.Ga = e.CIa(a);
      this.Za = e.uIa(b.Xa(), this);
      this.ta = new _.pF(void 0, !1, !0);
      this.H.Ta(this.ta);
      this.Ca = this.H.Mqa();
      this.wa = !1;
      this.va = this.ka = this.ha = this.ma = null
    };
    _.g = _.PX.prototype;
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.enable = function() {
      this.wa || (_.Yw(this.Za, {
        "doc.mousedrag": this.m1a.bind(this),
        "doc.mousedrop": this.Db.bind(this)
      }), this.wa = !0)
    };
    _.g.disable = function() {
      this.wa && (this.Za.removeAll(), this.wa = !1)
    };
    _.g.Gp = function() {
      return !1
    };
    _.g.m1a = function(a) {
      if (!this.Ja.zd().get() || _.Pa(this.rb)) return 2;
      switch (_.oF(a)) {
        case "start":
          return A6d(this, a);
        case "end":
          B6d(this)
      }
      return 1
    };
    var A6d = function(a, b) {
        if (C6d(a, b)) return 2;
        var c = _.Bu(a.Ea, a.Oa(), _.OZa);
        _.Tw[_.bVa] = c;
        a.Ea.H(c);
        var d = a.ua.RB();
        a.ka = d;
        c = _.Hc(b);
        _.mF(c, "__src__", "file");
        c.dataTransfer && (c.dataTransfer.effectAllowed = "copyMove");
        var e = D6d(a, function(f) {
          var h = f.getCapabilities();
          return !_.Ia(f) || !(!h || !_.x(h, 9))
        });
        _.mF(c, "canRemove", e ? "true" : "");
        e = E6d(a, function(f) {
          return !!f.Uc()
        });
        _.mF(c, "fromTd", e ? "true" : "");
        _.mF(c, "ids", d.join(","));
        _.bqb++;
        a.Ca && a.Ca.get() ? (_.mF(c, "parentId", a.Ca.get()), a.ha = a.Ca.get()) : (a.ha =
          void 0, e = a.Bb.Vd(), z6d(c, a.$a.Ap() && e.Hg() == _.tc ? !0 : D6d(a, function(f) {
            return !f.Cp() && !f.Uc()
          })));
        if (!_.gVa || !_.Fh && !_.Bha)
          if (b = _.Gc(b, "id"), b = a.H.Vma(a.H.e4(d), b)) _.kVa(c, b), _.kqb(a.Ga, d);
        1 == d.length && (d = a.H.getItem(d[0])) && a.Oa().Jc(_.zu).tb((0, _.B)(a.Gb, a, c, d));
        return 1
      },
      C6d = function(a, b) {
        a.ma = null;
        if (a.Pa.H) return !0;
        if (E6d(a, function(d) {
            return !!d.Jh() || _.Ga(d.Ec() || "") && _.E9a(d)
          })) return a.Ea.Md(a.Oa(), _.O3a), !0;
        var c = _.Gc(b, "id");
        return a.ua.isSelected(c) && b.currentTarget.draggable ? !1 : !0
      },
      B6d =
      function(a) {
        a.ka = null;
        a.ha = null;
        a.ma = null
      };
    _.PX.prototype.Gb = function(a, b, c) {
      (b = c.$a(b.getId())) && a.dataTransfer && a.dataTransfer.setData("URL", b)
    };
    var F6d = function(a, b, c) {
      if ("enter" == c || "over" == c) a.ma = b;
      return b
    };
    _.PX.prototype.Db = function(a) {
      this.ta.rf() || (_.qqb(this.ta, this.H.pM()), this.ta.start(["mouseup", "mouseleave"]));
      var b = _.Hc(a),
        c = _.oF(a);
      if ("over" == c && null !== this.ma) return this.ma;
      if ("file" != (_.Uw(b, "__src__") || null)) return F6d(this, 0, c);
      if (!this.Ja.zd().get()) return G6d(this, a, !1, !0), F6d(this, 2, c);
      var d = _.Gc(a, "id"),
        e = this.H.getItem(d);
      if (e && e.Jh()) return F6d(this, 2, c);
      null === this.ka && (this.ka = _.Uw(b, "ids").split(","));
      var f = this.ka;
      null === this.ha && (this.ha = _.Uw(b, "parentId") || void 0);
      b = this.ha;
      a: if (f.includes(d) || b && d == b) var h = !1;
        else {
          if ((h = this.H.getItem(d)) && _.Ia(h)) {
            if (!_.We(h)) {
              h = !1;
              break a
            }
            h = _.Ka(h)
          }
          h = h && !_.Ga(h.Ec()) || h && !_.Yjd(h) ? !1 : !0
        }
      switch (c) {
        case "enter":
          _.cqb++;
          G6d(this, a, !0, h);
          this.va = _.nqb(this.Ga, f, d);
          break;
        case "leave":
          G6d(this, a, !1, h);
          this.va && (this.va(), this.va = null);
          break;
        case "drop":
          if (G6d(this, a, !1, h), h) {
            var k = _.dqb(a);
            a = new _.mE(_.fg(a.currentTarget), null, null, null, 9, 8, "dragdrop");
            if (e && _.Ia(e)) {
              d = _.hd(e);
              for (var m = _.w(f), n = m.next(); !n.done; n = m.next())
                if (n.value ===
                  d) return e = 'Cannot move the folder "' + (_.Ka(e).getTitle() + '" onto itself.'), this.Ua.H(new _.qS(e, "d")), B6d(this), F6d(this, 2, c)
            }
            _.eqb("copy" == k ? this.Na(d, f, a) : new _.Upb(d, f, a, b), this.Oa());
            B6d(this)
          }
      }
      return h ? F6d(this, 1, c) : F6d(this, 2, c)
    };
    _.PX.prototype.Na = function(a, b, c) {
      return new _.Tpb(a, b, c)
    };
    var G6d = function(a, b, c, d) {
        var e = b.currentTarget;
        d ? a.H.wx(e, c, _.nF(b)) : a.H.vL(e, c, _.nF(b))
      },
      E6d = function(a, b) {
        return a.ua.RB().some(function(c) {
          return (c = a.H.getItem(c)) && b(c)
        })
      },
      D6d = function(a, b) {
        return a.ua.RB().every(function(c) {
          return (c = a.H.getItem(c)) && b(c)
        })
      };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.uY = function(a, b) {
      a ? kae || (a = new lae, _.kVa(b, a), kae = !0) : kae && (_.lVa(), kae = !1)
    };
    _.R("syxd");
    var nae = function(a, b, c) {
        b = c || b;
        c = a.Qe;
        var d = a.ao,
          e = a.w0,
          f = a.Mk,
          h = a.uh,
          k = a.CE,
          m = a.Ak;
        a = a.title;
        var n = '<div class="' + _.X("Wa-ka-Je-Ib") + " " + _.X("Wa-ka-Zk") + (f ? " " + _.X("Wa-ka-ei") : " " + _.X("Wa-ka-me-ei")) + '"><div class="' + _.X("Wa-ka-Je-Ib-Cm") + '"></div><div class="' + _.X("Wa-ka-Je-Ib-oa") + '"><div class="' + _.X("Wa-ka-Je-Ib-c") + '">';
        var r = (0, _.T)('<svg width="96px" height="72px" viewBox="0 0 96 72"><defs><filter x="-50%" y="-50%" width="200%" height="200%" filterunits="objectBoundingBox" id="filter-1"><feoffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><fegaussianblur stddeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><fecolormatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.224 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"/><femerge><femergenode in="shadowMatrixOuter1"/><femergenode in="SourceGraphic"/></femerge></filter></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Artboard" sketch:type="MSArtboardGroup"><g id="Cloud" sketch:type="MSLayerGroup" transform="translate(12.000000, 8.000000)"><path d="M58.065,18.105 C56.025,7.785 46.92,0 36,0 C27.33,0 19.815,4.92 16.05,12.105 C7.035,13.08 0,20.715 0,30 C0,39.945 8.055,48 18,48 L57,48 C65.28,48 72,41.28 72,33 C72,25.08 65.835,18.66 58.065,18.105 L58.065,18.105 Z" id="Shape" fill="#FFFFFF" filter="url(#filter-1)" sketch:type="MSShapeGroup"/><path d="M32,36 L40,36 L40,27 L47,27 L36,16 L25,27 L32,27 L32,36 Z" id="Shape" fill="#4285F4" sketch:type="MSShapeGroup"/></g></g></g></svg>');
        n = n + r + '</div><div class="' + _.X("Wa-ka-Je-Ib-gk") + '"><div class="' + _.X("Wa-ka-Je-Ib-gk-V") + '">';
        n = (f ? n + "Drop files to instantly upload them to:" : n + "You are offline") + ('</div><div class="' + _.X("Wa-ka-Je-Ib-gk-T") + '">' + mae({
          w0: e,
          uh: h,
          CE: k,
          Ak: m,
          title: a,
          Qe: c,
          ao: d
        }, b) + '</div></div></div><div class="' + _.X("Wa-ka-Je-Ib-Cm") + '"></div></div>');
        return (0, _.T)(n)
      },
      mae = function(a, b, c) {
        var d = a.w0,
          e = a.CE;
        return (0, _.T)(_.zC({
          title: a.title,
          Qe: a.Qe,
          ao: a.ao,
          Dd: !0,
          Ak: a.Ak,
          aYa: e ? "teamDriveWhite" : d ? "computerWhite" : "driveLogoWhite",
          v8: a.uh || e || d,
          Ud: !1,
          dC: !1
        }, c || b))
      };
    var pae, qae;
    _.oae = function(a, b) {
      this.ha = b;
      this.H = null;
      this.ma = !1;
      this.ka = null
    };
    _.vY = function(a, b, c, d, e) {
      d = void 0 === d ? !1 : d;
      e = void 0 === e ? !1 : e;
      if (b == a.ma) a.ma && c && pae(a, c, !!d);
      else {
        qae(a);
        if (b) {
          if (!a.H) {
            var f = _.Oj(a.ha),
              h = new _.Zq("white", "FFFFFF", !0),
              k = !!c.Ph(),
              m = _.Ia(c);
            a.H = _.Yc(nae, {
              Qe: _.Yda(k, h, m),
              ao: h,
              w0: _.E9a(c),
              Mk: e,
              uh: d,
              CE: null != _.p(c, 73),
              Ak: k,
              title: c.getTitle() || ""
            }, null, f);
            a.ha.appendChild(a.H)
          }
          a.ka = _.Hk(function() {
            _.Xc(_.q.document.body, "Wa-ka-j-Sa");
            _.Xc(this.ha, "Wa-ka-j-Sa");
            _.rae(this, !0);
            _.mm(this.H, "Wa-ka-Zk", "Wa-ka-Sa")
          }, 10, a)
        } else _.mm(a.H, "Wa-ka-Sa", "Wa-ka-Zk"),
          _.rae(a, !1), a.ka = _.Hk(function() {
            _.dk(this.H);
            this.H = null
          }, 1E3, a);
        a.ma = b
      }
    };
    _.rae = function(a, b) {
      _.fd(_.q.document.body, "Wa-ka-j-Sa", b);
      _.fd(a.ha, "Wa-ka-j-Sa", b)
    };
    pae = function(a, b, c) {
      if (a.H) {
        var d = _.Oj(a.ha);
        a = d.Cb("Wa-ka-Je-Ib-gk-T", a.H);
        d.He(a);
        var e = new _.Zq("white", "FFFFFF", !0),
          f = !!b.Ph(),
          h = _.Ia(b);
        a.appendChild(_.Yc(mae, {
          Qe: _.Yda(f, e, h),
          ao: e,
          w0: _.E9a(b),
          uh: c,
          CE: null != _.p(b, 73),
          Ak: f,
          title: b.getTitle() || ""
        }, null, d))
      }
    };
    qae = function(a) {
      null != a.ka && (_.Ik(a.ka), a.ka = null)
    };
    var sae = function(a, b, c) {
      b = c || b;
      a = '<div class="' + _.X("a-z-Wa-Uc") + '"><span class="' + _.X("a-z-Wa-Uc-c") + '">' + _.jd({
        hb: !0,
        variant: "alert"
      }, b) + '</span><span class="' + _.X("a-z-Wa-Uc-r") + '">';
      return (0, _.T)(a + "You don't have permission to upload to this folder.</span></div>")
    };
    var lae = function() {
      _.Rw.call(this, tae)
    };
    _.z(lae, _.Rw);
    lae.prototype.Ea = function(a) {
      _.Xc(a, "a-z-Wa-Uc-j");
      var b = _.Yc(sae);
      a.appendChild(b)
    };
    var tae = new _.pm(-15, -15, 560, 82);
    var kae = !1;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw2");
    _.yae = function(a, b, c, d, e) {
      var f = this;
      this.Fa = a;
      this.H = b;
      this.Ja = _.bw(a);
      this.ha = c;
      this.Ca = new _.Xw(b, this);
      this.ma = new _.cf(this);
      this.H.Ta(this.ma);
      this.$a = a.get(_.to);
      this.Ua = a.get(_.cn);
      this.d4 = new _.uae(this.Ua);
      this.va = d;
      this.Ea = e;
      this.wa = null;
      this.ua = _.ppb(this.Oa(), function() {
        return f.wa
      }, _.Job, "doclistcontroller");
      this.H.Ta(this.ua);
      this.rb = a.get(_.Nr);
      this.Ga = this.H.Uq().CC || null;
      this.ta = !1;
      this.ka = {};
      xae(this)
    };
    _.g = _.yae.prototype;
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.enable = function() {
      if (!this.ta) {
        var a = {};
        _.Yw(this.Ca, (a["download.click"] = this.tva.bind(this), a["download.keydown"] = this.ATa.bind(this), a["header.action"] = this.OWa.bind(this), a["neVct.keydown"] = this.Pa, a["tdContextMenu.action"] = this.RWa.bind(this), a));
        this.ma.listen(this.H, _.b8d, this.MSa);
        this.ma.listen(this.H, _.c8d, this.Na);
        this.ta = !0
      }
    };
    _.g.disable = function() {
      this.ta && (this.Ca.removeAll(), this.ma.removeAll(), this.ta = !1)
    };
    _.g.Gp = function() {
      return !1
    };
    _.g.OWa = function(a) {
      var b = this.H.Bn().sort;
      a = _.Bh(_.Gc(a, "sortKey"));
      zae(this, _.G8d(b, _.JKa[a], !0), _.K3a)
    };
    _.g.MSa = function(a) {
      zae(this, a.H, _.nGa)
    };
    var zae = function(a, b, c) {
      var d = a.H.Bn().sort,
        e = a.H.Bn();
      e.sort = b;
      e.Kua = !0;
      _.$e(a.Fa, e, c);
      a.Ja.navigate(e);
      _.vae(a.d4, d, b)
    };
    _.yae.prototype.Na = function(a) {
      a = _.uw(a.H);
      var b = this.H.Bn();
      b.ai = a;
      b.P_a = !0;
      _.$e(this.Fa, b, _.lGa);
      this.Ja.navigate(b)
    };
    _.yae.prototype.Pa = function(a) {
      return this.zC(a.keyCode, _.Ow(a), a) ? (a.preventDefault(), 1) : 0
    };
    var xae = function(a) {
        a.ka[_.nUa] = new wY(_.$C, new _.DE(a.Oa(), a.ha.qh(), a.va, a.Ea));
        if (a.H.Hg() == _.xc) a.ka[_.KZa] = new wY(_.bfb, new _.Rmb(a.Oa(), a.ha.qh()));
        else {
          a.ka[_.Qeb] = new wY(_.Rfb, new _.xE(a.Oa(), a.ha.qh(), a.va, a.Ea));
          a.ka[_.d_a] = new wY(_.bfb, new _.LE(a.Oa(), a.ha.qh(), a.Ga || void 0));
          a.ka[_.g_a] = new wY(_.Dfb, new _.yE(a.Oa(), a.ha.qh()));
          a.ka[_.W$a] = new wY(_.Hfb, new _.tE(a.Oa(), a.ha.qh()));
          a.ka[_.k_a] = new wY(_.Jfb, new _.wae(a.Oa(), a.ha.qh()));
          var b = new _.mE(a.H.nqa.bind(a.H), a.H.gE.bind(a.H), a.i1a.bind(a),
            a.j1a.bind(a), 9, 8, "organizeDoclistController");
          a.ka[_.VZa] = new wY(_.ofb, new _.KE(a.Oa(), a.ha.qh(), b, a.Ga || void 0));
          a.ka[_.DZa] = new wY(_.pfb, new _.Omb(a.Oa(), a.ha.qh(), b))
        }
      },
      Bae = function(a, b, c, d) {
        return (a = _.Ffa(a.ka, function(e) {
          return e.ln.In(b, c)
        })) ? Aae(a.H, d) : !1
      },
      Aae = function(a, b) {
        return a.H().enabled.get() ? (a.ma(new _.iD, b), !0) : !1
      };
    _.g = _.yae.prototype;
    _.g.zC = function(a, b, c) {
      return this.$a.ha.ha ? this.H.yr().H9(a, b) ? !0 : Bae(this, a, b, c) ? !0 : !1 : !1
    };
    _.g.i1a = function() {
      var a = this.H.nf();
      return a ? a.Ie : null
    };
    _.g.j1a = function(a) {
      var b = this.H.nf();
      b && b.ZU(a, !1)
    };
    _.g.RWa = function(a) {
      var b = this,
        c = _.Gc(a, "tdId");
      this.rb.Jc(c).then(function(d) {
        d.getItem().sj() && (b.wa = a.currentTarget, _.ZE(b.ua, d), _.$E(b.ua, a.clientX, a.clientY))
      }, _.uf)
    };
    _.g.tva = function(a) {
      a = _.Gc(a, "id");
      this.ha.SE(a);
      this.ha.Fs(a);
      (new _.nlb(this.ha.qh())).submit(this.Oa());
      return 1
    };
    _.g.ATa = function(a) {
      return 13 == a.keyCode ? this.tva(a) : 0
    };
    var wY = function(a, b) {
      this.ln = a;
      this.H = b
    };
    _.xY = function(a, b, c, d, e, f) {
      f = void 0 === f ? null : f;
      this.Fa = a;
      this.H = b;
      this.ta = c;
      this.va = d;
      this.Ea = e;
      this.Ga = a.get(_.$n);
      this.wa = new _.Xw(b, this);
      this.Za = new _.cf(this);
      this.H.Ta(this.Za);
      this.ha = !1;
      this.ka = new _.Nx;
      this.ua = this.ma = null;
      this.Ca = f
    };
    _.g = _.xY.prototype;
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.enable = function() {
      if (!this.ha) {
        var a = {};
        _.Yw(this.wa, (a["doc.contextmenu"] = this.k1a.bind(this), a["neVct.contextmenu"] = this.oXa.bind(this), a));
        this.ha = !0
      }
    };
    _.g.disable = function() {
      this.ha && (this.wa.removeAll(), this.ha = !1)
    };
    _.g.Gp = function(a) {
      switch (a) {
        case _.cA:
          a = this.ta.qh().Je();
          if (0 < this.H.Uq().hu.length && 0 != a.length) {
            var b = _.X7d(this.H, a[0]);
            Cae(this, a, b.x, b.y, !0)
          }
          return !0;
        default:
          return !1
      }
    };
    _.g.k1a = function(a) {
      var b = _.Gc(a, "id");
      this.ta.isSelected(b) || this.H.yr().hL(b, new _.Nw);
      Cae(this, this.ta.qh().Je(), a.clientX, a.clientY)
    };
    _.g.oXa = function(a) {
      var b = a.clientX;
      a = a.clientY;
      var c = this.H.Uq().Z4;
      c && 0 < c.length && (this.ua || (c = new _.mE(this.H.Xa.bind(this.H), null, null, null, 8, 8, "doclistmenucontroller2"), c = _.sD((new _.ME(this.Oa(), _.bA, c, this.H.Hk().rz)).register(), this.H.Uq().Z4), this.ua = Dae(this, c)), _.npb(this.ua, b, a))
    };
    var Cae = function(a, b, c, d, e) {
      e = void 0 === e ? !1 : e;
      0 < a.H.Uq().hu.length && 0 != b.length && (a.ka.clear(), _.Fi(b, function(f) {
        var h = this.va.wk(f);
        this.ka.set(f, h)
      }, a), _.Xc(a.H.Xa(), "l-Pc-w-Sa"), a = Eae(a), _.npb(a, c, d), e && _.gx(a.wf()))
    };
    _.xY.prototype.Na = function(a, b) {
      b.target == a && (_.Fb(this.H.Xa(), "l-Pc-w-Sa"), _.Hk(this.Pa, 0, this))
    };
    _.xY.prototype.Pa = function() {
      var a = this.H.Ia().Yb();
      null != a.activeElement && a.activeElement != a.body || this.H.focus()
    };
    var Eae = function(a) {
      if (!a.ma) {
        var b = (0, _.B)(a.H.nqa, a.H),
          c = new _.mE(b, a.H.gE.bind(a.H), a.Ja.bind(a), a.Ua.bind(a), 9, 8, "doclistmenucontroller1");
        b = _.sD((new _.ME(a.Oa(), _.aA, c, a.ka, a.H.Uq().CC, a.va, a.Ea, a.Ca, b)).register(), a.H.Uq().hu);
        a.ma = Dae(a, b)
      }
      return a.ma
    };
    _.xY.prototype.Ja = function() {
      var a = this.H.nf();
      return a ? a.Ie : null
    };
    _.xY.prototype.Ua = function(a) {
      var b = this.H.nf();
      b && b.ZU(a, !1)
    };
    var Dae = function(a, b) {
      b = _.jpb(b);
      a.H.Ta(b);
      a.Za.listen(b, "hide", _.df(a.Na, b));
      b.render();
      b = new _.lpb(b, a.Ga.Lu());
      a.H.Ta(b);
      return b
    };
    _.Fae = function(a, b, c, d) {
      this.H = new _.DE(a, b.qh(), c, d)
    };
    _.Fae.prototype.open = function(a) {
      this.H.ma(new _.iD, a)
    };
    _.Fae.prototype.m1 = function() {
      return !1
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syx9");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syxb");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw4");
    _.hf();
    _.Gae = Symbol("drive.doclist.api.ViewSpecProvider");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw7");
    _.Gbe = new _.O("Mka3Qe", "U6TK8c", [_.Qn, _.Abe]);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Hbe = function(a, b) {
      _.Iw.call(this, _.Dbe, _.Fbe);
      for (var c, d = 0; d < a.length; d++) void 0 === c && (c = a[d].zn());
      this.H = a;
      this.M6 = !!b;
      this.Kq = _.zbe(c)
    };
    _.z(_.Hbe, _.Iw);
    _.R("sywi");
    _.Ibe = new _.O("aJaTld", "iUQ0xb", [_.CY, _.Qn]);
    _.Jbe = function(a) {
      _.Iw.call(this, _.Ebe, _.Ibe);
      for (var b, c = 0; c < a.length; c++) void 0 === b && (b = a[c].zn());
      this.H = a;
      this.Kq = _.zbe(b)
    };
    _.z(_.Jbe, _.Iw);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("symc");
    _.Z3b = _.$l("qako4e");
    _.$3b = _.$l("IBB03b");
    _.a4b = _.$l("JZCswc");
    _.b4b = _.$l("TSpWaf");
    _.c4b = _.$l("YjGWLc");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syrx");
    _.m7c = _.Vl("TI3xKf");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sysb");
    _.xS = _.$l("SXY2nd");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syzx");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy108");
    _.qJe = _.$l("WDUgEd");
    _.rJe = _.$l("hPbpbb");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy109");
    _.sJe = _.$l("jyQneb");
    _.tJe = _.$l("RtRDNe");
    _.uJe = _.$l("Vt7Nnb");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var vJe = function(a) {
        null === a.gP && (a.gP = new _.go([_.pbb(a)], a.Yx.bind(a)));
        return a.gP
      },
      wJe = function(a) {
        a.Un || (a.Un = new _.go([_.iC(a)], function() {
          return _.ubb(a)
        }));
        return a.Un
      };
    _.R("sy10e");
    var yJe = function(a, b) {
      this.ka = new _.ao;
      var c = this,
        d = a.get(_.Pp).Ag(_.Te);
      this.ta = _.ncb(a, b, d, "folder_path");
      a = this.ta.H;
      this.ha = a.Yb();
      this.H = [];
      this.ma = !1;
      a.getState().observe(function(e) {
        "vbnc8b" != e && c.ha.observe(function() {
          _.ZAa(c, null)
        }, c)
      }, this, !0);
      this.ha.observe(function(e) {
        xJe(c, e)
      }, this, !0)
    };
    _.z(yJe, _.dr);
    var xJe = function(a, b) {
      b && (a.H.forEach(function(c) {
        c.wl(a)
      }), a.H = [_.nbb(b), _.jC(b), _.obb(b), vJe(b), b.Kj(), _.qbb(b), wJe(b)], a.H.forEach(function(c) {
        c.listen(function() {
          _.ZAa(a, null)
        }, a)
      }))
    };
    yJe.prototype.isDisposed = function() {
      return this.ma
    };
    yJe.prototype.dispose = function() {
      var a = this;
      this.ma || (this.ma = !0, this.ha.ti(this), this.H.forEach(function(b) {
        b.wl(a)
      }), this.ta.dispose())
    };
    var zJe = function(a) {
        this.ha = a.get(_.Ub);
        this.ka = a.get(_.Qa);
        this.H = !1
      },
      BJe = function(a, b) {
        a.H = !1;
        if (0 == b.length) return _.Uk([]);
        var c = b.slice(0);
        b = c.pop();
        return a.ha.Pl(b, "folder_resolve_path").tb(function(d) {
          return AJe(a, d, c, "folder_resolve_path")
        })
      };
    zJe.prototype.abort = function() {
      this.H = !0
    };
    var AJe = function(a, b, c, d) {
        return a.H ? _.Wk(Error("Xm")) : a.ha.yn(b.qf(), d).tb(function(e) {
          return CJe(a, b, e.Xi, c, d)
        })
      },
      CJe = function(a, b, c, d, e) {
        if (a.H) return _.Wk(Error("Xm"));
        var f = d.pop() || null;
        return (c = DJe(a, b, c, f)) ? (c.getId() != f && (d = []), AJe(a, c, d, e).tb(function(h) {
          return _.Wf(h, b)
        })) : _.Uk([b])
      },
      DJe = function(a, b, c, d) {
        if (b.Ca() || _.rg(c)) return null;
        if (d = EJe(b, c, d)) return d;
        if (_.Tb(a.ka)) {
          if (d = b.Uc()) {
            if (a = EJe(b, c, d)) return a
          } else if (a = EJe(b, c, a.ha.ih().getId())) return a;
          if (a = EJe(b, c, b.Cp())) return a
        }
        return _.Ffa(c,
          function(e) {
            return b.Jh() == e.Jh()
          })
      },
      EJe = function(a, b, c) {
        return c ? (b = b[c]) && !!a.Jh() == !!b.Jh() ? b : null : null
      };
    _.GJe = function(a) {
      _.M.call(this);
      var b = this;
      this.Fa = a;
      this.ka = a.get(_.Ub);
      this.va = a.get(_.Qa);
      this.ta = new zJe(a);
      _.rj(this, function() {
        b.ta.abort()
      });
      this.H = [];
      this.ha = null;
      this.ma = [];
      _.rj(this, function() {
        return FJe(b)
      });
      this.BS = !1
    };
    _.z(_.GJe, _.M);
    _.GJe.prototype.we = function() {
      return this.ha || []
    };
    _.GJe.prototype.ua = function() {
      var a = this;
      if (0 < this.H.length) {
        var b = BJe(this.ta, this.H);
        b.Oe(function(c) {
          return HJe(a, c)
        }, function(c) {
          a: {
            if (!a.Fa.isDisposed()) {
              if (c instanceof _.xb) {
                var d = c.Dk;
                if (d && 5 == d.H()) {
                  HJe(a, []);
                  c = void 0;
                  break a
                }
              }
              _.cc(a.Fa, c, 194)
            }
            c = void 0
          }
          return c
        });
        b.tb(function() {
          a.BS = !0
        });
        return b
      }
      b = this.ka.ih();
      HJe(this, [b]);
      this.BS = !0;
      return _.Uk([b])
    };
    var IJe = function(a, b) {
        b.forEach(function(c) {
          a.ka.PS(c) || (c = c.getId(), c = new yJe(a.Fa, c), a.ma.push(c), c.listen(a.ua, a))
        })
      },
      HJe = function(a, b) {
        a.H = b.map(function(c) {
          return c.getId()
        });
        FJe(a);
        IJe(a, b);
        a.ha = b.slice(0);
        a.dispatchEvent("ukrrof")
      },
      FJe = function(a) {
        a.ma.forEach(function(b) {
          b.wl(a);
          b.dispose()
        });
        a.ma = []
      };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy10f");
    var JJe = function() {
      this.H = new Map
    };
    JJe.prototype.ef = function(a) {
      return this.H.get(a)
    };
    _.KJe = new JJe;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy10d");
    _.Tl(_.xr);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy10c");
    _.NJe = _.$l("I6mUue");
    _.OJe = _.$l("Cej8pc");
    _.PJe = _.$l("rDHN7b");
    _.QJe = _.$l("hwtuhc");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.tAd = function(a) {
      var b = a.color,
        c = a.size;
      c = null != c ? c : "24px";
      a = '<svg class="' + (a.hb ? _.X("a-s-fa-Ha-pa") : "") + '" width="' + _.X(c) + '" height="' + _.X(c) + '" viewBox="0 0 24 24" fill="' + _.X(b) + '" focusable="false"><path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0z"/><path d="M3 20.01c0 1.1.89 1.99 2 1.99h14c1.1 0 2-.9 2-1.99V18H3v2.01zM18 19c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1-17H5c-1.1 0-2 .9-2 1.99V17h18V3.99C21 2.89 20.11 2 19 2zm-8.62 3h3.24l3.25 5.68h-3.24L10.38 5zm-3.52 6.16l3.11-5.44s1.62 2.85 1.62 2.84L8.49 14l-1.63-2.84zM15.51 14H9.3l1.62-2.84h6.21L15.51 14z"/></svg>';
      return (0, _.T)(a)
    };
    _.R("syt8");
    var kV, xAd, yAd, wAd;
    _.jV = function(a, b) {
      this.H = a;
      this.ha = b
    };
    _.uAd = new _.rv(0, 0, 1);
    _.vAd = new _.rv(9999, 11, 31);
    _.jV.prototype.contains = function(a) {
      return a.valueOf() >= this.H.valueOf() && a.valueOf() <= this.ha.valueOf()
    };
    _.jV.prototype.iterator = function() {
      return new wAd(this)
    };
    kV = function(a, b) {
      a = a.clone();
      a.add(new _.qv("d", b));
      return a
    };
    xAd = function(a, b) {
      a = a.clone();
      a.setDate(1);
      a.add(new _.qv("m", b));
      return a
    };
    _.zAd = function(a) {
      a = yAd(a);
      a = kV(a, -1);
      return new _.jV(a, a.clone())
    };
    _.AAd = function(a) {
      a = yAd(a);
      return new _.jV(a, a.clone())
    };
    _.BAd = function(a) {
      a = yAd(a);
      return new _.jV(xAd(a, 0), kV(xAd(a, 1), -1))
    };
    _.CAd = function(a) {
      a = yAd(a);
      return new _.jV(xAd(a, -1), kV(xAd(a, 0), -1))
    };
    _.DAd = function(a) {
      a = yAd(a);
      var b = (a.getDay() + 6) % 7,
        c = a.Bx;
      a = kV(a, -(b >= c ? b - c : b + (7 - c)));
      b = kV(a, 6);
      return new _.jV(a, b)
    };
    _.EAd = function(a) {
      var b = _.DAd(a);
      a = kV(b.H, -7);
      b = kV(b.ha, -7);
      return new _.jV(a, b)
    };
    yAd = function(a) {
      return a ? a.clone() : new _.rv
    };
    wAd = function(a) {
      this.H = a.H.clone();
      this.ha = Number(a.ha.CF())
    };
    _.C(wAd, _.Ei);
    wAd.prototype.next = function() {
      if (Number(this.H.CF()) > this.ha) throw _.Di;
      var a = this.H.clone();
      this.H.add(new _.qv("d", 1));
      return a
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.VId = function(a, b) {
      a = new a;
      a.Tc = function() {
        return b
      };
      return a
    };
    _.R("syto");
    var WId = function(a) {
      a = a || {};
      var b = a.attributes,
        c = a.ab,
        d = a.checked,
        e = a.disabled,
        f = a.id,
        h = a.Rn,
        k = a.web,
        m = a.Jb,
        n = a.rD;
      a = k ? " " + _.X("g-Qa-Jm") : d ? " " + _.X("g-Qa-rc") : " " + _.X("g-Qa-zo");
      d = k ? "mixed" : d ? "true" : "false";
      m = n ? ' aria-labelledby="' + _.X(n) + '"' : m ? ' aria-label="' + _.X(m) + '"' : "";
      return (0, _.T)('<span class="' + _.X("g-Qa") + " " + _.X("h-sb-Ic") + a + (e ? " " + _.X("g-Qa-db") : "") + (c ? " " + _.X(c) : "") + '" role="checkbox" aria-checked="' + d + '"' + m + (f ? ' id="' + _.X(f) + '"' : "") + (e ? ' aria-disabled="true" tabindex="-1"' : ' tabindex="' +
        (h ? _.X(h) : "0") + '"') + (b ? " " + _.Cs(b) : "") + ' dir="ltr"><div class="' + _.X("g-Qa-Rd") + '" role="presentation"></div></span>')
    };
    _.CV = function(a, b) {
      var c = _.VId(_.Kq, "g-Qa");
      _.BAa.call(this, a, b, c);
      this.tg(4, !0)
    };
    _.C(_.CV, _.BAa);
    _.CV.prototype.Ka = function() {
      this.Oc(_.Yc(WId, {
        checked: this.tj(),
        disabled: !this.isEnabled(),
        web: null == this.Sz
      }, void 0, this.Ia()))
    };
    _.CV.prototype.We = function(a) {
      _.CV.Qa.We.call(this, a);
      _.Xc(a, "h-sb-Ic");
      this.Da().dir = "ltr";
      this.Mb("g-Qa-Rd") || (a = this.Ia().Ka("DIV", "g-Qa-Rd"), this.Da().appendChild(a));
      _.zq(this.Cb("g-Qa-Rd"), "presentation")
    };
    _.CV.prototype.Vt = function(a) {
      _.CV.Qa.Vt.call(this, a);
      this.Da() && _.fd(this.Da(), "g-Qa-am", !1)
    };
    _.CV.prototype.ql = function(a) {
      _.CV.Qa.ql.call(this, a);
      this.isEnabled() && this.Da() && _.fd(this.Da(), "g-Qa-am", !0)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy101");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syjb");
    var aob = function(a, b, c) {
      b = c || b;
      a = "" + _.hhb({
        ne: "createShortcut",
        hb: !0
      }, b);
      c = "" + _.ws("o", "", !0)(null, b);
      a += '<span class="' + _.X("a-v-j") + '"><span class="' + _.X("a-v-ff") + '"><div class="' + _.X("a-v-T") + '" aria-label="' + _.X("Add shortcut to Drive") + _.X(c) + '">' + _.U("Add shortcut to Drive") + "</div></span></span>" + _.ws("p", "", !0)({
        ab: "dn-w-bd-j"
      }, b);
      return (0, _.T)(a)
    };
    _.bob = function(a, b, c) {
      _.Py.call(this, a);
      this.ha = b;
      this.ta = c
    };
    _.z(_.bob, _.Py);
    _.bob.prototype.Qg = function() {
      var a = this,
        b = this.Oa().get(_.Pe),
        c = new _.Ky(new _.go([this.ha.Em()], function() {
          return 0 < a.ha.kc()
        }), new _.Ny(this.ha, function(d) {
          return !d.Ud()
        }, this));
      return new _.ro({
        visible: c,
        enabled: b.H,
        content: new _.qo("Add shortcut to Drive"),
        Iy: aob,
        ne: new _.qo("createShortcut")
      })
    };
    _.bob.prototype.Wd = function(a) {
      this.submit(new _.$nb(this.ha.Je(), this.ta), a)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.TUd = function(a, b) {
      var c = a.Ao;
      a = a.role;
      return _.ws("K", "", !1)({
        Ao: c,
        role: a
      }, b)
    };
    _.R("syvf");
    _.UUd = function(a, b) {
      var c = a.iconUrl,
        d = a.ne,
        e = a.color,
        f = a.label;
      a = a.Wg;
      b = c ? '<img class="' + _.X("H-qa-ud-c") + '" ' + _.Cs(_.sAd({
        url: c
      })) + ' role="presentation"/>' : f && e ? '<div class="' + _.X("H-qa-ud-c") + " " + _.X("H-qa-ud-aq-r-j") + '" style="background-color: ' + _.X(_.Gs(e)) + '" role="presentation"><span class="' + _.X("H-qa-ud-c-r") + '">' + _.U(f) + "</span></div>" : '<div class="' + _.X("H-qa-ud-c") + " " + _.X("H-qa-ud-aq-c-j") + '"' + (e ? ' style="background-color: ' + _.X(_.Gs(e)) + '"' : "") + ' role="presentation">' + _.U(_.xW({
        variant: d,
        Wg: a,
        Nd: "H-qa-ud-qd-c"
      }, b)) + "</div>";
      return (0, _.T)(b)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvl");
    _.HX = function(a, b) {
      _.Oy.call(this);
      this.Fa = a;
      this.ka = a.get(_.Ze);
      this.Xl = b
    };
    _.z(_.HX, _.Oy);
    _.HX.prototype.Oa = function() {
      return this.Fa
    };
    _.HX.prototype.Wd = function(a, b) {
      a = _.Bu(this.ka, this.Oa(), this.Xl, a.mp());
      this.mi(a, b);
      this.ka.H(a)
    };
    _.HX.prototype.mi = function() {};

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syxi");
    var m9d = function(a) {
      _.Zw.call(this);
      this.rect = new _.$q(a || new _.Jj(0, 0), _.Kj);
      _.$w(this, this.rect);
      this.width = new _.go([this], this.ha.bind(this));
      _.$w(this, this.width);
      this.height = new _.go([this], this.H.bind(this));
      _.$w(this, this.height)
    };
    _.z(m9d, _.Zw);
    m9d.prototype.ha = function() {
      return this.rect.get().width
    };
    m9d.prototype.H = function() {
      return this.rect.get().height
    };
    m9d.prototype.update = function(a) {
      this.ka = !0;
      this.rect.set(a);
      _.RVa(this)
    };
    var n9d = function(a) {
      a = a.XIa;
      var b = _.T,
        c = '<div class="' + _.X("a-qh-sp") + " " + _.X(a) + '" role="presentation">';
      var d = (0, _.T)('<div class="' + _.X("a-qh-il") + '" aria-hidden=true><div class="' + _.X("a-qh-il-lh") + '"><div class="' + _.X("a-qh-xo-lh") + '"></div></div><div class="' + _.X("a-qh-il-li") + '"><div class="' + _.X("a-qh-xo-li") + '"><span class="' + _.X("a-qh-il-lm") + '">.</span></div></div></div>');
      return b(c + d + '<div class="' + _.X("a-qh-sp-x") + " " + _.X(a) + '" role="presentation"></div></div>')
    };
    _.gY = function(a, b) {
      _.yw.call(this, n9d, {
        XIa: void 0 === a ? "" : a
      }, b);
      this.Gd = new m9d;
      this.Gd.Li(this);
      this.Pa = this.Pb = this.rb = this.mf = this.qc = null
    };
    _.z(_.gY, _.yw);
    _.gY.prototype.Od = function() {
      return this.Gd
    };
    _.gY.prototype.Ka = function() {
      _.yw.prototype.Ka.call(this);
      this.qc = this.Cb("a-qh-il-lh");
      this.rb = this.Cb("a-qh-xo-lh");
      this.mf = this.Cb("a-qh-il-li");
      this.Pb = this.Cb("a-qh-xo-li")
    };
    _.gY.prototype.ML = function() {
      return this.Cb("a-qh-sp-x")
    };
    _.gY.prototype.Sa = function() {
      _.yw.prototype.Sa.call(this);
      if ("onresize" in this.Xa() && !_.q.MutationObserver) this.Xa().onresize = (0, _.B)(this.wa, this);
      else {
        if (_.q.MutationObserver) {
          var a = new MutationObserver((0, _.B)(this.wa, this));
          a.observe(this.Xa(), {
            childList: !0,
            attributes: !0,
            subtree: !0,
            attributeFilter: ["style"]
          });
          _.rj(this, a.disconnect, a)
        }
        o9d(this, this.qc, "under");
        o9d(this, this.mf, "over")
      }
      this.Od().listen(_.df(this.dispatchEvent, "resize"), this);
      this.Od().width.observe(this.Ml, this, !0);
      this.Od().height.observe(this.Vk,
        this, !0);
      this.Pa = _.Hk(this.wa, 0, this);
      _.rj(this, this.Pf.bind(this))
    };
    var o9d = function(a, b, c) {
      a.Ra().listen(b, "OverflowEvent" in _.q ? "overflowchanged" : c + "flow", a.wa)
    };
    _.gY.prototype.wa = function() {
      var a = _.Km(this.Xa());
      this.Od().update(a)
    };
    _.gY.prototype.Pf = function() {
      null != this.Pa && (_.Ik(this.Pa), this.Pa = null)
    };
    _.gY.prototype.Ml = function(a) {
      _.Hm(this.rb, a + 1);
      _.Hm(this.Pb, Math.max(a - 1, 0))
    };
    _.gY.prototype.Vk = function(a) {
      _.Im(this.rb, a + 1);
      _.Im(this.Pb, Math.max(a - 1, 0))
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var Hae, Iae, Lae, Mae, Nae;
    Hae = function() {
      var a = new _.iq;
      a.Fc("_shared_");
      a.setTitle("Shared With Me");
      return a
    };
    Iae = function(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c].getItem(),
          e = d.qf();
        if (0 == e.length && 0 < Number(d.Bt())) b._shared_ = (b._shared_ || 0) + 1;
        else
          for (d = 0; d < e.length; d++) {
            var f = e[d];
            b[f] = (b[f] || 0) + 1
          }
      }
      b = _.Cc(b);
      return 0 < b.length && _.Lf(b, function(h) {
        return h == a.length
      })
    };
    _.Jae = function(a) {
      var b = this;
      this.ha = a;
      this.H = new _.$q(!1);
      this.$c = new _.Ckb(new _.go([_.fr(a, "sa")], function() {
        return b.ha.hasMoreResults()
      }), this.H)
    };
    _.Jae.prototype.ke = function() {
      return this.$c
    };
    _.Jae.prototype.GE = function() {
      var a = this;
      this.H.set(!0);
      return this.ha.joa().tb(function() {
        return a.H.set(!1)
      })
    };
    _.Kae = [];
    Lae = function(a) {
      var b = a.Sc,
        c = a.G6,
        d = a.Jb,
        e = a.delay,
        f = a.St,
        h = a.position;
      a = a.xeb;
      a = null != a ? a : !0;
      b = 'data-tooltip="' + _.X(b) + '" aria-label="' + _.X(null != d ? d : b) + '" ';
      c = null != c ? c : 3;
      h = null != h ? h : 2;
      h = (0, _.rs)('data-tooltip-align="' + (1 == h ? "l" : 3 == h ? "t" : 4 == h ? "r" : "b") + "," + (1 == c ? "l" : 2 == c ? "r" : "c") + '"');
      e = b + h + ' data-tooltip-delay="' + _.X(null != e ? e : 500) + '"' + (a ? ' data-tooltip-unhoverable="true"' : "") + (f ? ' data-tooltip-only-on-overflow="true"' : "");
      return (0, _.rs)(e)
    };
    Mae = function(a) {
      return a.getItem().getId()
    };
    Nae = function(a, b, c, d, e) {
      _.I.call(this);
      var f = a.get(_.lc);
      a.get(_.Ub);
      var h = a.get(_.bc);
      b = f.ha(b, c, null != e ? h.H[e] : null);
      this.ua = d.H;
      this.H = b.ta();
      this.Ta(this.H);
      this.ha = new _.kC(a, this.H);
      this.Ta(this.ha);
      this.ma = new _.PB(this.ha.jk(), Mae);
      this.ta = new _.Jae(this.H);
      this.ka = new _.er;
      this.ha.ka.listen(this.l1a, this);
      this.ha.ka.Li(this)
    };
    _.z(Nae, _.I);
    _.g = Nae.prototype;
    _.g.getData = function() {
      return this.ma
    };
    _.g.kL = function() {
      return this.ua
    };
    _.g.CZ = function() {
      return this.ka
    };
    _.g.En = function() {
      return this.ta
    };
    _.g.jL = function() {
      return this.H.wva()
    };
    _.g.uY = function() {
      return this.H.ha
    };
    _.g.hQ = function() {
      return this.H.lp()
    };
    _.g.Aq = function(a) {
      return this.H.Aq(a)
    };
    _.g.l1a = function(a) {
      var b = null;
      "Ab" == a.type ? b = "yb" : "Bb" == a.type && (b = "zb");
      b && this.ka.H(new _.Z7d(b))
    };
    _.R("syxc");
    _.yY = function(a) {
      _.vw.call(this, a.get(_.rn).Ia());
      var b = this;
      this.Fa = a;
      this.ma = this.wa = this.ha = 0;
      this.Ja = new _.Xw(this, this);
      _.rj(this, function() {
        _.q.cancelAnimationFrame(b.ha);
        _.q.clearTimeout(b.wa);
        _.q.clearTimeout(b.ma)
      })
    };
    _.z(_.yY, _.vw);
    _.yY.prototype.Oa = function() {
      return this.Fa
    };
    _.yY.prototype.Ka = function() {
      _.vw.prototype.Ka.call(this);
      _.km(this.Xa(), ["a-S-dc", "a-S-dc-Vf", "sn-G"]);
      this.Ja.listen("sizeToggle.action", this.Ga.bind(this));
      _.Oae(this)
    };
    _.yY.prototype.Ga = function() {
      var a = this.Xa(),
        b = _.Noa(a, "a-S-dc-Vf");
      _.Noa(a, "a-S-dc-Vg");
      _.Fb(a, "sn-G");
      (a = this.Ia().Mb("a-S-dc-bk-rh", a)) && _.dd(a, "expanded", !b);
      this.Ra().qd(this.Xa(), _.vj, function() {
        _.Xc(this.Xa(), "sn-G")
      });
      _.Oae(this)
    };
    _.Oae = function(a) {
      _.q.cancelAnimationFrame(a.ha);
      _.q.clearTimeout(a.wa);
      a.wa = _.q.setTimeout(function() {
        var b = a.Xa(),
          c = b.style.visibility,
          d = b.style.display,
          e = b.style.transition,
          f = b.style.height || b.offsetHeight + "px";
        b.style.visibility = "hidden";
        b.style.display = "block";
        b.style.transition = "none";
        b.style.height = "auto";
        var h = b.offsetHeight + "px";
        b.style.height = f;
        e ? b.style.transition = e : b.style.removeProperty("transition");
        d ? b.style.display = d : b.style.removeProperty("display");
        c ? b.style.visibility = c : b.style.removeProperty("visibility");
        f != h && (a.ha = _.q.requestAnimationFrame(function() {
          a.ha = _.q.requestAnimationFrame(function() {
            _.q.cancelAnimationFrame(a.ha);
            b.style.height = h;
            a.ma && _.q.clearTimeout(a.ma);
            a.ma = _.q.setTimeout(function() {
              a.dispatchEvent("od")
            }, 150)
          })
        }))
      }, 20)
    };
    _.yY.prototype.jo = function() {
      return _.jm(this.Xa(), "a-S-dc-Vg")
    };
    var Pae = function() {
        var a = '<div class="' + _.X("a-S-dc-r") + '"><span class="' + _.X("a-S-dc-Q-r") + '">';
        return (0, _.T)(a + "Loading\u2026</span></div>")
      },
      Qae = function(a) {
        var b = a.count;
        a = '<div class="' + _.X("a-S-dc-r") + '"><span class="' + _.X("a-S-dc-Q-r") + '">';
        b = _.U(b) + " selected";
        return (0, _.T)(a + b + "</span></div>")
      },
      Sae = function(a, b, c) {
        b = c || b;
        _.He(a.Hxa);
        c = a.Hxa;
        var d = a.R4a,
          e = a.Rg,
          f = a.OZa,
          h = a.GZa,
          k = a.FZa,
          m = a.itemId;
        a = a.fab;
        var n = "";
        if (1 < c.length) {
          n += '<div class="' + _.X("a-S-dc-bk-rh") + '" data-target="sizeToggle" role="treeitem" aria-labelledby="drive-view-footer-toggle-text drive-view-footer-collapsed drive-view-footer-expanded" aria-expanded="false" tabindex="0"><div id="drive-view-footer-toggle-text" class="' +
            _.X("a-S-dc-Q-r") + '">';
          var r = _.U(c.length) + " folders";
          n = n + r + '</div><div id="drive-view-footer-collapsed" aria-label="' + _.As("Collapsed");
          n += '" class="' + _.X("a-S-dc-lh-c") + '">' + _.jd({
            hb: !0,
            variant: "unfoldMore"
          }, b) + '</div><div id="drive-view-footer-expanded" aria-label="';
          n += _.As("Expanded");
          n += '" class="' + _.X("a-S-dc-fe-c") + '">' + _.jd({
            hb: !0,
            variant: "unfoldLess"
          }, b) + '</div></div><div class="' + _.X("a-S-dc-fu") + '">'
        }
        r = c.length;
        for (var t = 0; t < r; t++) {
          var y = c[t],
            A = y.path,
            G = d,
            J = f,
            L = h,
            N = k,
            V = m,
            ia = a,
            ua = e;
          var Ma =
            b;
          var Oa = y.ueb;
          _.He(A);
          y = A;
          A = ia;
          ia = '<div class="' + _.X("a-S-dc-r") + '"' + (Oa ? ' data-id="' + _.X(Oa) + '"' : "") + ">";
          Oa && (ia += '<span class="' + _.X("a-S-dc-Q-r") + '">', ia = A ? ia + _.Hs(_.U(A)) : ia + "My Drive", ia += "</span>" + Rae({
            Rg: ua
          }, Ma) + '<span class="' + _.X("a-S-dc-ds") + '" data-target="pathContinuator" tabindex="0" aria-label="', ia += _.As("Expand path"), ia += '">&hellip;</span>' + Rae({
            Rg: ua
          }, Ma));
          Oa = y.length;
          for (A = 0; A < Oa; A++) {
            var Ca = y[A],
              za = !_.us(Ca.id, "_shared_");
            ia += '<span class="' + _.X("a-S-dc-Q-r") + (za ? " " + _.X("a-S-dc-Q-A") :
              "") + '"' + (za ? ' data-target="footerItem" data-item-id="' + _.X(Ca.id) + '" tabindex="0"' : "") + ' aria-label="' + _.X(Ca.title) + '" role="link" ' + Lae({
              Sc: Ca.title,
              St: !0
            }) + ">" + _.U(Ca.title) + "</span>" + Rae({
              Rg: ua
            }, Ma)
          }
          1 == G ? ia += '<span class="' + _.X("a-S-dc-Q-r") + " " + _.X("a-S-dc-Q-A") + " " + _.X("a-S-dc-ha-Q") + '" data-target="footerItem" data-item-id="' + _.X(V) + '" tabindex="0" aria-label="' + _.X(J) + (N ? " " + _.X(N) : "") + '" role="link"' + (J ? " " + Lae({
            Sc: J,
            St: !0
          }) : "") + ">" + (L ? '<img src="' + _.X(_.Fs(L)) + '" class="' + _.X("a-S-dc-Q-c") +
            '">' : "") + _.Hs(_.U(J)) + "</span>" : (ia += '<span class="' + _.X("a-S-dc-Q-r") + '">', Ma = _.U(G) + " selected", ia = ia + Ma + "</span>");
          ia += "</div>";
          Ma = (0, _.T)(ia);
          n += Ma
        }
        n += 1 < c.length ? "</div>" : "";
        return (0, _.T)(n)
      },
      Rae = function(a, b) {
        a = a.Rg;
        return (0, _.T)('<div class="' + _.X("a-S-dc-Yc-vc") + '">' + _.jd({
          hb: !0,
          variant: a ? "chevronLeft" : "chevronRight"
        }, b) + "</div>")
      };
    var Tae = function(a, b) {
      _.yY.call(this, a);
      this.H = b;
      this.Ca = a.get(_.Ub);
      this.Na = a.get(_.Nr);
      this.$a = a.get(_.bd);
      this.Ea = null
    };
    _.z(Tae, _.yY);
    _.g = Tae.prototype;
    _.g.Ka = function() {
      _.yY.prototype.Ka.call(this);
      _.Yw(this.Ja, {
        "pathContinuator.click": this.EUa.bind(this),
        footerItem: this.Pa.bind(this)
      })
    };
    _.g.Sa = function() {
      _.yY.prototype.Sa.call(this);
      this.H.qh().observe(this.sWa, this.vWa, this.oW, this, !0);
      this.Ra().qd(this.$a, "r", this.oW)
    };
    _.g.sWa = function(a, b) {
      _.nbb(b).observe(this.oW, this, !0)
    };
    _.g.vWa = function(a, b) {
      _.nbb(b).ti(this);
      this.oW()
    };
    _.g.EUa = function(a) {
      a = _.Gc(a, "id");
      this.Nqa(null, !1, a).tb(this.oW, this)
    };
    _.g.oW = function() {
      this.Ea && this.Ea.cancel();
      _.Zj(this.Xa());
      var a = this.H.Mz();
      if (0 < a)
        if (Iae(_.Gi(this.H.qh().Om()))) {
          _.Zn(this.Xa(), Pae);
          var b = this.H.qh(),
            c = b.get(b.Je()[0]);
          b = c.getItem().qf();
          0 == b.length && (b = ["_shared_"]);
          c = _.dC(c).get();
          b = _.nd(b, _.df(this.Nqa, c, !0), this);
          this.Ea = (new _.ln(b)).tb(_.df(this.Yeb, c), this)
        } else _.Zn(this.Xa(), Qae, {
          count: a
        });
      ((b = this.jo()) && 0 == a || !b && 0 < a) && this.Ga();
      b && _.Oae(this)
    };
    _.g.Yeb = function(a, b) {
      var c = this;
      b = _.If(b, function(e) {
        return e[0]
      });
      b = _.nd(b, function(e) {
        return e[1]
      });
      var d = {
        Hxa: _.nd(b, function(e) {
          var f = 0 < e.length ? e[0].Cp() : null;
          e = _.nd(e, function(h) {
            return {
              title: h.getTitle(),
              id: h.getId()
            }
          });
          return {
            ueb: f ? f : "",
            path: e
          }
        }),
        R4a: this.H.Mz(),
        Rg: !1
      };
      a = !0;
      1 == this.H.Mz() && (b = this.H.qh().Om().next(), d.OZa = b.Kj().get(), b.Yt || (b.Yt = new _.go([_.cC(b)], b.ze.bind(b))), d.GZa = b.Yt.get(), d.FZa = b.Rl(), d.itemId = b.getItem().getId(), b = _.dC(b).get()) && (a = !1, this.Na.Jc(b).then(function(e) {
          return e.Kj().get()
        },
        function() {
          return ""
        }).then(function(e) {
        e && (d.fab = e);
        _.Zn(c.Xa(), Sae, d);
        _.Oae(c)
      }));
      a && (_.Zn(this.Xa(), Sae, d), _.Oae(this))
    };
    _.g.Nqa = function(a, b, c) {
      return _.Vk(Uae(this, a)).tb(_.df(this.fRa, a, b, c), this)
    };
    _.g.fRa = function(a, b, c, d) {
      if (d && d.getId() == c) return _.Uk([d]);
      if ("_shared_" == c) return _.Uk([Hae()]);
      c = this.Ca.Pl(c, "load_parents_for_selected_items");
      c.tb((0, _.B)(this.osa, this, b, a));
      return c
    };
    _.g.osa = function(a, b, c) {
      return _.Vk(Uae(this, b)).tb(_.df(this.nVa, a, b, c), this)
    };
    _.g.nVa = function(a, b, c, d) {
      var e = b ? c.qf() && c.qf()[0] : c.Cp();
      if (e) {
        if (d && e == d.getId()) return [d, c];
        a = this.Ca.Pl(e, "load_parents_for_selected_items", void 0, a).tb((0, _.B)(this.osa, this, a, b));
        a.ug(this.Ua, this);
        a.tb(function(f) {
          f.push(c);
          return f
        });
        return a
      }
      return 0 < c.Bt() ? [Hae(), c] : [c]
    };
    var Uae = function(a, b) {
      return b ? a.Na.Jc(b).then(function(c) {
        return c.getItem()
      }, function() {
        return null
      }) : _.da(a.Ca.ih())
    };
    Tae.prototype.Ua = function(a) {
      if ((a = _.Ab(a)) && 5 == a.H()) return []
    };
    Tae.prototype.Pa = function(a) {
      a = _.Gc(a, "itemId");
      (new _.AC({
        docId: a
      })).submit(this.Oa())
    };
    var Vae = function() {
        return (0, _.T)('<div class="' + _.X("a-t-bb-Bf-Wg") + '"><table class="' + _.X("a-t-bb-J-dd") + '"></table></div>')
      },
      Wae = function() {
        return (0, _.T)('<div class="' + _.X("a-u-xb-j") + '"><div class="' + _.X("l-u-xb") + " " + _.X("l-u-Ab") + " " + _.X("l-u-ha") + '"></div></div>')
      };
    var Xae = function(a, b) {
      _.I.call(this);
      this.Fa = a;
      this.ka = b;
      this.wa = a.get(_.Ub);
      this.ua = a.get(_.Pe);
      this.Ca = a.get(_.Qa);
      this.ha = new _.oae(0, this.ka.getContent().Xa());
      this.H = null;
      this.ma = new _.Xw(this.ka.Xa(), this);
      this.ta = new _.cf(this);
      this.Ta(this.ta);
      this.va = new _.gs(100, a.get(_.iqa));
      this.Ta(this.va);
      this.Lb = 0;
      this.ka.Hk()
    };
    _.z(Xae, _.I);
    _.g = Xae.prototype;
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.enable = function() {
      1 != this.Lb && (this.ka.yBa() && _.Yw(this.ma, {
        "itemUploadDrop.drop": this.uUa
      }), _.Yw(this.ma, {
        "selectionArea.drop": this.iXa
      }), this.ta.listen(this.va, "idle", this.Ea), this.Lb = 1)
    };
    _.g.disable = function() {
      1 == this.Lb && (Yae(this, null), this.ma.removeAll(), this.ta.removeAll());
      this.Lb = 0
    };
    _.g.Gp = function() {
      return !1
    };
    _.g.uUa = function(a) {
      if (1 != this.Lb) return 0;
      var b = _.Hc(a);
      if (!_.tqb(b) || !this.ua.zd().get()) return 0;
      var c = _.Fc(a, "id");
      c = c ? this.ka.cE(c) : null;
      if (!c || !c.Dd()) return 0;
      var d = a.currentTarget;
      c = c.getItem();
      switch (a.type) {
        case "dragenter":
          Zae(this, b, d, c);
          break;
        case "dragover":
          Zae(this, b, d, c);
          break;
        case "dragleave":
          Yae(this, d);
          break;
        case "drop":
          return Yae(this, d), this.ua.zd().get() ? (b = (b = _.AE(c)) ? b.getCapabilities() : null) && _.Zp(b) && 1 == this.Lb ? ((new _.Eqb(this.Oa(), _.hd(c), a)).submit(), a = 1) : a = 2 : a = 2, a
      }
      return 1
    };
    _.g.iXa = function(a) {
      if (1 != this.Lb || !_.tqb(_.Hc(a))) return 0;
      switch (a.type) {
        case "dragenter":
        case "dragover":
          _.rae(this.ha, !0);
          break;
        case "dragleave":
        case "drop":
          _.rae(this.ha, !1)
      }
      return 1
    };
    var Zae = function(a, b, c, d) {
        a.H != c && (a.H && $ae(a.H, !1), $ae(c, !0), a.H = c);
        c = a.ua.zd().get();
        var e = _.AE(d);
        e = e ? e.getCapabilities() : null;
        (e = !(!e || !_.Zp(e))) && _.Tb(a.Ca) ? (_.vY(a.ha, !0, d, d.getId() === a.wa.ih().getId(), c), _.uY(!1)) : (_.vY(a.ha, !1), _.uY(!0, b));
        _.uqb(b, c && e ? "copy" : "none")
      },
      $ae = function(a, b) {
        for (var c = a; c && !c.classList.contains("a-Wa-ka");) c = c.parentElement;
        _.wpb(c || a, b, !0)
      },
      Yae = function(a, b) {
        b && $ae(b, !1);
        a.H && a.H != b && $ae(a.H, !1);
        a.H = null;
        _.vY(a.ha, !1);
        _.uY(!1)
      };
    Xae.prototype.Ea = function() {
      _.vY(this.ha, !1);
      _.uY(!1)
    };
    _.zY = function(a, b) {
      var c = new Nae(a, b.kj, b.Kl, b.ri, b.Nj),
        d = a.get(_.Qa);
      b.tm = b.tm && _.Tb(d);
      _.bY.call(this, a, b, c, b.Lh, b.Su, b.Cy);
      this.PJa = c;
      this.Ta(c);
      this.uF = b;
      this.UM = a.get(_.vr);
      _.YX(this, 2);
      _.ma("Or00Qe")
    };
    _.z(_.zY, _.bY);
    _.g = _.zY.prototype;
    _.g.Ix = function() {
      return _.cr
    };
    _.g.Aq = function(a) {
      return this.kg().Aq(a)
    };
    _.g.Uq = function() {
      return this.uF
    };
    _.g.Mqa = function() {
      return this.Uq().CC || null
    };
    _.g.Ju = function() {
      return this.uF.Xt
    };
    _.g.zda = function() {
      return this.UM.PE()
    };
    _.g.zG = function() {
      return new Tae(this.Oa(), this.Jk())
    };
    _.g.BD = function() {
      var a = new _.w6d;
      return [new _.yae(this.Oa(), this, this.Jk(), this.Fm(), this.En()), new _.B8d(this.Oa(), this, this.Jk(), this.Fm(), a, new _.Fae(this.Oa(), this.Jk(), this.Fm(), this.En()), this.Uq().ri.Nx()), new _.PX(this.Oa(), this, this.Jk(), a), new _.xY(this.Oa(), this, this.Jk(), this.Fm(), this.En(), this.zt()), new Xae(this.Oa(), this)]
    };
    _.g.yBa = function() {
      return !0
    };
    _.g.jk = function() {
      return this.Fm()
    };
    _.g.cE = function(a) {
      return this.Fm().wk(a)
    };
    _.g.getItem = function(a) {
      return (a = this.cE(a)) ? a.getItem() : null
    };
    _.g.Hk = function() {
      return null
    };
    _.g.we = function() {
      return []
    };
    _.g.Xj = function() {
      var a = this.Hk();
      return a && (a = a.Yb().get()) ? a.getItem().getId() : null
    };
    _.g.Vma = function(a, b) {
      return new _.aF(this.Oa(), this, a, b)
    };
    _.g.e4 = function(a) {
      var b = this.Fm(),
        c = _.zg(a),
        d = b.Cu(),
        e = b.kc();
      a = a.length;
      for (var f = [], h = 0; h < e; h++) {
        var k = d(b.get(h));
        if (k in c && (f.push(k), 0 == --a)) break
      }
      return f
    };
    _.g.VZ = function(a) {
      return (a = _.TX(this.Dl, a)) ? a : null
    };
    _.g.MZ = function(a) {
      a = this.VZ(a);
      switch (this.Km()) {
        case 1:
          var b = _.Yc(Vae),
            c = _.Rj("a-t-bb-J-dd", b),
            d = this.nf().Cb("a-t-bm-Rf").cloneNode(!0);
          c.appendChild(d);
          d = a.cloneNode(!1);
          if (0 < a.childElementCount) {
            var e = a.children[0].cloneNode(!0);
            d.appendChild(e)
          }
          c.appendChild(d);
          d = a.getBoundingClientRect();
          d = new _.pm(d.left, d.top, d.width, d.height);
          c.style.width = d.width + "px";
          c.style.height = "100%";
          return {
            BC: a, Lp: b, k0: d, isPrimary: !1
          };
        case 2:
          return b = d = a, (c = _.Rj("l-u-Ab-T-j", d)) ? (a = _.Yc(Wae), d = _.Rj("l-u-xb", a), e =
            c.cloneNode(!0), d.appendChild(e), d = c) : a = d.cloneNode(!0), a.style.margin = "0", c = d.getBoundingClientRect(), {
            BC: b,
            Lp: a,
            k0: new _.pm(c.left, c.top, c.width, c.height),
            isPrimary: !1
          }
      }
      return null
    };
    _.g.pM = function() {
      return this.nf().H
    };
    _.g.wx = function(a, b, c) {
      _.wpb(a, b, c)
    };
    _.g.vL = function(a, b, c) {
      _.xpb(a, b, c)
    };
    _.g.RD = function(a, b) {
      _.fd(a, "a-l-bb-za-fo-mh", b)
    };
    _.g.En = function() {
      return _.bY.prototype.En.call(this)
    };
    _.zY.prototype[_.ecb] = !0;
    _.zY.prototype[_.j2d] = !0;
    _.zY.prototype[_.Gae] = !0;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syxw");
    _.abe = new _.$q(!1);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var Kbe = function(a, b) {
      _.Iw.call(this, _.Cbe, _.Gbe);
      this.Yl = a;
      this.H = b
    };
    _.z(Kbe, _.Iw);
    _.R("syw9");
    _.DY = function(a, b, c) {
      _.Qy.call(this, a, b, "Preview", void 0, "visibility");
      this.ha = c
    };
    _.z(_.DY, _.Qy);
    _.DY.prototype.Wd = function(a) {
      var b = _.Ry(this).xt();
      var c = 1 == b.zn() ? this.ha.Sg().map(function(d) {
        return d.xt()
      }).filter(function(d) {
        return d.getId() != b.getId() && d.zn() == b.zn()
      }) : [];
      this.submit(new Kbe(b, c), a)
    };
    _.DY.prototype.Es = function(a) {
      return a.zd()
    };
    _.DY.prototype.ka = function() {
      return !1
    };
    _.Lbe = function(a, b) {
      _.Qy.call(this, a, b, "Delete backup", void 0, "trash")
    };
    _.z(_.Lbe, _.Qy);
    _.Lbe.prototype.Wd = function(a) {
      this.submit(new _.Hbe([_.Ry(this).xt()]), a)
    };
    _.Lbe.prototype.Es = function(a) {
      return a.zd()
    };
    _.Lbe.prototype.ka = function() {
      return !1
    };
    _.EY = function(a, b, c) {
      _.Qy.call(this, a, b, "Turn off backups", void 0, "cloudOff");
      this.ha = c
    };
    _.z(_.EY, _.Qy);
    _.EY.prototype.Wd = function(a) {
      var b = _.Ry(this).xt(),
        c = this.ha.Sg().map(function(d) {
          return d.xt()
        }).filter(function(d) {
          return d.zn() == b.zn()
        });
      this.submit(new _.Jbe(c), a)
    };
    _.EY.prototype.Es = function(a) {
      return a.zd()
    };
    _.EY.prototype.to = function(a) {
      var b = a.xt();
      a = b.zn();
      b = _.u(b, _.Sv, 6);
      return !(1 != a || !b || !_.x(b, 1))
    };
    _.EY.prototype.ka = function() {
      return !1
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syy2");
    _.hf();
    _.dce = Symbol("drive.view.api.SelectableCorpusView");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syy0");
    _.JY = function(a) {
      _.ly.call(this, void 0 === a ? null : a);
      this.Sf("a-r-d")
    };
    _.z(_.JY, _.ly);
    _.JY.prototype.ae = function() {};

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syy4");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syy5");
    _.Cde = function(a, b, c) {
      b = void 0 === b ? _.V3a : b;
      _.Iw.call(this, b);
      this.kj = a;
      this.H = b;
      this.Kl = c || null
    };
    _.z(_.Cde, _.Iw);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syzf");
    _.dZ = function() {};
    _.C(_.dZ, _.cx);
    _.vf(_.dZ);
    _.dZ.prototype.Ka = function(a) {
      var b = _.Iq(this, a);
      b = a.Ia().Ka("DIV", "h-sb-Ic " + b.join(" "), [die(this, a.getContent(), a.Ia()), this.H(a.Ia())]);
      this.ae(b, a.nl());
      return b
    };
    _.dZ.prototype.jc = function(a) {
      return a && a.firstChild
    };
    _.dZ.prototype.Qc = function(a, b) {
      var c = _.Qj("*", "h-w", b)[0];
      if (c) {
        _.Om(c, !1);
        a.Ia().Yb().body.appendChild(c);
        var d = new _.ox;
        d.Qc(c);
        a.zi(d)
      }
      _.Qj("*", this.Tc() + "-ff", b)[0] || b.appendChild(die(this, b.childNodes, a.Ia()));
      _.Qj("*", this.Tc() + "-Re", b)[0] || b.appendChild(this.H(a.Ia()));
      return _.dZ.Qa.Qc.call(this, a, b)
    };
    var die = function(a, b, c) {
      return c.Ka("DIV", "h-sb-Ic " + (a.Tc() + "-ff"), b)
    };
    _.dZ.prototype.H = function(a) {
      return a.Ka("DIV", {
        "class": "h-sb-Ic " + (this.Tc() + "-Re"),
        "aria-hidden": !0
      }, "\u00a0")
    };
    _.dZ.prototype.Tc = function() {
      return "h-R-w-d"
    };
    _.Nq("h-R-w-d", function() {
      return new _.Ex(null, null, _.dZ.Ab())
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syza");
    _.D_ = function() {};
    _.C(_.D_, _.cx);
    _.vf(_.D_);
    _.D_.prototype.Tc = function() {
      return "h-A-d"
    };
    _.Nq("h-A-d", function() {
      return new _.bx(null, _.D_.Ab())
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var SJe;
    _.RJe = function(a, b) {
      a.H = b;
      a.ua()
    };
    SJe = function(a) {
      a = a || {};
      var b = a.Wf;
      a = a.AW;
      return (0, _.T)('<div class="' + _.X("a-s-tb-pa") + " " + _.X("a-S-x-j") + '"' + (b ? ' jscontroller="' + _.X(b) + '" jsaction="' + _.X("rcuQ6b") + ":" + _.X("npT2md") + '"' : "") + ">" + _.U(null != a ? a : "") + "</div>")
    };
    _.zBe = function(a) {
      _.Ef.call(this, void 0 === a ? "highlight cancelled" : a)
    };
    _.z(_.zBe, _.Ef);
    var TJe = function(a) {
      var b = new _.GJe(a);
      a.Ta(b);
      a.registerService(_.LB, b)
    };
    _.R("sy10a");
    var UJe = _.$l("bVCrnc");
    var VJe = _.$l("QP1bAd");
    _.g2 = _.$l("cXuyyb");
    _.WJe = _.$l("MZzfNc");
    var XJe = {
        caption: "Locating\u2026",
        kj: _.hc,
        tm: !0
      },
      YJe = new Map,
      $Je;
    YJe.set(_.cA, _.WJe);
    var ZJe = function() {
      this.H = new Set;
      this.ha = new _.$q(!0);
      this.ka = new _.$q(!0);
      this.ma = new _.Ckb(this.ha, this.ka)
    };
    ZJe.prototype.ke = function() {
      return this.ma
    };
    ZJe.prototype.GE = function() {
      return _.Bk(Array.from(this.H.values()).map(function(a) {
        return a.GE()
      })).then()
    };
    $Je = function(a, b) {
      var c = [],
        d = [];
      a.H.clear();
      b.forEach(function(e) {
        a.H.add(e);
        e = e.ke();
        c.push(e.H);
        d.push(e.ha)
      });
      _.ar(a.ha, new(Function.prototype.bind.apply(_.cE, [null].concat(_.zc(c)))));
      _.ar(a.ka, new(Function.prototype.bind.apply(_.cE, [null].concat(_.zc(d)))))
    };
    _.i2 = function(a, b, c, d) {
      d = void 0 === d ? XJe : d;
      a = new _.Ln(a);
      _.kw.call(this, a, d.caption || "");
      var e = this;
      this.params = c;
      this.Ua = a.get(_.bc);
      this.Ca = a.get(_.DXa);
      this.mf = a.get(_.HXa);
      this.Af = a.get(_.dA);
      this.Lf = a.get(_.Cw);
      this.fq = a.get(_.Tn);
      d = a.get(_.vr);
      this.Re = b.tm(this.Oa()) ? d.PE() : null;
      d = _.u(a.get(_.bn), _.Kna, 55);
      this.Td = !(!d || !_.F(d, 1, !1));
      this.ua = a.get(_.sn);
      this.Be = a.get(_.Wq);
      _.bw(a);
      this.Gd = a.get(_.cn);
      this.d4 = new _.uae(this.Gd);
      TJe(a);
      this.Na = a.get(_.LB);
      this.Jd = new _.$q(!1);
      this.Pa = c.Nj ? c.Nj :
        null;
      h2(this, 1);
      this.H = b;
      _.rj(this, function() {
        return _.sj(e.H)
      });
      this.Gb = null;
      this.ta = new _.$q(this.H.ara(this.params.layout));
      this.wa = new _.$q("Locating\u2026");
      this.wa.observe(function(f) {
        e.ld = f;
        e.dispatchEvent("l")
      }, this);
      _.ar(this.wa, this.H.Kj(this.Oa()));
      this.ma = null;
      if (b = this.ky()) _.A7d(b.Nm, this.getId()), _.bSa(b.Nm);
      this.$a = new ZJe;
      this.rb = new _.Kr(new _.QB([]));
      this.Pf = a.get(_.Lr);
      this.va = this.Db = null;
      if (this.Hg() == _.nc || this.Hg() == _.oc) this.va = _.Bca(new _.Vb(this.Oa()), this.Bn());
      this.wd =
        aKe(this, 7);
      this.Vc = aKe(this, 10);
      this.Ja = aKe(this, 4);
      this.ha = new _.rt;
      this.ha.Cg(this);
      _.rj(this, function() {
        _.sj(e.ha)
      });
      h2(this, 2)
    };
    _.z(_.i2, _.kw);
    _.g = _.i2.prototype;
    _.g.WR = function(a) {
      _.kw.prototype.WR.call(this, a);
      this.ha && a.push(this.ha)
    };
    _.g.Ov = function(a) {
      var b = this;
      this.ha && _.Rb(_.bp, this.Oa()).then(function(d) {
        d.ma(b.H.Ah.H);
        _.Ib(b.ha, 3)
      }).then(null, _.Js(this.Oa(), 217));
      _.kw.prototype.Ov.call(this, a);
      var c = this.zt();
      c && c.Ov();
      a && (this.MJ(a), _.RJe(this.Na, a.path || []))
    };
    _.g.kB = function() {
      _.gm(this.Xa(), UJe);
      return !1
    };
    _.g.Vqa = function() {
      return this.rb
    };
    _.g.qR = function() {
      return {}
    };
    _.g.activate = function() {
      var a = this;
      _.kw.prototype.activate.call(this);
      h2(this, 5);
      this.Jd.set(!0);
      this.Ja.then(function() {
        a.rf() && _.gm(a.Xa(), _.Z3b)
      });
      this.Gb = this.H.Ju(this.Oa(), this.va);
      this.Lf.Ea(this)
    };
    var h2 = function(a, b) {
        var c = a.ky();
        c && !c.Nm.Er(b) && _.uca(a.Ua, c.id, b)
      },
      bKe = function(a, b, c) {
        var d = _.am(a.Xa(), b, c, a);
        _.rj(a, function() {
          return _.bm(d)
        })
      },
      cKe = function(a) {
        return (a = a.Da()) ? new _.Xm(a) : null
      };
    _.i2.prototype.Ga = function() {
      var a = this,
        b = cKe(this);
      if (b) {
        b = b.find("[data-region-root]");
        var c = b.map(function(d) {
          return _.Af(d)
        }).join("::");
        c = c || null;
        if (this.Db == c) return _.da();
        this.Db = c;
        return _.Bk(b.map(function(d) {
          return _.II(d, _.xr, a.Oa())
        })).then(function(d) {
          var e = [],
            f = [];
          d.forEach(function(h) {
            e.push(h.gv());
            f.push(h.zI())
          });
          _.XBa(a.rb, new _.QB(e));
          $Je(a.$a, f)
        })
      }
      return _.da()
    };
    _.i2.prototype.Va = function(a) {
      var b = this;
      _.kw.prototype.Va.call(this, a);
      if (a) {
        a = this.ky();
        var c = !this.params.Jga || !this.Td;
        a && c ? (c = this.Xa().parentElement, this.ma = this.Ca.ria(this, c, a.Nm), this.ma.then(function() {
          b.ma = null
        })) : this.Ca.Gia()
      }
    };
    _.i2.prototype.Ka = function() {
      h2(this, 3);
      var a = _.Do(this.ua, _.C7d, {
        Tv: this.getId()
      });
      this.Oc(a);
      dKe(this)
    };
    _.i2.prototype.We = function(a) {
      _.kw.prototype.We.call(this, a);
      this.ha && _.Ib(this.ha, 3);
      h2(this, 3);
      dKe(this)
    };
    var aKe = function(a, b) {
        return (a = a.ky()) ? _.URa(a.Nm, b) : Promise.resolve()
      },
      dKe = function(a) {
        bKe(a, _.g2, function(b) {
          h2(a, b.data)
        });
        bKe(a, _.PJe, function() {
          a.Ga()
        });
        bKe(a, _.J6c, function(b) {
          b = b.data;
          _.xca(a.Oa(), b.reason, b.mx, b.Eya, b.Nta)
        });
        bKe(a, _.K6c, function(b) {
          b = b.data;
          _.cc(a.Oa(), b.reason, b.mx)
        });
        a.Af.ma(a);
        h2(a, 6);
        (a.gD ? a.H.c4a(a.Oa(), _.Ym(cKe(a), "c-wiz").el()) : a.H.Ug().then(function(b) {
          if (!a.isDisposed()) {
            var c = cKe(a);
            if (c) {
              var d = _.Do(a.ua, SJe, {
                Wf: String(a.H.Ah.ma || "")
              });
              d.appendChild(b.render());
              c.append(d)
            }
          }
        })).then(function() {
          a.isDisposed() || a.ka()
        }).then(null, _.Js(a.Oa(), 165))
      };
    _.i2.prototype.ka = function() {
      var a = this;
      this.ha && _.Ib(this.ha, 4);
      this.Ga().then(function() {
        var d = cKe(a);
        if (d) {
          d = d.find("img[data-drive-wiz-load-handling]").size();
          var e = a.getId();
          e = _.oca(e);
          e.Hs = d;
          _.pca(e)
        }
      }).then(null, function(d) {
        d instanceof _.Fk || _.cc(a.Oa(), d, 166)
      });
      var b = _.FC(_.GC(this).measure(this.Ga)),
        c = this.ua.Yi().listen(_.Ata, b, !1);
      _.rj(this, function() {
        a.ua.Yi().zo(c)
      })
    };
    _.i2.prototype.deactivate = function() {
      _.kw.prototype.deactivate.call(this);
      this.Jd.set(!1)
    };
    _.i2.prototype.Sa = function() {
      var a = this;
      _.kw.prototype.Sa.call(this);
      this.Be.H(this);
      var b = this.zt();
      b && b.jy.listen(function(c) {
        var d = a.Da();
        d && _.gm(d, VJe, c)
      }, this)
    };
    _.i2.prototype.focus = function() {
      var a = this;
      this.ma ? (this.Ca.Dpa(), this.ma.then(function(b) {
        b.view == a && eKe(a)
      })) : (this.Xa().focus(), eKe(this))
    };
    var eKe = function(a) {
      var b = a.fq.request();
      a.Ja.then(function() {
        _.gm(a.Xa(), _.xS, b)
      })
    };
    _.g = _.i2.prototype;
    _.g.Bn = function() {
      return _.i2d(Object.assign({}, this.params))
    };
    _.g.ky = function() {
      return null != this.Pa ? this.Ua.H[this.Pa] : null
    };
    _.g.Xj = function() {
      return this.va
    };
    _.g.Ju = function() {
      return this.Gb
    };
    _.g.Hg = function() {
      return this.params.view
    };
    _.g.vM = function() {
      return this.wa.get()
    };
    _.g.Gp = function(a) {
      var b = this.zt();
      switch (a) {
        case _.c4a:
          b = this.ta.get();
          this.H.aRa(b) != b && (fKe(this, a), this.mf.ka());
          break;
        case _.R3a:
          eKe(this);
          fKe(this, a);
          break;
        case _.Q3a:
          b && b.focus();
          break;
        default:
          YJe.get(a) ? (b = this.Xa(), _.gm(b, YJe.get(a))) : b && b.NM(a)
      }
    };
    var fKe = function(a, b) {
      var c = a.Oa().get(_.Ze);
      c.H(_.Bu(c, a.Oa(), b))
    };
    _.g = _.i2.prototype;
    _.g.hasFocus = function() {
      return this.Xa().contains(document.activeElement)
    };
    _.g.highlight = function(a) {
      var b = this;
      return new _.zk(function(c, d) {
        b.Ja.then(function() {
          return new _.zk(function(f, h) {
            _.em(b.Xa(), _.rJe, function(k) {
              k.data.id != a && h("Mismatch on highlight ids, expected: " + a + ", got: " + k.data.id);
              k.data.error ? h(k.data.error) : f()
            });
            _.gm(b.Xa(), _.qJe, {
              id: a,
              czb: void 0
            })
          })
        }).then(c, d);
        var e = {};
        b.Jd.observe(function() {
          b.rf() || (d(new _.zBe), b.Jd.wl(e))
        }, e, !0)
      })
    };
    _.g.rf = function() {
      return this.Jd.get()
    };
    _.g.Qpa = function() {
      return this.Jd
    };
    _.g.KE = function(a) {
      return a.view != this.params.view ? !1 : !0
    };
    _.g.MJ = function(a) {
      this.params = a;
      this.ta.set(this.H.ara(this.params.layout))
    };
    _.g.mCa = function() {
      return this.wd
    };
    _.g.Uy = function() {
      return this.Vc
    };
    _.g.nf = function() {
      return null
    };
    _.g.Km = function() {
      return this.ta.get()
    };
    _.g.voa = function() {
      return this.ta
    };
    _.g.Hk = function() {
      return this.H.Hk(this.Oa())
    };
    _.g.yt = function() {
      return this.H.yt(this.Oa())
    };
    _.g.zt = function() {
      return this.Re
    };
    _.g.En = function() {
      return this.$a
    };
    _.g.Fm = function() {
      return new _.PB(this.Pf.XD(_.cr), function(a) {
        return a.getId()
      })
    };
    _.g.TAa = function() {
      _.gm(this.Da(), _.uJe, null)
    };
    _.g.Aq = function(a) {
      var b = this.Xa().querySelector('[jscontroller="ygbDTc"]');
      return _.II(b, _.m7c).then(function(c) {
        return c.Aq(a)
      })
    };
    _.i2.prototype[_.GXa] = !0;
    _.B7d(_.i2);
    _.i2.prototype[_.R$a] = !0;
    _.i2.prototype[_.S6d] = !0;
    _.i2.prototype[_.iab] = !0;
    _.i2.prototype[_.j2d] = !0;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy11y");
    var Hrf = function(a) {
      _.M.call(this);
      this.Fa = a;
      this.ma = this.Fa.get(_.bd);
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.ka = new _.$q(0);
      this.H = null;
      this.ha = [];
      this.ta = void 0;
      this.Za.listen(this.ma, "q", this.va)
    };
    _.z(Hrf, _.M);
    _.Irf = function(a) {
      _.co(a.ka);
      a.Za.Yc(a.H, "Kh", a.ua);
      a.H = null
    };
    Hrf.prototype.va = function() {
      this.ta !== this.ma.Vd() && _.Irf(this)
    };
    Hrf.prototype.ua = function(a) {
      this.dispatchEvent(a)
    };
    _.bt({
      id: _.CAa,
      Rb: Hrf
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Jrf = function(a, b) {
      return 0 < _.O9a.parse(_.uB(a.Yg()), b)
    };
    _.Nrf = function(a, b) {
      if (a > b) return "C7uZwb";
      for (var c = 0; c < Krf.length; c++) {
        var d = Lrf[Krf[c]];
        if ("piqGWb" !== d && "C7uZwb" !== d) {
          var e = _.Mrf(d);
          if (e.H.Fb(a) && e.ha.Fb(b)) return d
        }
      }
      return "C7uZwb"
    };
    _.Mrf = function(a) {
      var b = _.AAd(),
        c = 0;
      switch (a) {
        case "OmBWEe":
          b = _.zAd();
          break;
        case "R2QIub":
          c = -6;
          break;
        case "JS9eTb":
          c = -29;
          break;
        case "Rxg41b":
          c = -89
      }
      c && b.H.add(new _.qv("d", c));
      a = b.ha;
      a.add(new _.qv("d", 1));
      b.ha.set(a);
      return b
    };
    _.R("sy11z");
    var Orf = function(a) {
        var b = "";
        _.He(a.VQ);
        a = a.VQ;
        for (var c = a.length, d = 0; d < c; d++) {
          var e = a[d];
          b += 2 == e.Kb() ? "<strong>" + _.U(_.p(e, 3)) + "</strong>" : _.U(_.p(e, 1))
        }
        return (0, _.T)(b)
      },
      Prf = function(a) {
        var b = "";
        _.He(a.VQ);
        a = a.VQ;
        for (var c = a.length, d = 0; d < c; d++) {
          var e = a[d];
          b += 2 == e.Kb() ? _.U(_.p(e, 3)) : _.U(_.p(e, 1))
        }
        return (0, _.T)(b)
      };
    var Lrf, Krf;
    Lrf = {
      Ggb: "piqGWb",
      vvb: "bAa4l",
      txb: "OmBWEe",
      gqb: "R2QIub",
      fqb: "JS9eTb",
      hqb: "Rxg41b",
      rjb: "C7uZwb"
    };
    Krf = Object.keys(Lrf);
    _.Qrf = {
      piqGWb: "Any time",
      bAa4l: "Today",
      OmBWEe: "Yesterday",
      R2QIub: "Last 7 days",
      JS9eTb: "Last 30 days",
      Rxg41b: "Last 90 days",
      C7uZwb: "Custom\u2026"
    };
    var Rrf = function(a, b) {
      this.ha = a;
      this.ka = b
    };
    Rrf.prototype.H = function() {
      var a = Srf(this.ha),
        b = Srf(this.ka);
      a = _.Nrf(a, b);
      return {
        label: "Modified:",
        content: "C7uZwb" == a ? this.ha ? this.ka ? this.ha.Yg() + (" to " + this.ka.Yg()) : "After " + this.ha.Yg() : "Before " + this.ka.Yg() : _.Qrf[a]
      }
    };
    var Srf = function(a) {
      var b = new _.rv;
      a && _.Jrf(a, b);
      return b
    };
    var Trf = function(a) {
      this.ha = a
    };
    Trf.prototype.H = function() {
      var a = this.ha.Yg(),
        b = this.ha.hh();
      return {
        label: "Owner:",
        content: "me" == a ? 0 == b ? "Not me" : "Me" : 0 == b ? "Not " + a : a
      }
    };
    var Urf = function(a) {
      this.ha = a
    };
    Urf.prototype.H = function() {
      return {
        label: "Shared with:",
        content: this.ha.Yg()
      }
    };
    var Vrf = function(a) {
      this.ha = a
    };
    Vrf.prototype.H = function() {
      return {
        label: "Item name:",
        content: _.uB(this.ha.Yg())
      }
    };
    var Wrf = function(a) {
      this.ha = a
    };
    Wrf.prototype.H = function() {
      return {
        label: "Type:",
        content: _.C$a[this.ha.Yg()]
      }
    };
    var Xrf = function(a) {
      this.Fa = a;
      this.H = new _.KB(a)
    };
    Xrf.prototype.Oa = function() {
      return this.Fa
    };
    Xrf.prototype.parse = function(a) {
      return _.H$a(this.Oa(), a).then(this.ha.bind(this, a))
    };
    Xrf.prototype.ha = function(a) {
      a = this.H.parse(a);
      var b = [],
        c = a.reduce(function(d, e) {
          var f = e.Oo();
          9 == f ? b.push(e.Yg()) : d[f] = e;
          return d
        }, {});
      a = a.reduce(function(d, e) {
        var f = e.Oo();
        if (c[f]) {
          switch (f) {
            case 17:
            case 18:
              d.push((new Rrf(c[17], c[18])).H());
              c[17] = null;
              c[18] = null;
              break;
            case 4:
              d.push((new Wrf(e)).H());
              break;
            case 5:
              d.push((new Trf(e)).H());
              break;
            case 14:
              d.push((new Vrf(e)).H());
              break;
            case 10:
              d.push((new Urf(e)).H())
          }
          c[f] = null
        }
        return d
      }, []);
      return {
        Opa: b.join(" "),
        oZ: a
      }
    };
    var Zrf, bsf, $rf, asf;
    _.Yrf = function(a, b) {
      this.ta = b;
      this.ua = new Xrf(a);
      this.ka = [];
      this.ma = "";
      this.ha = this.H = !1
    };
    Zrf = function(a) {
      return 2 == a.Kb()
    };
    bsf = function(a) {
      return $rf(a).length ? 1 : asf(a) ? 2 : 0
    };
    _.csf = function(a) {
      return _.da(bsf(a)).then(function(b) {
        switch (b) {
          case 1:
            if (b = $rf(this), b.length) return {
              uBa: 1,
              content: Orf({
                VQ: b
              }),
              label: Prf({
                VQ: b
              }),
              query: b.reduce(function(d, e) {
                return d + (Zrf(e) ? _.p(e, 3) : _.p(e, 1))
              }, "")
            };
          case 2:
            var c = asf(this);
            if (c) return this.ua.parse(c).then(function(d) {
              var e = d.Opa;
              _.He(d.oZ);
              var f = d.oZ;
              e = e ? '<div class="' + _.X("a-nb-Se-Tj-ms") + '">' + _.U(e) + "</div>" : "";
              for (var h = f.length, k = 0; k < h; k++) {
                var m = f[k];
                e += '<div class="' + _.X("a-nb-Se-Tj-Va") + '"><div class="' + _.X("a-nb-Se-Tj-Va-ga") +
                  '">' + _.U(m.label) + '&nbsp;</div><div class="' + _.X("a-nb-Se-Tj-Va-x") + '">' + _.U(m.content) + "</div></div>"
              }
              f = (0, _.T)(e);
              e = d.Opa;
              _.He(d.oZ);
              d = d.oZ;
              e = "" + (e ? _.U(e) : "");
              h = d.length;
              for (k = 0; k < h; k++) m = d[k], e += " " + _.U(m.label) + " " + _.U(m.content);
              d = (0, _.T)(e);
              return {
                uBa: 2,
                content: f,
                label: d,
                query: c
              }
            });
          default:
            return null
        }
      }.bind(a))
    };
    $rf = function(a) {
      if (!a.H) {
        var b = _.u(a.ta, _.Hu, 7);
        b && (b = _.u(b, _.dOa, 1)) && (b = _.ob(b, _.bOa, 1), b.length && (b = _.ob(b[0], _.$Na, 1), b.some(Zrf) && (a.ka = b)));
        a.H = !0
      }
      return a.ka
    };
    asf = function(a) {
      if (!a.ha) {
        var b = _.u(a.ta, _.Hu, 7);
        b && (b = _.u(b, _.ZNa, 2)) && (b = _.p(b, 1), b.length && (b = b[0])) && (a.ma = b);
        a.ha = !0
      }
      return a.ma
    };
    _.$7 = function(a) {
      this.ka = a.get(_.Nr);
      this.ha = new _.Nx;
      this.ma = _.v(a.get(_.Qa), 1, "");
      this.H = a.get(_.Ub).Uv().then(function(b) {
        return b.getId()
      })
    };
    _.$7.prototype.getLabel = function(a) {
      var b = this;
      return this.isPlaceholder(a).then(function(c) {
        var d = b.ha.get(a);
        return c ? dsf(b, a) : d ? _.da(d.get()) : b.ka.Jc(a).then(function(e) {
          e = e.Kj();
          b.ha.set(a, e);
          return e.get()
        }, function() {
          return ""
        })
      })
    };
    _.$7.prototype.isPlaceholder = function(a) {
      return _.da(!a || "anywhere" == a || "visibleWithinDomain" == a || "sharedWithMe" == a || this.H.then(function(b) {
        return a == b
      }))
    };
    _.$7.prototype.Yx = function(a) {
      return "sharedWithMe" == a
    };
    _.$7.prototype.tca = function(a) {
      return _.da(this.H.then(function(b) {
        return a == b
      }))
    };
    var dsf = function(a, b) {
      return a.H.then(function(c) {
        switch (b) {
          case "":
          case "anywhere":
            return "Anywhere";
          case c:
            return "My Drive";
          case "visibleWithinDomain":
            return "Visible to anyone in " + a.ma;
          case "sharedWithMe":
            return "Shared with me"
        }
      })
    };
    _.$7.prototype.zs = function(a) {
      return a ? this.ka.Jc(a).then(function(b) {
        b = b.getItem().sj();
        return !(!b || !_.x(b, 3))
      }, function() {
        return !1
      }) : _.da(!1)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var mAf, oAf, pAf, qAf, rAf;
    _.lAf = function(a) {
      a = _.ckb(a, !0);
      if (!a) return null;
      a = a.filter(function(b) {
        return _.dkb(b)
      });
      return _.Sjb(a)
    };
    mAf = function(a) {
      a = (a = (a = a.ha.get()) && a.getItem()) && a.getCapabilities();
      return !(!a || !_.x(a, 8))
    };
    _.nAf = function(a) {
      return mAf(a) && a.ua.zd().get() ? a.Nbb.bind(a) : null
    };
    oAf = function(a) {
      a = a.H.getData().gw();
      return _.Kf(a, function(b) {
        var c = b.getType();
        return 4 != c && 3 != c && 1 != b.Lg()
      })
    };
    pAf = function(a) {
      return mAf(a) && a.ua.zd().get() ? a.COa.bind(a) : null
    };
    qAf = function(a) {
      var b = a.domainName,
        c = a.role,
        d = "";
      if (a.Ao) switch (c) {
        case 2:
          a = "Anyone at " + (_.U(b) + (' with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can view</span>')));
          d += a;
          break;
        case 3:
          a = "Anyone at " + (_.U(b) + (' with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can comment</span>')));
          d += a;
          break;
        case 4:
          a = "Anyone at " + (_.U(b) + (' with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can edit</span>')));
          d += a;
          break;
        default:
          a = "Anyone at " + (_.U(b) + (' with the link <span class="' + (_.X("H-qa-wc-ua-r-Ld") +
            '">can access</span>'))), d += a
      } else switch (c) {
        case 2:
          a = "Anyone at " + (_.U(b) + (' <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and view</span>')));
          d += a;
          break;
        case 3:
          a = "Anyone at " + (_.U(b) + (' <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and comment</span>')));
          d += a;
          break;
        case 4:
          a = "Anyone at " + (_.U(b) + (' <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and edit</span>')));
          d += a;
          break;
        default:
          a = "Anyone at " + (_.U(b) + (' <span class="' + (_.X("H-qa-wc-ua-r-Ld") + '">can find and access</span>'))), d +=
            a
      }
      return (0, _.T)(d)
    };
    rAf = function(a, b, c) {
      b = c || b;
      c = a.Ao;
      a = a.role;
      return (0, _.T)(_.ws("L", "", !1)({
        Ao: c,
        role: a
      }, b))
    };
    _.R("sy127");
    var sAf = function(a, b, c) {
      b = c || b;
      a = '<div><div class="' + _.X("H-qa-ea-A-wa") + '">' + _.U(_.FXa(null, b)) + '</div><div class="' + _.X("H-qa-ea-A-Xh") + '"><span class="' + _.X("H-qa-ea-A-tf-r") + '"></span><span class="' + _.X("H-qa-ea-A-rh-fl") + '"></span><div class="' + _.X("H-qa-ea-A-gj-r") + '"></div><input class="' + _.X("H-qa-ea-A-A-vb") + " " + _.X("g-Gh") + '" readonly type="text" contenteditable="true"/><br><div class="' + _.X("H-qa-ea-A-rh") + '"></div><div role="link" tabindex="0" class="' + _.X("H-qa-ea-A-ca") + '">';
      return (0, _.T)(a +
        "Sharing settings</div></div></div>")
    };
    var tAf = function(a, b) {
      a = void 0 === a ? "" : a;
      _.CV.call(this, b || void 0);
      this.H = a
    };
    _.z(tAf, _.CV);
    tAf.prototype.Ka = function() {
      _.CV.prototype.Ka.call(this);
      _.Xc(this.Xa(), "H-qa-ng-Vi");
      var a = this.Cb("g-Qa-Rd");
      _.Xc(a, "H-qa-ng-Bl");
      0 == this.H.length || a.appendChild(_.Yc(_.xW, {
        variant: this.H,
        Nd: "H-qa-ng-Bl-qd",
        Wg: _.Rx()
      }))
    };
    _.O8 = function(a, b, c) {
      _.AW.call(this, c);
      this.H = a;
      this.Gb = b;
      this.va = this.ua = this.ta = this.Pa = this.ha = this.Ga = this.Ua = this.Bb = this.Na = null;
      this.Ja = this.rb = !1;
      this.Ca = new _.Gx(this.Pb, 1E3, this);
      this.Ta(this.Ca)
    };
    _.z(_.O8, _.AW);
    _.g = _.O8.prototype;
    _.g.Ka = function() {
      this.Sf("H-qa-ea-A-ia");
      _.AW.prototype.Ka.call(this);
      var a = this.jc(),
        b = _.Yc(sAf);
      this.Ia().appendChild(a, b);
      _.gd(a, "Shareable link");
      _.zq(a.parentElement, "dialog");
      this.Na = this.Cb("H-qa-ea-A-Xh");
      this.Bb = this.Cb("H-qa-ea-A-wa");
      this.Ua = this.Cb("H-qa-ea-A-tf-r");
      this.Ga = this.Cb("H-qa-ea-A-gj-r");
      this.ha = this.Cb("H-qa-ea-A-A-vb");
      this.Pa = this.Cb("H-qa-ea-A-ca");
      this.ta = new tAf("smallWhiteLink", void 0);
      this.ub(this.ta, !0);
      _.gd(this.ta.Xa(), "Enable link sharing");
      a = this.Cb("H-qa-ea-A-rh");
      this.ta.render(a)
    };
    _.g.Sa = function() {
      var a = this;
      _.AW.prototype.Sa.call(this);
      _.Bj(this.ha, "click", function() {
        uAf(a)
      });
      _.Bj(this.ta, ["show", "hide"], function(b) {
        b.stopPropagation()
      });
      _.Bj(this.ta, "check", function() {
        _.Om(a.ha, !0);
        a.Ca.rf() ? (a.Ca.stop(), _.Fb(a.ha, "H-qa-A-zt")) : vAf(a, pAf(a.H), !0)
      });
      _.Bj(this.ta, "uncheck", function() {
        _.Om(a.ha, !1);
        var b = vAf;
        var c = a.H;
        c = mAf(c) && c.ua.zd().get() ? c.uJa.bind(c) : null;
        b(a, c, !1)
      });
      _.Hmd(this.Pa, function() {
        var b = _.nAf(a.H);
        b && b()
      });
      this.Ra().listen(this.H, "Pb", this.lc)
    };
    _.g.Va = function(a) {
      a && !this.isVisible() && (this.H.clear(), this.va && !this.va.H ? (wAf(this, !0), _.Rk(this.va, this.Db, this)) : this.Db());
      _.AW.prototype.Va.call(this, a)
    };
    _.g.Qd = function() {
      var a = this.kl();
      this.ma.DW = new _.om(a, window.innerWidth - a, window.innerHeight - a, 0);
      _.AW.prototype.Qd.call(this)
    };
    _.g.onFocus = function(a) {
      _.ec(this.Da(), a.target) || _.jm(a.target, "H-qa-ea-A-zn") || !this.isVisible() || this.Va(!1)
    };
    _.g.Rda = function() {
      if (this.ha && this.Na && _.Pm(this.Na)) uAf(this);
      else {
        var a = this.jc();
        a && a.focus()
      }
    };
    var wAf = function(a, b) {
      _.Om(a.Bb, b);
      _.Om(a.Na, !b)
    };
    _.O8.prototype.Db = function() {
      this.va = this.ua = null;
      this.Ja = !1;
      xAf(this);
      yAf(this)
    };
    var yAf = function(a) {
      if (_.ckb(a.H, !0) && !a.Ja) {
        a.Ja = !0;
        var b = pAf(a.H);
        a.Gb && b && !_.ekb(a.H) && (_.Xc(a.ha, "H-qa-A-zt"), _.Om(a.ha, !0), a.Ca.start(), vAf(a, b, !0))
      }
    };
    _.O8.prototype.lc = function() {
      this.Da() && this.isVisible() && (xAf(this), this.Ja || (uAf(this), yAf(this)))
    };
    var xAf = function(a) {
        var b = _.lAf(a.H);
        if (b) {
          wAf(a, !1);
          a.ta.Va(mAf(a.H));
          var c = !!_.nAf(a.H);
          _.Om(a.Pa, c);
          if (!a.ua || a.ua.H) a.Ca.stop(), zAf(a, !!_.ekb(a.H)), AAf(a, b), b = a.H.getUrl(), a.ha.setAttribute("value", b)
        } else wAf(a, !0)
      },
      AAf = function(a, b) {
        var c = _.Uh || _.Fh ? a.H.Dd() ? "Link to share this folder" : "Link to share this file" : a.H.Dd() ? "Link to share this folder. Copied to the clipboard." : "Link to share this file. Copied to the clipboard.";
        _.gd(a.ha, c);
        0 == b.length ? a.Ia().oh(a.Ua, "Link sharing off") : a.Ia().oh(a.Ua,
          "Link sharing on");
        BAf(a, b)
      },
      BAf = function(a, b) {
        a.Ia().He(a.Ga);
        0 == b.length ? oAf(a.H) ? a.Ia().oh(a.Ga, "Only specific people can access") : a.Ia().oh(a.Ga, "Private, not shared") : _.Ue(b, function(c) {
          var d = null;
          switch (c.getType()) {
            case 2:
              d = _.Yc(qAf, {
                domainName: c.getName(),
                Ao: c.H,
                role: c.Lg()
              }, void 0, this.Ia());
              break;
            case 4:
              d = _.Yc(rAf, {
                Ao: c.H,
                role: c.Lg()
              }, void 0, this.Ia())
          }
          d && this.Ia().appendChild(this.Ga, d)
        }, a)
      },
      CAf = function(a, b) {
        b ? (b = a.H.va, AAf(a, [new _.Rjb(b ? 2 : 4, b || "Unnamed", null, !0, 2, null, !1, null)])) : AAf(a,
          [])
      },
      zAf = function(a, b) {
        _.Fb(a.ha, "H-qa-A-zt");
        a.ta && a.ta.sf(b);
        _.Om(a.ha, b)
      };
    _.O8.prototype.Pb = function() {
      zAf(this, !0);
      uAf(this)
    };
    var vAf = function(a, b, c) {
        b && (CAf(a, c), a.ua && !a.ua.H ? a.va && !a.va.H ? c != a.rb && a.va.cancel() : (a.va = (new _.Pk).tb(function() {
          DAf(a, b)
        }), _.Sk(a.ua, a.va), a.rb = c) : EAf(a, b))
      },
      EAf = function(a, b) {
        a.ua = new _.Pk;
        _.Sk(b(), a.ua)
      },
      DAf = function(a, b) {
        a.ua = new _.Pk;
        _.Hk(function() {
          _.Sk(b(), a.ua)
        })
      },
      uAf = function(a) {
        a.ha && _.Pm(a.ha) && (a.ha.focus(), a.ha.select())
      };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("em1e");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var LAf = function(a) {
        null === a.d6 && (a.d6 = new _.go([_.jC(a)], a.Vja.bind(a)));
        return a.d6
      },
      MAf = function(a, b) {
        var c = a.H;
        a.ha && (c = a.ha.map(function(h) {
          return h.getId()
        }));
        var d = [],
          e = null;
        _.Tb(a.va) && (e = a.ka.ih().getId());
        for (a = 0; a < c.length; a++) {
          var f = c[a];
          f != e && d.push(f);
          if (f == b) break
        }
        return d
      },
      NAf = function(a, b) {
        var c = a.ma.Vd();
        c && c.Hg() == _.sc && (a.ta = c, a.H && _.Irf(a), _.co(a.ka), a.H = b, _.fo(a.ka, a.H.wa), a.Za.listen(a.H, "Kh", a.ua), _.rj(a.H, function() {
          a.H == b && _.Irf(a)
        }), a.H.Uda(a.ha), a.ha = [])
      },
      OAf = function(a) {
        _.E(this,
          a, 0, -1, null, null)
      };
    _.C(OAf, _.D);
    var PAf = function(a) {
      _.ly.call(this, a);
      this.tg(64, !0)
    };
    _.z(PAf, _.ly);
    PAf.prototype.Sa = function() {
      _.ly.prototype.Sa.call(this);
      _.dd(this.Xa(), "haspopup", !0)
    };
    var QAf = function(a) {
        a = a.iC;
        var b = '<nav role="navigation" class="' + _.X("o-Yc") + '" guidedhelpid="folder_path"><img class="' + _.X("o-Yc-Bb") + '"/><div id="' + _.X(a) + '" class="' + _.X("a-zf-Ti-mf-Eh") + '" role="heading">';
        b = b + 'Folder Path</div><div class="' + (_.X("o-Yc-Wb") + '" aria-labelledby="' + _.X(a) + '" role="list"></div></nav>');
        return (0, _.T)(b)
      },
      RAf = function(a, b, c) {
        b = c || b;
        c = a.Rg;
        a = a.hm;
        return (0, _.T)('<div class="' + _.X("o-Yc-vc") + '"><div class="' + _.X("o-Yc-vc-Wb") + '">' + _.jd({
          variant: c ? "chevronLeft" : "chevronRight",
          hb: !0,
          hm: a
        }, b) + "</div></div>")
      },
      SAf = function(a, b, c) {
        b = c || b;
        c = a.Fk;
        var d = a.id,
          e = a.N4a,
          f = a.view;
        d = f ? ' data-view="' + _.X(f) + '"' : d ? ' data-id="' + _.X(d) + '"' : "";
        return (0, _.T)('<div class="' + _.X("o-Yc-o") + '" role="listitem"><div class="' + _.X("o-Yc-o-T") + '" tabindex="-1" role="link" aria-label="' + _.X(c) + '" data-target="folder" data-tooltip="' + _.X(c) + '" data-tooltip-align="b,c" data-tooltip-delay="500" data-tooltip-unhoverable="true"' + d + ">" + _.Hs(_.U(c)) + "</div>" + (e ? "" : RAf(a, b)) + "</div>")
      },
      TAf = function() {
        return (0, _.T)('<div class="' +
          _.X("o-Yc-o") + '" guidedhelpid="folder_path_button" role="listitem"></div>')
      },
      UAf = function(a) {
        a = a.Io;
        return (0, _.T)('<div class="' + _.X("o-Yc-Ej") + '" guidedhelpid="' + _.X(a) + '"></div>')
      },
      VAf = function() {
        return (0, _.T)('<div class="' + _.X("o-Yc-Ej-vc") + '">\u00b7</div>')
      },
      WAf = function(a, b, c) {
        b = c || b;
        a = a.a3;
        return (0, _.T)('<div class="' + _.X("o-Ej-re-j") + '">' + (a ? VAf(null, b) + '<div class="' + _.X("o-Yc-Ej-tf-re") + '">' + _.Hs(_.U(a)) + "</div>" : "") + "</div>")
      },
      XAf = function() {
        return (0, _.T)("Add members")
      },
      YAf = function() {
        return (0, _.T)('<div class="' +
          _.X("o-Yc-o") + '" guidedhelpid="folder_path_button" role="listitem"></div>')
      },
      ZAf = function(a, b, c) {
        b = c || b;
        c = a.text;
        var d = a.item && (a.item.kb || a.item),
          e = a.ne,
          f = a.iconUrl,
          h = a.id;
        a = _.T;
        h = '<div aria-label="' + _.X(c) + '"' + (h ? ' data-id="' + _.X(h) + '"' : "") + ' data-tooltip="' + _.X(c) + '" data-tooltip-align="b,c" data-tooltip-delay="500" data-tooltip-unhoverable="true">';
        if (e) e = _.hhb({
          ne: e,
          iconUrl: f
        }, b);
        else {
          e = '<span class="' + _.X("h-v-c") + '">';
          var k = {
            item: d,
            Qe: _.Da(d.Ec())
          };
          d = k.item && (k.item.kb || k.item);
          f = k.Qe;
          var m =
            k.size;
          k = "";
          var n = _.xC(d),
            r = _.vC(d);
          if (n) {
            var t = t = {
              Lq: d.Oh()
            };
            var y = "";
            switch (t.Lq) {
              case 10:
              case 22:
              case 25:
                y += "Chocolate ice cream";
                break;
              case 26:
                y += "Old brick red";
                break;
              case 6:
              case 18:
              case 27:
                y += "Cardinal";
                break;
              case 7:
              case 19:
              case 28:
                y += "Wild strawberries";
                break;
              case 8:
              case 20:
              case 29:
                y += "Mars orange";
                break;
              case 9:
              case 21:
              case 30:
                y += "Yellow cab";
                break;
              case 31:
                y += "Macaroni";
                break;
              case 32:
                y += "Desert sand";
                break;
              case 33:
                y += "Slime green";
                break;
              case 11:
              case 23:
              case 34:
                y += "Asparagus";
                break;
              case 12:
              case 24:
              case 35:
                y +=
                  "Vern fern";
                break;
              case 36:
                y += "Spearmint";
                break;
              case 37:
                y += "Sea foam";
                break;
              case 38:
                y += "Pool";
                break;
              case 2:
              case 14:
              case 39:
                y += "Denim";
                break;
              case 3:
              case 15:
              case 40:
                y += "Rainy sky";
                break;
              case 41:
                y += "Blue velvet";
                break;
              case 42:
                y += "Purple dino";
                break;
              case 4:
              case 16:
              case 43:
                y += "Toy eggplant";
                break;
              case 44:
                y += "Purple rain";
                break;
              case 45:
                y += "Bubble gum";
                break;
              case 5:
              case 17:
              case 46:
                y += "Earthworm";
                break;
              case 1:
              case 13:
              case 47:
                y += "Mountain grey";
                break;
              default:
                y += "Mouse"
            }
            t = y
          } else t = "";
          if (n) {
            y = y = {
              Lq: d.Oh()
            };
            var A =
              "";
            switch (y.Lq) {
              case 10:
              case 22:
              case 25:
                A += "#ac725e";
                break;
              case 26:
                A += "#d06b64";
                break;
              case 6:
              case 18:
              case 27:
                A += "#f83a22";
                break;
              case 7:
              case 19:
              case 28:
                A += "#fa573c";
                break;
              case 8:
              case 20:
              case 29:
                A += "#ff7537";
                break;
              case 9:
              case 21:
              case 30:
                A += "#ffad46";
                break;
              case 31:
                A += "#fad165";
                break;
              case 32:
                A += "#fbe983";
                break;
              case 33:
                A += "#b3dc6c";
                break;
              case 11:
              case 23:
              case 34:
                A += "#7bd148";
                break;
              case 12:
              case 24:
              case 35:
                A += "#16a765";
                break;
              case 36:
                A += "#42d692";
                break;
              case 37:
                A += "#92e1c0";
                break;
              case 38:
                A += "#9fe1e7";
                break;
              case 2:
              case 14:
              case 39:
                A += "#9fc6e7";
                break;
              case 3:
              case 15:
              case 40:
                A += "#4986e7";
                break;
              case 41:
                A += "#9a9cff";
                break;
              case 42:
                A += "#b99aff";
                break;
              case 4:
              case 16:
              case 43:
                A += "#a47ae2";
                break;
              case 44:
                A += "#cd74e6";
                break;
              case 45:
                A += "#f691b2";
                break;
              case 5:
              case 17:
              case 46:
                A += "#cca6ac";
                break;
              case 1:
              case 13:
              case 47:
                A += "#cabdbf";
                break;
              default:
                A += "#5f6368"
            }
            y = A
          } else y = "";
          A = A = {
            Lq: d.Oh()
          };
          A = A.Lq;
          A = 1 == _.ts(null == A || 0 >= A || 47 < A ? "1" : "0");
          t = _.pC(_.oC(new _.mC, y), A).Id(t);
          y = d.Ph();
          m = _.rC(_.sC(_.qC(_.tC(new _.nC, f), n ? 2 : 1), t),
            null != y ? y : !1).setSize(null != m ? m : "24px");
          t = d.Tf();
          null == t ? t = null : (t = _.Ja(t), t = null == t ? null : t.ze());
          k += _.Ebb({
            Qe: f,
            iconUrl: null != t ? t : d.ze(),
            Dd: n,
            dg: m,
            Ud: r
          }, b);
          b = (0, _.T)(k);
          e = e + b + "</span>"
        }
        return a(h + e + '<span class="' + _.X("a-v-j") + '"><span class="' + _.X("a-v-ff") + '"><div class="' + _.X("a-v-T") + '">' + _.U(c) + "</div></span></span></div>")
      },
      $Af = function(a) {
        var b = a.query,
          c = a.content,
          d = "";
        a = "Did you mean " + _.zs(a.label);
        d += '<div class="' + _.X("a-nb-Se-ff") + '" role="status">';
        b = '<div class="' + _.X("a-nb-Se-ff-r") +
          '" aria-hidden="true">Did you mean:</div><a href="search?q=' + (_.Ds(b) + '" class="' + _.X("a-nb-Se-A") + '" aria-label="' + _.X(a) + '">' + (_.U(c) + "</a>"));
        return (0, _.T)(d + b + "</div>")
      };
    _.R("sym");
    _.aBf = new Map;
    var bBf = function() {
        this.ha = {};
        this.H = {}
      },
      P8 = function(a, b) {
        var c = _.cBf.Ab();
        c.ha[a] = b;
        c.H[a] = void 0
      };
    _.cBf = function() {
      bBf.apply(this, arguments)
    };
    _.z(_.cBf, bBf);
    _.vf(_.cBf);
    var dBf = function(a) {
      var b = a.Oa().get(_.Cw);
      a = a.Oa().get(_.bd).Vd();
      b = b.Ca(a);
      (a = b.EZ(_.mz)) && a.isVisible() || (a = b.EZ(_.sz));
      a && a.isVisible() || (a = b.EZ(_.$y));
      return a ? a.Da() : null
    };
    P8(_.$y, function(a) {
      var b = new _.ly(a.Ia()),
        c = new _.mE(dBf.bind(null, a), null, null, null, 13, 12, "addtodrive");
      return _.Wy(a.H, b, new _.Nmb(a.Oa(), a.am(_.cr).qh(), c), new _.iD)
    });
    var eBf = function(a) {
      _.JY.call(this, a);
      this.Sf("a-R-d")
    };
    _.z(eBf, _.JY);
    var fBf = function(a) {
      return new _.CE(a.Oa(), a.ma.rz, !0)
    };
    P8(_.k2a, function(a) {
      return _.Wy(a.H, new eBf(a.Ia()), fBf(a), new _.iD)
    });
    var gBf = function(a, b) {
      _.Oy.call(this);
      var c = this;
      this.Fa = a;
      this.ka = a.get(_.HXa);
      var d = a.get(_.Qa),
        e = _.Pa(d);
      d = new _.qo(!0);
      e && (d = a.get(_.sr).ha.Bu(), d = new _.yD(d));
      this.ha = new _.go([b], function() {
        var f = b.get();
        return 2 == f || 0 == f
      });
      a = new _.go([this.ha], function() {
        return c.ha.get() ? "list" : "grid"
      });
      e = new _.go([this.ha], function() {
        return c.ha.get() ? "List view" : "Grid view"
      });
      this.$c = new _.ro({
        visible: d,
        ne: a,
        Sc: e
      })
    };
    _.z(gBf, _.Oy);
    gBf.prototype.H = function() {
      return this.$c
    };
    gBf.prototype.Wd = function() {
      var a = this.ha.get() ? 1 : 2;
      this.ka.ha(a);
      this.Fa.get(_.Qn).Xm()
    };
    var hBf = function(a) {
      return new gBf(a.Oa(), a.ua)
    };
    P8(_.lz, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), hBf(a), new _.iD)
    });
    var iBf = function(a, b) {
      a = new _.zF("a-d-vc", a.Ia());
      b && _.uTa(a, b);
      return a
    };
    P8(_.h3a, iBf);
    P8(_.S1a, function(a) {
      var b = new _.Ky(fBf(a).H().visible, hBf(a).H().visible);
      return iBf(a, b)
    });
    P8(_.U1a, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.DY(a.Oa(), a.am(_.A$d).qh(), a.P$().getData()), new _.iD)
    });
    var jBf = function() {
      var a = '<div class="' + _.X("a-Kj-D") + '">';
      return (0, _.T)(a + "Backups</div>")
    };
    P8(_.V1a, function(a) {
      return new _.yw(jBf, void 0, a.Ia())
    });
    var kBf = function(a, b) {
      _.zF.call(this, "a-nb-D", b);
      this.Fa = a;
      this.ha = this.Fa.get(_.CAa).ka
    };
    _.z(kBf, _.zF);
    kBf.prototype.uz = function() {
      _.zF.prototype.uz.call(this);
      this.ha.observe(this.H, this, !0)
    };
    kBf.prototype.H = function(a) {
      switch (a) {
        case 1:
          this.Xa().textContent = "Searching in";
          break;
        default:
          this.Xa().textContent = "Search results"
      }
    };
    P8(_.S2a, function(a) {
      return new kBf(a.Oa(), a.Ia())
    });
    var lBf = function(a) {
      _.ly.call(this, a.Ia());
      this.H = a
    };
    _.z(lBf, _.ly);
    lBf.prototype.Sa = function() {
      _.ly.prototype.Sa.call(this);
      this.H.Oa().get(_.Qr).register(3, new _.nub(this.Xa()))
    };
    P8(_.$1a, function(a) {
      var b = new _.mE(function() {
        var c = a.Oa().get(_.Cw),
          d = a.Oa().get(_.bd).Vd();
        return c.Ca(d).EZ(_.$1a).Da()
      }, null, null, null, 13, 12, "createshortcutdialog");
      return _.Wy(a.H, new lBf(a), new _.bob(a.Oa(), a.am(_.cr).qh(), b), new _.iD)
    });
    P8(_.fz, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.Rmb(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    P8(_.f2a, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.Lbe(a.Oa(), a.am(_.A$d).qh()), new _.iD)
    });
    var mBf = function() {
      var a = '<div><span class="' + _.X("a-em-ik-j") + '">',
        b = 'Deleted from <span class="' + (_.X("a-em-ik-w-d") + '"></span>');
      return (0, _.T)(a + b + "</span></div>")
    };
    var nBf = function(a, b) {
      _.yw.call(this, mBf, void 0, b);
      var c = this;
      this.Fa = a;
      this.ma = a.get(_.Ub);
      this.wa = _.bw(a);
      this.Ga = a.get(_.Nr);
      this.H = new _.Fx;
      this.ub(this.H);
      this.ha = null;
      _.rj(this, function() {
        _.sj(c.ha)
      });
      this.Ea = !0;
      this.Ca = null;
      this.Ga.ka().then(function(d) {
        c.Ca = d;
        var e = function() {
          c.Ea = !0
        };
        d.observe(e, e, c)
      })
    };
    _.z(nBf, _.yw);
    _.g = nBf.prototype;
    _.g.Ka = function() {
      var a = this;
      _.yw.prototype.Ka.call(this);
      var b = this.wa.Vd().AD || this.ma.ih().getId();
      oBf(this, b).then(function(c) {
        c && c.observe(a.C1a, a, !0)
      })
    };
    _.g.C1a = function(a) {
      this.H.setContent(a);
      this.H.Wc || this.H.render(this.Cb("a-em-ik-w-d"));
      this.H.tl("Deleted from " + (a || ""))
    };
    _.g.Sa = function() {
      _.yw.prototype.Sa.call(this);
      this.Ra().listen(this.H, "beforeshow", this.a0a)
    };
    _.g.a0a = function() {
      var a = this;
      if (this.Ca && (!this.ha || this.Ea)) {
        this.ha && (this.Ra().Yc(this.ha, "action", this.vva), _.sj(this.ha));
        var b = new _.hD(this.Ia());
        this.ha = b;
        b.oe("a-em-ik-w");
        this.Ra().listen(b, "action", this.vva);
        pBf(this).forEach(function(c) {
          var d = c.getTitle(),
            e = "myDrive";
          c.Uc() && (e = (e = c.sj()) && _.x(e, 3) ? "teamDrive" : "untrustedTeamDrive");
          d = _.qea(e, d, a.Ia());
          b.ub(new _.jx(d, c.getId(), a.Ia()), !0)
        });
        this.H.zi(b);
        this.Ea = !1
      }
    };
    _.g.vva = function(a) {
      var b = this.wa.Vd().AD || this.ma.ih().getId();
      a = a.target.ke();
      b != a && (b = this.wa.Vd().Uq().Kl, a == this.ma.ih().getId() ? delete b.aq : b.aq = a, a = (new _.abb(this.Fa, b)).H(b), b.sort = a.H, b.ai = a.ha, _.$e(this.Fa, b, _.pGa), this.wa.navigate(b))
    };
    var pBf = function(a) {
        if (!a.Ca) return [];
        var b = a.Ca.Sg().map(function(c) {
          return c.getItem()
        });
        return [a.ma.ih()].concat(b)
      },
      oBf = function(a, b) {
        var c = a.ma.ih();
        return c.getId() == b ? _.da(new _.qo(c.getTitle())) : a.Ga.Jc(b).then(function(d) {
          return d.Kj()
        }, function() {
          return new _.qo("Unknown")
        })
      };
    P8(_.h2a, function(a) {
      return new nBf(a.Oa(), a.Ia())
    });
    var qBf = function(a, b, c) {
      _.zF.call(this, "a-nb-Se", c);
      this.Fa = a;
      this.H = a.get(_.Ze);
      this.ha = b;
      this.ma = "";
      this.wa = 0
    };
    _.z(qBf, _.zF);
    _.g = qBf.prototype;
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.Ka = function() {
      _.zF.prototype.Ka.call(this);
      this.Va(!1);
      this.ha.hQ().tb(this.hTa.bind(this))
    };
    _.g.hTa = function() {
      var a = this;
      _.csf(new _.Yrf(this.Oa(), this.ha.H.H.getData())).then(function(b) {
        if ("#thisisfamily" != _.lj(new _.aj(_.q.location.href), "q") && (a.Va(!!b), b)) {
          a.ma = b.query;
          a.wa = b.uBa;
          var c = a.jc();
          _.Zn(c, $Af, b);
          a.H.H(rBf(a, _.N3a));
          b = _.Rj("a-nb-Se-A", c);
          a.Ra().listen(b, "click", a.u1a.bind(a))
        }
      })
    };
    _.g.u1a = function(a) {
      a.ha || (a.preventDefault(), this.Oa().Jc(_.Uq).tb(this.qab.bind(this)))
    };
    _.g.qab = function(a) {
      var b = rBf(this, _.M3a);
      a.search(this.ma, b);
      this.H.H(b)
    };
    var rBf = function(a, b) {
      b = _.Bu(a.H, a.Fa, b);
      var c = new OAf;
      _.l(c, 1, a.wa);
      a = b.H;
      c && (a = _.qt(a), _.H(a, 20, c));
      return b
    };
    P8(_.i2a, function(a) {
      return new qBf(a.Oa(), a.P$(), a.Ia())
    });
    P8(_.j2a, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.EY(a.Oa(), a.am(_.A$d).qh(), a.P$().getData()), new _.iD)
    });
    var sBf = function(a, b) {
      _.Py.call(this, a);
      this.ha = b;
      this.ta = _.bw(a)
    };
    _.z(sBf, _.Py);
    sBf.prototype.Qg = function() {
      var a = this.Oa().get(_.Pe),
        b = new _.qo(!this.ta.Vd().AD),
        c = new _.rE(this.ha, function(d) {
          return !!d
        }, this);
      b = new _.Ky(b, new _.yD(c));
      return new _.ro({
        visible: b,
        enabled: a.zd(),
        content: new _.$q("Empty trash")
      })
    };
    sBf.prototype.Wd = function(a) {
      this.Oa().get(_.Qn).Xm();
      this.submit(new _.Tlb, a)
    };
    P8(_.n2a, function(a) {
      return _.Wy(a.H, new _.JY(a.Ia()), new sBf(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    var tBf = new _.uj("$h"),
      Q8 = function(a, b) {
        _.yw.call(this, a, b);
        this.H = null;
        this.ha = 0
      };
    _.z(Q8, _.yw);
    Q8.prototype.Sa = function() {
      var a = this;
      _.yw.prototype.Sa.call(this);
      this.Ra().listen(this.Xa(), "focus", function() {
        return uBf(a)
      }, !0);
      this.Ra().listen(this.Xa(), "click", function() {
        return uBf(a)
      }, !0)
    };
    var vBf = function(a) {
      var b = a.jc();
      b && (a.H = b.firstElementChild)
    };
    Q8.prototype.focus = function() {
      this.H && this.H.focus()
    };
    var wBf = function(a) {
        a.H && (a.H.tabIndex = 0)
      },
      uBf = function(a) {
        var b = new _.K(tBf, a.Xa());
        a.dispatchEvent(b)
      };
    var xBf = function() {
        this.ha = [];
        this.H = -1
      },
      yBf = function(a, b) {
        a.ha = b;
        a.H = -1
      },
      zBf = function(a) {
        if (0 != a.ha.length) {
          for (var b = _.w(a.ha), c = b.next(); !c.done; c = b.next()) c = c.value, c.H && (c.H.tabIndex = -1);
          wBf(a.ha[0]);
          a.H = 0
        }
      },
      BBf = function(a) {
        if (ABf(a, a.H)) {
          var b = a.ha[a.H];
          b.H && (b.H.tabIndex = -1);
          a.H = -1
        }
      };
    xBf.prototype.navigate = function(a) {
      if (!(a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)) {
        var b = a.keyCode;
        37 == b ? (b = this.H - 1, a.preventDefault(), CBf(this, b)) : 39 == b && (b = this.H + 1, a.preventDefault(), CBf(this, b))
      }
    };
    var CBf = function(a, b) {
        b != a.H && ABf(a, b) && (BBf(a), a.H = b, ABf(a, a.H) && (a.ha[a.H].focus(), wBf(a.ha[a.H])))
      },
      ABf = function(a, b) {
        return 0 <= b && b < a.ha.length
      };
    var DBf = function(a) {
      this.H = [];
      this.ka = a
    };
    _.z(DBf, _.ix);
    DBf.prototype.Ka = function(a) {
      a = _.ix.prototype.Ka.call(this, a);
      if (!a) return null;
      a.setAttribute("data-id", this.ka);
      a.setAttribute("data-target", "folder");
      return a
    };
    var EBf = function() {};
    _.z(EBf, _.ax);
    EBf.prototype.Ka = function(a) {
      a = _.ax.prototype.Ka.call(this, a);
      if (!a) return null;
      a.classList.add("o-Yc-Vf-d");
      a.classList.add("a-c-d");
      a.setAttribute("data-target", "collapsedFolderButton");
      this.ae(a, "Show Path");
      this.tl(a, "Show Path");
      return a
    };
    var FBf = function() {
      _.mx.call(this, void 0)
    };
    _.z(FBf, _.Hy);
    FBf.prototype.Ka = function(a) {
      a = _.Hy.prototype.Ka.call(this, a);
      if (!a) return null;
      a.setAttribute("data-target", "collapsedFolderDropdown");
      a.classList.add("a-mb-w");
      return a
    };
    var GBf = function() {};
    _.z(GBf, _.Yy);
    GBf.prototype.HA = function(a, b) {
      b.Iy && a.setContent(_.id(b.Iy, b.content.get()))
    };
    var HBf = function(a, b) {
      _.Py.call(this, a);
      var c = this;
      this.ta = b.Yb();
      this.wa = a.get(_.Ra);
      this.ha = new _.$q(!1);
      this.ua = new _.Ky(this.ha, a.get(_.Pe).zd());
      this.ta.observe(function(d, e) {
        e && _.fC(e).ti(c);
        d ? _.fC(d).observe(c.va, c, !0) : c.ha.set(!1)
      }, this, !0)
    };
    _.z(HBf, _.Py);
    HBf.prototype.Qg = function() {
      return new _.ro({
        visible: this.ha,
        enabled: this.ua,
        Iy: XAf,
        Sc: new _.$q("")
      })
    };
    HBf.prototype.Wd = function(a) {
      if (this.ta.get()) {
        var b = _.dC(this.ta.get()).get();
        this.submit(new _.dmb(b), a)
      }
    };
    HBf.prototype.va = function(a) {
      a ? this.ha.set(!(_.F(this.wa, 16, !1) || !_.x(a, 10))) : this.ha.set(!1)
    };
    var IBf = function(a, b) {
      _.Py.call(this, a);
      this.ha = b.Yb();
      this.va = a.get(_.Pe);
      this.ta = new _.$q("");
      this.ha.observe(this.ua, this, !0)
    };
    _.z(IBf, _.Py);
    IBf.prototype.Qg = function() {
      var a = JBf(this);
      this.ha.observe(this.ua, this, !0);
      return new _.ro({
        enabled: this.va.zd(),
        content: a,
        Iy: _.l9d,
        Sc: this.ta
      })
    };
    var JBf = function(a) {
      var b = {
          wy: new _.kza
        },
        c = new _.$q(b);
      a.ha.observe(function(d, e) {
        e && _.jC(e) && _.jC(e).ti(a);
        d && _.jC(d).observe(function(f) {
          f && (b.wy = f);
          c.set(b, !0)
        }, a, !0)
      }, a, !0);
      return c
    };
    IBf.prototype.Wd = function(a) {
      var b = this.ha.get();
      b && (b = _.dC(b).get(), this.submit(new _.emb(b), a))
    };
    IBf.prototype.ua = function(a) {
      _.co(this.ta);
      if (a) {
        var b = _.sbb(a);
        a = new _.go([b], function() {
          return b.get() ? "Manage members" : "View members"
        });
        _.fo(this.ta, a)
      } else this.ta.set("View members")
    };
    var KBf = function() {};
    _.z(KBf, _.dZ);
    KBf.prototype.H = function() {
      var a = _.Yc(_.jd, {
        Nd: "a-w-d-aa-zd",
        hb: !0,
        variant: "arrowDown"
      });
      _.dd(a, "hidden", !0);
      return a
    };
    _.vf(KBf);
    var LBf = function(a, b) {
      var c = KBf.Ab();
      _.Ex.call(this, "", a, c, b, void 0);
      this.Sf("a-l-S-Pc-w-d");
      this.aV = !0
    };
    _.z(LBf, _.Fx);
    LBf.prototype.Sa = function() {
      _.Fx.prototype.Sa.call(this);
      var a = this.nl();
      a && _.Mc(this.Xa(), a)
    };
    LBf.prototype.ae = function(a) {
      this.Wt(a);
      var b = this.Da();
      b && _.Mc(b, a)
    };
    var NBf = function(a, b, c) {
      _.Oy.call(this);
      this.Fa = a;
      var d = MBf(this, b, c);
      this.$c = new _.ro({
        visible: new _.go([d], function() {
          return !!d.get()
        }),
        enabled: new _.$q(!!b.caption && 0 < b.Yw.length),
        content: d,
        Sc: new _.$q("")
      })
    };
    _.z(NBf, _.Oy);
    NBf.prototype.Oa = function() {
      return this.Fa
    };
    NBf.prototype.H = function() {
      return this.$c
    };
    var MBf = function(a, b, c) {
        if ((b.kj == _.nc || b.kj == _.oc) && c) {
          var d = new _.$q("");
          c.Yb().observe(function(e) {
            e ? (e = OBf(e), _.fo(d, e)) : d.set("")
          }, a, !0);
          return d
        }
        return new _.qo(b.caption || "")
      },
      OBf = function(a) {
        var b = a.Kj();
        return new _.go([b], function() {
          return b && b.get() ? _.yFa(new _.uFa(!1), b.get()) : ""
        })
      };
    NBf.prototype.Wd = function() {};
    var PBf = new _.Jj(24, 24),
      R8 = function(a, b, c, d) {
        _.gY.call(this);
        var e = this;
        this.Fa = a;
        this.Rj = b;
        this.Ja = c;
        this.Be = d;
        this.Na = [];
        this.ha = null;
        _.rj(this, function() {
          e.ha && e.ha.dispose()
        });
        this.ma = null;
        _.rj(this, function() {
          e.ma && e.ma.dispose()
        });
        this.Ua = null;
        this.Ga = new xBf;
        this.Vc = _.bw(a);
        this.Mj = _.Pa(a.get(_.Qa));
        this.Ti = a.get(_.Na);
        this.vj = (a = a.get(_.Ub).JY()) ? a.getId() : null;
        this.Ii = new _.Yy;
        this.Af = new GBf;
        this.Ca = new _.Nx;
        this.Ea = new _.$q("");
        this.Nc = null;
        a = new _.mE(this.Tj.bind(this), null, null, null,
          9, 8, "folderpath1");
        this.Db = _.jpb(_.sD((new _.ME(this.Fa, _.bA, a, this.Ca, this.Ea)).register(), _.Gob));
        this.Ta(this.Db);
        this.lc = _.jpb(_.sD((new _.ME(this.Fa, _.bA, a, this.Ca, this.Ea)).register(), _.Mob));
        this.Ta(this.lc);
        this.$a = _.jpb(_.sD((new _.ME(this.Fa, _.bA, a, this.Ca, this.Ea)).register(), _.Fob));
        this.Ta(this.$a);
        this.Za = new _.Xw(this);
        this.Re = new _.cf(this);
        this.Ta(this.Re);
        this.H = this.Gb = null
      };
    _.z(R8, _.gY);
    R8.prototype.Ka = function() {
      _.gY.prototype.Ka.call(this);
      var a = this.jc(),
        b = _.Yc(QAf, {
          iC: _.Gq(this, "pathlabel")
        });
      a.appendChild(b);
      this.Db.render();
      this.lc.render();
      this.$a.render()
    };
    R8.prototype.Sa = function() {
      var a = this;
      _.gY.prototype.Sa.call(this);
      this.Gb = this.Mb("o-Yc-Wb");
      this.Ra().listen(this.Fa.get(_.LB), "ukrrof", this.kh);
      this.Be.observe(this.wd, this, !0);
      var b = {};
      _.Yw(this.Za, (b.folder = function(c) {
        var d = _.Fc(c, "id");
        c = _.Fc(c, "view");
        QBf(a, d, c)
      }, b["folder.mousedrop"] = function(c) {
        return RBf(a, c)
      }, b["collapsedFolderButton.mousedrop"] = function(c) {
        return SBf(a, c)
      }, b["collapsedFolderDropdown.mousedrop"] = function(c) {
        return TBf(a, c)
      }, b));
      this.Mj || this.Za.listen("folder.contextmenu",
        function(c) {
          var d = _.Fc(c, "id");
          a.Nc = c.currentTarget;
          if (d && d != a.vj) {
            var e = UBf(a, d),
              f = e[0];
            e = e[1];
            f && (f = new _.aC(a.Fa, f), a.Ca.clear(), a.Ca.set(d, f), f.getId() == _.dC(f).get() ? (a.Ea.set(""), d = a.lc) : (a.Ea.set(e ? e.getId() : ""), d = _.Flb(f) ? a.$a : a.Db), _.m0a(d, new _.nWa(c.currentTarget, 9, !0), void 0, null))
          }
        });
      b = new _.Mq(this.Xa());
      this.Ta(b);
      this.Ra().listen(b, "key", function(c) {
        return a.Ga.navigate(c)
      });
      this.Ra().listen(this.Gb, "blur", function(c) {
        a.Xa().contains(c.relatedTarget) || (c = a.Ga, 0 != c.ha.length && (BBf(c),
          wBf(c.ha[0]), c.H = 0))
      }, !0)
    };
    R8.prototype.focus = function() {
      this.H && this.H.isEnabled() && (this.H.kf(!0), this.H.Xa().focus())
    };
    var QBf = function(a, b, c) {
        var d = a.Vc.Vd();
        if (d && d.Bn) {
          var e = {};
          d = _.i2d(d.Bn());
          c ? (e.view = _.ct.pP[c], delete d.path) : b && (d.path = MAf(a.Fa.get(_.LB), b), 0 == d.path.length && (e.view = _.oc));
          b = _.i2d(Object.assign({}, d, e));
          _.$e(a.Fa, b, _.oGa);
          a.Vc.navigate(b)
        }
      },
      RBf = function(a, b) {
        var c = _.Hc(b);
        if ("file" != (_.Uw(c, "__src__") || null)) return 3;
        if (!a.Fa.get(_.Pe).zd().get()) return VBf(b, !1, !0), 2;
        var d = _.Gc(b, "id"),
          e = _.Uw(c, "ids").split(",");
        c = _.Uw(c, "parentId") || void 0;
        var f = WBf(a, e, d, c);
        switch (_.oF(b)) {
          case "enter":
            VBf(b,
              !0, f);
            break;
          case "leave":
            VBf(b, !1, f);
            break;
          case "drop":
            if (VBf(b, !1, f), f) {
              var h = _.dqb(b),
                k = b.currentTarget;
              b = new _.mE(function() {
                return k
              }, null, null, null, 9, 8, "folderpath2");
              _.eqb("copy" == h ? new _.Tpb(d, e, b) : new _.Upb(d, e, b, c), a.Fa)
            }
        }
        return f ? 1 : 2
      },
      SBf = function(a, b) {
        if (a.ma && a.ha) switch (_.oF(b)) {
          case "enter":
            _.Ik(a.Ua);
            a.ha.kf(!0);
            break;
          case "leave":
            _.Ik(a.Ua), a.Ua = _.Hk(function() {
              a.ha && a.ha.kf(!1)
            }, 200)
        }
      },
      TBf = function(a, b) {
        if (a.ma && a.ha) switch (_.oF(b)) {
          case "enter":
            _.Ik(a.Ua);
            break;
          case "leave":
            a.ha.kf(!1)
        }
      },
      WBf = function(a, b, c, d) {
        return b.includes(c) || d && c == d ? !1 : (a = UBf(a, c)[0]) && !_.Yjd(a) ? !1 : !0
      },
      VBf = function(a, b, c) {
        var d = a.currentTarget;
        c ? _.wpb(d, b, _.nF(a)) : _.xpb(d, b, _.nF(a))
      },
      UBf = function(a, b) {
        a = a.Fa.get(_.LB).we();
        for (var c = null, d = null, e = 0; e < a.length; e++) a[e].getId() == b && (c = a[e], d = 0 < e ? a[e - 1] : null);
        return [c, d]
      };
    R8.prototype.kh = function() {
      this.wd()
    };
    R8.prototype.wd = function() {
      if (this.Be.get()) {
        var a = this.Fa.get(_.LB).we();
        this.He(!0).forEach(function(d) {
          return _.sj(d)
        });
        this.Re.removeAll();
        this.Na = [];
        var b = this.Ja.Yb().get(),
          c = XBf(this, a, b);
        for (c = YBf(this, a, c); c < a.length - 1; c++) ZBf(this, a[c]);
        $Bf(this, a, b);
        aCf(this);
        bCf(this)
      }
    };
    var XBf = function(a, b, c) {
        return c && _.qbb(c).get() ? (cCf(a, "ca"), 0) : _.F(a.Ti, 54, !1) && 0 < b.length && !b[0].Cp() && !dCf(b[0]) && 0 < Number(b[0].Bt()) && !a.Mj ? (cCf(a, "$"), 0) : 0 < b.length && _.E9a(b[0]) ? (cCf(a, "V"), 0) : 1 < b.length ? (ZBf(a, b[0], !1), 1) : 0
      },
      YBf = function(a, b, c) {
        if (3 >= b.length - c) return c;
        a.ma && a.ma.dispose();
        a.ma = new _.hD(null, new FBf);
        for (var d = {}; c < b.length - 2; d = {
            YO: d.YO
          }, c++) {
          var e = b[c].getTitle() || "";
          d.YO = b[c].getId();
          e = {
            text: e,
            item: b[c],
            id: d.YO,
            ne: "",
            iconUrl: b[c].ze()
          };
          e = _.Yc(ZAf, e);
          e = new _.jx(e, void 0,
            void 0, new DBf(d.YO));
          a.ma.Ra().listen(e, "action", function(f) {
            return function() {
              QBf(a, f.YO, null)
            }
          }(d));
          a.ma.ub(e, !0)
        }
        _.Yw(new _.Xw(a.ma), {
          "folder.mousedrop": function(f) {
            return RBf(a, f)
          },
          "collapsedFolderDropdown.mousedrop": function(f) {
            return TBf(a, f)
          }
        });
        d = new Q8(YAf);
        eCf(a, d);
        _.sj(a.ha);
        c = _.Yc(_.jd, {
          variant: "moreHoriz"
        });
        a.ha = new _.Fx(c, a.ma, new EBf);
        a.ha.render(d.Xa());
        (new _.yw(RAf, {
          Rg: !1
        })).render(d.Xa());
        return b.length - 2
      },
      $Bf = function(a, b, c) {
        if (a.Mj) 0 < b.length && ZBf(a, b[b.length - 1], !0);
        else {
          var d =
            1 < b.length ? new _.$q(b[b.length - 2].getId()) : void 0,
            e = b[0],
            f = 1 == b.length && dCf(e);
          c = c ? 1 == b.length && _.Flb(c) : !1;
          a.H = fCf(a, f, c, d);
          0 < b.length && a.H.ae(gCf(e, b));
          b = new Q8(TAf);
          eCf(a, b);
          b.ub(a.H, !0);
          if (f) {
            c = (d = e.sj()) ? _.x(d, 3) : !0;
            f = new _.yw(UAf, {
              Io: "td_folder_subtext"
            });
            if (d) {
              var h = a.Mb("o-Yc-Bb");
              if (h) {
                var k = _.p(d, 6);
                k || (k = d.sM(), k = _.mM(k) ? _.oM(k).ig(PBf.height).Zp() : k || "");
                k ? h.classList.add("o-Yc-Bb-Mr") : h.classList.remove("o-Yc-Bb-Mr");
                k && (_.kh(h, k), d.Hm() ? h.classList.add("o-Yc-Bb-hc") : h.classList.remove("o-Yc-Bb-hc"))
              }
            }
            h =
              new _.yw(WAf, {
                a3: c ? "" : e.nq()
              });
            c = new _.bx("", _.D_.Ab());
            e = new _.bx("", _.D_.Ab());
            d = new _.yw(VAf);
            f.ub(c, !0);
            f.ub(d, !0);
            f.ub(e, !0);
            f.ub(h, !0);
            e.Xa().setAttribute("guidedhelpid", "td_add_members");
            c.Xa().setAttribute("guidedhelpid", "td_manage_members");
            h = a.Ja;
            k = new IBf(a.Fa, h);
            _.Wy(a.Af, c, k, new _.iD);
            c = new HBf(a.Fa, h);
            _.Wy(a.Af, e, c, new _.iD);
            _.uTa(d, c.H().visible);
            b.ub(f, !0)
          }
          a.Ra().listen(a.H.Xa(), "contextmenu", a.Lf)
        }
      },
      gCf = function(a, b) {
        a = a.sj() && a.sj().Hm();
        b = b[b.length - 1].getTitle();
        return a ? "Hidden shared drive: " +
          b : b
      },
      aCf = function(a) {
        yBf(a.Ga, a.Na);
        for (var b = _.w(a.Na), c = b.next(); !c.done; c = b.next()) c = c.value, vBf(c), a.Ra().listen(c, tBf, function(d) {
          var e = a.Ga;
          a: {
            d = d.target;
            for (var f = 0; f < e.ha.length; f++)
              if (e.ha[f].jc() == d) {
                d = f;
                break a
              } d = -1
          } - 1 != d && CBf(e, d)
        });
        zBf(a.Ga)
      },
      bCf = function(a) {
        a = _.w(a.Na);
        for (var b = a.next(); !b.done; b = a.next())
          if (b = b.value, 0 == b.ha) {
            var c = b.Xa();
            b.ha = Math.min(150, c.getBoundingClientRect().width);
            c.style.minWidth = b.ha + "px"
          }
      };
    R8.prototype.Lf = function(a) {
      a.preventDefault();
      this.H.isEnabled() && this.H.kf(!0)
    };
    var eCf = function(a, b) {
        a.ub(b);
        a.Na.push(b);
        b.render(a.Gb)
      },
      ZBf = function(a, b, c) {
        var d = b.getTitle() || "";
        b = b.getId() || "";
        eCf(a, new Q8(SAf, {
          Fk: d,
          id: b,
          Rg: !1,
          hm: a.Mj,
          N4a: void 0 === c ? !1 : c
        }))
      },
      cCf = function(a, b) {
        b = _.xa(a.Fa, b);
        eCf(a, new Q8(SAf, {
          Fk: b ? b.label : "",
          view: b ? b.view.toString() : "",
          Rg: !1
        }))
      },
      fCf = function(a, b, c, d) {
        b = c ? _.Fob : b ? _.Mob : _.Gob;
        var e = _.uD(_.sD((new _.ME(a.Fa, _.bA, new _.mE(function() {
          return a.H ? a.H.Da() : null
        }, null, null, null, 9, 8, "folderpath3"), a.Ja ? a.Ja.rz : new _.Nx, d)).register(), b));
        d = new LBf(e,
          a.Ia());
        _.rj(d, function() {
          return void e.dispose()
        });
        _.Wy(a.Ii, d, new NBf(a.Fa, a.Rj, a.Ja), new _.iD);
        return d
      };
    R8.prototype.Tj = function() {
      return this.Nc
    };
    var dCf = function(a) {
      var b = a.getCapabilities();
      return !!(a.Uc() && b && _.$p(b))
    };
    P8(_.q2a, function(a) {
      return new R8(a.Oa(), a.ha, a.Hk(), a.Ca)
    });
    var hCf = function(a, b, c) {
        b = c || b;
        a = '<div><div class="' + _.X("H-ia-wa") + '">' + _.U(_.FXa(null, b)) + '</div><div class="' + _.X("H-ia-Xh") + '"><div class="' + _.X("H-ia-E") + '" aria-role="list"></div><div role="link" tabindex="0" class="' + _.X("H-ia-ca") + '">';
        return (0, _.T)(a + "Sharing settings</div></div></div>")
      },
      kCf = function(a, b, c) {
        b = c || b;
        c = a.domainName;
        var d = a.Wg;
        d = '<div class="' + _.X("H-ia-A-mc") + '" aria-role="listitem"><div class="' + _.X("H-ia-mc") + '"><div class="' + _.X("H-ia-mc-ud-c") + '">' + _.U(_.UUd({
          ne: "linkSharingWhite",
          color: "#689F38",
          Wg: d
        }, b)) + "</div>";
        d += iCf({
          mya: "Link Sharing",
          yza: c ? "" + _.ws("J", "", !1)(a, b) : _.TUd(a, b)
        });
        d += '<div class="' + _.X("H-ia-mc-sf") + '">' + jCf(a, b) + '</div></div><div class="' + _.X("H-ia-A-vc") + '"></div></div>';
        return (0, _.T)(d)
      },
      lCf = function(a, b, c) {
        b = c || b;
        var d = a.name,
          e = a.email;
        c = a.role;
        d = '<div class="' + _.X("H-ia-mc") + '" aria-role="listitem"><div class="' + _.X("H-ia-mc-ud-c") + '">' + _.U(_.UUd(a, b)) + "</div>" + iCf({
          mya: d,
          yza: e
        }) + '<div class="' + _.X("H-ia-mc-sf") + '">';
        _.us(c, 5) ? (d += '<div class="' + _.X("H-ia-mc-Si-r") +
          '">', d += "Owner</div>") : d += jCf(a, b);
        return (0, _.T)(d + "</div></div>")
      },
      iCf = function(a) {
        var b = a.mya;
        a = a.yza;
        return (0, _.T)('<div class="' + _.X("H-ia-mc-r-j") + '"><div class="' + _.X("H-ia-mc-tf-r") + '" data-tooltip="' + _.X(b) + '" data-tooltip-delay="500" data-tooltip-only-on-overflow="true" tabindex="-1">' + _.U(b) + '</div><div class="' + _.X("H-ia-mc-gj-r") + '" data-tooltip="' + _.X(a) + '" data-tooltip-delay="500" data-tooltip-only-on-overflow="true" tabindex="-1">' + _.U(a) + "</div></div>")
      },
      jCf = function(a, b) {
        a = a || {};
        var c = a.role,
          d = a.Wg;
        a = a || {};
        var e = "";
        switch (a.role) {
          case 2:
            e += "can view";
            break;
          case 3:
            e += "can comment";
            break;
          case 4:
            e += "can edit";
            break;
          default:
            e += "can access"
        }
        a = e;
        a = '<div class="' + _.X("H-ia-mc-Si-c") + '" aria-label="' + _.X(a) + '" data-tooltip="' + _.X(a) + '" data-tooltip-delay="500">';
        switch (c) {
          case 2:
            a += _.U(_.xW({
              variant: "viewer",
              Wg: d
            }, b));
            break;
          case 3:
            a += _.U(_.xW({
              variant: "commentor",
              Wg: d
            }, b));
            break;
          case 4:
            a += _.U(_.xW({
              variant: "editor",
              Wg: d
            }, b));
            break;
          default:
            a += _.U(_.xW({
              variant: "viewer",
              Wg: d
            }, b))
        }
        return (0, _.T)(a +
          "</div>")
      };
    var S8 = function(a) {
      _.AW.call(this);
      this.ta = a;
      this.Ca = this.H = this.va = this.ua = this.ha = null
    };
    _.z(S8, _.AW);
    S8.prototype.Ka = function() {
      this.Sf("H-ia");
      _.AW.prototype.Ka.call(this);
      this.Ia().Hl(this.jc(), !1);
      var a = _.Yc(hCf);
      this.Ia().appendChild(this.jc(), a);
      this.ua = this.Cb("H-ia-Xh");
      this.va = this.Cb("H-ia-wa");
      this.H = this.Cb("H-ia-E");
      this.Ia().Hl(this.H, !0);
      this.Ca = this.Cb("H-ia-ca");
      this.ha ? mCf(this, this.ha) : nCf(this, !0);
      oCf(this)
    };
    S8.prototype.Sa = function() {
      _.AW.prototype.Sa.call(this);
      _.Ph || this.Xa().removeAttribute("aria-describedby");
      _.Hmd(this.Ca, this.Ga, !1, this);
      this.Ra().listen(this.ta, "Pb", this.Ja)
    };
    S8.prototype.Va = function(a) {
      a && (this.ta.clear(), pCf(this));
      _.AW.prototype.Va.call(this, a)
    };
    S8.prototype.Rda = function() {
      this.H && this.H.focus()
    };
    var mCf = function(a, b) {
      a.ha = b;
      nCf(a, !1);
      a.Da() && pCf(a)
    };
    S8.prototype.Qd = function() {
      var a = this.kl();
      this.ma.DW = new _.om(a, window.innerWidth - a, window.innerHeight - a, 0);
      _.AW.prototype.Qd.call(this)
    };
    var nCf = function(a, b) {
        a.va && a.ua && (_.Om(a.va, b), _.Om(a.ua, !b))
      },
      pCf = function(a) {
        a.Ia().He(a.H);
        qCf(a);
        if (a.ha)
          for (var b = 0; b < a.ha.length; b++) {
            var c = a.ha[b],
              d = 1 == c.getType() || 3 == c.getType(),
              e = 1 == c.getType();
            c = _.Yc(lCf, {
              name: c.getName(),
              email: c.getEmail() || "",
              role: c.Lg(),
              iconUrl: c.ze(),
              ne: c.ma,
              color: d ? c.ha : null,
              label: e ? _.gE(c.ka) : null,
              Wg: _.Rx()
            }, void 0, a.Ia());
            a.Ia().appendChild(a.H, c)
          }
        rCf(a)
      };
    S8.prototype.Ja = function() {
      oCf(this);
      this.Qd()
    };
    var oCf = function(a) {
        qCf(a);
        rCf(a);
        var b = !!_.nAf(a.ta);
        _.Om(a.Ca, b)
      },
      qCf = function(a) {
        var b = a.Mb("H-ia-A-mc");
        b && a.Ia().sh(b);
        if (b = _.lAf(a.ta))
          for (var c = 0; c < b.length; c++) {
            var d = b[c],
              e = 2 == d.getType();
            d = _.Yc(kCf, {
              domainName: e ? d.getName() : null,
              Ao: d.H,
              role: d.Lg(),
              Wg: _.Rx()
            }, void 0, a.Ia());
            a.Ia().Ht(a.H, d, 0)
          }
      },
      rCf = function(a) {
        var b = a.H,
          c = b.scrollHeight;
        b = b.clientHeight;
        c = !!(c && b && c > b);
        _.fd(a.Xa(), "H-ia-lq-Zq", c)
      };
    S8.prototype.Ga = function() {
      var a = _.nAf(this.ta);
      a && a()
    };
    var sCf = function(a, b, c) {
      _.iF.call(this, b, c);
      this.ka = a;
      this.va = !1;
      this.Za = new _.cf(this);
      this.Ta(this.Za);
      this.Za.listen(this.ka.Xa(), "mouseover", this.Db);
      this.Za.listen(this.ka.Xa(), "mouseout", this.Bb);
      this.Za.listen(this.ka, "hide", this.L0a)
    };
    _.z(sCf, _.iF);
    _.g = sCf.prototype;
    _.g.$m = function(a) {
      this.va = !1;
      this.a0 = 200;
      _.iF.prototype.$m.call(this, a)
    };
    _.g.Al = function(a) {
      this.va = !0;
      this.a0 = 0;
      _.iF.prototype.Al.call(this, a)
    };
    _.g.isVisible = function() {
      return _.iF.prototype.isVisible.call(this) || this.ka.isVisible()
    };
    _.g.Va = function(a) {
      this.ka.isDisposed() ? _.iF.prototype.Va.call(this, a) : this.va ? (_.iF.prototype.Va.call(this, a), this.ka.Va(!1)) : (_.iF.prototype.Va.call(this, !1), this.ka.Va(a))
    };
    _.g.L0a = function() {
      this.Is()
    };
    var tCf = function(a, b, c) {
      b = c || b;
      a = a || {};
      a = a.Wg;
      return (0, _.T)('<div class="' + _.X("H-qa-H-d-c") + '">' + _.U(_.xW({
        variant: "people",
        Wg: a
      }, b)) + "</div>")
    };
    var T8 = function(a) {
      _.bx.call(this, void 0, _.cx.Ab());
      this.ta = a;
      this.ha = new S8(a);
      this.ub(this.ha);
      this.H = new S8(a);
      this.ub(this.H);
      this.ma = null;
      this.ka = !1;
      this.tg(64, !0);
      this.Va(!0)
    };
    _.z(T8, _.bx);
    T8.prototype.Ka = function() {
      this.Sf("H-qa-H-d");
      _.bx.prototype.Ka.call(this);
      this.setContent(_.Yc(tCf, {
        Wg: _.Rx()
      }, void 0, this.Ia()));
      _.gd(this.Xa(), "Shared folder")
    };
    T8.prototype.Sa = function() {
      var a = this;
      _.bx.prototype.Sa.call(this);
      var b = this.Xa();
      _.dd(b, "haspopup", !0);
      this.ha.setAnchorElement(b);
      this.ha.wa = b;
      this.ha.Va(!1);
      this.H.setAnchorElement(b);
      this.H.wa = b;
      this.H.Va(!1);
      var c = _.gk(b);
      c ? (_.Fq(this.ha, c), _.Fq(this.H, c)) : (c = b.parentNode, this.ha.render(c), this.H.render(c));
      this.ma = new sCf(this.ha, b, "Shared people");
      this.Ta(this.ma);
      this.Ra().listen(b, "keydown", function() {
        a.ka = !0
      }, !0);
      this.Ra().listen(b, "mousedown", function() {
        a.ka = !1
      }, !0);
      this.Ra().listen(this.H,
        "action", this.ua);
      this.Ra().listen(this.H, "hide", this.va);
      _.dd(b, "haspopup", !0)
    };
    var uCf = function(a, b) {
      mCf(a.ha, b);
      mCf(a.H, b)
    };
    T8.prototype.kf = function(a) {
      a && !this.ka ? ((a = _.nAf(this.ta)) ? (a(), a = !0) : a = !1, _.bx.prototype.kf.call(this, !a), (a = !a) && this.H.Qd(), this.H.Va(a)) : (_.bx.prototype.kf.call(this, a), a && this.H.Qd(), this.H.Va(a))
    };
    T8.prototype.Va = function(a) {
      var b = _.bx.prototype.Va.call(this, a);
      b && !a && this.kf(!1);
      return b
    };
    T8.prototype.va = function() {
      this.kf(!1)
    };
    T8.prototype.ua = function(a) {
      a.stopPropagation();
      a.preventDefault()
    };
    var vCf = function(a, b) {
      _.zF.call(this, "a-o-H-wc");
      var c = this;
      this.Fa = a;
      this.ma = b;
      this.Lc = a.get(_.vo);
      this.H = null;
      _.rj(this, function() {
        _.sj(c.H)
      });
      a = new _.hE(this.Fa, b.Yb());
      this.Ta(a);
      this.ha = new T8(a);
      this.ub(this.ha);
      this.ma.Yb().observe(this.Ca, this, !0);
      this.ma.Yb().Li(this)
    };
    _.z(vCf, _.zF);
    vCf.prototype.Ka = function() {
      _.zF.prototype.Ka.call(this);
      this.ha.render(this.Da())
    };
    vCf.prototype.Ca = function(a) {
      this.H && (this.Ra().Yc(this.H, "ja", this.wa), _.sj(this.H), this.H = null);
      if (a) {
        var b = new _.Ku;
        b.Fc(a.getId());
        _.Tjb(b, _.dE("details-detadata"));
        this.H = this.Lc.nU(b, 1E3);
        this.H.activate();
        this.Ra().listen(this.H, "ja", this.wa)
      }
    };
    vCf.prototype.wa = function() {
      var a = this.H.getData().gw().filter(function(b) {
        return 3 != b.getType() && 4 != b.getType()
      });
      uCf(this.ha, _.Sjb(a))
    };
    var wCf = function(a, b, c) {
      this.ma = new _.$q(!1);
      this.ka = new _.$q(!1);
      this.ha = new _.$q(!1);
      this.H = null;
      b.Yb().observe(this.ta, this, !0);
      this.visible = new _.go([this.ma, this.ka, this.ha, c], function() {
        return this.ka.get() && this.ma.get() && !c.get() && !this.ha.get()
      }.bind(this))
    };
    wCf.prototype.ta = function(a) {
      var b = this;
      this.H && LAf(this.H).ti(this);
      (this.H = a) ? (_.ar(this.ma, _.Apb(this.H)), LAf(this.H).observe(function() {
        var c = LAf(b.H).get();
        b.ka.set(!!(c && 0 < c.length))
      }, this, !0), _.dC(this.H).get() == this.H.getId() ? this.ha.set(!0) : this.ha.set(!1)) : (this.ma.set(!1), this.ka.set(!1), this.ha.set(!1))
    };
    P8(_.r2a, function(a) {
      var b = new vCf(a.Oa(), a.ma);
      a = (new wCf(a.Oa(), a.ma, a.am().kH())).visible;
      _.uTa(b, a);
      return b
    });
    var xCf = function(a, b) {
      _.HX.call(this, a, _.b4a);
      this.ta = b;
      this.ha = b.H;
      this.$c = new _.ro({
        ne: new _.$q("info"),
        checked: this.ha,
        Sc: new _.go([this.ha], this.ua.bind(this))
      })
    };
    _.z(xCf, _.HX);
    xCf.prototype.H = function() {
      return this.$c
    };
    xCf.prototype.mi = function() {
      var a = !this.ha.get();
      this.ta.ha(a);
      a ? this.ta.focus() : this.Oa().get(_.Qn).Xm()
    };
    xCf.prototype.ua = function() {
      return this.ha.get() ? "Hide details" : "View details"
    };
    P8(_.kz, function(a) {
      return null == a.ta ? null : _.Wy(a.H, new _.ly(a.Ia()), new xCf(a.Oa(), a.ta), new _.iD)
    });
    P8(_.mz, function(a) {
      var b = new _.ly(a.Ia());
      return _.Wy(a.H, b, new _.JE(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    P8(_.w2a, function(a) {
      var b = new _.ly(a.Ia());
      return _.Wy(a.H, b, new _.IE(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    var yCf = function(a, b) {
      _.Oy.call(this);
      this.$c = new _.ro({
        visible: new _.Ky(a, b),
        enabled: new _.qo(!0),
        ne: new _.qo("more"),
        Sc: new _.qo("More actions")
      })
    };
    _.z(yCf, _.Oy);
    yCf.prototype.H = function() {
      return this.$c
    };
    yCf.prototype.Wd = function() {};
    var zCf = function(a, b) {
      b = new _.mE(b, null, null, null, 13, 12, "toolbar2");
      return _.uD(_.sD((new _.ME(a.Oa(), _.cA, b, a.am(_.cr).qh(), a.ha.CC, void 0, void 0, a.ta)).register(), a.ha.ny))
    };
    P8(_.qz, function(a) {
      var b = zCf(a, function() {
        return c.Xa()
      });
      var c = new _.Kx(b, a.Ia());
      _.rj(c, function() {
        return void b.dispose()
      });
      var d = new _.rE(b.Na.H, _.ig, a.Oa());
      return _.Wy(a.H, c, new yCf(a.am().kH(), d), new _.iD)
    });
    var ACf = function(a) {
      var b = a.Oa().get(_.Cw);
      a = a.Oa().get(_.bd).Vd();
      return b.Ca(a).aea(_.sz).Xa()
    };
    P8(_.sz, function(a) {
      var b = new PAf(a.Ia()),
        c = new _.mE(ACf.bind(null, a), null, null, null, 13, 12, "toolbar1");
      return _.Wy(a.H, b, new _.KE(a.Oa(), a.am().qh(), c, a.ha.CC, b), new _.iD)
    });
    P8(_.F2a, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.dnb(a.Oa(), "smallPlus"), new _.iD)
    });
    P8(_.wz, function(a) {
      var b = new _.ly(a.Ia()),
        c = a.am(_.cr);
      return _.Wy(a.H, b, new _.xE(a.Oa(), c.qh(), c.ee(), a.En()), new _.iD)
    });
    P8(_.Az, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.LE(a.Oa(), a.am(_.cr).qh(), a.ha.CC), new _.iD)
    });
    P8(_.Fz, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.hnb(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    var BCf = function(a, b, c) {
      b = c || b;
      c = a.label;
      var d = a.CE,
        e = a.zs,
        f = a.Dd,
        h = a.Yx,
        k = a.Ud;
      a = '<div class="' + _.X("a-nb-fi") + '" role="presentation">';
      d ? a += e ? _.PMa({
        color: "rgba(0,0,0,.54)",
        hb: !0,
        size: "16px"
      }) : _.QMa({
        color: "rgba(0,0,0,.54)",
        hb: !0,
        size: "16px"
      }) : f ? (d = _.pC(_.oC(new _.mC, "#8f8f8f"), !0).Id("black"), a += _.Bbb({
        Qe: c,
        dg: _.rC(_.qC(_.tC(_.sC(new _.nC, d), c), 2), !1).setSize("16px"),
        Ud: k
      }, b)) : a = h ? a + _.jd({
        variant: "sharedSearchChip",
        hb: !0
      }, b) : a + _.tAd({
        color: "rgba(0,0,0,.54)",
        hb: !0,
        size: "16px"
      });
      a += '<span class="' +
        _.X("a-nb-fi-ga") + '">' + _.U(c) + '</span><div aria-label="';
      c = "Remove " + (_.X(c) + " location filter");
      a += _.As(c);
      a += '" data-target="remove" tabindex="0" class="' + _.X("a-nb-fi-pd") + '" role="button">' + _.jd({
        variant: "close",
        hb: !0
      }, b) + "</div></div>";
      return (0, _.T)(a)
    };
    var CCf = function(a, b, c) {
      _.yw.call(this, BCf, b, c);
      this.Fa = a;
      this.wa = a.get(_.Ze);
      this.ma = a.get(_.cn);
      this.H = b.label;
      this.Ca = new _.Xw(this);
      this.ha = b.i2
    };
    _.z(CCf, _.yw);
    CCf.prototype.uz = function() {
      var a = this;
      _.yw.prototype.uz.call(this);
      this.Ca.listen("remove.action", function() {
        a.wa.Md(a.Fa, _.leb);
        a.ha && a.ha();
        var b = new _.cD(a.H + " location filter removed.", 0);
        a.ma.WC(b)
      });
      _.Mc(this.Xa(), this.H)
    };
    var DCf = function(a, b, c) {
      b = c || b;
      return (0, _.T)('<div class="' + _.X("khvXib") + '"><div class="' + _.X("eP7laf") + '"><div class="' + _.X("OUBo6c") + '"></div></div><div class="' + _.X("Tko2Fe") + '">' + _.ws("$", "", !1)(null, b) + "</div></div>")
    };
    _.W("$", "", 0, function() {
      return (0, _.T)("")
    });
    var FCf, HCf, GCf, ICf;
    _.ECf = function(a, b) {
      _.yw.call(this, DCf, {}, b);
      this.Fa = a;
      this.ha = new _.$7(a);
      this.Ea = new _.Xw(this);
      this.wa = new _.$q(0);
      this.H = [];
      this.ma = new _.JY;
      this.Ca = 0;
      NAf(this.Fa.get(_.CAa), this)
    };
    _.z(_.ECf, _.yw);
    _.g = _.ECf.prototype;
    _.g.uz = function() {
      var a = this;
      _.yw.prototype.uz.call(this);
      var b = this.Xa().querySelector('[data-target="clearfilters"]');
      b && (this.ma.setContent("Clear all filters"), this.ma.tl("Clear all filters"), this.ma.Sf("ieNSdf"), this.ma.render(b), this.Ea.listen("clearfilters.action", function() {
        a.H = [];
        a.dispatchEvent(new _.K("Kh"))
      }))
    };
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.v1a = function() {
      return this.H.map(function(a) {
        return a.clone()
      })
    };
    _.g.Uda = function(a) {
      var b = this,
        c = ++this.Ca;
      this.H = a.map(function(f) {
        return f.clone()
      });
      this.wa.set(this.u7(this.H));
      a = [];
      for (var d = _.w(this.H), e = d.next(); !e.done; e = d.next()) this.bda(a, e.value);
      Promise.all(a).then(function(f) {
        if (c == b.Ca) {
          var h = b.Xa().querySelector(".OUBo6c");
          h.innerHTML = "";
          for (var k = _.w(f), m = k.next(); !m.done; m = k.next()) m.value.render(h);
          0 == b.H.length && b.wa.set(0);
          1 < f.length ? b.Xa().classList.add("TqUmAb") : b.Xa().classList.remove("TqUmAb")
        }
      })
    };
    _.g.bda = function(a, b) {
      if (b instanceof _.HB || b instanceof _.GB) b = FCf(this, b), a.push(b)
    };
    _.g.u7 = function(a) {
      return a.some(function(b) {
        return b instanceof _.GB || b instanceof _.HB
      }) ? 1 : 0
    };
    FCf = function(a, b) {
      var c = b.Yg(),
        d = b.qk(),
        e = a.ha.Yx(c);
      return _.Bk([GCf(a, c, d), HCf(a, c, d), ICf(a, c, d), a.ha.getLabel(c)]).then(function(f) {
        var h = _.w(f);
        f = h.next().value;
        var k = h.next().value,
          m = h.next().value;
        h = h.next().value;
        return new CCf(a.Fa, {
          Dd: f,
          Yx: e,
          Ud: !1,
          CE: k,
          zs: m,
          label: h,
          i2: function() {
            _.JCf(a, b)
          }
        }, a.Ia())
      })
    };
    HCf = function(a, b, c) {
      return Promise.resolve("in" == c && a.ha.isPlaceholder(b).then(function(d) {
        return !d
      }))
    };
    GCf = function(a, b, c) {
      return Promise.resolve("parent" == c && a.ha.isPlaceholder(b).then(function(d) {
        return !d
      }))
    };
    ICf = function(a, b, c) {
      return HCf(a, b, c).then(function(d) {
        return d && a.ha.zs(b)
      })
    };
    _.JCf = function(a, b) {
      b = a.H.indexOf(b); - 1 != b && (a.H.splice(b, 1), a.dispatchEvent(new _.K("Kh")))
    };
    P8(_.R2a, function(a) {
      return new _.ECf(a.Oa(), a.Ia())
    });
    P8(_.Jz, function(a) {
      return iBf(a, a.am().kH())
    });
    P8(_.Kz, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.tE(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    var KCf = function(a, b, c) {
      _.tE.call(this, a, b.rz);
      this.ta = c
    };
    _.z(KCf, _.tE);
    KCf.prototype.Qg = function() {
      var a = this,
        b = _.tE.prototype.Qg.call(this),
        c = b.visible;
      b.visible = new _.go([this.ta, c], function() {
        return !a.ta.get() && c.get()
      });
      return b
    };
    P8(_.U2a, function(a) {
      var b = a.Hk();
      return _.Wy(a.H, new _.ly(a.Ia()), new KCf(a.Oa(), b, a.am().kH()), new _.iD)
    });
    var LCf = function(a, b, c) {
      _.bx.call(this, b, c);
      this.tg(64, !0);
      this.H = a;
      this.ub(a)
    };
    _.z(LCf, _.bx);
    _.g = LCf.prototype;
    _.g.Sa = function() {
      _.bx.prototype.Sa.call(this);
      this.H.setAnchorElement(this.Xa());
      this.H.wa = this;
      this.Ra().listen(this.H, "action", this.M0a);
      this.Ra().listen(this.H, "hide", this.N0a);
      _.dd(this.Xa(), "haspopup", !0)
    };
    _.g.resize = function() {
      this.H.Qd();
      this.H.resize()
    };
    _.g.kf = function(a) {
      _.bx.prototype.kf.call(this, a);
      if (a) {
        if (!this.H.Wc) {
          var b = _.gk(this.Da());
          b ? _.Fq(this.H, b) : this.H.render(this.Xa().parentNode)
        }
        this.H.Qd()
      }
      this.H.Va(a)
    };
    _.g.Va = function(a) {
      var b = _.bx.prototype.Va.call(this, a);
      b && !a && this.kf(!1);
      return b
    };
    _.g.N0a = function() {
      this.kf(!1)
    };
    _.g.M0a = function(a) {
      a.stopPropagation();
      a.preventDefault()
    };
    var MCf = function(a) {
      LCf.call(this, a, void 0, _.cx.Ab());
      this.Sf("a-c-d")
    };
    _.z(MCf, LCf);
    MCf.prototype.Sa = function() {
      LCf.prototype.Sa.call(this);
      var a = this.nl();
      a && _.Mc(this.Xa(), a)
    };
    MCf.prototype.ae = function(a) {
      this.Wt(a);
      var b = this.Da();
      b && a && _.Mc(b, a)
    };
    _.NCf = function(a) {
      var b = a.am(_.cr).qh(),
        c = new _.go([b.onChange()], function() {
          return 1 == b.kc() ? b.get(b.Je()[0]) : null
        }),
        d = a.Oa(),
        e = new _.hE(d, c),
        f = new _.O8(e, _.AMa(d.get(_.Qa)));
      c = new MCf(f);
      f.wa = c;
      var h = new _.iE(d, b);
      a = _.Wy(a.H, c, h, new _.iD);
      _.rj(a, function() {
        e.dispose();
        f.dispose();
        h.dispose()
      });
      return a
    };
    P8(_.Rz, function(a) {
      return _.NCf(a)
    });
    var OCf = function(a) {
      _.Oy.call(this);
      this.Fa = a;
      this.ha = _.bw(a);
      var b = a.get(_.Qa);
      b = _.Pa(b);
      var c = new _.qo(!0);
      b && (a = a.get(_.sr).ha.Bu(), c = new _.yD(a));
      this.$c = new _.ro({
        visible: c,
        ne: new _.$q("sort"),
        Sc: new _.$q("Sort options")
      })
    };
    _.z(OCf, _.Oy);
    OCf.prototype.H = function() {
      return this.$c
    };
    OCf.prototype.Wd = function(a, b) {
      a = this.ha.Vd().Bn();
      b = new _.cu(b.target.wb());
      a.sort = b;
      a.Kua = !0;
      _.$e(this.Fa, a, _.nGa);
      this.ha.navigate(a)
    };
    P8(_.Sz, function(a) {
      if (_.F(a.va, 36, !0)) a = null;
      else {
        var b = a.H;
        var c = _.F8d(new _.D8d(a.Oa(), a.ha.Xg, a.ha.ri.H, a.Ia()));
        a = _.Wy(b, new _.Kx(c, a.Ia()), new OCf(a.Oa()), new _.iD)
      }
      return a
    });
    P8(_.Uz, function(a) {
      return _.Wy(a.H, new _.ly(a.Ia()), new _.Mnb(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    var PCf = function(a, b) {
      _.Py.call(this, a);
      this.ha = b
    };
    _.z(PCf, _.Py);
    PCf.prototype.Qg = function() {
      var a = this,
        b = new _.qo("Back to shared drives"),
        c = new _.go([this.ha.onChange()], function() {
          return 0 == a.ha.kc()
        });
      return new _.ro({
        content: b,
        visible: c
      })
    };
    PCf.prototype.Wd = function(a) {
      this.submit(new _.Cde(_.uc), a)
    };
    P8(_.e3a, function(a) {
      var b = new _.JY(a.Ia());
      b.Sf("S-fc-Ug");
      return _.Wy(a.H, b, new PCf(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    var QCf = function(a, b) {
      _.Py.call(this, a);
      this.ha = b
    };
    _.z(QCf, _.Py);
    QCf.prototype.Qg = function() {
      var a = this,
        b = new _.qo("Hidden shared drives"),
        c = new _.go([this.ha.onChange()], function() {
          return 0 == a.ha.kc()
        });
      return new _.ro({
        content: b,
        visible: c
      })
    };
    QCf.prototype.Wd = function(a) {
      this.submit(new _.Cde(_.vc), a)
    };
    P8(_.f3a, function(a) {
      var b = new _.JY(a.Ia());
      b.Sf("S-hc-fc-Ug");
      return _.Wy(a.H, b, new QCf(a.Oa(), a.am(_.cr).qh()), new _.iD)
    });
    P8(_.Xz, function(a) {
      var b = new _.mE(function() {
          return d.Xa()
        }, null, null, null, 9, 8, "toolbar3"),
        c = a.Hk();
      c = c ? c.rz : new _.Nx;
      b = _.uD(_.sD((new _.ME(a.Oa(), _.bA, b, c)).register(), a.ha.Yw));
      var d = new LBf(b, a.Ia());
      return _.Wy(a.H, d, new NBf(a.Oa(), a.ha, a.Hk()), new _.iD)
    });
    P8(_.p3a, function(a) {
      var b = a.ha.zfb,
        c = new _.mE(function() {
          return e.Xa()
        }, null, null, null, 13, 12, "toolbar4"),
        d = a.Hk();
      c = _.uD(_.sD((new _.ME(a.Oa(), _.bA, c, d ? d.rz : new _.Nx)).register(), b));
      var e = new _.Kx(c, a.Ia());
      return _.Wy(a.H, e, new yCf(new _.yD(a.am().kH()), new _.qo(!_.Pf(b))), new _.iD)
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var YCf = function(a, b) {
        a.Ca.XrUcvb = b;
        _.tTa(a, b)
      },
      ZCf = {
        eub: "start",
        SCa: "end"
      },
      $Cf = function(a, b) {
        _.yF.call(this, a, b);
        a = {};
        this.ma = (a.start = new _.xw(null, {
          fill: !0,
          Yz: "a-Ba-Ed",
          ab: "a-s-Ba-ic"
        }, b), a.end = new _.xw(null, {
          fill: !1,
          Yz: "a-Ba-Ed",
          ab: "a-s-Ba-dj"
        }, b), a);
        this.H = {};
        _.tTa(this, this.ma.start);
        _.tTa(this, this.ma.end)
      };
    _.z($Cf, _.yF);
    _.g = $Cf.prototype;
    _.g.Sa = function() {
      _.yF.prototype.Sa.call(this);
      _.zq(this.ma.end.Xa(), "toolbar");
      this.Ra().listen(this, "hide", this.K2a)
    };
    _.g.aea = function(a) {
      for (var b = _.Cc(ZCf), c = 0; c < b.length; c++) {
        var d = this.H[b[c]];
        if (d && (d = d[a])) return d
      }
      return null
    };
    _.g.EZ = function(a) {
      return (a = this.aea(a)) ? a : null
    };
    _.g.ypa = function(a) {
      if (a = this.aea(a)) a.focus ? a.focus() : a instanceof _.Oq && a.isEnabled() && (a.kf(!0), a.Xa().focus())
    };
    _.g.K2a = function(a) {
      _.fc(a.target) && this.dispatchEvent("ua")
    };
    var aDf = function(a, b, c) {
      b = void 0 === b ? null : b;
      _.yw.call(this, _.ETa, {
        ab: a
      }, c);
      var d = this,
        e;
      this.Na = new Promise(function(f, h) {
        e = f;
        _.rj(d, function() {
          h(Error("uc"))
        })
      });
      this.Db = e;
      this.wa = new _.$q("");
      this.H = new _.Bw(this.wa, this.Ia());
      _.ww(this, "a-s-Ba-Ak-x", this.H);
      if (this.ma = b) YCf(this.H, this.ma), this.wa.set("XrUcvb"), _.rj(this.ma, this.Ja.bind(this, this.ma))
    };
    _.z(aDf, _.yw);
    aDf.prototype.Sa = function() {
      _.yw.prototype.Sa.call(this);
      this.Db()
    };
    aDf.prototype.Ja = function(a) {
      this.Na.then(this.H.xga.bind(this.H, bDf(this, a)), function() {
        _.sj(a)
      })
    };
    var bDf = function(a, b) {
        return b == a.ma ? "XrUcvb" : b.getId()
      },
      cDf = function(a) {
        this.wa = a
      },
      dDf = function(a, b, c, d) {
        _.I.call(this);
        var e = this;
        this.Ga = a;
        this.ha = b;
        this.H = c;
        this.ta = d;
        this.ma = this.Ga.$Q(this.ta);
        this.ua = new _.I7d(this.ma.hB(), this.H.getSelection());
        this.Ja = new _.yD(this.H.getSelection().Bu());
        this.ka = new _.$q(null);
        this.va = new _.er;
        this.wa = new _.er;
        this.Ea = new _.er;
        this.Ca = new _.er;
        this.ma.oA(null, null, function(h, k, m) {
          h == e.ka.get() && e.va.H({
            from: k,
            Wo: m
          })
        }, this);
        var f = this.ha.IL();
        this.ha.TL().listen(function(h) {
          h.region ==
            f.get() && null != e.ka.get() && e.wa.H(h.index)
        }, this);
        this.ha.gM().listen(function(h) {
          h.region == f.get() && e.Ea.H(h)
        }, this);
        this.ha.fM().listen(function(h) {
          h.region == f.get() && e.Ca.H(h)
        }, this)
      };
    _.z(dDf, _.I);
    _.g = dDf.prototype;
    _.g.caa = function(a) {
      var b = this;
      return new _.go([this.ZD()], function() {
        return b.ZD().get() == a
      })
    };
    _.g.cea = function(a) {
      return this.H.EN(a)
    };
    _.g.isSelected = function(a) {
      return this.H.getSelection().has(a)
    };
    _.g.Xf = function(a, b) {
      this.H.Xf(a, b)
    };
    _.g.ZD = function() {
      return this.ka
    };
    _.g.Wj = function() {
      return this.ka.get()
    };
    _.g.Fs = function(a) {
      var b = this;
      if (null == a) this.ka.set(null);
      else if (null == this.ma.wk(a)) return;
      if (a) {
        var c = this.Ga.PB().Sg().find(function(d) {
          d = d.H.get(b.ta) || null;
          return !(!d || null == a || !d.wk(a))
        });
        c && (this.ha.DA(c), this.ha.xI(a), _.fo(this.ka, this.ha.IB()))
      }
    };
    _.g.SE = function(a) {
      this.H.GN(a)
    };
    _.g.Ck = function() {
      this.H.Ck()
    };
    _.g.Nw = function() {
      this.H.Nw()
    };
    _.g.qh = function() {
      return this.ua
    };
    _.g.RB = function() {
      return this.ua.Je()
    };
    _.g.kH = function() {
      return this.Ja
    };
    _.g.dea = function() {
      return this.H.FN()
    };
    _.g.Yqa = function() {
      return this.H.getSelection().Em()
    };
    _.g.Mz = function() {
      return this.H.getSelection().kc()
    };
    _.g.ee = function() {
      return this.ma
    };
    _.g.O$ = function() {
      return this.wa
    };
    _.g.N$ = function() {
      return this.va
    };
    _.g.Aqa = function() {
      return this.Ea
    };
    _.g.zqa = function() {
      return this.Ca
    };
    var eDf = function(a, b) {
      dDf.call(this, a.get(_.Lr), a.get(_.Hr), a.get(_.Mr), b)
    };
    _.z(eDf, dDf);
    var fDf = function(a, b) {
        var c = b = void 0 === b ? _.Yq : b;
        if (_.aBf.has(c)) return _.aBf.get(c);
        a = new eDf(a, b);
        _.aBf.set(c, a);
        return a
      },
      gDf = function(a, b, c) {
        var d = _.cd(b);
        a = d ? d.Oa() : a;
        cDf.call(this, c || a.get(_.rn).Ia());
        var e = this;
        c = b && b && b[_.Gae] ? b : null;
        var f = b && b && b[_.S6d] ? b : null;
        this.ka = b;
        this.Fa = new _.Ln(a);
        _.rj(a, function() {
          _.sj(e.Fa)
        });
        this.Fa.registerService(_.Xq, this);
        this.va = this.Fa.get(_.Na);
        this.Fa.get(_.vba);
        this.H = new _.Yy;
        this.Ca = d && d.Qpa();
        this.ta = d && (d instanceof _.ZX || d instanceof _.i2) ? d.zt() :
          null;
        this.ua = f && f.voa();
        this.ha = b instanceof _.i2 ? b.yt() : c && c.Uq();
        this.ma = b instanceof _.i2 ? b.Hk() : c && c.Hk()
      };
    _.z(gDf, cDf);
    _.g = gDf.prototype;
    _.g.nt = function() {
      var a = new _.ht;
      _.jt(a, 6);
      return a
    };
    _.g.Ia = function() {
      return this.wa
    };
    _.g.Oa = function() {
      return this.Fa
    };
    _.g.Jk = function() {
      if (this.ka instanceof _.i2) return fDf(this.Oa(), void 0);
      var a = _.OB(this.ka, void 0);
      return a && a.Jk()
    };
    _.g.am = function(a) {
      return this.ka instanceof _.i2 ? fDf(this.Oa(), a) : this.ka.Jk()
    };
    _.g.yt = function() {
      return this.ha
    };
    _.g.Hk = function() {
      return this.ma
    };
    _.g.kg = function(a) {
      return (a = _.OB(this.ka, a)) && a.kg()
    };
    _.g.P$ = function() {
      return this.ka.kg()
    };
    _.g.En = function() {
      if (this.ka instanceof _.i2) return this.ka.En();
      var a = this.kg();
      return a && a.En()
    };
    _.R("rXpi5d");
    var hDf = function(a) {
        this.H = a || _.cBf.Ab();
        this.Hc = null
      },
      iDf = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        for (var h = 0; h < e.length; h++) {
          var k = a,
            m = e[h],
            n = (k.H.ha[m] || null)(b);
          k = k.H.H[m];
          if (n)
            if (f) {
              m = c;
              var r = d,
                t = e[h];
              _.ww(m.ma[r], k, n);
              m.H[r] || (m.H[r] = {});
              m.H[r][t] = n
            } else k = c, m = d, r = e[h], k.ma[m].ub(n, !0), k.H[m] || (k.H[m] = {}), k.H[m][r] = n
        }
      },
      jDf = function(a, b, c, d) {
        var e = void 0 === e ? "a-l-Ba" : e;
        var f = (f = (f = _.cd(c)) && f.Ju()) || {
          Qr: [],
          np: []
        };
        b = new gDf(b, c);
        e = new $Cf(e, b.Ia());
        try {
          iDf(a, b, e, "start", f.Qr, d), iDf(a, b, e, "end",
            f.np, d)
        } catch (h) {
          throw h;
        }
        return e
      };
    _.vf(hDf);
    var kDf = hDf.Ab(),
      nDf = function(a, b) {
        b = void 0 === b ? kDf : b;
        var c = jDf(b, a, null, !0);
        aDf.call(this, "a-D-B-Ak", c, a.get(_.rn).Ia());
        var d = this;
        this.Fa = a;
        this.Ga = a.get(_.sr).ka;
        this.$a = a.get(_.to);
        this.Pa = a.Jc(_.Wq);
        this.Za = new _.cf(this);
        this.Ta(this.Za);
        this.rb = b;
        this.ha = new Map;
        this.ha.set(null, c);
        _.rj(this, function() {
          d.ha.forEach(function(e, f) {
            lDf(d, f)
          })
        });
        mDf(this)
      };
    _.z(nDf, aDf);
    var mDf = function(a) {
        a.$a.cu(_.ufb, function() {
          var b = [_.Xz, _.q2a],
            c = a.wa.get();
          (c = a.H.get(c)) && (_.He(b) ? b.forEach(c.ypa.bind(c)) : c.ypa(b))
        }, !1)
      },
      lDf = function(a, b) {
        _.sj(a.ha.get(b));
        a.ha["delete"](b)
      };
    nDf.prototype.Sa = function() {
      var a = this;
      aDf.prototype.Sa.call(this);
      this.Pa.then(function(b) {
        return b.H(a)
      });
      this.Ga.observe(function(b) {
        b = a.Ca(b);
        a.wa.set(bDf(a, b))
      }, this, !0)
    };
    nDf.prototype.Ua = function() {
      return this
    };
    nDf.prototype.Ea = function(a) {
      var b = this;
      lDf(this, a);
      var c = jDf(this.rb, this.Fa, a);
      this.ha.set(a, c);
      this.Na.then(this.H.add.bind(this.H, c, bDf(this, c)));
      _.rj(c, this.Ja.bind(this, c));
      a instanceof _.I && _.rj(a, function() {
        return lDf(b, a)
      });
      this.Ga.get() == a && this.wa.set(bDf(this, c))
    };
    nDf.prototype.Ca = function(a) {
      this.ha.get(a) || this.Ea(a);
      return this.ha.get(a)
    };
    _.bt({
      id: _.Cw,
      Rb: nDf
    });




    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("J8AbBf");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syta");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.kK = function(a) {
      return ((a.getDay() + 6) % 7 - a.Bx + 7) % 7
    };
    _.Y6b = function(a) {
      return _.mPa(a.getFullYear(), a.getMonth())
    };
    _.Z6b = function(a, b) {
      b = b || new Date((0, _.Cf)());
      return a.getFullYear() == b.getFullYear()
    };
    _.R("syn3");
    var $6b;
    $6b = {
      fX: "y",
      qxb: "y G",
      rxb: "MMM y",
      g6: "MMMM y",
      sxb: "MM/y",
      VF: "MMM d",
      Fob: "MMMM dd",
      ADa: "M/d",
      I5: "MMMM d",
      BDa: "MMM d, y",
      e6: "EEE, MMM d",
      Rwb: "EEE, MMM d, y",
      KCa: "d",
      Gob: "MMM d, h:mm a zzzz"
    };
    _.lK = $6b;
    _.lK = $6b;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.QAd = function(a) {
      a = a || {};
      return _.us(a.Wg, "black") ? "#FFFFFF" : "#000000"
    };
    _.R("sytb");
    _.W("C", "", 0, function(a) {
      a = a.Qe;
      return (0, _.T)('<span class="' + _.X("a-q-Jc-wg") + '">' + _.Hs(_.U(a)) + "</span>")
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syv6");
    _.pW = function() {};
    _.C(_.pW, _.Hq);
    _.vf(_.pW);
    _.g = _.pW.prototype;
    _.g.Tc = function() {
      return "h-ra"
    };
    _.g.Br = function() {
      return "tab"
    };
    _.g.Ka = function(a) {
      var b = _.pW.Qa.Ka.call(this, a);
      (a = a.nl()) && this.ae(b, a);
      return b
    };
    _.g.Qc = function(a, b) {
      b = _.pW.Qa.Qc.call(this, a, b);
      var c = this.nl(b);
      c && a.Wt(c);
      a.isSelected() && (c = a.getParent()) && _.yf(c.Cv) && (a.Xd(8, !1), c.Cv(a));
      return b
    };
    _.g.nl = function(a) {
      return a.title || ""
    };
    _.g.ae = function(a, b) {
      a && (a.title = b || "")
    };
    _.qW = function(a, b, c) {
      _.Oq.call(this, a, b || _.pW.Ab(), c);
      this.tg(8, !0);
      this.Dv |= 9
    };
    _.C(_.qW, _.Oq);
    _.qW.prototype.nl = function() {
      return this.va
    };
    _.qW.prototype.ae = function(a) {
      this.Ug().ae(this.Da(), a);
      this.Wt(a)
    };
    _.qW.prototype.Wt = function(a) {
      this.va = a
    };
    _.Nq("h-ra", function() {
      return new _.qW(null)
    });
    _.rW = function() {
      this.H = "tablist"
    };
    _.C(_.rW, _.dx);
    _.vf(_.rW);
    _.rW.prototype.Tc = function() {
      return "h-ra-B"
    };
    _.rW.prototype.Kha = function(a, b, c) {
      this.ma || (this.ha || CUd(this), this.ma = _.Gfa(this.ha));
      var d = this.ma[b];
      d ? (_.YVa(a, DUd(d)), a.Gb = d) : _.rW.Qa.Kha.call(this, a, b, c)
    };
    _.rW.prototype.WB = function(a) {
      var b = _.rW.Qa.WB.call(this, a);
      this.ha || CUd(this);
      b.push(this.ha[a.Gb]);
      return b
    };
    var CUd = function(a) {
      var b = a.Tc();
      a.ha = {
        top: b + "-Qd",
        bottom: b + "-ce",
        start: b + "-ic",
        end: b + "-dj"
      }
    };
    _.sW = function(a, b, c) {
      a = a || "top";
      _.YVa(this, DUd(a));
      this.Gb = a;
      _.ex.call(this, this.jw, b || _.rW.Ab(), c);
      EUd(this)
    };
    _.C(_.sW, _.ex);
    _.g = _.sW.prototype;
    _.g.j7 = !0;
    _.g.To = null;
    _.g.Sa = function() {
      _.sW.Qa.Sa.call(this);
      EUd(this)
    };
    _.g.mb = function() {
      _.sW.Qa.mb.call(this);
      this.To = null
    };
    _.g.removeChild = function(a, b) {
      this.vY(a);
      return _.sW.Qa.removeChild.call(this, a, b)
    };
    _.g.vha = function(a) {
      _.sW.Qa.vha.call(this, a);
      this.j7 && this.Cv(this.af(a))
    };
    _.g.Cv = function(a) {
      a ? a.Xf(!0) : this.To && this.To.Xf(!1)
    };
    _.g.vY = function(a) {
      if (a && a == this.To) {
        for (var b = _.ed(this, a), c = b - 1; a = this.af(c); c--) {
          var d = a;
          if (d.isVisible() && d.isEnabled()) {
            this.Cv(a);
            return
          }
        }
        for (b += 1; a = this.af(b); b++)
          if (c = a, c.isVisible() && c.isEnabled()) {
            this.Cv(a);
            return
          } this.Cv(null)
      }
    };
    _.g.iS = function(a) {
      this.To && this.To != a.target && this.To.Xf(!1);
      this.To = a.target
    };
    _.g.yba = function(a) {
      a.target == this.To && (this.To = null)
    };
    _.g.KWa = function(a) {
      this.vY(a.target)
    };
    _.g.LWa = function(a) {
      this.vY(a.target)
    };
    _.g.Al = function() {
      _.fx(this) || this.Il(this.To || this.af(0))
    };
    var EUd = function(a) {
        a.Ra().listen(a, "select", a.iS).listen(a, "unselect", a.yba).listen(a, "disable", a.KWa).listen(a, "hide", a.LWa)
      },
      DUd = function(a) {
        return "start" == a || "end" == a ? "vertical" : "horizontal"
      };
    _.Nq("h-ra-B", function() {
      return new _.sW
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvc");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var RAd = function(a) {
        return (0, _.T)('<svg height="24px" width="24px" viewBox="0 0 24 24" focusable="false"><rect width="24" height="24" fill="' + _.X(a.color) + '"/></svg>')
      },
      SAd = function(a) {
        return (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="0 0 21 21" focusable="false" fill="' + _.X(a.color) + '"><path d="M10,10c1.655,0,3-1.342,3-3c0-1.656-1.345-3-3-3C8.344,4,7,5.344,7,7C7,8.658,8.344,10,10,10z M10,12c-2,0-6,1-6,3v2h12v-2 C16,13,12,12,10,12z"/></svg>')
      },
      TAd = function() {
        return (0, _.T)(SAd({
          color: "#FFFFFF"
        }))
      };
    _.R("syt6");
    var UAd = function(a) {
      var b = a.w4;
      b = '<div class="' + _.X("y-C-lg") + " " + _.X("y-C-ra-ka") + '" targetid="' + _.X(b) + '" action="locate" role="link" aria-label="' + _.X("View file in folder") + '" data-tooltip="' + _.X("View file in folder") + '">';
      a = a || {};
      a = (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="0 0 21 21" focusable="false" fill="' + _.X(_.QAd(a)) + '"><path d="M16.742,15.502L14,12.758h-0.643l-0.551-0.551C13.54,11.338,14,10.229,14,9c0-2.761-2.238-5-5-5S4,6.239,4,9 c0,2.762,2.238,5,5,5c1.229,0,2.338-0.459,3.208-1.193l0.552,0.55V14l2.742,2.742c0.342,0.344,0.896,0.344,1.24,0.002 C17.086,16.4,17.086,15.846,16.742,15.502z M9,12.25c-1.795,0-3.25-1.455-3.25-3.25S7.205,5.75,9,5.75c1.797,0,3.25,1.455,3.25,3.25 S10.797,12.25,9,12.25z"/></svg>');
      return (0, _.T)(b + a + "</div>")
    };
    var VAd = function(a) {
        var b = a.mFa,
          c = a.UXa,
          d = a.pJa,
          e = a.iab,
          f = a.email,
          h = a.photoUrl,
          k = a.bCa,
          m = a.cCa,
          n = a.Ldb,
          r = a.oJa,
          t = a.tq,
          y = a.sourceName,
          A = a.zcb,
          G = a.kcb,
          J = a.Xz,
          L = a.s0,
          N = a.Wg,
          V = a.Lsa,
          ia = a.NXa;
        a.iZa ? (k = '<div class="' + _.X("y-C-ud-c-j") + '"><div class="' + _.X("y-C-Nd") + '">' + RAd({
            color: "#8f8f8f"
          }) + '</div><div class="' + _.X("y-C-ud-za") + " " + _.X("y-C-a-c") + '">', N = (0, _.T)((0, _.T)('<svg width="24px" height="24px" fill="' + _.X("#FFFFFF") + '"><path d="M24 15zm-1.72-1L15.42 2H8.58v.01L15.43 14h6.85zM9.73 15L6.3 21h13.12l3.43-6H9.73zM7.71 3.52L1.15 15l3.42 5.99 6.56-11.47-3.42-6z"/></svg>')),
          k = k + N + "</div></div>") : L ? (k = '<div class="' + _.X("y-C-ud-c-j") + " " + _.X("y-C-Jp-c-j") + '"><div class="' + _.X("y-C-ud-c") + " " + _.X("y-C-Jp-c") + '">', N = N = {
          Wg: N
        }, N = (0, _.T)(SAd({
          color: _.QAd(N)
        })), k = k + N + "</div></div>") : h ? k = "<img " + _.sAd({
          url: h
        }) + ' aria-hidden="true">' : (m ? N = '<span class="' + _.X("y-C-ud-c-r") + " " + _.X("y-C-ud-za") + '" aria-hidden="true">' + _.U(m) + "</span>" : J ? (N = '<div class="' + _.X("y-C-ud-za") + " " + _.X("y-C-Id-st-za") + '">', a = k ? k : "#8f8f8f", a = (0, _.T)('<svg x="0px" y="0px" width="32px" height="32px" focusable="false"><g><path fill="#FFFFFF" d="M16,17.907c-2.381,0-7,1.19-7,3.571V24h14v-2.521C23,19.098,18.381,17.907,16,17.907z M16.204,15.525   c1.972,0,3.571-1.597,3.571-3.571c0-1.972-1.6-3.571-3.571-3.571s-3.571,1.6-3.571,3.571   C12.633,13.929,14.232,15.525,16.204,15.525z"/></g><g><defs><circle id="SVGID_1_" cx="16" cy="16" r="16"/></defs><clippath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clippath><g clip-path="url(#SVGID_2_)"><rect x="15.275" y="-0.784" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.7001 16.2582)" fill="#FFFFFF" width="2" height="34.002"/><rect x="14.715" y="0.276" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.7606 15.8189)" fill="' +
          _.X(a) + '" width="1" height="34.002"/><rect x="16.836" y="-1.845" transform="matrix(0.7066 -0.7076 0.7076 0.7066 -5.6381 16.7132)" fill="' + _.X(a) + '" width="1.001" height="34.002"/></g></g></svg>'), N = N + a + "</div>") : N = '<div class="' + _.X("y-C-ud-za") + " " + _.X("y-C-ud-c") + '">' + TAd() + "</div>", k = '<div class="' + _.X("y-C-ud-c-j") + '"><div class="' + _.X("y-C-Nd") + '">' + RAd({
          color: k ? k : "#8f8f8f"
        }) + "</div>" + N + "</div>");
        return (0, _.T)('<div class="' + _.X("y-C") + " " + (t ? _.X("y-C-qb") + " " + _.X("y-C-Nd-Ce") : "") + '" role="listitem" aria-labelledby="' +
          _.X(b) + " " + _.X(c) + " " + _.X(d) + '"><div><div class="' + _.X("y-C-Ya") + '"><div class="' + _.X("y-C-bi") + '" title="' + _.X(r) + '">' + _.U(n) + '</div><div id="' + _.X(b) + '" class="' + _.X("y-C-at") + '">' + (y ? '<span class="' + _.X("y-C-Ms") + (A && G ? " " + _.X("y-C-ra-ka") + " " + _.X("y-kc-A") : "") + '" title="' + _.X(y) + '"' + (A && G ? ' action="openSource" role="link" sourceid="' + _.X(A) + '"' : "") + ">" + _.U(y) + "</span>" : "") + '</div></div><div class="' + _.X("y-C-ud") + " " + (f ? "g-hovercard" : "") + '"' + (f ? ' data-email="' + _.X(f) + '"' : "") + ">" + k + '</div><div class="' +
          _.X("y-C-D") + '"><div id="' + _.X(c) + '" class="' + _.X("y-C-q-D") + '"></div></div></div>' + (V ? '<div id="' + _.X(d) + '" class="' + _.X("y-C-q-j") + '"><div class="' + _.X("y-C-q") + '"></div></div>' : "") + (ia ? '<div id="' + _.X(e) + '" class="' + _.X("y-C-ak-j") + '"><div class="' + _.X("y-C-ak") + '"></div></div>' : "") + "</div>")
      },
      WAd = function(a) {
        var b = a.mu,
          c = a.userName,
          d = a.xf,
          e = "";
        _.He(a.tf);
        a = a.tf.length;
        e += '<div class="' + _.X("y-mc-q-Vb") + '"><div>';
        d ? (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}acted on an item (type {EVENT_TYPE}){END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}acted on {NUM_TARGETS_2} items (type {EVENT_TYPE}){END_SPAN}}}"), {
          NUM_TARGETS_1: a,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          EVENT_TYPE: _.U(b),
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_TARGETS_2: _.U(a)
        }), e += b) : (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}acted on an item (type {EVENT_TYPE}){END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}acted on {NUM_TARGETS_2} items (type {EVENT_TYPE}){END_SPAN}}}"), {
          NUM_TARGETS_1: a,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(c),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          EVENT_TYPE: _.U(b),
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_TARGETS_2: _.U(a)
        }), e += b);
        return (0, _.T)(e + "</div></div>")
      },
      YAd = function(a) {
        _.He(a.tf);
        var b = a.tf;
        a = a.Wg;
        var c = '<div class="' + _.X("y-C-ka-E") + '"><div role="list" class="' + _.X("y-C-ka-E-Zs-Na") + '">';
        for (var d = 0; 6 > d; d++) {
          var e = d;
          c += e < b.length ?
            XAd({
              first: 0 == e,
              target: b[e],
              E0: !0,
              Wg: a
            }) : ""
        }
        c += "</div>";
        if (6 < b.length) {
          c += '<div class="' + _.X("y-C-Ub-Ma-d") + '"></div><div role="list" class="' + _.X("y-C-ka-E-Vb-hc") + '">';
          d = Math.max(0, Math.ceil(b.length - 6));
          for (e = 0; e < d; e++) c += XAd({
            first: !1,
            target: b[6 + e],
            E0: !0,
            Wg: a
          });
          c += '</div><div class="' + _.X("y-C-Ub-Wo-d") + '"></div>'
        }
        return (0, _.T)(c + "</div>")
      },
      XAd = function(a) {
        var b = a.first,
          c = a.target,
          d = a.YX;
        return (0, _.T)("<div" + (a.E0 ? ' role="listitem"' : "") + ' class="' + _.X("y-C-ka") + (b ? " " + _.X("y-C-ka-ig") : "") + '"><div class="' +
          _.X("y-C-ka-c") + '">' + _.U(c.icon) + '</div><div class="' + _.X("y-C-ka-q") + (c.nB ? " " + _.X("y-C-ts-ka") : "") + '"><div class="' + _.X("y-C-ka-T") + (c.et ? " " + _.X("y-C-xj-ka") + " " + _.X("y-C-ra-ka") : "") + '"' + (c.et ? ' targetid="' + _.X(c.id) + '" action="open" role="link" aria-label="' + _.X(c.Jb) + '"' + (d ? ' commentid="' + _.X(d) + '"' : "") : "") + ' data-tooltip="' + _.X(c.name) + '" data-tooltip-only-on-overflow="true">' + _.U(c.name) + "</div>" + (c.nB ? UAd(_.ss({
            w4: c.id
          }, a)) : "") + "</div></div>")
      },
      ZAd = function(a, b) {
        var c = a.Z7a;
        _.He(a.parents);
        var d = a.parents;
        _.He(a.tf);
        var e = a.tf;
        var f = a.x4;
        a = a.Wg;
        c = '<div class="' + _.X("y-C-ka") + " " + _.X("y-C-ka-ig") + " " + _.X("y-C-je") + '"><div class="' + _.X("y-C-ka-c") + " " + _.X("y-C-je-c") + '">' + _.U(c) + '</div><div class="' + _.X("y-C-ka-q") + " " + _.X("y-C-je-q") + '"><div class="' + _.X("y-C-ka-T") + " " + _.X("y-C-je-T") + '" data-tooltip="';
        for (var h = d.length, k = 0; k < h; k++) c += (0 != k ? ", " : "") + _.X(d[k].name);
        c += '" data-tooltip-only-on-overflow="true">';
        h = d.length;
        for (k = 0; k < h; k++) {
          var m = d[k];
          c += 1 == d.length ? '<div class="' + _.X("y-C-ka-T") +
            " " + (m.et ? _.X("y-C-xj-ka") + " " + _.X("y-C-ra-ka") : "") + '"' + (m.et ? ' targetid="' + _.X(m.id) + '" action="open" role="link" aria-label="' + _.X(m.Jb) + '"' : "") + ' data-tooltip="' + _.X(m.name) + '" data-tooltip-only-on-overflow="true">' + _.U(m.name) + "</div>" : (0 != k ? ", " : "") + "<span" + (m.et ? ' class="' + _.X("y-C-xj-ka") + " " + _.X("y-C-ra-ka") + '" targetid="' + _.X(m.id) + '" action="open" role="link"' : "") + ' aria-label="' + _.X(m.Jb) + '" data-tooltip="' + _.X(m.name) + '">' + _.U(m.name) + "</span>"
        }
        c += "</div></div></div>" + (f ? '<div class="' +
          _.X("y-E-hc-r") + '">' + _.U(f) + "</div>" : "") + '<div class="' + _.X("y-C-Li") + '">' + YAd({
          tf: e,
          Wg: a
        }, b) + "</div>";
        return (0, _.T)(c)
      };
    var lV = function(a, b) {
      var c = a.color;
      return (0, _.T)(_.mu({
        variant: a.variant,
        color: c ? c : "rgba(0, 0, 0, .42)",
        hb: !0
      }, b))
    };
    var $Ad = function(a) {
      this.H = a
    };
    $Ad.prototype.$l = function(a, b) {
      b = void 0 === b ? !1 : b;
      var c = this.H.wqa(),
        d = c.$l(a);
      a = c.getProductName(a);
      return (0, _.T)((b ? _.ws("d", "shortcutSmall", !0)(null, void 0) : "") + '<img class="' + _.X("y-C-ka-c-Ua") + '" aria-hidden="true" src="' + _.X(_.Fs(d)) + '" alt="' + _.X(a) + '">')
    };
    var aBd = function(a, b) {
      switch (b) {
        case "qc":
          return (0, _.T)(_.PMa({
            color: "rgba(0, 0, 0, .54)",
            hb: !0,
            size: "16px"
          }));
        case "pc":
          return (0, _.T)(_.tAd({
            color: "rgba(0, 0, 0, .54)",
            hb: !0,
            size: "16px"
          }));
        default:
          return a.$l("")
      }
    };
    var bBd = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(bBd, _.D);
    _.g = bBd.prototype;
    _.g.getType = function() {
      return _.p(this, 1)
    };
    _.g.Lg = function() {
      return _.p(this, 4)
    };
    _.g.getName = function() {
      return _.p(this, 5)
    };
    _.g.Id = function(a) {
      return _.l(this, 5, a)
    };
    _.g.getLabel = function() {
      return _.p(this, 9)
    };
    _.g.De = function(a) {
      return _.l(this, 9, a)
    };
    var dBd = function(a, b, c) {
        b = c || b;
        _.He(a.scopes);
        c = a.scopes;
        var d = a.X4a;
        a = a.UH;
        for (var e = '<div class="' + _.X("y-C-ak-E") + '"><div role="list" class="' + _.X("y-C-ak-Zs-Na") + '">', f = Math.max(0, Math.ceil(d)), h = 0; h < f; h++) {
          var k = h;
          e += k < c.length ? cBd({
            first: 0 == k,
            scope: c[k],
            Sy: a
          }, b) : ""
        }
        e += "</div>";
        if (c.length > d) {
          e += '<div class="' + _.X("y-C-ak-Ub-Ma-d") + '"></div><div role="list" class="' + _.X("y-C-ak-Vb-hc") + '">';
          f = Math.max(0, Math.ceil(c.length - d));
          for (h = 0; h < f; h++) e += cBd({
            first: !1,
            scope: c[d + h],
            Sy: a
          }, b);
          e += '</div><div class="' +
            _.X("y-C-ak-Ub-Wo-d") + '"></div>'
        }
        return (0, _.T)(e + "</div>")
      },
      cBd = function(a, b) {
        var c = a.scope && (a.scope.kb || a.scope),
          d = a.first;
        a = a.Sy;
        var e = "",
          f = 3 == c.getType(),
          h = c && (c.kb || c);
        if (3 == h.getType()) {
          var k = _.p(h, 2);
          var m = h.getName();
          h = _.x(h, 8);
          var n = "";
          switch (k) {
            case 1:
              n = h ? n + "You lost access." : n + (m + " lost access.");
              break;
            case 2:
              n += "Group " + (m + " lost access.");
              break;
            case 3:
              n += "Anyone at " + (m + " can no longer access.");
              break;
            case 4:
              n += "Anyone can no longer access.";
              break;
            default:
              n += m + " lost access."
          }
          k = n
        } else k =
          1 == h.getType() || 2 == h.getType() ? _.ws("F", "", !1)({
            scope: h
          }, b) + " - " + eBd({
            role: h.Lg(),
            Sy: a
          }) : "";
        d = '<div role="listitem" class="' + _.X("y-C-fh-Yl-bc") + (d ? " " + _.X("y-C-fh-Yl-bc-ig") : "") + '" aria-label="' + _.X(k) + '"><div class="' + _.X("y-C-fh-bc-c-j") + (f ? " " + _.X("y-C-fh-bc-qp") : "") + '">';
        var r = c && (c.kb || c);
        k = _.T;
        m = '<div class="' + _.X("y-C-fh-c") + '">';
        if (_.p(r, 6)) h = '<img src="' + _.X(_.Fs(_.p(r, 6))) + '">';
        else {
          h = '<div class="' + _.X("y-C-fh-c-j") + '"><div class="' + _.X("y-C-fh-Nd") + '">' + RAd({
            color: _.p(r, 7) ? "" + _.p(r,
              7) : "#8f8f8f"
          }) + "</div>";
          if (r.getLabel()) n = '<span class="' + _.X("y-C-fh-c-r") + '" aria-hidden=true>' + _.U(r.getLabel()) + "</span>";
          else {
            n = '<div class="' + _.X("y-C-fh-qd-c") + '">';
            var t = _.p(r, 2);
            r = _.x(r, 3);
            var y = "";
            switch (t) {
              case 1:
                y += TAd();
                break;
              case 2:
                y += (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="0 0 21 21" focusable="false" fill="#FFFFFF"><path d="M11,10c1.104,0,2-0.896,2-2s-0.896-2-2-2C9.895,6,9.001,6.896,9.001,8S9.895,10,11,10z M11,11c-2,0-4,0.699-4,1.6V14h8v-1.4 C15,11.699,13,11,11,11z"/><circle cx="5.5" cy="9.5" r="1.5"/><path d="M5.5,12.125c-1.25,0-2.5,0.437-2.5,1V14h5v-0.875C8,12.562,6.75,12.125,5.5,12.125z"/><circle cx="16.5" cy="9.5" r="1.5"/><path d="M16.5,12.125c-1.25,0-2.5,0.437-2.5,1V14h5v-0.875C19,12.562,17.75,12.125,16.5,12.125z"/></svg>');
                break;
              case 3:
                y += r ? (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="150 137.599 21 21" focusable="false" fill="#FFFFFF"><path d="M158.214,155.799H156.5c-0.939,0-1.7-0.762-1.7-1.7s0.761-1.7,1.7-1.7h1.714c0.364,0,0.593,0.173,0.786,0.45h1 c-0.293-0.709-1.053-1.25-1.786-1.25H156.5c-1.382,0-2.5,1.12-2.5,2.5s1.118,2.5,2.5,2.5h1.714c0.733,0,1.493-0.541,1.786-1.25h-1 C158.807,155.626,158.578,155.799,158.214,155.799z M157,154.098c0,0.276,0.225,0.501,0.5,0.501h6c0.275,0,0.5-0.225,0.5-0.501 s-0.225-0.499-0.5-0.499h-6C157.225,153.599,157,153.821,157,154.098z M164.5,151.599h-1.715c-0.732,0-1.492,0.541-1.785,1.25h1 c0.193-0.277,0.422-0.45,0.785-0.45h1.715c0.939,0,1.7,0.762,1.7,1.7s-0.761,1.7-1.7,1.7h-1.715c-0.363,0-0.592-0.173-0.785-0.45h-1 c0.293,0.709,1.053,1.25,1.785,1.25h1.715c1.382,0,2.49-1.12,2.49-2.5S165.882,151.599,164.5,151.599z M161,143.599v-4h-7v11h13v-7 H161z M157,148.599h-1v-1h1V148.599z M157,146.599h-1v-1h1V146.599z M157,144.599h-1v-1h1V144.599z M157,142.599h-1v-1h1V142.599z M159,148.599h-1v-1h1V148.599z M159,146.599h-1v-1h1V146.599z M159,144.599h-1v-1h1V144.599z M159,142.599h-1v-1h1V142.599z M163,148.599h-1v-1h1V148.599z M163,146.599h-1v-1h1V146.599z M165,148.599h-1v-1h1V148.599z M165,146.599h-1v-1h1V146.599z"/></svg>') :
                  (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="150 487.599 21 21" focusable="false" fill="#FFFFFF"><path d="M161,496.599v-4h-7v11h13v-7H161z M157,501.599h-1v-1h1V501.599z M157,499.599h-1v-1h1V499.599z M157,497.599h-1v-1h1V497.599z M157,495.599h-1v-1h1V495.599z M159,501.599h-1v-1h1V501.599z M159,499.599h-1v-1h1V499.599z M159,497.599h-1v-1h1V497.599z M159,495.599h-1v-1h1V495.599z M163,501.599h-1v-1h1V501.599z M163,499.599h-1v-1h1V499.599z M165,501.599h-1v-1h1V501.599z M165,499.599h-1v-1h1V499.599z"/></svg>');
                break;
              case 4:
                y += r ? (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="150 87.599 21 21" focusable="false" fill="#FFFFFF"><path d="M166,98.765c0-1.833-3.667-2.566-5.5-2.566s-5.5,0.733-5.5,2.566v1.833h11V98.765z M160.5,94.599 c1.38,0,2.49-1.118,2.49-2.5c0-1.38-1.11-2.5-2.49-2.5s-2.5,1.12-2.5,2.5C158,93.48,159.12,94.599,160.5,94.599z M157,104.098 c0,0.276,0.225,0.501,0.5,0.501h6c0.275,0,0.5-0.225,0.5-0.501s-0.225-0.499-0.5-0.499h-6C157.225,103.599,157,103.821,157,104.098z M158.214,105.799H156.5c-0.939,0-1.7-0.762-1.7-1.7s0.761-1.7,1.7-1.7h1.714c0.364,0,0.593,0.173,0.786,0.45h1 c-0.293-0.709-1.053-1.25-1.786-1.25H156.5c-1.382,0-2.5,1.12-2.5,2.5s1.118,2.5,2.5,2.5h1.714c0.733,0,1.493-0.541,1.786-1.25h-1 C158.807,105.626,158.578,105.799,158.214,105.799z M164.5,101.599h-1.715c-0.732,0-1.492,0.541-1.785,1.25h1 c0.193-0.277,0.422-0.45,0.785-0.45h1.715c0.939,0,1.7,0.762,1.7,1.7s-0.761,1.7-1.7,1.7h-1.715c-0.363,0-0.592-0.173-0.785-0.45h-1 c0.293,0.709,1.053,1.25,1.785,1.25h1.715c1.382,0,2.49-1.12,2.49-2.5S165.882,101.599,164.5,101.599z"/></svg>') :
                  (0, _.T)('<svg x="0px" y="0px" width="21px" height="21px" viewBox="150 237.599 21 21" focusable="false" fill="#FFFFFF"><path d="M160,239.599c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S164.418,239.599,160,239.599z M160,254.698 c-3.921,0-7.1-3.178-7.1-7.1c0-1.045,0.231-2.033,0.638-2.925l1.462,2.925c0,0,4,2.99,4,3v0.913c0,1.087,1,0.997,1,1.087V254.698z M165,252.638v-1.08c0-0.686-0.251-0.959-0.936-0.959H162c0,0,0-0.999,0-1c0,0,0-2-2-2h-3l0.012-2h0.972 c0.668,0,1.017,0,1.017-0.875v-1.125h1.065c1.935,0,1.935-2,1.935-2v-0.81c2.946,0.864,5.099,3.583,5.099,6.81 C167.099,249.569,166.296,251.351,165,252.638z"/></svg>');
                break;
              default:
                y += TAd()
            }
            t = (0, _.T)(y);
            n = n + t + "</div>"
          }
          h = h + n + "</div>"
        }
        k = k(m + h + "</div>");
        e += d + k + "</div>" + _.ws("E", "", !1)({
          scope: c,
          Sy: a,
          kW: f
        }, b) + "</div>";
        return (0, _.T)(e)
      };
    _.W("E", "", 0, function(a, b, c) {
      return (0, _.T)(_.fBd({
        scope: a.scope && (a.scope.kb || a.scope),
        Sy: a.Sy,
        kW: a.kW
      }, c || b))
    });
    _.fBd = function(a, b) {
      var c = a.scope && (a.scope.kb || a.scope),
        d = a.Sy;
      a = a.kW;
      return (0, _.T)('<div class="' + _.X("y-C-fh-bc-x-j") + (a ? " " + _.X("y-C-fh-bc-qp") : "") + '"><div class="' + _.X("y-C-fh-Bf") + '">' + (a ? "" : '<div class="' + _.X("y-C-fh-Bf-Jj") + '">' + _.U(eBd({
        role: c.Lg(),
        Sy: d
      })) + "</div>") + '<div class="' + _.X("y-C-fh-Bf-r") + '">' + _.U(_.ws("F", "", !1)({
        scope: c
      }, b)) + "</div></div></div>")
    };
    _.W("F", "", 0, function(a) {
      var b = a.scope && (a.scope.kb || a.scope);
      a = "";
      switch (_.p(b, 2)) {
        case 1:
          a = _.x(b, 8) ? a + "You" : a + b.getName();
          break;
        case 2:
          a += b.getName();
          break;
        case 3:
          _.x(b, 3) ? (b = "Anyone at " + (b.getName() + " with the link"), a += b) : (b = "Anyone at " + b.getName(), a += b);
          break;
        case 4:
          a = _.x(b, 3) ? a + "Anyone with the link" : a + "Anyone";
          break;
        default:
          a += b.getName()
      }
      return a
    });
    var eBd = function(a) {
      var b = a.role,
        c = "";
      if (a.Sy) switch (b) {
        case 1:
          c += "Viewer";
          break;
        case 2:
          c += "Commenter";
          break;
        case 3:
          c += "Contributor";
          break;
        case 4:
          c += "Owner";
          break;
        case 5:
          c += "Manager";
          break;
        case 7:
          c += "Content Manager"
      } else switch (b) {
        case 1:
          c += "Can view";
          break;
        case 2:
          c += "Can comment";
          break;
        case 3:
          c += "Can edit";
          break;
        case 4:
          c += "Owner";
          break;
        case 6:
          c += "Can view published"
      }
      return c
    };
    var mV = function(a, b, c, d, e, f, h) {
      this.name = a && !_.Kc(a) ? a : "Untitled";
      this.icon = void 0 === b ? null : b;
      this.id = void 0 === c ? null : c;
      this.et = d || !1;
      this.productName = e || "";
      this.nB = f || !1;
      this.Jb = h || this.name
    };
    var iBd = function(a, b) {
      var c = gBd.Ab();
      _.bx.call(this, "", c, b);
      this.Sf("y-C-ra-ka");
      this.setContent(hBd(a))
    };
    _.z(iBd, _.bx);
    var hBd = function(a) {
        switch (a) {
          case "ayrphd":
            return "Show less";
          default:
            return "Show all"
        }
      },
      gBd = function() {};
    _.z(gBd, _.ax);
    gBd.prototype.Tc = function() {
      return "y-C-rh-d"
    };
    _.vf(gBd);
    _.jBd = "EEE " + _.pv.oD[3];
    _.kBd = _.lK.VF;
    var mBd, nBd, rBd, sBd;
    _.nV = function(a, b, c, d, e, f, h) {
      c = void 0 === c ? WAd : c;
      d = void 0 === d ? YAd : d;
      e = void 0 === e ? dBd : e;
      f = void 0 === f ? !1 : f;
      h = void 0 === h ? !1 : h;
      _.Eq.call(this);
      this.ha = a;
      a || (a = Error(), a.message = "b/34167265 Constructing ActivityEvent without a model.", _.Yk(a));
      this.H = b;
      this.qc = c;
      this.Nc = d;
      this.Vc = e;
      this.Bb = !f;
      this.Ca = h;
      this.Lc = this.H.y0a();
      this.Db = new $Ad(this.H);
      this.Ga = 10;
      this.rb = this.Ja = null;
      this.va = new iBd("x1jltc", this.Ia());
      this.ub(this.va);
      this.wa = new iBd("ayrphd", this.Ia());
      this.ub(this.wa);
      this.Na = null;
      (this.ta =
        this.Ca ? new iBd("x1jltc", this.Ia()) : null) && this.ub(this.ta);
      (this.ua = this.Ca ? new iBd("ayrphd", this.Ia()) : null) && this.ub(this.ua);
      this.Pa = this.Vh = null
    };
    _.C(_.nV, _.Eq);
    _.g = _.nV.prototype;
    _.g.Ka = function() {
      var a = this.Ia(),
        b = new _.dB(this.Ga),
        c = new _.dB(10),
        d = this.ha.getUser();
      d = null != d ? this.Gb(d) : lBd(this);
      var e = new Date(this.ha.Sq());
      b = b.format(e);
      e = c.format(e);
      var f = c.format(new Date(this.ha.Pb));
      c = "";
      c = e == f ? e : f + (" to " + e);
      e = this.ha.Ca;
      d = {
        mFa: _.Gq(this, "annotation"),
        UXa: _.Gq(this, "header"),
        pJa: _.Gq(this, "details"),
        iab: _.Gq(this, "scopes"),
        photoUrl: d.photoUrl || null,
        bCa: d.color || null,
        cCa: d.label || null,
        Ldb: b,
        oJa: c,
        tq: this.ha.tq(),
        sourceName: mBd(this),
        zcb: e && this.H.Gaa().et() ? e.ha : void 0,
        kcb: this.H.nb().ha,
        Xz: this.ha.Xz(),
        s0: this.ha.s0(),
        iZa: nBd(this, this.ha),
        Wg: _.Rx(),
        Lsa: this.Bb,
        NXa: this.Ca
      };
      d = _.Yc(VAd, d, void 0, a);
      this.Oc(d);
      this.rb = this.Mb("y-mc-bi");
      (d = this.Mb("y-C-q-D")) && d.appendChild(_.Yc(this.qc, this.ka(), void 0, this.Ia()));
      if (this.Bb) {
        if (d = this.Mb("y-C-q")) d.appendChild(_.Yc(this.Nc, this.ka(), void 0, this.Ia())), b = a.Mb("y-C-Ub-Ma-d", d), c = a.Mb("y-C-Ub-Wo-d", d), this.Ja = a.Mb("y-C-ka-E-Vb-hc", d), b && (this.va.setContent(hBd("x1jltc")), this.va.render(b)), c && this.wa.render(c);
        this.$a(!1)
      }
      if (this.Ca) {
        if (d =
          this.Mb("y-C-ak")) d.appendChild(_.Yc(this.Vc, this.ka(), void 0, this.Ia())), b = a.Mb("y-C-ak-Ub-Ma-d", d), c = a.Mb("y-C-ak-Ub-Wo-d", d), this.Na = a.Mb("y-C-ak-Vb-hc", d), b && this.ta && (this.ta.setContent(hBd("x1jltc")), this.ta.render(b)), c && this.ua && this.ua.render(c);
        this.Ua(!1)
      }
      this.ha.tq() && _.Hk(function() {
        this.Ra().qd(this.Da(), _.vj, function() {
          _.Fb(this.Da(), "y-C-Nd-Ce");
          this.ha.iva(!1)
        });
        _.Fb(this.Da(), "y-C-qb")
      }, 0, this)
    };
    _.g.Sa = function() {
      _.nV.Qa.Sa.call(this);
      this.va && this.Ra().listen(this.va, "action", _.df(this.$a, !0));
      this.wa && this.Ra().listen(this.wa, "action", _.df(this.$a, !1));
      this.ta && this.Ra().listen(this.ta, "action", _.df(this.Ua, !0));
      this.ua && this.Ra().listen(this.ua, "action", _.df(this.Ua, !1));
      this.Vh = new _.Xx(this.Da());
      this.Ta(this.Vh);
      this.Ra().listen(this.Vh, "focusin", this.z0a);
      this.Ra().listen(this.Vh, "focusout", this.A0a);
      this.rk(!1)
    };
    _.g.focus = function() {
      var a = this.Da();
      a && a.focus()
    };
    _.g.z0a = function() {
      _.Xc(this.Da(), "y-C-ja");
      this.dispatchEvent("oc")
    };
    _.g.A0a = function() {
      var a = this.Da();
      a && _.Fb(a, "y-C-ja")
    };
    _.g.rk = function(a) {
      var b = this.Da();
      b && (b.tabIndex = a ? 0 : -1, b = this.Ia().Cn("y-C-ra-ka", b), _.Ue(b, function(c) {
        c.tabIndex = a ? 0 : -1
      }))
    };
    _.g.getContext = function() {
      return this.H
    };
    var lBd = function(a) {
      return a.ha.s0() ? {
        photoUrl: null,
        obfuscatedId: null,
        displayName: "An Admin",
        color: null,
        label: null,
        xf: !1
      } : a.ha.TS() ? {
        photoUrl: null,
        obfuscatedId: null,
        displayName: "System",
        color: null,
        label: null,
        xf: !1
      } : a.ha.Xz() ? {
        photoUrl: null,
        obfuscatedId: null,
        displayName: "Removed account",
        color: null,
        label: null,
        xf: !1
      } : oBd()
    };
    _.nV.prototype.ka = function() {
      var a = this.ha,
        b = pBd(a.H).map(this.ma, this),
        c = a.ma.map(this.Gb, this);
      0 == c.length && (c = [lBd(this)]);
      var d = c[0],
        e = a.ka,
        f = e ? e.H.map(this.ma, this) : [],
        h = e ? e.ha.map(this.ma, this) : [],
        k = e ? 0 < e.H.length ? e.H : e.ha : [];
      e = 0 < k.length && k.every(function(n) {
        return n.uh()
      });
      k = 0 < k.length && k.every(function(n) {
        return n.hn()
      });
      var m = this.Db;
      e = k ? aBd(m, "qc") : e ? aBd(m, "pc") : m.$l("application/vnd.google-apps.folder");
      return {
        ax: f,
        mu: _.qBd(a),
        Wg: _.Rx(),
        UH: a.UH(),
        Xz: a.Xz(),
        xf: d.xf,
        hZa: a.va,
        TS: a.TS(),
        X4a: 3,
        Z7a: e,
        xo: h,
        scopes: [],
        tf: b,
        T4: c,
        userName: d.displayName,
        xK: null,
        yK: null,
        lj: null,
        J7: [],
        YX: null,
        V7: null,
        originalTarget: null,
        RS: null,
        VS: null,
        Dta: null,
        $d: null,
        locked: null,
        Gxa: null,
        LC: null,
        D6: null,
        uL: null,
        yE: null,
        description: null,
        url: null,
        cC: null,
        Jta: null,
        Ota: null,
        c2: null,
        e2: null,
        ena: null,
        Gna: null,
        Qna: null,
        Tna: null,
        Qia: []
      }
    };
    _.nV.prototype.Gb = function(a) {
      var b = oBd();
      return {
        photoUrl: a.ha || b.photoUrl,
        obfuscatedId: a.H || b.obfuscatedId,
        displayName: a.getName() || b.displayName,
        color: this.H.vR().H(a),
        label: _.gE(a.getName()),
        xf: a.xf() || b.xf
      }
    };
    var oBd = function() {
      return {
        photoUrl: null,
        obfuscatedId: null,
        displayName: "Unknown",
        color: null,
        label: null,
        xf: !1
      }
    };
    _.nV.prototype.ma = function(a) {
      var b = a.Ec(),
        c = this.getContext().wqa().getProductName(b),
        d = a.getName() + " " + c,
        e = this.Db;
      b = "application/vnd.google-apps.shortcut" == b ? e.$l(_.p(a.ta, 2) || "", !0) : a.hn() ? aBd(e, "qc") : a.uh() ? aBd(e, "pc") : e.$l(b);
      return new mV(a.getName(), b, a.getId(), this.getContext().QR().et(a), c, this.getContext().QR().nB(a), d)
    };
    _.nV.prototype.resize = function() {};
    _.nV.prototype.$a = function(a, b) {
      this.Ja && (_.Om(this.Ja, a), this.va.Va(!a), this.wa.Va(a), b && (b.preventDefault(), this.focus()))
    };
    _.nV.prototype.Ua = function(a, b) {
      this.Na && (_.Om(this.Na, a), this.ta && this.ta.Va(!a), this.ua && this.ua.Va(a), b && (b.preventDefault(), this.focus()))
    };
    var pBd = function(a) {
      var b = {};
      return a.filter(function(c) {
        return b[c.getId()] ? !1 : b[c.getId()] = !0
      })
    };
    _.nV.prototype.Ea = function() {
      null == this.Pa && (this.Pa = this.Pb());
      return this.Pa
    };
    _.nV.prototype.Pb = function() {
      return !0
    };
    mBd = function(a) {
      a.H.nb();
      a = a.ha.Ca;
      if (!a) return null;
      var b = a.getType();
      return "Fa" == b ? null : "Ea" == b ? "Mobile" : "Ga" == b ? "Computer" : a.Zl() || null
    };
    nBd = function(a, b) {
      a = a.H.nb();
      return b.va && !!b.ka && ("Ta" != b.getType() || null != a && !a.H) || b.TS() || 0 < b.ha.length && rBd(b) || "Pa" == b.getType()
    };
    rBd = function(a) {
      var b = a.ha;
      if (0 == b.length) return !1;
      b = b.every(function(c) {
        return !c.H && !!c.ha
      });
      a = a.getUser();
      return (!a || !a.getName()) && b
    };
    _.qBd = function(a) {
      var b = a.getType();
      return "Na" == b ? 0 < a.ha.length ? "SgHMvd" : "t0O6ic" : "Sa" == b ? "x5cW0b" : sBd(b)
    };
    sBd = function(a) {
      switch (a) {
        case "Ia":
          return "euCgFf";
        case "Ja":
          return "g3fyD";
        case "Ka":
          return "UcpjDd";
        case "Oa":
          return "RkDpse";
        case "La":
          return "jNm5if";
        case "Ma":
          return "jCCvxc";
        case "Na":
          return "t0O6ic";
        case "Pa":
          return "nLrMTe";
        case "hb":
          return "nupQLb";
        case "Qa":
          return "DyVDA";
        case "Ra":
          return "M7LJF";
        case "Sa":
          return "x5cW0b";
        case "ib":
          return "zP0adc";
        case "Ta":
          return "J86xSb";
        case "Ua":
          return "BcHh9b";
        case "Va":
          return "Iqlsrf";
        case "jb":
          return "WTl38e";
        case "Wa":
          return "NSKDue";
        case "Xa":
          return "CmXoCf";
        case "kb":
          return "F3jWbb";
        case "Ya":
          return "Yb9IEf";
        case "Za":
          return "n3mpjc";
        case "$a":
          return "sxO0Fd";
        case "bb":
          return "mREpDe";
        case "ab":
          return "nK1zwb";
        case "cb":
          return "zM6fo";
        case "db":
          return "zYvWjf";
        case "fb":
          return "VJS4Lc";
        case "gb":
          return "zf3vf";
        case "lb":
          return "nUpftc"
      }
      return "cItMnf"
    };
    var tBd = function(a) {
        var b = a.xf;
        _.He(a.T4);
        var c = a.T4;
        _.He(a.tf);
        var d = a.tf;
        a = '<div class="' + _.X("y-mc-q-hb") + '"><div>';
        1 == d.length ? b ? (d = c[1], c = _.ry(new _.qy("{NUM,plural,offset:1 =1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}commented on an item{END_SPAN}}=2{{START_SPAN_3}You and {DISPLAY_NAME} {END_SPAN}{START_SPAN_4}commented on an item{END_SPAN}}other{{START_SPAN_5}You and {XXX} others {END_SPAN}{START_SPAN_6}commented on an item{END_SPAN}}}"), {
          NUM: c.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") +
            '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          DISPLAY_NAME: _.U(null == d ? null : d.displayName),
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_5: '<span class="' + _.X("y-C-H-Sb") + '">',
          XXX: _.U(c.length - 1),
          START_SPAN_6: '<span class="' + _.X("y-C-Y") + '">'
        }), a += c) : (d = c[1], c = _.ry(new _.qy("{NUM,plural,offset:1 =1{{START_SPAN_1}{DISPLAY_NAME_1} {END_SPAN}{START_SPAN_2}commented on an item{END_SPAN}}=2{{START_SPAN_3}{DISPLAY_NAME_1} and {DISPLAY_NAME_2} {END_SPAN}{START_SPAN_4}commented on an item{END_SPAN}}other{{START_SPAN_5}{DISPLAY_NAME_1} and {XXX} others {END_SPAN}{START_SPAN_6}commented on an item{END_SPAN}}}"), {
          NUM: c.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          DISPLAY_NAME_1: _.U(c[0].displayName),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          DISPLAY_NAME_2: _.U(null == d ? null : d.displayName),
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_5: '<span class="' + _.X("y-C-H-Sb") + '">',
          XXX: _.U(c.length - 1),
          START_SPAN_6: '<span class="' + _.X("y-C-Y") + '">'
        }), a += c) : b ? (b = c[1], c = _.ry(new _.qy("{NUM,plural,offset:1 =1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}commented on {XXX_1} items{END_SPAN}}=2{{START_SPAN_3}You and {DISPLAY_NAME} {END_SPAN}{START_SPAN_4}commented on {XXX_1} items{END_SPAN}}other{{START_SPAN_5}You and {XXX_2} others {END_SPAN}{START_SPAN_6}commented on {XXX_1} items{END_SPAN}}}"), {
          NUM: c.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          XXX_1: _.U(d.length),
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          DISPLAY_NAME: _.U(null == b ? null : b.displayName),
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_5: '<span class="' + _.X("y-C-H-Sb") + '">',
          XXX_2: _.U(c.length - 1),
          START_SPAN_6: '<span class="' + _.X("y-C-Y") + '">'
        }), a += c) : (b = c[1], c = _.ry(new _.qy("{NUM,plural,offset:1 =1{{START_SPAN_1}{DISPLAY_NAME_1} {END_SPAN}{START_SPAN_2}commented on {XXX_1} items{END_SPAN}}=2{{START_SPAN_3}{DISPLAY_NAME_1} and {DISPLAY_NAME_2} {END_SPAN}{START_SPAN_4}commented on {XXX_1} items{END_SPAN}}other{{START_SPAN_5}{DISPLAY_NAME_1} and {XXX_2} others {END_SPAN}{START_SPAN_6}commented on {XXX_1} items{END_SPAN}}}"), {
          NUM: c.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          DISPLAY_NAME_1: _.U(c[0].displayName),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          XXX_1: _.U(d.length),
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          DISPLAY_NAME_2: _.U(null == b ? null : b.displayName),
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_5: '<span class="' + _.X("y-C-H-Sb") + '">',
          XXX_2: _.U(c.length - 1),
          START_SPAN_6: '<span class="' + _.X("y-C-Y") + '">'
        }), a += c);
        return (0, _.T)(a + "</div></div>")
      },
      uBd = function(a) {
        _.He(a.tf);
        var b = a.tf;
        var c = a.YX;
        a = a.Wg;
        var d = '<div class="' + _.X("y-C-ka-E") + '"><div role="list" class="' + _.X("y-C-ka-E-Zs-Na") + '">';
        for (var e = 0; 6 > e; e++) {
          var f = e;
          d += f < b.length ? XAd({
            first: 0 == f,
            target: b[f],
            YX: c,
            E0: !0,
            Wg: a
          }) : ""
        }
        return (0, _.T)(d + "</div></div>")
      };
    var vBd = function(a, b) {
      _.nV.call(this, a, b, tBd, uBd)
    };
    _.z(vBd, _.nV);
    vBd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha;
      if (b) {
        if (b = b.Pa) a.YX = b.H
      } else b = Error(), b.message = "b/34167265 Missing event model in CommentEvent", _.Yk(b);
      return a
    };
    var wBd = function(a, b) {
      return new vBd(a, b)
    };
    var xBd = function(a) {
        var b = a.userName,
          c = a.xf;
        a = '<div class="' + _.X("y-mc-q-zn") + '"><div>';
        c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">made a copy of</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">made a copy of</span>'))), a += b);
        return (0, _.T)(a + "</div></div>")
      },
      yBd = function(a) {
        var b = a.originalTarget,
          c = a.V7;
        a = a.Wg;
        return (0, _.T)('<div class="' + _.X("y-C-ka-E") + '"><div class="' + _.X("y-C-ka-E-Zs-Na") + '">' + XAd({
          first: !0,
          target: b,
          Wg: a
        }) + XAd({
          first: !1,
          target: c,
          Wg: a
        }) + "</div></div>")
      };
    var zBd = function(a, b) {
      _.nV.call(this, a, b, xBd, yBd)
    };
    _.z(zBd, _.nV);
    zBd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.H,
        c = this.ha.ta;
      a.V7 = 0 < b.length ? this.ma(b[0]) : new mV(c.ma);
      b = c.H;
      a.originalTarget = b ? this.ma(b) : new mV(c.ka, a.V7.icon);
      return a
    };
    var ABd = function(a, b) {
      return new zBd(a, b)
    };
    var BBd = function(a) {
        _.He(a.tf);
        var b = a.VS;
        if (a.RS) {
          b = a.userName;
          var c = a.xf;
          _.He(a.tf);
          var d = a.tf;
          a = '<div class="' + _.X("y-mc-q-D") + '"><div>';
          c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created and shared an item in{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created and shared {XXX} items in{END_SPAN}}}"), {
            NUM: d.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' +
              _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(d.length)
          }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created and shared an item in{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created and shared {XXX} items in{END_SPAN}}}"), {
            NUM: d.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            USER_NAME: _.U(b),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") +
              '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(d.length)
          }), a += b);
          a = (0, _.T)(a + "</div></div>")
        } else b ? (b = a.userName, c = a.xf, _.He(a.tf), d = a.tf, a = '<div class="' + _.X("y-mc-q-D") + '"><div>', c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created and restricted access to an item in{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created and restricted access to {XXX} items in{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created and restricted access to an item in{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created and restricted access to {XXX} items in{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b), a = (0, _.T)(a + "</div></div>")) : (b = a.userName, c = a.xf, _.He(a.tf), d = a.tf, a = '<div class="' + _.X("y-mc-q-D") + '"><div>', c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created and changed permissions on an item in{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created and changed permissions on {XXX} items in{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created and changed permission on an item in{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created and changed permissions on {XXX} items in{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b), a = (0, _.T)(a + "</div></div>"));
        return (0, _.T)(a)
      },
      CBd = function(a) {
        _.He(a.tf);
        var b = a.VS;
        if (a.RS) {
          b = a.userName;
          var c = a.xf;
          _.He(a.tf);
          var d = a.tf;
          a = '<div class="' + _.X("y-mc-q-D") + '"><div>';
          c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created and shared an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created and shared {XXX} items{END_SPAN}}}"), {
            NUM: d.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(d.length)
          }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created and shared an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created and shared {XXX} items{END_SPAN}}}"), {
            NUM: d.length,
            START_SPAN_1: '<span class="' +
              _.X("y-C-H-Sb") + '">',
            USER_NAME: _.U(b),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(d.length)
          }), a += b);
          a = (0, _.T)(a + "</div></div>")
        } else b ? (b = a.userName, c = a.xf, _.He(a.tf), d = a.tf, a = '<div class="' + _.X("y-mc-q-D") + '"><div>', c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created and restricted access to an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created and restricted access to {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created and restricted access to an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created and restricted access to {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b), a = (0, _.T)(a + "</div></div>")) : (b = a.userName, c = a.xf, _.He(a.tf), d = a.tf, a = '<div class="' + _.X("y-mc-q-D") + '"><div>', c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created and changed permissions on an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created and changed permissions on {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created and changed permissions on an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created and changed permissions on {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b), a = (0, _.T)(a + "</div></div>"));
        return (0, _.T)(a)
      },
      DBd = function(a, b, c) {
        b = c || b;
        _.He(a.ax);
        c = a.ax;
        _.He(a.tf);
        a = "<div>" + ZAd(_.ss({
          parents: c,
          x4: "Created items:"
        }, a), b);
        return (0, _.T)(a + "</div>")
      };
    var EBd = function(a, b, c, d, e, f, h, k) {
        this.type = a;
        this.entityType = b;
        this.H = c;
        this.role = d;
        this.name = e;
        this.photoUrl = f;
        this.color = h;
        this.xf = k;
        this.label = 1 == b ? _.gE(e) : null
      },
      FBd = function(a) {
        var b = new bBd;
        b = _.l(b, 1, a.type);
        b = _.l(b, 2, a.entityType);
        b = _.l(b, 3, a.H);
        b = _.l(b, 4, a.role).Id(a.name);
        b = _.l(b, 6, a.photoUrl);
        b = _.l(b, 7, a.color);
        return _.l(b, 8, a.xf).De(a.label)
      },
      IBd = function(a, b) {
        var c = 0,
          d = 0,
          e = b.H,
          f = b.ha;
        e ? (c = f ? 2 : 1, d = GBd(e)) : f && (c = 3, d = GBd(f));
        var h = HBd[b.getType()];
        e = e ? e.ha : f ? f.ha : !1;
        f = b.getName() || "Unknown";
        var k = b.ua;
        a = a.ha(b);
        b = b.xf();
        return new EBd(c, h, e, d, f, k, a, b)
      },
      GBd = function(a) {
        if (_.Of(a.ka, 2)) return 2;
        switch (a.H) {
          case 1:
            return 1;
          case 3:
            return 3;
          case 4:
            return 4;
          case 5:
            return 6;
          default:
            return 0
        }
      },
      LBd = function(a, b) {
        if (!b) return [];
        var c = JBd[b.ha],
          d = 0,
          e = b.ma,
          f = b.ta;
        e && !_.Pf(e) ? d = KBd[e[0]] : f && !_.Pf(f) && (d = KBd[f[0]]);
        var h = [];
        b.ka.forEach(function(k) {
          var m = k.getName() || "Unknown",
            n = k.ha,
            r = a.H(k);
          k = k.xf();
          m = new EBd(c, 1, !1, d, m, n, r, k);
          h.push(m)
        });
        b.H.forEach(function(k) {
          k = new EBd(c, 2, !1, d, k, null, null, !1);
          h.push(k)
        });
        return h
      },
      HBd = {
        4: 4,
        3: 3,
        2: 2,
        1: 1,
        0: 0
      },
      JBd = {
        1: 1,
        2: 3,
        3: 2,
        4: 4
      },
      KBd = {
        4: 1,
        1: 2,
        2: 3,
        3: 5,
        5: 7
      };
    var MBd = function(a, b) {
      var c = a.ka;
      c = !!c && 0 < c.H.length;
      _.nV.call(this, a, b, c ? BBd : CBd, c ? DBd : void 0, void 0, void 0, !0)
    };
    _.z(MBd, _.nV);
    MBd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.ha.map(_.df(IBd, this.getContext().vR()), this);
      a.scopes = b.map(function(c) {
        return FBd(c)
      });
      a.RS = b.every(function(c) {
        return 1 == c.type
      });
      a.VS = b.every(function(c) {
        return 3 == c.type
      });
      return a
    };
    var NBd = function(a, b) {
      return new MBd(a, b)
    };
    var OBd = function(a) {
        var b = a.userName,
          c = a.xf;
        _.He(a.tf);
        var d = a.tf;
        a = '<div class="' + _.X("y-mc-q-D") + '"><div>';
        c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created an item in{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created {XXX} items in{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' +
            _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created an item in{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created {XXX} items in{END_SPAN}}}"), {
            NUM: d.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            USER_NAME: _.U(b),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(d.length)
          }),
          a += b);
        return (0, _.T)(a + "</div></div>")
      },
      PBd = function(a) {
        var b = a.userName,
          c = a.xf;
        _.He(a.tf);
        var d = a.tf;
        a = '<div class="' + _.X("y-mc-q-D") + '"><div>';
        c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}created an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}created {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") +
            '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}created an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}created {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' +
            _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b);
        return (0, _.T)(a + "</div></div>")
      },
      QBd = function(a, b, c) {
        b = c || b;
        _.He(a.ax);
        c = a.ax;
        _.He(a.tf);
        a = "" + ZAd(_.ss({
          parents: c,
          x4: "Created items:"
        }, a), b);
        return (0, _.T)(a)
      };
    var RBd = function(a, b) {
      var c = a.ka;
      c = !!c && 0 < c.H.length;
      _.nV.call(this, a, b, c ? OBd : PBd, c ? QBd : void 0)
    };
    _.z(RBd, _.nV);
    var SBd = function(a, b) {
      return new RBd(a, b)
    };
    var TBd = function(a) {
      var b = a.Dta,
        c = a.$d;
      a = '<div class="' + _.X("y-mc-q-jsmBPd-Yl") + '"><div><span class="' + _.X("y-C-Y") + '">';
      b ? (b = _.ry(new _.qy("{NUM_FILES,plural,=0{Unused}=1{File flagged as containing restricted content}other{Files flagged as containing restricted content}}"), {
        NUM_FILES: c
      }), a += b) : (b = _.ry(new _.qy("{NUM_FILES,plural,=0{Unused}=1{File no longer flagged as containing restricted content}other{Files no longer flagged as containing restricted content}}"), {
        NUM_FILES: c
      }), a += b);
      return (0, _.T)(a +
        "</span></div></div>")
    };
    var UBd = function(a, b) {
      _.nV.call(this, a, b, TBd)
    };
    _.z(UBd, _.nV);
    UBd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha;
      a.Dta = 2 == b.ua.H;
      a.$d = b.H.length;
      return a
    };
    UBd.prototype.Ea = function() {
      var a = this.ha.ua.H;
      return 2 == a || 3 == a ? _.nV.prototype.Ea.call(this) : !1
    };
    var VBd = function(a, b) {
      return new UBd(a, b)
    };
    var WBd = function(a) {
      var b = a.userName,
        c = a.xf;
      _.He(a.tf);
      var d = a.tf;
      a = '<div class="' + _.X("y-mc-q-rb") + '"><div>';
      c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}downloaded an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}downloaded {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' +
          _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}downloaded an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}downloaded {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }),
        a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var XBd = function(a) {
      var b = a.xf;
      _.He(a.T4);
      var c = a.T4;
      a = '<div class="' + _.X("y-mc-q-Cb") + '"><div>';
      b ? (b = c[1], c = _.ry(new _.qy("{NUM,plural,offset:1 =1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}edited an item{END_SPAN}}=2{{START_SPAN_3}You and {DISPLAY_NAME} {END_SPAN}{START_SPAN_4}edited an item{END_SPAN}}other{{START_SPAN_5}You and {XXX} others {END_SPAN}{START_SPAN_6}edited an item{END_SPAN}}}"), {
        NUM: c.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' +
          _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        DISPLAY_NAME: _.U(null == b ? null : b.displayName),
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_5: '<span class="' + _.X("y-C-H-Sb") + '">',
        XXX: _.U(c.length - 1),
        START_SPAN_6: '<span class="' + _.X("y-C-Y") + '">'
      }), a += c) : (b = c[1], c = _.ry(new _.qy("{NUM,plural,offset:1 =1{{START_SPAN_1}{DISPLAY_NAME_1} {END_SPAN}{START_SPAN_2}edited an item{END_SPAN}}=2{{START_SPAN_3}{DISPLAY_NAME_1} and {DISPLAY_NAME_2} {END_SPAN}{START_SPAN_4}edited an item{END_SPAN}}other{{START_SPAN_5}{DISPLAY_NAME_1} and {XXX} others {END_SPAN}{START_SPAN_6}edited an item{END_SPAN}}}"), {
        NUM: c.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        DISPLAY_NAME_1: _.U(c[0].displayName),
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        DISPLAY_NAME_2: _.U(null == b ? null : b.displayName),
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_5: '<span class="' + _.X("y-C-H-Sb") + '">',
        XXX: _.U(c.length - 1),
        START_SPAN_6: '<span class="' + _.X("y-C-Y") + '">'
      }), a += c);
      return (0, _.T)(a + "</div></div>")
    };
    var YBd = function(a) {
      var b = a.userName,
        c = a.xf;
      _.He(a.tf);
      var d = a.tf;
      var e = a.Xz,
        f = a.TS,
        h = a.UH;
      a = '<div class="' + _.X("y-mc-q-ab-wf") + '"><div>';
      f && h ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}An item was permanently deleted after 30 days in the shared drive trash{END_SPAN}}other{{START_SPAN_2}Items were permanently deleted after 30 days in the shared drive trash{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-Y") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">'
        }),
        a += b) : c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}permanently deleted an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}permanently deleted {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b) : e ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}A removed account {END_SPAN}{START_SPAN_2}resulted in permanent deletion of an item{END_SPAN}}other{{START_SPAN_3}A removed account {END_SPAN}{START_SPAN_4}resulted in permanent deletion of {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}permanently deleted an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}permanently deleted {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' +
          _.X("y-C-H-Sb") + '">',
        USER_NAME: _.U(b),
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var ZBd = function(a, b) {
      _.nV.call(this, a, b, YBd)
    };
    _.z(ZBd, _.nV);
    ZBd.prototype.Ka = function() {
      _.nV.prototype.Ka.call(this);
      _.Xc(this.Da(), "y-mc-ab-wf-Du")
    };
    ZBd.prototype.ma = function(a) {
      a = _.nV.prototype.ma.call(this, a);
      a.et = !1;
      a.nB = !1;
      return a
    };
    var $Bd = function(a, b) {
      return new ZBd(a, b)
    };
    var aCd = function(a) {
        _.He(a.ax);
        var b = a.ax;
        _.He(a.xo);
        var c = a.xo;
        _.He(a.tf);
        if (a.hZa) a = '<div class="' + _.X("y-mc-q-If") + '"><div>', b = '<span class="' + _.X("y-C-Y") + '">An item was automatically placed in</span>', a = (0, _.T)(a + b + "</div></div>");
        else if (0 < b.length && 0 < c.length) {
          _.He(a.tf);
          b = a.userName;
          c = a.xf;
          var d = a.tf.length;
          a = '<div class="' + _.X("y-mc-q-If") + '"><div>';
          c ? (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}moved an item to{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}moved {NUM_TARGETS_2} items to{END_SPAN}}}"), {
            NUM_TARGETS_1: d,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            NUM_TARGETS_2: _.U(d)
          }), a += b) : (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}moved an item to{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}moved {NUM_TARGETS_2} items to{END_SPAN}}}"), {
            NUM_TARGETS_1: d,
            START_SPAN_1: '<span class="' +
              _.X("y-C-H-Sb") + '">',
            USER_NAME: _.U(b),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            NUM_TARGETS_2: _.U(d)
          }), a += b);
          a = (0, _.T)(a + "</div></div>")
        } else 0 < b.length ? (_.He(a.tf), b = a.userName, c = a.xf, d = a.tf.length, a = '<div class="' + _.X("y-mc-q-If") + '"><div>', c ? (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}added an item to{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}added {NUM_TARGETS_2} items to{END_SPAN}}}"), {
          NUM_TARGETS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_TARGETS_2: _.U(d)
        }), a += b) : (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}added an item to{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}added {NUM_TARGETS_2} items to{END_SPAN}}}"), {
          NUM_TARGETS_1: d,
          START_SPAN_1: '<span class="' +
            _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_TARGETS_2: _.U(d)
        }), a += b), a = (0, _.T)(a + "</div></div>")) : (_.He(a.tf), b = a.userName, c = a.xf, d = a.tf.length, a = '<div class="' + _.X("y-mc-q-If") + '"><div>', c ? (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}removed an item from{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}removed {NUM_TARGETS_2} items from{END_SPAN}}}"), {
          NUM_TARGETS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_TARGETS_2: _.U(d)
        }), a += b) : (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}removed an item from{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}removed {NUM_TARGETS_2} items from{END_SPAN}}}"), {
          NUM_TARGETS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_TARGETS_2: _.U(d)
        }), a += b), a = (0, _.T)(a + "</div></div>"));
        return (0, _.T)(a)
      },
      cCd = function(a, b, c) {
        b = c || b;
        _.He(a.ax);
        c = a.ax;
        _.He(a.xo);
        var d = a.xo;
        _.He(a.tf);
        return (0, _.T)(0 < c.length ? ZAd(_.ss({
          parents: c,
          x4: bCd(a)
        }, a), b) : ZAd(_.ss({
          parents: d,
          x4: bCd(a)
        }, a), b))
      },
      bCd = function(a) {
        _.He(a.ax);
        var b = a.ax;
        _.He(a.xo);
        a = a.xo;
        var c = "";
        return c = 0 < b.length && 0 < a.length ? c + "Moved items:" : 0 < b.length ? c + "Added items:" : c + "Removed items:"
      };
    var dCd = function(a, b) {
      _.nV.call(this, a, b, aCd, cCd)
    };
    _.z(dCd, _.nV);
    dCd.prototype.Pb = function() {
      var a = this.ka();
      return 0 < a.ax.length || 0 < a.xo.length
    };
    var eCd = function(a, b) {
      return new dCd(a, b)
    };
    var fCd = function(a) {
      var b = a.userName,
        c = a.xf;
      _.He(a.tf);
      var d = a.Gxa,
        e = a.tf.length;
      a = '<div class="' + _.X("y-mc-q-iDkJpe-Yl") + '"><div class="' + _.X("iDkJpe-Yl-C-ua") + '">';
      c ? (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}changed the owner of an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}changed the owner of {NUM_TARGETS_2} items{END_SPAN}}}"), {
        NUM_TARGETS_1: e,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' +
          _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        NUM_TARGETS_2: _.U(e)
      }), a += b) : d ? (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}made you the owner of an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}made you the owner of {NUM_TARGETS_2} items{END_SPAN}}}"), {
        NUM_TARGETS_1: e,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        USER_NAME: _.U(b),
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' +
          _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        NUM_TARGETS_2: _.U(e)
      }), a += b) : (b = _.ry(new _.qy("{NUM_TARGETS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}changed the owner of an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}changed the owner of {NUM_TARGETS_2} items{END_SPAN}}}"), {
        NUM_TARGETS_1: e,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        USER_NAME: _.U(b),
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' +
          _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
        NUM_TARGETS_2: _.U(e)
      }), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var gCd = function(a, b) {
      _.nV.call(this, a, b, fCd, void 0, void 0, void 0, !0)
    };
    _.z(gCd, _.nV);
    gCd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.ha,
        c = b.some(function(d) {
          var e = d.H;
          return e && 4 == e.H && d.xf()
        });
      a.Gxa = c;
      b = b.map(_.df(IBd, this.getContext().vR()), this);
      a.scopes = b.map(function(d) {
        return FBd(d)
      });
      return a
    };
    var hCd = function(a, b) {
      return new gCd(a, b)
    };
    var iCd = function(a) {
        var b = a.userName,
          c = a.xf;
        a = '<div class="' + _.X("y-mc-q-cg") + '"><div>';
        c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">renamed an item</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">renamed an item</span>'))), a += b);
        return (0, _.T)(a + "</div></div>")
      },
      jCd = function(a) {
        var b = a.originalTarget,
          c = a.LC;
        a = '<div class="' + _.X("y-C-ka-E") + '"><div class="' + _.X("y-C-ka-E-Zs-Na") + '"><div class="' + _.X("y-C-ka") +
          " " + _.X("y-C-ka-ig") + '"><div class="' + _.X("y-C-ka-c") + '">' + _.U(c.icon) + '</div><div class="' + _.X("y-C-ka-q") + (c.nB ? " " + _.X("y-C-ts-ka") : "") + '"><div class="' + _.X("y-C-ka-T") + " " + (c.et ? _.X("y-C-xj-ka") + " " + _.X("y-C-ra-ka") : "") + '"' + (c.et ? ' targetid="' + _.X(c.id) + '" action="open" role="link" aria-label="' + _.X(c.Jb) + '"' : "") + ' data-tooltip="' + _.X(c.name) + '" data-tooltip-only-on-overflow="true">' + _.U(c.name) + "</div>" + (c.nB ? UAd(_.ss({
            w4: c.id
          }, a)) : "");
        b = '<div class="' + _.X("y-E-hc-r") + '">Previous name:</div><div class="' +
          (_.X("y-C-cg-Es-V") + '">' + (_.U(b.name) + "</div>"));
        return (0, _.T)(a + b + "</div></div></div></div>")
      };
    var kCd = function(a, b) {
      _.nV.call(this, a, b, iCd, jCd)
    };
    _.z(kCd, _.nV);
    kCd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.H,
        c = this.ha.Ea,
        d = c.H;
      a.LC = 0 < b.length ? this.ma(b[0]) : new mV(d);
      null != d && (a.LC.name = d);
      a.originalTarget = new mV(c.ha, a.LC.icon, a.LC.id);
      return a
    };
    var lCd = function(a, b) {
      return new kCd(a, b)
    };
    var nCd = function(a) {
        _.He(a.tf);
        var b = a.VS;
        if (a.RS) {
          var c = a.userName,
            d = a.xf;
          _.He(a.tf);
          var e = a.tf;
          var f = a.uL;
          b = '<div class="' + _.X("y-mc-q-ea") + '"><div class="' + _.X("ea-C-ua") + '">';
          1 == e.length && f ? (d = a.userName, e = a.xf, c = "", a.D6 ? c += mCd(a) : e ? (a = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">added</span>'), c += a) : (a = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(d) + (' </span><span class="' + (_.X("y-C-Y") + '">added</span>'))), c += a), a = (0, _.T)(c), b += a) : d ? (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}shared an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}shared {XXX} items{END_SPAN}}}"), {
            NUM: e.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(e.length)
          }), b += a) : (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}shared an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}shared {XXX} items{END_SPAN}}}"), {
            NUM: e.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") +
              '">',
            USER_NAME: _.U(c),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(e.length)
          }), b += a);
          a = (0, _.T)(b + "</div></div>")
        } else if (b) {
          c = a.userName;
          d = a.xf;
          _.He(a.tf);
          e = a.tf;
          f = a.Xz;
          var h = a.yE,
            k = a.uL;
          b = '<div class="' + _.X("y-mc-q-ea") + '"><div class="' + _.X("ea-C-ua") + '">';
          1 == e.length && k ? (d = a.userName, e = a.xf, f = a.Xz, h = a.D6, c = "", a.yE ? (a = '<span class="' + _.X("y-C-Y") + '">Permissions were changed</span>',
            c += a) : h ? c += mCd(a) : e ? (a = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">removed</span>'), c += a) : f ? (a = '<span class="' + _.X("y-C-H-Sb") + '">A removed account </span><span class="' + (_.X("y-C-Y") + '">has lost permissions</span>'), c += a) : (a = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(d) + (' </span><span class="' + (_.X("y-C-Y") + '">removed</span>'))), c += a), a = (0, _.T)(c), b += a) : h ? (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}Access to an item was restricted{END_SPAN}}other{{START_SPAN_2}Access to {XXX} items was restricted{END_SPAN}}}"), {
            NUM: e.length,
            START_SPAN_1: '<span class="' + _.X("y-C-Y") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(e.length)
          }), b += a) : d ? (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}restricted access to an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}restricted access to {XXX} items{END_SPAN}}}"), {
            NUM: e.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' +
              _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(e.length)
          }), b += a) : f ? (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}A removed account {END_SPAN}{START_SPAN_2}has lost access to 1 item{END_SPAN}}other{{START_SPAN_3}A removed account {END_SPAN}{START_SPAN_4}has lost access to {XXX} items{END_SPAN}}}"), {
            NUM: e.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") +
              '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
            XXX: _.U(e.length)
          }), b += a) : (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}restricted access to an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}restricted access to {XXX} items{END_SPAN}}}"), {
            NUM: e.length,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            USER_NAME: _.U(c),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' +
              _.X("y-C-Y") + '">',
            XXX: _.U(e.length)
          }), b += a);
          a = (0, _.T)(b + "</div></div>")
        } else c = a.userName, d = a.xf, _.He(a.tf), e = a.tf, f = a.uL, b = '<div class="' + _.X("y-mc-q-ea") + '"><div class="' + _.X("ea-C-ua") + '">', 1 == e.length && f ? b += mCd(a) : d ? (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}changed permissions on an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}changed permissions on {XXX} items{END_SPAN}}}"), {
          NUM: e.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(e.length)
        }), b += a) : (a = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}changed permissions on an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}changed permissions on {XXX} items{END_SPAN}}}"), {
          NUM: e.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(c),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' +
            _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(e.length)
        }), b += a), a = (0, _.T)(b + "</div></div>");
        return (0, _.T)(a)
      },
      mCd = function(a) {
        var b = a.userName,
          c = "";
        a.xf ? (a = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">changed permissions</span>'), c += a) : (a = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">changed permissions</span>'))), c += a);
        return (0, _.T)(c)
      };
    var oCd = function(a, b) {
      _.nV.call(this, a, b, nCd, void 0, void 0, void 0, a.Xz() ? !1 : !0)
    };
    _.z(oCd, _.nV);
    oCd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.ha.map(_.df(IBd, this.getContext().vR()), this);
      a.scopes = b.map(function(c) {
        return FBd(c)
      });
      a.RS = b.every(function(c) {
        return 1 == c.type
      });
      a.VS = b.every(function(c) {
        return 3 == c.type
      });
      a.D6 = b.some(function(c) {
        return 3 == c.entityType || 4 == c.entityType
      });
      b = this.ha.getUser();
      a.yE = !b || !b.getName();
      b = this.getContext().nb();
      a.uL = !(!b || !b.uL);
      return a
    };
    var pCd = function(a, b) {
      return new oCd(a, b)
    };
    var qCd = function(a) {
      var b = a.userName,
        c = a.xf,
        d = a.url,
        e = a.description;
      a = '<div class="' + _.X("y-mc-q-wS0yef") + '"><div>';
      c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">commented on an item in <a href="' + (_.X(_.Es(d)) + '" target="_blank" aria-label="' + _.X(e) + '">' + (_.Hs(_.U(e)) + "</a></span>"))), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.Hs(_.U(b)) + (' </span><span class="' + (_.X("y-C-Y") + '">commented on an item in <a href="' + (_.X(_.Es(d)) + '" target="_blank" aria-label="' +
        _.X(e) + '">' + (_.Hs(_.U(e)) + "</a></span>"))))), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var rCd = function(a) {
      var b = a.userName,
        c = a.xf,
        d = a.url,
        e = a.description;
      a = '<div class="' + _.X("y-mc-q-wS0yef") + '"><div>';
      c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">mentioned an item in <a href="' + (_.X(_.Es(d)) + '" target="_blank" aria-label="' + _.X(e) + '">' + (_.Hs(_.U(e)) + "</a></span>"))), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.Hs(_.U(b)) + (' </span><span class="' + (_.X("y-C-Y") + '">mentioned an item in <a href="' + (_.X(_.Es(d)) + '" target="_blank" aria-label="' +
        _.X(e) + '">' + (_.Hs(_.U(e)) + "</a></span>"))))), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var sCd = function(a, b) {
      switch (a.getType()) {
        case "Wa":
          var c = qCd;
          break;
        case "Xa":
          c = rCd
      }
      _.nV.call(this, a, b, c)
    };
    _.z(sCd, _.nV);
    sCd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.Ga;
      a.url = b.getUrl();
      a.description = b.Jf();
      return a
    };
    sCd.prototype.Ka = function() {
      this.getContext().nb().ha = !1;
      _.nV.prototype.Ka.call(this)
    };
    var tCd = function(a, b) {
      return new sCd(a, b)
    };
    var uCd = function(a) {
      var b = a.userName,
        c = a.xf;
      a = '<div class="' + _.X("y-mc-q-D") + '"><div>';
      c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">created this shared drive.</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">created this shared drive.</span>'))), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var vCd = function(a, b) {
      _.nV.call(this, a, b, uCd, void 0, void 0, !0)
    };
    _.z(vCd, _.nV);
    var wCd = function(a, b) {
      return new vCd(a, b)
    };
    var xCd = function(a) {
      var b = a.userName,
        c = a.xf;
      a = '<div class="' + _.X("y-mc-q-D") + '"><div>';
      c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">deleted this shared drive.</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">deleted this shared drive.</span>'))), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    _.W("G", "", 0, function() {
      var a = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">deleted this Team Drive.</span>');
      return (0, _.T)(a)
    });
    _.W("H", "", 0, function(a) {
      a = a.userName;
      a = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(a) + (' </span><span class="' + (_.X("y-C-Y") + '">deleted this Team Drive.</span>')));
      return (0, _.T)(a)
    });
    var yCd = function(a, b) {
      _.nV.call(this, a, b, xCd, void 0, void 0, !0)
    };
    _.z(yCd, _.nV);
    var zCd = function(a, b) {
      return new yCd(a, b)
    };
    var ACd = function(a) {
      var b = a.Ota,
        c = a.Jta;
      if (a.cC) {
        b = a.userName;
        c = a.xf;
        var d = a.e2,
          e = a.c2;
        a = '<div class="' + _.X("y-mc-q-ea") + '"><div class="' + _.X("ea-C-ua") + '">';
        0 == e ? c ? (b = _.ry(new _.qy("{NUM_USERS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}added a member to the shared drive{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}added {NUM_USERS_2} members to the shared drive{END_SPAN}}}"), {
          NUM_USERS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' +
            _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_USERS_2: _.U(d)
        }), a += b) : (b = _.ry(new _.qy("{NUM_USERS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}added a member to the shared drive{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}added {NUM_USERS_2} members to the shared drive{END_SPAN}}}"), {
          NUM_USERS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' +
            _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_USERS_2: _.U(d)
        }), a += b) : c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">added members to the shared drive</span>'), _.X("y-C-H-Sb"), _.X("y-C-Y"), a += b) : (c = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">added members to the shared drive</span>'))), _.X("y-C-H-Sb"), _.U(b), _.X("y-C-Y"), a += c);
        a = (0, _.T)(a + "</div></div>")
      } else b ?
        (b = a.userName, c = a.xf, d = a.e2, e = a.c2, a = '<div class="' + _.X("y-mc-q-ea") + '"><div class="' + _.X("ea-C-ua") + '">', 0 == e ? c ? (b = _.ry(new _.qy("{NUM_USERS_1,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}added a member to the shared drive{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}added {NUM_USERS_2} members to the shared drive{END_SPAN}}}"), {
          NUM_USERS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' +
            _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_USERS_2: _.U(d)
        }), a += b) : (b = _.ry(new _.qy("{NUM_USERS_1,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}added a member to the shared drive{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}added {NUM_USERS_2} members to the shared drive{END_SPAN}}}"), {
          NUM_USERS_1: d,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' +
            _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          NUM_USERS_2: _.U(d)
        }), a += b) : c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">added members to the shared drive</span>'), _.X("y-C-H-Sb"), _.X("y-C-Y"), a += b) : (c = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">added members to the shared drive</span>'))), _.X("y-C-H-Sb"), _.U(b), _.X("y-C-Y"), a += c), a = (0, _.T)(a + "</div></div>")) : c ? (b = a.userName, c = a.xf, d = a.e2, e = a.c2, a =
          '<div class="' + _.X("y-mc-q-ea") + '"><div class="' + _.X("ea-C-ua") + '">', 0 == e ? c ? (b = _.ry(new _.qy("{NUM_USERS,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}changed a member's access{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}changed members' access{END_SPAN}}}"), {
              NUM_USERS: d,
              START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
              END_SPAN: "</span>",
              START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
              START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
              START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">'
            }),
            a += b) : (b = _.ry(new _.qy("{NUM_USERS,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}changed a member's access{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}changed members' access{END_SPAN}}}"), {
            NUM_USERS: d,
            START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
            USER_NAME: _.U(b),
            END_SPAN: "</span>",
            START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
            START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
            START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">'
          }), a += b) : c ? (b = '<span class="' + _.X("y-C-H-Sb") +
            '">You </span><span class="' + (_.X("y-C-Y") + "\">changed members' access</span>"), _.X("y-C-H-Sb"), _.X("y-C-Y"), a += b) : (c = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + "\">changed members' access</span>"))), _.X("y-C-H-Sb"), _.U(b), _.X("y-C-Y"), a += c), a = (0, _.T)(a + "</div></div>")) : a = "";
      return (0, _.T)(a)
    };
    var BCd = function(a, b) {
      _.nV.call(this, a, b, ACd, void 0, void 0, !0, !0)
    };
    _.z(BCd, _.nV);
    BCd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.qc;
      if (b) {
        var c = b.ha;
        a.e2 = b.ka.length;
        a.c2 = b.H.length;
        a.cC = 1 == c;
        a.Ota = 2 == c;
        a.Jta = 3 == c
      }
      b = LBd(this.getContext().vR(), b);
      a.scopes = b.map(function(d) {
        return FBd(d)
      });
      return a
    };
    var CCd = function(a, b) {
      return new BCd(a, b)
    };
    var DCd = function(a) {
      var b = a.userName,
        c = a.xf;
      a = '<div class="' + _.X("y-mc-q-cg") + '"><div>';
      c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">renamed this shared drive.</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + (' </span><span class="' + (_.X("y-C-Y") + '">renamed this shared drive.</span>'))), a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var ECd = function(a, b) {
      _.nV.call(this, a, b, DCd, jCd)
    };
    _.z(ECd, _.nV);
    ECd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.H,
        c = this.ha.Ea,
        d = c.H;
      a.LC = 0 < b.length ? this.ma(b[0]) : new mV(d);
      null != d && (a.LC.name = d);
      a.originalTarget = new mV(c.ha, a.LC.icon, a.LC.id);
      return a
    };
    var FCd = function(a, b) {
      return new ECd(a, b)
    };
    var GCd = function(a) {
        var b = a.userName,
          c = a.xf;
        a = '<div class="' + _.X("y-mc-q-cg") + '"><div>';
        c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You </span><span class="' + (_.X("y-C-Y") + '">changed shared drive settings</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.Hs(_.U(b)) + (' </span><span class="' + (_.X("y-C-Y") + '">changed shared drive settings</span>'))), a += b);
        return (0, _.T)(a + "</div></div>")
      },
      HCd = function(a, b, c) {
        b = c || b;
        _.He(a.tf);
        var d = a.tf;
        var e = a.Wg,
          f = a.ena,
          h = a.Gna;
        c = a.Qna;
        a = a.Tna;
        var k = '<div class="' +
          _.X("y-C-ka-E") + '"><div role="list" class="' + _.X("y-C-ka-E-Zs-Na") + '">';
        for (var m = 0; 4 > m; m++) {
          var n = m;
          k += n < d.length ? XAd({
            first: 0 == n,
            target: d[n],
            E0: !0,
            Wg: e
          }) : ""
        }
        d = k;
        e = '</div></div><div class="' + _.X("y-fc-a-wb-hi") + '">';
        null != f ? (k = b, m = '<div class="' + _.X("y-fc-a-wb-bc") + '">', f ? (m += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
          variant: "domain"
        }, k) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', m += "People outside of the domain can be given access to files") : (m += '<span class="' + _.X("y-fc-a-wb-c-db") + '">' +
          lV({
            variant: "domainDisabled"
          }, k) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', m += "Only people in the domain can be given access to files"), f = (0, _.T)(m + "</span></div>")) : f = "";
        f = e + f;
        null != h ? (e = b, k = '<div class="' + _.X("y-fc-a-wb-bc") + '">', h ? (k += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
          variant: "addPerson"
        }, e) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', k += "Non-members of this shared drive can be given access to files") : (k += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
            variant: "addPersonDisabled"
          },
          e) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', k += "Only members of this shared drive can be given access to files"), h = (0, _.T)(k + "</span></div>")) : h = "";
        h = f + h;
        null != c ? (f = b, e = '<div class="' + _.X("y-fc-a-wb-bc") + '">', c ? (e += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
          variant: "print"
        }, f) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', e += "Commenters and viewers can download, copy, and print files") : (e += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
            variant: "printDisabled"
          }, f) + '</span><span class="' + _.X("y-fc-a-wb-Lb") +
          '">', e += "Commenters and viewers can't download, copy, or print files"), c = (0, _.T)(e + "</span></div>")) : c = "";
        c = h + c;
        null != a ? (h = '<div class="' + _.X("y-fc-a-wb-bc") + '">', a ? (h += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
            variant: "desktop"
          }, b) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', h += "People can open files using Drive File Stream or similar applications") : (h += '<span class="' + _.X("y-fc-a-wb-c") + '">' + lV({
            variant: "desktopDisabled"
          }, b) + '</span><span class="' + _.X("y-fc-a-wb-Lb") + '">', h += "People can't open files using Drive File Stream or similar applications"),
          b = (0, _.T)(h + "</span></div>")) : b = "";
        return (0, _.T)(d + (c + b + "</div>"))
      };
    var ICd = function(a, b) {
      _.nV.call(this, a, b, GCd, HCd)
    };
    _.z(ICd, _.nV);
    ICd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha.Nc;
      b && (a.ena = b.H, a.Gna = b.ha, a.Qna = b.ka, a.Tna = b.ma);
      if (a.tf && 0 < a.tf.length) {
        b = _.w(a.tf);
        for (var c = b.next(); !c.done; c = b.next()) c.value.nB = !1
      }
      return a
    };
    var JCd = function(a, b) {
      return new ICd(a, b)
    };
    var KCd = function(a) {
        var b = a.userName,
          c = a.xf;
        _.He(a.tf);
        var d = a.tf;
        a = '<div class="' + _.X("y-mc-q-wf") + '"><div>';
        c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You{END_SPAN}{START_SPAN_2}moved an item to the trash{END_SPAN}}other{{START_SPAN_3}You{END_SPAN}{START_SPAN_4}moved {XXX} items to the trash{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' +
            _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME}{END_SPAN}{START_SPAN_2}moved an item to the trash{END_SPAN}}other{{START_SPAN_3}{USER_NAME}{END_SPAN}{START_SPAN_4}moved {XXX} items to the trash{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") +
            '">',
          XXX: _.U(d.length)
        }), a += b);
        return (0, _.T)(a + "</div></div>")
      },
      LCd = function(a, b, c) {
        b = c || b;
        _.He(a.tf);
        var d = a.tf;
        _.He(a.Qia);
        c = a.Qia;
        a = "" + YAd({
          tf: d,
          Wg: a.Wg
        }, b);
        0 < c.length && (c = '<div class="' + _.X("y-C-Op-Y") + '"><div class="' + _.X("y-C-Y-A") + " " + _.X("y-C-Y-A-Sa") + '" targetids="' + _.X(c) + '" action="restore" role="link" tabindex="0"><div class="' + _.X("y-C-Y-c") + '">', b = (0, _.T)(_.NMa({
            color: "rgba(0, 0, 0, .54)",
            hb: !0,
            size: "16px"
          })), a += c + b + '</div><div class="' + _.X("y-C-Y-r") + " " + _.X("y-C-Y-r-Sa") + '">', a = a +
          'Restore</div></div><div class="' + (_.X("y-C-Y-A") + " " + _.X("y-C-Y-A-hTVF2c") + '" style="display:none"><div class="' + _.X("y-C-Y-r") + " " + _.X("y-C-Y-r-hTVF2c") + '">'), a += "Restored</div></div></div>");
        return (0, _.T)(a)
      };
    var MCd = function(a, b) {
      _.nV.call(this, a, b, KCd, LCd)
    };
    _.z(MCd, _.nV);
    MCd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha,
        c = [],
        d = b.Vc;
      d && 2 == d.getCurrentState() && !d.vaa() && b.UH() && (c = b.H.map(function(e) {
        return e.getId()
      }));
      a.Qia = c;
      return a
    };
    var NCd = function(a, b) {
      return new MCd(a, b)
    };
    var OCd = function(a) {
      var b = a.userName,
        c = a.xf;
      _.He(a.tf);
      var d = a.tf;
      a = '<div class="' + _.X("y-mc-q-zn") + '"><div>';
      c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}restored an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}restored {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' +
          _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}restored an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}restored {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }),
        a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var PCd = function(a) {
      var b = a.userName,
        c = a.xf;
      _.He(a.tf);
      var d = a.tf;
      a = '<div class="' + _.X("y-mc-q-z") + '"><div>';
      c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}uploaded an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}uploaded {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' +
          _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}uploaded an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}uploaded {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }),
        a += b);
      return (0, _.T)(a + "</div></div>")
    };
    var QCd = function(a) {
      var b = a.userName,
        c = a.xf;
      _.He(a.tf);
      var d = a.tf;
      a = '<div class="' + _.X("y-mc-q-S") + '"><div>';
      c ? (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}You {END_SPAN}{START_SPAN_2}viewed an item{END_SPAN}}other{{START_SPAN_3}You {END_SPAN}{START_SPAN_4}viewed {XXX} items{END_SPAN}}}"), {
        NUM: d.length,
        START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
        END_SPAN: "</span>",
        START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
        START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
        START_SPAN_4: '<span class="' +
          _.X("y-C-Y") + '">',
        XXX: _.U(d.length)
      }), a += b) : (b = _.ry(new _.qy("{NUM,plural,=1{{START_SPAN_1}{USER_NAME} {END_SPAN}{START_SPAN_2}viewed an item{END_SPAN}}other{{START_SPAN_3}{USER_NAME} {END_SPAN}{START_SPAN_4}viewed {XXX} items{END_SPAN}}}"), {
          NUM: d.length,
          START_SPAN_1: '<span class="' + _.X("y-C-H-Sb") + '">',
          USER_NAME: _.U(b),
          END_SPAN: "</span>",
          START_SPAN_2: '<span class="' + _.X("y-C-Y") + '">',
          START_SPAN_3: '<span class="' + _.X("y-C-H-Sb") + '">',
          START_SPAN_4: '<span class="' + _.X("y-C-Y") + '">',
          XXX: _.U(d.length)
        }),
        a += b);
      return (0, _.T)(a + "</div></div>")
    };
    _.oV = function(a) {
      _.I.call(this);
      this.H = a;
      a = a.nb();
      this.ha = {};
      this.ha.euCgFf = pCd;
      this.ha.jNm5if = wBd;
      this.ha.jCCvxc = ABd;
      this.ha.t0O6ic = SBd;
      this.ha.SgHMvd = NBd;
      this.ha.nLrMTe = VBd;
      this.ha.nupQLb = RCd(WBd);
      this.ha.DyVDA = RCd(XBd);
      this.ha.M7LJF = $Bd;
      this.ha.x5cW0b = eCd;
      this.ha.J86xSb = a && a.H ? hCd : eCd;
      this.ha.Iqlsrf = lCd;
      this.ha.NSKDue = tCd;
      this.ha.CmXoCf = tCd;
      this.ha.Yb9IEf = wCd;
      this.ha.n3mpjc = zCd;
      this.ha.sxO0Fd = CCd;
      this.ha.nK1zwb = FCd;
      a && (this.ha.mREpDe = JCd);
      this.ha.zM6fo = NCd;
      this.ha.zYvWjf = RCd(OCd);
      this.ha.VJS4Lc =
        RCd(OCd);
      this.ha.zf3vf = RCd(PCd);
      this.ha.nUpftc = RCd(QCd);
      this.ka();
      this.ta();
      this.ma()
    };
    _.z(_.oV, _.I);
    _.oV.prototype.ka = function() {};
    _.oV.prototype.ta = function() {};
    _.oV.prototype.ma = function() {};
    var RCd = function(a) {
      return function(b, c) {
        return new _.nV(b, c, a)
      }
    };
    _.SCd = new _.O("Udc1O");
    _.TCd = new _.O("gRESod");
    _.UCd = new _.O("sexJ");
    _.VCd = new _.O("cobLUe");
    _.WCd = new _.O("nLujwc");
    _.XCd = new _.O("vHZaU");
    _.YCd = function(a, b, c, d, e) {
      _.go.call(this, a, b, d, e);
      this.wa = c;
      this.hc = null;
      this.ka = 0
    };
    _.z(_.YCd, _.go);
    _.YCd.prototype.ua = function() {
      this.hc && _.Ik(this.hc);
      var a = Date.now();
      this.hc = a - this.ka > this.wa ? _.Hk(this.va, 0, this) : _.Hk(this.va, this.wa, this);
      this.ka = a
    };
    _.YCd.prototype.va = function() {
      this.hc = null;
      _.io(this)
    };
    _.ZCd = new _.O("E2WBOc", "activity", [_.zu, _.Ua, _.Ub, _.vo, _.Pe, _.Na, _.yMa]);

    var fDd = function(a) {
      var b = a.userName,
        c = a.xf,
        d = a.locked;
      a = '<div class="' + _.X("y-mc-q-RvPyde") + '">';
      d ? c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You</span> <span class="' + (_.X("y-C-Y") + '">locked a file</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + ('</span> <span class="' + (_.X("y-C-Y") + '">locked a file</span>'))), a += b) : c ? (b = '<span class="' + _.X("y-C-H-Sb") + '">You</span> <span class="' + (_.X("y-C-Y") + '">unlocked a file</span>'), a += b) : (b = '<span class="' + _.X("y-C-H-Sb") + '">' + (_.U(b) + ('</span> <span class="' +
        (_.X("y-C-Y") + '">unlocked a file</span>'))), a += b);
      return (0, _.T)(a + "</div>")
    };
    var gDd = function(a, b) {
      _.nV.call(this, a, b, fDd)
    };
    _.z(gDd, _.nV);
    gDd.prototype.ka = function() {
      var a = _.nV.prototype.ka.call(this),
        b = this.ha;
      if (!b) return b = Error(), b.message = "b/34167265 Missing event model in LockEvent", _.Yk(b), a;
      b = b.getType();
      a.locked = "Ja" == b;
      return a
    };
    var hDd = function(a, b) {
      return new gDd(a, b)
    };
    _.oV.prototype.ta = function() {
      this.ha.g3fyD = hDd;
      this.ha.BcHh9b = hDd
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syvb");
    var FUd = function() {
      return (0, _.T)('<div class="' + _.X("a-ra-Mb-j") + '"><div class="' + _.X("a-ra-Mb") + '"></div></div>')
    };
    _.tW = function(a, b, c) {
      _.qW.call(this, a, GUd.Ab(), c);
      (this.H = b || null) && this.Ta(this.H);
      this.ma = _.Dk();
      this.ha = new _.$q(this.isSelected());
      _.Sq(this, 2, !1)
    };
    _.z(_.tW, _.qW);
    _.g = _.tW.prototype;
    _.g.Sa = function() {
      _.qW.prototype.Sa.call(this);
      this.Ra().listen(this.Da(), "focus", this.J2a)
    };
    _.g.ql = function(a) {
      _.qW.prototype.ql.call(this, a);
      this.Xa().focus()
    };
    _.g.J2a = function() {
      var a = this.getParent();
      a instanceof _.Oq && a.Al && a.Al(null)
    };
    _.g.Xf = function(a) {
      _.qW.prototype.Xf.call(this, a);
      this.H && this.H.Va(a);
      var b = this.Da();
      if (b) {
        b.tabIndex = a ? 0 : -1;
        var c = this.getParent();
        a && c && _.fc(c) && b.focus();
        this.ha.set(a);
        a && this.ma.resolve(this)
      }
    };
    _.g.mi = function(a) {
      this.isSelected() || this.dispatchEvent(new _.K("jegXhf", this));
      return _.qW.prototype.mi.call(this, a)
    };
    var GUd = function() {};
    _.z(GUd, _.pW);
    GUd.prototype.Ka = function(a) {
      var b = _.pW.prototype.Ka.call(this, a),
        c = _.Yc(FUd, void 0, {}, a.Ia());
      a.Ia().Ht(b, c, 0);
      a.Xf(a.isSelected());
      return b
    };
    _.vf(GUd);
    _.uW = function(a, b, c) {
      _.sW.call(this, a, b, c)
    };
    _.z(_.uW, _.sW);
    _.uW.prototype.fj = function(a) {
      return 27 == a.keyCode ? !1 : _.sW.prototype.fj.call(this, a)
    };
    _.uW.prototype.Al = function(a) {
      _.sW.prototype.Al.call(this, a);
      (a = this.To) && a.Xa().focus()
    };
    _.uW.prototype.iS = function(a) {
      _.sW.prototype.iS.call(this, a);
      this.Il(this.To);
      this.Xa().tabIndex = this.To ? -1 : 0
    };
    _.uW.prototype.yba = function(a) {
      _.sW.prototype.yba.call(this, a);
      this.Xa().tabIndex = this.To ? -1 : 0
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.fVd = function() {
      var a = '<div class="' + _.X("a-q-Xc-Ab") + '"><div class="' + _.X("a-q-Xc-Ab-c") + '">';
      var b = (0, _.T)('<svg width="107px" height="82px" viewBox="0 0 107 82" focusable="false"><path class="' + _.X("a-s-fa-Ha-pa") + '" fill="#000000" d="M0,4a4,4,0,0,1,4,-4h89a4,4,0,0,1,4,4v18.5l-23.5,40.5h-69.5a4,4,0,0,1,-4,-4ZM74.5,65l23,-39.15l1,0l7,4.1l1,1l-23,39.15ZM74,65.8l9.5,5.5l-9,4ZM97,51v8a4,4,0,0,1,-4,4h-3ZM21,63v19l23,-19Z"/></svg>');
      return (0, _.T)(a + b + '</div><div tabindex="0">Select a file or folder to view its details.</div></div>')
    };
    _.R("syv9");
    _.gVd = function(a) {
      _.Eq.call(this, a)
    };
    _.z(_.gVd, _.Eq);
    _.hVd = function() {
      throw Error("Zh");
    };
    _.iVd = function() {
      return !1
    };
    _.W("M", "", 0, function(a, b, c) {
      b = c || b;
      c = a.name;
      var d = a.role,
        e = a.Ao,
        f = a.Pu;
      return (0, _.T)(_.jVd(_.ss({
        ne: "linkSharingWhite",
        message: (0, _.xs)("" + _.U(_.ws("J", "", !1)({
          domainName: c,
          Ao: e,
          role: d
        }, b))),
        Pu: f
      }, a), b))
    });
    _.jVd = function(a, b) {
      var c = a.ne,
        d = a.message,
        e = a.Pu;
      a = a.Wg;
      return (0, _.T)('<div class="' + _.X("H-qa-wc-Ca-mc") + (e ? " " + _.X("H-qa-wc-Ca-ig-mc") : "") + '"><div class="' + _.X("H-qa-wc-Ca-c-j") + '"><div class="' + _.X("H-qa-wc-Ca-c") + '">' + _.U(_.xW({
        variant: c,
        Wg: a
      }, b)) + '</div></div><div class="' + _.X("H-qa-wc-Ca-ua-j") + '"><div class="' + _.X("H-qa-wc-Ca-ua") + '">' + _.U(d) + "</div></div></div>")
    };
    _.kVd = new _.qy("{NUM_MORE, plural, =0 {unused plural form}=1 {+1 more}other {+# more}}");
    _.lVd = new _.O("j1fSDf", "details", [_.Ub, _.Pe, _.Na]);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var rVd = function(a, b, c) {
        b = c || b;
        a = a || {};
        return (0, _.T)('<div class="' + _.X("a-ub-Gd") + '">' + _.fVd(a, b) + "</div>")
      },
      sVd = function(a, b, c) {
        b = c || b;
        c = a.Jb;
        var d = a.Dd,
          e = a.zs,
          f = a.Qe,
          h = a.ao,
          k = a.iconUrl,
          m = a.dg && (a.dg.kb || a.dg),
          n = a.title,
          r = a.$Pa,
          t = a.Ud,
          y = a.fZa;
        a = a.hn ? '<div class="' + _.X("a-Mg-V-c") + '">' + _.Wpb({
            Qe: f,
            JD: h,
            size: "32px",
            zs: e
          }, b) + "</div>" : y ? '<div class="' + _.X("a-Mg-V-c") + '">' + _.OMa({
            color: _.p(_.u(m, _.mC, 3), 1),
            hb: !0,
            size: "32px"
          }) + "</div>" : d ? '<div class="' + _.X("a-Mg-V-c") + '">' + _.Bbb({
            Qe: f,
            dg: m,
            Ud: t
          }, b) + "</div>" :
          '<div class="' + _.X("a-Mg-V-c") + '"><img alt="' + _.X(_.Is(f)) + '" src="' + _.X(_.Fs(k)) + '">' + (t ? _.ws("d", "shortcutMedium", !0)(null, b) : "") + "</div>";
        return (0, _.T)('<div aria-label="' + _.X(c) + '" class="' + _.X("a-Mg-V") + '" tabindex="0" role="link" data-target="open"><div class="' + _.X("a-Mg-V-c-j") + '">' + a + '</div><div class="' + _.X("a-Mg-V-T") + '" title="' + _.X(_.Is(r)) + '">' + _.Hs(_.U(n)) + "</div></div>")
      },
      tVd = function(a, b, c) {
        b = c || b;
        a = a || {};
        c = '<div class="' + _.X("a-ub-Gd") + '"><div class="' + _.X("a-ub-D") + '"><div class="' +
          _.X("a-ub-V-Ok-va") + '"><div class="' + _.X("a-ub-V-j") + '"></div><div class="' + _.X("a-ub-va-d") + '" role="button" tabindex="0" aria-label="';
        c += _.As("Hide Details");
        c = c + '" data-target="hideDetails" data-tooltip="' + _.As("Hide Details");
        c += '"><div class="' + _.X("a-ub-va-d-c") + '">' + _.Zc(_.ss({
          size: "14px",
          hb: !0
        }, a), b) + '</div></div></div><div class="' + _.X("a-ub-ra-B") + '"></div></div><div class="' + _.X("a-ub-sc-oa") + '"><div class="' + _.X("a-ub-oa") + '"></div></div></div>';
        return (0, _.T)(c)
      };
    _.R("syv4");
    _.EW = function(a, b, c, d, e, f) {
      _.tW.call(this, a);
      this.ta = c;
      this.ua = d;
      this.Ga = e;
      this.Ja = f;
      this.H = b
    };
    _.z(_.EW, _.tW);
    _.uVd = function(a, b, c, d, e, f) {
      _.EW.call(this, a, b, c, d, e, f)
    };
    _.z(_.uVd, _.EW);
    _.uVd.prototype.Sa = function() {
      var a = this;
      _.EW.prototype.Sa.call(this);
      this.ma.Hb.then(function() {
        a.isDisposed() || a.ka()
      })
    };
    var vVd = function(a, b, c, d) {
      _.EW.call(this, "Activity", d, "Z0Arqf", 2, _.Pdb, _.Qdb);
      this.Fa = a;
      this.wa = b;
      this.Ca = c
    };
    _.z(vVd, _.uVd);
    vVd.prototype.ka = function() {
      var a = this;
      this.Fa.Jc(_.ZCd).then(function(b) {
        a.H.ub(b.H(a.Fa, String(a.getContent()), a.wa, new _.Ky(a.Ca, a.ha), a.Ia()), !0)
      })
    };
    var wVd = function(a, b, c, d) {
      _.EW.call(this, "Details", d, "MZArnb", 3, _.Oeb, _.Peb);
      this.Fa = a;
      this.wa = b;
      this.Ea = c;
      this.Ca = this.Fa.get(_.Ub)
    };
    _.z(wVd, _.uVd);
    wVd.prototype.ka = function() {
      var a = this;
      Promise.all([this.Fa.Jc(_.lVd), this.Ca.Uv()]).then(function(b) {
        a.H.ub(b[0].H(a.Fa, b[1].getId(), a.wa, new _.Ky(a.Ea, a.ha), a.Ia()), !0)
      })
    };
    var xVd = function(a, b) {
      _.Eq.call(this);
      this.Fa = a;
      this.Za = new _.Xw(this, this);
      this.H = b;
      this.ma = null;
      this.ta = _.bw(a);
      this.ha = a.get(_.Ub)
    };
    _.z(xVd, _.Eq);
    xVd.prototype.Sa = function() {
      _.Eq.prototype.Sa.call(this);
      this.Za.listen("open", this.ua.bind(this))
    };
    var zVd = function(a, b) {
        a.H && yVd(a.H).forEach(function(c) {
          c.ti(a)
        });
        b && yVd(b).forEach(function(c) {
          c.observe(a.ka, a)
        });
        a.H = b;
        a.ka()
      },
      yVd = function(a) {
        var b = a.Kj();
        null === a.Ti && (a.Ti = new _.go([_.cC(a)], a.Rl.bind(a)));
        b = [b, a.Ti, _.cC(a)];
        a.Dd() && (b.push(_.Apb(a)), b.push(_.zlb(a)));
        a.hn() && b.push(_.iC(a));
        return b
      };
    xVd.prototype.ka = function() {
      var a = this,
        b = this.jc();
      if (b && this.H) {
        var c = this.H.getItem();
        this.ha.Uv().then(function() {
          if (a.H.getItem() == c) {
            var d = _.wW(a.H);
            d.setSize("32px");
            var e = a.ha.ih().getId();
            var f = _.eC(a.H);
            f = 100 < f.length ? f.substring(0, 50) + "\u2026" + f.substring(f.length - 50) : f;
            var h = _.eC(a.H),
              k = c.Uc(),
              m = k ? c.sj() : null;
            d = {
              Jb: _.qVd(a.H.getItem()),
              Qe: a.H.Rl(),
              $Pa: h,
              ao: a.H.Oh(),
              dg: d,
              iconUrl: a.H.ze(32),
              Dd: a.H.Dd(),
              hn: k == a.H.getId(),
              zs: !(!m || !_.x(m, 3)),
              title: f,
              Ud: _.Ia(c),
              fZa: e == c.getId()
            };
            _.Zn(b, sVd,
              d);
            f != h && (d = a.Ia().Cb("a-Mg-V-T", b), a.ma = new _.jF(a.Fa, d, "", a.Ia(), b), d = a.ma, e = d.ka.getAttribute("title")) && (d.eh(e), d.ka.removeAttribute("title"))
          }
        }).then(null, _.Js(this.Fa, 397))
      }
    };
    xVd.prototype.ua = function() {
      if (this.H) {
        var a = this.ta.Vd(),
          b = _.xu(this.H.getItem());
        (new _.Kw(b, {
          Lca: null,
          zU: {
            kj: a.Hg(),
            parentId: a.Xj()
          }
        })).submit(this.Fa)
      }
    };
    var AVd = function() {
      return (0, _.T)('<div class="' + _.X("a-ub-j") + " " + _.X("a-ub-j-hc") + '" style="display: none" data-target="sidebar"></div>')
    };
    var FW = function(a) {
      _.Eq.call(this, a);
      var b = this;
      this.H = new _.$q(!1);
      this.H.observe(function() {
        return BVd(b)
      }, this);
      this.Za = new _.Xw(this);
      this.jy = new _.er;
      this.Pa = this.Na = !1;
      this.Ua = this.Ca = null;
      this.Bb = -1
    };
    _.z(FW, _.Eq);
    _.g = FW.prototype;
    _.g.Ka = function() {
      _.Eq.prototype.Ka.call(this);
      this.We(this.Xa())
    };
    _.g.We = function(a) {
      _.Eq.prototype.We.call(this, a);
      a = _.Yc(AVd);
      this.Oc(a)
    };
    _.g.Sa = function() {
      var a = this;
      _.Eq.prototype.Sa.call(this);
      BVd(this);
      this.Ra().listen(this.Da(), "keydown", this.Gd);
      this.Ra().listen(this.Da(), "Lc", function() {
        a.hasFocus() && a.ha(!1)
      });
      this.Za.listen("hideDetails", this.ld.bind(this));
      this.jy.listen(function() {
        _.gm(a.Ia().Yb(), CVd)
      }, this)
    };
    _.g.Ov = function() {
      this.jy.H(this.H.get() ? "cf3fJc" : "YH0yb")
    };
    _.g.focus = function() {
      this.Da() && this.ha(!0)
    };
    _.g.hasFocus = function() {
      return _.fc(this)
    };
    _.g.NM = function() {
      return !1
    };
    var BVd = function(a) {
      var b = a.Da();
      b && (a = a.H.get(), _.Om(b, a))
    };
    FW.prototype.Gd = function(a) {
      var b;
      if (b = this.hasFocus() && 27 == a.keyCode) {
        a: {
          a = a.target;b = this.Da();
          if (a && b && b.contains(a))
            for (; a && a != b;) {
              var c = a instanceof Element && a.getAttribute("jsaction");
              if (c && c.match(DVd)) {
                a = !0;
                break a
              }
              a = a.parentElement
            }
          a = !1
        }
        b = !a
      }
      b && this.ha(!1)
    };
    FW.prototype.ld = function() {
      this.ha(!1);
      return 1
    };
    FW.prototype.ha = function(a, b) {
      var c = this,
        d = this.Da();
      d && (_.q.clearTimeout(this.Ca), a != this.H.get() && (this.Pa && this.Ga(), this.Na = a, BVd(this), void 0 === b || b ? (this.Pa = !0, a ? (EVd(this), this.Bb = _.q.requestAnimationFrame(this.jy.H.bind(this.jy, "yV3cH"))) : this.jy.H("FjdDEb"), this.Ua = _.q.setInterval(function() {
        _.gm(c.Ia().Yb(), CVd)
      }, 40), this.Ra().qd(d, _.vj, this.Ga), this.Ca = _.q.setTimeout(this.Ga.bind(this), 300)) : (EVd(this), this.jy.H(a ? "cf3fJc" : "YH0yb"))))
    };
    var EVd = function(a) {
      a.Na != a.H.get() && a.H.set(a.Na)
    };
    FW.prototype.Ga = function() {
      _.q.clearInterval(this.Ua);
      this.jy.H("kxZRtc");
      EVd(this);
      this.Pa = !1;
      _.q.clearTimeout(this.Ca)
    };
    FW.prototype.mb = function() {
      _.Eq.prototype.mb.call(this);
      _.Ik(this.Ca);
      _.q.cancelAnimationFrame(this.Bb)
    };
    _.Vq(FW);
    var DVd = /^([^;]+;)*\s*keydown:/,
      CVd = _.$l("qn8uRd");
    var GVd, HVd;
    _.GW = function(a) {
      FW.call(this, a.get(_.rn).Ia());
      var b = this;
      this.Fa = new _.Ln(a);
      this.Ta(this.Fa);
      this.Fa.registerService(_.Xq, this);
      this.qc = this.Fa.get(_.Ze);
      this.Pb = this.Fa.get(_.Ub);
      this.Ze = this.Fa.get(_.Qp);
      this.Nc = this.Fa.get(_.Pe);
      this.lc = this.Fa.get(_.Wq);
      this.Vc = this.Fa.get(_.dBa);
      this.va = new _.uW(void 0, void 0, this.Ia());
      this.ub(this.va);
      this.Jg = new xVd(this.Fa, null);
      this.ub(this.Jg);
      this.ta = new _.$q(null);
      _.rj(this, function() {
        _.co(b.ta)
      });
      this.ka = [];
      this.rb = new _.$q("default");
      this.Ea = new _.Bw(this.rb);
      this.ub(this.Ea);
      this.ma = null;
      this.wd = _.bw(this.Fa);
      this.ua = null;
      _.rj(this, function() {
        _.sj(b.ua)
      });
      this.$a = this.Ja = !1;
      this.Gb = !!_.x(this.Fa.get(_.d1a), 2)
    };
    _.z(_.GW, FW);
    _.g = _.GW.prototype;
    _.g.We = function(a) {
      FW.prototype.We.call(this, a);
      this.Ea.add(new _.yw(tVd), "default");
      this.Ea.render(this.jc());
      this.va.render(this.Cb("a-ub-ra-B"));
      this.ka[0] = _.FVd(this, wVd);
      this.ka[1] = _.FVd(this, vVd);
      this.ola();
      this.Jg.render(this.Cb("a-ub-V-j"));
      GVd(this, new _.yw(rVd), new _.yD(new _.AD(this.ta)))
    };
    _.g.Sa = function() {
      var a = this;
      FW.prototype.Sa.call(this);
      this.lc.H(this);
      for (var b = {}, c = _.w(this.ka), d = c.next(); !d.done; b = {
          UW: b.UW
        }, d = c.next()) b.UW = d.value, this.Ra().listen(b.UW, "jegXhf", function(e) {
        return function() {
          a.qc.Md(a.Fa, e.UW.Ga)
        }
      }(b));
      this.H.observe(function(e) {
        e && !a.va.To && a.ka[0].Xf(!0);
        !e && a.hasFocus() && a.Vc.focus()
      }, this);
      this.Ze.LF().then(function() {
        return void HVd(a)
      });
      this.jy.listen(function(e) {
        return IVd(a, e)
      }, this);
      this.ta.observe(function(e) {
        var f = a.Da();
        if (f)
          if (null != e) {
            var h =
              a.Pb.ih();
            h = e.getId() == h.getId();
            var k = !h && e.hn(),
              m = !h && !k && e.Dd(),
              n = !h && !k && !m;
            _.fd(f, "l-Mg-wg-bg-a", h);
            _.fd(f, "l-Mg-wg-fc-a", k);
            _.fd(f, "l-Mg-wg-o", m);
            _.fd(f, "l-Mg-wg-sa", n)
          } else _.lm(f, ["l-Mg-wg-bg-a", "l-Mg-wg-fc-a", "l-Mg-wg-o", "l-Mg-wg-sa"]);
        zVd(a.Jg, e);
        a.VBa(e)
      }, this)
    };
    _.g.Ov = function() {
      FW.prototype.Ov.call(this);
      JVd(this)
    };
    _.g.focus = function() {
      FW.prototype.focus.call(this);
      this.Da() && this.va.Xa().focus()
    };
    _.g.ola = function() {};
    _.g.VBa = function() {};
    _.FVd = function(a, b) {
      var c = new _.zF("l-Mg-qs-ra");
      a.ub(c);
      b = new b(a.Fa, a.ta, a.H, c);
      a.va.ub(b, !0);
      b.H.render(a.Cb("a-ub-oa"));
      return b
    };
    GVd = function(a, b, c) {
      a.Ea.add(b, "empty");
      c.observe(function(d) {
        a.rb.set(d ? "empty" : "default")
      }, a, !0)
    };
    HVd = function(a) {
      a.ma = a.Ze.Du(_.bMa);
      for (var b = [a.H], c = _.w(a.ka), d = c.next(); !d.done; d = c.next()) b.push(d.value.ha);
      (new _.go(b, a.Db.bind(a))).observe(function(e) {
        var f = this.wd.Vd();
        f && f.zt && f.zt() && this.ma.set(e)
      }.bind(a), a);
      a.Ja && a.ma.get() && (a.Ja = !1, JVd(a))
    };
    _.GW.prototype.Db = function() {
      if (this.H.get()) {
        a: {
          var a = _.w(this.ka);
          for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ha.get()) {
              a = b.ta;
              break a
            } a = null
        }
        a = a || this.ma.get()
      }
      else a = "xTMeO";
      return a
    };
    var JVd = function(a) {
      if (a.ma) {
        var b = a.ma.get();
        !a.Gb || a.$a || b && "xTMeO" != b || (b = "MZArnb");
        for (var c = !1, d = _.w(a.ka), e = d.next(); !e.done; e = d.next())
          if (e = e.value, e.ta == b) {
            c = !0;
            e.Xf(!0);
            break
          } a.ha(c, !1);
        IVd(a, c ? "cf3fJc" : "YH0yb");
        a.$a = !0
      } else a.Ja = !0
    };
    _.GW.prototype.NM = function(a) {
      for (var b = _.w(this.ka), c = b.next(); !c.done; c = b.next())
        if (c = c.value, c.Ja == a) return (this.H.get() || this.Nc.ta.get()) && c.isVisible() && (c.isSelected() && this.H.get() ? this.ha(!1) : (this.ha(!0), c.Xa().focus(), c.Xf(!0))), !0;
      return !1
    };
    _.GW.prototype.Td = function() {
      this.ka[2] && (this.ka[2].Xf(!0), this.H.get() || (this.ha(!0), this.focus()))
    };
    _.GW.prototype.nt = function() {
      var a = new _.ht;
      a: {
        var b = _.w(this.ka);
        for (var c = b.next(); !c.done; c = b.next())
          if (c = c.value, c.ha.get()) {
            b = c.ua;
            break a
          } b = this.ka[0].ua
      }
      _.jt(a, b);
      b = _.it((new _.gt).ig(this.Xa().clientHeight), this.Xa().clientWidth);
      _.H(a, 2, b);
      return a
    };
    _.GW.prototype.wa = function() {
      return this
    };
    var IVd = function(a, b) {
      if ("kxZRtc" != b) {
        a = a.Xa();
        var c = "yV3cH" == b || "cf3fJc" == b;
        _.fd(a, "a-ub-Xc-sn", "cf3fJc" == b || "YH0yb" == b);
        _.fd(a, "a-ub-pb", c);
        _.fd(a, "a-ub-xTMeO", !c)
      }
    };
    var KVd = function(a) {
      _.I.call(this);
      this.Fa = a;
      this.Mj = _.Pa(a.get(_.Qa));
      this.H = null
    };
    _.z(KVd, _.I);
    var MVd = function(a) {
      if (!a.H && (a.H = new _.GW(a.Fa), a.Ta(a.H), !a.Mj)) {
        var b = _.on(a.Fa, [_.Hr, _.Mr, _.sr]);
        Promise.all([b[_.Hr], b[_.Mr], b[_.sr]]).then(function(c) {
          var d = c[2];
          LVd(c[0].IB(), c[1].getSelection(), d.kP).observe(function(e) {
            var f = a.H;
            _.sj(f.ua);
            f.ua = null;
            null != e ? (f.ua = _.ncb(f.Fa, e, _.Te, "info_sidebar"), e = f.ua.H.Yb(), _.fo(f.ta, e)) : f.ta.set(null)
          }, a)
        }).then(null, _.Js(a.Fa, 65))
      }
      return a.H
    };
    KVd.prototype.PE = function() {
      return this.Mj ? null : MVd(this)
    };
    var LVd = function(a, b, c) {
      return new _.YCd([a, b.onChange(), c], function() {
        var d;
        a: {
          if (b.isEmpty()) {
            if (d = c.get()) {
              d = d.getId();
              break a
            }
          } else if (d = a.get()) break a;d = null
        }
        return d
      }, 200)
    };
    _.bt({
      id: _.vr,
      Rb: KVd
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("bnS2lf");




    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.GM = function(a) {
      return new Nmc(a)
    };
    _.Omc = function(a) {
      return function(b, c, d) {
        b = a(b, c, d);
        if (!b) return b;
        b.metadata.X$a = !0;
        return b
      }
    };
    _.HM = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.HM, _.D);
    _.HM.prototype.Zb = "HMxWxf";
    _.HM.prototype.getParent = function() {
      return _.u(this, _.Wb, 2)
    };
    _.HM.prototype.Cg = function(a) {
      return _.H(this, 2, a)
    };
    _.HM.prototype.H = function() {
      return _.u(this, _.Yb, 3)
    };
    _.Pmc = function(a, b) {
      _.H(a, 3, b)
    };
    _.HM.prototype.ka = function() {
      return _.p(this, 4)
    };
    _.IM = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.IM, _.D);
    var Nmc = function(a) {
      this.H = a.xg || !1;
      this.ha = a.name;
      this.jd = a.mg;
      this.Ic = a.data;
      this.ie = a.children;
      this.ka = a.Og;
      a.params ? _.yf(a.params) && (a.params = {
        Rb: a.params
      }) : a.params = {
        Rb: _.IM
      };
      this.ta = a.params;
      this.ua = a.Ng || function() {
        return {
          variant: null,
          Rf: [],
          og: []
        }
      };
      this.NS = a.gZa || !1;
      this.ma = a.Kg || {}
    };
    _.g = Nmc.prototype;
    _.g.getName = function() {
      return this.ha
    };
    _.g.fCa = function(a, b) {
      if (!this.NS) return {
        variant: null,
        Rf: [],
        og: []
      };
      b = this.ua(a, b);
      for (var c = {}, d = _.w(Object.keys(b.og)), e = d.next(); !e.done; c = {
          $A: c.$A,
          XW: c.XW,
          NW: c.NW
        }, e = d.next()) {
        e = e.value;
        c.NW = b.og[e];
        e = this.ma[e] || {};
        c.$A = {};
        for (var f = !1, h = _.w(Object.keys(e)), k = h.next(); !k.done; k = h.next()) k = k.value, c.$A[k] = e[k](a), Array.isArray(c.$A[k]) && (f = !0);
        f ? (c.XW = Object.keys(c.$A).find(function(m) {
          return function(n) {
            return Array.isArray(m.$A[n])
          }
        }(c)), e = c.$A[c.XW].map(function(m) {
          return function(n) {
            var r =
              Object.assign({}, m.$A);
            r[m.XW] = n;
            return m.NW(r, void 0).Rf
          }
        }(c)), b.Rf.push.apply(b.Rf, _.zc(e))) : b.Rf.push.apply(b.Rf, _.zc(c.NW(c.$A, void 0).Rf))
      }
      return b
    };
    _.g.gZa = function() {
      return this.NS
    };
    _.g.uQa = function() {
      return this.Ic || {}
    };
    _.g.getChildren = function() {
      return this.ie || {}
    };
    _.g.di = function() {
      return this.ta
    };
    _.g.Oqa = function() {
      return this.ka ? this.ka : null
    };
    _.g.toString = function() {
      return "ComponentId<" + this.ha + ">"
    };
    _.R("syq2");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy8");
    _.X0 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.X0, _.D);
    _.X0.prototype.Zb = "TofhHc";
    _.Aue = new _.pn(_.X0);
    _.xo.TofhHc = _.wta;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy3");
    _.g9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.g9, _.D);
    _.g9.prototype.Zb = "M2rjcd";
    _.g9.prototype.nb = function() {
      return _.u(this, _.Yna, 1)
    };
    _.g9.prototype.setConfig = function(a) {
      return _.H(this, 1, a)
    };
    _.DFf = new _.pn(_.g9);
    _.xo.M2rjcd = _.wta;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syc");
    _.i9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.i9, _.D);
    _.i9.prototype.Zb = "GcheOd";
    _.i9.prototype.Hg = function() {
      return _.p(this, 1)
    };
    _.i9.prototype.nf = function() {
      return _.p(this, 3)
    };
    _.i9.prototype.Q3 = function(a) {
      return _.l(this, 8, a)
    };
    _.FFf = new _.pn(_.i9);
    _.xo.GcheOd = function(a) {
      return (_.yo(_.zo(a.Hg())) + "," + _.yo(_.zo(_.p(a, 2))) + "," + _.yo(_.zo(_.p(a, 13)))).toString()
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy12x");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.m9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.m9, _.D);
    _.m9.prototype.ef = function() {
      return _.u(this, _.Qb, 1)
    };
    _.NHf = function(a, b) {
      _.H(a, 1, b)
    };
    _.m9.prototype.Ue = function() {
      return _.u(this, _.sw, 2)
    };
    _.OHf = function(a, b) {
      _.H(a, 2, b)
    };
    _.m9.prototype.Xj = function() {
      return _.p(this, 3)
    };
    _.m9.prototype.ka = function() {
      return _.p(this, 4)
    };
    _.m9.prototype.H = function() {
      return _.x(this, 5)
    };
    _.R("sy12r");
    _.PHf = function() {
      return {
        variant: null,
        Rf: [],
        og: {}
      }
    };
    _.QHf = _.GM({
      xg: !0,
      name: "p32Htb",
      mg: _.zBa,
      params: {
        Rb: _.m9
      },
      Og: _.BBa,
      data: {
        Zc: function() {},
        item: function() {},
        Ce: function() {},
        Rc: function() {}
      },
      Ng: _.PHf,
      Kg: {},
      children: {}
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var RHf = function(a, b) {
      _.l(a, 3, b)
    };
    _.R("sy12s");
    var SHf = {
      Bs: {
        Zc: function(a) {
          return a && a.Zc || void 0
        },
        item: function(a) {
          return a && a.iI && a.iI.Kd() || []
        },
        Ce: function(a) {
          return a && a.Ce || void 0
        },
        Rc: function(a) {
          return a && a.Rc || void 0
        }
      }
    };
    SHf.Bs.Ki = SHf.Bs.item;
    _.THf = function() {
      return {
        variant: null,
        Rf: [],
        og: {
          Bs: _.PHf
        }
      }
    };
    _.UHf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.UHf, _.D);
    _.UHf.prototype.ef = function() {
      return _.u(this, _.Qb, 1)
    };
    _.UHf.prototype.Ue = function() {
      return _.u(this, _.sw, 2)
    };
    _.VHf = _.GM({
      xg: !1,
      name: "frfCsf",
      mg: _.yBa,
      params: {
        Rb: _.UHf
      },
      Og: void 0,
      data: {
        Zc: function() {},
        iI: function() {},
        Ce: function() {},
        Rc: function() {}
      },
      Ng: _.THf,
      Kg: SHf,
      children: {
        Bs: function() {
          var a = SHf.Bs;
          return {
            id: _.QHf,
            name: "sgblj",
            Pd: !0,
            ye: a,
            Ki: a.item,
            yh: function(b, c, d) {
              c = new _.m9;
              null != _.p(b, 3) && RHf(c, _.p(b, 3));
              null != b.Ue() && _.OHf(c, b.Ue());
              null != b.ef() && _.NHf(c, b.ef());
              return {
                Mc: c,
                id: _.QHf,
                name: "sgblj",
                Pd: !0,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }()
      }
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var WHf = function(a, b) {
        _.H(a, 1, b)
      },
      XHf = function(a, b) {
        _.H(a, 2, b)
      },
      YHf = function(a, b) {
        _.l(a, 3, b)
      };
    _.R("sy12t");
    var ZHf;
    ZHf = {
      list: {
        Zc: function(a) {
          return a && a.Zc || void 0
        },
        iI: function(a) {
          return a && a.Gj || void 0
        },
        Ce: function(a) {
          return a && a.Ce || void 0
        },
        Rc: function(a) {
          return a && a.Rc || void 0
        }
      }
    };
    _.$Hf = function() {
      return {
        variant: null,
        Rf: [],
        og: {
          list: _.THf
        }
      }
    };
    _.aIf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.aIf, _.D);
    _.aIf.prototype.ef = function() {
      return _.u(this, _.Qb, 1)
    };
    _.aIf.prototype.Ue = function() {
      return _.u(this, _.sw, 2)
    };
    _.bIf = _.GM({
      xg: !1,
      name: "srXHXb",
      mg: _.xBa,
      params: {
        Rb: _.aIf
      },
      Og: void 0,
      data: {
        Gj: function() {},
        Zc: function() {},
        Ce: function() {},
        Rc: function() {}
      },
      Ng: _.$Hf,
      Kg: ZHf,
      children: {
        list: function() {
          var a = ZHf.list;
          return {
            id: _.VHf,
            name: "rymPhb",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.UHf;
              null != _.p(b, 3) && YHf(c, _.p(b, 3));
              null != b.Ue() && XHf(c, b.Ue());
              null != b.ef() && WHf(c, b.ef());
              return {
                Mc: c,
                id: _.VHf,
                name: "rymPhb",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }()
      }
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy5");
    _.h9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.h9, _.D);
    _.h9.prototype.Zb = "BLvqtf";
    _.h9.prototype.getItem = function() {
      return _.u(this, _.iq, 2)
    };
    _.h9.prototype.Kb = function() {
      return _.p(this, 3)
    };
    _.EFf = new _.pn(_.h9);
    _.xo.BLvqtf = function(a) {
      return _.yo(_.zo(_.p(a, 1))).toString()
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var cIf = function(a, b) {
        _.H(a, 1, b)
      },
      dIf = function(a, b) {
        _.H(a, 2, b)
      },
      eIf = function(a, b) {
        _.l(a, 3, b)
      };
    _.R("sy12u");
    var fIf = {
      Gj: {
        Gj: function(a) {
          return a && a.Uj && a.Uj.Gx() || []
        },
        Zc: function(a) {
          return a && a.Zc || void 0
        },
        Ce: function(a) {
          return a && a.Ce || void 0
        },
        Rc: function(a) {
          return a && a.Rc || void 0
        }
      }
    };
    fIf.Gj.Ki = fIf.Gj.Gj;
    _.gIf = function() {
      return {
        variant: null,
        Rf: [],
        og: {
          Gj: _.$Hf
        }
      }
    };
    _.n9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.n9, _.D);
    _.n9.prototype.ef = function() {
      return _.u(this, _.Qb, 1)
    };
    _.n9.prototype.Ue = function() {
      return _.u(this, _.sw, 2)
    };
    _.o9 = _.GM({
      xg: !1,
      name: "bSrUHe",
      mg: _.CBa,
      params: {
        Rb: _.n9
      },
      Og: void 0,
      data: {
        Uj: function() {},
        Zc: function() {},
        Ce: function() {},
        Rc: function() {}
      },
      Ng: _.gIf,
      Kg: fIf,
      children: {
        Gj: function() {
          var a = fIf.Gj;
          return {
            id: _.bIf,
            name: "E2o6qc",
            Pd: !0,
            ye: a,
            Ki: a.Gj,
            yh: function(b, c, d) {
              c = new _.aIf;
              null != _.p(b, 3) && eIf(c, _.p(b, 3));
              null != b.Ue() && dIf(c, b.Ue());
              null != b.ef() && cIf(c, b.ef());
              return {
                Mc: c,
                id: _.bIf,
                name: "E2o6qc",
                Pd: !0,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }()
      }
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy12y");
    _.hIf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.hIf, _.D);
    _.hIf.prototype.ef = function() {
      return _.u(this, _.Qb, 1)
    };
    _.hIf.prototype.Ue = function() {
      return _.u(this, _.sw, 2)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syyh");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy2");
    _.BFf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.BFf, _.D);
    _.BFf.prototype.Zb = "g31yOb";
    _.BFf.prototype.tk = function() {
      return _.u(this, _.Vu, 1)
    };
    _.CFf = new _.pn(_.BFf);
    _.xo.g31yOb = _.wta;

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy12m");
    _.gGf = function() {
      return {
        variant: null,
        Rf: [],
        og: {}
      }
    };
    _.hGf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.hGf, _.D);
    _.iGf = _.GM({
      xg: !0,
      name: "aOkIQc",
      mg: _.vBa,
      params: {
        Rb: _.hGf
      },
      Og: void 0,
      data: {
        Ui: function() {},
        Ce: function() {}
      },
      Ng: _.gGf,
      Kg: {},
      children: {}
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy4");
    _.LHf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.LHf, _.D);
    _.LHf.prototype.Zb = "RxoWDf";
    _.LHf.prototype.Bd = function() {
      return _.p(this, 1)
    };
    _.MHf = new _.pn(_.LHf);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy12p");
    _.k9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.k9, _.D);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy12q");
    _.l9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.l9, _.D);
    _.l9.prototype.Zb = "b5wqU";
    _.l9.prototype.Hg = function() {
      return _.p(this, 1)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var iIf = function(a, b) {
        _.H(a, 1, b)
      },
      jIf = function(a, b) {
        _.H(a, 2, b)
      },
      kIf = function(a, b) {
        _.l(a, 3, b)
      };
    _.R("sy12v");
    var lIf;
    lIf = {
      list: {
        Uj: function(a) {
          return a && a.Uj || void 0
        },
        Zc: function(a) {
          return a && a.Zc || void 0
        },
        Ce: function(a) {
          return a && a.Ce || void 0
        },
        Rc: function(a) {
          return a && a.Rc || void 0
        }
      }
    };
    _.mIf = function() {
      return {
        variant: null,
        Rf: [],
        og: {
          list: _.gIf
        }
      }
    };
    _.nIf = _.GM({
      xg: !1,
      name: "owBlfc",
      mg: _.DBa,
      params: {
        Rb: _.hIf
      },
      Og: void 0,
      data: {
        Ui: function() {},
        Uj: function() {},
        Zc: function() {},
        Ce: function() {},
        Rc: function() {}
      },
      Ng: _.mIf,
      Kg: lIf,
      children: {
        list: function() {
          var a = lIf.list;
          return {
            id: _.o9,
            name: "rymPhb",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.n9;
              null != _.p(b, 3) && kIf(c, _.p(b, 3));
              null != b.Ue() && jIf(c, b.Ue());
              null != b.ef() && iIf(c, b.ef());
              return {
                Mc: c,
                id: _.o9,
                name: "rymPhb",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }()
      }
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy14n");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.Fee = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.Fee, _.D);
    _.g = _.Fee.prototype;
    _.g.Zb = "G2Xd5";
    _.g.getItem = function() {
      return _.u(this, _.iq, 1)
    };
    _.g.Rl = function() {
      return _.p(this, 7)
    };
    _.g.ze = function() {
      return _.p(this, 8)
    };
    _.g.Ph = function() {
      return _.x(this, 9)
    };
    _.g.gq = function() {
      return _.p(this, 11)
    };
    _.g.tl = function(a) {
      _.l(this, 11, a)
    };
    _.g.Bd = function() {
      return _.p(this, 14)
    };
    _.Gee = [
      [1, 2]
    ];
    _.NY = function(a) {
      _.E(this, a, 0, -1, null, _.Gee)
    };
    _.C(_.NY, _.D);
    _.NY.prototype.Zb = "N4uGi";
    _.NY.prototype.Go = function() {
      return _.u(this, _.Fee, 1)
    };
    _.R("sya");
    _.OY = function(a) {
      _.E(this, a, 0, -1, Hee, null)
    };
    _.C(_.OY, _.D);
    var Hee = [6];
    _.OY.prototype.Zb = "MUujwe";
    _.OY.prototype.ej = function() {
      return _.ob(this, _.NY, 6)
    };
    _.OY.prototype.Yn = function(a, b) {
      return _.vi(this, 6, a, _.NY, b)
    };
    _.Iee = new _.pn(_.OY);
    _.xo.MUujwe = function(a) {
      return _.yo(_.zo(_.p(a, 1))).toString()
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syyi");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy125");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy12i");
    var GFf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(GFf, _.D);
    _.HFf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.HFf, _.D);
    _.IFf = function() {
      return {
        variant: null,
        Rf: [],
        og: {}
      }
    };
    _.JFf = _.GM({
      xg: !0,
      name: "nUb07b",
      mg: _.uBa,
      params: {
        Rb: _.HFf
      },
      Og: void 0,
      data: {
        bB: function(a, b, c) {
          a = c || {};
          b = new _.Bn("Airzle", _.BFf, [{
            key: _.zn,
            value: !0
          }]);
          c = a.Sd || "driveweb";
          var d = new GFf,
            e = {
              fatal: !0
            },
            f;
          for (f in a) e[f] = a[f];
          return {
            If: b,
            Sd: c,
            jf: d,
            metadata: e
          }
        },
        Ui: function() {},
        Zc: function() {},
        Rc: function() {}
      },
      Ng: _.IFf,
      Kg: {},
      children: {}
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var oIf = function(a, b) {
        _.l(a, 4, b)
      },
      pIf = function(a, b) {
        _.l(a, 1, b)
      },
      qIf = function(a, b) {
        _.H(a, 1, b)
      },
      rIf = function(a, b) {
        _.H(a, 2, b)
      },
      sIf = function(a, b) {
        _.l(a, 3, b)
      };
    _.R("sy12w");
    var tIf;
    tIf = {
      dZ: {
        Ui: function(a) {
          return a && a.Ui || void 0
        },
        Ce: function(a) {
          return a && a.Ce || void 0
        }
      },
      list: {
        Ui: function(a) {
          return a && a.Ui || void 0
        },
        Uj: function(a) {
          return a && a.Uj || void 0
        },
        Zc: function(a) {
          return a && a.Zc || void 0
        },
        Ce: function(a) {
          return a && a.Ce || void 0
        },
        Rc: function(a) {
          return a && a.Rc || void 0
        }
      }
    };
    _.uIf = function() {
      return {
        variant: null,
        Rf: [],
        og: {
          dZ: _.gGf,
          list: _.mIf
        }
      }
    };
    _.p9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.p9, _.D);
    _.p9.prototype.getParent = function() {
      return _.p(this, 1)
    };
    _.p9.prototype.Cg = function(a) {
      return _.l(this, 1, a)
    };
    _.p9.prototype.ef = function() {
      return _.u(this, _.Qb, 2)
    };
    _.p9.prototype.Ue = function() {
      return _.u(this, _.sw, 3)
    };
    var vIf;
    vIf = function(a) {
      var b = new _.HM;
      null != _.p(a, 5) && oIf(b, _.p(a, 5));
      b.Cg(function() {
        var c = new _.Wb;
        null != a.getParent() && c.$b(a.getParent());
        return c
      }());
      _.Pmc(b, function() {
        var c = new _.Yb;
        null != a.Ue() && null != _.Xb(a.Ue()) && null != _.Xb(a.Ue()).ik() && _.$b(c, _.Xb(a.Ue()).ik());
        null != a.Ue() && null != _.Xb(a.Ue()) && null != _.x(_.Xb(a.Ue()), 3) && _.ac(c, _.x(_.Xb(a.Ue()), 3));
        null != a.Ue() && null != _.Xb(a.Ue()) && null != _.Xb(a.Ue()).getType() && _.Zb(c, _.Xb(a.Ue()).getType());
        return c
      }());
      return b
    };
    _.wIf = _.GM({
      xg: !1,
      name: "jPkXRc",
      mg: _.wBa,
      params: {
        Rb: _.p9
      },
      Og: void 0,
      data: {
        Ui: function(a, b, c) {
          b = c || {};
          c = new _.Bn("Rtk8Cd", _.h9, [{
            key: _.zn,
            value: !0
          }]);
          var d = b.Sd || "driveweb",
            e = new _.LHf;
          null != a.getParent() && (a = a.getParent(), _.l(e, 1, a));
          a = {
            fatal: !0
          };
          for (var f in b) a[f] = b[f];
          return {
            If: c,
            Sd: d,
            jf: e,
            metadata: a
          }
        },
        Uj: function(a, b, c) {
          b = c || {};
          c = new _.Bn("XVZmSc", _.bs, [{
            key: _.zn,
            value: !0
          }]);
          var d = b.Sd || "driveweb";
          a = vIf(a);
          var e = {
              fatal: !0
            },
            f;
          for (f in b) e[f] = b[f];
          return {
            If: c,
            Sd: d,
            jf: a,
            metadata: e
          }
        },
        Zc: function(a,
          b, c) {
          a = c || {};
          b = new _.Bn("jhkq9e", _.g9, [{
            key: _.zn,
            value: !0
          }]);
          c = a.Sd || "driveweb";
          var d = new _.k9,
            e = {
              fatal: !0
            },
            f;
          for (f in a) e[f] = a[f];
          return {
            If: b,
            Sd: c,
            jf: d,
            metadata: e
          }
        },
        Ce: function(a, b, c) {
          a = c || {};
          b = new _.Bn("TBMnvf", _.X0, [{
            key: _.zn,
            value: !0
          }]);
          c = a.Sd || "driveweb";
          var d = new _.X0,
            e = {
              fatal: !0
            },
            f;
          for (f in a) e[f] = a[f];
          return {
            If: b,
            Sd: c,
            jf: d,
            metadata: e
          }
        },
        Rc: function(a, b, c) {
          b = c || {};
          c = new _.Bn("DXNbTd", _.i9, [{
            key: _.zn,
            value: !0
          }]);
          var d = b.Sd || "driveweb",
            e = new _.l9;
          null != a.getParent() && (a = a.getParent(), _.l(e, 2,
            a));
          _.l(e, 1, 1);
          a = {
            fatal: !0
          };
          for (var f in b) a[f] = b[f];
          return {
            If: c,
            Sd: d,
            jf: e,
            metadata: a
          }
        }
      },
      Ng: _.uIf,
      Kg: tIf,
      children: {
        dZ: function() {
          var a = tIf.dZ;
          return {
            id: _.iGf,
            name: "oqWmPb",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.hGf;
              null != _.x(b, 4) && pIf(c, _.x(b, 4));
              return {
                Mc: c,
                id: _.iGf,
                name: "oqWmPb",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }(),
        list: function() {
          var a = tIf.list;
          return {
            id: _.nIf,
            name: "rymPhb",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.hIf;
              null != b.getParent() &&
                sIf(c, b.getParent());
              null != b.Ue() && rIf(c, b.Ue());
              null != b.ef() && qIf(c, b.ef());
              return {
                Mc: c,
                id: _.nIf,
                name: "rymPhb",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }()
      }
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.rOf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.rOf, _.D);
    _.rOf.prototype.ta = function() {
      return _.p(this, 1)
    };
    _.rOf.prototype.H = function() {
      return _.p(this, 2)
    };
    _.rOf.prototype.ka = function() {
      return _.x(this, 3)
    };
    _.R("sy14j");
    _.sOf = function() {
      return {
        variant: null,
        Rf: [],
        og: {}
      }
    };
    _.tOf = _.GM({
      xg: !1,
      name: "AsYQqd",
      mg: _.ECa,
      params: {
        Rb: _.rOf
      },
      Og: void 0,
      data: {
        Zc: function() {}
      },
      Ng: _.sOf,
      Kg: {},
      children: {}
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var uOf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(uOf, _.D);
    uOf.prototype.Zb = "eZpSLc";
    uOf.prototype.H = function() {
      return _.x(this, 1)
    };
    uOf.prototype.ka = function() {
      return _.p(this, 2)
    };
    _.R("sy14k");
    _.vOf = function() {
      return {
        variant: null,
        Rf: [],
        og: {}
      }
    };
    _.wOf = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.wOf, _.D);
    _.wOf.prototype.dE = function() {
      return _.x(this, 4)
    };
    var xOf, yOf;
    xOf = function(a, b, c) {
      if (a.dE()) {
        a = c || {};
        b = new _.Bn("TBMnvf", _.X0, [{
          key: _.zn,
          value: !0
        }]);
        c = a.Sd || "driveweb";
        var d = new _.X0,
          e = {
            fatal: !1
          },
          f;
        for (f in a) e[f] = a[f];
        return {
          If: b,
          Sd: c,
          jf: d,
          metadata: e
        }
      }
    };
    yOf = function(a, b, c) {
      if (a.dE()) {
        b = c || {};
        c = new _.Bn("PDArdc", _.OY, [{
          key: _.zn,
          value: !0
        }]);
        var d = b.Sd || "driveweb",
          e = new uOf;
        if (null != _.p(a, 2)) {
          var f = _.p(a, 2);
          _.l(e, 2, f)
        }
        null != _.x(a, 3) && (a = _.x(a, 3), _.l(e, 1, a));
        a = {
          fatal: !1,
          DG: 1500
        };
        for (var h in b) a[h] = b[h];
        return {
          If: c,
          Sd: d,
          jf: e,
          metadata: a
        }
      }
    };
    _.zOf = _.GM({
      xg: !0,
      name: "dfviqb",
      mg: _.FCa,
      params: {
        Rb: _.wOf
      },
      Og: void 0,
      data: {
        Zc: function() {},
        Ce: xOf,
        Wyb: _.Omc(xOf),
        i3: yOf,
        hzb: _.Omc(yOf)
      },
      Ng: _.vOf,
      Kg: {},
      children: {}
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy14m");
    _.T9 = function(a) {
      _.E(this, a, 0, -1, null, null)
    };
    _.C(_.T9, _.D);
    _.T9.prototype.ef = function() {
      return _.u(this, _.Qb, 3)
    };
    _.T9.prototype.Ue = function() {
      return _.u(this, _.sw, 4)
    };
    _.T9.prototype.dE = function() {
      return _.x(this, 7)
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var dbe;
    _.cbe = function(a, b) {
      return _.Nf(a.ta, b)
    };
    dbe = function() {};
    dbe.prototype.FD = function() {
      return null
    };
    dbe.prototype.ka = function() {
      return null
    };
    dbe.prototype.ma = function(a, b) {
      return b
    };
    _.R("syx6");
    _.BY = function() {};
    _.z(_.BY, dbe);
    var fbe = function(a, b) {
      var c = a.get(_.Qa);
      c = _.Pa(c);
      var d = _.Vk(ebe(a, b));
      if (b.view == _.sc) {
        var e = new _.M$a(a);
        _.Tk(d, _.Vk(e.ma(b.view, b)))
      }
      c || (b = a.get(_.Ub), _.Tk(d, b.Uv()), _.iu(new _.hu(a)).then(function(f) {
        f && (f = a.get(_.Nr), _.Tk(d, f.H))
      }));
      return d
    };
    _.BY.prototype.FD = function(a, b, c) {
      var d = this;
      b = a.get(_.Qa);
      if (_.Pa(b) && !c.view.ua) return _.kma();
      b = fbe(a, c);
      var e = new _.Pk;
      b.tb(function() {
        var f = d.ma(a, c);
        e.callback(d.H(a, f))
      });
      return e
    };
    var ebe = function(a, b) {
        var c = gbe(b);
        if (0 == _.og(c)) return Promise.resolve();
        var d = a.get(_.Qp);
        return d.LF().then(function() {
          hbe(d, b, c)
        })
      },
      gbe = function(a) {
        var b = {};
        if (!a.sort) {
          var c = _.eda(a);
          c && (b.sort = c)
        }
        a.layout && 0 != a.layout || a.view == _.pc || (b.layout = _.YLa);
        !a.ai && (a = _.hda(a)) && (b.ai = a);
        b.Usa = _.$La;
        return b
      },
      hbe = function(a, b, c) {
        c.sort && (b.sort = a.Aj(c.sort));
        c.layout && (b.layout = a.Aj(c.layout));
        c.ai && (b.ai = a.Aj(c.ai));
        b.Usa = a.Aj(_.$La)
      };
    _.BY.prototype.ka = function(a, b) {
      return b ? _.cbe(a, function(c) {
        var d = c.KE(b);
        d && c.MJ(b);
        return d
      }) : null
    };
    _.BY.prototype.ma = function(a, b) {
      b = _.xg(b);
      var c = gbe(b);
      a = a.get(_.Qp);
      a.ma && hbe(a, b, c);
      return b
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy17y");
    var x8f, y8f, A8f, B8f;
    for (_.u8f = new _.cu(new _.Ut(0, "")), _.v8f = new _.fu(_.u8f), _.w8f = new Set, x8f = _.w(Object.values(_.yKa)), y8f = x8f.next(); !y8f.done; y8f = x8f.next()) _.w8f.add(y8f.value);
    for (_.z8f = new Set, A8f = _.w(Object.values({
        gnb: 0,
        tDa: 1,
        eDa: 2
      })), B8f = A8f.next(); !B8f.done; B8f = A8f.next()) _.z8f.add(B8f.value);

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("syw3");
    _.q6d = {
      Qr: [_.q2a, _.r2a],
      np: [_.Rz, _.Kz, _.wz, _.Az, _.qz, _.Jz, _.lz, _.Sz, _.kz]
    };
    _.r6d = {
      Qr: [_.Xz],
      np: [_.Rz, _.Kz, _.wz, _.Az, _.qz, _.Jz, _.kz]
    };
    _.s6d = {
      Qr: [_.Xz],
      np: [_.Rz, _.Kz, _.wz, _.Az, _.$y, _.sz, _.qz, _.Jz, _.lz, _.Sz, _.kz]
    };
    _.t6d = {
      Qr: [_.S2a, _.R2a, _.i2a],
      np: [_.Rz, _.Kz, _.wz, _.Az, _.$y, _.sz, _.qz, _.Jz, _.lz, _.Sz, _.kz]
    };
    _.u6d = {
      Qr: [_.Xz],
      np: [_.Rz, _.Kz, _.wz, _.Az, _.$y, _.sz, _.qz, _.Jz, _.lz, _.kz]
    };

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("em17");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    _.R("sy126");

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var AOf = function(a, b) {
        _.l(a, 1, b)
      },
      BOf = function(a, b) {
        _.l(a, 1, b)
      },
      COf = function(a, b) {
        _.l(a, 2, b)
      },
      DOf = function(a, b) {
        _.l(a, 3, b)
      },
      EOf = function(a, b) {
        _.l(a, 1, b)
      },
      FOf = function(a, b) {
        _.l(a, 2, b)
      },
      GOf = function(a, b) {
        _.l(a, 3, b)
      },
      HOf = function(a, b) {
        _.l(a, 4, b)
      };
    _.R("sy14l");
    var IOf = {
      JX: {
        Ui: function(a) {
          return a && a.Ui || void 0
        },
        Zc: function(a) {
          return a && a.Zc || void 0
        },
        Rc: function(a) {
          return a && a.Rc || void 0
        }
      },
      SQ: {},
      JC: {
        Zc: function(a) {
          return a && a.Zc || void 0
        }
      },
      gO: {
        Zc: function(a) {
          return a && a.Zc || void 0
        }
      }
    };
    _.JOf = _.GM({
      xg: !1,
      name: "erTX4e",
      mg: _.BCa,
      params: {
        Rb: _.T9
      },
      Og: _.DCa,
      data: {
        Ui: function(a, b, c) {
          b = c || {};
          c = new _.Bn("Rtk8Cd", _.h9, [{
            key: _.zn,
            value: !0
          }]);
          var d = b.Sd || "driveweb",
            e = new _.LHf;
          null != _.p(a, 1) && (a = _.p(a, 1), _.l(e, 1, a));
          a = {
            fatal: !0
          };
          for (var f in b) a[f] = b[f];
          return {
            If: c,
            Sd: d,
            jf: e,
            metadata: a
          }
        },
        Zc: function(a, b, c) {
          a = c || {};
          b = new _.Bn("jhkq9e", _.g9, [{
            key: _.zn,
            value: !0
          }]);
          c = a.Sd || "driveweb";
          var d = new _.k9,
            e = {
              fatal: !0
            },
            f;
          for (f in a) e[f] = a[f];
          return {
            If: b,
            Sd: c,
            jf: d,
            metadata: e
          }
        },
        Rc: function(a, b, c) {
          b = c || {};
          c = new _.Bn("DXNbTd", _.i9, [{
            key: _.zn,
            value: !0
          }]);
          var d = b.Sd || "driveweb",
            e = new _.l9;
          null != _.p(a, 1) && (a = _.p(a, 1), _.l(e, 2, a));
          _.l(e, 1, 1);
          a = {
            fatal: !0
          };
          for (var f in b) a[f] = b[f];
          return {
            If: c,
            Sd: d,
            jf: e,
            metadata: a
          }
        }
      },
      Ng: function() {
        return {
          variant: null,
          Rf: [],
          og: {
            JX: _.IFf,
            SQ: _.uIf,
            JC: _.sOf,
            gO: _.vOf
          }
        }
      },
      Kg: IOf,
      children: {
        JX: function() {
          var a = IOf.JX;
          return {
            id: _.JFf,
            name: "BXcm1d",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.HFf;
              null != _.x(b, 5) && AOf(c, _.x(b, 5));
              return {
                Mc: c,
                id: _.JFf,
                name: "BXcm1d",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }(),
        SQ: {
          id: _.wIf,
          name: "BzmxXc",
          Pd: !1,
          yh: function(a) {
            var b = new _.p9;
            if (null != _.x(a, 5)) {
              var c = _.x(a, 5);
              _.l(b, 4, c)
            }
            null != _.p(a, 6) && (c = _.p(a, 6), _.l(b, 5, c));
            null != _.p(a, 1) && b.Cg(_.p(a, 1));
            null != a.Ue() && (c = a.Ue(), _.H(b, 3, c));
            null != a.ef() && (a = a.ef(), _.H(b, 2, a));
            return {
              Mc: b,
              id: _.wIf,
              name: "BzmxXc",
              Pd: !1
            }
          }
        },
        JC: function() {
          var a = IOf.JC;
          return {
            id: _.tOf,
            name: "bJy2od",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.rOf;
              null != _.p(b, 1) && COf(c, _.p(b, 1));
              null != _.x(b, 5) && DOf(c, _.x(b,
                5));
              null != _.p(b, 2) && BOf(c, _.p(b, 2));
              return {
                Mc: c,
                id: _.tOf,
                name: "bJy2od",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] = a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }(),
        gO: function() {
          var a = IOf.gO;
          return {
            id: _.zOf,
            name: "EVJ3eb",
            Pd: !1,
            ye: a,
            yh: function(b, c, d) {
              c = new _.wOf;
              null != b.dE() && HOf(c, b.dE());
              null != _.p(b, 1) && FOf(c, _.p(b, 1));
              null != _.x(b, 5) && GOf(c, _.x(b, 5));
              null != _.p(b, 2) && EOf(c, _.p(b, 2));
              return {
                Mc: c,
                id: _.zOf,
                name: "EVJ3eb",
                Pd: !1,
                ye: a,
                xi: function() {
                  return d.then(function(e) {
                    var f = {},
                      h;
                    for (h in a) f[h] =
                      a[h](e);
                    return f
                  })
                }
              }
            }
          }
        }()
      }
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var C8f = function() {
        for (var a = new Set, b = _.w(_.KJe.H.keys()), c = b.next(); !c.done; c = b.next()) a.add(c.value);
        return a
      },
      D8f = function(a, b, c, d) {
        _.I.call(this);
        this.wa = a;
        this.Kl = b;
        this.Ca = c;
        this.Ae = null;
        this.ha = d;
        this.Ah = this.wa.Ah;
        this.H = _.KJe.ef(this.Ah);
        this.Ci = this.H.Ci;
        this.va = new Set;
        a = _.w(_.p(this.Ci, 10));
        for (b = a.next(); !b.done; b = a.next()) this.va.add(b.value);
        this.ua = this.ka = this.ma = this.ta = null
      },
      F8f, G8f;
    _.z(D8f, _.I);
    _.g = D8f.prototype;
    _.g.Ug = function() {
      this.Ae || (this.Ae = this.Ca());
      return this.Ae
    };
    _.g.ara = function(a) {
      return null == a ? 0 : (this.va.has(a) ? a : _.p(this.Ci, 9)) || 0
    };
    _.g.aRa = function(a) {
      var b = _.p(this.Ci, 10);
      if (0 == b.length) return 0;
      a = (b.indexOf(a) + 1) % b.length;
      return b[a]
    };
    _.g.Hk = function(a) {
      !this.ma && this.H.Hk && (this.ma = this.H.Hk(this, a));
      return this.ma
    };
    _.g.yt = function(a) {
      !this.ka && this.H.yt && (this.ka = this.H.yt(this, a));
      return this.ka
    };
    _.g.Kj = function(a) {
      this.ta || (this.ta = this.H.Kj(a));
      return this.ta
    };
    _.g.tm = function(a) {
      null == this.ua && this.H.tm && (this.ua = this.H.tm(this, a));
      return !!this.ua
    };
    _.g.Ju = function(a, b) {
      return this.H.Ju(a, b)
    };
    _.g.c4a = function(a, b) {
      var c = this,
        d = new _.dp(void 0, void 0, void 0, a);
      return Promise.all([_.II(b, _.fp, a), _.nn(d, {
        service: {
          je: _.bp
        }
      })]).then(function(e) {
        var f = _.w(e);
        e = f.next().value;
        f = f.next().value.service;
        var h = c.Ah.H,
          k = e.di(h.di().Rb);
        return f.je.ME(h, e, k, b).Eu()
      })
    };
    var E8f = function(a) {
      this.Fa = a;
      this.H = a.get(_.nqa);
      this.ha = new _.T3b(Array.from(C8f().values()));
      this.Wi = _.Rb(_.bp, a)
    };
    E8f.prototype.match = function(a) {
      var b = this,
        c = "/" + this.H.Pc(a),
        d = this.ha.match(c);
      if (!d) throw Error("vp`" + c);
      c = F8f(c, a);
      var e = G8f(this, d.HW, c, a.Nj),
        f = d.Ah.ua()(e, c) || null;
      return new D8f(d, a, function() {
        return b.Wi.then(function(h) {
          return h.H(d.Ah.H, e, f).Eu()
        })
      }, f)
    };
    F8f = function(a, b) {
      a = new _.aj(a);
      var c = new _.hj;
      c.set("view", b.view.toString());
      b.ai && c.set("dateColumn", b.ai);
      null != b.layout && c.set("layout", String(b.layout));
      b.path && _.nja(c, "path", b.path);
      b.sort && c.set("sort", _.v8f.ka(b.sort));
      _.jj(a, "POkgx", c.toString());
      return a.toString()
    };
    G8f = function(a, b, c, d) {
      var e = {};
      return new _.dp((e.ogCMrd = String(d), e), void 0, function(f) {
        var h = b[String(f)];
        return void 0 != h ? decodeURIComponent(h) : _.Xi(c, encodeURIComponent(String(f)))
      }, a.Fa)
    };
    _.H8f = function(a) {
      a = new _.aj(a);
      a = _.lj(a, "POkgx") || "";
      var b = new _.hj(a);
      a = {
        view: _.ct.pP[String(b.get("view", ""))]
      };
      var c = b.get("dateColumn");
      c && _.w8f.has(String(c)) && (a.ai = String(c));
      c = b.get("layout");
      null != c && _.z8f.has(Number(c)) && (a.layout = Number(c));
      b.get("path") && (a.path = b.Ff("path").map(String));
      (b = _.v8f.H(String(b.get("sort")))) && b !== _.u8f && (a.sort = b);
      return a
    };
    _.R("sy17z");
    _.O$ = function(a) {
      this.ta = new E8f(a);
      this.ua = a.get(_.bn)
    };
    _.z(_.O$, _.BY);
    _.O$.prototype.H = function(a, b) {
      var c = this.ta.match(b);
      a = this.ha(a, c, b);
      a.Ta(c);
      c = _.F(_.u(this.ua, _.Kna, 55), 1, !1);
      b.Jga && c && a.Qc(document.querySelector("[role=main]"));
      return a
    };
    _.O$.prototype.ha = function(a, b, c) {
      return new _.i2(a, b, c)
    };
    _.O$.prototype.ka = function(a, b) {
      var c = this;
      if (!b) return null;
      var d = null;
      a = _.cbe(a, function(e) {
        d || (d = c.ta.match(b));
        var f;
        if (f = e instanceof _.i2 && e.KE(b)) f = e.H, f = d.Ah != f.Ah ? !1 : d.H.W4(d, f);
        return f ? (e.MJ(b), !0) : !1
      });
      _.sj(d);
      return a
    };
    _.bt({
      id: _.STa,
      Rb: _.O$
    });

    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
  try {
    var K8f = function(a, b) {
        a = "string" == typeof b ? a.Xa().querySelector(b) : b;
        return _.Ioa(_.Nj(a)).Hj(a)
      },
      L8f = {
        Qr: [_.Xz],
        np: [_.Rz, _.Kz, _.wz, _.Az, _.qz, _.Jz, _.lz, _.Sz, _.kz]
      },
      M8f = {
        Qr: [_.q2a],
        np: [_.k2a, _.S1a, _.lz, _.Sz]
      },
      N8f = function(a, b, c, d) {
        _.i2.call(this, a, b, c, d);
        this.Ea = this.Oa().get(_.Jba).dE()
      };
    _.z(N8f, _.i2);
    N8f.prototype.we = function() {
      return this.Na.we().map(function(a) {
        return a.getId()
      })
    };
    N8f.prototype.Bb = function() {
      return this.Xj()
    };
    N8f.prototype.ka = function() {
      var a = this;
      _.i2.prototype.ka.call(this);
      var b = [_DRIVE_IL.ticker.onTick(_.Uv.aj.P5)],
        c = this.Ea ? "CKBdlc" : "RoZ0ud";
      if (c = this.Xa().querySelector('[jscontroller="' + c + '"]')) c = K8f(this, c), this.Ea && (c = c.then(function(d) {
        if (d.q2) return d.q2()["catch"](function() {});
        _.Xk("Ko", Error("Ko"))
      })), b.push(c);
      Promise.all(b).then(function() {
        var d = a.Xa();
        _.fm(d, _.g2, 4, void 0, void 0)
      }, _.Js(this.Oa(), 393))
    };
    _.R("oZ1Xce");
    var O8f = function(a) {
      _.O$.call(this, a)
    };
    _.z(O8f, _.O$);
    O8f.prototype.ha = function(a, b, c) {
      return new N8f(a, b, c)
    };
    _.bt({
      id: _.Mca,
      Rb: O8f
    });
    var P8f = [2, 19, 15, 13, 3, 1, 7];
    var Q8f = new _.PJ({
      UQ: " / /my-drive /my-drive/ /folders/:folderId /folders/:folderId/".split(" "),
      x3: _.JOf,
      g8: function(a, b) {
        var c = a.Oa(),
          d = new _.Vb(c),
          e = _.H8f(b || "");
        b = _.Aca(c, e);
        var f = new _.T9,
          h = _.Bca(d, e);
        _.l(f, 1, h);
        d = d.uh(e);
        _.l(f, 5, d);
        d = c.get(_.Jba).dE();
        _.l(f, 7, d);
        _.l(f, 2, "o2sZWd-" + h);
        a = a.getData("ogCMrd").Ye();
        _.l(f, 6, a);
        c = c.get(_.Qa);
        c = _.Pa(c) ? _.yca() : _.zca();
        _.H(f, 3, c);
        _.H(f, 4, b);
        return f
      }
    }, !0);
    var S8f;
    _.R8f = function(a, b) {
      return a.ha && b.ha && a.Ah == b.Ah ? _.Oe(a.ha, b.ha) : !1
    };
    S8f = {
      Ci: _.zca(),
      tm: function(a, b) {
        return _.Tb(b.get(_.Qa))
      },
      Hk: function(a, b) {
        var c = new _.Vb(b),
          d = c.uh(a.Kl) ? "my_drive_details" : "folder_details",
          e = b.get(_.Pp).Ag(_.J9a);
        b = _.ncb(b, _.Bca(c, a.Kl), e, d);
        a.Ta(b);
        return b.H
      },
      Kj: function(a) {
        var b = a.get(_.LB),
          c = function() {
            var e = b.we();
            if (0 < e.length) {
              var f = e[e.length - 1].getTitle();
              f && e[0].getId() == e[0].Uc() && (e = e[0].getTitle(), e !== f && (f = f + " - " + e));
              return f || "Folder"
            }
            return "Folder"
          },
          d = new _.$q(c());
        _.Bj(b, "ukrrof", function() {
          d.set(c())
        });
        return d
      },
      Ju: function(a,
        b) {
        return _.Pa(a.get(_.Qa)) ? M8f : a.get(_.Ub).ih().getId() != b ? _.q6d : L8f
      },
      yt: function(a, b) {
        var c = b.get(_.Qa),
          d = _.Pa(c);
        _.RJe(b.get(_.LB), a.Kl.path || []);
        c = new _.Vb(b);
        var e = c.uh(a.Kl),
          f = _.RE,
          h = _.TE,
          k = _.Gob,
          m = _.Iob,
          n = _.LKa.Xg,
          r = _.LKa.Lh,
          t = L8f;
        d ? (f = [], h = [], k = [], m = void 0, n = n.filter(function(y) {
          return -1 < P8f.findIndex(function(A) {
            return A == y.Jj()
          })
        }), n.includes(r.rm) || (r = new _.cu(n[0])), t = M8f) : e ? (k = _.PE, m = void 0) : e || (t = _.q6d);
        d = b.get(_.tr).H;
        ({}).ow = new _.$q(!d.get());
        b = new _.L9a(b);
        return {
          kj: e ? _.oc : _.nc,
          Lh: r,
          Xg: n,
          tm: !0,
          ri: b.H(a.Kl),
          hu: f,
          ny: h,
          Xt: t,
          CC: new _.qo(_.Bca(c, a.Kl)),
          caption: "Folder",
          Yw: k,
          zfb: m,
          Z4: _.PE,
          Su: [],
          Cy: new _.er,
          Nj: a.Kl.Nj,
          Kl: a.Kl,
          ai: a.Kl.ai
        }
      },
      W4: function(a, b) {
        return _.R8f(a, b)
      }
    };
    _.KJe.H.set(Q8f, S8f);




    _.Q();

  } catch (e) {
    _._DumpException(e)
  }
})(this._D);
// Google Inc.