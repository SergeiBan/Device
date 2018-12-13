let map = document.querySelector('.map__big');
let smallMap = document.querySelector('.map__small');
let mapBigClose = document.querySelector('.map__big-close');
let contactsLinkDetails = document.querySelector('.contacts__link-details');
let contactsForm = document.querySelector('.contacts__form');
let contactsModalClose = document.querySelector('.contacts__modal-close');

smallMap.addEventListener('click', () => {
  map.classList.remove('not-shown');
});

mapBigClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  map.classList.add('not-shown');
});

contactsLinkDetails.addEventListener('click', (evt) => {
  evt.preventDefault();
  contactsForm.classList.remove('not-shown');
});

contactsModalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  contactsForm.classList.add('not-shown');
});