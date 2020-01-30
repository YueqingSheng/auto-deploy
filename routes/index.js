var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

const exec = require('child_process').exec;
router.post('/', (req, res) => {
  const commands = './deploy.sh';
  exec(commands, (err, out, code) => {
    if (err) {
        res.send(err);
    }else {
        res.send(out)
    }
  })
})

module.exports = router;
