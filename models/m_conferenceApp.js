
var monguse = require('mongoose');
var Schema = monguse.Schema;

var schema = new Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    conference: {
        type: String
    }
});

schema.index(
    {position: 1}
);

schema.statics = {

    createConference: function(name, email, conference, callback){

        var Conference = this;

        var conf = new Conference({
            name: name,
            email: email,
            coference: coference,
        });
        conf.save(function(err){
            if (err) {
                console.error("------ DB ERROR ----- " + err);
                console.log("------ DB ERROR ----- " + err);
                callback('Невозможно добавить статью');
            } else {
                callback (null, conf);
            }
        });
    },
    updataConference: function(confid, name, email, coference, callback){

        var Conference = this;

            var setParams = {};
            setParams.name = name;
            setParams.email = email;
            setParams.coference = coference;

            Conference.update(
                {_id:confid},
                {
                    $set:setParams

                }, function(err, opt){
                    console.log('m_conf updata err: ' + err)
                    if (opt){
                        console.log('test upconf' + opt);
                        callback(" базы данных");
                    } else {
                        console.log('test upconf err');
                        callback("Ошибка базы данных");
                    }
                }
            )
    },
    deleteConference: function(id, callback){
        
        var Conferences = this;
        
        Conferences.findOneAndRemove({_id: id}, function(err, conf){
            if(conf){
                callback(conf);
            }
        });
    },
    findConferences: function(callback){

        var Conferences = this;

        Conferences.find({}, function(err, conf){
            if(conf){
                callback(conf);
            }
        });
    },
    findConference: function(id, callback){

        var Conferences = this;

        Conferences.findOne({_id: id}, function(err, conf){
            if(conf){
                callback(conf);
            }
        });
    },
    countConferences: function(callback){

        var Count = this;

        Count.count({}, function(err, count){
            if(count){
                callback(count);
            }
        })
    }
};

exports.ConferenceApp = monguse.model('ConferenceApp', schema);