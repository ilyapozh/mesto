export class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        
    }

    open() {

        this._popup.classList.add('popup_opened')
        
    }

    close() {
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt))
        document.removeEventListener('click', (evt) => this._handleOverlayClose(evt));
        this._popup.classList.remove('popup_opened')
        
    }

    setEventListeners() {
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        document.addEventListener('click', (evt) => this._handleOverlayClose(evt));
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