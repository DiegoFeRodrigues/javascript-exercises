const convertToCelsius = function(temperatura) {
  const conversor = (temperatura - 32) * 5 / 9;
  return Math.round(conversor * 10) / 10;
};

const convertToFahrenheit = function() {
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-73.3));
// console.log(convertToCelsius());

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
