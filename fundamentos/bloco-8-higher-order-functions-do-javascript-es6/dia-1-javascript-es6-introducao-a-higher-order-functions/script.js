// // Ao chamar a função doingThings:

// const a = () => console.log('Acordando!!')
// const b = () => console.log('Bora tomar café!!')
// const c = () => console.log('Partiu dormir!!')
// const doingThings = (func) => func()




// doingThings(a);
// doingThings(b);
// doingThings(c);

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// // Acordando!!

// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees 
// para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
// const newEmployees = (func) => {
//     const employees = {
//       id1: func('Pedo Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };


//   const object = (nomeCompleto) => {
//       const makeEmail = nomeCompleto.replace(' ','_').toLowerCase()
//       return {
//           nome: nomeCompleto,
//           email: `${makeEmail}@trybe.com`
//       }
//   }

//   console.log(newEmployees(object))



// const sort = (number, func) => {
//     const randomNumber = Math.round(Math.random()*5)
//     console.log(randomNumber)
//     return func(number,randomNumber)
// }


// const verification = (value,random) => {
//     if(value === random){
//         return 'Parabéns você ganhou'
//     }
//     else{
//         return "Tente novamente"
//     }
// }

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const pontuacao = (gabarito,repostas,func) => {
    soma = 0
    for(let i = 0 ; i < gabarito.length ; i++ ){
     const points = func(gabarito[i],repostas[i])
     soma += points
}
return soma
}

const verifica = (right, student) => {
            if(right === student){
                return 1
            }
            else if(student === 'N.A'){
                return 0
            }
            else{
                return  -0.5
            }
        }


console.log(pontuacao(RIGHT_ANSWERS,STUDENT_ANSWERS,verifica))

