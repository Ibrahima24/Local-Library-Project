function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id); //Used the find() method to loop through authors array to look for the author where author.id === id and assigned a variable to store it
 return found; // returned the assigned variable
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id); // Used the find() method to loop through the books array to look for the book where book.id === id and assigned a variable to store it
  return foundBooks; // returned the assigned variable
}

//Helper Function to use for partitionBooksByBorrowedStatus fucntion to filter out a list of books based on whether or not they were returned
function _filterBorrowed(books, status) {
  return books.filter(({ borrows }) => status === borrows[0].returned);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = true; // assigning variable to boolean for whethera book was returned or not
  const borrowed = !returned; // if it isn't returned then it will have opposite value of returned variable
  const booksBorrowed = _filterBorrowed(books, borrowed); // used my helper function to filter arrays of all the books
  const booksReturned = _filterBorrowed(books, returned);
  return [[...booksBorrowed], [...booksReturned]]; //spread operator returns a single array that spreads both array
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => { //map() method loops through the borrows array of the book object.
   let account = accounts.find((account) => account.id === borrow.id); //find() method loops through the accounts array
   return { ...borrow, ...account };//spread operator returns values in an array
  })
  .slice(0, 10);//slice method returns the part of the array up to the index value 10 of the array that was returned before
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
