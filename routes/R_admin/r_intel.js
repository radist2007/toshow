var Admin = require('../../models/m_admin').Admin;

exports.get = function(req, res){

    res.locals.title = "Вход";
    res.locals.page = "login";

    if (req.session.user){

        Admin.findOne({_id:req.session.user}, function(err){
            if (err){
                res.render('./admin/login');
            } else {
                console.log("admin")
                res.redirect('/admin/main');
            }
        })
    } else {
        res.render('./admin/login');
    }

};