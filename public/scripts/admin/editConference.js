function send(value){

    var data = {};
    data.todo = 'updataConf';
    data.id =   value;
    data.title = document.getElementById('title').value;
    data.confDate = document.getElementById('confDate').value;
    data.description = document.getElementById('description').value;

    console.log("req to /admin/editConf: " + JSON.stringify(data));

    $.ajax({
        url: '/admin/editConf',
        type: 'POST',
        dataType: 'json',
        data: data,
        error: function(){
            console.log('editConf err4');
            // showError('Неверное имя или пароль!', errorTopMargin);
        }
    }).done(function(data){
            console.log('res: ' + JSON.stringify(data));

        if (data.link){
            console.log('res: ' + data);
            window.location.href = data.link;
        } else {
            // showError('Неверное имя или пароль!', errorTopMargin);
            console.log('addConference: res error4ik');
        }

    })
}

