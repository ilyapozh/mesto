
import {Card} from './Card.js';
import {FormValidator, validationConfig} from './FormValidator.js';
import {togglePopup} from '../utils/utils.js';
import {initialCards} from './initialCards.js';


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = document.querySelector('.popup__close-button');
const popupEdit = document.querySelector('.popup_content_edit-profile');
const formElementEdit = popupEdit.querySelector('.popup__container');

const nameInput = formElementEdit.querySelector('.popup__input_content_name');
const jobInput = formElementEdit.querySelector('.popup__input_content_job');
const profileName = document.querySelector('.profile__user-name');
const profileJob = document.querySelector('.profile__profession');
const popupAddPic = document.querySelector('.popup_content_add-pic');
const submitButtonAdd = popupAddPic.querySelector('.popup__save-button');
const buttonOpenPopupAddPic = document.querySelector('.profile__add-pic-button');
const buttonClosePopupAddPic = popupAddPic.querySelector('.popup__close-button');

const fotoTable = document.querySelector(".foto-table");
const formElementAddPic = popupAddPic.querySelector('.popup__container');
const placeNameInput = formElementAddPic.querySelector('.popup__input_content_place-name');
const linkInput = formElementAddPic.querySelector('.popup__input_content_link');
const popupFullPic = document.querySelector('.popup_content_full-pic');

const buttonClosePopupFullPic = popupFullPic.querySelector('.popup__close-button');

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


formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
formElementAddPic.addEventListener('submit', formSubmitHandlerAddPic);

buttonClosePopupEdit.addEventListener('click', () => togglePopup(popupEdit));
buttonClosePopupAddPic.addEventListener('click', () => togglePopup(popupAddPic));
buttonClosePopupFullPic.addEventListener('click', () => togglePopup(popupFullPic));

buttonOpenPopupEdit.addEventListener('click', openEditPopup);
buttonOpenPopupAddPic.addEventListener('click', () => {
    togglePopup(popupAddPic)
    clearAddPicPopup()
    }
);


const validatorEditProfile = new FormValidator(validationConfig, formElementEdit);
validatorEditProfile.enableValidation();

const validatorAddPic = new FormValidator(validationConfig, formElementAddPic);
validatorAddPic.enableValidation();

initialCards.forEach(card => {
    const curCard = createCard(card);

    fotoTable.append(curCard);

});