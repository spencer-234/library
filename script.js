const dialogBox = document.getElementById("bookDialog");
const showDialogButton = document.getElementById("showDialog");
const cancelBtn = document.getElementById("cancelBtn");
const mainContent = document.querySelector(".main");
const myLibrary = [];
const submittedForm = document.querySelector(".book-form");

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
    let haveRead = document.getElementById("haveRead").checked ? "Read" : "Not Read";
    let book = new Book(title, author, pages, haveRead);
    addBookToLibrary(book);
    submittedForm.reset();
    displayBook(book);
    dialogBox.close();
})

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

function displayBook(book) {
    let card = document.createElement("div");
    card.setAttribute("data-book", `${myLibrary.length}`);
    card.classList.add("card");
    for (key in book) {
        let cardElement;
        if (key === 'haveRead') {
            cardElement = document.createElement("button");
            cardElement.classList.add("read-button");
            cardElement.textContent = `${book[key]}`;
            if (cardElement.textContent === 'Read') {
                cardElement.style.backgroundColor = "#3bfd04";
            } else {
                cardElement.style.backgroundColor = "#e7655c";
            }
            card.appendChild(cardElement);
        } else {
            cardElement = document.createElement("p");
            cardElement.textContent = `${key}: ${book[key]}`;
            card.appendChild(cardElement);
        }
    }
    mainContent.appendChild(card);
}