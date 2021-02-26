export class Section {

    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    prependItem(item) {
        this._container.prepend(item);
    }

    renderItems(items) {
        this._renderedItems = items;
        this._renderedItems.forEach(card => this._renderer(card));
    }

    setItem(item) {
        this._container.append(item);
    }
}

