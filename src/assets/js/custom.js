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


// Форма регистрации
$('.nextStepReg').click((e) => {
    let val = $(e.target).parents().find('.phoneValue').val();
    if(val.length > 11) {
        console.log('В номере больше 11 символов')
        $('.formReg').toggleClass('hidden')
        $('.formEnterCode').toggleClass('hidden')
        $('.changePhoneStep').toggleClass('hidden')

        $('.confirmElse').click((e) => {
            if ($(e.target).data('confirm') == 'code') {
                console.log('111111')
                $('.formEnterCode').addClass('hidden')
                $('.formEnterDecimal').removeClass('hidden')
            } else if ($(e.target).data('confirm') == 'decimal') {
                console.log('222222')
                $('.formEnterCode').removeClass('hidden');
                $('.formEnterDecimal').addClass('hidden');
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


$('.nextStepAuth').click((e) => {
    let val = $(e.target).parents().find('.phoneValue').val();
    if (val.length > 11) {
        console.log('В номере больше 11 символов')
        $('.formAuth').toggleClass('hidden')
        $('.formEnterCode').toggleClass('hidden')
        $('.changePhoneStep').toggleClass('hidden')


        $('.confirmElse').click((e) => {
            if ($(e.target).data('confirm') == 'code') {
                console.log('111111')
                $('.formEnterCode').addClass('hidden')
                $('.formEnterDecimal').removeClass('hidden')
            } else if ($(e.target).data('confirm') == 'decimal') {
                console.log('222222')
                $('.formEnterCode').removeClass('hidden');
                $('.formEnterDecimal').addClass('hidden');
            }
        });
    } else {
        console.log('В номере меньше 11 символов')
    }
});

$('.changePhoneStep').click(() => {
    $('.formAuth').toggleClass('hidden')
    $('.formReg').toggleClass('hidden')
    $('.changePhoneStep').toggleClass('hidden')
    $('.formEnterCode').addClass('hidden');
    $('.formEnterDecimal').addClass('hidden');
    $('.phoneValue').val('');
    clearInterval(countdown)
})

let minuteCode = $('.minuteCode'),
    secondCode = $('.secondCode'),
    minuteDigits = $('.minuteDigits'),
    secondDigits = $('.secondDigits');

var phoneValue = $('.phoneValue');

let startPhoneTimer = $('.startPhoneTimer'),
    startCodeTimer = $('.startCodeTimer');

let minutes, seconds;

startPhoneTimer.on('click', (e) => {
    clearInterval(countdown)
    resetTimer(minuteDigits, secondDigits)
    startTime(minuteDigits, secondDigits);
    $('.inputConfirm').each((i, item) => {
        $(item).val('')
    })
});

startCodeTimer.each((t, timer) => {
    $(timer).on('click', (e) => {
        if(phoneValue.val().length > 11) {
            console.log('proverka')
            clearInterval(countdown)
            resetTimer(minuteCode, secondCode)
            startTime(minuteCode, secondCode);
            $('.inputConfirm').each((i, item) => {
                $(item).val('')
            })
        }
    });
})

function resetTimer(clockM, clockS) {
    clearInterval(countdown);
    minutes = '0' + 0;
    seconds = 10;
    clockM.html(minutes);
    clockS.html(seconds);
}

function startTime(clockM, clockS) {
    countdown = setInterval(() => {
        clockM.html(minutes);

        if (seconds < 10) {
            clockS.html('0' + seconds);
        } else {
            clockS.html(seconds);
        }

        console.log(minutes + ":" + seconds);
        if (seconds < 1 && minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (minutes == '00' && seconds === 0) {
            clearInterval(countdown);
            console.log('Время вышло');
            console.log(clockM.parent().parent().find('confirmElse'));
        }
        seconds--;
    }, 1000);
}

var countdown;