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
const spawn = require('child_process').spawn;

router.get('/', function(req, res) {
  var ls = cp.spawn('./log.sh'/*command*/, []/*args*/, {}/*options, [optional]*/);
  ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
  });
});

module.exports = router;
