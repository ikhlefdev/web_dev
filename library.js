
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show");
const closeButton = document.querySelector("dialog button");
const confirmbtn=dialog.querySelector('#confirmbtn')
const myLibrary=[]


function Book(title,author,pages,isread){
    this.title=title
    this.author=author
    this.pages=pages
    this.isread=isread}

function addBook(book){
    if (book.title && book.author && book.pages){
    myLibrary.push(book)
}}

function displayBook(){
    const bookcard=document.querySelector(".library")
    bookcard.innerHTML='';
    myLibrary.forEach(book=>{
        const bookdiv=document.createElement("div")
        bookdiv.classList.add("book-info")
        bookdiv.innerHTML=`
        <strong>Title:</strong> ${book.title} <br><br>
        <strong>Author:</strong> ${book.author} <br><br>
        <strong>Pages:</strong> ${book.pages} <br><br>
        <button class="${book.isread ? 'read' : 'not-read'}" onclick="toggleRead('${book.title}')">
                ${book.isread ? 'Read' : 'Not Read'}
        </button>
            `;
        bookcard.appendChild(bookdiv);
        
    })
}
//problem here 
document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    const title=document.getElementById("titleinp").value
    const author=document.getElementById("author").value
    const pages=document.getElementById("pagesinp").value
    const isread=document.getElementById("isread").checked 

    const newbook= new Book(title,author,pages,isread)
    addBook(newbook)
    displayBook()

    dialog.close()
    document.getElementById("form").reset()
})

function toggleRead() {
    isread = !isread; // Toggle the read status
    displayBook();}




// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

document.querySelector(".library").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const index = event.target.getAttribute("data-index");
        toggleRead(index);
    }
});
function toggleRead(title) {
    const book = myLibrary.find(book => book.title === title);
    if (book) {
        book.isread = !book.isread;
        displayBook();
    }
}
