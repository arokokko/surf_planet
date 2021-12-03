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

   
    modal.addEventListener('touchstart', e => touchDistance = e.touches[0].clientY);
    modal.addEventListener('touchmove', e => {
        
        let y = e.touches[0].clientY;
        if (!touchDistance) {
            return;
        } else if ((Math.abs(touchDistance - y) > 200) && ((touchDistance - y) > 0)) {
            modalClose();
            touchDistance = null;
        }
    });

    function modalClose() {
        document.body.classList.remove('modal-active');
        document.body.style.marginRight = '';
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 0);
    }

    
    
};