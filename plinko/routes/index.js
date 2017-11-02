var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/getuserscore', function(req,res,next){
  var myRe = req.query.q;
  var foundUser = 0;
  var scoreResult = 0;
  var fileString;
  fs.readFIle(_dirname+ '/user.dat.txt', functiton(err,data){
    if(err) throw err;
    var userArray = data.toString().split("\n");
    var fileString = data.toString();
    for(var i = 0; i < userArray.length; i++){
      var detailString = userArray[i];
      var detailArray = detailString.toString().split(" ");
      var detailUserName = detailArray[0];
      if(myRe == detailUserName){
        foundUser = 1;
        var scoreResult = detailArray[1];
      }
    }
  });
  if (foundUser == 1){
    jsonresult.push(scoreResult);
  }
  else {
    var newfileString;
    newfileString = fileString + "\nmyRe 0";
    fs.writeFile(_dirname+'/user.dat.txt', newfileString, function(err){
      if(err) throw err;
    });
    jsonresult.push(scoreResult);
  }
  res.status(200).json(jsonresult);
});




module.exports = router;
