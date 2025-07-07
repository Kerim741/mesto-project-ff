import "../pages/index.css";
import { initialCards } from "../scripts/cards.js";
import { makeCard, deleteCard } from "./card.js";
import { openPopup, closePopup } from "./modal.js";

const cardContainer = document.querySelector(".places__list");

const profileTitle = document.querySelector(".profile__title");
const profileTextDescription = document.querySelector(".profile__description");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupFormEdit = popupTypeEdit.querySelector(".popup__form");
const popupInputTypeName = popupFormEdit.querySelector(
  ".popup__input_type_name"
);
const popupInputTypeDesc = popupFormEdit.querySelector(
  ".popup__input_type_description"
);

const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupFormNewCard = popupTypeNewCard.querySelector('.popup__form')
const popupInputNameNewCard = popupFormNewCard.querySelector('.popup__input_type_card-name')
const popupInputLinkNewCard =  popupFormNewCard.querySelector('.popup__input_type_url')

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

const closePopupButtons = document.querySelectorAll(".popup__close");

const popups = document.querySelectorAll('.popup');


function handleFormEdit(e) {
  e.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileTextDescription.textContent = popupInputTypeDesc.value;

  closePopup(popupTypeEdit);
}

function handleNewCard(e) {
  e.preventDefault();
  const card = {
    name: popupInputNameNewCard.value,
    link: popupInputLinkNewCard.value
  };
  cardContainer.prepend(makeCard(card, deleteCard))

  closePopup(popupTypeNewCard)
  popupFormNewCard.reset();
}

function openPopupImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openPopup(popupTypeImage);
}

profileEditButton.addEventListener("click", () => openPopup(popupTypeEdit));
profileAddButton.addEventListener("click", () => openPopup(popupTypeNewCard));

closePopupButtons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const popup = buttons.closest(".popup");
    closePopup(popup);
  })
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target === popup) {
      closePopup(popup)
    }
  })
})

popupFormEdit.addEventListener("submit", handleFormEdit);
popupFormNewCard.addEventListener('submit', handleNewCard);

initialCards.forEach(function (card) {
  cardContainer.append(makeCard(card, deleteCard))
});

