const sumAll = function(primeiroValor, segundoValor) {
    let soma = 0;
    for (let cont = primeiroValor; cont <= segundoValor; cont++) {
        soma += cont;
    }
    return soma;
};

console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
// console.log();

// Do not edit below this line
module.exports = sumAll;
