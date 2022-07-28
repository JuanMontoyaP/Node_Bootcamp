const getProductStub = async () =>
  Promise.resolve([
    {
      id: 1,
      name: "product 1",
      price: "55000",
      currency: "COP",
      description: "My test product description 1",
    },
    {
      id: 2,
      name: "product 2",
      price: "75000",
      currency: "COP",
      description: "My test product description 2",
    },
    {
      id: 3,
      name: "product 3",
      price: "5600",
      currency: "COP",
      description: "My test product description 3",
    },
  ]);

module.exports = { getProductStub };
