
const repeatString = function(texto, numero) {
    const lista = [];
    if (numero < 0) {
        return "ERROR"
    } else {
        for (let cont = 0; cont < numero; cont++) {
            lista.push(texto); 
        }
        return lista.join("");
    }
}
console.log(repeatString('hey', 3));
console.log(repeatString('hello', 10));
console.log(repeatString('hi', 1));
console.log(repeatString('bye', 0));
console.log(repeatString('hey', 3));
console.log(repeatString('hey', -3));
// Do not edit below this line
module.exports = repeatString;
