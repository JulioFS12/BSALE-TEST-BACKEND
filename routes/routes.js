

const routes = ( app ) => {

    app.use('/products', require('../components/product/network'));
    app.use('/category', require('../components/category/network'));

}

module.exports = routes;