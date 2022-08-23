// Condional simple if

// sintaxis

// if(condicion){
  // codigo que se ejecuta si la condicion nos da true
// }

// const edad = 35;

// if(edad >= 18){
//   console.log('Bienvenid@ a la tienda de licores de Ada :)')
// } else {
//   console.log('Eres menor de edad no te podemos vender nada :(')
// }


// Si el usuario tiene menos de 18 años le mostramos un mensaje de que no le podemos vender 
// Si el usuario tiene menos de 30 años le vendemos promos de cerveza al 2 x 1
//  si el usuario es mayor a 30 a


// si  es lunes que nos muestre un msj que diga "Vamos a iniciar la semana con todo! "
// Si  es martes un msj que diga " Ya pasamos lo peor"
// Si es miercoles un msj que diga Estamos a la mitad de la semana 
// Si es jueves Msj que diga "Ya casi es viernes"
// Si es viernes que diga "Por fin es viernes"
// Si otro día que diga "Feliz fin de semana"

// const dia = 'domingo';

// if(dia === 'lunes'){
//   console.log("Vamos a iniciar la semana con todo!")
// } else if(dia === 'martes'){
//   console.log(" Ya pasamos lo peor")
// } else if (dia === 'miercoles'){
//   console.log('Estamos a la mitad de la semana')
// } else if(dia === 'jueves'){
//   console.log("Ya casi es viernes")
// } else if(dia === 'viernes'){
//   console.log("Por fin es viernes")
// } else {
//   console.log("Feliz fin de semana")
// }


// operadores de condionales  && y ||


// pelicula pide un minimo de 14 años o permiso de sus padres

// const edad = 12;
// const permisoPadres = false;

// if(edad >= 14 || permisoPadres === true){
//   console.log('Bievenido a la pelicula mas terrofica que verás!!')
// } else {
//   console.log('lo sentimos te vas a perder la peli  :(')
// }


// evaluando a estudiantes para pasar deben de tener calificacion mayor a 7 y asistencia mayor a 70

// const calificacion = 6;
// const asistencia = 100;

// if(calificacion >= 7 && asistencia >= 70){
//   console.log('Aprobaste el curso, felicidades!!!')
// } else {
//   console.log('Lo siento vas a tener que repetir el curso :/ ')
// }


// const user = 'admin@admin.com'; // en la base de datos
// const pass = 'admin1234'; // en la base de datos

// const usuario = 'admin@gmail.com'; // ingresa en nustro form
// const contrasenia = 'admin1234'; // ingresa en nustro form


// if(user !== usuario || pass !== contrasenia){
//   console.log('el usuario o la contraseña no son correctos!')
// } else {
//   console.log('Bienvenid@ a nuestro sitio')
// }


// Si el usuario tiene menos de 18 años : "No te podemos vender"
//Si el usuario tiene mas de 18 y menos de 25 :Tenemos promo en cerveza al 2 X 1
//Si el usuario tiene mas de 26 y menos de 35 :Tenemos promo en Ron al 2 X 1
//Si el usuario tiene mas de 36 y menos de 45 :Tenemos promo en Whisky al 2 X 1
//Si el usuario tiene mas de 46 y menos de 55 :Tenemos promo en Vinotinto al 2 X 1
//Si el usuario tiene mas de 56 :Tenemos promo en Tequila al 2 X 1

const evaluarEdad = () => {
  const edad = Number(prompt('Proporciona tu edad!'));
  if(edad <= 18){
    alert("No te podemos vender")
  } else if(edad >= 18 && edad < 25){
    alert('Tenemos promo en cerveza al 2 X 1')
  } else if(edad >= 26 && edad < 35){
    alert('Tenemos promo en Ron al 2 X 1')
  } else if(edad >= 36 && edad < 45){
    alert('Tenemos promo en Whisky al 2 X 1')
  } else if(edad >= 46 && edad < 55){
    alert('Tenemos promo en Vino tinto al 2 X 1')
  } else {
    alert('Tenemos promo en Tequila al 2 X 1')
  }
}


// const edad = 10;
// operador ternario
// if(edad >= 18){
//   console.log('Bienvenid@ a la tienda de licores de Ada :)')
// } else {
//   console.log('Eres menor de edad no te podemos vender nada :(')
// }

// edad >= 18 
//   ? console.log('Bienvenid@ a la tienda de licores de Ada :)') 
//   : console.log('Eres menor de edad no te podemos vender nada :(')



// Bucles  (for)

// for(inicializacion; limite; incremento){
//   ejecucion
// }

// for(let i = 0; i <= 3; i = i + 1){
//   console.log(i)
// }

//  i 

//  0, 1, 2, 3, 4


// console.log(palabra[0]) // H
// console.log(palabra[1]) // o
// console.log(palabra[2]) // l
// console.log(palabra[3]) // a

// Quiero saber si hay una letra a en esta palabra y quiero que me muestre un msj que si la encontro

// posicion visual   4
               //1234
// const palabra = 'Hola Mundo! ana maria'; //  valor palabra[i]  20
               //0123     posicion   i
// posicion logica

// i, 0, 1, 2, 3... 12, 13, 14

// for(let i = 0; i < palabra.length; i++){
//   const letra = palabra[i]; // a
//   if(letra === 'a'){
//     console.log(`La letra a se encuentra en la posicion ${i}`)
//   }
// }

// While

// for(let i = 0; i <= 3; i++){
//   console.log(i)
// }

// let i = 0; 

// while(i < palabra.length){
// const letra = palabra[i]; // a
//   if(letra === 'a'){
//     console.log(`La letra a se encuentra en la posicion ${i}`)
//   }
//   i++
// }


// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)


// const estaEnRango = (valor, minimo, maximo) => {
//   if(valor >= minimo && valor <= maximo){
//     return  true
//   } else {
//     return false
//   }
// }

// console.log(estaEnRango(3, 1, 10) )  // true
// console.log(estaEnRango(1, 1, 10) )  // true
// console.log(estaEnRango(10, 1, 10))  // true
// console.log(estaEnRango(12, 1, 10))  // false
// console.log(estaEnRango(-3, 1, 10))  // false

// 🔢 Números impares
// Crear un programa que muestre en consola los números impares entre el 0 y el 20
const sacarnumeroImpares = () => {
  for(let i = 0; i <= 20; i++){
    if(i % 2 !== 0){
      console.log(i);
    }
  }
}

sacarnumeroImpares();