export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_state_notActive',
    inputErrorClass: 'popup__input_state_invalid',
    errorClass: '.popup__error'
  }

export class FormValidator {

    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
        this._openedPopup = this._formElement.parentElement;
        this._inputList = this._openedPopup.querySelectorAll(this._validationConfig.inputSelector);
        this._errorList = this._openedPopup.querySelectorAll(this._validationConfig.errorClass);
        this._submitButton = this._openedPopup.querySelector(this._validationConfig.submitButtonSelector);
    }

    _showError(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._validationConfig.inputErrorClass);
    }
    
    _hideError(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._validationConfig.inputErrorClass);
    }
    
    _checkInputValidity(input) {
        
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
        
    }
    
    setButtonState(isActive) {
        if(isActive) {
            this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._validationConfig.inactiveButtonClass);
            this._submitButton.disabled = true;
        }
    }

    resetInputAndError() {
        
        this._errorList.forEach( error => {
            error.textContent = '';
        });
    
        this._inputList.forEach(input => {
            input.classList.remove(this._validationConfig.inputErrorClass);
        })
    }

    enableValidation() {
        
        this._inputList.forEach ( input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this.setButtonState(this._formElement.checkValidity());
            });
        });
    }
    
}




