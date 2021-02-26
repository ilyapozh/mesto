import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {

    constructor(popupSelector, callBackSubmit){
        super(popupSelector);
        this._callBackSubmit = callBackSubmit;
        this._submitForm = this._popup.querySelector('.popup__container')
    }



    setEventListeners() {
        super.setEventListeners()

        this._submitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBackSubmit()
            this.close()
        });
    }

    setObjectToRemove(obj) {
        this._objectToRemove = obj;
    }

    returnObject() {
        return this._objectToRemove;
    }

    removeItem() {
        this._objectToRemove.remove();
    }
}