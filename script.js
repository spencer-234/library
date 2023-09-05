const dialogBox = document.getElementById("new-book-form");
const showDialogButton = document.getElementById("showDialog");

showDialogButton.addEventListener("click", (e) => {
    dialogBox.showModal();
})

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};