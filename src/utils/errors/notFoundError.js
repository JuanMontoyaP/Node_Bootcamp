class NotFoundError extends Error {
  constructor(message, errorCode, detailedError) {
    super(message);
    this.errorCode = errorCode || 404;
    this.detailedError = detailedError || "Not Found";
  }
}

module.exports = NotFoundError;
