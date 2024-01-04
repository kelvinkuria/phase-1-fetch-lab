function fetchBooks() {
  // Return the fetch request
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Call renderBooks with the JSON-ified data
      renderBooks(data);
    })
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear existing content
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Call fetchBooks and return the fetch request
  return fetchBooks();
});



