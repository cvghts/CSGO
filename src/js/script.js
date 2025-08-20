import "/src/sass/style.scss";

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
