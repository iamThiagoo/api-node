const { getAllBooks, getBook } = require("../services/books")
const { insertBook } = require("../services/books")
const { deleteBook } = require("../services/books")

function getBooks (req, res) {
    try {
        res.send(getAllBooks())

    } catch (error) {
        res.status(500)
        res.send({error})
    }
}

function getBookById (req, res) {
    try {
        const id = req.params.id

        if (getBook(id) && Number(id)) res.send(getBook(id))
        else res.status(404)

    } catch (error) {
        res.status(500)
        res.send({error})
    }
}

function postBook(req, res) {
    try {
        const book = req.body;

        if (book.name) {
            insertBook(book)
            
            res.status(201)
            res.send("Book insert successfully!")
        } else {
            res.status(422)
        }
        
    } catch (error) {
        res.status(500);
        res.send({error})
    }
}

function updateBookById(req, res) {
    try {
        const id = req.params.id;
        const book = req.body;

        if (Number(id) && book.name) {
            updateBook(id, body)
            res.status(201)
            res.send("Book updated successfully!")
        } else {
            res.status(422)
        }

    } catch (error) {
        res.status(500);
        res.send({error})
    }
}

function deleteBookById(req, res) {
    try {
        const id = req.params.id;

        if (Number(id)) {
            deleteBook(id)
            res.status(201)
            res.send("Book deleted successfully!")
        } else {
            res.status(422)
        }

    } catch (error) {
        res.status(500);
        res.send({error})
    }
}


module.exports = {
    getBooks,
    getBookById,
    postBook,
    updateBookById,
    deleteBookById
}