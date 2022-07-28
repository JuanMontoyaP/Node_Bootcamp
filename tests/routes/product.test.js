const test = require("ava");
const request = require("supertest");
const sandbox = require("sinon").createSandbox();
const proxyquire = require("proxyquire");

let app = require("../../app");
const ProductService = require("../../src/services/products");
const { getProductStub } = require("../../tests_data/service.test");

let server = null;
let serviceStub = null;

test.beforeEach(async () => {
  serviceStub = sandbox
    .stub(ProductService.prototype, "getProducts")
    .callsFake(() => getProductStub);

  const dataService = proxyquire("../../src/routes/products", {
    "../services/products": serviceStub,
  });

  app = proxyquire("../../app", {
    "./src/routes/products": dataService,
  });

  server = await request(app);
});

test.afterEach(() => {
  sandbox.restore();
});

test.serial("/products/all", async (t) => {
  const response = await server.get("/products/all");
  t.is(response.statusCode, 200);
  t.is(response.headers["content-type"], "application/json; charset=utf-8");
  t.pass();
});
