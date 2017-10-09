var monguse = require('mongoose');
var Schema = monguse.Schema;

var schema = new Schema({

    title: {
        type: String
    },
    confDate: {
        type: String
    },
    description: {
        type: String
    }
});

schema.statics = {

    createConference: function(title, confDate, description, callback){

        var Conference = this;

        var conf = new Conference({
            title: title,
            confDate: confDate,
            description: description,
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
    updataConference: function(confid, title, confDate, description, callback){
        console.log('m_conference -> updataConference -> confid: ' + confid);
        console.log('m_conference -> updataConference -> title: ' + title);
        console.log('m_conference -> updataConference -> confDate: ' + confDate);
        console.log('m_conference -> updataConference -> description: ' + description);

        var Conference = this;

            var setParams = {};
            setParams.title = title;
            setParams.confDate = confDate;
            setParams.description = description;

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

exports.Conference = monguse.model('Conference', schema);