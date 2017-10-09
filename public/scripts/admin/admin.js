function send(value1, value2){

    console.log('todo: ' + value1);
    console.log('whot: ' + value2);
    var data = {};
    data.todo = value1;
    data.id = value2;
    console.log(JSON.stringify(data));

    $.ajax({
        url: '/admin/main',
        type: 'POST',
        dataType: 'json',
        data: data,
        error: function(err){
            console.log('err4: ' + err);
            // showError('Неверное имя или пароль!', errorTopMargin);
        }
    }).done(function(data){
            console.log('res: ' + data)

        if (data.link){
            console.log('res: ' + data)
            window.location.href = data.link;
        } else {
            // showError('Неверное имя или пароль!', errorTopMargin);
            console.log('error on server');
        }

    })
}

