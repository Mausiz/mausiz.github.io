// Toggle navigation for mobile menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
});

// Search function
function searchFunction() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let sections = document.querySelectorAll('.section');
    let found = false;

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(input)) {
            section.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('No matching products or categories found.');
    }
}

// Swiper initialization
var trandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});
