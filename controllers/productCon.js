// const productModel = require('../models/product/product-model');


//create product
const createProductCon = async (req, res) => {

    const data = {

        name : 'jhsfdj',
        description : 'jkhdvfkZN',
        price : 22,
        stock : 'kjsgksnk'
    };
    console.log('req.pro detail' , data);

    try {
        const newProduct =  data;
        // await newProduct.save();

        res.json({newProduct});
    }catch (err) {
        res.json({'msg' : `Err <<< ${err}`});
    }
}

//get product
const getProductCon = (req, res) => {

    try {
        const products = data.find();

        console.log('get All product', products)
        res.json({products});
    }catch (err) {
        res.json({'msg' : `get err ${err}`});
    }
}
module.exports = {createProductCon, getProductCon}