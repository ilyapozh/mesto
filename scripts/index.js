const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = document.querySelector('.popup__close-button');
const popupEdit = document.querySelector('.popup');
const formElementEdit = popupEdit.querySelector('.popup__container');
const nameInput = formElementEdit.querySelector('.popup__input_content_name');
const jobInput = formElementEdit.querySelector('.popup__input_content_job');
const profileName = document.querySelector('.profile__user-name');
const profileJob = document.querySelector('.profile__profession');
const popupAddPic = document.querySelector('.popup_content_add-pic');
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

const initialCards = [
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

initialCards.forEach(card => {
    const cardClone = cardTemplate.cloneNode(true);
    
    cardClone.querySelector('.foto-table__name').textContent = card.name;
    cardClone.querySelector('.foto-table__foto').src = card.link;
    
    cardClone.querySelector('.foto-table__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('foto-table__like-button_black');
    });

    cardClone.querySelector('.foto-table__delete-button').addEventListener('click', function(evt) {
        evt.target.parentElement.parentElement.remove();
    });

    cardClone.querySelector('.foto-table__foto').addEventListener('click', function (evt) {
        popupFullPicInput.src = evt.target.src;
        popupPicName.textContent = card.name;
        popupFullPic.classList.toggle('popup_opened');
    });

    fotoTable.append(cardClone);

});



const popupEditToggle = function () {
    popupEdit.classList.toggle('popup_opened');
};

const popupAddPicToggle = function () {
    popupAddPic.classList.toggle('popup_opened');
}

const popupFullPicToggle = function () {
    console.log('click')
    popupFullPic.classList.toggle('popup_opened');
}



function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    popupEditToggle();
}


function formSubmitHandlerAddPic (evt) {
    evt.preventDefault(); 
    const cardClone = cardTemplate.cloneNode(true);

    cardClone.querySelector('.foto-table__name').textContent = placeNameInput.value;
    cardClone.querySelector('.foto-table__foto').src = linkInput.value;
    cardClone.querySelector('.foto-table__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('foto-table__like-button_black');
    });
    cardClone.querySelector('.foto-table__delete-button').addEventListener('click', function(evt) {
        evt.target.parentElement.parentElement.remove();
    });

    cardClone.querySelector('.foto-table__foto').addEventListener('click', function (evt) {
        popupFullPicInput.src = evt.target.src;
        popupPicName.textContent = card.name;
        popupFullPic.classList.toggle('popup_opened');
    });


    fotoTable.prepend(cardClone);

    popupAddPicToggle();
}


function copyText () {

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

    popupEditToggle();
}



formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
formElementAddPic.addEventListener('submit', formSubmitHandlerAddPic);

buttonClosePopupEdit.addEventListener('click', popupEditToggle);
buttonClosePopupAddPic.addEventListener('click', popupAddPicToggle);
buttonClosePopupFullPic.addEventListener('click', popupFullPicToggle);

buttonOpenPopupEdit.addEventListener('click', copyText);
buttonOpenPopupAddPic.addEventListener('click', popupAddPicToggle);









