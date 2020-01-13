LPContextMenus = function() {
  var s = null,
    c = null,
    i = [],
    a = [],
    u = [],
    d = [],
    p = "all",
    t = !1,
    m = 20;

  function f(e, t) {
    var n = gettabid(t),
      o = gettaburl(t),
      c = a[e.menuItemId];
    sendLpImprove("sitelogin", {
      shareType: getShareType(c),
      copy: 0,
      autologin: 0,
      source: "context"
    }), handleFill(n, {
      url: o,
      topurl: o,
      docid: 0,
      force: !1,
      docnum: 0,
      cmd: "autofillaid",
      aid: c,
      source: "notrack"
    })
  }

  function g(e, t) {
    var n = a[e.menuItemId];
    copyusername(n), sendLpImprove("copyitem", {
      itemtype: "username",
      source: "context"
    })
  }

  function h(e, t) {
    var n = a[e.menuItemId];
    copypassword(n), sendLpImprove("sitelogin", {
      shareType: getShareType(n),
      copy: 1,
      autologin: 0,
      source: "context"
    }), sendLpImprove("copypass", {
      action: "sitepassword",
      source: "context"
    })
  }

  function x(e, t) {
    var n = a[e.menuItemId];
    copyurl(n)
  }

  function I(e, t) {
    var n = a[e.menuItemId],
      o = u[e.menuItemId],
      c = d[e.menuItemId];
    copyprop(n, o, 0, -1, null, c), sendLpImprove("copyitem", {
      itemtype: o,
      source: "context"
    })
  }

  function y(e, t) {
    var n = a[e.menuItemId];
    fillitem(n, null, null, 0, null, "context")
  }

  function r(e, t) {
    var n = a[e.menuItemId];
    fillform(n, null, null, null, null, null, "context")
  }

  function l(e, t) {
    var n = a[e.menuItemId];
    editprofile(n, null, "context")
  }

  function v(e, t) {
    var n = a[e.menuItemId];
    openeditsite(n), sendLpImprove("edititem", {
      itemtype: "Saved Site",
      source: "context"
    })
  }

  function _(e, t) {
    var n = a[e.menuItemId],
      o = u[e.menuItemId];
    openeditsecurenote(n), sendLpImprove("edititem", {
      itemtype: o,
      source: "context"
    })
  }

  function C(e, t) {
    for (var n = 0 === t ? f : 1 == t ? g : 2 == t ? h : x, o = e.slice(0, m).sort(function(e, t) {
        return e.name && t.name ? e.name.localeCompare(t.name) : 0
      }), c = 0; c < o.length; c++) {
      var r = e[c].useusername;
      r = void 0 !== r && r.length ? " (" + r + ")" : "";
      var l = chrome.contextMenus.create({
        title: e[c].name + r,
        contexts: [p],
        parentId: i[t],
        onclick: n
      });
      a[l] = e[c].aid, i[i.length] = l
    }
    e.length > m && (i[i.length] = chrome.contextMenus.create({
      type: "separator",
      contexts: [p],
      parentId: i[t]
    }), i[i.length] = chrome.contextMenus.create({
      title: gs("Additional sites available in the Vault"),
      contexts: [p],
      parentId: i[t],
      onclick: openvault
    }))
  }

  function M(e) {
    if (void 0 === g_prefoverrides.show_formfills || "1" === g_prefoverrides.show_formfills) {
      for (var t = e ? 6 : 3, n = 0, o = 0; o < g_formfills.length; o++)
        if (check_ident_ffid(g_formfills[o].ffid)) {
          i[i.length] = chrome.contextMenus.create({
            title: g_formfills[o].decprofilename,
            contexts: [p],
            parentId: i[t]
          });
          var c = chrome.contextMenus.create({
            title: gs("Fill Form"),
            contexts: [p],
            parentId: i[i.length - 1],
            onclick: r
          });
          a[c] = g_formfills[o].ffid;
          var c = chrome.contextMenus.create({
            title: gs("Edit"),
            contexts: [p],
            parentId: i[i.length - 1],
            onclick: l
          });
          if (a[c] = g_formfills[o].ffid, m <= (n += 1)) break
        } i[i.length] = chrome.contextMenus.create({
        type: "separator",
        contexts: [p],
        parentId: i[t]
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Add Profile"),
        contexts: [p],
        parentId: i[t],
        onclick: function() {
          addprofile(null, "context")
        }
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Add Credit Card"),
        contexts: [p],
        parentId: i[t],
        onclick: function() {
          addcreditcard(null, "context")
        }
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Clear Forms"),
        contexts: [p],
        parentId: i[t],
        onclick: function() {
          clearforms("context")
        }
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Choose Profile and Credit Card"),
        contexts: [p],
        parentId: i[t],
        onclick: function() {
          openchooseprofilecc("context")
        }
      }), m < n && (i[i.length] = chrome.contextMenus.create({
        type: "separator",
        contexts: [p],
        parentId: i[t]
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Additional form fills available in the Vault"),
        contexts: [p],
        parentId: t,
        onclick: openvault
      }))
    }
  }

  function b(e, t) {
    if (lploggedin) {
      i[i.length] = chrome.contextMenus.create({
        title: gs("AutoFill"),
        contexts: [p],
        parentId: s
      }), t && (i[i.length] = chrome.contextMenus.create({
        title: gs("Copy Username"),
        contexts: [p],
        parentId: s
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Copy Password"),
        contexts: [p],
        parentId: s
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Copy URL"),
        contexts: [p],
        parentId: s
      })), i[i.length] = chrome.contextMenus.create({
        title: gs("Recheck Page"),
        contexts: [p],
        parentId: s,
        onclick: function(e, t) {
          recheckpage()
        }
      }), i[i.length] = chrome.contextMenus.create({
        title: gs("Generate Secure Password"),
        contexts: [p],
        parentId: s,
        onclick: opengenpw
      }), void 0 !== g_prefoverrides.show_formfills && "1" !== g_prefoverrides.show_formfills || (i[i.length] = chrome.contextMenus.create({
        title: gs("Fill Forms"),
        contexts: [p],
        parentId: s
      }));
      for (var n = t ? 3 : 0, o = 0; o <= n; o++) 0 < e.length ? C(e, o) : chrome.contextMenus.create({
        title: gs("No Matching Sites!"),
        contexts: [p],
        parentId: i[o]
      });
      M(t)
    }
  }

  function k(e, t, n) {
    return i[i.length] = chrome.contextMenus.create({
      title: gs(e),
      contexts: [p],
      parentId: n || s,
      onclick: t
    })
  }

  function P(e, t, n, o, c, r) {
    var l = chrome.contextMenus.create({
      title: gs(t),
      contexts: [p],
      parentId: i[i.length - 1],
      onclick: c
    });
    null != l && (a[l] = e, null != n && (u[l] = n, d[l] = o))
  }

  function w(e, n) {
    var t = e.length < m ? e.length : m;
    e.slice(0, t).forEach(function(e) {
      var t = e.useusername ? " - " + e.useusername : "";
      k(e.name + t), P(e.aid, "Fill", null, null, f), P(e.aid, "Edit", null, null, v), n && (P(e.aid, "Copy username", "Username", null, g), P(e.aid, "Copy password", "Password", null, h))
    }), chrome.contextMenus.create({
      type: "separator",
      contexts: [p],
      parentId: s
    });
    for (var o = k("Other"), c = Object.keys(g_securenotes), r = [], l = 0; l < c.length && r.length < m; l++) check_ident_aid(g_securenotes[c[l]].aid) && -1 < fillableNoteTypes.indexOf(g_securenotes[c[l]].notetype) && r.push(addUserFriendlyDescription(g_securenotes[c[l]]));
    r.sort(function(e, t) {
      return e.name && t.name ? e.name.localeCompare(t.name) : 0
    });
    for (var i = r.length < m ? r.length : m, l = 0; l < i; l++) {
      var a = r[l];
      if (k(a.description ? a.decprofilename + "  -  " + a.description : a.decprofilename, null, o), P(a.aid, "Fill", null, null, y), P(a.aid, "Edit", a.notetype, null, _), n) switch (a.notetype) {
        case "Credit Card":
          P(a.aid, "Copy card number", "Number", null, I), P(a.aid, "Copy CVV/Security code", "Security Code", null, I);
          break;
        case "Bank Account":
          P(a.aid, "Copy account number", "Account Number", null, I), P(a.aid, "Copy routing number", "Routing Number", null, I);
          break;
        case "Address":
          P(a.aid, "Copy first name", "First Name", null, I), P(a.aid, "Copy last name", "Last Name", null, I), P(a.aid, "Copy address 1", "Address 1", null, I), P(a.aid, "Copy city/town", "City / Town", null, I), P(a.aid, "Copy zip/postal code", "Zip / Postal Code", null, I), P(a.aid, "Copy email address", "Email Address", null, I), P(a.aid, "Copy phone number", "Phone", "num", I)
      }
    }
    chrome.contextMenus.create({
      type: "separator",
      contexts: [p],
      parentId: s
    }), (m < t || m < i) && chrome.contextMenus.create({
      title: gs("Additional items available in the Vault"),
      contexts: [p],
      parentId: s,
      onclick: openvault
    }), k("Add Item", function() {
      openaddsecurenote()
    }), k("Recheck Page", function(e, t) {
      recheckpage()
    }), k("Generate Secure Password", opengenpw)
  }

  function L(e) {
    if (setcurrenturl(e), "undefined" != typeof chrome && void 0 !== chrome.contextMenus && !g_issafari && 1 != lpGetPref("hideContextMenus", 0) && c != e)
      if (c = e, i.length) F(function() {
        c = null, L(e)
      });
      else if (a = [], lploggedin) {
      var t = lp_gettld_url(e),
        n = reorderOnURL(getsites(t), e, !0, !1),
        o = can_copy_to_clipboard() && !g_isedge;
      LPContentScriptFeatures.omaria ? w(n, o) : b(n, o)
    }
  }

  function F(e) {
    lpdbg("context", "createContextMenus called"), "undefined" == typeof chrome || void 0 === chrome.contextMenus || t && 1 != lpGetPref("hideContextMenus", 0) && !e || (lpdbg("context", "not created yet or preference changed"), chrome.contextMenus.removeAll(function() {
      lpdbg("context", "context menu items all removed"), t = !1, i = [], 0 == lpGetPref("hideContextMenus", 0) && (lpdbg("context", "creating context menu"), e = e || n, s = chrome.contextMenus.create({
        title: gs("LastPass"),
        contexts: ["all"],
        onclick: o
      }, e))
    }))
  }

  function n() {
    console_log("Context menu callback function called"), t = !0
  }

  function o(e, t) {
    if (lploggedin) {
      if (g_issafari) {
        var n = [],
          o = [];
        if (LPContentScriptFeatures.omaria) Object.keys(g_securenotes).forEach(function(e) {
          check_ident_aid(g_securenotes[e].aid) && isFillableNoteType(g_securenotes[e].notetype) && o.push(g_securenotes[e])
        });
        else
          for (var c = 0; c < g_formfills.length; c++) check_ident_ffid(g_formfills[c].ffid) && (n[n.length] = g_formfills[c]);
        get_selected_tab(null, function(e) {
          var t = lp_gettld_url(gettaburl(e));
          sendCS(gettabid(e), {
            cmd: "showcontext",
            sites: cache_usernames(reorderOnURL(getsites(t), gettaburl(e), !0, !0)),
            formfills: LPJSON.stringify(n),
            securenotes: LPJSON.stringify(o),
            can_copy: can_copy_to_clipboard()
          }, "all")
        })
      }
    } else open_login()
  }
  return F(), {
    rebuildcontext: L,
    createContextMenus: F,
    cm_handler: o,
    lastcontexturl: c
  }
}();
//# sourceMappingURL=sourcemaps/context-menu.js.map