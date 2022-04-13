// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['laranja', 'maça', 'pera'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['morango', 'chocolate', 'leite'];

// const fruitSalad = (fruit, additional) => {
//   const salada = [...fruit, ...additional]
//   return salada
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
//   }
  
//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
//   console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

//   const { name, price, seller } = product;

//   console.log(name)
//   console.log(price)
//   console.log(seller)


// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
  
//   // desestruturando o objeto:
//   const { name, age, homeWorld: { name: planetName , population }, description: { jedi } } = character;
  
//   // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível ${population} que  possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
  
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, realizaSaudacao] = saudacoes;

// console.log (realizaSaudacao(saudacao)); // Olá

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida,animal, bebida] = [bebida,comida,animal]

// console.log(comida, animal, bebida); // arroz gato água


// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// [,,, ...numerosPares] = numerosPares
// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


// Produza o mesmo resultado acima, porém utilizando array destructuring

// const user = {
//     nome: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };


//   const info = {...user,...jobInfos}

//   console.log(info);


//   const {nome, age, nationality, profession, squad , squadInitials } = info;

//   console.log (`Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)


// const position2d = ['a', 'b'];
// const [x, y, z = 'c'] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0


// const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // João is Brazilian


// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude});
  
//   console.log(getPosition(-19.8157, -43.9542));


// const multiply = (number, value = 1) => {
//    return number * value
//   };
  
//   console.log(multiply(8));


// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangle4 = [4, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3, rectangle4];
// console.log(rectangles);
// rectangles.forEach((rectangle) => {
//   rectangleArea(rectangle) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });



// const sum = (...a) => {
//    return a.reduce((ac, num) => ac + num,0)
// }

// console.log(sum(3,4,7,5,6))



// const alex = {
//     name: 'Alex',
//     age: 26,
//     likes: ['fly fishing'],
//     nationality: 'Australian',
//   };
  
//   const gunnar = {
//     name: 'Gunnar',
//     age: 30,
//     likes: ['hiking', 'scuba diving', 'taking pictures'],
//     nationality: 'Icelandic',
//   };
  


//   const personLikes = ({name,age,likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
//   console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
//   console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'


// const people = [
//     {
//       name: 'Nicole',
//       bornIn: 1992,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Harry',
//       bornIn: 2008,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Toby',
//       bornIn: 1901,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Frida',
//       bornIn: 1960,
//       nationality: 'Dannish',
//     },
//     {
//       name: 'Fernando',
//       bornIn: 2001,
//       nationality: 'Brazilian',
//     },
//   ];
  
//   const filterPeople = (arr) => arr.filter(
//     ({ nationality, bornIn }) =>
//       nationality === 'Australian'
//       && bornIn > 1900 && bornIn <= 2000,
//     );



// const myList = [1, 2, 3];

// const swap = ([um,dois,tres]) => [tres,dois,um]

// // escreva swap abaixo
// console.log(swap(myList))

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// const toObject = ([name, brand, year]) => ({ name, brand, year });

// console.log(toObject(palio));

// const ships = [
//     {
//       name: 'Titanic',
//       length: 269.1,
//       measurementUnit: 'meters',
//     },
//     {
//       name: 'Queen Mary 2',
//       length: 1132,
//       measurementUnit: 'feet',
//     },
//     {
//       name: 'Yamato',
//       length: 256,
//       measurementUnit: 'meters',
//     },
//   ];
  
//   const shipLength = ({name,length,measurementUnit}) => (`${name} is ${length} ${measurementUnit} long`)
  
//   console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
//   console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
//   console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

// // escreva greet abaixo
// const greet = (name, comprimeto = 'Hi') => (`${comprimeto} ${name}`)

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const {spring, summer, autumn, winter} = yearSeasons

const ano = [...winter,...spring,...summer,...autumn]

console.log(ano)