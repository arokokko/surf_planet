const burger = () => {
    
    let burgerIcon = document.querySelector('.burger'),
        stick = document.querySelectorAll('.stick');
    burgerIcon.addEventListener('click', () => {
        stick.forEach(item => {
            if(item.classList.contains('close') || item.classList.contains('open')) {
                item.classList.toggle('open');
                item.classList.toggle('close');
            } else {
                item.classList.toggle('open');
            }
        });
    });
    function app() {
        let body;
        let menu;
        let menuItems;
        function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        function toggleClass(element, stringClass) {
            
            element.classList.toggle(stringClass);
        };
        init();
    };
    app();
    
}

export default burger;