var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function (req, res, next) {
  // console.log(req.body)
  req.on("data", function(chunk){
    console.log('chunk', chunk)
      res.send({})
  })
});
module.exports = router;
