// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// const sumarNumeros = arr => {  
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) { // arr.length == 5
//     count = count + arr[i]
//   }
//   console.log(count)
// }

// i        arr[i]     count
// 5          24         58

// sumarNumeros([5, 7, 10, 12, 24]) // 58

// contiene(numero, numeros)
// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// const contiene = (numero, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if(numero === arr[i]){
//       return true
//     } else {
//       // return false
//     }
//     // return numero === arr[i] ? true : false
//   }
// }


// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false

// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// const separar = str => {
//   let perros = '';
//   let gatos = '';
//   for (let i = 0; i < str.length; i++) {
//     if(str[i] === 'P'){
//       perros = perros + str[i]
//     } else if(str[i] === 'G'){
//       gatos += str[i]
//     }
//   }
//   const juntos = perros + gatos
//   console.log(juntos)
// }


// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'
// separar('PGPGGPP') // 'PPPPGGG'

// multiplicar(multiplicador, numeros)
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// const multiplicar = (num, arr) => {
//   let multiplicado = [];
//   for (let i = 0; i < arr.length; i++) {
//     multiplicado.push(num * arr[i])
//   }
//   console.log(multiplicado)
// }


// multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
// multiplicar(10, [2, 5, 77]) // [20, 50, 770]

// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

// const filtrarPorLongitudMayorA = (longitud, arr) => {
//   let mayores = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].length > longitud){
//       mayores.push(arr[i])
//     }
//   }
//   console.log(mayores)
// }

// filtrarPorLongitudMayorA(4, [
//   'dia',
//   'remolacha',
//   'azul',
//   'sorpresa',
//   'te',
//   'verde',
// ]) // ['remolacha', 'sorpresa', 'verde']


// Ejercicios con DOM
// Para los siguientes ejercicios, no es necesario darle estilos más allá de los básicos que requiera el ejercicio para visualizarse correctamente. Se pueden utilizar funciones realizadas en los ejercicios previos.

// 📝 Lista de tareas
// Crear un programa que muestre:
// un input de texto  X
// un botón que diga Agregar tarea  X 
// una lista ul X
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.  X 
// Para actualizar la lista se debe:
// borrar todo lo que contenga X
// recorrer el array y por cada ítem  x 
// insertar un ítem de lista li con el valor del ítem del array  x


const btnAgregar = document.getElementById('btn-agregar');
const inputAgregar = document.getElementById('input-agregar');
const listaTareas = document.getElementById('lista-tareas');

const lista = []; // ['uno', 'dos', 'nueva']

btnAgregar.addEventListener('click', () => {
  if(inputAgregar.value.trim().length === 0){
    alertify.error('Todos los campos son obligatorios :)'); 
    return
  }
  lista.push(inputAgregar.value) /// nueva
  let str = ''; // '<li>uno</li><li>dos</li><li>nuevo</li>'
  for (let i = 0; i < lista.length; i++) {
    str += `<li>${lista[i]}</li>`
  }
  listaTareas.innerHTML = str;
  inputAgregar.value = '';
  alertify.success('Tarea agregada :)'); 
})
