! function() {
    var n = function() {
            var n = document.forms[0];
            if (n && "string" == typeof n.action && 0 === n.action.indexOf(LPVARS.alp_url) && n.SAMLResponse) {
                var t = n.parentElement;
                t.removeChild(n), bg.FederatedLogin.validateK1Encryption(n.SAMLResponse.value, function(e) {
                    e && (t.appendChild(n), n.submit())
                })
            }
        },
        t = new MutationObserver(function(e) {
            document.body && (n(), t.disconnect())
        });
    t.observe(document, {
        childList: !0,
        subtree: !0
    }), document.addEventListener("DOMContentLoaded", n)
}();
//# sourceMappingURL=sourcemaps/extension-federated-login-events.js.map