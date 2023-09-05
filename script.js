const dialogBox = document.getElementById("new-book-form");
const showDialogButton = document.getElementById("showDialog");
const cancelBtn = document.getElementById("cancelForm");

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