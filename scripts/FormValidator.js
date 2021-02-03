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
    }

    _showError(form, input, validationConfig) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(validationConfig.inputErrorClass);
    }
    
    _hideError(form, input, validationConfig) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(validationConfig.inputErrorClass);
    }
    
    _checkInputValidity(form, input, validationConfig) {
        
        if (input.validity.valid) {
            this._hideError(form, input, validationConfig);
        } else {
            this._showError(form, input, validationConfig);
        }
        
    }
    
    setButtonState(button, isActive, validationConfig) {
        if(isActive) {
            button.classList.remove(validationConfig.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(validationConfig.inactiveButtonClass);
            button.disabled = true;
        }
    }

    resetInputAndError(openedPopup, validationConfig) {
        const inputList = openedPopup.querySelectorAll(validationConfig.inputSelector);
        const errorList = openedPopup.querySelectorAll(validationConfig.errorClass);
        
        errorList.forEach( error => {
            error.textContent = '';
        });
    
        inputList.forEach(input => {
            input.classList.remove(validationConfig.inputErrorClass);
        })
    }

    enableValidation() {
        
        const inputList = (this._formElement).querySelectorAll((this._validationConfig).inputSelector);
        
        const button = (this._formElement).querySelector((this._validationConfig).submitButtonSelector);
        
        inputList.forEach ( input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(this._formElement, input, this._validationConfig);
                this.setButtonState(button, this._formElement.checkValidity(), this._validationConfig);
            });
        });
    }
    
}




