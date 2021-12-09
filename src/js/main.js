import date from './modules/date';
import carousel from './modules/slider';
import calc from './modules/calc';
import tabs from './modules/tabs';
import burgerMenu from './modules/burger';
import scroll from './modules/scroll';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
    date();
    burgerMenu();
    scroll();

    try {
        carousel('.about__carousel__wrapper');
    } catch(e) {}
    
    try {
        carousel('.main__slider', false, false, '.main__slider_dots', '.main__slider_dot');
        carousel('.surf__carousel__wrapper');
        carousel('.kite__carousel__wrapper');
        carousel('.sup__carousel__wrapper');
        carousel('.shop__carousel__wrapper', true, true);
        
        
        
        tabs('.board__tabs-long');
        tabs('.board__tabs-malibu');
        tabs('.board__tabs-short');

        
    } catch(e) {}
    try {
        calc();
    } catch(e) {}
    try {
        form();
    } catch(e) {}
    
    
});