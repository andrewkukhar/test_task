(function () {
    let numberInput = document.getElementById('numberInput');
    numberInput.oninput = function () {
        let number = numberInput.value;
        let result = new Intl.NumberFormat('ru-RU').format(number)
        document.getElementById('result').innerHTML = result;
    }
})();