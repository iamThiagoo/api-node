const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("json/books.json"))
}

function getBook(id) {
    const books = JSON.parse(fs.readFileSync("json/books.json"))
    return books.filter( book => book.id === id)[0];
}

function insertBook(book) {
    const books = JSON.parse(fs.readFileSync("json/books.json"))
    const newBooks = [...books, book]

    fs.writeFileSync("json/books.json", JSON.stringify(newBooks))
}

function updateBook(id, body) {
    let books = JSON.parse(fs.readFileSync("json/books.json"))
    let index = books.findIndex(book => book.id === id)

    const newContent = {...books[index], ...body}
    books[index] = newContent

    fs.writeFileSync("json/books.json", JSON.stringify(books[index]))
}

function deleteBook(id) {
    const books = JSON.parse(fs.readFileSync("json/books.json"))
    const newBooks = books.filter( book => book.id !== id);
    fs.writeFileSync("json/books.json", JSON.stringify(newBooks))
}

module.exports = {
    getAllBooks,
    getBook,
    insertBook,
    updateBook,
    deleteBook
}