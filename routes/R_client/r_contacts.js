var myconfig = require('../../myconfig.js');
var emailService = require('../../lib/email.js')(myconfig);
var mongose = require('../../lib/mongoose');
var Messages = require('../../models/m_sendMails').SendMail;

exports.get = function(req, res) {
    
    res.render('./client/contacts');
}

exports.post = function(req, res) {

    try {
    var name = req.body.name,
        email = req.body.email,
        message = req.body.message,
        html = '<h1>' + name + '</h1>' + '<h2>' + email + '</h2>' + '<p>' + message + '</p>';
        console.log('name: ' + name);
        console.log('mail: ' + email);
        console.log('message: ' + message);
        console.log(req.body);
        console.log("---------------------------------------------------------------------------------");

        console.log(' MESSAGE START SENDING from my site --->>');


        function sendMessages() {
            return new Promise((resolve, reject) => {
                var temp = "temp";
                console.log('sendMessages -------------------------------------- start');
                resolve(temp);
            })
        };

        function sendFirstMessage() {
            return new Promise((resolve, reject) => {
                console.log('Promis 1 -------------------------------------- start');
                //Send to me
                emailService.send(myconfig.gmail.user, message, html, function(callback) {
                    temp = callback;
                    console.log("temp in callback1 = " + temp);
                    resolve(temp);
                })
            })
        };

        function sendSecondMessage(temp) {
            return new Promise((resolve, reject) => {
                console.log('Promis 2 --------------------------------------- start');
                //   Send to user
                var html = '<h3>' + name + ', дякую за підписку! </h3>';
                emailService.send(email, message, html, function(callback){
                    temp = callback;
                    console.log("temp in callback2 = " + temp);
                    resolve(temp);
                })
            })
        };

        function checkSend(temp) {
            return new Promise (function(resolve, reject) {
                if(temp == "1") {
                    console.log('checkSend done: all GOOD!');
                    resolve('thankYou');
                } else {
                    console.log('checkSend done: BED ');
                    reject(temp);
                }
            })
        }

        function addToDB(temp) {
            return new Promise (function(resolve, reject) {
                Messages.saveMessage(name, email, message, function(value){
                    console.log('r_contacs: ' + value);
                });
                resolve('thankYou');
            })
        }

        function backToUser(value) {
            return new Promise(function(resolve, reject) {
                console.log("backToUser sed " + value);
                var toSend = {
                    err: temp,
                    mess: '<p> Ваша заявка прийнята! </p><p>На Вашу електронну адресу відправлено листа з реквізитами,</p><p>Гарного дня!)</p>'
                }
                res.status(200).send(toSend);
                console.log(' MESSAGE_SENDed to me --->>' + myconfig.gmail.user );
                console.log(' MESSAGE_SENDed to user --->>' + email );
            })
        }

        function toCatch(value) {
            return new Promise(function(resolve, reject) {
                console.log("this is catch function!" + value );
                var toSend = {
                    err: temp,
                    mess: '<p>Вибачте, сталася помилка :(</p> <p> Ваше повідомлуння НЕ надіслано,</p> <p> спробуйте пізніше.</p>'
                }
                res.status(200).send(toSend);
            })
        }

        sendMessages()
          .then(sendFirstMessage)
          .then(checkSend)
          .then(sendSecondMessage)
          .then(checkSend)
          .then(addToDB)
          .then(backToUser)
          .catch(toCatch);

    } catch (e) {
        console.log('trable here ---> try/catch r_contacts.js: ' + e);
        console.log('------/sendMailErr');
        res.render('sendMailErr');
    }
}
