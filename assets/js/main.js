import {saveRecipe} from './cadastro.js'

const saveBtn = document.querySelector('[data-save]')
saveBtn.addEventListener('click', saveRecipe)

// Resize textarea height according to content
const procedures = document.querySelector('[data-procedures]')
procedures.addEventListener('input', function (e) {
  this.style.height = 'auto'
  this.style.height = this.scrollHeight + 'px'
})

// Prevent white spaces on ingredients and tags inputs
const ingredients = document.querySelector('[data-ingredients]')
const tags = document.querySelector('[data-tags]')

ingredients.addEventListener('keypress', function (event) {
  var key = event.keyCode
  if (key === 32) {
    event.preventDefault()
  }
})

tags.addEventListener('keypress', function (event) {
  var key = event.keyCode
  if (key === 32) {
    event.preventDefault()
  }
})

//Toggle menu open
const nav = document.querySelector('[data-nav]')
const menuButton = document.querySelectorAll('[data-toggle]')

for (const elem of menuButton) {
  elem.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}
