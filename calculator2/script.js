let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  currentInput = '';
  currentOperator = operator;
}

function calculate() {
  if (currentOperator === '') return;

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (currentOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  firstOperand = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
