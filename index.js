const btnEl = document.querySelector('.btn');
const inputEl = document.getElementById('input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector(".alert-container");
let password = "";

btnEl.addEventListener("click", () => {
    password = "";
    createPassword();
})

copyIconEl.addEventListener("click", () => {
    if(inputEl.value){
        copyPassword();
        alertContainerEl.classList.remove('active');
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000)
    }
})

function createPassword(){
    const chars = "1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars[randomNum];
    }
    inputEl.value = password;
}

function copyPassword(){
    // This is responsible for selecting text
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    // This is responsible for coping on clipboard instead of ctrl+c
    navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.innerText = password + " copied!";
}
