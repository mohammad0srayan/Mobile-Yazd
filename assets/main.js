var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
});

var swiper2 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
});

var swiper3 = new Swiper(".mySwiper4", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
});

const swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper4 = new Swiper(".mySwiper6", {
    slidesPerView: 5,
    loop: true,
    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
});

var swiperComments = new Swiper(".mySwiper-comment", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
});

var swiperBlog = new Swiper(".mySwiper-blog", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
});
