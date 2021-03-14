const { Router } = require('express');
const { getAllCategories } = require('./controller');
const router = Router();

router.get('/all', getAllCategories);

module.exports = router;