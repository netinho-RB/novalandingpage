// Animação de fade-in (aparece suavemente)
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    observer.observe(element);
});
