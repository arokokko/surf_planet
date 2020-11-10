const calc = () => {

    getResult('.surf__booking_quantity', '.surf__booking_persons', '.surf__persons_btns', '.surf__quantity_btns', '.type', '#surf_total', 65);

    function getResult(quantitySelector, personsSelector, personsBtnsSelector, quantityBtnsSelector, valueSelector, totalSelector, rate) {
        const quantity = document.querySelector(quantitySelector),
            persons = document.querySelector(personsSelector),
            personsBtns = persons.querySelector(personsBtnsSelector),
            personsValue = persons.querySelector(valueSelector),
            quantityBtns = quantity.querySelector(quantityBtnsSelector),
            quantityValue = quantity.querySelector(valueSelector),
            totalValue = document.querySelector(totalSelector);

    
        function changeValue(btnsSelector, valueSelector, sublingSelector, text) {
            const btns = btnsSelector.querySelectorAll('.btn_booking');
            btnsSelector.addEventListener('click', (e) => {
                btns.forEach((item) => {
                    if(e.target && e.target == item) {
                        if(item.classList.contains('minus') && parseInt(valueSelector.innerHTML) > 1) {
                            valueSelector.innerHTML = `${parseInt(valueSelector.innerHTML) - 1} ${checkText(text, parseInt(valueSelector.innerHTML) - 1)}`;
                        } else if (item.classList.contains('plus') && parseInt(valueSelector.innerHTML) < 12) {
                            valueSelector.innerHTML = `${parseInt(valueSelector.innerHTML) + 1} ${checkText(text, parseInt(valueSelector.innerHTML) + 1)}`;
                        }
                    }
                });
                totalValue.innerHTML = `$ ${rate * parseInt(valueSelector.innerHTML) * parseInt(sublingSelector.innerHTML)} USD`;
            });
        }
        changeValue(personsBtns, personsValue, quantityValue, 'persons');
        changeValue(quantityBtns, quantityValue, personsValue, 'lessons');

        function checkText(sometext, selectorInner) {
            if(selectorInner === 1) {
                return sometext.slice(0, -1);
            } else {
                return sometext;
            }
        } 
    }
    
};

export default calc;