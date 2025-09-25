// js/main.js

const header = document.querySelector('header');
const aboutSection = document.querySelector('#about-section');

const observerOptions = {
    root: null,
    threshold: 0.9 
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.add('header-inverted');
        } else {
            header.classList.remove('header-inverted');
        }
    });
}, observerOptions);

observer.observe(aboutSection);
