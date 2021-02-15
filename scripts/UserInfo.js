export class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this._nameInput = document.querySelector(nameSelector);
        this._aboutInput = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        this._aboutInput.value = document.querySelector('.profile__profession').textContent;
        this._nameInput.value = document.querySelector('.profile__user-name').textContent;
    }

    setUserInfo() {
        document.querySelector('.profile__profession').textContent = this._aboutInput.value;
        document.querySelector('.profile__user-name').textContent = this._nameInput.value;
    }
}