// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((bola) => bola.id === id)
//   }
  
//   console.log(findMusic('31031685'))


// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach((bola) => {
//     showEmailList(bola)

//   })

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//  return arr.some((bola) => bola === name)
// }

// console.log(hasName(names, 'Ana'))


// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((bola) => bola.age >= minimumAge )
//   }
  
//   console.log(verifyAges(people, 18));


// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
// people.sort((a,b) => a.name -b.name)
  
//   console.log(people);



//   const bola = ['b', 'd', 'a', 'e', 'u'];
  
// bola.sort()
  
//   console.log(bola);



const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Adicione o código do exercício aqui:


// function authorBornIn1947() {
//   return books.find((bola) => bola.author.birthYear === 1947
//   )}

//   const nameAuthor = (bola) => {
//     return bola().author.name
//   }
  
//   console.log(nameAuthor(authorBornIn1947))


// console.log(books[0].name)

// function smallerName(livros) {
//   let nameBook;
//   books.forEach((livro) => {
//     if(!nameBook || livro.name.length < nameBook.length){
//       nameBook = livro.name
//     }
//   });

//   return nameBook;
// }

// console.log(smallerName())


// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };




// function getNamedBook() {
//   return books.find((livro) =>{
//    return livro.name.length === 26
//   })
// }

// console.log(getNamedBook())

// function booksOrderedByReleaseYearDesc() {
//   return books.sort((a,b) => {
//     return a.releaseYear + b.releaseYear
//   })
// }

// console.log(booksOrderedByReleaseYearDesc())


// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((ano) => { 
//    return ano.author.birthYear > 1900 && ano.author.birthYear <= 2000


//   })
// }

// console.log(everyoneWasBornOnSecXX())




// function someBookWasReleaseOnThe80s() {
//   return books.some((livro) => {
//     return livro.releaseYear >= 1980 && livro.releaseYear < 1990
//   })
// }
// console.log(someBookWasReleaseOnThe80s())


function authorUnique() {
  const datas = []
books.forEach((data) => {
  datas.push(data.author.birthYear)
})
return datas.some
}  





// console.log(authorUnique())