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
          const image = recipe.image
          const name = recipe.name
          const ingredients = recipe.ingredients
          const procedures = recipe.procedures
          const tags = recipe.tags
          const newHtml = `<!DOCTYPE html>
          <html lang="pt-br">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>The Old School Cookbook | Receita</title>
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
                <p>${ingredients}</p>
                <h3>Passo a passo</h3>
                <p>${procedures}</p>
                <p>${tags}</p>
              </main>
              <a href="caderno.html">Voltar para o caderno</a>
              <footer>Rodapé</footer>
            </body>
          </html>`

          const winURL = URL.createObjectURL(
            new Blob([newHtml], {type: 'text/html'})
          )

          const win = window.open(winURL, 'win')
        })
    })
  })
}
