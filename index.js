const express = require("express");

const productRouter = require("./src/routes/products");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/products", productRouter);

app.listen(port);
