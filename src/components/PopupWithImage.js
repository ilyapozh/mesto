import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._background = this._popup.querySelector('.popup__background');
        this._title = this._popup.querySelector('.popup__pic-title');
    }

    open(data) {
        this._background.src = data.link;
        this._title.textContent = data.name;
        this._background.alt = data.name;
        super.open()
    }
}