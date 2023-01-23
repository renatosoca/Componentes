document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const menu = document.querySelector('.sidebar__menu');
    const links = document.querySelectorAll('.sidebar__link');

    menu.addEventListener('click', activeMenu)

    links.forEach( link => {
        link.addEventListener('click', activeNavigate)
    });
    
    //
    function activeNavigate() {
        links.forEach( link => {
            if (link.classList.contains('active')) {
                link.classList.remove('active');
                this.classList.add('active');
            };
        });
    };

    function activeMenu(e) {
        const sidebar = e.target.parentElement.parentElement;
        sidebar.classList.toggle('active');
    };
});