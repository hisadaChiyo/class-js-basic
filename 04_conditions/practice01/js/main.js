const score = 80;

if (score === 80) {
    console.log(`合格`);
} else if (score >= 50) {
    console.log(`もう少し`);
} else {
    console.log(`不合格`);
}

const age = 22;
const hasLicense = true;
if (age >= 18 && hasLicense) {
    console.log(`運転できる`);
} else {
    console.log(`運転できない`);
}

const btn = document.getElementById('btn');
const message = document.getElementById('message');
const isMember = true; // 会員フラグ：true または false
const total = 6000; // 購入金額：数値

// btn.addEventListener('click', () => {
//     if (isMember && total >= 10000) {
//         message.textContent = '【送料無料＋20%OFF】プレミアム会員特典が適用されました！';
//         message.style.color = '#0066cc';
//     } else if (isMember && total >= 5000) {
//         message.textContent = '【送料無料】会員特別割引が適用されました！';
//         message.style.color = '#27ae60';
//     } else {
//         message.textContent = '通常送料がかかります（会員登録＋5,000円以上で送料無料）。';
//         message.style.color = '#e74c3c';
//     }
// });


const countDisplay = document.getElementById(`count`);
let count = 0;

btn.addEventListener('click', () => {
    count++; // 値を1増やす
    countDisplay.textContent = count;
    if (count >= 30) {
        message.textContent = '30回達成！ゲームクリアです！';
        message.style.color = '#e74c3c';
    } else if (count === 20) {
        message.textContent = '20回達成！あと少し！';
        message.style.color = '#0066cc';
    } else if (count === 10) {
        message.textContent = '10回達成！あと少し！';
        message.style.color = '#0066cc';
    }
    // else if (count % 10 === 0) {
    //     10で割った余りが 0 ＝ 10の倍数（10回、20回のとき）
    //     message.textContent = `${count}回達成！あと少し！`;
    //     message.style.color = '#0066cc';
    // }
    else {
        message.textContent = 'ボタンをクリックしてカウントを増やそう！';
        message.style.color = '#333333';
    }
});

const pageTop = document.getElementById(`page-top`);
