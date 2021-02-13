import date from './modules/date';
import carousel from './modules/slider';
import calc from './modules/calc';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    date();
    
    carousel('.main__slider', false, '.slider-item', '.next', '.prev', '.main__slider_dots', '.main__slider_dot');
    carousel('.surf__carousel__wrapper');
    carousel('.kite__carousel__wrapper');
    carousel('.sup__carousel__wrapper');
    carousel('.shop__carousel__wrapper', true);
    
    calc();
    tabs('.board__tabs-long');
    tabs('.board__tabs-malibu');
    tabs('.board__tabs-short');
        
    
});