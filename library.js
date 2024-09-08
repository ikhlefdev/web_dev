const library=[]
function book(title,author,pages,isread){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isread=isread;
}
function addbook(){
    library.push(book);
function displaybooks() {
        const library=document.getElementById('library')
        //library.innerHTML = ''; // Clear previous display

    myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleRead(${index})">${book.isRead ? 'Unread' : 'Read'}</button>
    `;
    library.appendChild(bookCard);
  });
}
};
 
