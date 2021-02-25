import date from './modules/date';
import carousel from './modules/slider';
import calc from './modules/calc';
import tabs from './modules/tabs';
import burgerMenu from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    date();
    burgerMenu();
    carousel('.main__slider', false, false, '.slider-item', '.next', '.prev', '.main__slider_dots', '.main__slider_dot');
    carousel('.surf__carousel__wrapper', false, true);
    carousel('.kite__carousel__wrapper', false, true);
    carousel('.sup__carousel__wrapper', false, true);
    carousel('.shop__carousel__wrapper', true, true);
    
    calc();
    tabs('.board__tabs-long');
    tabs('.board__tabs-malibu');
    tabs('.board__tabs-short');
    

        
    
});