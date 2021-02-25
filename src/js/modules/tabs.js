const tabs = (wrapper, dots ='.board__tab-circle', boxes ='.board__tab') => {
    const tabsWrapper = document.querySelector(wrapper),
        tabsDots = tabsWrapper.querySelectorAll(dots),
        tabsBoxes = tabsWrapper.querySelectorAll(boxes),
        tabsDescr = tabsWrapper.querySelectorAll('.board__tab-descr');

    if(window.innerWidth <= 1280) {
        tabsDescr.forEach(item => {
            item.classList.remove('subtext_left');
            item.classList.add('subtext_right');
        })
    }
    function hideTabsContent() {
        tabsBoxes.forEach(item => {
            item.classList.remove('active');
        });
    }
    hideTabsContent();

    tabsWrapper.addEventListener('click', (e) => {
        let target = e.target.closest(dots);
        if(e.target && target) {
            
            for (let i = 0; i < tabsDots.length; i++) {
                if(target == tabsDots[i]) {
                        tabsBoxes[i].classList.toggle('active');
                }
            }
        }
    });

}

export default tabs;