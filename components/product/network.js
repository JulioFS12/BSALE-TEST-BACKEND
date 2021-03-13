const { getAllProducts, getProductByCategory, getProductByName } = require('./controller');
const router = require('express').Router();

router.get('/all', getAllProducts);
router.get('/bycategory', getProductByCategory);
router.get('/byname', getProductByName);

module.exports = router;