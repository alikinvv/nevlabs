var swiper = new Swiper('.nav', {
    spaceBetween: 3,
    slidesPerView: 'auto',
});

var swiper2 = new Swiper('.main', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    },
});

let mobileMenu = () => {
    if ($(window).width() <= 767 && $('.hamburger').length === 0) {
        $('.header .header__right').prepend($('.header__nav'));
        $('.header .wrap > .clearfix').append('<div class="hamburger"><span></span></div>');
    } else if ($(window).width() >= 768) {
        $('.hamburger').remove();
        $('.header .wrap').append($('.header__nav'));
    }
};

mobileMenu();

$(window).on('resize', mobileMenu);

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header__right').toggleClass('active');
});
