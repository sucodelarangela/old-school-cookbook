import {saveRecipe} from './cadastro.js'

const saveBtn = document.querySelector('[data-save]')
saveBtn.addEventListener('click', saveRecipe)

// Resize textarea height according to content
const procedures = document.querySelector('[data-procedures]')
const ingredients = document.querySelector('[data-ingredients]')

procedures.addEventListener('input', function (e) {
  this.style.height = 'auto'
  this.style.height = this.scrollHeight + 'px'
})
ingredients.addEventListener('input', function (e) {
  this.style.height = 'auto'
  this.style.height = this.scrollHeight + 'px'
})

//Toggle menu open
const nav = document.querySelector('[data-nav]')
const menuButton = document.querySelectorAll('[data-toggle]')

for (const elem of menuButton) {
  elem.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}
