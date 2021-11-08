// Project idea by CodeCademy.

// Kelvin's variable, wich is constant.
const kelvin = 293;

/* Variable that subtract kelvin from 273 variable*/
let celsius = kelvin - 273;

// Here we convert fahrenheit to celsius
let fahrenheit = celsius * (9/5) + 32;

/* Method used to round down the fahrenheit number and save it to the farenheit variable*/
fahrenheit = Math.floor(fahrenheit);

// Method used to display the converted temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
