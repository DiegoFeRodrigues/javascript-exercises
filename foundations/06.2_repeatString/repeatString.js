
const repeatString = function(texto, numero) {
    const lista = [];
    for (let cont = 0; cont < numero; cont++) {
        lista.push(texto); 
    }
    return lista.join("");
}
console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
