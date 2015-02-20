var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')("USERNAME", "PASSWORD"); //create USERNAME & PASSWORD from https://sendgrid.com/credentials

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  sendgrid.send({
    to:       'prosai.net+sendgridtest@gmail.com',
    from:     'aquarian.ex@gmail.com',
    subject:  'Hello World中文',
    text:     'My first中文測試 email through SendGrid.'
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });
});

module.exports = router;
