const refs = {
    decrementRef: document.querySelector('button[data-action="decrement"]'),
    incrementRef: document.querySelector('button[data-action="increment"]'),
    valueSpanRef: document.querySelector('#value'),
};

let counterValue = 0;

function updateCounterValue(){
refs.valueSpanRef.textContent = counterValue;
};

refs.decrementRef.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
});

refs.incrementRef.addEventListener('click', () => {
    counterValue += 1;
    updateCounterValue();
});