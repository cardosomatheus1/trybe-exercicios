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

//   function formatedBookNames() {
//     const mapBooks = books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
//     return mapBooks
//   }
//   console.log(formatedBookNames())


// function nameAndAge() {
//     let mapAge
//     return books.map((livro) => {
//        return {age: (livro.releaseYear - livro.author.birthYear) ,author: livro.author.name,}
//     }).sort((a,b) => a.age - b.age)
//   }

//   console.log(nameAndAge())

//   function fantasyOrScienceFiction() {return  books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia')
//   }
//   console.log(fantasyOrScienceFiction())



//   function oldBooksOrdered() {
//     return books.filter((livro) => (2022 -livro.releaseYear) > 60).sort((a,b) => a.releaseYear - b.releaseYear)
//   }
//   console.log(oldBooksOrdered())


//   function fantasyOrScienceFictionAuthors() {
//     const autores = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia')
//     return autores.map((nomes) => nomes.author.name).sort()
//   }

//   console.log(fantasyOrScienceFictionAuthors())


 
//   function oldBooks() {
//     return books.filter((livro) => (2022 -livro.releaseYear) > 60).sort((a,b) => a.releaseYear - b.releaseYear).map((book) => book.name)
    
//   }

//   console.log(oldBooks())


// function authorWith3DotsOnName() {
//   return books.find((book) => (
//     book.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }

console.log(books[0].author.name.split(' '))