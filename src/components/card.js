import { openPopupImage } from "./index.js";

const cardTemplate = document.querySelector("#card-template").content;

export function makeCard(card, deleteCard, openPopupImage) {
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
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
  
    return cardElement;
  }

export function deleteCard(card) {
    card.remove();
  };

function likeActive(like) {
    like.classList.toggle('card__like-button_is-active')
  };