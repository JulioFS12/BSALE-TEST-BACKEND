const { getAllProducts } = require('./controller');
const router = require('express').Router();

router.get('/all', getAllProducts);

module.exports = router;