const leapYears = function(ano) {
    if (ano % 100 !== 0 && ano % 4 === 0) return true;
    return false;
    
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));

// Do not edit below this line
module.exports = leapYears;
