import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
    }

    open(data) {
        this._popup.querySelector('.popup__background').src = data.link;
        this._popup.querySelector('.popup__pic-title').textContent = data.name;
        this._popup.querySelector('.popup__background').alt = data.name;
        super.open()
    }
}