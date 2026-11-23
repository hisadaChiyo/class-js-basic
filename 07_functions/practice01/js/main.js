//  関数宣言（昔からある基本の書き方）
function showWelcome() {
    console.log('いらっしゃいませ');
}
showWelcome();

// 関数式（無名関数を変数に代入する書き方）
const greet = function () {
    console.log('こんにちわ');
}
greet();

// アロー関数（現在のモダンJavaScriptで最も主流の書き方）
const sowGreet = () => {
    console.log('また、こんにちわ。');
}
sowGreet();

//練習
const printLog = () => {
    console.log('-- システムチェック開始 ---');
    console.log('異常はありませんでした。');
}
printLog();
printLog();

//演習1
const cartDisplay = document.getElementById('cart-display');
const addCartBtn = document.getElementById('add-cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
let itemCount = 0;

const clearCart = () => {
    cartDisplay.textContent = 'カートに商品はありません（0点）';
    cartDisplay.classList.remove('has-item');//03
}
clearCart();

addCartBtn.addEventListener('click', () => {
    itemCount++;
    cartDisplay.textContent = `現在カートに ${itemCount}点 の商品が入っています`;
    cartDisplay.classList.add('has-item');
})
clearCartBtn.addEventListener('click', () => {
    clearCart();
})
// clearCartBtn.addEventListener('click', clearCart);

const greetUser = (userName = 'ゲスト', count = 0) => {
    console.log(`こんにちは、${userName}さん。${count}回目の訪問です。`);
};
greetUser('');


const orderDrink = (drink = 'アイスコーヒー', size = 'M') => {
    console.log(`注文：${drink}（${size}サイズ）`);
}
orderDrink();
orderDrink('アイスコーヒー', 'L');
//第二関数だけを変えたくても第二関数だけ変えることはできない。デフォルト値から変わる可能性が高い引数ほど、前に設定する。
orderDrink('オレンジジュース',);

//演習2
const alertBanner = document.getElementById('alert-banner');
const successBtn = document.getElementById('success-btn');
const warningBtn = document.getElementById('warning-btn');
const errorBtn = document.getElementById('error-btn');

const updateBanner = (message = 'データの保存が完了しました。', typeClass = 'is-success') => {
    alertBanner.textContent = message;
    alertBanner.classList.remove('is-success', 'is-warning', 'is-error');
    alertBanner.classList.add(typeClass);
};

successBtn.addEventListener('click', () => {
    updateBanner('データの保存が完了しました。', 'is-success');
})

warningBtn.addEventListener('click', () => {
    updateBanner('ストレージの残り容量が少なくなっています。', 'is-warning');
});

errorBtn.addEventListener('click', () => {
    updateBanner('通信エラーが発生しました。再試行してください。', 'is-error');
});

const addNumbers = (a, b) => {
    const sum = a + b;
    return sum;
}
console.log(addNumbers(10, 20));
// const floor = (a) => {
//     const num = aを小数点を切り捨てる。
//     return unm;
// }
let num = 100;
const buyTicket = (age) => {
    if (age < 18) {
        console.log('未成年お断り');
        return;
    }
    console.log('先に進んでください');
    num = 100;
};
buyTicket(14);
console.log(num);

//演習3
const calcTaxPrice = (price) => {
    const taxed = Math.floor(price * 1.1);
    return taxed;
};
console.log(calcTaxPrice(500));

const priceResult = document.getElementById('price-result');
const coffeeBtn = document.getElementById('coffee-btn');
const lunchBtn = document.getElementById('lunch-btn');

coffeeBtn.addEventListener('click', () => {
    const total = calcTaxPrice(500);
    priceResult.textContent = `ブレンドコーヒー：税込 ${total}円`;
})

lunchBtn.addEventListener('click', () => {
    const total = calcTaxPrice(1200);
    priceResult.textContent = `ランチセット：税込 ${total}円`;
});


//身長(cm)と体重(kg)を渡したらBMI値を計算して返す
const calcBMI = (height, weight) => {
    const hightM = height / 100;
    return weight / (hightM * hightM);

};
console.log(calcBMI(175, 60));
