export default () => {
    const modal = document.querySelector('#modal'),
        scrollBar = window.innerWidth - document.documentElement.clientWidth;

    let touchDistance = null;

    document.querySelectorAll('.modal__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.add('modal-active');
            document.body.style.marginRight = `${scrollBar}px`;
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelector('.modal__close').addEventListener('click', () => {
        modalClose();
    });


    function modalClose() {
        document.body.classList.remove('modal-active');
        document.body.style.marginRight = '';
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 0);
    }

    
    
};