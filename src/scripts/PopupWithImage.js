import { Popup } from "./Popup.js";

const popupFullPic = document.querySelector('.popup_content_full-pic');
const popupFullPicInput = popupFullPic.querySelector('.popup__background');
const popupPicName = popupFullPic.querySelector('.popup__pic-title');


export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        
       
    }

    open(data) {
        popupFullPicInput.src = data.link;
        popupPicName.textContent = data.name;
        popupFullPicInput.alt = data.name;
        super.open()
    }
}