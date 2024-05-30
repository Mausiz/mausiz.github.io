// script.js

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
            slidesPerView: 3,
            spaceBetween: 10
        },
        412: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        430: {
            slidesPerView: 2.3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        820: {
            slidesPerView: 3.67,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3.9,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 4.2,
            spaceBetween: 40
        }
    }
});

// Story section animation
function animateStory() {
    const storyLines = document.querySelectorAll('.story-line');
    const storySection = document.querySelector('.story-section');
    const sectionTop = storySection.getBoundingClientRect().top;
    const sectionBottom = storySection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop <= windowHeight && sectionBottom >= 0) {
        storyLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 100);
        });
    } else {
        storyLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.remove('visible');
            }, index * 100);
        });
    }
}

window.addEventListener('scroll', animateStory);
window.addEventListener('resize', animateStory);

// Initial animation check
animateStory();
