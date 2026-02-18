const removeFromArray = function(lista, excluirDado) {
    lista.splice(lista.indexOf(excluirDado), 1);
    return lista;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
