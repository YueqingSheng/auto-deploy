var express = require('express');
var router = express.Router();



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



router.get('/', function(req, res) {
  const commands = './log.sh';
  exec(commands, (err, out, code) => {
    if (err) {
        res.send(err);
    }else {
        res.send(out)
    }
  })
});

module.exports = router;
