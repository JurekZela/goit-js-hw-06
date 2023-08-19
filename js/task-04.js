const counterRef = document.querySelector('#counter');
const btnIncrementRef = counterRef.querySelector('[data-action="increment"]');
const btnDecrementRef = counterRef.querySelector('[data-action="decrement"]');
const counterSpanRef = counterRef.querySelector('#value');

let counterValue = 0;

btnIncrementRef.addEventListener('click', onIncrementChangeClick);
btnDecrementRef.addEventListener('click', onDecrementChangeClick);


function onIncrementChangeClick() {
    counterValue += 1;
    onUpdateValueId();
    btnIncrementRef.classList.add('add-green');
    btnIncrementRef.classList.remove('add-red');
};

function onDecrementChangeClick() {
    counterValue -= 1;
    onUpdateValueId();
    btnDecrementRef.classList.remove('add-green');
    btnDecrementRef.classList.add('add-red');
};

function onUpdateValueId() {
    counterSpanRef.textContent = counterValue;
}