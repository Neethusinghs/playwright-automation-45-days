/*Fahrenheit = Celsius × 9 / 5 + 32
Celsius = (Fahrenheit − 32) × 5 / 9 */
const celsius = 37;
const fahrenheit =212;
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
let celsiusround = fahrenheitToCelsius.toFixed(1);
const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
let fahrenheitround = celsiusToFahrenheit.toFixed(1);
//console.log(celsius + "°C = " + fahrenheitround + "°F" +" /" + " " + fahrenheit + "°F = " + celsiusround + "°C");

//let noparenthesis = fahrenheit - 32 * 5 / 9 //194 because of operator precedence, multiplication and division will be performed first and then subtraction will be performed. So the result will be 194.
//console.log("Without parenthesis: " + noparenthesis.toFixed(1) + "°C");


console.log(celsius + "°C = " + fahrenheitround + "°F");
console.log(fahrenheit + "°F = " + celsiusround + "°C");