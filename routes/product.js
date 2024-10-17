const express = require('express');
const productRoutes = express.Router();
const controller = require('../controllers/productCon');

productRoutes.post('/' , controller.createProductCon);
productRoutes.get('/' , controller.getProductCon);


module.exports = productRoutes;