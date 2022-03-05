const express = require('express');
const router = express.Router();
const controllerProducts = require('../../Controllers/controllerProducts');

module.exports = () => {
  router.get('/all', controllerProducts.getAllProducts);
  router.get('/:_id', controllerProducts.searchById);
  router.put('/:_id', controllerProducts.updateProduct);
  router.post('/', controllerProducts.addNewProduct);
  router.delete('/:productId', controllerProducts.deleteProduct);
  return router;
};
