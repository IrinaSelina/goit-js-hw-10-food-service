import cardsTemplate from './templates/cards.hbs';
import './css/styles.css';
import cards from './menu.json';
const jsMenu = document.querySelector('.js-menu')
const body = document.querySelector('body')
const input = document.querySelector('.theme-switch__toggle')
// const makeMenuCard = menuCard(cards);
const makeMenuCard = cardsTemplate(cards);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
jsMenu.insertAdjacentHTML('beforeend', makeMenuCard)
// function menuCard(cards) {
//    return cardsTemplate(cards)
// }

body.classList.add("light-theme")

function changeTheme(evn) {
   if (evn.target === input) {
      if (input.checked) {
         body.classList.replace('light-theme', 'dark-theme')
         localStorage.setItem('theme', body.className)
         // localStorage.setItem('check', input.checked)
         return                    
      }
      if (!input.checked) {
         body.classList.replace('dark-theme', 'light-theme')
         localStorage.setItem('theme', body.className)
         // localStorage.setItem('check', input.checked)
      }
   }
   }    

 window.addEventListener('click', changeTheme)
   
function chek() {
   if (localStorage.getItem('theme') === Theme.DARK) {
      body.classList.toggle(Theme.DARK)
      // input.checked = localStorage.getItem('check')
     input.checked = true
      return
   }
  
   return
   }
 
chek()


