const express = require("express")
const port = 8000

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Access Denied!");
})

const booksRouter = require("./routes/books")
app.use("/books", booksRouter);

app.listen(port)
