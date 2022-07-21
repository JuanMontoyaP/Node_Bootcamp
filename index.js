const express = require("express");

const productRouter = require("./src/routes/products");
const {
  logErrors,
  errorHandler,
  clientErrorHandler,
  invalidPath,
} = require("./src/middlewares/errorHandles");

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log("Principal");

  next();
});

app.use("/products", productRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(invalidPath);

app.listen(port);
