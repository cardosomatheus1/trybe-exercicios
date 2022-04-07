const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   const addnight = (objeto, chave, valor) =>{
//       const object = objeto
//       const key =chave
//       const value = valor
//     object[key] = value
//   }
//   addnight(lesson2,"turno","noite")


//   const listKeys = (objetos) => {
//     console.log(Object.keys(objetos))
    
//   }
//  listKeys(lesson2)

//  const count = (objetos) => {
//     console.log(Object.keys(objetos).length)
//   }
//  count(lesson2)

//  const listValues = (objetos) => {
//     console.log(Object.values(objetos))
//   }
//  listValues(lesson2)

const allLessons = Object.assign({},{lesson1,lesson2,lesson3})
const keys = Object.keys(allLessons)

// console.log(Object.values(allLessons['lesson1'])[0])


// const contar = () =>{
//     const keys = Object.keys(allLessons)
//     let count = 0
//     for(i=0;i<keys.length;i++){
//        count += allLessons[keys[i]].numeroEstudantes
//     }
//     console.log(count)
// }
// contar()


// const getValueByNumber = (lissao, posicao) => {
// console.log(Object.values(allLessons[lissao])[posicao])
// }
// getValueByNumber('lesson1',0)

// const objetoKeys = Object.keys(lesson3)
// const objetoValue = lesson3.turno

// console.log(objetoKeys.includes('turno'))
// console.log(objetoValue == 'noite')



// const verifyPair = (obj, key, value) => {
//     const objeto = obj
//     const objetoKeys = Object.keys(objeto)
//     const objetoValue = obj[key]
//     const chave = key
//     const valor = value
//     if(objetoKeys.includes(chave) == true && objetoValue === value){
//         console.log("true")}
//     else{
//         console.log("false")
//     }
// }
// verifyPair(lesson3, 'materia', 'Matemática')

// const values = Object.values(allLessons)

// console.log(values[3].materia)
// const contar = () =>{
//     const keys = Object.keys(allLessons)
//     const values = Object.values(allLessons)
//     let count = 0
//     for(i=0;i<keys.length;i++){
//         if(values[i].materia === "Matemática"){
//        count += allLessons[keys[i]].numeroEstudantes
//         }
//     }
//     console.log(count)
// }
// contar()



const contar = (teacher) =>{
    const keys = Object.keys(allLessons)
    const values = Object.values(allLessons)
    let count = 0
    const materias =[]
    for(i=0;i<keys.length;i++){
        if(values[i].professor === teacher ){
       count += allLessons[keys[i]].numeroEstudantes
      materias.push(allLessons[keys[i]].materia)
        }
    }
    const newObject = {}
    newObject.professor = teacher
    newObject.aulas = materias
    newObject.estudantes = count
    console.log(newObject)
}
contar('Maria Clara')


