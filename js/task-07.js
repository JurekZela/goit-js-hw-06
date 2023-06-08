const refs = {
    inputControlRef: document.querySelector('#font-size-control'),
    spanTextRef: document.querySelector('#text'),
};

refs.inputControlRef.addEventListener('input', updateFontSize);

function updateFontSize(){
    const fontSize = refs.inputControlRef.value + 'px';
    refs.spanTextRef.style.fontSize = fontSize;
};