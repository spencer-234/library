const dialogBox = document.getElementById("bookDialog");
const showDialogButton = document.getElementById("showDialog");
const cancelBtn = document.getElementById("cancelBtn");
const myLibrary = [];
const submittedForm = document.querySelector(".book-form")

showDialogButton.addEventListener("click", (e) => {
    dialogBox.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    dialogBox.close();
});

submittedForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let haveRead = document.getElementById("haveRead").value;
    let book = new Book(title, author, pages, haveRead);
    addBookToLibrary(book);
    dialogBox.close();
})

console.log(myLibrary);

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}