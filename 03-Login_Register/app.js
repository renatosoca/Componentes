document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const body = document.querySelector("body");
    const btnRegister=document.querySelector('#register');
    const btnLogin=document.querySelector('#login');

    //Eventos
    btnRegister.addEventListener("click", () => {
        body.classList.add("register");
    });
    btnLogin.addEventListener("click", () => {
        body.classList.remove("register");
    });
});
