import { Popup } from "./Popup.js";

const popupFullPic = document.querySelector('.popup_content_full-pic');
const popupFullPicInput = popupFullPic.querySelector('.popup__background');
const popupPicName = popupFullPic.querySelector('.popup__pic-title');
const popupFullPicImg = popupFullPic.querySelector('.popup__background');

export class PopupWithImage extends Popup {
    constructor (data, popupSelector) {
        super(popupSelector);
        this._data = data;
    }

    open() {
        popupFullPicInput.src = this._data.link;
        popupPicName.textContent = this._data.name;
        popupFullPicInput.alt = this._data.name;
        super.open()
    }
}