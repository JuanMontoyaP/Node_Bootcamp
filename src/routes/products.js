const express = require("express");
const router = express.Router();

const ProductService = require("../services/products");
const { validate_data_Joi, method_not_allowed } = require("../middlewares");
const { successResponse, errorResponse } = require("../utils/responses");
const { productSchema } = require("../utils/schemas/product");

const productService = new ProductService();

// router.use("/", method_not_allowed);

router.get("/all", async (req, res) => {
  try {
    const my_products = await productService.getProducts();
    successResponse(req, res, my_products);
  } catch (error) {
    console.error(`An error occurred: ${error.detailedError}`);
    // errorResponse(req, res, error, error.errorCode);
    errorResponse(req, res, error);
  }
});

router.get("/detail/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const my_product_detail = await productService.getProductDetail(id);
    successResponse(req, res, my_product_detail);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

router.get("/", async (req, res) => {
  const product_name = req.query.name;
  const my_products_by_name = await productService.getProductsByName(
    product_name
  );

  res.status(200).json({
    data: my_products_by_name,
  });
});

router.post("/", validate_data_Joi(productSchema, "body"), async (req, res) => {
  const new_product = req.body;

  try {
    const my_products = await productService.saveNewProduct(new_product);
    successResponse(req, res, my_products);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const product_to_update = req.body;

  try {
    const product = await productService.updateProduct(id, product_to_update);
    successResponse(req, res, product);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const productToUpdate = req.body;

  try {
    const product = await productService.updateProduct(id, productToUpdate);
    successResponse(req, res, product);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await productService.deleteProduct(id);
    successResponse(req, res, deletedProduct);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

module.exports = router;
