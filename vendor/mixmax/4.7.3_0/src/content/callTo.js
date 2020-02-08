// Whether we should take over the tel links.
var enabledTelephoneLinks = false;
const CALLING_REPORT_RUNTIME_ERROR = 0.1;

function setEnabled() {
    chrome.storage.local.get(null, function(storage) {
        let isMixmaxEnabled = false;
        let hasCallingEnabled = false;

        enabledTelephoneLinks = Object.keys(storage).some(function(key) {
            // TODO: Currently there isn't a way to guarantee that the account and environment
            // match for which calling is enabled. This should be abe to change in a future.
            if (/^onboarded_(.+)_[a-z]+$/.test(key) && storage[key]) {
                isMixmaxEnabled = true;
            }

            // Set on extension-source based on if the user has the calling feature enabled or not.
            // https://github.com/mixmaxhq/emailer-chrome-extension-source/blob/eb7453ef03bfdb9d654c5f2c1579260bb2a6f8aa/src/js/calling.js#L13
            if (/^hasCallingFeature_(.+)_[a-z]+$/.test(key) && storage[key]) {
                hasCallingEnabled = true;
            }

            return isMixmaxEnabled && hasCallingEnabled;
        });
    });
}

// Set now and every time the environment changes.
setEnabled();
chrome.storage.onChanged.addListener(setEnabled);

// Take over tel: links.
document.documentElement.addEventListener('click', handleClickEventForCallTo, true);

function handleClickEventForCallTo(e) {
    if (!enabledTelephoneLinks) return;
    if (e.defaultPrevented) return;

    var link = $(e.target).closest('a[href^="tel:"]')[0];
    if (!link) return;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var href = link.href;

    try {
        chrome.runtime.sendMessage({
            method: 'callTo',
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
            if (Math.random() > CALLING_REPORT_RUNTIME_ERROR) return; // Control Sentry reporting volume.
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
}

// eslint-disable-next-line no-unused-vars
function disableCallTo() {
    document.documentElement.removeEventListener('click', handleClickEventForCallTo, true);
}