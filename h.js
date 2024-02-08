function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function clearLastCharacter() {
  const displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}