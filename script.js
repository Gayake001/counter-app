let count = 0;

const countDisplay = document.getElementById('count-display');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

decreaseBtn.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});

increaseBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});