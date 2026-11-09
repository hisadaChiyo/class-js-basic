const colorBtns = document.querySelectorAll('.color-btn');
const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];
const colorPreview = document.getElementById('color-preview');

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        for (let j = 0; j < colorBtns.length; j++) {
            colorBtns[j].classList.remove('is-active');
        }
        colorBtns[i].classList.add('is-active');

        const colorName = colorBtns[i].textContent;
        const colorCode = colorCodes[i];

        colorPreview.style.backgroundColor = colorCode;
        colorPreview.style.color = '#ffffff';
        colorPreview.textContent = `${colorName}（${colorCode}）`;

    })
}

// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener('click', () => {
//         console.log(colorBtns[i].textContent);
//     })
// }テキストだけ出す。

// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener('click', () => {
//         console.log(colorBtns[i].getAttribute);
//     })
// }
// 属性を出す

// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener('click', () => {
//         console.log(colorBtns[i].className);
//     })
// }
// クラス名前を出す

const links = document.querySelectorAll('a[href^="http"]');

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
    links[i].textContent += '↗'
    links[i].setAttribute('rel', 'noopener noreferrer');
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtns.length; j++) {
            tabBtns[j].classList.remove('is-active');
            tabPanels[j].classList.remove('is-active');
        }
        tabBtns[i].classList.add('is-active');
        tabPanels[i].classList.add('is-active');
    });
}
