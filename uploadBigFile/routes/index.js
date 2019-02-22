var express = require('express');
var router = express.Router();
const logger = require('../log');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function (req, res, next) {
  // console.log(req.body)
  let body = ''
  req.on("data", function(chunk){
    body += chunk
    logger.info(`
      -----------------------------------------------------------------------------------------------------------------------------------------------
      ${body}
      -----------------------------------------------------------------------------------------------------------------------------------------------
    `)
  })
  req.on('end', function (){
    res.end()
  })
});
module.exports = router;
