var Conference = require('../../models/m_conference').Conference;

exports.get = function(req, res) {
    if(req.params.lang){
        console.log('r_home -> req.params.lang-------------------------------' + req.params.lang)
    }
    if(req.query.language){
        console.log('r_home -> req.qurey.language-------------------------------' + req.query.language)
    }


        res.render('./client/home');

}