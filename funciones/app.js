// console.log(suma());
// Funciones delaradas  ES5
// declaración 
// function suma(){
//   return 3 + 3
// }
// ejecución


// Funciones expresadas ES5
// declaracion
// const suma = function(){
//   return 3 + 3;
// }
// console.log(suma())
// ejecucuion

// const num1 = 9;
// const num2 = 5;

// Funciones flecha ES6
// parametros en la declaración


// retorno implicito
// const suma = (num1, num2) => {
//   return num1 + num2;
// }

// const suma = (num1, num2) => num1 + num2;


// const resultadoSuma = suma(3, 5); // 8

// console.log(resultadoSuma)

// const resta = (num1, num2) => {
//   return num1 - num2;
// }

// const multiplicar = (num1, num2) => {
//   return num1 * num2
// }

// const resultadoResta = resta(resultadoSuma, 4) // 4

// console.log(multiplicar(resultadoResta, 3)) // 12

// ejecucion argumentos
// console.log(suma(9, 5)); // 14
// console.log(suma(6, 5474)); // 5480
// console.log(suma(1, 1)); // 2
// console.log(suma(8, 3)); // 11
// ejecucion 
// suma()

// const obtenerDatos = () => {
//   const nombre = prompt('Ingresa tu nombre')
//   const apellido = prompt('Ingresa tu apellido')
//   const anioNacimiento = prompt('Ingresa tu año de nacimiento')
//   const edad = generarAnio(anioNacimiento);
//   const saludo = generarSaludo(nombre, apellido, edad);
//   console.log(saludo)
//   alert(saludo)
//   return saludo;
// }
                // 1986    =>  2022 - 1986 = 36
// const generarAnio = anio => 2022 - anio;

// const generarSaludo = (nombre, apellido, edad) => `Hola ${nombre} ${apellido}, hemos calculado tu edad, tienes: ${edad} años`




// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

// const esPar = num => num % 2 === 0


// console.log(esPar(2)) // true
// console.log(esPar(3)) // false


// esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

  // const esImpar = num => num % 2 !== 0

// console.log(esImpar(2)) // false
// console.log(esImpar(3)) // true

