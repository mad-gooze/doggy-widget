(() => {

    class Widget {
        constructor({ container }) {
            this.container = container;

            this.shadowRoot = container.attachShadow({ mode: 'open' });

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'doggy-widget.css';
            this.shadowRoot.appendChild(link);

            this.innerContainer = document.createElement('div');
            this.innerContainer.classList.add('doggy-widget');
            this.shadowRoot.appendChild(this.innerContainer);


            this._renderImg();
            this._renderBtn();

            this.updateDoggy();
        }

        _renderImg() {
            this.img = document.createElement('img');
            this.img.classList.add('doggy-widget__img');
            this.img.alt = 'doggy';
            this.innerContainer.appendChild(this.img);
        }

        _renderBtn() {
            this.btn = document.createElement('button');
            this.btn.classList.add('doggy-widget__btn');
            this.btn.addEventListener('click', () => this.updateDoggy());
            this.innerContainer.appendChild(this.btn);
            this.btn.innerText = 'New doggy!';
        }

        updateDoggy() {
            const { width, height } = this.container.getBoundingClientRect();
            let src = `https://placedog.net/${width - 10}/${height - 10}`;
            if (!localStorage.getItem('disableRandom')) {
                // для удобства примеров на слайдах можно выключить рандом
                src += `?random=${Math.random()}`
            }
            this.img.src = src;
        }

        destroy() {
            this.container.innerHTML = '';
            this.shadowRoot.innerHTML = '';
            this.container.classList.remove('doggy-widget');
            this.container.detachShadow();
        }
    }

    window.DoggyWidget = {
        init(config) {
            return new Widget(config);
        }
    }
})();