
var mongoose = require('mongoose')
var comment = mongoose.model('comment')
var message = mongoose.model('message')

function comment2Controller(){
  this.usercomment = function(req, res){
    message.findOne({_id:req.body.message_id}, function(err, message){
      var newcomment = new comment({ username: req.body.username, comment: req.body.comment })

      comment._message = req.body.message_id
    })

  }
}
