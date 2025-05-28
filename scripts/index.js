const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.places__list');

function makeCard(card, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardButton = cardElement.querySelector('.card__delete-button');
    cardButton.addEventListener('click', () => {
      deleteCard(cardElement)
    });

    cardImage.src = card.link;
    cardTitle.textContent = card.name;

    return cardElement;
};

function deleteCard(card) {
  card.remove();
};

initialCards.forEach(function (card) {
  cardContainer.append(makeCard(card, deleteCard));
});

