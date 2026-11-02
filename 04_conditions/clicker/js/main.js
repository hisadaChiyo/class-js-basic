const MAX_HP = 100;
const DAMAGE = 25;
let currentHp = MAX_HP;
const BEFORE_ING = 'https://picsum.photos/id/1025/400/250';
const AFTER_ING = 'https://picsum.photos/id/1062/400/250';
const hpDisplay = document.getElementById('hp-display');
const battleMessage = document.getElementById('battle-message');
const attackBtn = document.getElementById('attack-btn');
const resetBtn = document.getElementById('reset-btn');


attackBtn.addEventListener('click', () => {
    currentHp -= DAMAGE;
    hpDisplay.textContent = `HP: ${currentHp} / 100`;
    battleMessage.textContent = `効果的なダメージを与えた!`;


    if (hpDisplay > 50) {
        battleMessage.textContent = `効果的なダメージを与えた!`;
        hpDisplay.style.color = '#e74c3c';
    } else if (hpDisplay <= 50) {
        battleMessage.textContent = `相手はふらふらだ！あと少し！`;
        hpDisplay.style.color = '#e67e22';
    } else {
        battleMessage.textContent = `効果的なダメージを与えた!`;
        hpDisplay.style.color = '#333333';
    }
})
