declare const DoggyWidget: {
    init: ({
        container: HTMLElement,
    }) => DoggyWidgetInstance;
}

declare interface DoggyWidgetInstance {
    destroy(): void;
    updateDoggy(): void;
}
