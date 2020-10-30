const slider = () => {
    const slider = document.querySelector('.main__slider'),
        slides = slider.querySelectorAll('.slider-item'),
        next = slider.querySelector('.next'),
        prev = slider.querySelector('.prev'),
        dotsWrap = slider.querySelector('.main__slider_dots'), 
        dots = slider.querySelectorAll('.main__slider_dot');
        
    let slideIndex;

    showSlides(slideIndex = 0);

    function showSlides(n) {
        
        if(n > slides.length - 1) {
            slideIndex = 0;
        } 
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(item => item.classList.add('hide'));
        dots.forEach(item => item.classList.remove('dot-active'));

        slides[slideIndex].classList.remove('hide');
        dots[slideIndex].classList.add('dot-active');
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

    dotsWrap.addEventListener('click', (e) => {
        let target = e.target;
        for(let i = 0; i < dots.length; i++) {
            if(target && dots[i].contains(target)){
                currentSlide(i);
            }
        }
    });
};

export default slider;