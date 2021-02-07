import { togglePopup } from "../utils/utils.js";
import { Card } from "./Card.js";
const fotoTable = document.querySelector('.foto-table')

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export default class Section {

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

function createCard(card) {
    const cardElement = new Card(card, '#card', togglePopup);
    return cardElement.generateCard();
};

initialCards.forEach(card => {
    const curCard = createCard(card);

    fotoTable.append(curCard);

});

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const newCard = new Card(item, '#card', togglePopup)
        const newCardElement = newCard.generateCard()

        cardList.setItem(newCardElement);
    },
},
fotoTable
)