// // Selectores Js

// // getElementById (window.document)  => Un unico elemento
// // Trae el primer elemento que coicida con el id
// // const primero = document.getElementById('primero');
// // console.log(primero)

// // getelementsByClassName Traer todos los elementos que tengan el nombre de la clase que nosotros le pasemos

// // const elegido = document.getElementsByClassName('elegido')  // => [] htmlCollection

// // console.log(elegido)

// // getElementsByTagName Traer todos los elementos del tipo de una etiqueta 

// // const parrafos = document.getElementsByTagName('p')
// // console.log(parrafos)

// // querySelectorAll Traertodos los elementos por etiqueta, por clase o por id

// // const elementos = document.querySelectorAll('#primero');
// // console.log(elementos)

// // querySelector  Trae el primero elemento que encuentre de etqueta, clase o id

// // const elemento = document.querySelector('#primero')
// // console.log(elemento)


// const parrafos = document.querySelectorAll('p') // [elemento, elemento, elemento]

// for (let i = 0; i < parrafos.length; i++) {
//   parrafos[i].classList.add('green')  // => Añade una clase de css que nosotros tengamos en nuestros estilos
// }

// const elegidos = document.querySelectorAll('.elegido') // [elemento, elemento, elemento]

// for (let i = 0; i < elegidos.length; i++) {
//   elegidos[i].classList.remove('green') // => Elimina una clase que contenga el elemento
//   elegidos[i].classList.add('azul')
// }


// const primero = document.getElementById('primero') // elemento
// primero.classList.remove('green')
// primero.classList.add('rojo')

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// botones
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const darkModeBtn = document.getElementById('dark-mode');

// secciones
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const body = document.getElementById('body')

// formulario
const enviarForm = document.getElementById('enviar-form')
const firstName = document.getElementById('first_name')
const paises = document.getElementById('paises')
const terminos = document.getElementById('terminos')

homeBtn.addEventListener('click', () => {
  home.classList.remove('oculto')
  about.classList.add('oculto')
  contact.classList.add('oculto')
})

aboutBtn.addEventListener('click', () => {
  home.classList.add('oculto')
  contact.classList.add('oculto')
  about.classList.remove('oculto')
})

contactBtn.addEventListener('click', () => {
  contact.classList.remove('oculto')
  home.classList.add('oculto')
  about.classList.add('oculto')
})

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode')
})


enviarForm.addEventListener('click', () => {
  console.log('enviando')
})

// firstName.addEventListener('input', () => { // detecta cualquier modificacion
//   console.log(firstName.value)
// })
// firstName.addEventListener('keyup', () => { // detecta cuando la tecla esta siendo soltada
//   console.log(firstName.value)
// })
// firstName.addEventListener('keydown', () => { // detecta cuando la tecla esta siendo apretada
//   console.log(firstName.value)
// })

// firstName.addEventListener('keypress', () => { // detecta cuando la tecla esta siendo apretada
//   console.log(firstName.value)
// })
// firstName.addEventListener('focus', () => { // detecta cuando el usuario le hace focus al input
//   console.log('firstName.value')
// })
// firstName.addEventListener('blur', () => { // detecta cuando la tecla esta siendo apretada
//   console.log(firstName.value)
// })

// paises.addEventListener('change', () => { // detectael cambio de option
//   console.log(paises.value)
// })

// terminos.addEventListener('click', () => {
//   console.log(terminos.checked)
// })