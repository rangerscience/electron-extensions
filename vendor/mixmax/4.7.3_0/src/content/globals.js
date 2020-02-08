chrome.storage.local.get(null, function(storage) {
    // Gmail uses multiple frames so only inject this in the top-most frame.
    // This suffices for extension-source now that it is loaded from extension*.mixmax.com.
    // We test the origin, which is supported on all versions of chrome instead of the href because
    // that's what's important for security (it's also read-only!).
    const origin = window.location.origin;
    const isMixmaxUrl = origin.startsWith('https://') && origin.endsWith('.mixmax.com');
    const isLinkedInUrl = origin.startsWith('https://') && origin.endsWith('.linkedin.com') &&
        window.location.pathname.startsWith('/sales/widget');

    const isUnsupportedIFrame = top !== window && !isMixmaxUrl && !isLinkedInUrl;
    if (isUnsupportedIFrame) return;

    // Add special properties for extension information.
    storage.extensionVersion = chrome.runtime.getManifest().version;

    window.MIXMAX_STORAGE = storage;

    // Inject variables into the app.
    if (shouldInjectGlobals()) {
        const globalDefinitions = document.createElement('script');

        globalDefinitions.setAttribute('data-mixmax-globals', '');

        globalDefinitions.innerHTML = 'MIXMAX_STORAGE = ' + JSON.stringify(storage) + ';';

        (document.head || document.documentElement).appendChild(globalDefinitions);
    }
});

const rSidebarAnywhereOrigin = /^https:\/\/extension(?:-[a-z]+)?\.mixmax\.com$/;
const rAppOrigin = /^https:\/\/app(?:-[a-z]+)?\.mixmax\.com$/;
const rEmailAppsOrigin = /^https:\/\/emailapps(?:-[a-z]+)?\.mixmax\.com$/;

function shouldInjectGlobals() {
    const origin = window.location.origin;
    return rSidebarAnywhereOrigin.test(origin) || rAppOrigin.test(origin) || rEmailAppsOrigin.test(origin);
}