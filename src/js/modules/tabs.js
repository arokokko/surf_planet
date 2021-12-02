const tabs = (wrapper, dots ='.board__tab-circle', boxes ='.board__tab') => {
    const tabsWrapper = document.querySelector(wrapper),
        tabsDots = tabsWrapper.querySelectorAll(dots),
        tabsBoxes = tabsWrapper.querySelectorAll(boxes);

    
    function hideTabsContent() {
        tabsBoxes.forEach(item => {
            item.classList.remove('active');
        });
    }
    hideTabsContent();

    tabsWrapper.addEventListener('click', (e) => {
        let closest = e.target.closest(dots);
        if(e.target && closest) {
            
            for (let i = 0; i < tabsDots.length; i++) {
                if(closest == tabsDots[i]) {
                    tabsBoxes[i].classList.toggle('active');
                }
            }
        }
    });

}

export default tabs;