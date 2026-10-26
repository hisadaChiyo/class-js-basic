const link = document.getElementById('external-link');
const url = link.getAttribute('href');
const postBtn = document.getElementById(`post-btn`);
console.log(url);

// link.setAttribute('href', 'https://yahoo.co.jp');
postBtn.removeAttribute(`disabled`);
if (postBtn.hasAttribute('disabled')) {
    console.log('無効化中');
}
// if (!postBtn.hasAttribute('disabled')) {
//     console.log('有効化中');
// }


const viewImg = document.getElementById('view-img');
const toggleImgBtn = document.getElementById('toggle-img-btn');
const DAY_IMG = 'https://picsum.photos/id/1015/500/300';
const NIGHT_IMG = 'https://picsum.photos/id/1040/500/300';

toggleImgBtn.addEventListener('click', () => {
    const currentSrc = viewImg.getAttribute('src');

    if (currentSrc === DAY_IMG) {
        viewImg.setAttribute('src', NIGHT_IMG);
        viewImg.setAttribute('alt', '夜の画像');
    } else {
        viewImg.setAttribute('src', DAY_IMG);
        viewImg.setAttribute('alt', '昼の画像');
    }
});


const switchSiteBtn = document.getElementById(`switch-site-btn`);

switchSiteBtn.addEventListener('click', () => {
    link.setAttribute('href', 'https://computer.trident.ac.jp/');
    link.textContent = 'トライデント公式サイトを開く';
    link.removeAttribute('target')

    switchSiteBtn.textContent = '切り替え完了！';
    switchSiteBtn.setAttribute('disabled', 'true');
});

const passwordInput = document.getElementById('password-input');
const togglePasswordBtn = document.getElementById('toggle-password-btn');

togglePasswordBtn.addEventListener('click', () => {
    const currentType = passwordInput.getAttribute('type');

    if (currentType === 'password') {
        passwordInput.setAttribute('type', 'text');
        togglePasswordBtn.textContent = '非表示';
        togglePasswordBtn.classList.add('is-active');
    } else {
        passwordInput.setAttribute('type', 'password');
        togglePasswordBtn.textContent = '表示';
        togglePasswordBtn.classList.remove('is-active');
    }
});


const commentInput = document.getElementById('comment-input');
commentInput.addEventListener('input', () => {
    console.log(`現在の入力文字数: ${commentInput.value.length}文字`);
});
