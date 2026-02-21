const sumAll = function(primeiroValor, segundoValor) {
    let soma = 0;
    let maiorValor = 0;
    let menorValor = 0;
    if (primeiroValor > segundoValor) {
        menorValor = segundoValor;
        maiorValor = primeiroValor;
    } else if (primeiroValor < 0 || segundoValor < 0) {
        return "ERROR";
    } else {
        menorValor = primeiroValor;
        maiorValor = segundoValor;
    }
    for (let cont = menorValor; cont <= maiorValor; cont++) {
        soma += cont;
    }
    return soma;
};

console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// Do not edit below this line
module.exports = sumAll;
