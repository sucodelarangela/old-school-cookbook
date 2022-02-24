// Collecting data
const imageUrl = document.querySelector('[data-imgUrl]')
const recipeName = document.querySelector('[data-recipeName]')
const ingredients = document.querySelector('[data-ingredients]')
const procedures = document.querySelector('[data-procedures]')
const tags = document.querySelector('[data-tags]')

// Creating new recipe
function saveRecipe() {
  if (
    imageUrl.value.endsWith('.jpg') ||
    imageUrl.value.endsWith('.png') ||
    imageUrl.value.endsWith('.jpeg')
  ) {
    // Create and save recipe to IndexedDB using localbase library
    db.collection('recipes').add({
      image: imageUrl.value,
      name: recipeName.value,
      ingredients: ingredients.value,
      procedures: procedures.value,
      tags: tags.value
    })

    // Clear fields
    imageUrl.value = ''
    recipeName.value = ''
    ingredients.value = ''
    procedures.value = ''
    tags.value = ''

    db.collection('recipes').doc('start').delete({})
    alert('Receita salva com sucesso')
  } else {
    alert('Insira um formato de imagem válido')
    imageUrl.focus()
  }
}

function getRecipes() {
  db.collection('recipes')
    .get()
    .then(recipes => {
      const cardsContainer = document.querySelector('[data-cards]')

      recipes.forEach(obj => {
        const card = document.createElement('div')
        card.classList.add('cards__link')
        card.innerHTML = `<div onclick="openRecipes()" c><img src="${obj.image}" alt="Prato pronto" onerror="this.onerror=null;this.src='assets/images/empty_plate.jpg'" />
        <h4 class='title'>${obj.name}</h4>
        <p style="display:none;" data-tags="hidden">${obj.tags}</p>
        </div>`
        cardsContainer.appendChild(card)
      })
    })
}

function search() {
  const tagToSearch = document.querySelector('[data-search]')
  const tagNames = document.querySelectorAll('[data-tags="hidden"]')
  const errorMsg = document.querySelector('[data-error]')

  tagNames.forEach(tag => {
    if (tag.textContent.includes(tagToSearch.value)) {
    } else {
      tag.parentNode.parentNode.style.display = 'none'
    }

    tagToSearch.addEventListener('keydown', event => {
      const key = event.key
      if (
        ((key === 'Backspace' || key === 'Delete' || key === 'Escape') &&
          tagToSearch.value.length == 1) ||
        key === 'Escape'
      ) {
        tag.parentNode.parentNode.style.display = 'grid'
      }
    })
  })
}

export {saveRecipe, getRecipes, search}
