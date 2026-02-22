const convertToCelsius = function(temperatura) {
  const conversor = (temperatura - 32) * 5 / 9;
  return Math.round(conversor * 10) / 10;
};

const convertToFahrenheit = function(temperatura) {
  const conversor = (temperatura * 9 / 5) + 32;
  return Math.round(conversor * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-73.3));

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.3));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
