document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelector('.buttons');

    buttons.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const buttonValue = event.target.dataset.value;
            
            if (buttonValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (buttonValue === 'AC') {
                display.value = '';
            } else if (buttonValue === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += buttonValue;
            }
        }
    });
});
