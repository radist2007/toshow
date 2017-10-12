module.exports = function(app){

    //===============================================//
    //===================== CLIENT ==================//
    //===============================================//
    //------------------------------------------------------------ home -//
    var Home = require('./R_client/r_home');
    app.get('/', Home.get);
    app.get('/home', Home.get);

    // app.get('/:lang', Home.get);
    //------------------------------------------------------------ conferences -//
    var confId = require('./R_client/r_confId')
    app.get('/conference/:id', confId.get);
    // app.get('/conference/:id/:lang', confId.get);
    //------------------------------------------------------------ conferenceApp -//
    var ConfApp = require('./R_client/r_confApp');
    app.get('/confApp', ConfApp.get);
    // app.get('/confApp/:lang', ConfApp.get);
    app.post('/confApp', ConfApp.post);
    //------------------------------------------------------------ contacts -//
    var Cont = require('./R_client/r_contacts');
    app.get('/contacts', Cont.get);
    app.post('/contacts', Cont.post);
    //------------------------------------------------------------ about -//
    var About = require('./R_client/r_about');
    app.get('/about', About.get);

    //===============================================//
    //===================== ADMIN ===================//
    //===============================================//

    //------------------------------------------------------------ intel -//
    var Admin = require('./R_admin/r_intel');
    app.get('/admin', Admin.get);
    //------------------------------------------------------------ ligin -//
    var Login = require('./R_admin/r_login');
    app.post('/login', Login.post);
    //------------------------------------------------------------ admin -//

    var routAdmin = require('./R_admin/r_admin');
    app.get('/admin/main', routAdmin.get);
    app.post('/admin/main', routAdmin.post);

    //------------------------------------------------------------ logout -//
    var Logout = require('./R_admin/r_logout');
    app.get('/logout', Logout.get);
    //------------------------------------------------------------ messages -//
    var routMess = require('./R_admin/r_messages');
    app.get('/admin/readMessages', routMess.get);
    //------------------------------------------------------------ confApp -//
    var routConfApp = require('./R_admin/r_confApp');
    app.get('/admin/readConfApp', routConfApp.get);
    //------------------------------------------------------------ conference -//
    var routConf = require('./R_admin/r_addConf')
    app.get('/admin/addConf', routConf.get)
    app.post('/admin/addConf', routConf.post)
    //------------------------------------------------------------ editConf -//
    var editConference = require('./R_admin/r_editConf')
    app.get('/admin/editConfApp/:id', editConference.get);
    app.post('/admin/editConf', editConference.post);
};