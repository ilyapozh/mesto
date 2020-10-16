const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');

let nameInput = formElement.querySelector('.popup__input_content_name');
let jobInput = formElement.querySelector('.popup__input_content_job');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__profession');


const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}


function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    
}

function copyText () {

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

    
}


formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupToggle);

buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
buttonOpenPopup.addEventListener('click', copyText);







