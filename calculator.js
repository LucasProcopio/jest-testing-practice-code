function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num2 - num1;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  if(num2 === 0) return 'Cannot divide by 0';
  return num1 / num2;
}

module.exports = {
  sum, sub, mult, div
}