var generateSharingKeysFromVault = function() {
    "use strict";

    function a(a) {
        var e = new RSAKey;
        generate_key(e, function(e) {
            r(e, a)
        })
    }

    function r(e, r) {
        e || r("RSA generation failed."), g_local_key && g_local_key && base_url && LPServer || r("Global dependencies missing.");
        var a = null != document.getElementById("newvault"),
            n = encode_public_key(e),
            t = encode_private_key(e),
            o = rsa_encrypt_privatekey(t, g_local_key);
        o = o.toUpperCase();
        var l = {};
        l.privatekeyenc = o, l.publickey = n, l.userkeyhexhash = SHA256(AES.bin2hex(g_local_key)), l.privatekeyenchexhash = SHA256(o), l.token = a ? decodeURIComponent(g_token) : g_token, l.from = a ? "webvault" : "vault", l.method = get_method(), "undefined" != typeof lpversion && (l.lpversion = lpversion);
        var i = a ? base_url + "uploadrsakeys_website.php" : base_url + "uploadrsakeys.php",
            p = function(e, a) {
                lp_rsaprivatekeyenchex = o, lp_rsaprivatekeyhex = rsa_extract_privatekey(lp_rsaprivatekeyenchex, g_local_key), r(!1)
            },
            s = function(e, a) {
                r(e)
            };
        LPServer.ajax({
            type: "POST",
            url: i,
            data: l,
            success: p,
            error: s
        })
    }
    return function(e) {
        a(e)
    }
}();
//# sourceMappingURL=sourcemaps/generateSharingKeys.js.map