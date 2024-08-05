// 1. Create the library Array
let library = [];

// 2. Add Books to the Library

library.push(
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true },
  { title: "1984", author: "George Orwell", yearPublished: 1949, available: false },
  { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true }
);

console.log("library after push",library);

// 3. Update the Availability of a Book
library.find (book => book.title === "1984").available = true;
console.log("Library after updating '1984' availability:", library);

// 4. Remove a Book from the Library
library.splice(library.findIndex(book => book.title === "Pride and Prejudice"), 1);
console.log("Library after removing 'Pride and Prejudice':", library);

// 5. Check if a Book is in the Library
const titles = library.map(book => book.title);
const isGatsbyInLibrary = titles.includes("The Great Gatsby")
console.log("Is 'The Great Gatsby' in the library?", isGatsbyInLibrary);


// Find the first available book and borrow it
let borrowedBook;
for (let i = 0; i < library.length; i++) {
  if (library[i].available) {
    library[i].available = false;
    borrowedBook = library.shift();
    break;
  }
}

// Display the updated book details
if (borrowedBook) {
  console.log("Borrowed Book Details:");
  console.log(borrowedBook);
} else {
  console.log("No available book to borrow.");
}
// Log the updated library to verify the removal
console.log("Updated Library:", library);

// 7. Add a New Book to the Start of the Library
let newBook = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
  available: true,
};
library.unshift(newBook);
console.log("Library after adding 'The Catcher in the Rye':", library);

// 8. Get a List of All Book Titles
const Titles = library.map(book => book.title);const titlesString = titles.join(", ");
console.log("Book Title:", titlesString);

// 9. Create a New Library Section
const newArrivals = library.slice(-2);
console.log("New Arrivals section:", newArrivals);
console. log(library);
