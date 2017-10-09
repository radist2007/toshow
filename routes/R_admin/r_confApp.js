var Messages = require('../../models/m_sendMails').SendMail;

exports.get = function(req, res){


    Messages.findMessages(function(value){
        var mess;
        mess = value;
        Messages.countMessages(function(value){
            res.render('./admin/readConfApp', {admin: true, count: value, mess});
        });
    });

}