const refs = {
    inputRef: document.querySelector('#validation-input'),
};


refs.inputRef.addEventListener('blur', validateInput);

function validateInput() {
  const valueLength = refs.inputRef.value.length;
  const dataLength = parseInt(refs.inputRef.getAttribute('data-length'));

  if (valueLength === dataLength) {
    refs.inputRef.classList.remove('invalid');
    refs.inputRef.classList.add('valid');
  } else {
    refs.inputRef.classList.remove('valid');
    refs.inputRef.classList.add('invalid');
  }
};