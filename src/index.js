import "./pages/index.css";
import { initialCards } from "./scripts/cards";

const cardTemplate = document.querySelector("#card-template").content;
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

function makeCard(card, deleteCard) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector('.card__like-button')


  cardLikeButton.addEventListener('click', () => likeActive(cardLikeButton))
  
  cardDeleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });
  cardImage.addEventListener("click", () =>
    openPopupImage(card.name, card.link)
  );

  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function openPopup(popup) {
  popup.classList.add("popup_is-opened");

  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDesc.value = profileTextDescription.textContent;
}

function openPopupImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openPopup(popupTypeImage);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}

function handleFormEdit(e) {
  e.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileTextDescription.textContent = popupInputTypeDesc.value;

  closePopup(popupTypeEdit);
}

function likeActive(like) {
  like.classList.toggle('card__like-button_is-active')
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

profileEditButton.addEventListener("click", () => openPopup(popupTypeEdit));
profileAddButton.addEventListener("click", () => openPopup(popupTypeNewCard));

closePopupButtons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const popup = buttons.closest(".popup");
    closePopup(popup);
  })
});

popupFormEdit.addEventListener("submit", handleFormEdit);
popupFormNewCard.addEventListener('submit', handleNewCard);

initialCards.forEach(function (card) {
  cardContainer.append(makeCard(card, deleteCard))
});

