class Widget {
    constructor({ container }) {
        this.container = container;
        container.classList.add('doggy-widget');

        this._renderImg();
        this._renderBtn();

        this.updateDoggy();
    }

    _renderImg() {
        this.img = document.createElement('img');
        this.img.classList.add('doggy-widget__img');
        this.img.alt = 'doggy';
        this.container.appendChild(this.img);
    }

    _renderBtn() {
        this.btn = document.createElement('button');
        this.btn.classList.add('doggy-widget__btn');
        this.btn.addEventListener('click', () => this.updateDoggy());
        this.container.appendChild(this.btn);
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
        this.container.classList.remove('doggy-widget');
    }
}

const container = document.createElement('div');
document.body.appendChild(container);
const widget = new Widget({ container });

window.addEventListener('message', (e) => {
    if (e.data.command === 'updateDoggy') {
        widget.updateDoggy();
    }
})