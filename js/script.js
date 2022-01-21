// test task 1
(function () {
    let numberInput = document.getElementById('numberInput');
    numberInput.oninput = function () {
        let number = numberInput.value;
        let result = new Intl.NumberFormat('ru-RU').format(number)
        document.getElementById('result').innerHTML = result;
    }
})();
// test task 2
(function () {
    let numberInputTwo = document.getElementById('numberInputTwo');
    numberInputTwo.oninput = function () {
        numTwo = numberInputTwo.value;
        if ((numTwo.match(/\.(\d+)/)?.[1].length) === 2) {
            let resultTwo = new Intl.NumberFormat('ru-RU').format(numTwo)
            return document.getElementById('resultTwo').innerHTML = resultTwo;
        } else if ((numTwo.match(/\.(\d+)/)?.[1].length) !== 2) {
            return document.getElementById('resultTwo').innerHTML = ' ';
        }
    }
})();