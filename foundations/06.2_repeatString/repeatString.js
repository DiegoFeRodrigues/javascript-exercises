
const lista = [];
const repeatString = function(texto, numero) {
    for (let cont = 0; cont < numero; cont++) {
        lista.push(texto); 
    }
    return lista.join("");
}
console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
