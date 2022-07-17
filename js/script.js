// достаем из html документа класс header__burger при помощи DOM и создаем переменную
let buttonBlock = document.querySelector('.header__burger')

// достаем из html документа класс body и создаем переменную
let bodyBlock = document.querySelector('.body')

// достаем из wrapper документа класс body и создаем переменную

let htmlBlock = document.querySelector('html')

// ? Прописываем функию блкировки 
function blockBodyFunck() {
   // вешаем событие click на кнопку
   buttonBlock.addEventListener('click', function (e) {
      // при клике на кнопку присваиваем акктивный класс для body
      htmlBlock.classList.toggle('lock')
      // при клике на кнопку присваиваем акктивный класс для wrapper

   })
}
blockBodyFunck()


// бургер
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      
   });
});

// Popup

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAl('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.close('.popup'));
         e.preventDefault();
      })
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}