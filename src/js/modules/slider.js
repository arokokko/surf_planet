const carousel = (sliderSelector, slidesSelector, nextSelector, prevSelector, dotsWrapSelector, dotSelector) => {
    const slider = document.querySelector(sliderSelector),
        slides = slider.querySelectorAll(slidesSelector),
        next = slider.querySelector(nextSelector),
        prev = slider.querySelector(prevSelector),
        dotsWrap = slider.querySelector(dotsWrapSelector), 
        dots = slider.querySelectorAll(dotSelector);
        
    let slideIndex;

    console.dir(slides);

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
};

export default carousel;