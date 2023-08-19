const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onSettingsFormLoginSubmit);

function onSettingsFormLoginSubmit(evt) {
    evt.preventDefault();

const formData = new FormData(loginFormRef);
const formValues = {};

formData.forEach((value, key) => {
    formValues[key] = value;
})

if (!formValues.email || !formValues.password) {
    alert('Please enter a valid values');
    
} else {
    console.log(formValues);
    loginFormRef.reset();
}
};