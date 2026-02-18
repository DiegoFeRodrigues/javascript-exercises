const reverseString = function(texto) {
    arrayInvertido = texto.split("").reverse();
    return arrayInvertido.join("")
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
