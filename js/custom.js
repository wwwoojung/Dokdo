const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    parallax: true,
    speed: 1000,

    slideActiveClass: 'on',
});

const MAIN_VS_LEFT_BUTTON = document.querySelector('.MainVisual .main_slide_arrows .left');
MAIN_VS_LEFT_BUTTON.addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
});
const MAIN_VS_RIGHT_BUTTON = document.querySelector('.MainVisual .main_slide_arrows .right');
MAIN_VS_RIGHT_BUTTON.addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
});

const MAIN_NOTICE_SLIDE = new Swiper('.main_notice_slide', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 30,
});

const MAIN_NS_LEFT_BUTTON = document.querySelector('.MainCustomer .main_customer_arrows .left');
MAIN_NS_LEFT_BUTTON.addEventListener('click', () => {
    MAIN_NOTICE_SLIDE.slidePrev();
});
const MAIN_NS_RIGHT_BUTTON = document.querySelector('.MainCustomer .main_customer_arrows .right');
MAIN_NS_RIGHT_BUTTON.addEventListener('click', () => {
    MAIN_NOTICE_SLIDE.slideNext();
});

window.addEventListener('scroll', () => {
    let SCT = window.scrollY;
    // if (SCT > 0) {
    //     document.querySelector('#Header').classList.add('on');
    // } else {
    //     document.querySelector('#Header').classList.remove('on');
    // }
    SCT > 0
        ? document.querySelector('#Header').classList.add('on')
        : document.querySelector('#Header').classList.remove('on');
});

AOS.init();