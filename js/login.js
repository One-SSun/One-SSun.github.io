const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginText = document.querySelector(".greeting h1");
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function fillGreeting(username){
    loginText.innerText = `HAVE A NICE DAY, ${username}!`
    loginText.classList.remove(HIDDEN_CLASS);
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    fillGreeting(username);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    fillGreeting(savedUsername);
;}



// const savedUsername = localStorage.getItem(USERNAME_KEY);
// if(savedUsername === null){
//     loginForm.classList.remove(HIDDEN_CLASS);
// }else{
//     loginText.innerText = `Have a nice day, ${savedUsername}`
//     loginText.classList.remove(HIDDEN_CLASS);
// };





