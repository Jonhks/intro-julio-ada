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
}

const root = document.getElementById('root');

getData(url)

const printData = json => {
  const drinks = json.drinks;// [100-obetosDeBebidas]
  let str = '';
  for(let i = 0; i < drinks.length; i++){
    const bebida = drinks[i]
    console.log(bebida)
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
        </div>
      </div>`
  }
  root.innerHTML = str;
}