document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display'),
        numbers = document.querySelectorAll('.number'),
        operators = document.querySelectorAll('.operator'),
        equals = document.querySelector('.equals'),
        clear = document.querySelector('.clear');

  numbers.forEach(number => {
    number.addEventListener('click', function() {
      display.value += this.getAttribute('data-number');
    });
  });

  operators.forEach(operator => {
    operator.addEventListener('click', function() {
      display.value += this.getAttribute('data-operator');
    });
  });

  equals.addEventListener('click', () => {
      display.value = eval(display.value);
  });

  clear.addEventListener('click', () => {
    display.value = '';
  });
});

  
  