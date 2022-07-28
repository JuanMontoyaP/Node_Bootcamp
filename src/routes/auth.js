const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { config } = require("../config");
const { successResponse } = require("../utils/responses");

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const user = req.user;
    const payload = {
      sub: user.userId,
      role: user.role,
    };

    const token = jwt.sign(payload, config.TOP_SECRET);

    const response = {
      user,
      token,
    };

    successResponse(req, res, response);
  }
);

module.exports = router;
