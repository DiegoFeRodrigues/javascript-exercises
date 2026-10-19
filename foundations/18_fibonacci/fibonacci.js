
// let ultimo;

const fibonacci = function(numero) {
  let lista = [1, 1];
  for (let indice = 2; indice < numero; indice++) {
    lista.push(lista[indice-1] + lista[indice-2]);
    //ultimo = lista[indice];
  }
  return lista.reverse()[0];
  //console.log(lista.reverse()[0]);
  //console.log(ultimo);
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);

// Do not edit below this line
module.exports = fibonacci;
