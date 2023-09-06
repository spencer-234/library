const dialogBox = document.getElementById("bookDialog");
const showDialogButton = document.getElementById("showDialog");
const cancelBtn = document.getElementById("cancelBtn");
const myLibrary = [];

showDialogButton.addEventListener("click", (e) => {
    dialogBox.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    dialogBox.close();
});

function book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};