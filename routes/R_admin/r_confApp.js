var Messages = require('../../models/m_sendMails').SendMail;

exports.get = function(req, res){

    if(req.session.user){
        Messages.findMessages(function(value){
            var mess;
            mess = value;
            Messages.countMessages(function(value){
                res.render('./admin/readConfApp', {admin: true, count: value, mess});
            });
        });

    }else{
        res.render('./admn/login');
    }


}