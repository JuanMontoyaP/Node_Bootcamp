const express = require("express");
const router = express.Router();

const { products } = require("../data/");

router.get("/all", async (req, res) => {
  const my_products = await Promise.resolve(products);

  res.status(200).json({
    data: my_products,
  });
});

router.get("/detail/:id", async (req, res) => {
  const id = req.params.id;

  const my_products = await Promise.resolve(products);

  res.status(200).json({
    data: my_products[id],
  });
});

router.get("/", async (req, res) => {
  const query = req.query;
  const my_products = await Promise.resolve(products);

  res.status(200).json({
    data: my_products,
  });
});

router.post("/", async (req, res) => {
  const my_products = await Promise.resolve(products);

  my_products.push(req.body);

  res.status(201).json({
    data: my_products,
  });
});

router.put("/:id", async (req, res) => {
  const my_products = await Promise.resolve(products);

  const my_product = my_products.filter(
    (products) => products.id === parseInt(req.params.id)
  )[0];

  const modified_product = req.body;

  my_product.name = modified_product.name;
  my_product.price = modified_product.price;
  my_product.description = modified_product.description;

  res.status(200).json({
    data: my_products,
  });
});

router.patch("/:id", async (req, res) => {
  const my_products = await Promise.resolve(products);

  const my_product = my_products.filter(
    (products) => products.id === parseInt(req.params.id)
  )[0];

  const modified_product = req.body;

  my_product.name = modified_product.name;
  my_product.price = modified_product.price;

  res.status(200).json({
    data: my_products,
  });
});

router.delete("/:id", async (req, res) => {
  const my_products = await Promise.resolve(products);
  const product_id_delete = req.params.id;

  res.status(200).json({
    data: my_products.filter(
      (product) => product.id !== parseInt(product_id_delete)
    ),
  });
});

module.exports = router;
