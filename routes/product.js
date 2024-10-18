import express from 'express';
const productRoutes = express.Router();
import {createProductCon, getProductCon, singleProductCon, updateProductCon, deleteProductCon} from '../controllers/productCon.js';

productRoutes.post('/' , createProductCon);
productRoutes.get('/' , getProductCon);
productRoutes.get('/:id' , singleProductCon);
productRoutes.put('/:id' , updateProductCon);
productRoutes.delete('/:id' , deleteProductCon);

export default productRoutes;