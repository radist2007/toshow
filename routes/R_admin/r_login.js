var Admin = require('../../models/m_admin').Admin;
var Config = require('../../myconfig');

exports.post = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    function checkAdmin(){

        Admin.find({}, function(err, admins){

            if (admins && (admins.length > 0)){

                Admin.authorize(username, password, function(err, admin){

                    if (err){
                        if (err === 403){
                            console.log('err: ' + Config.messages.error.auth);
                            res.send({mess: Config.messages.error.auth});
                        }else{
                            console.log(Config.messages.error.db);
                            res.send(Config.messages.error.db);
                        }
                    } else {

                        req.session.user = admin._id;
                        req.session.username = admin.username;
                        console.log('logined: ' + admin._id);
                        console.log('logined: ' + admin.username);
                        var link = "/admin/main";
                        res.send({link: link});
                    }
                });

            } else {

                Admin.createAdmin(username, password, "superadmin", function(){
                    checkAdmin();
                });
            }
        })
    }

    checkAdmin();

};
