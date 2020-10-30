const date = () => {
    const day = document.querySelector('#day'),
        month = document.querySelector('#month'),
        year = document.querySelector('#year');

    const currentDate = new Date();

    year.innerHTML = currentDate.getFullYear();
    month.innerHTML = addZero(currentDate.getMonth() + 1);
    day.innerHTML = addZero(currentDate.getDate());

    function addZero(num) {
        if(num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
};

export default date;