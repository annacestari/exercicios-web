const clearButton = document.getElementById('clear-button');
const result = document.getElementById('result');
const resultButton = document.getElementById('result-button');

clearButton.addEventListener('click', () => {
  result.value = '';
});

resultButton.addEventListener('click', () => {
  let newResult = eval(result.value);
  result.value = newResult;
});

function showNumberOrOperator(num_op) {
  result.value += num_op;
}
