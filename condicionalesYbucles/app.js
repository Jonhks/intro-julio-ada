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


