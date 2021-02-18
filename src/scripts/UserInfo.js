export class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
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
        document.querySelector('#name-input').value = info.name;
        document.querySelector('#job-input').value = info.about;
    }
}