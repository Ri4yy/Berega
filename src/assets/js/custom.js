$('.openMenu, .closeMenu, .overlay').click(() => {
    $('.leftMenu').toggleClass('-translate-x-[100%]');
    $('.overlay').toggleClass('opacity-0 pointer-events-none');
    $('html').toggleClass('overflow-hidden');
});


$('.moreBtn').click((e) => {
    $(e.target).closest('.wrapperOrder').find('.innerOrderInfo').slideToggle();
    $(e.target).find('svg').toggleClass('rotate-180');
});


$('.plusBtn').click((e) => {
    let count = $(e.target).closest('.counterArea').find('input').val();
    if(count < 99) {
        count = +count + 1;
        $(e.target).closest('.counterArea').find('input').val(count)
    }
})

$('.minusBtn').click((e) => {
    let count = $(e.target).closest('.counterArea').find('input').val();
    if(count > 0) {
        count = +count - 1;
        $(e.target).closest('.counterArea').find('input').val(count)
    }
})


    
