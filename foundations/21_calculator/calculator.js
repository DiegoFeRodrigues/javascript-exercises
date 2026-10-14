const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(lista) {
  return lista.reduce((soma, atual) => soma + atual, 0);
};

const multiply = function(lista) {
  return lista.reduce((soma, atual) => soma * atual);
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function() {
	
};

add(0,0);
add(2,2);
add(2,6);

subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7);

sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);

multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);

power(4, 3);
power(3, 10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
