function formcacheset(e, l, t, _) {
    return null == e || null == l || null == t || 0 === l.length || 0 === t.length || null == _ ? null : "FF" == l || "none" == l ? null : (void 0 === e.g_form_attr_cache && (e.g_form_attr_cache = []), null == e.g_form_attr_cache[l] && (e.g_form_attr_cache[l] = {}), e.g_form_attr_cache[l][t] = _, !0)
}

function formcacheget(e, l, t) {
    if (null == e || null == l || null == t || 0 === l.length || 0 === t.length) return null;
    if (g_ignore_lp_cache) return null;
    if ("FF" == l || "none" == l) return LPCTR("formcache_miss"), null;
    if (void 0 === e.g_form_attr_cache) return LPCTR("formcache_miss"), null;
    if (null == e.g_form_attr_cache[l] || null == e.g_form_attr_cache[l][t]) return LPCTR("formcache_miss"), null;
    var _ = e.g_form_attr_cache[l][t];
    return "object" == typeof _ && _.tagName && _.nodeName && element_is_detached(e, _, 0) ? (e.g_form_attr_cache[l][t] = null, LPCTR("formcache_miss"), null) : (LPCTR("formcache_hit"), _)
}

function formcachereset(e) {
    return null != e && (e.g_form_attr_cache = []), !0
}

function fieldcacheget(e, l, t) {
    return null == e || null == l || null == t || 0 === t.length ? null : g_ignore_lp_cache ? null : void 0 === e.g_field_attr_cache ? (LPCTR("fieldcache_miss"), null) : null != e.g_field_attr_cache[l] && null != e.g_field_attr_cache[l][t] ? (LPCTR("fieldcache_hit"), e.g_field_attr_cache[l][t]) : (LPCTR("fieldcache_miss"), null)
}

function fieldcacheset(e, l, t, _) {
    return null == e || null == l || null == t || 0 === t.length ? null : (void 0 === e.g_field_attr_cache && (e.g_field_attr_cache = []), null == e.g_field_attr_cache[l] && (e.g_field_attr_cache[l] = {}), e.g_field_attr_cache[l][t] = _, !0)
}

function fieldcachedelete(e, l, t) {
    return !!(e && l && t) && (!!g_ignore_lp_cache || void 0 !== e.g_field_attr_cache && (null !== e.g_field_attr_cache[l] && delete e.g_field_attr_cache[l][t], !0))
}

function fieldcachereset(e) {
    return null != e && (e.g_field_attr_cache = []), !0
}
var tldcache = [];

function gettldcached(l) {
    try {
        if (void 0 !== tldcache[l]) return tldcache[l];
        if ("undefined" != typeof punycode) var e = lp_gettld_url(punycode.URLToASCII(l));
        else var e = lp_gettld_url(l);
        return tldcache[l] = e
    } catch (e) {
        return lp_gettld_url(l)
    }
}

function LP_measureTextCacheSet(e, l, t, _) {
    return null == e || null == l || null == t || 0 === l.length || 0 === t.length || null == _ ? null : (void 0 === e.g_LP_measureText_cache && (e.g_LP_measureText_cache = []), null == e.g_LP_measureText_cache[t] && (e.g_LP_measureText_cache[t] = {}), e.g_LP_measureText_cache[t][l] = _, !0)
}

function LP_measureTextCacheGet(e, l, t) {
    return null == e || null == l || null == t || 0 === l.length || 0 === t.length ? null : void 0 === e.g_LP_measureText_cache ? (LPCTR("measureText_miss"), null) : null != e.g_LP_measureText_cache[t] && null != e.g_LP_measureText_cache[t][l] ? (LPCTR("measureText_hit"), e.g_LP_measureText_cache[t][l]) : (LPCTR("measureText_miss"), null)
}

function LP_eltmap_init(e) {
    return !(!e || g_isie) && ("undefined" == typeof Map ? (e.m_eltmap = null, !1) : (e.m_eltmap = new Map, !0))
}

function LP_eltmap_destroy(e) {
    return !!e && ("undefined" != typeof Map && e.m_eltmap && e.m_eltmap.clear(), !0)
}

function LP_eltmap_prune_zombies(t) {
    if (!t || null === t.m_eltmap || void 0 === t.m_eltmap) return !1;
    try {
        t.m_eltmap.forEach(function(e, l) {
            void 0 !== l && (null !== l && null !== t.m_eltmap.get(l).parentNode || t.m_eltmap.delete(l))
        })
    } catch (e) {
        return verbose_log(e.message), !1
    }
    return !0
}

function LP_eltmap_get(e, l) {
    return e && (null !== e.m_eltmap && void 0 !== e.m_eltmap || LP_eltmap_init(e)) ? e.m_eltmap.get(l) : null
}

function LP_eltmap_set(e, l, t) {
    return e && (null !== e.m_eltmap && void 0 !== e.m_eltmap || LP_eltmap_init(e)) ? (e.m_eltmap.set(l, t), !0) : null
}

function LP_eltmap_input_prescan(e) {}
//# sourceMappingURL=sourcemaps/cache_cs.js.map