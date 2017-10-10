var Conference = require('../../models/m_conference').Conference;

exports.get = function(req, res) {

    Conference.findConference(req.params.id, function(val){
        var conf = val;
        res.locals.metatitle = 'edit conference ' + conf.confDate;

        res.render('./admin/editConf', {admin: true, conf});
    })

}

exports.post = function(req, res){

    if(req.body.todo == "updataConf"){
        console.log('editConf: updataConf');
        Conference.updataConference(req.body.id, req.body.title, req.body.confDate, req.body.description, function(val){
            console.log('r_editConf: ' + val);

            var link = "/admin/main";
            res.send({link: link});
        })
    }else{
        console.log('editConf: ______________')
    }

}

