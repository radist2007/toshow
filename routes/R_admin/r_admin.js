var Messages = require('../../models/m_sendMails').SendMail;
var Conference = require('../../models/m_Conference').Conference;

exports.get = function(req, res){

    var adminname = req.session.username;
    res.locals.metatitle = 'conference';

    Messages.countMessages(function(value){
        Conference.findConferences(function(val){
            var conf = val;
            res.render('./admin/admin', {admin: true, username: adminname, messCount: value, conf});
        })
    })
}

exports.post = function(req, res){

    if(req.body.todo == 'del'){
        Conference.deleteConference(req.body.id, function(val){
            console.log(val);
            var link = "/admin";
            res.send({link: link});
        })
    }else if(req.body.todo == 'readMessages') {

        var link = "/admin/readMessages";
        res.send({link: link});
    }else if(req.body.todo == 'readConfApp') {

        var link = "/admin/readConfApp";
        res.send({link: link});
    }else if(req.body.todo == 'saveConfApp') {

        var link = "/admin/editConfApp/" + req.body.id;
        res.send({link: link});
    }else{
        console.log("addCongerence");
        var link = "/admin/addConf";
        res.send({link: link});

    }





}

