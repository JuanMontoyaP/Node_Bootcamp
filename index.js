const express = require("express");

const productRouter = require("./src/routes/products");
const usersRouter = require("./src/routes/users");
const authRouter = require("./src/routes/auth");

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
  console.log(`${req.method} ${Date.now} ${req.url} ${req.path}`);
  next();
});

require("./src/utils/auth");

app.use("/products", productRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(invalidPath);

app.listen(port);
