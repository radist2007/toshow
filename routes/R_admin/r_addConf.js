var Conference = require('../../models/m_conference').Conference;

exports.get = function(req, res){

    if(req.session.user){
        Conference.findConferences(function(val){
            var conf = val;
            var adminname = req.session.username;
            console.log('addConf: ' + adminname);

            res.render('./admin/addConf', {admin: true, username: adminname, conf});
        })

    }else{
        res.render('./admin/login');
    }

}

exports.post = function(req, res){

    console.log(JSON.stringify(req.body));
    console.log(req.body.id);
    if(req.body.todo == "del"){
        Conference.deleteConference(req.body.id, function(val){
            console.log(val);
            res.send({data: 'del'});
        })
    }else{
        Conference.createConference(req.body.title, req.body.confDate, req.body.description, function(val){
            console.log('createConf: ' + val);
            var link = '/admin/main'
            res.send({link: link});
        } )

    }
}