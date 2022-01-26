const pageHeaderToggle = document.querySelector('.page-header__toggle');
const pageHeaderMenu = document.querySelector('.page-header__menu');
const orderButton = document.querySelector('.order-button');
const modal = document.querySelector('.modal');
const reviews = document.querySelectorAll('.reviews__item');
const next = document.querySelector('.reviews__btn--next');
const prev = document.querySelector('.reviews__btn--back');

reviews[0].classList.add('reviews__item--active');

const reviewsModel = [];
reviews.forEach(function(element, i) {
  reviewsModel.push (i === 0 ? true : false)
});

console.log(typeof(reviews));
console.log(reviews);
console.log(reviewsModel);

pageHeaderToggle.classList.add('page-header__toggle--visible');
pageHeaderMenu.classList.add('page-header__menu--closed');

pageHeaderToggle.addEventListener('click', function(evt) {
  pageHeaderMenu.classList.toggle('page-header__menu--closed');
});

orderButton.addEventListener('click', function() {
  modal.classList.add('modal--visible');
})

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    modal.classList.remove('modal--visible');
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.closest('.modal__container') === null) {
    modal.classList.remove('modal--visible');
  }
});

next.addEventListener('click', function() {
  const indexCurrentActive = reviewsModel.indexOf(true);
  if (indexCurrentActive < reviewsModel.length -1) {
    reviewsModel[indexCurrentActive] = false;
    reviewsModel[indexCurrentActive + 1] = true;
  }
  console.log(indexCurrentActive);
})
