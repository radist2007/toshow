function deleteConf(value){

    var data = {};
    data.todo = "del";
    data.id = value;
    console.log(data);
    var temp = this;
	
    $(document).on('click', '.remove', function() {
        $(this).parent().parent().remove();
    });

    $.ajax({
        url: '/admin/addConf',
        type: 'POST',
        dataType: 'json',
        data: data,
        error: function(){
            console.log('err4');
            // showError('Неверное имя или пароль!', errorTopMargin);
        }
    }).done(function(data){

        if (data){
            console.log('res: ' + JSON.stringify(data));
        } else {
            // showError('Неверное имя или пароль!', errorTopMargin);
            console.log('res error4ik');
        }

    })
}


    // {{!-- // var title = req.body.title;
    // var description = req.body.description;
    // var shortdescription = req.body.shortdescription;
    // var htmltitle = req.body.htmltitle;
    // var htmldescription = req.body.htmldescription;
    // var menutitle = req.body.menutitle;
    // var htmlkeywords = req.body.htmlkeywords;
    // var alias = req.body.alias;
    // var position = req.body.position;
    // var lang = req.body.lang;
    // var parent = req.body.parent;
    // var ismain = req.body.ismain; --}}