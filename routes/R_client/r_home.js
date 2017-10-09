var Conference = require('../../models/m_Conference').Conference;

exports.get = function(req, res) {

    Conference.findConferences(function(val){
        var conf = val;
        res.locals.metatitle = 'conference';

        res.render('./client/home', {mess: "mes", conf});
    })

}