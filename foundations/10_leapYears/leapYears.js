const leapYears = function(ano) {
    const seculo = ano % 100 === 0; 
    const divisivelPor4 = ano % 4 === 0; 
    const divisivelPor400 = ano % 400 === 0; 

    return !seculo && divisivelPor4 || 
            seculo && divisivelPor400 ? true : false;

    /* 
    outra forma - meio poluída, dificulta a leitura:
    if (ano % 100 !== 0 && ano % 4 === 0) return true;
    return ano % 100 === 0 && ano % 400 === 0 ? true : false;
    */

};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));


// Do not edit below this line
module.exports = leapYears;
