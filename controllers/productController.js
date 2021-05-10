const Product = require('../models/product');

const productDetails=(req,res)=>{
    const id = req.params.id;
    Product.findById(id)
    .then(result=>{
        res.rednder()
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports = {
    productDetails
}