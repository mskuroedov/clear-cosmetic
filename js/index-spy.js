function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function doFall(item, delay) {
    setTimeout(function() {
        $('.map .map__bubble' + item).addClass('fallIn-ease');
    }, delay);
}

// new animation of percents in map
function doContinents(item, count) {
    let step = 500;

    setTimeout(() => {
        $('.map .map__percent span.' + item).addClass('fadeIn-short');

        setTimeout(() => {
            $('.map .map__percent span.' + item).removeClass('fadeIn-short').addClass('fadeOut-short');

            setTimeout(() => {
                $('.map .map__percent span.' + item).removeClass('fadeOut-short');
            }, step)

        }, step * 6);
    }, step * .2);
}


// Варианты монетизации
$('.monetization .section__title').viewportChecker({
    classToAdd: 'fadeIn',
    offset: 150,
    callbackFunction: function(elem, action) {
        let step = 300;

        setTimeout(() => {
            $('.monetization .monetization__col').eq(0).addClass('fadeInUp');

            setTimeout(() => {
                $('.monetization .monetization__col').eq(1).addClass('fadeInUp');

                setTimeout(() => {
                    $('.monetization .monetization__col').eq(2).addClass('fadeInUp');
                }, step)
            }, step);
        }, step);
    }
});

// Реклама
$('.forpartners .forpartners__header').viewportChecker({
    classToAdd: 'fadeIn',
    offset: 150,
    callbackFunction: function(elem, action) {
        let step = 300;

        setTimeout(() => {
            $('.forpartners .forpartners__col').eq(0).addClass('fadeInUp');

            setTimeout(() => {
                $('.forpartners .forpartners__col').eq(1).addClass('fadeInUp');

                setTimeout(() => {
                    $('.forpartners .forpartners__col').eq(2).addClass('fadeInUp');

                    setTimeout(() => {
                        $('.forpartners .forpartners__buttons').addClass('fadeIn-short');
                    }, step)
                }, step)
            }, step);
        }, step);
    }
});


if ($(window).outerWidth() > 950) {
    // benefits
    $('#benefits').viewportChecker({
        offset: 200,
        callbackFunction: function(elem, action) {
            let step = 400;
            let eq = 0;

            const interval = setInterval(() => {
                $('.benefits__right .benefits__right-icon img').eq(eq).addClass('bounceIn');
                $('.benefits__right .benefits__right-icon').eq(eq).find('h3, p').addClass('fadeIn-delay');

                eq++;

                if(eq == 4) {
                    clearInterval(interval);
                }
            }, step * .7)

            setTimeout(() => {
                $('.reviews').addClass('fadeInUp-middle');
            }, step / 2)
        }
    });
} else {
    $('#benefits').viewportChecker({
        offset: 400,
        callbackFunction: function(elem, action) {
            let step = 400;
            let eq = 0;

            const interval = setInterval(() => {
                $('.benefits__right .benefits__right-icon img').eq(eq).addClass('bounceIn');
                $('.benefits__right .benefits__right-icon').eq(eq).find('h3, p').addClass('fadeIn-delay');

                eq++;

                if(eq == 4) {
                    clearInterval(interval);
                }
            }, step * .7)
        }
    });
}

// Офферы
$('.offers .section__title').viewportChecker({
    classToAdd: 'fadeIn',
    offset: 150,
    callbackFunction: function(elem, action) {
        let step = 200;
        let eq = 0;

        const interval = setInterval(() => {
            $('.offers .offers__col').eq(eq).addClass('fadeIn');

            eq++;

            if(eq == 4) {
                clearInterval(interval);
            }
        }, step)

        setTimeout(() => {
            $('.offers .offers__col').css('opacity','1');
        }, step * 4)

    }
});

// SDK
$('.sdk').viewportChecker({
    classToAdd: 'fadeIn',
    offset: 150,
    callbackFunction: function(elem, action) {
        let step = 200;
        let eq = 0;

        const interval = setInterval(() => {
            $('.sdk .title-block img').eq(eq).addClass('fadeIn');
            $('.sdk .lists-block .list').eq(eq).addClass('fadeIn');
            if(eq === 1){
                $('.sdk .title-block .title').addClass('fadeIn');
                $('.sdk .title-block .subtitle').addClass('fadeIn');
                $('.sdk .title-block .text').addClass('fadeIn');
            }
            eq++;

            if(eq == 8) {
                clearInterval(interval);
            }
        }, step)
    }
});

// Анимация карты
$('.map').viewportChecker({
    offset: 550,
    callbackFunction: function(elem, action) {
        let step = 300;
        let eq = 0;
        let bubb = [1,2,3,4,5,6,7,8,9];
        bubb = shuffle(bubb);

        // бросаем карту
        $('.map .map__base').addClass('fallIn-map');

        // юросаем рандомно метки на карте
        bubb.forEach(function(item, i, arr) {
            let delay = getRandomInt(1000, 1700);

            doFall(item, delay);
        });

        // бросаем график
        setTimeout(() => {
            $('.map .map__mini-base').addClass('fallIn');

            setTimeout(() => {
                $('.map .map__mini-man').addClass('fadeIn-short');

                setTimeout(() => {
                    $('.map .map__mini-pillar').addClass('growUp');

                    setTimeout(() => {
                        $('.map .map__mini-pillar2').addClass('zoomIn-short');

                        let index = 1;
                        const int_graph = setInterval(() => {
                            $('.map .map__mini-pill' + index).addClass('growUp');

                            index++;
                        }, step / 4)
                    }, step / 2)
                }, step)
            }, step)
        }, step * 5)

        // добавляем спустя "время" после прогрузки карты кнопку добавить
        setTimeout(() => {
            $('.map .map__areas').addClass('fadeInLeft');
        }, step * 3)

        // подключить страну анимация
        // setTimeout(() => {
        //     $('.map .map__countries-head').addClass('fadeIn-short');
        // }, step * 4)

        //показываем проценты по регионам
        const continents = ['europe', 'asia', 'northamerica', 'southamerica', 'oceania'];
        let delay = 1000;
        let count = 0;

        // первый тик всплытие
        setTimeout(() => {
            $('.map .map__percent').addClass('bounceIn');
        }, delay);

        var intervalLid = setTimeout(function tick() {
            count++;
            if (count > 4) {
                count = 0;
            }
            doContinents(continents[count], count);

            intervalLid = setTimeout(tick, delay * 4); // последующие задержки (5 сек)
        }, delay); // первая задержка перед показом
    }
});

// Выплаты
$('.payments .section__title').viewportChecker({
    classToAdd: 'fadeIn',
    offset: 150,
    callbackFunction: function(elem, action) {
        let step = 100;
        let eq = 0;

        const interval = setInterval(() => {
            $('.payments .payments__icons > div').eq(eq).addClass('bounceIn');

            eq++;

            if(eq == 6) {
                clearInterval(interval);
            }
        }, step)
    }
});


// Выплаты
$('.signup__left').viewportChecker({
    classToAdd: 'fallIn',
    offset: 200
});