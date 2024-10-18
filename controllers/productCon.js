import productModel from '../models/product/product-model.js';


//create product
export const createProductCon = async (req, res) => {

    console.log('req>>' , req.body);
    let { name, description, price, category } = req.body;


    try {

        const newProduct = await productModel({
            name,
            description,
            price,
            category
        })

        await newProduct.save();

        res.status(200).json(newProduct);

    }catch (err) {
        res.status(400).json({'error' : "product add error"});
    }
}

//get product
export const getProductCon = async (req, res) => {

    try {
        const products = await productModel.find();

        res.status(200).json(products);
    }catch (err) {
        res.status(400).json({"error" : "retriving error"});
    }
}

export const singleProductCon = async (req, res) => {

    const {id} = req.params;
    try {

        const singlePro = await productModel.findOne({_id : id});

        res.status(200).json(singlePro);

    }catch (err){
        res.status(400).json({"error" : "single product err"});
    }
}

export const updateProductCon = async (req, res) => {

    const {id} = req.params;

    try {

        const updateProduct = await productModel.findByIdAndUpdate({_id : id}, req.body, { new: true });

        res.status(400).json(updateProduct);

    }catch (err) {
        res.status(400).json({"error" : "update error"});
    }
}

export const deleteProductCon = async (req, res) => {

    const {id} = req.params;

    try {

        const deleteProduct = await productModel.findByIdAndDelete({_id : id});

        res.status(200).json(deleteProduct);

    }catch (err) {
        res.status(404).json({"error" : "deleting error"});
    }
}