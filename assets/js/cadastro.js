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
      id: indexedDB.length,
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
  } else {
    console.log('erro')
  }
}

export default saveRecipe
