import {initialCards} from './initialCards.js';
import {togglePopup} from './index.js';

const fotoTable =  document.querySelector(".foto-table");
const popupFullPic = document.querySelector('.popup_content_full-pic');
const popupFullPicInput = popupFullPic.querySelector('.popup__background');
const popupPicName = popupFullPic.querySelector('.popup__pic-title');



export class Card {
    
    constructor(data, templateSelector, openImagePopup) {
        this._fotoTitle = data.name;
        this._fotoLink = data.link;
        this._templateSelector = templateSelector;
        this._openImagePopup = openImagePopup
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.foto-table__list').cloneNode(true);
        
        return cardElement
    }

    _setEventListeners() {
        this._element.querySelector('.foto-table__like-button').addEventListener('click', evt => {
            evt.target.classList.toggle('foto-table__like-button_black');
        });

        this._element.querySelector('.foto-table__delete-button').addEventListener('click', evt => {
            evt.target.closest('.foto-table__list').remove();
        });

        this._element.querySelector('.foto-table__foto').addEventListener('click', evt => {
            popupFullPicInput.src = evt.target.src;
            popupPicName.textContent = evt.target.nextElementSibling.querySelector('.foto-table__name').textContent;
            this._openImagePopup(popupFullPic);
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.foto-table__name').textContent = this._fotoTitle;
        this._element.querySelector('.foto-table__foto').src = this._fotoLink;

        return this._element
    }

}

initialCards.forEach(card => {
    
    const curCard = new Card(card, '#card', togglePopup);
    const cardElement = curCard.generateCard();

    fotoTable.append(cardElement);

});
