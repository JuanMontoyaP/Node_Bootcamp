const express = require("express");
const router = express.Router();

const ProductService = require("../services/products");

const productService = new ProductService();

router.get("/all", async (req, res) => {
  const my_products = await productService.getProducts();

  res.status(200).json({
    data: my_products,
  });
});

router.get("/detail/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const my_product_detail = await productService.getProductDetail(id);

  res.status(200).json({
    data: my_product_detail,
  });
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

router.post("/", async (req, res) => {
  const new_product = req.body;
  const my_products = await productService.saveNewProduct(new_product);

  res.status(201).json({
    data: my_products,
  });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const product_to_update = req.body;
  const product = await productService.updateProduct(id, product_to_update);

  res.status(200).json({
    data: product,
  });
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const product_to_update = req.body;
  const product = await productService.updateProduct(id, product_to_update);

  res.status(200).json({
    data: product,
  });
});

router.delete("/:id", async (req, res) => {
  const product_id_delete = req.params.id;
  const new_product_list = await productService.deleteProduct(
    product_id_delete
  );

  res.status(200).json({
    data: new_product_list,
  });
});

module.exports = router;
