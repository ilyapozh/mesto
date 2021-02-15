export class Section {

    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderCards() {
        this._renderedItems.forEach(card => this._renderer(card));
    }

    setItem(item) {
        this._container.append(item);
    }
}

