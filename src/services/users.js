const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const { models } = require("../db/sequelize");

class UsersService {
  constructor() {}

  async createUser(user) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 14);
      const userCreated = await models.Users.create({
        ...user,
        password: hashedPassword,
      });
      return userCreated;
    } catch (error) {
      throw boom.internal(error.message);
    }
  }

  async getUserByUsername(username) {
    try {
      return await models.Users.findOne({
        where: {
          username: username,
        },
      });
    } catch (error) {
      throw boom.internal(error.message);
    }
  }
}

module.exports = UsersService;
