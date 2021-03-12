const router = require('express').Router();

router.get('/all', (req, res) => {

  res.send({
      msg: 'Working',
  }) 
   
});

module.exports = router;