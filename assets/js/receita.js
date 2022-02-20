function openRecipes() {
  const links = document.querySelectorAll('.cards__link')
  links.forEach(link => {
    link.addEventListener('click', () => {
      const recipeName = link.innerText
      const recipeImg = link.querySelector('img').src
      console.log(recipeImg)

      db.collection('recipes')
        .doc({name: recipeName})
        .get()
        .then(recipe => {
          const name = recipe.name
          const ingredients = recipe.ingredients.split(',')
          const items = []
          console.log(ingredients)
          for (let i = 0; i < ingredients.length; i++) {
            var item = `<li>${ingredients[i]}</li>`
            items.push(item)
          }
          const procedures = recipe.procedures
          const tags = recipe.tags
          const recipePage = window.open('', '_self')
          recipePage.document.write(`<!DOCTYPE html>
          <html lang="pt-br">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>The Old School Cookbook | Receita</title>
              <style>
              ul {
                visibility: hidden;
              }

              ul li {
                visibility: visible;
                opacity: 1;
              }
              </style>
            </head>
            <body>
              <header>
                <h1>The Old School Cookbook</h1>
                <a href="index.html" role="button">Home</a>
              </header>
              <main>
                <img height="120px" src="${recipeImg}" alt="Comida pronta" onerror="this.onerror=null;this.src='assets/images/empty_plate.jpg'" />
                <h2>${name}</h2>
                <h3>Ingredientes</h3>
                <ul>${items}</ul>
                <h3>Passo a passo</h3>
                <p>${procedures}</p>
                <h3>Tags</h3>
                <p>${tags}</p>
              </main>
              <a href="caderno.html">Voltar para o caderno</a>
              <button type="button" onclick="deleteRecipe()">Excluir receita</button>
              <footer>Rodapé</footer>
            </body>
          </html>`)
        })
    })
  })
}

function deleteRecipe() {
  const title = document.querySelector('h2').innerText
  db.collection('recipes').doc({name: title}).delete()
  location.reload()
}
