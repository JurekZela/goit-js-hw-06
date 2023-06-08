const refs = {
formLabelRef: document.querySelector('form.login-form'),
};


refs.formLabelRef.addEventListener('submit', loginFunction);

function loginFunction(event){
    event.preventDefault();

    const emailInput = refs.formLabelRef.elements.email;
    const passwordInput = refs.formLabelRef.elements.password;

    if(emailInput.value === '' || passwordInput.value === ''){
        alert('All fields must be filled!');
    }else{
        const dataForm = {
email: emailInput.value,
password: passwordInput.value,
        };
        console.log(dataForm); 

        refs.formLabelRef.reset();
    };

};