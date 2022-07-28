const { Product, ProductSchema } = require("./models/products");
const { User, UsersSchema } = require("./models/users");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UsersSchema, User.config(sequelize));
}

module.exports = setupModels;
