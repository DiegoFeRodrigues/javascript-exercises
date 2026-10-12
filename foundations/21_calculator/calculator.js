const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(lista) {
  return lista.reduce((soma, atual) => soma + atual, 0);
};

const multiply = function() {

};

const power = function() {
	
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

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
