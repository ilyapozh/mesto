import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, callBackSubmit) {
        super(popupSelector);
        this._callBackSubmit = callBackSubmit;
        this._submitForm = this._popup.querySelector('.popup__container');
    }

    _getInputValues() {
        this._inputList = this._submitForm.querySelectorAll('.popup__input');

        this._formValues = {};

        this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
        return this._formValues;
    }

    setEventListeners() {
        
        super.setEventListeners()
        
        this._submitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBackSubmit(this._getInputValues())
            this.close()
        }
        );
            
    }

    close() {
        super.close()
        this._submitForm.reset()
    }
}