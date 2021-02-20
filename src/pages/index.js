
import {Card} from '../components/Card.js';
import {FormValidator, validationConfig} from '../components/FormValidator.js';
import {initialCards} from '../components/initialCards.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import './index.css';


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_content_edit-profile');
const formElementEdit = popupEdit.querySelector('.popup__container');
const popupAddPic = document.querySelector('.popup_content_add-pic');
const buttonOpenPopupAddPic = document.querySelector('.profile__add-pic-button');
const formElementAddPic = popupAddPic.querySelector('.popup__container');

function createCard(data) {
    const card = new Card ({
        data, 
        handleCardClick: () => {
            popupWithImage.open(data);
        }
    },
    '#card'
    )
    const newCard = card.generateCard()
    return newCard
}

const validatorEditProfile = new FormValidator(validationConfig, formElementEdit);
validatorEditProfile.enableValidation();
validatorEditProfile.setButtonState(false);

const validatorAddPic = new FormValidator(validationConfig, formElementAddPic);
validatorAddPic.enableValidation();

const popupWithImage = new PopupWithImage('.popup_content_full-pic');
popupWithImage.setEventListeners();

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {

        const newCardElement = createCard(data);

        cardList.setItem(newCardElement);
    },
},
'.foto-table'
)

cardList.renderCards()

const userInfo = new UserInfo({
    nameSelector: '.profile__user-name',
    aboutSelector: '.profile__profession',
});

const editPopup = new PopupWithForm('.popup_content_edit-profile', (formValues) => {
    const info = {
        name: formValues.name,
        about: formValues.job
    }
    userInfo.setUserInfo(info);
});
editPopup.setEventListeners();


buttonOpenPopupEdit.addEventListener('click', () => {
    validatorEditProfile.resetInputAndError();
    const currentUserInfo = userInfo.getUserInfo();
    userInfo.pasteUserInfo(currentUserInfo);
    editPopup.open();   
});


const addPicPopup = new PopupWithForm('.popup_content_add-pic', (formValues) => {
    const data = {
        name: `${formValues.picName}`,
        link: `${formValues.picLink}`
    }
    
    const newCard = createCard(data);

    cardList.prependItem(newCard)
    
})

addPicPopup.setEventListeners();

buttonOpenPopupAddPic.addEventListener('click', () => {
    validatorAddPic.resetInputAndError()
    addPicPopup.open()
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