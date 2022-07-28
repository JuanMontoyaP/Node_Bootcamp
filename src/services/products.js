const boom = require("@hapi/boom");

// const { getConnection } = require("../db/postgres.pool");
const { models } = require("../db/sequelize");
const { products } = require("../data/");
// const NotFoundError = require("../utils/errors/notFoundError");

class ProductService {
  constructor() {
    // this.client = getConnection();
  }

  async getProducts() {
    // const all_products = await Promise.resolve(products);
    // return all_products;
    // const dbClient = await this.client.connect();
    // const result = await dbClient.query("SELECT * FROM PRODUCTS");
    // const GETPRODUCTS = "SELECT * FROM PRODUCTS";
    // const [result, metadata] = await sequelize.query(GETPRODUCTS);
    // if (products.length === 0) {
    //   // throw new NotFoundError("Not found products", 404, "Database empty");
    //   throw boom.notFound("Not found products");
    // }
    // dbClient.release();
    const products = await models.Products.findAll();

    if (!products || products.length === 0) {
      throw boom.notFound("Not found products");
    }

    return products;
  }

  async getProductDetail(id) {
    // const all_products = await Promise.resolve(products);
    // const product = all_products.filter((product) => product.id === id)[0];
    // if (!product) {
    //   throw boom.notFound("Product not found");
    // }
    // if (product.id === 1) {
    //   throw boom.forbidden("Not allowed");
    // }
    // return product;
    // const dbClient = await this.client.connect();
    // const result = await dbClient.query("SELECT * FROM PRODUCTS WHERE ID=$1", [
    //   id,
    // ]);
    // if (result.rows.length === 0) {
    //   throw boom.notFound("Product not found");
    // }
    // dbClient.release();
    // return result.rows[0];

    const product = await models.Products.findOne({
      where: {
        id: id,
      },
    });

    if (!product) {
      throw boom.notFound("Product not found");
    }

    return product;
  }

  async getProductsByName(name) {
    const all_products = await Promise.resolve(products);
    return all_products.filter((product) => product.name === name);
  }

  async saveNewProduct(product) {
    // const all_products = await Promise.resolve(products);
    // all_products.push(product);
    // return all_products;
    // const newProduct =
    //   "INSERT INTO PRODUCTS (name, price, currency, description) VALUES ($1,$2,$3,$4) RETURNING *";
    // const values = [
    //   product.name,
    //   product.price,
    //   product.currency,
    //   product.description,
    // ];
    // try {
    //   const dbClient = await this.client.connect();
    //   const productCreated = await dbClient.query(newProduct, values);
    //   dbClient.release();
    //   return productCreated.rows[0];
    // } catch (error) {
    //   throw boom.conflict(error);
    // }
    try {
      const productCreated = await models.Products.create(product);
      return productCreated;
    } catch (error) {
      throw boom.internal(error.message);
    }
  }

  async updateProduct(id, modifiedProduct) {
    // const all_products = await Promise.resolve(products);
    // const product_to_update = all_products.filter(
    //   (products) => products.id === parseInt(id)
    // )[0];
    // product_to_update.name = modified_product.name;
    // product_to_update.price = modified_product.price;
    // product_to_update.description = modified_product.description;
    // return product_to_update;
    // const updateProduct =
    //   "UPDATE PRODUCTS SET name=$1, price=$2, currency=$3, description=$4 WHERE ID=$5 RETURNING *";
    // const values = [
    //   modifiedProduct.name,
    //   modifiedProduct.price,
    //   modifiedProduct.currency,
    //   modifiedProduct.description,
    //   id,
    // ];
    // const dbClient = await this.client.connect();
    // const productUpdated = await dbClient.query(updateProduct, values);
    // dbClient.release();
    // const affectedRows = productUpdated.rows.length;
    // if (affectedRows === 0) {
    //   throw boom.conflict("Product no updated");
    // }
    // return productUpdated.rows[0];
    const product = await models.Products.findByPk(id);

    if (!product) {
      throw boom.conflict("Not resource changed");
    }
    try {
      return await product.update(modifiedProduct);
    } catch (error) {
      throw boom.conflict(error.message);
    }
  }

  async deleteProduct(id) {
    // const all_products = await Promise.resolve(products);
    // return all_products.filter((product) => product.id !== parseInt(id));
    // const deleteProduct = "DELETE FROM PRODUCTS WHERE ID=$1 RETURNING *";
    // const values = [id];

    // const dbClient = await this.client.connect();
    // const deletedProduct = await dbClient.query(deleteProduct, values);
    // dbClient.release();

    // const affectedRows = deletedProduct.rows.length;

    // if (affectedRows === 0) {
    //   throw boom.conflict("Product no deleted");
    // }

    // return deletedProduct.rows[0].id;
    const deletedProduct = await models.Products.findByPk(id);
    if (!deletedProduct) {
      throw boom.conflict("Not resource deleted");
    }
    await deletedProduct.destroy();
    return { id };
  }
}

module.exports = ProductService;
