const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu-header');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

// catalog
const mainCatalog = document.querySelector('.main__catalog');
const mainMenu = document.querySelector('.main__menu');
// document.onclick = function (e) {
//   if (e.target.className != 'main__item') {
//     mainMenu.classList.remove('active');
//   }
// };
document.addEventListener('click', (e) => {
  if (mainMenu.classList.contains('active')) {
    if (e.target.className != 'main__item') {
      mainMenu.classList.remove('active');
    }
  } else {
    if (
      e.target.className == 'main__catalog' ||
      e.target.className == 'main__svg' ||
      e.target.className == 'main__p'
    ) {
      mainMenu.classList.add('active');
    }
  }
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

// helper
const helperChange = document.querySelector('.helper__change');
const helperButton = document.querySelector('.helper__button');
const helperClose = document.querySelector('.helper__close');
const helperBody = document.querySelector('.helper__body');

helperChange.addEventListener('click', (e) => {
  if (helperButton.classList.contains('active')) {
    helperButton.classList.remove('active');
    helperClose.classList.add('active');
    helperBody.classList.add('active');
  } else {
    helperClose.classList.remove('active');
    helperBody.classList.remove('active');
    helperButton.classList.add('active');
  }
});
