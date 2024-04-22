function pow(firstNumber, secondNumber) {
    let calculator = 1;
    for (let i = 0; i < secondNumber; i++) {
        calculator *= firstNumber;
    }
    return calculator;
}
function calculatePower() {
    let firstNumber = parseInt(document.getElementById('firstNumber').value);
    let secondNumber = parseInt(document.getElementById('secondNumber').value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Not a number');
        return;
    }
    let calculator = pow(firstNumber, secondNumber);
    document.getElementById('calculator').innerText = 'Result = ' + calculator;
}
