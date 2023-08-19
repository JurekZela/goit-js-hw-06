// Not Change Color?

const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInputValidatorBlur);

function onInputValidatorBlur(e) {
    const isValid = e.currentTarget.value.length === inputRef.dataset.length;

    if (isValid) {

        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        
    }else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');   
    }
};