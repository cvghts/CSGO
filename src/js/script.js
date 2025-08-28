import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

try {
    document.addEventListener('DOMContentLoaded', () => {
        const promo = document.querySelector('.promo');
        const dots = document.querySelectorAll('.promo__dot');
        const images = [
            '/src/img/main_bg.jpg',
            '/src/img/main_bg_4.jpg',
            '/src/img/main_bg_3.jpg'
        ];
    
        const updateSlider = (index) => {
            promo.style.backgroundImage = `url(${images[index]})`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        };
    
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
            });
        });
    });
} catch (e) {}

try {
    const swiper = new Swiper('.events__slider', {  
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1800: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        modules: [Navigation, Pagination],
      });
} catch (e) {}

// Підтримка
document.getElementById('support-link').addEventListener('click', function(e) {
    e.preventDefault();

    // Спробуємо відкрити Gmail
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=yarosh@gmail.com';
    const newWindow = window.open(gmailUrl, '_blank');

    // Якщо блоковано або не відкривається, fallback на mailto:
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        window.location.href = 'mailto:yarosh@gmail.com';
    }
});

// Rules: відкриття модалки
document.getElementById('rules-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('rules-modal').style.display = 'block';
});

// Закриття модалки кнопкою
document.getElementById('close-rules').addEventListener('click', function() {
    document.getElementById('rules-modal').style.display = 'none';
});