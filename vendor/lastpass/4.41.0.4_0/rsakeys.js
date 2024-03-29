function upload_rsa_keys(e, r, a, s) {
    if (lploggedin) {
        var s = "undefined" == typeof forcewriteprivatearg || 0 == forcewriteprivatearg ? 0 : forcewriteprivatearg;
        a ? console_log("RSA : upload_rsa_keys : from=" + e + " : getting rsa keys from server : forcewriteprivate=" + s) : console_log("RSA : upload_rsa_keys : from=" + e + " : created new rsa keys and uploading to server : forcewriteprivate=" + s);
        var t = "",
            n = "",
            o = "";
        a ? console_log("RSA : upload_rsa_keys : NOT wrapping and CBC encrypting privatekey -- that should have already been done") : (console_log("RSA : upload_rsa_keys : wrapping and CBC encrypting privatekey"), t = void 0 !== r.publickey ? r.publickey : encode_public_key(r), o = rsa_encrypt_privatekey(void 0 !== r.privatekey ? r.privatekey : encode_private_key(r), g_local_key));
        var p = g_local_key,
            l = "";
        null != p && "" != p && (l = (l = AES.bin2hex(p)).toUpperCase());
        var i = "" == l ? "" : SHA256(l),
            c = "" == l ? "" : SHA256(o);
        console_log("RSA : upload_rsa_keys : -- uploading privatekeyenchexhash"), console_log("RSA : upload_rsa_keys : -- uploading publickey");
        var u = "privatekeyenc=" + LP.en(o);
        u += "&publickey=" + LP.en(t), u += "&forcewriteprivate=" + LP.en(s), u += "&userkeyhexhash=" + LP.en(i), u += "&privatekeyenchexhash=" + LP.en(c), u += "&from=" + LP.en("crplugin"), lpMakeRequest(base_url + "uploadrsakeys.php", u, upload_rsa_keys_response, null)
    } else console_log("RSA : upload_rsa_keys : from=" + e + " : returning because we are not logged in")
}

function upload_rsa_keys_response(e) {
    if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
        var r, a = e.responseXML.documentElement.getElementsByTagName("ok"),
            s = "";
        0 < a.length && (s = a[0].getAttribute("privatekeyenchex"), console_log("RSA : upload_rsa_keys_response : got uploadrsakeys response : server returned privatekeyenchex"), null != s && "" != s && (console_log("RSA : upload_rsa_keys_response : calling writersaprivatekeyenchextodb()"), writersaprivatekeyenchextodb(s), console_log("RSA : upload_rsa_keys_response : calling readrsaprivatekeyhexfromdb()"), readrsaprivatekeyhexfromdb(!0, null, null, function() {
            g_shares && 0 < g_shares.length && (console_log("RSA : upload_rsa_keys_response found shares: reparse!"), get_accts_local(!0, "refetchsharing"))
        })))
    }
}

function writersaprivatekeyenchextodb(e) {
    console_log("RSA : writersaprivatekeyenchextodb : writing privatekeyenchex to db"), null != g_username && "" != g_username ? lpSaveData(e, "rsakey") : console_log("RSA : writersaprivatekeyenchextodb : FAILED because g_username is blank")
}

function readrsaprivatekeyhexfromdb(e, t, n, o) {
    if (g_nosharingkeys) console_log("RSA : readrsaprivatekeyhexfromdb : FAILED because g_nosharingkeys==TRUE");
    else if (null != g_username && "" != g_username && null != g_local_key) {
        var r;
        if (!((void 0 !== e && e ? 1 : 0) || "" == lp_rsaprivatekeyhex || n && SHA256(lp_rsaprivatekeyenchex) != n)) return console_log("RSA : readrsaprivatekeyhexfromdb : returning a cached value"), void(o && o(lp_rsaprivatekeyhex));
        rsa_clearvars(), console_log("RSA : readrsaprivatekeyhexfromdb : trying to read from db");
        var a = opendb();
        if (createDataTable(a), a) {
            var s = function(e, r) {
                if (0 < r.rows.length) {
                    var a = r.rows.item(0).data;
                    if ("" == a || null == a) return console_log("RSA : readrsaprivatekeyhexfromdb : FAILED to find in db"), void DeleteFromDB("rsakey");
                    if (n && SHA256(a) != n) return console_log("RSA : readrsaprivatekeyhexfromdb : found in db, but hash does not match!"), DeleteFromDB("rsakey"), void(0 == g_privkeyattempts ? (console_log("RSA : readrsaprivatekeyhexfromdb : GET IT FROM THE SERVER A"), g_privkeyattempts = 1, setTimeout(function() {
                        console.error("BAH!!!"), upload_rsa_keys("GetA", null, !0)
                    }, 500)) : console_log("RSA : readrsaprivatekeyhexfromdb : NOT GETTING IT FROM THE SERVER BECAUSE g_privkeyattempts=" + g_privkeyattempts));
                    console_log("RSA : readrsaprivatekeyhexfromdb : found it in the db"), console_log("RSA : readrsaprivatekeyhexfromdb : trying to decrypt using CBC");
                    var s = rsa_extract_privatekey(a, g_local_key);
                    if (!s) return console_log("RSA : readrsaprivatekeyhexfromdb : FAILED to decrypt/extract private key"), lpReportError("readrsaprivatekeyhexfromfile : failed to extract rsa key from file - did we change our password on another PC? datahex.length=" + a.length), void DeleteFromDB("rsakey");
                    console_log("RSA : readrsaprivatekeyhexfromdb : successfully decrypted using CBC and extracted plaintext private key"), lp_rsaprivatekeyenchex = a, lp_rsaprivatekeyhex = s, lp_rsaprivatekeyenchexserverhash = SHA256(lp_rsaprivatekeyenchex), console_log("RSA : readrsaprivatekeyhexfromdb : SUCCESS"), o && o(lp_rsaprivatekeyhex), g_shares && 1 == g_shares.length && 0 == g_shares[0].id && (console_log("RSA : readrsaprivatekeyhexfromdb : Shared folder found, we just got the key, reparse!"), get_accts_local())
                } else console_log("RSA : readrsaprivatekeyhexfromdb : FAILED to find in db"), t && (console_log("RSA : readrsaprivatekeyhexfromdb : GET IT FROM THE SERVER B"), upload_rsa_keys("GetB", null, !0))
            };
            if (g_indexeddb) {
                var p = {
                    rows: {
                        item: function(e) {
                            return this[e]
                        },
                        length: 0
                    }
                };
                a.transaction("LastPassData", "readonly").objectStore("LastPassData").openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_rsakey")).onsuccess = function(e) {
                    var r = e.target.result;
                    r ? (p.rows[p.rows.length] = r.value, p.rows.length++, r.continue()) : s(null, p)
                }
            } else a.transaction(function(e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "rsakey"], s, function(e, r) {
                    console_log(r)
                })
            })
        }
    } else console_log("RSA : readrsaprivatekeyhexfromdb : FAILED because g_username is blank")
}

function rsa_userchangedpassword() {
    console_log("rsa_userchangedpassword : called"), DeleteFromDB("rsakey"), rsa_clearvars()
}

function rsa_clearvars() {
    console_log("rsa_clearvars : called"), lp_rsaprivatekeyhex = "", lp_rsaprivatekeyenchex = "", lp_rsaprivatekeyenchexserverhash = ""
}
var lppendingsharests = 0;

function rsa_setpendingsharests(e) {
    lppendingsharests = void 0 !== e && e ? 0 : (new Date).getTime()
}

function rsa_acceptpendingshares(e) {
    var r;
    if (lploggedin && !lploggedinoffline && null != g_local_key)
        if ("" != lp_rsaprivatekeyhex) {
            if (rsaprivatekeyhex = lp_rsaprivatekeyhex, 0 != g_pendings.length)
                if ((new Date).getTime() - lppendingsharests < 1e4) console_log("lprsa_acceptpendingshares : skipping because we were already called very recently");
                else {
                    rsa_setpendingsharests();
                    var a = [];
                    for (var s in g_pendings) {
                        var t = g_pendings[s];
                        if (1 == t.shareautoaccept) {
                            var n = "",
                                o = "";
                            if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSADecrypt) n = g_nplastpass.xCryptoRSADecrypt(rsaprivatekeyhex, t.sharekeyenchex), o = AES.hex2bin(n);
                            else {
                                var p = new RSAKey;
                                if (!parse_private_key(p, lp_rsaprivatekeyhex)) return void console_error("Private key could not be parsed while auto accepting shares");
                                var l = t.sharekeyenchex;
                                o = p.decrypt(l), n = AES.bin2hex(o)
                            }
                            if ("" == o) return void console_error("Share key bin empty while auto accepting shares");
                            var i = dec(t.sharename, o),
                                c = dec(t.sharegroup, o),
                                u = dec(t.username, o),
                                h = dec(t.password, o),
                                d = dec(t.extra, o),
                                _ = !0,
                                g = {};
                            for (s in t.shareafids)
                                if (g[s] = dec(t.shareafids[s], o), "" != t.shareafids[s] && "" == g[s]) {
                                    _ = !1;
                                    break
                                } if ("" != t.sharename && "" == i || "" != t.sharegroup && "" == c || "" != t.username && "" == u || "" != t.password && "" == h || "" != t.extra && "" == d || !_) lpReportError("lprsa_acceptpendingshares : failing autoaccept of share because we failed to decrypt at least one value");
                            else {
                                var y = enc(i),
                                    v = enc(c),
                                    f = enc(u),
                                    k = enc(h),
                                    x = enc(d),
                                    _ = !0,
                                    m = {};
                                for (s in g)
                                    if (m[s] = enc(g[s]), "" != g[s] && "" == m[s]) {
                                        _ = !1;
                                        break
                                    } if ("" != i && "" == y || "" != c && "" == v || "" != u && "" == f || "" != h && "" == k || "" != d && "" == x || !_) lpReportError("lprsa_acceptpendingshares : failing autoaccept of share because we failed to reencrypt at least one value");
                                else {
                                    var b = {
                                            aid: t.id,
                                            name: y,
                                            group: v,
                                            username: f,
                                            password: k,
                                            extra: x
                                        },
                                        S = 0;
                                    for (s in m) b["afid" + S] = s, b["afidv" + S] = m[s], ++S;
                                    b.numafids = S, a.push(b)
                                }
                            }
                        }
                    }
                    if (0 < a.length) {
                        var R = "cmd=" + LP.en("autoacceptshares") + "&from=" + LP.en("crplugin") + "&numshares=" + LP.en(a.length),
                            A = 0;
                        for (var s in a) {
                            var E = "&share" + A;
                            for (var w in ++A, a[s]) R += E + w + "=" + LP.en(a[s][w])
                        }
                        console_log("rsa_acceptpendingshares : issuing server request to autoaccept " + a.length + " shares"), lpMakeRequest(base_url + "showacceptshare.php", R, rsa_acceptpendingsharesresponse)
                    } else console_log("rsa_acceptpendingshares : no shares to autoaccept so not issuing server request")
                }
        } else e || (console_log("RSA : rsa_acceptpendingshares : calling readrsaprivatekeyhexfromdb()"), readrsaprivatekeyhexfromdb(!1, null, null, rsa_acceptpendingshares))
}

function rsa_acceptpendingsharesresponse(e) {
    if (4 == e.readyState)
        if (console_log("rsa_acceptpendingsharesresponse : received response from server"), 200 == e.status)
            if (null != e.responseXML && null != e.responseXML.documentElement) {
                var r, a = e.responseXML.documentElement.getElementsByTagName("ok");
                a && 0 != a.length ? get_accts() : lpReportError("lprsa_acceptpendingsharesresponse : request failed xml invalid B text=" + e.responseText)
            } else lpReportError("lprsa_acceptpendingsharesresponse : request failed xml invalid A text=" + e.responseText);
    else lpReportError("lprsa_acceptpendingsharesresponse : request failed status=" + e.status)
}

function rsa_setshareeautopushests(e) {
    g_shareeautopushests = void 0 !== e && e ? 0 : (new Date).getTime()
}

function rsa_acceptshareeautopushes() {
    var e = !1,
        r;
    for (var a in g_shareeautopushes) {
        e = !0;
        break
    }
    e && lploggedin && !lploggedinoffline && null != g_local_key && ((new Date).getTime() - lpshareeautopushests < 1e4 || (rsa_setshareeautopushests(), console_log("RSA : rsa_acceptshareeautopushes : calling readrsaprivatekeyhexfromdb()"), readrsaprivatekeyhexfromdb(!1, null, null, rsa_acceptshareeautopushes2)))
}

function rsa_acceptshareeautopushes2(e) {
    var r = [];
    for (var a in g_shareeautopushes)
        for (var s in g_shareeautopushes[a]) {
            var t = g_shareeautopushes[a][s],
                n = "";
            if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSADecrypt) {
                var o = g_nplastpass.xCryptoRSADecrypt(e, t.sharekeyhexenc);
                n = AES.hex2bin(o)
            } else {
                var p = new RSAKey;
                if (!parse_private_key(p, e)) return void console_error("Private key could not be parsed while auto accepting shares");
                n = p.decrypt(t.sharekeyhexenc)
            }
            if ("" != n && null != n) {
                var l = reencryptShareeAutoPushes(n, t, a);
                null != l && (void 0 === r[a] && (r[a] = []), r[a].push(l))
            }
        }
    var i = "cmd=" + LP.en("updateautoshareepushes") + "&from=" + LP.en("ffplugin"),
        c = 0,
        u = 0;
    for (var a in r)
        for (var h in ++c, r[a]) {
            var d = "&share" + u,
                t = r[a][h];
            for (var _ in t) i += d + _ + "=" + LP.en(t[_]);
            ++u
        }
    i += "&numupdates=" + LP.en(u), 0 < u ? (lplastgetaccounts = 0, lpMakeRequest(base_url + "showacceptshare.php", i, rsa_acceptshareeautopushesresponse)) : lpdbg("sharing", "lprsa_acceptshareeautopushes : no shareeautopushes so not issuing server request")
}

function rsa_acceptshareeautopushesresponse(e) {
    if (4 == e.readyState)
        if (lpdbg("sharing", "lprsa_acceptshareeautopushesresponse : received response from server"), 200 == e.status)
            if (null != e.responseXML && null != e.responseXML.documentElement) {
                var r, a = e.responseXML.documentElement.getElementsByTagName("ok");
                a && 0 != a.length ? get_accts() : lpReportError("lprsa_acceptshareeautopushesresponse : request failed xml invalid B text=" + e.responseText)
            } else lpReportError("lprsa_acceptshareeautopushesresponse : request failed xml invalid A text=" + e.responseText);
    else lpReportError("lprsa_acceptshareeautopushesresponse : request failed status=" + e.status)
}

function rsa_shareeautopushesresponse(e, r) {
    if (4 != e.readyState || 200 != e.status || null == e.responseXML || null == e.responseXML.documentElement) return !1;
    if (void 0 === r || null == r) return !1;
    var a = (new Date).getTime(),
        s = r.url,
        t = r.aid,
        n = r.handler,
        o = r.param,
        p = r.postdata,
        l = void 0 !== r.acct ? r.acct : null,
        p;
    return null == l && (l = void 0 !== g_sites[t] ? g_sites[t] : void 0 !== g_securenotes[t] ? g_securenotes[t] : null), null == l && (l = {
        name: "",
        group: "",
        username: "",
        password: "",
        extra: ""
    }), 0 != (p = createShareeAutoPushesResponse(e, r, l)) && (a = ((new Date).getTime() - a) / 1e3, lpdbg("sharing", "Finished RSA encryption. Total time taken = " + a + " seconds"), lpdbg("sharing", "Reissuing request to " + s + " with postdata=" + p), lplastgetaccounts = 0, lpMakeRequest(s, p, n, null, o || r), !0)
}

function lprsa_encryptdata(e, r) {
    var a = null;
    if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSAEncrypt) a = g_nplastpass.xCryptoRSAEncrypt(e, r);
    else {
        var s = new RSAKey;
        if (!parse_public_key(s, e)) return console_error("Private key could not be parsed while auto accepting shares"), !1;
        a = s.encrypt(AES.hex2bin(r))
    }
    return "" == r || null != a && "" != a ? a : (lpReportError("lprsa_encryptdata : Failed to rsaencrypt data using publickeyhex"), !1)
}

function lprsa_rsadecrypt(e) {
    if ("" == lp_rsaprivatekeyhex) return null;
    var r;
    if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSADecrypt) r = g_nplastpass.xCryptoRSADecrypt(lp_rsaprivatekeyhex, e);
    else {
        var a = new RSAKey;
        if (!parse_private_key(a, lp_rsaprivatekeyhex)) return null;
        var s = a.decrypt(e);
        r = AES.bin2hex(s).toUpperCase()
    }
    return r
}

function lprsa_encryptmultiple(e) {
    for (var r = JSON.parse(e), a = 0; a < r.length; ++a) {
        if (void 0 === r[a].valuehex || void 0 === r[a].publickeyhex || "" == r[a].publickeyhex) return null;
        if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSAEncrypt) r[a].valuehexenc = g_nplastpass.xCryptoRSAEncrypt(r[a].publickeyhex, r[a].valuehex);
        else {
            var s = new RSAKey;
            if (!parse_public_key(s, r[a].publickeyhex)) return null;
            r[a].valuehexenc = s.encrypt(AES.hex2bin(r[a].valuehex)).toUpperCase()
        }
        if ("" == r[a].valuehexenc || null == r[a].valuehexenc) return null
    }
    var t;
    return JSON.stringify(r)
}
//# sourceMappingURL=sourcemaps/rsakeys.js.map