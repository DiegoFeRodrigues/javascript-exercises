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

const factorial = function(numero) {
  if (numero == 0 || numero == 1) {
    return 1
  }
  for (let cont = numero - 1; cont > 0; cont--) {
    numero *= cont;
  }
  return numero;
};

  // odin:
  //  const factorial = function(numero) {
  //    resultado = 1;
  //    for (let cont = numero; cont > 0; cont--) {
  //      resultado *= cont;
  //    }
  //  return resultado;
  //  };

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

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
