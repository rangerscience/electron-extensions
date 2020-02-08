let pageInteropLoad;

{
    let pageInteropResolve;
    pageInteropLoad = new Promise((resolve) => pageInteropResolve = resolve);

    const inject = `{
    const globals = ['GLOBALS', 'GM_RFT_ENABLED'];

    const values = globals.map((name) => {
      const defined = Object.prototype.hasOwnProperty.call(window, name);
      return {
        name,
        defined,
        value: defined ? window[name] : undefined,
      };
    });

    postMessage({
      method: 'onloadGlobals',
      payload: {
        values,
      },
    }, window.location.origin);

    // Attempt to clean up after ourselves.
    const script = document.currentScript;
    script.parentNode.removeChild(script);
  }`;

    addEventListener('message', function onMessage(event) {
        if (event.origin !== window.location.origin) return;
        const {
            data
        } = event;
        if (!data || data.method !== 'onloadGlobals') return;

        const {
            payload
        } = data;
        for (const {
                name,
                defined,
                value
            } of payload.values) {
            if (defined) {
                window[name] = value;
            }
        }

        removeEventListener('message', onMessage);

        pageInteropResolve();
    });

    const script = document.createElement('script');
    script.textContent = inject;
    (document.head || document.documentElement).appendChild(script);
}