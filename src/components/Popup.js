export class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._handleOverlayClose);
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._handleOverlayClose);
        this._popup.classList.remove('popup_opened');   
    }

    setEventListeners() {
        this._closeButton = this._popup.querySelector('.popup__close-button');
        this._closeButton.addEventListener('click', () => this.close());
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape" ) { 
            this.close()
        } 
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) { 
            this.close()
        } 
    }
    
}