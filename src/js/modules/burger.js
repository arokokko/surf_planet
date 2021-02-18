const burgerMenu = () => {
    
    let burgerIcon = document.querySelector('.burger'),
        stick = document.querySelectorAll('.stick'),
        body = document.querySelector('body'),
        menu = document.querySelector('.menu-icon'),
        menuItems = document.querySelectorAll('.nav__list-item'),
        scrollWidth = window.innerWidth - document.documentElement.clientWidth;

    burgerIcon.addEventListener('click', toggleBurgerSticks);

    applyListeners();

    function toggleBurgerSticks() {
        stick.forEach(item => {
            if(item.classList.contains('close') || item.classList.contains('open')) {
                item.classList.toggle('open');
                item.classList.toggle('close');
            } else {
                item.classList.toggle('open');
            }
        });
    }        

    function applyListeners() {
        menu.addEventListener('click', function () {
            (!body.classList.contains('nav-active')) ? body.style.marginRight = scrollWidth + 'px' : body.style.marginRight = '';
            return toggleClass();
        });
        menuItems.forEach(item => {
            // body.classList.contains('nav-active') ? body.style.marginRight = scrollWidth + 'px' : body.style.marginRight = '';
            item.addEventListener('click', function() {
                toggleBurgerSticks();
                return toggleClass();
            });
        });
    };

    function toggleClass() {
        body.classList.toggle('nav-active');
        
    };   
    
}

export default burgerMenu;