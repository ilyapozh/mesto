import { togglePopup } from "../utils/utils.js";
import { Card } from "./Card.js";
import {initialCards} from "./initialCards.js";
import { PopupWithImage } from "./PopupWithImage.js";



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

/*
function createCard(card) {
    const cardElement = new Card(card, '#card', togglePopup);
    return cardElement.generateCard();
};

initialCards.forEach(card => {
    const curCard = createCard(card);

    fotoTable.append(curCard);

});
*/
const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const newCard = new Card({
            data, 
            handleCardClick: () => {
                const popupWithImage = new PopupWithImage(data, '.popup_content_full-pic');
                popupWithImage.setEventListeners();
                popupWithImage.open();
            }
        },
        '#card'
        )

        const newCardElement = newCard.generateCard()

        cardList.setItem(newCardElement);
    },
},
'.foto-table'
)

cardList.renderCards()