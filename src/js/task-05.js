const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', renameInputRef);

function renameInputRef(event){
refs.nameOutput.textContent = event.currentTarget.value ?  event.currentTarget.value : 'Anonymous'; 
};
