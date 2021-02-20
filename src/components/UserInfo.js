export class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
        this._nameInput = document.querySelector('#name-input');
        this._jobInput = document.querySelector('#job-input');
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._nameElement.textContent;
        userInfo.about = this._aboutElement.textContent;
        return userInfo
    }

    setUserInfo(info) {
        this._nameElement.textContent = info.name;
        this._aboutElement.textContent = info.about;
    }

    pasteUserInfo(info) {
        this._nameInput.value = info.name;
        this._jobInput.value = info.about;
    }
}