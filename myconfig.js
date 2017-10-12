
var myconfig = {};

myconfig.gmail = {
    user: 'radist2007test@gmail.com',
    password: 'rhfcjdcrfzgmail.com'
};

//============================================================//
//***************** Common *******************//
//============================================================//
myconfig.port = 7000;
myconfig.companyname = "radist2007";
myconfig.homepath = "/home/aida/Work/node/javascript-backend";

//============================================================//
//***************** Limits *******************//
//============================================================//
myconfig.limits = {
    pageArticles: 9,
    relArticles: 4
};

//============================================================//
//***************** Graphics *******************//
//============================================================//
myconfig.images = {
    socialimage: "/images/socialimage.png",
    noimage: "/images/noimage.jpg"
};

//============================================================//
//***************** Mongoose *******************//
//============================================================//
myconfig.mongoose = {
    uri: "mongodb://127.0.0.1/new",
    options: {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    }
};

//============================================================//
//***************** Session *******************//
//============================================================//
myconfig.session = {
    "secret": "nodeJSForever",
    "key": "sid",
    "cookie": {
        "httpOnly": true,
        "maxAge": null
    }
};

//============================================================//
//***************** Messages *******************//
//============================================================//
myconfig.messages = {
    error: {
        auth: "Неверное имя пользователя или пароль",
        db: "Ошибка базы данных"
    }
};

//============================================================//
//***************** Localisation *******************//
//============================================================//

myconfig.languages = [
    {
        name: 'de',
        alias: 'Deutsch',
        default: false
    },
    {
        name: 'en',
        alias: 'English',
        default: false
    },
    {
        name: 'ru',
        alias: 'Русский',
        default: true
    }
];

myconfig.locals = {
    nav: {
        home: {
            default: 'головна',
            ru: 'главная',
            en: 'home'
        }
    },
    month: {
        default: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'],
        de: ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        en: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    days: {
        default: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        en: ['Sun', 'Mo', 'Tue', 'Wed', 'Th', 'Fr', 'Sa']
    },
    navigations: {
        more: {
            default: 'Больше',
            de: 'Mehr',
            en: 'More'
        },
        views: {
            default: 'Просмотров: ',
            de: 'Gesehen: ',
            en: 'Viewed: '
        },
        published: {
            default: 'Добавлена: ',
            de: 'Veröffentlicht: ',
            en: 'Published: '
        }
    },
    messages: {
        found: {
            default: 'Статьи по запросу ',
            de: 'Suchergebnisse für ',
            en: 'Articles about '
        },
        notfound: {
            title: {
                default: 'Ничего не найдено по запросу ',
                de: 'Keine passenden Suchergebnisse gefunden für ',
                en: 'No posts matched your criteria: '
            },
            text: {
                default: 'Попробуйте сформулировать иначе',
                de: 'Nutzen Sie bitte anderen keyword',
                en: 'Please try another keyword'
            }
        },
        page404: {
            text: {
                default: 'Ничего не найдено',
                de: 'Seite Nicht Gefunden',
                en: 'Nothing found'
            }
        }
    }
};

module.exports = myconfig;