function logErrors(err, req, res, next) {
  console.error(`Error Stack ${err.stack}`);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).json({
      error: "Something went wrong",
    });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  console.error(`Error Handler ${err}`);
  res.status(500).json({
    error: "General Error",
  });
}

function invalidPath(req, res, next) {
  res.status(404).send("Invalid path");
}

module.exports = {
  logErrors,
  clientErrorHandler,
  errorHandler,
  invalidPath,
};
