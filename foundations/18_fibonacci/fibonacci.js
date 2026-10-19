
const fibonacci = function(numero) {
  if (numero == 0) {
    return 0;
  }
  if (numero < 1) {
    return "OOPS";
  }
  let lista = [1, 1];
  for (let indice = 2; indice < numero; indice++) {
    lista.push(lista[indice-1] + lista[indice-2]);
  }
  return lista.reverse()[0];
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
