var express = require('express');
var logger = require('./../config/BasisLog')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/en', function(req, res, next) {
  // logger.info(req)
  res.render('indexEn');
  next()
});
router.get('/problem', function(req, res, next) {
  // logger.info(req)
  res.render('problem');
  next()
});
router.get('/problem/en', function(req, res, next) {
  // logger.info(req)
  res.render('problemEn');
  next()
});
// router.get('/ttt', function(req, res, next) {
//   res.render('index', { title: 'ttt' });
// });

module.exports = router;
// http://mp.weixin.qq.com/profile?src=3&timestamp=1537326619&ver=1&
// signature=MBfngB*O3oKjHSnO*gFtqp80ZS4kDlgCFMAnF*SuE79aHzcAN9wFoQu03qzgfTBPjS9vn1NkKrInsVaid2pAfA==
// https://mp.weixin.qq.com/profile?src=3&timestamp=1537326619&ver=1&
// signature=Lf5Pc7S*l2RxK34Yedd2yXQCtl3przKh2xxnySJ-jb95DldtE2zT9ApDA4mqnLdmp5u-8IZITjHG7SRjXAZeAw==
