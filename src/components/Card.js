export class Card {
    
    constructor({data, handleCardClick, handleDeleteClick, handleLikeClick}, templateSelector, myId) {
        this._fotoTitle = data.name;
        this._fotoLink = data.link;
        this._likesArray = data.likes;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._myId = myId;
    }


    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.foto-table__list').cloneNode(true);
        
        return cardElement
    }

    _checkIsLiked() {
        this._isLiked = false;
        this._likesArray.forEach(element => {   
            if (element._id === this._myId) {
                this._isLiked = true;
            } 
        });
        return this._isLiked
    }

    paintLikeHeart() {
        this._element.querySelector('.foto-table__like-button').classList.toggle('foto-table__like-button_black')
    }

    pasteLikesNumber(num) {
        this._element.querySelector('.foto-table__likes-number').textContent = num;
    }

    resetLikesArray(newLikesArr) {
        this._likesArray = newLikesArr
    }

    _setEventListeners() {
        this._currentFoto = this._element.querySelector('.foto-table__foto');

        this._element.querySelector('.foto-table__like-button').addEventListener('click', evt => {
            console.log(this._checkIsLiked())
            this._handleLikeClick(this._cardId, this._checkIsLiked());
        });

        this._element.querySelector('.foto-table__delete-button').addEventListener('click', evt => {
            this._obj = evt.target.closest('.foto-table__list');
            this._handleDeleteClick(this._obj);
        });

        this._currentFoto.addEventListener('click', evt => {
            this._handleCardClick()
        });

        this._element.querySelector('.foto-table__likes-number').textContent = this._likesArray.length;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        
        if (this._ownerId !== this._myId) {
            this._element.querySelector('.foto-table__delete-button').classList.add('foto-table__delete-button_content_hidden');
        }
        this._element.id = this._cardId;
        this._element.querySelector('.foto-table__name').textContent = this._fotoTitle;
        this._currentFoto.src = this._fotoLink;
        this._currentFoto.alt = this._fotoTitle;

        return this._element
    }

}


