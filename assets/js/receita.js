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
          recipePage.document.write(
            `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Poppins:wght@400;700&family=Special+Elite&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="assets/css/base.css" />
  <link rel="stylesheet" href="assets/css/receita.css" />
  <link rel="stylesheet" href="assets/fonts/icons.css" />
  </head>
    <body>
      <!-- Header -->
      <header class="header">
        <nav class="header__nav" data-nav>
          <h1 class="header__title title">Old-School Cookbook</h1>
          <div class="header__nav--menu">
            <ul class="header__nav--list">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="cadastro.html">Cadastro</a>
              </li>
              <li>
              <a href="caderno.html">Caderno</a>
              </li>
            </ul>
          </div>
          <div class="header__toggle icon-menu" data-toggle></div>
          <div class="header__toggle icon-close" data-toggle></div>
        </nav>
      </header>
      <main>
        <section class="container">
          <div class="cards">
            <div class="cards__link">
              <img class="cards__link--img" src="${recipeImg}" alt="Comida pronta" onerror="this.onerror=null;this.src='assets/images/empty_plate.jpg'" />
              <h4 class="title">${name}</h4>
              <img class="cards__tape-1" src="assets/images/tape-1.png" alt=""/>
              <img class="cards__tape-2" src="assets/images/tape-1.png" alt=""/>
            </div>
          </div>
        </section>
        <section class="directions">
          <h3 class="subtitle">Ingredientes:</h3>
          <ul>${items}</ul>
          <h3 class="subtitle">Passo a passo:</h3>
          <pre><p>${procedures}</p></pre>
          <h3 class="subtitle">Tags:</h3>
          <p>${tags}</p>
        </section>
        <section class="container">
          <button class="form__button title" type="button" onclick="deleteRecipe()">Excluir receita</button>
        </section>
      </main>
      <!-- Footer -->
      <footer class="footer">
        <div class="footer__brand subtitle">
          <a href="https://angelacaldas.vercel.app/">
            <i class="icon-logo"></i>
          </a>
          <p>Design & construção por Angela Caldas</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div class="footer__social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/angela-caldas/"
                target="_blank"
              >
                <i class="icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/sucodelarangela" target="_blank">
                <i class="icon-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sucodelarangela" target="_blank">
                <i class="icon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sucodelarangela" target="_blank">
                <i class="icon-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
  
      <div class="footer__bg">
        <img src="assets/images/footer-bg.png" alt="" />
      </div>
                <script>
              const nav = document.querySelector('[data-nav]')
const menuButton = document.querySelectorAll('[data-toggle]')

for (const elem of menuButton) {
  elem.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}
</script>
            </body>
          </html>`
          )
        })
    })
  })
}

function deleteRecipe() {
  const title = document.querySelector('h2').innerText
  db.collection('recipes').doc({name: title}).delete()
  location.reload()
}
