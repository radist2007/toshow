$(document).ready(function(){

    var errorTopMargin = 50;

    //---------------------------- фильтры для проверки полей на недопустимые символы
    //---------------------------- https://www.sitepoint.com/expressions-javascript/
    var filterUsername  = /^([a-zA-Z0-9_\-])+$/;
    var filterPassword = /^[a-zA-Z0-9!%&@#$\^*?_~+]+$/;

    $('#pass').on('keyup', function(e){
        //---------------------------- если пользователь нажал enter
        if (e.keyCode == 13){
            $('.b-login').click();
        }
    });

    //=========================== Кнопка войти ==========================//

    $('.btn').on("click", function(){
    // $('.b-login').on("click", function(){

        //---------------------------- параметры для авторизации
        var data = {};
        data.username = $('#username').val();
        data.password = $('#pass').val();

        if (data.username == ''){
            //-------------------- showError(text, top) функция для отображения ошибки
            //-------------------- text - текст сообщения
            //-------------------- top - отступ от верха страницы
            // showError('Пожалуйста введите свое имя!', errorTopMargin);
            console.log('Пожалуйста введите свое имя!');
        } else if (data.password == ''){
            // showError('Пожалуйста введите свой пароль!', errorTopMargin);
            console.log('Пожалуйста введите свой пароль!');
        } else if (!filterUsername.test(data.username)){
            // showError('Недопустимые символы в имени', errorTopMargin);
            console.log('Недопустимые символы в имени');
        } else if(!filterPassword.test(data.password)) {
            // showError('Недопустимые символы в пароле', errorTopMargin);
            console.log('Недопустимые символы в пароле');
        } else {

            console.log('ajax()');
            $.ajax({
                url: '/login',
                type: 'POST',
                dataType: 'json',
                data: data,
                error: function(){
                    // showError('Неверное имя или пароль!', errorTopMargin);
                    console.log('ajax().error')
                }
            }).done(function(data){
                if(data){
                    if (data.link){
                        console.log('ajax().done: ' + JSON.stringify(data.link));
                        window.location.href = data.link;
                    } else {
                        console.log('ajax().done err' + data)
                        // showError('Неверное имя или пароль!', errorTopMargin);
                    }
                };
            })
        }
    })
});