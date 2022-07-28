const { Model, DataTypes } = require("sequelize");

const USERS_TABLE = "USERS";

const UsersSchema = {
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: "Users",
      timestamps: false,
    };
  }
}

module.exports = { USERS_TABLE, UsersSchema, User };
