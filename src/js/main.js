import date from './modules/date';
import carousel from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    date();
    carousel('.main__slider', '.slider-item', '.next', '.prev', '.main__slider_dots', '.main__slider_dot');
    carousel('.surf__carousel__wrapper', '.slider__item', '.next', '.prev');
    carousel('.kite__carousel__wrapper', '.slider__item', '.next', '.prev');
    carousel('.sup__carousel__wrapper', '.slider__item', '.next', '.prev');
    calc();
});