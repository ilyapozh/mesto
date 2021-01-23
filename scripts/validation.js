function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
}

function checkInputValidity(form, input, config) {
    if (input.validity.valid) {
        hideError(form, input, config);
    } else {
        showError(form, input, config);
    }
}

function setButtonState(button, isActive, config) {
    if(isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
}


function enableValidation(config) {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach( form => {
        const inputList = form.querySelectorAll(config.inputSelector);
        const button = form.querySelector(config.submitButtonSelector);
        inputList.forEach ( input => {
            input.addEventListener('input', () => {
                checkInputValidity(form, input, config);
                setButtonState(button, form.checkValidity(), config);
            });
        });
    });
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_state_notActive',
    inputErrorClass: 'popup__input_state_invalid',
    errorClass: 'popup__error'
  });



export {checkInputValidity};


 
