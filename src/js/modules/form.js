export default () => {
    const modal = document.querySelector('#modal'),
        scrollBar = window.innerWidth - document.documentElement.clientWidth,
        modalOrderTitle = document.querySelector('#modal__list-order'),
        modalBtnSpan = modal.querySelector('.span-second'),
        orderInput = modal.querySelector('#order'),
        form = modal.querySelector('#modal__form'),
        sendMsg = modal.querySelector('.modal-sending'),
        errorMsg = modal.querySelector('.modal-error');

    let touchDistance = null;

    document.querySelectorAll('.modal__btn').forEach(button => {
        button.addEventListener('click', () => {
            const buttonHtml = button.querySelector('.span-second').innerHTML;

            modalBtnSpan.innerHTML = buttonHtml;
            orderInput.value = collectDataToModal(button);
            modalOrderTitle.textContent = collectDataToModal(button);
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
        sendMsg.style.display = '';
        errorMsg.style.display = '';
    }

    function collectDataToModal(btn) {
        const parent = btn.closest('[data-parent]'),
            activityType = parent.querySelector('[data-type]'),
            activityAmount = parent.querySelector('[data-amount]'),
            persons = parent.querySelector('[data-person]');

        if(!activityAmount) {
            return activityType.textContent;
        } else {
            let amountNum = parseInt(activityAmount.textContent),
                amountName = activityAmount.textContent.replace(/\d/g, '');

            return `${amountNum} ${activityType.textContent}${amountName} for ${persons.textContent}!`;
        }
            
    }

    try {
        form.addEventListener('submit', async (e) =>  {
            e.preventDefault();
            sendMsg.style.display = 'block';
            await fetch('./mailer/smart.php', {
                method: 'POST',
                body: new FormData(form)
            }).then(() => {
                form.reset();
                modalClose();
            }).catch((e) => {
                sendMsg.style.display = '';
                errorMsg.style.display = 'block';
                console.error(e);
            })
        })
    } catch(e) {
        console.error(e);
    }
    
    
    
};