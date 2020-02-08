var Recovery = function() {
    "use strict";

    function e(e, r) {
        var a = opendb();
        if (createDataTable(a), a) {
            var n = e ? SHA256(e) : g_username_hash,
                o = e || g_username,
                t = function(e, a) {
                    var n = "";
                    if (0 < a.rows.length && (n = a.rows.item(0).data), "" != n) {
                        n = AES.hex2bin(n);
                        var t = make_lp_hash(fix_username(o), n),
                            s = make_lp_hash(fix_username(o), t);
                        r(s)
                    } else r("")
                };
            if (g_indexeddb) {
                var s = {
                    rows: {
                        item: function(e) {
                            return this[e]
                        },
                        length: 0
                    }
                };
                a.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(n) + "_otp")).onsuccess = function(e) {
                    var a = e.target.result;
                    a ? (s.rows[s.rows.length] = a.value, s.rows.length++, a.continue()) : t(null, s)
                }
            } else a.transaction(function(e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(n), "otp"], t, function(e, a) {
                    console_log(a)
                })
            })
        }
    }
    return {
        getActivationHash: e
    }
}();
//# sourceMappingURL=sourcemaps/Recovery.js.map