const { Product, ProductSchema } = require("./models/products");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
