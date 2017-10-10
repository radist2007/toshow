
var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    username: {
        type: String
    },
    usermail: {
        type: String
    },
    usermessage: {
        type: String
    },
    position: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

schema.index(
    {position: 1}
);

// schema.method = {

// }

schema.statics = {

    saveMessage: function(username, usermail, usermessage, callback){

        var Message = this;

        var message = new Message({username: username, usermail: usermail, usermessage: usermessage});

        message.save(function(err){
            if (err) {
                console.log(err);
            }
                console.log('yes');
                callback('1')
        });
        
    },
    findMessages: function(callback){

        var Messages = this;

        Messages.find({}, function(err, mess){
            if(mess){
                callback(mess);
            }
        });
    },
    countMessages: function(callback){

        var Count = this;

        Count.count({}, function(err, count){
            if(err){
                throw new Error('Count err');
            }else{
                callback(count);
            }
        })
    }
}

exports.SendMail = mongoose.model('SendMail', schema);