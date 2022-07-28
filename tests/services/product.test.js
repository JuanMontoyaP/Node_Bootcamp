const test = require("ava");
const proxyquire = require("proxyquire");
const { modelsData, modelsEmpty } = require("../../tests_data/db.test");

test.beforeEach(async (t) => {
  const sequelizeDB = proxyquire("../../src/db/sequelize", {
    "./init.db": () => {
      console.log("Initialized Mocking");
    },
  });

  t.context = {
    withData: proxyquire("../../src/services/products", {
      "../db/sequelize": {
        sequelizeDB,
        models: modelsData,
      },
    }),
    empty: proxyquire("../../src/services/products", {
      "../db/sequelize": {
        sequelizeDB,
        models: modelsEmpty,
      },
    }),
  };
});

test.serial("Product services get all", async (t) => {
  const Service = t.context.withData;
  const testService = new Service();
  const response = await testService.getProducts();

  t.is(response.length, 3);
});

test.serial("Product service get all empty", async (t) => {
  const Service = t.context.empty;
  const testService = new Service();

  try {
    await testService.getProducts();
    t.fail("It should not return any response");
  } catch (error) {
    t.is(error.isBoom, true);
  }
});
