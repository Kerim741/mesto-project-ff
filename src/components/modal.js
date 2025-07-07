export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener('keydown', handleEscClose);

  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDesc.value = profileTextDescription.textContent;
};

export function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener('keydown', handleEscClose);
  };

  function handleEscClose(evt) {
    if(evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_is-opened');
      if(openedPopup) {
        closePopup(openedPopup)
      }
    }
  };