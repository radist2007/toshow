
var Conference = require('../../models/m_Conference').Conference;



exports.get = function(req, res) {

    Conference.findConference(req.params.id, function(val){
        var conf = val;
        res.locals.metatitle = 'conference ' + conf.confDate;

        res.render('./client/confId', {mess: "test", conf});
    })

}