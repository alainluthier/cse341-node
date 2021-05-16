//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/productsController');
/* /product  */
router.get('/product', productsController.getProducts);
router.get('/product/:productId', productsController.getProduct);
router.get('/cart', productsController.getCart);
router.post('/cart', productsController.postCart);
router.post('/cart-delete-item', productsController.postCartDeleteProduct);
router.post('/cart-update-decrease', productsController.updateDecrease);
router.post('/cart-update-increase', productsController.updateIncrease);
//router.post('/search',productController.searchProducts)
//router.get('/:productId',productController.getProductById)
// router.post('/addBook',(req, res, next) => {
//     let name =  req.body.name;
//     let summary =  req.body.summary;
//     let extraInfo =  req.body.extrainfo;
//     books.push({name:name,summary:summary,extraInfo:extraInfo});
//     res.redirect('/prove02');
// });

module.exports = router;