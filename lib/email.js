var nodemailer = require('nodemailer');

module.exports = function(credentials){

	var mailTransport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: credentials.gmail.user,
			pass: credentials.gmail.password,
		}
	});

	var from = '"radist_2007" <radist2007test@gmail.com>';
	var errorRecipient = 'radist2007test@gmail.com';

	return {
		send: function(to, subj, body, callback){

		    mailTransport.sendMail({
		        from: from,
		        to: to,
		        subject: subj,
		        html: body,
		        generateTextFromHtml: true
			},
			function(err, info){
				var global = "0";
				if(err) {
					console.error('Unable to send email: '.bgRed + err);
					global = "0";
					callback(global);
				}else{
					console.log('message wos sended'.bgGreen);
					global = "1";
					callback(global);
					// console.log(info.envelope);
					// console.log('response: ' + info.response);
				}
			});
		},

		emailError: function(message, filename, exception){
			var body = '<h1>radist2007 Error</h1>' +
				'message:<br><pre>' + message + '</pre><br>';
			if(exception) body += 'exception:<br><pre>' + exception + '</pre><br>';
			if(filename) body += 'filename:<br><pre>' + filename + '</pre><br>';
		    mailTransport.sendMail({
		        from: from,
		        to: errorRecipient,
		        subject: 'radist2007 Site Error',
		        html: body,
		        generateTextFromHtml: true
		    }, function(err){
		        if(err) console.error('Unable to send email: ' + err);
		    });
		},
	};
};
