function overlayCloseCallBack(evt) {
    if (evt.target.classList.contains('popup_opened')) { 
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup); 
    } 
}

function escCloseCallBack (evt) {
    if (evt.key === "Escape" ) { 
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup); 
    } 
}

export function togglePopup(popup) {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.toggle('popup_opened');
        document.removeEventListener('keydown', escCloseCallBack);
        document.removeEventListener('mousedown', overlayCloseCallBack);
        
    } else {
        popup.classList.toggle('popup_opened');
        document.addEventListener('keydown', escCloseCallBack);
        document.addEventListener('mousedown', overlayCloseCallBack);
    }    
};

