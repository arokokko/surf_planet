const calc = () => {

    getTotalPrice('.surf__booking_quantity', '.surf__booking_persons', '.surf__persons_btns', '.surf__quantity_btns', '.type', '#surf_total', 65, true);

    getTotalPrice('.kite__booking_quantity', '.kite__booking_persons', '.kite__persons_btns', '.kite__quantity_btns', '.type', '#kite_total', 50);

    getTotalPrice('.sup__booking_quantity', '.sup__booking_persons', '.sup__persons_btns', '.sup__quantity_btns', '.type', '#sup_total', 45);

    function getTotalPrice(quantitySel, personsSel, personsBtnsSel, quantityBtnsSel, valueSel, totalSel, rate, discount = false) {
        const quantity = document.querySelector(quantitySel),
            persons = document.querySelector(personsSel),
            personsBtns = persons.querySelector(personsBtnsSel),
            personsValue = persons.querySelector(valueSel),
            quantityBtns = quantity.querySelector(quantityBtnsSel),
            quantityValue = quantity.querySelector(valueSel),
            totalValue = document.querySelector(totalSel);

        let quantityDescr = quantityValue.innerHTML.split(' ')[1],
            personsDescr = personsValue.innerHTML.split(' ')[1];
    
        function changeValue(btnsSel, valueSel, sublingSel, text) {
            const btns = btnsSel.querySelectorAll('.btn_booking');
            btnsSel.addEventListener('click', (e) => {
                btns.forEach((item) => {
                    if(e.target && e.target == item) {
                        if(item.classList.contains('minus') && parseInt(valueSel.innerHTML) > 1) {
                            valueSel.innerHTML = `${parseInt(valueSel.innerHTML) - 1} ${checkText(text, parseInt(valueSel.innerHTML) - 1)}`;
                        } else if (item.classList.contains('plus') && parseInt(valueSel.innerHTML) < 12) {
                            valueSel.innerHTML = `${parseInt(valueSel.innerHTML) + 1} ${checkText(text, parseInt(valueSel.innerHTML) + 1)}`;
                        }
                    }
                });
                if(discount && (parseInt(valueSel.innerHTML) > 2 || parseInt(sublingSel.innerHTML) > 2)) {
                    totalValue.innerHTML = `$ ${Math.floor(rate * parseInt(valueSel.innerHTML) * parseInt(sublingSel.innerHTML) * .9)} USD`;
                } else {
                    totalValue.innerHTML = `$ ${rate * parseInt(valueSel.innerHTML) * parseInt(sublingSel.innerHTML)} USD`;
                }
            });
        }
        changeValue(personsBtns, personsValue, quantityValue, personsDescr);
        changeValue(quantityBtns, quantityValue, personsValue, quantityDescr);

        function checkText(sometext, selInner) {
            if(selInner === 1) {
                return sometext.slice(0, -1);
            } else {
                return sometext;
            }
        } 
    }
    
};

export default calc;