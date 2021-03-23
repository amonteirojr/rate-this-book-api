const BooksController = require("./controllers/BooksController");

const routes = require("express").Router();

routes.get("/books/:isbn", BooksController.show);
routes.post("/books", BooksController.create);
routes.put("/books/:isbn", BooksController.update);

module.exports = routes;
