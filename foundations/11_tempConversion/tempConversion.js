const convertToCelsius = function(temperatura) {
  return (temperatura - 32) * 5 / 9;
};

const convertToFahrenheit = function() {
};

console.log(convertToCelsius(32));
// console.log();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
