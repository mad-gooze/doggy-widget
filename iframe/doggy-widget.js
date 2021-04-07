(() => {
    window.DoggyWidget = {
        init({ container }) {

            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.height = '100%';
            iframe.style.borderWidth = '0';
            iframe.style.display = 'block';
            iframe.src = 'doggy-widget.html';
            container.appendChild(iframe);
            
            return {
                updateDoggy() {
                    iframe.contentWindow.postMessage({ command: 'updateDoggy' });
                },
                destroy() {
                    // убиваем фрейм для ie11
                    iframe.src = '';
                    container.innerHTML = '';
                }
            }
        }
    }
})();