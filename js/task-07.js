const inputSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputSizeControlRef.addEventListener('input', onLicenseChange);

function onLicenseChange(e) {
    textRef.style.fontSize = e.currentTarget.value + 'px';
};