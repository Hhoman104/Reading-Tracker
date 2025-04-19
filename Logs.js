// Load saved books on page load
window.addEventListener('load', function() {
    const savedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    savedBooks.forEach(book => addBookToList(book));

    updateBookCount();
});

// Add book to list
function addBookToList(book) {
    const bookList = document.getElementById('book-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author} (Rating: ${book.rating || 'N/A'}, Grade: ${book.category})`;
    bookList.appendChild(listItem);
}

// Save book data to LocalStorage
function saveBooks() {
    const books = Array.from(document.querySelectorAll('#book-list li')).map(li => li.textContent);
    localStorage.setItem('books', JSON.stringify(books));
}

// Form submission
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const rating = document.getElementById('rating').value;
    const category = document.getElementById('category').value;

    const book = { title, author, rating, category };
    addBookToList(book);

    saveBooks();
    updateBookCount();

    // Reset form
    document.getElementById('book-form').reset();
});

// Update book count
function updateBookCount() {
    const count = document.getElementById('book-list').children.length;
    document.getElementById('book-count').textContent = count;
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const books = document.querySelectorAll('#book-list li');

    books.forEach(book => {
        book.style.display = book.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
});
