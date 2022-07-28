const express = require("express");

const UsersService = require("../services/users");

const { successResponse, errorResponse } = require("../utils/responses");

const router = express.Router();

const usersService = new UsersService();

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const userCreated = await usersService.createUser(user);

    successResponse(req, res, userCreated);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

router.get("/", async (req, res) => {
  try {
    const userCreated = await usersService.getUsers();
    successResponse(req, res, userCreated);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

module.exports = router;
