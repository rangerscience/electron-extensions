var lp = lp || {};
lp.pushClient = function() {
    var o;

    function e(e, t, a, n) {
        function c() {
            o.send({
                channel: "/meta/handshake",
                version: "1.0",
                supportedConnectionTypes: ["callback-polling"]
            })
        }

        function s(e) {
            try {
                var n, c = JSON.parse(e.data)[0];
                switch (c.channel) {
                    case "/meta/connect":
                        o.send({
                            clientId: c.clientId,
                            connectionType: "websocket",
                            channel: "/meta/connect"
                        });
                        break;
                    case "/meta/handshake":
                        c.successful && (o.send({
                            clientId: c.clientId,
                            connectionType: "websocket",
                            channel: "/meta/connect"
                        }), o.send({
                            clientId: c.clientId,
                            subscription: t,
                            channel: "/meta/subscribe"
                        }));
                        break;
                    case "/ping":
                    case "/meta/subscribe":
                        break;
                    case t:
                        void 0 !== c.data.av_update && a()
                }
            } catch (e) {
                console.log("Caught error " + e)
            }
        }
        o && i(), o = new l(e.replace(/^http(s?):/gi, "ws$1:"), c, s, n)
    }

    function i() {
        o && "function" == typeof o.close && o.close(), o = null
    }

    function l(e, n, c, t) {
        var a;

        function s() {
            (a = new WebSocket(e)).onopen = n, a.onmessage = c
        }
        s();
        var o = setInterval(function() {
            a.readyState !== a.OPEN && a.readyState !== a.CONNECTING && s()
        }, t);
        this.close = function e() {
            clearInterval(o), a.close(), a = null
        }, this.send = function e(n) {
            a.readyState === a.OPEN && a.send(JSON.stringify(n))
        }
    }
    return {
        connect: e,
        disconnect: i
    }
}();
//# sourceMappingURL=sourcemaps/push_client.js.map