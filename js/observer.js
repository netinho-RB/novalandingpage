// Observer.js - Para animações de visibilidade dos projetos
const projectImages = document.querySelectorAll('.project-img');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

projectImages.forEach((img) => {
    observer.observe(img);
});
