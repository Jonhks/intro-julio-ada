// Codigo Asincrono

// console.log("llegamos al salon")
// console.log("Le pedimos a Dani que vaya por la torta")
// setTimeout(()=> {
//   console.log("Dani nos dice que ya viene con la torta")
//   console.log("Dani llega con la torta");
// }, 3000)
// console.log("Partimos la torta")


const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

const getData = url => {
  fetch(url) // Nos retorna una promesa pendiente
    .then(response => response.json()) // Si la promesa se cumple exitosa, nos retorna la response
    .then(json => printData(json))
    .catch(err => console.error(err)) // Si la promesa falla nos muestra el error
    setTimeout(() =>{
      contenedor.classList.add('esconder');
      root.classList.remove('esconder');
    }, 2000)
}

const getReceta = id => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(url)
  .then(resp => resp.json())
  .then(json => printReceta(json))
  .catch(err => console.error(err))
}

const root = document.getElementById('root');
const contenedor = document.getElementById('contenedor');
const miCard = document.getElementsByClassName('mi-card')
const receta = document.getElementById('receta')

getData(url)

const printData = json => {
  const drinks = json.drinks;// [100-obetosDeBebidas]
  let str = '';
  for(let i = 0; i < drinks.length; i++){
    const bebida = drinks[i]
    // console.log(bebida)
    str = str + `
      <div class="col s12 m6 l3">
        <div class="card mi-card">
          <div class="card-image">
            <img src="${bebida.strDrinkThumb}">
          </div>
          <div class="card-content">
            <p>${bebida.strDrink}</p>
            <p>${bebida.idDrink}</p>
            <p>Bebida número: ${i + 1}</p>
          </div>
          <div class="card-action" id="${bebida.idDrink}">
          <a id="${bebida.idDrink}">Ver receta</a>
        </div>
        </div>
      </div>`
  }
  root.innerHTML = str;
  for(let i = 0; i < miCard.length; i++){
    const card = miCard[i];
    card.addEventListener('click', e => {
      getReceta(e.target.id)
    })
  }
}

const printReceta = json => {
  const trago = json.drinks[0]
  const str = `   
    <h2 class="mi-titulo">A True Amaretto Sour</h2>
    <div class="col s12 mi-box">
      <img class="materialboxed" width="650" src="https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg">
    </div>
    <div class="col s12">
      <p><b>receta.strDrink:</b> A True Amaretto Sour</p>
      <p><b>receta.strCategory:</b> Cocktail</p>
      <p><b>strAlcoholic:</b> Alcoholic</p>
      <p><b>strGlass:</b> Old-fashioned glass</p>
      <p><b>strIngredient1:</b> Amaretto</p>
      <p><b>strIngredient2:</b> Lemon</p>
      <p><b>strIngredient3:</b> Ice</p>
      <p><b>strIngredient4:</b> Maraschino cherry</p>
      <p><b>strMeasure1:</b> 1 jigger </p>
      <p><b>strMeasure2:</b> Juice of 1/2  </p>
      <p> <b>strInstructionsES:</b> "Frote el borde de un vaso helado con un trozo de limón. Pase el borde del vaso en un plato repetidamente en el azúcar granulada hasta que éste quede completamente escarchado. Colocar dentro de una coctelera el Amaretto con el jugo de 1/2 limón. Verter en el vaso y agregar hielo. Adorne con una cereza marrasquino.",</p>
      <p><b>dateModified:</b> 2016-08-31 19:49:32</p>
    </div>
  </div>`
  receta.innerHTML = str
  root.classList.add('esconder')
  receta.classList.remove('esconder')
} 
