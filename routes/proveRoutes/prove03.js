//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');
router.get('/',productController.getProducts);
router.post('/search',productController.searchProducts)
router.get('/:productId',productController.getProductById)
// router.post('/addBook',(req, res, next) => {
//     let name =  req.body.name;
//     let summary =  req.body.summary;
//     let extraInfo =  req.body.extrainfo;
//     books.push({name:name,summary:summary,extraInfo:extraInfo});
//     res.redirect('/prove02');
// });

module.exports = router;