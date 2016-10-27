let express = require('express')
let app = express()
let port = 8000
let model = require("./models/index")
let bodyParser = require('body-parser')

app.use(bodyParser())

app.get('/posts', function(req,res,next){
  model.Post.findAll({include: [{
    model: model.Comment,
  }]}).then(function(allPosts){
    res.json({message:"berhasil", data: allPosts})
  })
})

app.get('/comments', function(req,res,next){
  model.Comment.findAll().then(function(allComments){
    res.json({message:"berhasil", data: allComments})
  })
})

app.post('/posts', function(req,res,next){
  model.Post.create({post: req.body.post})
  res.send('berhasil')
})

app.post('/comments', function(req,res,next){
  model.Comment.create({PostId: req.body.postid, comment: req.body.comment})
  res.send('berhasil')
})

app.get('/delete', function(req,res,next){
  model.Post.destroy({where:{id:id}})
  model.Comment.destroy({where:{id:id}})
})

app.listen(port, function(){
  console.log('listening on', port)
})
