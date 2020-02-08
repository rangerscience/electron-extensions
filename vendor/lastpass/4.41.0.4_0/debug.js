document.title = gs("Debug");
var g_disable_scroll = !1;

function refresh_history() {
    var e = document.getElementById("pre_elt");
    return !(!e || !g_BG) && (e.innerText = g_BG.gethistorybuf(), !0)
}

function reset_history() {
    var e = document.getElementById("pre_elt");
    return !(!e || !g_BG) && (e.innerText = "", g_BG.reset_history(), !0)
}
var g_BG = null;

function onload(e) {
    if (e) {
        g_BG = getBG();
        var t = document.getElementById("pre_elt");
        t.style.height = "400px", t.style.backgroundColor = "#efefef", t.style.fontFamily = "monospace", t.style.overflow = "scroll", refresh_history(), setup_handlers()
    } else get_data("debug", function() {
        onload(!0)
    })
}

function setup_handlers() {
    g_BG = getBG(), document.getElementById("refresh_btn").addEventListener("click", function() {
        get_data("debug", function() {
            refresh_history()
        })
    }), document.getElementById("reset_btn").addEventListener("click", function() {
        reset_history(), get_data("debug", function() {
            refresh_history()
        })
    }), document.getElementById("close_btn").addEventListener("click", function() {
        setTimeout(function() {
            getBG().closecurrenttab("debug.html")
        }, 0)
    }), document.getElementById("scroll_btn").addEventListener("click", function() {
        document.getElementById("scroll_btn").innerText = g_disable_scroll ? (g_disable_scroll = !1, gs("Disable Scroll")) : (g_disable_scroll = !0, gs("Enable Scroll"))
    }), setInterval(function() {
        get_data("debug", function() {
            if (refresh_history(), !g_disable_scroll) {
                var e = document.getElementById("pre_elt");
                e.scrollTop = e.scrollHeight
            }
        })
    }, 6e3)
}
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        onload()
    })
});
//# sourceMappingURL=sourcemaps/debug.js.map