const Product = require('../models/products');
exports.getProducts = (req, res, next) => {
    Product.find().then(products=>{
        res.render('pages/proveActivities/prove04', {
            title: 'Prove Activity 04',
            products: products,
            search:'',
            path: '/prove04', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    })
    .catch(err => console.log(err));
};
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
      .then(product => {
        res.render('pages/proveActivities/prove04/product', {
          product: product,
          pageTitle: product.title,
          path: '/products'
        });
      })
      .catch(err => console.log(err));
  };
  exports.getCart = (req, res, next) => {
    req.user
      .populate('cart.items.productId')
      .execPopulate()
      .then(user => {
        const products = user.cart.items;
        res.render('pages/proveActivities/prove04/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products
        });
      })
      .catch(err => console.log(err));
  };  
  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
      .then(product => {
        return req.user.addToCart(product);
      })
      .then(result => {
        res.redirect('/proveActivities/04/cart');
      });
  };
  
  exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
      .removeFromCart(prodId)
      .then(result => {
        res.redirect('/proveActivities/04/cart');
      })
      .catch(err => console.log(err));
  };
  exports.updateDecrease=(req,res,next) =>{
    const prodId = req.body.productId;
    req.user
      .updateCart(prodId,-1)
      .then(result =>{
        res.redirect('/proveActivities/04/cart');
      })
      .catch(err=>console.log(err));
  };
  exports.updateIncrease=(req,res,next) =>{
    const prodId = req.body.productId;
    req.user
      .updateCart(prodId,1)
      .then(result =>{
        res.redirect('/proveActivities/04/cart');
      })
      .catch(err=>console.log(err));
  };
/*
exports.searchProducts = (req, res, next) => {
    searchValue = req.body.search;
    Product.fetchAll(products => {
        dataJSON=products.filter(e => e.title.toLowerCase().includes(searchValue));
        res.render('pages/proveActivities/prove04', {
            title: 'Prove Activity 04',
            products: dataJSON,
            search:searchValue,
            path: '/prove04', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    });
    //res.redirect('/proveActivities/03');
};*/
