console.log("Connected");

// json file za knigite
fetch("./listOfBooks.json")
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    })
    .catch(error => console.error(error));
//za da go koristam jsonot
function book() {
    fetch('./listOfBooks.json')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

 document.addEventListener('DOMContentLoaded', function() {
        // za da se obraboti posle HTML   
// const bookList = document.getElementById("book-list");

// json na front
fetch("./listOfBooks.json")
.then(response => response.json())
.then(data => {
  // Sortiranje po avtor
  data.sort((a, b) => a.author.localeCompare(b.author));

  // kako da izgledaat na fron
  data.forEach(book => {
    const li = document.createElement("li");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const genre = document.createElement("p");

    title.textContent = book.title;
    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    genre.textContent = `Genre: ${book.genre}`;

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(genre);

    bookList.appendChild(li);
  });
})
// za search btn
const searchInput = document.getElementById("searchInput");
const searchSelect = document.getElementById("searchSelect");
const searchButton = document.getElementById("searchButton");

// eventlistener za "searchBooks" fukcija
searchButton.addEventListener("click", searchBooks);

//searchBooks funkcija i filter 
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchType = searchSelect.value.toLowerCase();
    fetch("./listOfBooks.json")
      .then(response => response.json())
      .then(data => {
        const filteredBooks = data.filter(function(book) {
          if (searchType === "title") {
            return book.title.toLowerCase().includes(searchTerm);
          } else if (searchType === "author") {
            return book.author.toLowerCase().includes(searchTerm);
          } else if (searchType === "genre") {
            return book.genre.toLowerCase().includes(searchTerm);
          }
        });
        displayBooks(filteredBooks);
      })
      .catch(error => console.error(error));
  }
  
  //display funkcija po srcanje
  function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach(function(book) {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author} (${book.genre})`;
      bookList.appendChild(li);
    });
  }
});


