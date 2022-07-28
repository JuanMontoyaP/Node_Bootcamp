const { getProductStub } = require("./service.test");

const modelsData = {
  Products: {
    async findAll() {
      return Promise.resolve(getProductStub());
    },
  },
};

const modelsEmpty = {
  Products: {
    async findAll() {
      return Promise.resolve([]);
    },
  },
};

module.exports = { modelsData, modelsEmpty };
