const root = document.getElementById('root');
const loader = document.getElementById('contenedor');
const totalPersonajes = document.getElementById('total-personajes');

// paginador

const paginaActual = document.getElementById('pagina-actual')
const totalPaginas = document.getElementById('total-paginas')
const nextPage = document.getElementById('next-page')
const firstPage = document.getElementById('first-page')
const previusPage = document.getElementById('previus-page')
const lastPage = document.getElementById('last-page')

// filtros

const todos = document.getElementById('todos')
const mujeres = document.getElementById('mujeres')
const hombres = document.getElementById('hombres')

let pagina = 1;
let total = 0;

const getData = async () => {
  const url = `https://rickandmortyapi.com/api/character?page=${pagina}`
  const response = await fetch(url)
  const json = await response.json();
  total = json.info.pages;
  paginaActual.innerHTML = pagina;
  totalPaginas.innerHTML = total
  printData(json.results)
  // setTimeout(() => {
    root.classList.remove('esconder')
    loader.classList.add('esconder')
  // },1700)
  updatePagination()
  data = json;
  return json;
}

let data = {};

const printData = arr => {
  let card = '';
  totalPersonajes.innerHTML = arr.length
  arr.forEach((personaje) => {
    // console.log(personaje)
    card = card + `
    <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-image">
          <img src=${personaje.image}>
        </div>
        <div class="card-content">
          <p>Nombre: ${personaje.name}</p>
          <p>Genero: ${personaje.gender}</p>
          <p>Species: ${personaje.species}</p>
          <p>Status: ${personaje.status}</p>
          <p>Origin: ${personaje.origin.name}</p>
          <p>Location: ${personaje.location.name}</p>
        </div>
        <div class="card-action">
          <a href="#">Ver mas...</a>
        </div>
      </div>
    </div>`
  })
  root.innerHTML = card;
}

const pagination = async promesa => {
  const result = await promesa
  nextPage.addEventListener('click', () => {
    pagina += 1;
    getData()
  })
  previusPage.addEventListener('click', () => {
    pagina -= 1;
    getData()
  })
  lastPage.addEventListener('click', () => {
    if(pagina < result.info.pages){
      pagina = result.info.pages
      getData()
    }
  })
  firstPage.addEventListener('click', () => {
    if(pagina > 2){
      pagina = 1;
      getData()
    }
  })
}

const updatePagination = () => {
  if(pagina <= 1){
    previusPage.disabled = true;
    firstPage.disabled = true;
  } else {
    previusPage.disabled = false;
    firstPage.disabled = false;
  }
  if(pagina === total ){
    nextPage.disabled = true
    lastPage.disabled = true
  } else {
    nextPage.disabled = false
    lastPage.disabled = false
  }
}

mujeres.addEventListener('click', () => {
  const arr = data.results;
  let arrMujeres = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].gender === 'Female'){
      arrMujeres.push(arr[i])
    }
  }
  printData(arrMujeres)
})

hombres.addEventListener('click', () => {
  const arr = data.results;
  const arrHombres = arr.filter(personaje => personaje.gender === 'Male')
  printData(arrHombres)
})

todos.addEventListener('click', () => {
  const arr = data.results;
  printData(arr)
})


pagination(getData())