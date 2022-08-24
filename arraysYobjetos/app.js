// Arreglos

// const texto = 'Hola Mundo' // 10

// visual                1    ,    2    ,    3    ,   4     ,     5   ,   6
// const estudiantes = ['Daniela', 'Débora', 'Miriam', 'Romina', 'Vivana', 'Jonh'];
// logica                0    ,    1    ,     2   ,    3    ,     4   ,    5
// const root = document.getElementById('root');

// const agregarNombres = () => {
//   root.innerHTML = '';
//   const nuevoNombre = prompt('Ingresa un nuevo nombre!')
//   estudiantes.push(nuevoNombre)
//   for(let i = 0; i < estudiantes.length; i++){
//     root.innerHTML += `<p>Nombre: ${estudiantes[i]}</p>`
//     console.log(estudiantes[i])
//   }
// }


// const varios = ['Texto', 100, true, undefined, null, 
//   ['otro', 200, false, undefined, null, 
//     ['palabra', undefined, null, true, 900]
//   ]
// ]

// console.log(varios[5][5][4])




// console.log(estudiantes.length)

// console.log(estudiantes[0]) // Daniela
// console.log(estudiantes[1]) // Débora
// console.log(estudiantes[2]) // Miriam
// console.log(estudiantes[3]) // Romina
// console.log(estudiantes[4]) // Viviana
// console.log(estudiantes[5]) // Jonh

// console.log(document)

// traer elementos por etiqueta
// const parrafos = document.getElementsByTagName('p')
// for(let i = 0; i < parrafos.length; i++){ // []
//   parrafos[i].style.backgroundColor = 'cyan'
// }
// console.log(parrafos)


// traer elementos por clase
// const claseParrafo = document.getElementsByClassName('parrafo')
// for(let i = 0; i < claseParrafo.length; i++){ // []
//   claseParrafo[i].style.backgroundColor = 'yellow'
// }
// console.log(claseParrafo)

// treae un unico elemento
// const idParrafo = document.getElementById('primero')
// idParrafo.style.backgroundColor = 'red'
// console.log(idParrafo)

// const root = document.getElementById('root');
// const subtitulo = `<h2>Subtitulo agregado desde el js</h2>`

// root.innerHTML = subtitulo;
// console.log(root)


// const estudiantes = [{Daniela}, {Débora}, '{Miriam}', '{Romina}', 'Vivana', 'Jonh'];


//  Objetos

const estudiantes = [
  {
    nombre: 'Daniela',
    apellido: 'justiniano',
    edad: 25,
    esEstudiante: true,
    comision: 'julio',
    peliculas: ['Spiderman', 'Ironman', 'Volver al futuro'],
    mascota: {
      nombre: 'firulais',
      color: 'Blanco',
      edad: 3,
      raza: 'Dogo'
    }
  },
  {
    nombre: 'Débora',
    apellido: 'Mamani',
    edad: 28,
    esEstudiante: true,
    comision: 'julio',
    peliculas: ['Harrypotter', 'Harrypotter2', 'Harrypotter3'],
    mascota: {
      nombre: 'Chester',
      color: 'Negro',
      edad: 1,
      raza: 'Pitbull'
    }
  },
  {
    nombre: 'Miriam',
    apellido: 'Olmedo',
    edad: 26,
    esEstudiante: true,
    comision: 'julio',
    peliculas: ['Depredador', 'Prey', 'Conan'],
    mascota: {
      nombre: '',
      color: '',
      edad: undefined,
      raza: ''
    }
  },
]

console.log(estudiantes[2].mascota.raza)