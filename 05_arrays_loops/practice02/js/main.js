const colorBtns = document.querySelectorAll('.color-btn');
console.log(colorBtns[0]);
for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        console.log(colorBtns[i]);
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

const linkList = document.querySelectorAll('link-list');

for (let i = 0; i < linkList.length; i++) {
    linkList[i].setAttribute(a[href ^= "http"], _blank);
    console.log(linkList[i]);
}
