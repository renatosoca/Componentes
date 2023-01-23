document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const menu = document.querySelector('.sidebar__menu');
    const links = document.querySelectorAll('.sidebar__link');
    const body = document.querySelector('body');
    const toggle = document.querySelector('#toggle')
    
    //Evento MENÚ LATERAL
    menu.addEventListener('click', activeMenu);
    //Evento NAVEGACIÓN
    links.forEach( link => {
        link.addEventListener('click', activeNavigate)
    });
    //Evento DARK MODE
    toggle.addEventListener('click', darkMode);
    
    //Funciones
    function activeMenu(e) {
        const sidebar = e.target.parentElement.parentElement;
        sidebar.classList.toggle('active');
    };

    function activeNavigate() {
        links.forEach( link => {
            if (link.classList.contains('active')) {
                link.classList.remove('active');
                this.classList.add('active');
            };
        });
    };

    function darkMode() {
        body.classList.toggle('dark_mode');
        toggle.classList.toggle('active');
    };
});