import {PopupWithSubmit} from '../components/PopupWithSubmit.js'
import {Card} from '../components/Card.js';
import {FormValidator, validationConfig} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import './index.css';


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_content_edit-profile');
const formElementEdit = popupEdit.querySelector('.popup__container');
const popupAddPic = document.querySelector('.popup_content_add-pic');
const buttonOpenPopupAddPic = document.querySelector('.profile__add-pic-button');
const formElementAddPic = popupAddPic.querySelector('.popup__container');
const popupAvatar = document.querySelector('.popup_content_change-ava');
const formElementChangeAvatar = popupAvatar.querySelector('.popup__container');
const linkAvatarPic = document.querySelector('.profile__container');


const api =  new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
      authorization: '6ce3acee-c27a-427e-ae19-0119209cb02d',
      'Content-Type': 'application/json'
    }
  }); 


function createCard(data) {
    const card = new Card ({
        data, 
        handleCardClick: () => {
            popupWithImage.open(data);
        },
        handleDeleteClick: (obj) => {
            deletePopup.open();
            deletePopup.setObjectToRemove(obj)
        },
        handleLikeClick: (cardId, isLiked) => {
            if (isLiked) {
                api.deleteLike(cardId)
                .then(res => {
                    console.log(res)
                    card.resetLikesArray(res.likes)
                    card.pasteLikesNumber(res.likes.length)
                    card.paintLikeHeart()
                })
            } else {
                api.putLike(cardId)
                .then(res => {
                    console.log(res)
                    card.resetLikesArray(res.likes)
                    card.pasteLikesNumber(res.likes.length)
                    card.paintLikeHeart()
                })
            }
        }
    },
    '#card',
    'feeb4b325be842a88fe5cb6a'
    )
    const newCard = card.generateCard()
    return newCard
}


const validatorEditProfile = new FormValidator(validationConfig, formElementEdit);
validatorEditProfile.enableValidation();
validatorEditProfile.setButtonState(false);

const validatorAddPic = new FormValidator(validationConfig, formElementAddPic);
validatorAddPic.enableValidation();

const validatorAvatar = new FormValidator(validationConfig, formElementChangeAvatar);
validatorAvatar.enableValidation();
validatorAvatar.setButtonState(false);


const popupWithImage = new PopupWithImage('.popup_content_full-pic');
popupWithImage.setEventListeners();

const cardList = new Section({
    renderer: (data) => {

        const newCardElement = createCard(data);

        cardList.setItem(newCardElement);
    },
},
'.foto-table'
)

const userInfo = new UserInfo({
    nameSelector: '.profile__user-name',
    aboutSelector: '.profile__profession',
}, 
    function getUserInfoCallBack() {
        api.getUserInfo()
    }
);

const editPopup = new PopupWithForm('.popup_content_edit-profile', (formValues) => {
    const info = {
        name: formValues.name,
        about: formValues.job
    }
    
    api.updateUserInfo(info)
    .then(res => {
        console.log(res)
        userInfo.setUserInfo(info)
    })
    .catch(err => console.log(err))
    
    });

editPopup.setEventListeners();


buttonOpenPopupEdit.addEventListener('click', () => {
    validatorEditProfile.resetInputAndError();
    const currentUserInfo = userInfo.getUserInfo();
    userInfo.pasteUserInfo(currentUserInfo);
    editPopup.open();   
});


const addPicPopup = new PopupWithForm('.popup_content_add-pic', (formValues) => {
    const data = {
        name: `${formValues.picName}`,
        link: `${formValues.picLink}`,
        likes: [],
        owner: {
            _id: 'feeb4b325be842a88fe5cb6a',
        }
    }
    
    api.postCard(data)
    .then(res => {
        console.log(res)
        const finalData = Object.assign(data, res)
        const newCard = createCard(finalData);
        
        console.log(newCard)

        cardList.prependItem(newCard)
    })

})
addPicPopup.setEventListeners();

buttonOpenPopupAddPic.addEventListener('click', () => {
    validatorAddPic.resetInputAndError()
    addPicPopup.open()
});


const deletePopup = new PopupWithSubmit('.popup_content_delete', () => {
    api.deleteCard((deletePopup.returnObject()).id)
    .then(res => {
        console.log(res)
        deletePopup.removeItem()
    })
    .catch(err => console.log(err))       
});
deletePopup.setEventListeners();


const popupChangeAvatar = new PopupWithForm('.popup_content_change-ava', (avatarLink) => {
    console.log(avatarLink.avaLink)
    api.changeAvatar(avatarLink.avaLink)
    .then(res => {
        console.log(res)
        linkAvatarPic.querySelector('.profile__foto').src = res.avatar;
    })
})
popupChangeAvatar.setEventListeners()


linkAvatarPic.addEventListener('click', () => {
    validatorAvatar.resetInputAndError();
    popupChangeAvatar.open()
})



api.getUserInfo()
.then(userInformation => {
    userInfo.setUserInfo(userInformation)
    userInfo.setUserAvatar(userInformation.avatar)
    console.log(userInformation.avatar)
})
.catch(err => console.log(err))


api.getCardArray()
.then(cardArray => {
    cardList.renderItems(cardArray)
    console.log(cardArray)
})
.catch(err => console.log(err))




