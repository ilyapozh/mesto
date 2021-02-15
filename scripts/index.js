
import {Card} from './Card.js';
import {FormValidator, validationConfig} from './FormValidator.js';
import {initialCards} from './initialCards.js';
import { PopupWithForm } from './PopupWithForm.js';
import {Section} from './Section.js'
import {PopupWithImage} from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js'


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_content_edit-profile');
const formElementEdit = popupEdit.querySelector('.popup__container');
const submitEditProfileButton = popupEdit.querySelector('.popup__save-button')
const popupAddPic = document.querySelector('.popup_content_add-pic');
const buttonOpenPopupAddPic = document.querySelector('.profile__add-pic-button');
const formElementAddPic = popupAddPic.querySelector('.popup__container');
const placeNameInput = formElementAddPic.querySelector('.popup__input_content_place-name');
const linkInput = formElementAddPic.querySelector('.popup__input_content_link');



const validatorEditProfile = new FormValidator(validationConfig, formElementEdit);
validatorEditProfile.enableValidation();
validatorEditProfile.setButtonState(submitEditProfileButton , false)

const validatorAddPic = new FormValidator(validationConfig, formElementAddPic);
validatorAddPic.enableValidation();

const popupWithImage = new PopupWithImage('.popup_content_full-pic');
popupWithImage.setEventListeners();

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const newCard = new Card({
            data, 
            handleCardClick: () => {
                popupWithImage.open(data)
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

const userInfo = new UserInfo({
    nameSelector: '.popup__input_content_name',
    aboutSelector: '.popup__input_content_job',
});

const editPopup = new PopupWithForm('.popup_content_edit-profile', (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo();
});
editPopup.setEventListeners();


buttonOpenPopupEdit.addEventListener('click', () => {
    validatorEditProfile.resetInputAndError(popupEdit);
    userInfo.getUserInfo();
    editPopup.open();   
});


const addPicPopup = new PopupWithForm('.popup_content_add-pic', (evt) => {
        
    evt.preventDefault();
    const data = {
        name: `${placeNameInput.value}`,
        link: `${linkInput.value}`
    }

    const newCard = new Card ({
        data, 
        handleCardClick: () => {
            const popupWithImage = new PopupWithImage('.popup_content_full-pic');
            popupWithImage.setEventListeners();
            popupWithImage.open(data);
        }
    },
    '#card'
    )

    const newCardElement = newCard.generateCard()
    cardList.setItem(newCardElement)

})

addPicPopup.setEventListeners();

buttonOpenPopupAddPic.addEventListener('click', () => {
    placeNameInput.value = '';
    linkInput.value = '';
    validatorAddPic.resetInputAndError(popupAddPic)
    addPicPopup.open();
        
});
    





/*
initialCards.forEach(card => {
    const curCard = createCard(card);

    fotoTable.append(curCard);

});




function createCard(card) {
    const cardElement = new Card(card, '#card', togglePopup);
    return cardElement.generateCard();
};


function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    togglePopup(popupEdit);
}


function formSubmitHandlerAddPic (evt) {
    evt.preventDefault(); 
    const item = {
        name: `${placeNameInput.value}`,
        link: `${linkInput.value}`
    };
    
    const newCard = createCard(item);
    
    fotoTable.prepend(newCard);
    
    placeNameInput.value = '';
    linkInput.value = '';
    validatorAddPic.setButtonState(submitButtonAdd, false);
    

    togglePopup(popupAddPic);
}


function openEditPopup () {

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    
    togglePopup(popupEdit);
    
    validatorEditProfile.resetInputAndError(popupEdit);
}

function clearAddPicPopup() {
    placeNameInput.value = '';
    linkInput.value = '';
    
    validatorAddPic.resetInputAndError(popupAddPic);
    
}


buttonClosePopupAddPic.addEventListener('click', () => togglePopup(popupAddPic));
buttonClosePopupFullPic.addEventListener('click', () => togglePopup(popupFullPic));

formElementAddPic.addEventListener('submit', formSubmitHandlerAddPic);

*/