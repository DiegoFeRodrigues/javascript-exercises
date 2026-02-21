const sumAll = function(primeiroValor, segundoValor) {
    let soma = 0;
    for (let cont = primeiroValor; cont <= segundoValor; cont++) {
        soma += cont;
    }
    return soma;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
