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
  } else {
    console.log('erro')
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
        card.innerHTML = `<div onclick="openRecipes()"><img height="120px" src="${obj.image}" alt="Prato pronto" onerror="this.onerror=null;this.src='assets/images/empty_plate.jpg'" />
        <h4>${obj.name}</h4></div>`
        cardsContainer.appendChild(card)
      })
    })
}

export {saveRecipe, getRecipes}
