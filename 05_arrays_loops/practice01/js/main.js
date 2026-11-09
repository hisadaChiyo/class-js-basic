const fruits = ['りんご', 'バナナ', 'みかん'];
fruits[3] = 'いちご';
fruits.push('ぶどう');
console.log(fruits);
// 変数の値自体を変更するとエラー
// []ブラケット、角かっこ
/*1個目の値は0から始める。
無い番号を打つとundefinedと出てくる*/


const nextBtn = document.getElementById('next-btn');
const stepMessage = document.getElementById('step-message');
const stepIndicator = document.getElementById('step-indicator');
const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];
const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');

let currentIndex = 0;
stepMessage.textContent = steps[0];
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

nextBtn.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }
    stepMessage.textContent = steps[currentIndex];
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
})

addBtn.addEventListener('click', () => {
    if (newStepInput.value !== '') {
        steps.push(newStepInput.value);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

        newStepInput.value == '';
    }
})
const removeBtn = document.getElementById('remove-btn');

// removeBtn.addEventListener('click', () => {
//     steps.pop()
//     stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
// })

for (let i = 0; i < 5; i++) { console.log(`${i}回目の処理です。`); }

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// 問題B
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i; // total に i を順番に足していく
}
console.log(total);

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}番目:${fruits[i]}`);
}


const menuList = document.getElementById('menu-list');

const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];
let listHtml = '';
for (let i = 0; i < menus.length; i++) {
    listHtml += `<li>${menus[i]}</li>`;
}
menuList.innerHTML = listHtml;
