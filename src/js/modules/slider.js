
const carousel = (sliderSelector, hideTabs = false, needMakeDots = true, slidesSelector ='.slider__item', nextSelector ='.next', prevSelector ='.prev', dotsWrapSelector = '.slider_dots', dotSelector = '.slider_dot') => {
    const slider = document.querySelector(sliderSelector),
        slides = slider.querySelectorAll(slidesSelector),
        next = slider.querySelector(nextSelector),
        prev = slider.querySelector(prevSelector),
        dotsWrap = slider.querySelector(dotsWrapSelector), 
        tabBoxes = document.querySelectorAll('.board__tab');
   
    let slideIndex,
        touchDistance = null;

    if (needMakeDots) {
        createDots();
    }

    function createDots() {
        for(let i = 0; i < slides.length; i++) {
            let createdDot = document.createElement('div');
            createdDot.classList.add('slider_dot');
            dotsWrap.appendChild(createdDot);
        }
    }

    const dots = slider.querySelectorAll(dotSelector);

    function switchSlides() {
        showSlides(slideIndex = 0);

        function showSlides(n) {
            
            if(n > slides.length - 1) {
                slideIndex = 0;
            } 
            if (n < 0) {
                slideIndex = slides.length - 1;
            }

            slides.forEach(item => item.classList.add('hide'));
            slides[slideIndex].classList.remove('hide');

            if (hideTabs) {
                tabBoxes.forEach(item => {
                    item.classList.remove('active');
                });
            }
            
            if(dotsWrapSelector != undefined && dotSelector != undefined) {
                
                dots.forEach(item => item.classList.remove('dot-active'));
                dots[slideIndex].classList.add('dot-active');
            }
                
        }

        function plusSlide(n) {
            showSlides(slideIndex += n)
        }

        next.addEventListener('click', () => {
            plusSlide(1);
        });

        prev.addEventListener('click', () => {
            plusSlide(-1);
        });

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        if(dotsWrapSelector != undefined && dotSelector != undefined) {
            dotsWrap.addEventListener('click', (e) => {
                let target = e.target;
                for(let i = 0; i < dots.length; i++) {
                    if(target && dots[i].contains(target)){
                        currentSlide(i);
                    }
                }
            });
        }

        document.addEventListener('touchstart', e => touchDistance = e.touches[0].clientX);
        document.addEventListener('touchmove', e => {
            let x = e.touches[0].clientX;
            if (!touchDistance) {
                return
            } else if (Math.abs(touchDistance - x) > 50) {
                touchDistance = (touchDistance - x) < 0 ? plusSlide(-1) : plusSlide(1);
                touchDistance = null;
            }
        });
    }

    switchSlides();

    
};

export default carousel;