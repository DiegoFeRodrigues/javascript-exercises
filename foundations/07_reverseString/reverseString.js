const reverseString = function(texto) {
    arrayInvertido = texto.split("").reverse();
    return arrayInvertido.join("")
};

console.log(reverseString("hello"));
console.log(reverseString("hello there"));
console.log(reverseString("123! abc! Hello, Odinite."))
console.log(reverseString(""));
// Do not edit below this line
module.exports = reverseString;
