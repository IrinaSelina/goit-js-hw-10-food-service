import cardsTemplate from './templates/cards.hbs';
import './css/styles.css';
import cards from './menu.json';
const jsMenu = document.querySelector('.js-menu')
const body = document.querySelector('body')
const input = document.querySelector('.theme-switch__toggle')
const makeMenuCard = menuCard(cards);
jsMenu.insertAdjacentHTML('beforeend', makeMenuCard)

function menuCard(cards) {
  
   return cardsTemplate(cards)
}
body.classList.add("light-theme")
window.addEventListener('click', changeTheme)


function changeTheme(evn) {
      
   if (evn.target === input) {
      // const curentClass = body.className;
      if (body.classList.contains('light-theme')) {
         body.classList.replace('light-theme', 'dark-theme')
         localStorage.setItem('theme', body.className)
        
         return
      }
      if (body.classList.contains('dark-theme')) {
         body.classList.replace('dark-theme', 'light-theme')
         localStorage.setItem('theme', body.className)
         
         return 
      }

   }
   
}
// window.addEventListener("DOMContentLoaded", pageReb)

// function pageReb(evt) {
//     evt.preventDefault();
// }
//   localStorage.setItem('theme', className)

// function onClassBody() {
//    const curentClass = body.className;
//    console.log(curentClass);
// }

// localStorage.setItem('theme')


