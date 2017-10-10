var Messages = require('../../models/m_sendMails').SendMail;
var Conference = require('../../models/m_conference').Conference;

exports.get = function(req, res){
    console.log('r_admin');

    if(req.session.user){
        var adminname = req.session.username;
        console.log('adminname: ' + adminname);
        res.locals.metatitle = 'conference';

        Messages.countMessages(function(value){
            console.log('r_admin -> Mess.countMess: ' + value);
            Conference.findConferences(function(val){
                console.log('r_admin -> Mess.countMess -> Conf.findConf: ' + 0);
                var conf = val;
                res.render('./admin/admin', {admin: true, username: adminname, messCount: value, conf});
            })
        })

    }else{
        res.render('./admin/login');
    }

}

exports.post = function(req, res){

    if(req.body.todo == 'del'){
        Conference.deleteConference(req.body.id, function(val){
            console.log(val);
            var link = "/admin";
            res.send({link: link});
        })
    }else if(req.body.todo == 'readMessages') {
        console.log('r_admin + POST readMessages: ')

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

