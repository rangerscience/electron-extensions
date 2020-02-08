// By creating the iframe and setting its src _before_ appending to the body, Chrome will delay
// the proxy's 'load' event until after the child frame loads. (Chrome would *not* do this if we
// put `<iframe src=""></iframe>` in the HTML and _then_ set the `src` here.)
var iframe = document.createElement('iframe');
iframe.src = new URLSearchParams(window.location.search).get('proxy');
iframe.allow = 'microphone';
document.body.appendChild(iframe);

// Proxy postMessage events.
window.addEventListener('message', function(evt) {
    if (evt.source === iframe.contentWindow) {
        // Proxy events upwards.
        window.parent.postMessage(evt.data, '*');
    } else {
        // Proxy events downwards. Optionally pre-focus the mole. See `ComposeWindow#setContents` for
        // rationale, including why we focus in response to a `message` event rather than a `focus`
        // event.
        if (evt.data && evt.data.preFocus) iframe.contentWindow.focus();
        iframe.contentWindow.postMessage(evt.data, '*');
    }
});