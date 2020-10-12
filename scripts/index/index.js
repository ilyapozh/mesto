const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');



const popupToggle = function () {
    popup.classList.toggle('popup_opened');
}

// Находим форму в DOM
// Воспользуйтесь методом querySelector)

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__input_content_name');
    let jobInput = formElement.querySelector('.popup__input_content_job');

    // Получите значение полей из свойства value
    console.log(nameInput.value);
    console.log(jobInput.value);

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__userName');
    let profileJob = document.querySelector('.profile__profession');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

function copyText () {

    let profileName = document.querySelector('.profile__userName');
    let profileJob = document.querySelector('.profile__profession');
    let nameInput = formElement.querySelector('.popup__input_content_name');
    let jobInput = formElement.querySelector('.popup__input_content_job');

    console.log(profileName.textContent);
    console.log(profileJob.textContent);

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupToggle);

buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
buttonOpenPopup.addEventListener('click', copyText);







