console.log('success!');
const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');
const windowHight = document.getElementById('window-innerHeight')

btn.addEventListener('mouseover', () => {
    mainTitle.textContent = 'クリックされました!';
    mainTitle.style.color = '#ff0000';
});

window.addEventListener('scroll', () => {
    console.log(`現在のスクロール量: ${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

window.addEventListener('load', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

const windowWidth = document.getElementById('window-width');
windowHight.textContent = window.innerHeight;
windowWidth.textContent = window.innerWidth;
mainTitle.style.fontSize = `${window.innerWidth / 25}px`;

window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
    windowHight.textContent = window.innerHeight;
    mainTitle.style.fontSize = `${window.innerWidth / 25}px`;
});
/* window.addEventListener('DOMContentLoaded',() =>{});
DOMツリーが完成したら実行する（ブラウザーにはまだ表示されない）*/
btn.classList.add('is-active', 'is-open');
btn.classList.remove('is-active');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    if (btn.classList.contains('is-active')) {
        btn.textContent = 'アクティブ';
    } else {
        btn.textContent = '通常';
    }
});
