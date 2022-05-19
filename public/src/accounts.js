function findAccountById(accounts, id) {
  let idFound = accounts.find(account => account.id === id); //Used the find() method to loop through accounts array to look for the account where account.id === id and assigned a variable to store it
return idFound; // returned the assigned variable
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountOne,accountTwo) => (accountOne.name.last.toLowerCase() > accountTwo.name.last.toLowerCase() ? 1 : -1)); //sort() method compares the last name of accountOne to the last name of accountTwo (strings are compared in lowercase format). If the number returned is negative, accountOne will be moved before accountTwo. If positive, it will be the other way around.
return accounts; //Returns sorted array of objects by last name in alphabetical order.
}

function getTotalNumberOfBorrows(account, books) {
  let allBorrows = 0; // assigning counter variable to 0 because it has to return number
for (let i = 0; i < books.length; i++){ // looping through the books array
  for(let j = 0; j < books[i].borrows.length; j++){// looping through borrows aray in books 
    if (account.id === books[i].borrows[j].id){//checking if borrows id matches account id
      allBorrows += 1;//if it matches add 1 to the counter so variable can stoure the value
    }
  }
}
return allBorrows; // returns the value that was stored
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountDetails = account.id;// assigning variable to account ids
  let possessedBooks = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === accountDetails);//filtering out ids of users who did not return books
  let bookInformation = possessedBooks.map((info) => ({...info, author: authors.find((author) => author.id === info.authorId)}));//assigning variable to array of information stored above and then adding book information and author using spread operator
  return bookInformation; // returns the arrray
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
