function getTotalBooksCount(books) {
  return books.length; // returns total amount books
}

function getTotalAccountsCount(accounts) {
  return accounts.length; // returns total amount of accounts
}

function getBooksBorrowedCount(books) {
  let checkedOutBooks = books.filter( // filtering through books array
    (book) =>
     book.borrows.filter((record) => record.returned === false).length > 0//filtering through borrows array
   );
   return checkedOutBooks.length;// returns total amount
}

function getMostCommonGenres(books) {
  const genreCounter = books.reduce((total, book) => {//assigning variable that takes in object and abstracting from reduce() method
    const lookedUpValue = total.find(key => book.genre === key.name); //assigning new variable that uses find() method to get new objects within array
    if (lookedUpValue) { 
      lookedUpValue.count++; // adds count to lookedUpValue
    } else {
      total.push({ name: book.genre, count: 1 }); //else it will push objects
    }
    const listSorted = total.sort((bookOne, bookTwo) => //sorts the value and assigned it to a variable
      bookOne.count < bookTwo.count ? 1 : -1 // returns list is book genre count is less than the other
      ) 
  return listSorted;
  }, []);
  const [first, second, third, fourth ,fifth] = genreCounter
    return [first, second, third, fourth ,fifth];//returns first five
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {//map method used for books
   return { name: book.title, count: book.borrows.length };//returns book title and and how many borrows it has
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))//sort thems in order from most popular
  .slice(0, 5);//slice to return to index of 5
}

function getMostPopularAuthors(books, authors) {
  let result = [];//assinging variable to empty array
  authors.forEach((author) => {//forEach method executes function for authors array
   let bookAuthor = {
    name: `${author.name.first} ${author.name.last}`,//bookAuthor variable will include name of author
    count: 0//assigning count variable to store the amount
   };
   books.forEach((book) => {//forEach method executes function to books array
    if (book.authorId === author.id) {
     bookAuthor.count += book.borrows.length;//adds the amount of books borrowed for each author
    }
   });
   result.push(bookAuthor);//pushes it into array
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);//returns most popular to index of 5
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
