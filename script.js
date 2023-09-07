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
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Status = haveRead;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

function displayBook(book) {
    let card = document.createElement("div");
    let position = myLibrary.length - 1
    card.setAttribute("data-book", position);
    card.classList.add("card");
    for (key in book) {
        let cardElement;
        if (key === 'Status') {
            cardElement = document.createElement("button");
            cardElement.classList.add("read-button");
            cardElement.textContent = `${book[key]}`;
            if (cardElement.textContent === 'Read') {
                cardElement.style.backgroundColor = "#3bfd04";
            } else {
                cardElement.style.backgroundColor = "#e7655c";
            }
            cardElement.addEventListener("click", (e) => {
                if (cardElement.textContent === "Read") {
                    cardElement.textContent = "Not Read";
                    cardElement.style.backgroundColor = "#e7655c";
                } else {
                    cardElement.textContent = "Read";
                    cardElement.style.backgroundColor = "#3bfd04";
                }
            })
            card.appendChild(cardElement);
        } else {
            cardElement = document.createElement("p");
            cardElement.textContent = `${key}: ${book[key]}`;
            cardElement.classList.add(`${key}`.toLowerCase());
            card.appendChild(cardElement);
        }
    }
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", (e) => {
        delete myLibrary[position];
        mainContent.removeChild(card);
    });
    card.appendChild(removeBtn);
    mainContent.appendChild(card);
    console.log(myLibrary);
}