const mainImg = document.querySelectorAll('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thmbImg = document.querySelectorAll('.thumb-img');
const thumbList = document.querySelectorAll('thumb-list');
let currentIndex = 0;


for (let i = 0; i < thmbImg.length; i++) {
    thmbImg[i].addEventListener('click', () => {
        for (let j = 0; j < thmbImg.length; j++) {
            thmbImg[j].classList.remove('is-active');

        }
        thmbImg[i].classList.add('is-active');

        let currentIndex = 0;
        captionText.textContent = captionText[0];
        captionText.textContent = ` ${currentIndex + 1} / ${steps.length}`;
    })
}
