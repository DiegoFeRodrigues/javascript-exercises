const removeFromArray = function(lista, ...excluirDado) {
    const novaLista = [];
    for (item of lista) {
        if (!excluirDado.find((itemAexcluir) => itemAexcluir == item))novaLista.push(item);
    }
    return novaLista;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
