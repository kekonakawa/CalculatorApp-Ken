const calculatorValue = document.querySelector('.calcDisplay');
const keys = document.querySelector('.calcKeys');
const clearDisplay = document.querySelector('.clear');
const calcSymbols = document.querySelectorAll('.operator');
const equalsSymbol = document.querySelector('.equals');

let firstValue = '';
let secondValue = '';
let symbol = '';
let isSecondValue = false;

function calculate () {
    if (firstValue && secondValue && symbol) {
        let result;
        if (symbol === '+') {
            result = +firstValue + +secondValue;
        } else if (symbol === '-') {
            result = +firstValue - +secondValue;
        } else if (symbol === '*') {
            result = +firstValue * +secondValue;
        } else if (symbol === '/') {
            result = +firstValue / +secondValue;
        }
        calculatorValue.textContent = result;
        firstValue = result;
        secondValue = '';
        symbol = '';
        isSecondValue = false;
    }
}

keys.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }

    const buttonValue = e.target.textContent;

    if (e.target === clearDisplay) {
        calculatorValue.textContent = '0';
        firstValue = '';
        secondValue ='';
        symbol = '';
        isSecondValue = false;
        return;

    } else if (!isNaN(buttonValue) || buttonValue === '.') {
        if (isSecondValue === false) {
            firstValue += buttonValue;
            calculatorValue.textContent = firstValue;
        } else {
            secondValue += buttonValue;
            calculatorValue.textContent = secondValue;
        }
        
    } else if (e.target === equalsSymbol) {
            calculate ();

        } else {
            symbol = buttonValue;
            isSecondValue = true;
        }
});

calcSymbols.forEach(button => {
    button.addEventListener('click', function() {
        symbol = button.textContent;
        isSecondValue = true;
    });
});

