(() => {
    window.DoggyWidget = {
        init(config) {
            const iframe = document.createElement('iframe');
            document.head.appendChild(iframe);

const script = document.createElement('script');
script.src = 'doggy-widget-inner.js';
const loaded = new Promise((resolve) => script.onload = resolve);

loaded.then(() => {
    iframe.contentWindow.init(config);
})

iframe.contentDocument.head.appendChild(script);

            return {
                destroy() {
                    iframe.src = '';
                    document.head.removeChild(iframe);
                },
                updateDoggy() {
                    loaded.then(() => {
                        iframe.contentWindow.widget.updateDoggy();
                    })
                }
            }
        }
    }
})();