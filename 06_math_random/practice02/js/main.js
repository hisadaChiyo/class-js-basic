console.log('practice02 ready!');

let count = 0;
while (count < 3) {
    console.log(count);
    count++;
    //忘れない！固まっちゃう  count++;
}
console.log('カウント終了');


let dice = 0;
while (dice !== 6) {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(`出た目：${dice}`)
};
console.log('終了。')


const drawUntilBtn = document.getElementById('draw-until-btn');
const drawLog = document.getElementById('draw-log');

const omikujiItems = ['大吉', '中吉', '小吉', '吉', '凶'];

drawUntilBtn.addEventListener('click', () => {
    let count = 0;
    let resultIndex = -1; // 最初はどの運勢でもない状態にしておく
    let logHtml = '';

    // 出た運勢が 0（大吉）ではない間、ずっと繰り返す
    while (resultIndex !== 0) {
        count++;
        // 0〜4 のランダムな番号を引く
        resultIndex = Math.floor(Math.random() * omikujiItems.length);

        logHtml += `${count}回目：${omikujiItems[resultIndex]}<br>`;
    }

    logHtml += `<strong>見事、${count}回目で大吉が出ました。</strong>`;
    drawLog.innerHTML = logHtml;
});


// 名言リスト
const quotes = [
    'シンプルであることは、複雑であることよりもむずかしい。',
    '失敗したことがない人間というのは、新しいことに挑戦したことがない人間だ。',
    '今日できることを明日に延ばすな。',
    '情熱を持て。さもなければ、どんな簡単な仕事もやり遂げられない。'
];

// 発言者リスト
const authors = [
    'スティーブ・ジョブズ',
    'アルベルト・アインシュタイン',
    'ベンジャミン・フランクリン',
    'ラルフ・ウォルド・エマーソン'
];
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('quote-btn');
let lastIndex = -1;
quoteBtn.addEventListener('click', () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === lastIndex) {
        newIndex = Math.floor(Math.random() * quotes.length);
    }

    quoteText.textContent = `“${quotes[newIndex]}”`;
    quoteAuthor.textContent = `- ${authors[newIndex]}`;

    lastIndex = newIndex;
});


const fruits = ['りんご', 'バナナ', 'みかん'];
const removed = fruits.splice(1, 1);
console.log(fruits);
console.log(removed);


const members = ['佐藤さん', '鈴木さん', '高橋さん', '田中さん'];
const presenterResult = document.getElementById('presenter-result');
const remainingCount = document.getElementById('remaining-count');
const presenterBtn = document.getElementById('presenter-btn');

// console.log(picked[0]);
//picked配列picked[0]で、値が取れる
remainingCount.textContent = `残りの候補：${members.length}人`;

presenterBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * members.length);
    const picked = members.splice(randomIndex, 1);
    presenterResult.textContent = `${picked[0]}`;


    if (members.length > 0) {
        remainingCount.textContent = `残りの候補：${members.length}人`;
    } else {
        remainingCount.textContent = '全員の発表順が決まりました。お疲れ様でした。';
        presenterBtn.setAttribute('disabled', 'true');
    }
});
