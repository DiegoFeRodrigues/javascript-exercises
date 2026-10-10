
const palindromes = function (texto) {

  // forma inicial (hardcoded):
  //const textoLimpo = texto.toLowerCase().replace(/[" , .!"]/g, "");

  const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, "");

  const textoInvertido = textoLimpo.split("").reverse().join("");
  
  //logs p/ teste:
    //console.log(texto);
    //console.log(textoLimpo);
    //console.log(textoInvertido);

  if (textoInvertido != textoLimpo) {
    return false;
  }                 //a comparação poderia ser: // return textoInvertido === textoLimpo;
  return true;

  //SOLUÇÃO ODIN:
    //const palindromes = function (string) {
    //// VARIÁVEL CONTENDO APENAS ELEMENTOS VÁLIDOS: 
    //const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    //// CONVERTE P/ LOWERCASE, SEPARA EM LISTA DE CARACTERES INDIVIDUAIS, FILTRA POR CARACTERES VÁLIDOS E REJUNTA COMO NOVA STRING:
    //const cleanedString = string
    //  .toLowerCase()
    //  .split('')
    //  .filter((character) => alphanumerical.includes(character))
    //  .join('');

    //// CRIA NOVA STRING INVERSA PARA COMPARAÇÃO:
    //const reversedString = cleanedString.split('').reverse().join('');

    //// RETORNA O RESULTADO DA COMPARAÇÃO: VERDADEIRO OU FALSO:
    //return cleanedString === reversedString; // FORMA MAIS SIMPLES DE COMPARAR
  //};

};

palindromes("racecar");
palindromes("rac3e3car");
palindromes("A car, a man, a maraca.");
palindromes("racecar!");
palindromes("Racecar!");
palindromes("ZZZZ car, a man, a maracaz.");
palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
