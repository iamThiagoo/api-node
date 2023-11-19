const { Router } = require ("express");
const { getBooks, getBookById } = require("../controllers/books");
const { postBook } = require("../controllers/books");
const { deleteBookById } = require("../controllers/books");
const { updateBookById } = require("../controllers/books");

const router = Router();

router.get("/", getBooks)
router.get("/:id", getBookById)

router.post('/', postBook)
router.patch('/:id', updateBookById)
router.delete('/:id', deleteBookById)

module.exports = router