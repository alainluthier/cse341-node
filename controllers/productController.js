const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/proveActivities/prove03', {
            title: 'Prove Activity 03',
            products: products,
            search:'',
            path: '/prove03', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    });
};
exports.searchProducts = (req, res, next) => {
    searchValue = req.body.search;
    Product.fetchAll(products => {
        dataJSON=products.filter(e => e.title.toLowerCase().includes(searchValue));
        res.render('pages/proveActivities/prove03', {
            title: 'Prove Activity 03',
            products: dataJSON,
            search:searchValue,
            path: '/prove03', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    });
    //res.redirect('/proveActivities/03');
};
exports.getProductById = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('pages/proveActivities/prove03/product', {
            pageTitle: 'Product Detail',
            path: '/product',
            product: product
        });
    });
};