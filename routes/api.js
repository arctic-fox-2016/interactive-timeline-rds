var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');


router.get('/api/comments', function(req, res){
  fs.readFile(COMMENTS_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

router.post('/api/comments', function(req, res){
  fs.readFile(COMMENTS_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err){
      if(err){
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});

module.exports = router
