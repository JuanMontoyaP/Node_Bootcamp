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

module.exports = router;
