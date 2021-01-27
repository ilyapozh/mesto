/*
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
*/

 
export class FormValidator {

    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    _showError(form, input, config) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(config.inputErrorClass);
    }
    
    _hideError(form, input, config) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(config.inputErrorClass);
    }
    
    _checkInputValidity(form, input, config) {
        if (input.validity.valid) {
            this._hideError(form, input, config);
        } else {
            this._showError(form, input, config);
        }
    }
    
    _setButtonState(button, isActive, config) {
        if(isActive) {
            button.classList.remove(config.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(config.inactiveButtonClass);
            button.disabled = true;
        }
    }

    enableValidation() {
        
        const inputList = (this._formElement).querySelectorAll((this._config).inputSelector);
        
        const button = (this._formElement).querySelector((this._config).submitButtonSelector);
        
        inputList.forEach ( input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(this._formElement, input, this._config);
                this._setButtonState(button, this._formElement.checkValidity(), this._config);
            });
        });
    }
    
}

const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_state_notActive',
    inputErrorClass: 'popup__input_state_invalid',
    errorClass: 'popup__error'
  }
const formList = document.querySelectorAll(config.formSelector);


formList.forEach(form => {
    const validatedForm = new FormValidator(config, form);
    validatedForm.enableValidation();
})