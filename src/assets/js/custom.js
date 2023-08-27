$('.openMenu, .closeMenu, .overlay').click(() => {
    $('.leftMenu').toggleClass('-translate-x-[100%]');
    $('.overlay').toggleClass('opacity-0 pointer-events-none');
    $('html').toggleClass('overflow-hidden');
});


// $('.closeMenu').click(() => {
//     $('.leftMenu').toggleClass('-translate-x-[100%]');
//     $('.overlay').toggleClass('opacity-0');
// });
