
import { PopupWithImage } from "./PopupWithImage.js";

const popupFullPic = document.querySelector('.popup_content_full-pic');
const popupFullPicInput = popupFullPic.querySelector('.popup__background');
const popupPicName = popupFullPic.querySelector('.popup__pic-title');
const popupFullPicImg = popupFullPic.querySelector('.popup__background');



export class Card {
    
    constructor({data, handleCardClick}, templateSelector) {
        this._fotoTitle = data.name;
        this._fotoLink = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }


    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.foto-table__list').cloneNode(true);
        
        return cardElement
    }

    _setEventListeners() {
        this._currentFoto = this._element.querySelector('.foto-table__foto');

        this._element.querySelector('.foto-table__like-button').addEventListener('click', evt => {
            evt.target.classList.toggle('foto-table__like-button_black');
        });

        this._element.querySelector('.foto-table__delete-button').addEventListener('click', evt => {
            evt.target.closest('.foto-table__list').remove();
        });

        this._currentFoto.addEventListener('click', evt => {
            this._handleCardClick()
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        

        this._element.querySelector('.foto-table__name').textContent = this._fotoTitle;
        this._currentFoto.src = this._fotoLink;
        this._currentFoto.alt = this._fotoTitle;

        return this._element
    }

}


