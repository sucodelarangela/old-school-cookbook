import {getRecipes} from './cadastro.js'

getRecipes()

//Toggle menu open
const nav = document.querySelector('[data-nav]')
const menuButton = document.querySelectorAll('[data-toggle]')

for (const elem of menuButton) {
  elem.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}
