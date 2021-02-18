export class Section {

    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    prependItem(item) {
        this._container.prepend(item);
    }

    renderCards() {
        this._renderedItems.forEach(card => this._renderer(card));
    }

    setItem(item) {
        this._container.append(item);
    }
}

