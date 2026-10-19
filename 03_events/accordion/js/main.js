const accordionBtn = document.getElementById
    ('accordion-btn');
const icon = document.getElementById('icon');
const accordionContent = document.getElementById('accordion-content');

accordionBtn.addEventListener('click', () => {
    accordionBtn.classList.toggle('is-open');
    accordionContent.classList.toggle('is-open');
});
