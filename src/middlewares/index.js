const boom = require("@hapi/boom");

const { errorResponse } = require("../utils/responses");

const method_not_allowed = (req, res, next) => {
  console.log("Validating method not allowed");
  if (req.method === "GET") {
    next();
  } else {
    next(new Error("Method not allowed: " + req.method));
    // res.status(405).json({
    //   error: "Method not allowed: " + req.method,
    // });
  }
};

const validate_data = (req, res, next) => {
  console.log("Validating data");
  const data = req.body;

  if (!isNaN(data.name)) {
    res.status(500).json({
      error: "Invalid name provided",
    });
  } else {
    next();
  }
};

function validate_data_Joi(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);

    if (error) {
      // next(boom.badRequest("Error validating property"));
      errorResponse(req, res, boom.badRequest(error));
    } else {
      next();
    }
  };
}

module.exports = {
  method_not_allowed,
  validate_data,
  validate_data_Joi,
};
