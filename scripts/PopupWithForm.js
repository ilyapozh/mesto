import { Popup } from "./Popup.js";



export class PopupWithForm extends Popup {
    constructor(popupSelector, callBackSubmit) {
        super(popupSelector);
        this._callBackSubmit = callBackSubmit;
    }

    _getInputValues() {
        this._popup.querySelectorAll('.popup__input')
    }

    setEventListeners() {
        document.addEventListener('keydown', (evt) => super._handleEscClose(evt));
        document.addEventListener('click', (evt) => super._handleOverlayClose(evt));

        this._closeButton = this._popup.querySelector('.popup__close-button');    
        this._closeButton.addEventListener('click', () => this.close());

        this._submitForm = this._popup.querySelector('.popup__container');
        this._submitForm.addEventListener('submit', (evt) => {
            this._callBackSubmit(evt)
            this.close()
        }
        );
            
    }

    close() {
        document.removeEventListener('keydown', (evt) => super._handleEscClose(evt))
        document.removeEventListener('click', (evt) => super._handleOverlayClose(evt));
        this._popup.classList.remove('popup_opened');
    }
}