// Toggle navigation for mobile menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
});

// Search function
function searchFunction() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let sections = document.querySelectorAll('.body');
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
    /*breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        412: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        430: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        720: {
            slidesPerView: 3.42,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3.6,
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
        1080: {
            slidesPerView: 4.16,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 3.89,
            spaceBetween: 60
        }
    }*/
});

// Image expansion and collapse
document.querySelectorAll('.dish-image').forEach(image => {
    image.addEventListener('click', function() {
        this.parentElement.classList.toggle('expanded');
    });
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

document.getElementById('external-link-btn').onclick = function() {
    window.location.href = 'https://www.example.com';
};

document.getElementById('show-map-btn').onclick = function() {
    document.getElementById('map-overlay').style.display = 'flex';
    initMap();
};

document.getElementById('close-map-btn').onclick = function() {
    document.getElementById('map-overlay').style.display = 'none';
};

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 500px from the top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Scroll to the top when the user clicks the button
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
