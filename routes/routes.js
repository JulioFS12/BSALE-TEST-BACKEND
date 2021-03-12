

const routes = ( app ) => {

    app.use('/products', require('../components/product/network'));

}

module.exports = routes;