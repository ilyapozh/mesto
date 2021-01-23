import {checkInputValidity} from './validation.js';
import {Card} from './Card.js';
import {initialCards} from './initialCards.js';


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = document.querySelector('.popup__close-button');
const popupEdit = document.querySelector('.popup_content_edit-profile');
const formElementEdit = popupEdit.querySelector('.popup__container');
const submitButtonEdit = formElementEdit.querySelector('.popup__save-button');
const nameInput = formElementEdit.querySelector('.popup__input_content_name');
const jobInput = formElementEdit.querySelector('.popup__input_content_job');
const profileName = document.querySelector('.profile__user-name');
const profileJob = document.querySelector('.profile__profession');
const popupAddPic = document.querySelector('.popup_content_add-pic');
const submitButtonAdd = popupAddPic.querySelector('.popup__save-button');
const buttonOpenPopupAddPic = document.querySelector('.profile__add-pic-button');
const buttonClosePopupAddPic = popupAddPic.querySelector('.popup__close-button');
const cardTemplate = document.querySelector("#card").content;
const fotoTable = document.querySelector(".foto-table");
const formElementAddPic = popupAddPic.querySelector('.popup__container');
const placeNameInput = formElementAddPic.querySelector('.popup__input_content_place-name');
const linkInput = formElementAddPic.querySelector('.popup__input_content_link');
const popupFullPic = document.querySelector('.popup_content_full-pic');
const popupFullPicInput = popupFullPic.querySelector('.popup__background');
const popupPicName = popupFullPic.querySelector('.popup__pic-title');
const buttonClosePopupFullPic = popupFullPic.querySelector('.popup__close-button');


function overlayCloseCallBack(evt) {
    if (evt.target.classList.contains('popup_opened')) { 
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup); 
    } 
}

function escCloseCallBack (evt) {
    if (evt.key === "Escape" ) { 
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup); 
    } 
}

export function togglePopup(popup) {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.toggle('popup_opened');
        document.removeEventListener('keydown', escCloseCallBack);
        document.removeEventListener('mousedown', overlayCloseCallBack);
        
    } else {
        popup.classList.toggle('popup_opened');
        document.addEventListener('keydown', escCloseCallBack);
        document.addEventListener('mousedown', overlayCloseCallBack);
    }    
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
    
    const newCard = new Card(item, '#card', togglePopup);

    fotoTable.prepend(newCard.generateCard());
    
    placeNameInput.value = '';
    linkInput.value = '';
    submitButtonAdd.disabled = true;
    submitButtonAdd.classList.add('popup__save-button_state_notActive');

    togglePopup(popupAddPic);
}


function openEditPopup () {

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

    checkInputValidity(formElementEdit, nameInput, {inputErrorClass: 'popup__input_state_invalid'});
    checkInputValidity(formElementEdit, jobInput, {inputErrorClass: 'popup__input_state_invalid'});

    togglePopup(popupEdit);
}


formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
formElementAddPic.addEventListener('submit', formSubmitHandlerAddPic);

buttonClosePopupEdit.addEventListener('click', () => togglePopup(popupEdit));
buttonClosePopupAddPic.addEventListener('click', () => togglePopup(popupAddPic));
buttonClosePopupFullPic.addEventListener('click', () => togglePopup(popupFullPic));

buttonOpenPopupEdit.addEventListener('click', openEditPopup);
buttonOpenPopupAddPic.addEventListener('click', () => togglePopup(popupAddPic));





