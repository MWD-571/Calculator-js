let numbers = document.querySelectorAll('.numbers');
let result = document.querySelector('.result span');
let signs = document.querySelectorAll('.sign');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let negative = document.querySelector('.negative');
let percent = document.querySelector('.percentage');
let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultValue = 0;
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function (params) {
        params.preventDefault();
        let atr = params.target.getAttribute('value');
        if (isFirstValue === false) {
            getFirstValue(atr);
        }
        if (isSecondValue === false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = '';
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue != '' && sign != '') {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', function (event) {
            event.preventDefault();
            sign = event.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = '';
    if (sign === '+') {
        resultValue = firstValue + secondValue;
    } else if (sign === '-') {
        resultValue = firstValue - secondValue;
    } else if (sign === 'x') {
        resultValue = firstValue * secondValue;
    } else if (sign === '/') {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = '';
    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);

    }
}
negative.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != '') {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != '') {
        resultValue = -resultValue
    }
    result.innerHTML = resultValue;
})
percent.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != '') {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != '') {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
})
clear.addEventListener('click', () => {
    result.innerHTML = '';
    firstValue = '';
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    resultValue = 0;
})