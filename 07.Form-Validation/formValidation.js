function validate() {
const companyField = document.getElementById('companyInfo');
const companyCheck = document.getElementById('company');
const form = document.getElementById('registerForm');

companyCheck.addEventListener('change', ()=> {
    if(companyCheck.checked){
        companyField.style.display = 'block'
    }else{
        companyField.style.display = 'none'
    }
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rePasswordInput = document.getElementById('confirm-password');
    const companyNumberInput = document.getElementById('companyNumber');

    const validField = document.getElementById('valid');

    const usernamePattern = /^[a-zA-Z0-9]+$/;
    const passwordPattern = /^[\w]+$/;
    const emailPattern = /.*@.*\..*/;

    let usernameIsValid = false;
    let passwordisValid = false;
    let rePasswordisValid = false;
    let emailIsValid = false;
    let companyNumberIsValid = false;

    if(usernamePattern.test(usernameInput.value) && usernameInput.value.length >= 3 && usernameInput.value.length <=20) {
        usernameIsValid = true;
    }
    if(emailPattern.test(emailInput.value)){
        emailIsValid = true;
    }
    if(passwordPattern.test(passwordInput.value) && passwordInput.value.length >= 5 && passwordInput.value.length <= 15 && passwordInput.value == rePasswordInput.value){
        passwordisValid = true;
        rePasswordisValid = true;
    }
    if(companyCheck.checked){
        if(companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999){
            companyNumberIsValid = true;
        }
    }
    else{
        companyNumberIsValid = true;
    }
    if(usernameIsValid && passwordisValid && rePasswordisValid && emailIsValid && companyNumberIsValid){
        validField.style.display = 'block';
    }else{
        validField.style.display = 'none'
    }
    if(!usernameIsValid){
        usernameInput.style.borderColor = 'red'
    }else{
        usernameInput.style.border = 'none'
    }
    if(!passwordisValid){
        passwordInput.style.borderColor = 'red'
        
    }else{
        passwordInput.style.border = 'none'
    }
    if(!rePasswordisValid){
        rePasswordInput.style.borderColor = 'red'
    }else{
        rePasswordInput.style.border = 'none'
    }
    if(!emailIsValid){
        emailInput.style.borderColor = 'red'
    }else{
       emailInput.style.border = 'none'
    }
    if(!companyNumberIsValid){
       companyNumberInput.style.borderColor = 'red'
    }else{
        companyNumberInput.style.border = 'none'
    }

})
}
