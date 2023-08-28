$('.openMenu, .closeMenu, .overlay').click(() => {
    $('.leftMenu').toggleClass('-translate-x-[100%]');
    $('.overlay').toggleClass('opacity-0 pointer-events-none');
    $('html').toggleClass('overflow-hidden');
});


$('.moreBtn').click((e) => {
    $(e.target).closest('.wrapperOrder').find('.innerOrderInfo').slideToggle();
    $(e.target).find('svg').toggleClass('rotate-180');
});


// Счетчик больше
$('.plusBtn').click((e) => {
    let count = $(e.target).closest('.counterArea').find('input').val();
    if(count < 99) {
        count = +count + 1;
        $(e.target).closest('.counterArea').find('input').val(count)
    }
})
// Счетчик меньше
$('.minusBtn').click((e) => {
    let count = $(e.target).closest('.counterArea').find('input').val();
    if(count > 0) {
        count = +count - 1;
        $(e.target).closest('.counterArea').find('input').val(count)
    }
})

// Фиксированная шапка
$(function() {
    let header = $('header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 99) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
});

// Обратный отсчет
function counter(area) {
    var timer2 = "1:30";
    var interval = setInterval(function() {
    var timer = timer2.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    $(area).html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
    }, 1000);
}

// Форма авторизации
$('.nextStepAuth').click((e) => {
    let val = $(e.target).parents().find('.phoneValue').val();
    if(val.length > 11) {
        console.log('В номере больше 11 символов')
        $('.formAuth').toggleClass('hidden')
        $('.formEnterCode').toggleClass('hidden')
        counter('.countdownCode')

        $('.confirmElse').click((e) => {
            if($(e.target).data('confirm') == 'code') {

                counter($(e.target).parent().find('.countdownCode'))
                $('.formEnterCode').toggleClass('hidden');
                $('.formEnterDecimal').toggleClass('hidden');
            } else if($(e.target).data('confirm') == 'decimal') {

                counter($(e.target).parent().find('.countdownDecimal'))
                $('.formEnterCode').toggleClass('hidden')
                $('.formEnterDecimal').toggleClass('hidden')
            }
        }); 
    } else {
        console.log('В номере меньше 11 символов')
    }
});

// Форма регистрации
$('.nextStepReg').click((e) => {
    let val = $(e.target).parents().find('.phoneValue').val();
    if(val.length > 11) {
        console.log('В номере больше 11 символов')
        $('.formReg').toggleClass('hidden')
        $('.formEnterCode').toggleClass('hidden')
        counter('.countdownCode')

        $('.confirmElse').click((e) => {
            if($(e.target).data('confirm') == 'code') {

                counter($(e.target).parent().find('.countdownCode'))
                $('.formEnterCode').toggleClass('hidden');
                $('.formEnterDecimal').toggleClass('hidden');
            } else if($(e.target).data('confirm') == 'decimal') {

                counter($(e.target).parent().find('.countdownDecimal'))
                $('.formEnterCode').toggleClass('hidden')
                $('.formEnterDecimal').toggleClass('hidden')
            }
        }); 
    } else {
        console.log('В номере меньше 11 символов')
    }
});
    

$('.radio-input').click((e) => {
    console.log($(e.target).attr('id'))
    if($(e.target).attr('id') == 'pickup') {
        $('.pickupBtn').removeClass('hidden')
        $('.deliveryBtn').addClass('hidden')
    } else {
        $('.pickupBtn').addClass('hidden')
        $('.deliveryBtn').removeClass('hidden')
    }
}); 