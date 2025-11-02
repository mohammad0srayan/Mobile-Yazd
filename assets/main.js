let menuBtn = document.querySelector('#menu-btn')
let sidebarMain = document.querySelector('#sidebar-main')
let closeBtn = document.querySelector('#sidebar ion-icon[name="close"]')

menuBtn.addEventListener('click', () => {
    sidebarMain.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    sidebarMain.classList.remove('active');
})

document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.code === 'Escape') {
        sidebarMain.classList.remove('active');
    }
})

// مختصات محل مورد نظر
const lat = 35.7323;
const lng = 51.4099;

// ساخت نقشه
const map = L.map('map', {
    zoomControl: false
}).setView([lat, lng], 16);

// اضافه کردن نقشه پایه از OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// افزودن آیکن مارکر اختصاصی
const icon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

// افزودن مارکر
L.marker([lat, lng], { icon: icon })
    .addTo(map)
    .bindPopup("موقعیت فروشگاه")
    .openPopup();

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

    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});

var swiper2 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 10,
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        660: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // وقتی حداقل 480px بود
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        350: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1.1,
            spaceBetween: 15,
        },
    },
});

var swiper3 = new Swiper(".mySwiper4", {
    slidesPerView: 6.2,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
    breakpoints: {
        1024: {
            slidesPerView: 6.2,
            spaceBetween: 10,
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        760: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        // وقتی حداقل 480px بود
        480: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        350: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
    },
});

const swiper5 = new Swiper('.mySwiper5', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper4 = new Swiper(".mySwiper6", {
    slidesPerView: 6,
    loop: true,
    freeMode: true,
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

    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
            grid: {
                rows: 2,
            },
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 3.9,
            spaceBetween: 20,
            grid: {
                rows: 2,
            },
        },
        560: {
            slidesPerView: 2.9,
            spaceBetween: 15,
            grid: {
                rows: 2,
            },
        },
        // وقتی حداقل 480px بود
        480: {
            slidesPerView: 2.5,
            spaceBetween: 15,
            grid: {
                rows: 2,
            },
        },
        // وقتی زیر 300px بود
        300: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            grid: {
                rows: 2,
            },
        },
        250: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
                rows: 2,
            },
        },
    },
});

var swiperComments = new Swiper(".mySwiper-comment", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        // وقتی حداقل 480px بود
        480: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        // وقتی زیر 300px بود
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        250: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});

var swiperBlog = new Swiper(".mySwiper-blog", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
});

var swiperBlog = new Swiper(".mySwiper10", {
    slidesPerView: 10,
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true,

    breakpoints: {
        1024: {
            slidesPerView: 8.5,
            spaceBetween: 30,
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 7.5,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 6.5,
            spaceBetween: 15,
        },
        // وقتی حداقل 480px بود
        480: {
            slidesPerView: 5.5,
            spaceBetween: 15,
        },
        // وقتی زیر 300px بود
        300: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        250: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

var swiper11 = new Swiper(".mySwiper11", {
    slidesPerView: 4,
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 3.3,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 3.3,
            spaceBetween: 15,
        },
        // وقتی حداقل 480px بود
        480: {
            slidesPerView: 2.4,
            spaceBetween: 15,
        },
        400: {
            slidesPerView: 2.4,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },
        280: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
    },
});

var swiper12 = new Swiper(".mySwiper12", {
    slidesPerView: 4,
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // وقتی حداقل 768px بود
        632: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        624: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 3.1,
            spaceBetween: 15,
        },
        513: {
            slidesPerView: 2.9,
            spaceBetween: 15,
        },
        490: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 2.1,
            spaceBetween: 15,
        },
        400: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },
        300: {
            slidesPerView: 1.6,
            spaceBetween: 10,
        },
        280: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
    },
});

var swiper14 = new Swiper(".mySwiper14", {
    slidesPerView: 5.5,
    freeMode: true,
    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    autoplay: {
        delay: 2000, // هر ۳ ثانیه
        disableOnInteraction: false, // با لمس کاربر قطع نشه
    },

    breakpoints: {
        1024: {
            slidesPerView: 2.7,
            spaceBetween: 10,
        },
        // وقتی حداقل 768px بود
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        440: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    },
});