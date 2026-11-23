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

//練習
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


const alertBanner = document.addEventListener('alert-banner');
const successBtn = document.addEventListener('success-btn');
const warningBtn = document.addEventListener('warning-btn');
const errorBtn = document.addEventListener('error-btn');

Element.classList
