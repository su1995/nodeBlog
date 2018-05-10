var express = require('express');
var router = express.Router();
// 增加url 依赖
var urllib = require('url');



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile('./public/blog/index.html'); 
  // res.sendfile('./views/index.html'); 
});


router.get('/users', function(req, res, next) {
  console.log("users get");
  var params = urllib.parse(req.url, true);
  var query = params.query;
  console.log(query);
  res.send({"sdsadas": 2334});
});

router.get('/blog', function(req, res, next) {  
  console.log("blog get");
  res.sendfile('./public/blog/index.html'); 
});

router.post('/users', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  console.log("users post");
  var data = req.body;
  console.log(data);
  res.send({"sdsadas": 233});
});

module.exports = router;
