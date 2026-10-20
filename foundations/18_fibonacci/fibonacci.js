
const fibonacci = function(numero) {
  if (numero < 0) {
    return "OOPS";
  }
  let lista = [0, 1];
  for (let indice = 2; indice <= numero; indice++) {
    lista.push(lista[indice-1] + lista[indice-2]);
  }
  return lista[numero];
};

//odin:
 // let anterior = 1;
 // let antesDoAnterior = 0;
 // for (let indice = 2; indice <= numero; indice++) {
 //   atual = anterior + antesDoAnterior;
 //   antesDoAnterior = anterior;
 //   anterior = atual;
 // }
 // return anterior;

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
