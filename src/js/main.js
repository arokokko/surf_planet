import date from './modules/date';
import carousel from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    date();
    carousel('.main__slider', '.slider-item', '.next', '.prev', '.main__slider_dots', '.main__slider_dot');
    carousel('.surf__carousel__wrapper', '.slider__item', '.next', '.prev');
});