const root = document.getElementById('root');
const loader = document.getElementById('contenedor');

// paginador

const paginaActual = document.getElementById('pagina-actual')
const totalPaginas = document.getElementById('total-paginas')

let pagina = 1;

const getData = async () => {
  const url = `https://rickandmortyapi.com/api/character?page=${pagina}`
  const response = await fetch(url)
  const json = await response.json();
  paginaActual.innerHTML = pagina;
  totalPaginas.innerHTML = json.info.pages
  printData(json.results)
  setTimeout(() => {
    root.classList.remove('esconder')
    loader.classList.add('esconder')
  },1700)
  data = json;
}

let data = {};

console.log(json)

getData()



const printData = arr => {
  let card = '';
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