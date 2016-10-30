let express = require('express')
let app = express()
let port = 8000
let model = require("./models/index")
let bodyParser = require('body-parser')
let cors = require('cors')

app.use(bodyParser())
app.use(cors())

app.get('/', function(req,res,next){
  model.Post.findAll({attributes:[['id','post_id'], 'post'],include: [{
    model: model.Comment,
    attributes: [['id','comment_id'], 'comment'],
  }]}).then(function(allPosts){
    res.json(allPosts)
  })

})

app.post('/posts', function(req,res,next){
  model.Post.create({post: req.body.post}).then(function(post){
    res.json(post)
  })
})

app.post('/comments', function(req,res,next){
  model.Comment.create({PostId: req.body.postid, comment: req.body.comment}).then(function(comment){
    res.json(comment)
  })
})

app.get('/delete', function(req,res,next){
  model.Post.destroy({where:{id:id}})
  model.Comment.destroy({where:{id:id}})
})

app.listen(port, function(){
  console.log('listening on', port)
})
