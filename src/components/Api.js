export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._authorization = headers.authorization;
    }

    _setFetch(call, meth) {
        return fetch(`${this._baseUrl}${call}`, {
                    method: meth,
                    headers: {
                        authorization: this._authorization,
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    if (res.ok) {
                        
                        return res.json()
                    }
                    return (res.status)
                })
                
    }

    getUserInfo() {
        return this._setFetch('/users/me', 'GET');
    }


    getCardArray() {
        return this._setFetch('/cards', 'GET');
    }

    updateUserInfo(info) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-20/users/me', {
                    method: 'PATCH',
                    headers: {
                        authorization: this._authorization,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify ({
                        name: info.name,
                        about : info.about,
                    })
                })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    return (res.status)
                })
            
    }

    postCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-20/cards', {
                    method: 'POST',
                    headers: {
                        authorization: this._authorization,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify ({
                        name: data.name,
                        link: data.link,
                    })

                })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    return Promise.reject(`Ошибка: ${res.status}`)
                })
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    putLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    deleteLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    changeAvatar(avatarLink) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-20/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                avatar: `${avatarLink}`
            })

        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })

    }
    


}