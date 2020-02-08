// Whether we should take over the mailto links.
var enabledMailtoLinks = false;
const MAIL_REPORT_RUNTIME_ERROR = 0.1;

function setEnabled() {
    chrome.storage.local.get(null, function(storage) {
        enabledMailtoLinks = Object.keys(storage).some(function(key) {
            return /^onboarded_(.+)_[a-z]+$/.test(key) && storage[key];
        });
    });
}

// Set now and every time the environment changes.
setEnabled();
chrome.storage.onChanged.addListener(setEnabled);

// Take over mailto links.
document.documentElement.addEventListener('click', function(e) {
    if (!enabledMailtoLinks) return;
    if (e.defaultPrevented) return;

    var link = $(e.target).closest('a[href^="mailto:"]')[0];
    if (!link) return;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var href = link.href;

    try {
        chrome.runtime.sendMessage({
            method: 'mailTo',
            payload: {
                href,
            }
        });
    } catch (err) {
        // Synchronously catch errors occurring when the Chrome runtime loses its connection to the
        // extension, which occurs when the extension is updated, and reload. We try to proactively
        // refresh in the `chrome.runtime.onInstalled` listener in `refreshBrowser.js`, but a
        // `beforeUnload` handler can block this. Who knows why this is thrown synchronously, the
        // `chrome.runtime.sendMessage` documentation suggests it should be the value of
        // `chrome.runtime.lastError` in `sendMessage`'s callback (and it's not even if a callback is
        // provided). https://app.asana.com/0/19141607276671/204618784968741
        if (/Invocation.+doesn't match/i.test(err.message)) {
            window.location.reload();
        } else {
            if (Math.random() > MAIL_REPORT_RUNTIME_ERROR) return; // Control Sentry reporting volume.
            error.captureException(err, {
                culprit: 'Could not message extension',
                extra: {
                    payload: {
                        href,
                    }
                }
            });
        }
    }
}, true);