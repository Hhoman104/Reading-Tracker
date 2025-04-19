<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reading Tracker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Reading Tracker</h1>
        <p>Log your books, track progress, and celebrate your milestones!</p>
    </header>
    <main>
        <form id="book-form">
            <input type="text" id="title" placeholder="Book Title" required>
            <input type="text" id="author" placeholder="Author" required>
            <input type="number" id="rating" placeholder="Rating (1-5)" min="1" max="5">
            <select id="category" required>
                <option value="" disabled selected>Choose a Grade Level</option>
                <option value="elementary">Elementary</option>
                <option value="middle">Middle School</option>
                <option value="high">High School</option>
            </select>
            <button type="submit">Add Book</button>
        </form>
        
        <div class="search-section">
            <input type="text" id="search-bar" placeholder="Search by title or author">
        </div>
        
        <section>
            <h2>Books Logged</h2>
            <ul id="book-list"></ul>
            <p>Total Books Read: <span id="book-count">0</span></p>
        </section>
    </main>
    <footer>
        <p>Happy Reading! 📚</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
