const express = require('express');
const routes = express.Router();
const productRoutes = require('./product');

routes.use('/products' , productRoutes);

module.exports = routes;