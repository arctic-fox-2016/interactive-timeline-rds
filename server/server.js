let express = require('express')
let app = express()
let port = 8000

app.listen(port, function(){
  console.log('listening on', port)
})
