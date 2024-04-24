function checkisNaN(value) {
    return value !== value;
  }

  function checkIsNaN() {
    var inputValue = document.getElementById('enternumber').value;
    var resultElement = document.getElementById('result');
    if (checkisNaN(parseFloat(inputValue))) {
      resultElement.textContent = 'NaN';
    } else {
      resultElement.textContent = 'This is a number';
    }
}