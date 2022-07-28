const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { Strategy } = require("passport-local");

const UserService = require("../../../services/users");

const userService = new UserService();

const LocalStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await userService.getUserByUsername(username);

    if (!user) {
      done(boom.unauthorized(), false);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      done(boom.unauthorized(), false);
    }

    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
