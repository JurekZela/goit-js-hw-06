 const validationInputRef = document.querySelector('#validation-input');
 const desiredLength = parseInt(validationInputRef.getAttribute('data-length'));

 validationInputRef.addEventListener('blur', onChangeLengthInputBlur);

 function  onChangeLengthInputBlur(e) {
    
  const isValid =  desiredLength === e.currentTarget.value.length;

    if (isValid) {

        validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');

    }else {
        
        validationInputRef.classList.remove('valid');
    validationInputRef.classList.add('invalid');
    }
 };