// console.log(`success!`);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle);

// const title = document.querySelector('#main-title');
// console.dir(title);

// console.log(document.body);
// console.log(document.doqumentElement);

// const introText = doqument.getElementById('intro');
// console.log(introText);

// const changeBtn = doqument.querySelsctor('#change-btn');
// console.dir(changeBtn);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle.textContent);

// const day = 12;
// const week = `月曜日`;
// mainTitle.textContent = `今日は${day}日の${week}です。`;

// const introText = document.querySelector('#intro');
// console.log(introText.innerHTML);
// introText.innerHTML = `ようこそ！<strong>js</strong>の世界へ!`;

// console.log(document.body.textContent);
// console.log(document.body.innerHTML);

// introText.innerHTML = `ようこそ！<strong>js</strong>の世界へ!`;

// let newSize = 50;

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = '久田';
// mainTitle.style.fontSize = `${newSize}px`;


// const introText = document.getElementById('intro');
// introText.innerHTML = '途中で<br>改行がある文章です。';

// const changeBtn = document.getElementById('change-btn');
// changeBtn.innerHTML = '<strong>内容変更</strong>';

// changeBtn.addEventListener('click', () => {
//     mainTitle.style.color = '#ff6e93';
//     mainTitle.style.backgroundColor = '#fde9d5';
//     introText.style.color = '#333333';
//     introText.style.letterSpacing = `1em`;
//     introText.style.marginBottom = '10px';
// });

// 課題
const themeTitle = document.getElementById('theme-title');
const themeDesc = document.getElementById('theme-desc');
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');
const btnPasuteru = document.getElementById('btn-pasuteru');
const body = document.body;


btnLight.addEventListener('click', () => {
    themeTitle.textContent = '今のテーマ：☀️ ライト';
    themeTitle.style.color = '#333';
    body.style.backgroundColor = '#f2f7fa';
    themeDesc.style.color = '#333';
});

btnDark.addEventListener('click', () => {
    themeTitle.textContent = '今のテーマ：🌙 ダーク';
    themeTitle.style.color = '#f0eeee';
    body.style.backgroundColor = '#1e1f1f';
    themeDesc.style.color = '#f2f7fa';
});
btnPasuteru.addEventListener('click', () => {
    themeTitle.textContent = '今のテーマ：パステルカラー';
    themeTitle.style.color = '#333';
    body.style.backgroundColor = '#f1e5f1';
    themeDesc.style.color = '#333';
});
