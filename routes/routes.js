import express from 'express';
const routes = express.Router();
import productRoutes from './product.js';

routes.use('/products' , productRoutes);

export default routes;