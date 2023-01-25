document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const btnMenu = document.querySelector('#header-menu');
    const nav = document.querySelector('#navbar');
    const navLinks = document.querySelectorAll('.nav__link');
    
    //Eventos
    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('bx-x');
        nav.classList.toggle('active');
    });
    
    navLinks.forEach( link => {
        link.addEventListener('click', paintLink)
    });

    //Funciones
    function paintLink( e ) {
        navLinks.forEach( link => {
            if (link.classList.contains('active')) {
                link.classList.remove('active');
                return;
            };
        });
        this.classList.add('active');
    };
});