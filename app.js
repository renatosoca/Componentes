document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.card__img');
    const primaryImage = document.querySelector('.card__primary');
    
    images.forEach( img => {
        img.addEventListener('mouseover', changeImg);
    });

    function changeImg( e ) {
        primaryImage.src = e.target.src
    };
})