let display = document.getElementById('display');
let currentNumberHasDecimal = false;

function appendNumber(number) {
    display.value += number;
}

function addOperator(operator) {
    display.value += ' ' + operator + ' ';
    currentNumberHasDecimal = false;
}

function addDecimal() {
    if (!currentNumberHasDecimal) {
        display.value += '.';
        currentNumberHasDecimal = true;
    }
}

function clearAll() {
  display.value = '';
  currentNumberHasDecimal = false;
}

function deleteLastCharacter() {
    if (display.value.slice(-1) === '.') {
        currentNumberHasDecimal = false;
    }
    display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
      display.value = eval(display.value);
      currentNumberHasDecimal = display.value.includes('.');
  } catch {
      display.value = 'Error';
      // for clear the error
      setTimeout(() => { 
          display.value = '';
      }, 1000);
  }
}

// for dark mode 

const checkboxInput = document.getElementById('checkboxInput');
const body = document.body;
const calculator = document.querySelector('.calculator');

checkboxInput.addEventListener('change', function() {
  if (checkboxInput.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
});
