//
//
//
//
//
//
//
// Mixmax (mixmax.com) is venture-backed company focused on bring powerful email and productivity
// tools to Gmail, Salesforce and LinkedIn Sales Navigator.
//
// LINKS:
//  Mixmax Homepage: https://mixmax.com
//  Investors & funding: https://www.crunchbase.com/organization/mixmax
//  Product review: http://fieldguide.gizmodo.com/supercharge-your-email-with-mixmax-1711351820
//
// A TECHNICAL NOTE:
//
// Mixmax injects a third party library (hosted on Mixmax servers and under the complete control
// of Mixmax) in order to quickly deploy new features and fix bugs. Using an external script (that
// isn't a content script) also gives Mixmax the ability to access global Javascript variables
// that exist in the web pages this script is injected into. This is a very common practice
// implemented by many other extensions that enhance Gmail, Salesforce and LinkedIn Sales Navigator
// widgets (necessary to keep up with updates to those products).
//
//
//
//
//
//
//
//


const BUILD_TARGETS = [];
const SFDC_DOMAIN = /(^|\.)(sales)?force\.com$/;
const hostname = window.location.hostname;
const isGmail = hostname === 'mail.google.com';
const isLinkedIn = hostname === 'www.linkedin.com' && window.location.pathname.startsWith('/sales/widget');

if (isGmail) {
    BUILD_TARGETS.push('gmail-inbox');
} else {
    BUILD_TARGETS.push('non-gmail-inbox');
    if (SFDC_DOMAIN.test(hostname)) {
        BUILD_TARGETS.push('salesforce');
    }
    if (isLinkedIn) {
        BUILD_TARGETS.push('linkedin');
    }
}



var LOAD_FAILURE_WARN_ORIGINS = [
    'https://mail.google.com',
];


function isValidWarningOrigin(origin) {
    if (!origin.startsWith('https://')) return false;

    if (LOAD_FAILURE_WARN_ORIGINS.includes(origin)) return true;

    return SFDC_DOMAIN.test(origin);
}


const warnEnvironments = new Set(['staging']);


function getExtensionOrigin(environment) {
    if (warnEnvironments.has(environment)) {
        console.warn(`Mixmax extension is running from ${environment}.`);
    }

    if (!environment || environment === 'production') {
        return 'https://extension.mixmax.com';
    }

    return `https://extension-${environment}.mixmax.com`;
}


const GET_EVERYTHING = null;
chrome.storage.local.get(GET_EVERYTHING, function(storage) {
    const {
        environment
    } = storage;
    const extensionOrigin = getExtensionOrigin(environment);

    if (storage.environment === 'local') {
        loadLocal(environment, extensionOrigin);
    } else {
        const sourceSubdir = storage.testSourceSubdir || null;
        loadApp(environment, extensionOrigin, sourceSubdir);
    }
});


async function loadLocal(environment, extensionOrigin) {
    try {
        await loadCSS(environment, extensionOrigin);

        if (isGmail) {
            await pageInteropLoad;
        }

        const sourceSubdir = null;
        await loadScript(environment, extensionOrigin, sourceSubdir);
    } catch (err) {
        if (isValidWarningOrigin(window.location.origin)) {
            alert('Failed to load extension locally. See README.');
        }
        throw err;
    }
}


async function loadApp(environment, extensionOrigin, sourceSubdir) {
    try {
        await loadCSS(environment, extensionOrigin, 6);
    } catch (err) {
        throw new Error('Failed to load Mixmax CSS');
    }

    if (isGmail && typeof pageInteropLoad !== 'undefined') {
        await pageInteropLoad;
    }

    try {
        await loadScript(environment, extensionOrigin, sourceSubdir, 3);
    } catch (err) {
        error.captureException(err, {
            culprit: 'Loaded CSS but could not load JS',
            tags: {
                user: getLikelyUserEmail(),
                domain: hostname,
                extensionOrigin,
            }
        });
    }
}


async function retry(asyncFn, maxAttempts = 1, attemptNum = 0) {
    if (attemptNum >= maxAttempts - 1) {
        return asyncFn();
    }

    try {
        return await asyncFn(attemptNum);
    } catch (err) {
        // If the error is permanent (e.g. the bundle failed to evaluate), don't retry. Otherwise, we
        // expect the error was a temporary (network/server) failure.
        if (err && err.isPermanent) {
            throw err;
        }

        // Primitive backoff.
        await new Promise((resolve) => setTimeout(resolve, attemptNum * 250));
        return retry(asyncFn, maxAttempts, attemptNum + 1);
    }
}


function loadCSSLink(environment, origin, buildTarget) {
    const cssURL = `${origin}/src/styles-${buildTarget}.css`;

    // If the document is not a html file it might not contain header.
    // https://sentry.io/mixmax/chrome-extension/issues/530036538/
    // Grab it here in case the page loaded more since we started loading the CSS.
    const styleContainer = document.head || document.documentElement;

    // Create the link tag and attach it to the head (or document if the document has no head).
    const link = document.createElement('link');
    link.href = cssURL;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    styleContainer.appendChild(link);
}


async function fetchCSS(url) {
    const res = await fetch(url, {
        mode: 'cors',
        credentials: 'omit',
        redirect: 'follow',
        referrerPolicy: 'origin',
    });

    if (!res.ok) {
        throw new Error('failed to fetch CSS');
    }

    return res.text();
}


function loadCSS(environment, origin, numRetries = 0) {
    return Promise.all(BUILD_TARGETS.map(async (buildTarget) => {
        // If we don't need retry functionality, and we're loading into Gmail, we don't need to fetch
        // the CSS source and inject it as as style tag - we can use a link tag instead, which enables
        // hot reloading of CSS using livereload.
        if (!numRetries && buildTarget === 'gmail-inbox') {
            return loadCSSLink(environment, origin, buildTarget);
        }

        // Fetch CSS in a way that complies with Lightning's CSP per
        // https://stackoverflow.com/questions/27515117/gmail-content-security-policy-on-chrome-extensions/27516534#27516534
        const cssURL = `${origin}/src/styles-${buildTarget}.css`;

        const cssRes = await retry(() => fetchCSS(cssURL), numRetries + 1);

        // If the document is not a html file it might not contain header.
        // https://sentry.io/mixmax/chrome-extension/issues/530036538/
        // Grab it here in case the page loaded more since we started loading the CSS.
        const styleContainer = document.head || document.documentElement;

        const style = document.createElement('style');
        style.textContent = cssRes;
        styleContainer.appendChild(style);
    }));
}

function validateSourceSubdir(sourceSubdir) {
    return typeof sourceSubdir === 'string' && sourceSubdir.startsWith('test-') && /^[0-9A-Z_-]+$/i.test(sourceSubdir);
}


function loadScript(environment, origin, sourceSubdir, numRetries = 0) {
    const maybeSourceSubdir = validateSourceSubdir(sourceSubdir) ? `${sourceSubdir}/` : '';

    return Promise.all(BUILD_TARGETS.map(async (buildTarget) => {
        const jsURL = new URL(`${origin}/src/${maybeSourceSubdir}build-${buildTarget}.js`);

        await retry(async (num) => {
            const url = new URL(jsURL);
            // Don't bother busting the cache on the first request.
            if (num) {
                // Bust the module map (cachebuster-style).
                url.searchParams.set('v', `mixmax-extension-${num}`);
            }
            try {
                await import(url.href);
            } catch (err) {
                if (err && err[Symbol.for('mixmaxErrorSource')] === 'mixmax-extension-source') {
                    err.isPermanent = true;
                }
                throw err;
            }
        }, numRetries + 1);
    }));
}

function getLikelyUserEmail() {
    var emailRegex = /[a-z0-9\._+\-]+@[a-z0-9\.\-]+\.[a-z]{2,20}/i;
    var messageElement = document.querySelector('.msg');
    if (messageElement && emailRegex.test(messageElement.textContent)) {
        return messageElement.textContent.match(emailRegex)[0];
    } else {
        var titleMatch = document.title.match(emailRegex);
        if (titleMatch) return titleMatch[0];
    }
}