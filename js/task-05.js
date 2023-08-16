const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange)

function onInputChange(e) {

    outputRef.textContent = e.currentTarget.value;

    if (e.currentTarget.value === '') {
        
        return outputRef.textContent = 'Anonymous';
    }
}
